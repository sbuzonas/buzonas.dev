import { SectionEyebrow } from '@/components/shared/SectionEyebrow'
import { ServiceCard } from '@/components/consulting/ServiceCard'
import { services, referenceArchitectures } from '@/data/consulting'

export const metadata = {
  title: 'Consulting',
}

export default function ConsultingPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-2xl md:px-12">
      <SectionEyebrow label="Consulting" />
      <h1 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
        FancyGuy Technologies
      </h1>
      <p className="mt-2 font-body text-sky">
        Steve Buzonas, Principal Consultant
      </p>
      <p className="mt-6 max-w-72ch text-base text-cloud/90">
        TODO — practice overview: what FancyGuy Technologies does and who it
        serves (PRD §3.4).
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      {referenceArchitectures.length === 0 && (
        <p className="mt-16 font-mono text-sm italic text-mist">
          Reference architecture pattern library — coming soon (Phase 2).
        </p>
      )}
    </div>
  )
}
