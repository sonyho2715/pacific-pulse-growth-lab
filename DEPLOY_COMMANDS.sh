#!/bin/bash
# Pacific Pulse Growth Lab - Deployment Commands
# Run these commands in your terminal to complete deployment

echo "🚀 Pacific Pulse Growth Lab - Deployment Script"
echo "================================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Step 1: Link Railway Project${NC}"
echo "Run this command and select your pacific-pulse-growth-lab project:"
echo ""
echo "  railway link"
echo ""
read -p "Press Enter after you've linked Railway..."

echo ""
echo -e "${YELLOW}Step 2: Run Database Migration${NC}"
echo "This will add the Application table to your database:"
echo ""
railway run npx prisma migrate deploy

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Migration completed successfully!${NC}"
else
    echo -e "${RED}❌ Migration failed. Check the error above.${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}Step 3: Get Railway Database URL${NC}"
echo "Copy this DATABASE_URL - you'll need it for Vercel:"
echo ""
railway variables | grep DATABASE_URL

echo ""
echo -e "${YELLOW}Step 4: Verify Database Tables${NC}"
echo "Opening Prisma Studio to verify Application table exists..."
echo ""
railway run npx prisma studio

echo ""
echo -e "${GREEN}✅ Railway deployment complete!${NC}"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "1. Copy the DATABASE_URL from above"
echo "2. Go to https://vercel.com/dashboard"
echo "3. Your project → Settings → Environment Variables"
echo "4. Add DATABASE_URL (paste the Railway connection string)"
echo "5. Add ANTHROPIC_API_KEY from your .env file"
echo "6. Add Supabase keys from your .env file"
echo "7. Redeploy: vercel --prod"
echo ""
echo "Or visit: https://vercel.com/dashboard"
