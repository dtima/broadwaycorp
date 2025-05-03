import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Button from './Button';

// Helper function to render button within router context
const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('Button', () => {
  it('renders as a button by default', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-brand-navy'); // Primary variant by default
  });
  
  it('applies variant classes correctly', () => {
    render(
      <>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
        <Button variant="outline">Outline</Button>
      </>
    );
    
    expect(screen.getByText('Primary')).toHaveClass('bg-brand-navy');
    expect(screen.getByText('Secondary')).toHaveClass('bg-brand-orange');
    expect(screen.getByText('Tertiary')).toHaveClass('bg-gray-100');
    expect(screen.getByText('Outline')).toHaveClass('border-brand-navy');
  });
  
  it('applies size classes correctly', () => {
    render(
      <>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </>
    );
    
    expect(screen.getByText('Small')).toHaveClass('px-3 py-1.5 text-sm');
    expect(screen.getByText('Medium')).toHaveClass('px-4 py-2 text-base');
    expect(screen.getByText('Large')).toHaveClass('px-6 py-3 text-lg');
  });
  
  it('renders as a link when href is provided', () => {
    renderWithRouter(<Button href="/test">Link Button</Button>);
    
    const link = screen.getByRole('link', { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });
  
  it('renders external links with target blank when specified', () => {
    render(<Button href="https://example.com" openInNewTab>External Link</Button>);
    
    const link = screen.getByRole('link', { name: /external link/i });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
  
  it('handles disabled state correctly for buttons', async () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled Button</Button>);
    
    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
    
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
  
  it('handles disabled state correctly for links', () => {
    renderWithRouter(<Button href="/test" disabled>Disabled Link</Button>);
    
    const link = screen.getByText('Disabled Link');
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).toHaveAttribute('tabIndex', '-1');
  });
  
  it('renders with start and end icons when provided', () => {
    const startIcon = <span data-testid="start-icon">Start</span>;
    const endIcon = <span data-testid="end-icon">End</span>;
    
    render(
      <Button 
        startIcon={startIcon}
        endIcon={endIcon}
      >
        With Icons
      </Button>
    );
    
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });
}); 