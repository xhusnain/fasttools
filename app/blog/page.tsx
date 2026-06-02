import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, CalendarDays, Clock, Tag } from "lucide-react"

import { Breadcrumbs } from "@/components/common/breadcrumbs"
import { createBlogIndexSchemas, formatBlogDate, getAllBlogPosts } from "@/lib/blog"
import { createMetadata } from "@/lib/metadata-base"

export const metadata: Metadata = createMetadata({
  title: "Blog - Practical Guides for Free Online Tools",
  description:
    "Read practical FastTools guides for online tools, privacy, SEO, calculators, converters, PDF workflows, image tools, and developer utilities.",
  path: "/blog",
  ogImage: {
    url: "/images/text-encryption-hero.png",
    width: 1200,
    height: 630,
    alt: "FastTools Blog guides and tutorials",
  },
  includeSchema: false,
})

export default function BlogPage() {
  const posts = getAllBlogPosts()
  const featuredPost = posts.find((post) => post.featured) || posts[0]
  const remainingPosts = featuredPost ? posts.filter((post) => post.slug !== featuredPost.slug) : []
  const visiblePosts = featuredPost ? [featuredPost, ...remainingPosts] : []
  const schemas = createBlogIndexSchemas(posts)

  return (
    <div className="min-h-screen bg-background">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

        <section className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <BookOpen className="h-4 w-4" />
              FastTools Resources
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                FastTools Blog
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Practical guides for browser-based tools, privacy, SEO workflows, calculators,
                converters, and developer utilities.
              </p>
            </div>
          </div>

          {featuredPost && (
            <Link
              href={featuredPost.canonicalPath}
              className="group overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {formatBlogDate(featuredPost.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {featuredPost.readingTime.text}
                  </span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-foreground group-hover:text-primary">
                  {featuredPost.title}
                </h2>
                <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )}
        </section>

        <section className="py-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Latest Guides</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Actionable tutorials for choosing, using, and comparing online tools.
              </p>
            </div>
            <span className="rounded-lg bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
              {posts.length} {posts.length === 1 ? "post" : "posts"}
            </span>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
              No blog posts are published yet.
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-colors hover:border-primary/50"
                >
                  <Link href={post.canonicalPath} className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col gap-4 p-5">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Tag className="h-3.5 w-3.5" />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readingTime.text}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold leading-snug text-foreground group-hover:text-primary">
                        <Link href={post.canonicalPath}>{post.title}</Link>
                      </h3>
                      <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-auto flex items-center justify-between gap-4 pt-2 text-sm">
                      <time dateTime={post.publishedAt} className="text-muted-foreground">
                        {formatBlogDate(post.publishedAt)}
                      </time>
                      <Link
                        href={post.canonicalPath}
                        className="inline-flex items-center gap-1 font-semibold text-primary"
                      >
                        Read
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}
