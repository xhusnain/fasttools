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
    "Download YouTube video thumbnails in all resolutions from 120×90 to 1280×720 (maxresdefault). Free YouTube thumbnail grabber — extract and save thumbnail images instantly.",
  metaTitle: "YouTube Thumbnail Downloader — Download Thumbnails in HD 1280×720 Free (2026)",
  metaDescription:
    "Download YouTube thumbnails in all sizes including HD 1280×720 maxresdefault. Free YouTube thumbnail grabber — paste any video URL to extract and save thumbnail images.",
  path: "/social-media-tools/youtube-thumbnail",

  header: {
    title: "YouTube Thumbnail Downloader",
    description:
      "Download YouTube video thumbnails in all available sizes — from 120×90 default to 1280×720 maxresdefault. Paste any video URL to extract and save thumbnail images instantly.",
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
      "Free YouTube thumbnail downloader and grabber that extracts video thumbnails in all resolutions from 120×90 to 1280×720 maxresdefault.",
    featureList: [
      "Download thumbnails in all sizes: 120×90, 320×180, 480×360, 640×480, 1280×720",
      "Maxresdefault 1280×720 HD thumbnail extraction",
      "Works with any YouTube video URL or video ID",
      "Instant thumbnail preview before download",
      "Thumbnails saved as high-quality JPG files",
      "No login or software required",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A YouTube Thumbnail Downloader is a free online tool that extracts and downloads thumbnail images from any YouTube video in all available resolutions — from 120×90 (default) up to 1280×720 (maxresdefault).",
    quickAnswer:
      "Paste a YouTube video URL to instantly see and download all available thumbnail sizes: default (120×90), mqdefault (320×180), hqdefault (480×360), sddefault (640×480), and maxresdefault (1280×720). Click download on the resolution you need. No account or software required.",
    keyTakeaways: [
      "Downloads YouTube thumbnails in 5 resolutions: 120×90 to 1280×720",
      "Maxresdefault (1280×720) is the highest quality thumbnail available",
      "Works with any public YouTube video URL, short URL, or video ID",
      "YouTube generates thumbnails automatically — every video has them",
      "Thumbnails save as JPG files ready for presentations and social media",
      "Useful for thumbnail design research, A/B testing analysis, and content planning",
    ],
    overview:
      "Download YouTube video thumbnails in all available sizes with this free thumbnail grabber. Every YouTube video has multiple thumbnail resolutions generated automatically. This tool extracts all of them — from the small 120×90 default up to the full 1280×720 maxresdefault HD image. Simply paste the YouTube video URL, preview all available thumbnail sizes, and download the one you need. Works with standard youtube.com URLs, youtu.be short links, and raw video IDs. Thumbnails are commonly used for content research, thumbnail design inspiration, presentations, blog posts, and social media sharing.",

    howToSteps: [
      "Copy the YouTube video URL from your browser or the YouTube app share menu.",
      "Paste the URL into the thumbnail downloader input field above.",
      "Preview all available thumbnail sizes displayed with their resolutions.",
      "Click download on the thumbnail size you want — maxresdefault (1280×720) for the best quality.",
    ],

    features: [
      "Download thumbnails in 5 sizes: default, mq, hq, sd, and maxresdefault",
      "HD 1280×720 maxresdefault for the highest quality thumbnail",
      "Instant preview of all thumbnail sizes before download",
      "Works with youtube.com URLs, youtu.be short links, and video IDs",
      "No login, browser extension, or software required",
      "One-click download as high-quality JPG files",
    ],

    useCases: [
      "Research competitor thumbnail designs and click-through-rate optimization strategies",
      "Download thumbnails for blog posts, articles, and social media sharing",
      "Analyze top-performing thumbnails in your niche for design inspiration",
      "Save thumbnails for content calendars, editorial planning, and presentations",
      "Compare thumbnail styles across channels for A/B testing ideas",
    ],

    aboutTool:
      "YouTube automatically generates multiple thumbnail sizes for every video. These thumbnails are publicly accessible via YouTube's image CDN. Our tool constructs the URLs for all 5 standard sizes (default 120×90, mqdefault 320×180, hqdefault 480×360, sddefault 640×480, maxresdefault 1280×720) and displays them with download buttons. Not all videos have the maxresdefault size — if a creator uploaded a custom thumbnail, maxresdefault is almost always available. For auto-generated thumbnails, the tool falls back to the highest available size. Thumbnails are JPG images suitable for presentations, blog posts, and design research.",

    proTip:
      "The maxresdefault (1280×720) is the best quality for design analysis and presentations. If maxresdefault is not available for a video, use hqdefault (480×360) as a reliable fallback. Custom-uploaded thumbnails always have maxresdefault available.",

    faqs: [
      {
        question: "How do I download a YouTube video thumbnail?",
        answer:
          "Copy the YouTube video URL, paste it into our thumbnail downloader above, and you will see all available thumbnail sizes. Click the download button on the size you want — maxresdefault (1280×720) gives the highest quality.",
      },
      {
        question: "What thumbnail sizes can I download?",
        answer:
          "YouTube generates 5 standard sizes: default (120×90), mqdefault (320×180), hqdefault (480×360), sddefault (640×480), and maxresdefault (1280×720). The tool shows all available sizes with preview images.",
      },
      {
        question: "What is maxresdefault and is it always available?",
        answer:
          "Maxresdefault is YouTube's highest quality thumbnail at 1280×720 pixels. It is available for most videos, especially those with custom-uploaded thumbnails. Videos with only auto-generated thumbnails may not have this size.",
      },
      {
        question: "Can I use YouTube thumbnails on my website or blog?",
        answer:
          "YouTube thumbnails are publicly accessible images. For editorial purposes like reviews, criticism, and news reporting, fair use may apply. For commercial use, ensure you have permission from the video creator.",
      },
      {
        question: "Does this work with YouTube Shorts thumbnails?",
        answer:
          "Yes. Paste a YouTube Shorts URL to extract its thumbnail. Shorts thumbnails follow the same size format as regular video thumbnails.",
      },
      {
        question: "Do I need a YouTube account to download thumbnails?",
        answer:
          "No. Thumbnails are public images. No YouTube login, account, or software is required — the tool works entirely in your browser.",
      },
      {
        question: "Is this YouTube thumbnail downloader free?",
        answer:
          "Yes. 100% free with no limits on downloads, no registration, and no watermarks added to thumbnail images.",
      },
    ],

    relatedTools: [
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "YouTube Channel Checker", href: "/social-media-tools/channel-checker" },
      { name: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeThumbnailPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeThumbnailDownloader />)} />
}
