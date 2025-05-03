import { useTranslation } from 'react-i18next';

/**
 * Custom hook that extends useTranslation with fallback handling
 * for missing translation keys.
 */
export const useTranslationWithFallback = () => {
  const { t, i18n, ...rest } = useTranslation();
  
  // Enhanced t function with fallback handling
  const tWithFallback = (key: string, defaultValue?: string) => {
    const translation = t(key, { defaultValue: defaultValue || key });
    
    // If the translation is the same as the key and no default was provided,
    // it's likely missing
    if (translation === key && !defaultValue) {
      // Log missing key in development
      if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        console.warn(`[Translation Missing] Key: "${key}" in language: "${i18n.language}"`);
      }
      
      // Return the fallback error message or the key itself
      return t('errors.missingTranslation', { defaultValue: key });
    }
    
    return translation;
  };
  
  return {
    t: tWithFallback,
    i18n,
    ...rest
  };
};

export default useTranslationWithFallback; 