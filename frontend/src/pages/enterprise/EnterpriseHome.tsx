import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Import lab images
import lab1Image from '../../assets/images/Laboratoires/lab1.jpg';
import lab2Image from '../../assets/images/Laboratoires/lab2.jpg';
import lab3Image from '../../assets/images/Laboratoires/lab3.jpg';

const EnterpriseHome = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div>
      <Helmet>
        <title>{t('enterprise.pageTitle')} - {t('enterprise.heroSubtitle')}</title>
        <meta name="description" content={t('enterprise.metaDescription')} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 md:py-24 relative overflow-hidden">
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
              {t('enterprise.heroTitle')}
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
              {t('enterprise.heroSubtitle')}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to={`/${language}/enterprise/about`} className="btn bg-white text-blue-600 hover:bg-white/90">
                {t('common.learnMore')}
              </Link>
              <Link to={`/${language}/enterprise/contact`} className="btn bg-brand-orange text-white hover:bg-brand-orange/90">
                {t('enterprise.contactButton')}
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
              <h2 className="text-3xl font-bold text-brand-navy mb-6">{t('enterprise.introTitle')}</h2>
              <p className="text-gray-700 mb-4">{t('enterprise.introText1')}</p>
              <p className="text-gray-700">{t('enterprise.introText2')}</p>
            </motion.div>
            
            <motion.div
              className="bg-gray-100 p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-brand-navy mb-4">{t('enterprise.missionTitle')}</h3>
              <p className="text-gray-700 mb-6 italic border-l-4 border-brand-orange pl-4 py-2">
                "{t('enterprise.missionStatement')}"
              </p>
              
              <h4 className="font-bold text-brand-navy mb-2">{t('enterprise.ourApproach')}</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t('enterprise.approach1')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t('enterprise.approach2')}
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-orange" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t('enterprise.approach3')}
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
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('enterprise.servicesTitle')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('enterprise.servicesSubtitle')}
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
              <div className="h-40 bg-blue-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('enterprise.scientificTitle')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('enterprise.scientificDescription')}
                </p>
                <Link to={`/${language}/enterprise/services`} className="text-blue-600 font-medium hover:underline">
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
              <div className="h-40 bg-orange-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-orange-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('enterprise.educationTitle')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('enterprise.educationDescription')}
                </p>
                <Link to={`/${language}/enterprise/services`} className="text-blue-600 font-medium hover:underline">
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
              <div className="h-40 bg-green-100 flex items-center justify-center">
                <svg className="w-16 h-16 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('enterprise.communityTitle')}</h3>
                <p className="text-gray-700 mb-4">
                  {t('enterprise.communityDescription')}
                </p>
                <Link to={`/${language}/enterprise/services`} className="text-blue-600 font-medium hover:underline">
                  {t('common.learnMore')} →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Laboratory Construction Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('enterprise.laboratoryServices.title')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('enterprise.laboratoryServices.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <motion.div
              className="rounded-lg overflow-hidden shadow-md h-64 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={lab1Image} 
                alt="Laboratory Workstations with Blue Base"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400/004080/ffffff?text=Laboratory+Workstations';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">{t('enterprise.laboratoryServices.workstations')}</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-md h-64 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={lab2Image} 
                alt="Fully Equipped Science Laboratory"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400/004080/ffffff?text=Laboratory+Equipment';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">{t('enterprise.laboratoryServices.equipment')}</h3>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="rounded-lg overflow-hidden shadow-md h-64 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <img 
                src={lab3Image} 
                alt="Laboratory Sink Installation with Educational Materials"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400/004080/ffffff?text=Laboratory+Sinks';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">{t('enterprise.laboratoryServices.fixtures')}</h3>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="bg-blue-50 p-8 rounded-lg border border-blue-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0 md:mr-8">
                <h3 className="text-xl font-bold text-brand-navy mb-2">{t('enterprise.laboratoryServices.cta.title')}</h3>
                <p className="text-gray-700">{t('enterprise.laboratoryServices.cta.description')}</p>
              </div>
              <Link 
                to={`/${language}/enterprise/services`} 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                {t('enterprise.laboratoryServices.cta.button')}
                <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('enterprise.impactTitle')}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2">15+</div>
              <h3 className="text-xl font-bold mb-2">{t('enterprise.schools')}</h3>
              <p className="text-white/80">{t('enterprise.schoolsDescription')}</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2">2,000+</div>
              <h3 className="text-xl font-bold mb-2">{t('enterprise.students')}</h3>
              <p className="text-white/80">{t('enterprise.studentsDescription')}</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2">8</div>
              <h3 className="text-xl font-bold mb-2">{t('enterprise.communities')}</h3>
              <p className="text-white/80">{t('enterprise.communitiesDescription')}</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="text-4xl font-bold mb-2">10+</div>
              <h3 className="text-xl font-bold mb-2">{t('enterprise.partners')}</h3>
              <p className="text-white/80">{t('enterprise.partnersDescription')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('enterprise.ctaTitle')}</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">{t('enterprise.ctaDescription')}</p>
            <Link to={`/${language}/enterprise/contact`} className="btn bg-blue-600 text-white hover:bg-blue-700">
              {t('enterprise.ctaButton')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseHome; 