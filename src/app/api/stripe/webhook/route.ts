import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        if (session.mode === "subscription") {
          const subscriptionId = session.subscription as string;
          const customerId = session.customer as string;
          const userId = session.metadata?.userId;

          if (!userId) {
            console.error("No userId in session metadata");
            break;
          }

          // Retrieve subscription details
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          const priceId = subscription.items.data[0]?.price.id;

          await prisma.user.update({
            where: { id: userId },
            data: {
              stripeCustomerId: customerId,
              stripeSubscriptionId: subscriptionId,
              stripePriceId: priceId,
              subscriptionStatus: "active",
              subscriptionPlan: session.metadata?.plan || null,
              stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
            },
          });

          console.log(`✅ Subscription activated for user ${userId}`);
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const user = await prisma.user.findUnique({
          where: { stripeCustomerId: customerId },
        });

        if (user) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              subscriptionStatus: subscription.status,
              stripePriceId: subscription.items.data[0]?.price.id,
              stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
            },
          });

          console.log(`✅ Subscription updated for user ${user.id}`);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const user = await prisma.user.findUnique({
          where: { stripeCustomerId: customerId },
        });

        if (user) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              subscriptionStatus: "canceled",
              stripeSubscriptionId: null,
              stripePriceId: null,
              stripeCurrentPeriodEnd: null,
            },
          });

          console.log(`✅ Subscription canceled for user ${user.id}`);
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object as Stripe.Invoice;
        const subscriptionId = invoice.subscription as string;
        const customerId = invoice.customer as string;

        if (subscriptionId) {
          const user = await prisma.user.findUnique({
            where: { stripeCustomerId: customerId },
          });

          if (user) {
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);

            await prisma.user.update({
              where: { id: user.id },
              data: {
                subscriptionStatus: "active",
                stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
              },
            });

            console.log(`✅ Payment succeeded for user ${user.id}`);
          }
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;

        const user = await prisma.user.findUnique({
          where: { stripeCustomerId: customerId },
        });

        if (user) {
          await prisma.user.update({
            where: { id: user.id },
            data: {
              subscriptionStatus: "past_due",
            },
          });

          console.log(`⚠️ Payment failed for user ${user.id}`);
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
