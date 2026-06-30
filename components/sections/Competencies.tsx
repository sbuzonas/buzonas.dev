import { SectionEyebrow } from '@/components/shared/SectionEyebrow'
import type { CompetencyDomain, Certification, SkillLevel } from '@/data/competencies'

interface CompetenciesProps {
  domains: CompetencyDomain[]
  certifications: Certification[]
}

const LEVEL_OPACITY: Record<SkillLevel, string> = {
  expert: 'text-cloud',
  proficient: 'text-mist',
  familiar: 'text-mist/60',
}

export function Competencies({ domains, certifications }: CompetenciesProps) {
  return (
    <section
      id="competencies"
      className="mx-auto max-w-[1280px] px-6 py-2xl md:px-12"
    >
      <SectionEyebrow label="Competencies" />
      <h2 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
        Skills &amp; Certifications
      </h2>

      <div className="mt-8 flex flex-wrap gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="rounded-md border border-iron bg-deep px-4 py-3"
          >
            <p className="font-body text-sm text-cloud">{cert.name}</p>
            <p className="font-mono text-xs text-mist">
              {cert.issuer} · valid through {cert.validUntil}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain) => (
          <div key={domain.name}>
            <h3 className="font-display text-lg font-bold text-cloud">
              {domain.name}
            </h3>
            <ul className="mt-2 space-y-1">
              {domain.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={`font-body text-sm ${LEVEL_OPACITY[skill.level]}`}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
