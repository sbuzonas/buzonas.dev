import { notFound } from 'next/navigation'
import { MdxContent } from '@/components/shared/MdxContent'
import { PostHeader } from '@/components/blog/PostHeader'
import { AuthorBlock } from '@/components/blog/AuthorBlock'
import { getBlogPosts, getBlogPost } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
  // Returns [] at MVP — no posts yet (component-inventory §1.7)
}

export const dynamicParams = false

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const mod = await import(`@/content/blog/${slug}.mdx`)
  const Content = mod.default

  return (
    <article className="mx-auto max-w-[1280px] px-6 py-2xl md:px-12">
      <PostHeader
        title={post.title}
        date={post.date}
        category={post.category}
        tags={post.tags}
        readingTime={post.readingTime}
      />
      <MdxContent content={Content} />
      <AuthorBlock />
    </article>
  )
}
