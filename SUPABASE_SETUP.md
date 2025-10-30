# Supabase Analytics Setup Guide

This guide will walk you through setting up Supabase for Pacific Pulse chatbot analytics tracking.

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in:
   - **Project Name**: Pacific Pulse Analytics (or any name you prefer)
   - **Database Password**: Choose a strong password (save it securely)
   - **Region**: Choose closest to Hawaii (Oregon or California recommended)
   - **Pricing Plan**: Free tier is sufficient to start
4. Click "Create new project" and wait 2-3 minutes for setup

## Step 2: Run Database Schema

1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click "New Query"
3. Copy the entire contents of `supabase-schema.sql` from your project root
4. Paste into the SQL editor
5. Click "Run" (or press Cmd/Ctrl + Enter)
6. You should see success messages confirming tables and views were created

## Step 3: Get API Credentials

1. In Supabase, go to **Settings** → **API** (left sidebar)
2. You'll need 3 values from the "Project API keys" section:

   **a. Project URL** (labeled "URL")
   ```
   Example: https://abcdefghijklmnop.supabase.co
   ```

   **b. Anon/Public Key** (labeled "anon public")
   ```
   Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ```

   **c. Service Role Key** (labeled "service_role")
   ```
   Example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   ⚠️ NEVER commit this to Git - it's like a master password!
   ```

## Step 4: Update Environment Variables

1. Open `.env` in your project root
2. Replace the placeholder values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTIzMTIwMCwiZXhwIjoxOTU0ODA3MjAwfQ.abcd1234
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5MjMxMjAwLCJleHAiOjE5NTQ4MDcyMDB9.xyz789
```

## Step 5: Deploy to Vercel

1. Add environment variables to Vercel:
   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   vercel env add SUPABASE_SERVICE_ROLE_KEY
   ```

   Or manually in Vercel Dashboard:
   - Go to your project → Settings → Environment Variables
   - Add all 3 Supabase variables
   - Make sure they're available for "Production", "Preview", and "Development"

2. Commit and deploy:
   ```bash
   git add .
   git commit -m "Add Supabase analytics integration"
   git push origin main
   vercel --prod
   ```

## Step 6: Access Your Analytics Dashboard

1. Go to: `https://your-vercel-url.vercel.app/analytics`
2. Enter password: **pacificpulse2024**
3. You'll see real-time analytics including:
   - Total leads & qualified leads
   - Conversion funnel
   - Business type distribution
   - Recent activity table
   - Auto-refreshes every 30 seconds

## What Gets Tracked

### Chat Leads Table
Every time someone fills out the chatbot form:
- Name, email, phone
- Business type & monthly revenue
- Whether they qualified ($5K+/month)
- Timestamp

### Chat Sessions Table
Every chat conversation:
- Linked to lead
- Total messages exchanged
- Whether chat was completed
- Whether lead converted
- Last activity timestamp

### Chat Messages Table
Every individual message:
- User and assistant messages
- Message content
- Message number in conversation
- Timestamp

## Analytics Views

Pre-built SQL views for dashboard:
- **daily_lead_metrics**: Leads per day with qualification rates
- **business_type_distribution**: Which industries are inquiring most
- **conversion_funnel**: Drop-off analysis from lead → conversion
- **recent_activity**: Last 100 leads with full details
- **peak_hours_analysis**: Best times for chatbot engagement

## Security Notes

1. **Service Role Key** has admin access - NEVER expose it client-side
2. **Row Level Security (RLS)** is enabled on all tables
3. Only service_role can access data (blocks public access)
4. Dashboard has password protection (change `pacificpulse2024` in `/src/app/analytics/page.tsx` line 103)

## Monitoring & Maintenance

### Check Data in Supabase
1. Go to Supabase → **Table Editor**
2. Browse `chat_leads`, `chat_sessions`, `chat_messages`
3. Filter, search, export as needed

### Export Data
```sql
-- Run in Supabase SQL Editor to export leads
SELECT * FROM chat_leads
WHERE created_at >= '2024-01-01'
ORDER BY created_at DESC;
```

### Common Queries

**Get conversion rate by business type:**
```sql
SELECT
  cl.business_type,
  COUNT(DISTINCT cl.id) as total_leads,
  COUNT(DISTINCT cs.id) FILTER (WHERE cs.converted = true) as conversions,
  ROUND(COUNT(DISTINCT cs.id) FILTER (WHERE cs.converted = true)::NUMERIC / COUNT(DISTINCT cl.id) * 100, 2) as conversion_rate
FROM chat_leads cl
LEFT JOIN chat_sessions cs ON cl.id = cs.lead_id
WHERE cl.qualified = true
GROUP BY cl.business_type
ORDER BY conversion_rate DESC;
```

**Get top performing message counts:**
```sql
SELECT
  total_messages,
  COUNT(*) as sessions,
  COUNT(*) FILTER (WHERE converted = true) as conversions
FROM chat_sessions
GROUP BY total_messages
ORDER BY total_messages;
```

## Troubleshooting

### Analytics dashboard shows 0 leads
1. Check browser console for errors
2. Verify `.env` variables are set correctly
3. Ensure schema was run successfully in Supabase
4. Check Supabase → Logs for any errors

### Chatbot not logging data
1. Check browser console for Supabase errors
2. Verify Row Level Security policies are set (should allow service_role)
3. Test credentials:
   ```bash
   curl https://YOUR_PROJECT_URL/rest/v1/chat_leads \
     -H "apikey: YOUR_ANON_KEY" \
     -H "Authorization: Bearer YOUR_ANON_KEY"
   ```

### "Failed to create lead/session" error
- Check that tables exist in Supabase Table Editor
- Verify all required columns are present
- Check Supabase → Logs → Postgres Logs for detailed errors

## Next Steps

1. **Customize password**: Change dashboard password in `/src/app/analytics/page.tsx`
2. **Add conversion tracking**: Update `chat_sessions.converted = true` when someone applies
3. **Email notifications**: Set up Supabase Edge Functions to email you on new qualified leads
4. **Advanced analytics**: Add sentiment analysis, objection detection tracking
5. **Export automation**: Schedule weekly CSV exports of leads

## Support

Questions? Email sony@pacificpulsegrowth.com or check Supabase docs at https://supabase.com/docs
