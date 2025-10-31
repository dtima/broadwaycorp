// Runtime-safe i18n config for both Edge middleware and server

export const locales = ['en', 'fr'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.includes(locale as Locale);
}


