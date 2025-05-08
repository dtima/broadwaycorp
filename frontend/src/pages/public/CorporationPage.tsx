import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';
import Button from '../../components/common/Button';

const CorporationPage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <Layout>
      <Helmet>
        <title>{t('corporation.pageTitle')} | Broadway Corporation</title>
        <meta name="description" content={t('corporation.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-brand-navy py-12 md:py-20">
        <div className="container-custom">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
              {t('corporation.title')}
            </h1>
            <div className="w-20 h-1 bg-brand-orange mb-6"></div>
            <p className="text-white/90 text-center max-w-2xl text-lg">
              {t('corporation.heroTagline')}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <Link to={`/${language}/corporation/about`} className="inline-block px-6 py-3 bg-brand-orange text-white rounded hover:bg-opacity-90 transition-all font-medium">
                {t('common.learnMore')}
              </Link>
              <Button
                href={`/${language}/contact`} 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-navy"
              >
                {t('contact.contactButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-brand-gray-light py-3">
        <div className="container-custom">
          <nav className="flex text-sm">
            <Link to={`/${language}`} className="text-brand-navy hover:text-brand-orange transition-colors">
              {t('navigation.home')}
            </Link>
            <span className="mx-2 text-brand-gray">/</span>
            <span className="text-brand-gray-dark">{t('navigation.corporation')}</span>
          </nav>
        </div>
      </div>

      {/* Corporation Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Corporate Overview */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">{t('corporation.overviewTitle')}</h2>
            <div className="prose prose-lg max-w-none">
              <p>{t('corporation.overviewText1')}</p>
              <p>{t('corporation.overviewText2')}</p>
            </div>
          </div>

          {/* Corporate Structure */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">{t('corporation.structureTitle')}</h2>
            
            {/* Structure Diagram */}
            <div className="mb-8">
              <div className="relative py-10">
                {/* Parent Company */}
                <div className="bg-brand-navy text-white p-4 rounded-lg mb-8 max-w-xs mx-auto text-center">
                  <h3 className="font-bold mb-1">Broadway Corporation</h3>
                  <p className="text-sm text-white/80">Parent Company</p>
                </div>
                
                {/* Connector Line */}
                <div className="absolute top-[5.5rem] left-1/2 w-0.5 h-10 bg-brand-gray-dark transform -translate-x-1/2"></div>
                
                {/* Divisions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                  <div className="bg-brand-orange text-white p-4 rounded-lg text-center">
                    <h3 className="font-bold mb-1">Broadway Enterprise</h3>
                    <p className="text-sm text-white/80">Science & Education Division</p>
                  </div>
                  <div className="bg-green-600 text-white p-4 rounded-lg text-center">
                    <h3 className="font-bold mb-1">Broadway Farmhouse</h3>
                    <p className="text-sm text-white/80">Agriculture & Livestock Division</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-brand-gray-dark mb-6">
              {t('corporation.structureDescription')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('corporation.headquartersTitle')}</h3>
                <ul className="space-y-2 text-brand-gray-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{t('corporation.headquartersLocation')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>{t('corporation.headquartersFunction')}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('corporation.operationsTitle')}</h3>
                <ul className="space-y-2 text-brand-gray-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>{t('corporation.operationsLocation')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <span>{t('corporation.operationsFunction')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Operational Model */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">{t('corporation.modelTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 bg-brand-navy w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">1</div>
                  <h3 className="text-xl font-bold text-brand-navy mb-4">{t('corporation.modelStep1Title')}</h3>
                  <p className="text-brand-gray-dark">{t('corporation.modelStep1Text')}</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 bg-brand-navy w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">2</div>
                  <h3 className="text-xl font-bold text-brand-navy mb-4">{t('corporation.modelStep2Title')}</h3>
                  <p className="text-brand-gray-dark">{t('corporation.modelStep2Text')}</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 bg-brand-navy w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6">3</div>
                  <h3 className="text-xl font-bold text-brand-navy mb-4">{t('corporation.modelStep3Title')}</h3>
                  <p className="text-brand-gray-dark">{t('corporation.modelStep3Text')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Divisions */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">{t('corporation.divisionsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg group">
                <div className="bg-brand-orange h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">Broadway Enterprise</h3>
                  </div>
                  <p className="text-brand-gray-dark mb-4">{t('corporation.enterpriseDescription')}</p>
                  <div className="mb-4">
                    <h4 className="font-bold text-brand-navy mb-2">{t('corporation.keyFocusAreas')}:</h4>
                    <ul className="space-y-1 text-brand-gray-dark">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-brand-orange mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {t('corporation.enterpriseFocus1')}
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-brand-orange mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {t('corporation.enterpriseFocus2')}
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-brand-orange mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {t('corporation.enterpriseFocus3')}
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to={`/${language}/enterprise`}
                    className="text-brand-orange inline-flex items-center font-medium hover:underline"
                  >
                    {t('common.learnMore')}
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden rounded-lg shadow-md transition-all hover:shadow-lg group">
                <div className="bg-green-600 h-2 w-full"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600/10 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">Broadway Farmhouse</h3>
                  </div>
                  <p className="text-brand-gray-dark mb-4">{t('corporation.farmhouseDescription')}</p>
                  <div className="mb-4">
                    <h4 className="font-bold text-brand-navy mb-2">{t('corporation.keyFocusAreas')}:</h4>
                    <ul className="space-y-1 text-brand-gray-dark">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {t('corporation.farmhouseFocus1')}
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {t('corporation.farmhouseFocus2')}
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {t('corporation.farmhouseFocus3')}
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to={`/${language}/farmhouse`}
                    className="text-green-600 inline-flex items-center font-medium hover:underline"
                  >
                    {t('common.learnMore')}
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Future Initiatives */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">{t('corporation.futureTitle')}</h2>
            <p className="text-brand-gray-dark mb-6">{t('corporation.futureDescription')}</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-between bg-brand-navy p-6 rounded-lg text-white">
              <div>
                <h3 className="text-xl font-bold mb-2">{t('corporation.learnMoreTitle')}</h3>
                <p className="text-white/80">{t('corporation.learnMoreDescription')}</p>
              </div>
              <Link 
                to={`/${language}/about/ceo-message`}
                className="mt-4 sm:mt-0 px-6 py-3 bg-brand-orange text-white rounded hover:bg-opacity-90 transition-all font-medium inline-flex items-center"
              >
                {t('corporation.readCEOMessage')}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CorporationPage; 