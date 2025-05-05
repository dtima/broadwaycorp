import { Outlet } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import FarmhouseNavigation from '../navigation/FarmhouseNavigation';
import FarmhouseFooter from '../footer/FarmhouseFooter';
import { Helmet } from 'react-helmet-async';

type FarmhouseLayoutProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

const FarmhouseLayout = ({ title, description, canonicalUrl }: FarmhouseLayoutProps) => {
  const { language } = useLanguage();
  
  return (
    <div className="farmhouse-theme min-h-screen flex flex-col">
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang={language} />
      </Helmet>
      
      <FarmhouseNavigation />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <FarmhouseFooter />
    </div>
  );
};

export default FarmhouseLayout; 