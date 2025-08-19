import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { supportedLocales, defaultLocale } from '@/lib/i18n/config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!supportedLocales.includes(locale as any)) {
    notFound();
  }

  return {
    locale: locale, // Return the locale as expected
    messages: (await import(`@/lib/i18n/messages/${locale}.json`)).default,
    timeZone: 'UTC',
  };
});
