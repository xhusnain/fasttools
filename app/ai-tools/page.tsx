import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import { Binary, BookOpen, Code2, Cpu, Eraser, FileSearch, Heart, ImageIcon, Music, QrCode, Sparkles, Wand2 } from "lucide-react"

const aiTools = [
  {
    title: "AI Prompt Generator",
    description:
      "Turn a rough idea into detailed prompts for Sora 2, Veo 3, Midjourney, Nano Banana, or ChatGPT.",
    href: "/ai-tools/prompt-generator",
    icon: Sparkles,
  },
  {
    title: "LLM Token Counter",
    description:
      "Exact GPT-5/GPT-4o token counts with real tokenizers, plus Claude and Gemini estimates.",
    href: "/ai-tools/token-counter",
    icon: Binary,
  },
  {
    title: "LLM VRAM Calculator",
    description:
      "See how much GPU memory Llama, Qwen, Mistral, or Gemma needs — and whether your card can run it.",
    href: "/ai-tools/llm-vram-calculator",
    icon: Cpu,
  },
  {
    title: "AI Text Cleaner",
    description:
      "Strip em dashes, smart quotes, markdown leftovers, and hidden characters from AI-generated text.",
    href: "/ai-tools/ai-text-cleaner",
    icon: Eraser,
  },
  {
    title: "QR Code Generator",
    description:
      "Generate QR codes for URLs, WiFi, contacts, and more with logo and export options.",
    href: "/ai-tools/qr-generator",
    icon: QrCode,
  },
  {
    title: "AI Lyrics Generator",
    description:
      "Create draft lyrics from a theme, genre, mood, and language in seconds.",
    href: "/ai-tools/lyrics-generator",
    icon: Music,
  },
  {
    title: "AI Caption Generator",
    description:
      "Generate social captions for Instagram, TikTok, LinkedIn, X, and other channels.",
    href: "/ai-tools/caption-generator",
    icon: ImageIcon,
  },
  {
    title: "AI Pet Name Generator",
    description:
      "Get personalized pet name ideas by species, traits, personality, and style.",
    href: "/ai-tools/pet-names",
    icon: Heart,
  },
  {
    title: "AI Text Detector",
    description:
      "Detect AI-written content from ChatGPT, Claude, Gemini using 5 statistical writing signals.",
    href: "/ai-tools/ai-text-detector",
    icon: FileSearch,
  },
  {
    title: "AI Code Detector",
    description:
      "Detect AI-generated code from Copilot, ChatGPT, Claude across 12+ programming languages.",
    href: "/ai-tools/ai-code-detector",
    icon: Code2,
  },
  {
    title: "AI Readability Analyzer",
    description:
      "Deep readability scoring with 7 algorithms: Flesch-Kincaid, Gunning Fog, SMOG, Coleman-Liau, ARI, Dale-Chall.",
    href: "/ai-tools/ai-readability-analyzer",
    icon: BookOpen,
  },
  {
    title: "AI Paraphraser",
    description:
      "Rewrite text in 7 modes: Standard, Fluency, Formal, Creative, Academic, Shorten, Expand.",
    href: "/ai-tools/ai-paraphraser",
    icon: Wand2,
  },
]

const toolConfig = createToolConfig({
  toolName: "AI Tools",
  description:
    "AI-assisted utilities for QR generation, lyric drafting, caption writing, pet naming, and AI content detection.",
  metaTitle: "AI Tools: Paraphraser, QR Codes, Captions, Lyrics & More",
  metaDescription:
    "Free AI tools: text summarizer, paraphraser, QR code generator, captions, lyrics, pet names, and more. Fast workflows for students, creators, and teams.",
  path: "/ai-tools",
  schemaOptions: {
    itemList: {
      name: "AI Tools Collection",
      description:
        "A collection of AI-driven tools for content creation, naming, QR generation, and AI content detection.",
      items: aiTools.map((tool) => ({
        name: tool.title,
        description: tool.description,
        url: tool.href,
      })),
    },
  },

  header: {
    title: "AI Tools",
    description:
      "Practical AI utilities for creation workflows, publishing support, and quick content iteration.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "AI Tools", href: "/ai-tools" }],

  content: {
    overview:
      "This AI tools category groups task-focused utilities that turn a single input into a finished result you can copy, download, or refine. Generate QR codes for campaigns, draft song lyrics and social captions in seconds, brainstorm pet names, detect AI-written text or code, check readability, paraphrase paragraphs, and estimate API costs before you send prompts to an LLM. Every tool runs in your browser with no signup, so you get fast, private output for content, publishing, and developer workflows.",

    features: [
      "Tool-specific AI workflows instead of generic chat prompts",
      "Quick iteration with reusable inputs and immediate output",
      "Structured pages with FAQs and step-by-step usage guidance",
      "Category hub with direct links to every AI utility",
      "Cross-linking to related SEO and web debugging tools",
    ],

    useCases: [
      "Social teams preparing campaign assets and platform-specific captions",
      "Musicians and creators drafting lyric ideas from a theme or mood",
      "Businesses publishing WiFi, menu, and contact QR codes",
      "Pet owners and shelters creating naming shortlists",
      "Prompt engineers estimating LLM API budgets",
    ],

    aboutTool: (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-bold mb-4 text-foreground">
            AI Tools by User Intent
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Search intent in this category is primarily utility-driven: users
            want a fast output they can copy, download, or refine. The pages are
            optimized around this behavior with direct tool access, concise
            instructions, and related-tool paths for the next step.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The category also supports informational intent through FAQs and
            implementation notes, which improves topical coverage while keeping
            the main interaction focused on getting results quickly.
          </p>
        </div>
      </div>
    ),

    faqs: [
      {
        question: "Who should use this AI tools category?",
        answer:
          "It is useful for marketers, creators, growth teams, developers, and individuals who need practical AI outputs without a heavy setup process.",
      },
      {
        question: "Are these AI tools focused on one workflow?",
        answer:
          "No. The category covers distinct tasks including QR creation, creative text generation, naming support, and AI content detection.",
      },
      {
        question: "How should I pick the right tool?",
        answer:
          "Start with your immediate deliverable. If you need a shareable code, use QR Generator. For social text, use Caption Generator. For songwriting drafts, use Lyrics Generator. For naming ideas, use Pet Name Generator. For LLM budgeting, use the AI API Cost Calculator.",
      },
      {
        question: "Can I use this category as part of a content pipeline?",
        answer:
          "Yes. Many teams use these tools in sequence: draft copy, check readability and AI-detection signals, then publish assets with QR links and supporting metadata.",
      },
      {
        question: "Are these tools free?",
        answer:
          "Yes. The tools in this category are free to use with no required signup for standard usage.",
      },
    ],

    relatedTools: [
      { name: "SEO Tools", href: "/seo-tools" },
      { name: "Web Tools", href: "/web-tools" },
      { name: "Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AiToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiTools.map((tool) => (
            <GToolCard
              key={`ai-tools-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
