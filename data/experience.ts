export interface ExperienceEntry {
  company: string
  role: string
  dateRange: string
  location: string
  type: 'employment' | 'consulting' | 'military'
  bullets: string[]
  current?: boolean
}

// TODO: Replace with real entries from sbuzonas-cv-plain-2026.pdf (PRD §3.2).
// Military service is the foundational entry per brand guide — list it last
// in this array (rendered as the base of the reverse-chronological timeline).
export const experience: ExperienceEntry[] = [
  {
    company: 'TODO — Current Employer',
    role: 'TODO — Title',
    dateRange: 'TODO — YYYY–Present',
    location: 'Remote',
    type: 'employment',
    bullets: ['TODO — impact statement, not a job description'],
    current: true,
  },
  {
    company: 'FancyGuy Technologies',
    role: 'Principal Consultant',
    dateRange: 'TODO — YYYY–Present',
    location: 'Pulaski, PA',
    type: 'consulting',
    bullets: ['TODO — select engagement highlights'],
  },
  {
    company: 'United States Marine Corps',
    role: 'Corporal — MWSS 471 Det A',
    dateRange: '2004–2012',
    location: 'TODO',
    type: 'military',
    bullets: ['TODO — precise, factual service summary'],
  },
]
