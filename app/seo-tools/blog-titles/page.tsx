import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const BlogTitleGenerator = dynamic(
  () => import("@/components/ai/blog-title-generator").then((mod) => mod.BlogTitleGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Blog Title Generator",
  description:
    "Generate headline ideas for articles, landing pages, and campaigns with intent-focused wording and SEO-friendly structure.",
  metaTitle: "Blog Title Generator for SEO Headlines",
  metaDescription:
    "Create blog title ideas with different headline formats and tones. Improve topic clarity, click intent, and editorial planning speed.",
  path: "/seo-tools/blog-titles",
  keywords: [
    "blog title generator",
    "headline generator",
    "seo title ideas",
    "content title ideas",
    "article title generator",
    "headline ideas",
  ],

  header: {
    title: "Blog Title Generator",
    description:
      "Create headline options quickly for search-focused and audience-focused content.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Blog Title Generator", href: "/seo-tools/blog-titles" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate blog and article title ideas for SEO and editorial workflows.",
    alternateName: ["Headline Generator", "SEO Title Generator"],
    featureList: [
      "Multiple headline patterns",
      "Intent-aware title ideas",
      "Editorial brainstorming support",
      "Fast iteration",
      "No signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Blog Title Generator is a free tool that creates click-worthy headline ideas for blog posts, articles, and content marketing based on your topic or keyword.",
    quickAnswer:
      "Enter your topic or main keyword and select a content type (how-to, listicle, guide, etc.). Get dozens of headline ideas instantly. Filter by style, word count, and emotional appeal. Copy the titles you like.",
    keyTakeaways: [
      "Generates headline ideas based on topic and content type",
      "Supports formats: how-to, listicle, question, comparison, and guide",
      "Effective titles are 6-13 words and under 60 characters for SEO",
      "Numbers in titles increase click-through rates by up to 36%",
      "Power words (free, ultimate, proven) boost engagement",
    ],
    overview:
      "This tool helps content teams generate stronger title options for blog posts and landing pages. It supports quick ideation across different headline styles so you can test clarity, intent alignment, and audience appeal before publishing.",

    howToSteps: [
      "Enter the topic, keyword, or audience angle you want to target.",
      "Generate title options in multiple formats.",
      "Shortlist options based on clarity and search intent.",
      "Use the selected title in your draft and test performance over time.",
    ],

    features: [
      "Multiple headline structures (how-to, list, question, comparison)",
      "Rapid ideation for editorial planning",
      "SEO-friendly wording support",
      "Useful for blog, email, and social headline drafts",
      "Repeatable generation for A/B title testing",
    ],

    useCases: [
      "Editorial calendar planning",
      "Refreshing underperforming blog titles",
      "Testing topic framing before writing long-form content",
      "Generating title variants for outreach and social posts",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Strong titles combine clear topic signals with compelling phrasing. In
          practice, teams usually evaluate several options before finding the
          best fit for both search intent and audience expectations.
        </p>
        <p>
          This generator is designed for that iterative workflow: generate,
          compare, refine, and publish with better confidence.
        </p>
      </div>
    ),

    proTip:
      "Generate 5-10 options, then pick the one that best matches user intent and the real promise of your content.",

    faqs: [
      {
        question: "What makes a good SEO blog title?",
        answer:
          "A good title is clear, specific, and aligned with search intent. It should accurately describe the page while remaining compelling to click.",
      },
      {
        question: "Should I include my target keyword in the title?",
        answer:
          "Usually yes, especially for primary-topic pages. Include it naturally and avoid awkward phrasing or obvious keyword stuffing.",
      },
      {
        question: "How many title options should I test?",
        answer:
          "Start with a short set (for example 5-10 options), then narrow to 1-2 strong candidates for publication and performance comparison.",
      },
      {
        question: "Can this help with click-through rate?",
        answer:
          "It can improve your starting options. Final CTR gains depend on title quality, ranking position, snippet context, and intent match.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. You can generate title ideas for free with no signup.",
      },
    ],

    additionalContent: [
      {
        heading: "Editorial Workflow Tip",
        content:
          "Use generated headlines at the outline stage, not just after writing. Early title testing helps shape stronger structure and intent alignment from the start.",
      },
      {
        heading: "Performance Review Loop",
        content:
          "After publishing, monitor impressions and CTR in Search Console. If a page underperforms, test a clearer title variant before rewriting the full article.",
      },
    ],

    relatedTools: [
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Open Graph Meta Tag Generator", href: "/seo-tools/meta-tags" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function BlogTitleGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<BlogTitleGenerator />)} />
}
