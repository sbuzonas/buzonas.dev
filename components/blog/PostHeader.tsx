import { TechTag } from '@/components/shared/TechTag'
import type { BlogCategory } from '@/lib/blog'

interface PostHeaderProps {
  title: string
  date: string
  category: BlogCategory
  tags: string[]
  readingTime: number
}

export function PostHeader({ title, date, tags, readingTime }: PostHeaderProps) {
  return (
    <header className="mb-10">
      <p className="font-mono text-xs text-mist">
        {date} · {readingTime} min read
      </p>
      <h1 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
        {title}
      </h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TechTag key={tag} label={tag} />
        ))}
      </div>
    </header>
  )
}
