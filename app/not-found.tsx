export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.15em] text-mist">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold text-cloud">
        Page not found
      </h1>
      <a href="/" className="mt-6 text-sky hover:underline">
        ← Back to home
      </a>
    </div>
  )
}
