import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "CapCut Downloader",
  description:
    "Download publicly available CapCut video links in a fast browser workflow for review and offline reference.",
  metaTitle: "CapCut Downloader (Link to Video Download)",
  metaDescription:
    "Paste a CapCut link to process downloadable video output in-browser with a fast, simple workflow.",
  path: "/social-media-tools/capcut-downloader",
  keywords: [
    "capcut downloader",
    "download capcut video",
    "capcut link downloader",
    "save capcut video",
    "capcut video tool",
  ],

  header: {
    title: "CapCut Downloader",
    description:
      "Process CapCut links and download available video output in a few steps.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "CapCut Downloader", href: "/social-media-tools/capcut-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "CapCut video link downloader for quick browser-based save workflows.",
    featureList: [
      "CapCut link processing",
      "Browser-based workflow",
      "Fast download handling",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this tool to process CapCut links and save downloadable video output for editing review, handoff, and offline reference workflows.",

    howToSteps: [
      "Copy a CapCut video link.",
      "Paste it into the input field above.",
      "Run processing and review available output.",
      "Download the result to your device.",
    ],

    features: [
      "CapCut link-to-download workflow",
      "Quick processing interface",
      "Desktop and mobile browser support",
      "No account setup in tool",
      "Copy/paste-friendly flow",
    ],

    useCases: [
      "Creator asset backup",
      "Edit review and quality checks",
      "Cross-platform content prep",
      "Offline reference copy storage",
    ],

    aboutTool:
      "This downloader is designed for utility intent: paste a link, process quickly, and move into your editing or publishing workflow without extra setup.",

    proTip:
      "Use original source links and verify rights before downloading or republishing content.",

    faqs: [
      {
        question: "What links are supported?",
        answer:
          "Use valid CapCut video links. Private or unavailable content may not process.",
      },
      {
        question: "Can I use this on mobile?",
        answer: "Yes. The workflow supports modern mobile browsers.",
      },
      {
        question: "Do I need to install software?",
        answer: "No. The tool runs directly in the browser.",
      },
      {
        question: "Is this useful for creator workflows?",
        answer:
          "Yes. It helps with quick download and offline review steps.",
      },
      {
        question: "Can all videos be downloaded?",
        answer:
          "Availability depends on the source link and public accessibility.",
      },
    ],

    relatedTools: [
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CapcutDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="capcut" placeholder="https://www.capcut.com/..." />
      )}
    />
  )
}
