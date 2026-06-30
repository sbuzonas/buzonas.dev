import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono, Inter } from 'next/font/google'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import './globals.css'
import '@/styles/print.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://buzonas.dev'),
  title: {
    default: 'Steve Buzonas — Senior Engineering Leader & Cloud Architect',
    template: '%s | Steve Buzonas',
  },
  description:
    'Senior Engineering Leader & Cloud Architect — 20+ years of cloud architecture, platform engineering, veteran service, and Appalachian land stewardship.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buzonas.dev',
    siteName: 'Steve Buzonas',
    images: [{ url: '/images/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Steve Buzonas',
  url: 'https://buzonas.dev',
  jobTitle: 'Senior Engineering Leader',
  sameAs: ['https://linkedin.com/in/sbuzonas', 'https://github.com/sbuzonas'],
}

// FOUC prevention — must run before paint, before hydration (TAD §7.2)
const themeInitScript = `
(function() {
  try {
    const theme = localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
          // Hydration mismatch is expected with FOUC pattern
          suppressHydrationWarning={true}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${inter.variable} ${jetbrains.variable} font-body antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
