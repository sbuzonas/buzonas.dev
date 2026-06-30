export function AuthorBlock() {
  return (
    <div className="mt-16 flex items-center gap-4 border-t border-iron pt-8">
      <div className="h-12 w-12 rounded-full bg-iron" aria-hidden="true" />
      <div>
        <p className="font-body text-cloud">Steve Buzonas</p>
        <p className="text-sm text-mist">
          Senior Engineering Leader & Cloud Architect ·{' '}
          <a href="https://linkedin.com/in/sbuzonas" className="text-sky hover:underline">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  )
}
