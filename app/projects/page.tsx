import { SectionEyebrow } from '@/components/shared/SectionEyebrow'
import { ProjectGrid } from '@/components/projects/ProjectGrid'
import { getProjects } from '@/lib/projects'

export const metadata = {
  title: 'Projects',
}

export default function ProjectsPage() {
  const projects = getProjects()

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-2xl md:px-12">
      <SectionEyebrow label="Projects" />
      <h1 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
        Things I&apos;ve Built
      </h1>
      <div className="mt-12">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  )
}
