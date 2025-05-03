import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// Mock dependencies
jest.mock('./Container', () => {
  return function MockContainer({ children }: any) {
    return <div data-testid="container">{children}</div>;
  };
});

jest.mock('../common/Button', () => {
  return function MockButton({ children, href, onClick }: any) {
    return (
      <a href={href} onClick={onClick} data-testid="button">
        {children}
      </a>
    );
  };
});

jest.mock('../../hooks/useLanguage', () => ({
  useLanguage: () => ({
    language: 'en',
    setLanguage: jest.fn(),
  }),
}));

// Helper function to render within Router context
const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('Header', () => {
  const defaultNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog', isExternal: true },
  ];

  it('renders with default logo and CTA', () => {
    renderWithRouter(<Header navLinks={defaultNavLinks} />);
    
    expect(screen.getByAltText('Broadway Corporation')).toBeInTheDocument();
    
    // Find buttons that contain "Contact Us"
    const buttons = screen.getAllByTestId('button');
    const ctaButton = buttons.find(button => button.textContent === 'Contact Us');
    expect(ctaButton).toBeInTheDocument();
  });
  
  it('renders nav links correctly', () => {
    renderWithRouter(<Header navLinks={defaultNavLinks} />);
    
    // Use getAllByRole instead of getByText
    const links = screen.getAllByRole('link');
    
    // Find links that contain specific text
    const homeLinks = links.filter(link => link.textContent === 'Home');
    const aboutLinks = links.filter(link => link.textContent === 'About');
    const servicesLinks = links.filter(link => link.textContent === 'Services');
    const blogLinks = links.filter(link => link.textContent === 'Blog');
    
    expect(homeLinks.length).toBeGreaterThan(0);
    expect(aboutLinks.length).toBeGreaterThan(0);
    expect(servicesLinks.length).toBeGreaterThan(0);
    expect(blogLinks.length).toBeGreaterThan(0);
  });
  
  it('applies external link attributes for external links', () => {
    renderWithRouter(<Header navLinks={defaultNavLinks} />);
    
    // Get all links
    const links = screen.getAllByRole('link');
    
    // Find Blog links
    const blogLinks = links.filter(link => link.textContent === 'Blog');
    expect(blogLinks.length).toBeGreaterThan(0);
    
    // At least one of them should have target="_blank"
    const hasExternalLink = blogLinks.some(link => link.getAttribute('target') === '_blank');
    expect(hasExternalLink).toBe(true);
  });
  
  it('toggles mobile menu when menu button is clicked', async () => {
    renderWithRouter(<Header navLinks={defaultNavLinks} />);
    
    // Mobile menu should be closed initially
    const mobileMenu = screen.getByRole('button', { name: /open menu/i });
    expect(mobileMenu).toBeInTheDocument();
    
    const menuElement = screen.getByTestId('container').querySelector('#mobile-menu');
    expect(menuElement).toHaveClass('max-h-0');
    
    // Open the menu
    await userEvent.click(mobileMenu);
    expect(menuElement).toHaveClass('max-h-96');
    
    // Menu button should now be for closing
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();
  });
  
  it('renders custom logo when provided', () => {
    const customLogo = <div data-testid="custom-logo">Custom Logo</div>;
    renderWithRouter(<Header logo={customLogo} navLinks={defaultNavLinks} />);
    
    expect(screen.getByTestId('custom-logo')).toBeInTheDocument();
    expect(screen.queryByAltText('Broadway Corporation')).not.toBeInTheDocument();
  });
  
  it('renders custom CTA when provided', () => {
    renderWithRouter(
      <Header 
        navLinks={defaultNavLinks}
        ctaText="Get Started"
        ctaLink="/get-started"
      />
    );
    
    // Find the button that contains "Get Started" in desktop view
    const desktopButtons = screen.getAllByTestId('button');
    const ctaButton = desktopButtons.find(button => button.textContent === 'Get Started');
    expect(ctaButton).toBeInTheDocument();
  });
}); 