# Pacific Pulse Growth Lab

## Project Overview
Growth lab platform with comprehensive testing infrastructure. Full-featured Next.js application with Prisma.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Database:** PostgreSQL on Railway + Prisma 6.19
- **Auth:** @auth/prisma-adapter
- **Styling:** Tailwind CSS
- **UI:** Radix UI components
- **Testing:** Jest + Playwright

## Key Features
- Growth analytics
- User management
- Dashboard with metrics

## Testing Infrastructure
This project has comprehensive testing:
```bash
npm test              # Run Jest unit tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
npm run test:e2e      # Playwright E2E tests
npm run test:e2e:ui   # Playwright UI mode
npm run test:e2e:debug # Debug E2E tests
```

## Database Commands
```bash
npm run db:generate   # Generate Prisma client
npm run db:push       # Push schema changes
npm run db:migrate    # Create migration
npm run db:seed       # Seed database
npm run db:studio     # Open Prisma Studio
```

## Build Notes
Uses `prisma generate --no-engine` for edge compatibility:
```json
"build": "prisma generate --no-engine && next build"
```

## Environment Variables
- `DATABASE_URL` - Railway PostgreSQL
- Auth-related secrets

## Deployment
- **Hosting:** Vercel
- **Database:** Railway PostgreSQL

## Current Status
Active development with full test coverage.
