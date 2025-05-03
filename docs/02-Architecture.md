# 02 - Technical Architecture

This document outlines the technical architecture choices for the Broadway Corporation website.

**1. Frontend Framework:**

*   **React (with Vite):** Chosen for its component-based architecture, strong community support, performance benefits with Vite's fast HMR and optimized builds, and suitability for building interactive user interfaces.
*   **TypeScript:** Used for static typing, improving code quality, maintainability, and developer experience, especially in larger projects.

**2. Styling:**

*   **Tailwind CSS:** A utility-first CSS framework allowing for rapid UI development directly in the markup. It facilitates consistency, maintainability, and responsiveness through its utility classes. Configuration will be done in `tailwind.config.js` to define custom themes (colors, fonts) based on the brand guidelines.

**3. Routing:**

*   **React Router:** The standard library for routing in React applications. It will manage navigation between different pages and sections (Holding Company, Enterprise, Farmhouse, Admin). URL structure will likely incorporate language prefixes (e.g., `/en/`, `/fr/`).

**4. State Management:**

*   **React Context API & Hooks:** For managing global state like user authentication, theme, and internationalization settings.
*   **Component State:** Local state will be managed using `useState` and `useReducer` where appropriate.
*   **Data Fetching Library:** `TanStack Query (React Query)` is recommended for managing server state effectively when interacting with Supabase, handling caching, background updates, and simplifying data fetching logic.

**5. Backend & Database:**

*   **Supabase:** A Backend-as-a-Service (BaaS) platform providing PostgreSQL database, authentication, real-time subscriptions, and storage. It simplifies backend development, allowing focus on the frontend. Used for:
    *   User authentication (admin users).
    *   Storing website content (page text, news articles - allowing admin edits).
    *   Managing newsletter subscribers.

**6. SEO:**

*   **`react-helmet-async`:** Preferred over `react-helmet` for modern React applications. Used to manage document head tags (`<title>`, `<meta>`) dynamically for each page, improving SEO and social sharing previews.

**7. Internationalization (i18n):**

*   A dedicated library like `i18next` with `react-i18next` is recommended to manage translations for English and French. This library will handle loading translation strings (e.g., from JSON files in `public/locales/` or fetched from Supabase) based on the selected language.

**8. Development Approach:**

*   **Mobile-First:** Components and layouts will be styled prioritizing smaller screens and then adapted for larger viewports using Tailwind's responsive modifiers.
*   **Component-Based:** Following React's paradigm, the UI will be broken down into reusable components.

**9. Hosting:**

*   Likely a static hosting platform optimized for Vite builds (e.g., Vercel, Netlify) or cloud provider services (AWS S3/CloudFront, Azure Static Web Apps). Supabase handles the backend aspects. 