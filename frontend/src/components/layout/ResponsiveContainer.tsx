import React from 'react';

type MaxWidth = 
  | 'screen-sm' 
  | 'screen-md' 
  | 'screen-lg' 
  | 'screen-xl' 
  | 'screen-2xl' 
  | 'full' 
  | 'none';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  maxWidth?: MaxWidth;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

/**
 * Responsive container with consistent max-width and padding options
 */
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  maxWidth = 'screen-lg',
  padding = 'md',
  className = '',
}) => {
  // Generate max-width class
  const maxWidthClass = {
    'screen-sm': 'max-w-screen-sm',
    'screen-md': 'max-w-screen-md',
    'screen-lg': 'max-w-screen-lg',
    'screen-xl': 'max-w-screen-xl',
    'screen-2xl': 'max-w-screen-2xl',
    'full': 'max-w-full',
    'none': ''
  }[maxWidth];

  // Generate padding classes
  const paddingClass = {
    'none': '',
    'sm': 'px-4',
    'md': 'px-4 md:px-6',
    'lg': 'px-4 md:px-8',
    'xl': 'px-4 md:px-10 lg:px-12'
  }[padding];

  return (
    <div className={`mx-auto ${maxWidthClass} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
};

export default ResponsiveContainer; 