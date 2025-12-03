import { LinkInBioGenerator } from "@/components/social-media/link-in-bio-generator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import {
  Link, Zap, Target, Shield, Globe, Clock, FileText, Hash, Lightbulb,
  Copy, Users, Code, Download, ExternalLink, Palette, BarChart3,
  Smartphone, Settings, Eye, CheckCircle, SmartphoneCharging
} from "lucide-react"
import { getCurrentYear } from "@/lib/utils"

const toolConfig = createToolConfig({
  toolName: "Link in Bio Generator",
  description: "Create a free, customizable link in bio page for Instagram, TikTok, and more. Add unlimited links, social profiles, and buttons. Fast, secure, mobile-friendly.",
  metaTitle: `Link in Bio Generator – Free All-in-One Bio Page | FastTools ${getCurrentYear()}`,
  metaDescription: "Create a free, customizable link in bio page for Instagram, TikTok, and more. Add unlimited links, social profiles, and buttons. Fast, secure, and mobile-friendly.",
  path: "/social-media-tools/link-in-bio",
  keywords: [
    "link in bio generator", "free link in bio tool", "Instagram bio link",
    "TikTok bio link", "create link in bio", "bio link builder",
    "linktree alternative", "link in bio creator", "link in bio app",
    "link in bio website", "social media bio link", "link in bio for influencers",
    "bio page generator", "free bio link maker", "custom bio link",
    "bio link landing page", "social media landing page", "bio link optimization",
    "mobile bio page", "responsive bio link", "bio link analytics",
    `link in bio ${getCurrentYear()}`, "best link in bio tool",
    "fast link in bio", "secure link in bio", "unlimited link in bio"
  ],

  header: {
    title: "Free Link in Bio Generator – Create All-in-One Bio Page",
    description: "Create a free, customizable link in bio page for Instagram, TikTok, and more. Add unlimited links, social profiles, and buttons. Fast, secure, and mobile-friendly. Perfect for influencers, creators, and businesses.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
  ],

  content: {
    overview: "Most social media platforms like Instagram, TikTok, and Twitter limit you to a single link in your bio. This restriction can be frustrating when you want to share your website, latest blog post, YouTube channel, and other social profiles simultaneously. The FastTools Link in Bio Generator solves this problem by allowing you to create a beautiful, mobile-friendly landing page that houses all your important links. With our free tool, you can customize your bio page to match your brand, add unlimited links, and direct your audience to exactly where you want them to go. Whether you're an influencer, content creator, or business owner, optimizing your bio link is essential for maximizing engagement and driving traffic across your digital presence.",

    howToSteps: [
      "Basic Information Setup: Enter your profile name, bio description, and optional website URL and footer text.",
      "Theme & Color Customization: Choose from 5 predefined themes or create a custom theme using our professional color picker.",
      "Text Size Customization: Adjust the size of your headings, bio text, footer, and link buttons for perfect typography.",
      "Add Links: Add unlimited social media profiles, email links, and custom buttons. Choose display modes (Icon + Text, Icon Only, Text Only).",
      "Preview & Test: Use the multi-device preview to see how your bio page looks on Mobile, Tablet, and Desktop.",
      "Generate & Share: Click 'Generate HTML' to get your production-ready code. Copy the link or host the HTML on your own site."
    ],

    features: [
      "Professional Color Customization: Advanced color picker with HEX, RGB, CMYK, HSV, and HSL formats.",
      "Multi-Device Preview: Test your bio page on Mobile, Tablet, and Desktop with device-specific dimensions.",
      "Precise Text Sizing: Fine-tune every text element with individual size controls.",
      "Flexible Display Modes: Choose how each link appears: Both (icon + text), Icon Only, or Text Only.",
      "Clean HTML Generation: Generate production-ready HTML code with inline CSS and responsive design.",
      "Comprehensive Platform Support: Support for 10+ social media platforms and 8 email providers.",
      "One-Click Copy: Instant HTML code copying with visual feedback.",
      "Privacy & Security: No data collection, no registration required. Your data stays private."
    ],

    useCases: [
      "Content Creators: Share your latest videos, blog posts, and social media profiles in one convenient link.",
      "Influencers: Promote your partnerships, affiliate links, and exclusive content to your followers.",
      "Small Businesses: Direct customers to your website, online store, contact information, and social media.",
      "Professionals: Showcase your portfolio, resume, LinkedIn profile, and professional achievements.",
      "Musicians & Artists: Link to your latest releases, tour dates, merchandise, and streaming platforms.",
      "Non-Profits: Share donation links, volunteer information, and social impact reports."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Why Use a Link in Bio Generator?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A link in bio tool allows you to share multiple links through a single URL in your social media bio. This helps you maximize engagement and drive traffic to all your important content and platforms.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <SmartphoneCharging className="h-4 w-4 text-primary" />
                Maximize Traffic
              </h4>
              <p className="text-sm text-muted-foreground">
                Don't lose potential visitors because they can't find your links. Direct traffic to your website, store, blog, and other social profiles from one central hub.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-card border border-border">
              <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                <Palette className="h-4 w-4 text-primary" />
                Brand Consistency
              </h4>
              <p className="text-sm text-muted-foreground">
                Customize your bio page to match your brand's colors and style. Create a professional and cohesive look across all your social media platforms.
              </p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            Tips for an Effective Bio Page
          </h2>
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Prioritize Links:</strong> Place your most important links at the top where they are most visible.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Clear Call-to-Actions:</strong> Use descriptive and action-oriented text for your buttons (e.g., "Shop Now", "Read Blog").</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Keep it Simple:</strong> Don't overwhelm visitors with too many links. Focus on 5-7 key destinations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Regular Updates:</strong> Update your links regularly to reflect your latest content, promotions, or campaigns.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span><strong>Mobile Optimization:</strong> Ensure your bio page looks great on mobile devices, as most traffic will come from smartphones.</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    ),

    faqs: [
      {
        question: "Is the link in bio generator completely free?",
        answer: "Yes, our link in bio generator is 100% free. You can create unlimited bio pages, add unlimited links, and access all customization features without any cost."
      },
      {
        question: "Can I customize the appearance of my bio page?",
        answer: "Absolutely! You can choose from predefined themes or create a custom theme with your brand colors. You can also adjust text sizes, button styles, and layout options."
      },
      {
        question: "Is my bio page mobile-friendly?",
        answer: "Yes, all bio pages created with our tool are fully responsive and optimized for mobile devices, ensuring a seamless experience for your visitors."
      },
      {
        question: "How do I share my bio page?",
        answer: "After generating your bio page, you can copy the HTML code to host it on your own website, or use the generated link if we provide hosting (check tool specifics). You can then paste this URL into your social media bios."
      },
      {
        question: "Can I track clicks and analytics?",
        answer: "Our tool provides the structure for your bio page. If you host the HTML yourself, you can easily add Google Analytics or other tracking codes to monitor performance."
      },
      {
        question: "How many links can I add?",
        answer: "You can add unlimited links to your bio page. However, we recommend keeping it between 5-7 links for the best user experience."
      },
      {
        question: "Can I use a custom domain?",
        answer: "Yes, since you get the HTML code, you can host the bio page on your own domain (e.g., yoursite.com/bio) for a professional look."
      },
      {
        question: "What types of links can I add?",
        answer: "You can add any type of link: websites, social profiles, email addresses, affiliate links, product pages, blog posts, videos, and more."
      }
    ],

    relatedTools: [
      { name: "Instagram Downloader", href: "/social-media-tools/instagram-downloader" },
      { name: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Hashtag Generator", href: "/social-media-tools/hashtag-counter" }
    ]
  }
})

export const metadata = toolConfig.metadata

export default function LinkInBioPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<LinkInBioGenerator />)} />
}
