# 03 - Development Setup

This guide describes how to set up the development environment for the Broadway Corporation website.

**Prerequisites:**

*   **Node.js:** (Current LTS version recommended, e.g., 20.x) - Download from [https://nodejs.org/](https://nodejs.org/)
*   **pnpm:** Install via `npm install -g pnpm` or see [https://pnpm.io/installation](https://pnpm.io/installation)
*   **Git:** Download from [https://git-scm.com/](https://git-scm.com/)
*   **Supabase Account & CLI (Optional):** Create a free account at [https://supabase.com/](https://supabase.com/) and set up a new project. Consider installing the Supabase CLI (`npm install -g supabase`) for local development and managing database migrations ([https://supabase.com/docs/guides/cli](https://supabase.com/docs/guides/cli)).

**Setup Steps:**

1.  **Clone the Repository:**
    ```bash
    # Replace [Your Repository URL] with the actual URL
    git clone [Your Repository URL]
    # Replace broadwaycorp-website with the actual directory name if different
    cd broadwaycorp-website 
    ```

2.  **Install Dependencies:**
    ```bash
    pnpm install
    ```

3.  **Configure Environment Variables:**
    *   Copy the example environment file:
        ```bash
        cp .env.example .env.local
        ```
        *(Note: `.env.local` is typically gitignored by default in Vite projects. Use `.env` if you prefer, but ensure it's added to `.gitignore`)*
    *   Open the `.env.local` file.
    *   Find your Supabase Project API keys and URL in your Supabase project settings (Project Settings -> API).
    *   Fill in the required variables:
        ```dotenv
        VITE_SUPABASE_URL=YOUR_SUPABASE_URL
        VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
        
        # Vite exposes env variables prefixed with VITE_ to the client-side code.
        # Do not expose sensitive keys (like Supabase service_role key) here.
        ```

4.  **Run the Development Server:**
    ```bash
    pnpm run dev
    ```
    This will start the Vite development server, usually accessible at `http://localhost:5173` (the exact port might vary).

5.  **Linting and Formatting:**
    Run the following commands to check and fix code style:
    ```bash
    # Check for linting errors
    pnpm run lint

    # Apply automatic formatting fixes
    pnpm run format 
    ```
    *(Ensure ESLint and Prettier are configured correctly in the project)*

**Development Tools & Extensions (Recommended):**

*   **VS Code Extensions:**
    *   ESLint
    *   Prettier - Code formatter
    *   Tailwind CSS IntelliSense
    *   DotENV (for syntax highlighting `.env` files)
    *   GitLens
*   **React Developer Tools** (Browser Extension)
*   **Tailwind DevTools** (Browser Extension - optional)

**Troubleshooting:**

*   Ensure Node.js (LTS) and pnpm are correctly installed and their versions meet any project requirements (check `package.json` engines field if specified).
*   Verify that the Supabase URL and Anon Key in `.env.local` are correct and do not contain typos.
*   If encountering dependency issues, try deleting `node_modules` and `pnpm-lock.yaml` and run `pnpm install` again. 