import { ReactNode, ElementType } from 'react';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize | string; // Allow string values for backward compatibility
  maxWidth?: ContainerSize | string; // Allow string values for backward compatibility
  className?: string;
  as?: ElementType;
  id?: string;
  centered?: boolean;
  paddingY?: boolean;
  withPadding?: boolean; // Alias for paddingY
}

/**
 * Container component for consistent layout and responsive spacing
 * 
 * This component provides consistent horizontal padding and max-width constraints
 * with responsive behavior across different screen sizes.
 */
const Container = ({
  children,
  size = 'lg',
  maxWidth, // Alias for size
  className = '',
  as: Component = 'div',
  id,
  centered = false,
  paddingY = false,
  withPadding = false // Alias for paddingY
}: ContainerProps) => {
  // Use maxWidth as fallback for size (for backward compatibility)
  const effectiveSize = maxWidth || size;
  // Use withPadding as fallback for paddingY (for backward compatibility)
  const effectivePaddingY = paddingY || withPadding;
  
  // Base container classes with consistent horizontal padding across screen sizes
  const baseClasses = 'px-4 sm:px-6 md:px-8 mx-auto';
  
  // Size-specific max-width constraints
  let sizeClasses = '';
  
  // Standard size mapping
  const standardSizes: Record<string, string> = {
    sm: 'max-w-screen-sm', // 640px
    md: 'max-w-screen-md', // 768px  
    lg: 'max-w-screen-lg', // 1024px
    xl: 'max-w-screen-xl', // 1280px
    full: 'max-w-none'     // No constraint
  };
  
  // For backward compatibility, handle both standard sizes and custom maxWidth values
  if (typeof effectiveSize === 'string') {
    if (effectiveSize in standardSizes) {
      sizeClasses = standardSizes[effectiveSize];
    } else if (effectiveSize.startsWith('screen-')) {
      // Handle legacy 'screen-X' format
      const sizePart = effectiveSize.replace('screen-', '');
      if (sizePart in standardSizes) {
        sizeClasses = standardSizes[sizePart];
      } else {
        // Fallback for custom screen sizes
        sizeClasses = `max-w-${effectiveSize}`;
      }
    } else {
      // Fallback for any other string format
      sizeClasses = `max-w-${effectiveSize}`;
    }
  }
  
  // Optional vertical padding
  const paddingClasses = effectivePaddingY ? 'py-8 md:py-12' : '';
  
  // Optional centering of content
  const centerClasses = centered ? 'flex flex-col items-center justify-center' : '';
  
  // Combine all classes
  const containerClasses = [
    baseClasses,
    sizeClasses,
    paddingClasses,
    centerClasses,
    className,
  ].filter(Boolean).join(' ');
  
  return (
    <Component className={containerClasses} id={id}>
      {children}
    </Component>
  );
};

export default Container; 