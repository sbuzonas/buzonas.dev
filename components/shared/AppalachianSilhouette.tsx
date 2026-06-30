interface AppalachianSilhouetteProps {
  className?: string
}

/**
 * MVP placeholder per ADR-010: CSS approximation of a treeline ridge.
 * Replace internal implementation with inline SVG once brand assets are
 * finalized (Canva Pro export or hand-authored). The component interface
 * does not change — consumers are unaffected by the swap.
 */
export function AppalachianSilhouette({ className = '' }: AppalachianSilhouetteProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-pine ${className}`}
      style={{
        clipPath:
          'polygon(0% 100%, 0% 60%, 8% 80%, 15% 40%, 22% 75%, 30% 50%, 38% 85%, 46% 55%, 54% 90%, 62% 45%, 70% 80%, 78% 50%, 86% 85%, 94% 60%, 100% 90%, 100% 100%)',
      }}
    />
  )
}
