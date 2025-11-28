import { HashtagCounter } from "@/components/hashtag-counter"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import {
  Hash, Code, Globe, Calculator, ArrowRight, Target, Shield, Zap,
  Lightbulb, Copy, Users, BarChart3, TrendingUp, CheckCircle, Search
} from "lucide-react"
import { getCurrentYear } from "@/lib/utils"

const toolConfig = createToolConfig({
  toolName: "Instagram Hashtag Counter",
  description: "Free Instagram hashtag counter, generator & extractor tool. Count hashtags from posts, extract hashtags & generate AI-powered hashtags for better reach.",
  metaTitle: `Instagram Hashtag Generator & Counter | Free Hashtag Tool ${getCurrentYear()}`,
  metaDescription: "Free Instagram hashtag counter, generator & extractor tool. Count hashtags from posts, extract hashtags & generate AI-powered hashtags for better reach.",
  path: "/social-media-tools/hashtag-counter",
  keywords: [
    "instagram hashtag counter", "instagram hashtag generator", "hashtag counter",
    "hashtag generator", "instagram hashtag extractor", "instagram tag extractor",
    "instagram tags extractor", "hashtag extractor for instagram",
    "instagram hashtag for posts count", "hashtags", "free hashtag counter",
    "free hashtag generator", "count hashtags", "extract hashtags",
    "generate hashtags", "ai hashtag generator", "hashtag analyzer",
    "hashtag optimization", "hashtag research tool", "social media tools",
    "calculating conversions", "trending instagram hashtags", "top instagram hashtags",
    "real time instagram hashtag tracker", "instagram hashtag analytics"
  ],

  header: {
    title: "Instagram AI Hashtag Generator & Counter",
    description: "Count hashtags from Instagram posts, extract hashtags from captions, and generate AI-powered hashtags for better reach and engagement on social media. Perfect hashtag counter tool for calculating conversions and optimizing social media performance.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
  ],

  content: {
    overview: "Hashtags are the fuel that powers discovery on social media platforms like Instagram, Twitter, and TikTok. However, managing them effectively can be a challenge. Different platforms have different limits (e.g., Instagram's 30-hashtag limit), and finding the right mix of popular and niche tags is crucial for growth. The FastTools Instagram Hashtag Counter & Generator is an all-in-one solution designed to simplify your hashtag strategy. Whether you need to count hashtags in your caption to stay within limits, extract tags from competitor posts, or generate new AI-powered suggestions, our tool provides the insights you need to maximize your reach and engagement.",

    howToSteps: [
      "Paste Your Text: Copy and paste your caption or list of hashtags into the input field.",
      "Instant Analysis: The tool automatically counts the number of hashtags and identifies any duplicates.",
      "Generate Suggestions: Click 'Generate Hashtags' to get AI-powered recommendations based on your keywords.",
      "Extract Hashtags: Use the extraction feature to pull hashtags from any text or competitor post.",
      "Copy & Use: One-click copy your optimized hashtag set to your clipboard for immediate use."
    ],

    features: [
      "Smart Detection Engine: Automatically detects hashtags regardless of format and removes duplicates.",
      "AI-Powered Generation: Generate relevant, trending, and niche hashtags using advanced AI technology.",
      "Platform-Specific Optimization: Get suggestions tailored for Instagram (30 limit), Twitter, TikTok, and LinkedIn.",
      "Instant Counting: Real-time counting to ensure you stay within platform limits.",
      "Hashtag Extraction: Extract hashtags from any text block or caption instantly.",
      "Performance Metrics: Analyze hashtag density and mix for better engagement.",
      "Free & Unlimited: Use all features without any cost or registration requirements.",
      "Privacy Focused: Your content is processed securely in your browser."
    ],

    useCases: [
      "Social Media Managers: Optimize hashtag strategy across multiple accounts and platforms.",
      "Content Creators: Discover new trending hashtags to boost visibility and reach new audiences.",
      "Influencers: Analyze competitor hashtags and refine your own strategy for better engagement.",
      "Small Businesses: Find niche hashtags that connect you with your target local or industry audience.",
      "Marketers: Track hashtag performance and ensure compliance with platform guidelines.",
      "E-commerce: Identify product-specific hashtags to drive traffic to your online store."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Why Use a Hashtag Counter?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A hashtag counter is essential for social media optimization because different platforms have specific hashtag limits. Using a counter helps you stay within these limits, avoid duplicate hashtags, and optimize your content for maximum reach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Avoid Penalties
              </h4>
              <p className="text-sm text-muted-foreground">
                Exceeding hashtag limits can lead to your caption being deleted or your reach being restricted (shadowbanning). Our tool ensures you're always compliant.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Maximize Reach
              </h4>
              <p className="text-sm text-muted-foreground">
                Using the right number of hashtags (e.g., 20-30 for Instagram) is proven to increase engagement. Our tool helps you hit the sweet spot every time.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            Advanced Hashtag Strategies
          </h2>
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>The 3-Tier Strategy:</strong> Mix popular (1M+ posts), niche (100k-1M posts), and specific (10k-100k posts) hashtags for balanced reach.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Branded Hashtags:</strong> Create and use unique hashtags for your brand to build community and track user-generated content.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Location Tags:</strong> Include location-based hashtags to reach local audiences and improve discoverability in specific areas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Relevance First:</strong> Always prioritize relevance over popularity. Irrelevant hashtags can hurt your engagement rate.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Rotate Sets:</strong> Don't use the same set of hashtags for every post. Rotate them to reach different audience segments.</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "What is the Instagram hashtag limit?",
        answer: "Instagram allows a maximum of 30 hashtags per post. If you include more than 30, your caption or comment may not post. Our counter helps you stay within this limit."
      },
      {
        question: "How many hashtags should I use on Instagram?",
        answer: "While you can use up to 30, studies suggest that using between 20-30 relevant hashtags often yields the best reach and engagement. Quality and relevance are more important than just quantity."
      },
      {
        question: "Does the hashtag generator work for other platforms?",
        answer: "Yes! While optimized for Instagram, our tool generates hashtags that work great on Twitter, TikTok, LinkedIn, Facebook, and Pinterest. Just be mindful of each platform's specific best practices."
      },
      {
        question: "Is the hashtag counter free?",
        answer: "Yes, our Instagram Hashtag Counter & Generator is 100% free to use. You can count, extract, and generate hashtags as many times as you need without any cost."
      },
      {
        question: "How does the AI hashtag generator work?",
        answer: "Our AI analyzes the keywords or text you provide and suggests relevant hashtags based on current trends, popularity, and semantic relatedness to help you reach the right audience."
      },
      {
        question: "Can I extract hashtags from competitor posts?",
        answer: "Yes! Simply copy the caption from a competitor's post and paste it into our tool. It will instantly extract and list all the hashtags used, allowing you to analyze their strategy."
      },
      {
        question: "What are banned or shadowbanned hashtags?",
        answer: "These are hashtags that Instagram has restricted due to spam or inappropriate content. Using them can limit your post's visibility. Our tool helps you identify and avoid problematic tags."
      },
      {
        question: "Should I put hashtags in the caption or comments?",
        answer: "Both methods work well. Some users prefer putting hashtags in the first comment to keep the caption clean, while others include them in the caption. Instagram's algorithm indexes them in both places."
      }
    ],

    relatedTools: [
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function HashtagCounterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<HashtagCounter />)} />
}