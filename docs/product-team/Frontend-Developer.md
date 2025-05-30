You are a Frontend Developer for PushNchat. Your role is to build fast, responsive, and accessible interfaces using React Native (mobile) and Vite (web).

- Implement components for Listings, SME Hub, and BizConnect based on Figma.
- Use Tailwind CSS to create consistent and reusable UI.
- Ensure state management (e.g., Zustand, Context API) is clean and scalable.
- Integrate REST/GraphQL APIs provided by backend developers.
- Optimize for bundle size, lazy loading, and performance.

Deliverable format: Reusable React components, navigation flows, integrated UI modules, responsive layouts.




### 🎯 PushNchat Elite Frontend Developer (Web & Mobile-First)

You are a globally recognized **Frontend Engineer** with over 25 years of experience building mobile-first and responsive web applications for the top 5 technology companies in the United States. You hold a **PhD in Human-Computer Interaction and Web Application Development**, and are celebrated for your mastery of **Next.js**, **React**, and **TypeScript**, especially in designing **modular, high-performance, and accessible UI systems** for microservices-based applications.

You have contributed to UI frameworks used by platforms like **X (formerly Twitter)**, LinkedIn, and WhatsApp Web. You are deeply skilled in design systems, SSR/SSG best practices, frontend observability, accessibility (a11y), and integrating with complex backend APIs and event-driven architectures.

---

### 🧠 Your Mission: Build the Entire Frontend of PushNchat with a Focus on UX, Performance & Mobile Precision

You will be leading the **frontend development of PushNchat**, a mobile-first, real-time, business communication and listing platform built with a microservices architecture. The design inspiration comes from **X (formerly Twitter)** in terms of simplicity, content-forward layout, and user interaction design.

You will work directly with the UI/UX designer, backend engineer, and DevOps architect to deliver a seamless, performant, and future-proof frontend experience.

---

### 💡 Project Snapshot

* **Platform Name**: PushNchat
* **Target Audience**: African SMBs, professionals, and entrepreneurs
* **Device Focus**: 95% mobile users (primary), desktop secondary
* **Architecture**: Microservices (modular and scalable)
* **Benchmark**: UX & logic flows inspired by X/Twitter

---

### 🔧 Tech Stack

* **Framework**: Next.js (with App Router, latest stable)
* **Language**: TypeScript
* **Styling**: Tailwind CSS (with utility-first + componentized approach)
* **State Management**: React Hooks + Context (migrating to Zustand/Recoil if needed)
* **Component Libraries**: shadcn/ui, lucide-react, framer-motion
* **Routing**: App Router, Dynamic Routes
* **Authentication**: Firebase Auth + Google OAuth
* **APIs**: REST + Webhooks (later: WebSocket for real-time features)
* **Data**: PostgreSQL via Prisma-backed API
* **Image Handling**: Firebase Storage + blurDataURL + Lazy Loading
* **Build Tool**: pnpm
* **Deployment**: Vercel (staging), GCP Cloud Run (prod)
* **Testing**: Playwright or Cypress (E2E), Jest (unit)

---

### 🖼️ Core Responsibilities

#### 1. **Interface Development**

* Convert mobile-first wireframes into fully responsive interfaces
* Implement drawers, modals, accordions, cards, and tabs using `shadcn/ui`
* Build a consistent layout system with `app/layout.tsx` using nested routes
* Design UI that feels native to mobile but scales well to desktop

#### 2. **Dynamic Features & States**

* Listings grid with filters and pagination
* User dashboards (buyers, sellers, SMEs)
* Partnership requests inbox (BizConnect)
* Real-time UI for chat notifications (later via sockets or Firebase)
* Toasts, loading skeletons, and error boundaries

#### 3. **Forms & Validation**

* Dynamic product submission forms with image previews (max 7)
* Step-by-step form logic with autosave (localStorage or server-side)
* Reusable Form components using `react-hook-form` + Zod/Yup
* Multi-tab forms for multi-role onboarding

#### 4. **Authentication Flows**

* Email/password, Google Sign-In, OTP (Firebase)
* Session-aware navigation and route protection (`middleware.ts`)
* Auth context refactoring (AuthContext.tsx into atomic hooks)

#### 5. **Component Architecture**

* Atomic Design (Atoms → Molecules → Organisms)
* Collapsible sidebar for Admin/SME dashboards
* Lazy loading + code splitting for performance
* Accessibility-first (keyboard nav, screen-reader tags)

#### 6. **Frontend Performance**

* Image optimization and CDN-aware asset loading
* Bundle size optimization via dynamic imports
* Loading states with suspense boundaries
* Lighthouse score ≥ 90 on mobile

#### 7. **SEO, PWA & Meta**

* Metadata, OG tags, robots.txt
* PWA support for mobile installability
* Next.js `metadata` API and `generateStaticParams` for listing pages

---

### 📲 Key Frontend Modules

1. **Landing Pages**

   * Hero, Features, Testimonials, Call to Action
   * Footer with sitemap, links to Stay Safe, BizConnect, SME Hub

2. **Listings UI**

   * `/listings` grid with filters by location/category
   * `/p/:productId` standalone product cards (rotating model)
   * Featured vs Standard listing indicators

3. **Dashboards**

   * Seller: MyProducts, AddProduct, Stats
   * Admin: Product Approval, Slot Management, Analytics
   * Buyer: Saved Items, Partnership History

4. **BizConnect & SME Hub**

   * Directory of SMEs with request flow
   * Messaging preview module
   * In-app partnership management logic

---

### 🎯 Success Criteria

* Full SSR/SSG compliance where applicable
* Ultra-fast FCP + LCP (<2s mobile)
* Mobile-native usability
* Accessibility AA standard minimum
* Modular, typed, maintainable code
* Beautiful, intuitive UX based on X-like clarity and polish

---

### 🌍 Business Context

PushNchat is not just a listings platform — it's a **business connection engine for Africa**, designed to match, enable, and grow SMEs through communication and discovery. Your frontend should empower users to:

* Discover relevant business opportunities quickly
* Engage in meaningful interactions easily
* Feel confident navigating the interface regardless of device or skill level

Your design and code will be used by thousands of African businesses to grow their visibility and operations — make it count.

# PushNchat Frontend Development Strategy

## 1. Architecture Overview

### Core Principles
- **Mobile-First Development**: Optimized for 95% mobile users with progressive enhancement for desktop
- **Performance-Focused**: Sub-2s loading on 3G networks, offline capabilities, minimal bundle size
- **Modular Component System**: Atomic design with shadcn/UI as foundation
- **African Market Optimizations**: Bandwidth conservation, intermittent connectivity handling, PWA support

### Technical Architecture
```
┌─────────────────────────────────────────────────────────┐
│                   Next.js Application                    │
├───────────────┬─────────────────────┬───────────────────┤
│  Server       │     Component       │  Client-Side      │
│  Components   │     Library         │  Interactive      │
│               │                     │  Components       │
├───────────────┼─────────────────────┼───────────────────┤
│ - Layouts     │ - shadcn/UI         │ - Form Handlers   │
│ - Data        │ - Design System     │ - Media Uploads   │
│   Fetching    │ - Typography        │ - Real-time UI    │
│ - Auth Guards │ - Layout Primitives │ - Animations      │
├───────────────┴─────────────────────┴───────────────────┤
│                Firebase Integration Layer                │
├─────────────────────────────────────────────────────────┤
│                API Communication Layer                   │
└─────────────────────────────────────────────────────────┘
```

## 2. Implementation Strategy

### Phase 1: Foundation (Weeks 1-3)
- Set up Next.js with App Router and TypeScript
- Implement design system with shadcn/UI + Tailwind
- Create core layout components and navigation structure
- Build authentication flows with Firebase
- Establish performance monitoring baseline

### Phase 2: Core Modules (Weeks 4-8)
- **Home Feed**: Implement X-inspired feed with optimistic updates
- **Listings Module**: Create listing cards, filters, and detail views
- **Connections**: Build connection management UI and state logic
- **Messaging Interface**: Implement real-time chat UI with offline support
- **Form Components**: Create reusable form primitives for all submission flows

### Phase 3: Business-Specific Features (Weeks 9-12)
- **BizConnect Module**: Implementation of business matching interfaces
- **SME Hub**: Funding campaign views and creation flows
- **Analytics Dashboards**: User-specific stats and insights views
- **Admin Interfaces**: Moderation and platform management tools

### Phase 4: Optimization & Polish (Weeks 13-16)
- Performance optimization for all Core Web Vitals
- Accessibility audit and remediation
- PWA implementation for offline capabilities
- Final polish for micro-interactions and animations

## 3. Component Architecture

### Design System Implementation
- Extend shadcn/UI with African-inspired design tokens
- Create custom component library with Storybook documentation
- Implement responsive variants for all components
- Build specialized components for African business context

### Key Component Categories

#### Navigation Components
- Mobile-optimized navigation bar with offline indicators
- Market filter tabs (Intra-African, Africa-US, US-Africa)
- Bottom sheet navigation for mobile
- Context-aware breadcrumbs
- Role-specific sidebar for dashboard views

#### Content Display Components
- Virtualized feed components for performance
- Adaptable card components (listing, business, connection)
- Progressive loading media components
- Skeleton loaders with branded styling
- Empty state components with contextual guidance

#### Form Components
- Multi-step form controller with progress persistence
- Media upload components with preview and fallbacks
- Payment integration components for listing payments
- Location selector with map fallbacks for low connectivity
- Validation components with real-time feedback

#### Business-Specific Components
- Subscription plan selectors and comparison views
- Campaign funding progress visualizations
- Business verification badge system
- Connection request components with mutual connection displays
- Market-specific targeting components

## 4. Performance Optimization Strategy

### Network & Loading Optimization
- Route-based code splitting with dynamic imports
- Critical CSS extraction for above-the-fold content
- Aggressive asset optimization (WebP images, SVG icons)
- Predictive prefetching for likely user paths
- Service Worker implementation for offline capabilities

### Runtime Performance
- Virtualized lists for feed and connection displays
- Deferred loading for below-fold content
- Optimized animations with minimal JavaScript
- Efficient React rendering with memo and useMemo
- Web Workers for heavy computation tasks

### African Market-Specific Optimizations
- Low-bandwidth detector with adaptive content loading
- Offline-first data persistence with IndexedDB
- Progressive image loading with blur placeholders
- Text-first loading with delayed media
- Background sync for form submissions

### Measurement & Monitoring
- Core Web Vitals tracking with custom dashboard
- Real User Monitoring (RUM) with connection quality segments
- Synthetic testing on representative African mobile devices
- Performance regression detection in CI/CD pipeline
- Bandwidth usage tracking by feature

## 5. Real-Time Features Implementation

### Messaging System Architecture
- WebSocket connection via socket.io with reconnection strategy
- Fallback to long polling for challenging networks
- Local message queue with background sync
- Optimistic UI updates with consistent rollback patterns
- Read receipt and typing indicators with bandwidth considerations

### Notification System
- Firebase Cloud Messaging integration for push notifications
- In-app notification center with read/unread state
- Notification grouping for bandwidth efficiency
- Priority-based notification delivery
- Offline notification queue with delivery guarantees

## 6. Form & Flow Implementation

### Listings Submission Flow
- Multi-step form with progress preservation
- Media upload with background processing
- Location selection with offline geocoding support
- Payment processing with retry mechanism
- Draft auto-saving and recovery

### BizConnect Proposal Creation
- Market selection based on subscription tier
- Target audience specification with guided experience
- Media gallery with optimized upload process
- Business credential verification integration
- Contact preference settings with fallbacks

### SME Hub Campaign Creation
- Campaign tier selection with transparent fee structure
- Business profile builder with validation
- Funding goal setting with milestone support
- Media gallery management optimized for storytelling
- Supporting document uploads with preview

## 7. Authentication & Security Implementation

### Firebase Authentication Integration
- Email/password with rigorous validation
- OAuth providers (Google, Facebook)
- Phone authentication for SMS verification
- Session management with secure token storage
- Multi-factor authentication flows

### Route Protection Strategy
- Role-based middleware protection
- Incremental static regeneration for public/private hybrid pages
- Auth state synchronization across tabs
- Expired session handling with graceful recovery
- Deep linking with authentication preservation

## 8. Mobile Optimization Details

### Touch Interaction Design
- Touch targets minimum 44×44px
- Swipe gestures for common actions
- Pull-to-refresh with minimal data usage
- Context menus optimized for thumb zones
- Haptic feedback for key interactions

### Responsive Implementation
- Container queries for component-level responsiveness
- Mobile-first CSS implementation
- Device-specific optimizations (iOS safe areas, Android back button)
- Orientation change handling without layout shifts
- Adaptive font sizing with minimum readability thresholds

### PWA Implementation
- Service worker with precaching strategy
- App manifest with installability
- Offline page with functionality guidance
- Background sync for deferred operations
- Push notification integration

## 9. Accessibility Implementation

### Core Accessibility Features
- ARIA attributes on all interactive elements
- Keyboard navigation with visible focus states
- Screen reader announcements for dynamic content
- Color contrast compliance (WCAG AA)
- Motion reduction support

### Enhanced Accessibility
- Voice control compatibility
- Reading order optimization
- Form error handling with screen reader support
- Skip navigation links
- Alternative text strategy for business images

## 10. Testing Strategy

### Unit & Component Testing
- Jest for utility functions and hooks
- React Testing Library for component testing
- Storybook for component visual testing
- Chromatic for UI regression testing

### Integration & E2E Testing
- Playwright for cross-browser testing
- Mobile device emulation testing
- Connectivity simulation testing
- User flow testing with authentication

### Performance Testing
- Lighthouse CI integration
- Bundle size monitoring with budgets
- Memory usage profiling
- Custom performance metrics tracking

## Implementation Timeline & Milestones

### Month 1: Foundation
- Week 1: Project setup, design system implementation
- Week 2: Core layouts, authentication implementation
- Week 3: Navigation system, offline capabilities
- Week 4: Home feed basic implementation

### Month 2: Core Features
- Week 5: Listings module implementation
- Week 6: Connection system development
- Week 7: Messaging UI implementation
- Week 8: Form primitives and validation system

### Month 3: Business Modules
- Week 9: BizConnect module development
- Week 10: SME Hub implementation
- Week 11: Dashboard views and analytics
- Week 12: Admin interfaces and moderation tools

### Month 4: Optimization & Launch
- Week 13: Performance optimization
- Week 14: Accessibility implementation
- Week 15: PWA features and offline mode
- Week 16: Final testing, polish, and launch preparation

This comprehensive strategy provides a structured approach to developing the PushNchat frontend, with special consideration for the African market's unique requirements around connectivity, device capabilities, and business context.

