import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

// Mock framer-motion
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

// Helper function to render with Router
const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('Card', () => {
  it('renders card with children content', () => {
    render(<Card>Test Content</Card>);
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveClass('bg-white');
  });
  
  it('applies custom className', () => {
    render(<Card className="custom-class">Content</Card>);
    
    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveClass('custom-class');
  });
  
  it('renders header content', () => {
    render(
      <Card header={<h2>Card Header</h2>}>
        Card Body
      </Card>
    );
    
    expect(screen.getByText('Card Header')).toBeInTheDocument();
    expect(screen.getByText('Card Body')).toBeInTheDocument();
  });
  
  it('renders footer content', () => {
    render(
      <Card footer={<div>Card Footer</div>}>
        Card Body
      </Card>
    );
    
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
    expect(screen.getByText('Card Body')).toBeInTheDocument();
  });
  
  it('renders as a link when href is provided', () => {
    renderWithRouter(
      <Card href="/test-page">
        Clickable Card
      </Card>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/test-page');
    expect(screen.getByText('Clickable Card')).toBeInTheDocument();
  });
  
  it('renders as an external link when http href is provided', () => {
    render(
      <Card href="https://example.com">
        External Link Card
      </Card>
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
  
  it('renders as a button when onClick is provided', async () => {
    const handleClick = jest.fn();
    render(
      <Card onClick={handleClick}>
        Clickable Card
      </Card>
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('applies correct radius class', () => {
    render(
      <>
        <Card radius="sm" data-testid="sm-radius">Small radius</Card>
        <Card radius="lg" data-testid="lg-radius">Large radius</Card>
        <Card radius="none" data-testid="no-radius">No radius</Card>
      </>
    );
    
    const motionDivs = screen.getAllByTestId('motion-div');
    expect(motionDivs[0]).toHaveClass('rounded');
    expect(motionDivs[1]).toHaveClass('rounded-xl');
    expect(motionDivs[2]).not.toHaveClass('rounded');
    expect(motionDivs[2]).not.toHaveClass('rounded-md');
    expect(motionDivs[2]).not.toHaveClass('rounded-xl');
  });
  
  it('renders image when imageUrl is provided', () => {
    render(
      <Card 
        imageUrl="/test-image.jpg"
        imageAlt="Test image"
      >
        Card with image
      </Card>
    );
    
    const image = screen.getByAltText('Test image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });
  
  it('renders ghost style when ghost prop is true', () => {
    render(<Card ghost>Ghost Card</Card>);
    
    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toHaveClass('bg-transparent');
    expect(motionDiv).toHaveClass('border');
    expect(motionDiv).toHaveClass('border-gray-200');
  });
}); 