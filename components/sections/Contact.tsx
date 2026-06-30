import { SectionEyebrow } from '@/components/shared/SectionEyebrow'

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1280px] px-6 py-2xl text-center md:px-12"
    >
      <SectionEyebrow label="Contact" />
      <h2 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
        Let&apos;s Connect
      </h2>
      <p className="mt-2 font-mono text-sm text-mist">Pulaski, PA</p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:sbuzonas@icloud.com"
          className="rounded-md border border-sky px-6 py-3 text-sm text-sky"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/sbuzonas"
          className="rounded-md border border-sky px-6 py-3 text-sm text-sky"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sbuzonas"
          className="rounded-md border border-sky px-6 py-3 text-sm text-sky"
        >
          GitHub
        </a>
        <a
          href="/resume/steve-buzonas-resume.pdf"
          className="rounded-md bg-sky px-6 py-3 text-sm font-medium text-void"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
