import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarIcon, UserIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog"
import { SERVICES, SITE_URL } from "@/lib/constants"
import { mdxComponents } from "@/components/blog/mdx-components"
import { PostCard } from "@/components/blog/post-card"
import { LinkButton } from "@/components/ui/link-button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBanner } from "@/components/sections/cta-banner"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} | SnappyWorks Gardening`,
      description: post.excerpt,
      type: "article",
      url: `${SITE_URL}/blog/${slug}`,
      images: [{ url: post.image, width: 800, height: 450, alt: post.title }],
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(slug, 3)
  const relatedServices = SERVICES.filter((s) =>
    post.relatedServices.includes(s.slug)
  )

  const formattedDate = new Date(post.date).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "SnappyWorks Gardening",
      url: SITE_URL,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: post.title, href: `/blog/${slug}` },
        ]}
      />

      {/* Hero Image */}
      <section className="relative">
        <div className="relative aspect-[16/9] max-h-[400px] w-full overflow-hidden sm:aspect-[21/9]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeftIcon className="size-3.5" />
            Back to Blog
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <UserIcon className="size-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="size-4" />
              {formattedDate}
            </span>
          </div>

          {/* Body */}
          <div className="mt-10">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
              <h3 className="font-semibold text-foreground">Related Services</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((service) => {
                  const Icon = service.icon
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/30"
                    >
                      <Icon className="size-4 text-primary" />
                      {service.title}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground">
              More From the Blog
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <LinkButton href="/blog" variant="outline">
                View All Posts
                <ArrowRightIcon className="ml-1 size-4" />
              </LinkButton>
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  )
}
