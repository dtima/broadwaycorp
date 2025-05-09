import React, { useState } from 'react';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface SubNavigationProps {
  items: NavItem[];
  activeId?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * Reusable sub-navigation component for consistent secondary navigation
 * with improved mobile responsiveness and accessibility
 */
const SubNavigation: React.FC<SubNavigationProps> = ({ 
  items, 
  activeId,
  className = '',
  ariaLabel = 'Page sections'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Find the active item for the mobile view
  const activeItem = items.find(item => item.id === activeId);
  
  return (
    <nav 
      className={`sticky top-0 bg-white shadow-sm z-10 py-3 ${className}`}
      aria-label={ariaLabel}
    >
      <div className="container-custom">
        {/* Mobile view - dropdown style navigation */}
        <div className="md:hidden relative">
          <button 
            className="flex w-full justify-between items-center px-4 py-2 text-left text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="subnav-menu"
          >
            <span className="font-medium">{activeItem?.label || 'Navigate to section'}</span>
            <svg 
              className={`w-5 h-5 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          {/* Dropdown menu */}
          {isExpanded && (
            <div 
              id="subnav-menu"
              className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg"
            >
              <div className="py-2">
                {items.map((item) => (
                  <a 
                    key={item.id}
                    href={item.href}
                    className={`block px-4 py-2 text-sm ${
                      activeId === item.id 
                        ? 'bg-green-50 text-green-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50 hover:text-green-700'
                    }`}
                    onClick={() => setIsExpanded(false)}
                    aria-current={activeId === item.id ? 'location' : undefined}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Desktop view - horizontal navigation */}
        <div className="hidden md:block overflow-x-auto scrollbar-hide">
          <div className="flex space-x-8 mx-auto" role="list">
            {items.map((item) => (
              <a 
                key={item.id}
                href={item.href}
                className={`text-sm font-medium whitespace-nowrap transition-colors px-1 py-2 border-b-2 ${
                  activeId === item.id 
                    ? 'text-green-700 border-green-700' 
                    : 'text-gray-700 hover:text-green-700 border-transparent hover:border-green-300'
                }`}
                aria-current={activeId === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SubNavigation; 