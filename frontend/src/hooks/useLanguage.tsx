import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type LanguageCode = 'en' | 'fr';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Provider component for language context
 */
export const LanguageProvider = ({ children, initialLanguage = 'en' }: { children: ReactNode; initialLanguage?: LanguageCode }) => {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    // Try to get language from localStorage first
    const savedLanguage = localStorage.getItem('language') as LanguageCode;
    return savedLanguage || initialLanguage;
  });

  // Update localStorage when language changes
  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // Optionally could trigger i18n library language change here
    // i18n.changeLanguage(lang);
  };

  // Set language in HTML tag for accessibility
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook to access and update the current language
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default useLanguage; 