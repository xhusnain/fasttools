import { BlogTitleGenerator } from "@/components/blog-title-generator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Blog Title Generator | Create Catchy Headlines Online",
  description:
    "Generate SEO-friendly blog titles and headlines that attract readers. Create engaging titles for your blog posts, articles, and content marketing.",
  keywords:
    "blog title generator, headline generator, seo titles, catchy headlines, content marketing, blog headline ideas, title ideas, blog topic ideas, click-worthy titles, title analyzer, headline formulas, emotional headline, power words, curiosity headlines, listicle titles, how-to titles, question headlines, seo headline generator, seo title ideas, blog post title ideas, article title generator, content headline generator, viral titles, ctr optimization, improve click-through rate, meta title ideas, page title generator, youtube title inspiration, newsletter subject lines, a/b test titles, title character counter, serp title preview, blog naming ideas, brand voice titles, tone of voice headlines, engaging headlines, title hooks, reader intent titles, long-tail keyword in title, keyword in title, write better titles, content marketing tools, copywriting helper, conversion copy, web content titles, marketing blog titles, startup blog titles, tech blog titles, lifestyle blog titles, travel blog titles, finance blog titles, health blog titles",
  openGraph: {
    title: "Free Blog Title Generator - Create Catchy Headlines",
    description: "Generate engaging blog titles that improve click-through rates",
    type: "website",
  },
}

export default function BlogTitleGeneratorPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "SEO Tools", href: "/seo-tools" },
            { label: "Blog Title Generator", href: "/seo-tools/blog-titles" },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Blog Title Generator</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Generate catchy, SEO-friendly blog titles that attract readers and improve click-through rates.
            </p>
          </div>

          <AdSpace slot="content" className="mb-8 h-24" />

          <BlogTitleGenerator />

          {/* Center Content Ad */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24" />
          </div>

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Tips for Great Blog Titles</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Strong titles balance clarity, curiosity, and keyword relevance. Use action verbs, front-load your primary
              keyword, and keep titles under 60 characters where possible to avoid SERP truncation.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Match search intent (informational, transactional, navigational)</li>
              <li>Use numbers and brackets to increase CTR when appropriate</li>
              <li>Test multiple variants with A/B testing when you can</li>
              <li>Avoid clickbait—deliver on the promise in your content</li>
            </ul>
          </div>

          {/* Bottom Content Ad */}
          <div className="mt-8">
            <AdSpace slot="content" className="w-full h-24" />
          </div>
        </div>
      </div>
    </div>
  )
}
