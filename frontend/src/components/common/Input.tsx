import { forwardRef, InputHTMLAttributes } from 'react';

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
}

/**
 * Input component for text, email, password, etc.
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
      ...rest
    },
    ref
  ) => {
    const isInvalid = hasError || !!error;
    const inputId = `input-${name}`;
    const helperTextId = helperText || error ? `${inputId}-description` : undefined;
    const ariaDescribedBy = helperTextId;

    // Classes
    const containerClasses = `relative ${fullWidth ? 'w-full' : ''}`;
    
    const labelClasses = `block text-sm font-medium text-gray-700 mb-1 ${disabled ? 'text-gray-400' : ''}`;
    
    const inputClasses = `
      block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm 
      focus:ring-2 focus:ring-brand-navy focus:border-brand-navy
      ${isInvalid ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}
      ${disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : ''}
      ${startIcon ? 'pl-10' : ''}
      ${endIcon ? 'pr-10' : ''}
      ${className}
    `;

    return (
      <div className={containerClasses}>
        <label htmlFor={inputId} className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
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
            {...rest}
          />

          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-500">
              {endIcon}
            </div>
          )}
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

Input.displayName = 'Input';

export default Input; 