// Pacific Pulse Service Plans Configuration
// Use this to define what each plan includes and pricing

export type PlanTier = 'starter' | 'growth' | 'professional' | 'enterprise';

export interface PlanFeature {
  name: string;
  included: boolean;
  limit?: string | number;
  description?: string;
}

export interface Plan {
  id: PlanTier;
  name: string;
  tagline: string;
  price: {
    monthly: number;
    yearly: number; // per month when paid yearly
    setup: number;
  };
  features: {
    website: PlanFeature[];
    marketing: PlanFeature[];
    support: PlanFeature[];
    integrations: PlanFeature[];
  };
  recommended?: boolean;
  cta: string;
  ctaLink: string;
}

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for new businesses getting online',
    price: {
      monthly: 49,
      yearly: 39,
      setup: 299,
    },
    features: {
      website: [
        { name: 'Custom Website', included: true, description: '5 pages' },
        { name: 'Mobile Responsive', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Custom Domain', included: true },
        { name: 'Basic SEO', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Maps', included: true },
        { name: 'Blog', included: false },
        { name: 'E-commerce', included: false },
        { name: 'Booking System', included: false },
      ],
      marketing: [
        { name: 'Transactional Emails', included: true, limit: '1,000/month' },
        { name: 'Marketing Emails', included: false },
        { name: 'Email Automation', included: false },
        { name: 'Newsletter', included: false },
        { name: 'Analytics Dashboard', included: true, description: 'Basic' },
        { name: 'Social Media Links', included: true },
      ],
      support: [
        { name: 'Email Support', included: true, description: '48hr response' },
        { name: 'Phone Support', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Monthly Check-ins', included: false },
        { name: 'Content Updates', included: true, limit: '2/month' },
      ],
      integrations: [
        { name: 'Google Analytics', included: true },
        { name: 'Vercel Analytics', included: true },
        { name: 'Stripe Payments', included: false },
        { name: 'CRM Integration', included: false },
        { name: 'AI Chatbot', included: false },
      ],
    },
    cta: 'Get Started',
    ctaLink: '/contact?plan=starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'For businesses ready to scale',
    price: {
      monthly: 99,
      yearly: 79,
      setup: 499,
    },
    recommended: true,
    features: {
      website: [
        { name: 'Custom Website', included: true, description: '10 pages' },
        { name: 'Mobile Responsive', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Custom Domain', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Maps', included: true },
        { name: 'Blog', included: true },
        { name: 'E-commerce', included: false },
        { name: 'Booking System', included: true },
      ],
      marketing: [
        { name: 'Transactional Emails', included: true, limit: '5,000/month' },
        { name: 'Marketing Emails', included: true, limit: '2,500/month' },
        { name: 'Email Automation', included: true, description: 'Basic sequences' },
        { name: 'Newsletter', included: true },
        { name: 'Analytics Dashboard', included: true, description: 'Advanced' },
        { name: 'Social Media Links', included: true },
      ],
      support: [
        { name: 'Email Support', included: true, description: '24hr response' },
        { name: 'Phone Support', included: false },
        { name: 'Priority Support', included: false },
        { name: 'Monthly Check-ins', included: true },
        { name: 'Content Updates', included: true, limit: '5/month' },
      ],
      integrations: [
        { name: 'Google Analytics', included: true },
        { name: 'Vercel Analytics', included: true },
        { name: 'Stripe Payments', included: true },
        { name: 'CRM Integration', included: false },
        { name: 'AI Chatbot', included: false },
      ],
    },
    cta: 'Start Growing',
    ctaLink: '/contact?plan=growth',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Full-featured solution for established businesses',
    price: {
      monthly: 199,
      yearly: 159,
      setup: 999,
    },
    features: {
      website: [
        { name: 'Custom Website', included: true, description: 'Unlimited pages' },
        { name: 'Mobile Responsive', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Custom Domain', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Maps', included: true },
        { name: 'Blog', included: true },
        { name: 'E-commerce', included: true, description: 'Up to 100 products' },
        { name: 'Booking System', included: true },
      ],
      marketing: [
        { name: 'Transactional Emails', included: true, limit: '20,000/month' },
        { name: 'Marketing Emails', included: true, limit: '10,000/month' },
        { name: 'Email Automation', included: true, description: 'Advanced flows' },
        { name: 'Newsletter', included: true },
        { name: 'Analytics Dashboard', included: true, description: 'Full suite' },
        { name: 'Social Media Links', included: true },
      ],
      support: [
        { name: 'Email Support', included: true, description: '4hr response' },
        { name: 'Phone Support', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Monthly Check-ins', included: true },
        { name: 'Content Updates', included: true, limit: '10/month' },
      ],
      integrations: [
        { name: 'Google Analytics', included: true },
        { name: 'Vercel Analytics', included: true },
        { name: 'Stripe Payments', included: true },
        { name: 'CRM Integration', included: true },
        { name: 'AI Chatbot', included: true },
      ],
    },
    cta: 'Go Professional',
    ctaLink: '/contact?plan=professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Custom solutions for large organizations',
    price: {
      monthly: 499,
      yearly: 399,
      setup: 2499,
    },
    features: {
      website: [
        { name: 'Custom Website', included: true, description: 'Unlimited + custom features' },
        { name: 'Mobile Responsive', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Custom Domain', included: true, description: 'Multiple domains' },
        { name: 'Advanced SEO', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Maps', included: true },
        { name: 'Blog', included: true },
        { name: 'E-commerce', included: true, description: 'Unlimited products' },
        { name: 'Booking System', included: true, description: 'Multi-location' },
      ],
      marketing: [
        { name: 'Transactional Emails', included: true, limit: 'Unlimited' },
        { name: 'Marketing Emails', included: true, limit: 'Unlimited' },
        { name: 'Email Automation', included: true, description: 'Custom workflows' },
        { name: 'Newsletter', included: true },
        { name: 'Analytics Dashboard', included: true, description: 'Custom reports' },
        { name: 'Social Media Links', included: true },
      ],
      support: [
        { name: 'Email Support', included: true, description: '1hr response' },
        { name: 'Phone Support', included: true, description: 'Dedicated line' },
        { name: 'Priority Support', included: true },
        { name: 'Monthly Check-ins', included: true, description: 'Weekly available' },
        { name: 'Content Updates', included: true, limit: 'Unlimited' },
      ],
      integrations: [
        { name: 'Google Analytics', included: true },
        { name: 'Vercel Analytics', included: true },
        { name: 'Stripe Payments', included: true },
        { name: 'CRM Integration', included: true },
        { name: 'AI Chatbot', included: true, description: 'Custom trained' },
      ],
    },
    cta: 'Contact Sales',
    ctaLink: '/contact?plan=enterprise',
  },
];

// Helper functions
export function getPlanById(id: PlanTier): Plan | undefined {
  return PLANS.find(plan => plan.id === id);
}

export function getPlanPrice(plan: Plan, billingCycle: 'monthly' | 'yearly'): number {
  return billingCycle === 'yearly' ? plan.price.yearly : plan.price.monthly;
}

export function getYearlySavings(plan: Plan): number {
  return (plan.price.monthly - plan.price.yearly) * 12;
}

export function getYearlySavingsPercent(plan: Plan): number {
  return Math.round(((plan.price.monthly - plan.price.yearly) / plan.price.monthly) * 100);
}

// Feature flags for checking plan capabilities
export function planHasFeature(planId: PlanTier, category: keyof Plan['features'], featureName: string): boolean {
  const plan = getPlanById(planId);
  if (!plan) return false;

  const feature = plan.features[category].find(f => f.name === featureName);
  return feature?.included ?? false;
}

// Get all features that differ between plans
export function getFeatureComparison() {
  const allFeatures: { category: string; name: string; plans: Record<PlanTier, boolean | string | number> }[] = [];

  const categories = ['website', 'marketing', 'support', 'integrations'] as const;

  for (const category of categories) {
    const featureNames = new Set<string>();
    PLANS.forEach(plan => {
      plan.features[category].forEach(f => featureNames.add(f.name));
    });

    featureNames.forEach(name => {
      const comparison: Record<PlanTier, boolean | string | number> = {
        starter: false,
        growth: false,
        professional: false,
        enterprise: false,
      };

      PLANS.forEach(plan => {
        const feature = plan.features[category].find(f => f.name === name);
        if (feature?.included) {
          comparison[plan.id] = feature.limit || feature.description || true;
        }
      });

      allFeatures.push({ category, name, plans: comparison });
    });
  }

  return allFeatures;
}
