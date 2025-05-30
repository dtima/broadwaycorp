import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';

const FarmhouseAbout = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  const farmImages = [
    '/images/farmhouse/farmhouse-main.jpg',
    '/images/farmhouse/farmhouse-aerial.jpg',
    '/images/farmhouse/farmhouse-fields.jpg',
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Helmet>
        <title>{t('farmhouse.pageTitle')} - {t('about.title')}</title>
        <meta name="description" content={t('farmhouse.metaDescription')} />
      </Helmet>

      {/* Hero Section with Slideshow */}
      <section className="relative overflow-hidden">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false}
          interval={6000}
          className="w-full"
          showArrows={true}
          showIndicators={true}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
          renderArrowPrev={(clickHandler, hasPrev) => (
            hasPrev && (
              <button 
                onClick={clickHandler} 
                className="absolute left-0 top-1/2 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-r-lg transition-all"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )
          )}
          renderArrowNext={(clickHandler, hasNext) => (
            hasNext && (
              <button 
                onClick={clickHandler} 
                className="absolute right-0 top-1/2 z-30 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-l-lg transition-all"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          )}
        >
          {farmImages.map((image, index) => (
            <div key={index} className="h-[85vh] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-10"></div>
              <img 
                src={image} 
                alt={`Broadway Farmhouse ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Carousel>
        
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container-custom text-center px-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
              initial="hidden"
              animate={hasLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7 }}
            >
              {t('farmhouse.pageTitle')}
            </motion.h1>
            <motion.div 
              className="w-32 h-1 bg-brand-orange mb-6 mx-auto"
              initial={{ opacity: 0, width: 0 }}
              animate={hasLoaded ? { opacity: 1, width: 128 } : { opacity: 0, width: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            ></motion.div>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
              initial="hidden"
              animate={hasLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t('farmhouse.heroSubtitle')}
            </motion.p>
            <motion.div
              initial="hidden"
              animate={hasLoaded ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link 
                to={`/${language}/farmhouse/contact`} 
                className="inline-block bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
              >
                {t('farmhouse.contactButton')}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Farmhouse Section */}
      <section className="py-20 relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-green-50 z-0 hidden md:block"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-1">
                {t('farmhouse.introTitle')}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">{t('farmhouse.aboutTitle') || 'About Broadway Farmhouse'}</h2>
              <div className="w-20 h-1 bg-brand-orange"></div>
              <p className="text-gray-700 text-lg leading-relaxed">{t('farmhouse.introText1')}</p>
              <p className="text-gray-700 text-lg leading-relaxed">{t('farmhouse.introText2')}</p>
              <div className="pt-4">
                <Link 
                  to={`/${language}/farmhouse/projects`} 
                  className="inline-flex items-center text-brand-orange font-semibold hover:underline group"
                >
                  {t('farmhouse.projectsTitle')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-orange"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('farmhouse.missionTitle')}</h3>
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                "{t('farmhouse.missionStatement')}"
              </p>
              
              <h4 className="font-semibold text-brand-navy mb-3">{t('farmhouse.ourApproach')}</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{t('farmhouse.approach1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{t('farmhouse.approach2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{t('farmhouse.approach3')}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Farmhouse Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3"
            >
              {t('farmhouse.servicesTitle')}
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('farmhouse.servicesSubtitle')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src="/images/farmhouse/farmhouse-main.jpg" 
                  alt="Sustainable Agriculture" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">Sustainable Agriculture</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  {t('farmhouse.services.agriculture.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.agriculture.item1')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.agriculture.item2')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.agriculture.item3')}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src="/images/farmhouse/roadhouse.jpg" 
                  alt="Livestock Breeding" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">Livestock Breeding</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  {t('farmhouse.services.livestock.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.livestock.item1')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.livestock.item2')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.livestock.item3')}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src="/images/farmhouse/resort.jpg" 
                  alt="Aquaculture Operations" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">Aquaculture Operations</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  {t('farmhouse.services.aquaculture.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.aquaculture.item1')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.aquaculture.item2')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.aquaculture.item3')}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src="/images/farmhouse/scorpion-farm.jpg" 
                  alt="Agricultural Training" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4">Agricultural Training</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  {t('farmhouse.services.training.description')}
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.training.item1')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.training.item2')}</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-2">•</span>
                    <span>{t('farmhouse.services.training.item3')}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold mb-3"
            >
              {t('farmhouse.featuredProjectsTitle')}
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('farmhouse.projectsTitle')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('farmhouse.projectsDescription')}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative overflow-hidden">
                  <img 
                    src="/images/farmhouse/bsf-project.jpg" 
                    alt="BSF Project" 
                    className="w-full h-full object-cover min-h-[300px]" 
                  />
                  <div className="absolute top-0 left-0 bg-green-700 text-white px-4 py-2 font-semibold">
                    {t('tag1')}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      Winner of $5000 2025 TEF
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy mb-4">BSF Project</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Our award-winning Black Soldier Fly farming initiative, creating sustainable protein sources for animal feed while reducing waste.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link 
                      to={`/${language}/farmhouse/projects/bsf`} 
                      className="inline-flex items-center bg-brand-orange text-white px-4 py-2 rounded-md hover:bg-brand-orange/90 transition-colors"
                    >
                      {t('farmhouse.viewProjectButton')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-8 pb-0">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-brand-navy">Related Projects</h3>
                  <Link 
                    to={`/${language}/farmhouse/projects`} 
                    className="text-brand-orange font-semibold hover:underline flex items-center"
                  >
                    View All
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 pt-0">
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src="/images/farmhouse/aquaculture.jpg" 
                      alt="Aquaculture" 
                      className="w-full h-48 object-cover rounded-lg" 
                    />
                    <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded">
                      {t('tag2')}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">
                      {t('farmhouse.projects.project1.title') || 'Aquaculture'}
                    </h3>
                    <p className="text-gray-700 mb-3 line-clamp-3">
                      {t('farmhouse.projects.project1.description') || 'Sustainable fish farming benefiting directly from our BSF production.'}
                    </p>
                    <Link 
                      to={`/${language}/farmhouse/projects/aquaculture`} 
                      className="text-brand-orange font-medium hover:underline inline-flex items-center text-sm"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden">
                    <img 
                      src="/images/farmhouse/rabbits.jpg" 
                      alt="Rabbit Farming" 
                      className="w-full h-48 object-cover rounded-lg" 
                    />
                    <div className="absolute top-2 left-2 bg-amber-600 text-white px-2 py-1 text-xs font-semibold rounded">
                      {t('tag3')}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">
                      {t('farmhouse.projects.project3.title') || 'Rabbit Farming'}
                    </h3>
                    <p className="text-gray-700 mb-3 line-clamp-3">
                      {t('farmhouse.projects.project3.description') || 'Ethical and sustainable rabbit farming for food production and research.'}
                    </p>
                    <Link 
                      to={`/${language}/farmhouse/projects/livestock`} 
                      className="text-brand-orange font-medium hover:underline inline-flex items-center text-sm"
                    >
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-navy mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('about.valuesTitle')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t('leadership.values.sustainability.title')}</h3>
              <p className="text-gray-600 text-center">{t('leadership.values.sustainability.description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t('leadership.values.community.title')}</h3>
              <p className="text-gray-600 text-center">{t('leadership.values.community.description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t('leadership.values.innovation.title')}</h3>
              <p className="text-gray-600 text-center">{t('leadership.values.innovation.description')}</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{t('about.value4').split(':')[0]}</h3>
              <p className="text-gray-600 text-center">{t('about.value4').split(':')[1]}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3"
            >
              {t('farmhouse.ourApproach')}
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-brand-navy mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t('leadership.title')}
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mx-auto mb-6"
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('leadership.introduction')}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {/* Team Member Cards */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                <div className="h-80 bg-gray-200 overflow-hidden">
                  <img 
                    src="/images/team/chairman.jpg" 
                    alt={t('leadership.team.chairman.name')} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/500x600?text=Chairman";
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pb-4 transition-all duration-300 group-hover:pb-8">
                  <h3 className="text-xl font-bold text-white mb-1">{t('leadership.team.chairman.name')}</h3>
                  <p className="text-green-400 font-medium">{t('leadership.team.chairman.title')}</p>
                </div>
              </div>
              <p className="text-gray-700 text-center px-4">
                {t('leadership.team.chairman.bio')}
              </p>
            </motion.div>
            
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                <div className="h-80 bg-gray-200 overflow-hidden">
                  <img 
                    src="/images/team/vice-chair.jpg" 
                    alt={t('leadership.team.viceChair.name')} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/500x600?text=Vice+Chair";
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pb-4 transition-all duration-300 group-hover:pb-8">
                  <h3 className="text-xl font-bold text-white mb-1">{t('leadership.team.viceChair.name')}</h3>
                  <p className="text-green-400 font-medium">{t('leadership.team.viceChair.title')}</p>
                </div>
              </div>
              <p className="text-gray-700 text-center px-4">
                {t('leadership.team.viceChair.bio')}
              </p>
            </motion.div>
            
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
                <div className="h-80 bg-gray-200 overflow-hidden">
                  <img 
                    src="/images/team/ceo.jpg" 
                    alt={t('leadership.team.ceo.name')} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/500x600?text=CEO";
                    }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pb-4 transition-all duration-300 group-hover:pb-8">
                  <h3 className="text-xl font-bold text-white mb-1">{t('leadership.team.ceo.name')}</h3>
                  <p className="text-green-400 font-medium">{t('leadership.team.ceo.title')}</p>
                </div>
              </div>
              <p className="text-gray-700 text-center px-4">
                {t('leadership.team.ceo.bio')}
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to={`/${language}/corporation/leadership`} 
              className="inline-flex items-center bg-brand-navy text-white px-6 py-3 rounded-full hover:bg-brand-navy/90 transition-colors"
            >
              {t('leadership.cta.button')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 bg-green-700 text-white">
                <motion.h3
                  className="text-2xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {t('social.followUs')}
                </motion.h3>
                <motion.p
                  className="text-white/80 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t('social.stayConnected') || 'Stay connected with us to receive the latest updates on our projects, events, and initiatives.'}
                </motion.p>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/Broadwaylaboratory" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-12 w-12 bg-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{t('contact.formTitle')}</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">{t('contact.form.emailLabel')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors" 
                      placeholder="your@email.com"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-brand-orange text-white py-2 px-4 rounded-md hover:bg-brand-orange/90 transition-colors font-medium"
                  >
                    {t('testimonials.viewMoreButton')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 0h60v60H0z" fill="none" />
                <path d="M0 0h15v15H0z" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {t('farmhouse.servicesTitle')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('leadership.cta.title')}</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed">{t('leadership.cta.description')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to={`/${language}/farmhouse/contact`} 
                className="btn bg-white text-green-700 hover:bg-white/90 px-8 py-3 rounded-full font-medium transform transition-all hover:scale-105"
              >
                {t('leadership.cta.button')}
              </Link>
              <Link 
                to={`/${language}/farmhouse/projects`} 
                className="btn bg-brand-orange text-white hover:bg-brand-orange/90 px-8 py-3 rounded-full font-medium transform transition-all hover:scale-105"
              >
                {t('farmhouse.viewProjects')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <motion.h3 
                className="text-3xl font-bold text-brand-navy mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('contact.officeLocations')}
              </motion.h3>
              <motion.div 
                className="w-20 h-1 bg-brand-orange mx-auto mb-6"
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              ></motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-700"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-green-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-3">{t('contact.cameroonOffice')}</h4>
                    <p className="text-gray-700 mb-1 text-lg">Yaoundé, Cameroon</p>
                    <p className="text-gray-500 mb-3">{t('contact.corporateHeadquarters')}</p>
                    <a 
                      href="https://maps.google.com/?q=Yaoundé,Cameroon" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
                    >
                      {t('contact.viewOnMap') || 'View on Map'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-orange"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-brand-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-brand-navy mb-3">{t('contact.usOffice')}</h4>
                    <p className="text-gray-700 mb-1 text-lg">1432 Hildreth Ave</p>
                    <p className="text-gray-700 mb-1">Columbus, OH 43203</p>
                    <p className="text-gray-500 mb-3">United States</p>
                    <a 
                      href="https://maps.google.com/?q=1432+Hildreth+Ave,Columbus,OH+43203" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-orange font-medium hover:text-brand-orange/80"
                    >
                      {t('contact.viewOnMap') || 'View on Map'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmhouseAbout; 