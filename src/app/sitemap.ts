import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { getAllDispatches } from '@/lib/dispatches';

const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/projects', '/expertise', '/writing', '/hire', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const projectUrls = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const dispatchUrls = getAllDispatches().map((dispatch) => ({
    url: `${base}/writing/${dispatch.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...pages, ...projectUrls, ...dispatchUrls];
}
