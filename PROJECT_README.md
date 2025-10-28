# Pacific Pulse Growth Lab - Full Stack Website

A modern, full-stack marketing agency website built with Next.js 16, TypeScript, Tailwind CSS, and PostgreSQL.

## Features

- **Homepage**: Beautiful hero section with gradient text, service overview, stats, and call-to-action
- **Portfolio**: Showcase of case studies and client success stories
- **Blog**: Content management system for articles and insights
- **Contact Form**: Fully functional contact form with database integration
- **Booking System**: Consultation scheduling with service selection
- **Responsive Design**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete metadata, Open Graph, and Twitter Cards
- **Database Integration**: PostgreSQL with Prisma ORM for data persistence

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Database**: PostgreSQL (Prisma Dev Server)
- **ORM**: Prisma
- **Deployment Ready**: Vercel, Railway, or any Node.js host

## Getting Started

### Prerequisites

- Node.js 24.5.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
cd pacific-pulse-growth-lab
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the Prisma development database (in a separate terminal):
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

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
pacific-pulse-growth-lab/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── booking/
│   │   │   │   └── route.ts
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── blog/
│   │   │   └── page.tsx
│   │   ├── booking/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       └── textarea.tsx
│   ├── generated/
│   │   └── prisma/
│   └── lib/
│       ├── prisma.ts
│       └── utils.ts
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── .env
├── package.json
└── tsconfig.json
\`\`\`

## Database Schema

The application uses the following database models:

- **Portfolio**: Store case studies and client success stories
- **BlogPost**: Manage blog articles and content
- **Contact**: Store contact form submissions
- **Booking**: Manage consultation bookings

## API Routes

- `POST /api/contact` - Submit contact form
- `POST /api/booking` - Submit booking request

## Environment Variables

Create a `.env` file in the root directory:

\`\`\`env
# Database (automatically set by prisma dev)
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=..."

# Email (optional - for future implementation)
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASS=""
SMTP_FROM=""
\`\`\`

## Future Enhancements

### Admin Panel
Create an admin dashboard for:
- Managing portfolio items
- Creating/editing blog posts
- Viewing contact submissions
- Managing bookings

### Email Integration
- Send email notifications for contact form submissions
- Send booking confirmations
- Newsletter functionality

### Analytics
- Google Analytics integration
- Custom event tracking
- Conversion tracking

### Authentication
- Admin authentication
- User accounts for clients
- OAuth integration

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

### Railway

1. Create a Railway account
2. Create a new project
3. Add PostgreSQL database
4. Deploy your application
5. Configure environment variables

## Development Commands

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Database commands
npx prisma studio        # Open database GUI
npx prisma migrate dev   # Create migration
npx prisma generate      # Generate Prisma Client
npx prisma dev          # Start local database
\`\`\`

## Contributing

This is a private project for Pacific Pulse Growth Lab LLC.

## License

© 2025 Pacific Pulse Growth Lab LLC. All rights reserved.

## Support

For questions or support, contact: hello@pacificpulselab.com
