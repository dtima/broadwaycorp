import { NextRequest, NextResponse } from 'next/server';

// Custom minimal i18n router to avoid next-intl middleware edge crashes
const LOCALES = ['en', 'fr'] as const;
const DEFAULT_LOCALE = 'en' as const;

export function middleware(req: NextRequest) {
  try {
    const { pathname } = req.nextUrl;

    // Skip Next.js internals and static assets
    if (
      pathname === '/favicon.ico' ||
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

    // Only redirect the root path to default locale; let other paths pass
    if (pathname === '/') {
      const url = req.nextUrl.clone();
      url.pathname = `/${DEFAULT_LOCALE}`;
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (error) {
    // Log the error for debugging (this will appear in Vercel logs)
    console.error('Middleware error:', error);

    // Never break requests due to middleware - always allow the request to continue
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/(en|fr)/:path*'],
};
