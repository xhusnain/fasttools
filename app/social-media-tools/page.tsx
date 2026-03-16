import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import {
  AtSign,
  Camera,
  Download,
  Film,
  Hash,
  Link2,
  Music,
  Search,
  Tags,
  Tv,
  User,
  Video,
  Zap,
} from "lucide-react"

const socialTools = [
  {
    title: "YouTube Downloader",
    description: "Process YouTube video links and download available output.",
    href: "/social-media-tools/youtube-downloader",
    icon: Download,
  },
  {
    title: "YouTube Playlist Downloader",
    description: "Process playlist URLs for batch-oriented download workflows.",
    href: "/social-media-tools/youtube-playlist-downloader",
    icon: Tv,
  },
  {
    title: "YouTube Thumbnail Downloader",
    description: "Extract thumbnail image sizes from YouTube video links.",
    href: "/social-media-tools/youtube-thumbnail",
    icon: Camera,
  },
  {
    title: "YouTube Tag Extractor",
    description: "Extract YouTube tag data from video URLs for research.",
    href: "/social-media-tools/youtube-tags",
    icon: Tags,
  },
  {
    title: "YouTube Handle Checker",
    description: "Check channel-name and handle availability before launch.",
    href: "/social-media-tools/channel-checker",
    icon: Search,
  },
  {
    title: "YouTube Name Generator",
    description: "Generate YouTube channel naming ideas by niche and tone.",
    href: "/social-media-tools/youtube-channel-name-generator",
    icon: AtSign,
  },
  {
    title: "Instagram Downloader",
    description: "Process Instagram links and download available media output.",
    href: "/social-media-tools/instagram-downloader",
    icon: Download,
  },
  {
    title: "Instagram DP Viewer",
    description: "Lookup and view profile-picture output from usernames.",
    href: "/social-media-tools/instagram-dp",
    icon: User,
  },
  {
    title: "TikTok Downloader",
    description: "Process TikTok video links in a fast browser workflow.",
    href: "/social-media-tools/tiktok-downloader",
    icon: Film,
  },
  {
    title: "Douyin Downloader",
    description: "Download available output from public Douyin links.",
    href: "/social-media-tools/douyin-downloader",
    icon: Film,
  },
  {
    title: "CapCut Downloader",
    description: "Process CapCut links and retrieve available video output.",
    href: "/social-media-tools/capcut-downloader",
    icon: Video,
  },
  {
    title: "Pinterest Downloader",
    description: "Process Pinterest pin links for media download workflows.",
    href: "/social-media-tools/pinterest-downloader",
    icon: Download,
  },
  {
    title: "SoundCloud Downloader",
    description: "Process SoundCloud track links and save audio output.",
    href: "/social-media-tools/soundcloud-downloader",
    icon: Music,
  },
  {
    title: "Facebook Video Downloader",
    description: "Process Facebook video URLs and download available output.",
    href: "/social-media-tools/facebook-downloader",
    icon: Video,
  },
  {
    title: "X Video Downloader",
    description: "Process X status links and download available video media.",
    href: "/social-media-tools/x-video-downloader",
    icon: Video,
  },
  {
    title: "Hashtag Counter",
    description: "Count and extract hashtags for cleaner social captions.",
    href: "/social-media-tools/hashtag-counter",
    icon: Hash,
  },
  {
    title: "Link in Bio Generator",
    description: "Build a multi-link social bio page for campaign routing.",
    href: "/social-media-tools/link-in-bio",
    icon: Link2,
  },
  {
    title: "TikTok Engagement Rate Calculator",
    description: "Calculate TikTok engagement rate, compare benchmarks, and see your influencer tier.",
    href: "/social-media-tools/tiktok-engagement-calculator",
    icon: Zap,
  },
]

const toolConfig = createToolConfig({
  toolName: "Social Media Tools",
  description:
    "Browser-based social media tools for download workflows, creator optimization, and channel growth tasks.",
  metaTitle: "Social Media Tools: YouTube, Instagram, TikTok, More",
  metaDescription:
    "Free social media utilities for YouTube, Instagram, TikTok, Pinterest, SoundCloud, and creator workflow optimization.",
  path: "/social-media-tools",

  schemaOptions: {
    itemList: {
      name: "Social Media Tools Collection",
      description:
        "Task-focused social media utilities for creators, marketers, and operations teams.",
      items: socialTools.map((tool) => ({
        name: tool.title,
        description: tool.description,
        url: tool.href,
      })),
    },
  },

  header: {
    title: "Social Media Tools",
    description:
      "Practical tools for creator workflows, content operations, and social publishing tasks.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [{ label: "Social Media Tools", href: "/social-media-tools" }],

  content: {
    overview:
      "This category is built for utility intent: process links, extract useful social metadata, validate naming choices, and move quickly into production workflows.",

    features: [
      "Video and media link processing tools",
      "YouTube optimization and research utilities",
      "Creator branding and naming workflows",
      "Social publishing support tools",
      "Browser-first execution with no install",
    ],

    useCases: [
      "Creator content operations",
      "Social campaign execution",
      "Editorial and channel optimization",
      "Research and benchmarking tasks",
      "Cross-platform publishing workflows",
    ],

    aboutTool:
      "High-performing social utility pages prioritize speed, clarity, and reliable output. This category is organized around those practical expectations with tool-level internal linking.",

    faqs: [
      {
        question: "Who are these tools for?",
        answer:
          "Creators, social media managers, marketers, and operations teams can use them for day-to-day execution workflows.",
      },
      {
        question: "Do I need to install software?",
        answer:
          "No. These tools are designed for browser-first usage.",
      },
      {
        question: "Can I use them on mobile?",
        answer:
          "Yes. Most workflows are available on modern mobile browsers.",
      },
      {
        question: "Are these tools free?",
        answer: "Yes. The tools in this category are free to use.",
      },
      {
        question: "Can these support team workflows?",
        answer:
          "Yes. They are useful for creator operations, QA checks, and campaign handoff tasks.",
      },
    ],

    relatedTools: [
      { name: "SEO Tools", href: "/seo-tools" },
      { name: "Web Tools", href: "/web-tools" },
      { name: "Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SocialMediaToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {socialTools.map((tool) => (
            <GToolCard
              key={`social-media-${tool.href}`}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              icon={tool.icon}
            />
          ))}
        </div>
      )}
    />
  )
}
