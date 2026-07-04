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
    "Free hashtag counter — instantly count and extract hashtags from any text. Works for Instagram, TikTok, X, Facebook, and LinkedIn captions.",
  metaTitle: "Hashtag Counter & Tag Counter - Instagram, TikTok, X",
  metaDescription:
    "Free hashtag counter and tag counter. Paste a caption to count hashtags, extract tags, find duplicates, and check Instagram, TikTok, X, LinkedIn, and Facebook limits.",
  path: "/social-media-tools/hashtag-counter",

  header: {
    title: "Hashtag Counter — Count Hashtags in Any Caption",
    description:
      "Paste an Instagram, TikTok, X, Facebook, or LinkedIn caption to instantly count every hashtag and extract the full tag list. Free hashtag counter with platform-specific limit warnings — keep your captions clean and platform-compliant.",
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
      "Hashtag counter and extractor. Paste any social media caption to instantly count hashtags and extract the list. Platform-specific limit warnings for Instagram (30), TikTok (100 chars), X, LinkedIn, Facebook.",
    alternateName: [
      "Hashtag Count Tool",
      "Tag Counter",
      "# Counter",
      "Instagram Hashtag Counter",
      "TikTok Hashtag Counter",
    ],
    featureList: [
      "Real-time hashtag counting as you type",
      "Extract list of all hashtags from caption",
      "Instagram 30-tag limit warning",
      "TikTok 100-char limit warning",
      "X / Twitter best-practice recommendations (1-2 tags)",
      "LinkedIn recommendations (3-5 tags)",
      "Duplicate hashtag detection",
      "Character count for whole caption",
      "Copy clean hashtag list to clipboard",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Hashtag Counter is a free tag counter that counts and extracts hashtags from social media captions, bios, comments, and bulk text.",
    quickAnswer:
      "Paste any caption or text to count hashtags and extract the full tag list. Instagram allows up to 30 hashtags per post, LinkedIn works best with 3-5, and X usually works best with 1-2.",
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
      <div className="space-y-8 text-muted-foreground">
        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Why Hashtag Count Matters</h2>
          <p>
            Every social platform has different hashtag limits, optimal counts, and shadowban triggers. Going over a limit can prevent your post from publishing, hide it from hashtag search (shadowban), or just look spammy and hurt engagement. This counter tells you exactly how many you have so you can stay in the safe range for each platform.
          </p>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Hashtag Limits by Platform</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-border">
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left border-b border-border">Platform</th>
                  <th className="p-3 text-left border-b border-border">Hard limit</th>
                  <th className="p-3 text-left border-b border-border">Optimal count</th>
                  <th className="p-3 text-left border-b border-border">Risk if exceeded</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-semibold">Instagram (feed)</td><td className="p-3">30 hashtags</td><td className="p-3">3–5</td><td className="p-3">Shadowban, hidden from hashtag search</td></tr>
                <tr><td className="p-3 font-semibold">Instagram (Reels)</td><td className="p-3">30 hashtags</td><td className="p-3">3–5</td><td className="p-3">Reduced reach</td></tr>
                <tr><td className="p-3 font-semibold">TikTok</td><td className="p-3">100 chars total caption</td><td className="p-3">3–5</td><td className="p-3">Caption truncation</td></tr>
                <tr><td className="p-3 font-semibold">X (Twitter)</td><td className="p-3">no platform limit</td><td className="p-3">1–2</td><td className="p-3">~17% engagement drop above 2</td></tr>
                <tr><td className="p-3 font-semibold">LinkedIn</td><td className="p-3">no platform limit</td><td className="p-3">3–5</td><td className="p-3">Looks spammy, lower reach</td></tr>
                <tr><td className="p-3 font-semibold">Facebook</td><td className="p-3">no platform limit</td><td className="p-3">2–3</td><td className="p-3">Limited platform impact</td></tr>
                <tr><td className="p-3 font-semibold">YouTube (description)</td><td className="p-3">15 tags shown / 60 total</td><td className="p-3">3–5</td><td className="p-3">YouTube ignores extras &gt; 15</td></tr>
                <tr><td className="p-3 font-semibold">Pinterest</td><td className="p-3">20 hashtags</td><td className="p-3">2–5</td><td className="p-3">No major risk, low impact</td></tr>
                <tr><td className="p-3 font-semibold">Threads</td><td className="p-3">1 hashtag per post</td><td className="p-3">0–1</td><td className="p-3">Hard limit — extras ignored</td></tr>
              </tbody>
            </table>
          </div>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">How to Choose Effective Hashtags (Best Practices)</h2>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Mix tag sizes.</strong> Pair 1–2 popular tags (500K+ posts, for discovery) with 2–3 niche tags (10K–100K posts, for targeted reach). All-popular tags get buried; all-niche tags don&apos;t scale.</li>
            <li><strong>Rotate sets between posts.</strong> Posting the exact same 30 hashtags every time looks automated and can trigger Instagram&apos;s spam filter. Keep 3–5 different sets organized by content theme.</li>
            <li><strong>Check for restricted hashtags.</strong> Instagram restrictions change often. If a hashtag&apos;s page has limited or no recent content, treat it as risky and replace it with a more specific active tag.</li>
            <li><strong>Use platform-native search.</strong> When picking new tags, type them into the platform&apos;s search to see post volume and recency. Tags with no posts in the last 7 days are dead.</li>
            <li><strong>Match content language.</strong> Don&apos;t use English-only tags on a Spanish-language post — you&apos;re losing native-language reach.</li>
          </ul>
        </article>

        <article className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">FastTools vs Other Hashtag Counters</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-border">
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left border-b border-border">Feature</th>
                  <th className="p-3 text-left border-b border-border text-green-600">FastTools</th>
                  <th className="p-3 text-left border-b border-border">All-Hashtag.com</th>
                  <th className="p-3 text-left border-b border-border">DisplayPurposes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr><td className="p-3 font-semibold">Real-time count as you type</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Extract from pasted caption</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3">partial</td></tr>
                <tr><td className="p-3 font-semibold">Per-platform limit warnings</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">✗</td><td className="p-3 text-red-500">✗</td></tr>
                <tr><td className="p-3 font-semibold">Free, no signup</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">One-click copy</td><td className="p-3 text-green-600">✓</td><td className="p-3">✓</td><td className="p-3">✓</td></tr>
                <tr><td className="p-3 font-semibold">No ads in the tool itself</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">heavy ads</td><td className="p-3">partial</td></tr>
                <tr><td className="p-3 font-semibold">Client-side (no upload)</td><td className="p-3 text-green-600">✓</td><td className="p-3 text-red-500">server</td><td className="p-3 text-red-500">server</td></tr>
              </tbody>
            </table>
          </div>
        </article>
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
      {
        question: "How many hashtags should I use on TikTok?",
        answer: "TikTok works best with 3–5 highly relevant hashtags. The platform allows hashtags within the 4,000-character caption limit, but stuffing 30 tags into a TikTok caption looks spammy and won't increase reach. Pair 1 broad trending tag with 2–4 niche tags for the best balance.",
      },
      {
        question: "Is there a hashtag counter for Facebook?",
        answer: "Yes — this tool counts hashtags in Facebook captions the same way it does for Instagram or X. Facebook has no platform limit, but research shows 2–3 hashtags per post performs best. More than that adds visual noise without increasing reach.",
      },
      {
        question: "Can this tool extract hashtags from a YouTube description?",
        answer: "Yes. Paste a YouTube description and the tool extracts every word starting with #. Note: YouTube only displays the first 3 hashtags above a video title, so put your most important hashtags first in the description.",
      },
      {
        question: "What's the difference between hashtag counting and hashtag generating?",
        answer: "Hashtag counting (this tool) tells you how many tags are in a caption you already wrote. Hashtag generators suggest new tags based on a topic. Both are useful — count first to stay within limits, then generate variants if you need more relevant ones.",
      },
      {
        question: "Does the tool detect hashtags with emojis or special characters?",
        answer: "Yes. Any token that starts with # and contains letters, numbers, underscores, or Unicode characters is detected. Hashtags with emojis don't work on most platforms (they break at the emoji), but the counter will still pick them up so you can see and remove them.",
      },
    ],

    relatedTools: [
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
      { name: "TikTok Engagement Calculator", href: "/social-media-tools/tiktok-engagement-calculator" },
      { name: "Influencer Rate Calculator", href: "/social-media-tools/influencer-rate-calculator" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HashtagCounterPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<HashtagCounter />)} />
}
