/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        'brand-navy': '#003366', // Navy Blue
        'brand-navy-dark': '#002244', // Darker Navy Blue
        'brand-orange': '#FFA500', // Orange
        'brand-orange-dark': '#E69500', // Darker Orange
        'brand-gray': {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        'primary': {
          DEFAULT: '#003366', // brand-navy
          dark: '#002244',
          light: '#004488',
        },
        'secondary': {
          DEFAULT: '#FFA500', // brand-orange
          dark: '#E69500',
          light: '#FFB733',
        },
        'accent': {
          DEFAULT: '#4f46e5', // indigo-600
          dark: '#4338ca', // indigo-700
          light: '#6366f1', // indigo-500
        },
        'success': {
          DEFAULT: '#10b981', // emerald-600
          dark: '#059669', // emerald-700
          light: '#34d399', // emerald-500
        },
        'warning': {
          DEFAULT: '#f59e0b', // amber-600
          dark: '#d97706', // amber-700
          light: '#fbbf24', // amber-500
        },
        'error': {
          DEFAULT: '#ef4444', // red-600
          dark: '#dc2626', // red-700
          light: '#f87171', // red-500
        },
      },
      fontFamily: {
        sans: [
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      boxShadow: {
        'sharp': '0 1px 1px 0 rgba(0, 0, 0, 0.05)',
        'input': '0 1px 2px rgba(0, 0, 0, 0.06)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xs': '0.125rem', // 2px
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#374151', // gray-700
            a: {
              color: '#003366', // brand-navy
              '&:hover': {
                color: '#002244', // brand-navy-dark
              },
            },
            h1: { color: '#003366' },
            h2: { color: '#003366' },
            h3: { color: '#003366' },
            h4: { color: '#003366' },
          },
        },
        dark: {
          css: {
            color: '#d1d5db', // gray-300
            a: {
              color: '#FFA500', // brand-orange
              '&:hover': {
                color: '#FFB733', // lighter orange
              },
            },
            h1: { color: '#FFA500' },
            h2: { color: '#FFA500' },
            h3: { color: '#FFA500' },
            h4: { color: '#FFA500' },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 