import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const KeywordDensityChecker = dynamic(
  () => import("@/components/dev-tools/keyword-density-checker").then((mod) => mod.KeywordDensityChecker),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Keyword Density Checker",
  description:
    "Analyze top repeated words and density percentages to review on-page relevance and spot repetitive SEO copy.",
  metaTitle: "Keyword Density Checker — Top Word Frequency & SEO Content Audit",
  metaDescription:
    "Free keyword density checker. Paste text to find the top 10 repeated words, word count, usage count, and density percentage. Useful for SEO copy audits. No signup.",
  path: "/seo-tools/keyword-density",

  header: {
    title: "Keyword Density Checker",
    description:
      "Paste article, landing page, or product copy to see the most repeated words and their density percentages before publishing.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Analyze keyword density and top repeated word frequency in pasted content.",
    alternateName: [
      "Keyword Frequency Checker",
      "Keyword Stuffing Detector",
      "Word Frequency Checker",
      "Content Keyword Analyzer",
      "On-Page SEO Density Tool",
      "Article Keyword Analyzer",
      "Content Optimization Tool",
    ],
    featureList: [
      "Paste text and calculate total word count",
      "Shows top 10 repeated words longer than 3 characters",
      "Displays count and density percentage for each returned word",
      "Fast draft audit for articles, landing pages, and product copy",
      "Iterative re-check workflow for rewritten content",
      "No signup or account required",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Keyword Density Checker calculates how often words appear in text as a percentage of total word count.",
    quickAnswer:
      "Paste your content and run the analysis to see the top 10 repeated words, each word's count, and its density percentage. Use the results to spot repetition before publishing.",
    keyTakeaways: [
      "Calculates keyword density as a percentage of total word count",
      "Returns the top 10 repeated words longer than 3 characters",
      "Best used as a repetition diagnostic, not a ranking formula",
      "Very high density can indicate unnatural copy or accidental repetition",
      "Useful for draft review, content refreshes, and SEO copy QA",
    ],
    overview:
      "This free keyword density checker analyzes pasted content and ranks the most repeated words by count and percentage. It helps writers, editors, and SEO teams catch copy that repeats the same term too often, verify that the main topic is visible in the draft, and review older pages before a content refresh. The tool focuses on single words longer than three characters and returns the top 10 results, so it is best for a quick first-pass audit rather than a full semantic SEO platform.",

    howToSteps: [
      "Paste your article text, blog post content, landing page copy, or product description into the input.",
      "Click Analyze Keyword Density to calculate total words and top repeated terms.",
      "Review each returned word's count and density percentage.",
      "If one term dominates unnaturally, revise the copy with clearer phrasing, examples, and related subtopics.",
      "Run the checker again after editing to confirm the draft reads more naturally.",
    ],

    features: [
      "Single-word frequency analysis with count and density percentage",
      "Top 10 repeated terms longer than three characters",
      "Keyword density percentage calculation as (keyword count / total words) x 100",
      "Iterative re-check workflow — edit content and reanalyze instantly without reloading the page",
      "Plain text paste workflow for drafts and copied page text",
      "No registration required",
    ],

    useCases: [
      "Pre-publish SEO review to catch repeated words before a page goes live",
      "Content refresh audits for older articles with stiff or over-optimized wording",
      "Landing page copy QA before ads or organic campaigns",
      "Product and category description review for repetitive terms",
      "Comparing pasted drafts manually when multiple pages target similar topics",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Keyword Density: The Math + The Reality</h3>
          <p>
            Keyword density is calculated as <code>(keyword occurrences / total words) x 100</code>, expressed as a percentage. If &quot;marketing&quot; appears 15 times in a 1,000-word draft, density is 1.5%. Density is a diagnostic indicator, not a ranking formula. It still matters because repetition is one of the fastest ways to spot copy that sounds forced, thin, or narrowly optimized.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Very high density</strong> can point to keyword stuffing or repetitive phrasing.</li>
            <li><strong>Unexpected top words</strong> can reveal that the draft is about a different topic than intended.</li>
            <li><strong>Repeated product or location terms</strong> can make service pages sound unnatural.</li>
            <li><strong>Before-and-after checks</strong> help verify that a rewrite actually reduced repetition.</li>
            <li><strong>Manual competitor review</strong> is easier when you compare visible term emphasis across drafts.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How to Interpret Density</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Content type</th>
                <th className="text-left py-2 px-2 text-foreground">What to watch</th>
                <th className="text-left py-2 px-2 text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2"><strong>Blog post</strong></td><td className="py-2 px-2">Topic words should appear naturally, not in every sentence.</td><td className="py-2 px-2">Add examples and subtopics instead of repeating the same phrase.</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Product page</td><td className="py-2 px-2">Product names may be high, but modifiers should vary.</td><td className="py-2 px-2">Use specifications, benefits, use cases, and comparison language.</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Service page</td><td className="py-2 px-2">Service and location terms can become repetitive.</td><td className="py-2 px-2">Mention process, eligibility, pricing factors, and FAQs.</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Category page</td><td className="py-2 px-2">Repeated category terms are common in navigation copy.</td><td className="py-2 px-2">Review visible body copy separately from product names.</td></tr>
              <tr><td className="py-2 px-2">AI-assisted draft</td><td className="py-2 px-2">Watch for repeated transition words and generic adjectives.</td><td className="py-2 px-2">Rewrite with first-hand details and specific examples.</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Checker Counts</h3>
          <p>
            The current checker extracts words from pasted text, lowercases them, ignores words of three characters or fewer, and returns the 10 most frequent remaining words. It does not fetch URLs, export CSV, generate a word cloud, or calculate phrase-level bigrams and trigrams. For phrase repetition, paste the exact phrase into your editor search or compare sections manually after the single-word scan.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Density vs Semantic Coverage</h3>
          <p>
            A density report is only a starting point. Strong SEO content answers the query, covers the important entities and subtopics, uses original examples, and explains the decision points a user came to solve. If a page repeats one keyword but misses pricing, steps, caveats, examples, or comparisons, lowering density alone will not make it useful.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Practical Content Workflow</h3>
          <ol className="list-decimal pl-6 space-y-1">
            <li><strong>Write naturally first.</strong> Don&apos;t check density mid-draft — write for the reader.</li>
            <li><strong>Audit with this tool.</strong> Check which words dominate the draft.</li>
            <li><strong>If one word is too high:</strong> replace duplicates with clearer variants, pronouns, examples, or related subtopics.</li>
            <li><strong>If your intended topic is absent:</strong> review the title, introduction, headings, and conclusion for clarity.</li>
            <li><strong>Compare manually:</strong> paste competing drafts or page sections one at a time and note how their top words differ.</li>
            <li><strong>Rewrite for usefulness:</strong> add specific examples, edge cases, and answers rather than trying to hit a fixed percentage.</li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Short Words and Stop Words</h3>
          <p>
            This tool filters out words shorter than four characters. That removes many common words such as &quot;the,&quot; &quot;and,&quot; and &quot;to,&quot; but it is not a full linguistic stop-word system. Some common longer words can still appear in the results, so use editorial judgment when deciding what to rewrite.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use density output to spot repetitive phrases, then replace duplicates with clearer variants and supporting subtopics.",

    faqs: [
      {
        question: "What is keyword density?",
        answer:
          "Keyword density is the ratio of term frequency to total words in a document. It helps identify whether a term is underused or repeated too heavily.",
      },
      {
        question: "Is there a perfect keyword density percentage?",
        answer:
          "No universal number exists. Treat density as a diagnostic indicator and prioritize readability, intent match, and topic coverage.",
      },
      {
        question: "Does this tool check 2-word and 3-word phrases?",
        answer:
          "No. This page currently checks single-word frequency only. It is useful for a fast repetition scan, while phrase-level analysis still requires manual review or a dedicated n-gram tool.",
      },
      {
        question: "Can I use this for competitor analysis?",
        answer:
          "Yes. Compare phrase emphasis and topic language in top-ranking pages to identify missed subtopics or overuse in your own drafts.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. It is free and available without signup.",
      },
    ],

    additionalContent: [
      {
        heading: "How to Use Density Data Correctly",
        content:
          "Combine density checks with intent coverage and structure quality. A balanced article usually includes variations, examples, and related entities rather than repeating one phrase.",
      },
      {
        heading: "When to Re-check Content",
        content:
          "Run another scan after major edits, title changes, or section rewrites to ensure the final draft still has strong topical balance.",
      },
    ],

    relatedTools: [
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Open Graph Meta Tag Generator", href: "/seo-tools/meta-tags" },
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function KeywordDensityCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<KeywordDensityChecker />)} />
}
