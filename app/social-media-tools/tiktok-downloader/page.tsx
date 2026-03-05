import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "TikTok Downloader",
  description:
    "Download publicly available TikTok video links in a quick browser workflow.",
  metaTitle: "TikTok Downloader (Online Link Tool)",
  metaDescription:
    "Paste a TikTok URL and process downloadable video output with a simple browser flow.",
  path: "/social-media-tools/tiktok-downloader",
  keywords: [
    "tiktok downloader",
    "download tiktok video",
    "tiktok link downloader",
    "save tiktok video",
    "tiktok video tool",
  ],

  header: {
    title: "TikTok Downloader",
    description:
      "Process TikTok links and download available video output quickly.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "TikTok link downloader for browser-based media save workflows.",
    featureList: [
      "TikTok URL processing",
      "Fast output workflow",
      "Cross-device browser support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A TikTok Video Downloader is a free tool that downloads TikTok videos without watermark in HD quality for offline viewing and content repurposing.",
    quickAnswer:
      "Paste a TikTok video URL to download the video without the TikTok watermark. Select HD or SD quality. The tool also extracts video metadata like caption, likes, and creator info.",
    keyTakeaways: [
      "Downloads TikTok videos without watermark in HD quality",
      "Works with standard TikTok URLs and vm.tiktok.com short links",
      "Shows video metadata: caption, creator, likes, and shares",
      "MP4 format compatible with all devices and editors",
      "Respect creators' rights — get permission before reposting content",
    ],
    overview:
      "Use this downloader to process TikTok links and retrieve available video output for creator workflows, review tasks, and offline reference.",

    howToSteps: [
      "Copy the TikTok video URL.",
      "Paste it in the input field above.",
      "Run processing and review output.",
      "Download the result file.",
    ],

    features: [
      "TikTok link processing",
      "Simple browser-based workflow",
      "Mobile and desktop compatibility",
      "No additional software",
      "Quick copy/paste UX",
    ],

    useCases: [
      "Content ops reference",
      "Team review and handoff",
      "Offline viewing copies",
      "Campaign research workflows",
    ],

    aboutTool:
      "The page is built for utility intent with clear link handling steps and a low-friction workflow for routine TikTok media tasks.",

    proTip:
      "For stable processing, use direct video links from the share menu.",

    faqs: [
      {
        question: "What TikTok links are supported?",
        answer:
          "Use valid public TikTok video URLs. Private or inaccessible links may fail.",
      },
      {
        question: "Can I use this tool on mobile?",
        answer: "Yes. It works on modern iOS and Android browsers.",
      },
      {
        question: "Does this require signup?",
        answer: "No. The tool is available without signup.",
      },
      {
        question: "Can every video be downloaded?",
        answer:
          "Output depends on source availability and access restrictions.",
      },
      {
        question: "Is this free?",
        answer: "Yes. It is a free browser utility.",
      },
    ],

    relatedTools: [
      { name: "Douyin Downloader", href: "/social-media-tools/douyin-downloader" },
      { name: "CapCut Downloader", href: "/social-media-tools/capcut-downloader" },
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function TiktokDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="tiktok" placeholder="https://www.tiktok.com/@username/video/..." />
      )}
    />
  )
}
