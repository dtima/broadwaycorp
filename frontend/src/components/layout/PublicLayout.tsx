import { ReactNode, useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

type PublicLayoutProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

const PublicLayout = ({ children, title, description }: PublicLayoutProps) => {
  const { t } = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        <html lang={language} />
      </Helmet>
      
      {/* Header */}
      <header className="bg-brand-navy text-white">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link to={`/${language}`} className="text-xl font-bold">
              Broadway Corporation
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to={`/${language}/home`} className="hover:text-brand-orange transition-colors">
                {t('navigation.home')}
              </Link>
              <Link to={`/${language}/about`} className="hover:text-brand-orange transition-colors">
                {t('navigation.about')}
              </Link>
              <Link to={`/${language}/partners`} className="hover:text-brand-orange transition-colors">
                {t('navigation.partners')}
              </Link>
              <Link to={`/${language}/contact`} className="hover:text-brand-orange transition-colors">
                {t('navigation.contact')}
              </Link>
              <button
                className="text-sm px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors"
                onClick={toggleLanguage}
                aria-label={language === 'en' ? "Switch to French" : "Switch to English"}
              >
                {t('language.toggle')}
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-brand-navy-dark border-t border-white/10"
            >
              <div className="container-custom py-4">
                <div className="flex flex-col space-y-4">
                  <Link 
                    to={`/${language}/home`} 
                    className="py-2 hover:text-brand-orange transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('navigation.home')}
                  </Link>
                  <Link 
                    to={`/${language}/about`} 
                    className="py-2 hover:text-brand-orange transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('navigation.about')}
                  </Link>
                  <Link 
                    to={`/${language}/partners`} 
                    className="py-2 hover:text-brand-orange transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('navigation.partners')}
                  </Link>
                  <Link 
                    to={`/${language}/contact`} 
                    className="py-2 hover:text-brand-orange transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('navigation.contact')}
                  </Link>
                  <button
                    className="w-fit text-sm px-3 py-1 rounded border border-white/30 hover:bg-white/10 transition-colors"
                    onClick={() => {
                      toggleLanguage();
                      setIsMenuOpen(false);
                    }}
                    aria-label={language === 'en' ? "Switch to French" : "Switch to English"}
                  >
                    {t('language.toggle')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-auto">
        <div className="container-custom">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Broadway Corporation. {t('footer.rightsReserved')}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Link to={`/${language}/privacy`} className="hover:text-brand-orange transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to={`/${language}/terms`} className="hover:text-brand-orange transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to={`/${language}`} className="text-brand-orange hover:text-brand-orange/80 transition-colors">
                {t('footer.backToPortal')}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout; 