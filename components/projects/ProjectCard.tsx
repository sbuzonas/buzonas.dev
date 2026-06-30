import { Github } from 'lucide-react'
import { TechTag } from '@/components/shared/TechTag'
import { StatusBadge } from '@/components/shared/StatusBadge'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="relative rounded-md border-t-2 border-sky bg-deep p-6 transition-shadow hover:shadow-[0_0_24px_rgba(168,212,230,0.25)]">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-display text-lg font-bold text-cloud">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-mist">
            {project.org} · {project.year}
          </p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="mt-3 text-sm text-cloud/90">{project.excerpt}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        {project.github ? (
          <a
            href={project.github}
            className="flex items-center gap-1 text-xs text-mist hover:text-sky"
          >
            <Github size={14} /> Source
          </a>
        ) : (
          <span />
        )}
        <a
          href={`/projects/${project.slug}`}
          className="text-sm text-sky hover:underline"
        >
          View Project →
        </a>
      </div>
    </article>
  )
}
