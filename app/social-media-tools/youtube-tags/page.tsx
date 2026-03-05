import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YoutubeTagExtractor = dynamic(
  () => import("@/components/social-media/youtube-tag-extractor").then((mod) => mod.YoutubeTagExtractor),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YouTube Tag Extractor",
  description:
    "Extract visible tag metadata from YouTube video links for research and optimization workflows.",
  metaTitle: "YouTube Tag Extractor (Video Tag Lookup)",
  metaDescription:
    "Paste a YouTube video URL to extract tag data for competitor and content research.",
  path: "/social-media-tools/youtube-tags",
  keywords: [
    "youtube tag extractor",
    "extract youtube tags",
    "youtube tags tool",
    "youtube keyword tags",
    "video tag lookup",
  ],

  header: {
    title: "YouTube Tag Extractor",
    description:
      "Extract and review YouTube tag data from video links quickly.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
  ],

  schemaOptions: {
    applicationCategory: "SearchAction",
    description:
      "YouTube tag extraction utility for content and competitor research workflows.",
    featureList: [
      "Video URL tag extraction",
      "Tag list review",
      "Quick copy workflow",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A YouTube Tag Extractor is a free tool that reveals the hidden tags used on any YouTube video to help with keyword research and SEO optimization.",
    quickAnswer:
      "Paste a YouTube video URL to instantly extract all tags the creator used. Copy the tag list for your own videos. Useful for competitor analysis and discovering high-performing keywords in your niche.",
    keyTakeaways: [
      "Extracts hidden meta tags from any public YouTube video",
      "YouTube tags help the algorithm understand video content and context",
      "Tags are not publicly visible — this tool reveals what creators use",
      "Copy extracted tags to use in your own video optimization",
      "Useful for competitor keyword research and YouTube SEO strategy",
    ],
    overview:
      "Use this tool to extract tag data from YouTube video links when researching keyword patterns, competitor positioning, and metadata strategy.",

    howToSteps: [
      "Copy the YouTube video URL.",
      "Paste it into the extractor input.",
      "Run extraction and review the tag list.",
      "Copy relevant tags into your research workflow.",
    ],

    features: [
      "Video URL tag extraction",
      "Fast tag output",
      "Copy-ready results",
      "Research workflow support",
      "Browser-based utility",
    ],

    useCases: [
      "Competitor metadata review",
      "Video keyword research",
      "Editorial planning",
      "Channel optimization workflows",
    ],

    aboutTool:
      "This page focuses on utility intent with direct tag extraction and concise guidance for practical YouTube metadata research.",

    proTip:
      "Use extracted tags as directional input, then adapt them to your unique topic and audience intent.",

    faqs: [
      {
        question: "What does this extractor return?",
        answer:
          "It returns available tag metadata associated with the provided video link.",
      },
      {
        question: "Can I use this for competitor research?",
        answer:
          "Yes. It helps identify tag patterns across related videos.",
      },
      {
        question: "Should I copy tags exactly?",
        answer:
          "Use them as references and adapt to your specific content intent.",
      },
      {
        question: "Can I run this from mobile browsers?",
        answer: "Yes. The workflow supports mobile and desktop browsers.",
      },
      {
        question: "Is this free?",
        answer: "Yes. It is available as a free utility.",
      },
    ],

    relatedTools: [
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "YouTube Handle Checker", href: "/social-media-tools/channel-checker" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeTagsPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeTagExtractor />)} />
}
