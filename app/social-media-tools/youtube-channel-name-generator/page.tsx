import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YoutubeChannelNameGenerator = dynamic(
  () => import("@/components/social-media/youtube-channel-name-generator").then((mod) => mod.YoutubeChannelNameGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YouTube Name Generator",
  description:
    "Generate YouTube channel name ideas based on niche, tone, and creator brand direction.",
  metaTitle: "YouTube Name Generator (Channel Idea Tool)",
  metaDescription:
    "Generate channel name ideas for YouTube and shortlist options for branding and handle checks.",
  path: "/social-media-tools/youtube-channel-name-generator",
  keywords: [
    "youtube name generator",
    "channel name ideas",
    "youtube channel name ideas",
    "youtube brand name generator",
    "creator name ideas",
  ],

  header: {
    title: "YouTube Name Generator",
    description:
      "Generate and refine channel-name ideas before checking availability.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Channel-name idea generator for YouTube creator branding workflows.",
    featureList: [
      "Name idea generation",
      "Niche-based suggestions",
      "Branding brainstorm workflow",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to generate channel naming options quickly, then shortlist candidates for handle availability and brand consistency checks.",

    howToSteps: [
      "Enter niche, style, or keyword direction.",
      "Generate a batch of name ideas.",
      "Shortlist your top options.",
      "Validate availability using the handle checker.",
    ],

    features: [
      "Name-idea generation",
      "Niche-driven suggestions",
      "Fast iteration workflow",
      "Branding prep support",
      "Browser-based utility",
    ],

    useCases: [
      "New channel planning",
      "Channel rebrand naming",
      "Agency creator onboarding",
      "Editorial vertical launches",
    ],

    aboutTool:
      "This page is optimized for utility intent with a fast brainstorm flow that helps creators move from vague concepts to shortlist-ready names.",

    proTip:
      "Pair each shortlisted name with handle checks and basic trademark screening before final selection.",

    faqs: [
      {
        question: "Can this generate niche-specific names?",
        answer:
          "Yes. Add niche context to improve relevance of suggestions.",
      },
      {
        question: "Should I check handle availability after generating names?",
        answer: "Yes. Validate handle and URL availability before launch.",
      },
      {
        question: "Can this help with rebrands?",
        answer:
          "Yes. It is useful for exploring alternatives during channel repositioning.",
      },
      {
        question: "Can I generate multiple batches?",
        answer:
          "Yes. Run multiple rounds to compare naming patterns quickly.",
      },
      {
        question: "Is this free?",
        answer: "Yes. It is available as a free utility.",
      },
    ],

    relatedTools: [
      { name: "YouTube Handle Checker", href: "/social-media-tools/channel-checker" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeChannelNameGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeChannelNameGenerator />)} />
}
