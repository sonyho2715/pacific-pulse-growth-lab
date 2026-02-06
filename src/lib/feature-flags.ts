// Feature Flags System for Pacific Pulse
// Controls what features are available based on subscription plan

import { PlanTier } from './plans';

// Feature definitions with plan requirements
export const FEATURES = {
  // Website Features
  CUSTOM_PAGES: {
    starter: 5,
    'ai-starter': 8,
    growth: 10,
    professional: -1, // -1 = unlimited
    enterprise: -1,
  },
  BLOG: {
    starter: false,
    'ai-starter': false,
    growth: true,
    professional: true,
    enterprise: true,
  },
  ECOMMERCE: {
    starter: false,
    'ai-starter': false,
    growth: false,
    professional: true,
    enterprise: true,
  },
  PRODUCT_LIMIT: {
    starter: 0,
    'ai-starter': 0,
    growth: 0,
    professional: 100,
    enterprise: -1,
  },
  BOOKING_SYSTEM: {
    starter: false,
    'ai-starter': true,
    growth: true,
    professional: true,
    enterprise: true,
  },
  MULTI_LOCATION: {
    starter: false,
    'ai-starter': false,
    growth: false,
    professional: false,
    enterprise: true,
  },

  // Marketing Features
  TRANSACTIONAL_EMAILS: {
    starter: 1000,
    'ai-starter': 2000,
    growth: 5000,
    professional: 20000,
    enterprise: -1,
  },
  MARKETING_EMAILS: {
    starter: 0,
    'ai-starter': 0,
    growth: 2500,
    professional: 10000,
    enterprise: -1,
  },
  EMAIL_AUTOMATION: {
    starter: false,
    'ai-starter': false,
    growth: true,
    professional: true,
    enterprise: true,
  },
  NEWSLETTER: {
    starter: false,
    'ai-starter': false,
    growth: true,
    professional: true,
    enterprise: true,
  },
  ADVANCED_ANALYTICS: {
    starter: false,
    'ai-starter': true,
    growth: true,
    professional: true,
    enterprise: true,
  },

  // Support Features
  PRIORITY_SUPPORT: {
    starter: false,
    'ai-starter': false,
    growth: false,
    professional: true,
    enterprise: true,
  },
  PHONE_SUPPORT: {
    starter: false,
    'ai-starter': false,
    growth: false,
    professional: true,
    enterprise: true,
  },
  MONTHLY_CHECKINS: {
    starter: false,
    'ai-starter': false,
    growth: true,
    professional: true,
    enterprise: true,
  },
  CONTENT_UPDATES_LIMIT: {
    starter: 2,
    'ai-starter': 3,
    growth: 5,
    professional: 10,
    enterprise: -1,
  },

  // Integration Features
  STRIPE_PAYMENTS: {
    starter: false,
    'ai-starter': true,
    growth: true,
    professional: true,
    enterprise: true,
  },
  CRM_INTEGRATION: {
    starter: false,
    'ai-starter': false,
    growth: false,
    professional: true,
    enterprise: true,
  },
  AI_CHATBOT: {
    starter: false,
    'ai-starter': true,
    growth: false,
    professional: true,
    enterprise: true,
  },
  CUSTOM_AI_TRAINING: {
    starter: false,
    'ai-starter': false,
    growth: false,
    professional: false,
    enterprise: true,
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
  const plans: PlanTier[] = ['starter', 'ai-starter', 'growth', 'professional', 'enterprise'];
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
