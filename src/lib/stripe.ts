import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-10-29.clover",
  typescript: true,
});

// Subscription plans matching the pricing page
export const SUBSCRIPTION_PLANS = {
  starter: {
    name: "Starter",
    price: 497,
    priceId: process.env.STRIPE_STARTER_PRICE_ID!,
    features: [
      "AI-Powered Content Creation",
      "Basic SEO Optimization",
      "Social Media Integration",
      "Monthly Performance Reports",
      "Email Support",
    ],
  },
  growth: {
    name: "Growth",
    price: 997,
    priceId: process.env.STRIPE_GROWTH_PRICE_ID!,
    features: [
      "Everything in Starter",
      "Advanced AI Analytics",
      "Multi-channel Campaign Management",
      "A/B Testing Tools",
      "Priority Support",
      "Weekly Strategy Calls",
    ],
    popular: true,
  },
  scale: {
    name: "Scale",
    price: 1997,
    priceId: process.env.STRIPE_SCALE_PRICE_ID!,
    features: [
      "Everything in Growth",
      "Custom AI Model Training",
      "Dedicated Account Manager",
      "White-label Solutions",
      "API Access",
      "24/7 Priority Support",
    ],
  },
} as const;

export type SubscriptionPlan = keyof typeof SUBSCRIPTION_PLANS;
