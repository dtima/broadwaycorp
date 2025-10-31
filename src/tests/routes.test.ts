import { describe, it, expect } from 'vitest';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

/**
 * Route validation tests for production build
 * Ensures all expected pages are generated and accessible
 */
describe('Production Build Routes', () => {
  const buildDir = join(process.cwd(), '.next', 'server', 'app');

  describe('Static HTML Generation', () => {
    it('should generate index.html for homepage', () => {
      const indexPath = join(buildDir, 'index.html');
      expect(existsSync(indexPath), 'Homepage HTML should exist').toBe(true);
      
      const content = readFileSync(indexPath, 'utf-8');
      expect(content).toContain('Broadway Corporation');
      expect(content.length).toBeGreaterThan(1000); // Substantial content
    });

    it('should generate farmhouse.html', () => {
      const farmhousePath = join(buildDir, 'farmhouse.html');
      expect(existsSync(farmhousePath), 'Farmhouse HTML should exist').toBe(true);
      
      const content = readFileSync(farmhousePath, 'utf-8');
      expect(content).toContain('Broadway Farmhouse');
      expect(content).toContain('Sustainable Agriculture');
    });

    it('should generate enterprise.html', () => {
      const enterprisePath = join(buildDir, 'enterprise.html');
      expect(existsSync(enterprisePath), 'Enterprise HTML should exist').toBe(true);
      
      const content = readFileSync(enterprisePath, 'utf-8');
      expect(content).toContain('Broadway Enterprise');
      expect(content).toContain('Laboratory Solutions');
    });

    it('should generate intelligence.html', () => {
      const intelligencePath = join(buildDir, 'intelligence.html');
      expect(existsSync(intelligencePath), 'Intelligence HTML should exist').toBe(true);
      
      const content = readFileSync(intelligencePath, 'utf-8');
      expect(content).toContain('Broadway Intelligence');
      expect(content).toContain('IT Services');
    });

    it('should generate resorts.html', () => {
      const resortsPath = join(buildDir, 'resorts.html');
      expect(existsSync(resortsPath), 'Resorts HTML should exist').toBe(true);
      
      const content = readFileSync(resortsPath, 'utf-8');
      expect(content).toContain('Broadway Resorts');
      expect(content).toContain('Eco-Tourism');
    });

    it('should generate _not-found.html', () => {
      const notFoundPath = join(buildDir, '_not-found.html');
      expect(existsSync(notFoundPath), '404 page HTML should exist').toBe(true);
    });
  });

  describe('RSC (React Server Components) Generation', () => {
    it('should generate index.rsc', () => {
      const indexRscPath = join(buildDir, 'index.rsc');
      expect(existsSync(indexRscPath), 'Homepage RSC should exist').toBe(true);
    });

    it('should generate farmhouse.rsc', () => {
      const farmhouseRscPath = join(buildDir, 'farmhouse.rsc');
      expect(existsSync(farmhouseRscPath), 'Farmhouse RSC should exist').toBe(true);
    });

    it('should generate enterprise.rsc', () => {
      const enterpriseRscPath = join(buildDir, 'enterprise.rsc');
      expect(existsSync(enterpriseRscPath), 'Enterprise RSC should exist').toBe(true);
    });

    it('should generate intelligence.rsc', () => {
      const intelligenceRscPath = join(buildDir, 'intelligence.rsc');
      expect(existsSync(intelligenceRscPath), 'Intelligence RSC should exist').toBe(true);
    });

    it('should generate resorts.rsc', () => {
      const resortsRscPath = join(buildDir, 'resorts.rsc');
      expect(existsSync(resortsRscPath), 'Resorts RSC should exist').toBe(true);
    });
  });

  describe('Static Assets', () => {
    it('should have grid.svg in public directory', () => {
      const gridPath = join(process.cwd(), 'public', 'grid.svg');
      expect(existsSync(gridPath), 'grid.svg should exist').toBe(true);
      
      const content = readFileSync(gridPath, 'utf-8');
      expect(content).toContain('<svg');
      expect(content).toContain('pattern');
    });

    it('should have favicon.ico in public directory', () => {
      const faviconPath = join(process.cwd(), 'public', 'favicon.ico');
      expect(existsSync(faviconPath), 'favicon.ico should exist').toBe(true);
    });

    it('should have all division logos', () => {
      const logos = [
        'BClogo.jpg',
        'BRoadway-Farmhouse.jpg',
        'Broadway-Enterprise.jpg',
        'Broadway-Intelligence.jpg',
        'Broadway-Resort.jpg'
      ];

      logos.forEach(logo => {
        const logoPath = join(process.cwd(), 'public', 'images', 'logos', logo);
        expect(existsSync(logoPath), `Logo ${logo} should exist`).toBe(true);
      });
    });
  });

  describe('Build Configuration', () => {
    it('should have vercel.json configuration', () => {
      const vercelConfigPath = join(process.cwd(), 'vercel.json');
      expect(existsSync(vercelConfigPath), 'vercel.json should exist').toBe(true);
      
      const config = JSON.parse(readFileSync(vercelConfigPath, 'utf-8'));
      expect(config.framework).toBe('nextjs');
      expect(config.buildCommand).toBe('pnpm run build');
    });

    it('should have next.config.mjs', () => {
      const nextConfigPath = join(process.cwd(), 'next.config.mjs');
      expect(existsSync(nextConfigPath), 'next.config.mjs should exist').toBe(true);
    });

    it('should have package.json with correct scripts', () => {
      const packageJsonPath = join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
      
      expect(packageJson.scripts.build).toBe('next build');
      expect(packageJson.scripts.start).toBe('next start');
      expect(packageJson.packageManager).toBe('pnpm@9.0.0');
    });
  });
});
