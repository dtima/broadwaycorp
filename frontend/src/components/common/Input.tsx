import { forwardRef, InputHTMLAttributes, useState } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  /** Input label text */
  label: string;
  /** Input name (also used for id) */
  name: string;
  /** Optional helper text to display below input */
  helperText?: string;
  /** Error message to display */
  error?: string;
  /** Whether to display the field in an error state */
  hasError?: boolean;
  /** Whether the input takes the full width of its container */
  fullWidth?: boolean;
  /** Optional additional CSS classes */
  className?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Optional icon to show at the end of the input */
  endIcon?: React.ReactNode;
  /** Optional icon to show at the start of the input */
  startIcon?: React.ReactNode;
  /** Whether to show a clear button for the input */
  clearable?: boolean;
}

/**
 * Input component for text, email, password, etc.
 * Enhanced with accessibility features and mobile optimizations.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      helperText,
      error,
      hasError = false,
      fullWidth = false,
      className = '',
      required = false,
      type = 'text',
      endIcon,
      startIcon,
      disabled = false,
      clearable = false,
      value,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const isInvalid = hasError || !!error;
    const inputId = `input-${name}`;
    const helperTextId = helperText || error ? `${inputId}-description` : undefined;
    const ariaDescribedBy = helperTextId;

    // Handle clear button click
    const handleClear = () => {
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        'value'
      )?.set;
      
      const inputRef = ref as React.MutableRefObject<HTMLInputElement>;
      if (inputRef && inputRef.current && nativeInputValueSetter) {
        nativeInputValueSetter.call(inputRef.current, '');
        inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
      }
    };

    // Classes
    const containerClasses = `relative ${fullWidth ? 'w-full' : ''}`;
    
    const labelClasses = `block text-sm font-medium mb-1 transition-colors
      ${disabled ? 'text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}
      ${isFocused && !isInvalid ? 'text-brand-navy dark:text-brand-orange' : ''}`;
    
    const inputClasses = `
      block w-full px-4 py-2 rounded-md border shadow-sm transition-all
      focus:outline-none focus:ring-2
      ${isInvalid 
        ? 'border-red-500 focus:ring-red-500 focus:border-red-500 dark:border-red-400 dark:focus:ring-red-400' 
        : 'border-gray-300 dark:border-gray-600 focus:ring-brand-navy focus:border-brand-navy dark:focus:ring-brand-orange dark:focus:border-brand-orange'
      }
      ${disabled 
        ? 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
        : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white'
      }
      ${startIcon ? 'pl-10' : ''}
      ${(endIcon || (clearable && value)) ? 'pr-10' : ''}
      ${className}
    `;

    return (
      <div className={containerClasses}>
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && <span className="text-red-500 dark:text-red-400 ml-1" aria-hidden="true">*</span>}
        </label>

        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            name={name}
            type={type}
            className={inputClasses}
            disabled={disabled}
            aria-invalid={isInvalid}
            aria-describedby={ariaDescribedBy}
            required={required}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={value}
            onChange={onChange}
            {...rest}
          />

          {clearable && value && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              onClick={handleClear}
              aria-label="Clear input"
              tabIndex={-1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}

          {endIcon && !clearable && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
              {endIcon}
            </div>
          )}
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

Input.displayName = 'Input';

export default Input; 