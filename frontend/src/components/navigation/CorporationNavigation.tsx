import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CorporationNavigation = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <motion.nav 
      className={`fixed w-full z-50 bg-brand-navy text-white transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to={`/${language}/corporation`} className="flex items-center">
              <span className="text-xl font-bold">Broadway Corporation</span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to={`/${language}/corporation`} label={t('navigation.home')} />
            <NavLink to={`/${language}/corporation/about`} label={t('navigation.about')} />
            <NavLink to={`/${language}/corporation/services`} label={t('corporation.services')} />
            <NavLink to={`/${language}/corporation/team`} label={t('navigation.aboutSubmenu.leadership')} />
            <NavLink to={`/${language}/corporation/contact`} label={t('navigation.contact')} />
            
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors"
                onClick={toggleLanguage}
                aria-label={t('language.toggle')}
              >
                {t('language.toggle')}
              </motion.button>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={`/${language}`} 
                  className="flex items-center text-brand-orange hover:text-brand-orange/80 transition-colors"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  {t('common.backToPortal')}
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-brand-navy-dark"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-custom py-4">
              <motion.div 
                className="flex flex-col space-y-4"
                initial="closed"
                animate="open"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                <MobileNavLink 
                  to={`/${language}/corporation`} 
                  label={t('navigation.home')}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <MobileNavLink 
                  to={`/${language}/corporation/about`} 
                  label={t('navigation.about')}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <MobileNavLink 
                  to={`/${language}/corporation/services`} 
                  label={t('corporation.services')}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <MobileNavLink 
                  to={`/${language}/corporation/team`} 
                  label={t('navigation.aboutSubmenu.leadership')}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                <MobileNavLink 
                  to={`/${language}/corporation/contact`} 
                  label={t('navigation.contact')}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
                
                <div className="flex flex-col space-y-4 pt-2 border-t border-white/10">
                  <motion.button
                    className="w-fit text-sm px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors"
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                  >
                    {t('language.toggle')}
                  </motion.button>
                  
                  <MobileNavLink 
                    to={`/${language}`} 
                    label={t('common.backToPortal')}
                    className="text-brand-orange"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link 
        to={to} 
        className="hover:text-brand-orange transition-colors relative group"
      >
        {label}
        <motion.span 
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300"
          layoutId="underline"
        />
      </Link>
    </motion.div>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({ 
  to, 
  label, 
  className = "", 
  onClick 
}: { 
  to: string; 
  label: string; 
  className?: string; 
  onClick?: () => void;
}) => {
  return (
    <motion.div
      variants={{
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: 20 }
      }}
    >
      <Link 
        to={to} 
        className={`block py-2 hover:text-brand-orange transition-colors ${className}`}
        onClick={onClick}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default CorporationNavigation; 