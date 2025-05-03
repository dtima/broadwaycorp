import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import EnterpriseNavigation from '../navigation/EnterpriseNavigation';
import EnterpriseFooter from '../footer/EnterpriseFooter';
import { Helmet } from 'react-helmet-async';

type EnterpriseLayoutProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const EnterpriseLayout = ({ title, description, canonicalUrl }: EnterpriseLayoutProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="enterprise-theme min-h-screen flex flex-col">
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <html lang={language} />
      </Helmet>
      
      <EnterpriseNavigation />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <EnterpriseFooter />
    </div>
  );
};

export default EnterpriseLayout; 