import { notFound } from 'next/navigation'
import { ProjectPage } from '@/components/projects/ProjectPage'
import { getProject, getProjectsWithMdx } from '@/lib/projects'
import { projects } from '@/data/projects'

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export const dynamicParams = false

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  let MdxComponent: React.ComponentType | undefined

  // Guard with hasMdx before importing — a missing file throws (CLAUDE.md §7)
  if (project.hasMdx && getProjectsWithMdx().some((p) => p.slug === slug)) {
    const mod = await import(`@/content/projects/${slug}.mdx`)
    MdxComponent = mod.default
  }

  return <ProjectPage project={project} mdxContent={MdxComponent} />
}
