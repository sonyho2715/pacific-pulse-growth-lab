# Pacific Pulse Growth Lab - AI Automation Landing Page

A high-converting landing page for the Founding Client Program - custom AI automation systems for Hawaii service businesses.

## Overview

This is a Next.js website featuring:
- **Long-form landing page** with psychological copywriting
- **Interactive ROI calculator** showing potential revenue capture
- **Founding client application form** with qualification questions
- **Complete conversion funnel** from awareness to application

## Key Features

### 🎯 Conversion-Optimized Landing Page
- Compelling hero section with urgency (8 spots remaining)
- Problem-agitation-solution framework
- Social proof and credentials (Master NLP Coach)
- Trust-building founder story
- Multiple CTAs strategically placed

### 💰 Interactive ROI Calculator
- Real-time calculations based on user inputs
- Shows missed revenue vs. potential with AI
- Calculates payback period and ROI
- Primary conversion driver

### 📋 Founding Client Application
- Qualification form with business details
- Pain point identification
- Revenue range verification
- Timeline expectations
- Email notification system ready

### 🎨 Design Philosophy
- Clean, professional, trust-building
- Blue-to-purple gradient (tech + innovation)
- Mobile-first responsive
- Fast page load times
- Minimal distractions

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Database**: PostgreSQL with Prisma (for leads/applications)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites
- Node.js 24.5.0 or higher
- npm

### Installation

1. Navigate to the project:
\`\`\`bash
cd pacific-pulse-growth-lab
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the Prisma database (in a separate terminal):
\`\`\`bash
npx prisma dev
\`\`\`

4. Run database migrations:
\`\`\`bash
npx prisma migrate dev
\`\`\`

5. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3001](http://localhost:3001)

## Project Structure

\`\`\`
src/
├── app/
│   ├── apply/              # Founding client application form
│   │   └── page.tsx
│   ├── api/
│   │   ├── apply/          # Application submission API
│   │   ├── booking/        # Booking API (secondary CTA)
│   │   └── contact/        # Contact API
│   ├── contact/            # Contact page (secondary option)
│   ├── booking/            # Quick call booking (kept for reference)
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css
├── components/
│   ├── ROICalculator.tsx   # Interactive ROI calculator
│   └── ui/                 # shadcn/ui components
└── lib/
    └── prisma.ts           # Database client

prisma/
├── schema.prisma           # Database schema
└── migrations/
\`\`\`

## Key Sections

### Homepage (/)
1. **Hero** - Attention-grabbing headline + urgency
2. **Problem** - Three pain points service businesses face
3. **Solution** - AI that works 24/7
4. **ROI Calculator** - Interactive revenue calculator ⭐
5. **Founder Story** - Why Sony created this program
6. **Program Details** - $497/month pricing + what's included
7. **Qualification** - Who this is/isn't for
8. **Timeline** - 4-week implementation process
9. **NLP Differentiator** - Why Sony's AI sounds human
10. **Application CTA** - Primary conversion goal
11. **Final CTA** - Last chance to apply

### Application Form (/apply)
- Business information
- Revenue qualification
- Pain point identification
- Motivation assessment
- Timeline expectations
- Success confirmation

## Conversion Funnel

\`\`\`
Homepage → ROI Calculator → Application Form → Strategy Call
\`\`\`

**Primary Goal**: Get qualified businesses to submit founding client application

**Secondary Goals**:
- Schedule quick call (for those who need more info)
- General contact form (backup option)

## Environment Variables

Create a `.env` file:

\`\`\`env
# Database (set automatically by prisma dev)
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=..."

# Email (for notifications - to be configured)
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASS=""
SMTP_FROM="sony@pacificpulsegrowth.com"
\`\`\`

## Next Steps for Production

### Email Integration
- [ ] Configure SMTP for application notifications
- [ ] Send confirmation email to applicants
- [ ] Send alert email to Sony when application submitted
- [ ] Set up email templates (Resend, SendGrid, or similar)

### CRM Integration
- [ ] Connect to HubSpot, Pipedrive, or similar
- [ ] Auto-create deal when application submitted
- [ ] Tag with "Founding Client" label
- [ ] Trigger follow-up sequence

### Analytics
- [ ] Google Analytics 4 setup
- [ ] Facebook Pixel (for retargeting)
- [ ] Conversion tracking for applications
- [ ] ROI calculator interaction events

### A/B Testing Ideas
- [ ] Hero headline variations
- [ ] CTA button copy
- [ ] Pricing presentation
- [ ] Founder photo placement
- [ ] ROI calculator default values

### Content Additions
- [ ] Professional photo of Sony
- [ ] AI conversation mockup screenshots
- [ ] Before/After comparison graphics
- [ ] Simple video explaining the program (optional)
- [ ] Trust badges/certifications

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Configure environment variables
4. Deploy

The site will be live at: `your-project.vercel.app`

### Custom Domain
- Configure DNS to point to Vercel
- Suggested: `pacificpulsegrowth.com` or `pacificpulselab.com`

## Database Commands

\`\`\`bash
# Start local database
npx prisma dev

# View database GUI
npx prisma studio

# Create migration
npx prisma migrate dev --name migration_name

# Generate Prisma Client
npx prisma generate
\`\`\`

## Marketing Strategy

### Traffic Sources
1. **Organic** - Local Hawaii business searches
2. **Paid** - Google Ads (Hawaii + service businesses)
3. **Facebook Ads** - Target Hawaii business owners
4. **Direct outreach** - Personal network
5. **LinkedIn** - B2B targeting

### Conversion Optimization
- ROI calculator is the key engagement tool
- Multiple CTAs throughout the page
- Scarcity (8 spots only)
- Risk reversal (3X ROI guarantee)
- Personal touch (working directly with Sony)

## Performance

- Lighthouse score target: 90+
- First Contentful Paint: < 1.5s
- ROI calculator interaction: Instant updates
- Mobile-optimized forms

## Support

For technical questions: Check the Next.js and Prisma documentation
For business questions: sony@pacificpulsegrowth.com

## License

© 2025 Pacific Pulse Growth Lab LLC. All rights reserved.

---

Built with ❤️ in Hawaii 🌺
