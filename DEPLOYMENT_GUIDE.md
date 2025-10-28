# Deployment Guide - Pacific Pulse Growth Lab

Your website is deployed across multiple platforms for redundancy and global reach.

## 🌐 Deployed URLs

### GitHub Repository
- **URL**: https://github.com/sonyho2715/pacific-pulse-growth-lab
- **Status**: ✅ Live
- **Branch**: `main`
- **Last Commit**: Modern SaaS redesign with Claude chatbot

### Vercel (Primary - Recommended)
- **Production URL**: Will be available at https://pacific-pulse-growth-lab.vercel.app
- **Custom Domain**: Connect your own domain in Vercel dashboard
- **Auto-deploys**: Every push to `main` branch
- **Edge Network**: Global CDN for fast loading
- **Status**: 🔄 Building (should succeed now with Prisma fix)

### Railway (Database + Backup)
- **Status**: 🔜 Ready to deploy
- **Use for**: PostgreSQL database hosting
- **Or**: Alternative full-stack hosting

## 🔑 Environment Variables Required

### For Vercel:
1. Go to your Vercel project dashboard
2. Settings → Environment Variables
3. Add these variables:

```bash
# Required for Claude Chatbot
ANTHROPIC_API_KEY="sk-ant-your-key-here"

# Required for Database (if using production DB)
DATABASE_URL="postgresql://user:password@host:5432/database"

# Optional: Email notifications
# RESEND_API_KEY="re_your-key-here"
```

### For Railway:
```bash
railway variables set ANTHROPIC_API_KEY="sk-ant-your-key-here"
railway variables set DATABASE_URL="postgresql://..."
```

## 📦 What's Deployed

### Frontend:
- ✅ Modern SaaS landing page
- ✅ ROI Calculator
- ✅ Application form (/apply)
- ✅ FAQ, Comparison Table, Social Proof
- ✅ Claude AI Chatbot (floating widget)
- ✅ Blog, Portfolio, Contact, Booking pages

### Backend APIs:
- ✅ `/api/apply` - Application submissions
- ✅ `/api/chat` - Claude chatbot
- ✅ `/api/contact` - Contact form
- ✅ `/api/booking` - Booking requests

### Database (Prisma + PostgreSQL):
- ✅ Portfolio model
- ✅ BlogPost model
- ✅ Contact model
- ✅ Booking model
- ⚠️ Currently using local Prisma dev (for production, connect to hosted PostgreSQL)

## 🚀 Deployment Checklist

### ✅ Completed:
- [x] Git repository initialized
- [x] Pushed to GitHub
- [x] Connected to Vercel
- [x] Fixed Prisma build issues
- [x] Claude chatbot integrated
- [x] Modern SaaS design applied
- [x] Sony Ho branding updated

### 🔜 To Do Before Launch:
- [ ] Add ANTHROPIC_API_KEY to Vercel env variables
- [ ] Connect custom domain (pacificpulsegrowth.com)
- [ ] Set up production PostgreSQL database
- [ ] Update DATABASE_URL in Vercel
- [ ] Test chatbot on production URL
- [ ] Add Google Analytics
- [ ] Set up email notifications (Resend or similar)
- [ ] Add your professional photo
- [ ] Record 2-minute founder video
- [ ] Test on mobile devices

## 🗄️ Database Setup Options

### Option 1: Railway PostgreSQL (Recommended)
```bash
# Install Railway CLI
npm install -g railway

# Login
railway login

# Link project
railway link

# Add PostgreSQL
railway add

# Copy DATABASE_URL
railway variables

# Add to Vercel
# Go to Vercel → Settings → Environment Variables
# Add DATABASE_URL with the Railway connection string
```

### Option 2: Vercel Postgres
1. Go to Vercel project → Storage tab
2. Click "Create Database" → PostgreSQL
3. Auto-connects DATABASE_URL

### Option 3: Supabase
1. Create free Supabase project
2. Get connection string from Settings → Database
3. Add to Vercel env variables

### After Setting Up Database:
```bash
# Run migrations
npx prisma migrate deploy

# Seed data (optional)
npx prisma db seed
```

## 🔄 Deployment Workflow

### Automatic (Recommended):
```bash
# Make changes locally
git add .
git commit -m "Your changes"
git push

# Vercel automatically:
# 1. Detects push to GitHub
# 2. Runs `npm run build`
# 3. Deploys to production
# 4. Updates live site
```

### Manual:
```bash
# Deploy specific branch
vercel --prod

# Or deploy preview
vercel
```

## 🌍 Custom Domain Setup

### Step 1: Buy Domain
- Namecheap, GoDaddy, or Google Domains
- Recommended: `pacificpulsegrowth.com`

### Step 2: Connect to Vercel
1. Vercel Dashboard → Settings → Domains
2. Add your domain
3. Vercel provides DNS records

### Step 3: Update DNS
Add these records at your domain registrar:

```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 4: Wait for Propagation
- Usually 10-60 minutes
- Check: https://dnschecker.org

### Step 5: SSL Certificate
- Vercel auto-provisions Let's Encrypt SSL
- Automatic HTTPS redirect

## 📊 Monitoring & Analytics

### Add Google Analytics:
Edit `src/app/layout.tsx`:

```typescript
// Add to <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### Vercel Analytics:
1. Enable in Vercel dashboard (free)
2. Tracks: page views, load times, Core Web Vitals

### Anthropic Usage:
- Monitor Claude API costs: https://console.anthropic.com/
- Track: conversation volume, token usage

## 🐛 Troubleshooting

### Build Fails:
```bash
# Test locally first
npm run build

# Check logs
vercel logs

# Common fixes:
# 1. Run prisma generate
# 2. Check env variables
# 3. Clear .next cache
```

### Database Connection Errors:
```bash
# Test connection
npx prisma db pull

# Check DATABASE_URL format:
# postgresql://user:password@host:port/database?sslmode=require
```

### Chatbot Not Working:
1. Check ANTHROPIC_API_KEY is set
2. Verify in Vercel env variables
3. Redeploy after adding env vars
4. Check browser console for errors

## 🔒 Security Checklist

- [x] `.env` files in `.gitignore`
- [x] No API keys in code
- [ ] Add rate limiting to `/api/chat`
- [ ] Set up CORS if needed
- [ ] Use environment variables for secrets
- [ ] Enable Vercel deployment protection
- [ ] Add CSP headers

## 💰 Cost Estimate

### Vercel (Hobby Plan - Free):
- Bandwidth: 100GB/month
- Builds: Unlimited
- Functions: 100GB-hours
- **Cost**: $0

### Anthropic API:
- Claude 3.5 Sonnet
- 100 conversations/month: ~$1-2
- 1,000 conversations/month: ~$10-20
- **Cost**: Pay as you go

### Railway (Starter Plan):
- PostgreSQL hosting
- 500MB storage
- **Cost**: $5/month

### Domain:
- .com registration
- **Cost**: $10-15/year

### Total Monthly Cost: ~$5-10 🎉

## 🎯 Next Steps

1. **Add Environment Variables** (Critical!)
   ```bash
   ANTHROPIC_API_KEY="..."
   ```

2. **Set Up Database**
   - Choose: Railway, Vercel Postgres, or Supabase
   - Run migrations
   - Test API routes

3. **Custom Domain**
   - Buy domain
   - Connect to Vercel
   - Update DNS

4. **Test Everything**
   - Homepage loads
   - Chatbot responds
   - Application form works
   - All links functional

5. **Launch! 🚀**
   - Share on LinkedIn
   - Email potential clients
   - Start capturing leads

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **Prisma Docs**: https://www.prisma.io/docs
- **Anthropic Docs**: https://docs.anthropic.com
- **Next.js Docs**: https://nextjs.org/docs

---

## 🎉 Your Site is Live!

Once Vercel finishes building (check status with `vercel ls`), your site will be live at:

**https://pacific-pulse-growth-lab.vercel.app**

Add your Claude API key and watch the leads roll in! 🌊

---

**Built by Sony Ho with Claude Code** 🤖
