import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Section, ResponsiveGrid, ResponsiveContainer } from '../../components/layout';
import { Button } from '../../components/common';
import { Breadcrumb, SubNavigation } from '../../components/navigation';
import { convertToNavItems } from '../../utils/navigation';
import { useEffect } from 'react';
// Import SEO Schema components
import WebPageSchema from '../../components/seo/WebPageSchema';
import BreadcrumbSchema from '../../components/seo/BreadcrumbSchema';

const CorporationAbout = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Setup breadcrumb items
  const breadcrumbItems = [
    { label: t('navigation.home'), path: `/${language}` },
    { label: t('navigation.corporation'), path: `/${language}/corporation` },
    { label: t('navigation.about'), current: true }
  ];

  // Setup schema breadcrumb items
  const schemaBreadcrumbs = [
    { name: t('navigation.home'), url: 'https://broadway-corp.com' },
    { name: t('navigation.corporation'), url: 'https://broadway-corp.com/corporation' },
    { name: t('navigation.about'), url: 'https://broadway-corp.com/corporation/about' }
  ];

  // Setup legacy sub-navigation items
  const legacySubNavItems = [
    { 
      label: t('navigation.about'), 
      path: `/${language}/corporation/about`,
      current: true
    },
    { 
      label: t('navigation.aboutSubmenu.ceoMessage'), 
      path: `/${language}/corporation/about/ceo-message`
    },
    { 
      label: t('navigation.aboutSubmenu.leadership'), 
      path: `/${language}/corporation/team`
    }
  ];
  
  // Convert to compatible NavItem format
  const subNavItems = convertToNavItems(legacySubNavItems);
  // Set active ID based on current page
  const activeId = `/${language}/corporation/about`.replace(/\//g, '-').replace(/^-/, '');

  return (
    <>
      <Helmet>
        <title>{t('navigation.about')} - {t('corporation.title')}</title>
        <meta name="description" content={t('corporation.metaDescription')} />
      </Helmet>

      {/* SEO Schema Markup */}
      <WebPageSchema
        title={`${t('navigation.about')} - ${t('corporation.title')}`}
        description={t('corporation.metaDescription')}
        url="https://broadway-corp.com/corporation/about"
        imageUrl="https://broadway-corp.com/assets/images/about-hero.jpg"
      />
      
      <BreadcrumbSchema items={schemaBreadcrumbs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 text-white">
        <ResponsiveContainer maxWidth="screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('about.title')}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mx-auto mb-6"
              initial={false}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.p 
              className="text-xl text-white/90 dark:text-white/80 mb-0"
              initial={false}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('about.subtitle')}
            </motion.p>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <ResponsiveContainer maxWidth="screen-lg" className="py-3">
          <Breadcrumb items={breadcrumbItems} />
        </ResponsiveContainer>
      </div>

      {/* Sub Navigation */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-20 z-10">
        <ResponsiveContainer maxWidth="screen-lg">
          <SubNavigation items={subNavItems} activeId={activeId} />
        </ResponsiveContainer>
      </div>

      {/* About Broadway Section */}
      <Section background="white" padding="xl">
        <ResponsiveContainer maxWidth="screen-lg" className="max-w-4xl">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-6">{t('about.aboutBroadwayTitle')}</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
              {t('about.aboutBroadwayText1')}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
              {t('about.aboutBroadwayText2')}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {t('about.aboutBroadwayText3')}
            </p>
          </motion.div>
        </ResponsiveContainer>
      </Section>

      {/* Mission & Values Section */}
      <Section background="light" padding="lg">
        <ResponsiveContainer maxWidth="screen-lg" className="max-w-4xl">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-4">
              {t('about.missionValuesTitle')}
            </h2>
          </motion.div>

          <ResponsiveGrid cols={1} mdCols={2} gap="lg">
            {/* Mission */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700"
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy dark:text-brand-orange mb-4">
                {t('about.missionTitle')}
              </h3>
              <div className="w-16 h-1 bg-brand-orange mb-6"></div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('about.missionText')}
              </p>
            </motion.div>

            {/* Values */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700"
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy dark:text-brand-orange mb-4">
                {t('about.valuesTitle')}
              </h3>
              <div className="w-16 h-1 bg-brand-orange mb-6"></div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{t('about.value1')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{t('about.value2')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{t('about.value3')}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mt-1 mr-3 text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{t('about.value4')}</span>
                </li>
              </ul>
            </motion.div>
          </ResponsiveGrid>
        </ResponsiveContainer>
      </Section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-gray-900 dark:to-gray-800 py-16 text-white">
        <ResponsiveContainer maxWidth="screen-lg" className="text-center">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{t('about.ctaTitle')}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">{t('about.ctaDescription')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href={`/${language}/corporation/about/ceo-message`} 
                variant="secondary"
                size="lg"
              >
                {t('corporation.readCEOMessage')}
              </Button>
              <Button 
                href={`/${language}/corporation/team`} 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-navy"
              >
                {t('navigation.aboutSubmenu.leadership')}
              </Button>
            </div>
          </motion.div>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default CorporationAbout; 