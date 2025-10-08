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

      {/* Hero Section with proper content-to-ad ratio */}
      <div className="mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Social Media Tools</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl text-pretty">
          Comprehensive suite of free social media tools designed for content creators, digital marketers, and social media managers. 
          Our advanced toolkit includes YouTube thumbnail downloaders, Instagram profile picture viewers, TikTok video downloaders, 
          YouTube tag extractors, link-in-bio generators, and channel name checkers. Boost your social media presence with 
          professional-grade tools that help you create engaging content, optimize your profiles, and grow your audience across 
          all major platforms including YouTube, Instagram, TikTok, Twitter, and Facebook.
        </p>
      </div>

      {/* First Ad Space - After Hero Content */}
      <div className="mb-8">
        <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card className="p-6 h-full bg-card/80 backdrop-blur-sm border-border shadow-sm hover:shadow-md transition-all hover:border-primary/50">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20`}>
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

      {/* Second Ad Space - Between Tools and Content */}
      <div className="my-8">
        <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
      </div>

      <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Free Social Media Tools for Content Creators</h2>
        <p className="text-muted-foreground">
          Accelerate your social media growth with our comprehensive suite of professional-grade tools designed for 
          YouTube creators, Instagram influencers, TikTok content creators, and digital marketers. Our social media 
          toolkit includes advanced thumbnail downloaders, profile picture viewers, video downloaders, tag extractors, 
          bio link generators, and channel name checkers. Whether you're a beginner content creator or an experienced 
          social media manager, our tools help you optimize your content strategy, improve your social media SEO, 
          and build a stronger online presence across all major platforms.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Creator Workflows We Support</h3>
        <ul className="list-disc pl-6 text-muted-foreground">
          <li>Download high-quality YouTube thumbnails for competitor analysis and inspiration</li>
          <li>Extract trending hashtags and keywords from successful videos to improve your content SEO</li>
          <li>View Instagram profile pictures in HD quality for brand research and competitor analysis</li>
          <li>Create professional link-in-bio pages that convert visitors into followers and customers</li>
          <li>Check YouTube channel name availability to maintain consistent branding across platforms</li>
          <li>Download TikTok videos for educational purposes and content inspiration</li>
          <li>Generate social media previews and optimize your content for maximum engagement</li>
        </ul>
        
        <h3 className="text-xl font-semibold text-foreground">Advanced Social Media Optimization Tips</h3>
        <p className="text-muted-foreground">
          Master the art of social media optimization with our expert-backed strategies. Use high-contrast, 
          eye-catching thumbnails that stand out in crowded feeds. Research trending hashtags and keywords 
          to improve your content's discoverability. Create compelling captions that hook viewers in the first 
          three seconds. Use 3-5 highly relevant hashtags rather than keyword stuffing. Optimize your bio links 
          to drive traffic to your most important content and convert visitors into loyal followers.
        </p>
      </section>

      {/* Understanding How This Tool Works */}
      <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Understanding How Social Media Tools Work</h2>
        <p className="text-muted-foreground">
          Our social media tools leverage advanced web scraping technologies and API integrations to provide 
          real-time access to social media data. Each tool is designed with user privacy and platform compliance 
          in mind, ensuring you can safely extract the information you need for content creation and competitor 
          analysis.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">YouTube Tools Technology</h3>
        <p className="text-muted-foreground">
          Our YouTube thumbnail downloader uses direct API calls to YouTube's thumbnail servers, allowing you to 
          access thumbnails in multiple resolutions (720p, 1080p, 4K). The YouTube tag extractor analyzes video 
          metadata to reveal the exact tags used by successful creators, helping you optimize your own content 
          for better discoverability and YouTube SEO.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Instagram Tools Functionality</h3>
        <p className="text-muted-foreground">
          The Instagram DP viewer accesses public profile data through secure API endpoints, allowing you to 
          view and download profile pictures in their original high-resolution format. This tool is particularly 
          useful for brand research, competitor analysis, and maintaining consistent visual identity across 
          your social media presence.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">TikTok Tools Capabilities</h3>
        <p className="text-muted-foreground">
          Our TikTok downloader uses advanced parsing techniques to extract video content while respecting 
          platform terms of service. The tool is designed for educational purposes, allowing content creators 
          to study successful video formats, analyze trending content, and understand what makes videos go viral.
        </p>
      </section>

      {/* Advanced Usage Techniques */}
      <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Advanced Usage Techniques</h2>
        <p className="text-muted-foreground">
          Unlock the full potential of our social media tools with these professional techniques used by 
          top content creators and digital marketing agencies.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Competitive Analysis Mastery</h3>
        <p className="text-muted-foreground">
          Use our YouTube tag extractor to analyze the tags of your top 10 competitors. Create a spreadsheet 
          tracking their most successful tags, then incorporate the most relevant ones into your own content. 
          Combine this with thumbnail analysis to understand what visual elements drive the highest click-through rates.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Brand Consistency Optimization</h3>
        <p className="text-muted-foreground">
          Use the channel name checker to ensure your brand name is available across all platforms before 
          launching. Create a comprehensive link-in-bio page that directs followers to your most important 
          content, products, or services. This centralized approach improves conversion rates and makes it 
          easier for followers to find your key content.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Content Strategy Development</h3>
        <p className="text-muted-foreground">
          Download thumbnails from trending videos in your niche to create a visual inspiration library. 
          Analyze the color schemes, text placement, and visual elements that perform best. Use this data 
          to develop your own thumbnail templates that maintain brand consistency while maximizing click-through rates.
        </p>
      </section>

      {/* Performance and Optimization Tips */}
      <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Performance and Optimization Tips</h2>
        <p className="text-muted-foreground">
          Maximize your social media ROI with these proven optimization strategies and performance enhancement techniques.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Tool Usage Optimization</h3>
        <p className="text-muted-foreground">
          Use our tools during peak research hours (9 AM - 11 AM and 7 PM - 9 PM) when most creators publish 
          content. This timing ensures you're analyzing the most current and relevant content. Batch your 
          research sessions to maximize efficiency - spend 30 minutes daily analyzing competitors rather than 
          sporadic, unfocused research.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Data-Driven Content Decisions</h3>
        <p className="text-muted-foreground">
          Track the performance of content created using insights from our tools. Monitor which tags, 
          thumbnails, and content formats drive the highest engagement. Use this data to refine your 
          content strategy and focus on what works best for your audience.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Cross-Platform Integration</h3>
        <p className="text-muted-foreground">
          Use insights from one platform to optimize content for others. For example, successful TikTok 
          trends can be adapted for YouTube Shorts, and high-performing Instagram content can inspire 
          YouTube thumbnail designs. Our tools help you maintain consistency while adapting to each 
          platform's unique requirements.
        </p>
      </section>

      {/* Common Mistakes and How to Avoid Them */}
      <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Common Mistakes and How to Avoid Them</h2>
        <p className="text-muted-foreground">
          Avoid these common pitfalls that can hurt your social media performance and learn how to use 
          our tools effectively for maximum results.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Tag Research Mistakes</h3>
        <p className="text-muted-foreground">
          Don't simply copy all tags from successful videos. Instead, analyze which tags are most relevant 
          to your content and audience. Use our tag extractor to identify patterns, then create your own 
          unique tag combinations that include both broad and niche-specific keywords.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Thumbnail Design Errors</h3>
        <p className="text-muted-foreground">
          Avoid using thumbnails that are too cluttered or don't clearly represent your content. When 
          downloading thumbnails for inspiration, focus on the composition and color schemes rather than 
          copying exact designs. Create thumbnails that are consistent with your brand while standing out 
          in the YouTube feed.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Bio Link Optimization</h3>
        <p className="text-muted-foreground">
          Don't create generic bio pages that don't convert. Use our link-in-bio generator to create 
          pages that clearly guide visitors to your most important content. Include compelling descriptions, 
          use high-quality images, and organize links in order of priority to maximize click-through rates.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Brand Name Consistency</h3>
        <p className="text-muted-foreground">
          Always check name availability across all platforms before finalizing your brand identity. 
          Use our channel name checker to ensure consistency and avoid confusion among your audience. 
          A consistent brand name across all platforms improves recognition and makes it easier for 
          followers to find you everywhere.
        </p>
      </section>

      {/* FAQs Section */}
      <section className="mt-12 prose prose-slate max-w-none dark:prose-invert">
        <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
        
        <h3 className="text-xl font-semibold text-foreground">How do I download YouTube thumbnails in the highest quality?</h3>
        <p className="text-muted-foreground">
          Our YouTube thumbnail downloader automatically provides thumbnails in multiple resolutions. 
          For the highest quality, select the 4K option (1280x720) which is the maximum resolution 
          available for YouTube thumbnails. This ensures your downloaded thumbnails maintain crisp 
          quality for analysis and inspiration.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Can I use these tools for commercial purposes?</h3>
        <p className="text-muted-foreground">
          Yes, all our social media tools are free for both personal and commercial use. Whether you're 
          a solo content creator or a digital marketing agency, you can use our tools to enhance your 
          social media strategy and grow your online presence.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">How often should I analyze competitor content?</h3>
        <p className="text-muted-foreground">
          We recommend analyzing competitor content weekly to stay updated with trending topics and 
          successful strategies. Use our tools to track changes in their tag strategies, thumbnail 
          designs, and content formats. This regular analysis helps you stay competitive and identify 
          new opportunities for growth.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">Are these tools safe to use with social media platforms?</h3>
        <p className="text-muted-foreground">
          Yes, all our tools are designed to comply with platform terms of service and respect user 
          privacy. We use official APIs and secure methods to access public data only. Our tools don't 
          require login credentials or access to private information, ensuring your accounts remain secure.
        </p>
        
        <h3 className="text-xl font-semibold text-foreground">How can I improve my social media ROI using these tools?</h3>
        <p className="text-muted-foreground">
          Use our tools to create data-driven content strategies. Analyze successful competitors to 
          understand what works, optimize your thumbnails and tags for better discoverability, and 
          create compelling bio pages that convert visitors into followers. Track your performance 
          and adjust your strategy based on the insights gained from our tools.
        </p>
      </section>

      {/* Final Ad Space - Bottom Content */}
      <div className="mt-8">
        <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
      </div>
    </div>
  )
}
