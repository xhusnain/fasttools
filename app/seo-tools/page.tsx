import type { Metadata } from "next"
import { GToolCard } from "@/ui/gtool-card"

import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { Code, FileText, Hash, Lightbulb, Search } from "lucide-react"

const tools = [
  {
    title: "Open Graph Meta Generator",
    description:
      "Generate Open Graph and Twitter card tags with live-friendly formatting.",
    icon: Code,
    href: "/seo-tools/meta-tags",
  },
  {
    title: "Text Similarity Checker",
    description:
      "Compare two texts and get similarity score with fingerprint-based analysis.",
    icon: Hash,
    href: "/seo-tools/text-similarity-checker",
  },
  {
    title: "Lorem Ipsum Generator",
    description:
      "Create placeholder paragraphs, sentences, or words for mockups and layouts.",
    icon: FileText,
    href: "/seo-tools/lorem-ipsum",
  },
  {
    title: "Blog Title Generator",
    description:
      "Generate headline ideas optimized for readability and search intent.",
    icon: Lightbulb,
    href: "/seo-tools/blog-titles",
  },
  {
    title: "Keyword Density Checker",
    description:
      "Analyze keyword frequency and phrase distribution for on-page content review.",
    icon: Search,
    href: "/seo-tools/keyword-density",
  },
]

const toolConfig = createToolConfig({
  toolName: "SEO Tools",
  description:
    "A practical SEO toolkit for metadata generation, keyword analysis, headline ideation, duplicate-content review, and placeholder content creation.",
  metaTitle: "SEO Tools: Meta Tags, Keyword Density, Titles",
  metaDescription:
    "Free SEO tools for metadata, keyword density, title generation, text similarity checks, and placeholder content workflows.",
  path: "/seo-tools",

  header: {
    title: "SEO Tools",
    description:
      "Focused tools for content optimization, metadata quality, and technical publishing checks.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "SEO Tools", href: "/seo-tools" }],

  content: {
    overview:
      "This category is built for content teams, SEOs, developers, and publishers who need quick on-page diagnostics and optimization helpers. Use it to generate social metadata, review keyword distribution, compare similar content, brainstorm stronger titles, and create neutral placeholder copy for drafts.",

    features: [
      "Metadata and social-preview preparation",
      "On-page keyword distribution checks",
      "Headline ideation for editorial planning",
      "Duplicate and near-duplicate text comparison",
      "Placeholder text generation for design workflows",
      "Client-side processing for normal text inputs",
    ],

    useCases: [
      "Pre-publish SEO QA for blog posts and landing pages",
      "Team workflows for title and metadata drafting",
      "Content audits for duplication risk",
      "Template and prototype preparation for design systems",
      "Cross-team handoff between SEO, content, and development",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">
            What These SEO Tools Cover
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            SEO performance depends on both content quality and technical
            implementation. This toolkit focuses on common friction points:
            metadata completeness, headline quality, keyword balance, duplicate
            text risk, and publishing readiness.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Each tool is task-focused and designed for fast iteration. Instead
            of running a full suite for every change, teams can use the exact
            utility they need while drafting, reviewing, and shipping content.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Who should use this SEO tools category?",
        answer:
          "Content marketers, SEO specialists, editors, developers, and agencies can use these tools for routine optimization and QA tasks before publishing.",
      },
      {
        question: "Can these tools replace a full SEO platform?",
        answer:
          "They are best for tactical tasks and quick checks. Enterprise platforms still add broader tracking, backlink analysis, and large-scale reporting.",
      },
      {
        question: "What should I run before publishing a page?",
        answer:
          "A practical flow is: generate metadata, review keyword density, validate title options, and compare against related content for duplication.",
      },
      {
        question: "Are these tools useful for non-SEO teams too?",
        answer:
          "Yes. Product teams, UX writers, and developers use them for metadata formatting, placeholder text, and quick content comparisons.",
      },
      {
        question: "Are these tools free?",
        answer:
          "Yes. The tools in this category are free to use with no signup requirement.",
      },
    ],

    relatedTools: [
      { name: "Web Tools", href: "/web-tools" },
      { name: "Developer Tools", href: "/dev-tools" },
      { name: "AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SEOToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <GToolCard
              key={`seo-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
