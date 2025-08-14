# Broadway Corporation Web Platform

Production-ready Next.js platform unifying four divisions — Farmhouse, Enterprise, Intelligence, and Resorts — with a public site and an internal Admin Dashboard. This document is the engineering source of truth for setup, operations, and quality.

## Table of contents

- Overview and goals
- Architecture and tech stack
- Prerequisites
- Project directory setup
- Environments and configuration
- Quick start
- Scripts
- Local development (Firebase emulators)
- Seeding local data
- Environment variables (.env example)
- Security and compliance
- CI/CD and deployments
- Quality gates (lint, types, tests)
- Pre-commit hooks
- Observability and performance
- Internationalization
- RBAC setup (Firebase custom claims)
- Data model overview
- Governance (branching and releases)
- References

## Overview and goals

- Brand-consistent multi-division website and Admin Dashboard
- Scalable content operations (roles, workflows)
- Measurable performance, accessibility, and SEO
- KPIs: LCP ≤ 1.5s (mobile), Lighthouse ≥ 90, -30% time-to-publish, +25% direct traffic in 6 months

See `docs/README.md` for the product brief and feature map.

## Architecture and tech stack

- Frontend: Next.js 15+, React, TypeScript, App Router, Server Actions
- UI: Tailwind CSS, Radix UI, Framer Motion
- Data: Firestore (Cloud Firestore), Storage; optional Cloud Functions
- i18n: next-intl
- SEO: Structured data, Open Graph, meta tags
- Hosting: Vercel (primary), Firebase Hosting (optional)

## Prerequisites

- Node.js 20.x LTS
- PNPM 9+
- Git and a GitHub (or compatible) repo
- Firebase CLI 13+ (`npm i -g firebase-tools`), authenticated: `firebase login`
- Vercel account (for deployments)

Install PNPM (if needed):

```
npm i -g pnpm@9
```

## Project directory setup

Recommended layout for clarity and modularity. Create these directories as the app code is added.

```
.src
├─ app/
│  ├─ (public)/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ [locale]/
│  ├─ (admin)/
│  │  ├─ dashboard/
│  │  ├─ jobs/
│  │  ├─ events/
│  │  ├─ blog/
│  │  └─ settings/
│  └─ api/
├─ features/
│  ├─ farmhouse/
│  ├─ enterprise/
│  ├─ intelligence/
│  └─ resorts/
├─ components/              # shared UI components
├─ lib/
│  ├─ firebase/
│  │  ├─ client.ts
│  │  ├─ admin.ts          # if server actions/route handlers need admin SDK
│  │  └─ types.ts
│  ├─ i18n/
│  │  ├─ config.ts
│  │  └─ messages/
│  ├─ seo/
│  ├─ utils/
│  └─ validations/
├─ styles/
│  └─ globals.css
├─ public/
│  └─ images/
├─ scripts/
├─ tests/
│  ├─ e2e/
│  └─ unit/
├─ docs/
├─ .github/
│  └─ workflows/
└─ README.md
```

## Environments and configuration

- Environments: development, staging, production
- Branch mapping: feature/\* → PR → `main`; releases via tags
- Secrets: managed per environment using Vercel Environment Variables (or Firebase CLI). Never commit secrets.

### Environment setup

1. Create `.env.local` (development) with Firebase client keys and i18n settings. Example:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_SUPPORTED_LOCALES=en,fr

NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=...

# Admin SDK: choose one
FIREBASE_ADMIN_PROJECT_ID=broadway-corporation
# A) JSON file path (recommended locally)
FIREBASE_ADMIN_CREDENTIALS_PATH=./secrets/firebase-admin.json
# B) Inline credentials (leave empty if using A)
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=
```

2. For production, set the same client vars in your platform (Vercel). For the Admin SDK use ONE of:

- Mount the service account file and set `FIREBASE_ADMIN_CREDENTIALS_PATH` to its absolute path; or
- Provide `FIREBASE_ADMIN_CLIENT_EMAIL` and `FIREBASE_ADMIN_PRIVATE_KEY` as secrets (keep line breaks in the private key).

3. Ensure the `secrets/` directory is ignored by git.

## Quick start

1. Ensure prerequisites installed (Node 20, PNPM, Firebase CLI)
2. Clone repo and install deps: `pnpm install`
3. Copy `.env.example` to `.env.local` and fill values (see below)
4. (Optional) Install Playwright browsers for e2e: `pnpm dlx playwright install --with-deps`
5. Start Firebase emulators (new terminal): `pnpm emulators`
6. Run app: `pnpm dev`
7. Typecheck and lint: `pnpm typecheck` and `pnpm lint`
8. Run tests: unit `pnpm test`, e2e `pnpm test:e2e`
9. Build production: `pnpm build && pnpm start`

## Scripts

- `pnpm dev`: start local dev server
- `pnpm build`: production build
- `pnpm start`: run built server
- `pnpm typecheck`: TypeScript check
- `pnpm lint`: ESLint/Prettier
- `pnpm test`: unit tests (Vitest/Jest)
- `pnpm test:e2e`: Playwright E2E tests

Recommended additional scripts (add to `package.json`):

- `pnpm emulators`: start Firebase emulators for Firestore/Auth/Storage
- `pnpm seed`: seed emulator data (divisions, example users)
- `pnpm lint:fix`: fix lint issues
- `pnpm format`: run Prettier write
- `pnpm prepare`: setup husky git hooks

Example `package.json` snippet:

```
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "emulators": "firebase emulators:start --only firestore,auth,storage --project demo-broadway"
  }
}
```

## Local development (Firebase emulators)

Use emulators to develop safely without hitting production:

1. Create `firebase.json` at the repo root (minimal):

```
{
  "emulators": {
    "firestore": { "port": 8080 },
    "auth": { "port": 9099 },
    "storage": { "port": 9199 }
  }
}
```

2. Start emulators: `pnpm emulators`

3. Point SDKs to emulators in development (guarded by `NODE_ENV !== 'production'`).

## Seeding local data

With emulators running, seed minimal data:

```
pnpm seed
```

## Environment variables (.env example)

Create `.env.local`. Keys prefixed with `NEXT_PUBLIC_` are safe for the client.

```
NEXT_PUBLIC_SITE_URL=https://localhost:3000

# Internationalization
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_SUPPORTED_LOCALES=en,fr

# Firebase (client)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

# Firebase (server – used only in server actions/route handlers if needed)
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Analytics/Monitoring (optional)
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_AUTH_TOKEN=
VERCEL_ANALYTICS_ID=
```

## Security and compliance

- Secrets: managed via Vercel/Firebase; never committed
- Headers: strict CSP, HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- RBAC: roles via Firebase custom claims (`admin`, `editor`, `viewer`)
- Data: least-privilege Firestore/Storage rules; PII minimization
- Backups: scheduled Firestore exports to GCS

Content Security Policy (adjust to deployment):

```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self' https: data:;
connect-src 'self' https://firestore.googleapis.com https://firebasestorage.googleapis.com;
frame-ancestors 'none';
```

Next.js headers configuration (example):

```
// next.config.js (or next.config.mjs)
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'no-referrer' }
        ]
      }
    ];
  }
};
module.exports = nextConfig;
```

## CI/CD and deployments

- Primary: Vercel
  - Connect repo, set env vars per environment
  - Production builds from `main` on tag or protected push
- Alternative: Firebase Hosting (SSR recommended on Vercel for Next.js 15)
- Previews: branch deploys with environment protection; use Preview env vars

## Quality gates (lint, types, tests)

- Linting: ESLint + Prettier (`pnpm lint`)
- Types: `tsc --noEmit` (`pnpm typecheck`)
- Unit: Vitest/Jest (`pnpm test`)
- E2E: Playwright (`pnpm test:e2e`)
- Pre-commit: lint-staged + husky

Minimum coverage targets (recommended):

- Unit/integration lines ≥ 80%
- Critical modules ≥ 90%

Playwright setup:

- Install browsers once: `pnpm dlx playwright install --with-deps`
- Headless in CI; record videos on failure

Static analysis:

- Run `pnpm lint` and `pnpm typecheck` in CI on PRs

## Pre-commit hooks

Enable fast feedback locally:

1. Install dev deps:

```
pnpm add -D husky lint-staged
```

2. Initialize husky and add a pre-commit hook:

```
pnpm dlx husky init
echo "pnpm lint && pnpm typecheck" > .husky/pre-commit
```

3. Configure lint-staged in `package.json` (optional):

```
{
  "lint-staged": {
    "**/*.{ts,tsx,js,jsx}": ["eslint --fix"],
    "**/*.{md,css,json}": ["prettier --write"]
  }
}
```

## Observability and performance

- Analytics: Vercel Analytics
- Error tracking: Sentry (optional)
- Budgets: LCP ≤ 1.5s mobile, TBT ≤ 150ms, CLS ≤ 0.1
- Images: Next/Image with responsive sources

## Internationalization

- Library: next-intl
- Directory: `lib/i18n` with `messages/{locale}.json`
- Wrap `app/(public)/[locale]/layout.tsx` with `NextIntlClientProvider`
- Never hardcode end-user strings

Message files example:

```
lib/i18n/messages/en.json
lib/i18n/messages/fr.json
```

Usage example:

```
import { useTranslations } from 'next-intl';
const t = useTranslations('home.hero');
```

Routing:

- Default locale via `NEXT_PUBLIC_DEFAULT_LOCALE`
- Supported locales via `NEXT_PUBLIC_SUPPORTED_LOCALES`

## RBAC setup (Firebase custom claims)

Assign roles using Firebase Admin SDK (run in a secured server context):

```
import { getAuth } from 'firebase-admin/auth';

async function setRole(userId, role) {
  await getAuth().setCustomUserClaims(userId, { role });
}

// Roles: 'admin' | 'editor' | 'viewer'
```

Client-side, read claims from the ID token and gate Admin routes accordingly.

## Data model overview

Indicative collections:

- divisions
- products (Enterprise)
- services (Intelligence)
- events
- blogPosts
- jobs, applications
- galleries, media
- menus (Resorts)
- courses (LMS)
- contactSubmissions, newsletterSubscriptions

Event document example:

```
{
  id: string,
  division: 'farmhouse' | 'enterprise' | 'intelligence' | 'resorts',
  title: string,
  description: string,
  startAt: Timestamp,
  endAt: Timestamp,
  location: string,
  featuredImageUrl: string,
  published: boolean,
  createdByUserId: string
}
```

## Governance (branching and releases)

- Branching: trunk-based
  - Feature branches → PR → `main`
  - Conventional Commits for semantic versioning
- Reviews: 1–2 reviewers, required checks green
- Releases: tags on `main`; changelog generated from commits

## References

- Product brief and visual feature map: `docs/README.md`
- UI/UX specifications: `docs/UI-DESIGN.md` and `docs/UI-DESIGN.txt`
