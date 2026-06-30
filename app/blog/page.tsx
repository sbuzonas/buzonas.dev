import { SectionEyebrow } from '@/components/shared/SectionEyebrow'
import { PostGrid } from '@/components/blog/PostGrid'
import { getBlogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="mx-auto max-w-[1280px] px-6 py-2xl md:px-12">
      <SectionEyebrow label="Blog" />
      <h1 className="mt-2 font-display text-[clamp(1.75rem,3.5vw,3rem)] font-bold text-cloud">
        Writing
      </h1>
      <div className="mt-12">
        <PostGrid posts={posts} />
      </div>
    </div>
  )
}
