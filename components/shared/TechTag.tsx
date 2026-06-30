interface TechTagProps {
  label: string
  size?: 'sm' | 'md'
}

export function TechTag({ label, size = 'sm' }: TechTagProps) {
  const sizeClass = size === 'md' ? 'text-sm px-3 py-1' : 'text-xs px-2 py-0.5'

  return (
    <span
      className={`inline-block rounded-sm bg-iron font-mono text-sky ${sizeClass}`}
    >
      {label}
    </span>
  )
}
