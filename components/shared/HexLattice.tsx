interface HexLatticeProps {
  className?: string
  opacity?: number
}

/**
 * MVP placeholder per ADR-010. Outline-only hex lattice; replace with
 * inline SVG hexagonal pattern once brand assets are finalized.
 */
export function HexLattice({ className = '', opacity = 0.1 }: HexLatticeProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 top-0 h-64 w-64 ${className}`}
      style={{
        opacity,
        backgroundImage:
          'repeating-linear-gradient(60deg, var(--color-sky) 0, var(--color-sky) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(-60deg, var(--color-sky) 0, var(--color-sky) 1px, transparent 1px, transparent 24px)',
      }}
    />
  )
}
