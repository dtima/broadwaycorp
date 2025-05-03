import { ImgHTMLAttributes } from 'react';
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
}

/**
 * Responsive image component that optimizes for different screen sizes
 */
const ResponsiveImage = ({
  src,
  alt,
  responsiveSizes,
  defaultSize,
  className = '',
  placeholder,
  lazy = true,
  ...rest
}: ResponsiveImageProps) => {
  const { src: imgSrc, srcSet, sizes } = getResponsiveImageProps(src, responsiveSizes, defaultSize);
  
  return (
    <img
      src={imgSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : undefined}
      {...rest}
    />
  );
};

export default ResponsiveImage; 