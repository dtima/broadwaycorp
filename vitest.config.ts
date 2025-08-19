import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    include: ['src/tests/{unit,integration}/**/*.{test,spec}.ts?(x)'],
    coverage: {
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 60,
        statements: 70,
      },
      exclude: [
        'src/tests/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/coverage/**',
        '**/node_modules/**',
      ],
    },
  },
});
