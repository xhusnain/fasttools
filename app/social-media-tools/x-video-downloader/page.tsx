import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "X Video Downloader",
  description:
    "Download publicly available X (Twitter) video links using a browser-based workflow.",
  metaTitle: "X Video Downloader (Twitter Link Tool)",
  metaDescription:
    "Paste an X status URL and process downloadable video output quickly in-browser.",
  path: "/social-media-tools/x-video-downloader",
  keywords: [
    "x video downloader",
    "twitter video downloader",
    "download x video",
    "download twitter video",
    "x link downloader",
  ],

  header: {
    title: "X Video Downloader",
    description:
      "Process X status links and download available video output in a few steps.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "X Video Downloader", href: "/social-media-tools/x-video-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "X/Twitter status link downloader for browser-based video workflows.",
    featureList: [
      "X status URL processing",
      "Fast video output workflow",
      "Cross-device browser support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An X (Twitter) Video Downloader is a free tool that downloads videos and GIFs from X/Twitter posts in MP4 format for offline use.",
    quickAnswer:
      "Paste an X/Twitter post URL containing a video or GIF. The tool extracts available video qualities and lets you download in MP4 format. Works with tweets, replies, and quoted posts.",
    keyTakeaways: [
      "Downloads videos and GIFs from X/Twitter posts as MP4 files",
      "Multiple quality options when available (low, medium, high)",
      "Works with tweet URLs from both x.com and twitter.com domains",
      "GIFs are downloaded as MP4 video files (Twitter stores GIFs as MP4)",
      "Only download content you have rights to use",
    ],
    overview:
      "Use this downloader to process X links and retrieve available video output for research, reference, and workflow handoff tasks.",

    howToSteps: [
      "Copy the X status URL.",
      "Paste it into the input field.",
      "Run processing and inspect available output.",
      "Download the file to your device.",
    ],

    features: [
      "X link processing",
      "Simple download workflow",
      "Desktop and mobile browser compatibility",
      "No additional software",
      "Fast copy/paste path",
    ],

    useCases: [
      "Social trend monitoring",
      "Reference clip archiving",
      "Editorial workflow support",
      "Content research tasks",
    ],

    aboutTool:
      "The page is optimized for utility intent with a concise URL-processing flow and practical guidance for common X video download tasks.",

    proTip:
      "Use direct status URLs for best parser reliability.",

    faqs: [
      {
        question: "What links are supported?",
        answer:
          "Use valid public X/Twitter status links with accessible media.",
      },
      {
        question: "Does this work on mobile browsers?",
        answer: "Yes. It supports modern mobile and desktop browsers.",
      },
      {
        question: "Do I need to create an account in this tool?",
        answer: "No. Signup is not required for basic use.",
      },
      {
        question: "Can all posts be processed?",
        answer:
          "Output availability depends on post visibility and source restrictions.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. It is free to use as a browser utility.",
      },
    ],

    relatedTools: [
      { name: "Facebook Video Downloader", href: "/social-media-tools/facebook-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function XVideoDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="twitter" placeholder="https://twitter.com/username/status/..." />
      )}
    />
  )
}
