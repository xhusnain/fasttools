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
  metaTitle: "AI Caption Generator — Instagram, TikTok & X",
  metaDescription:
    "Free AI caption generator for Instagram, TikTok, LinkedIn, X, Facebook & Pinterest. Pick a tone, get hashtag ideas, copy in one click.",
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
      "TikTok Caption Maker",
      "LinkedIn Post Generator",
      "Social Media Caption Writer",
      "Reel Caption Generator",
    ],
    featureList: [
      "Platform-specific caption generation with correct character limits enforced",
      "Instagram (2,200 chars), TikTok (4,000), LinkedIn (3,000), X/Twitter (280), Facebook, Pinterest, YouTube",
      "Five tone options: professional, witty, inspirational, casual, funny",
      "Multiple variations per generation — pick the one that fits your voice",
      "Hashtag suggestions tailored to topic + platform (1-2 mega, 3-5 niche, 5-10 long-tail)",
      "Call-to-action templates: comment, share, save, follow, link in bio",
      "Emoji placement suggestions per platform best practice",
      "Captions tuned for engagement: hook-first, scroll-stopper opens, story-driven middle",
      "Copy any caption with one click — paste straight into your scheduling app",
      "Free, no signup, no watermark",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Platform-Specific Captions Matter</h3>
          <p>
            Social media algorithms weight caption engagement signals — comments, saves, and shares — when deciding how widely to distribute your content. <strong>Instagram&apos;s algorithm</strong> favors captions that prompt conversation (questions, polls, controversial takes). <strong>TikTok&apos;s For You Page algorithm</strong> uses caption keywords for content classification — keyword-rich captions help the AI place your video in the right niche. <strong>LinkedIn&apos;s algorithm</strong> rewards &quot;dwell time,&quot; making hook-style openings critical. <strong>X / Twitter</strong> punishes long captions — concise hooks win. Cross-posting the same caption across all platforms typically <strong>underperforms by 40-60%</strong> compared to platform-tailored captions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Anatomy of a High-Performing Caption</h3>
          <p>The best-performing captions across platforms follow the <strong>Hook-Story-CTA</strong> framework:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Hook (first 125 chars):</strong> the part visible before &quot;...more&quot; truncation. Must stop the scroll. Use a bold statement, surprising statistic, provocative question, or pattern interrupt.</li>
            <li><strong>Story (middle):</strong> relatable mini-narrative, behind-the-scenes detail, educational content, or value-add. Builds connection and gives the audience a reason to stay.</li>
            <li><strong>CTA (end):</strong> clear action — comment, share, save, tag a friend, click link in bio. Without a CTA, posts get views but no engagement; with one, comments triple.</li>
          </ul>
          <p className="mt-3">
            Optional add-ons: emoji to add visual rhythm and break up text, line breaks to make reading easier on mobile, hashtags grouped at the end (or in first comment for Instagram) to avoid cluttering the main caption.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Platform-Specific Caption Best Practices</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Platform</th>
                <th className="text-left py-2 px-2 text-foreground">Optimal length</th>
                <th className="text-left py-2 px-2 text-foreground">Tone</th>
                <th className="text-left py-2 px-2 text-foreground">Hashtags</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>Instagram (feed)</strong></td>
                <td className="py-2 px-2">125-150 chars before fold + 50-300 words after</td>
                <td className="py-2 px-2">Personal, story-driven, emoji-rich</td>
                <td className="py-2 px-2">3-5 (in first comment)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Instagram Reels</td>
                <td className="py-2 px-2">125 chars (visible only)</td>
                <td className="py-2 px-2">Short hook + 1-2 emojis</td>
                <td className="py-2 px-2">3-5 (in caption)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">TikTok</td>
                <td className="py-2 px-2">100-150 chars</td>
                <td className="py-2 px-2">Keyword-rich, hook-first, conversational</td>
                <td className="py-2 px-2">3-5 niche + 1 broad</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><strong>LinkedIn</strong></td>
                <td className="py-2 px-2">200-500 words, line-broken</td>
                <td className="py-2 px-2">Professional but personal, thought leadership</td>
                <td className="py-2 px-2">3-5 industry-specific</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">X / Twitter</td>
                <td className="py-2 px-2">71-100 chars</td>
                <td className="py-2 px-2">Concise, witty, opinionated</td>
                <td className="py-2 px-2">1-2 max (engagement drops &gt;2)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Facebook</td>
                <td className="py-2 px-2">40-80 chars</td>
                <td className="py-2 px-2">Personal, conversational, emotional</td>
                <td className="py-2 px-2">2-3 max</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Pinterest</td>
                <td className="py-2 px-2">200-300 chars in description</td>
                <td className="py-2 px-2">Keyword-rich, SEO-style, descriptive</td>
                <td className="py-2 px-2">3-5 within description</td>
              </tr>
              <tr>
                <td className="py-2 px-2">YouTube (description)</td>
                <td className="py-2 px-2">First 157 chars above fold</td>
                <td className="py-2 px-2">SEO + summary + timestamps</td>
                <td className="py-2 px-2">3-5 in description</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Hook Patterns That Stop the Scroll</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Bold contrarian statement:</strong> &quot;Everyone says X. They&apos;re wrong.&quot;</li>
            <li><strong>Specific number / statistic:</strong> &quot;We tested 47 versions of this email. Here&apos;s what won.&quot;</li>
            <li><strong>Provocative question:</strong> &quot;What if your morning routine is sabotaging your day?&quot;</li>
            <li><strong>Pattern interrupt:</strong> &quot;I quit my $200K job and I&apos;m not coming back. Here&apos;s why...&quot;</li>
            <li><strong>Curiosity gap:</strong> &quot;The 3-word sentence that doubled my response rate.&quot;</li>
            <li><strong>Negative framing:</strong> &quot;Don&apos;t do this if you want to grow on LinkedIn.&quot;</li>
            <li><strong>Numbered list tease:</strong> &quot;5 things I wish I knew when I started my business.&quot;</li>
            <li><strong>Mistake story:</strong> &quot;I lost $50K making this one mistake. Here&apos;s the lesson.&quot;</li>
            <li><strong>Direct address:</strong> &quot;If you&apos;re a [niche], read this before posting today.&quot;</li>
            <li><strong>Time-bound urgency:</strong> &quot;This stopped working in 2024. Here&apos;s what to do now.&quot;</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Hashtag Strategy by Platform</h3>
          <p>
            More hashtags ≠ more reach. Each platform has an optimal range. Use the <a href="/social-media-tools/hashtag-counter" className="text-primary underline">Hashtag Counter</a> to verify you&apos;re within limits before posting.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Instagram (3-5 hashtags):</strong> 1-2 mega-popular (#travel = 600M+ posts), 2-3 niche-specific (#solofemaletravel = 5M posts), 1-2 long-tail (#solotravelparis).</li>
            <li><strong>TikTok (3-5 hashtags):</strong> 1 broad (#fyp, #foryou — questionable but expected), 3-4 niche to help algorithm classify your video.</li>
            <li><strong>LinkedIn (3-5 hashtags):</strong> Industry-specific (#productmanagement, #saas), not generic (#business, #motivation).</li>
            <li><strong>X / Twitter (1-2):</strong> engagement drops ~17% above 2 hashtags. Less is more here.</li>
            <li><strong>Pinterest (2-5):</strong> embed within description naturally; pinterest treats descriptions like SEO content.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When NOT to Use AI Captions</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Personal stories:</strong> AI can&apos;t replicate the specific texture of your real life. Use AI for templates / structure, write the personal story yourself.</li>
            <li><strong>Crisis communication:</strong> tone, nuance, and accountability matter — don&apos;t outsource these to AI.</li>
            <li><strong>Sponsored / FTC-regulated content:</strong> AI may miss required disclosures (#ad, #sponsored, #partnership). Always personally verify compliance.</li>
            <li><strong>Audience-specific in-jokes:</strong> if your audience has shared references, AI can&apos;t replicate them.</li>
            <li><strong>Breaking news / time-sensitive:</strong> AI may use stale information; verify facts.</li>
          </ul>
          <p className="mt-3">
            The best AI caption workflow: <strong>generate → select best option → personalize for 2-3 minutes</strong>. AI does 80% of the work; your final pass adds the specific texture that AI can&apos;t produce.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Start every caption with a pattern interrupt — a bold statement, surprising statistic, or provocative question — in the first 125 characters (the preview cutoff on Instagram). Posts with strong hooks in the visible preview get 3-5x more 'see more' taps, which signals engagement to the algorithm and dramatically increases reach.",

    faqs: [
      {
        question: "What social media platforms are supported?",
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
          "Yes. The LinkedIn tone generates professional, thought-leadership-style captions with hook openings that drive dwell time. LinkedIn's algorithm rewards posts that keep people reading — so the AI creates opening lines designed to stop the scroll, followed by structured content with line breaks, bullet points, and a conversation-starting question at the end to drive comments.",
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
      { name: "AI Paraphraser", href: "/ai-tools/ai-paraphraser" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Hashtag Counter", href: "/social-media-tools/hashtag-counter" },
      { name: "Link in Bio Generator", href: "/social-media-tools/link-in-bio" },
      { name: "YouTube Channel Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
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
