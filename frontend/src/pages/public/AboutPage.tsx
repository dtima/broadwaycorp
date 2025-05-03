import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet-async';

interface AboutPageProps {
  division?: 'corporation' | 'enterprise' | 'farmhouse';
}

const AboutPage: React.FC<AboutPageProps> = ({ division }) => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Get division-specific content
  const getDivisionTitle = () => {
    if (division === 'corporation') {
      return t('corporation.pageTitle');
    } else if (division === 'enterprise') {
      return t('enterprise.pageTitle');
    } else if (division === 'farmhouse') {
      return t('farmhouse.pageTitle');
    }
    return t('about.pageTitle');
  };

  return (
    <Layout>
      <Helmet>
        <title>{division ? `${getDivisionTitle()} - ${t('about.title')}` : `${t('about.pageTitle')} | Broadway Corporation`}</title>
        <meta name="description" content={t('about.metaDescription')} />
      </Helmet>

      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            {division ? t(`${division}.about.title`, { fallback: t('about.title') }) : t('about.title')}
          </h1>
          <p className="text-lg text-brand-gray-dark mb-8">
            {division ? t(`${division}.about.subtitle`, { fallback: t('about.subtitle') }) : t('about.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* CEO's Message Card */}
            <Link 
              to={`/${language}/${division ? division + '/' : ''}about/ceo-message`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="bg-brand-navy h-3 w-full"></div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  {t('navigation.aboutSubmenu.ceoMessage')}
                </h2>
                <p className="text-brand-gray-dark mb-4">
                  {division 
                    ? t(`${division}.about.ceoMessagePreview`, { fallback: t('about.ceoMessagePreview') }) 
                    : t('about.ceoMessagePreview')}
                </p>
                <span className="text-brand-orange font-medium inline-flex items-center">
                  {t('common.readMore')}
                  <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </div>
            </Link>

            {/* Leadership Team Card */}
            <Link 
              to={`/${language}/${division ? division + '/' : ''}about/leadership`}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
            >
              <div className="bg-brand-orange h-3 w-full"></div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                  {t('navigation.aboutSubmenu.leadership')}
                </h2>
                <p className="text-brand-gray-dark mb-4">
                  {division 
                    ? t(`${division}.about.leadershipPreview`, { fallback: t('about.leadershipPreview') }) 
                    : t('about.leadershipPreview')}
                </p>
                <span className="text-brand-orange font-medium inline-flex items-center">
                  {t('common.readMore')}
                  <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          {/* About Broadway Corporation */}
          <div className="bg-brand-gray-light p-6 md:p-8 rounded-lg mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
              {division 
                ? t(`${division}.about.aboutTitle`, { fallback: t('about.aboutBroadwayTitle') }) 
                : t('about.aboutBroadwayTitle')}
            </h2>
            <p className="text-brand-gray-dark mb-4">
              {division 
                ? t(`${division}.about.text1`, { fallback: t('about.aboutBroadwayText1') }) 
                : t('about.aboutBroadwayText1')}
            </p>
            <p className="text-brand-gray-dark mb-4">
              {division 
                ? t(`${division}.about.text2`, { fallback: t('about.aboutBroadwayText2') }) 
                : t('about.aboutBroadwayText2')}
            </p>
            <p className="text-brand-gray-dark">
              {division 
                ? t(`${division}.about.text3`, { fallback: t('about.aboutBroadwayText3') }) 
                : t('about.aboutBroadwayText3')}
            </p>
          </div>

          {/* Our Mission & Values */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
              {division 
                ? t(`${division}.about.missionValuesTitle`, { fallback: t('about.missionValuesTitle') }) 
                : t('about.missionValuesTitle')}
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-brand-navy mb-2">{t('about.missionTitle')}</h3>
              <p className="text-brand-gray-dark">
                {division 
                  ? t(`${division}.about.missionText`, { fallback: t('about.missionText') }) 
                  : t('about.missionText')}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">{t('about.valuesTitle')}</h3>
              <ul className="list-disc pl-5 text-brand-gray-dark space-y-2">
                <li>{division ? t(`${division}.about.value1`, { fallback: t('about.value1') }) : t('about.value1')}</li>
                <li>{division ? t(`${division}.about.value2`, { fallback: t('about.value2') }) : t('about.value2')}</li>
                <li>{division ? t(`${division}.about.value3`, { fallback: t('about.value3') }) : t('about.value3')}</li>
                <li>{division ? t(`${division}.about.value4`, { fallback: t('about.value4') }) : t('about.value4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage; 