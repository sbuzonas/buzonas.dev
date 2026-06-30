import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-display text-3xl font-bold text-cloud">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-display text-2xl font-bold text-cloud">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-display text-xl font-bold text-cloud">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="font-body text-base leading-relaxed text-cloud/90">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-sky underline-offset-2 hover:underline">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="rounded-sm bg-iron px-1.5 py-0.5 font-mono text-sm text-sky">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="overflow-x-auto rounded-md bg-deep p-4 font-mono text-sm">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-sky pl-4 italic text-mist">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc space-y-1 pl-5 text-cloud/90">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal space-y-1 pl-5 text-cloud/90">{children}</ol>
    ),
    ...components,
  }
}
