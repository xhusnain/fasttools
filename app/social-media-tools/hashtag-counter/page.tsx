import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const HashtagCounter = dynamic(
  () => import("@/components/social-media/hashtag-counter").then((mod) => mod.HashtagCounter),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Hashtag Counter",
  description:
    "Count hashtags, extract tags from text, and refine tag sets for social post optimization.",
  metaTitle: "Hashtag Counter (Count and Extract Tags)",
  metaDescription:
    "Count and extract hashtags from captions or text blocks with a fast social-post workflow.",
  path: "/social-media-tools/hashtag-counter",
  keywords: [
    "hashtag counter",
    "count hashtags",
    "hashtag extractor",
    "instagram hashtag counter",
    "social hashtag tool",
  ],

  header: {
    title: "Hashtag Counter",
    description:
      "Count and extract hashtags to keep social captions clean and platform-ready.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Hashtag counting and extraction utility for social caption workflows.",
    featureList: [
      "Hashtag counting",
      "Tag extraction",
      "Quick copy workflow",
      "No-install utility",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Hashtag Counter is a free tool that counts the number of hashtags in a text block and extracts them into a clean, copyable list.",
    quickAnswer:
      "Paste your social media caption or text, and this tool instantly counts all hashtags and extracts them as a list. Instagram allows up to 30 hashtags per post, LinkedIn recommends 3-5, and X (Twitter) recommends 1-2.",
    keyTakeaways: [
      "Instagram allows up to 30 hashtags per post (optimal: 3-5 for reach)",
      "LinkedIn recommends 3-5 hashtags per post",
      "X (Twitter) recommends 1-2 hashtags per tweet",
      "TikTok allows up to 100 characters of hashtags in captions",
      "Paste any text — the tool auto-detects and counts all #tags",
      "One-click copy of extracted hashtag list",
    ],
    overview:
      "Use this tool to count hashtags and extract tags from captions before publishing social posts. It helps maintain cleaner formatting and platform-compliant tag usage. Simply paste your caption text, and the tool instantly identifies every hashtag, counts them, and lets you copy the clean list.",

    howToSteps: [
      "Paste your caption, bio, or hashtag list into the input field.",
      "The tool automatically counts all hashtags and displays the total.",
      "Review the extracted hashtag list — each tag is shown individually.",
      "Copy the hashtag list with one click and paste into your social post.",
    ],

    features: [
      "Instant hashtag counting from any text",
      "Automatic hashtag extraction and listing",
      "One-click copy of all extracted hashtags",
      "Platform limit awareness (Instagram 30, LinkedIn 5, X 2)",
      "Supports captions, bios, comments, and bulk text",
      "Browser-based — no signup or install needed",
    ],

    useCases: [
      "Instagram creators checking they are under the 30-hashtag limit before posting",
      "Social media managers QA-ing captions across multiple client accounts",
      "LinkedIn content creators keeping hashtag count within the 3-5 recommended range",
      "Marketing teams standardizing hashtag sets for campaigns",
      "Agencies auditing existing posts to optimize hashtag strategy",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Hashtag Count Matters</h3>
          <p>
            Each social platform has different hashtag limits and best practices. Instagram allows up to 30 hashtags but research shows 3-5 targeted hashtags often perform better for reach. LinkedIn recommends 3-5 hashtags. X (Twitter) works best with 1-2 hashtags. Going over limits can reduce visibility or prevent posting entirely.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">How to Choose Effective Hashtags</h3>
          <p>
            Mix popular broad hashtags with niche-specific ones. Use a combination of high-volume tags (500K+ posts) for discovery and low-volume tags (10K-100K posts) for targeted reach. Avoid banned or spammy hashtags that can shadowban your content. Rotate hashtag sets between posts to avoid being flagged for repetitive behavior.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Hashtag Limits by Platform (2026)</h3>
          <p>
            Instagram: 30 max (3-5 recommended). LinkedIn: no hard limit (3-5 recommended). X/Twitter: no hard limit (1-2 recommended). TikTok: 100 characters of hashtags. Facebook: no limit (2-3 recommended). YouTube: 15 tags max in video settings. Pinterest: 20 max (2-5 recommended).
          </p>
        </div>
      </div>
    ),

    proTip:
      "Keep a reusable shortlist of high-performing tags and rotate by topic to reduce repetition. Use 3-5 targeted hashtags on Instagram instead of maxing out at 30 — recent algorithm changes favor fewer, more relevant tags.",

    faqs: [
      {
        question: "How many hashtags should I use on Instagram?",
        answer: "Instagram allows up to 30 hashtags per post, but research and Instagram's own guidance suggests using 3-5 highly relevant hashtags for optimal reach. Quality and relevance matter more than quantity.",
      },
      {
        question: "What is the hashtag limit on LinkedIn?",
        answer: "LinkedIn has no hard limit on hashtags, but recommends using 3-5 relevant hashtags per post. Using more than 5 can make your post look spammy and may reduce engagement.",
      },
      {
        question: "Can I paste a full caption with text and hashtags?",
        answer: "Yes. Paste any text — the tool automatically detects and counts all words starting with # as hashtags, ignoring regular text.",
      },
      {
        question: "Does this tool detect hashtags in different languages?",
        answer: "Yes. The counter detects any word starting with the # symbol regardless of language, including hashtags in Arabic, Japanese, Korean, and other scripts.",
      },
      {
        question: "How many hashtags does TikTok allow?",
        answer: "TikTok allows hashtags within the 4,000-character caption limit. However, hashtags count toward this character limit, so keep them concise. Using 3-5 relevant hashtags is common practice.",
      },
      {
        question: "Can using too many hashtags hurt my reach?",
        answer: "Yes. On Instagram, using all 30 hashtags or using irrelevant/banned hashtags can trigger shadowbanning, where your posts are hidden from hashtag searches. On X/Twitter, more than 2 hashtags can decrease engagement by 17%.",
      },
      {
        question: "What are banned hashtags?",
        answer: "Banned hashtags are tags that Instagram has restricted because they were associated with spam or content violations. Using banned hashtags can reduce your post visibility. The list changes frequently — search for updated lists before using unfamiliar tags.",
      },
      {
        question: "Is the hashtag counter free?",
        answer: "Yes. The tool is completely free with no registration, no limits on usage, and no data collection. All counting happens in your browser.",
      },
    ],

    relatedTools: [
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "YouTube Channel Checker", href: "/social-media-tools/channel-checker" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HashtagCounterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<HashtagCounter />)} />
}
