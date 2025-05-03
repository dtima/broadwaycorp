import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input', () => {
  it('renders correctly with label', () => {
    render(
      <Input
        label="Email Address"
        name="email"
        placeholder="Enter your email"
      />
    );
    
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });
  
  it('renders with required indicator when required prop is true', () => {
    render(
      <Input
        label="Username"
        name="username"
        required
      />
    );
    
    // We need to use a regex because the label contains an asterisk
    expect(screen.getByText(/Username/i).closest('label')).toContainHTML('*');
  });
  
  it('displays helper text when provided', () => {
    render(
      <Input
        label="Password"
        name="password"
        type="password"
        helperText="Must be at least 8 characters"
      />
    );
    
    expect(screen.getByText('Must be at least 8 characters')).toBeInTheDocument();
  });
  
  it('displays error message and applies error styles', () => {
    render(
      <Input
        label="Name"
        name="name"
        error="Name is required"
      />
    );
    
    const errorMessage = screen.getByText('Name is required');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('text-red-600');
    
    const input = screen.getByLabelText('Name');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
  
  it('allows typing in the input field', async () => {
    render(
      <Input
        label="Search"
        name="search"
      />
    );
    
    const input = screen.getByLabelText('Search');
    await userEvent.type(input, 'test query');
    
    expect(input).toHaveValue('test query');
  });
  
  it('renders in disabled state when disabled is true', () => {
    render(
      <Input
        label="First Name"
        name="firstName"
        disabled
      />
    );
    
    const input = screen.getByLabelText('First Name');
    expect(input).toBeDisabled();
  });
  
  it('renders with start and end icons when provided', () => {
    const startIcon = <span data-testid="start-icon">$</span>;
    const endIcon = <span data-testid="end-icon">%</span>;
    
    render(
      <Input
        label="Amount"
        name="amount"
        startIcon={startIcon}
        endIcon={endIcon}
      />
    );
    
    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });
}); 