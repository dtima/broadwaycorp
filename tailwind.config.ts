import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(221, 83%, 98%)',
          100: 'hsl(221, 83%, 95%)',
          500: 'hsl(221, 83%, 53%)',
          600: 'hsl(221, 83%, 45%)',
          900: 'hsl(221, 83%, 20%)',
        },
        accent: {
          50: 'hsl(174, 84%, 95%)',
          500: 'hsl(174, 84%, 40%)',
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
      },
    },
  },
  plugins: [],
};

export default config;
