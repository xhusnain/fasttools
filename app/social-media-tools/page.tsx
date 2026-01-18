import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"

import {
  Youtube, Instagram, Music, Tag, LinkIcon, Search, Hash,
  Download, Facebook, MessageSquare, Target, Shield, Globe,
  Lightbulb, CheckCircle, Code, Type, Headphones, List
} from "lucide-react"
import { getCurrentYear } from "@/lib/utils"

const socialTools = [
  {
    title: "YouTube Thumbnail Downloader",
    description: "Download YouTube video thumbnails in all available quality sizes for competitor analysis and inspiration.",
    icon: Youtube,
    href: "/social-media-tools/youtube-thumbnail",
    color: "red"
  },
  {
    title: "YouTube Playlist Downloader",
    description: "Download entire YouTube playlists to MP4 or MP3 in one go.",
    icon: List,
    href: "/social-media-tools/youtube-playlist-downloader",
    color: "red"
  },
  {
    title: "Instagram DP Viewer",
    description: "View and download Instagram profile pictures in HD quality for brand research and analysis.",
    icon: Instagram,
    href: "/social-media-tools/instagram-dp",
    color: "pink"
  },
  {
    title: "Instagram Downloader",
    description: "Download Instagram posts, reels, and images in HD quality for educational purposes and content inspiration.",
    icon: Download,
    href: "/social-media-tools/instagram-downloader",
    color: "pink"
  },
  {
    title: "TikTok Video Downloader",
    description: "Download TikTok videos without watermark for educational purposes and content inspiration.",
    icon: Music,
    href: "/social-media-tools/tiktok-downloader",
    color: "purple"
  },
  {
    title: "Soundcloud Downloader",
    description: "Download Soundcloud tracks to MP3 in high quality for offline listening and content creation.",
    icon: Headphones,
    href: "/social-media-tools/soundcloud-downloader",
    color: "orange"
  },
  {
    title: "Facebook Video Downloader",
    description: "Download Facebook videos in HD quality for educational purposes and content inspiration.",
    icon: Facebook,
    href: "/social-media-tools/facebook-downloader",
    color: "blue"
  },
  {
    title: "X Video Downloader",
    description: "Download X (Twitter) videos in HD quality without watermark for educational purposes and content inspiration.",
    icon: MessageSquare,
    href: "/social-media-tools/x-video-downloader",
    color: "slate"
  },
  {
    title: "YouTube Tag Extractor",
    description: "Extract tags from any YouTube video for SEO research and content optimization.",
    icon: Tag,
    href: "/social-media-tools/youtube-tags",
    color: "blue"
  },
  {
    title: "Link in Bio Generator",
    description: "Create beautiful link-in-bio pages for your social media profiles to drive traffic and conversions.",
    icon: LinkIcon,
    href: "/social-media-tools/link-in-bio",
    color: "green"
  },
  {
    title: "YouTube Channel Name Checker",
    description: "Check if your desired YouTube channel name is available across all platforms.",
    icon: Search,
    href: "/social-media-tools/channel-checker",
    color: "blue"
  },
  {
    title: "Instagram Hashtag Counter",
    description: "Count and extract hashtags from Instagram posts with AI-powered suggestions for better reach.",
    icon: Hash,
    href: "/social-media-tools/hashtag-counter",
    color: "purple"
  },
  {
    title: "YouTube Channel Name Generator",
    description: "Generate creative, catchy, and professional YouTube channel names instantly with AI.",
    icon: Type,
    href: "/social-media-tools/youtube-channel-name-generator",
    color: "red"
  },
]

const toolConfig = createToolConfig({
  toolName: "Social Media Tools",
  description: "Free creator tools: YouTube thumbnail downloader, Instagram DP viewer, TikTok saver, YouTube tags, and link‑in‑bio.",
  metaTitle: `Social Media Tools: YouTube, Instagram, TikTok | FastTools`,
  metaDescription: "Free creator tools: YouTube thumbnail downloader, Instagram DP viewer, TikTok saver, YouTube tags, and link‑in‑bio.",
  path: "/social-media-tools",
  keywords: [
    "social media tools", "social media toolkit", "content creator tools", "youtube tools",
    "instagram tools", "tiktok tools", "tiktok downloader", "download tiktok without watermark",
    "youtube thumbnail downloader", "download youtube thumbnail hd", "instagram dp viewer",
    "view instagram profile picture", "youtube tag extractor", "youtube tags finder",
    "link in bio generator", "bio link page builder", "social media bio tools",
    "instagram bio link", "content scheduling helper", "hashtag generator",
    "trending hashtags", "caption generator", "short video tools", "reels tools",
    "shorts tools", "analytics tools for creators", "social media seo", "video seo",
    "channel name checker", "username availability checker", "brand name checker",
    "youtube channel tools", "instagram tools online", "tiktok utilities",
    "twitter/x tools", "facebook tools", "pinterest tools", "social sharing tools",
    "open graph preview", "social preview generator", "image resizer for social",
    "thumbnail tools", "profile picture tools", "free online tools for creators",
    "creator productivity", "growth tools", "audience reach", "engagement tools",
    "content optimization", "fast social media tools"
  ],

  header: {
    title: `Social Media Tools & Content Helpers ()`,
    description: "Advanced social media utilities crafted for modern content creators. Our collection includes intelligent thumbnail downloaders, profile analyzers, and hashtag generators that help elevate your social presence and drive meaningful engagement.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
  ],

  content: {
    overview: "Our advanced social media toolkit leverages cutting-edge web technologies and API integrations to provide real-time access to social media data. Each tool is designed with user privacy and platform compliance in mind. Whether you're a YouTuber, Instagram influencer, or TikTok creator, our suite of tools helps you optimize your content, analyze competitors, and grow your audience effectively.",

    howToSteps: [
      "Select the specific social media tool you need from the grid below (e.g., Instagram DP Viewer).",
      "Enter the required URL, username, or text into the input field provided by the tool.",
      "Click the action button (Download, Extract, Check, or Generate) to process your request.",
      "View the results instantly and download content, copy tags, or analyze data as needed."
    ],

    features: [
      "Smart Data Extraction: Secure API endpoints and advanced parsing techniques to extract public data while respecting privacy.",
      "AI-Powered Analysis: Intelligent insights for hashtags, channel names, and content optimization.",
      "Platform-Specific Optimization: Tools tailored for YouTube, Instagram, TikTok, Facebook, and Twitter.",
      "High-Quality Downloads: Support for HD videos, high-resolution thumbnails, and clear audio extraction.",
      "Real-Time Availability: Instant checking for usernames and channel names across platforms.",
      "Privacy Focused: No login required, no data storage, and secure processing.",
      "Mobile-Friendly: Fully responsive design for use on smartphones and tablets.",
      "Free & Unlimited: Access all features without subscriptions or hidden fees."
    ],

    useCases: [
      "Content Creators: Optimize videos with better tags, thumbnails, and competitor analysis.",
      "Social Media Managers: Manage multiple accounts efficiently with hashtag tools and bio link generators.",
      "Digital Marketers: Research competitors, track trends, and optimize campaigns for better ROI.",
      "Brand Owners: Ensure brand consistency with channel name checkers and profile analysis.",
      "Influencers: Grow your reach with trending hashtags and optimized bio pages.",
      "Educators & Researchers: Download content for educational purposes and analysis."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Why Use Our Social Media Tools?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            In the competitive world of social media, having the right tools can make the difference between viral success and obscurity. Our suite provides the technical edge you need to create better content, understand your audience, and outperform competitors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Safe & Secure
              </h4>
              <p className="text-sm text-muted-foreground">
                We prioritize your safety. Our tools operate without requiring your login credentials, ensuring your accounts remain secure while you get the data you need.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                Cross-Platform
              </h4>
              <p className="text-sm text-muted-foreground">
                Manage your presence across all major platforms. From YouTube SEO to Instagram aesthetics and TikTok trends, we cover the entire ecosystem.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            Tips for Social Media Growth
          </h2>
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Consistency is Key:</strong> Post regularly to keep your audience engaged and favor algorithm visibility.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Optimize Metadata:</strong> Use relevant tags, keywords, and descriptions to help new viewers find your content.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Analyze Competitors:</strong> Learn from successful creators in your niche using our analysis tools.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Engage Your Community:</strong> Respond to comments and use tools like Link in Bio to direct traffic effectively.</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "Are these social media tools free to use?",
        answer: "Yes, all our social media tools are completely free. You can use them for unlimited checks, downloads, and analyses without any subscription or hidden fees."
      },
      {
        question: "Do I need to log in to my social media accounts?",
        answer: "No, our tools are designed to work with public data. You do not need to log in or provide your password for any of our tools, ensuring your account security."
      },
      {
        question: "Is it legal to download videos and thumbnails?",
        answer: "Downloading content for personal use, educational purposes, or analysis is generally acceptable. However, you should respect copyright laws and not re-upload content as your own without permission. Always check the terms of service of the specific platform."
      },
      {
        question: "Can I use these tools on my phone?",
        answer: "Absolutely! Our website is fully responsive and optimized for mobile devices. You can access all tools directly from your smartphone or tablet browser."
      },
      {
        question: "How accurate are the analytics and checkers?",
        answer: "We use real-time data from platform APIs to ensure high accuracy. However, social media platforms update frequently, so results are based on the most current data available at the moment of checking."
      },
      {
        question: "Do you store any user data?",
        answer: "We value your privacy. We do not store your searches, downloaded files, or personal information. All processing is done securely and transiently."
      },
      {
        question: "Can I suggest a new tool?",
        answer: "Yes! We are always looking to improve. If you have a suggestion for a new tool or feature, please contact us through our contact page."
      },
      {
        question: "What platforms do you support?",
        answer: "We currently support major platforms including YouTube, Instagram, TikTok, Soundcloud, Facebook, and X (Twitter), with more being added regularly."
      }
    ],

    relatedTools: [
      { name: "Image Tools", href: "/image-tools" },
      { name: "PDF Tools", href: "/pdf-tools" },
      { name: "SEO Tools", href: "/seo-tools" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function SocialMediaToolsPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {socialTools.map((tool) => (
            <GToolCard
              key={`social-tools-${tool.href}`}
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
