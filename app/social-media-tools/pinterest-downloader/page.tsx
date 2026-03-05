import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "Pinterest Downloader",
  description:
    "Download publicly available Pinterest media links with a quick browser-based workflow.",
  metaTitle: "Pinterest Downloader (Pin Media Download)",
  metaDescription:
    "Paste a Pinterest pin link and process available downloadable media output.",
  path: "/social-media-tools/pinterest-downloader",
  keywords: [
    "pinterest downloader",
    "download pinterest video",
    "download pinterest image",
    "pinterest link downloader",
    "save pinterest pin",
  ],

  header: {
    title: "Pinterest Downloader",
    description:
      "Process Pinterest links and save available media output in a few steps.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Pinterest Downloader", href: "/social-media-tools/pinterest-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "Pinterest pin link downloader for browser-based media save workflows.",
    featureList: [
      "Pinterest link processing",
      "Media output handling",
      "Fast browser workflow",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Pinterest Downloader is a free tool that downloads images and videos from Pinterest pins in high resolution without watermarks.",
    quickAnswer:
      "Paste a Pinterest pin URL to download the image or video in full resolution. The tool extracts the highest quality version available. Works with standard pins, video pins, and idea pins.",
    keyTakeaways: [
      "Downloads Pinterest images in original high resolution",
      "Supports image pins, video pins, and idea pins",
      "No watermark added to downloaded files",
      "Shows pin metadata: title, description, and board info",
      "Respect copyright — only download content you have permission to use",
    ],
    overview:
      "Use this downloader to process Pinterest pin links and retrieve available media output for design research, content review, and offline reference tasks.",

    howToSteps: [
      "Copy the Pinterest pin link.",
      "Paste it into the input field.",
      "Run processing to view output.",
      "Download the media file you need.",
    ],

    features: [
      "Pinterest URL processing",
      "Simple download workflow",
      "Desktop and mobile support",
      "No additional software",
      "Quick link-to-output flow",
    ],

    useCases: [
      "Design moodboard reference",
      "Content planning research",
      "Offline asset review",
      "Creative workflow archiving",
    ],

    aboutTool:
      "The page is structured for practical use: fast link handling, clear output steps, and low-friction access from any modern browser.",

    proTip:
      "Use full pin URLs for the most reliable processing results.",

    faqs: [
      {
        question: "Which Pinterest links work best?",
        answer:
          "Use complete public pin URLs. Restricted or unavailable content may fail.",
      },
      {
        question: "Can I use this on mobile browsers?",
        answer: "Yes. It supports modern mobile and desktop browsers.",
      },
      {
        question: "Do I need a Pinterest account in the tool?",
        answer: "No. The downloader itself does not require signup.",
      },
      {
        question: "Can every pin be downloaded?",
        answer:
          "Output availability depends on source visibility and link state.",
      },
      {
        question: "Is this free to use?",
        answer: "Yes. It is available as a free utility.",
      },
    ],

    relatedTools: [
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function PinterestDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="pinterest" placeholder="https://www.pinterest.com/pin/..." />
      )}
    />
  )
}
