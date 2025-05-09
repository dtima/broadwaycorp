import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';

const FarmhouseFooter = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-700 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Broadway Farmhouse</h3>
            <p className="text-white/80 mb-4">
              {t('farmhouse.introText1')}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to={`/${language}/farmhouse`} className="text-white/80 hover:text-brand-orange transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/farmhouse/about`} className="text-white/80 hover:text-brand-orange transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/farmhouse/services`} className="text-white/80 hover:text-brand-orange transition-colors">
                  {t('farmhouse.servicesTitle')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/farmhouse/projects`} className="text-white/80 hover:text-brand-orange transition-colors">
                  {t('farmhouse.futureProjectsTitle')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('navigation.contact')}</h4>
            <address className="not-italic text-white/80">
              <p className="mb-2">789 Agriculture Road</p>
              <p className="mb-2">Bamenda</p>
              <p className="mb-2">Cameroon</p>
              <p>
                <a href="mailto:farmhouse@broadwaycorp.com" className="text-brand-orange hover:underline">
                  farmhouse@broadwaycorp.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-brand-orange transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-brand-orange transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.202-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.724-.667 1.565-.667 2.471 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.229-.616-.001.021-.001.041-.001.062 0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14.001 0-.21-.005-.42-.014-.639.961-.689 1.8-1.561 2.46-2.548z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-brand-orange transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-brand-orange transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; {currentYear} Broadway Farmhouse. {t('footer.rights')}</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link to={`/${language}/farmhouse/privacy`} className="hover:text-brand-orange transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to={`/${language}/farmhouse/terms`} className="hover:text-brand-orange transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to={`/${language}`} className="hover:text-brand-orange transition-colors">
              {t('common.backToPortal')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FarmhouseFooter; 