import { TechTag } from '@/components/shared/TechTag'
import { StatusBadge } from '@/components/shared/StatusBadge'
import { MdxContent } from '@/components/shared/MdxContent'
import type { Project } from '@/data/projects'

interface ProjectPageProps {
  project: Project
  mdxContent?: React.ComponentType
}

export function ProjectPage({ project, mdxContent: Content }: ProjectPageProps) {
  return (
    <article className="mx-auto max-w-[1280px] px-6 py-2xl md:px-12">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-mono text-xs text-mist">
            {project.org} · {project.year}
          </p>
          <h1 className="font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
            {project.title}
          </h1>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechTag key={tag} label={tag} size="md" />
        ))}
      </div>

      <p className="mt-6 max-w-72ch text-base text-cloud/90">{project.excerpt}</p>

      <div className="mt-4 flex gap-4">
        {project.github && (
          <a href={project.github} className="text-sm text-sky hover:underline">
            View Source
          </a>
        )}
        {project.demo && (
          <a href={project.demo} className="text-sm text-sky hover:underline">
            Live Demo
          </a>
        )}
      </div>

      {/* case-study sections render here when depth === 'case-study'; TODO */}

      {project.depth === 'deep-dive' && Content && (
        <div className="mt-12">
          <MdxContent content={Content} />
        </div>
      )}
    </article>
  )
}
