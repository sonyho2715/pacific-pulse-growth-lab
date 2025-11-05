/**
 * Environment Variable Validation
 * Validates required environment variables at build and runtime
 */

interface EnvConfig {
  // Database
  DATABASE_URL: string;

  // AI API
  ANTHROPIC_API_KEY: string;

  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  SUPABASE_SERVICE_ROLE_KEY: string;

  // Google Sheets (Optional)
  GOOGLE_SHEET_ID?: string;
  GOOGLE_SERVICE_ACCOUNT_EMAIL?: string;
  GOOGLE_PRIVATE_KEY?: string;

  // Email (Optional)
  RESEND_API_KEY?: string;
}

const requiredEnvVars = [
  'DATABASE_URL',
  'ANTHROPIC_API_KEY',
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
] as const;

const optionalEnvVars = [
  'GOOGLE_SHEET_ID',
  'GOOGLE_SERVICE_ACCOUNT_EMAIL',
  'GOOGLE_PRIVATE_KEY',
  'RESEND_API_KEY',
] as const;

function validateEnv(): EnvConfig {
  const missing: string[] = [];
  const env: Partial<EnvConfig> = {};

  // Check required variables
  for (const key of requiredEnvVars) {
    const value = process.env[key];
    if (!value || value === 'placeholder' || value.includes('your-') || value.includes('YOUR_')) {
      missing.push(key);
    } else {
      env[key] = value;
    }
  }

  // Add optional variables if present
  for (const key of optionalEnvVars) {
    const value = process.env[key];
    if (value && value !== 'placeholder' && !value.includes('your-') && !value.includes('YOUR_')) {
      env[key] = value;
    }
  }

  // Throw error if any required variables are missing
  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missing.map(v => `  - ${v}`).join('\n')}\n\n` +
      `Please check your .env file and ensure all required variables are set.\n` +
      `See .env.example for reference.`
    );
  }

  return env as EnvConfig;
}

// Validate environment variables on module load
export const env = validateEnv();

// Helper to check if optional features are available
export const hasGoogleSheets = !!(
  env.GOOGLE_SHEET_ID &&
  env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
  env.GOOGLE_PRIVATE_KEY
);

export const hasEmail = !!env.RESEND_API_KEY;
