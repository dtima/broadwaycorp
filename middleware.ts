import createMiddleware from 'next-intl/middleware';

// Inline minimal config to avoid Edge middleware bundling issues in production
const locales = ['en', 'fr'] as const;
const defaultLocale = 'en' as const;

export default createMiddleware({
  locales: Array.from(locales),
  defaultLocale,
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
