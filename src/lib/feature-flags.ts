// Feature Flags System for Pacific Pulse
// Controls what features are available based on subscription plan

import { PlanTier } from './plans';

// Feature definitions with plan requirements
// New plan tiers: starter | growth | scale | full-service
export const FEATURES = {
  // Website Features
  CUSTOM_PAGES: {
    starter: 5,
    growth: 8,
    scale: 10,
    'full-service': -1, // -1 = unlimited
  },
  BLOG: {
    starter: false,
    growth: true,
    scale: true,
    'full-service': true,
  },
  ECOMMERCE: {
    starter: false,
    growth: false,
    scale: true,
    'full-service': true,
  },
  PRODUCT_LIMIT: {
    starter: 0,
    growth: 0,
    scale: 100,
    'full-service': -1,
  },
  BOOKING_SYSTEM: {
    starter: false,
    growth: true,
    scale: true,
    'full-service': true,
  },
  MULTI_LOCATION: {
    starter: false,
    growth: false,
    scale: false,
    'full-service': true,
  },

  // Marketing Features
  TRANSACTIONAL_EMAILS: {
    starter: 1000,
    growth: 2500,
    scale: 10000,
    'full-service': -1,
  },
  MARKETING_EMAILS: {
    starter: 0,
    growth: 2500,
    scale: 10000,
    'full-service': -1,
  },
  EMAIL_AUTOMATION: {
    starter: false,
    growth: true,
    scale: true,
    'full-service': true,
  },
  NEWSLETTER: {
    starter: false,
    growth: true,
    scale: true,
    'full-service': true,
  },
  ADVANCED_ANALYTICS: {
    starter: false,
    growth: true,
    scale: true,
    'full-service': true,
  },

  // Support Features
  PRIORITY_SUPPORT: {
    starter: false,
    growth: true, // 24hr response
    scale: true, // 12hr response
    'full-service': true, // 4hr response
  },
  PHONE_SUPPORT: {
    starter: false,
    growth: false,
    scale: true,
    'full-service': true,
  },
  MONTHLY_CHECKINS: {
    starter: false,
    growth: true, // Monthly strategy calls
    scale: true, // Bi-weekly strategy calls
    'full-service': true, // Weekly strategy calls
  },
  CONTENT_UPDATES_LIMIT: {
    starter: 2,
    growth: 5,
    scale: -1, // Unlimited
    'full-service': -1, // Unlimited
  },

  // Integration Features
  STRIPE_PAYMENTS: {
    starter: false,
    growth: true,
    scale: true,
    'full-service': true,
  },
  CRM_INTEGRATION: {
    starter: false,
    growth: false,
    scale: true,
    'full-service': true,
  },
  AI_CHATBOT: {
    starter: false,
    growth: false, // Available for +$500/mo
    scale: true, // Included (with note: Add $500/mo)
    'full-service': true, // Fully included
  },
  CUSTOM_AI_TRAINING: {
    starter: false,
    growth: false,
    scale: false,
    'full-service': true,
  },
} as const;

export type FeatureKey = keyof typeof FEATURES;

// Check if a feature is enabled for a plan
export function isFeatureEnabled(feature: FeatureKey, plan: PlanTier): boolean {
  const featureConfig = FEATURES[feature];
  const value = featureConfig[plan];

  if (typeof value === 'boolean') {
    return value;
  }

  // For numeric values, check if > 0 or -1 (unlimited)
  return value !== 0;
}

// Get the limit for a feature (returns -1 for unlimited, 0 for disabled)
export function getFeatureLimit(feature: FeatureKey, plan: PlanTier): number {
  const featureConfig = FEATURES[feature];
  const value = featureConfig[plan];

  if (typeof value === 'boolean') {
    return value ? -1 : 0;
  }

  return value;
}

// Check if usage is within plan limits
export function isWithinLimit(feature: FeatureKey, plan: PlanTier, currentUsage: number): boolean {
  const limit = getFeatureLimit(feature, plan);

  // -1 means unlimited
  if (limit === -1) return true;

  return currentUsage < limit;
}

// Get remaining quota for a feature
export function getRemainingQuota(feature: FeatureKey, plan: PlanTier, currentUsage: number): number | null {
  const limit = getFeatureLimit(feature, plan);

  // Unlimited
  if (limit === -1) return null;

  // Disabled
  if (limit === 0) return 0;

  return Math.max(0, limit - currentUsage);
}

// Middleware helper to check feature access
export function requireFeature(feature: FeatureKey, plan: PlanTier): void {
  if (!isFeatureEnabled(feature, plan)) {
    throw new FeatureNotAvailableError(feature, plan);
  }
}

// Custom error for feature access
export class FeatureNotAvailableError extends Error {
  constructor(
    public feature: FeatureKey,
    public currentPlan: PlanTier
  ) {
    super(`Feature "${feature}" is not available on the ${currentPlan} plan`);
    this.name = 'FeatureNotAvailableError';
  }
}

// Get upgrade suggestion for a feature
export function getUpgradeSuggestion(feature: FeatureKey, currentPlan: PlanTier): PlanTier | null {
  const plans: PlanTier[] = ['starter', 'growth', 'scale', 'full-service'];
  const currentIndex = plans.indexOf(currentPlan);

  for (let i = currentIndex + 1; i < plans.length; i++) {
    if (isFeatureEnabled(feature, plans[i])) {
      return plans[i];
    }
  }

  return null;
}

// React hook-friendly feature check
export function createFeatureChecker(plan: PlanTier) {
  return {
    can: (feature: FeatureKey) => isFeatureEnabled(feature, plan),
    limit: (feature: FeatureKey) => getFeatureLimit(feature, plan),
    isWithin: (feature: FeatureKey, usage: number) => isWithinLimit(feature, plan, usage),
    remaining: (feature: FeatureKey, usage: number) => getRemainingQuota(feature, plan, usage),
    upgrade: (feature: FeatureKey) => getUpgradeSuggestion(feature, plan),
  };
}
