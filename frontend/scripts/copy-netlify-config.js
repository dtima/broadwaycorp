import { copyFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');
const distDir = join(rootDir, 'dist');

async function copyNetlifyConfig() {
  try {
    // Copy _redirects file
    await copyFile(
      join(publicDir, '_redirects'),
      join(distDir, '_redirects')
    );
    
    // Copy sitemap.xml file
    await copyFile(
      join(publicDir, 'sitemap.xml'),
      join(distDir, 'sitemap.xml')
    );
    
    console.log('✅ Successfully copied Netlify configuration files to dist');
  } catch (error) {
    console.error('❌ Error copying Netlify configuration files:', error);
    process.exit(1);
  }
}

copyNetlifyConfig(); 