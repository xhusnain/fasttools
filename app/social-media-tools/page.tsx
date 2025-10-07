import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Youtube, Instagram, Music, Tag, LinkIcon, Search } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Social Media Tools - Free YouTube, Instagram & TikTok Tools | FastTools",
  description:
    "Free social media tools for content creators. Download YouTube thumbnails, view Instagram profile pictures, extract video tags, generate link in bio pages, and more.",
  keywords:
    "social media tools, social media toolkit, content creator tools, youtube tools, instagram tools, tiktok tools, tiktok downloader, download tiktok without watermark, youtube thumbnail downloader, download youtube thumbnail hd, instagram dp viewer, view instagram profile picture, youtube tag extractor, youtube tags finder, link in bio generator, bio link page builder, social media bio tools, instagram bio link, content scheduling helper, hashtag generator, trending hashtags, caption generator, short video tools, reels tools, shorts tools, analytics tools for creators, social media seo, video seo, channel name checker, username availability checker, brand name checker, youtube channel tools, instagram tools online, tiktok utilities, twitter/x tools, facebook tools, pinterest tools, social sharing tools, open graph preview, social preview generator, image resizer for social, thumbnail tools, profile picture tools, free online tools for creators, creator productivity, growth tools, audience reach, engagement tools, content optimization, fast social media tools",
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

      {/* Top Content Ad */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24" />
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

      {/* Center Content Ad */}
      <div className="my-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>

      <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Free Social Media Tools for Creators</h2>
        <p className="text-muted-foreground">
          Grow faster with practical utilities for YouTube, Instagram, and TikTok. Download thumbnails, extract tags,
          generate a link-in-bio page, and check channel name availability to build your brand consistently across
          platforms.
        </p>
        <h3 className="text-xl font-semibold text-foreground">Creator Workflows We Support</h3>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Prep social previews and thumbnails before you publish videos or reels</li>
          <li>Research video tags and keywords to improve discoverability and SEO</li>
          <li>Create a lightweight bio page so every profile can link to your key destinations</li>
          <li>Check brand and channel names to keep your identity consistent everywhere</li>
        </ul>
        <h3 className="text-xl font-semibold text-foreground">Tips for Better Engagement</h3>
        <p className="text-muted-foreground">
          Keep titles punchy, add 1–2 core keywords, and use high-contrast thumbnails. Write captions that lead with a
          hook and include clear calls to action. Use 3–5 highly relevant hashtags rather than long lists.
        </p>
      </section>

      {/* Bottom Content Ad */}
      <div className="mt-8">
        <AdSpace slot="content" className="w-full h-24" />
      </div>
    </div>
  )
}
