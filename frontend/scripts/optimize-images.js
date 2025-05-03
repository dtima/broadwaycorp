/**
 * Script for optimizing and resizing images for responsive use
 * 
 * Note: This requires sharp to be installed:
 * npm install sharp
 * 
 * Usage:
 * node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const sourceDir = path.join(__dirname, '../public/assets/images/source');
const outputBaseDir = path.join(__dirname, '../public/assets/images');
const sizes = [640, 768, 1024, 1280, 1920];

// Ensure directories exist
function ensureDirectoryExists(directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
}

// Create size directories
sizes.forEach(size => {
  const sizeDir = path.join(outputBaseDir, size.toString());
  ensureDirectoryExists(sizeDir);
});

// Process all images
async function processImages() {
  // Ensure source directory exists
  ensureDirectoryExists(sourceDir);
  
  // Get all files in the source directory
  const files = fs.readdirSync(sourceDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
      const inputPath = path.join(sourceDir, file);
      
      // Process each size
      for (const size of sizes) {
        const outputDir = path.join(outputBaseDir, size.toString());
        const outputPath = path.join(outputDir, file);
        
        try {
          await sharp(inputPath)
            .resize(size)
            .jpeg({ quality: 80, progressive: true })
            .toFile(outputPath.replace(/\.(png|jpg|jpeg)$/i, '.jpg'));
          
          // Also create WebP version for modern browsers
          await sharp(inputPath)
            .resize(size)
            .webp({ quality: 80 })
            .toFile(outputPath.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
          
          console.log(`Processed ${file} at ${size}px width`);
        } catch (err) {
          console.error(`Error processing ${file} at ${size}px:`, err);
        }
      }
    }
  }
}

// Run the script
processImages()
  .then(() => console.log('Image optimization complete!'))
  .catch(err => console.error('Error during image optimization:', err)); 