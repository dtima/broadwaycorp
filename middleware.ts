import { NextRequest, NextResponse } from 'next/server';

// Custom minimal i18n router to avoid next-intl middleware edge crashes
const LOCALES = ['en', 'fr'] as const;
const DEFAULT_LOCALE = 'en' as const;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip Next.js internals and static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    /\.[^/]+$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already locale-prefixed
  const firstSegment = pathname.split('/')[1];
  if (LOCALES.includes(firstSegment as any)) {
    return NextResponse.next();
  }

  // Redirect root and any non-localized path to the default locale
  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)']
};
