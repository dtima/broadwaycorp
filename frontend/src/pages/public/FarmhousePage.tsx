import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../hooks/useLanguage';

const FarmhousePage = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Services data for the services section
  const services = [
    {
      id: 'agriculture',
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      ),
      title: t('farmhouse.services.agriculture.title'),
      description: t('farmhouse.services.agriculture.description'),
      items: [
        t('farmhouse.services.agriculture.item1'),
        t('farmhouse.services.agriculture.item2'),
        t('farmhouse.services.agriculture.item3'),
      ],
    },
    {
      id: 'livestock',
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
        </svg>
      ),
      title: t('farmhouse.services.livestock.title'),
      description: t('farmhouse.services.livestock.description'),
      items: [
        t('farmhouse.services.livestock.item1'),
        t('farmhouse.services.livestock.item2'),
        t('farmhouse.services.livestock.item3'),
      ],
    },
    {
      id: 'aquaculture',
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"></path>
        </svg>
      ),
      title: t('farmhouse.services.aquaculture.title'),
      description: t('farmhouse.services.aquaculture.description'),
      items: [
        t('farmhouse.services.aquaculture.item1'),
        t('farmhouse.services.aquaculture.item2'),
        t('farmhouse.services.aquaculture.item3'),
      ],
    },
    {
      id: 'training',
      icon: (
        <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
        </svg>
      ),
      title: t('farmhouse.services.training.title'),
      description: t('farmhouse.services.training.description'),
      items: [
        t('farmhouse.services.training.item1'),
        t('farmhouse.services.training.item2'),
        t('farmhouse.services.training.item3'),
      ],
    },
  ];

  // Impact stats
  const impactStats = [
    {
      number: '100+',
      label: t('farmhouse.impact.stat1Label'),
      description: t('farmhouse.impact.stat1Description'),
    },
    {
      number: '30+',
      label: t('farmhouse.impact.stat2Label'),
      description: t('farmhouse.impact.stat2Description'),
    },
    {
      number: '500+',
      label: t('farmhouse.impact.stat3Label'),
      description: t('farmhouse.impact.stat3Description'),
    },
    {
      number: '20+',
      label: t('farmhouse.impact.stat4Label'),
      description: t('farmhouse.impact.stat4Description'),
    },
  ];

  // Future projects data
  const futureProjects = [
    {
      id: 'roadhouse',
      title: t('future.projects.roadhouse.title'),
      description: t('future.projects.roadhouse.description'),
      tag: t('future.projects.roadhouse.tag'),
      link: `/${language}/farmhouse/future-projects/roadhouse`,
    },
    {
      id: 'resort',
      title: t('future.projects.resort.title'),
      description: t('future.projects.resort.description'),
      tag: t('future.projects.resort.tag'),
      link: `/${language}/farmhouse/future-projects/resort-farm`,
    },
    {
      id: 'scorpion',
      title: t('future.projects.scorpion.title'),
      description: t('future.projects.scorpion.description'),
      tag: t('future.projects.scorpion.tag'),
      link: `/${language}/farmhouse/future-projects/scorpion-farm`,
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>{t('farmhouse.pageTitle')} | Broadway Corporation</title>
        <meta name="description" content={t('farmhouse.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-brand-navy py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-brand-navy"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-brand-orange/10 rounded-full">
              <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('farmhouse.heroTitle')}
            </h1>
            <div className="w-24 h-1 bg-brand-orange mb-6"></div>
            <p className="text-white/90 text-lg md:text-xl mb-8">
              {t('farmhouse.heroSubtitle')}
            </p>
            <Link 
              to={`/${language}/contact`}
              className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              {t('farmhouse.contactButton')}
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
            <span className="text-brand-gray-dark">{t('navigation.farmhouse')}</span>
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
                <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{t('farmhouse.introTitle')}</h2>
                <div className="prose prose-lg max-w-none">
                  <p>{t('farmhouse.introText1')}</p>
                  <p>{t('farmhouse.introText2')}</p>
                </div>
              </div>
              <div className="bg-brand-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-brand-navy mb-4">{t('farmhouse.missionTitle')}</h3>
                <blockquote className="border-l-4 border-brand-orange pl-4 py-2 italic text-brand-gray-dark">
                  {t('farmhouse.missionStatement')}
                </blockquote>
                <div className="mt-4">
                  <h4 className="font-bold text-brand-navy mb-2">{t('farmhouse.ourApproach')}</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-brand-gray-dark">{t('farmhouse.approach1')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-brand-gray-dark">{t('farmhouse.approach2')}</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-brand-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-brand-gray-dark">{t('farmhouse.approach3')}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">{t('farmhouse.servicesTitle')}</h2>
              <p className="text-lg text-brand-gray-dark max-w-2xl mx-auto">{t('farmhouse.servicesSubtitle')}</p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{t('farmhouse.impactTitle')}</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">{t('farmhouse.caseStudiesTitle')}</h2>
            
            <div className="bg-brand-gray-light rounded-lg p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-[4/3] bg-brand-gray relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-orange opacity-80 flex items-center justify-center text-white font-bold text-xl">
                      {t('farmhouse.caseStudies.case1.location')}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{t('farmhouse.caseStudies.case1.title')}</h3>
                  <p className="text-brand-gray-dark mb-4">{t('farmhouse.caseStudies.case1.description')}</p>
                  <div className="font-medium text-brand-navy">
                    <span className="text-brand-orange">{t('farmhouse.results')}:</span> {t('farmhouse.caseStudies.case1.results')}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-gray-light rounded-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="aspect-[4/3] bg-brand-gray relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-orange opacity-80 flex items-center justify-center text-white font-bold text-xl">
                      {t('farmhouse.caseStudies.case2.location')}
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{t('farmhouse.caseStudies.case2.title')}</h3>
                  <p className="text-brand-gray-dark mb-4">{t('farmhouse.caseStudies.case2.description')}</p>
                  <div className="font-medium text-brand-navy">
                    <span className="text-brand-orange">{t('farmhouse.results')}:</span> {t('farmhouse.caseStudies.case2.results')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SDG Alignment */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-6">{t('farmhouse.sdgTitle')}</h2>
            <p className="text-lg text-brand-gray-dark mb-8">{t('farmhouse.sdgDescription')}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#3F7E44] h-1 w-16 mb-4"></div>
                <h3 className="font-bold text-brand-navy mb-2">{t('farmhouse.sdgs.sdg2.title')}</h3>
                <p className="text-brand-gray-dark text-sm">{t('farmhouse.sdgs.sdg2.description')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#19486A] h-1 w-16 mb-4"></div>
                <h3 className="font-bold text-brand-navy mb-2">{t('farmhouse.sdgs.sdg14.title')}</h3>
                <p className="text-brand-gray-dark text-sm">{t('farmhouse.sdgs.sdg14.description')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-[#0A97D9] h-1 w-16 mb-4"></div>
                <h3 className="font-bold text-brand-navy mb-2">{t('farmhouse.sdgs.sdg6.title')}</h3>
                <p className="text-brand-gray-dark text-sm">{t('farmhouse.sdgs.sdg6.description')}</p>
              </div>
            </div>
          </div>

          {/* Future Projects */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-8">{t('farmhouse.futureProjectsTitle')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {futureProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="bg-brand-gray-light aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-orange opacity-60"></div>
                    <div className="absolute top-3 left-3 bg-white text-brand-navy text-xs font-medium px-2 py-1 rounded">
                      {project.tag}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-brand-navy mb-2">{project.title}</h3>
                    <p className="text-brand-gray-dark text-sm mb-4 flex-1">{project.description}</p>
                    <Link to={project.link} className="text-brand-orange hover:text-brand-navy font-medium transition-colors mt-auto">
                      {t('future.projects.roadhouse.link')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-brand-gray-light p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-2">{t('farmhouse.ctaTitle')}</h2>
              <p className="text-brand-gray-dark">{t('farmhouse.ctaDescription')}</p>
            </div>
            <Link 
              to={`/${language}/contact`}
              className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-6 rounded-md transition-colors whitespace-nowrap"
            >
              {t('farmhouse.ctaButton')}
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

export default FarmhousePage; 