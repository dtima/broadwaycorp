.
├── public/                  # Static assets (images, fonts, favicons, etc.)
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo/
│   │   │   │   ├── logo-navy.svg
│   │   │   │   ├── logo-orange.svg
│   │   │   │   └── logo-white.svg
│   │   │   ├── enterprise/ # Images specific to Enterprise
│   │   │   ├── farmhouse/  # Images specific to Farmhouse
│   │   │   └── general/    # General website images (banners, icons)
│   │   └── fonts/          # Font files if self-hosting
│   ├── locales/             # Static translation files (alternative to CMS)
│   │   ├── en.json
│   │   └── fr.json
│   └── favicon.ico
│   └── ...other static files
│
├── src/
│   ├── App.tsx              # Main application component (routing, global layout)
│   ├── main.tsx             # Application entry point
│   ├── assets/              # Assets imported directly into components (e.g., SVGs as components)
│   │   └── icons/
│   ├── components/          # Reusable UI components (Shared across pages)
│   │   ├── common/          # General purpose components (Button, Card, Input, Modal)
│   │   ├── layout/          # Layout components (Header, Footer, Sidebar, PageWrapper)
│   │   ├── sections/        # Larger, page-specific section components (Hero, FeatureGrid, Testimonials)
│   │   │   ├── home/
│   │   │   ├── enterprise/
│   │   │   └── farmhouse/
│   │   └── admin/           # Components specific to the Admin Dashboard
│   ├── contexts/            # React Context providers (e.g., AuthContext, I18nContext)
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions, API clients (e.g., Supabase client)
│   ├── services/            # Business logic, data fetching (interacting with lib/Supabase)
│   ├── styles/              # Global styles, themes, CSS modules base
│   │   ├── base/            # Base styles, resets, typography
│   │   ├── themes/          # Theme definitions (e.g., light/dark, color vars)
│   │   └── main.css         # Main global stylesheet
│   ├── types/               # TypeScript type definitions
│   │   ├── api/
│   │   └── index.d.ts
│   ├── router/              # Routing configuration
│   │   ├── index.tsx        # Main router setup
│   │   ├── PublicRoutes.tsx # Routes accessible to everyone
│   │   └── AdminRoutes.tsx  # Protected admin routes
│   ├── pages/               # Page-level components (mapped by the router)
│   │   ├── common/          # Pages shared across languages
│   │   │   ├── NotFoundPage.tsx      # 404 Page
│   │   │   ├── PrivacyPolicyPage.tsx
│   │   │   └── TermsOfServicePage.tsx
│   │   ├── public/          # Public facing website pages
│   │   │   ├── HomePage.tsx
│   │   │   ├── CorporationPage.tsx    # About the Holding Company
│   │   │   ├── Enterprise/
│   │   │   │   ├── EnterpriseOverviewPage.tsx
│   │   │   │   ├── ScientificEquipmentPage.tsx
│   │   │   │   ├── ResearchEducationPage.tsx
│   │   │   │   ├── TutoringSupportPage.tsx
│   │   │   │   ├── LabDesignPage.tsx
│   │   │   │   ├── OfficeSuppliesPage.tsx
│   │   │   │   ├── EnvironmentalSolutionsPage.tsx
│   │   │   │   └── CommunityDevelopmentPage.tsx # Enterprise specific
│   │   │   ├── Farmhouse/
│   │   │   │   ├── FarmhouseOverviewPage.tsx
│   │   │   │   ├── LivestockHusbandryPage.tsx
│   │   │   │   ├── AquaculturePage.tsx
│   │   │   │   ├── AgricultureHorticulturePage.tsx
│   │   │   │   ├── CommunityTrainingPage.tsx   # Farmhouse specific
│   │   │   │   └── FutureProjects/
│   │   │   │       ├── FutureProjectsOverviewPage.tsx
│   │   │   │       ├── RoadhousePage.tsx
│   │   │   │       ├── ResortFarmPage.tsx
│   │   │   │       └── ScorpionFarmPage.tsx
│   │   │   ├── News/
│   │   │   │   ├── NewsListPage.tsx
│   │   │   │   └── NewsArticlePage.tsx # Likely uses a dynamic route parameter
│   │   │   └── ContactPage.tsx
│   │   └── admin/           # Admin Dashboard Pages
│   │       ├── LoginPage.tsx
│   │       ├── DashboardHomePage.tsx
│   │       ├── Subscribers/
│   │       │   ├── SubscriberListPage.tsx
│   │       │   └── ManageSubscriberPage.tsx # Create/Edit
│   │       ├── Content/
│   │       │   ├── ContentOverviewPage.tsx
│   │       │   ├── EditPageContentPage.tsx # Dynamic route for different pages
│   │       │   ├── ManageNewsPage.tsx      # List/Create/Edit/Delete News
│   │       │   └── EditNewsArticlePage.tsx # Specific editor for articles
│   │       └── SettingsPage.tsx        # Admin settings (if needed)
│
├── docs/                    # Project documentation files
│   ├── 01-Overview.md       # Reference or summary of the main README
│   ├── 02-Architecture.md   # High-level technical design, choices made
│   ├── 03-Setup-Development.md # How to set up the dev environment
│   ├── 04-Deployment.md     # How to build and deploy the site
│   ├── 05-Style-Guide.md    # Frontend guidelines (colors, typography, components)
│   ├── 06-Internationalization.md # Details on how i18n is implemented (routes, content)
│   ├── 07-Admin-Dashboard.md # How to use the admin panel
│   ├── 08-CMS-Integration.md # How content editing works (Supabase tables, API?)
│   ├── 09-API-Reference.md  # If custom API endpoints exist
│   └── CONTRIBUTING.md      # Guidelines for contributors
│
├── .env.example             # Example environment variables
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts           # Vite configuration file
└── README.md                # The main project README you provided