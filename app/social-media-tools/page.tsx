import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Youtube, Instagram, Music, Tag, LinkIcon, Search } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Social Media Tools - Free YouTube, Instagram & TikTok Tools | ToolifyHub",
  description:
    "Free social media tools for content creators. Download YouTube thumbnails, view Instagram profile pictures, extract video tags, generate link in bio pages, and more.",
  keywords:
    "social media tools, youtube tools, instagram tools, tiktok downloader, youtube thumbnail downloader, instagram dp viewer, youtube tag extractor, link in bio generator",
  openGraph: {
    title: "Social Media Tools - Free YouTube, Instagram & TikTok Tools",
    description:
      "Free social media tools for content creators. Download YouTube thumbnails, view Instagram profile pictures, extract video tags, and more.",
    type: "website",
  },
}

const tools = [
  {
    title: "YouTube Thumbnail Downloader",
    description: "Download YouTube video thumbnails in all available quality sizes",
    href: "/social-media-tools/youtube-thumbnail",
    icon: Youtube,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Instagram DP Viewer",
    description: "View and download Instagram profile pictures in HD quality",
    href: "/social-media-tools/instagram-dp",
    icon: Instagram,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    title: "TikTok Video Downloader",
    description: "Download TikTok videos without watermark (educational purposes)",
    href: "/social-media-tools/tiktok-downloader",
    icon: Music,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "YouTube Tag Extractor",
    description: "Extract tags from any YouTube video for SEO research",
    href: "/social-media-tools/youtube-tags",
    icon: Tag,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Link in Bio Generator",
    description: "Create a beautiful link in bio page for your social media profiles",
    href: "/social-media-tools/link-in-bio",
    icon: LinkIcon,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "YouTube Channel Name Checker",
    description: "Check if your desired YouTube channel name is available",
    href: "/social-media-tools/channel-checker",
    icon: Search,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
]

export default function SocialMediaToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Social Media Tools", href: "/social-media-tools" },
        ]}
      />

      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Social Media Tools</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl text-pretty">
          Free tools for content creators and social media managers. Download thumbnails, extract tags, view profile
          pictures, and create link in bio pages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="p-6 h-full bg-card border-border shadow-sm hover:shadow-md transition-all hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${tool.bgColor}`}>
                  <tool.icon className={`h-6 w-6 ${tool.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
