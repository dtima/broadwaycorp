import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const FarmhouseHome = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div>
      <Helmet>
        <title>{t('farmhouse.pageTitle')} - {t('farmhouse.heroSubtitle')}</title>
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
              {t('farmhouse.heroTitle')}
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
              {t('farmhouse.heroSubtitle')}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to={`/${language}/farmhouse/about`} className="btn bg-white text-green-700 hover:bg-white/90">
                {t('common.learnMore')}
              </Link>
              <Link to={`/${language}/farmhouse/contact`} className="btn bg-brand-orange text-white hover:bg-brand-orange/90">
                {t('farmhouse.contactButton')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-6">{t('farmhouse.introTitle')}</h2>
              <p className="text-gray-700 mb-4">{t('farmhouse.introText1')}</p>
              <p className="text-gray-700">{t('farmhouse.introText2')}</p>
            </motion.div>
            
            <motion.div
              className="bg-gray-100 p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-brand-navy mb-4">{t('farmhouse.missionTitle')}</h3>
              <p className="text-gray-700 mb-6 italic border-l-4 border-brand-orange pl-4 py-2">
                "{t('farmhouse.missionStatement')}"
              </p>
              
              <h4 className="font-bold text-brand-navy mb-2">{t('farmhouse.locationTitle')}</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-brand-orange mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">{t('farmhouse.locationName')}</p>
                    <p className="text-sm text-gray-600">{t('farmhouse.locationAddress')}</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>{t('farmhouse.locationPhone')}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('farmhouse.servicesTitle')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('farmhouse.servicesSubtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-40 bg-green-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('farmhouse.sustainableTitle')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('farmhouse.sustainableDescription')}
                </p>
                <Link to={`/${language}/farmhouse/services`} className="text-green-700 font-medium hover:underline">
                  {t('common.learnMore')} →
                </Link>
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
              <div className="h-40 bg-amber-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('farmhouse.livestockTitle')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('farmhouse.livestockDescription')}
                </p>
                <Link to={`/${language}/farmhouse/services`} className="text-green-700 font-medium hover:underline">
                  {t('common.learnMore')} →
                </Link>
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
              <div className="h-40 bg-blue-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('farmhouse.researchTitle')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('farmhouse.researchDescription')}
                </p>
                <Link to={`/${language}/farmhouse/services`} className="text-green-700 font-medium hover:underline">
                  {t('common.learnMore')} →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('farmhouse.projectsTitle')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('farmhouse.projectsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="bg-green-200 p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-2">{t('farmhouse.project1Title')}</h3>
                <p className="text-green-700 font-medium">{t('farmhouse.project1Subtitle')}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{t('farmhouse.project1Description')}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">{t('farmhouse.tag1')}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">{t('farmhouse.tag2')}</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-sm rounded-full">{t('farmhouse.tag3')}</span>
                </div>
                <Link to={`/${language}/farmhouse/projects`} className="btn bg-green-700 text-white hover:bg-green-800">
                  {t('farmhouse.viewProjectButton')}
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="bg-amber-200 p-6">
                <h3 className="text-2xl font-bold text-amber-800 mb-2">{t('farmhouse.project2Title')}</h3>
                <p className="text-amber-700 font-medium">{t('farmhouse.project2Subtitle')}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{t('farmhouse.project2Description')}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">{t('farmhouse.tag4')}</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">{t('farmhouse.tag5')}</span>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">{t('farmhouse.tag6')}</span>
                </div>
                <Link to={`/${language}/farmhouse/projects`} className="btn bg-amber-600 text-white hover:bg-amber-700">
                  {t('farmhouse.viewProjectButton')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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

export default FarmhouseHome; 