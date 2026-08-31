import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const WordToMarkdown = dynamic(
  () => import("@/components/ai/markdown-word-converter").then((mod) => mod.WordToMarkdown),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Word to Markdown Converter",
  description:
    "Convert a Word .docx file to clean Markdown in your browser — headings, lists, tables, links, and emphasis preserved. Free, private, no upload.",
  metaTitle: "Word to Markdown Converter — .docx to Markdown, No Upload",
  metaDescription:
    "Free Word to Markdown converter. Drop a .docx file and get clean Markdown with headings, lists, tables, and links — ready for ChatGPT, GitHub, Notion, or Obsidian. Runs entirely in your browser.",
  path: "/ai-tools/word-to-markdown",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Browser tool that reads a Word .docx document and converts its structure — headings, lists, tables, links, emphasis — into clean GitHub-flavored Markdown.",
    alternateName: ["docx to markdown", "word to md"],
    featureList: [
      "Word heading styles become # Markdown headings",
      "Bulleted and numbered lists preserved",
      "Tables converted to GitHub-flavored Markdown tables",
      "Bold, italic, strikethrough, and hyperlinks preserved",
      "Copy to clipboard or download as .md",
      "100% client-side — the document never leaves the browser",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "Word to Markdown Converter",
    description:
      "Drop a .docx file and get clean Markdown — ready to paste into ChatGPT, GitHub, Notion, or Obsidian.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Word to Markdown Converter", href: "/ai-tools/word-to-markdown" },
  ],

  content: {
    definition:
      "A Word to Markdown converter reads the structure of a .docx document — heading styles, lists, tables, emphasis, links — and rewrites it as Markdown syntax, the plain-text format used by AI chat tools, GitHub, and note apps.",
    quickAnswer:
      "Drop a .docx file onto the tool (or choose it). The Markdown appears in seconds — copy it or download a .md file. Conversion happens in your browser, so the document is never uploaded.",
    overview:
      "More and more of what we write ends up in tools that speak Markdown: pasting a document into ChatGPT or Claude, publishing a README, moving notes into Obsidian or Notion. Word files don't paste well into any of them — you lose headings and lists, or get a wall of formatting noise. This converter reads the .docx structure directly and produces tidy Markdown that keeps the document's hierarchy, so a 20-page spec arrives in your AI chat or your repo as organized text rather than a blob. It runs entirely in your browser: confidential contracts and drafts stay on your machine.",
    keyTakeaways: [
      "Reads real Word structure — heading styles, list levels, tables — not just the visible text",
      "Outputs GitHub-flavored Markdown that ChatGPT, Claude, GitHub, Notion, and Obsidian all read",
      "Bold, italic, strikethrough, and hyperlinks are preserved",
      "Reports how many elements had no Markdown equivalent, so you know what to check",
      "Fully client-side: private, fast, no signup, no upload",
    ],
    howToSteps: [
      "Drag a .docx file onto the drop zone, or click Choose Word File.",
      "Wait a moment while the document is read in your browser.",
      "Review the Markdown in the output box.",
      "Copy it, or download it as a .md file.",
    ],
    features: [
      "Heading 1–6 styles mapped to # headings",
      "Nested bullet and numbered lists",
      "Tables converted to pipe-delimited Markdown tables",
      "Emphasis and links preserved",
      "Warning count for elements that don't translate",
      "One-click copy and .md download",
    ],
    useCases: [
      "Paste long Word documents into ChatGPT or Claude without losing structure",
      "Migrate documentation from Word into a GitHub repository or wiki",
      "Move company documents into Notion, Obsidian, or another Markdown note app",
      "Prepare .docx content for static-site generators and Markdown-based CMSs",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Structure Beats Plain Text for AI Chat</h3>
          <p>
            Language models read Markdown fluently — headings tell them where sections start, lists tell them what&rsquo;s
            enumerated, tables tell them what&rsquo;s tabular. Copying a Word file&rsquo;s visible text throws all of that
            away and leaves the model guessing at the document&rsquo;s shape; pasting Markdown that preserves the
            hierarchy produces noticeably better summaries, extractions, and rewrites. It also uses fewer tokens than the
            HTML that rich-text pastes sometimes carry.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Word Styles Become Markdown</h3>
          <p>
            The converter doesn&rsquo;t look at how text <em>appears</em>; it reads the semantic styles inside the .docx.
            A paragraph styled &ldquo;Heading 2&rdquo; becomes <code>##</code>, list paragraphs become <code>-</code> or
            <code>1.</code> items with their nesting, and Word tables become pipe tables. That means documents that use
            Word&rsquo;s real styles convert beautifully, while documents where someone made headings by manually bolding
            and enlarging text come out as ordinary bold paragraphs — because that&rsquo;s what they structurally are.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Gets Left Behind</h3>
          <p>
            Markdown is deliberately simple, so some Word features have no equivalent: embedded images, text boxes,
            footnotes, comments, tracked changes, page layout, fonts, and colors. Images are omitted, and layout-only
            formatting is dropped. The tool counts every element it couldn&rsquo;t translate so you can decide whether the
            result needs a manual pass. Legacy <code>.doc</code> files aren&rsquo;t supported — re-save them as .docx in Word
            first.
          </p>
        </div>
      </div>
    ),

    proTip:
      "If a document's headings come out as plain bold text, the author didn't use Word's heading styles. Apply Heading 1/2/3 in Word once, re-save, and re-convert — the Markdown hierarchy will appear.",

    faqs: [
      {
        question: "Is my Word document uploaded anywhere?",
        answer:
          "No. The .docx is read and converted entirely inside your browser. It never touches a server, which makes the tool safe for confidential documents.",
      },
      {
        question: "Does it work with Google Docs files?",
        answer:
          "Yes — download the Google Doc as a Word file (File → Download → Microsoft Word .docx) and drop that in. Google's export preserves heading styles, so the Markdown comes out well structured.",
      },
      {
        question: "Why are images missing from the Markdown?",
        answer:
          "Markdown can only reference images by URL, and a Word file's images are embedded binary data with no URL. The converter omits them rather than emitting broken links, and counts them in the warning total so you know how many to re-add.",
      },
      {
        question: "Can I convert Markdown back to Word?",
        answer:
          "Yes — the companion Markdown to Word converter goes the other direction and builds a formatted .docx from Markdown, also in your browser.",
      },
    ],

    relatedTools: [
      { name: "Markdown to Word Converter", href: "/ai-tools/markdown-to-word" },
      { name: "LLM Token Counter", href: "/ai-tools/token-counter" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function WordToMarkdownPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<WordToMarkdown />)} />
}
