import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, CalendarDays, Clock } from "lucide-react"

import { formatBlogDate, getBlogPost } from "@/lib/blog"

const FEATURED_INSIGHT_SLUG = "how-to-hide-text-in-an-image-online"

export function HomeLatestInsight() {
  const post = getBlogPost(FEATURED_INSIGHT_SLUG)

  if (!post) {
    return null
  }

  return (
    <section className="relative z-10 border-y border-border/30 bg-background px-4 py-14 sm:py-16 md:py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
              <BookOpen className="h-4 w-4" />
              Latest Insight
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Practical guides for using FastTools better
              </h2>
              <p className="text-base leading-7 text-muted-foreground md:text-lg">
                Fresh workflow notes, format guidance, privacy tips, and tool explainers from the FastTools team.
              </p>
            </div>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View all insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <Link
          href={post.canonicalPath}
          className="group grid overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-colors hover:border-primary/35 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)]"
        >
          <div className="relative min-h-[240px] border-b border-border bg-muted md:min-h-full md:border-b-0 md:border-r">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex min-h-[280px] flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                <span className="rounded-md border border-primary/15 bg-primary/10 px-2.5 py-1 text-primary">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {formatBlogDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime.text}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
                  {post.title}
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Read guide
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
