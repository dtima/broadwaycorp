import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { supportedLocales } from '@/lib/i18n/config';
import { getCurrentUser } from '@/lib/auth/session';
import { canManageContent, canManageEmployees, getRoleFromClaims } from '@/lib/auth/rbac';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function AdminLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale)) notFound();
  unstable_setRequestLocale(locale);
  const messages = (await import(`@/lib/i18n/messages/${locale}.json`)).default;
  const user = await getCurrentUser();
  const role = getRoleFromClaims(user);

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-[var(--background)]">
        <header className="border-b bg-white/90 px-4 py-3 shadow-sm sm:px-6">
          <div className="mx-auto flex max-w-screen-xl items-center justify-between">
            <a
              href={`/${locale}`}
              className="flex items-center gap-2"
              aria-label="Go to public site"
            >
              <img src="/images/logo.svg" alt="Broadway Corporation" className="h-6 w-6" />
              <span className="font-semibold">Broadway Corporation Admin</span>
            </a>
            <nav className="hidden items-center gap-4 text-sm md:flex">
              {canManageContent(role) && (
                <a
                  href={`/${locale}/admin/inventory`}
                  className="rounded border px-2 py-1 hover:bg-neutral-50"
                >
                  Inventory
                </a>
              )}
              {canManageContent(role) && (
                <a
                  href={`/${locale}/admin/todos`}
                  className="rounded border px-2 py-1 hover:bg-neutral-50"
                >
                  Todos
                </a>
              )}
              {canManageContent(role) && (
                <a
                  href={`/${locale}/admin/projects`}
                  className="rounded border px-2 py-1 hover:bg-neutral-50"
                >
                  Projects
                </a>
              )}
              {canManageEmployees(role) && (
                <a
                  href={`/${locale}/admin/employees`}
                  className="rounded border px-2 py-1 hover:bg-neutral-50"
                >
                  Employees
                </a>
              )}
              {user ? (
                <form action={`/${locale}/admin/sign-out`} method="post">
                  <button className="rounded border px-2 py-1 hover:bg-neutral-50" type="submit">
                    Sign out
                  </button>
                </form>
              ) : (
                <a
                  href={`/${locale}/admin/sign-in`}
                  className="rounded border px-2 py-1 hover:bg-neutral-50"
                >
                  Sign in
                </a>
              )}
            </nav>
          </div>
        </header>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}
