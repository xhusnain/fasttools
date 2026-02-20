import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { SlugifyString } from "@/components/dev-tools/slugify-string"

const toolConfig = createToolConfig({
  toolName: "Slugify String",
  description:
    "Convert text into URL-safe slugs for routes, file names, and stable identifiers.",
  metaTitle: "Slugify String (URL Slug Generator)",
  metaDescription:
    "Generate clean URL slugs from titles and text. Useful for SEO-friendly routes and content management workflows.",
  path: "/dev-tools/slugify-string",
  keywords: [
    "slugify string",
    "url slug generator",
    "slug generator",
    "seo friendly url",
    "text to slug",
  ],

  header: {
    title: "Slugify String",
    description:
      "Turn raw text into clean, URL-safe slugs for publishing and routing workflows.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Slugify String", href: "/dev-tools/slugify-string" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Text-to-slug conversion tool for route generation, URL hygiene, and content publishing.",
    featureList: [
      "Text to URL slug conversion",
      "SEO-friendly slug output",
      "Filename-safe formatting",
      "Browser-based utility workflow",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to transform titles and phrases into normalized slugs. It helps keep URLs readable, stable, and consistent across blogs, docs, ecommerce pages, and CMS workflows.",

    howToSteps: [
      "Enter a title or phrase in the input field.",
      "Review the generated slug output.",
      "Copy the slug and use it in routes or file names.",
      "Repeat with alternate titles to choose best URL format.",
    ],

    features: [
      "Fast text-to-slug conversion",
      "URL-safe normalization",
      "Useful for route and filename naming",
      "Copy-ready slug output",
      "Browser-first workflow",
    ],

    useCases: [
      "Blog post URL generation",
      "CMS permalink standardization",
      "Product page route naming",
      "Filename normalization for exports",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Slug generator pages rank best when they solve naming consistency fast.
          This page focuses on clean conversion and quick reuse in real
          publishing workflows.
        </p>
        <p>
          It helps reduce broken links and duplicate-route mistakes by giving
          predictable slug output from source text.
        </p>
      </div>
    ),

    proTip:
      "Keep slugs short and descriptive, and avoid changing published slugs without redirects.",

    faqs: [
      {
        question: "What is a slug in a URL?",
        answer:
          "A slug is the readable final segment of a URL, typically derived from a page title.",
      },
      {
        question: "Why should I slugify titles?",
        answer:
          "It creates clean, consistent URLs that are easier for users to read and share.",
      },
      {
        question: "Can I use this for file naming too?",
        answer:
          "Yes. Slug output is also useful for safe, normalized file names.",
      },
      {
        question: "Does slugifying guarantee better rankings?",
        answer:
          "Slug quality helps URL clarity, but ranking depends on broader content and technical SEO signals.",
      },
      {
        question: "Should slugs include dates or IDs?",
        answer:
          "Only when needed for your routing strategy. Keep slugs concise and stable where possible.",
      },
    ],

    relatedTools: [
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SlugifyStringPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <SlugifyString />
        </div>
      )}
    />
  )
}
