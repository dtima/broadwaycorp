import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/en`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/fr`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
