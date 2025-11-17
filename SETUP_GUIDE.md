# Pacific Pulse Growth Lab - Setup Guide

## Overview

We've successfully built a complete admin dashboard, authentication system, email notifications, and Stripe payment integration for the Pacific Pulse Growth Lab platform.

## What's Been Built

### ✅ 1. Admin Dashboard
- **Location**: `/src/app/admin/`
- **Features**:
  - Main dashboard with statistics (applications, contacts, bookings)
  - Applications management (list and detail views)
  - Contacts management
  - Bookings management
  - Professional sidebar navigation
  - Protected routes with role-based access

### ✅ 2. Authentication System
- **Technology**: NextAuth.js v5 with Prisma adapter
- **Features**:
  - Email/password authentication
  - JWT-based sessions
  - Role-based access control (admin/user)
  - Login page at `/login`
  - Middleware protection for admin routes
  - Automatic redirects for unauthorized access

### ✅ 3. Email Notification System
- **Technology**: Resend
- **Location**: `/src/lib/email.ts`
- **Email Types**:
  1. Application confirmation (to applicant)
  2. Admin application notification
  3. Contact form confirmation
  4. Booking confirmation
- **Integration**: Automatically sends emails when forms are submitted via API routes

### ✅ 4. Stripe Payment Integration
- **Location**: `/src/lib/stripe.ts` and `/src/app/api/stripe/`
- **Features**:
  - Checkout session creation
  - Webhook handling for subscription events
  - Customer portal for subscription management
  - Three pricing tiers: Starter ($497), Growth ($997), Scale ($1,997)
  - Automatic subscription status tracking in database

### ✅ 5. User Dashboard
- **Location**: `/src/app/dashboard/page.tsx`
- **Features**:
  - Subscription status display
  - Account details
  - Manage subscription button
  - Links to upgrade/view plans

### ✅ 6. Database Schema Updates
- **Added to User model**:
  - `stripeCustomerId`
  - `stripeSubscriptionId`
  - `stripePriceId`
  - `stripeCurrentPeriodEnd`
  - `subscriptionPlan`
  - `subscriptionStatus`

### ✅ 7. Admin Seed Script
- **Location**: `/scripts/seed-admin.ts`
- **Purpose**: Creates initial admin user
- **Default credentials**: sony@pacificpulseai.com / Admin123!

## Environment Variables Required

Add these to your `.env` file:

```bash
# Resend Email
RESEND_API_KEY="your_resend_api_key_here"

# Stripe
STRIPE_SECRET_KEY="your_stripe_secret_key_here"
STRIPE_WEBHOOK_SECRET="your_stripe_webhook_secret_here"
STRIPE_STARTER_PRICE_ID="your_stripe_starter_price_id_here"
STRIPE_GROWTH_PRICE_ID="your_stripe_growth_price_id_here"
STRIPE_SCALE_PRICE_ID="your_stripe_scale_price_id_here"
```

## Setup Steps

### Step 1: Database Schema Deployment

⚠️ **Current Issue**: The Supabase pooler connection is hanging when trying to push schema changes.

**Option A: Use Supabase Web Interface**
1. Go to https://app.supabase.com/project/mzowcdikituelbzxuvvd/editor
2. Open the SQL editor
3. Run the migration SQL manually (see `MIGRATION.sql` below)

**Option B: Try Direct Connection**
```bash
DATABASE_URL="postgresql://postgres.mzowcdikituelbzxuvvd:***REMOVED***@aws-1-us-west-1.pooler.supabase.com:5432/postgres" npx prisma db push --accept-data-loss
```

### Step 2: Get Resend API Key
1. Go to https://resend.com
2. Sign up or log in
3. Create a new API key
4. Add domain: pacificpulseai.com
5. Verify domain with DNS records
6. Add key to `.env` as `RESEND_API_KEY`

### Step 3: Setup Stripe
1. Go to https://stripe.com and create account
2. Get your secret key from dashboard
3. Create three subscription products:
   - Starter: $497/month
   - Growth: $997/month
   - Scale: $1,997/month
4. Get the price IDs for each product
5. Add all keys to `.env`
6. Setup webhook endpoint: `https://pacificpulseai.com/api/stripe/webhook`
7. Subscribe to these events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_succeeded`
   - `invoice.payment_failed`
8. Get webhook secret and add to `.env`

### Step 4: Seed Admin User
Once database schema is deployed:
```bash
npx tsx scripts/seed-admin.ts
```

### Step 5: Deploy to Vercel
1. Add all environment variables to Vercel dashboard
2. Push changes to GitHub
3. Vercel will auto-deploy

## Testing Checklist

Once everything is set up:

### Authentication
- [ ] Can log in with admin credentials
- [ ] Redirected to login when accessing /admin without auth
- [ ] Can log out successfully

### Admin Dashboard
- [ ] Dashboard shows correct statistics
- [ ] Applications list loads
- [ ] Can view individual application details
- [ ] Contacts page loads
- [ ] Bookings page loads

### Email Notifications
- [ ] Application submission sends confirmation to applicant
- [ ] Application submission sends notification to admin
- [ ] Contact form sends confirmation
- [ ] Booking sends confirmation

### Stripe Integration
- [ ] Can create checkout session
- [ ] Checkout redirects to Stripe
- [ ] Successful payment updates user subscription
- [ ] User dashboard shows subscription status
- [ ] Can access customer portal

## File Structure

```
src/
├── app/
│   ├── admin/
│   │   ├── applications/
│   │   │   ├── [id]/page.tsx
│   │   │   └── page.tsx
│   │   ├── bookings/page.tsx
│   │   ├── contacts/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/
│   │   ├── apply/route.ts (with email integration)
│   │   ├── booking/route.ts (with email integration)
│   │   ├── contact/route.ts (with email integration)
│   │   └── stripe/
│   │       ├── checkout/route.ts
│   │       ├── portal/route.ts
│   │       └── webhook/route.ts
│   ├── dashboard/page.tsx
│   └── login/page.tsx
├── components/
│   └── AdminNav.tsx
├── lib/
│   ├── auth.ts
│   ├── email.ts
│   └── stripe.ts
└── types/
    └── next-auth.d.ts
```

## Next Steps (Optional Enhancements)

1. **Analytics Dashboard**: Build charts and graphs for performance metrics
2. **Email Templates**: Create branded HTML email templates
3. **Approval Workflow**: Add functionality to approve/reject buttons in application detail page
4. **Calendar Integration**: Connect bookings to Google Calendar
5. **CRM Integration**: Connect to HubSpot or Pipedrive
6. **User Management**: Add ability to manage users from admin panel
7. **Export Data**: Add CSV export for applications, contacts, bookings
8. **Search & Filters**: Add search and filtering to admin tables

## Troubleshooting

### Database Connection Issues
If `npx prisma db push` hangs, the Supabase pooler might be the issue. Use the direct connection or Supabase web interface to run migrations manually.

### Email Not Sending
- Verify RESEND_API_KEY is correct
- Check domain is verified in Resend dashboard
- Look for error messages in console logs

### Stripe Webhook Not Working
- Verify webhook URL is correct
- Check webhook secret matches
- Test with Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe/webhook`

## Support

For issues or questions:
- Check Vercel deployment logs
- Review browser console for errors
- Check Supabase logs
- Review Stripe dashboard for payment issues
