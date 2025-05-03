import { render, screen } from '@testing-library/react';
import Section from './Section';

// Mock Container component
jest.mock('./Container', () => {
  return function MockContainer({ children, maxWidth }: any) {
    return (
      <div data-testid="container" data-maxwidth={maxWidth}>
        {children}
      </div>
    );
  };
});

describe('Section', () => {
  it('renders children correctly', () => {
    render(
      <Section>
        <p>Test content</p>
      </Section>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('renders title and subtitle when provided', () => {
    render(
      <Section
        title="Section Title"
        subtitle="Section subtitle text"
      >
        <p>Content</p>
      </Section>
    );
    
    expect(screen.getByText('Section Title')).toBeInTheDocument();
    expect(screen.getByText('Section subtitle text')).toBeInTheDocument();
  });
  
  it('applies padding classes based on size prop', () => {
    const { rerender } = render(
      <Section padding="sm">
        <p>Content</p>
      </Section>
    );
    
    let section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('py-6');
    
    rerender(
      <Section padding="xl">
        <p>Content</p>
      </Section>
    );
    
    section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('py-24');
  });
  
  it('applies background classes correctly', () => {
    const { rerender } = render(
      <Section background="navy">
        <p>Content</p>
      </Section>
    );
    
    let section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-brand-navy');
    expect(section).toHaveClass('text-white');
    
    rerender(
      <Section background="light">
        <p>Content</p>
      </Section>
    );
    
    section = screen.getByText('Content').closest('section');
    expect(section).toHaveClass('bg-gray-50');
  });
  
  it('sets container max-width based on size prop', () => {
    render(
      <Section size="xl">
        <p>Content</p>
      </Section>
    );
    
    const container = screen.getByTestId('container');
    expect(container).toHaveAttribute('data-maxwidth', 'xl');
  });
  
  it('applies id attribute when provided', () => {
    render(
      <Section id="test-section">
        <p>Content</p>
      </Section>
    );
    
    const section = screen.getByText('Content').closest('section');
    expect(section).toHaveAttribute('id', 'test-section');
  });
  
  it('centers title and subtitle by default', () => {
    render(
      <Section
        title="Title"
        subtitle="Subtitle"
      >
        <p>Content</p>
      </Section>
    );
    
    const titleContainer = screen.getByText('Title').closest('div');
    expect(titleContainer).toHaveClass('text-center');
  });
  
  it('aligns title and subtitle to the left when centered is false', () => {
    render(
      <Section
        title="Title"
        subtitle="Subtitle"
        centered={false}
      >
        <p>Content</p>
      </Section>
    );
    
    const titleContainer = screen.getByText('Title').closest('div');
    expect(titleContainer).not.toHaveClass('text-center');
  });
}); 