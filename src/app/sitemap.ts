import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/projects', '/expertise', '/writing', '/hire', '/contact'].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: path === '' ? 1 : .7 }));
  return [...pages, ...projects.map(project => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .8 }))];
}
