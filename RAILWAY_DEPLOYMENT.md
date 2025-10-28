# Railway Deployment Guide

Railway is configured and ready to deploy. Follow these steps to get your site live on Railway.

## 🚂 Why Railway?

- **PostgreSQL Included**: Built-in database hosting
- **Simple Pricing**: $5/month for everything
- **Auto-Deploy**: Push to GitHub → automatic deployment
- **Environment Variables**: Easy to configure
- **Alternative to Vercel**: Backup hosting option

## 📋 Deployment Steps

### Step 1: Create Railway Account
1. Go to https://railway.app/
2. Sign up with GitHub (easiest)
3. Authorize Railway to access your repositories

### Step 2: Create New Project
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Choose `pacific-pulse-growth-lab`
4. Railway will auto-detect it's a Next.js project

### Step 3: Add PostgreSQL Database
1. In your Railway project dashboard
2. Click **"+ New"** → **"Database"** → **"PostgreSQL"**
3. Railway creates a database and provides connection string
4. The `DATABASE_URL` environment variable is automatically set

### Step 4: Set Environment Variables
1. Go to your service (not the database)
2. Click **"Variables"** tab
3. Add these variables:

```bash
# AI Chatbot API Key
ANTHROPIC_API_KEY=your-api-key-here

# Database URL (should already be set automatically)
DATABASE_URL=postgresql://...

# Optional: Email notifications
RESEND_API_KEY=your-resend-key-here

# Node environment
NODE_ENV=production
```

### Step 5: Configure Build
Railway should auto-detect settings, but verify:

- **Build Command**: `npm install && npx prisma generate && npm run build`
- **Start Command**: `npm run start`
- **Watch Paths**: `/` (default)

### Step 6: Deploy
1. Click **"Deploy"**
2. Watch the build logs
3. Wait 2-3 minutes for first build
4. Railway provides a URL: `your-project.up.railway.app`

### Step 7: Run Database Migrations
After first deployment:

1. Go to your Railway project
2. Click on your service (not database)
3. Go to **"Settings"** tab
4. Scroll to **"Deployed Commit"**
5. Click **"View Logs"**
6. Or use Railway CLI:

```bash
railway run npx prisma migrate deploy
```

## 🔧 Configuration File

I've created `railway.json` with optimal settings:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npx prisma generate && npm run build"
  },
  "deploy": {
    "startCommand": "npm run start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

## 🌐 Custom Domain on Railway

1. Go to your service → **"Settings"**
2. Scroll to **"Domains"**
3. Click **"Generate Domain"** (free *.railway.app subdomain)
4. Or add your custom domain:
   - Click **"Custom Domain"**
   - Enter your domain
   - Add DNS records at your registrar

### DNS Records for Custom Domain:
```
Type: CNAME
Name: @  (or subdomain)
Value: [your-project].railway.app
```

## 💰 Railway Pricing

### Starter Plan ($5/month):
- 512MB RAM
- 1GB Disk
- 500GB Bandwidth
- PostgreSQL database included
- **Perfect for your needs**

### Resource Limits:
Your site should stay well within limits:
- RAM: ~200-300MB typical usage
- Disk: ~500MB (app + database)
- Bandwidth: ~50-100GB/month (normal traffic)

## 🔄 Auto-Deploy Setup

Railway automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Your changes"
git push

# Railway automatically:
# 1. Detects the push
# 2. Runs build
# 3. Deploys to production
```

## 📊 Monitoring

### View Logs:
1. Railway Dashboard → Your Service
2. Click **"Deployments"**
3. Click on a deployment to see logs

### Metrics:
- CPU usage
- Memory usage
- Bandwidth
- Request count

## 🐛 Troubleshooting

### Build Fails:
```bash
# Check logs in Railway dashboard
# Common issues:
# 1. Missing environment variables
# 2. Prisma client not generated
# 3. Database connection failed
```

### Database Connection Error:
```bash
# Verify DATABASE_URL is set
# Format: postgresql://user:password@host:5432/dbname
# Railway sets this automatically when you add PostgreSQL
```

### Site Not Loading:
1. Check deployment status (should be "Active")
2. Verify environment variables are set
3. Check logs for errors
4. Ensure start command is `npm run start`

## 🔐 Environment Variables Checklist

- [ ] `ANTHROPIC_API_KEY` - AI chatbot
- [ ] `DATABASE_URL` - PostgreSQL (auto-set by Railway)
- [ ] `NODE_ENV=production` - Set to production
- [ ] `RESEND_API_KEY` - Email notifications (optional)

## 🆚 Railway vs Vercel

| Feature | Railway | Vercel |
|---------|---------|--------|
| **PostgreSQL** | ✅ Included | ❌ Extra cost |
| **Pricing** | $5/month flat | $0 hobby, $20+ pro |
| **Build Time** | ~2-3 minutes | ~1-2 minutes |
| **Deploy Speed** | Medium | Fast (edge) |
| **Database** | Built-in | Separate service |
| **Best For** | Full-stack + DB | Frontend + API |

**Recommendation**:
- Use **Vercel** for primary site (faster, free tier)
- Use **Railway** for database + backup hosting

## 🚀 Post-Deployment

### Test Checklist:
- [ ] Site loads at Railway URL
- [ ] AI chatbot works
- [ ] Application form submits (saves to database)
- [ ] All pages load correctly
- [ ] Mobile responsive
- [ ] Database migrations ran successfully

### Next Steps:
1. Test all functionality on Railway URL
2. Set up custom domain if desired
3. Point traffic to Vercel (primary) with Railway as backup
4. Or use Railway as your primary if you prefer integrated database

## 💡 Pro Tips

### 1. Use Railway for Database, Vercel for Frontend
Best of both worlds:
- Vercel: Fast global CDN for your site
- Railway: PostgreSQL database
- Connect Vercel to Railway database via DATABASE_URL

### 2. Monitor Usage
- Check Railway dashboard weekly
- Set up usage alerts
- Optimize if approaching limits

### 3. Backup Strategy
With both Vercel and Railway deployed:
- Vercel goes down? Traffic goes to Railway
- Railway goes down? No problem, Vercel is primary
- Database is safely on Railway

## 📞 Railway Support

- **Docs**: https://docs.railway.app/
- **Discord**: Active community support
- **Status**: https://railway.statuspage.io/
- **GitHub**: https://github.com/railwayapp/railway

---

## Quick Command Reference

```bash
# Link existing Railway project
railway link

# Check status
railway status

# View logs
railway logs

# Open in browser
railway open

# Run migrations
railway run npx prisma migrate deploy

# Set environment variable
railway variables set KEY=value
```

---

**Your site is ready for Railway!** 🚂

Just follow the steps above to deploy. Takes about 10-15 minutes total.
