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
    "Analyze keyword frequency and phrase distribution to review on-page relevance and reduce over-optimization risk.",
  metaTitle: "Keyword Density Checker (Words, Phrases, Frequency)",
  metaDescription:
    "Check keyword frequency and density for 1-word, 2-word, and 3-word phrases. Review overuse patterns and improve on-page content balance.",
  path: "/seo-tools/keyword-density",
  keywords: [
    "keyword density checker",
    "keyword frequency",
    "keyword stuffing checker",
    "on-page seo checker",
    "phrase density",
    "content optimization",
  ],

  header: {
    title: "Keyword Density Checker",
    description:
      "Measure keyword and phrase frequency to optimize content without overstuffing.",
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
      "Analyze keyword density and phrase frequency in content and URLs.",
    alternateName: ["Keyword Frequency Checker", "Keyword Stuffing Checker"],
    featureList: [
      "Unigram, bigram, trigram analysis",
      "Density percentage calculations",
      "Overuse pattern visibility",
      "Text and URL analysis",
      "No signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Keyword Density Checker is a free tool that analyzes text to calculate how frequently specific keywords and phrases appear as a percentage of total word count.",
    quickAnswer:
      "Paste your content to see keyword frequency and density percentages for single words, two-word phrases, and three-word phrases. Aim for 1-2% density for target keywords. Identifies over-optimized and under-used terms.",
    keyTakeaways: [
      "Calculates keyword density as a percentage of total word count",
      "Analyzes 1-word, 2-word, and 3-word phrase frequencies",
      "Recommended keyword density: 1-2% for primary keywords",
      "Over 3% density may trigger search engine keyword stuffing penalties",
      "Useful for on-page SEO optimization and content auditing",
    ],
    overview:
      "This checker helps you understand how often keywords and phrases appear in content. Use it to review primary-topic focus, identify repetitive wording, and refine copy so it reads naturally while still signaling relevance.",

    howToSteps: [
      "Paste your content or analyze a live URL.",
      "Run analysis to view single-word and phrase-level frequency.",
      "Review the highest-density terms and repeated n-grams.",
      "Revise wording where repetition is excessive and rerun analysis.",
    ],

    features: [
      "1-word, 2-word, and 3-word phrase analysis",
      "Density percentages with counts",
      "Support for large article drafts",
      "Keyword overuse visibility",
      "Quick re-check workflow after edits",
    ],

    useCases: [
      "On-page SEO review before publishing",
      "Content refreshes for older articles",
      "Competitor-page phrase pattern checks",
      "Preventing repetitive anchor-topic language",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Keyword density is a directional signal, not a hard ranking formula.
          The goal is topical clarity with natural language, not forcing exact
          percentages.
        </p>
        <p>
          Phrase-level checks are especially useful because over-optimization
          often happens through repeated two-word or three-word patterns, not
          just single words.
        </p>
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
        question: "Why check 2-word and 3-word phrases?",
        answer:
          "Because repetitive phrase patterns are a common source of keyword stuffing and low-quality signals in modern content audits.",
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
