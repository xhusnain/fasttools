import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const AiPromptGenerator = dynamic(
  () => import("@/components/ai/ai-prompt-generator").then((mod) => mod.AiPromptGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Prompt Generator",
  description:
    "Turn a rough idea into detailed, ready-to-paste prompts for Sora 2, Veo 3, Midjourney, Nano Banana, ChatGPT, and Claude — three variations per idea, free.",
  metaTitle: "AI Prompt Generator — Sora, Veo, Midjourney & ChatGPT Prompts",
  metaDescription:
    "Free AI prompt generator. Type a rough idea and get 3 detailed prompts tuned for Sora 2, Veo 3, Midjourney, Nano Banana, or ChatGPT — camera work, lighting, structure, and parameters included.",
  path: "/ai-tools/prompt-generator",

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Tool that expands rough ideas into detailed model-specific prompts for AI video, image, and text models, with three creative variations per generation.",
    alternateName: ["prompt writer", "prompt builder"],
    featureList: [
      "Model-specific prompt structure for Sora 2, Veo 3, Midjourney, Nano Banana, and chat models",
      "Three creative treatments per idea",
      "Camera, lighting, and audio language for video models",
      "Midjourney parameters (--ar, --stylize) included",
      "One-click copy per prompt",
      "Free with no signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  header: {
    title: "AI Prompt Generator",
    description:
      "Type a rough idea, pick the model you're using, and get three detailed, ready-to-paste prompts — each a different creative take.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Prompt Generator", href: "/ai-tools/prompt-generator" },
  ],

  content: {
    definition:
      "An AI prompt generator expands a rough, plain-language idea into the detailed prompt format a specific model responds best to — film language for video models, visual phrasing and parameters for image models, structured instructions for chat models.",
    quickAnswer:
      "Describe your idea in a sentence, choose the target model, and generate. You get three distinct, ready-to-paste prompts written in that model's preferred structure — pick the treatment you like and run it.",
    overview:
      "Every generation model has a dialect. Sora 2 wants cinematography and sound design; Veo 3 wants structured scenes with quoted dialogue; Midjourney wants concrete comma-separated visuals with parameters; Nano Banana wants precise conversational instructions; ChatGPT and Claude want role, task, constraints, and format. Most people type the same one-liner into all of them and wonder why results vary. This generator speaks each dialect: it takes your idea and writes three complete prompts in the format your chosen model actually rewards, so your credits and generations go to prompts that were worth running.",
    keyTakeaways: [
      "One idea in, three model-tuned prompts out — each a different creative direction",
      "Five targets: Sora 2, Veo 3, Midjourney, Nano Banana, and ChatGPT/Claude",
      "Video prompts include camera movement, lighting, and audio cues",
      "Image prompts include composition, medium, and rendering parameters",
      "Free and unlimited — you spend your paid generations only on prompts worth running",
    ],
    howToSteps: [
      "Describe your idea in plain language — one sentence is enough.",
      "Pick the model you'll paste the prompt into.",
      "Generate and compare the three treatments.",
      "Copy your favorite and run it in the target tool.",
    ],
    features: [
      "Model-specific prompt dialects, not one generic template",
      "Three distinct creative treatments per generation",
      "Cinematic camera and lighting vocabulary for video",
      "Concrete visual language and parameters for images",
      "Structured role-task-format prompts for chat models",
      "One-click copy on every result",
    ],
    useCases: [
      "Storyboard AI video clips before spending limited generations",
      "Explore three aesthetic directions for an image concept in one round",
      "Turn vague requests into structured ChatGPT/Claude prompts that work first try",
      "Learn each model's prompt dialect by seeing your own ideas translated",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Model-Specific Prompts Matter</h3>
          <p>
            The gap between a mediocre and a great result usually isn&rsquo;t the model — it&rsquo;s whether the prompt
            speaks its language. Video models reward shot design and sound cues; Midjourney parses comma-separated visual
            phrases and parameter flags; Gemini&rsquo;s image model binds attributes through full sentences; chat models
            perform best with explicit roles, constraints, and output formats. A prompt written in the wrong dialect wastes
            the model&rsquo;s attention on decoding instead of creating. Each target here has its own dedicated page —
            Sora, Veo, Midjourney, and Nano Banana — with a deeper guide to that model&rsquo;s dialect.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Three Variations Beat One &ldquo;Perfect&rdquo; Prompt</h3>
          <p>
            Generation is cheap to read and expensive to run. Three differently-angled prompts let you choose a creative
            direction before you spend credits rendering anything — a moody treatment, a bright one, a stylized one — and
            the differences between them teach you which levers (lighting, framing, tone) move the result. Pick the winner,
            then regenerate with your idea text refined toward it.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">A Drafting Tool, Not a Magic Wand</h3>
          <p>
            No prompt guarantees a great render — models have randomness, and every tool has limits no wording overcomes.
            What good prompt structure does is remove the failures caused by ambiguity: subjects the model had to guess,
            cameras it improvised, styles it averaged. Treat the output here as a strong first draft: run it, look at what
            the model did with each phrase, and edit the phrases that missed.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Keep a personal library of phrases that worked — lighting descriptions, camera moves, style anchors. The fastest prompt engineers aren't writing from scratch; they're recombining proven fragments.",

    faqs: [
      {
        question: "Which models does this support?",
        answer:
          "Sora 2 and Veo 3 for video, Midjourney and Nano Banana (Gemini) for images, and a general mode for ChatGPT, Claude, and other chat models. Each target gets prompts in its own preferred structure.",
      },
      {
        question: "Does it generate the video or image itself?",
        answer:
          "No — it writes the prompt. You paste the result into the model you're using (Sora, Flow, Midjourney, Gemini, ChatGPT). That keeps this tool free and puts your paid credits where they belong: on renders you chose.",
      },
      {
        question: "Why are my results different from the prompt's intent?",
        answer:
          "All generation models include randomness, and each run interprets the prompt fresh. If a specific element keeps missing, make it more concrete and move it earlier in the prompt — position and specificity are the two strongest levers.",
      },
      {
        question: "Is there a limit on how many prompts I can generate?",
        answer: "No — it's free and unlimited, with no account required.",
      },
    ],

    relatedTools: [
      { name: "Sora Prompt Generator", href: "/ai-tools/prompt-generator/sora" },
      { name: "Veo Prompt Generator", href: "/ai-tools/prompt-generator/veo" },
      { name: "Midjourney Prompt Generator", href: "/ai-tools/prompt-generator/midjourney" },
      { name: "Nano Banana Prompt Generator", href: "/ai-tools/prompt-generator/nano-banana" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "LLM Token Counter", href: "/ai-tools/token-counter" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function AiPromptGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<AiPromptGenerator />)} />
}
