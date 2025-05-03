# 04 - Deployment

This document describes the process for building and deploying the Broadway Corporation website.

**1. Build Process:**

*   The project uses Vite for building the production-ready static assets.
*   **Recommendation:** Use a CI/CD pipeline (e.g., GitHub Actions, GitLab CI) to automate the build and deployment process.
*   Run the build command:
    ```bash
    pnpm run build
    ```
*   This command will generate an optimized production build in the `dist/` directory. The contents of this directory are what need to be deployed.

**2. Environment Variables for Production:**

*   Ensure that the necessary environment variables (primarily `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`) are set in your deployment environment. How you set these depends on your hosting provider.
*   **Security Note:** Never commit your production Supabase Service Role Key or any other secrets to your repository. Use secure environment variable management provided by your deployment platform or CI/CD service.

**3. Deployment Platforms:**

The `dist/` folder contains static HTML, CSS, and JavaScript files, suitable for deployment on various static hosting platforms or CDNs.

*   **Vercel:**
    *   Connect your Git repository (GitHub, GitLab, Bitbucket).
    *   Configure the build command: `pnpm run build`.
    *   Set the output directory: `dist`.
    *   Add environment variables in the Vercel project settings.
    *   Vercel typically handles automatic deployments on pushes to the main branch.

*   **Netlify:**
    *   Similar process to Vercel: connect Git repo, configure build settings (command: `pnpm run build`, publish directory: `dist`), and set environment variables.

*   **AWS (S3 + CloudFront):**
    *   Configure an S3 bucket for static website hosting.
    *   Upload the contents of the `dist/` directory to the S3 bucket.
    *   (Recommended) Set up a CloudFront distribution in front of the S3 bucket for caching, HTTPS, and global content delivery.
    *   Environment variables need to be handled during the build step (e.g., in a CI/CD pipeline) or potentially via Lambda@Edge if dynamic configuration is needed (less common for Vite static builds).

*   **Other Platforms:** (Azure Static Web Apps, Cloudflare Pages, Firebase Hosting, etc.)
    *   Most platforms have straightforward configurations for deploying static sites built with tools like Vite. Refer to the specific platform's documentation.

**4. Supabase Setup (Production):**

*   Ensure your Supabase project's database schema (tables for content, subscribers, users) is migrated and matches the production application.
*   **CRITICAL:** Configure and thoroughly test Row Level Security (RLS) policies in Supabase for *all* tables to ensure data privacy and prevent unauthorized access in production.
*   Set up regular database backups in Supabase.
*   Consider enabling Point-in-Time Recovery (PITR) if offered on your Supabase plan.

**5. Custom Domain:**

*   Once deployed, configure your custom domain (e.g., `broadwaycorp.com`) through your hosting provider's settings, usually involving DNS record changes (CNAME or A records). 