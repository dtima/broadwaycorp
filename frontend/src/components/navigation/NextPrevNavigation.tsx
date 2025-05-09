import React from 'react';
import { Link } from 'react-router-dom';

interface NavLink {
  label: string;
  path: string;
  description?: string;
}

interface NextPrevNavigationProps {
  prevLink?: NavLink;
  nextLink?: NavLink;
  links?: {
    prev: NavLink;
    next: NavLink;
  };
  className?: string;
}

const NextPrevNavigation: React.FC<NextPrevNavigationProps> = ({
  prevLink,
  nextLink,
  links,
  className = ''
}) => {
  // Support both direct props and links object
  const prev = prevLink || (links?.prev);
  const next = nextLink || (links?.next);

  return (
    <div className={`border-t border-gray-200 mt-12 pt-8 ${className}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-stretch gap-6">
          {prev ? (
            <Link 
              to={prev.path}
              className="group p-6 flex-1 flex flex-col border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
              aria-label={`Go to previous page: ${prev.label}`}
            >
              <span className="text-sm text-gray-500 flex items-center mb-2">
                <svg className="w-4 h-4 mr-1 group-hover:transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </span>
              <span className="font-medium text-gray-900 mb-1 group-hover:text-green-700 transition-colors">{prev.label}</span>
              {prev.description && (
                <span className="text-sm text-gray-500">{prev.description}</span>
              )}
            </Link>
          ) : <div aria-hidden="true"></div>}
          
          {next ? (
            <Link 
              to={next.path}
              className="group p-6 flex-1 flex flex-col text-right border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors"
              aria-label={`Go to next page: ${next.label}`}
            >
              <span className="text-sm text-gray-500 flex items-center justify-end mb-2">
                Next
                <svg className="w-4 h-4 ml-1 group-hover:transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="font-medium text-gray-900 mb-1 group-hover:text-green-700 transition-colors">{next.label}</span>
              {next.description && (
                <span className="text-sm text-gray-500">{next.description}</span>
              )}
            </Link>
          ) : <div aria-hidden="true"></div>}
        </div>
      </div>
    </div>
  );
};

export default NextPrevNavigation; 