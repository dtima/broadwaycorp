import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface CardProps {
  /** Main content of the card */
  children: ReactNode;
  /** Optional header content */
  header?: ReactNode;
  /** Optional footer content */
  footer?: ReactNode;
  /** Optional image URL for the card header */
  imageUrl?: string;
  /** Optional image alt text (should be provided when imageUrl is used) */
  imageAlt?: string;
  /** CSS classes for the card container */
  className?: string;
  /** Whether to show hover effects */
  hoverable?: boolean;
  /** Whether card should expand to fill container width */
  fullWidth?: boolean;
  /** Border radius: default, sm, lg, none */
  radius?: 'default' | 'sm' | 'lg' | 'none';
  /** Shadow size: default, sm, lg, none */
  shadow?: 'default' | 'sm' | 'lg' | 'none';
  /** When provided, the entire card becomes clickable */
  href?: string;
  /** Click handler for the card */
  onClick?: () => void;
  /** Make the card a 'ghost' style */
  ghost?: boolean;
}

export const cardVariants = {
  default: {},
  hover: { 
    y: -4,
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.2 }
  },
};

/**
 * Card component for displaying content in a contained, styled box
 */
const Card = ({
  children,
  header,
  footer,
  imageUrl,
  imageAlt = '',
  className = '',
  hoverable = false,
  fullWidth = false,
  radius = 'default',
  shadow = 'default',
  href,
  onClick,
  ghost = false,
}: CardProps) => {
  // Combine all classnames
  const radiusClasses = {
    default: 'rounded-md',
    sm: 'rounded',
    lg: 'rounded-xl',
    none: '',
  }[radius];
  
  const shadowClasses = {
    default: 'shadow',
    sm: 'shadow-sm',
    lg: 'shadow-lg',
    none: '',
  }[shadow];
  
  const baseClasses = [
    'overflow-hidden transition-all duration-200',
    radiusClasses,
    shadowClasses,
    ghost ? 'bg-transparent border border-gray-200' : 'bg-white',
    fullWidth ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');
  
  // Create card content
  const cardContent = (
    <>
      {/* Card image or header */}
      {imageUrl && (
        <div className="w-full">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-40 object-cover"
          />
        </div>
      )}
      
      {header && !imageUrl && (
        <div className="p-4 border-b border-gray-100">
          {header}
        </div>
      )}
      
      {/* Card body */}
      <div className="p-4">
        {children}
      </div>
      
      {/* Card footer */}
      {footer && (
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          {footer}
        </div>
      )}
    </>
  );
  
  // Wrap with motion component if hoverable
  const MotionCard = ({ children }: { children: ReactNode }) => (
    <motion.div
      className={baseClasses}
      initial="default"
      whileHover={hoverable ? 'hover' : 'default'}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
  
  // When href is provided, make the card a link
  if (href) {
    const isExternal = href.startsWith('http');
    
    if (isExternal) {
      return (
        <MotionCard>
          <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
            onClick={onClick}
          >
            {cardContent}
          </a>
        </MotionCard>
      );
    }
    
    return (
      <MotionCard>
        <Link 
          to={href}
          className="block h-full"
          onClick={onClick}
        >
          {cardContent}
        </Link>
      </MotionCard>
    );
  }
  
  // When onClick is provided without href, make the card a button
  if (onClick && !href) {
    return (
      <MotionCard>
        <button 
          onClick={onClick}
          className="block w-full text-left"
        >
          {cardContent}
        </button>
      </MotionCard>
    );
  }
  
  // Standard non-interactive card
  return <MotionCard>{cardContent}</MotionCard>;
};

export default Card; 