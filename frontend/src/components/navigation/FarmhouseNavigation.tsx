import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { useState } from 'react';

const FarmhouseNavigation = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="bg-green-700 text-white">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={`/${language}/farmhouse`} className="flex items-center">
              <span className="text-xl font-bold">Broadway Farmhouse</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to={`/${language}/farmhouse`} className="hover:text-brand-orange transition-colors">
              {t('navigation.home')}
            </Link>
            <Link to={`/${language}/farmhouse/about`} className="hover:text-brand-orange transition-colors">
              {t('navigation.about')}
            </Link>
            <Link to={`/${language}/farmhouse/services`} className="hover:text-brand-orange transition-colors">
              {t('farmhouse.servicesTitle')}
            </Link>
            <Link to={`/${language}/farmhouse/projects`} className="hover:text-brand-orange transition-colors">
              {t('farmhouse.futureProjectsTitle')}
            </Link>
            <Link to={`/${language}/farmhouse/contact`} className="hover:text-brand-orange transition-colors">
              {t('navigation.contact')}
            </Link>
            <Link to={`/${language}`} className="text-brand-orange hover:text-brand-orange/80 transition-colors">
              {t('common.backToPortal')}
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
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
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-800">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to={`/${language}/farmhouse`} 
              className="block hover:text-brand-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navigation.home')}
            </Link>
            <Link 
              to={`/${language}/farmhouse/about`} 
              className="block hover:text-brand-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navigation.about')}
            </Link>
            <Link 
              to={`/${language}/farmhouse/services`} 
              className="block hover:text-brand-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('farmhouse.servicesTitle')}
            </Link>
            <Link 
              to={`/${language}/farmhouse/projects`} 
              className="block hover:text-brand-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('farmhouse.futureProjectsTitle')}
            </Link>
            <Link 
              to={`/${language}/farmhouse/contact`} 
              className="block hover:text-brand-orange transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navigation.contact')}
            </Link>
            <Link 
              to={`/${language}`} 
              className="block text-brand-orange hover:text-brand-orange/80 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('common.backToPortal')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default FarmhouseNavigation; 