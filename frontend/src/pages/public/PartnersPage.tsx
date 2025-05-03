import { useTranslationWithFallback } from '../../hooks/useTranslationWithFallback';
import { useLanguage } from '../../hooks/useLanguage';
import Layout from '../../components/layout/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Sample partner data - in a real app, this would come from an API or CMS
const partnerData = [
  {
    id: 1,
    name: {
      en: 'Global Science Foundation',
      fr: 'Fondation Mondiale pour la Science'
    },
    description: {
      en: 'Supporting scientific advancement and education across developing regions.',
      fr: 'Soutien à l\'avancement scientifique et à l\'éducation dans les régions en développement.'
    },
    category: 'education',
    logoPlaceholder: 'GSF'
  },
  {
    id: 2,
    name: {
      en: 'Sustainable Agriculture Institute',
      fr: 'Institut d\'Agriculture Durable'
    },
    description: {
      en: 'Pioneering sustainable farming techniques for improved crop yields.',
      fr: 'Techniques agricoles durables pour améliorer les rendements des cultures.'
    },
    category: 'agriculture',
    logoPlaceholder: 'SAI'
  },
  {
    id: 3,
    name: {
      en: 'Universal Health Partners',
      fr: 'Partenaires de Santé Universelle'
    },
    description: {
      en: 'Enhancing access to quality healthcare in underserved communities.',
      fr: 'Amélioration de l\'accès aux soins de santé dans les communautés mal desservies.'
    },
    category: 'healthcare',
    logoPlaceholder: 'UHP'
  },
  {
    id: 4,
    name: {
      en: 'Future Technology Consortium',
      fr: 'Consortium des Technologies du Futur'
    },
    description: {
      en: 'Accelerating technological innovation for sustainable development.',
      fr: 'Accélération de l\'innovation technologique pour le développement durable.'
    },
    category: 'technology',
    logoPlaceholder: 'FTC'
  },
  {
    id: 5,
    name: {
      en: 'Global Education Initiative',
      fr: 'Initiative Mondiale pour l\'Éducation'
    },
    description: {
      en: 'Promoting quality education and skills development around the world.',
      fr: 'Promotion de l\'éducation de qualité et du développement des compétences dans le monde.'
    },
    category: 'education',
    logoPlaceholder: 'GEI'
  },
  {
    id: 6,
    name: {
      en: 'Community Builders Association',
      fr: 'Association des Constructeurs Communautaires'
    },
    description: {
      en: 'Empowering communities through development initiatives and infrastructure.',
      fr: 'Autonomisation des communautés par des initiatives de développement et d\'infrastructure.'
    },
    category: 'community',
    logoPlaceholder: 'CBA'
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const PartnersPage = () => {
  const { t } = useTranslationWithFallback();
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter partners by category
  const filteredPartners = activeFilter === 'all' 
    ? partnerData 
    : partnerData.filter(partner => partner.category === activeFilter);

  // Categories for filtering
  const categories = [
    { id: 'all', label: t('partners.filters.all', 'All Partners') },
    { id: 'education', label: t('partners.filters.education', 'Education') },
    { id: 'agriculture', label: t('partners.filters.agriculture', 'Agriculture') },
    { id: 'healthcare', label: t('partners.filters.healthcare', 'Healthcare') },
    { id: 'technology', label: t('partners.filters.technology', 'Technology') },
    { id: 'community', label: t('partners.filters.community', 'Community') }
  ];

  return (
    <Layout
      title={`${t('partners.pageTitle')} - Broadway Corporation`}
      description={t('partners.metaDescription')}
      canonicalUrl={`https://broadwaycorp.com/${language}/partners`}
    >
      {/* Hero Banner */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('partners.pageTitle')}</h1>
          <div className="w-24 h-1 bg-brand-orange mb-6"></div>
          <p className="text-xl max-w-2xl">
            {t('partners.heroText', 'Discover the organizations that partner with Broadway Corporation to drive innovation and sustainable development.')}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-brand-gray-light py-3">
        <div className="container-custom">
          <nav className="flex text-sm" aria-label="Breadcrumb">
            <Link to={`/${language}`} className="text-brand-navy hover:text-brand-orange transition-colors">
              {t('navigation.home')}
            </Link>
            <span className="mx-2 text-brand-gray">/</span>
            <span className="text-brand-gray-dark" aria-current="page">{t('navigation.partners')}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-navy mb-6">{t('partners.filterTitle', 'Browse by Category')}</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === category.id
                      ? 'bg-brand-navy text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  aria-pressed={activeFilter === category.id}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Partners Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredPartners.map(partner => (
              <motion.div
                key={partner.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
                variants={itemVariants}
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-brand-navy/10 rounded-lg flex items-center justify-center text-xl font-bold text-brand-navy mr-4">
                    {partner.logoPlaceholder}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {partner.name[language as keyof typeof partner.name]}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  {partner.description[language as keyof typeof partner.description]}
                </p>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold text-gray-700 rounded-full">
                    {t(`partners.categories.${partner.category}`, partner.category)}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-brand-orange hover:text-brand-navy transition-colors font-medium"
                    aria-label={t('partners.learnMoreAbout', 'Learn more about') + ' ' + partner.name[language as keyof typeof partner.name]}
                  >
                    {t('common.learnMore')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state if no partners match filter */}
          {filteredPartners.length === 0 && (
            <div className="text-center py-10">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                {t('partners.noPartnersFound', 'No partners found for this category')}
              </h3>
              <p className="text-gray-600">
                {t('partners.tryDifferentFilter', 'Please try a different filter')}
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-4 px-4 py-2 bg-brand-navy text-white rounded hover:bg-brand-navy/90 transition-colors"
              >
                {t('partners.viewAllPartners', 'View all partners')}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-orange/10 py-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            {t('partners.ctaTitle', 'Interested in partnering with us?')}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            {t('partners.ctaDescription', 'Join our network of partners and contribute to sustainable development and innovation. Contact us to explore collaboration opportunities.')}
          </p>
          <Link
            to={`/${language}/contact`}
            className="inline-block px-6 py-3 bg-brand-orange text-white rounded-md hover:bg-brand-orange/90 transition-colors font-medium"
          >
            {t('partners.contactButton', 'Contact Us')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PartnersPage; 