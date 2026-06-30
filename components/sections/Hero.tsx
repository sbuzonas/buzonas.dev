import { HexLattice } from '@/components/shared/HexLattice'
import { HexGrid } from '@/components/shared/HexGrid'
import { AppalachianSilhouette } from '@/components/shared/AppalachianSilhouette'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      <HexLattice />
      <HexGrid />

      <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center hero-fade">
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-wide text-cloud hero-rise">
          Steve Buzonas
        </h1>
        <p className="font-body text-lg text-sky">
          Senior Engineering Leader // Cloud Architect
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#experience"
            className="rounded-md bg-sky px-6 py-3 font-body text-sm font-medium text-void transition-transform hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="/resume/steve-buzonas-resume.pdf"
            className="rounded-md border border-sky px-6 py-3 font-body text-sm font-medium text-sky transition-transform hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </div>
      </div>

      <AppalachianSilhouette />
    </section>
  )
}
