import { PostCard } from './PostCard'
import { EmptyBlog } from './EmptyBlog'
import type { BlogPost } from '@/lib/blog'

interface PostGridProps {
  posts: BlogPost[]
}

export function PostGrid({ posts }: PostGridProps) {
  if (posts.length === 0) {
    return <EmptyBlog />
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
