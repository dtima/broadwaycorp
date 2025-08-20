import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { supportedLocales } from '@/lib/i18n/config';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function AuthLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = (await import(`@/lib/i18n/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <header className="border-b bg-white/80 px-4 py-3 sm:px-6 dark:bg-[var(--background)]/80">
        <div className="mx-auto flex max-w-screen-xl items-center">
          <a
            href={`/${locale}`}
            className="flex items-center gap-2 hover:opacity-90"
            aria-label="Go to home"
          >
            <img src="/images/logo.svg" alt="Broadway Corporation" className="h-6 w-6" />
            <span className="text-lg font-semibold">Broadway Corporation</span>
          </a>
        </div>
      </header>
      {children}
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}
