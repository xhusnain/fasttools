import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "Facebook Video Downloader",
  description:
    "Download publicly available Facebook video links in a fast browser workflow.",
  metaTitle: "Facebook Video Downloader (Online Link Tool)",
  metaDescription:
    "Paste a Facebook video URL and process downloadable output in-browser.",
  path: "/social-media-tools/facebook-downloader",
  keywords: [
    "facebook video downloader",
    "download facebook video",
    "facebook link downloader",
    "save fb video",
    "facebook video tool",
  ],

  header: {
    title: "Facebook Video Downloader",
    description:
      "Process Facebook video links and download available output quickly.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Facebook Video Downloader", href: "/social-media-tools/facebook-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Facebook video link downloader for browser-based save workflows.",
    featureList: [
      "Facebook link processing",
      "Quick download workflow",
      "Mobile and desktop support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this downloader to process Facebook video links and save available output for review, analysis, and offline reference workflows.",

    howToSteps: [
      "Copy a Facebook video link.",
      "Paste it into the downloader input.",
      "Run processing and inspect available output.",
      "Download the file to your device.",
    ],

    features: [
      "Facebook URL processing",
      "Fast browser-based flow",
      "No software installation",
      "Cross-device compatibility",
      "Simple copy/paste workflow",
    ],

    useCases: [
      "Social content research",
      "Reference clip archiving",
      "QA checks for media handling",
      "Team review workflows",
    ],

    aboutTool:
      "This page targets utility intent with a direct URL-to-download flow and concise guidance for common Facebook video handling tasks.",

    proTip:
      "For consistent results, paste full canonical video URLs instead of shortened links when possible.",

    faqs: [
      {
        question: "Which links are supported?",
        answer:
          "Use valid public Facebook video links. Private or restricted posts may not process.",
      },
      {
        question: "Can I use this on mobile?",
        answer: "Yes. It supports modern mobile browsers.",
      },
      {
        question: "Do I need account login in this tool?",
        answer: "No. The downloader workflow itself does not require signup.",
      },
      {
        question: "Is it free to use?",
        answer: "Yes, it is available as a free tool.",
      },
      {
        question: "Can every video be downloaded?",
        answer:
          "Availability depends on source visibility and link accessibility.",
      },
    ],

    relatedTools: [
      { name: "X Video Downloader", href: "/social-media-tools/x-video-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function FacebookDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="facebook" placeholder="https://www.facebook.com/watch?v=..." />
      )}
    />
  )
}
