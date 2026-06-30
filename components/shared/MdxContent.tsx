interface MdxContentProps {
  content: React.ComponentType
  className?: string
}

export function MdxContent({ content: Content, className = '' }: MdxContentProps) {
  return (
    <div
      className={`prose prose-invert prose-headings:font-display prose-a:text-sky max-w-72ch ${className}`}
    >
      <Content />
    </div>
  )
}
