// Pacific Pulse Service Plans Configuration
// Productized service model: Project fee + Monthly retainer

export type PlanTier = 'starter' | 'ai-starter' | 'growth' | 'professional' | 'enterprise';

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
  description: string;
  price: {
    project: number; // One-time project fee
    monthly: number; // Ongoing monthly
    yearlyMonthly: number; // Monthly rate if paid yearly
  };
  features: {
    website: PlanFeature[];
    automation: PlanFeature[];
    support: PlanFeature[];
  };
  recommended?: boolean;
  cta: string;
}

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Get online fast',
    description: 'Perfect for small businesses ready to establish their online presence with a professional website.',
    price: {
      project: 1500,
      monthly: 79,
      yearlyMonthly: 65,
    },
    features: {
      website: [
        { name: 'Custom Website', included: true, description: 'Up to 5 pages' },
        { name: 'Mobile Responsive', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Custom Domain Setup', included: true },
        { name: 'Basic SEO', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Maps', included: true },
        { name: 'Blog', included: false },
        { name: 'Booking System', included: false },
        { name: 'E-commerce', included: false },
      ],
      automation: [
        { name: 'AI Chatbot', included: false },
        { name: 'Email Marketing', included: false },
        { name: 'Lead Capture Forms', included: true, description: 'Basic' },
        { name: 'Analytics Dashboard', included: true, description: 'Google Analytics' },
        { name: 'Automated Notifications', included: false },
      ],
      support: [
        { name: 'Hosting Included', included: true },
        { name: 'Email Support', included: true, description: '48hr response' },
        { name: 'Phone Support', included: false },
        { name: 'Content Updates', included: true, limit: '2/month' },
        { name: 'Monthly Check-ins', included: false },
        { name: 'Priority Support', included: false },
      ],
    },
    cta: 'Get Started',
  },
  {
    id: 'ai-starter',
    name: 'AI Starter',
    tagline: 'Try AI-powered automation',
    description: 'Perfect entry point for businesses wanting AI chatbot automation without the full investment.',
    price: {
      project: 2500,
      monthly: 199,
      yearlyMonthly: 165,
    },
    recommended: true,
    features: {
      website: [
        { name: 'Custom Website', included: true, description: 'Up to 8 pages' },
        { name: 'Mobile Responsive', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Custom Domain Setup', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Maps', included: true },
        { name: 'Blog', included: false },
        { name: 'Booking System', included: true, description: 'Basic calendar sync' },
        { name: 'E-commerce', included: false },
      ],
      automation: [
        { name: 'AI Chatbot', included: true, description: 'Basic training' },
        { name: 'Email Marketing', included: false },
        { name: 'Lead Capture Forms', included: true, description: 'Smart forms' },
        { name: 'Analytics Dashboard', included: true, description: 'Google Analytics' },
        { name: 'Automated Notifications', included: true, description: 'Basic reminders' },
      ],
      support: [
        { name: 'Hosting Included', included: true },
        { name: 'Email Support', included: true, description: '24hr response' },
        { name: 'Phone Support', included: false },
        { name: 'Content Updates', included: true, limit: '3/month' },
        { name: 'Monthly Check-ins', included: false },
        { name: 'Priority Support', included: false },
      ],
    },
    cta: 'Try AI Now',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Scale your bookings',
    description: 'For service businesses ready to automate bookings and grow their customer base with marketing.',
    price: {
      project: 3500,
      monthly: 149,
      yearlyMonthly: 125,
    },
    features: {
      website: [
        { name: 'Custom Website', included: true, description: 'Up to 15 pages' },
        { name: 'Mobile Responsive', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Custom Domain Setup', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Maps', included: true },
        { name: 'Blog', included: true, description: 'With CMS' },
        { name: 'Booking System', included: true, description: 'Calendar sync' },
        { name: 'E-commerce', included: false },
      ],
      automation: [
        { name: 'AI Chatbot', included: false },
        { name: 'Email Marketing', included: true, limit: '2,500 contacts' },
        { name: 'Lead Capture Forms', included: true, description: 'Advanced' },
        { name: 'Analytics Dashboard', included: true, description: 'Full suite' },
        { name: 'Automated Notifications', included: true, description: 'Booking reminders' },
      ],
      support: [
        { name: 'Hosting Included', included: true },
        { name: 'Email Support', included: true, description: '24hr response' },
        { name: 'Phone Support', included: false },
        { name: 'Content Updates', included: true, limit: '5/month' },
        { name: 'Monthly Check-ins', included: true },
        { name: 'Priority Support', included: false },
      ],
    },
    cta: 'Start Growing',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'AI-powered growth',
    description: 'Full-featured solution with AI chatbot that captures leads and books appointments 24/7.',
    price: {
      project: 6000,
      monthly: 397,
      yearlyMonthly: 330,
    },
    features: {
      website: [
        { name: 'Custom Website', included: true, description: 'Unlimited pages' },
        { name: 'Mobile Responsive', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Custom Domain Setup', included: true },
        { name: 'Advanced SEO', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Maps', included: true },
        { name: 'Blog', included: true, description: 'With CMS' },
        { name: 'Booking System', included: true, description: 'Multi-service' },
        { name: 'E-commerce', included: true, description: 'Up to 100 products' },
      ],
      automation: [
        { name: 'AI Chatbot', included: true, description: 'Trained on your business' },
        { name: 'Email Marketing', included: true, limit: '10,000 contacts' },
        { name: 'Lead Capture Forms', included: true, description: 'Smart forms' },
        { name: 'Analytics Dashboard', included: true, description: 'Custom reports' },
        { name: 'Automated Notifications', included: true, description: 'Full automation' },
      ],
      support: [
        { name: 'Hosting Included', included: true },
        { name: 'Email Support', included: true, description: '4hr response' },
        { name: 'Phone Support', included: true },
        { name: 'Content Updates', included: true, limit: '10/month' },
        { name: 'Monthly Check-ins', included: true, description: 'Bi-weekly' },
        { name: 'Priority Support', included: true },
      ],
    },
    cta: 'Go Professional',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Full-service partner',
    description: 'Custom solutions with dedicated support for established businesses with complex needs.',
    price: {
      project: 10000,
      monthly: 997,
      yearlyMonthly: 830,
    },
    features: {
      website: [
        { name: 'Custom Website', included: true, description: 'Custom development' },
        { name: 'Mobile Responsive', included: true },
        { name: 'SSL Certificate', included: true },
        { name: 'Custom Domain Setup', included: true, description: 'Multiple domains' },
        { name: 'Advanced SEO', included: true },
        { name: 'Contact Form', included: true },
        { name: 'Google Maps', included: true },
        { name: 'Blog', included: true, description: 'Multi-author' },
        { name: 'Booking System', included: true, description: 'Multi-location' },
        { name: 'E-commerce', included: true, description: 'Unlimited products' },
      ],
      automation: [
        { name: 'AI Chatbot', included: true, description: 'Custom trained + voice' },
        { name: 'Email Marketing', included: true, limit: 'Unlimited' },
        { name: 'Lead Capture Forms', included: true, description: 'CRM integration' },
        { name: 'Analytics Dashboard', included: true, description: 'White-label' },
        { name: 'Automated Notifications', included: true, description: 'Custom workflows' },
      ],
      support: [
        { name: 'Hosting Included', included: true, description: 'Dedicated' },
        { name: 'Email Support', included: true, description: '1hr response' },
        { name: 'Phone Support', included: true, description: 'Direct line' },
        { name: 'Content Updates', included: true, limit: 'Unlimited' },
        { name: 'Monthly Check-ins', included: true, description: 'Weekly' },
        { name: 'Priority Support', included: true, description: 'Dedicated manager' },
      ],
    },
    cta: 'Contact Us',
  },
];

// Helper functions
export function getPlanById(id: PlanTier): Plan | undefined {
  return PLANS.find(plan => plan.id === id);
}

export function getMonthlyPrice(plan: Plan, billingCycle: 'monthly' | 'yearly'): number {
  return billingCycle === 'yearly' ? plan.price.yearlyMonthly : plan.price.monthly;
}

export function getYearlySavings(plan: Plan): number {
  return (plan.price.monthly - plan.price.yearlyMonthly) * 12;
}

export function getYearlySavingsPercent(plan: Plan): number {
  return Math.round(((plan.price.monthly - plan.price.yearlyMonthly) / plan.price.monthly) * 100);
}

export function getTotalFirstYear(plan: Plan, billingCycle: 'monthly' | 'yearly'): number {
  const monthlyRate = getMonthlyPrice(plan, billingCycle);
  return plan.price.project + (monthlyRate * 12);
}

// Feature flags for checking plan capabilities
export function planHasFeature(planId: PlanTier, category: keyof Plan['features'], featureName: string): boolean {
  const plan = getPlanById(planId);
  if (!plan) return false;

  const feature = plan.features[category].find(f => f.name === featureName);
  return feature?.included ?? false;
}

// Get all features for comparison table
export function getFeatureComparison() {
  const categories = ['website', 'automation', 'support'] as const;
  const comparison: { category: string; features: { name: string; plans: Record<PlanTier, string | number | boolean> }[] }[] = [];

  for (const category of categories) {
    const featureNames = new Set<string>();
    PLANS.forEach(plan => {
      plan.features[category].forEach(f => featureNames.add(f.name));
    });

    const features: { name: string; plans: Record<PlanTier, string | number | boolean> }[] = [];

    featureNames.forEach(name => {
      const planValues: Record<PlanTier, string | number | boolean> = {
        starter: false,
        'ai-starter': false,
        growth: false,
        professional: false,
        enterprise: false,
      };

      PLANS.forEach(plan => {
        const feature = plan.features[category].find(f => f.name === name);
        if (feature?.included) {
          planValues[plan.id] = feature.limit || feature.description || true;
        }
      });

      features.push({ name, plans: planValues });
    });

    comparison.push({ category, features });
  }

  return comparison;
}
