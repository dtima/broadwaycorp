import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Section, Container, Grid, GridItem, ResponsiveContainer } from '../../components/layout';
import { Button } from '../../components/common';
import { useEffect } from 'react';

const CorporationHome = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('corporation.title')} - {t('corporation.heroTagline')}</title>
        <meta name="description" content={t('corporation.metaDescription')} />
        <meta property="og:title" content={`${t('corporation.title')} - ${t('corporation.heroTagline')}`} />
        <meta property="og:description" content={t('corporation.metaDescription')} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-gray-900 dark:to-gray-800 text-white py-20 md:py-28">
        {/* Decorative Pattern */}
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

        <Container maxWidth="screen-lg" className="relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              className="mb-6 inline-block rounded-full bg-brand-orange/20 dark:bg-brand-orange/10 px-4 py-1 text-brand-orange"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('corporation.pageTitle')}
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('corporation.title')}
            </motion.h1>
            
            <motion.div 
              className="w-24 h-1 bg-brand-orange mb-6"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 96 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            <motion.p 
              className="text-xl mb-8 text-white/90 dark:text-white/80 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('corporation.heroTagline')}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                href={`/${language}/corporation/about`} 
                variant="secondary"
                size="lg"
              >
                {t('common.learnMore')}
              </Button>
              
              <Button 
                href={`/${language}/corporation/contact`} 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-brand-navy dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                {t('contact.contactButton')}
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <Section background="white" padding="xl">
        <ResponsiveContainer maxWidth="screen-lg">
          <Grid cols={1} mdCols={2} gap="lg" className="items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-6">{t('corporation.overviewTitle')}</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {t('corporation.overviewText1')}
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('corporation.overviewText2')}
              </p>
              
              <div className="mt-6">
                <Button 
                  href={`/${language}/corporation/about/ceo-message`}
                  variant="outline"
                  size="md"
                >
                  {t('corporation.readCEOMessage')}
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-4">
                {t('corporation.structureTitle')}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t('corporation.structureDescription')}
              </p>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-navy dark:bg-brand-orange text-white flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy dark:text-brand-orange">
                        {t('corporation.headquartersTitle')}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t('corporation.headquartersLocation')}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-11 leading-relaxed">
                    {t('corporation.headquartersFunction')}
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-orange dark:bg-brand-navy text-white flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy dark:text-brand-orange">
                        {t('corporation.operationsTitle')}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t('corporation.operationsLocation')}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 ml-11 leading-relaxed">
                    {t('corporation.operationsFunction')}
                  </p>
                </div>
              </div>
            </motion.div>
          </Grid>
        </ResponsiveContainer>
      </Section>

      {/* Operational Model Section */}
      <Section background="light" padding="lg">
        <ResponsiveContainer maxWidth="screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-4">
              {t('corporation.modelTitle')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our unique approach combines global strategy with local implementation for maximum impact.
            </p>
          </motion.div>
          
          <Grid cols={1} mdCols={3} gap="lg">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-brand-navy dark:bg-brand-orange text-white flex items-center justify-center mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-3">
                {t('corporation.modelStep1Title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('corporation.modelStep1Text')}
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-brand-navy dark:bg-brand-orange text-white flex items-center justify-center mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-3">
                {t('corporation.modelStep2Title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('corporation.modelStep2Text')}
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-brand-navy dark:bg-brand-orange text-white flex items-center justify-center mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-bold text-brand-navy dark:text-brand-orange mb-3">
                {t('corporation.modelStep3Title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('corporation.modelStep3Text')}
              </p>
            </motion.div>
          </Grid>
        </ResponsiveContainer>
      </Section>

      {/* Divisions Showcase Section */}
      <Section background="white" padding="xl">
        <ResponsiveContainer maxWidth="screen-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-4">
              {t('corporation.divisionsTitle')}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Our divisions work together to create comprehensive solutions for sustainable development.
            </p>
          </motion.div>

          <Grid cols={1} mdCols={2} gap="lg">
            {/* Enterprise Division */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="enterprise-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M0 0h20v20H0z" fill="none" />
                        <path d="M0 0h5v5H0z" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#enterprise-grid)" />
                  </svg>
                </div>

                <svg className="w-16 h-16 text-white relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-navy dark:text-brand-orange mb-3">
                  {t('divisions.enterprise.title')}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {t('corporation.enterpriseDescription')}
                </p>

                <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3">
                  {t('corporation.keyFocusAreas')}
                </h4>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange dark:text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{t('corporation.enterpriseFocus1')}</span>
                  </li>

                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange dark:text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{t('corporation.enterpriseFocus2')}</span>
                  </li>

                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange dark:text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{t('corporation.enterpriseFocus3')}</span>
                  </li>
                </ul>

                <Button href={`/${language}/enterprise`} variant="primary">
                  {t('divisions.enterprise.button')}
                </Button>
              </div>
            </motion.div>

            {/* Farmhouse Division */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-48 bg-gradient-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="farmhouse-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M0 0h20v20H0z" fill="none" />
                        <path d="M0 0h5v5H0z" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#farmhouse-grid)" />
                  </svg>
                </div>

                <svg className="w-16 h-16 text-white relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-navy dark:text-brand-orange mb-3">
                  {t('divisions.farmhouse.title')}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {t('corporation.farmhouseDescription')}
                </p>

                <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-3">
                  {t('corporation.keyFocusAreas')}
                </h4>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange dark:text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{t('corporation.farmhouseFocus1')}</span>
                  </li>

                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange dark:text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{t('corporation.farmhouseFocus2')}</span>
                  </li>

                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange dark:text-brand-orange flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{t('corporation.farmhouseFocus3')}</span>
                  </li>
                </ul>

                <Button href={`/${language}/farmhouse`} variant="primary">
                  {t('divisions.farmhouse.button')}
                </Button>
              </div>
            </motion.div>
          </Grid>
        </ResponsiveContainer>
      </Section>

      {/* Future Initiatives Section */}
      <Section background="light" padding="lg">
        <ResponsiveContainer maxWidth="screen-lg">
          <Grid cols={1} mdCols={2} gap="lg" className="items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-xl overflow-hidden h-80 md:h-96 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/70 to-brand-navy-dark/90 mix-blend-multiply z-10" />
                <img
                  src="/assets/images/future-vision.jpg"
                  alt="Future Growth Initiatives"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/800x600/003366/ffffff?text=Future+Vision';
                  }}
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-3">Broadway Corporation</h3>
                    <p className="text-lg text-white/90">Building a sustainable future through innovation</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-brand-navy dark:text-brand-orange mb-6">
                {t('corporation.futureTitle')}
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t('corporation.futureDescription')}
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-orange flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brand-navy dark:text-brand-orange">Agro-Tourism Initiatives</h4>
                    <p className="text-gray-700 dark:text-gray-300">Developing immersive agricultural tourism experiences that showcase sustainable farming practices while creating additional revenue streams.</p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-orange flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-brand-navy dark:text-brand-orange">Bio-Research Innovation</h4>
                    <p className="text-gray-700 dark:text-gray-300">Investing in cutting-edge biological research to develop solutions for agricultural challenges and explore new sustainable technologies.</p>
                  </div>
                </li>
              </ul>

              <Button href={`/${language}/corporation/initiatives`} variant="primary">
                Learn About Our Initiatives
              </Button>
            </motion.div>
          </Grid>
        </ResponsiveContainer>
      </Section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-brand-navy-dark dark:from-gray-900 dark:to-gray-800 text-white">
        <Container maxWidth="screen-lg" className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{t('corporation.learnMoreTitle')}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">{t('corporation.learnMoreDescription')}</p>
            <Button 
              href={`/${language}/corporation/about/ceo-message`}
              variant="secondary"
              size="lg"
            >
              {t('corporation.readCEOMessage')}
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default CorporationHome; 