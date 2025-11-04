// Simple in-memory rate limiter for API routes
// For production, consider using Redis or Upstash Rate Limit

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

export interface RateLimitConfig {
  interval: number; // Time window in milliseconds
  uniqueTokenPerInterval: number; // Max requests per interval
}

export class RateLimiter {
  private interval: number;
  private uniqueTokenPerInterval: number;

  constructor(config: RateLimitConfig) {
    this.interval = config.interval;
    this.uniqueTokenPerInterval = config.uniqueTokenPerInterval;
  }

  async check(identifier: string): Promise<{ success: boolean; remaining: number; reset: number }> {
    const now = Date.now();
    const tokenData = store[identifier];

    if (!tokenData || now > tokenData.resetTime) {
      // Reset or create new entry
      store[identifier] = {
        count: 1,
        resetTime: now + this.interval,
      };

      return {
        success: true,
        remaining: this.uniqueTokenPerInterval - 1,
        reset: store[identifier].resetTime,
      };
    }

    if (tokenData.count < this.uniqueTokenPerInterval) {
      tokenData.count++;
      return {
        success: true,
        remaining: this.uniqueTokenPerInterval - tokenData.count,
        reset: tokenData.resetTime,
      };
    }

    return {
      success: false,
      remaining: 0,
      reset: tokenData.resetTime,
    };
  }
}

// Pre-configured rate limiters for different endpoints
export const chatRateLimiter = new RateLimiter({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 10, // 10 requests per minute
});

export const applyRateLimiter = new RateLimiter({
  interval: 60 * 60 * 1000, // 1 hour
  uniqueTokenPerInterval: 3, // 3 applications per hour
});

export const contactRateLimiter = new RateLimiter({
  interval: 60 * 60 * 1000, // 1 hour
  uniqueTokenPerInterval: 5, // 5 contacts per hour
});

// Helper function to get client identifier from request
export function getClientIdentifier(request: Request): string {
  // Try to get IP from various headers (works with most hosting platforms)
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip"); // Cloudflare

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  // Fallback to a generic identifier
  return "unknown";
}

// Cleanup function to prevent memory leaks (run periodically)
export function cleanupRateLimitStore() {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}

// Auto-cleanup every 10 minutes
if (typeof setInterval !== "undefined") {
  setInterval(cleanupRateLimitStore, 10 * 60 * 1000);
}
