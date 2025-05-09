import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

// Read language preference from local storage or environment
const savedLanguage = localStorage.getItem('language') || 'en';

// Check if we're in development mode (Vite compatible)
const isDevelopment = import.meta.env.DEV;

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      }
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes by default
    },
    detection: {
      order: ['localStorage', 'navigator']
    },
    // Enhanced missing key handling
    saveMissing: isDevelopment,
    missingKeyHandler: (lng, _ns, key) => {
      if (isDevelopment) {
        console.warn(`Missing translation key: ${key} for language: ${lng}`);
      }
      return key;
    },
    parseMissingKeyHandler: (key) => {
      // This will be shown in the UI for missing keys
      if (key.includes('.')) {
        // Return just the last part of the key for better UX
        return `[${key.split('.').pop()}]`;
      }
      return `[${key}]`;
    }
  });

export default i18n; 