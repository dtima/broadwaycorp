import { useState, useEffect, ImgHTMLAttributes } from 'react';

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  sizes?: string;
  widths?: number[];
  formats?: ('webp' | 'avif')[];
  lazy?: boolean;
  className?: string;
}

/**
 * Optimized image component with responsive sizing, modern formats, and lazy loading
 */
const Image: React.FC<ImageProps> = ({
  src,
  fallbackSrc = '',
  alt,
  sizes = '100vw',
  widths = [640, 750, 828, 1080, 1200, 1920],
  formats = ['webp'],
  lazy = true,
  className = '',
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // If src changes, reset states
  useEffect(() => {
    setImgSrc(src);
    setIsLoaded(false);
    setError(false);
  }, [src]);

  // Handle image loading error
  const handleError = () => {
    setError(true);
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  // Handle image loaded successfully
  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Generate srcset for responsive images
  const generateSrcSet = (format?: string) => {
    return widths
      .map((width) => {
        // In a real implementation, you would use a service like Cloudinary or Imgix
        // or a Next.js/Gatsby image optimization. This is a placeholder implementation.
        const url = format
          ? `${src.split('.')[0]}.${format}?w=${width}`
          : `${src}?w=${width}`;
        return `${url} ${width}w`;
      })
      .join(', ');
  };

  // In a production environment, we would integrate with a CDN or
  // image optimization service. This is a simplified implementation.
  const srcSet = generateSrcSet();
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <picture>
        {formats.includes('avif') && (
          <source
            srcSet={generateSrcSet('avif')}
            sizes={sizes}
            type="image/avif"
          />
        )}
        {formats.includes('webp') && (
          <source
            srcSet={generateSrcSet('webp')}
            sizes={sizes}
            type="image/webp"
          />
        )}
        <img
          src={imgSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={lazy ? "lazy" : undefined}
          onError={handleError}
          onLoad={handleLoad}
          className={`w-full h-full ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          {...props}
        />
      </picture>
      
      {/* Show placeholder or spinner while loading */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
      
      {/* Show fallback message if both main image and fallback fail */}
      {error && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
          {alt || 'Image not available'}
        </div>
      )}
    </div>
  );
};

export default Image; 