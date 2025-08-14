import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { SESSION_COOKIE_NAME } from '@/lib/auth/session';

type Ctx = { params: Promise<{ locale: string }> };
export async function POST(_: Request, ctx: Ctx) {
  const { locale } = await ctx.params;
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  return NextResponse.redirect(
    new URL(`/${locale}/admin/sign-in`, process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
  );
}
