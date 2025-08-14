import createMiddleware from 'next-intl/middleware';
import { defaultLocale, supportedLocales } from './src/lib/i18n/config';

export default createMiddleware({
  locales: supportedLocales,
  defaultLocale,
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!api|_next|.*\\..*).*)',
  ],
};
