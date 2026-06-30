import type { ReferenceArchitecture } from '@/data/consulting'

interface ArchitectureCardProps {
  architecture: ReferenceArchitecture
}

export function ArchitectureCard({ architecture }: ArchitectureCardProps) {
  return (
    <a
      href={`/consulting/architectures/${architecture.slug}`}
      className="block rounded-md border border-iron bg-deep p-6 italic text-mist"
    >
      <h3 className="font-display text-lg font-bold text-cloud">
        {architecture.title}
      </h3>
      <p className="mt-2 text-sm">{architecture.description}</p>
      <span className="mt-3 inline-block font-mono text-xs uppercase tracking-[0.1em]">
        Coming Soon
      </span>
    </a>
  )
}
