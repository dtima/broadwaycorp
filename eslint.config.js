import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'prettier'),
  ...compat.plugins('prettier'),
  {
    rules: {
      '@next/next/no-img-element': 'off',
      'prettier/prettier': 'error',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'build/**', 'coverage/**'],
  },
];

export default eslintConfig;
