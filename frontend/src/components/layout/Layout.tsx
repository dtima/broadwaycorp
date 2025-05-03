import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../hooks/useLanguage';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

const Layout = ({ 
  children, 
  title = 'Broadway Corporation', 
  description = 'Broadway Corporation - Sustainable Development through Science, Education & Agriculture',
  keywords = 'broadway, corporation, enterprise, farmhouse, sustainable development, agriculture',
  canonicalUrl
}: LayoutProps) => {
  const { language } = useLanguage();
  const currentUrl = canonicalUrl || window.location.href;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <html lang={language} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />
        
        {/* Alternate language links */}
        <link rel="alternate" href={currentUrl.replace(`/${language}/`, '/en/')} hrefLang="en" />
        <link rel="alternate" href={currentUrl.replace(`/${language}/`, '/fr/')} hrefLang="fr" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 