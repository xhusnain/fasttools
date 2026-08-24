import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const TokenCounter = dynamic(
  () => import("@/components/ai/token-counter").then((mod) => mod.TokenCounter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "LLM Token Counter",
  description:
    "Count tokens for GPT-5, GPT-4o, Claude, Gemini, and Llama. Exact counts with OpenAI's real tokenizers, honest estimates for the rest — live, in your browser.",
  metaTitle: "LLM Token Counter — GPT-5, Claude & Gemini Token Counts",
  metaDescription:
    "Free LLM token counter. Paste text for exact GPT-5/GPT-4o token counts (real o200k_base tokenizer) plus Claude, Gemini, and Llama estimates and context-window fit. 100% in-browser.",
  path: "/ai-tools/token-counter",

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Browser-based token counter for large language models with exact OpenAI tokenizer counts, estimates for Claude/Gemini/Llama, and context-window fit meters.",
    alternateName: ["AI token counter", "tiktoken counter online"],
    featureList: [
      "Exact o200k_base counts for GPT-5 and GPT-4o",
      "Exact cl100k_base counts for GPT-4 and GPT-3.5",
      "Clearly-labelled estimates for Claude, Gemini, and Llama",
      "Context-window fit meters (128k, 200k, 1M)",
      "Live word and character counts",
      "100% client-side — text never leaves the browser",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "LLM Token Counter",
    description:
      "Paste any text and see how many tokens it becomes for GPT-5, GPT-4o, Claude, Gemini, or Llama — with context-window fit at a glance.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "LLM Token Counter", href: "/ai-tools/token-counter" },
  ],

  content: {
    definition:
      "An LLM token counter measures how many tokens — the subword units language models actually read and bill by — a piece of text becomes for a given model family.",
    quickAnswer:
      "Pick a model, paste your text, and read the live count. GPT figures are exact (computed with OpenAI's published tokenizers); Claude and Gemini figures are labelled estimates because those tokenizers aren't public. Context-window bars show how much room your text uses.",
    overview:
      "Every LLM request is measured, limited, and billed in tokens, yet most people still budget in words. This counter closes that gap: it runs OpenAI's real tokenizer vocabularies in your browser for exact GPT-5 and GPT-4o counts, provides honest estimates for Claude, Gemini, and open models, and shows the result against each model's context window. The count updates as you type, and nothing you paste leaves your device.",
    keyTakeaways: [
      "Exact counts for OpenAI models using the same o200k_base/cl100k_base vocabularies the models use",
      "Claude and Gemini counts are honest estimates — those tokenizers aren't public",
      "English prose averages ~1.3 tokens per word; code and non-English text run denser",
      "Context-window bars for 128k, 200k, and 1M windows show real headroom",
      "Fully client-side: fast, private, no signup",
    ],
    howToSteps: [
      "Choose the model family you're targeting.",
      "Paste or type your text — the count updates live.",
      "Read tokens, words, and characters side by side.",
      "Check the context-window meters before sending long prompts.",
    ],
    features: [
      "Five model families: GPT-5/4o, GPT-4/3.5, Claude, Gemini, Llama",
      "Real tiktoken vocabularies loaded on demand",
      "Context-window fit visualization",
      "Live recount on every keystroke",
      "Exact vs estimate labelling on every figure",
      "No text ever uploaded",
    ],
    useCases: [
      "Verify a prompt fits a model's context window before an API call",
      "Estimate and compare API costs across providers",
      "Trim system prompts and RAG chunks to a token budget",
      "Debug why a request was truncated or rejected for length",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What a Token Actually Is</h3>
          <p>
            Language models don&rsquo;t read words or characters — they read tokens, subword chunks produced by byte-pair
            encoding. Common words are one token; rarer words split into several; spaces attach to the word that follows;
            emoji and non-Latin scripts can take multiple tokens each. That&rsquo;s why the same 500-word email can be 600
            tokens of plain prose or 900 tokens of dense code, and why counting beats any words-times-a-constant rule.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Exact Where Possible, Honest Where Not</h3>
          <p>
            OpenAI publishes its tokenizer vocabularies, so GPT counts here are computed with the genuine article and match
            API billing for the text itself. Anthropic and Google don&rsquo;t publish theirs, so no browser tool can count
            Claude or Gemini exactly — this one labels those figures as estimates (typically within ±15%) and the dedicated
            Claude and Gemini pages explain how to get exact numbers from each provider&rsquo;s API.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Tokens Are Money and Memory</h3>
          <p>
            Two practical things are denominated in tokens: cost, since API pricing is per million tokens in and out, and
            memory, since a model&rsquo;s context window caps how much it can consider at once. In multi-turn chats the
            entire history is re-sent on every turn, so conversations grow quadratically in billed tokens — the counter
            makes that growth visible before your invoice does. For turning counts into dollars across providers, the AI
            API cost calculator picks up where this page leaves off.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Token-dense inputs — code, JSON, tables, non-English text — routinely count 50–100% higher than prose of the same length. Count the real payload, not a prose-length guess.",

    faqs: [
      {
        question: "How many tokens are in 1,000 words?",
        answer:
          "Around 1,300 for typical English prose with modern tokenizers, but it varies with vocabulary: simple prose runs lower, technical text and code run higher. Paste the actual text for the real number.",
      },
      {
        question: "Are the GPT counts really exact?",
        answer:
          "Yes — the tool loads OpenAI's published o200k_base and cl100k_base vocabularies and runs the same encoding the models use. The API adds a few framing tokens per message, so billed totals sit slightly above the raw text count.",
      },
      {
        question: "Why are Claude and Gemini counts estimates?",
        answer:
          "Anthropic and Google haven't released their tokenizers, so exact client-side counting is impossible for anyone. This tool estimates with a comparable vocabulary and says so, rather than presenting a borrowed number as exact.",
      },
      {
        question: "Is my text sent to a server?",
        answer:
          "No. The tokenizer runs entirely in your browser via WebAssembly-free JavaScript. Nothing is uploaded, logged, or stored.",
      },
    ],

    relatedTools: [
      { name: "ChatGPT Token Counter", href: "/ai-tools/token-counter/chatgpt" },
      { name: "Claude Token Counter", href: "/ai-tools/token-counter/claude" },
      { name: "Gemini Token Counter", href: "/ai-tools/token-counter/gemini" },
      { name: "AI API Cost Calculator", href: "/ai-tools/ai-api-cost-calculator" },
      { name: "LLM VRAM Calculator", href: "/ai-tools/llm-vram-calculator" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TokenCounterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<TokenCounter />)} />
}
