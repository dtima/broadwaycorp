import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';

const LanguageRouteWrapper = () => {
  const { language, setLanguage } = useLanguage();
  const { lang } = useParams<{ lang: string }>();
  const supportedLanguages = ['en', 'fr'];
  
  // Extract path language from URL params
  useEffect(() => {
    if (lang && supportedLanguages.includes(lang) && lang !== language) {
      // Update language if URL has a different one
      setLanguage(lang as 'en' | 'fr');
    }
  }, [lang, language, setLanguage]);
  
  return null;
};

export default LanguageRouteWrapper; 