import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const HashtagCounter = dynamic(
  () => import("@/components/social-media/hashtag-counter").then((mod) => mod.HashtagCounter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Hashtag Counter",
  description:
    "Count hashtags, extract tags from text, and refine tag sets for social post optimization.",
  metaTitle: "Hashtag Counter (Count and Extract Tags)",
  metaDescription:
    "Count and extract hashtags from captions or text blocks with a fast social-post workflow.",
  path: "/social-media-tools/hashtag-counter",
  keywords: [
    "hashtag counter",
    "count hashtags",
    "hashtag extractor",
    "instagram hashtag counter",
    "social hashtag tool",
  ],

  header: {
    title: "Hashtag Counter",
    description:
      "Count and extract hashtags to keep social captions clean and platform-ready.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Hashtag counting and extraction utility for social caption workflows.",
    featureList: [
      "Hashtag counting",
      "Tag extraction",
      "Quick copy workflow",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to count hashtags and extract tags from captions before publishing social posts. It helps maintain cleaner formatting and platform-compliant tag usage.",

    howToSteps: [
      "Paste your caption or hashtag list.",
      "Run count and extraction.",
      "Review totals and detected tags.",
      "Copy the final tag set into your post workflow.",
    ],

    features: [
      "Hashtag counting",
      "Hashtag extraction",
      "Fast copy output",
      "Caption workflow support",
      "Browser-based utility",
    ],

    useCases: [
      "Instagram caption cleanup",
      "Cross-platform post prep",
      "Campaign tag QA",
      "Creator content operations",
    ],

    aboutTool:
      "The page targets utility intent with a direct count-and-extract flow for social teams, creators, and marketers.",

    proTip:
      "Keep a reusable shortlist of high-performing tags and rotate by topic to reduce repetition.",

    faqs: [
      {
        question: "Can I paste full captions?",
        answer: "Yes. The tool can detect hashtags within full text blocks.",
      },
      {
        question: "Does it help with platform limits?",
        answer:
          "Yes. Counting supports quick validation before publishing.",
      },
      {
        question: "Can I reuse extracted hashtags?",
        answer:
          "Yes. Copy the extracted set and reuse it in your social workflow.",
      },
      {
        question: "Is this useful for agencies?",
        answer:
          "Yes. It supports repeatable caption QA across multiple clients.",
      },
      {
        question: "Is it free?",
        answer: "Yes. It is available as a free utility.",
      },
    ],

    relatedTools: [
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HashtagCounterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<HashtagCounter />)} />
}
