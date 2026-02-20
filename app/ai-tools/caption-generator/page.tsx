import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const AiCaptionGenerator = dynamic(
  () =>
    import("@/components/social-media/ai-caption-generator").then(
      (mod) => mod.AiCaptionGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Caption Generator",
  description:
    "Generate social media captions from a content description with platform-specific output options.",
  metaTitle: "AI Caption Generator for Instagram, TikTok, LinkedIn",
  metaDescription:
    "Create social captions with AI for Instagram, TikTok, Facebook, LinkedIn, X, Pinterest, and YouTube. Generate multiple options and copy instantly.",
  path: "/ai-tools/caption-generator",
  keywords: [
    "ai caption generator",
    "instagram caption generator",
    "tiktok caption generator",
    "linkedin caption generator",
    "social media caption tool",
  ],

  header: {
    title: "AI Caption Generator",
    description:
      "Draft platform-specific captions quickly and refine your posting workflow with multiple generated options.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Caption Generator", href: "/ai-tools/caption-generator" },
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Generate social captions from image or content descriptions for multiple social platforms.",
    alternateName: [
      "Instagram Caption Generator",
      "Social Caption Tool",
      "AI Post Caption Generator",
    ],
    featureList: [
      "Multi-platform caption generation",
      "Multiple output variations",
      "Copy-ready caption cards",
      "Platform-focused phrasing",
      "Fast regeneration",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Use this tool to turn a short content description into multiple caption options tailored to where you plan to publish. It is optimized for utility intent: write faster, compare options, and ship posts with less drafting overhead.",

    howToSteps: [
      "Describe your content with key details, mood, and context.",
      "Select the target platform to steer style and length behavior.",
      "Generate caption options and compare tone across the set.",
      "Copy your preferred version and edit for brand voice before publishing.",
    ],

    features: [
      "Platform options for Instagram, TikTok, Facebook, LinkedIn, X, Pinterest, and YouTube",
      "Multiple captions per generation for A/B testing",
      "One-click copy for rapid publishing",
      "Quick regeneration for additional variations",
      "Useful for creator, brand, and agency workflows",
    ],

    useCases: [
      "Daily social publishing and scheduling",
      "Campaign copy ideation for marketing teams",
      "Influencer and creator workflow acceleration",
      "Performance testing with alternate caption variants",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Caption-generator SERPs are competitive and generally reward pages that
          combine immediate utility with channel-specific guidance. This page is
          structured to satisfy both by keeping the generator front-and-center
          and supporting it with concise usage instructions.
        </p>
        <p>
          Instead of keyword-heavy filler, the content focuses on practical
          publishing outcomes: faster drafting, clearer platform targeting, and
          easy variant testing.
        </p>
      </div>
    ),

    proTip:
      "Include audience and intent in your prompt, such as education, humor, or conversion, to get better first-pass caption quality.",

    faqs: [
      {
        question: "How many captions are generated per request?",
        answer:
          "The tool returns multiple options so you can compare tone and pick the version that best fits your post goal.",
      },
      {
        question: "Can I switch platforms without rewriting my prompt?",
        answer:
          "Yes. Keep the same content description and change the platform to generate new caption variants.",
      },
      {
        question: "Should I edit the output before posting?",
        answer:
          "Yes. It is best to add brand voice, compliance notes, and campaign details before final publication.",
      },
      {
        question: "Is this only for Instagram?",
        answer:
          "No. It supports Instagram, TikTok, Facebook, LinkedIn, X, Pinterest, and YouTube workflows.",
      },
      {
        question: "Can I use captions for paid campaigns?",
        answer:
          "You can use generated text as draft material for paid campaigns, but review claims and legal language before launch.",
      },
    ],

    additionalContent: [
      {
        heading: "Prompt Structure That Performs Better",
        content:
          "Give the tool concrete scene details, desired tone, and audience type. Specific prompts usually produce stronger and less generic outputs.",
      },
      {
        heading: "Variant Testing",
        content:
          "Rotate caption options across similar posts and compare engagement metrics to build a repeatable copy framework.",
      },
    ],

    relatedTools: [
      { name: "AI Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "AI Pet Name Generator", href: "/ai-tools/pet-names" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CaptionGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiCaptionGenerator />
        </div>
      )}
    />
  )
}
