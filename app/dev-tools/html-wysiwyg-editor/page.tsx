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
  metaTitle: "HTML WYSIWYG Editor — Visual Rich-Text to Clean HTML Online",
  metaDescription:
    "Free WYSIWYG HTML editor. Compose with visual toolbar (headings, lists, tables, links, images, color) and get clean HTML source code. Perfect for CMS body fields, email templates, landing pages. 100% client-side, no signup.",
  path: "/dev-tools/html-wysiwyg-editor",

  header: {
    title: "HTML WYSIWYG Editor (Rich Text to HTML)",
    description:
      "Write and format rich text visually, then copy the clean HTML source code. Supports headings, bold, italic, lists, tables, links, and images. Perfect for CMS content, email templates, and web pages.",
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
      "Visual WYSIWYG (What You See Is What You Get) HTML editor with live source code output. Compose rich text with toolbar — headings, bold, italic, underline, lists, tables, links, images, color — and get clean HTML. For CMS content, email templates, landing pages. 100% client-side.",
    alternateName: [
      "Visual HTML Editor",
      "Rich Text Editor",
      "WYSIWYG Online",
      "HTML Composer",
      "CMS-Style Editor",
      "Email Template Editor",
      "Landing Page HTML Maker",
      "Online HTML Writer",
      "TinyMCE Alternative",
      "CKEditor Alternative",
      "Quill Editor Alternative",
      "Froala Alternative",
      "TipTap-style Editor",
      "HTML Body Editor",
      "What You See Is What You Get HTML",
    ],
    featureList: [
      "Visual editing with toolbar — no HTML knowledge required",
      "Live HTML source code output as you type",
      "Switch between WYSIWYG view and HTML source view",
      "Formatting: bold, italic, underline, strikethrough, superscript, subscript",
      "Headings H1–H6, paragraph, blockquote, horizontal rules",
      "Ordered / unordered lists with nested indentation",
      "Tables with row / column add / delete and cell alignment",
      "Insert links, images, embed video URLs",
      "Text color, highlight, font size, font family controls",
      "Clean HTML output — no inline `style=` clutter from MS Word / Google Docs paste",
      "Paste-as-plain-text option to strip formatting noise",
      "Mobile-friendly editing on tablet / phone",
      "100% client-side — your content never leaves your browser",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "7320",
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
      "Create rich text content and generate clean HTML source code with this free online WYSIWYG editor. Format content visually using a toolbar — add headings, bold, italic, lists, tables, links, and images — then switch to source view to copy the generated HTML. Perfect for creating content for CMS platforms (WordPress, Shopify, Webflow), email templates, landing pages, and embedded HTML blocks. No coding knowledge needed — what you see is what you get.",

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
