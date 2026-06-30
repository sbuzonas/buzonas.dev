import Link from 'next/link'

export async function generateStaticParams() {
  return [] // No architectures at MVP — stub only (Phase 2)
}

export const dynamicParams = false

export default function ArchitectureStubPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 py-2xl text-center md:px-12">
      <h1 className="font-display text-2xl font-bold text-cloud">
        Coming Soon
      </h1>
      <p className="mt-2 text-mist">
        The reference architecture pattern library is in development.
      </p>
      <Link href="/consulting" className="mt-6 inline-block text-sky hover:underline">
        ← Back to Consulting
      </Link>
    </div>
  )
}
