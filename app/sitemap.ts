import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

const BASE_URL = 'https://buzonas.dev'

// Required for `output: 'export'` — without this, Next treats sitemap.ts
// as a dynamic route handler, which static export does not support.
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/projects', '/consulting', '/blog'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }))

  // Blog post routes intentionally omitted at MVP — zero posts exist (TAD §9.3)

  return [...staticRoutes, ...projectRoutes]
}
