import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const HTMLBeautifier = dynamic(
  () => import("@/components/dev-tools/html-beautifier").then((mod) => mod.HTMLBeautifier),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTML Beautifier",
  description:
    "Format and minify HTML code for readability, debugging, and delivery optimization workflows.",
  metaTitle: "HTML Beautifier & Minifier — Format HTML Online Free (2026)",
  metaDescription:
    "Free online HTML beautifier and minifier. Format messy HTML with proper indentation or minify for production. Customizable indent size. Runs locally in browser.",
  path: "/dev-tools/html-beautifier",

  header: {
    title: "HTML Beautifier & Minifier",
    description:
      "Format minified or messy HTML into clean, readable code with proper indentation — or minify HTML for production. Customizable indent size (2/4 spaces or tabs). Runs entirely in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Beautify and minify HTML source for debugging, readability, and optimization.",
    featureList: [
      "HTML formatting",
      "HTML minification",
      "Copy-ready output",
      "Code cleanup workflow",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTML Beautifier is a free tool that formats and indents minified or messy HTML code into clean, readable markup with consistent indentation.",
    quickAnswer:
      "Paste unformatted HTML to instantly beautify it with proper indentation and line breaks. Customize indent size (2 or 4 spaces, tabs). Copy the formatted output or download it as an .html file.",
    keyTakeaways: [
      "Formats minified HTML into readable, properly indented code",
      "Customizable indentation: 2 spaces, 4 spaces, or tabs",
      "Preserves code structure without changing functionality",
      "Handles inline styles, scripts, and nested elements correctly",
      "Useful for debugging, code reviews, and cleaning up generated HTML",
    ],
    overview:
      "Format and clean up HTML code with this free online beautifier and minifier. Paste minified or messy HTML to instantly beautify it with proper indentation and line breaks — or minify clean HTML into a compact single line for production. Customize indentation (2 spaces, 4 spaces, or tabs). The beautifier preserves HTML structure without changing functionality, making it easy to read nested elements, debug tag issues, and review generated markup. All formatting runs locally in your browser — no data uploaded.",

    howToSteps: [
      "Paste HTML into the editor.",
      "Choose beautify or minify mode.",
      "Review output and confirm structure.",
      "Copy the formatted result into your project files.",
    ],

    features: [
      "Beautify and minify modes",
      "Fast code cleanup workflow",
      "Copy-friendly output",
      "Useful for debugging markup structure",
      "Browser-based formatting utility",
    ],

    useCases: [
      "Debugging nested markup",
      "Preparing HTML for code review",
      "Compressing templates for deployment",
      "Cleaning generated HTML from external editors",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Formatting utilities rank strongly when they minimize friction and
          produce predictable output. This page is designed for that direct
          developer intent.
        </p>
        <p>
          Use beautify mode for readability and minify mode for compact output,
          depending on whether you are debugging or preparing final assets.
        </p>
      </div>
    ),

    proTip:
      "Run beautification before diff reviews and minification in build pipelines to keep both maintainability and performance.",

    faqs: [
      {
        question: "What is the difference between beautify and minify?",
        answer:
          "Beautify improves readability with spacing and indentation, while minify removes extra whitespace for compact output.",
      },
      {
        question: "Will minification change HTML behavior?",
        answer:
          "It should not when done correctly, but always validate dynamic templates and inline script/style edge cases.",
      },
      {
        question: "Can I format very large HTML snippets?",
        answer:
          "Yes, though very large inputs may be slower depending on browser resources.",
      },
      {
        question: "Should I commit minified HTML to source?",
        answer:
          "Most teams keep readable source and minify during build/deploy processes.",
      },
      {
        question: "Can this help with invalid markup troubleshooting?",
        answer:
          "Yes. Beautified structure often makes tag nesting and closure mistakes easier to spot.",
      },
    ],

    relatedTools: [
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlBeautifierPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HTMLBeautifier />
        </div>
      )}
    />
  )
}
