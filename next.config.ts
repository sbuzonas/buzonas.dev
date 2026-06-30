import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

// CLAUDE.md §3: Do not modify output/trailingSlash/images.unoptimized
// without explicit developer instruction.
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // remarkPlugins / rehypePlugins (e.g. rehype-pretty-code) wired here
    // once content actually requires syntax highlighting (ADR-008, TAD §6.3)
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
