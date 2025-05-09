import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import SubNavigation from '../../components/navigation/SubNavigation';
import ExpandableText from '../../components/common/ExpandableText';
import RelatedLinks from '../../components/navigation/RelatedLinks';
import NextPrevNavigation from '../../components/navigation/NextPrevNavigation';
import { useEffect, useRef, useState } from 'react';

const FarmhouseProjects = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');

  // Refs for each section for intersection observer
  const overviewRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const sustainabilityRef = useRef<HTMLDivElement>(null);

  // Setup intersection observer to update active section based on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (featuredRef.current) observer.observe(featuredRef.current);
    if (sustainabilityRef.current) observer.observe(sustainabilityRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Sub-navigation items
  const subNavItems = [
    { id: 'overview', label: t('farmhouse.projects.navOverview'), href: '#overview' },
    { id: 'stats', label: t('farmhouse.projects.navStats'), href: '#stats' },
    { id: 'featured', label: t('farmhouse.featuredProjectsTitle'), href: '#featured' },
    { id: 'sustainability', label: t('farmhouse.sustainabilityTitle'), href: '#sustainability' }
  ];

  // Next/Previous navigation links for pages
  const nextPrevLinks = {
    prev: {
      label: t('farmhouse.servicesTitle'),
      path: `/${language}/farmhouse/services`,
      description: t('farmhouse.servicesSubtitle')
    },
    next: {
      label: t('navigation.contact'),
      path: `/${language}/farmhouse/contact`,
      description: t('contact.introText')
    }
  };

  return (
    <div>
      <Helmet>
        <title>{t('farmhouse.pageTitle')} - {t('farmhouse.projectsTitle')}</title>
        <meta name="description" content={t('farmhouse.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 0h40v40H0z" fill="none" />
                <path d="M0 0h10v10H0z" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('farmhouse.projectsTitle')}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-xl mb-8 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('farmhouse.projectsDescription')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sub Navigation */}
      <SubNavigation items={subNavItems} activeId={activeSection} />

      {/* Projects Overview */}
      <section id="overview" ref={overviewRef} className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              className="text-3xl font-bold text-brand-navy mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('farmhouse.projectsOverview')}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ExpandableText
                text={t('farmhouse.projectsDescription')}
                maxLines={3}
              />
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Stats */}
      <section id="stats" ref={statsRef} className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-navy mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('farmhouse.projectsOverview')}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">12</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('farmhouse.projects.stat1Label')}</h3>
              <p className="text-gray-600">{t('farmhouse.projects.stat1Description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">500+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('farmhouse.projects.stat2Label')}</h3>
              <p className="text-gray-600">{t('farmhouse.projects.stat2Description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">25</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('farmhouse.projects.stat3Label')}</h3>
              <p className="text-gray-600">{t('farmhouse.projects.stat3Description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">5</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('farmhouse.projects.stat4Label')}</h3>
              <p className="text-gray-600">{t('farmhouse.projects.stat4Description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured" ref={featuredRef} className="py-16">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-navy mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('farmhouse.featuredProjectsTitle')}
          </motion.h2>
          
          <div className="space-y-16">
            {/* Project 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-green-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-green-600 text-white text-sm mb-2">
                      {t('farmhouse.projects.project1.location')}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('farmhouse.projects.project1.title')}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <ExpandableText
                    text={t('farmhouse.projects.project1.description')}
                    maxLines={3}
                    className="text-gray-700 mb-6"
                  />
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">{t('farmhouse.results')}</h4>
                    <p className="text-gray-700">{t('farmhouse.projects.project1.results')}</p>
                  </div>
                  
                  <RelatedLinks 
                    title={t('farmhouse.services.relatedTitle')}
                    links={[
                      { id: 'organic', label: t('farmhouse.services.organic.title'), path: `/${language}/farmhouse/services#organic`, color: 'green' as const },
                      { id: 'education', label: t('farmhouse.services.education.title'), path: `/${language}/farmhouse/services#education`, color: 'purple' as const }
                    ]}
                    className="mt-6"
                  />
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-1 md:order-2 bg-amber-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-amber-600 text-white text-sm mb-2">
                      {t('farmhouse.projects.project2.location')}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('farmhouse.projects.project2.title')}</h3>
                  </div>
                </div>
                <div className="order-2 md:order-1 p-8">
                  <ExpandableText
                    text={t('farmhouse.projects.project2.description')}
                    maxLines={3}
                    className="text-gray-700 mb-6"
                  />
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">{t('farmhouse.results')}</h4>
                    <p className="text-gray-700">{t('farmhouse.projects.project2.results')}</p>
                  </div>
                  
                  <RelatedLinks 
                    title={t('farmhouse.services.relatedTitle')}
                    links={[
                      { id: 'sustainable', label: t('farmhouse.services.sustainable.title'), path: `/${language}/farmhouse/services#sustainable`, color: 'amber' as const },
                      { id: 'community', label: t('farmhouse.services.community.title'), path: `/${language}/farmhouse/services#community`, color: 'blue' as const }
                    ]}
                    className="mt-6"
                  />
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-blue-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-sm mb-2">
                      {t('farmhouse.projects.project3.location')}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('farmhouse.projects.project3.title')}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <ExpandableText
                    text={t('farmhouse.projects.project3.description')}
                    maxLines={3}
                    className="text-gray-700 mb-6"
                  />
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">{t('farmhouse.results')}</h4>
                    <p className="text-gray-700">{t('farmhouse.projects.project3.results')}</p>
                  </div>
                  
                  <RelatedLinks 
                    title={t('farmhouse.services.relatedTitle')}
                    links={[
                      { id: 'education', label: t('farmhouse.services.education.title'), path: `/${language}/farmhouse/services#education`, color: 'purple' as const },
                      { id: 'organic', label: t('farmhouse.services.organic.title'), path: `/${language}/farmhouse/services#organic`, color: 'green' as const }
                    ]}
                    className="mt-6"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals Section */}
      <section id="sustainability" ref={sustainabilityRef} className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('farmhouse.sustainabilityTitle')}</h2>
            <div className="max-w-3xl mx-auto">
              <ExpandableText
                text={t('farmhouse.sustainabilityDescription')}
                maxLines={3}
                className="text-lg text-gray-700"
              />
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-40 bg-green-100 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold">
                  SDG 2
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('farmhouse.sdgs.sdg2.title')}</h3>
                <p className="text-gray-700">
                  {t('farmhouse.sdgs.sdg2.description')}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-40 bg-blue-100 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  SDG 6
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('farmhouse.sdgs.sdg6.title')}</h3>
                <p className="text-gray-700">
                  {t('farmhouse.sdgs.sdg6.description')}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-40 bg-amber-100 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-amber-600 text-white flex items-center justify-center text-2xl font-bold">
                  SDG 15
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('farmhouse.sdgs.sdg15.title')}</h3>
                <p className="text-gray-700">
                  {t('farmhouse.sdgs.sdg15.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Next/Prev Navigation */}
      <NextPrevNavigation 
        prevLink={nextPrevLinks.prev}
        nextLink={nextPrevLinks.next}
      />

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{t('farmhouse.ctaTitle')}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">{t('farmhouse.ctaDescription')}</p>
            <Link to={`/${language}/farmhouse/contact`} className="btn bg-white text-green-700 hover:bg-white/90">
              {t('farmhouse.ctaButton')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FarmhouseProjects; 