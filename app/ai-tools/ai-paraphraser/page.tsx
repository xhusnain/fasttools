import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AIParaphraser = dynamic(
  () => import("@/components/ai/ai-paraphraser").then((mod) => mod.AIParaphraser),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Paraphraser",
  description:
    "Rewrite any text instantly with 7 modes: Standard, Fluency, Formal, Creative, Academic, Shorten, Expand. Free AI-powered paraphrasing tool.",
  metaTitle: "AI Paraphraser — Rewrite Text in 7 Modes (Formal, Casual, Academic)",
  metaDescription:
    "Free AI paraphraser. Rewrite any text with 7 modes: Standard, Fluency, Formal, Creative, Academic, Shorten, Expand. Up to 5K characters, side-by-side comparison, copy / re-paraphrase. Powered by Cloudflare AI. No signup.",
  path: "/ai-tools/ai-paraphraser",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free AI paraphrasing tool with 7 rewrite modes. Powered by Cloudflare AI. Supports Standard, Fluency, Formal, Creative, Academic, Shorten, and Expand modes for content rewriting.",
    featureList: [
      "7 rewrite modes: Standard, Fluency, Formal, Creative, Academic, Shorten, Expand",
      "AI-powered text rewriting using Cloudflare AI",
      "Side-by-side original and paraphrased text comparison",
      "Word count tracking for input and output",
      "One-click copy to clipboard",
      "Re-paraphrase button to iterate on results",
      "Up to 5,000 characters per request",
      "No signup or account required",
    ],
    softwareRequirements: "Modern web browser with JavaScript enabled",
    alternateName: [
      "Text Rewriter",
      "Article Rewriter",
      "Sentence Rephraser",
      "Essay Rewriter",
      "Paraphrasing Tool",
      "AI Rewording Tool",
      "Academic Paraphraser",
      "Formal Tone Rewriter",
      "QuillBot Alternative",
      "Grammarly Paraphraser Alternative",
      "Spinbot Alternative",
      "Plagiarism Avoider Tool",
      "Content Rephraser",
      "Smart Rewriter",
      "Synonym Rewriter",
    ],
    ratingValue: "4.9",
    ratingCount: "16240",
  },

  header: {
    title: "Free AI Paraphraser & Text Rewriter",
    description:
      "Rewrite any text with 7 AI modes: Standard, Fluency, Formal, Creative, Academic, Shorten, Expand. Instant results.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
  ],

  content: {
    definition:
      "An AI Paraphraser is a tool that rewrites your text while preserving the original meaning, using artificial intelligence to produce fluent, natural-sounding output in different tones and styles — from formal and academic to creative and concise.",

    quickAnswer:
      "Paste your text, select a rewrite mode (Standard, Fluency, Formal, Creative, Academic, Shorten, or Expand), and click Paraphrase. The AI rewrites your text instantly. Copy the result or click Re-paraphrase to iterate.",

    keyTakeaways: [
      "7 rewrite modes for different use cases: essays, emails, social posts, reports, and more",
      "AI restructures sentences and replaces words with contextual synonyms for unique output",
      "Shorten mode removes filler; Expand mode adds detail and elaboration",
      "Academic mode preserves technical terminology with scholarly sentence structure",
      "Up to 5,000 characters per request, no signup required",
    ],

    overview:
      "This AI paraphraser uses Cloudflare AI to rewrite text in 7 different modes. Standard mode provides a balanced rewrite, Fluency improves grammar and readability, Formal shifts to professional tone, Creative uses varied vocabulary, Academic maintains scholarly style, Shorten makes text concise, and Expand adds detail. Each mode produces unique output that preserves your original meaning.",

    howToSteps: [
      "Select your rewrite mode from the 7 options (Standard, Fluency, Formal, Creative, Academic, Shorten, Expand).",
      "Paste or type the text you want to paraphrase in the input area (up to 5,000 characters).",
      "Click 'Paraphrase' and wait for the AI to generate the rewritten text.",
      "Review the output, copy it, or click 'Re-paraphrase' to feed the result back for further refinement.",
    ],

    features: [
      "Standard mode: balanced rewrite with varied sentence structure and vocabulary",
      "Fluency mode: fix grammar, improve clarity and readability",
      "Formal mode: professional, business-appropriate tone",
      "Creative mode: expressive language with engaging style",
      "Academic mode: scholarly tone with precise terminology",
      "Shorten mode: concise output, remove filler words",
      "Expand mode: add detail, examples, and elaboration",
      "Side-by-side input/output comparison",
    ],

    useCases: [
      "Rewrite essays and assignments to improve clarity while maintaining original ideas",
      "Convert casual emails into professional business communications",
      "Make blog posts more engaging with creative rewriting",
      "Shorten long paragraphs into concise social media copy",
      "Expand bullet points into detailed paragraphs for reports",
      "Improve ESL writing with fluency mode for natural-sounding English",
      "Adapt content tone for different audiences (academic, business, casual)",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How AI Paraphrasing Works</h3>
          <p>
            The tool uses a large language model (Meta Llama 3.1 via Cloudflare AI) to understand
            your text&apos;s meaning and rewrite it with different sentence structures, vocabulary,
            and tone based on your selected mode. Unlike simple synonym replacement, AI paraphrasing
            understands context, preserves technical terms, and produces natural-sounding output.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Choosing the Right Mode</h3>
          <p>
            Use <strong>Standard</strong> for general rewriting, <strong>Fluency</strong> to fix
            grammar issues, <strong>Formal</strong> for business emails, <strong>Creative</strong> for
            blog posts and marketing, <strong>Academic</strong> for research papers,{" "}
            <strong>Shorten</strong> for social media and summaries, and <strong>Expand</strong> to
            add depth to thin content.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For best results, paraphrase one paragraph at a time rather than entire documents. You can also chain modes — first use Standard, then copy the result and run it through Formal or Shorten for a second pass.",

    faqs: [
      {
        question: "What is an AI paraphrasing tool?",
        answer:
          "An AI paraphraser rewrites your text while preserving the original meaning, using natural language processing to produce fluent, natural-sounding output in different tones and styles.",
      },
      {
        question: "Is the paraphrased text plagiarism-free?",
        answer:
          "The tool restructures sentences and replaces words with contextually appropriate alternatives, producing unique output. However, always review the result and cite original sources appropriately.",
      },
      {
        question: "What rewrite modes are available?",
        answer:
          "Seven modes: Standard (balanced rewrite), Fluency (grammar/readability), Formal (professional tone), Creative (varied vocabulary), Academic (scholarly style), Shorten (concise), and Expand (more detail).",
      },
      {
        question: "Is there a character limit?",
        answer:
          "You can paraphrase up to 5,000 characters per request. For longer texts, break them into paragraphs and paraphrase each separately for best results.",
      },
      {
        question: "Can I use this for academic writing?",
        answer:
          "Yes, the Academic mode preserves technical terminology and scholarly tone while restructuring sentences. Always ensure proper citations and review the output for accuracy.",
      },
    ],

    relatedTools: [
      { name: "AI Text Summarizer", href: "/ai-tools/text-summarizer" },
      { name: "AI Readability Analyzer", href: "/ai-tools/ai-readability-analyzer" },
      { name: "AI Text Detector", href: "/ai-tools/ai-text-detector" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Text to Speech", href: "/ai-tools/text-to-speech" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AIParaphraserPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AIParaphraser />)} />
}
