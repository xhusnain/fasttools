import { KeywordDensityChecker } from "@/components/keyword-density-checker"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Free Keyword Density Checker | Analyze Content for SEO Online",
  description:
    "Check keyword density in your content for better SEO optimization. Analyze keyword frequency and distribution to improve search engine rankings.",
  keywords:
    "keyword density checker, keyword density analyzer, seo analysis, keyword frequency, keyword distribution, term frequency, tf analysis, keyword stuffing check, over-optimization checker, on-page seo, content optimization, readability and seo, keyword prominence, keyword proximity, keyword variations, related keywords, nlp terms, long-tail keyword density, semantic keywords, topical relevance, content audit, seo audit, content quality check, optimize content, improve rankings, serp optimization, blog seo, landing page seo, ecommerce product seo, paragraph analyzer, heading keyword check, h1 h2 keyword check, meta description keyword check, title keyword check, density percentage, ideal keyword density, natural language writing, avoid spammy content, white hat seo, content best practices, seo copywriting, editorial workflow, content checklist, content tools, free seo tools, online seo analyzer",
  openGraph: {
    title: "Free Keyword Density Checker - Analyze Content SEO",
    description: "Analyze keyword density to optimize your content for search engines",
    type: "website",
  },
}

export default function KeywordDensityCheckerPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "SEO Tools", href: "/seo-tools" },
            { label: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Keyword Density Checker</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">
              Analyze keyword density in your content to optimize for SEO and improve search engine rankings.
            </p>
          </div>

          <AdSpace slot="content" className="mb-8 h-24" />

          <KeywordDensityChecker />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Understanding Keyword Density</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Keyword density is the percentage of times a keyword appears in your content compared to the total word
              count. Optimal keyword density helps search engines understand your content without appearing spammy.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Best Practices</h3>
            <ul className="list-disc pl-6 text-muted-foreground">
              <li>Use primary keywords naturally; avoid exact-match repetition</li>
              <li>Include synonyms and related terms to improve topical coverage</li>
              <li>Place important terms in headings, early paragraphs, and image alt text</li>
              <li>Write for users first; adjust density only if it reads unnaturally</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
