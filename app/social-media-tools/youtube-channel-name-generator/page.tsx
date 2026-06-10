import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YoutubeChannelNameGenerator = dynamic(
  () => import("@/components/social-media/youtube-channel-name-generator").then((mod) => mod.YoutubeChannelNameGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YouTube Name Generator",
  description:
    "Generate unique YouTube channel name ideas based on your niche, style, and keywords. Free AI-powered channel name generator with brandable suggestions.",
  metaTitle: "YouTube Channel Name Generator — Unique Name Ideas Free",
  metaDescription:
    "Generate unique YouTube channel name ideas for free. Enter your niche to get brandable, memorable channel names. Check handle availability instantly. AI-powered name suggestions.",
  path: "/social-media-tools/youtube-channel-name-generator",

  header: {
    title: "YouTube Channel Name Generator",
    description:
      "Generate unique, brandable YouTube channel name ideas based on your niche and style. Enter your topic, get instant name suggestions, then check handle availability — free, no login needed.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "YouTube channel name generator with brandability scoring. Generate unique, available name ideas based on your niche and style — professional, creative, funny, or keyword-based.",
    alternateName: [
      "Channel Name Generator",
      "YouTube Username Generator",
      "Creator Name Maker",
      "Channel Name Ideas Generator",
      "Brandable YouTube Names",
      "YouTube Handle Generator",
      "@Handle Suggestion Tool",
      "Gaming Channel Name Generator",
      "Vlog Channel Name Maker",
      "YouTube Brand Name Tool",
      "Channel Branding Generator",
      "TikTok Username Generator",
      "Social Handle Generator",
      "Twitch Name Generator",
      "Channel Identity Builder",
    ],
    featureList: [
      "Generate unique YouTube channel name ideas from niche keywords",
      "Multiple naming styles: professional, creative, funny, keyword-based",
      "AI-powered name suggestions with brandability scoring",
      "Instant handle availability check integration",
      "Unlimited name generation batches",
      "No login or software required",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A YouTube Channel Name Generator is a free AI-powered tool that creates unique, brandable channel name ideas based on your niche, content style, and target keywords — helping you find the perfect name before launching your channel.",
    quickAnswer:
      "Enter your niche or topic (e.g., 'tech reviews', 'cooking', 'gaming'), select a naming style (professional, funny, creative, keyword-based), and get instant channel name suggestions. Generate multiple batches to explore options, then check handle availability before committing.",
    keyTakeaways: [
      "Generates unique channel name ideas based on your niche, topic, and style preferences",
      "Multiple naming styles available: professional, creative, funny, keyword-based, and more",
      "Good YouTube channel names are short (under 20 characters), memorable, and easy to spell",
      "Always check @handle availability before committing to a channel name",
      "Consistent naming across YouTube, Instagram, TikTok, and X strengthens your brand",
      "A strong channel name improves brand recall and YouTube search discoverability",
    ],
    overview:
      "Find the perfect YouTube channel name with this free name generator. Enter your niche, content topic, or keywords, and the tool generates unique, brandable name ideas tailored to your style — professional, creative, funny, or keyword-focused. Generate multiple batches to explore different naming directions, then shortlist your favorites. Once you have a shortlist, check handle availability using our YouTube Handle Checker to ensure your chosen name is available as an @handle. A great channel name is short, memorable, easy to spell, and works as a brand across platforms.",

    howToSteps: [
      "Enter your niche, topic, or keywords (e.g., 'fitness', 'tech reviews', 'travel vlog').",
      "Select a naming style: professional, creative, funny, or keyword-based.",
      "Generate a batch of channel name ideas and browse the suggestions.",
      "Shortlist your favorites and check handle availability with our YouTube Handle Checker.",
    ],

    features: [
      "AI-powered channel name ideas based on your niche and keywords",
      "Multiple naming styles: professional, creative, funny, keyword-based",
      "Generate unlimited batches to explore different naming directions",
      "Short, brandable names optimized for YouTube and cross-platform use",
      "No login, account, or software installation required",
      "Works on mobile and desktop browsers",
    ],

    useCases: [
      "New creators brainstorming YouTube channel names before their first upload",
      "Existing creators rebranding their channel with a new name and identity",
      "Agencies and MCNs generating name options for client creator channels",
      "Brands launching YouTube presence and need a channel name matching their identity",
      "Content teams starting niche-specific channels for editorial verticals",
    ],

    aboutTool:
      "Choosing a YouTube channel name is one of the most important branding decisions for a creator. Your channel name appears in search results, video recommendations, comments, and your channel URL. A good name should be: short (under 20 characters), easy to spell and pronounce, memorable, and available as an @handle on YouTube and other platforms. This generator creates name ideas tailored to your niche using multiple naming approaches — keyword-based names that are SEO-friendly, creative names that stand out, professional names for business channels, and fun/catchy names for entertainment. Generate multiple batches, compare options, and always check handle availability before deciding.",

    proTip:
      "After generating names, check availability on YouTube, Instagram, TikTok, and X simultaneously. Cross-platform consistency is crucial for brand building. Also do a quick Google search for your chosen name to make sure it doesn't conflict with an existing brand or trademark.",

    faqs: [
      {
        question: "How do I choose a good YouTube channel name?",
        answer:
          "A good YouTube channel name is short (under 20 characters), easy to spell and pronounce, memorable, and relevant to your niche. Avoid numbers and special characters unless they are part of your brand. Check that the name is available as an @handle before committing.",
      },
      {
        question: "Can this generator create niche-specific channel names?",
        answer:
          "Yes. Enter your specific niche (e.g., 'vegan cooking', 'Minecraft gameplay', 'personal finance') and the generator creates names relevant to that topic. The more specific your input, the more targeted the suggestions.",
      },
      {
        question: "Should I check handle availability after choosing a name?",
        answer:
          "Absolutely. Your YouTube channel name and @handle should ideally match. Use our YouTube Handle Checker to verify availability before creating your channel. Also check the same handle on Instagram, TikTok, and X.",
      },
      {
        question: "Can I change my YouTube channel name later?",
        answer:
          "Yes, you can change your display name anytime. However, your @handle (which affects your channel URL) can only be changed twice every 14 days, and your old handle becomes available for others to claim. Choose carefully the first time.",
      },
      {
        question: "What makes a YouTube channel name SEO-friendly?",
        answer:
          "Including relevant keywords in your channel name helps with YouTube search discoverability. For example, 'TechSimplified' is more SEO-friendly than 'RandomName123'. However, balance SEO with brandability — a keyword-stuffed name is harder to remember.",
      },
      {
        question: "Can I use this for rebranding my existing channel?",
        answer:
          "Yes. Enter your new content direction or niche, generate name ideas, and find a name that better represents your evolved brand. Check handle availability before making the switch.",
      },
      {
        question: "Is this YouTube name generator free?",
        answer:
          "Yes. Completely free with unlimited name generation batches, no registration, and no login required.",
      },
      {
        question: "Is this an AI YouTube channel name generator?",
        answer:
          "Yes. The generator combines your niche keywords with curated name patterns (compound words, alliterations, action verbs, niche+adjective combos) using AI techniques to produce brandable, memorable channel names. Each batch returns a fresh set so you can iterate until something clicks. Unlike simple word combiners, the names are filtered for pronounceability and trademark-collision risk."
      },
      {
        question: "What makes a good YouTube channel name?",
        answer:
          "A good YouTube channel name is short (1-3 words, 6-15 characters), pronounceable when spoken aloud, descriptive of your niche, available as an @handle on YouTube + IG + TikTok + X for cross-platform consistency, and free of trademark conflicts (search uspto.gov for US trademarks). Avoid numbers unless they're part of your brand (@2pac yes, @gamer123 no), and avoid year suffixes like @cookingsince they age badly."
      },
      {
        question: "Should I match my YouTube channel name to my Instagram or TikTok handle?",
        answer:
          "Yes — cross-platform consistency dramatically improves brand recall and discoverability. Pick a name that's available everywhere you plan to post (YouTube, Instagram, TikTok, X, Threads at minimum). Use this generator to get candidates, then use the YouTube Channel Checker tool to verify availability before committing."
      },
      {
        question: "Can I generate names by niche (gaming, beauty, tech, cooking)?",
        answer:
          "Yes. Enter your niche as a keyword (e.g., 'gaming', 'beauty', 'crypto', 'pets', 'cooking', 'fitness') and the generator weights the suggestions toward your topic. You can also enter your own name or a defining word to anchor the suggestions personally."
      }
    ],

    relatedTools: [
      { name: "YouTube Channel Checker", href: "/social-media-tools/channel-checker" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "Influencer Rate Calculator", href: "/social-media-tools/influencer-rate-calculator" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeChannelNameGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeChannelNameGenerator />)} />
}
