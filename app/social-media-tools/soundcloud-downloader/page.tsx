import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { UnifiedDownloader } from "@/components/social-media/unified-downloader"

const toolConfig = createToolConfig({
  toolName: "SoundCloud Downloader",
  description:
    "Process SoundCloud track links and download available audio output in a browser workflow.",
  metaTitle: "SoundCloud Downloader (Track Link Tool)",
  metaDescription:
    "Paste a SoundCloud link and process downloadable audio output quickly.",
  path: "/social-media-tools/soundcloud-downloader",
  keywords: [
    "soundcloud downloader",
    "download soundcloud track",
    "soundcloud link downloader",
    "save soundcloud audio",
    "soundcloud audio tool",
  ],

  header: {
    title: "SoundCloud Downloader",
    description:
      "Process SoundCloud track links and download available audio output.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "SoundCloud Downloader", href: "/social-media-tools/soundcloud-downloader" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "SoundCloud track link downloader for browser-based audio save workflows.",
    featureList: [
      "SoundCloud link processing",
      "Audio download flow",
      "Cross-device browser support",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A SoundCloud Downloader is a free tool that downloads SoundCloud tracks and playlists as MP3 files for offline listening.",
    quickAnswer:
      "Paste a SoundCloud track or playlist URL to download audio as MP3. The tool shows track info including title, artist, duration, and artwork. Works with public tracks only.",
    keyTakeaways: [
      "Downloads SoundCloud tracks as high-quality MP3 files",
      "Shows track metadata: title, artist, duration, and play count",
      "Works with individual tracks and playlist URLs",
      "Only works with publicly accessible SoundCloud content",
      "Respect artist rights — only download content you are permitted to use",
    ],
    overview:
      "Use this tool to process SoundCloud links and retrieve available audio output for offline listening and workflow reference tasks.",

    howToSteps: [
      "Copy a SoundCloud track URL.",
      "Paste it into the input field.",
      "Run processing and review output.",
      "Download the available audio file.",
    ],

    features: [
      "SoundCloud track URL processing",
      "Quick output handling",
      "Desktop and mobile browser support",
      "No software installation",
      "Simple copy/paste workflow",
    ],

    useCases: [
      "Audio reference workflow",
      "Offline listening copies",
      "Creator review",
      "Team handoff tasks",
    ],

    aboutTool:
      "This page is optimized for utility intent with a straightforward link-to-audio workflow and concise operational guidance.",

    proTip:
      "Use direct track URLs for the most consistent processing behavior.",

    faqs: [
      {
        question: "Which links are supported?",
        answer:
          "Use valid public SoundCloud track links for best results.",
      },
      {
        question: "Can I use this on mobile?",
        answer: "Yes. The tool works in modern mobile browsers.",
      },
      {
        question: "Do I need signup?",
        answer: "No. The downloader itself does not require signup.",
      },
      {
        question: "Can all tracks be processed?",
        answer:
          "Availability depends on source settings and accessibility.",
      },
      {
        question: "Is it free to use?",
        answer: "Yes, it is provided as a free utility.",
      },
    ],

    relatedTools: [
      { name: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "X Video Downloader", href: "/social-media-tools/x-video-downloader" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SoundcloudDownloaderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <UnifiedDownloader defaultPlatform="soundcloud" placeholder="https://soundcloud.com/artist/track" />
      )}
    />
  )
}
