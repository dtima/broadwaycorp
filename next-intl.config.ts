// next-intl configuration for App Router with proper routing
export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en' as const;
export const localePrefix = 'always';

const config = {
  locales,
  defaultLocale,
  localePrefix,
  // Ensure proper routing behavior
  defaultLocale: 'en',
  localeDetection: false,
};

export default config;
