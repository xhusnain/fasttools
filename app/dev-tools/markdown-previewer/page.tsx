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
    "Write or paste Markdown and preview rendered HTML side by side with GitHub-flavored Markdown parsing.",
  metaTitle: "Markdown Previewer - Live Markdown Editor Online",
  metaDescription:
    "Preview Markdown online with a side-by-side editor and live rendered output. Supports marked GFM parsing for headings, lists, links, images, tables, task lists, and fenced code blocks.",
  path: "/dev-tools/markdown-previewer",

  header: {
    title: "Markdown Previewer",
    description:
      "Paste Markdown and see the rendered preview update live. Useful for README drafts, docs, notes, and Markdown formatting checks.",
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
      "Live Markdown previewer with side-by-side Markdown input and rendered HTML output. Uses marked with GFM mode and line breaks enabled. Includes reset control and basic sanitization for rendered script/embed/event-handler output.",
    alternateName: [
      "Markdown Editor Online",
      "Live Markdown Preview",
      "Markdown to HTML Preview",
      "GFM Previewer",
      "GitHub README Preview",
      "Markdown Live Editor",
      "README Previewer",
      "Online Markdown Renderer",
    ],
    featureList: [
      "Side-by-side Markdown input and rendered preview",
      "Live rendering while typing",
      "Marked parser with GFM mode enabled",
      "Supports headings, paragraphs, lists, links, images, blockquotes, and horizontal rules",
      "Supports GFM tables, task lists, strikethrough, and fenced code blocks",
      "Line breaks enabled",
      "Reset button",
      "Basic sanitization removes script, iframe, object, embed, event-handler attributes, and javascript: URLs",
      "Browser-side preview",
    ],
    softwareRequirements: "Modern web browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Markdown previewer renders Markdown text as formatted HTML so you can check how headings, lists, links, tables, and code blocks will display.",
    quickAnswer:
      "Type or paste Markdown into the editor and review the rendered preview on the right. The preview updates as you edit and uses marked with GitHub-flavored Markdown mode enabled.",
    keyTakeaways: [
      "Live side-by-side Markdown input and preview",
      "Uses marked with GFM mode and line breaks enabled",
      "Supports common Markdown plus GFM tables, task lists, and strikethrough",
      "Does not provide syntax highlighting, Mermaid, math rendering, TOC, or HTML export",
      "Includes basic sanitization for rendered HTML output",
    ],
    overview:
      "Use this Markdown previewer to check README drafts, documentation snippets, notes, and Markdown-formatted content before publishing. The editor and preview sit side by side, so formatting issues are visible immediately. The renderer uses marked with GFM mode enabled, which supports common Markdown features plus GitHub-style tables, task lists, strikethrough, and fenced code blocks.",

    howToSteps: [
      "Paste or type Markdown in the input panel.",
      "Review the rendered output in the preview panel.",
      "Adjust headings, lists, tables, links, and code blocks until the preview looks right.",
      "Use Reset if you want to clear the editor.",
    ],

    features: [
      "Live Markdown preview",
      "Side-by-side editor and preview",
      "GFM parsing with marked",
      "Tables and task lists",
      "Fenced code block rendering",
      "Basic rendered HTML sanitization",
      "Reset control",
    ],

    useCases: [
      "Preview README.md content before committing",
      "Check documentation formatting",
      "Review LLM-generated Markdown",
      "Draft notes with tables and task lists",
      "Test Markdown snippets before pasting into a CMS or issue tracker",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What It Supports</h3>
          <p>
            The previewer supports common Markdown syntax such as headings, paragraphs, bold,
            italic, links, images, lists, blockquotes, horizontal rules, and code blocks. GFM mode
            adds tables, task lists, strikethrough, and fenced code blocks.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What It Does Not Include</h3>
          <p>
            The current preview does not include syntax highlighting, Mermaid diagram rendering,
            LaTeX/math rendering, heading anchor generation, table-of-contents generation, file
            upload, export, or copy buttons. It is a focused live preview surface.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Security Note</h3>
          <p>
            Markdown can contain raw HTML. The preview applies basic sanitization to remove script,
            iframe, object, embed, event-handler attributes, and javascript: URLs before rendering.
            Treat this as a preview aid, not a production HTML sanitizer.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">README Review Checklist</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Check heading hierarchy and spacing.</li>
            <li>Check table columns and separators.</li>
            <li>Check task-list formatting.</li>
            <li>Check image and link URLs after moving content to a repository.</li>
            <li>Check fenced code blocks have the intended language label, even without syntax highlighting here.</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "Use this as a fast formatting check. For exact GitHub styling, still review the final README or docs page in the target platform because CSS, image paths, and renderer extensions can differ.",

    faqs: [
      {
        question: "Does this support GitHub-Flavored Markdown?",
        answer:
          "It uses marked with GFM mode enabled, so common GFM features such as tables, task lists, strikethrough, and fenced code blocks are supported.",
      },
      {
        question: "Does it support syntax highlighting?",
        answer:
          "No. Fenced code blocks render as code blocks, but this page does not apply language-specific syntax highlighting.",
      },
      {
        question: "Can I render Mermaid diagrams or math?",
        answer:
          "No. Mermaid and LaTeX/math rendering are not included in the current previewer.",
      },
      {
        question: "Can I export the rendered HTML?",
        answer:
          "No. The current tool is for live preview only and does not include HTML export.",
      },
      {
        question: "Does raw HTML render?",
        answer:
          "Marked may render raw HTML, but the preview applies basic sanitization first. Do not treat it as a production sanitizer.",
      },
    ],

    relatedTools: [
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "Escape HTML Entities", href: "/web-tools/html-escape" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
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
