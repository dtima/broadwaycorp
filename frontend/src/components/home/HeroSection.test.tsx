import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './HeroSection';

// Mock the child components
jest.mock('../common/ResponsiveImage', () => {
  return function MockResponsiveImage(props: any) {
    return <img data-testid="responsive-image" {...props} />;
  };
});

jest.mock('../common/Button', () => {
  return function MockButton({ children, href, ...props }: any) {
    return <a href={href} data-testid="button" {...props}>{children}</a>;
  };
});

jest.mock('framer-motion', () => {
  return {
    motion: {
      div: ({ children, ...props }: any) => <div data-testid="motion-div" {...props}>{children}</div>,
      h1: ({ children, ...props }: any) => <h1 data-testid="motion-h1" {...props}>{children}</h1>,
      p: ({ children, ...props }: any) => <p data-testid="motion-p" {...props}>{children}</p>,
    },
  };
});

const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('HeroSection', () => {
  const defaultProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    ctaText: 'Learn More',
    ctaLink: '/about',
  };

  it('renders with default props', () => {
    renderWithRouter(<HeroSection {...defaultProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    
    const backgroundImage = screen.getByTestId('responsive-image');
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage).toHaveAttribute('src', 'hero-placeholder.svg');
  });
  
  it('renders with secondary CTA button when provided', () => {
    renderWithRouter(
      <HeroSection 
        {...defaultProps}
        secondaryCtaText="Contact Us"
        secondaryCtaLink="/contact"
      />
    );
    
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
  });
  
  it('renders decoration element when provided', () => {
    const decorationElement = <div data-testid="decoration">Decoration</div>;
    
    renderWithRouter(
      <HeroSection 
        {...defaultProps}
        decorationElement={decorationElement}
      />
    );
    
    expect(screen.getByTestId('decoration')).toBeInTheDocument();
    expect(screen.getByText('Decoration')).toBeInTheDocument();
  });
  
  it('applies custom overlay color when provided', () => {
    const customOverlay = 'from-blue-700 to-indigo-900 opacity-75';
    renderWithRouter(
      <HeroSection 
        {...defaultProps}
        overlayColor={customOverlay}
      />
    );
    
    const overlayDiv = screen.getByText('').closest('div');
    expect(overlayDiv).toHaveClass(`bg-gradient-to-r ${customOverlay}`);
  });
  
  it('applies correct alignment classes for centered content', () => {
    renderWithRouter(
      <HeroSection 
        {...defaultProps}
        alignment="center"
      />
    );
    
    const contentDiv = screen.getByText('Test Title').closest('div');
    expect(contentDiv).toHaveClass('text-center');
  });
}); 