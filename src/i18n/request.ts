import { getRequestConfig } from 'next-intl/server';
import { supportedLocales, defaultLocale } from '@/lib/i18n/config';

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = supportedLocales.includes(locale) ? locale : defaultLocale;
  const messages = (await import(`@/lib/i18n/messages/${resolvedLocale}.json`)).default;

  return {
    locale: resolvedLocale,
    messages,
    timeZone: 'UTC',
  };
});
