import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger' | 'success' | 'green';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  /** Button content */
  children: ReactNode;
  /** Visual variant - affects colors and emphasis */
  variant?: ButtonVariant;
  /** Size variant - affects padding, font size */
  size?: ButtonSize;
  /** Optional icon to show before text */
  startIcon?: ReactNode;
  /** Optional icon to show after text */
  endIcon?: ReactNode;
  /** Whether button takes full width of container */
  fullWidth?: boolean;
  /** Optional additional CSS classes */
  className?: string;
  /** Whether to show a loading state */
  isLoading?: boolean;
  /** Accessible label, if the visible text is not descriptive enough */
  ariaLabel?: string;
}

interface ButtonAsButtonProps extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  /** When provided, button renders as a link */
  href?: undefined;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  /** URL to navigate to when clicked */
  href: string;
  /** Whether to open in new tab - only applies when href is provided */
  openInNewTab?: boolean;
  /** For external links, add rel attribute */
  rel?: string;
  /** Disabled state */
  disabled?: boolean;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

/**
 * Get CSS classes for button based on variant, size, and full width
 */
const getButtonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  fullWidth: boolean = false,
  className: string = '',
  isDisabled: boolean = false,
  isLoading: boolean = false
): string => {
  // Base classes - improved focus styles for better accessibility
  const baseClasses = `inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:ring-2 focus:ring-offset-2 ${isDisabled ? 'cursor-not-allowed' : ''}`;
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Size classes
  const sizeClasses = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }[size];
  
  // Variant classes - improved color contrast for WCAG 2.1 AA compliance
  const variantClasses = {
    primary: `bg-brand-navy text-white hover:bg-brand-navy-dark active:bg-brand-navy-dark focus-visible:ring-brand-navy focus:ring-brand-navy
              dark:bg-brand-orange dark:text-black dark:hover:bg-orange-600 dark:focus-visible:ring-brand-orange
              disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:text-white`,
    
    secondary: `bg-brand-orange text-black hover:bg-orange-600 hover:text-white active:bg-orange-700 focus-visible:ring-brand-orange focus:ring-brand-orange
                dark:bg-brand-navy dark:text-white dark:hover:bg-brand-navy-dark dark:focus-visible:ring-brand-navy 
                disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:text-white`,
    
    tertiary: `bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-gray-900 active:bg-gray-300 focus-visible:ring-gray-500 focus:ring-gray-500
              dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus-visible:ring-gray-500
              disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:text-gray-400 dark:disabled:text-gray-600`,
    
    outline: `bg-transparent border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white active:bg-brand-navy-dark focus-visible:ring-brand-navy focus:ring-brand-navy
              dark:border-brand-orange dark:text-brand-orange dark:hover:bg-brand-orange dark:hover:text-black dark:focus-visible:ring-brand-orange
              disabled:border-gray-400 dark:disabled:border-gray-600 disabled:text-gray-400 dark:disabled:text-gray-600
              disabled:hover:bg-transparent disabled:hover:text-gray-400 dark:disabled:hover:bg-transparent dark:disabled:hover:text-gray-600`,
    
    danger: `bg-red-700 text-white hover:bg-red-800 active:bg-red-900 focus-visible:ring-red-700 focus:ring-red-700
            dark:bg-red-700 dark:hover:bg-red-800 dark:focus-visible:ring-red-700
            disabled:bg-red-300 dark:disabled:bg-red-900 disabled:text-white dark:disabled:text-white`,
    
    success: `bg-green-700 text-white hover:bg-green-800 active:bg-green-900 focus-visible:ring-green-700 focus:ring-green-700
            dark:bg-green-700 dark:hover:bg-green-800 dark:focus-visible:ring-green-700
            disabled:bg-green-300 dark:disabled:bg-green-900 disabled:text-white dark:disabled:text-white`,
    
    green: `bg-green-700 text-white hover:bg-green-800 active:bg-green-900 focus-visible:ring-green-700 focus:ring-green-700
            dark:bg-green-700 dark:hover:bg-green-800 dark:focus-visible:ring-green-700
            disabled:bg-green-300 dark:disabled:bg-green-900 disabled:text-white dark:disabled:text-white`,
  }[variant];
  
  // Loading classes
  const loadingClasses = isLoading ? 'relative !text-transparent pointer-events-none' : '';
  
  return [baseClasses, widthClasses, sizeClasses, variantClasses, loadingClasses, className]
    .filter(Boolean)
    .join(' ');
};

/**
 * Button component - can be rendered as a button or link
 * Enhanced with better accessibility and mobile optimization
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    startIcon,
    endIcon,
    fullWidth = false,
    className = '',
    isLoading = false,
    ariaLabel,
    ...rest
  } = props;
  
  const isDisabled = 'disabled' in props ? !!props.disabled : false;
  
  const buttonClasses = getButtonClasses(
    variant, 
    size, 
    fullWidth, 
    className, 
    isDisabled,
    isLoading
  );
  
  // Loading spinner
  const loadingSpinner = isLoading ? (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg 
        className="animate-spin h-5 w-5 text-white dark:text-gray-200" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      <span className="sr-only">Loading</span>
    </div>
  ) : null;
  
  // Link variant
  if ('href' in props && props.href) {
    const { href, openInNewTab, disabled, rel, ...linkRest } = props;
    
    // Handle both internal and external links
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    
    // For external links, use a regular anchor element
    if (isExternal) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={disabled ? undefined : href}
          className={buttonClasses}
          rel={rel || (openInNewTab ? 'noopener noreferrer' : undefined)}
          target={openInNewTab ? '_blank' : undefined}
          aria-disabled={disabled}
          aria-label={ariaLabel}
          tabIndex={disabled ? -1 : undefined}
          {...linkRest}
        >
          {startIcon && <span className="mr-2" aria-hidden="true">{startIcon}</span>}
          <span>{children}</span>
          {endIcon && <span className="ml-2" aria-hidden="true">{endIcon}</span>}
          {loadingSpinner}
          {openInNewTab && (
            <span className="sr-only"> (opens in a new tab)</span>
          )}
        </a>
      );
    }
    
    // For internal links, use React Router Link
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        to={disabled ? '#' : href}
        className={buttonClasses}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
        {...linkRest}
      >
        {startIcon && <span className="mr-2" aria-hidden="true">{startIcon}</span>}
        <span>{children}</span>
        {endIcon && <span className="ml-2" aria-hidden="true">{endIcon}</span>}
        {loadingSpinner}
      </Link>
    );
  }
  
  // Button variant
  const buttonProps = rest as ButtonAsButtonProps;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={buttonClasses}
      type={buttonProps.type || 'button'}
      aria-busy={isLoading}
      aria-label={ariaLabel}
      {...buttonProps}
    >
      {startIcon && <span className="mr-2" aria-hidden="true">{startIcon}</span>}
      <span>{children}</span>
      {endIcon && <span className="ml-2" aria-hidden="true">{endIcon}</span>}
      {loadingSpinner}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 