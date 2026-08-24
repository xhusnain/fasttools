import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AiTextCleaner = dynamic(
  () => import("@/components/ai/ai-text-cleaner").then((mod) => mod.AiTextCleaner),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Text Cleaner",
  description:
    "Remove ChatGPT formatting from any text: em dashes, smart quotes, markdown leftovers, and invisible characters — instantly, in your browser.",
  metaTitle: "AI Text Cleaner — Remove ChatGPT Formatting & Em Dashes",
  metaDescription:
    "Free AI text cleaner. Paste output from ChatGPT, Claude, or Gemini and strip em dashes, smart quotes, markdown symbols, and hidden Unicode characters in one click. 100% in-browser.",
  path: "/ai-tools/ai-text-cleaner",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Browser tool that removes AI-writing formatting artifacts: em dashes, smart quotes, markdown symbols, ellipsis characters, and invisible Unicode characters.",
    alternateName: ["remove ChatGPT formatting", "AI formatting remover"],
    featureList: [
      "Em and en dash replacement (comma, hyphen, or remove)",
      "Smart quotes to straight quotes",
      "Markdown symbol stripping (bold, headings, backticks)",
      "Invisible Unicode removal (zero-width spaces, soft hyphens)",
      "Per-category count of what was found",
      "100% client-side — text never leaves the browser",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "AI Text Cleaner",
    description:
      "Paste text from ChatGPT, Claude, or Gemini and strip the formatting artifacts that give it away — em dashes, smart quotes, markdown symbols, and hidden characters.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Text Cleaner", href: "/ai-tools/ai-text-cleaner" },
  ],

  content: {
    definition:
      "An AI text cleaner strips the formatting artifacts that large language models add to their output — em dashes, curly smart quotes, markdown symbols, ellipsis characters, and invisible Unicode — leaving plain text that pastes cleanly anywhere.",
    quickAnswer:
      "Paste your text, tick what you want cleaned, and click Clean Text. The tool shows exactly how many dashes, smart quotes, markdown marks, and hidden characters it found, and gives you plain text to copy. Everything runs in your browser.",
    overview:
      "Copy a paragraph out of a chatbot and it rarely arrives as plain text: bold markers survive as double asterisks, quotes are the curly kind, sentences lean on long dashes, and sometimes there are characters you cannot see at all. This tool fixes that in one pass. Choose how dashes should be handled — swapped for commas, plain hyphens, or removed — and get a count of every artifact so you know what was actually in your clipboard.",
    keyTakeaways: [
      "Cleans the five most common AI-output artifacts: dashes, smart quotes, markdown, ellipses, and invisible characters",
      "Em dashes can be replaced with commas, hyphens, or removed entirely — your choice",
      "Detects invisible Unicode (zero-width spaces, non-breaking spaces, soft hyphens) that breaks pasted code and search",
      "Reports a per-category count so you can see exactly what was found",
      "Runs entirely in your browser — nothing is uploaded or stored",
    ],
    howToSteps: [
      "Paste text copied from ChatGPT, Claude, Gemini, or any AI assistant.",
      "Tick the artifact types you want cleaned and pick how dashes should be replaced.",
      "Click Clean Text and review the counts of what was found.",
      "Copy the plain-text result with one click.",
    ],
    features: [
      "One-click cleanup of dashes, quotes, markdown, and hidden characters",
      "Three dash-handling modes: comma, hyphen, or remove",
      "Invisible-character detection most editors can't show you",
      "Artifact counts per category after every run",
      "No signup, no limits, works on phone and desktop",
      "100% client-side processing",
    ],
    useCases: [
      "Clean chatbot answers before pasting them into emails or documents",
      "Strip markdown symbols from AI output destined for plain-text fields",
      "Remove hidden Unicode from text that breaks forms, CSVs, or code",
      "Normalize quotes and dashes to match a house style guide",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why AI Text Has These Artifacts</h3>
          <p>
            Language models are trained on published writing — books, articles, and edited web copy — where typographically
            &ldquo;correct&rdquo; punctuation dominates: em dashes for asides, curly quotes, and real ellipsis characters. Chat
            interfaces then render answers as markdown, so bold text arrives as double asterisks and headings as hash marks
            when you copy it. None of this is wrong, but it looks out of place in an email, breaks plain-text forms, and has
            become a recognizable signature of machine-generated writing.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The Invisible-Character Problem</h3>
          <p>
            Beyond what you can see, copied text often carries characters you can&rsquo;t: zero-width spaces, word joiners,
            non-breaking spaces, and soft hyphens. These survive pasting, break exact-match searches, corrupt CSV imports,
            and cause baffling syntax errors when they land inside code. Because most editors render them as nothing at all,
            the only way to deal with them is a tool that detects and strips them explicitly — this one reports exactly how
            many it found.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What This Tool Deliberately Doesn&rsquo;t Do</h3>
          <p>
            This is a formatting cleaner, not a &ldquo;humanizer.&rdquo; It does not rewrite sentences, swap vocabulary, or try
            to defeat AI-content detectors — the words stay exactly as you pasted them. If you want to rephrase the text
            itself, use the AI paraphraser and then run the result through this cleaner for plain-text output.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Run the cleaner even when text looks fine — invisible characters are the artifacts that cause the strangest bugs, and the counts will tell you if any were hiding in your clipboard.",

    faqs: [
      {
        question: "Does this change the wording of my text?",
        answer:
          "No. Only punctuation and formatting characters are touched — dashes, quotes, markdown symbols, ellipses, and invisible characters. Every word stays exactly as written.",
      },
      {
        question: "Is my text uploaded to a server?",
        answer:
          "No. The cleaning runs entirely in your browser with JavaScript. Nothing you paste is sent, logged, or stored anywhere.",
      },
      {
        question: "Why would I replace em dashes with commas?",
        answer:
          "AI assistants use em dashes far more often than most human writers, so heavy dash use has become a tell. A comma is the closest grammatical substitute in most sentences; the hyphen option keeps a visual pause instead, and you can also remove them outright.",
      },
      {
        question: "Will this make text pass AI detectors?",
        answer:
          "That's not what it's for. Detectors analyze word choice and sentence structure, not punctuation. This tool just gives you clean plain text — it doesn't rewrite anything.",
      },
    ],

    relatedTools: [
      { name: "Em Dash Remover", href: "/ai-tools/ai-text-cleaner/em-dash-remover" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "AI Text Detector", href: "/ai-tools/ai-text-detector" },
      { name: "Text Case Converter", href: "/converters/text-case" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AiTextCleanerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AiTextCleaner />)} />
}
