import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';

// DivisionCard component for reusability
const DivisionCard = ({ 
  title, 
  description, 
  buttonText, 
  link, 
  color, 
  icon,
  delay = 0
}: { 
  title: string; 
  description: string; 
  buttonText: string; 
  link: string; 
  color: string;
  icon: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div 
      className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 ${color}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color.replace('border', 'bg')}`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold ml-3">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        <Link 
          to={link} 
          className={`inline-block px-6 py-2 rounded-md text-white ${color.replace('border', 'bg')} hover:opacity-90 transition-opacity`}
        >
          {buttonText}
        </Link>
      </div>
    </motion.div>
  );
};

const LandingPortal = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Icons for the division cards
  const corporationIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
    </svg>
  );

  const enterpriseIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
    </svg>
  );

  const farmhouseIcon = (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
    </svg>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{t('landing.title')} - {t('landing.subtitle')}</title>
        <meta name="description" content={t('landing.description')} />
        <html lang={language} />
      </Helmet>

      {/* Navigation Bar */}
      <header className="bg-brand-navy text-white">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to={`/${language}`} className="text-xl font-bold">
                Broadway Corporation
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button
                className="text-sm px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors"
                onClick={toggleLanguage}
              >
                {t('language.toggle')}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-brand-navy-dark">
            <div className="container-custom py-4 flex flex-col space-y-4">
              <button
                className="text-sm px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors w-fit"
                onClick={toggleLanguage}
              >
                {t('language.toggle')}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-navy to-blue-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('landing.title')}
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-brand-orange mx-auto mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-xl mb-8 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('landing.subtitle')}
            </motion.p>
            <motion.p 
              className="text-lg mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t('landing.description')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center text-brand-navy mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {t('landing.selectDivision')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DivisionCard
              title={t('landing.corporationCard.title')}
              description={t('landing.corporationCard.description')}
              buttonText={t('landing.corporationCard.buttonText')}
              link={`/${language}/corporation`}
              color="border-brand-navy"
              icon={corporationIcon}
              delay={0.1}
            />
            <DivisionCard
              title={t('landing.enterpriseCard.title')}
              description={t('landing.enterpriseCard.description')}
              buttonText={t('landing.enterpriseCard.buttonText')}
              link={`/${language}/enterprise`}
              color="border-blue-600"
              icon={enterpriseIcon}
              delay={0.2}
            />
            <DivisionCard
              title={t('landing.farmhouseCard.title')}
              description={t('landing.farmhouseCard.description')}
              buttonText={t('landing.farmhouseCard.buttonText')}
              link={`/${language}/farmhouse`}
              color="border-green-700"
              icon={farmhouseIcon}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-center text-lg text-gray-700 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {t('landing.overview')}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-bold text-brand-navy mb-2">{t('landing.corporateHeadquarters')}</h3>
                <p className="text-gray-600">{t('landing.corporateLocation')}</p>
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-brand-navy mb-2">{t('landing.operationalHub')}</h3>
                <p className="text-gray-600">{t('landing.operationalLocation')}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-8 mt-auto">
        <div className="container-custom">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Broadway Corporation. {t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPortal; 