import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { SlugifyString } from "@/components/dev-tools/slugify-string"

const toolConfig = createToolConfig({
  toolName: "Slugify String",
  description:
    "Convert text into URL-safe slugs for routes, file names, and stable identifiers.",
  metaTitle: "URL Slug Generator — Slugify Text to SEO-Friendly URLs Free (2026)",
  metaDescription:
    "Free URL slug generator. Convert text and titles into clean, SEO-friendly URL slugs. Lowercase, remove special characters, replace spaces with hyphens. Used by WordPress and Next.js.",
  path: "/dev-tools/slugify-string",

  header: {
    title: "URL Slug Generator (Slugify Text)",
    description:
      "Convert text and titles into clean, SEO-friendly URL slugs. Lowercases text, removes special characters, replaces spaces with hyphens, and strips accents. Copy the slug with one click.",
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
    definition:
      "A String Slugify Tool is a free tool that converts text into URL-friendly slugs by lowercasing, removing special characters, and replacing spaces with hyphens.",
    quickAnswer:
      "Paste any text to instantly generate a clean, URL-safe slug. The tool lowercases everything, strips special characters, and replaces spaces with hyphens. Copy the slug with one click.",
    keyTakeaways: [
      "Converts text to lowercase URL-safe slugs automatically",
      "Replaces spaces and special characters with hyphens",
      "Removes accents and diacritics (é → e, ü → u)",
      "Generates SEO-friendly URLs for blog posts and pages",
      "Follows the same slugification rules used by WordPress and Next.js",
    ],
    overview:
      "Generate clean, SEO-friendly URL slugs from any text with this free online slug generator. Enter a page title, blog post headline, or product name and instantly get a URL-safe slug — lowercase, special characters removed, spaces replaced with hyphens, and accents stripped (é→e, ü→u). Follows the same slugification rules used by WordPress, Next.js, and other popular CMS platforms. Useful for creating blog post URLs, product page routes, documentation paths, and file names.",

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
