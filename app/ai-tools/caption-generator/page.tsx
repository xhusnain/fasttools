import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const AiCaptionGenerator = dynamic(
  () =>
    import("@/components/social-media/ai-caption-generator").then(
      (mod) => mod.AiCaptionGenerator
    ),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "AI Caption Generator",
  description:
    "Generate social media captions from a content description with platform-specific output options.",
  metaTitle: "AI Caption Generator — Instagram, TikTok & LinkedIn Captions Free (2026)",
  metaDescription:
    "Generate engaging social media captions with AI for Instagram, TikTok, LinkedIn, Facebook, X, Pinterest, and YouTube. Multiple tones, hashtag suggestions, character limits, and one-click copy. Free caption writer tool.",
  path: "/ai-tools/caption-generator",

  header: {
    title: "AI Caption Generator",
    description:
      "Create scroll-stopping social media captions for Instagram (2,200 chars), TikTok (4,000 chars), LinkedIn (3,000 chars), X/Twitter (280 chars), Facebook, Pinterest, and YouTube. Choose tone — professional, witty, inspirational, casual, or funny — generate multiple caption variations with hashtag suggestions, and copy instantly for posting.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "AI Tools", href: "/ai-tools" },
    { label: "AI Caption Generator", href: "/ai-tools/caption-generator" },
  ],

  schemaOptions: {
    applicationCategory: "BusinessApplication",
    description:
      "Generate social captions from image or content descriptions for multiple social platforms.",
    alternateName: [
      "Instagram Caption Generator",
      "Social Caption Tool",
      "AI Post Caption Generator",
    ],
    featureList: [
      "Multi-platform caption generation",
      "Multiple output variations",
      "Copy-ready caption cards",
      "Platform-focused phrasing",
      "Fast regeneration",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "An AI Caption Generator is a free tool that creates engaging social media captions for Instagram, TikTok, LinkedIn, and other platforms based on your topic and tone preferences.",
    quickAnswer:
      "Enter your topic or describe your post, select a platform and tone (professional, casual, funny, etc.), and get AI-generated captions instantly. Edit, customize, and copy the ones you like.",
    keyTakeaways: [
      "AI-generated captions tailored to specific social media platforms",
      "Multiple tones: professional, casual, humorous, inspirational, witty",
      "Optimized for Instagram (2,200 chars), Twitter/X (280 chars), LinkedIn",
      "Includes hashtag suggestions and call-to-action options",
      "Regenerate unlimited times until you find the perfect caption",
    ],
    overview:
      "This AI caption generator transforms your content description into multiple platform-optimized caption options with the right tone, length, and formatting for each social network. Instagram captions perform best at 138-150 characters for feed posts and up to 2,200 characters for carousel storytelling. TikTok captions drive discovery when they include trending keywords within the first 40 characters. LinkedIn posts with hook-style openings get 2-3x more engagement. X/Twitter demands punchy messaging within 280 characters. This tool understands these platform-specific best practices and generates captions that follow proven engagement patterns — with hashtag suggestions, call-to-action options, and tone variations (professional, casual, humorous, inspirational, witty) so you can A/B test different approaches. Used by social media managers, content creators, influencers, small business owners, and marketing agencies to eliminate writer's block and publish consistently.",

    howToSteps: [
      "Describe your post content with specific details — product launch, travel photo, food recipe, gym selfie, business milestone, or lifestyle moment. Include the key message and desired audience reaction.",
      "Select your target platform (Instagram, TikTok, LinkedIn, X/Twitter, Facebook, Pinterest, YouTube) and choose a tone: professional, casual, funny, inspirational, witty, or educational.",
      "Generate multiple caption variations and compare hook strength, emoji usage, hashtag suggestions, and call-to-action effectiveness across options.",
      "Copy your favorite caption with one click, customize with brand voice, specific hashtags, and @mentions, then paste directly into your scheduling tool or native app for publishing.",
    ],

    features: [
      "7 platform-specific caption formats: Instagram (2,200 chars), TikTok (4,000 chars), LinkedIn (3,000 chars), X/Twitter (280 chars), Facebook, Pinterest, and YouTube",
      "Multiple tone options: professional, casual, humorous, inspirational, witty, educational, and sarcastic",
      "Multiple caption variations per generation for split-testing and engagement comparison",
      "AI-suggested hashtags relevant to your content topic and target platform",
      "Call-to-action suggestions: follow, comment, share, link in bio, save for later, tag a friend",
      "One-click copy to clipboard for instant pasting into scheduling tools (Later, Buffer, Hootsuite) or native apps",
      "Unlimited regeneration to explore different angles, hooks, and messaging approaches",
      "Character count awareness — captions stay within platform-specific limits automatically",
    ],

    useCases: [
      "Social media managers writing daily captions for brand accounts across Instagram, TikTok, LinkedIn, and Facebook",
      "Marketing teams creating campaign copy for product launches, promotions, seasonal sales, and event announcements",
      "Influencers and content creators generating engaging captions for sponsored posts, collaborations, and personal brand content",
      "Small business owners writing captions for product photos, customer testimonials, and behind-the-scenes content without hiring a copywriter",
      "E-commerce brands generating product description captions for Instagram Shopping and Pinterest product pins",
      "A/B testing different caption approaches — long-form storytelling vs short punchy hooks — to optimize engagement rates",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Social media algorithms in 2026 heavily weight caption engagement signals
          — comments, saves, and shares — when deciding how widely to distribute
          your content. Instagram&apos;s algorithm favors captions that prompt
          conversation (questions, polls, controversial takes), while TikTok&apos;s
          For You Page algorithm uses caption keywords for content classification
          and discovery. LinkedIn&apos;s algorithm rewards &quot;dwell time,&quot; making
          hook-style openings that stop the scroll critical for reach. Understanding
          these platform-specific dynamics is why AI-generated captions need to be
          tailored per network rather than copy-pasted across all channels.
        </p>
        <p>
          This caption generator uses AI language models trained on high-performing
          social media content patterns to produce captions that follow proven
          engagement frameworks: hook-story-CTA for LinkedIn, emoji-rich micro-stories
          for Instagram, trend-aware keyword hooks for TikTok, and concise punchy
          statements for X/Twitter. The multi-variation output lets you test different
          messaging angles — educational vs entertaining, question vs statement, short
          vs long — and learn what resonates with your specific audience over time.
        </p>
      </div>
    ),

    proTip:
      "Start every caption with a pattern interrupt — a bold statement, surprising statistic, or provocative question — in the first 125 characters (the preview cutoff on Instagram). Posts with strong hooks in the visible preview get 3-5x more 'see more' taps, which signals engagement to the algorithm and dramatically increases reach.",

    faqs: [
      {
        question: "What social media platforms does the AI caption generator support?",
        answer:
          "The generator creates optimized captions for Instagram (up to 2,200 characters), TikTok (up to 4,000 characters), LinkedIn (up to 3,000 characters), X/Twitter (280 characters), Facebook (63,206 characters), Pinterest (500 characters for descriptions), and YouTube (5,000 characters for video descriptions). Each platform selection adjusts the AI's output length, tone, hashtag format, and engagement patterns.",
      },
      {
        question: "How do I write better Instagram captions that get more engagement?",
        answer:
          "High-performing Instagram captions follow a hook-story-CTA structure: start with an attention-grabbing first line (visible in the 125-character preview), tell a relatable micro-story or share value, then end with a clear call-to-action (question, save prompt, or tag request). Use 3-5 highly relevant hashtags rather than 30 generic ones, add line breaks for readability, and place hashtags at the end or in a separate comment. This generator produces captions following these proven engagement patterns.",
      },
      {
        question: "Can I generate captions for LinkedIn professional content?",
        answer:
          "Yes. The LinkedIn tone generates professional, thought-leadership-style captions with hook openings that drive dwell time. LinkedIn's algorithm in 2026 rewards posts that keep people reading — so the AI creates opening lines designed to stop the scroll, followed by structured content with line breaks, bullet points, and a conversation-starting question at the end to drive comments.",
      },
      {
        question: "How many caption variations does each generation produce?",
        answer:
          "Each generation produces multiple caption options with different angles, hooks, and tones so you can compare approaches. This lets you A/B test captions across similar posts and learn which messaging style gets the most engagement from your specific audience. Regenerate unlimited times for fresh variations.",
      },
      {
        question: "Should I edit AI-generated captions before posting?",
        answer:
          "Always. AI captions are excellent first drafts that save 80% of writing time, but you should customize with your brand voice, specific product details, relevant @mentions, campaign-specific hashtags, and compliance language for sponsored content (FTC disclosure requirements). The best workflow is: generate, select the strongest option, then personalize for 2-3 minutes before scheduling.",
      },
      {
        question: "Can I use AI-generated captions for paid social media ads?",
        answer:
          "Yes, AI-generated captions work as strong starting points for paid social ad copy. However, paid campaigns require extra review: verify all claims are accurate and defensible, add required disclosures (FTC, platform-specific ad policies), check character limits for ad formats (Facebook ads have separate primary text, headline, and description limits), and ensure the messaging aligns with your landing page for quality score optimization.",
      },
      {
        question: "What makes a good TikTok caption for the For You Page?",
        answer:
          "TikTok's algorithm uses caption text for content classification and recommendation. Effective TikTok captions are short (under 150 characters for maximum visibility over the video), include trending keywords and relevant hashtags (2-4 max), create curiosity gaps ('wait for the end,' 'nobody talks about this'), and use conversational, Gen-Z-friendly language. The AI generates TikTok-optimized captions that follow these discovery-first patterns.",
      },
    ],

    additionalContent: [
      {
        heading: "Prompt Structure That Performs Better",
        content:
          "Give the tool concrete scene details, desired tone, and audience type. Specific prompts usually produce stronger and less generic outputs.",
      },
      {
        heading: "Variant Testing",
        content:
          "Rotate caption options across similar posts and compare engagement metrics to build a repeatable copy framework.",
      },
    ],

    relatedTools: [
      { name: "AI Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "AI Pet Name Generator", href: "/ai-tools/pet-names" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "All AI Tools", href: "/ai-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function CaptionGeneratorPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiCaptionGenerator />
        </div>
      )}
    />
  )
}
