import { render, screen } from '@testing-library/react';
import IconCard from './IconCard';

// Mock framer-motion
jest.mock('framer-motion', () => {
  return {
    motion: {
      div: ({ children, ...props }: any) => (
        <div data-testid="motion-div" {...props}>
          {children}
        </div>
      ),
    },
  };
});

describe('IconCard', () => {
  const mockProps = {
    icon: <svg data-testid="test-icon" />,
    title: 'Test Title',
    description: 'Test Description',
    className: 'test-class',
  };

  it('renders with all props correctly', () => {
    render(<IconCard {...mockProps} />);
    
    // Check if motion div is rendered
    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toBeInTheDocument();
    expect(motionDiv).toHaveClass('test-class');
    
    // Check title and description
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    
    // Check icon
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders without optional props', () => {
    const { icon, title, description } = mockProps;
    render(<IconCard icon={icon} title={title} description={description} />);
    
    // Component should render without className
    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toBeInTheDocument();
    
    // Should still have the title and description
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
}); 