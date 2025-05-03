# Broadway Corporation Asset System

This directory contains all assets used in the Broadway Corporation website.

## Directory Structure

```
assets/
├── images/           # Images used throughout the website
│   ├── source/       # Original high-resolution images
│   ├── 640/          # Resized images for mobile devices (640px wide)
│   ├── 768/          # Resized images for tablets (768px wide)
│   ├── 1024/         # Resized images for small laptops (1024px wide)
│   ├── 1280/         # Resized images for laptops and desktops (1280px wide)
│   └── 1920/         # Resized images for large displays (1920px wide)
├── fonts/            # Custom font files
│   ├── woff/         # WOFF format fonts
│   └── woff2/        # WOFF2 format fonts (preferred)
└── icons/            # SVG icons and favicons
```

## Image Guidelines

### Adding New Images

1. Place original high-resolution images in the `images/source` directory
2. Run the optimization script:
   ```
   npm run optimize-images
   ```
3. This will create resized and optimized versions in the respective size directories

### Usage in Components

Use the `ResponsiveImage` component from `src/components/common/ResponsiveImage.tsx` to display images responsively:

```tsx
import ResponsiveImage from '../../components/common/ResponsiveImage';

<ResponsiveImage 
  src="example.jpg" 
  alt="Example image" 
  className="rounded-lg shadow-md"
/>
```

The component automatically handles:
- Responsive sizing based on device width
- Proper srcset and sizes attributes
- Lazy loading

## Icon Guidelines

Use SVG icons where possible for:
- Better scaling
- Smaller file sizes
- Easier color manipulation via CSS

### SVG Icon Usage

Place SVG icons in the `icons` directory and import them:

1. As React components (preferred for interface elements)
2. As static assets (for favicons and other fixed assets)

## Font Guidelines

Custom fonts are stored in the `fonts` directory:

- Use WOFF2 format for modern browsers (with WOFF fallback)
- Define fonts in CSS using `@font-face` declarations in `src/styles/fonts.css`
- Prefer system fonts when possible for better performance 