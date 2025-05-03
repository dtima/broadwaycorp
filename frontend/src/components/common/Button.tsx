import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { Link } from 'react-router-dom';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

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
  disabled: boolean = false
): string => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }[size];
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-brand-navy text-white hover:bg-brand-navy-dark focus:ring-brand-navy disabled:bg-gray-400',
    secondary: 'bg-brand-orange text-white hover:bg-orange-600 focus:ring-brand-orange disabled:bg-gray-400',
    tertiary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300 disabled:bg-gray-50 disabled:text-gray-400',
    outline: 'bg-transparent border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus:ring-brand-navy disabled:border-gray-300 disabled:text-gray-400 disabled:hover:bg-transparent disabled:hover:text-gray-400',
  }[variant];
  
  // Disabled classes
  const disabledClasses = disabled ? 'cursor-not-allowed' : '';
  
  return [baseClasses, widthClasses, sizeClasses, variantClasses, disabledClasses, className]
    .filter(Boolean)
    .join(' ');
};

/**
 * Button component - can be rendered as a button or link
 * Example usage:
 * ```tsx
 * <Button variant="primary" onClick={handleClick}>Click me</Button>
 * <Button variant="outline" href="/about">About Us</Button>
 * ```
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
    ...rest
  } = props;
  
  const buttonClasses = getButtonClasses(
    variant, 
    size, 
    fullWidth, 
    className, 
    'disabled' in props ? !!props.disabled : false
  );
  
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
          tabIndex={disabled ? -1 : undefined}
          {...linkRest}
        >
          {startIcon && <span className="mr-2">{startIcon}</span>}
          {children}
          {endIcon && <span className="ml-2">{endIcon}</span>}
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
        tabIndex={disabled ? -1 : undefined}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
        {...linkRest}
      >
        {startIcon && <span className="mr-2">{startIcon}</span>}
        {children}
        {endIcon && <span className="ml-2">{endIcon}</span>}
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
      {...buttonProps}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

export default Button; 