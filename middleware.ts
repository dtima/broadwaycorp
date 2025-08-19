import { NextRequest, NextResponse } from 'next/server';

// TEMPORARILY DISABLED TO TEST IF MIDDLEWARE IS THE SOURCE OF RUNTIME 500 ERROR
export function middleware(req: NextRequest) {
  // Simply allow all requests to pass through without any processing
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
