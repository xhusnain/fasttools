import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import {
  AtSign,
  Camera,
  Hash,
  Link2,
  Search,
  Tags,
  User,
  Zap,
  DollarSign,
} from "lucide-react"

const socialTools = [
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
    title: "Instagram DP Viewer",
    description: "Lookup and view profile-picture output from usernames.",
    href: "/social-media-tools/instagram-dp",
    icon: User,
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
  {
    title: "Influencer Sponsorship Rate Calculator",
    description: "Calculate how much to charge for sponsored posts based on followers, engagement, platform & niche.",
    href: "/social-media-tools/influencer-rate-calculator",
    icon: DollarSign,
  },
]

const toolConfig = createToolConfig({
  toolName: "Social Media Tools",
  description:
    "Browser-based social media tools for creator optimization, engagement analysis, and channel growth tasks.",
  metaTitle: "Social Media Tools: YouTube, Instagram, TikTok, More",
  metaDescription:
    "Free social media utilities for YouTube, Instagram, TikTok creator optimization, engagement analysis, and channel growth.",
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
      "This category is built for utility intent: analyze engagement metrics, extract useful social metadata, validate naming choices, and move quickly into production workflows.",

    features: [
      "TikTok engagement rate analysis with benchmarks",
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
