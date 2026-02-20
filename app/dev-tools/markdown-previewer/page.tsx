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
  metaTitle: "Markdown Previewer (Live GFM Editor)",
  metaDescription:
    "Preview Markdown instantly with GitHub Flavored Markdown support. Useful for README writing, technical docs, and content drafting.",
  path: "/dev-tools/markdown-previewer",
  keywords: [
    "markdown previewer",
    "live markdown editor",
    "github flavored markdown",
    "markdown to html preview",
    "readme editor",
  ],

  header: {
    title: "Markdown Previewer",
    description:
      "Edit Markdown and see formatted output in real time with a fast side-by-side workflow.",
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
    overview:
      "Use this editor to write Markdown and validate output before publishing. It is useful for README files, internal docs, and blog content where formatting accuracy matters.",

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
