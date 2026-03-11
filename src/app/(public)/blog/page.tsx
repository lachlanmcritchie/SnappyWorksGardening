import type { Metadata } from "next"
import { PageHero } from "@/components/sections/page-hero"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CtaBanner } from "@/components/sections/cta-banner"
import { PostCard } from "@/components/blog/post-card"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  alternates: { canonical: "/blog" },
  description:
    "Tips, guides and advice on lawn care, gardening and outdoor maintenance in Geelong. Expert insights from the SnappyWorks team.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <PageHero
        image="https://images.unsplash.com/photo-1571455230472-034c3a71a699?w=1920&q=80"
        imageAlt="Garden care tips and guides"
        eyebrow="Blog"
        title="Tips, Guides & Advice"
        description="Expert gardening insights from the SnappyWorks team to help your Geelong garden thrive."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">
                Blog posts coming soon. Check back for gardening tips and guides.
              </p>
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
