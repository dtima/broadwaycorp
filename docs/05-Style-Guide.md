# 05 - Frontend Style Guide

This document outlines the styling conventions and guidelines for the Broadway Corporation website frontend.

**1. Core Styling Framework:**

*   **Tailwind CSS:** This project uses Tailwind CSS, a utility-first framework. Styling should primarily be done by applying utility classes directly in the JSX markup.
*   Avoid writing large amounts of custom CSS. Use Tailwind's `@apply` directive sparingly in a global stylesheet (`src/styles/main.css`) only for base styles, complex component abstractions, or third-party library overrides if necessary.

**2. Configuration (`tailwind.config.js`):**

*   **Theme Extension:** The `tailwind.config.js` file should be used to extend the default Tailwind theme with project-specific values.
*   **Colors:**
    *   Define the primary brand colors and semantic mappings under `theme.extend.colors`:
        ```js
        // tailwind.config.js
        // Replace with actual hex codes for Broadway Corp.
        const colors = require('tailwindcss/colors')

        module.exports = {
          theme: {
            extend: {
              colors: {
                'brand-navy': '#003366', // Replace with actual Navy
                'brand-orange': '#FFA500', // Replace with actual Orange
                'brand-gray': colors.gray, // Use tailwind's gray scale
                'white': '#FFFFFF',
                'primary': { // Example semantic mapping
                  DEFAULT: '#003366', // brand-navy
                  // hover/focus states if needed
                },
                'secondary': { // Example semantic mapping
                  DEFAULT: '#FFA500', // brand-orange
                  // hover/focus states if needed
                },
                // Add text, background, border, accent colors as needed
              },
            },
          },
          plugins: [],
        }
        ```
        *(Ensure the hex codes match the final Broadway Corporation brand guidelines)*
*   **Fonts:** Define custom fonts if used (ensure font files are included in `public/assets/fonts` and loaded via CSS `@font-face` if self-hosting, or configure web fonts).
*   **Breakpoints:** Use Tailwind's default breakpoints (sm, md, lg, xl, 2xl) unless specific design requirements necessitate customization.

**3. Mobile-First & Responsiveness:**

*   Design and style components for mobile viewports first.
*   Use Tailwind's responsive modifiers (e.g., `md:`, `lg:`) to adapt layouts and styles for larger screens.
    ```jsx
    // Example: A div that is full-width on mobile, half-width on medium screens and up
    <div className="w-full md:w-1/2">
      {/* ... */}
    </div>
    ```

**4. Component Styling:**

*   Strive for reusable components (`src/components/`).
*   Pass styling variations via props when necessary, rather than creating slightly different components.
*   Use CSS Modules (`*.module.css`) only if absolutely necessary for complex component-specific styles that are difficult to achieve with utility classes alone.

**5. Typography:**

*   Define base heading and paragraph styles using Tailwind's font size, weight, and leading utilities, potentially applying base styles in `src/styles/main.css` via `@layer base`.
*   Use semantic HTML tags (`<h1>` - `<h6>`, `<p>`, `<ul>`, etc.) appropriately.

**6. Naming Conventions:**

*   Use descriptive names for custom theme extensions in `tailwind.config.js` (e.g., `brand-navy`, not just `navy`).
*   Component file names: `PascalCase.tsx` (e.g., `PrimaryButton.tsx`).

**7. Code Formatting & Linting:**

*   **Prettier:** Used for automatic code formatting. Configure via `.prettierrc`.
*   **ESLint:** Used for code quality and standards. Configure via `.eslintrc.js` (or similar).
*   **Tailwind Plugin:** Ensure the Prettier plugin (`prettier-plugin-tailwindcss`) is used for automatic sorting of Tailwind classes and the ESLint plugin (`eslint-plugin-tailwindcss`) is configured for linting Tailwind usage.

**8. Accessibility (A11y):**

*   Write semantic HTML (use `button`, `nav`, `main`, `article`, etc., correctly).
*   Ensure sufficient color contrast between text and background, especially using brand colors. Use tools to check contrast ratios.
*   Provide `alt` text for all meaningful images.
*   Use ARIA attributes where necessary to enhance accessibility for interactive components (e.g., modals, dropdowns), but prefer native HTML elements where possible.
*   Ensure keyboard navigability for all interactive elements. 