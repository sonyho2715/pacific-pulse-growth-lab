// Stripe Plan Configuration for Pacific Pulse
// Maps internal plans to Stripe Price IDs

import Stripe from 'stripe';
import { PlanTier } from './plans';
import { stripe } from './stripe';

// Stripe Price IDs - Set these in your Stripe Dashboard
// Then update these values or use environment variables
export const STRIPE_PRICES: Record<PlanTier, { monthly: string; yearly: string }> = {
  starter: {
    monthly: process.env.STRIPE_PRICE_STARTER_MONTHLY || 'price_starter_monthly',
    yearly: process.env.STRIPE_PRICE_STARTER_YEARLY || 'price_starter_yearly',
  },
  growth: {
    monthly: process.env.STRIPE_PRICE_GROWTH_MONTHLY || 'price_growth_monthly',
    yearly: process.env.STRIPE_PRICE_GROWTH_YEARLY || 'price_growth_yearly',
  },
  professional: {
    monthly: process.env.STRIPE_PRICE_PRO_MONTHLY || 'price_pro_monthly',
    yearly: process.env.STRIPE_PRICE_PRO_YEARLY || 'price_pro_yearly',
  },
  enterprise: {
    monthly: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY || 'price_enterprise_monthly',
    yearly: process.env.STRIPE_PRICE_ENTERPRISE_YEARLY || 'price_enterprise_yearly',
  },
};

// Setup fee product IDs
export const STRIPE_SETUP_FEES: Record<PlanTier, string> = {
  starter: process.env.STRIPE_PRICE_SETUP_STARTER || 'price_setup_starter',
  growth: process.env.STRIPE_PRICE_SETUP_GROWTH || 'price_setup_growth',
  professional: process.env.STRIPE_PRICE_SETUP_PRO || 'price_setup_pro',
  enterprise: process.env.STRIPE_PRICE_SETUP_ENTERPRISE || 'price_setup_enterprise',
};

// Create a checkout session for new subscriptions
export async function createCheckoutSession({
  plan,
  billingCycle,
  customerEmail,
  successUrl,
  cancelUrl,
  clientReferenceId,
  includeSetupFee = true,
}: {
  plan: PlanTier;
  billingCycle: 'monthly' | 'yearly';
  customerEmail?: string;
  successUrl: string;
  cancelUrl: string;
  clientReferenceId?: string;
  includeSetupFee?: boolean;
}): Promise<Stripe.Checkout.Session> {
  const priceId = STRIPE_PRICES[plan][billingCycle];

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    {
      price: priceId,
      quantity: 1,
    },
  ];

  // Add setup fee as one-time charge
  if (includeSetupFee) {
    lineItems.push({
      price: STRIPE_SETUP_FEES[plan],
      quantity: 1,
    });
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: lineItems,
    success_url: successUrl,
    cancel_url: cancelUrl,
    customer_email: customerEmail,
    client_reference_id: clientReferenceId,
    subscription_data: {
      metadata: {
        plan,
        billingCycle,
      },
    },
    metadata: {
      plan,
      billingCycle,
    },
    allow_promotion_codes: true,
    billing_address_collection: 'required',
  });

  return session;
}

// Create a customer portal session for managing subscription
export async function createPortalSession({
  customerId,
  returnUrl,
}: {
  customerId: string;
  returnUrl: string;
}): Promise<Stripe.BillingPortal.Session> {
  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });

  return session;
}

// Get subscription details
export async function getSubscription(subscriptionId: string): Promise<Stripe.Subscription> {
  return stripe.subscriptions.retrieve(subscriptionId);
}

// Cancel subscription
export async function cancelSubscription(
  subscriptionId: string,
  cancelAtPeriodEnd = true
): Promise<Stripe.Subscription> {
  if (cancelAtPeriodEnd) {
    return stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true,
    });
  }

  return stripe.subscriptions.cancel(subscriptionId);
}

// Update subscription to new plan
export async function updateSubscription({
  subscriptionId,
  newPlan,
  billingCycle,
}: {
  subscriptionId: string;
  newPlan: PlanTier;
  billingCycle: 'monthly' | 'yearly';
}): Promise<Stripe.Subscription> {
  const subscription = await stripe.subscriptions.retrieve(subscriptionId);
  const newPriceId = STRIPE_PRICES[newPlan][billingCycle];

  return stripe.subscriptions.update(subscriptionId, {
    items: [
      {
        id: subscription.items.data[0].id,
        price: newPriceId,
      },
    ],
    proration_behavior: 'create_prorations',
    metadata: {
      plan: newPlan,
      billingCycle,
    },
  });
}

// Get plan from Stripe subscription
export function getPlanFromSubscription(subscription: Stripe.Subscription): PlanTier | null {
  const plan = subscription.metadata?.plan as PlanTier;
  if (plan && ['starter', 'growth', 'professional', 'enterprise'].includes(plan)) {
    return plan;
  }
  return null;
}

// Webhook event handlers
export async function handleSubscriptionCreated(subscription: Stripe.Subscription): Promise<void> {
  const plan = getPlanFromSubscription(subscription);
  const customerId = subscription.customer as string;

  console.log(`New subscription created: ${subscription.id}, Plan: ${plan}, Customer: ${customerId}`);

  // TODO: Update your database with the subscription info
  // await db.customer.update({
  //   where: { stripeCustomerId: customerId },
  //   data: {
  //     subscriptionId: subscription.id,
  //     plan: plan,
  //     subscriptionStatus: subscription.status,
  //   },
  // });
}

export async function handleSubscriptionUpdated(subscription: Stripe.Subscription): Promise<void> {
  const plan = getPlanFromSubscription(subscription);
  const customerId = subscription.customer as string;

  console.log(`Subscription updated: ${subscription.id}, Plan: ${plan}, Status: ${subscription.status}`);

  // TODO: Update your database
}

export async function handleSubscriptionDeleted(subscription: Stripe.Subscription): Promise<void> {
  const customerId = subscription.customer as string;

  console.log(`Subscription cancelled: ${subscription.id}, Customer: ${customerId}`);

  // TODO: Update your database, maybe downgrade to free tier
}

// Helper to create all products and prices in Stripe (run once during setup)
export async function setupStripeProducts(): Promise<void> {
  const plans = [
    { id: 'starter', name: 'Starter', monthlyPrice: 4900, yearlyPrice: 46800, setupFee: 29900 },
    { id: 'growth', name: 'Growth', monthlyPrice: 9900, yearlyPrice: 94800, setupFee: 49900 },
    { id: 'professional', name: 'Professional', monthlyPrice: 19900, yearlyPrice: 190800, setupFee: 99900 },
    { id: 'enterprise', name: 'Enterprise', monthlyPrice: 49900, yearlyPrice: 478800, setupFee: 249900 },
  ];

  for (const plan of plans) {
    // Create product
    const product = await stripe.products.create({
      name: `Pacific Pulse ${plan.name}`,
      description: `${plan.name} plan subscription`,
      metadata: { planId: plan.id },
    });

    // Create monthly price
    const monthlyPrice = await stripe.prices.create({
      product: product.id,
      unit_amount: plan.monthlyPrice,
      currency: 'usd',
      recurring: { interval: 'month' },
      metadata: { planId: plan.id, billingCycle: 'monthly' },
    });

    // Create yearly price
    const yearlyPrice = await stripe.prices.create({
      product: product.id,
      unit_amount: plan.yearlyPrice,
      currency: 'usd',
      recurring: { interval: 'year' },
      metadata: { planId: plan.id, billingCycle: 'yearly' },
    });

    // Create setup fee product and price
    const setupProduct = await stripe.products.create({
      name: `Pacific Pulse ${plan.name} Setup Fee`,
      description: `One-time setup fee for ${plan.name} plan`,
      metadata: { planId: plan.id, type: 'setup' },
    });

    const setupPrice = await stripe.prices.create({
      product: setupProduct.id,
      unit_amount: plan.setupFee,
      currency: 'usd',
      metadata: { planId: plan.id, type: 'setup' },
    });

    console.log(`Created ${plan.name} plan:`);
    console.log(`  Monthly Price ID: ${monthlyPrice.id}`);
    console.log(`  Yearly Price ID: ${yearlyPrice.id}`);
    console.log(`  Setup Fee Price ID: ${setupPrice.id}`);
  }
}
