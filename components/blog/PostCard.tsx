import Link from 'next/link'
import type { BlogPost, BlogCategory } from '@/lib/blog'

const ACCENT: Record<BlogCategory, string> = {
  tech: 'border-sky',
  veteran: 'border-patriot',
  nature: 'border-pine',
}

interface PostCardProps {
  post: BlogPost
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`block rounded-md border-t-2 bg-deep p-6 ${ACCENT[post.category]}`}
    >
      <p className="font-mono text-xs text-mist">
        {post.date} · {post.readingTime} min read
      </p>
      <h3 className="mt-1 font-display text-lg font-bold text-cloud">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-cloud/90">{post.excerpt}</p>
    </Link>
  )
}
