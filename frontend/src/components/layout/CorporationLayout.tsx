import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import CorporationNavigation from '../navigation/CorporationNavigation';
import CorporationFooter from '../footer/CorporationFooter';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

type CorporationLayoutProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const CorporationLayout = ({ title, description, canonicalUrl }: CorporationLayoutProps) => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  return (
    <div className="corporation-theme min-h-screen flex flex-col">
      <Helmet>
        {title || <title>{t('corporation.pageTitle')} | Broadway Corporation</title>}
        {description || <meta name="description" content={t('corporation.metaDescription')} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <html lang={language} />
      </Helmet>
      
      <CorporationNavigation />
      
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      
      <CorporationFooter />
    </div>
  );
};

export default CorporationLayout; 