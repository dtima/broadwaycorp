/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n with next-intl
  experimental: {
    optimizeCss: true,
  },

  // Image domains for Supabase Storage
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      // Collapse locale-prefixed URLs to the single-page root
      { source: '/:locale(en|fr)', destination: '/', permanent: false },
      { source: '/:locale(en|fr)/:path*', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;
