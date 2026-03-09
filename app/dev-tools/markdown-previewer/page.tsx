import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const MarkdownPreviewer = dynamic(
  () => import("@/components/dev-tools/markdown-previewer").then((mod) => mod.MarkdownPreviewer),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Markdown Previewer",
  description:
    "Write and preview Markdown with live rendering for README, docs, and publishing workflows.",
  metaTitle: "Markdown Previewer — Live Markdown Editor with GFM Support Free (2026)",
  metaDescription:
    "Free online Markdown previewer with live rendering. Write and preview Markdown with GitHub Flavored Markdown support — tables, code blocks, task lists. Perfect for README files and docs.",
  path: "/dev-tools/markdown-previewer",

  header: {
    title: "Live Markdown Editor & Previewer",
    description:
      "Write Markdown and see the rendered HTML preview in real time. Supports GitHub Flavored Markdown (GFM) with tables, code blocks, task lists, and syntax highlighting. Perfect for README files, documentation, and blog posts.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Live Markdown preview tool for documentation, README authoring, and content formatting workflows.",
    featureList: [
      "Live Markdown rendering",
      "GitHub Flavored Markdown support",
      "Side-by-side editing",
      "Documentation drafting workflow",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Markdown Previewer is a free tool that renders Markdown syntax into formatted HTML in real time, showing exactly how your content will look.",
    quickAnswer:
      "Type or paste Markdown in the editor to see the rendered HTML preview side by side. Supports headings, lists, links, images, code blocks, tables, and GitHub Flavored Markdown (GFM).",
    keyTakeaways: [
      "Live side-by-side Markdown editing and HTML preview",
      "Supports GitHub Flavored Markdown (GFM) with tables and task lists",
      "Syntax highlighting for fenced code blocks",
      "Renders headings, bold, italic, links, images, and blockquotes",
      "Useful for README files, documentation, and blog post drafting",
    ],
    overview:
      "Write and preview Markdown in real time with this free online editor. Type or paste Markdown in the editor panel and see the rendered HTML preview update instantly as you type. Supports full GitHub Flavored Markdown (GFM) including tables, fenced code blocks with syntax highlighting, task lists, strikethrough, and autolinks. Perfect for writing GitHub README files, project documentation, blog posts, and technical docs. The side-by-side layout lets you see exactly how your Markdown will look when published.",

    howToSteps: [
      "Paste or write Markdown in the editor panel.",
      "Review rendered output in the preview panel.",
      "Adjust headings, lists, tables, and code blocks.",
      "Copy final Markdown or continue editing in your repo.",
    ],

    features: [
      "Live preview while typing",
      "GitHub Flavored Markdown support",
      "Table and code block rendering",
      "Readable side-by-side layout",
      "Browser-based authoring workflow",
    ],

    useCases: [
      "GitHub README authoring",
      "Technical documentation drafting",
      "Markdown formatting checks before publish",
      "Team handoff content review",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Markdown preview pages rank best when they keep rendering immediate and
          reliable. This page focuses on fast feedback for real authoring tasks.
        </p>
        <p>
          The preview helps catch formatting issues early so the final content is
          ready for GitHub, docs portals, or CMS pipelines.
        </p>
      </div>
    ),

    proTip:
      "Check headings, table alignment, and code block fences before publishing to avoid formatting regressions.",

    faqs: [
      {
        question: "Does this support GitHub Flavored Markdown?",
        answer:
          "Yes. Common GFM features such as tables, fenced code blocks, and task lists are supported.",
      },
      {
        question: "Can I use this for README files?",
        answer:
          "Yes. It is designed for README writing and preview checks before committing changes.",
      },
      {
        question: "Does the tool convert Markdown to HTML?",
        answer:
          "The preview renders Markdown as HTML so you can inspect final formatting behavior.",
      },
      {
        question: "Is this useful for documentation teams?",
        answer:
          "Yes. It helps technical writers and engineers verify formatting before publication.",
      },
      {
        question: "Can this replace my IDE Markdown preview?",
        answer:
          "It complements IDE previews by offering a quick browser workflow for ad hoc editing and review.",
      },
    ],

    relatedTools: [
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function MarkdownPreviewerPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <MarkdownPreviewer />
        </div>
      )}
    />
  )
}
