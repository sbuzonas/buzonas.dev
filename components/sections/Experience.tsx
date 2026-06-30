import { SectionEyebrow } from '@/components/shared/SectionEyebrow'
import type { ExperienceEntry } from '@/data/experience'

interface ExperienceProps {
  items: ExperienceEntry[]
}

const ACCENT_BORDER: Record<ExperienceEntry['type'], string> = {
  employment: 'border-iron',
  consulting: 'border-iron',
  military: 'border-patriot',
}

export function Experience({ items }: ExperienceProps) {
  return (
    <section id="experience" className="mx-auto max-w-[1280px] px-6 py-2xl md:px-12">
      <SectionEyebrow label="Experience" />
      <h2 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
        Career Timeline
      </h2>

      <ol className="mt-12 space-y-10">
        {items.map((item) => (
          <li
            key={`${item.company}-${item.dateRange}`}
            className={`border-l-2 pl-6 ${
              item.current ? 'border-sky' : ACCENT_BORDER[item.type]
            }`}
          >
            <p className="font-mono text-xs text-mist">{item.dateRange}</p>
            <h3 className="font-display text-xl font-bold text-cloud">
              {item.company}
            </h3>
            <p className="font-body text-sky">{item.role}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-cloud/90">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}
