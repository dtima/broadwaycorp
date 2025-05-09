import { createContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

type Language = 'en' | 'fr';

export type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n: i18nInstance } = useTranslation();
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'fr') ? savedLanguage as Language : 'en';
  });
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Sync with i18next
    if (i18nInstance.language !== language) {
      i18nInstance.changeLanguage(language);
    }
    
    // Update routes when language changes
    const currentPath = location.pathname;
    if (currentPath.startsWith('/en') || currentPath.startsWith('/fr')) {
      const pathSegments = currentPath.split('/');
      pathSegments[1] = language; // Replace language segment
      navigate(pathSegments.join('/'), { replace: true });
    } else if (currentPath === '/') {
      navigate(`/${language}`, { replace: true });
    }
  }, [language, navigate, location.pathname, i18nInstance]);

  const handleSetLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'fr' : 'en';
    handleSetLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}; 