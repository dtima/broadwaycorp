import { forwardRef, SelectHTMLAttributes } from 'react';

export interface SelectOption {
  /** The value to be sent in form submission */
  value: string;
  /** The text displayed in the UI */
  label: string;
  /** Whether this option is disabled */
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  /** Label for the select element */
  label: string;
  /** Name and id of the select element */
  name: string;
  /** Options for the select dropdown */
  options: SelectOption[];
  /** Optional placeholder text (first disabled option) */
  placeholder?: string;
  /** Optional helper text displayed below the select */
  helperText?: string;
  /** Error message to display */
  error?: string;
  /** Whether the field has an error (without a specific message) */
  hasError?: boolean;
  /** Whether the element should take up the full width of its container */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Whether the field is required */
  required?: boolean;
}

/**
 * Select dropdown component with accessibility features
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      name,
      options,
      placeholder,
      helperText,
      error,
      hasError = false,
      fullWidth = false,
      className = '',
      required = false,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const selectId = `select-${name}`;
    const helperTextId = helperText || error ? `${selectId}-description` : undefined;
    const isInvalid = hasError || !!error;
    const ariaDescribedBy = helperTextId;

    // Classes
    const containerClasses = `${fullWidth ? 'w-full' : ''}`;
    
    const labelClasses = `block text-sm font-medium text-gray-700 mb-1 ${disabled ? 'text-gray-400' : ''}`;
    
    const selectWrapperClasses = 'relative';
    
    const selectClasses = `
      block w-full pr-10 py-2 pl-3 rounded-md border-gray-300 shadow-sm 
      appearance-none bg-white 
      focus:ring-2 focus:ring-brand-navy focus:border-brand-navy
      ${isInvalid ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
      ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
      ${className}
    `;

    return (
      <div className={containerClasses}>
        <label htmlFor={selectId} className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <div className={selectWrapperClasses}>
          <select
            ref={ref}
            id={selectId}
            name={name}
            className={selectClasses}
            disabled={disabled}
            aria-invalid={isInvalid}
            aria-describedby={ariaDescribedBy}
            required={required}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Custom dropdown arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {(helperText || error) && (
          <p
            id={helperTextId}
            className={`mt-1 text-sm ${isInvalid ? 'text-red-600' : 'text-gray-500'}`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select; 