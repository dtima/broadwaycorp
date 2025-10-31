# Broadway Corporation - Setup Guide

**Version:** 2.0.0  
**Date:** October 30, 2025

---

## 🚀 Quick Start

### Prerequisites

- **Node.js:** 18.x or later
- **pnpm:** 9.0.0 or later
- **Supabase Account:** Free tier available at [supabase.com](https://supabase.com)
- **Vercel Account:** Free tier available at [vercel.com](https://vercel.com)

---

## Step 1: Clone Repository

```bash
git clone https://github.com/dtima/broadwaycorp.git
cd broadwaycorp
```

---

## Step 2: Install Dependencies

```bash
# Install pnpm if not already installed
npm install -g pnpm@9

# Install project dependencies
pnpm install
```

---

## Step 3: Setup Supabase

### Create Supabase Project

1. Visit [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Enter details:
   - **Name:** broadway-corporation
   - **Database Password:** [generate strong password]
   - **Region:** eu-west-1 (or closest to users)
4. Wait for project initialization (~2 minutes)

### Get Project Credentials

1. In Supabase Dashboard, go to **Settings > API**
2. Copy the following:
   - **Project URL** (e.g., `https://xxx.supabase.co`)
   - **anon public** key
   - **service_role** key (keep secret!)

### Run Database Migrations

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your-project-ref

# Run initial migration
supabase db push
```

---

## Step 4: Configure Environment Variables

```bash
# Copy example environment file
cp .env.example .env.local

# Edit .env.local with your credentials
nano .env.local  # or use your favorite editor
```

**Required Variables:**

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Step 5: Run Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

**Expected Routes:**
- `/` → Redirects to `/en`
- `/en` → English homepage
- `/fr` → French homepage
- `/en/admin/sign-in` → Admin login

---

## Step 6: Create Admin User

### Via Supabase Dashboard

1. Go to **Authentication > Users**
2. Click "Add User" > "Create new user"
3. Enter email and password
4. Click "Create user"

### Set Admin Role

```sql
-- Run in Supabase SQL Editor
UPDATE auth.users
SET raw_user_meta_data = jsonb_set(
  COALESCE(raw_user_meta_data, '{}'::jsonb),
  '{role}',
  '"admin"'
)
WHERE email = 'your-admin-email@example.com';

-- Also update profiles table
INSERT INTO profiles (id, email, role, locale)
VALUES (
  (SELECT id FROM auth.users WHERE email = 'your-admin-email@example.com'),
  'your-admin-email@example.com',
  'admin',
  'en'
);
```

---

## Step 7: Test Admin Access

1. Visit [http://localhost:3000/en/admin/sign-in](http://localhost:3000/en/admin/sign-in)
2. Sign in with admin credentials
3. You should be redirected to `/en/admin` dashboard

---

## Optional: Seed Sample Data

```bash
# Create seed script (optional)
pnpm seed
```

Or manually via Supabase SQL Editor:

```sql
-- Sample blog post
INSERT INTO blog_posts (title, slug, content, status, locale, author_id)
VALUES (
  'Welcome to Broadway Corporation',
  'welcome-to-broadway-corporation',
  'This is a sample blog post...',
  'published',
  'en',
  (SELECT id FROM profiles WHERE role = 'admin' LIMIT 1)
);

-- Sample event
INSERT INTO events (title, slug, description, start_at, status, locale, division)
VALUES (
  'Farmhouse Open House 2025',
  'farmhouse-open-house-2025',
  'Join us for a tour of our sustainable farms...',
  '2025-10-11 08:00:00+00',
  'published',
  'en',
  'farmhouse'
);
```

---

## Troubleshooting

### Issue: `Couldn't find next-intl config file`

**Solution:**
- Verify `next-intl.config.ts` exists at project root
- Check import path in config (must be `src/lib/i18n/messages/${locale}.json` without `./` prefix)

### Issue: Supabase connection errors

**Solution:**
- Verify environment variables are correct
- Check Supabase project is running (not paused)
- Ensure `.env.local` is in `.gitignore`

### Issue: 404 on all routes

**Solution:**
- Restart dev server: `Ctrl+C` then `pnpm dev`
- Clear Next.js cache: `rm -rf .next`
- Verify middleware.ts is configured correctly

---

## Next Steps

1. **Review Documentation:** See `docs/00-MASTER-INDEX.md`
2. **Customize UI:** Edit components in `src/components/`
3. **Add Content:** Use admin dashboard to create blog posts, events
4. **Deploy to Vercel:** See `docs/08-DEPLOYMENT-GUIDE.md`

---

## Useful Commands

```bash
# Development
pnpm dev              # Start dev server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm typecheck        # Run TypeScript check

# Database
supabase db push      # Apply migrations
supabase db pull      # Pull remote schema
supabase gen types typescript # Generate types

# Deployment
vercel                # Deploy to Vercel (preview)
vercel --prod         # Deploy to production
```

---

**Need Help?** Check `docs/08-DEPLOYMENT-GUIDE.md` or open an issue on GitHub.

**Last Updated:** October 30, 2025
