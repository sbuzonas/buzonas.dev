import type { ServiceOffering } from '@/data/consulting'

interface ServiceCardProps {
  service: ServiceOffering
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="rounded-md bg-deep p-6">
      <h2 className="font-display text-lg font-bold text-cloud">
        {service.title}
      </h2>
      <p className="mt-2 text-sm text-cloud/90">{service.description}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-mist">
        {service.capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>
    </div>
  )
}
