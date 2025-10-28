# Railway Setup Guide - Step by Step

You're logged in as: **mrsonyho@gmail.com** ✅

Follow these steps to deploy your site on Railway with PostgreSQL database.

---

## 🚂 Option 1: Quick Web Setup (Easiest - 5 minutes)

### Step 1: Create Project from GitHub

1. **Open Railway Dashboard**
   - Go to: https://railway.app/dashboard
   - You're already logged in as mrsonyho@gmail.com

2. **Create New Project**
   - Click **"New Project"**
   - Select **"Deploy from GitHub repo"**

3. **Connect GitHub Repository**
   - Choose: **`pacific-pulse-growth-lab`**
   - Railway will automatically detect it's a Next.js project
   - Click **"Deploy Now"**

4. **Wait for First Build** (2-3 minutes)
   - Railway will use the `nixpacks.toml` configuration
   - It will use Node.js 20 (fixed!)
   - Build should succeed now

### Step 2: Add PostgreSQL Database

1. **In your Railway project dashboard**
   - Click **"+ New"** button
   - Select **"Database"**
   - Choose **"PostgreSQL"**

2. **Database is Auto-Configured**
   - Railway creates the database
   - Automatically sets `DATABASE_URL` environment variable
   - Your app can now access it

### Step 3: Set Environment Variables

1. **Go to your service** (not the database)
2. Click **"Variables"** tab
3. **Add these variables**:

```bash
# Required for AI Chatbot
ANTHROPIC_API_KEY=your-anthropic-api-key-here

# Optional: Production flag
NODE_ENV=production
```

**Note**: `DATABASE_URL` is already set automatically by Railway when you added PostgreSQL.

### Step 4: Get Your Railway URL

1. Go to **"Settings"** tab
2. Scroll to **"Domains"**
3. Click **"Generate Domain"**
4. Your site will be at: `pacific-pulse-growth-lab-production.up.railway.app`

### Step 5: Run Database Migrations

After deployment succeeds:

1. Go to your service → **"Settings"**
2. Scroll to **"Deployed Commit"**
3. Click **"View Logs"**
4. Or run migrations via CLI (see Option 2 below)

---

## 🚂 Option 2: CLI Setup (Advanced)

If you prefer using the command line:

### Step 1: Link to Existing Project (if created via web)

```bash
cd /Users/sonyho/pacific-pulse-growth-lab
railway link
# Select your project from the list
```

### Step 2: Or Create New Project via CLI

```bash
# This will open browser for authentication
railway login  # Already done ✅

# Create project (requires browser)
# Go to railway.app/new and create project there
# Then link it:
railway link
```

### Step 3: Add PostgreSQL

```bash
railway add
# Select: PostgreSQL
```

### Step 4: Set Environment Variables

```bash
railway variables set ANTHROPIC_API_KEY="your-key-here"
railway variables set NODE_ENV="production"
```

### Step 5: Deploy

```bash
railway up
```

### Step 6: Run Migrations

```bash
railway run npx prisma migrate deploy
```

---

## 📊 Monitoring Your Railway Deployment

### View Logs
```bash
railway logs
```

### Check Status
```bash
railway status
```

### Open in Browser
```bash
railway open
```

### View Variables
```bash
railway variables
```

---

## 🔧 Configuration Files Already Set Up

I've already created these files for you:

### `.nvmrc`
```
20.9.0
```
Tells Railway to use Node.js 20.

### `nixpacks.toml`
```toml
[phases.setup]
nixPkgs = ["nodejs_20", "npm-10_x"]

[phases.install]
cmds = ["npm ci"]

[phases.build]
cmds = ["npm install && npx prisma generate && npm run build"]

[start]
cmd = "npm run start"
```
Configures the Railway build process.

### `package.json` (engines added)
```json
"engines": {
  "node": ">=20.9.0",
  "npm": ">=10.0.0"
}
```
Ensures correct Node version.

---

## 🌐 Connecting Vercel to Railway Database

**Best Practice**: Use Vercel for hosting, Railway for database.

### Step 1: Get Railway Database URL

```bash
railway variables
# Look for DATABASE_URL
```

Or from Railway dashboard:
1. Click on PostgreSQL service
2. Go to **"Variables"** tab
3. Copy the `DATABASE_URL` value

### Step 2: Add to Vercel

1. Go to: https://vercel.com/sony-hos-projects/pacific-pulse-growth-lab
2. **Settings** → **Environment Variables**
3. Add:
   - **Name**: `DATABASE_URL`
   - **Value**: Your Railway PostgreSQL connection string
   - **Environment**: All (Production, Preview, Development)
4. **Save** and **Redeploy**

Now your Vercel site uses Railway's PostgreSQL database!

---

## 💰 Railway Pricing

### Starter Plan: $5/month
- 512MB RAM
- 1GB Disk storage
- 500GB Bandwidth
- PostgreSQL included
- Perfect for your needs!

### Usage Tracking
- Dashboard shows real-time usage
- Set up billing alerts
- Monitor CPU, RAM, bandwidth

---

## 🐛 Troubleshooting

### Build Fails with Node.js Error
✅ **Fixed!** Your project now uses Node.js 20.

Check with:
```bash
railway logs
```

### Database Connection Error
1. Verify `DATABASE_URL` is set:
   ```bash
   railway variables
   ```
2. Format should be:
   ```
   postgresql://user:password@host:5432/database
   ```

### Site Not Loading
1. Check deployment status:
   ```bash
   railway status
   ```
2. View logs:
   ```bash
   railway logs
   ```
3. Ensure build command succeeded in logs

### Need to Run Migrations
```bash
railway run npx prisma migrate deploy
```

---

## 🎯 Recommended Setup

### Architecture:
```
User Request
    ↓
Vercel (Frontend)
    ↓
Railway (PostgreSQL Database)
```

### Why This Setup?
- **Vercel**: Fast global CDN, free tier, best for frontend
- **Railway**: Built-in PostgreSQL, $5/month, easy database management
- **Best of both worlds**: Speed + Database

### Configuration:
1. **Primary site**: Vercel (https://pacific-pulse-growth-lab.vercel.app)
2. **Database**: Railway PostgreSQL
3. **Connect**: Add Railway's DATABASE_URL to Vercel
4. **Backup**: Railway can also host full site if needed

---

## 📝 Quick Commands Reference

```bash
# Status
railway status

# Logs
railway logs

# Variables
railway variables

# Add variable
railway variables set KEY="value"

# Run command in Railway environment
railway run [command]

# Open dashboard
railway open

# Unlink project
railway unlink

# Link different project
railway link
```

---

## ✅ Post-Setup Checklist

After Railway is configured:

- [ ] Project deployed successfully
- [ ] PostgreSQL database added
- [ ] `ANTHROPIC_API_KEY` environment variable set
- [ ] `DATABASE_URL` copied to Vercel (if using Vercel for hosting)
- [ ] Database migrations run successfully
- [ ] Site loads at Railway URL
- [ ] Test application form (saves to database)
- [ ] Test AI chatbot (with API key)

---

## 🚀 You're Ready!

Your Railway project is configured with:
- ✅ Node.js 20 (correct version)
- ✅ Next.js build configuration
- ✅ PostgreSQL ready to add
- ✅ Environment variable support

**Next step**: Go to https://railway.app/dashboard and create your project!

---

## 💡 Pro Tips

### 1. Use Railway for Database Only
Most cost-effective:
- Vercel: Free (hosting)
- Railway: $5/month (database)
- Total: $5/month for everything

### 2. Monitor Your Usage
- Check Railway dashboard weekly
- Set up usage alerts
- Upgrade if you hit limits

### 3. Database Backups
Railway auto-backs up your database:
- Dashboard → PostgreSQL → Backups
- Can restore any backup

### 4. Environment Management
- Use different Railway projects for staging/production
- Or use different services within same project

---

**Need help?** Railway has great docs: https://docs.railway.app/

Your configuration is ready. Just create the project in the dashboard! 🚂
