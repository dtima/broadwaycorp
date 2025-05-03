/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#003366', // Navy Blue
        'brand-navy-dark': '#002244', // Darker Navy Blue
        'brand-orange': '#FFA500', // Orange
        'brand-gray': {
          light: '#f7f7f7', 
          DEFAULT: '#aaaaaa',
          dark: '#333333',
        },
        'primary': {
          DEFAULT: '#003366', // brand-navy
        },
        'secondary': {
          DEFAULT: '#FFA500', // brand-orange
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333333',
            a: {
              color: '#003366',
              '&:hover': {
                color: '#FFA500',
              },
            },
            h1: {
              color: '#003366',
            },
            h2: {
              color: '#003366',
            },
            h3: {
              color: '#003366',
            },
            h4: {
              color: '#003366',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 