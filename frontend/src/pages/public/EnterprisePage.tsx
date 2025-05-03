import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

const EnterprisePage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Services data for the services section
  const services = [
    {
      id: 'scientific',
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
        </svg>
      ),
      title: t('enterprise.services.scientific.title'),
      description: t('enterprise.services.scientific.description'),
      items: [
        t('enterprise.services.scientific.item1'),
        t('enterprise.services.scientific.item2'),
        t('enterprise.services.scientific.item3'),
      ],
    },
    {
      id: 'education',
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
        </svg>
      ),
      title: t('enterprise.services.education.title'),
      description: t('enterprise.services.education.description'),
      items: [
        t('enterprise.services.education.item1'),
        t('enterprise.services.education.item2'),
        t('enterprise.services.education.item3'),
      ],
    },
    {
      id: 'laboratory',
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
      ),
      title: t('enterprise.services.laboratory.title'),
      description: t('enterprise.services.laboratory.description'),
      items: [
        t('enterprise.services.laboratory.item1'),
        t('enterprise.services.laboratory.item2'),
        t('enterprise.services.laboratory.item3'),
      ],
    },
    {
      id: 'community',
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      ),
      title: t('enterprise.services.community.title'),
      description: t('enterprise.services.community.description'),
      items: [
        t('enterprise.services.community.item1'),
        t('enterprise.services.community.item2'),
        t('enterprise.services.community.item3'),
      ],
    },
  ];

  // Impact stats
  const impactStats = [
    {
      number: '50+',
      label: t('enterprise.impact.stat1Label'),
      description: t('enterprise.impact.stat1Description'),
    },
    {
      number: '5,000+',
      label: t('enterprise.impact.stat2Label'),
      description: t('enterprise.impact.stat2Description'),
    },
    {
      number: '25+',
      label: t('enterprise.impact.stat3Label'),
      description: t('enterprise.impact.stat3Description'),
    },
    {
      number: '15+',
      label: t('enterprise.impact.stat4Label'),
      description: t('enterprise.impact.stat4Description'),
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t('enterprise.pageTitle')} | Broadway Corporation</title>
        <meta name="description" content={t('enterprise.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-brand-navy py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-brand-navy"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-brand-orange/10 rounded-full">
              <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('enterprise.heroTitle')}
            </h1>
            <div className="w-24 h-1 bg-brand-orange mb-6"></div>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              {t('enterprise.heroSubtitle')}
            </p>
            <Link 
              to={`/${language}/contact`}
              className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              {t('enterprise.contactButton')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
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
            <span className="text-brand-gray-dark">{t('navigation.enterprise')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{t('enterprise.introTitle')}</h2>
                <div className="prose prose-lg max-w-none">
                  <p>{t('enterprise.introText1')}</p>
                  <p>{t('enterprise.introText2')}</p>
                </div>
              </div>
              <div className="bg-brand-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-navy mb-4">{t('enterprise.missionTitle')}</h3>
                <blockquote className="border-l-4 border-brand-orange pl-4 py-2 italic text-brand-gray-dark">
                  {t('enterprise.missionStatement')}
                </blockquote>
                <div className="mt-4">
                  <h4 className="font-bold text-brand-navy mb-2">{t('enterprise.ourApproach')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-brand-gray-dark">{t('enterprise.approach1')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-brand-gray-dark">{t('enterprise.approach2')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-brand-gray-dark">{t('enterprise.approach3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{t('enterprise.servicesTitle')}</h2>
              <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">{t('enterprise.servicesSubtitle')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">{service.title}</h3>
                  </div>
                  <p className="text-brand-gray-dark mb-4">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-brand-gray-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Impact */}
          <div className="mb-16">
            <div className="bg-brand-navy rounded-lg overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t('enterprise.impactTitle')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {impactStats.map((stat, index) => (
                    <div key={index} className="bg-white/10 p-4 rounded-lg">
                      <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-2">{stat.number}</div>
                      <div className="text-lg font-medium text-white mb-1">{stat.label}</div>
                      <div className="text-sm text-white/80">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">{t('enterprise.caseStudiesTitle')}</h2>
            
            <div className="bg-brand-gray-light rounded-lg p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-[4/3] bg-brand-gray relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-orange opacity-80 flex items-center justify-center text-white font-bold text-xl">
                      {t('enterprise.caseStudies.case1.location')}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{t('enterprise.caseStudies.case1.title')}</h3>
                  <p className="text-brand-gray-dark mb-4">{t('enterprise.caseStudies.case1.description')}</p>
                  <div className="font-medium text-brand-navy">
                    <span className="text-brand-orange">{t('enterprise.results')}:</span> {t('enterprise.caseStudies.case1.results')}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-gray-light rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-[4/3] bg-brand-gray relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-orange opacity-80 flex items-center justify-center text-white font-bold text-xl">
                      {t('enterprise.caseStudies.case2.location')}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{t('enterprise.caseStudies.case2.title')}</h3>
                  <p className="text-brand-gray-dark mb-4">{t('enterprise.caseStudies.case2.description')}</p>
                  <div className="font-medium text-brand-navy">
                    <span className="text-brand-orange">{t('enterprise.results')}:</span> {t('enterprise.caseStudies.case2.results')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SDG Alignment */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">{t('enterprise.sdgTitle')}</h2>
            <p className="text-lg text-brand-gray-dark mb-8">{t('enterprise.sdgDescription')}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#C5192D] h-1 w-16 mb-4"></div>
                <h3 className="font-bold text-brand-navy mb-2">{t('enterprise.sdgs.sdg4.title')}</h3>
                <p className="text-brand-gray-dark text-sm">{t('enterprise.sdgs.sdg4.description')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#FF3A21] h-1 w-16 mb-4"></div>
                <h3 className="font-bold text-brand-navy mb-2">{t('enterprise.sdgs.sdg3.title')}</h3>
                <p className="text-brand-gray-dark text-sm">{t('enterprise.sdgs.sdg3.description')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#26BDE2] h-1 w-16 mb-4"></div>
                <h3 className="font-bold text-brand-navy mb-2">{t('enterprise.sdgs.sdg6.title')}</h3>
                <p className="text-brand-gray-dark text-sm">{t('enterprise.sdgs.sdg6.description')}</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-brand-gray-light p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-2">{t('enterprise.ctaTitle')}</h2>
              <p className="text-brand-gray-dark">{t('enterprise.ctaDescription')}</p>
            </div>
            <Link 
              to={`/${language}/contact`}
              className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-6 rounded-md transition-colors whitespace-nowrap"
            >
              {t('enterprise.ctaButton')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EnterprisePage; 