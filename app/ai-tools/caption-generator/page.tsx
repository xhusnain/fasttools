import type { Metadata } from "next"
import { AiCaptionGenerator } from "@/components/social-media/ai-caption-generator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"

// Auto-update year
const currentYear = new Date().getFullYear()

const baseMetadata = createMetadata({
  title: `AI Caption Generator ${currentYear} | Free Instagram & TikTok Captions`,
  description:
    `Generate viral social media captions with AI ${currentYear}. Free caption generator for Instagram, TikTok, Facebook & more. No sign up.`,
  path: "/ai-tools/caption-generator",
})

export const metadata: Metadata = {
  ...baseMetadata,
  category: "Social Media & Marketing",
  applicationName: "FastTools - AI Caption Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "AI Caption Generator",
    "mobile-web-app-capable": "yes",
    "application-name": `AI Caption Generator ${currentYear} - All Platforms`,
    "msapplication-TileColor": "#ff6b35",
    "theme-color": "#ff6b35",
    "msapplication-navbutton-color": "#ff6b35",
    "color-scheme": "dark light",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "Social Media Managers, Influencers, Content Creators, Marketers, Businesses",
    "subject": "AI Social Media Caption Generation for All Platforms",
    "abstract": `Free AI-powered caption generator for all social media platforms. Generate viral captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube, and Pinterest. Perfect for influencers, marketers, and content creators.`,
  },
}

export default function CaptionGeneratorPage() {
  const toolContent = {
    toolName: "AI Caption Generator",
    overview: `Generate viral social media captions with AI in ${currentYear}. Create engaging captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest instantly. Free AI-powered tool perfect for influencers, marketers, and content creators. No sign up required.`,
    howToSteps: [
      "Enter a detailed description of your image, video, or content idea. Be specific about the mood, theme, or message.",
      "Select your target platform (Instagram, TikTok, LinkedIn, etc.) to optimize the caption format and length.",
      "Choose your desired tone (Professional, Funny, Inspirational, etc.) to match your brand voice.",
      "Click 'Generate Captions' to instantly receive 5 unique, creative options tailored to your needs.",
      "Copy your favorite caption or use the 'Regenerate' button to get more variations."
    ],
    features: [
      "AI-Powered Generation: Advanced AI creates engaging, platform-specific captions using emotional triggers and trending topics.",
      "7 Platforms Support: Optimized for Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest, and YouTube.",
      "Viral Templates: Access trending caption formats and viral content templates for maximum engagement.",
      "Instant Results: Generate 5 unique captions in seconds with no waiting time or processing delays.",
      "Brand Voice: Customize captions to match your brand voice and maintain consistency across platforms.",
      "Free Forever: Completely free with no registration required, usage limits, or hidden costs."
    ],
    aboutTool: `
      ### Complete Guide to AI Caption Generation for Social Media
      Our free AI caption generator is the ultimate tool for content creators, influencers, marketers, and businesses looking to create engaging social media captions instantly. As a leading AI content generator and AI writing assistant, our platform helps you generate viral captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube, and Pinterest without any sign-up requirements.

      ### AI Content Creation & Writing Tool
      The AI caption generator serves as both an AI content creator and AI writing tool, designed specifically for social media copywriting and digital content creation. Unlike traditional caption writing tools that require manual brainstorming, our AI-powered social media caption generator analyzes your content description and generates multiple caption variations optimized for each platform's unique audience and character limits.

      ### For Influencers & Businesses
      Content creators and influencers particularly benefit from our AI caption generator for businesses, as it helps maintain consistent brand voice across all platforms while saving hours of writing time. The AI caption generator for influencers enables them to focus on creating visual content while the AI handles caption ideation and drafting. For social media managers and agencies, the AI caption generator for agencies provides scalable content creation that maintains quality across multiple client accounts.

      ### Advanced Features & Optimization
      The AI caption generator with hashtags automatically suggests relevant hashtags based on your content, helping increase discoverability across platforms. For Instagram specifically, the AI caption generator for reels creates captions optimized for short-form video content, while the caption generator for stories produces concise, engaging text perfect for temporary content. The photo caption generator mode helps you create compelling narratives for image-based posts.
    `,
    faqs: [
      {
        question: "Is the AI caption generator free to use?",
        answer: "Yes, our AI caption generator is completely free to use with no registration required. You can generate unlimited captions for your social media posts across all 7 supported platforms."
      },
      {
        question: "What social media platforms does the AI caption generator support?",
        answer: "Our AI caption generator supports 7 major social media platforms: Instagram, Facebook, Twitter/X, LinkedIn, TikTok, Pinterest, and YouTube. Each platform gets optimized captions tailored to their specific audience and character limits."
      },
      {
        question: "Can I use the generated captions commercially?",
        answer: "Yes, all captions generated by our AI are original and free from copyright restrictions. You can use them in your commercial social media marketing, business posts, and content creation without any limitations."
      },
      {
        question: "How do I make my captions more engaging?",
        answer: "Our AI automatically creates engaging captions using emotional triggers, relevant hashtags, calls-to-action, storytelling elements, and platform-specific best practices. You can also customize the generated captions to match your brand voice."
      },
      {
        question: "How many captions can I generate at once?",
        answer: "You can generate 5 unique, creative captions per request. Each caption is optimized for your chosen platform and includes different styles and approaches to give you variety in your content."
      },
      {
        question: "Do AI-generated captions sound robotic or can they be human-like?",
        answer: "Modern AI caption generators are designed to produce human-like text that sounds natural and engaging. They utilize advanced language models to generate captions that are casual, witty, inspirational, or professional depending on your needs. However, we recommend reviewing and editing the AI-generated captions to ensure they align perfectly with your unique voice and brand personality."
      },
      {
        question: "Can AI caption generators add hashtags and emojis automatically?",
        answer: "Yes! Our AI caption generator can automatically suggest relevant hashtags and emojis based on your content and context. This feature helps enhance engagement by making your posts more discoverable and relatable. The AI analyzes your content to recommend trending hashtags and appropriate emojis that match your post's tone and message."
      },
      {
        question: "How accurate and relevant are AI-generated captions?",
        answer: "The accuracy and relevance of AI-generated captions depend on the quality of the AI model and the specificity of your input. Our advanced AI system produces high-quality, contextually relevant captions, but we always recommend reviewing and customizing them to ensure they meet your standards and resonate perfectly with your target audience."
      }
    ],
    relatedTools: [
      { name: "QR Code Generator", href: "/ai-tools/qr-generator" },
      { name: "Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "Pet Name Generator", href: "/ai-tools/pet-names" },

      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" }
    ],
    useCases: [
      "Content Creators generating engaging captions for YouTube, Instagram, TikTok",
      "Businesses creating professional captions for product launches and marketing",
      "Influencers maintaining consistent brand voice across all platforms",
      "Social Media Managers saving time by generating multiple caption options",
      "E-commerce brands creating product descriptions and promotional copy",
      "Real Estate agents showcasing properties with compelling descriptions"
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free AI Caption Generator - Create Viral Social Media Captions Instantly",
        description: "Generate viral social media captions with AI in 2025! Create engaging captions for Instagram, TikTok, Facebook, LinkedIn, Twitter/X, YouTube & Pinterest. Boost engagement with our free AI-powered caption generator. No sign up required.",
        titleSize: "medium",
        descriptionSize: "small",
        centered: true,
        color: "blue"
      }}
      breadcrumbs={[
        { label: "AI Tools", href: "/ai-tools" },
        { label: "Caption Generator", href: "/ai-tools/caption-generator" },
      ]}
      toolComponent={
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiCaptionGenerator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: `AI Caption Generator ${currentYear} | Free Instagram & TikTok Captions`,
        description: `Generate viral social media captions with AI ${currentYear}. Free caption generator for Instagram, TikTok, Facebook & more. No sign up.`,
        path: "/ai-tools/caption-generator"
      }}
    />
  )
}