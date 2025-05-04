# Broadway Corporation Frontend

This is the frontend codebase for the Broadway Corporation website, built with React, TypeScript, Vite, and TailwindCSS.

## Features

- Modern React with functional components and hooks
- Type safety with TypeScript
- Fast development and builds with Vite
- Utility-first styling with TailwindCSS
- Responsive design for all device sizes
- Dark mode support
- Internationalization (i18n) support
- Component-based architecture
- Unit tests with Jest and React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ 
- PNPM 8+

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

The development server will start at `http://localhost:3000`.

## Building for Production

To build the application for production:

```bash
pnpm build
```

To preview the production build:

```bash
pnpm preview
```

## Testing

To run tests:

```bash
pnpm test
```

To watch tests:

```bash
pnpm test:watch
```

## Deployment to Netlify

This project is configured for easy deployment to Netlify.

### Option 1: Automatic Deployment via GitHub

1. Push your code to a GitHub repository
2. Log in to Netlify and click "New site from Git"
3. Choose GitHub and select your repository
4. Configure build settings:
   - Build command: `pnpm build:netlify`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 2: Manual Deployment

To deploy manually using the Netlify CLI:

1. Install the Netlify CLI:

```bash
npm install -g netlify-cli
```

2. Build your site:

```bash
pnpm build:netlify
```

3. Deploy to Netlify:

```bash
netlify deploy
```

For production deployment:

```bash
netlify deploy --prod
```

### Environment Variables

The following environment variables should be set in your Netlify configuration:

- `NODE_VERSION`: Set to `20`
- `NPM_FLAGS`: Set to `--version`

### Troubleshooting Netlify Deployment

If your deployment shows a 404 page:

1. Verify that `netlify.toml` is in your repository
2. Check that the `_redirects` file is correctly copied to the `dist` folder
3. Make sure your build command is set to `pnpm build:netlify`
4. Check the Netlify deploy logs for any errors

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   │   ├── common/      # Shared components (Button, Input, etc.)
│   │   └── layout/      # Layout components (Header, Footer, etc.)
│   ├── contexts/        # React contexts
│   ├── hooks/           # Custom React hooks
│   ├── i18n/            # Internationalization
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── router/          # Routing configuration
│   ├── services/        # API services
│   ├── styles/          # Global styles and CSS variables
│   ├── tests/           # Test setup
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── netlify.toml         # Netlify configuration
└── package.json         # Dependencies and scripts
```

## License

Copyright © 2023 Broadway Corporation. All rights reserved.
