import { SectionEyebrow } from '@/components/shared/SectionEyebrow'
import type { MilitaryService, VSOAffiliation, NonprofitEntry } from '@/data/vso'

interface VeteranProps {
  military: MilitaryService
  vsoAffiliations: VSOAffiliation[]
  nonprofit: NonprofitEntry
}

export function Veteran({ military, vsoAffiliations, nonprofit }: VeteranProps) {
  return (
    <section
      id="veteran"
      className="mx-auto max-w-[1280px] px-6 py-2xl md:px-12"
    >
      <SectionEyebrow label="Veteran & Nonprofit" />
      <h2 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
        Service
      </h2>

      <div className="mt-8 rounded-lg border-t-2 border-patriot bg-deep p-6">
        <p className="font-mono text-xs text-mist">{military.dateRange}</p>
        <h3 className="font-display text-xl font-bold text-cloud">
          {military.branch} — {military.rank}, {military.unit}
        </h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-cloud/90">
          {military.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {vsoAffiliations.map((vso) => (
          <div
            key={vso.name}
            className="rounded-md border-t-2 border-patriot bg-deep p-4"
          >
            <p className="font-body text-cloud">{vso.name}</p>
            {vso.role && <p className="font-mono text-xs text-mist">{vso.role}</p>}
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-md border-t-2 border-patriot bg-deep p-6">
        <p className="font-mono text-xs uppercase tracking-[0.1em] text-patriot">
          {nonprofit.status === 'forming' ? 'In Formation' : ''}
        </p>
        <h3 className="font-display text-lg font-bold text-cloud">
          {nonprofit.name}
        </h3>
        <p className="mt-2 text-sm text-cloud/90">{nonprofit.description}</p>
      </div>
    </section>
  )
}
