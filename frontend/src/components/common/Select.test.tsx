import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';

describe('Select', () => {
  const defaultOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date', disabled: true }
  ];

  it('renders with label and options', () => {
    render(
      <Select
        label="Choose a fruit"
        name="fruit"
        options={defaultOptions}
      />
    );
    
    expect(screen.getByLabelText('Choose a fruit')).toBeInTheDocument();
    
    // Check that all options are present
    const select = screen.getByLabelText('Choose a fruit');
    expect(select).toHaveDisplayValue('Apple'); // First option is selected by default
    
    // Check that all options exist in the DOM
    defaultOptions.forEach(option => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });
  
  it('renders with placeholder', () => {
    render(
      <Select
        label="Choose a fruit"
        name="fruit"
        options={defaultOptions}
        placeholder="Select a fruit"
      />
    );
    
    expect(screen.getByText('Select a fruit')).toBeInTheDocument();
  });
  
  it('shows required indicator when required', () => {
    render(
      <Select
        label="Choose a fruit"
        name="fruit"
        options={defaultOptions}
        required
      />
    );
    
    expect(screen.getByText(/Choose a fruit/i).closest('label')).toContainHTML('*');
  });
  
  it('displays helper text when provided', () => {
    render(
      <Select
        label="Choose a fruit"
        name="fruit"
        options={defaultOptions}
        helperText="Pick your favorite fruit"
      />
    );
    
    expect(screen.getByText('Pick your favorite fruit')).toBeInTheDocument();
  });
  
  it('shows error state and message', () => {
    render(
      <Select
        label="Choose a fruit"
        name="fruit"
        options={defaultOptions}
        error="Please select a fruit"
      />
    );
    
    const errorMessage = screen.getByText('Please select a fruit');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('text-red-600');
    
    const select = screen.getByLabelText('Choose a fruit');
    expect(select).toHaveAttribute('aria-invalid', 'true');
  });
  
  it('allows selecting an option', async () => {
    render(
      <Select
        label="Choose a fruit"
        name="fruit"
        options={defaultOptions}
        placeholder="Select a fruit"
      />
    );
    
    const select = screen.getByLabelText('Choose a fruit');
    await userEvent.selectOptions(select, 'banana');
    
    expect(select).toHaveValue('banana');
  });
  
  it('renders in disabled state', () => {
    render(
      <Select
        label="Choose a fruit"
        name="fruit"
        options={defaultOptions}
        disabled
      />
    );
    
    expect(screen.getByLabelText('Choose a fruit')).toBeDisabled();
  });
}); 