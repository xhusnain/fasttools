import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const HtmlWysiwygEditor = dynamic(
  () => import("@/components/dev-tools/html-wysiwyg-editor").then((mod) => mod.HtmlWysiwygEditor),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTML WYSIWYG Editor",
  description:
    "Edit rich text and view generated HTML source side-by-side for content and UI workflows.",
  metaTitle: "HTML WYSIWYG Editor (Rich Text + HTML Source)",
  metaDescription:
    "Use a browser-based WYSIWYG editor with HTML source output for drafting, formatting, and embedding content quickly.",
  path: "/dev-tools/html-wysiwyg-editor",
  keywords: [
    "html wysiwyg editor",
    "online rich text editor",
    "html editor online",
    "wysiwyg html source",
    "content editor tool",
  ],

  header: {
    title: "HTML WYSIWYG Editor",
    description:
      "Draft rich content and inspect generated HTML source in one workflow.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Rich text editing with corresponding HTML source output for content and embedding workflows.",
    featureList: [
      "Rich text editing",
      "HTML source output",
      "Copy-ready markup",
      "Content drafting support",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTML WYSIWYG Editor is a free tool that lets you create and edit HTML content visually without writing code, then export the clean HTML source.",
    quickAnswer:
      "Type and format text using the visual toolbar (bold, italic, headings, lists, links, images). The tool generates clean HTML code in real time. Switch between visual and source views. Copy the HTML output.",
    keyTakeaways: [
      "Visual editing with toolbar for formatting, links, images, and tables",
      "Real-time HTML source code generation as you edit",
      "Switch between WYSIWYG and source code views",
      "Clean HTML output without unnecessary tags or inline styles",
      "Useful for email templates, CMS content, and quick HTML prototyping",
    ],
    overview:
      "Use this editor to compose formatted content and capture the resulting HTML for websites, CMS fields, email templates, and embedded content blocks.",

    howToSteps: [
      "Compose content using rich text controls.",
      "Inspect generated HTML source output.",
      "Adjust formatting or markup as needed.",
      "Copy output into your target platform.",
    ],

    features: [
      "Rich text authoring interface",
      "Live HTML source workflow",
      "Copy-ready output for integration",
      "Useful for CMS and email content tasks",
      "Browser-native editing utility",
    ],

    useCases: [
      "CMS body field preparation",
      "Email template drafting",
      "Landing page copy block creation",
      "Documentation and knowledge base editing",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          WYSIWYG tools that rank well make source output transparent and easy to
          extract. This page emphasizes that utility-first behavior.
        </p>
        <p>
          It helps bridge editorial and development workflows by giving content
          teams a visual editor while preserving direct HTML access.
        </p>
      </div>
    ),

    proTip:
      "Review generated HTML in the target environment, especially for email clients and CMS sanitization rules.",

    faqs: [
      {
        question: "Can I see the generated HTML while editing?",
        answer:
          "Yes. The tool is designed to pair rich editing with source-output visibility.",
      },
      {
        question: "Is this suitable for email template drafting?",
        answer:
          "Yes, though client-specific rendering tests are still recommended before sending production campaigns.",
      },
      {
        question: "Can I use the output in a CMS?",
        answer:
          "Yes. Copy the generated markup into compatible rich text or HTML-supported CMS fields.",
      },
      {
        question: "Does this replace full page builders?",
        answer:
          "No. It is optimized for content block authoring and source extraction, not full layout systems.",
      },
      {
        question: "Should I clean output before publishing?",
        answer:
          "A quick sanitization/validation pass is recommended, especially for strict security or style pipelines.",
      },
    ],

    relatedTools: [
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlWysiwygEditorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HtmlWysiwygEditor />
        </div>
      )}
    />
  )
}
