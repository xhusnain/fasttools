import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Tag, User } from "lucide-react"

import { Breadcrumbs } from "@/components/common/breadcrumbs"
import {
  createBlogMetadata,
  createBlogPostSchemas,
  formatBlogDate,
  getBlogPost,
  getBlogSlugs,
  getRelatedBlogPosts,
} from "@/lib/blog"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const post = getBlogPost(slug)

  if (!post) {
    return {}
  }

  return createBlogMetadata(post)
}

export default async function BlogPostPage(props: Props) {
  const { slug } = await props.params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedBlogPosts(post)
  const schemas = createBlogPostSchemas(post)

  return (
    <div className="min-h-screen bg-background">
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main>
        <header className="border-b border-border bg-muted/20">
          <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title, href: post.canonicalPath },
              ]}
            />

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center">
              <div className="max-w-3xl space-y-5">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Blog
                </Link>

                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Tag className="h-4 w-4" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" />
                      <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readingTime.text}
                    </span>
                  </div>

                  <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
                    {post.title}
                  </h1>
                  <p className="text-lg leading-8 text-muted-foreground">
                    {post.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                  {post.updatedAt !== post.publishedAt && (
                    <span>
                      Updated <time dateTime={post.updatedAt}>{formatBlogDate(post.updatedAt)}</time>
                    </span>
                  )}
                </div>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted shadow-sm">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="min-w-0">
            <div
              className="blog-content mx-auto max-w-3xl"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {post.tags.length > 0 && (
              <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-2 border-t border-border pt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-muted px-3 py-1 text-sm font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {post.toc.length > 0 && (
              <nav className="rounded-lg border border-border bg-card p-5" aria-label="Table of contents">
                <h2 className="mb-3 text-sm font-bold uppercase text-muted-foreground">
                  Contents
                </h2>
                <ol className="space-y-2 text-sm">
                  {post.toc.map((item) => (
                    <li key={item.id} className={item.level === 3 ? "pl-4" : undefined}>
                      <a
                        href={`#${item.id}`}
                        className="block leading-6 text-muted-foreground hover:text-primary"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {relatedPosts.length > 0 && (
              <nav className="rounded-lg border border-border bg-card p-5" aria-label="Related posts">
                <h2 className="mb-4 text-sm font-bold uppercase text-muted-foreground">
                  Related
                </h2>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={relatedPost.canonicalPath}
                      className="group block"
                    >
                      <span className="block text-sm font-semibold leading-6 text-foreground group-hover:text-primary">
                        {relatedPost.title}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary">
                        Read guide
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </nav>
            )}
          </aside>
        </div>
      </main>
    </div>
  )
}
