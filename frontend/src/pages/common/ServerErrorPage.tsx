import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';

const ServerErrorPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <Layout
      title={`${t('errors.serverError.title')} - Broadway Corporation`}
      description={t('errors.serverError.description')}
    >
      <div className="container-custom py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-7xl font-bold text-brand-navy mb-6">{t('errors.serverError.code')}</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">{t('errors.serverError.title')}</h2>
          
          <p className="text-gray-600 mb-8">
            {t('errors.serverError.description')}
          </p>
          
          <div className="flex justify-center gap-4">
            <Link to={`/${language}`} className="btn btn-primary">
              {t('errors.general.homeButton')}
            </Link>
            <Link to={`/${language}/contact`} className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
              {t('errors.general.contactButton')}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServerErrorPage; 