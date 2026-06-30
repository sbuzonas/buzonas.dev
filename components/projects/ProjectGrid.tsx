import { ProjectCard } from './ProjectCard'
import type { Project, ProjectCategory } from '@/data/projects'

interface ProjectGridProps {
  projects: Project[]
  category?: ProjectCategory
}

export function ProjectGrid({ projects, category }: ProjectGridProps) {
  const filtered = category
    ? projects.filter((project) => project.category === category)
    : projects

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filtered.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}
