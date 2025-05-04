import { ReactNode } from 'react';

export interface ContainerProps {
  /** Container content */
  children: ReactNode;
  /** Maximum width of the container */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'screen-sm' | 'screen-md' | 'screen-lg' | 'screen-xl';
  /** Whether padding should be applied */
  withPadding?: boolean;
  /** Whether to center the container horizontally */
  centered?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * A responsive container component that provides consistent
 * max-width and padding constraints across the application
 */
const Container = ({
  children,
  maxWidth = 'lg',
  withPadding = true,
  centered = true,
  className = '',
}: ContainerProps) => {
  // Fixed max widths
  const fixedWidths = {
    xs: 'max-w-xs', // 320px
    sm: 'max-w-sm', // 384px
    md: 'max-w-md', // 448px
    lg: 'max-w-lg', // 512px
    xl: 'max-w-xl', // 576px
    '2xl': 'max-w-2xl', // 672px
    full: 'max-w-full',
  };
  
  // Screen-based responsive max widths
  const screenWidths = {
    'screen-sm': 'max-w-screen-sm', // 640px
    'screen-md': 'max-w-screen-md', // 768px
    'screen-lg': 'max-w-screen-lg', // 1024px
    'screen-xl': 'max-w-screen-xl', // 1280px
  };
  
  const maxWidthClasses = maxWidth in fixedWidths 
    ? fixedWidths[maxWidth as keyof typeof fixedWidths]
    : screenWidths[maxWidth as keyof typeof screenWidths];
  
  const paddingClasses = withPadding ? 'px-4 sm:px-6 lg:px-8' : '';
  const centeringClasses = centered ? 'mx-auto' : '';

  const containerClasses = [
    maxWidthClasses,
    paddingClasses,
    centeringClasses,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default Container; 