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
  toolName: "Em Dash Remover",
  description:
    "Remove em dashes from ChatGPT text in one click — replace them with commas or hyphens, or delete them entirely. Free and in-browser.",
  metaTitle: "Em Dash Remover — Remove Em Dashes From ChatGPT Text",
  metaDescription:
    "Free em dash remover. Paste AI-generated text and replace every em dash (—) with a comma or hyphen, or remove them entirely. Shows how many it found. No signup, runs in your browser.",
  path: "/ai-tools/ai-text-cleaner/em-dash-remover",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Browser tool that finds every em dash and en dash in pasted text and replaces them with commas or hyphens, or removes them.",
    alternateName: ["remove em dashes from ChatGPT", "dash remover"],
    featureList: [
      "Counts every em dash and en dash before changing anything",
      "Replace with comma, replace with hyphen, or remove",
      "Optional cleanup of smart quotes, markdown, and hidden characters",
      "100% client-side — text never leaves the browser",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "Em Dash Remover",
    description:
      "Paste your text, choose what should replace each — dash, and copy the result. Counts every dash it finds.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Text Cleaner", href: "/ai-tools/ai-text-cleaner" },
    { label: "Em Dash Remover", href: "/ai-tools/ai-text-cleaner/em-dash-remover" },
  ],

  content: {
    definition:
      "An em dash remover finds every em dash (—) and en dash (–) in a block of text and swaps each one for a comma or hyphen — or deletes it — producing prose that reads the way most people actually write.",
    quickAnswer:
      "Paste the text, pick a replacement style (comma, hyphen, or remove), and click Clean Text. The tool reports how many dashes it found and gives you the result to copy. It runs entirely in your browser.",
    overview:
      "The em dash became the most talked-about punctuation mark of the AI era for a simple reason: chatbots reach for it constantly, and most human writers don't. If you paste assistant output into an email or a doc, a paragraph with three long dashes reads instantly as machine-written. This page is the dash-focused preset of the AI Text Cleaner — it opens with dash replacement switched on and everything else optional, so one click gives you dash-free text without touching your wording.",
    keyTakeaways: [
      "Finds both em dashes (—) and en dashes (–), and counts them before changing anything",
      "Three replacement styles: comma (reads most naturally), hyphen (keeps the pause), or full removal",
      "Only punctuation changes — your wording is never rewritten",
      "Can also clean smart quotes, markdown symbols, and invisible characters in the same pass",
      "Free, no signup, and fully in-browser",
    ],
    howToSteps: [
      "Paste the text that contains the dashes.",
      "Choose comma, hyphen, or remove as the replacement style.",
      "Click Clean Text and check the dash count it reports.",
      "Copy the cleaned result.",
    ],
    features: [
      "Handles em dashes and en dashes in one pass",
      "Replacement preview shown for each mode before you run it",
      "Dash count reported after every clean",
      "Optional smart-quote, markdown, and hidden-character cleanup",
      "Works on phone, tablet, and desktop",
      "100% client-side processing",
    ],
    useCases: [
      "De-dash chatbot replies before sending them as emails or messages",
      "Match a style guide that prefers commas or parentheses over dashes",
      "Clean up essays and reports where dash-heavy sentences read as AI-written",
      "Batch-fix documents pasted together from multiple AI answers",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why AI Writing Is Full of Long Dashes</h3>
          <p>
            Language models learn punctuation statistics from edited, published prose — the kind of writing where em dashes
            are used liberally for asides and emphasis. Casual human writing uses them far less, so when an assistant's reply
            leans on them in every other sentence, readers notice. The mark itself is perfectly good English; it's the
            frequency that reads as machine-generated.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Which Replacement Should You Pick?</h3>
          <p>
            The comma is right most of the time: in sentences like &ldquo;the tool is fast — and free,&rdquo; a comma
            preserves the rhythm without the typographic flourish. Pick the hyphen when the dash marks a real break in
            thought you want to keep visible. Full removal works best when dashes were used decoratively and the sentence
            reads fine without any pause at all — skim the output afterward, since no automatic rule fits every sentence.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">En Dashes Get Fixed Too</h3>
          <p>
            Assistants also emit the slightly narrower en dash (–) for ranges and connections, and it has the same
            recognizability problem. This tool treats both marks together, so &ldquo;2024–2026&rdquo; and &ldquo;fast —
            simple&rdquo; are handled in the same pass instead of leaving one type of dash behind.
          </p>
        </div>
      </div>
    ),

    proTip:
      "After cleaning, search the result for a double space — if a dash sat between two spaces, some replacement styles can leave one behind, and it's the last visible trace worth checking.",

    faqs: [
      {
        question: "What's the difference between an em dash, an en dash, and a hyphen?",
        answer:
          "The em dash (—) is the widest and marks a break in thought. The en dash (–) is narrower and joins ranges like 2024–2026. The hyphen (-) is the short one on your keyboard that joins words. This tool converts the first two; hyphens are left alone.",
      },
      {
        question: "Does removing em dashes make text undetectable as AI?",
        answer:
          "No. Detectors look at word choice and sentence patterns, not punctuation marks. This tool is about making text read and paste the way you want, not about evading detection.",
      },
      {
        question: "Can I clean other AI artifacts at the same time?",
        answer:
          "Yes — the checkboxes above the button also cover smart quotes, markdown symbols like ** and ##, ellipsis characters, and invisible Unicode. Tick whichever you want handled in the same pass.",
      },
      {
        question: "Is there a limit on text length?",
        answer:
          "No practical one. Processing happens locally in your browser, so even very long documents clean in a fraction of a second.",
      },
    ],

    relatedTools: [
      { name: "AI Text Cleaner", href: "/ai-tools/ai-text-cleaner" },
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "AI Text Detector", href: "/ai-tools/ai-text-detector" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function EmDashRemoverPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AiTextCleaner focusEmDashes />)} />
}
