import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const HTMLToMarkdown = dynamic(
  () => import("@/components/dev-tools/html-to-markdown").then((mod) => mod.HTMLToMarkdown),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTML to Markdown Converter",
  description:
    "Convert HTML markup into Markdown format for documentation and content migration workflows.",
  metaTitle: "HTML to Markdown Converter — Convert HTML to MD Online Free (2026)",
  metaDescription:
    "Free online HTML to Markdown converter. Convert HTML to clean Markdown syntax. Handles headings, links, images, tables, lists, and code blocks. Perfect for docs migration and README creation.",
  path: "/dev-tools/html-to-markdown",

  header: {
    title: "HTML to Markdown Converter",
    description:
      "Convert HTML to clean Markdown syntax instantly. Handles headings, paragraphs, links, images, tables, lists, and code blocks. Perfect for migrating CMS content, creating README files, and markdown-first publishing.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Convert HTML source into Markdown-formatted output for content and documentation workflows.",
    featureList: [
      "HTML to Markdown conversion",
      "Copy-ready markdown output",
      "Docs migration support",
      "Formatting workflow utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTML to Markdown Converter is a free tool that transforms HTML content into clean Markdown syntax for use in documentation, READMEs, and content management systems.",
    quickAnswer:
      "Paste HTML to instantly convert it to Markdown. The tool handles headings, paragraphs, links, images, lists, tables, and code blocks. Copy the Markdown output for use in GitHub, Notion, or any Markdown editor.",
    keyTakeaways: [
      "Converts HTML tags to equivalent Markdown syntax",
      "Handles <h1>–<h6>, <a>, <img>, <ul>, <ol>, <table>, and <code>",
      "Strips unnecessary HTML attributes and inline styles",
      "Preserves code blocks and preformatted text",
      "Useful for migrating CMS content to Markdown-based platforms",
    ],
    overview:
      "Convert HTML to Markdown instantly with this free online converter. Paste HTML source code and get clean Markdown output that preserves headings, paragraphs, links, images, lists, tables, and code blocks. The converter strips unnecessary HTML attributes and inline styles while preserving the document structure. Perfect for migrating content from WordPress, Drupal, or other CMS platforms to Markdown-based systems like GitHub, Notion, Docusaurus, or Next.js MDX. Copy the Markdown output with one click.",

    howToSteps: [
      "Paste HTML content into the converter input.",
      "Run conversion to generate Markdown output.",
      "Review headings, links, and list formatting.",
      "Copy the Markdown into your docs or content repository.",
    ],

    features: [
      "HTML-to-Markdown conversion workflow",
      "Fast copy-and-paste output",
      "Useful for docs and CMS migrations",
      "Supports common structure translation",
      "Browser-based utility",
    ],

    useCases: [
      "Migrating legacy HTML docs",
      "Converting CMS exports to markdown",
      "Preparing README/source-doc content",
      "Editorial workflow standardization",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Conversion tools rank well when output is practical and predictable.
          This page is optimized around that behavior for teams moving toward
          markdown-driven documentation.
        </p>
        <p>
          After conversion, a quick review is recommended to confirm edge cases
          like nested tables, custom HTML, and embedded media behavior.
        </p>
      </div>
    ),

    proTip:
      "Treat converted output as a first draft and run a final editorial pass for structure and style consistency.",

    faqs: [
      {
        question: "Will all HTML tags convert perfectly?",
        answer:
          "Most common tags convert well, but complex/custom structures may need manual adjustment.",
      },
      {
        question: "Can I use this for README preparation?",
        answer:
          "Yes. It is useful for converting HTML blocks into markdown suitable for repository documentation.",
      },
      {
        question: "Does this support links and lists?",
        answer:
          "Yes. Common link/list structures are typically mapped to markdown equivalents.",
      },
      {
        question: "Should I keep original HTML after conversion?",
        answer:
          "Keeping the source is recommended for rollback and comparison during migration workflows.",
      },
      {
        question: "Can this help with static site migrations?",
        answer:
          "Yes. It is often used when moving content into markdown-based static site setups.",
      },
    ],

    relatedTools: [
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlToMarkdownPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HTMLToMarkdown />
        </div>
      )}
    />
  )
}
