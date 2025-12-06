import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { stripe, WEBSITE_PLANS, WebsitePlan } from "@/lib/stripe";

const checkoutSchema = z.object({
  plan: z.enum(["starter", "growth", "professional", "enterprise"]),
  billingCycle: z.enum(["monthly", "yearly"]),
  email: z.string().email().optional(),
  includeSetupFee: z.boolean().default(true),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = checkoutSchema.parse(body);

    const { plan, billingCycle, email, includeSetupFee } = validated;
    const selectedPlan = WEBSITE_PLANS[plan as WebsitePlan];

    if (!selectedPlan) {
      return NextResponse.json(
        { error: "Invalid plan selected" },
        { status: 400 }
      );
    }

    // Build line items
    const lineItems: Array<{
      price: string;
      quantity: number;
    }> = [];

    // Add recurring subscription
    const priceId = selectedPlan.priceId[billingCycle];
    if (!priceId || priceId.startsWith("price_") === false) {
      // Price ID not configured - return helpful error
      return NextResponse.json(
        {
          error: "Stripe prices not configured",
          message: "Please set up Stripe price IDs in environment variables"
        },
        { status: 503 }
      );
    }

    lineItems.push({
      price: priceId,
      quantity: 1,
    });

    // Add one-time setup fee
    if (includeSetupFee) {
      const setupPriceId = selectedPlan.priceId.setup;
      if (setupPriceId && !setupPriceId.startsWith("price_") === false) {
        lineItems.push({
          price: setupPriceId,
          quantity: 1,
        });
      }
    }

    // Determine URLs
    const baseUrl = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_URL || "http://localhost:3000";
    const successUrl = `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/pricing?canceled=true`;

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: email,
      allow_promotion_codes: true,
      billing_address_collection: "required",
      metadata: {
        plan,
        billingCycle,
        planType: "website",
      },
      subscription_data: {
        metadata: {
          plan,
          billingCycle,
          planType: "website",
        },
      },
    });

    return NextResponse.json({
      url: session.url,
      sessionId: session.id
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid request", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
