# 🚀 Manual Deployment Steps

Since Railway CLI requires interactive input, follow these manual steps:

---

## Step 1: Link Railway Project (2 minutes)

Open your terminal in the project folder and run:

```bash
railway link
```

**What to do:**
1. Select your workspace: `sonyho2715's Projects`
2. Select your project (if it exists) or create a new one
3. Wait for "Linked to project" confirmation

**If you don't have a Railway project:**
1. Go to https://railway.app/new
2. Click "Provision PostgreSQL"
3. Name it "pacific-pulse-growth-lab"
4. Then run `railway link` and select it

---

## Step 2: Run Database Migration (2 minutes)

After linking, run:

```bash
railway run npx prisma migrate deploy
```

**Expected output:**
```
Applying migration `20241103_add_application_model`
✓ Applied migration in 123ms
```

**If migration fails:**
```bash
# Try pushing schema directly
railway run npx prisma db push
```

---

## Step 3: Get Railway DATABASE_URL (1 minute)

```bash
railway variables | grep DATABASE_URL
```

**Copy the entire connection string**, it looks like:
```
postgresql://postgres:password@monorail.proxy.rlwy.net:12345/railway
```

**Alternative:** Get it from Railway dashboard:
1. Go to https://railway.app/dashboard
2. Click your PostgreSQL service
3. Variables tab → Copy `DATABASE_URL`

---

## Step 4: Update Vercel Environment Variables (3 minutes)

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click your `pacific-pulse-growth-lab` project
3. Settings → Environment Variables
4. Add these variables for **Production**, **Preview**, and **Development**:

```bash
# Railway Database
DATABASE_URL=postgresql://postgres:...@monorail.proxy.rlwy.net:12345/railway

# Anthropic API (from your .env file)
ANTHROPIC_API_KEY=sk-ant-api03-... (copy from your .env file)

# Supabase (from your .env file)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co (copy from your .env file)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci... (copy from your .env file)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci... (copy from your .env file)
```

5. Click "Save"

### Option B: Via Vercel CLI

```bash
# Add each variable
vercel env add DATABASE_URL production
# Paste your Railway DATABASE_URL when prompted

vercel env add ANTHROPIC_API_KEY production
# Paste your API key when prompted

# Repeat for other variables
```

---

## Step 5: Redeploy to Vercel (1 minute)

After adding environment variables:

```bash
vercel --prod
```

**Or trigger redeploy from dashboard:**
1. Go to Vercel dashboard
2. Deployments tab
3. Click "..." on latest deployment
4. Click "Redeploy"

---

## Step 6: Verify Everything Works (5 minutes)

### 6.1 Check Railway Database

```bash
# Open database GUI
railway run npx prisma studio
```

**Verify these tables exist:**
- [x] Portfolio
- [x] BlogPost
- [x] Contact
- [x] Booking
- [x] **Application** ← Should be new!

### 6.2 Check Vercel Deployment

```bash
vercel ls
```

**Check status:**
- Should show "Ready" status
- No build errors

### 6.3 Test Live Site

1. Get your live URL from Vercel dashboard
2. Visit the site - should load without errors
3. Test AI chatbot:
   - Click chatbot button
   - Fill lead form
   - Send messages
4. Test application form:
   - Go to `/apply`
   - Submit application
   - Check if it saved: `railway run npx prisma studio`

### 6.4 Test Rate Limiting

Open browser console and run:

```javascript
// Test chat rate limit (should fail on 11th request)
for(let i=0; i<12; i++) {
  fetch('/api/chat', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({messages:[{role:'user',content:'test'}]})
  }).then(r => console.log(`Request ${i+1}: ${r.status}`))
}
```

**Expected:** First 10 succeed (200), 11th+ fail (429)

---

## ✅ Deployment Complete Checklist

- [ ] Railway project linked: `railway status` shows connected
- [ ] Database migration ran: `Application` table exists
- [ ] Vercel environment variables added: All 5 variables
- [ ] Vercel deployment successful: Shows "Ready"
- [ ] Homepage loads: No errors
- [ ] AI chatbot works: Opens and responds
- [ ] Application form works: Submits successfully
- [ ] Data saves to database: Visible in Prisma Studio
- [ ] Rate limiting works: 11th request fails with 429

---

## 🆘 Troubleshooting

### Railway: "No linked project"

```bash
railway login
railway link
# Select your project from list
```

### Railway: Migration fails

```bash
# Check connection
railway run npx prisma db push

# If still fails, check Railway logs
railway logs
```

### Vercel: Build fails

**Check environment variables are set:**
```bash
vercel env ls
```

**Should show:**
- DATABASE_URL
- ANTHROPIC_API_KEY
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

### Vercel: "Database connection error"

**Cause:** DATABASE_URL not set or wrong

**Fix:**
1. Get correct URL: `railway variables | grep DATABASE_URL`
2. Update in Vercel dashboard
3. Redeploy: `vercel --prod`

### Application form: Not saving to database

**Cause:** Migration didn't run

**Fix:**
```bash
railway run npx prisma migrate deploy
# Or
railway run npx prisma db push
```

---

## 🎯 Quick Command Reference

```bash
# RAILWAY
railway login                              # Login
railway link                               # Link project
railway run npx prisma migrate deploy     # Run migration
railway run npx prisma studio             # View database
railway variables | grep DATABASE_URL     # Get DB URL
railway logs                              # View logs
railway status                            # Check status

# VERCEL
vercel                                    # Deploy preview
vercel --prod                             # Deploy production
vercel ls                                 # List deployments
vercel env ls                             # List variables
vercel logs production                    # View logs

# LOCAL TESTING
npm run build                             # Test build
npm run dev                              # Run locally
npx prisma studio                        # View local DB
npx prisma migrate dev                   # Run local migration
```

---

## 📊 Expected Timeline

- **Step 1** (Railway Link): 2 minutes
- **Step 2** (Migration): 2 minutes
- **Step 3** (Get URL): 1 minute
- **Step 4** (Vercel Env): 3 minutes
- **Step 5** (Redeploy): 1 minute
- **Step 6** (Testing): 5 minutes

**Total:** ~15 minutes

---

## 🎉 After Completion

Your site will be fully deployed with:

✅ **GitHub**: Version control
✅ **Vercel**: Hosting + Auto-deploy on push
✅ **Railway**: PostgreSQL database
✅ **Supabase**: Analytics tracking
✅ **Security**: Rate limiting on all APIs
✅ **Optimization**: Production-ready build

**Live Architecture:**
```
User → Vercel (Next.js) → Railway (Postgres) + Supabase (Analytics)
                ↑
              GitHub (CI/CD)
```

---

**Questions?** Check the full guide: `DEPLOYMENT_GUIDE_2024.md`

**Need help?** Run `railway status` and `vercel ls` to check current state.
