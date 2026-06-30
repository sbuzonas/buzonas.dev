interface SectionEyebrowProps {
  label: string
  className?: string
}

export function SectionEyebrow({ label, className = '' }: SectionEyebrowProps) {
  return (
    <p
      className={`font-mono text-sm uppercase tracking-[0.15em] text-mist ${className}`}
    >
      {label}
    </p>
  )
}
