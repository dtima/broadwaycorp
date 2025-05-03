import { render, screen } from '@testing-library/react';
import ResponsiveImage from './ResponsiveImage';
import * as imageUtils from '../../lib/utils/imageUtils';

// Mock the imageUtils to return predictable values
jest.mock('../../lib/utils/imageUtils', () => ({
  getResponsiveImageProps: jest.fn(),
}));

describe('ResponsiveImage', () => {
  beforeEach(() => {
    // Reset mock implementation
    (imageUtils.getResponsiveImageProps as jest.Mock).mockReset();
    (imageUtils.getResponsiveImageProps as jest.Mock).mockReturnValue({
      src: '/assets/images/test-image.jpg',
      srcSet: '/assets/images/640/test-image.jpg 640w, /assets/images/1280/test-image.jpg 1280w',
      sizes: '(max-width: 640px) 100vw, 1280px',
    });
  });
  
  it('renders image with correct attributes', () => {
    render(
      <ResponsiveImage 
        src="test-image.jpg" 
        alt="Test image" 
        className="test-class"
      />
    );
    
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/assets/images/test-image.jpg');
    expect(image).toHaveAttribute('srcSet', '/assets/images/640/test-image.jpg 640w, /assets/images/1280/test-image.jpg 1280w');
    expect(image).toHaveAttribute('sizes', '(max-width: 640px) 100vw, 1280px');
    expect(image).toHaveClass('test-class');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
  
  it('passes responsiveSizes to imageUtils', () => {
    const customSizes = [800, 1200, 1600];
    
    render(
      <ResponsiveImage 
        src="test-image.jpg" 
        alt="Test image"
        responsiveSizes={customSizes}
        defaultSize={1600}
      />
    );
    
    expect(imageUtils.getResponsiveImageProps).toHaveBeenCalledWith(
      'test-image.jpg',
      customSizes,
      1600
    );
  });
  
  it('handles lazy loading prop correctly', () => {
    render(
      <ResponsiveImage 
        src="test-image.jpg" 
        alt="Test image"
        lazy={false}
      />
    );
    
    const image = screen.getByAltText('Test image');
    expect(image).not.toHaveAttribute('loading');
  });
}); 