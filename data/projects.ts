export type ProjectCategory = 'professional' | 'consulting' | 'opensource' | 'personal'
export type ProjectStatus = 'complete' | 'active' | 'in-progress' | 'coming-soon'
export type ProjectDepth = 'card' | 'case-study' | 'deep-dive'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  status: ProjectStatus
  year: string
  org: string
  tags: string[]
  github?: string
  demo?: string
  excerpt: string
  depth: ProjectDepth
  hasMdx: boolean
}

// TODO: Seed with the 6 resume highlights named in component-inventory §9.2
// (Octothorpe, Course Map, Passport, Fetch-a-File, Vagrant OpsWorks,
// Academy of Voice) plus FancyGuy consulting engagements.
export const projects: Project[] = [
  {
    slug: 'octothorpe',
    title: 'Octothorpe',
    category: 'opensource',
    status: 'active',
    year: 'TODO',
    org: 'Personal',
    tags: ['TODO'],
    excerpt: 'TODO — 2–3 sentence description.',
    depth: 'card',
    hasMdx: false,
  },
]
