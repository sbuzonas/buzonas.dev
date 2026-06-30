'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const LINKS = [
  { href: '/#experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? 'bg-deep/95 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-12">
        <a href="/" className="font-display text-lg font-bold text-cloud">
          Steve Buzonas
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-cloud transition-colors hover:text-sky"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="text-cloud" /> : <Menu className="text-cloud" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-4 bg-deep px-6 py-6 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-base text-cloud"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      )}
    </header>
  )
}
