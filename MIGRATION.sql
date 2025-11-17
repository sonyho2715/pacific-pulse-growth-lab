-- SQL Migration for Pacific Pulse Growth Lab
-- Run this in Supabase SQL Editor if `prisma db push` fails

-- Add Stripe-related columns to User table
ALTER TABLE "User"
ADD COLUMN IF NOT EXISTS "stripeCustomerId" TEXT,
ADD COLUMN IF NOT EXISTS "stripeSubscriptionId" TEXT,
ADD COLUMN IF NOT EXISTS "stripePriceId" TEXT,
ADD COLUMN IF NOT EXISTS "stripeCurrentPeriodEnd" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "subscriptionPlan" TEXT,
ADD COLUMN IF NOT EXISTS "subscriptionStatus" TEXT DEFAULT 'inactive';

-- Create unique indexes for Stripe IDs
CREATE UNIQUE INDEX IF NOT EXISTS "User_stripeCustomerId_key" ON "User"("stripeCustomerId");
CREATE UNIQUE INDEX IF NOT EXISTS "User_stripeSubscriptionId_key" ON "User"("stripeSubscriptionId");

-- Create index on stripeCustomerId for faster lookups
CREATE INDEX IF NOT EXISTS "User_stripeCustomerId_idx" ON "User"("stripeCustomerId");

-- Verify the changes
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'User'
ORDER BY ordinal_position;
