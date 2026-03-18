import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://awratech.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://awratech.com/team', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://awratech.com/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://awratech.com/news', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ];
}
