import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "src/content/blog")

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  image: string
  tags: string[]
  relatedServices: string[]
  content: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)

    return {
      slug: filename.replace(/\.mdx$/, ""),
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      date: data.date ?? "",
      author: data.author ?? "SnappyWorks Team",
      image: data.image ?? "",
      tags: data.tags ?? [],
      relatedServices: data.relatedServices ?? [],
      content,
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return []

  const allPosts = getAllPosts().filter((p) => p.slug !== currentSlug)

  // Sort by tag overlap
  const scored = allPosts.map((post) => {
    const tagOverlap = post.tags.filter((t) => current.tags.includes(t)).length
    const serviceOverlap = post.relatedServices.filter((s) =>
      current.relatedServices.includes(s)
    ).length
    return { post, score: tagOverlap * 2 + serviceOverlap }
  })

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => s.post)
}
