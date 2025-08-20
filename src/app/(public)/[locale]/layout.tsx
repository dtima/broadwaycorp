import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
// Hardcoded locales to avoid environment variable issues
const supportedLocales = ['en', 'fr'] as const;
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClickTracker from '@/components/analytics/ClickTracker';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as any)) {
    notFound();
  }
  unstable_setRequestLocale(locale);

  const messages = (await import(`@/lib/i18n/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
      <Header locale={locale} />
      <ClickTracker />
      <main id="main">{children}</main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}
