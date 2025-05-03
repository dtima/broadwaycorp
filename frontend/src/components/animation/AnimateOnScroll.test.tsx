import { render, screen } from '@testing-library/react';
import AnimateOnScroll from './AnimateOnScroll';

// Mock framer-motion hooks
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    useInView: jest.fn().mockReturnValue(true),
    motion: {
      div: ({ children, ...props }: any) => (
        <div data-testid="motion-div" {...props}>
          {children}
        </div>
      ),
    },
  };
});

describe('AnimateOnScroll', () => {
  it('renders children correctly', () => {
    render(
      <AnimateOnScroll>
        <p>Test content</p>
      </AnimateOnScroll>
    );
    
    const element = screen.getByTestId('motion-div');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('Test content');
  });
  
  it('passes className prop correctly', () => {
    render(
      <AnimateOnScroll className="test-class">
        <p>Test content</p>
      </AnimateOnScroll>
    );
    
    const element = screen.getByTestId('motion-div');
    expect(element).toHaveClass('test-class');
  });
}); 