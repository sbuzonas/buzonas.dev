interface HexGridProps {
  className?: string
  opacity?: number
}

/**
 * MVP placeholder per ADR-010. Smaller bookend accent to HexLattice;
 * replace with inline SVG once brand assets are finalized.
 */
export function HexGrid({ className = '', opacity = 0.08 }: HexGridProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 top-0 h-40 w-40 ${className}`}
      style={{
        opacity,
        backgroundImage:
          'repeating-linear-gradient(60deg, var(--color-glacier) 0, var(--color-glacier) 1px, transparent 1px, transparent 18px), repeating-linear-gradient(-60deg, var(--color-glacier) 0, var(--color-glacier) 1px, transparent 1px, transparent 18px)',
      }}
    />
  )
}
