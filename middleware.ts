import createMiddleware from 'next-intl/middleware';

// Inline minimal config to avoid Edge middleware bundling issues in production
const locales = ['en', 'fr'] as const;
const defaultLocale = 'en' as const;

export default createMiddleware({
  locales: Array.from(locales),
  defaultLocale,
  localePrefix: 'as-needed'
});

export const config = {
  // Only run on the root and on locale-prefixed routes
  matcher: ['/', '/(en|fr)/:path*']
};
