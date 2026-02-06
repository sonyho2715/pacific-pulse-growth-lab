// Pacific Pulse Service Plans Configuration
// Monthly retainer model: Predictable monthly investment

export type PlanTier = 'starter' | 'growth' | 'scale' | 'full-service';

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
    monthly: number; // Monthly retainer
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
    tagline: 'Essential maintenance & support',
    description: 'Perfect for small businesses that need reliable hosting, maintenance, and support.',
    price: {
      monthly: 1500,
      yearlyMonthly: 1250,
    },
    features: {
      website: [
        { name: 'Website hosting & security', included: true },
        { name: 'Monthly maintenance & updates', included: true },
        { name: 'Basic analytics reporting', included: true },
        { name: 'Mobile responsive design', included: true },
        { name: 'SSL certificate', included: true },
      ],
      automation: [
        { name: 'AI Chatbot', included: false },
        { name: 'Email marketing automation', included: false },
        { name: 'Automated booking system', included: false },
      ],
      support: [
        { name: 'Email support', included: true, description: '48hr response' },
        { name: 'Content updates', included: true, limit: '2/month' },
        { name: 'Phone support', included: false },
        { name: 'Strategy calls', included: false },
      ],
    },
    cta: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Marketing + maintenance',
    description: 'For businesses ready to grow with social media management and SEO optimization.',
    price: {
      monthly: 2500,
      yearlyMonthly: 2100,
    },
    recommended: true,
    features: {
      website: [
        { name: 'Everything in Starter, plus:', included: true },
        { name: 'Advanced SEO optimization', included: true },
        { name: 'Monthly analytics & insights', included: true },
        { name: 'Performance optimization', included: true },
      ],
      automation: [
        { name: 'AI Chatbot', included: false },
        { name: 'Social media posting', included: true, description: '3x/week' },
        { name: 'Email marketing', included: true, limit: '2,500 contacts' },
      ],
      support: [
        { name: 'Priority support', included: true, description: '24hr response' },
        { name: 'Content updates', included: true, limit: '5/month' },
        { name: 'Phone support', included: false },
        { name: 'Monthly strategy calls', included: true },
      ],
    },
    cta: 'Start Growing',
  },
  {
    id: 'scale',
    name: 'Scale',
    tagline: 'Full digital growth partner',
    description: 'Complete digital marketing solution with advanced automation and optimization.',
    price: {
      monthly: 3500,
      yearlyMonthly: 2900,
    },
    features: {
      website: [
        { name: 'Everything in Growth, plus:', included: true },
        { name: 'A/B testing & optimization', included: true },
        { name: 'Conversion rate optimization', included: true },
        { name: 'Advanced content strategy', included: true },
      ],
      automation: [
        { name: 'AI Chatbot', included: true, description: 'Add $500/mo' },
        { name: 'Social media posting', included: true, description: '5x/week' },
        { name: 'Email marketing', included: true, limit: '10,000 contacts' },
        { name: 'Marketing automation workflows', included: true },
      ],
      support: [
        { name: 'Priority support', included: true, description: '12hr response' },
        { name: 'Content updates', included: true, limit: 'Unlimited' },
        { name: 'Phone support', included: true },
        { name: 'Bi-weekly strategy calls', included: true },
      ],
    },
    cta: 'Scale Up',
  },
  {
    id: 'full-service',
    name: 'Full-Service',
    tagline: 'Your outsourced digital team',
    description: 'Complete digital team with AI automation, paid ads, and dedicated account management.',
    price: {
      monthly: 5000,
      yearlyMonthly: 4200,
    },
    features: {
      website: [
        { name: 'Everything in Scale, plus:', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Priority development queue', included: true },
        { name: 'Quarterly business reviews', included: true },
      ],
      automation: [
        { name: 'AI Chatbot', included: true, description: 'Included' },
        { name: 'Social media posting', included: true, description: 'Daily' },
        { name: 'Email marketing', included: true, limit: 'Unlimited' },
        { name: 'Paid ads management', included: true },
        { name: 'Marketing automation workflows', included: true },
      ],
      support: [
        { name: 'Premium support', included: true, description: '4hr response' },
        { name: 'Content updates', included: true, limit: 'Unlimited' },
        { name: 'Phone support', included: true, description: 'Direct line' },
        { name: 'Weekly strategy calls', included: true },
        { name: 'Dedicated account manager', included: true },
      ],
    },
    cta: 'Go Full-Service',
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
  return monthlyRate * 12;
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
        growth: false,
        scale: false,
        'full-service': false,
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
