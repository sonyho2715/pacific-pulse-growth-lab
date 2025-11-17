# API Keys Setup Guide

## ✅ Completed
- [x] Database schema deployed
- [x] Admin user created (sony@pacificpulseai.com / Admin123!)
- [x] All code written and ready

## 🔑 Get API Keys

### 1. Resend Email (Required for Email Notifications)

**I've opened the Resend signup page for you.**

Steps:
1. Sign up at https://resend.com/signup
2. Verify your email address
3. Go to API Keys section
4. Create a new API key (name it "Pacific Pulse Production")
5. Copy the API key
6. Add domain:
   - Go to Domains section
   - Add domain: `pacificpulseai.com`
   - Add DNS records to GoDaddy:
     - TXT record for domain verification
     - MX records for email sending
   - Wait for verification (usually takes a few minutes)
7. Update `.env`:
   ```bash
   RESEND_API_KEY="re_xxxxxxxxxxxxx"
   ```

### 2. Stripe Payment (Required for Subscriptions)

**I've opened the Stripe signup page for you.**

Steps:
1. Sign up at https://dashboard.stripe.com/register
2. Complete account setup
3. Go to Developers → API Keys
4. Copy the Secret key (starts with `sk_test_` or `sk_live_`)
5. Create three subscription products:
   - **Starter Plan**: $497/month
     - Go to Products → Add Product
     - Name: "Starter Plan"
     - Pricing: $497 recurring monthly
     - Copy the Price ID (starts with `price_`)
   - **Growth Plan**: $997/month (mark as popular)
     - Same process
     - Copy Price ID
   - **Scale Plan**: $1,997/month
     - Same process
     - Copy Price ID
6. Setup webhook:
   - Go to Developers → Webhooks
   - Click "Add endpoint"
   - URL: `https://pacificpulseai.com/api/stripe/webhook`
   - Events to send:
     - `checkout.session.completed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_succeeded`
     - `invoice.payment_failed`
   - Copy the Signing secret (starts with `whsec_`)
7. Update `.env`:
   ```bash
   STRIPE_SECRET_KEY="sk_test_xxxxxxxxxxxxx"
   STRIPE_WEBHOOK_SECRET="whsec_xxxxxxxxxxxxx"
   STRIPE_STARTER_PRICE_ID="price_xxxxxxxxxxxxx"
   STRIPE_GROWTH_PRICE_ID="price_xxxxxxxxxxxxx"
   STRIPE_SCALE_PRICE_ID="price_xxxxxxxxxxxxx"
   ```

## 📝 Update Vercel Environment Variables

Once you have all API keys:

1. Go to https://vercel.com/sony-hos-projects/pacific-pulse-growth-lab/settings/environment-variables
2. Add these variables:
   - `RESEND_API_KEY`
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `STRIPE_STARTER_PRICE_ID`
   - `STRIPE_GROWTH_PRICE_ID`
   - `STRIPE_SCALE_PRICE_ID`
   - `NEXTAUTH_URL` (set to `https://pacificpulseai.com`)
3. All other variables should already be there

## 🚀 Deploy

Once API keys are set:

```bash
git add .
git commit -m "Add admin dashboard, authentication, email, and payment system"
git push
```

Vercel will automatically deploy!

## 🧪 Test Everything

### Test Authentication
1. Go to https://pacificpulseai.com/login
2. Login with: sony@pacificpulseai.com / Admin123!
3. You should be redirected to /admin

### Test Admin Dashboard
1. Check all pages load:
   - /admin (main dashboard)
   - /admin/applications
   - /admin/contacts
   - /admin/bookings
2. Verify data displays correctly

### Test Email System
1. Submit a test application from the homepage
2. Check your email (sony@pacificpulseai.com) for admin notification
3. Check applicant receives confirmation email

### Test Stripe Integration
1. Go to /pricing
2. Click "Get Started" on any plan
3. Should redirect to Stripe Checkout
4. Use test card: 4242 4242 4242 4242
5. Complete checkout
6. Verify subscription shows in /dashboard
7. Test customer portal access

## 🔐 Security Checklist

- [ ] Change admin password after first login
- [ ] Add NEXTAUTH_URL to Vercel env vars
- [ ] Verify all API keys are in Vercel (not just .env)
- [ ] Test webhook security (Stripe should verify signatures)
- [ ] Enable Stripe live mode when ready for production

## 📊 Monitor

After deployment:
- Check Vercel logs for errors
- Monitor Stripe dashboard for payments
- Check Resend dashboard for email deliverability
- Review Supabase logs for database queries

## 🎉 You're Done!

Once all API keys are set and deployed, everything will work:
- ✅ Users can apply from homepage
- ✅ Email confirmations sent automatically
- ✅ Admin dashboard shows all submissions
- ✅ Users can subscribe via Stripe
- ✅ Subscriptions tracked in database
- ✅ Customer portal for managing subscriptions

Your admin login:
- Email: sony@pacificpulseai.com
- Password: Admin123!
- Change this after first login!
