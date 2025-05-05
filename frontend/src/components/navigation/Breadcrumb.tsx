import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';

interface BreadcrumbItem {
  label: string;
  path?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Reusable breadcrumb component for consistent navigation across the site
 */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = "" }) => {
  const { t } = useTranslation();
  
  return (
    <nav 
      className={`flex text-sm ${className}`} 
      aria-label={t('navigation.breadcrumb')}
    >
      {items.map((item, index) => (
        <Fragment key={index}>
          {index > 0 && (
            <span className="mx-2 text-gray-400 dark:text-gray-500" aria-hidden="true">/</span>
          )}
          
          {item.path && !item.current ? (
            <Link 
              to={item.path} 
              className="text-gray-500 dark:text-gray-400 hover:text-brand-navy dark:hover:text-brand-orange transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span 
              className="text-gray-700 dark:text-gray-300"
              {...(item.current ? { 'aria-current': 'page' } : {})}
            >
              {item.label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb; 