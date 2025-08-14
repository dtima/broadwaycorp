# UI Page Designs

Author: CTO

Scope: Public site and Admin Dashboard

Format: Each page lists Purpose, Route, SEO, Layout, Sections, States, Responsive, Data, i18n, Analytics, Accessibility.

---

## Home

- **Route**: `/`
- **Purpose**: Introduce Broadway; route to divisions; surface latest content and CTAs.
- **SEO**: Title “Broadway Corporation — Farmhouse, Enterprise, Intelligence, Resorts”; meta description; OG image.
- **Layout**: AppShell → Header, Hero, Content Sections, CTA band, Footer.
- **Sections**:
  - Hero carousel (4 slides, one per division; image/video, headline, 2 CTAs)
  - Feature tiles (4 cards linking to division overviews)
  - Latest content (events list, blog list)
  - Newsletter CTA band
- **States**: Loading skeletons for lists; empty states if no posts/events; error banners.
- **Responsive**: Carousel → swipe on mobile; 2x2 grid → single column on mobile.
- **Data**: divisions, events (published, featured), blogPosts (published, featured).
- **i18n**: `home.hero.title`, `home.tiles.farmhouse.title`, etc.
- **Analytics**: `click_hero_cta`, `click_division_tile`, `subscribe_newsletter`.
- **Accessibility**: Carousel with buttons and aria-live; keyboard focus order.

---

## Farmhouse — Overview

- **Route**: `/farmhouse`
- **Purpose**: Explain Farmhouse division and route to sub-areas.
- **SEO**: Title “Farmhouse — Sustainable Agriculture”; description; OG image.
- **Layout**: Hero, Overview copy, Subsection cards, Gallery teaser, Events teaser, CTA.
- **Sections**: Intro; Cards for Scorpion, BSF, Fish; Gallery carousel; Upcoming events; Contact CTA.
- **States**: Empty for events/galleries; fallbacks for images.
- **Responsive**: 3-up cards → 1-up; gallery horizontal scroll on mobile.
- **Data**: divisions(farmhouse), galleries, events.
- **i18n**: `farmhouse.overview.*`
- **Analytics**: `click_subsection_card`, `view_gallery_item`.
- **Accessibility**: Image alt for farms; section landmarks.

---

## Farmhouse — Scorpion Farm

- **Route**: `/farmhouse/scorpion`
- **Purpose**: Detail scorpion farming with education/tour info.
- **SEO**: “Scorpion Farm — Farmhouse”.
- **Layout**: Hero, What/Why, Process steps, Gallery, Visit info, Inquiry form CTA.
- **Sections**: Stepper component; media gallery; FAQ accordion.
- **Data**: `pages(farmhouse-scorpion)`, `galleries(scorpion)`.

---

## Farmhouse — BSF Farm

- **Route**: `/farmhouse/bsf`
- **Purpose**: Black Soldier Fly farm overview.
- **Layout**: Hero, Benefits, Process, Gallery, CTA.
- **Data**: `pages(farmhouse-bsf)`, `galleries(bsf)`.

---

## Farmhouse — Fish Farm

- **Route**: `/farmhouse/fish`
- **Purpose**: Fish farm overview.
- **Layout**: Hero, Species grid, Operations, Gallery, CTA.
- **Data**: `pages(farmhouse-fish)`, `galleries(fish)`.

---

## Farmhouse — Galleries

- **Route**: `/farmhouse/galleries`
- **Purpose**: Visual showcase; filterable by farm.
- **Layout**: Filters toolbar, Masonry/Responsive grid, Lightbox modal.
- **States**: Empty/gallery placeholder; loading skeleton tiles.
- **Data**: media with tags (scorpion, bsf, fish).

---

## Enterprise — Overview

- **Route**: `/enterprise`
- **Purpose**: Explain Enterprise division; route to Catalog, Designs, STEM.
- **Layout**: Hero, Intro, Cards (Catalog/Designs/STEM), Testimonials, Contact CTA.
- **Data**: `pages(enterprise)`, testimonials.

---

## Enterprise — Catalog

- **Route**: `/enterprise/catalog`
- **Purpose**: Discover products; filter and view detail.
- **SEO**: “Enterprise Catalog — Lab Equipment”.
- **Layout**: Filters sidebar (drawer on mobile), Sort bar, Product grid, Pagination.
- **Sections**: Filter chips (category, brand, availability); ProductCard (image, title, specs, CTA).
- **States**: Empty/search-no-results; loading skeleton cards; error banner.
- **Data**: products (published, category, specs, images).
- **Analytics**: `filter_apply`, `product_card_click`, `add_to_inquiry`.
- **Accessibility**: Filters labeled; grid/list semantics; keyboard pagination.

---

## Enterprise — Product Detail

- **Route**: `/enterprise/catalog/[slug]`
- **Purpose**: Detailed specs; convert to inquiry.
- **Layout**: Gallery (carousel), Title/meta, Specs table, Downloads, Related products, Inquiry form.
- **Data**: product by slug; related by category.

---

## Enterprise — Designs

- **Route**: `/enterprise/designs`
- **Purpose**: Showcase laboratory designs/case studies.
- **Layout**: Filterable portfolio grid; CaseStudyCard; detail modal or page.
- **Data**: designs collection; assets.

---

## Enterprise — STEM

- **Route**: `/enterprise/stem`
- **Purpose**: Promote STEM programs; capture interest.
- **Layout**: Program cards (age/level), Schedule, Registration CTA.
- **Data**: programs collection.

---

## Intelligence — Overview

- **Route**: `/intelligence`
- **Purpose**: Explain services; route to IT, Data Center, Security, LMS.
- **Layout**: Hero, Service cards, Case studies, Inquiry CTA.

---

## Intelligence — IT Services

- **Route**: `/intelligence/it`
- **Layout**: Service catalog (cards), SLAs, Pricing tiers, CTA.

---

## Intelligence — Data Center

- **Route**: `/intelligence/data-center`
- **Layout**: Capabilities, Infrastructure specs, Compliance badges, Tour request CTA.

---

## Intelligence — Security Consulting

- **Route**: `/intelligence/security`
- **Layout**: Offerings (audits, pen-tests), Methodology, Case studies, CTA.

---

## Intelligence — LMS (Courses)

- **Route**: `/intelligence/lms`
- **Purpose**: List courses; route to course detail.
- **Layout**: Filters (topic/level), Course cards, Pagination.
- **Data**: courses (published, locale).

---

## Intelligence — Course Detail

- **Route**: `/intelligence/lms/[slug]`
- **Layout**: Hero (title, meta), Overview, Curriculum (accordion), Instructors, Enrollment CTA.
- **States**: Enrollment success modal.

---

## Resorts — Overview

- **Route**: `/resorts`
- **Purpose**: Describe offerings; route to subpages; drive bookings.
- **Layout**: Hero, Experience cards, Gallery teaser, Booking CTA.

---

## Resorts — Agro-tourism

- **Route**: `/resorts/agro-tourism`
- **Layout**: Activities list, Schedule, Family-friendly info, Booking CTA.

---

## Resorts — Animal Sanctuary

- **Route**: `/resorts/sanctuary`
- **Layout**: Sanctuary info, Exhibit gallery, Visit guidelines, Donation CTA.

---

## Resorts — Roadhouse Menu

- **Route**: `/resorts/roadhouse`
- **Layout**: Menu filters (meal, dietary), MenuItem cards, Specials banner.
- **Data**: menus (items, pricing, tags).

---

## Resorts — Hospitality

- **Route**: `/resorts/hospitality`
- **Layout**: Lodging options (cards), Amenities, Gallery, Booking CTA.

---

## Resorts — Outdoor Games

- **Route**: `/resorts/games`
- **Layout**: Activities grid, Rules/safety, Booking CTA.

---

## Resorts — Holidays & Camping

- **Route**: `/resorts/holidays`
- **Layout**: Packages, Calendar, Pricing, Booking CTA.

---

## Blog — List

- **Route**: `/blog`
- **Layout**: Category filter, Search, Post cards, Pagination.
- **States**: Empty category; loading cards.
- **Data**: blogPosts (publishedAt desc).

---

## Blog — Article

- **Route**: `/blog/[slug]`
- **Layout**: Title, Meta, Cover image, Rich content, Share, Related posts, Author bio.
- **SEO**: Article structured data.

---

## Events — List

- **Route**: `/events`
- **Layout**: Calendar/list toggle, Filters (division/date), Event cards.
- **Data**: events (upcoming first).

---

## Event — Detail

- **Route**: `/events/[id]`
- **Layout**: Hero (title/date/location), Details, Gallery, Registration CTA.

---

## Jobs — List

- **Route**: `/jobs`
- **Layout**: Filters (department/location), Job cards, Pagination.
- **Data**: jobs (published, open).

---

## Job — Detail

- **Route**: `/jobs/[id]`
- **Layout**: Title, Meta, Description, Requirements, Apply CTA → Application form.

---

## Job — Application

- **Route**: `/jobs/[id]/apply`
- **Layout**: Multi-step form (Personal, Experience, Documents, Review, Submit), Progress indicator.
- **States**: Draft autosave; upload progress; success screen.

---

## Contact

- **Route**: `/contact`
- **Layout**: Contact form (name/email/subject/message), Map, Contacts, Newsletter opt-in.
- **States**: Validation inline; success banner; error retry.

---

## Search Results

- **Route**: `/search?q=`
- **Layout**: Search input, Filters by type (product, post, event), Results list.
- **States**: No results; suggestions.

---

## Legal — Privacy Policy

- **Route**: `/legal/privacy`
- **Layout**: ToC sidebar, Content sections, Last updated.

---

## Legal — Terms of Service

- **Route**: `/legal/terms`
- **Layout**: ToC sidebar, Content sections, Last updated.

---

## Auth — Admin Sign In

- **Route**: `/admin/sign-in`
- **Layout**: Form (email/password or provider), Error handling, Redirect post-login.

---

## 404 Not Found

- **Route**: `/404`
- **Layout**: Friendly message, Search, Popular links.

---

## 500 Error

- **Route**: `/500`
- **Layout**: Apology, Retry action, Contact link.

---

## Admin — Dashboard

- **Route**: `/admin`
- **Purpose**: Snapshot of KPIs and quick access to modules.
- **Layout**: KPI cards (traffic, submissions, content status), Recent items, Quick links.
- **Access**: Authenticated (role: admin/editor).
- **Analytics**: `admin_view_dashboard`.

---

## Admin — Employees

- **Route**: `/admin/employees`
- **Layout**: Table (name, role, status), Filters, CRUD drawer/modal, Import CSV.
- **States**: Empty, bulk actions, optimistic updates.

---

## Admin — Jobs

- **Route**: `/admin/jobs`
- **Layout**: Job list/table, Filters (status, dept), Editor form, Applications tab per job.

---

## Admin — Events

- **Route**: `/admin/events`
- **Layout**: Calendar view + list, Event editor (title, time, location, image), Publish toggle.

---

## Admin — Blog

- **Route**: `/admin/blog`
- **Layout**: Posts table (status, author, updated), Editor (markdown/RTE), Media picker, Tags.

---

## Admin — Media

- **Route**: `/admin/media`
- **Layout**: Asset grid, Upload (drag/drop), Folder/tags, Preview, Delete/move.

---

## Admin — Courses (LMS)

- **Route**: `/admin/courses`
- **Layout**: Course list, Editor (title, locale, curriculum), Publish schedule.

---

## Admin — Menus (Resorts)

- **Route**: `/admin/menus`
- **Layout**: Menu categories, Items (name, price, tags), Specials scheduler.

---

## Admin — Contacts

- **Route**: `/admin/contacts`
- **Layout**: Inbox (list/detail), Labels, Status, Reply (mailto/template), Export CSV.

---

## Admin — Subscriptions

- **Route**: `/admin/subscriptions`
- **Layout**: Subscriber list, Segments, Export, Delete (GDPR).

---

## Admin — Settings

- **Route**: `/admin/settings`
- **Layout**: Tabs (Locales, SEO defaults, Roles, Integrations), Forms with validation.

---

## Global Components and Patterns

- **Header**: logo, primary nav, language switcher, search, admin link.
- **Footer**: sitemap, social, legal links.
- **Forms**: validation on blur; summary on submit; disabled submit during network.
- **Tables**: column sort, server-side pagination; keyboard navigation.
- **Modals/Drawers**: focus trap; ESC closes; backdrop click optional.
- **Loading**: skeletons for list-heavy pages; spinners for single actions.
- **Error handling**: inline errors + retry; toast for transient issues.
- **Theming**: light by default; support high-contrast mode.
- **Internationalization**: all user-facing strings via keys; EN/FR parity.
- **Accessibility**: WCAG 2.1 AA; logical headings and landmarks; alt text required.
