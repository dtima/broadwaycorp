import { ImgHTMLAttributes, useState } from 'react';
import { getResponsiveImageProps } from '../../lib/utils/imageUtils';

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes'> {
  /** The image path (relative to assets/images) */
  src: string;
  /** Alt text for the image - required for accessibility */
  alt: string;
  /** Optional array of sizes for srcset */
  responsiveSizes?: number[];
  /** Default size to use for src attribute */
  defaultSize?: number;
  /** CSS class name for the image */
  className?: string;
  /** Optional placeholder while the image loads */
  placeholder?: string;
  /** Whether to lazy load the image */
  lazy?: boolean;
  /** Fallback image to display if the main image fails to load */
  fallback?: string;
  /** Whether to blur the image while loading */
  blurEffect?: boolean;
}

/**
 * Responsive image component that optimizes for different screen sizes
 * with improved loading performance and fallbacks.
 */
const ResponsiveImage = ({
  src,
  alt,
  responsiveSizes,
  defaultSize,
  className = '',
  placeholder,
  lazy = true,
  fallback,
  blurEffect = false,
  ...rest
}: ResponsiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { src: imgSrc, srcSet, sizes } = getResponsiveImageProps(src, responsiveSizes, defaultSize);
  
  // Use fallback image if main image fails to load
  const finalSrc = hasError && fallback 
    ? getResponsiveImageProps(fallback, responsiveSizes, defaultSize).src
    : imgSrc;
  
  // Determine final class names
  const imageClasses = [
    className,
    blurEffect && !isLoaded ? 'blur-sm transition-all duration-300' : '',
    blurEffect && isLoaded ? 'blur-0 transition-all duration-300' : '',
  ].filter(Boolean).join(' ');
  
  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  // Handle image error
  const handleError = () => {
    setHasError(true);
  };
  
  return (
    <img
      src={finalSrc}
      srcSet={!hasError ? srcSet : undefined}
      sizes={!hasError ? sizes : undefined}
      alt={alt}
      className={imageClasses}
      loading={lazy ? 'lazy' : undefined}
      onLoad={handleLoad}
      onError={handleError}
      {...rest}
    />
  );
};

export default ResponsiveImage; 