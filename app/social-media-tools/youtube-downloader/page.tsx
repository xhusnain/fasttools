import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "YouTube Downloader",
  description:
    "Process publicly available YouTube video links and download available output in a browser workflow.",
  metaTitle: "YouTube Downloader (Video Link Tool)",
  metaDescription:
    "Paste a YouTube video URL and process downloadable output quickly in-browser.",
  path: "/social-media-tools/youtube-downloader",
  keywords: [
    "youtube downloader",
    "download youtube video",
    "youtube video tool",
    "youtube link downloader",
    "save youtube video",
  ],

  header: {
    title: "YouTube Downloader",
    description:
      "Process YouTube video links and download available output in a few steps.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "YouTube video link downloader for browser-based media workflows.",
    featureList: [
      "YouTube URL processing",
      "Fast output handling",
      "Desktop/mobile browser support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    overview:
      "Use this downloader to process YouTube video links and retrieve available output for content operations, review workflows, and offline reference tasks.",

    howToSteps: [
      "Copy a YouTube video URL.",
      "Paste it in the input field.",
      "Run processing and review output options.",
      "Download the file you need.",
    ],

    features: [
      "YouTube video URL processing",
      "Simple browser workflow",
      "Cross-device compatibility",
      "No additional software",
      "Quick copy/paste flow",
    ],

    useCases: [
      "Creator workflow support",
      "Reference copy archiving",
      "Research and analysis",
      "Editorial review tasks",
    ],

    aboutTool:
      "The page is optimized for practical use with a clear URL-to-output process and concise guidance for common YouTube download tasks.",

    proTip:
      "Use complete canonical video URLs for more reliable parsing.",

    faqs: [
      {
        question: "Which URLs are supported?",
        answer:
          "Use valid public YouTube video links. Availability depends on source access.",
      },
      {
        question: "Can I use this on mobile?",
        answer: "Yes. It supports modern mobile browsers.",
      },
      {
        question: "Is signup required?",
        answer: "No. The downloader workflow is available without signup.",
      },
      {
        question: "Can every video be processed?",
        answer:
          "No. Some links may be restricted or unavailable based on source settings.",
      },
      {
        question: "Is this free?",
        answer: "Yes. It is offered as a free utility.",
      },
    ],

    relatedTools: [
      { name: "YouTube Playlist Downloader", href: "/social-media-tools/youtube-playlist-downloader" },
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader
          defaultPlatform="youtube"
          placeholder="Paste YouTube video URL..."
          mode="single"
        />
      )}
    />
  )
}
