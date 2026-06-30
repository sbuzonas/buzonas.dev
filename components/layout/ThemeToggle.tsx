'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

type Theme = 'dark' | 'light'

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const current = document.documentElement.classList.contains('light')
      ? 'light'
      : 'dark'
    setTheme(current)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.remove('dark', 'light')
    document.documentElement.classList.add(next)
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="rounded-full p-2 text-mist transition-colors hover:text-sky"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
