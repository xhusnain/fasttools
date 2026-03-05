import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "Douyin Downloader",
  description:
    "Download publicly available Douyin video links in a simple browser workflow.",
  metaTitle: "Douyin Downloader (Video Link Download)",
  metaDescription:
    "Paste a Douyin link and process downloadable video output quickly in-browser.",
  path: "/social-media-tools/douyin-downloader",
  keywords: [
    "douyin downloader",
    "download douyin video",
    "douyin video tool",
    "douyin link downloader",
    "save douyin video",
  ],

  header: {
    title: "Douyin Downloader",
    description: "Process Douyin links and download available video output.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Douyin Downloader", href: "/social-media-tools/douyin-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Douyin link downloader for quick browser-based save workflows.",
    featureList: [
      "Douyin link processing",
      "Fast browser workflow",
      "Desktop/mobile support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Douyin Downloader is a free tool that downloads videos from Douyin (Chinese TikTok) without watermark in HD quality.",
    quickAnswer:
      "Paste a Douyin video URL or share link to download the video without watermark. The tool extracts the HD version and shows video metadata including creator info and caption.",
    keyTakeaways: [
      "Downloads Douyin videos without watermark in HD quality",
      "Works with Douyin share links and standard video URLs",
      "Douyin is TikTok's Chinese counterpart with separate content",
      "MP4 format compatible with all devices and video editors",
      "Respect creators' rights and copyright when downloading content",
    ],
    overview:
      "Use this tool to process Douyin links and save available video output for review, reference, and creator workflow tasks.",

    howToSteps: [
      "Copy a Douyin video URL.",
      "Paste it into the input field above.",
      "Run processing and review output.",
      "Download the result file.",
    ],

    features: [
      "Douyin link-to-download flow",
      "Quick processing",
      "Cross-device browser support",
      "No additional software",
      "Simple copy/paste UX",
    ],

    useCases: [
      "Content research",
      "Offline reference copies",
      "Creator workflow review",
      "Asset handoff prep",
    ],

    aboutTool:
      "The page is structured for utility intent with a direct link-processing workflow and concise guidance for common downloader tasks.",

    proTip:
      "Always confirm source rights and local policy requirements before reuse.",

    faqs: [
      {
        question: "What kind of links should I paste?",
        answer: "Use complete Douyin video links for best results.",
      },
      {
        question: "Can I use this tool on phone browsers?",
        answer: "Yes. It works on modern iOS and Android browsers.",
      },
      {
        question: "Do I need an account in this tool?",
        answer: "No. The downloader itself does not require signup.",
      },
      {
        question: "Can every link be processed?",
        answer:
          "Processing depends on the link status and source availability.",
      },
      {
        question: "Is this free to use?",
        answer: "Yes. It is available as a free browser tool.",
      },
    ],

    relatedTools: [
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "CapCut Downloader", href: "/social-media-tools/capcut-downloader" },
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function DouyinDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="douyin" placeholder="https://www.douyin.com/video/..." />
      )}
    />
  )
}
