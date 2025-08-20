import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Hardcode the locales to avoid environment variable issues in edge runtime
const SUPPORTED_LOCALES = ['en', 'fr'] as const;
const DEFAULT_LOCALE = 'en' as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!SUPPORTED_LOCALES.includes(locale as any)) {
    notFound();
  }

  return {
    messages: (await import(`@/lib/i18n/messages/${locale}.json`)).default,
    timeZone: 'UTC',
  };
});
