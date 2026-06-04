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
    "Write rich text visually and copy the generated HTML source. Supports headings, bold, italic, strikethrough, lists, blockquotes, undo, and redo.",
  metaTitle: "HTML WYSIWYG Editor - Visual Rich Text to HTML Source",
  metaDescription:
    "Free online HTML WYSIWYG editor. Format rich text with headings, bold, italic, strikethrough, lists, and blockquotes, then copy the generated HTML source.",
  path: "/dev-tools/html-wysiwyg-editor",

  header: {
    title: "HTML WYSIWYG Editor",
    description:
      "Format rich text visually and copy the HTML source output. Useful for CMS snippets, documentation blocks, and quick content drafts.",
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
      "Browser-based WYSIWYG HTML editor with visual rich-text editing and live HTML source output. Supports headings H1-H4, bold, italic, strikethrough, unordered lists, ordered lists, blockquotes, undo, redo, and copy HTML.",
    alternateName: [
      "Visual HTML Editor",
      "Rich Text to HTML",
      "WYSIWYG HTML Editor Online",
      "HTML Source Generator",
      "Contenteditable HTML Editor",
      "CMS HTML Editor",
      "HTML Body Editor",
      "Online Rich Text Editor",
    ],
    featureList: [
      "Visual rich-text editing area",
      "Live HTML source output",
      "Copy generated HTML",
      "Headings H1, H2, H3, and H4",
      "Bold, italic, and strikethrough formatting",
      "Ordered and unordered lists",
      "Blockquote formatting",
      "Undo and redo controls",
      "Browser-native contenteditable editing",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.8",
    ratingCount: "7320",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTML WYSIWYG editor lets you format content visually while the browser generates the underlying HTML source.",
    quickAnswer:
      "Type in the visual editor, apply headings, bold, italic, strikethrough, lists, or blockquotes, then copy the generated HTML source from the right panel. This page is for simple content blocks, not full-page layout building.",
    keyTakeaways: [
      "Creates HTML from a visual rich-text editing area",
      "Supports headings H1-H4, bold, italic, strikethrough, lists, and blockquotes",
      "Shows formatted HTML source beside the editor",
      "Useful for CMS snippets, documentation blocks, and quick article drafts",
      "Does not add links, tables, images, colors, font controls, or full page layouts",
    ],
    overview:
      "Use this HTML WYSIWYG editor when you need a quick rich-text block and want to copy the generated HTML. It uses the browser's contenteditable editing commands to format headings, emphasis, lists, and blockquotes, then displays the HTML source in a copy-ready panel. It is a focused editor for simple body content, CMS snippets, documentation blocks, and draft markup. It is not a full website builder or a complete email template designer.",

    howToSteps: [
      "Type or paste content into the visual editor.",
      "Use the toolbar to apply headings, bold, italic, strikethrough, lists, blockquote, undo, or redo.",
      "Review the generated HTML source in the right panel.",
      "Click the copy button to copy the HTML.",
      "Paste the output into your CMS, documentation system, or code editor and review it in the target environment.",
    ],

    features: [
      "Visual rich text editor",
      "Live HTML source preview",
      "Headings H1-H4",
      "Bold, italic, and strikethrough controls",
      "Ordered and unordered lists",
      "Blockquotes",
      "Undo and redo buttons",
      "Copy HTML output",
    ],

    useCases: [
      "Draft a CMS body field before pasting into an admin panel",
      "Create a simple HTML snippet for documentation or a knowledge base",
      "Convert a short rich-text draft into HTML source",
      "Check how browser contenteditable formatting is represented as HTML",
      "Prepare simple article, FAQ, or help-center content blocks",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Editor Supports</h3>
          <p>
            The editor is intentionally small: it gives you a visual writing area, a formatting
            toolbar, and a live HTML source panel. Current controls include <strong>H1-H4</strong>
            headings, <strong>bold</strong>, <strong>italic</strong>, <strong>strikethrough</strong>,
            ordered lists, unordered lists, blockquotes, undo, redo, and HTML copy.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What It Does Not Do</h3>
          <p>
            This is not a full WYSIWYG suite like a CMS editor or page builder. It does not insert
            links, images, videos, tables, colors, font families, font sizes, columns, sections, or
            full page layouts. It also does not edit the source panel directly; the HTML source is
            generated from the visual editor.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Good Fit vs Poor Fit</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Use it for</th>
                <th className="text-left py-2 px-2 text-foreground">Use another tool for</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Simple CMS content blocks</td>
                <td className="py-2 px-2">Full landing page layouts</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Documentation snippets</td>
                <td className="py-2 px-2">Complex email templates with tables and inline CSS</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Article body drafts</td>
                <td className="py-2 px-2">Image-heavy or media-rich content</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Quick HTML source checks</td>
                <td className="py-2 px-2">Security sanitization or production HTML validation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">HTML Output Notes</h3>
          <p>
            Browser rich-text commands can produce different markup depending on the browser and
            pasted content. Review the copied HTML before publishing, especially if your CMS has
            strict sanitization rules, your design system expects specific classes, or your
            publishing workflow blocks certain tags.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Paste Cleanup</h3>
          <p>
            Pasting from word processors or other web pages can bring unwanted inline markup. If
            the source output looks messy, paste through a plain-text editor first or clean the
            output with an HTML formatter/sanitizer before publishing.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy Note</h3>
          <p>
            Editing and source generation happen in the browser after the page loads. Avoid pasting
            confidential content into any web page unless your own security policy allows it.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Use this editor for simple content blocks, then validate the copied HTML in the system where it will be published. CMS and email platforms often sanitize or rewrite pasted markup.",

    faqs: [
      {
        question: "Can I see the generated HTML while editing?",
        answer:
          "Yes. The generated HTML source appears beside the visual editor and updates as you edit the content.",
      },
      {
        question: "Can I edit the HTML source directly?",
        answer:
          "No. The source panel is a read-only output panel. Edit content in the visual editor, then copy the generated HTML.",
      },
      {
        question: "Does this editor support links, images, or tables?",
        answer:
          "No. This focused editor supports headings, emphasis, lists, blockquotes, undo, redo, and source copy. Use a full CMS editor for links, images, tables, and media embeds.",
      },
      {
        question: "Is this suitable for email templates?",
        answer:
          "Only for simple copy blocks. Production emails usually need tables, inline styles, and client-specific testing, so validate the final HTML in your email platform.",
      },
      {
        question: "Can I use the output in a CMS?",
        answer:
          "Yes, if your CMS accepts the generated tags. Review the output after pasting because some platforms sanitize, rewrite, or strip HTML.",
      },
      {
        question: "Does this replace a full page builder?",
        answer:
          "No. It is for simple rich-text blocks and source extraction, not complete page layouts, responsive sections, or drag-and-drop web design.",
      },
    ],

    relatedTools: [
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
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
