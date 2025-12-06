import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-10-29.clover",
  typescript: true,
});

// =============================================================================
// WEBSITE SERVICES - For small business websites ($49-$499/month)
// =============================================================================
export const WEBSITE_PLANS = {
  starter: {
    name: "Starter",
    tagline: "Perfect for new businesses getting online",
    price: { monthly: 49, yearly: 39, setup: 299 },
    priceId: {
      monthly: process.env.STRIPE_WEB_STARTER_MONTHLY!,
      yearly: process.env.STRIPE_WEB_STARTER_YEARLY!,
      setup: process.env.STRIPE_WEB_STARTER_SETUP!,
    },
    features: [
      "5-page custom website",
      "Mobile responsive design",
      "SSL certificate",
      "Custom domain",
      "Basic SEO",
      "Contact form",
      "Google Maps integration",
      "1,000 transactional emails/month",
      "2 content updates/month",
      "48hr email support",
    ],
  },
  growth: {
    name: "Growth",
    tagline: "For businesses ready to scale",
    price: { monthly: 99, yearly: 79, setup: 499 },
    priceId: {
      monthly: process.env.STRIPE_WEB_GROWTH_MONTHLY!,
      yearly: process.env.STRIPE_WEB_GROWTH_YEARLY!,
      setup: process.env.STRIPE_WEB_GROWTH_SETUP!,
    },
    features: [
      "10-page custom website",
      "Everything in Starter",
      "Blog system",
      "Booking system",
      "Advanced SEO",
      "5,000 transactional emails/month",
      "2,500 marketing emails/month",
      "Email automation",
      "Newsletter",
      "Stripe payments",
      "5 content updates/month",
      "24hr email support",
      "Monthly check-ins",
    ],
    popular: true,
  },
  professional: {
    name: "Professional",
    tagline: "Full-featured solution for established businesses",
    price: { monthly: 199, yearly: 159, setup: 999 },
    priceId: {
      monthly: process.env.STRIPE_WEB_PRO_MONTHLY!,
      yearly: process.env.STRIPE_WEB_PRO_YEARLY!,
      setup: process.env.STRIPE_WEB_PRO_SETUP!,
    },
    features: [
      "Unlimited pages",
      "Everything in Growth",
      "E-commerce (100 products)",
      "Advanced analytics",
      "20,000 transactional emails/month",
      "10,000 marketing emails/month",
      "CRM integration",
      "AI chatbot",
      "10 content updates/month",
      "4hr email support",
      "Phone support",
      "Priority support",
    ],
  },
  enterprise: {
    name: "Enterprise",
    tagline: "Custom solutions for large organizations",
    price: { monthly: 499, yearly: 399, setup: 2499 },
    priceId: {
      monthly: process.env.STRIPE_WEB_ENTERPRISE_MONTHLY!,
      yearly: process.env.STRIPE_WEB_ENTERPRISE_YEARLY!,
      setup: process.env.STRIPE_WEB_ENTERPRISE_SETUP!,
    },
    features: [
      "Unlimited everything",
      "Everything in Professional",
      "Multi-location support",
      "Custom AI training",
      "Unlimited emails",
      "Unlimited content updates",
      "1hr email support",
      "Dedicated phone line",
      "Weekly check-ins available",
      "Custom integrations",
      "White-label options",
    ],
  },
} as const;

export type WebsitePlan = keyof typeof WEBSITE_PLANS;

// =============================================================================
// AGENCY SERVICES - For full-service marketing ($497-$1997/month)
// =============================================================================
export const AGENCY_PLANS = {
  starter: {
    name: "Agency Starter",
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
    name: "Agency Growth",
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
    name: "Agency Scale",
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

export type AgencyPlan = keyof typeof AGENCY_PLANS;

// Legacy export for backward compatibility
export const SUBSCRIPTION_PLANS = AGENCY_PLANS;
export type SubscriptionPlan = AgencyPlan;

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

export function getWebsitePlanPrice(
  plan: WebsitePlan,
  billingCycle: "monthly" | "yearly"
): number {
  return WEBSITE_PLANS[plan].price[billingCycle];
}

export function getWebsiteYearlySavings(plan: WebsitePlan): number {
  const { monthly, yearly } = WEBSITE_PLANS[plan].price;
  return (monthly - yearly) * 12;
}

export function getWebsiteYearlySavingsPercent(plan: WebsitePlan): number {
  const { monthly, yearly } = WEBSITE_PLANS[plan].price;
  return Math.round(((monthly - yearly) / monthly) * 100);
}
