import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const YoutubeTagExtractor = dynamic(
  () => import("@/components/social-media/youtube-tag-extractor").then((mod) => mod.YoutubeTagExtractor),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "YouTube Tag Extractor",
  description:
    "Extract hidden tags from any YouTube video for keyword research and SEO. Reveal competitor tags, discover trending keywords, and optimize your video metadata.",
  metaTitle: "YouTube Tag Extractor — Extract Tags from Any Video Free",
  metaDescription:
    "Free YouTube tag extractor. Extract and copy hidden tags from any YouTube video URL for SEO research. See competitor keywords, find trending tags, and optimize your video rankings.",
  path: "/social-media-tools/youtube-tags",

  header: {
    title: "YouTube Tag Extractor & Viewer",
    description:
      "Extract hidden tags from any YouTube video to discover competitor keywords and optimize your YouTube SEO. Paste a video URL to reveal all tags — free, no login required.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Social Media Tools", href: "/social-media-tools" },
    { label: "YouTube Tag Extractor", href: "/social-media-tools/youtube-tags" },
  ],

  schemaOptions: {
    applicationCategory: "WebApplication",
    description:
      "YouTube tag extractor that reveals hidden video tags for keyword research, competitor analysis, and YouTube SEO. Paste any video URL or video ID to extract all tags.",
    alternateName: [
      "YouTube Tag Viewer",
      "YouTube SEO Tag Tool",
      "Video Tag Extractor",
      "YouTube Keyword Extractor",
      "Hidden Tags Viewer",
      "Competitor Tag Analyzer",
      "YT Tag Inspector",
      "YouTube Metadata Viewer",
      "Video SEO Audit Tool",
      "YouTube Tag Generator Reverse",
      "TubeBuddy Alternative",
      "VidIQ Alternative",
      "RapidTags Alternative",
      "YouTube Tag Research Tool",
      "Channel Tag Aggregator",
    ],
    ratingValue: "4.9",
    ratingCount: "9420",
    featureList: [
      "Extract hidden tags from any public YouTube video",
      "One-click copy all tags for your own videos",
      "Competitor keyword and tag analysis",
      "Works with youtube.com and youtu.be URLs",
      "No login or software installation required",
      "Tag count and character analysis",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A YouTube Tag Extractor is a free online tool that reveals the hidden meta tags used on any YouTube video, helping creators with keyword research, competitor analysis, and YouTube SEO optimization.",
    quickAnswer:
      "Paste a YouTube video URL to instantly extract all hidden tags the creator used. Copy the tag list with one click to use in your own videos. YouTube tags are not visible to viewers — this tool reveals them so you can analyze competitor strategies and discover high-performing keywords in your niche.",
    keyTakeaways: [
      "Extracts hidden meta tags from any public YouTube video URL",
      "YouTube tags are not publicly visible — viewers cannot see them without a tool like this",
      "Tags help YouTube's algorithm understand video content, context, and related topics",
      "Competitor tag analysis reveals which keywords top creators in your niche target",
      "Copy extracted tags with one click to add to your own video metadata",
      "Tags are one factor in YouTube SEO alongside title, description, and engagement",
    ],
    overview:
      "Reveal the hidden tags on any YouTube video with this free tag extractor. YouTube tags are metadata that creators add to help the algorithm understand what their video is about — but they are not visible to viewers. This tool extracts all tags from any public video URL so you can study competitor keyword strategies, discover trending tags in your niche, and optimize your own video metadata. Paste a YouTube URL, instantly see all tags used, and copy them with one click. Works with standard youtube.com URLs, youtu.be short links, and YouTube Shorts. No login or software needed.",

    howToSteps: [
      "Copy the YouTube video URL of any video whose tags you want to see.",
      "Paste the URL into the tag extractor input field above.",
      "View all extracted tags displayed with tag count and total characters.",
      "Click 'Copy Tags' to copy the entire tag list for use in your own videos or research.",
    ],

    features: [
      "Extract all hidden tags from any public YouTube video",
      "One-click copy to clipboard for easy reuse in your videos",
      "Tag count and character count for metadata optimization",
      "Works with youtube.com, youtu.be, and YouTube Shorts URLs",
      "No YouTube login, API key, or browser extension required",
      "Instant extraction — results in under 2 seconds",
    ],

    useCases: [
      "Analyze competitor video tags to reverse-engineer their YouTube SEO strategy",
      "Discover trending and high-ranking keywords in your niche from top videos",
      "Optimize your own video tags by studying what works for similar content",
      "Research tag patterns across multiple videos to build a keyword strategy",
      "Audit your existing video tags against competitors for gaps and opportunities",
    ],

    aboutTool:
      "YouTube tags are hidden metadata that creators add when uploading videos. While YouTube has reduced the weight of tags in its ranking algorithm (title and description are more important), tags still help with discovery — especially for misspelled keywords, alternate phrasings, and niche topics. This tool extracts tags by parsing the video page metadata. It shows the total number of tags and character count, which is useful since YouTube has a 500-character limit for tags. Use this tool alongside YouTube's search suggest and Google Trends to build a comprehensive keyword strategy.",

    proTip:
      "Don't copy competitor tags blindly. Use them as keyword research — identify patterns across 5-10 top-performing videos in your niche, then create your own tag list targeting those keywords plus variations specific to your content. Mix broad tags (e.g., 'cooking') with specific long-tail tags (e.g., 'easy 30 minute dinner recipes').",

    faqs: [
      {
        question: "What are YouTube tags and why do they matter?",
        answer:
          "YouTube tags are hidden keywords that creators add to their videos to help YouTube's algorithm understand the content. While less important than titles and descriptions, tags still help with search discovery, especially for alternative spellings, related topics, and niche keywords.",
      },
      {
        question: "Can viewers see YouTube video tags?",
        answer:
          "No. YouTube tags are hidden from the viewer interface. The only way to see another video's tags is to use a tag extractor tool like this one, or to view the page source code.",
      },
      {
        question: "How do I use extracted tags for my own videos?",
        answer:
          "Extract tags from 5-10 top-performing videos in your niche, identify common keywords, and adapt them for your content. Don't copy tags exactly — customize them for your specific video topic. Mix broad and long-tail keywords within YouTube's 500-character tag limit.",
      },
      {
        question: "Are YouTube tags still important for SEO?",
        answer:
          "Tags are less important than title, description, and engagement metrics, but they still help YouTube understand your video's context. They are especially useful for associating your video with commonly misspelled keywords and related topics.",
      },
      {
        question: "How many tags should a YouTube video have?",
        answer:
          "YouTube allows up to 500 characters for tags (not 500 tags). Most successful creators use 5-15 well-chosen tags. Focus on relevance over quantity — irrelevant tags can actually hurt your video's performance.",
      },
      {
        question: "Does this work with YouTube Shorts?",
        answer:
          "Yes. Paste a YouTube Shorts URL to extract its tags. Shorts use the same tag system as regular videos.",
      },
      {
        question: "Is this YouTube tag extractor free?",
        answer:
          "Yes. Completely free with no limits on extractions, no login required, and no software to install.",
      },
      {
        question: "How do I extract tags from a YouTube video?",
        answer:
          "Copy any YouTube video URL (the long youtube.com/watch?v=… or short youtu.be/… form), paste it in the box above, and click extract. The tool fetches the public video metadata and returns every tag the creator set, along with a count and one-click copy of the comma-separated list. Works for any public video, even ones where tags are hidden from the description."
      },
      {
        question: "Can I extract tags from YouTube Shorts?",
        answer:
          "Yes. YouTube Shorts use the same metadata system as regular videos — paste the Shorts URL (youtube.com/shorts/…) and the tool returns the creator's tags. Shorts tags are particularly valuable for trend research because Shorts content moves faster than long-form."
      },
      {
        question: "How do tag extractors actually find the hidden tags?",
        answer:
          "YouTube embeds video tags in the page's HTML metadata (the keywords meta tag and the embedded JSON state) — they're not visible in the UI but they're publicly accessible. Tag extractors fetch the video page and parse this metadata. The YouTube Data API v3's videos.list endpoint with part=snippet returns the same tags via the official API if you have a key."
      }
    ],

    relatedTools: [
      { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
      { name: "YouTube Channel Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
      { name: "YouTube Channel Checker", href: "/social-media-tools/channel-checker" },
      { name: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
      { name: "TikTok Engagement Calculator", href: "/social-media-tools/tiktok-engagement-calculator" },
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "AI Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "All Social Media Tools", href: "/social-media-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function YoutubeTagsPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<YoutubeTagExtractor />)} />
}
