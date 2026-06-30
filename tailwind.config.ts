import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        void: 'var(--color-void)',
        deep: 'var(--color-deep)',
        steel: 'var(--color-steel)',
        sky: 'var(--color-sky)',
        glacier: 'var(--color-glacier)',
        mist: 'var(--color-mist)',
        patriot: 'var(--color-patriot)',
        iron: 'var(--color-iron)',
        pine: 'var(--color-pine)',
        cloud: 'var(--color-cloud)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        full: '9999px',
      },
      spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '6rem',
        '2xl': '10rem',
      },
    },
  },
  plugins: [typography],
}

export default config
