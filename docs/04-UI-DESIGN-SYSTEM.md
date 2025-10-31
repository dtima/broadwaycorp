# Broadway Corporation - UI Design System

**Version:** 2.0.0  
**Date:** October 30, 2025

---

## Design Tokens

### Typography

```typescript
// tailwind.config.ts
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['Geist Mono', 'monospace'],
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },
  lineHeight: {
    tight: '1.3',
    normal: '1.5',
    relaxed: '1.75',
  },
};
```

### Colors

```typescript
export const colors = {
  primary: {
    50: 'hsl(221, 83%, 98%)',
    100: 'hsl(221, 83%, 95%)',
    500: 'hsl(221, 83%, 53%)', // Primary
    600: 'hsl(221, 83%, 45%)',
    900: 'hsl(221, 83%, 20%)',
  },
  accent: {
    50: 'hsl(174, 84%, 95%)',
    500: 'hsl(174, 84%, 40%)', // Accent
    600: 'hsl(174, 84%, 30%)',
  },
  neutral: {
    50: 'hsl(0, 0%, 98%)',
    100: 'hsl(0, 0%, 95%)',
    200: 'hsl(0, 0%, 90%)',
    300: 'hsl(0, 0%, 80%)',
    400: 'hsl(0, 0%, 60%)',
    500: 'hsl(0, 0%, 40%)',
    600: 'hsl(0, 0%, 30%)',
    700: 'hsl(0, 0%, 20%)',
    800: 'hsl(0, 0%, 10%)',
    900: 'hsl(0, 0%, 7%)',
  },
  success: 'hsl(142, 71%, 45%)',
  warning: 'hsl(38, 92%, 50%)',
  error: 'hsl(0, 84%, 60%)',
};
```

### Spacing

```typescript
export const spacing = {
  px: '1px',
  0: '0',
  1: '0.25rem',  // 4px
  2: '0.5rem',   // 8px
  3: '0.75rem',  // 12px
  4: '1rem',     // 16px
  5: '1.25rem',  // 20px
  6: '1.5rem',   // 24px
  8: '2rem',     // 32px
  10: '2.5rem',  // 40px
  12: '3rem',    // 48px
  16: '4rem',    // 64px
};
```

### Shadows

```typescript
export const boxShadow = {
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
};
```

### Border Radius

```typescript
export const borderRadius = {
  sm: '0.25rem',  // 4px
  md: '0.5rem',   // 8px
  lg: '0.75rem',  // 12px
  xl: '1rem',     // 16px
  full: '9999px',
};
```

---

## Layout System

### Grid

```typescript
// 12-column grid
<div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-12">
  <div className="col-span-12 md:col-span-6 lg:col-span-4">...</div>
</div>
```

### Container

```typescript
// Max width with responsive padding
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* max-width: 1280px */}
</div>
```

### Breakpoints

```typescript
export const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
```

---

## Component Library

### Button

```tsx
// components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
        secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500',
        outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
        ghost: 'hover:bg-neutral-100 text-neutral-700',
        danger: 'bg-error text-white hover:bg-red-700',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
```

### Card

```tsx
// components/ui/Card.tsx
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-neutral-200 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-semibold text-neutral-900">{children}</h3>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="text-neutral-700">{children}</div>;
}
```

### Input

```tsx
// components/ui/Input.tsx
export function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-neutral-700">
          {label}
        </label>
      )}
      <input
        className={`
          w-full rounded-lg border px-4 py-2 text-base
          transition-colors focus:outline-none focus:ring-2
          ${error 
            ? 'border-error focus:ring-error/20' 
            : 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500/20'
          }
        `}
        {...props}
      />
      {error && (
        <p className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
```

---

## Motion & Animation

### Durations

```typescript
export const durations = {
  fast: '150ms',
  normal: '250ms',
  slow: '400ms',
  page: '700ms',
};
```

### Easing

```typescript
export const easings = {
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  entrance: 'cubic-bezier(0, 0, 0.2, 1)',
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
};
```

### Framer Motion Variants

```tsx
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.3 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
```

---

## Accessibility

### Focus States

```css
/* Visible focus rings */
.focus-visible:focus {
  @apply ring-2 ring-primary-500 ring-offset-2;
}
```

### ARIA Labels

```tsx
<button aria-label="Close dialog">
  <XIcon className="h-5 w-5" />
</button>
```

### Skip Links

```tsx
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
>
  Skip to content
</a>
```

---

## Responsive Patterns

### Mobile-First

```tsx
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* 100% → 50% → 33% */}
</div>
```

### Container Queries (future)

```css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

---

**Document Owner:** UI/UX Designer  
**Last Updated:** October 30, 2025
