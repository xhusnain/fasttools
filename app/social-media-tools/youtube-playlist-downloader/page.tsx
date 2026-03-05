import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "YouTube Playlist Downloader",
  description:
    "Process YouTube playlist links and download available playlist output with a browser-based workflow.",
  metaTitle: "YouTube Playlist Downloader (Bulk Link Tool)",
  metaDescription:
    "Paste a YouTube playlist URL to process available bulk download output.",
  path: "/social-media-tools/youtube-playlist-downloader",
  keywords: [
    "youtube playlist downloader",
    "download youtube playlist",
    "youtube bulk downloader",
    "playlist link downloader",
    "youtube playlist tool",
  ],

  header: {
    title: "YouTube Playlist Downloader",
    description:
      "Process playlist URLs and handle available bulk output in a few steps.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Playlist Downloader", href: "/social-media-tools/youtube-playlist-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "YouTube playlist link downloader for browser-based bulk media workflows.",
    featureList: [
      "Playlist URL processing",
      "Bulk output workflow",
      "Cross-device browser support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A YouTube Playlist Downloader is a free tool that downloads all videos from a YouTube playlist in your preferred format and quality.",
    quickAnswer:
      "Paste a YouTube playlist URL to see all videos in the playlist. Select quality and format preferences, then download individual videos or the entire playlist. Supports MP4 video and MP3 audio extraction.",
    keyTakeaways: [
      "Downloads all videos from a YouTube playlist in one workflow",
      "Supports multiple quality options: 360p, 720p, 1080p, and higher",
      "Extract audio as MP3 for music playlists and podcasts",
      "Shows playlist metadata: title, video count, and total duration",
      "Only download content you have rights to use",
    ],
    overview:
      "Use this page to process YouTube playlist URLs and handle available output for batch-oriented media workflows and offline reference tasks.",

    howToSteps: [
      "Copy the YouTube playlist URL.",
      "Paste it into the playlist input field.",
      "Run processing to inspect available output.",
      "Download the results you need.",
    ],

    features: [
      "Playlist URL processing",
      "Batch workflow support",
      "Browser-based interface",
      "No additional software",
      "Simple copy/paste flow",
    ],

    useCases: [
      "Batch content review",
      "Playlist research workflows",
      "Offline reference collections",
      "Team handoff operations",
    ],

    aboutTool:
      "The workflow is optimized for utility intent and batch operations, with concise guidance for processing playlist links and handling output efficiently.",

    proTip:
      "Use complete playlist URLs including the `list=` parameter to ensure correct parsing.",

    faqs: [
      {
        question: "What playlist links are supported?",
        answer:
          "Use valid public YouTube playlist URLs with accessible items.",
      },
      {
        question: "Can this be used on mobile browsers?",
        answer: "Yes. It works on modern mobile and desktop browsers.",
      },
      {
        question: "Do I need to install anything?",
        answer: "No. It is a browser-based tool.",
      },
      {
        question: "Can every playlist be processed?",
        answer:
          "Results depend on playlist visibility and source restrictions.",
      },
      {
        question: "Is it free?",
        answer: "Yes. It is available as a free utility.",
      },
    ],

    relatedTools: [
      { name: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubePlaylistDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader
          defaultPlatform="youtube"
          placeholder="Paste YouTube playlist URL (e.g., https://www.youtube.com/playlist?list=...)"
          mode="playlist"
        />
      )}
    />
  )
}
