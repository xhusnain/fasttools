import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const AiTokenToWordConverter = dynamic(
  () =>
    import("@/components/ai/ai-token-to-word-converter").then(
      (mod) => mod.AiTokenToWordConverter
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Token to Word Converter",
  description:
    "Estimate token and word counts for LLM prompts and response planning.",
  metaTitle: "Token to Word Converter for OpenAI, Claude, Gemini",
  metaDescription:
    "Convert tokens to words and words to tokens for prompt sizing, context planning, and rough API cost estimation.",
  path: "/ai-tools/token-to-word-converter",
  keywords: [
    "token to word converter",
    "words to tokens calculator",
    "llm token estimator",
    "openai token calculator",
    "prompt token count",
  ],

  header: {
    title: "Token to Word Converter",
    description:
      "Estimate prompt size quickly before sending requests to LLM APIs.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    {
      label: "Token to Word Converter",
      href: "/ai-tools/token-to-word-converter",
    },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Convert token counts to word estimates and reverse for LLM planning workflows.",
    alternateName: ["LLM Token Converter", "Token Word Estimator"],
    featureList: [
      "Token-to-word conversion",
      "Word-to-token conversion",
      "Copy-ready output",
      "Quick reset and recalculation",
      "Prompt planning support",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "This calculator gives a practical token-word estimate so you can size prompts, rough-check model limits, and plan API usage before running jobs. It is designed for fast utility workflows where approximate sizing is sufficient.",

    howToSteps: [
      "Choose the conversion direction: tokens-to-words or words-to-tokens.",
      "Enter your value as a whole number or decimal.",
      "Run the conversion and copy the estimated output.",
      "Use the estimate to plan prompt size, context usage, and expected cost range.",
    ],

    features: [
      "Two-way conversion in a single UI",
      "Copy-ready output for planning docs",
      "Fast reset for repeat calculations",
      "Input cleanup for simple number formats",
      "Useful for pre-flight LLM budget checks",
    ],

    useCases: [
      "Prompt engineering and context window planning",
      "Rough API cost forecasting",
      "Content brief sizing before batch generation",
      "Team handoff for model usage estimates",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Tokenization differs by model and tokenizer implementation, so this
          page intentionally frames results as estimates. It helps you move fast
          during planning while keeping expectations realistic.
        </p>
        <p>
          For production-critical counting, use model-specific tokenizers. For
          daily planning and editorial workflows, a fast approximation is often
          enough to avoid oversized prompts and unexpected spend.
        </p>
      </div>
    ),

    proTip:
      "Use this converter as a pre-check, then validate with the exact tokenizer used by your target model for final production limits.",

    faqs: [
      {
        question: "Is token-to-word conversion exact?",
        answer:
          "No. It is an estimate because tokenization varies by model, language, punctuation, and formatting.",
      },
      {
        question: "Why do token counts differ between models?",
        answer:
          "Each model family may use different tokenization rules, so the same text can produce different counts.",
      },
      {
        question: "Can I use this for API cost planning?",
        answer:
          "Yes, for rough planning. For precise billing estimates, confirm with the tokenizer and pricing model of your target provider.",
      },
      {
        question: "What baseline ratio does this page use?",
        answer:
          "It uses an approximate English baseline where one token is roughly 0.75 words.",
      },
      {
        question: "When should I use an exact tokenizer instead?",
        answer:
          "Use an exact tokenizer when you are near context limits, pricing thresholds, or any production guardrail that requires precision.",
      },
    ],

    additionalContent: [
      {
        heading: "Estimate vs Exact Counting",
        content:
          "Estimates are best for quick planning. Exact token counting is required for model-limit enforcement and deterministic cost controls.",
      },
      {
        heading: "Planning Workflow",
        content:
          "A practical flow is estimate first, draft prompt, then validate exact tokens before running high-volume or long-context requests.",
      },
    ],

    relatedTools: [
      { name: "AI Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TokenToWordConverterPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiTokenToWordConverter />
        </div>
      )}
    />
  )
}
