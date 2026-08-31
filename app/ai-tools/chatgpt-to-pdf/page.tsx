import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const ChatToPdf = dynamic(
  () => import("@/components/ai/chat-to-pdf").then((mod) => mod.ChatToPdf),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "ChatGPT to PDF",
  description:
    "Save a ChatGPT, Claude, or Gemini conversation as a clean PDF — paste the chat, get formatted messages with rendered code and tables, and save. Free, in-browser.",
  metaTitle: "ChatGPT to PDF — Save Any AI Conversation as a Clean PDF",
  metaDescription:
    "Free ChatGPT to PDF exporter. Paste a ChatGPT, Claude, or Gemini conversation and save it as a clean, readable PDF with chat bubbles, rendered Markdown, code blocks, and tables. No signup, nothing uploaded.",
  path: "/ai-tools/chatgpt-to-pdf",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Browser tool that formats a pasted AI chat conversation into a clean printable document with speaker labels, rendered Markdown, code blocks, and tables, and saves it as a PDF.",
    alternateName: ["save ChatGPT conversation as PDF", "export ChatGPT chat"],
    featureList: [
      "Automatic detection of 'You said' / 'ChatGPT said' speaker turns",
      "Markdown rendering: headings, lists, tables, code blocks, links",
      "Chat-bubble or plain document layout",
      "Custom title, assistant label, date, and text size",
      "Save as PDF via the browser, or download as HTML",
      "100% client-side — the conversation is never uploaded",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "ChatGPT to PDF",
    description:
      "Paste a conversation from ChatGPT, Claude, or Gemini and save it as a clean, readable PDF — code, tables, and formatting intact.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "ChatGPT to PDF", href: "/ai-tools/chatgpt-to-pdf" },
  ],

  content: {
    definition:
      "A ChatGPT to PDF exporter takes the text of an AI chat conversation, restores its structure — who said what, plus the Markdown formatting inside each message — and produces a clean printable document you save as a PDF.",
    quickAnswer:
      "In ChatGPT, select the whole conversation (Ctrl/Cmd + A), copy, and paste it here. The tool detects each turn, renders the formatting, and shows a preview. Click Save as PDF, choose 'Save as PDF' in the print dialog, and you're done — nothing is uploaded.",
    overview:
      "Printing a chat straight from the browser gives you a mess: cut-off sidebars, dark backgrounds, buttons, and code blocks that overflow the page. Sharing a link isn't always possible, and links break when conversations are deleted. This tool gives you a proper document instead. Paste the copied chat and it recognizes the 'You said' / 'ChatGPT said' turns, renders the Markdown inside each message — headings, bullet lists, tables, and code with proper wrapping — and lays it out for paper with optional chat bubbles, a title, and the date. Everything happens in your browser; the conversation never leaves your device.",
    keyTakeaways: [
      "Detects speaker turns from ChatGPT, Claude, and Gemini copies automatically",
      "Renders Markdown inside messages — code blocks wrap instead of overflowing the page",
      "Chat-bubble or plain document layout, with title, date, and text-size controls",
      "Also exports a standalone HTML file you can archive or share",
      "Fully client-side: private, free, no account",
    ],
    howToSteps: [
      "Open the conversation, press Ctrl/Cmd + A to select it all, then copy.",
      "Paste into the box — the tool reports how many turns it detected.",
      "Set a title, pick bubbles or plain layout, and adjust text size.",
      "Click Save as PDF and choose 'Save as PDF' as the destination in the print dialog.",
    ],
    features: [
      "Speaker detection for 'You said' / 'ChatGPT said' and common label formats",
      "Full Markdown rendering: headings, lists, tables, quotes, links, fenced code",
      "Page-break-aware layout so messages don't split awkwardly",
      "Custom document title and assistant label (ChatGPT, Claude, Gemini…)",
      "Live preview before saving",
      "Download as HTML for archiving",
    ],
    useCases: [
      "Archive important research or troubleshooting conversations before they're lost",
      "Share an AI-assisted analysis with colleagues who don't use the tool",
      "Submit conversation transcripts for coursework, compliance, or documentation",
      "Keep a printed record of instructions, recipes, or plans an assistant produced",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Not Just Print the Chat Page?</h3>
          <p>
            Chat interfaces are built for scrolling, not paper. Browser printing captures the sidebar, the input box,
            dark theme backgrounds, and buttons, while long code blocks get clipped at the page edge and conversations
            split mid-sentence across pages. The result is often twice as many pages as the content deserves and half of
            them unreadable. Rebuilding the conversation as a document — text, structure, and nothing else — is what makes
            the PDF clean.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How Speaker Detection Works</h3>
          <p>
            When you copy a ChatGPT conversation, each turn arrives prefixed with &ldquo;You said:&rdquo; or
            &ldquo;ChatGPT said:&rdquo;. Claude, Gemini, and most other tools produce similar labels, and many people
            paste transcripts written as &ldquo;User:&rdquo; and &ldquo;Assistant:&rdquo;. The tool recognizes all of
            these, splits the text into turns, and assigns each one a side. If it finds no labels at all, it treats the
            paste as a single document and simply renders the Markdown — so it works for a lone long answer too.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">PDF Without Uploading Anything</h3>
          <p>
            Many &ldquo;chat to PDF&rdquo; services send your conversation to a server to render it. This one
            doesn&rsquo;t: the document is assembled in your browser and handed to the browser&rsquo;s own print engine,
            which every modern browser can save as a PDF. That keeps private conversations private and means there is no
            page limit, no queue, and no account. If you prefer a file you can edit, the HTML download gives you the same
            document as a standalone page.
          </p>
        </div>
      </div>
    ),

    proTip:
      "In the print dialog, turn off 'Headers and footers' and set margins to Default — you get a cleaner page without the browser's URL and timestamp stamped on every sheet.",

    faqs: [
      {
        question: "Can it export directly from a ChatGPT share link?",
        answer:
          "No — reading a share link would require fetching your conversation through a server, which is exactly what this tool avoids. Copying the chat (Ctrl/Cmd + A, then copy) takes two seconds and keeps everything on your device.",
      },
      {
        question: "Does it work with Claude and Gemini conversations?",
        answer:
          "Yes. Speaker detection covers the labels those tools produce when copied, and you can set the assistant label to 'Claude' or 'Gemini' so the PDF reads correctly.",
      },
      {
        question: "Why does it open a print dialog instead of downloading a PDF?",
        answer:
          "The browser's print engine is the most reliable way to produce a high-quality PDF without uploading your text: choose 'Save as PDF' as the destination and it saves like any download. It also gives you paper size and margin control.",
      },
      {
        question: "Are images from the conversation included?",
        answer:
          "Images generated or uploaded in a chat don't come along when you copy the text, so they aren't in the PDF. Text, code, tables, and links are all preserved.",
      },
    ],

    relatedTools: [
      { name: "Markdown to Word Converter", href: "/ai-tools/markdown-to-word" },
      { name: "AI Text Cleaner", href: "/ai-tools/ai-text-cleaner" },
      { name: "LLM Token Counter", href: "/ai-tools/token-counter" },
      { name: "AI Prompt Generator", href: "/ai-tools/prompt-generator" },
      { name: "PDF Splitter & Merger", href: "/pdf-tools/pdf-splitter-merger" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ChatGptToPdfPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<ChatToPdf />)} />
}
