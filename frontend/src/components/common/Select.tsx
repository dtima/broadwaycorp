import { forwardRef, SelectHTMLAttributes, useState } from 'react';

export interface SelectOption {
  /** Option value */
  value: string;
  /** Option display label */
  label: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  /** Select label text */
  label: string;
  /** Select name (also used for id) */
  name: string;
  /** Options to display in the select */
  options: SelectOption[];
  /** Optional placeholder text (first option) */
  placeholder?: string;
  /** Optional helper text to display below select */
  helperText?: string;
  /** Error message to display */
  error?: string;
  /** Whether to display the field in an error state */
  hasError?: boolean;
  /** Whether the select takes the full width of its container */
  fullWidth?: boolean;
  /** Optional additional CSS classes */
  className?: string;
  /** Whether the field is required */
  required?: boolean;
}

/**
 * Select dropdown component with accessibility features
 * and mobile optimization
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
    const [isFocused, setIsFocused] = useState(false);
    const selectId = `select-${name}`;
    const helperTextId = helperText || error ? `${selectId}-description` : undefined;
    const isInvalid = hasError || !!error;
    const ariaDescribedBy = helperTextId;

    // Classes
    const containerClasses = `${fullWidth ? 'w-full' : ''}`;
    
    const labelClasses = `block text-sm font-medium mb-1 transition-colors
      ${disabled ? 'text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}
      ${isFocused && !isInvalid ? 'text-brand-navy dark:text-brand-orange' : ''}`;
    
    const selectWrapperClasses = 'relative';
    
    const selectClasses = `
      block w-full pr-10 py-2 pl-3 rounded-md border shadow-sm 
      appearance-none transition-all focus:outline-none focus:ring-2
      ${isInvalid 
        ? 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-400 dark:focus:ring-red-400' 
        : 'border-gray-300 dark:border-gray-600 focus:ring-brand-navy focus:border-brand-navy dark:focus:ring-brand-orange dark:focus:border-brand-orange'
      }
      ${disabled 
        ? 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
        : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
      }
      ${className}
    `;

    return (
      <div className={containerClasses}>
        <label htmlFor={selectId} className={labelClasses}>
          {label}
          {required && <span className="text-red-500 dark:text-red-400 ml-1" aria-hidden="true">*</span>}
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
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
          
          {/* Custom dropdown arrow (non-interactive, for styling only) */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
            <svg
              className="h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
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
            className={`mt-1 text-sm ${
              isInvalid 
                ? 'text-red-600 dark:text-red-400' 
                : 'text-gray-500 dark:text-gray-400'
            }`}
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