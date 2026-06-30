import { SectionEyebrow } from '@/components/shared/SectionEyebrow'

export function Land() {
  return (
    <section
      id="land"
      className="relative mx-auto max-w-[1280px] px-6 py-2xl md:px-12"
    >
      <SectionEyebrow label="Land & Conservation" />
      <h2 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
        Appalachian Stewardship
      </h2>

      {/* Illustrated placeholder per PRD §3.7 — real photography deferred to Phase 2 */}
      <div
        className="mt-8 h-64 rounded-lg"
        style={{ background: 'linear-gradient(180deg, var(--color-pine) 0%, var(--color-deep) 100%)' }}
        aria-hidden="true"
      />

      <p className="mt-8 max-w-72ch text-base leading-relaxed text-cloud/90">
        TODO — personal, warm narrative about the property and land stewardship
        in Pennsylvania. This is the one section where full warmth is appropriate
        (brand guide — Voice &amp; Tone).
      </p>
    </section>
  )
}
