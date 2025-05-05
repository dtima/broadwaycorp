import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Section, Container, Grid } from '../../components/layout';
import { Button, Image } from '../../components/common';
import { Breadcrumb, SubNavigation } from '../../components/navigation';
import { useEffect } from 'react';

const CorporationCEOMessage = () => {
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
    { label: t('navigation.about'), path: `/${language}/corporation/about` },
    { label: t('navigation.aboutSubmenu.ceoMessage'), current: true }
  ];

  // Setup sub-navigation items
  const subNavItems = [
    { 
      label: t('navigation.about'), 
      path: `/${language}/corporation/about`
    },
    { 
      label: t('navigation.aboutSubmenu.ceoMessage'), 
      path: `/${language}/corporation/about/ceo-message`,
      current: true
    },
    { 
      label: t('navigation.aboutSubmenu.leadership'), 
      path: `/${language}/corporation/team`
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('navigation.aboutSubmenu.ceoMessage')} - {t('corporation.title')}</title>
        <meta name="description" content={t('ceoMessage.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-gray-900 dark:to-gray-800 py-16 md:py-20 text-white">
        <Container maxWidth="screen-lg">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('navigation.aboutSubmenu.ceoMessage')}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.p 
              className="text-xl text-white/90 dark:text-white/80 mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('ceoMessage.heroTagline')}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <Container maxWidth="screen-lg" className="py-3">
          <Breadcrumb items={breadcrumbItems} />
        </Container>
      </div>

      {/* Sub Navigation */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-20 z-10">
        <Container maxWidth="screen-lg">
          <SubNavigation items={subNavItems} />
        </Container>
      </div>

      {/* CEO Message Content */}
      <Section background="white" padding="xl">
        <Grid cols={1} gap="lg" className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <motion.div
              className="w-full md:w-1/3 flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <Image 
                  src="/assets/images/ceo-portrait.jpg" 
                  alt={t('ceoMessage.portraitAlt')}
                  fallbackSrc="https://placehold.co/600x800/003366/ffffff?text=CEO+Portrait"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange">{t('ceoMessage.ceoName')}</h3>
                <p className="text-gray-600 dark:text-gray-400">{t('ceoMessage.ceoTitle')}</p>
              </div>
            </motion.div>
            
            <motion.div
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-brand-navy/5 dark:bg-brand-navy/10 rounded-xl p-6 mb-8 relative">
                <svg className="absolute top-4 left-4 w-8 h-8 text-brand-orange opacity-30" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl text-gray-700 dark:text-gray-300 italic ml-10">
                  {t('ceoMessage.quote')}
                </p>
              </div>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  {t('ceoMessage.greeting')}
                </p>
                
                <p>
                  {t('ceoMessage.paragraph1')}
                </p>
                
                <p>
                  {t('ceoMessage.paragraph2')}
                </p>
                
                <p>
                  {t('ceoMessage.paragraph3')}
                </p>
                
                <p>
                  {t('ceoMessage.paragraph4')}
                </p>
                
                <p>
                  {t('ceoMessage.paragraph5')}
                </p>
                
                <p>
                  {t('ceoMessage.paragraph6')}
                </p>
                
                <p>
                  {t('ceoMessage.paragraph7')}
                </p>
                
                <p className="font-bold">
                  {t('ceoMessage.closing')}<br />
                  {t('ceoMessage.ceoName')}<br />
                  {t('ceoMessage.ceoTitle')}
                </p>
              </div>
            </motion.div>
          </div>
        </Grid>
      </Section>

      {/* CTA Section */}
      <Section background="light" padding="lg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-4">
              {t('ceoMessage.ctaTitle')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t('ceoMessage.ctaDescription')}
            </p>
            <Button 
              href={`/${language}/corporation/team`} 
              variant="primary"
              size="lg"
            >
              {t('navigation.aboutSubmenu.leadership')}
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default CorporationCEOMessage; 