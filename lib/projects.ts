import { projects, type Project, type ProjectCategory } from '@/data/projects'

export function getProjects(category?: ProjectCategory): Project[] {
  if (!category) return projects
  return projects.filter((project) => project.category === category)
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsWithMdx(): Project[] {
  return projects.filter((project) => project.hasMdx)
}
