import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YoutubeChannelChecker = dynamic(
  () => import("@/components/social-media/youtube-channel-checker").then((mod) => mod.YoutubeChannelChecker),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YouTube Handle Checker",
  description:
    "Check whether a YouTube handle and channel-name combination is available before launching a channel.",
  metaTitle: "YouTube Handle Checker (Name Availability)",
  metaDescription:
    "Validate YouTube handle and channel-name availability with a quick browser workflow.",
  path: "/social-media-tools/channel-checker",
  keywords: [
    "youtube handle checker",
    "youtube name availability",
    "youtube channel name checker",
    "check youtube handle",
    "youtube username checker",
  ],

  header: {
    title: "YouTube Handle Checker",
    description:
      "Check handle and channel-name availability before claiming your channel identity.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Handle Checker", href: "/social-media-tools/channel-checker" },
  ],

  schemaOptions: {
    applicationCategory: "WebApplication",
    description:
      "YouTube handle and channel-name availability checker for creator branding workflows.",
    featureList: [
      "Handle availability check",
      "Channel-name validation",
      "Fast browser workflow",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this checker to validate YouTube naming options before launch. It helps creators and teams avoid rework when branding, URL strategy, and handle matching need to align.",

    howToSteps: [
      "Enter your desired channel name or handle.",
      "Run availability check.",
      "Review handle and naming status.",
      "Try alternatives until you find an available option.",
    ],

    features: [
      "Handle availability checks",
      "Name validation workflow",
      "Fast iteration for alternatives",
      "Creator branding support",
      "Browser-based tool",
    ],

    useCases: [
      "New channel setup",
      "Rebrand planning",
      "Agency naming workflows",
      "Handle consistency checks",
    ],

    aboutTool:
      "This tool is built for utility intent and naming decisions, with a direct check-and-iterate flow for creator and brand teams.",

    proTip:
      "Reserve matching handle and branding assets early to reduce naming collisions later.",

    faqs: [
      {
        question: "Why check handle availability before launch?",
        answer:
          "It helps avoid brand mismatch and URL conflicts after publishing channel assets.",
      },
      {
        question: "Can display names and handles differ?",
        answer:
          "Yes. Handles are unique, while display naming can be less strict.",
      },
      {
        question: "Is this useful for agencies?",
        answer:
          "Yes. It supports fast validation across multiple naming options.",
      },
      {
        question: "Can I test multiple variants quickly?",
        answer: "Yes. Iterate through options until one is available.",
      },
      {
        question: "Is this free?",
        answer: "Yes. It is available as a free utility.",
      },
    ],

    relatedTools: [
      { name: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function ChannelCheckerPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeChannelChecker />)} />
}
