import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const CorporationHome = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div>
      <Helmet>
        <title>{t('corporation.title')} - {t('corporation.heroTagline')}</title>
        <meta name="description" content={t('corporation.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-brand-navy text-white py-16 md:py-24 relative overflow-hidden">
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
              {t('corporation.title')}
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
              {t('corporation.heroTagline')}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to={`/${language}/corporation/about`} className="btn btn-primary">
                {t('common.learnMore')}
              </Link>
              <Link to={`/${language}/corporation/contact`} className="btn bg-white text-brand-navy hover:bg-white/90">
                {t('contact.contactButton')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-brand-navy mb-6">{t('corporation.overviewTitle')}</h2>
              <p className="text-gray-700 mb-4">{t('corporation.overviewText1')}</p>
              <p className="text-gray-700">{t('corporation.overviewText2')}</p>
            </motion.div>
            
            <motion.div
              className="bg-gray-100 p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-brand-navy mb-4">{t('corporation.structureTitle')}</h3>
              <p className="text-gray-700 mb-6">{t('corporation.structureDescription')}</p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-bold text-brand-navy">{t('corporation.headquartersTitle')}</h4>
                  <p className="text-sm text-gray-600">{t('corporation.headquartersLocation')}</p>
                  <p className="text-gray-700 mt-2">{t('corporation.headquartersFunction')}</p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-bold text-brand-navy">{t('corporation.operationsTitle')}</h4>
                  <p className="text-sm text-gray-600">{t('corporation.operationsLocation')}</p>
                  <p className="text-gray-700 mt-2">{t('corporation.operationsFunction')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divisions Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-navy mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('corporation.divisionsTitle')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enterprise */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-48 bg-blue-600 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">{t('divisions.enterprise.title')}</h3>
                <p className="text-gray-700 mb-4">{t('corporation.enterpriseDescription')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('corporation.enterpriseFocus1')}
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('corporation.enterpriseFocus2')}
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('corporation.enterpriseFocus3')}
                  </li>
                </ul>
                <Link to={`/${language}/enterprise`} className="btn btn-primary">
                  {t('divisions.enterprise.button')}
                </Link>
              </div>
            </motion.div>
            
            {/* Farmhouse */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="h-48 bg-green-700 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-brand-navy mb-3">{t('divisions.farmhouse.title')}</h3>
                <p className="text-gray-700 mb-4">{t('corporation.farmhouseDescription')}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('corporation.farmhouseFocus1')}
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('corporation.farmhouseFocus2')}
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {t('corporation.farmhouseFocus3')}
                  </li>
                </ul>
                <Link to={`/${language}/farmhouse`} className="btn btn-primary">
                  {t('divisions.farmhouse.button')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{t('corporation.learnMoreTitle')}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">{t('corporation.learnMoreDescription')}</p>
            <Link to={`/${language}/corporation/about/ceo-message`} className="btn bg-brand-orange text-white hover:bg-brand-orange/90">
              {t('corporation.readCEOMessage')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporationHome; 