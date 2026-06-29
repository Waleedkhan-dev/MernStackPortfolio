import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/profile';

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = ['', '#about', '#skills', '#experience', '#projects', '#contact'];
  return sections.map((s) => ({
    url: `${siteConfig.url}/${s}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: s === '' ? 1 : 0.8,
  }));
}
