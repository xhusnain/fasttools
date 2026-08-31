import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const MarkdownToWord = dynamic(
  () => import("@/components/ai/markdown-word-converter").then((mod) => mod.MarkdownToWord),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Markdown to Word Converter",
  description:
    "Convert Markdown to a real Word document (.docx) in your browser — headings, lists, tables, code blocks, and links become native Word formatting. Free, no upload.",
  metaTitle: "Markdown to Word Converter — Free .docx Download, No Upload",
  metaDescription:
    "Free Markdown to Word converter. Paste Markdown from ChatGPT, Claude, Notion, or GitHub and download a formatted .docx with real headings, lists, tables, and code blocks. 100% in-browser.",
  path: "/ai-tools/markdown-to-word",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Browser tool that converts Markdown text into a native Word .docx document with real heading styles, lists, tables, code formatting, and hyperlinks.",
    alternateName: ["markdown to docx", "md to word"],
    featureList: [
      "Native Word heading styles (Heading 1–6) from # headings",
      "Bulleted and numbered lists, including nesting",
      "Tables with header rows",
      "Code blocks and inline code in monospace with shading",
      "Bold, italic, strikethrough, links, and block quotes",
      "100% client-side — text never leaves the browser",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "Markdown to Word Converter",
    description:
      "Paste Markdown — from ChatGPT, Claude, Notion, or GitHub — and download a properly formatted Word document.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Markdown to Word Converter", href: "/ai-tools/markdown-to-word" },
  ],

  content: {
    definition:
      "A Markdown to Word converter turns Markdown syntax — # headings, **bold**, - lists, | tables |, ```code``` — into the equivalent native formatting inside a .docx file, so the document opens in Word, Google Docs, or Pages looking the way the Markdown intended.",
    quickAnswer:
      "Paste your Markdown, click Download Word, and a .docx file saves to your device with real Word headings, lists, tables, and code formatting. Use Preview Formatting first if you want to see how it will look. Nothing is uploaded.",
    overview:
      "AI assistants answer in Markdown, and Word doesn't read Markdown — paste a ChatGPT reply into a document and you get literal asterisks, pound signs, and pipe characters where the formatting should be. This converter fixes the handoff. It parses the Markdown structure and builds a genuine .docx: headings become Word heading styles (so the navigation pane and table of contents work), lists become real lists, tables become real tables, and code keeps a monospace, shaded look. The conversion runs entirely in your browser, so drafts, reports, and anything confidential stay on your device.",
    keyTakeaways: [
      "Produces real Word structure — heading styles, lists, and tables — not pasted text with symbols",
      "Handles the full everyday Markdown set: headings, emphasis, lists, tables, code, quotes, links, rules",
      "Nested lists and numbered lists keep their hierarchy",
      "Opens cleanly in Microsoft Word, Google Docs, LibreOffice, and Apple Pages",
      "Fully client-side: fast, private, no signup, no file limits",
    ],
    howToSteps: [
      "Paste Markdown into the box, or upload a .md file.",
      "Optionally click Preview Formatting to check the result.",
      "Click Download Word (.docx).",
      "Open the file in Word or Google Docs — the formatting is already applied.",
    ],
    features: [
      "Heading 1–6 mapped to Word's built-in heading styles",
      "Nested bullet and numbered lists",
      "GitHub-style tables with shaded header rows",
      "Fenced code blocks and inline code in Consolas",
      "Block quotes, horizontal rules, task-list checkboxes",
      "Clickable hyperlinks preserved",
    ],
    useCases: [
      "Turn a ChatGPT or Claude answer into a shareable Word report",
      "Export Notion, Obsidian, or GitHub README content for people who live in Word",
      "Hand in Markdown-written essays and documentation as .docx",
      "Convert meeting notes and specs written in Markdown for corporate review workflows",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Pasting Markdown Into Word Goes Wrong</h3>
          <p>
            Markdown is plain text with formatting <em>hints</em>: two asterisks mean bold, a pound sign means heading, a
            pipe grid means table. Word has no idea about any of that — it treats the symbols as literal characters, so
            pasted AI output arrives full of <code>**</code> and <code>##</code>. Word&rsquo;s own &ldquo;paste as
            formatted&rdquo; only helps when the source was already rich text, which a chat window usually isn&rsquo;t.
            The fix is to interpret the hints and build genuine Word formatting from them, which is exactly what this tool
            does before you ever open the file.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Real Heading Styles Matter</h3>
          <p>
            The converter maps <code>#</code> through <code>######</code> to Word&rsquo;s built-in Heading 1–6 styles
            rather than just making text big and bold. That distinction is what makes Word&rsquo;s navigation pane,
            automatic table of contents, and outline view work — and it lets you restyle the whole document by changing
            one heading style instead of editing every title by hand. Lists and tables are built as native list and table
            objects for the same reason: they behave like Word content, not like pasted text that happens to look right.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Doesn&rsquo;t Carry Over</h3>
          <p>
            Images referenced by URL aren&rsquo;t downloaded and embedded — they appear as a labeled placeholder you can
            replace, since fetching arbitrary web images from your browser is unreliable and slow. Raw HTML embedded in
            Markdown is reduced to its text. Footnotes and math notation are rendered as plain text. Everything else in
            everyday Markdown converts faithfully, and the preview shows you the result before you download.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Start your Markdown with a single # heading — it becomes both the document's title and the downloaded file's name, so you never end up with a folder full of 'document.docx'.",

    faqs: [
      {
        question: "Is my document uploaded to a server?",
        answer:
          "No. The Markdown is parsed and the .docx is assembled entirely in your browser with JavaScript. Nothing you paste is sent anywhere, which also means there's no file-size limit beyond what your browser can handle.",
      },
      {
        question: "Will it open in Google Docs?",
        answer:
          "Yes. The output is a standard .docx file, so it opens in Google Docs, Microsoft Word, LibreOffice Writer, and Apple Pages with the headings, lists, and tables intact.",
      },
      {
        question: "Does it handle ChatGPT's formatting?",
        answer:
          "That's the main use. ChatGPT, Claude, and Gemini all answer in standard Markdown — headings, bold, bullet lists, numbered steps, tables, and fenced code — and every one of those converts to the matching Word formatting.",
      },
      {
        question: "Can I convert Word back to Markdown?",
        answer:
          "Yes — use the companion Word to Markdown converter, which reads a .docx file and produces clean Markdown, also entirely in your browser.",
      },
    ],

    relatedTools: [
      { name: "Word to Markdown Converter", href: "/ai-tools/word-to-markdown" },
      { name: "ChatGPT to PDF", href: "/ai-tools/chatgpt-to-pdf" },
      { name: "AI Text Cleaner", href: "/ai-tools/ai-text-cleaner" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function MarkdownToWordPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<MarkdownToWord />)} />
}
