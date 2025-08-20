// Hardcoded locales to avoid environment variable issues in Edge runtime
export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en' as const;
export const localePrefix = 'always'; // Changed from 'as-needed' to 'always'

const config = {
  locales,
  defaultLocale,
  localePrefix,
};

export default config;
