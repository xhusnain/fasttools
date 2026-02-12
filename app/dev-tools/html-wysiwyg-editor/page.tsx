import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { HtmlWysiwygEditor } from "@/components/dev-tools/html-wysiwyg-editor"

const toolConfig = createToolConfig({
  toolName: "HTML WYSIWYG Editor",
  description:
    "HTML WYSIWYG editor online. Free html wysiwyg editor. Online html editor. Rich text editor. html wysiwyg editor react alternative. Free html wysiwyg editor open source.",
  metaTitle: "HTML WYSIWYG Editor - Free Online HTML Editor | Rich Text Editor",
  metaDescription:
    "Free HTML WYSIWYG editor online. Online html editor with live HTML source. html wysiwyg editor free. Rich text editor. html editor online. Free.",
  path: "/dev-tools/html-wysiwyg-editor",

  header: {
    title: "HTML WYSIWYG editor",
    description:
      "Online, feature-rich WYSIWYG HTML editor which generates the source code of the content immediately.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "HTML WYSIWYG editor online. Free html wysiwyg editor. Online html editor with live HTML source code generation.",
    alternateName: [
      "HTML WYSIWYG Editor Online",
      "Free HTML WYSIWYG Editor",
      "Online HTML Editor",
      "HTML Editor Online",
      "Rich Text Editor",
    ],
    featureList: [
      "html wysiwyg editor - Visual editing",
      "html editor online - No install",
      "Live HTML source code generation",
      "Bold, italic, headings H1-H4",
      "Lists, blockquote, undo/redo",
      "html wysiwyg editor free",
      "100% client-side, no signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "HTML WYSIWYG editor online. Free html wysiwyg editor that generates HTML source code immediately as you type. Online html editor with rich text formatting—bold, italic, headings (H1, H2, H3, H4), lists, blockquote. html wysiwyg editor free, html wysiwyg editor open source style. html wysiwyg editor react, javascript wysiwyg editor alternative. Free html wysiwyg editor for Windows, Linux, Mac.",

    howToSteps: [
      "Type or paste content in the WYSIWYG editor. Use the toolbar for bold, italic, headings, lists.",
      "Watch the HTML source update in real time in the right panel.",
      "Click the copy icon to copy the generated HTML for use in your project.",
    ],

    features: [
      "html wysiwyg editor: What You See Is What You Get",
      "html editor online: No download, works in browser",
      "Live HTML source: Code generated immediately",
      "Rich text: Bold, italic, strikethrough",
      "Headings: H1, H2, H3, H4",
      "Lists: Bullet and numbered",
      "Blockquote, undo, redo",
      "html wysiwyg editor free",
    ],

    useCases: [
      "html wysiwyg editor online: Quick HTML snippets for web pages",
      "html editor: Blog posts, emails, landing pages",
      "javascript wysiwyg editor: Test rich text without CKEditor or TinyMCE",
      "html wysiwyg editor react: Prototype before integrating React rich text",
      "html wysiwyg editor vscode: Browser alternative for quick HTML",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          HTML WYSIWYG editor online lets you create formatted content visually
          and get the HTML source instantly. Free html wysiwyg editor—no
          signup, no install. html editor online for quick HTML generation.
          html wysiwyg editor free alternative to TinyMCE, CKEditor, Froala.
          html wysiwyg editor open source style. Works on html wysiwyg editor
          windows, html wysiwyg editor linux.
        </p>
      </div>
    ),

    proTip:
      "Use H1 for page titles, H2–H4 for sections. Copy the HTML and paste into your CMS, email template, or React/Vue component.",

    faqs: [
      {
        question: "What is an HTML WYSIWYG editor?",
        answer:
          "WYSIWYG means What You See Is What You Get. An html wysiwyg editor lets you format text visually (bold, headings, lists) and outputs the corresponding HTML code.",
      },
      {
        question: "Is there a free HTML WYSIWYG editor online?",
        answer:
          "Yes. This html wysiwyg editor free tool runs in your browser. html editor online, no signup. html wysiwyg editor open source compatible.",
      },
      {
        question: "How does the html editor online work?",
        answer:
          "Type in the visual panel. The HTML source updates in real time. Copy the HTML for use in your project. html wysiwyg editor online, free.",
      },
      {
        question: "Is this an html wysiwyg editor react?",
        answer:
          "This is a browser-based html wysiwyg editor. Use it as an html wysiwyg editor react alternative for quick HTML—or integrate similar logic into React with contenteditable.",
      },
      {
        question: "What about html wysiwyg editor vscode?",
        answer:
          "For VS Code, use Live Server or built-in preview. This html wysiwyg editor online is for quick visual HTML generation in the browser.",
      },
    ],

    additionalContent: [
      {
        heading: "html wysiwyg editor online — vs TinyMCE, CKEditor",
        content:
          "TinyMCE and CKEditor are full-featured javascript wysiwyg editor libraries. This html wysiwyg editor free tool is lighter—perfect for quick HTML generation without npm install. html editor online.",
      },
      {
        heading: "html wysiwyg editor free, html wysiwyg editor open source",
        content:
          "Free html wysiwyg editor. html wysiwyg editor open source style—uses contenteditable and standard browser APIs. No proprietary libraries.",
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
