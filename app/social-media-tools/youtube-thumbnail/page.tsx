import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YoutubeThumbnailDownloader = dynamic(
  () => import("@/components/social-media/youtube-thumbnail-downloader").then((mod) => mod.YoutubeThumbnailDownloader),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YouTube Thumbnail Downloader",
  description:
    "Extract thumbnail images from YouTube video URLs for analysis, inspiration, and publishing workflows.",
  metaTitle: "YouTube Thumbnail Downloader (Image Extractor)",
  metaDescription:
    "Paste a YouTube video link and download available thumbnail image sizes.",
  path: "/social-media-tools/youtube-thumbnail",
  keywords: [
    "youtube thumbnail downloader",
    "download youtube thumbnail",
    "youtube thumbnail extractor",
    "youtube thumbnail image",
    "yt thumbnail tool",
  ],

  header: {
    title: "YouTube Thumbnail Downloader",
    description:
      "Extract and download available thumbnail image sizes from YouTube URLs.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
  ],

  schemaOptions: {
    applicationCategory: "MultimediaApplication",
    description:
      "YouTube thumbnail extraction utility for creative research and publishing workflows.",
    featureList: [
      "Video URL thumbnail extraction",
      "Multiple image-size output",
      "Quick download workflow",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A YouTube Thumbnail Downloader is a free tool that extracts and downloads thumbnail images from any YouTube video in all available resolutions.",
    quickAnswer:
      "Paste a YouTube video URL to instantly see all available thumbnail sizes (default, medium, high, standard, maxres). Click download on the resolution you need. No account or software required.",
    keyTakeaways: [
      "Downloads thumbnails in all resolutions: 120×90 up to 1280×720 (maxres)",
      "Works with any public YouTube video URL or video ID",
      "Maxresdefault (1280×720) is the highest quality available",
      "Thumbnails are saved as JPG files",
      "Useful for content analysis, presentations, and social media reposts",
    ],
    overview:
      "Use this tool to extract thumbnail images from YouTube video links for content research, creative benchmarking, and publishing asset workflows.",

    howToSteps: [
      "Copy the YouTube video URL.",
      "Paste it into the input field.",
      "Run extraction and review available image sizes.",
      "Download the thumbnail size you need.",
    ],

    features: [
      "Thumbnail extraction from video URLs",
      "Multiple image-size options",
      "Fast browser workflow",
      "Simple download flow",
      "Cross-device support",
    ],

    useCases: [
      "Thumbnail design research",
      "Editorial asset collection",
      "Creative benchmark analysis",
      "Presentation and planning workflows",
    ],

    aboutTool:
      "This page is optimized for utility intent with a direct URL-to-image workflow and concise guidance for common thumbnail extraction tasks.",

    proTip:
      "Use high-resolution thumbnail variants for design review and presentation materials.",

    faqs: [
      {
        question: "What input format is supported?",
        answer:
          "Use standard YouTube video URLs for extraction.",
      },
      {
        question: "Can I get different thumbnail sizes?",
        answer:
          "Yes. The tool provides available size variants when present.",
      },
      {
        question: "Can I use this for competitor analysis?",
        answer:
          "Yes. It is commonly used for creative benchmarking workflows.",
      },
      {
        question: "Does it work on mobile browsers?",
        answer: "Yes. It supports modern mobile and desktop browsers.",
      },
      {
        question: "Is it free?",
        answer: "Yes. It is available as a free utility.",
      },
    ],

    relatedTools: [
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "YouTube Downloader", href: "/social-media-tools/youtube-downloader" },
      { name: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeThumbnailPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeThumbnailDownloader />)} />
}
