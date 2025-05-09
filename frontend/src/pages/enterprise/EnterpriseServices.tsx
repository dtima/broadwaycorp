import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Import product images
import Product1 from '../../assets/images/products/product1.jpg';
import Product2 from '../../assets/images/products/product2.jpg';
import Product3 from '../../assets/images/products/product3.jpg';
import Product5 from '../../assets/images/products/product5.jpg';
import Product6 from '../../assets/images/products/product6.jpg';
import Product7 from '../../assets/images/products/product7.jpg';
import Product8 from '../../assets/images/products/product8.jpg';
import ScorpionFarming from '../../assets/images/products/scorpionfarming.jpeg';

const EnterpriseServices = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  // Define product data for gallery
  const labEquipment = [
    { 
      id: 1, 
      name: t('enterprise.productGallery.products.glassware.name'), 
      image: Product1, 
      category: t('enterprise.productGallery.categories.scientificEquipment'),
      description: t('enterprise.productGallery.products.glassware.description')
    },
    { 
      id: 2, 
      name: t('enterprise.productGallery.products.bunsenBurner.name'), 
      image: Product2, 
      category: t('enterprise.productGallery.categories.scientificEquipment'),
      description: t('enterprise.productGallery.products.bunsenBurner.description')
    },
    { 
      id: 3, 
      name: t('enterprise.productGallery.products.fossils.name'), 
      image: Product3, 
      category: t('enterprise.productGallery.categories.educationalResources'),
      description: t('enterprise.productGallery.products.fossils.description')
    },
    { 
      id: 5, 
      name: t('enterprise.productGallery.products.testTubes.name'), 
      image: Product5, 
      category: t('enterprise.productGallery.categories.scientificEquipment'),
      description: t('enterprise.productGallery.products.testTubes.description')
    },
    { 
      id: 6, 
      name: t('enterprise.productGallery.products.slides.name'), 
      image: Product6, 
      category: t('enterprise.productGallery.categories.educationalResources'),
      description: t('enterprise.productGallery.products.slides.description')
    },
    { 
      id: 7, 
      name: t('enterprise.productGallery.products.chemistryLab.name'), 
      image: Product7, 
      category: t('enterprise.productGallery.categories.scientificEquipment'),
      description: t('enterprise.productGallery.products.chemistryLab.description')
    },
    { 
      id: 8, 
      name: t('enterprise.productGallery.products.projector.name'), 
      image: Product8, 
      category: t('enterprise.productGallery.categories.educationalTechnology'),
      description: t('enterprise.productGallery.products.projector.description')
    }
  ];

  // Define service items data
  const serviceItems = {
    scientific: {
      title: t('enterprise.services.scientific.title'),
      description: t('enterprise.services.scientific.description'),
      items: [
        t('enterprise.services.scientific.item1'),
        t('enterprise.services.scientific.item2'),
        t('enterprise.services.scientific.item3')
      ]
    },
    education: {
      title: t('enterprise.services.education.title'),
      description: t('enterprise.services.education.description'),
      items: [
        t('enterprise.services.education.item1'),
        t('enterprise.services.education.item2'),
        t('enterprise.services.education.item3')
      ]
    },
    laboratory: {
      title: t('enterprise.services.laboratory.title'),
      description: t('enterprise.services.laboratory.description'),
      items: [
        t('enterprise.services.laboratory.item1'),
        t('enterprise.services.laboratory.item2'),
        t('enterprise.services.laboratory.item3')
      ]
    },
    community: {
      title: t('enterprise.services.community.title'),
      description: t('enterprise.services.community.description'),
      items: [
        t('enterprise.services.community.item1'),
        t('enterprise.services.community.item2'),
        t('enterprise.services.community.item3')
      ]
    }
  };

  return (
    <div>
      <Helmet>
        <title>{t('enterprise.pageTitle')} - {t('enterprise.servicesTitle')}</title>
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
              {t('enterprise.servicesTitle')}
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
              {t('enterprise.servicesSubtitle')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('enterprise.productGallery.title')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('enterprise.productGallery.description')}
            </p>
          </motion.div>

          {/* Product Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labEquipment.map((item, index) => (
              <motion.div 
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold text-brand-navy mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('enterprise.coreServices.title')}
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('enterprise.coreServices.description')}
            </motion.p>
          </div>

          {/* Scientific Equipment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{serviceItems.scientific.title}</h3>
              <p className="text-gray-700 mb-6">{serviceItems.scientific.description}</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.scientific.items[0]}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.scientific.items[1]}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.scientific.items[2]}</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={Product1} 
                alt="Scientific laboratory equipment"
                className="w-full h-64 object-cover" 
              />
            </motion.div>
          </div>

          {/* Education & Tutoring */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={Product3} 
                alt="Educational fossil collection"
                className="w-full h-64 object-cover" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{serviceItems.education.title}</h3>
              <p className="text-gray-700 mb-6">{serviceItems.education.description}</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.education.items[0]}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.education.items[1]}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-orange-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.education.items[2]}</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Laboratory Construction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{serviceItems.laboratory.title}</h3>
              <p className="text-gray-700 mb-6">{serviceItems.laboratory.description}</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.laboratory.items[0]}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.laboratory.items[1]}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.laboratory.items[2]}</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={Product7} 
                alt="Laboratory setup"
                className="w-full h-64 object-cover" 
              />
            </motion.div>
          </div>

          {/* Community Development -> Scorpion Farming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={ScorpionFarming} 
                alt="Scorpion farming research and development"
                className="w-full h-64 object-cover" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{serviceItems.community.title}</h3>
              <p className="text-gray-700 mb-6">{serviceItems.community.description}</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.community.items[0]}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.community.items[1]}</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mt-1 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{serviceItems.community.items[2]}</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Equipment Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-brand-navy mb-4">{t('enterprise.featuredEquipment.title')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('enterprise.featuredEquipment.description')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="col-span-1 md:col-span-2 rounded-lg overflow-hidden shadow-lg relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={Product5} 
                alt="Laboratory test tubes and microscope" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full mb-2">
                  {t('enterprise.featuredEquipment.featured')}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{t('enterprise.featuredEquipment.starterKit.name')}</h3>
                <p className="text-white/90">{t('enterprise.featuredEquipment.starterKit.description')}</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg relative"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <img 
                  src={Product6} 
                  alt="Microscope slide collection" 
                  className="w-full h-[190px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{t('enterprise.featuredEquipment.microSlides.name')}</h3>
                  <p className="text-white/90 text-sm">{t('enterprise.featuredEquipment.microSlides.description')}</p>
                </div>
              </motion.div>

              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg relative"
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <img 
                  src={Product8} 
                  alt="Digital projector for education" 
                  className="w-full h-[190px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{t('enterprise.featuredEquipment.eduTech.name')}</h3>
                  <p className="text-white/90 text-sm">{t('enterprise.featuredEquipment.eduTech.description')}</p>
                </div>
              </motion.div>
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

export default EnterpriseServices; 