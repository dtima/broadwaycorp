# Broadway Corporation - Deployment Guide

**Version:** 2.0.0  
**Platform:** Vercel + Supabase  
**Date:** October 30, 2025

---

## Prerequisites

- **Node.js:** 18.x or later
- **pnpm:** 9.0.0 (package manager)
- **Supabase Account:** [https://supabase.com](https://supabase.com)
- **Vercel Account:** [https://vercel.com](https://vercel.com)

---

## Supabase Setup

### 1. Create Project

```bash
# Visit https://supabase.com/dashboard
# Click "New Project"
# Project Name: broadway-corporation
# Database Password: [generate strong password]
# Region: eu-west-1 (or closest to users)
```

### 2. Run Migrations

```bash
# Install Supabase CLI
npm install -g supabase

# Link to project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

### 3. Configure Storage Buckets

```sql
-- Run in Supabase SQL Editor

INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('public-images', 'public-images', true),
  ('galleries', 'galleries', true),
  ('documents', 'documents', false);
```

### 4. Enable RLS Policies

```sql
-- See docs/03-DATABASE-SCHEMA.md for full RLS policies
-- Run all CREATE POLICY statements
```

---

## Environment Variables

### Development (`.env.local`)

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Monitoring (optional)
SENTRY_DSN=https://xxx@sentry.io/xxx
NEXT_PUBLIC_SENTRY_DSN=https://xxx@sentry.io/xxx

# Email (optional)
RESEND_API_KEY=re_xxx
```

### Production (Vercel)

```bash
# Add via Vercel Dashboard > Settings > Environment Variables
# Or via Vercel CLI:

vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
vercel env add SUPABASE_SERVICE_ROLE_KEY production
vercel env add NEXT_PUBLIC_SITE_URL production
```

---

## Vercel Deployment

### Option 1: GitHub Integration (Recommended)

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/dtima/broadwaycorp.git
git push -u origin main

# 2. Import to Vercel
# Visit https://vercel.com/new
# Import GitHub repository
# Configure environment variables
# Deploy
```

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: broadwaycorp
# - Directory: ./
# - Framework: Next.js
# - Build Command: pnpm build
# - Output Directory: .next
# - Development Command: pnpm dev

# Deploy to production
vercel --prod
```

---

## CI/CD Pipeline

### GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 9
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Run linter
        run: pnpm lint
        
      - name: Type check
        run: pnpm typecheck
        
      - name: Run tests
        run: pnpm test
```

---

## Database Migrations

### Creating Migrations

```bash
# Create new migration
supabase migration new add_products_table

# Edit the generated file in supabase/migrations/
# Example: 20251030_add_products_table.sql

CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

# Apply migration
supabase db push
```

### Rollback Strategy

```bash
# Migrations are versioned and timestamped
# To rollback, create a new migration that reverses changes

# Example: 20251031_remove_products_table.sql
DROP TABLE products;
```

---

## Monitoring & Observability

### Vercel Analytics

```bash
# Automatically enabled for Vercel projects
# View at: https://vercel.com/dtima/broadwaycorp/analytics
```

### Sentry Setup

```bash
# Install Sentry
pnpm add @sentry/nextjs

# Initialize
npx @sentry/wizard@latest -i nextjs

# Configure sentry.client.config.ts, sentry.server.config.ts, sentry.edge.config.ts
```

### Supabase Monitoring

```bash
# Database Metrics
# Visit: Supabase Dashboard > Database > Metrics
# - Connection pool usage
# - Slow queries
# - Disk usage

# API Logs
# Visit: Supabase Dashboard > Logs
# - API requests
# - Authentication events
# - Database queries
```

---

## Performance Optimization

### Image Optimization

```tsx
import Image from 'next/image';

// Use Next.js Image component
<Image
  src="/images/hero.jpg"
  alt="Broadway Farmhouse"
  width={1200}
  height={600}
  priority // For above-the-fold images
  placeholder="blur" // Optional blur placeholder
/>
```

### Caching Strategy

```typescript
// Revalidate data every 60 seconds
export const revalidate = 60;

// Or use cache tags
import { unstable_cache } from 'next/cache';

const getEvents = unstable_cache(
  async () => {
    const supabase = createClient();
    return supabase.from('events').select('*');
  },
  ['events'],
  { revalidate: 3600, tags: ['events'] }
);
```

### Edge Middleware

```typescript
// middleware.ts
export const config = {
  matcher: [
    '/admin/:path*',
    '/api/:path*',
  ],
};

export async function middleware(request: NextRequest) {
  // Auth checks run on Edge (fast)
  const supabase = createServerClient(...);
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return NextResponse.redirect(new URL('/admin/sign-in', request.url));
  }
  
  return NextResponse.next();
}
```

---

## Security Checklist

- [ ] **Environment Variables:** All secrets in Vercel environment variables (not in code)
- [ ] **RLS Policies:** Enabled on all tables
- [ ] **CORS:** Configured in `next.config.mjs`
- [ ] **CSRF Protection:** Vercel automatically handles this
- [ ] **Rate Limiting:** Consider Vercel Edge Config or Upstash Redis
- [ ] **Headers:** Security headers configured in `next.config.mjs`
- [ ] **Supabase Service Role:** Only used server-side, never exposed to client

---

## Backup & Disaster Recovery

### Database Backups

```bash
# Supabase automatically backs up daily
# Manual backup:
supabase db dump > backup-$(date +%Y%m%d).sql

# Restore:
psql -h db.xxx.supabase.co -U postgres -d postgres < backup.sql
```

### Storage Backups

```bash
# Use Supabase CLI to download all files
supabase storage download --bucket galleries --path .
```

---

## Rollback Procedures

### Vercel Rollback

```bash
# Via Dashboard:
# Vercel Dashboard > Deployments > Select previous deployment > Promote to Production

# Via CLI:
vercel rollback
```

### Database Rollback

```bash
# Create reverse migration
supabase migration new rollback_feature_x

# Apply rollback
supabase db push
```

---

## Post-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database migrations applied
- [ ] Storage buckets created
- [ ] RLS policies enabled
- [ ] Sentry error tracking active
- [ ] Vercel Analytics enabled
- [ ] SSL certificate active (automatic)
- [ ] Custom domain configured (if applicable)
- [ ] Favicon and icons loading
- [ ] Locale routes (`/en`, `/fr`) accessible
- [ ] Admin sign-in functional
- [ ] Contact form working
- [ ] Newsletter subscription working

---

## Troubleshooting

### Common Issues

**Issue:** `Couldn't find next-intl config file`  
**Solution:** Verify `next-intl.config.ts` uses correct import path (no `./` prefix)

**Issue:** 404 on all locale routes  
**Solution:** Check middleware.ts is configured correctly and locale routes exist

**Issue:** Supabase connection errors  
**Solution:** Verify environment variables, check Supabase project status

**Issue:** Images not loading  
**Solution:** Check storage bucket policies, verify public URLs

---

## Support Contacts

- **Technical Lead:** CTO
- **Vercel Support:** [https://vercel.com/support](https://vercel.com/support)
- **Supabase Support:** [https://supabase.com/support](https://supabase.com/support)

---

**Document Owner:** DevOps Engineer  
**Last Updated:** October 30, 2025
