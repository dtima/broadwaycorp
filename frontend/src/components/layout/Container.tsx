import { ReactNode } from 'react';

export interface ContainerProps {
  /** Container content */
  children: ReactNode;
  /** Maximum width of the container */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
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
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    full: 'max-w-full',
  }[maxWidth];

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