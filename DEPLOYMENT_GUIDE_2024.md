# 🚀 Pacific Pulse Growth Lab - Deployment Guide

**Last Updated:** November 3, 2025

This guide covers deploying your updated website to GitHub, Railway (database), and Vercel (hosting).

---

## ✅ Step 1: GitHub (COMPLETED)

Your code is now pushed to GitHub with all the latest security and optimization fixes!

- **Repository**: https://github.com/sonyho2715/pacific-pulse-growth-lab
- **Latest Commit**: Security hardening and database optimization
- **Status**: ✅ Up to date

---

## 🗄️ Step 2: Railway Database Setup

Railway hosts your PostgreSQL database. You need to:

### 2.1 Check Current Railway Project

```bash
# Login to Railway (if not already)
railway login

# Link to your project
railway link

# Check current environment
railway status
```

### 2.2 Get Database Connection String

**Option A: Via Railway Dashboard (Recommended)**

1. Go to https://railway.app/dashboard
2. Open your `pacific-pulse-growth-lab` project
3. Click on your **PostgreSQL** service
4. Go to **Variables** tab
5. Copy the `DATABASE_URL` value

**Option B: Via CLI**

```bash
railway variables
```

### 2.3 Run Database Migration

You MUST run the migration to add the new `Application` model:

```bash
# Set the DATABASE_URL for Railway
# Replace with your actual Railway DATABASE_URL
export DATABASE_URL="postgresql://user:password@host:port/database"

# Run migration
npx prisma migrate deploy
```

**Or run migration directly on Railway:**

```bash
# Deploy migration on Railway environment
railway run npx prisma migrate deploy
```

### 2.4 Verify Migration

```bash
# Check tables exist
railway run npx prisma studio
```

You should see these tables:
- ✅ Portfolio
- ✅ BlogPost
- ✅ Contact
- ✅ Booking
- ✅ **Application** (NEW)

---

## 🌐 Step 3: Vercel Deployment

Vercel hosts your Next.js application.

### 3.1 Update Environment Variables on Vercel

1. Go to https://vercel.com/dashboard
2. Select your `pacific-pulse-growth-lab` project
3. Go to **Settings** → **Environment Variables**
4. Add/Update these variables:

**Required Variables:**

```bash
# Database (from Railway)
DATABASE_URL=postgresql://user:password@host:port/database

# Anthropic API (for AI chatbot)
ANTHROPIC_API_KEY=sk-ant-api03-...

# Supabase (for analytics)
NEXT_PUBLIC_SUPABASE_URL=https://mzowcdikituelbzxuvvd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
```

**⚠️ IMPORTANT:**
- Use the **Railway DATABASE_URL** (not the local Prisma one)
- Add all variables to **Production**, **Preview**, and **Development** environments

### 3.2 Deploy to Vercel

**Option A: Auto-Deploy (Recommended)**

Vercel automatically deploys when you push to GitHub:

```bash
# Already done! Vercel is deploying now
# Check: https://vercel.com/dashboard
```

**Option B: Manual Deploy via CLI**

```bash
# Deploy to production
vercel --prod

# Or deploy to preview first
vercel
```

### 3.3 Verify Deployment

1. Go to https://vercel.com/dashboard
2. Click on your project
3. Check the **Deployments** tab
4. Wait for "Ready" status (usually 2-3 minutes)
5. Click on the deployment URL to test

---

## 🧪 Step 4: Test Your Deployment

### 4.1 Test Homepage

1. Visit your live URL (e.g., `pacific-pulse-growth.vercel.app`)
2. Check that all sections load correctly
3. Verify the AI chatbot appears in bottom right

### 4.2 Test AI Chatbot

1. Click the chatbot widget
2. Fill out the lead form
3. Send a few messages
4. Try sending 11 messages quickly (should hit rate limit)

**Expected Result:**
- First 10 messages: ✅ Work fine
- 11th message: ❌ "Too many requests. Please wait..."

### 4.3 Test Application Form

1. Go to `/apply` page
2. Fill out the founding client application
3. Submit

**Verify in Database:**
```bash
# Check if application was saved
railway run npx prisma studio

# Or query directly
railway run npx prisma db execute --stdin <<SQL
SELECT * FROM "Application" ORDER BY "createdAt" DESC LIMIT 5;
SQL
```

### 4.4 Test Rate Limiting

**Chat Rate Limit Test:**
```bash
# Send 11 requests quickly (should get 429 on 11th)
for i in {1..11}; do
  curl -X POST https://your-site.vercel.app/api/chat \
    -H "Content-Type: application/json" \
    -d '{"messages":[{"role":"user","content":"test"}]}'
  echo "Request $i"
done
```

**Application Rate Limit Test:**
- Submit 4 applications within 1 hour
- 4th submission should fail with 429 error

---

## 📊 Step 5: Monitor Your Deployment

### Railway Monitoring

```bash
# View logs
railway logs

# Check service status
railway status
```

**Railway Dashboard:**
- https://railway.app/dashboard
- Monitor database usage
- Check for errors

### Vercel Monitoring

**Vercel Dashboard:**
- https://vercel.com/dashboard
- View deployment logs
- Check analytics
- Monitor function invocations

**Key Metrics to Watch:**
1. **API costs**: Claude API usage (Anthropic dashboard)
2. **Database size**: Railway storage
3. **Function executions**: Vercel functions tab
4. **Error rate**: Vercel logs

---

## 🔧 Troubleshooting

### Issue: Build fails on Vercel

**Cause**: Missing environment variables

**Fix:**
1. Check Vercel dashboard → Settings → Environment Variables
2. Ensure all variables are set for Production
3. Redeploy

### Issue: Database connection fails

**Cause**: Wrong DATABASE_URL or firewall

**Fix:**
```bash
# Test connection
railway run npx prisma db push

# Or manually test
psql $DATABASE_URL
```

### Issue: Rate limiting not working

**Cause**: Vercel deploys multiple instances

**Fix:**
- Rate limiting uses in-memory storage (per instance)
- For production, consider using Redis:
  - Upstash Redis (free tier)
  - Vercel KV storage

### Issue: Applications not saving

**Cause**: Migration not run on Railway database

**Fix:**
```bash
# Run migration on Railway
railway run npx prisma migrate deploy
```

### Issue: Prisma Client errors

**Cause**: Client not generated on Railway

**Fix:**
1. Check `railway.json` has `--no-engine` flag
2. Verify `postinstall` script in `package.json`
3. Redeploy

---

## 🚀 Quick Deploy Commands

### Update Everything at Once

```bash
# 1. Commit and push to GitHub
git add .
git commit -m "your message"
git push origin main

# 2. Run migration on Railway
railway run npx prisma migrate deploy

# 3. Vercel will auto-deploy
# Check: https://vercel.com/dashboard
```

### Force Rebuild

```bash
# Force Vercel rebuild
vercel --prod --force

# Force Railway redeploy
railway up --detach
```

---

## 📋 Deployment Checklist

Before marking deployment as complete, verify:

- [ ] GitHub has latest code
- [ ] Railway database migration ran successfully
- [ ] Vercel environment variables configured
- [ ] Vercel deployment shows "Ready"
- [ ] Homepage loads correctly
- [ ] AI chatbot opens and responds
- [ ] Application form submits successfully
- [ ] Application saved in database (check Prisma Studio)
- [ ] Rate limiting works (test with 11+ messages)
- [ ] All API routes return proper responses
- [ ] No errors in Vercel logs
- [ ] No errors in Railway logs

---

## 🔗 Useful Links

- **GitHub Repo**: https://github.com/sonyho2715/pacific-pulse-growth-lab
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Railway Dashboard**: https://railway.app/dashboard
- **Supabase Dashboard**: https://app.supabase.com
- **Anthropic Dashboard**: https://console.anthropic.com

---

## 🆘 Need Help?

### Check Logs

```bash
# Railway logs
railway logs --tail

# Vercel logs (in dashboard or CLI)
vercel logs production
```

### Common Commands

```bash
# Check Railway connection
railway status

# Check Vercel deployment
vercel ls

# Run migration
railway run npx prisma migrate deploy

# Open database GUI
railway run npx prisma studio

# Test local build
npm run build && npm run start
```

---

## 📈 Post-Deployment Optimization

### Week 1
- [ ] Monitor API costs (Claude + Supabase)
- [ ] Check rate limiting effectiveness
- [ ] Review application submissions
- [ ] Test email notifications (when implemented)

### Week 2
- [ ] Implement email notifications
- [ ] Add Zod validation
- [ ] Set up error monitoring (Sentry)
- [ ] Configure custom domain

### Month 1
- [ ] Review analytics data
- [ ] A/B test headlines
- [ ] Optimize conversion rates
- [ ] Scale rate limits if needed

---

## 🎉 You're Live!

Your Pacific Pulse Growth Lab website is now deployed with:

✅ Security hardening (rate limiting)
✅ Database optimization (Application model)
✅ Production-ready build
✅ Multi-platform deployment

**Next steps**: Start driving traffic and collecting those founding client applications! 🚀

---

*Generated by Claude Code on November 3, 2025*
