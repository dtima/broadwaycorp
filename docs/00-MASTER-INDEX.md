# Broadway Corporation - Master Documentation Index

**Version:** 2.0.0  
**Date:** October 30, 2025  
**Backend:** Supabase (PostgreSQL + Storage + Auth)  
**Frontend:** Next.js 15 + TypeScript  
**Status:** Production Architecture

---

## 📚 Documentation Structure

This is the **single source of truth** for the Broadway Corporation web platform. All documentation is organized by domain and purpose.

### Core Documentation

1. **[01-PRODUCT-OVERVIEW.md](./01-PRODUCT-OVERVIEW.md)** - Executive summary, vision, divisions
2. **[02-TECHNICAL-ARCHITECTURE.md](./02-TECHNICAL-ARCHITECTURE.md)** - Tech stack, Supabase integration, infrastructure
3. **[03-DATABASE-SCHEMA.md](./03-DATABASE-SCHEMA.md)** - PostgreSQL schema, tables, RLS policies
4. **[04-UI-DESIGN-SYSTEM.md](./04-UI-DESIGN-SYSTEM.md)** - Design tokens, components, patterns
5. **[05-PAGE-SPECIFICATIONS.md](./05-PAGE-SPECIFICATIONS.md)** - All pages with routes, layouts, data
6. **[06-CONTENT-STRATEGY.md](./06-CONTENT-STRATEGY.md)** - Brand voice, divisions, messaging
7. **[07-API-REFERENCE.md](./07-API-REFERENCE.md)** - API routes, Server Actions, endpoints
8. **[08-DEPLOYMENT-GUIDE.md](./08-DEPLOYMENT-GUIDE.md)** - CI/CD, environment setup, monitoring

---

## 🎯 Quick Links

### For Product Owners
- [Product Overview](./01-PRODUCT-OVERVIEW.md)
- [Content Strategy](./06-CONTENT-STRATEGY.md)

### For Engineers
- [Technical Architecture](./02-TECHNICAL-ARCHITECTURE.md)
- [Database Schema](./03-DATABASE-SCHEMA.md)
- [API Reference](./07-API-REFERENCE.md)

### For Designers
- [UI Design System](./04-UI-DESIGN-SYSTEM.md)
- [Page Specifications](./05-PAGE-SPECIFICATIONS.md)

### For DevOps
- [Deployment Guide](./08-DEPLOYMENT-GUIDE.md)
- [Technical Architecture](./02-TECHNICAL-ARCHITECTURE.md)

---

## 🔄 Migration Status

### Completed
- ✅ Documentation consolidation
- ✅ Firebase → Supabase architecture plan
- ✅ TypeScript-first approach definition

### In Progress
- 🔄 Supabase schema creation
- 🔄 Directory structure scaffolding
- 🔄 Base configuration files

### Pending
- ⏳ Component library implementation
- ⏳ API routes development
- ⏳ Admin dashboard build

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.5 (strict mode)
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Radix UI
- **Animation:** Framer Motion
- **i18n:** next-intl

### Backend
- **Database:** Supabase (PostgreSQL 15)
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage
- **API:** Next.js Route Handlers + Server Actions
- **Validation:** Zod

### Infrastructure
- **Hosting:** Vercel
- **Analytics:** Vercel Analytics
- **Monitoring:** Sentry
- **CDN:** Vercel Edge Network

---

## 📋 Project Structure

```
broadwaycorp/
├── docs/                          # All documentation (this folder)
│   ├── 00-MASTER-INDEX.md        # This file
│   ├── 01-PRODUCT-OVERVIEW.md    # Product brief
│   ├── 02-TECHNICAL-ARCHITECTURE.md
│   ├── 03-DATABASE-SCHEMA.md
│   ├── 04-UI-DESIGN-SYSTEM.md
│   ├── 05-PAGE-SPECIFICATIONS.md
│   ├── 06-CONTENT-STRATEGY.md
│   ├── 07-API-REFERENCE.md
│   └── 08-DEPLOYMENT-GUIDE.md
├── src/
│   ├── app/                       # Next.js App Router
│   ├── components/                # React components
│   ├── lib/                       # Utilities, types, clients
│   │   ├── supabase/             # Supabase client & utilities
│   │   ├── validations/          # Zod schemas
│   │   └── utils/                # Helper functions
│   └── types/                     # TypeScript type definitions
├── supabase/
│   ├── migrations/                # Database migrations
│   ├── functions/                 # Edge functions
│   └── seed.sql                   # Seed data
└── public/                        # Static assets
```

---

## 🎯 KPIs & Success Metrics

### Performance
- LCP ≤ 1.5s (mobile)
- Lighthouse Score ≥ 90 (P/A/S/SEO)
- API Response Time p95 < 500ms

### Business
- +25% direct traffic in 6 months
- -30% time-to-publish for admins
- 99.9% uptime target

---

## 🔐 Security & Compliance

- **Authentication:** Supabase Auth with RLS
- **Authorization:** Row Level Security policies
- **Data Protection:** PII encryption, GDPR compliance
- **API Security:** Rate limiting, CORS, CSRF protection

---

## 📞 Support & Contact

- **Technical Lead:** CTO
- **Repository:** [GitHub](https://github.com/dtima/broadwaycorp)
- **Deployment:** [Vercel](https://vercel.com/dtima/broadwaycorp)

---

**Last Updated:** October 30, 2025  
**Next Review:** Post-deployment (within 48 hours)
