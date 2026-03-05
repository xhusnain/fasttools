import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const HtmlEscape = dynamic(
  () =>
    import("@/components/web-tools/html-escape").then((mod) => mod.HtmlEscape),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTML Escape Unescape",
  description:
    "Escape special HTML characters to entities and unescape entities back to plain text.",
  metaTitle: "HTML Escape/Unescape Tool Online",
  metaDescription:
    "Convert <, >, &, quotes, and apostrophes to HTML entities and decode them back. Useful for safe rendering and XSS prevention workflows.",
  path: "/web-tools/html-escape",
  keywords: [
    "html escape",
    "html unescape",
    "html entities",
    "xss prevention",
    "escape html",
    "unescape html",
  ],

  header: {
    title: "HTML Escape Unescape",
    description:
      "Escape special characters to HTML entities or decode entities back to readable text.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "HTML Escape Unescape", href: "/web-tools/html-escape" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Escape and unescape HTML entities in-browser for safe output rendering.",
    alternateName: ["HTML Entity Encoder", "HTML Entity Decoder"],
    featureList: [
      "Escape reserved HTML characters",
      "Unescape entity-encoded strings",
      "Security-focused output formatting",
      "Live conversion",
      "Client-side processing",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "An HTML Escape Tool is a free tool that converts special characters (<, >, &, \", ') into HTML entities and decodes HTML entities back to their original characters.",
    quickAnswer:
      "Paste text containing HTML special characters to escape them into safe entity codes (&lt; &gt; &amp;), or paste escaped HTML to decode it back to readable characters. Essential for displaying code snippets in web pages.",
    keyTakeaways: [
      "Escapes < > & \" ' to their HTML entity equivalents",
      "Decodes HTML entities (&lt; &amp; &#39;) back to original characters",
      "Prevents XSS attacks by escaping user input before rendering",
      "Essential when embedding code snippets in HTML pages or blog posts",
      "Supports both named entities (&amp;) and numeric entities (&#38;)",
    ],
    overview:
      "This tool converts risky or reserved HTML characters (`<`, `>`, `&`, `\"`, `'`) into safe entities and decodes entities back to plain text when needed. It is useful for output sanitization checks, template debugging, and content migration tasks.",

    howToSteps: [
      "Paste raw text or markup in the Escape panel to generate entity-safe output.",
      "Paste entity-encoded text in the Unescape panel to recover readable text.",
      "Copy the result for templating, CMS input, or QA checks.",
    ],

    features: [
      "Escapes core HTML-reserved characters",
      "Unescapes common named and numeric entities",
      "Two-way conversion in one interface",
      "Copy-ready output",
      "Works locally in your browser",
    ],

    useCases: [
      "Verifying safe output before inserting user-generated content into HTML",
      "Converting escaped content back to readable text during migrations",
      "Comparing framework auto-escaping behavior against expected output",
      "Troubleshooting rendering issues in email templates and CMS blocks",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Escaping converts characters with special meaning in HTML into entity
          forms, so they are displayed as text instead of interpreted as markup.
          This is a foundational protection pattern against injection issues.
        </p>
        <p>
          Unescaping is the reverse operation. It is useful when content is
          stored or transported in encoded form and needs to be displayed or
          compared in readable text.
        </p>
      </div>
    ),

    proTip:
      "Escape on output boundaries where HTML is rendered, and keep raw source data unchanged when possible.",

    faqs: [
      {
        question: "What does HTML escaping do?",
        answer:
          "It transforms reserved characters such as `<` and `&` into entities like `&lt;` and `&amp;` so browsers render them as text instead of HTML instructions.",
      },
      {
        question: "Why is escaping important for security?",
        answer:
          "Escaping user-controlled content before rendering helps prevent unintended script execution and markup injection in many output contexts.",
      },
      {
        question: "When should I unescape HTML entities?",
        answer:
          "Unescape when you need to read or process content that was previously escaped, such as imported CMS fields, email templates, or API payloads.",
      },
      {
        question: "Does this replace full sanitization?",
        answer:
          "No. Escaping is one layer. Full security also depends on context-aware sanitization, validation, and safe rendering practices.",
      },
      {
        question: "Is this tool free and local?",
        answer:
          "Yes. It is free and runs client-side in your browser for normal usage.",
      },
    ],

    additionalContent: [
      {
        heading: "Characters Commonly Escaped",
        content:
          "Most workflows at minimum escape `<`, `>`, `&`, double quotes, and apostrophes. Depending on context, additional characters may also be encoded using numeric entities.",
      },
      {
        heading: "Developer Workflow Tip",
        content:
          "If rendering still looks wrong after escaping, inspect whether content was escaped twice. Double-escaped text often appears with `&amp;lt;` patterns.",
      },
    ],

    relatedTools: [
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlEscapePage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HtmlEscape />
        </div>
      )}
    />
  )
}
