/**
 * Utility functions for working with images
 */

/**
 * Gets the full path to an image in the assets directory
 * @param imagePath - The relative path from the assets/images directory
 * @returns The full path to the image
 */
export const getImagePath = (imagePath: string): string => {
  if (imagePath.startsWith('http') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  const basePath = '/assets/images/';
  return basePath + (imagePath.startsWith('/') ? imagePath.slice(1) : imagePath);
};

/**
 * Formats image URL for responsive sizing based on device
 * 
 * @param imagePath Base image path
 * @param sizes Array of sizes to include in srcset (width in pixels)
 * @returns Object with src, srcSet and sizes attributes
 */
export const getResponsiveImageProps = (
  imagePath: string,
  sizes: number[] = [640, 768, 1024, 1280],
  defaultSize: number = 1280
): { src: string; srcSet: string; sizes: string } => {
  const basePath = getImagePath(imagePath);
  
  // Extract file name and extension from path
  const lastSlash = basePath.lastIndexOf('/');
  const filePath = basePath.substring(0, lastSlash + 1);
  const fileName = basePath.substring(lastSlash + 1);
  
  // Create srcSet string from sizes array
  const srcSet = sizes
    .map(size => `${filePath}${size}/${fileName} ${size}w`)
    .join(', ');
  
  // Default sizes attribute covering common device widths
  const sizesAttr = '(max-width: 640px) 100vw, (max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px';
  
  return {
    src: `${filePath}${defaultSize}/${fileName}`,
    srcSet,
    sizes: sizesAttr,
  };
};

/**
 * Creates an image URL optimized for a specific width
 * 
 * @param imagePath Base image path
 * @param width Desired width
 * @returns Optimized image URL
 */
export const getOptimizedImageUrl = (imagePath: string, width: number): string => {
  const basePath = getImagePath(imagePath);
  
  // Extract file name and extension from path
  const lastSlash = basePath.lastIndexOf('/');
  const filePath = basePath.substring(0, lastSlash + 1);
  const fileName = basePath.substring(lastSlash + 1);
  
  return `${filePath}${width}/${fileName}`;
}; 