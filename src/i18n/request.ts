import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, defaultLocale, type Locale, isValidLocale } from './config';

// Static imports - more reliable than dynamic imports
import enMessages from '@/lib/i18n/messages/en.json';
import frMessages from '@/lib/i18n/messages/fr.json';

// Message map with static imports
const messages = {
  en: enMessages,
  fr: frMessages,
} as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is a valid locale.
  if (!isValidLocale(locale)) {
    notFound();
  }

  return {
    locale,
    messages: messages[locale],
    timeZone: 'Africa/Douala',
  };
});
