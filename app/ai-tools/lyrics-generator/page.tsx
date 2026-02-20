import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const AiLyricsGenerator = dynamic(
  () =>
    import("@/components/social-media/ai-lyrics-generator").then(
      (mod) => mod.AiLyricsGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Lyrics Generator",
  description:
    "Generate draft song lyrics from a theme, genre, mood, length, and language.",
  metaTitle: "AI Lyrics Generator Free (Genre, Mood, Language)",
  metaDescription:
    "Create lyric drafts from a song idea in seconds. Choose theme, genre, mood, duration, and language, then edit and export your output.",
  path: "/ai-tools/lyrics-generator",
  keywords: [
    "ai lyrics generator",
    "song lyrics generator",
    "rap lyrics generator",
    "free lyrics writer",
    "lyric generator by genre",
  ],

  header: {
    title: "AI Lyrics Generator",
    description:
      "Turn a rough song idea into an editable draft with structure, tone, and language controls.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Lyrics Generator", href: "/ai-tools/lyrics-generator" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Generate draft lyrics from a theme with optional style, mood, and language settings.",
    alternateName: ["Song Lyrics Generator", "AI Songwriter", "Lyric Draft Tool"],
    featureList: [
      "Theme-first lyric generation",
      "Genre and mood controls",
      "Language selection",
      "Copy and download output",
      "Regeneration for new versions",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "This tool helps creators move from a blank page to a workable lyric draft quickly. Enter your theme, optionally pick style controls, and generate a first version you can rewrite for melody, cadence, and voice.",

    howToSteps: [
      "Enter your song theme or subject in plain language.",
      "Select optional genre, mood, length, and language preferences.",
      "Generate lyrics and review phrasing, structure, and clarity.",
      "Copy or download the draft, then edit it for your final composition.",
    ],

    features: [
      "Theme-driven lyric generation",
      "Genre and mood selection for style direction",
      "Optional duration targeting for draft size",
      "Language support for multilingual workflows",
      "Copy/download actions for revision workflow",
    ],

    useCases: [
      "Songwriting ideation before studio sessions",
      "Drafting hooks and verse direction",
      "Generating lyric starting points for content campaigns",
      "Creating multilingual concept drafts",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Competing lyric pages that rank well generally focus on immediate
          interaction and clear positioning: enter prompt, generate, refine.
          This page follows that pattern while adding quality controls so users
          can steer tone and structure more effectively.
        </p>
        <p>
          The page is optimized for utility intent first and informational intent
          second. Users can generate quickly, then use guidance sections and FAQs
          to improve output quality for real projects.
        </p>
      </div>
    ),

    proTip:
      "Describe concrete imagery, narrative context, and emotional direction in your theme prompt for stronger first drafts.",

    faqs: [
      {
        question: "Can I choose a specific genre?",
        answer:
          "Yes. You can pick genre and mood to shape vocabulary, pacing, and tone in the generated draft.",
      },
      {
        question: "Does the generator support multiple languages?",
        answer:
          "Yes. You can choose from many language options and generate lyrics aligned to that selection.",
      },
      {
        question: "Are generated lyrics final-ready?",
        answer:
          "Treat them as draft material. Editing for originality, rhythm, and performance fit is recommended before release.",
      },
      {
        question: "Can I export the generated text?",
        answer:
          "Yes. You can copy the output directly or download it as a text file for your writing workflow.",
      },
      {
        question: "What prompt style works best?",
        answer:
          "Use specific context such as scene, speaker perspective, and emotional arc instead of a single broad keyword.",
      },
    ],

    additionalContent: [
      {
        heading: "Improving Draft Quality",
        content:
          "If an output feels generic, regenerate with a narrower theme and include concrete nouns, time context, and emotional stakes.",
      },
      {
        heading: "Workflow Tip for Teams",
        content:
          "Use this tool for ideation, then pass selected lines into your songwriting or editorial workflow for final arrangement and rights review.",
      },
    ],

    relatedTools: [
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Token to Word Converter", href: "/ai-tools/token-to-word-converter" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function LyricsGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiLyricsGenerator />
        </div>
      )}
    />
  )
}
