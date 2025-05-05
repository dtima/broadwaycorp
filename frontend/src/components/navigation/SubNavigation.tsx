import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useRef, useEffect } from 'react';

interface NavItem {
  label: string;
  path: string;
  current?: boolean;
}

interface SubNavigationProps {
  items: NavItem[];
  className?: string;
}

/**
 * Reusable sub-navigation component for consistent secondary navigation
 */
const SubNavigation: React.FC<SubNavigationProps> = ({ items, className = "" }) => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll active item into view when component loads
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    
    const activeItem = scrollContainer.querySelector('[aria-current="page"]');
    if (activeItem) {
      const containerWidth = scrollContainer.offsetWidth;
      const itemLeft = (activeItem as HTMLElement).offsetLeft;
      const itemWidth = (activeItem as HTMLElement).offsetWidth;
      
      // Center the active item if possible
      scrollContainer.scrollLeft = itemLeft - (containerWidth / 2) + (itemWidth / 2);
    }
  }, [items]);
  
  return (
    <div 
      className="relative overflow-hidden" 
      aria-label={t('navigation.subNavigation')}
    >
      <div 
        ref={scrollContainerRef}
        className={`
          flex space-x-1 overflow-x-auto pb-2 scrollbar-none
          -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8
          ${className}
        `}
      >
        {items.map((item, index) => (
          <Link 
            key={index}
            to={item.path}
            className={`
              px-4 py-3 inline-block font-medium text-sm whitespace-nowrap flex-shrink-0
              ${item.current 
                ? 'text-brand-navy dark:text-brand-orange border-b-2 border-brand-orange' 
                : 'text-gray-500 dark:text-gray-400 hover:text-brand-navy dark:hover:text-brand-orange border-b-2 border-transparent hover:border-brand-orange/50'
              }
            `}
            {...(item.current ? { 'aria-current': 'page' } : {})}
          >
            {item.label}
          </Link>
        ))}
      </div>
      
      {/* Shadow indicators for scroll */}
      <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-white dark:from-gray-900 to-transparent w-4 md:w-6 lg:w-8 z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-white dark:from-gray-900 to-transparent w-4 md:w-6 lg:w-8 z-10 pointer-events-none"></div>
    </div>
  );
};

export default SubNavigation; 