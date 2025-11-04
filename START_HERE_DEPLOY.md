# 🚀 START HERE - Deploy Pacific Pulse Growth Lab

**Your code is already pushed to GitHub and Vercel!** ✅

Now complete the Railway database setup (takes 10 minutes).

---

## 🎯 What You Need To Do

Open your **terminal** in this folder and run these 4 commands:

### 1️⃣ Link Railway Project

```bash
railway link
```

**What happens:** You'll select your project from a list.

---

### 2️⃣ Run Database Migration

```bash
railway run npx prisma migrate deploy
```

**What happens:** Creates the `Application` table in your database.

---

### 3️⃣ Get Database URL

```bash
railway variables | grep DATABASE_URL
```

**What happens:** Shows your database connection string. **Copy it!**

---

### 4️⃣ Add to Vercel

1. Go to: https://vercel.com/dashboard
2. Click your project → **Settings** → **Environment Variables**
3. Click "Add New"
4. Add these 5 variables:

```bash
# Variable 1: Railway Database
DATABASE_URL = postgresql://... (paste from step 3)

# Variable 2: Anthropic API Key (from your .env file)
ANTHROPIC_API_KEY = sk-ant-api03-... (copy from your .env file)

# Variable 3: Supabase URL (from your .env file)
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co (copy from your .env file)

# Variable 4: Supabase Anon Key (from your .env file)
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGci... (copy from your .env file)

# Variable 5: Supabase Service Role Key (from your .env file)
SUPABASE_SERVICE_ROLE_KEY = eyJhbGci... (copy from your .env file)
```

5. For each variable, check all 3 environments: Production, Preview, Development
6. Click **Save**
7. Go to **Deployments** tab → Click **Redeploy**

---

## ✅ Done! Test Your Site

```bash
# Check deployment status
vercel ls

# Open your live site
# (Get URL from Vercel dashboard)
```

**Test these:**
- [ ] Homepage loads
- [ ] AI chatbot opens and works
- [ ] Go to `/apply` and submit test application
- [ ] Check database: `railway run npx prisma studio`

---

## 🆘 If Something Goes Wrong

### "No linked project" error

**Don't have a Railway project?**
1. Go to: https://railway.app/new
2. Click "Provision PostgreSQL"
3. Run: `railway link`

### "Migration failed" error

**Try this instead:**
```bash
railway run npx prisma db push
```

### Vercel deployment fails

**Check environment variables:**
1. Vercel dashboard → Settings → Environment Variables
2. Make sure all 5 variables are there
3. Redeploy

---

## 📚 Need More Help?

- **Quick steps:** This file (you're reading it!)
- **Detailed guide:** `MANUAL_DEPLOY_STEPS.md`
- **Full documentation:** `DEPLOYMENT_GUIDE_2024.md`

---

## 🎉 What's Already Done

✅ GitHub updated with all security fixes
✅ Vercel auto-deployed from GitHub
✅ Rate limiting added to protect your API
✅ Database schema updated with Application model
✅ Production build optimized

**Time to complete Railway setup:** 10-15 minutes

---

**Ready?** Open your terminal and run the 4 commands above! 🚀
