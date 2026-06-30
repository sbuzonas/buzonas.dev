export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-iron px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 text-sm text-mist md:flex-row">
        <p>
          © {year} Steve Buzonas · FancyGuy Technologies LLC
        </p>
        <div className="flex gap-6">
          <a href="https://linkedin.com/in/sbuzonas" className="hover:text-sky">
            LinkedIn
          </a>
          <a href="https://github.com/sbuzonas" className="hover:text-sky">
            GitHub
          </a>
          <a href="mailto:sbuzonas@icloud.com" className="hover:text-sky">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
