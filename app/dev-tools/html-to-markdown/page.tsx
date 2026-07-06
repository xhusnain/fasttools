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
    "Convert pasted HTML into Markdown for docs, READMEs, articles, and content migration workflows.",
  metaTitle: "HTML to Markdown Converter - Convert HTML to .md",
  metaDescription:
    "Convert HTML to Markdown online. Paste HTML and convert headings, links, images, lists, blockquotes, code, tables, and common inline formatting into copyable Markdown.",
  path: "/dev-tools/html-to-markdown",

  header: {
    title: "HTML to Markdown Converter",
    description:
      "Paste HTML and convert common document tags into Markdown you can copy into docs, READMEs, notes, or a static-site content folder.",
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
      "HTML to Markdown converter for pasted HTML. Converts headings, paragraphs, links, images, lists, blockquotes, inline code, code blocks, horizontal rules, strikethrough, and simple tables into Markdown output.",
    alternateName: [
      "HTML to MD Converter",
      "HTML to Markdown",
      "HTML to CommonMark",
      "Web Page HTML to Markdown",
      "Article to Markdown",
      "Blog Post to Markdown",
      "CMS HTML to Markdown",
      "README Markdown Converter",
    ],
    featureList: [
      "Converts h1-h6 headings to Markdown headings",
      "Converts paragraphs, line breaks, and horizontal rules",
      "Converts bold, italic, and strikethrough formatting",
      "Converts links to [text](url)",
      "Converts images to ![alt](src)",
      "Converts unordered and ordered lists",
      "Converts blockquotes",
      "Converts inline code and fenced code blocks",
      "Converts simple HTML tables to Markdown pipe tables",
      "Skips script, style, and noscript content",
      "Copy Markdown output",
      "Browser-side conversion",
    ],
    softwareRequirements: "Modern web browser",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTML to Markdown converter changes common HTML tags into Markdown syntax so content can be edited as plain text.",
    quickAnswer:
      "Paste HTML, click Convert to Markdown, then copy the Markdown output. The converter handles common document tags such as headings, paragraphs, links, images, lists, blockquotes, code, and simple tables.",
    keyTakeaways: [
      "Converts common article/document HTML into Markdown",
      "Handles headings, links, images, lists, blockquotes, code, and simple tables",
      "Skips script, style, and noscript content",
      "Best for paste-based cleanup, not full website crawling",
      "Output should be reviewed before publishing",
    ],
    overview:
      "Use this HTML to Markdown converter for quick content migration and document cleanup. Paste HTML from a CMS block, article body, documentation page, or exported snippet and convert it into copyable Markdown. The converter uses the browser's HTML parser, walks the document structure, and maps common tags to Markdown syntax. Complex layouts, custom widgets, iframes, and styled components may need manual cleanup after conversion.",

    howToSteps: [
      "Paste HTML into the input box.",
      "Click Convert to Markdown.",
      "Review the Markdown output for tables, nested lists, images, and embedded content.",
      "Copy the Markdown into your documentation, README, notes, or content repository.",
    ],

    features: [
      "Paste-based HTML conversion",
      "Common tag mapping",
      "Simple table conversion",
      "Code and blockquote support",
      "Copy Markdown output",
      "Browser-side workflow",
    ],

    useCases: [
      "Convert a CMS content block to Markdown",
      "Prepare README or documentation content from HTML",
      "Move article drafts into Markdown-first editors",
      "Clean up simple HTML exports before static-site migration",
      "Turn scraped or copied HTML snippets into readable notes",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Supported Mapping</h3>
          <p>
            The converter maps common document tags to Markdown: headings become{" "}
            <code>#</code> headings, links become <code>[text](url)</code>, images become{" "}
            <code>![alt](src)</code>, lists become Markdown lists, blockquotes get{" "}
            <code>&gt;</code> prefixes, and simple tables become pipe tables.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Tables and Layout Limits</h3>
          <p>
            Simple tables convert to Markdown pipe tables. Complex tables with rowspans, colspans,
            nested tables, or layout-only markup do not map cleanly to plain Markdown and should be
            reviewed manually.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Gets Dropped</h3>
          <p>
            Markdown has no equivalent for most styling and scripting. Script, style, and noscript
            content is skipped. Classes, IDs, inline styles, data attributes, and event handlers are
            not preserved because the output is intended to be portable Markdown text.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Review Checklist</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Check table output if the source table had merged cells.</li>
            <li>Check nested lists because Markdown renderers differ on indentation.</li>
            <li>Check image URLs and relative links after moving content to a new site.</li>
            <li>Replace embeds or custom widgets with shortcodes, MDX, or platform-specific blocks.</li>
          </ul>
        </div>
      </div>
    ),

    proTip:
      "Treat generated Markdown as a strong first draft. Review links, images, nested lists, and tables before publishing, especially when converting CMS exports or copied web-page HTML.",

    faqs: [
      {
        question: "Can this convert a whole website URL?",
        answer:
          "No. Paste the HTML you want to convert. The tool does not fetch URLs or crawl pages.",
      },
      {
        question: "Does it support GitHub-Flavored Markdown tables?",
        answer:
          "It converts simple HTML tables into Markdown pipe tables, which are supported by many GFM renderers.",
      },
      {
        question: "Does it preserve CSS classes and inline styles?",
        answer:
          "No. Markdown is portable plain text, so styling attributes are dropped. Use inline HTML or MDX manually when styling must be preserved.",
      },
      {
        question: "Can I convert code blocks?",
        answer:
          "Yes. Preformatted blocks are converted into fenced code blocks, and inline code tags become backtick code.",
      },
      {
        question: "Why does my output need manual cleanup?",
        answer:
          "HTML can express layouts, scripts, widgets, and complex tables that Markdown cannot represent directly. Review the output when the source HTML is more than article-style content.",
      },
    ],

    relatedTools: [
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "Escape HTML Entities", href: "/web-tools/html-escape" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
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
