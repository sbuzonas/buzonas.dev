export interface MilitaryService {
  branch: string
  unit: string
  rank: string
  dateRange: string
  bullets: string[]
}

export interface VSOAffiliation {
  name: string
  role?: string
  url?: string
}

export interface NonprofitEntry {
  name: 'Veterans Corner'
  status: 'forming'
  description: string
}

export const military: MilitaryService = {
  branch: 'United States Marine Corps',
  unit: 'MWSS 471 Det A',
  rank: 'Corporal',
  dateRange: '2004–2012',
  bullets: ['TODO — precise, factual service summary'],
}

export const vso: VSOAffiliation[] = [
  { name: 'VFW' },
  { name: 'American Legion' },
  { name: 'DAV' },
  { name: 'Marine Corps League' },
  { name: 'IAVA' },
]

// Always described as "in formation" — never imply operational (CLAUDE.md §11)
export const nonprofit: NonprofitEntry = {
  name: 'Veterans Corner',
  status: 'forming',
  description: 'TODO — accurate description of nonprofit formation status.',
}
