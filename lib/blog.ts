import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export type BlogCategory = 'tech' | 'veteran' | 'nature'

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: BlogCategory
  excerpt: string
  tags: string[]
  readingTime: number
  published: boolean
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const slugs = readSlugs()

  const posts = slugs
    .map((slug) => {
      const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(raw)

      // TODO: validate frontmatter shape rather than trusting `as` cast
      // once the first real post is authored (TAD §6.1).
      const post = { slug, ...data } as BlogPost
      return post
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return posts
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug) ?? null
}
