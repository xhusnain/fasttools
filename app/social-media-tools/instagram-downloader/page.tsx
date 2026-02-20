import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "Instagram Downloader",
  description:
    "Download publicly available Instagram post, reel, or media links using a browser-based workflow.",
  metaTitle: "Instagram Downloader (Posts, Reels, Media Links)",
  metaDescription:
    "Paste an Instagram URL to process available downloadable media output quickly.",
  path: "/social-media-tools/instagram-downloader",
  keywords: [
    "instagram downloader",
    "download instagram video",
    "download instagram reels",
    "instagram link downloader",
    "save instagram media",
  ],

  header: {
    title: "Instagram Downloader",
    description:
      "Process Instagram links and download available media output in a few steps.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Instagram media link downloader for browser-based processing workflows.",
    featureList: [
      "Instagram URL processing",
      "Fast media extraction workflow",
      "Desktop/mobile browser support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to process Instagram links and retrieve available media output for creator operations, audit tasks, and offline reference use.",

    howToSteps: [
      "Copy the Instagram post or reel URL.",
      "Paste it in the input field above.",
      "Run processing and review output options.",
      "Download the file you need.",
    ],

    features: [
      "Instagram link processing",
      "Simple download workflow",
      "Cross-device browser compatibility",
      "No extra software required",
      "Quick copy/paste flow",
    ],

    useCases: [
      "Creator content reference",
      "Campaign and competitor research",
      "Offline review for teams",
      "Asset collection workflows",
    ],

    aboutTool:
      "This page is optimized for utility intent with a straightforward URL-processing path and clear steps for common Instagram media tasks.",

    proTip:
      "When a link fails, retry with the canonical post/reel URL from the source share dialog.",

    faqs: [
      {
        question: "What Instagram links are supported?",
        answer:
          "Use valid public post or reel links. Private or unavailable links may not process.",
      },
      {
        question: "Can I use it on iPhone and Android?",
        answer:
          "Yes. The downloader works in modern mobile browsers.",
      },
      {
        question: "Does the tool require account signup?",
        answer: "No. It is available without signup in the browser.",
      },
      {
        question: "Can every URL be downloaded?",
        answer:
          "Results depend on link accessibility and source restrictions.",
      },
      {
        question: "Is this free?",
        answer: "Yes. It is available as a free utility tool.",
      },
    ],

    relatedTools: [
      { name: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "Pinterest Downloader", href: "/social-media-tools/pinterest-downloader" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function InstagramDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="instagram" placeholder="https://www.instagram.com/p/..." />
      )}
    />
  )
}
