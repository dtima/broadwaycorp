import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <p>Test content</p>
      </Container>
    );
    
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies default max-width class', () => {
    render(
      <Container>
        <p>Content</p>
      </Container>
    );
    
    const container = screen.getByText('Content').closest('div');
    expect(container).toHaveClass('max-w-lg');
  });
  
  it('applies specified max-width class', () => {
    render(
      <Container maxWidth="xl">
        <p>Content</p>
      </Container>
    );
    
    const container = screen.getByText('Content').closest('div');
    expect(container).toHaveClass('max-w-xl');
  });
  
  it('applies padding by default', () => {
    render(
      <Container>
        <p>Content</p>
      </Container>
    );
    
    const container = screen.getByText('Content').closest('div');
    expect(container).toHaveClass('px-4');
    expect(container).toHaveClass('sm:px-6');
    expect(container).toHaveClass('lg:px-8');
  });
  
  it('does not apply padding when withPadding is false', () => {
    render(
      <Container withPadding={false}>
        <p>Content</p>
      </Container>
    );
    
    const container = screen.getByText('Content').closest('div');
    expect(container).not.toHaveClass('px-4');
    expect(container).not.toHaveClass('sm:px-6');
    expect(container).not.toHaveClass('lg:px-8');
  });
  
  it('centers the container by default', () => {
    render(
      <Container>
        <p>Content</p>
      </Container>
    );
    
    const container = screen.getByText('Content').closest('div');
    expect(container).toHaveClass('mx-auto');
  });
  
  it('does not center the container when centered is false', () => {
    render(
      <Container centered={false}>
        <p>Content</p>
      </Container>
    );
    
    const container = screen.getByText('Content').closest('div');
    expect(container).not.toHaveClass('mx-auto');
  });
  
  it('applies custom className when provided', () => {
    render(
      <Container className="test-class">
        <p>Content</p>
      </Container>
    );
    
    const container = screen.getByText('Content').closest('div');
    expect(container).toHaveClass('test-class');
  });
}); 