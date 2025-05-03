import { render, screen } from '@testing-library/react';
import TestimonialCard from './TestimonialCard';

// Mock dependencies
jest.mock('../common/Card', () => {
  return function MockCard({ children, className }: any) {
    return <div data-testid="card" className={className}>{children}</div>;
  };
});

jest.mock('framer-motion', () => {
  return {
    motion: {
      div: ({ children, className, ...props }: any) => (
        <div data-testid="motion-div" className={className} {...props}>
          {children}
        </div>
      ),
    },
  };
});

describe('TestimonialCard', () => {
  const defaultProps = {
    quote: 'This is a sample testimonial.',
    author: 'John Doe',
    position: 'CEO, Example Inc.',
  };

  it('renders with minimal props', () => {
    render(<TestimonialCard {...defaultProps} />);
    
    expect(screen.getByText('"This is a sample testimonial."')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('CEO, Example Inc.')).toBeInTheDocument();
  });
  
  it('renders avatar placeholder when isPlaceholder is true', () => {
    render(<TestimonialCard {...defaultProps} isPlaceholder={true} />);
    
    const avatarPlaceholder = screen.getByText('JD');
    expect(avatarPlaceholder).toBeInTheDocument();
    expect(avatarPlaceholder).toHaveClass('bg-brand-navy');
  });
  
  it('renders avatar image when provided with avatar URL', () => {
    render(
      <TestimonialCard 
        {...defaultProps} 
        avatar="/path/to/avatar.jpg"
        isPlaceholder={false}
      />
    );
    
    const avatarImage = screen.getByAltText('John Doe avatar');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', '/path/to/avatar.jpg');
  });
  
  it('renders company logo when provided', () => {
    render(
      <TestimonialCard 
        {...defaultProps} 
        companyLogo="/path/to/logo.png"
      />
    );
    
    const logoImage = screen.getByAltText('John Doe\'s company');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/path/to/logo.png');
  });
  
  it('creates initials from multiple name parts', () => {
    render(
      <TestimonialCard 
        quote="Great product!"
        author="Jane Mary Smith"
        isPlaceholder={true}
      />
    );
    
    expect(screen.getByText('JM')).toBeInTheDocument();
  });
  
  it('passes custom className to motion div', () => {
    render(
      <TestimonialCard 
        {...defaultProps}
        className="custom-test-class"
      />
    );
    
    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveClass('custom-test-class');
  });
}); 