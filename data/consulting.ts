export interface ServiceOffering {
  title: string
  description: string
  capabilities: string[]
  icon?: string
}

export interface ReferenceArchitecture {
  slug: string
  title: string
  description: string
  status: 'coming-soon'
  tags: string[]
}

// PRD §3.4 — FancyGuy Technologies service offerings
export const services: ServiceOffering[] = [
  {
    title: 'Cloud Architecture & Modernization',
    description: 'TODO',
    capabilities: ['TODO'],
  },
  {
    title: 'Platform Engineering & Kubernetes',
    description: 'TODO',
    capabilities: ['TODO'],
  },
  {
    title: 'DevOps / SRE Transformation',
    description: 'TODO',
    capabilities: ['TODO'],
  },
  {
    title: 'FinOps & Cost Optimization',
    description: 'TODO',
    capabilities: ['TODO'],
  },
  {
    title: 'Security & Compliance',
    description: 'TODO — HIPAA, zero-trust',
    capabilities: ['TODO'],
  },
  {
    title: 'Engineering Leadership Advisory',
    description: 'TODO',
    capabilities: ['TODO'],
  },
]

// Phase 2 per PRD §3.4 — stub cards only at MVP
export const referenceArchitectures: ReferenceArchitecture[] = []
