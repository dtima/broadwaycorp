import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const CorporationNavigation = () => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  
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
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileMenuButtonRef.current?.focus();
      }
    };

    if (isMobileMenuOpen && mobileMenuRef.current) {
      document.addEventListener('keydown', handleKeyDown);
      const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (firstElement) {
        firstElement.focus();
      }

      const trapFocus = (event: KeyboardEvent) => {
        if (event.key !== 'Tab') return;
        if (focusableElements.length === 1) {
            event.preventDefault();
            return;
        }
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      };
      
      mobileMenuRef.current.addEventListener('keydown', trapFocus);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        mobileMenuRef.current?.removeEventListener('keydown', trapFocus);
      };
    }
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);
  
  return (
    <motion.nav 
      className={`fixed w-full z-50 bg-brand-navy text-white transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2' : 'py-4'
      }`}
      initial={shouldReduceMotion ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to={`/${language}/corporation`} className="flex items-center">
              <span className="text-xl font-bold">Broadway Corporation</span>
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8" aria-label={t('navigation.mainNavigationLabel')}>
            <NavLink to={`/${language}/corporation`} label={t('navigation.home')} />
            <NavLink to={`/${language}/corporation/about`} label={t('navigation.about')} />
            <NavLink to={`/${language}/corporation/services`} label={t('corporation.services')} />
            <NavLink to={`/${language}/corporation/team`} label={t('navigation.aboutSubmenu.leadership')} />
            <NavLink to={`/${language}/corporation/initiatives`} label="Initiatives" />
            <NavLink to={`/${language}/corporation/contact`} label={t('navigation.contact')} />
            
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                className="text-sm px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors"
                onClick={toggleLanguage}
                aria-label={t('language.toggle.ariaLabel', { lang: language === 'en' ? 'Français' : 'English' })}
              >
                {language === 'en' ? 'Français (FR)' : 'English (EN)'}
              </motion.button>
              
              <motion.div 
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
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
          </nav>
          
          <motion.button 
            ref={mobileMenuButtonRef}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-label={isMobileMenuOpen ? t('navigation.closeMenu') : t('navigation.openMenu')}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-container"
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
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu-container"
            ref={mobileMenuRef}
            className="md:hidden bg-brand-navy-dark"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          >
            <div className="container-custom py-4">
              <h2 id="mobile-menu-title" className="sr-only">{t('navigation.mobileMenuTitle')}</h2>
              <motion.div 
                className="flex flex-col space-y-4"
                initial="closed"
                animate="open"
                variants={shouldReduceMotion ? {} : {
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                <MobileNavLink to={`/${language}/corporation`} label={t('navigation.home')} onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to={`/${language}/corporation/about`} label={t('navigation.about')} onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to={`/${language}/corporation/services`} label={t('corporation.services')} onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to={`/${language}/corporation/team`} label={t('navigation.aboutSubmenu.leadership')} onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to={`/${language}/corporation/initiatives`} label="Initiatives" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavLink to={`/${language}/corporation/contact`} label={t('navigation.contact')} onClick={() => setIsMobileMenuOpen(false)} />
                
                <div className="flex flex-col space-y-4 pt-2 border-t border-white/10">
                  <motion.button
                    className="w-fit text-sm px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors"
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                    variants={shouldReduceMotion ? {} : {
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                    aria-label={t('language.toggle.ariaLabel', { lang: language === 'en' ? 'Français' : 'English' })}
                  >
                    {language === 'en' ? 'Français (FR)' : 'English (EN)'}
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
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();
  const isActive = location.pathname === to || 
                   (to !== `/${location.pathname.split('/')[1]}/corporation` && location.pathname.startsWith(to) && to.length > 1 && location.pathname !== to && !to.endsWith("/corporation") ) ||
                   (to.endsWith('/corporation') && location.pathname.startsWith(to) && location.pathname.split('/').length === to.split('/').length);

  const activeStyle = isActive ? "text-brand-orange font-semibold" : "hover:text-brand-orange";

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
    >
      <Link 
        to={to} 
        className={`transition-colors relative group ${activeStyle}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
        <motion.span 
          className={`absolute bottom-0 left-0 h-0.5 bg-brand-orange transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
          layoutId={shouldReduceMotion ? undefined : (isActive ? `active-underline-${to.replace(/[^a-zA-Z0-9]/g, '')}` : `underline-${to.replace(/[^a-zA-Z0-9]/g, '')}`)}
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
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();
  const isActive = location.pathname === to || 
                   (to !== `/${location.pathname.split('/')[1]}/corporation` && location.pathname.startsWith(to) && to.length > 1 && location.pathname !== to && !to.endsWith("/corporation") ) ||
                   (to.endsWith('/corporation') && location.pathname.startsWith(to) && location.pathname.split('/').length === to.split('/').length);

  const activeMobileStyle = isActive ? "text-brand-orange font-semibold" : "hover:text-brand-orange";

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: 20 }
      }}
    >
      <Link 
        to={to} 
        className={`block py-2 transition-colors ${activeMobileStyle} ${className}`}
        onClick={onClick}
        aria-current={isActive ? 'page' : undefined}
      >
        {label}
      </Link>
    </motion.div>
  );
};

export default CorporationNavigation; 