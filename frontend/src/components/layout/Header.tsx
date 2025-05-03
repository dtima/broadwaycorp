import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import Container from './Container';
import Button from '../common/Button';

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeaderProps {
  /** Site logo URL or element */
  logo?: React.ReactNode;
  /** Navigation links */
  navLinks?: NavLink[];
  /** Whether to show language switcher */
  showLanguageSwitcher?: boolean;
  /** Additional CSS classes for the header */
  className?: string;
  /** Custom action button text */
  ctaText?: string;
  /** Custom action button URL */
  ctaLink?: string;
}

/**
 * Main header/navbar component with responsive mobile menu
 */
const Header = ({
  logo = <img src="/assets/images/logo-placeholder.svg" alt="Broadway Corporation" className="h-10" />,
  navLinks = [],
  showLanguageSwitcher = true,
  className = '',
  ctaText = 'Contact Us',
  ctaLink = '/contact',
}: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { pathname } = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Languages available for switching
  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
  ];

  // Close mobile menu when CTA is clicked
  const handleMobileCtaClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`bg-white shadow-sm py-4 ${className}`}>
      <Container maxWidth="full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {logo}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const linkClassName = `text-base font-medium transition-colors ${
                isActive ? 'text-brand-navy' : 'text-gray-600 hover:text-brand-navy'
              }`;

              if (link.isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={linkClassName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={linkClassName}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Language Switcher - Desktop */}
            {showLanguageSwitcher && (
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="appearance-none bg-transparent pr-8 py-1 pl-2 border border-gray-200 rounded-md text-sm focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                  aria-label="Select language"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            )}

            {/* CTA Button - Desktop */}
            <Button href={ctaLink} variant="secondary" size="sm">
              {ctaText}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-navy"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 pt-2 pb-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const linkClassName = `px-4 py-2 rounded-md text-base font-medium ${
                isActive ? 'bg-brand-navy/10 text-brand-navy' : 'text-gray-600 hover:bg-gray-100'
              }`;

              if (link.isExternal) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={linkClassName}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={linkClassName}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Language Switcher - Mobile */}
            {showLanguageSwitcher && (
              <div className="px-4 py-2">
                <label htmlFor="mobile-language-select" className="block text-sm font-medium text-gray-700 mb-1">
                  Language
                </label>
                <select
                  id="mobile-language-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="w-full appearance-none bg-white border border-gray-200 rounded-md py-2 pl-3 pr-8 text-base focus:ring-2 focus:ring-brand-navy focus:border-brand-navy"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* CTA Button - Mobile */}
            <div className="px-4 pt-2">
              {/* Use a Link directly for mobile since we need onClick */}
              <Link
                to={ctaLink}
                className="inline-flex justify-center items-center w-full px-4 py-2 bg-brand-orange text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-brand-orange"
                onClick={handleMobileCtaClick}
              >
                {ctaText}
              </Link>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header; 