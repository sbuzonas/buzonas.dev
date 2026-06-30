export type SkillLevel = 'expert' | 'proficient' | 'familiar'

export interface Skill {
  name: string
  level: SkillLevel
}

export interface CompetencyDomain {
  name: string
  skills: Skill[]
}

export interface Certification {
  name: string
  issuer: string
  validUntil: string
  badgeUrl?: string
}

export const certifications: Certification[] = [
  { name: 'AWS Solutions Architect Professional', issuer: 'AWS', validUntil: '2029' },
  { name: 'AWS DevOps Engineer Professional', issuer: 'AWS', validUntil: '2029' },
  { name: 'AWS Security Specialty', issuer: 'AWS', validUntil: '2029' },
]

// TODO: Populate skills per domain — Cloud, Kubernetes & Platform, DevOps/SRE,
// Security, FinOps, Languages, IaC, Observability (PRD §3.5).
export const competencies: CompetencyDomain[] = [
  {
    name: 'Cloud',
    skills: [{ name: 'AWS', level: 'expert' }],
  },
]
