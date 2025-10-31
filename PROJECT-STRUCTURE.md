# Broadway Corporation - Project Structure

**Version:** 2.0.0  
**Backend:** Supabase  
**Date:** October 30, 2025

---

## Directory Structure

```
broadwaycorp/
├── .github/
│   └── workflows/
│       └── ci.yml                    # CI/CD pipeline
├── docs/                             # All documentation
│   ├── 00-MASTER-INDEX.md           # Documentation index
│   ├── 01-PRODUCT-OVERVIEW.md       # Product brief
│   ├── 02-TECHNICAL-ARCHITECTURE.md # Tech stack & patterns
│   ├── 03-DATABASE-SCHEMA.md        # PostgreSQL schema
│   ├── 04-UI-DESIGN-SYSTEM.md       # Design tokens
│   ├── 05-PAGE-SPECIFICATIONS.md    # Page routes
│   ├── 06-CONTENT-STRATEGY.md       # Messaging
│   ├── 07-API-REFERENCE.md          # API docs
│   └── 08-DEPLOYMENT-GUIDE.md       # Deployment
├── public/
│   ├── images/                       # Static images
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── [locale]/                # Locale routes
│   │   │   ├── (public)/            # Public route group
│   │   │   │   ├── page.tsx         # Home
│   │   │   │   ├── farmhouse/
│   │   │   │   ├── enterprise/
│   │   │   │   ├── intelligence/
│   │   │   │   ├── resorts/
│   │   │   │   ├── blog/
│   │   │   │   ├── events/
│   │   │   │   ├── jobs/
│   │   │   │   └── contact/
│   │   │   ├── (admin)/             # Admin route group
│   │   │   │   └── admin/
│   │   │   │       ├── page.tsx     # Dashboard
│   │   │   │       ├── employees/
│   │   │   │       ├── events/
│   │   │   │       ├── blog/
│   │   │   │       └── media/
│   │   │   ├── layout.tsx           # Locale layout
│   │   │   └── error.tsx
│   │   ├── api/                     # API routes
│   │   │   ├── health/
│   │   │   └── analytics/
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Root redirect
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/                      # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── ...
│   │   ├── layout/                  # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── home/                    # Home page components
│   │   ├── farmhouse/               # Farmhouse components
│   │   ├── enterprise/              # Enterprise components
│   │   ├── intelligence/            # Intelligence components
│   │   └── resorts/                 # Resorts components
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts            # Browser client
│   │   │   ├── server.ts            # Server client
│   │   │   └── middleware.ts        # Middleware client
│   │   ├── i18n/
│   │   │   ├── messages/
│   │   │   │   ├── en.json
│   │   │   │   └── fr.json
│   │   │   └── config.ts
│   │   ├── validations/             # Zod schemas
│   │   │   ├── common.ts
│   │   │   ├── employees.ts
│   │   │   ├── blog.ts
│   │   │   └── events.ts
│   │   └── utils/                   # Utility functions
│   │       ├── cn.ts                # className utility
│   │       ├── format.ts            # Formatters
│   │       └── auth.ts              # Auth helpers
│   ├── types/
│   │   ├── database.types.ts        # Supabase types
│   │   ├── index.ts                 # Shared types
│   │   └── models.ts                # Domain models
│   ├── styles/
│   │   └── globals.css              # Global styles
│   └── middleware.ts                # Next.js middleware
├── supabase/
│   ├── migrations/                   # Database migrations
│   │   └── 20251030000000_initial_schema.sql
│   ├── functions/                    # Edge functions (optional)
│   └── seed.sql                      # Seed data
├── .env.example                      # Environment template
├── .env.local                        # Local environment (gitignored)
├── .eslintrc.json                    # ESLint config
├── .gitignore
├── .prettierrc                       # Prettier config
├── next.config.mjs                   # Next.js config
├── next-intl.config.ts               # i18n config
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js                 # PostCSS config
├── README.md                         # Project readme
├── tailwind.config.ts                # Tailwind config
└── tsconfig.json                     # TypeScript config
```

---

## File Creation Checklist

### Configuration Files
- [x] `.env.example`
- [x] `next.config.mjs`
- [x] `next-intl.config.ts`
- [ ] `tailwind.config.ts`
- [ ] `postcss.config.js`
- [ ] `tsconfig.json`
- [ ] `.eslintrc.json`
- [ ] `.prettierrc`

### Core Application
- [x] `src/middleware.ts`
- [ ] `src/app/layout.tsx`
- [ ] `src/app/page.tsx`
- [ ] `src/app/[locale]/layout.tsx`
- [ ] `src/app/[locale]/page.tsx`

### Supabase Integration
- [x] `src/lib/supabase/client.ts`
- [x] `src/lib/supabase/server.ts`
- [x] `src/lib/supabase/middleware.ts`

### Validations
- [x] `src/lib/validations/common.ts`
- [x] `src/lib/validations/employees.ts`

### Types
- [x] `src/types/database.types.ts`

### i18n
- [x] `src/lib/i18n/messages/en.json`
- [x] `src/lib/i18n/messages/fr.json`

### Database
- [x] `supabase/migrations/20251030000000_initial_schema.sql`

---

## Next Steps

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```

2. **Setup Supabase:**
   ```bash
   # Link to project
   supabase link --project-ref your-project-ref
   
   # Run migrations
   supabase db push
   ```

3. **Configure Environment:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. **Run Development Server:**
   ```bash
   pnpm dev
   ```

5. **Build for Production:**
   ```bash
   pnpm build
   ```

---

**Last Updated:** October 30, 2025
