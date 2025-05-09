import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Import student images
import Students1 from '../../assets/images/students/Students1.jpg';
import Students2 from '../../assets/images/students/students2.jpg';
import Student4 from '../../assets/images/students/Student4.jpg';
import Student5 from '../../assets/images/students/student5.jpg';

const EnterpriseImpact = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div>
      <Helmet>
        <title>{t('enterprise.pageTitle')} - {t('enterprise.impactTitle')}</title>
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
              {t('enterprise.impactTitle')}
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
              {t('enterprise.sdgDescription')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-navy mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('enterprise.impactTitle')}
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">15+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('enterprise.impact.stat1Label')}</h3>
              <p className="text-gray-600">{t('enterprise.impact.stat1Description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2,000+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('enterprise.impact.stat2Label')}</h3>
              <p className="text-gray-600">{t('enterprise.impact.stat2Description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">8</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('enterprise.impact.stat3Label')}</h3>
              <p className="text-gray-600">{t('enterprise.impact.stat3Description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">10+</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('enterprise.impact.stat4Label')}</h3>
              <p className="text-gray-600">{t('enterprise.impact.stat4Description')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Impact Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('enterprise.studentGallery.title')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('enterprise.studentGallery.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-12 gap-4">
            {/* First row - larger images */}
            <motion.div 
              className="col-span-12 md:col-span-8 relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={Students1} 
                alt="Students collaborating on a scientific experiment" 
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{t('enterprise.studentGallery.collaborativeLearning')}</h3>
                <p className="text-white/90">{t('enterprise.studentGallery.collaborativeDescription')}</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-12 md:col-span-4 relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={Student4} 
                alt="Student conducting a laboratory experiment" 
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{t('enterprise.studentGallery.geologicalStudies')}</h3>
                <p className="text-white/90">{t('enterprise.studentGallery.geologicalDescription')}</p>
              </div>
            </motion.div>
            
            {/* Second row */}
            <motion.div 
              className="col-span-12 md:col-span-6 relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={Student5} 
                alt="Students working in a professional laboratory setting" 
                className="w-full h-[250px] md:h-[350px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{t('enterprise.studentGallery.handsOnChemistry')}</h3>
                <p className="text-white/90">{t('enterprise.studentGallery.chemistryDescription')}</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-span-12 md:col-span-6 relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={Students2} 
                alt="Group of students engaged in a laboratory class" 
                className="w-full h-[250px] md:h-[350px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{t('enterprise.studentGallery.teamResearch')}</h3>
                <p className="text-white/90">{t('enterprise.studentGallery.teamDescription')}</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              to={`/${language}/enterprise/contact`} 
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              {t('enterprise.studentGallery.supportButton')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-navy mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('enterprise.caseStudiesTitle')}
          </motion.h2>
          
          <div className="space-y-16">
            {/* Case Study 1 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-blue-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-sm mb-2">
                      {t('enterprise.caseStudies.case1.location')}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('enterprise.caseStudies.case1.title')}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6">{t('enterprise.caseStudies.case1.description')}</p>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">{t('enterprise.results')}</h4>
                    <p className="text-gray-700">{t('enterprise.caseStudies.case1.results')}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case Study 2 */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="order-1 md:order-2 bg-orange-100 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-orange-600 text-white text-sm mb-2">
                      {t('enterprise.caseStudies.case2.location')}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('enterprise.caseStudies.case2.title')}</h3>
                  </div>
                </div>
                <div className="order-2 md:order-1 p-8">
                  <p className="text-gray-700 mb-6">{t('enterprise.caseStudies.case2.description')}</p>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">{t('enterprise.results')}</h4>
                    <p className="text-gray-700">{t('enterprise.caseStudies.case2.results')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('enterprise.sdgTitle')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('enterprise.sdgDescription')}
            </p>
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
              <div className="h-40 bg-red-100 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold">
                  SDG 3
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('enterprise.sdgs.sdg3.title')}</h3>
                <p className="text-gray-700">
                  {t('enterprise.sdgs.sdg3.description')}
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
              <div className="h-40 bg-indigo-100 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
                  SDG 4
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('enterprise.sdgs.sdg4.title')}</h3>
                <p className="text-gray-700">
                  {t('enterprise.sdgs.sdg4.description')}
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
              <div className="h-40 bg-cyan-100 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-cyan-600 text-white flex items-center justify-center text-2xl font-bold">
                  SDG 6
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-brand-navy mb-3">{t('enterprise.sdgs.sdg6.title')}</h3>
                <p className="text-gray-700">
                  {t('enterprise.sdgs.sdg6.description')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{t('enterprise.ctaTitle')}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">{t('enterprise.ctaDescription')}</p>
            <Link to={`/${language}/enterprise/contact`} className="btn bg-white text-blue-600 hover:bg-white/90">
              {t('enterprise.ctaButton')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseImpact; 