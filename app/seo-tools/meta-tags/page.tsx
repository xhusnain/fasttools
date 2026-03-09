import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const MetaTagGenerator = dynamic(
  () => import("@/components/dev-tools/meta-tag-generator").then((mod) => mod.MetaTagGenerator),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Open Graph Meta Tag Generator",
  description:
    "Generate Open Graph, Twitter Card, and essential SEO meta tags for better search snippets and social previews.",
  metaTitle: "Meta Tag Generator — Create Open Graph, Twitter Card & SEO Meta Tags Free (2026)",
  metaDescription:
    "Generate complete SEO meta tags, Open Graph (og:title, og:image, og:description), and Twitter Card tags with character count validation. Copy-ready HTML for Next.js, WordPress, and static sites — free online tool.",
  path: "/seo-tools/meta-tags",

  header: {
    title: "Open Graph Meta Tag Generator",
    description:
      "Generate complete HTML meta tags for SEO (title, description, canonical, robots, viewport), Open Graph properties (og:title, og:description, og:image, og:url, og:type) for Facebook and LinkedIn previews, and Twitter Card tags (twitter:card, twitter:title, twitter:image) for rich tweet previews — with real-time character count validation and copy-ready HTML output.",
    titleSize: "large",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "SEO Tools", href: "/seo-tools" },
    { label: "Open Graph Meta Tag Generator", href: "/seo-tools/meta-tags" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Generate Open Graph, Twitter Card, and core SEO meta tags in-browser.",
    alternateName: ["OG Tag Generator", "Meta Tag Generator", "Twitter Card Generator"],
    featureList: [
      "Open Graph tags",
      "Twitter Card tags",
      "Title and description checks",
      "Copy-ready head markup",
      "No signup",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Meta Tag Generator is a free tool that creates HTML meta tags (title, description, Open Graph, Twitter Cards) for better SEO and social media sharing.",
    quickAnswer:
      "Enter your page title, description, and URL to generate complete meta tags. Includes SEO meta tags, Open Graph tags for Facebook, Twitter Card tags, and canonical URL. Copy the HTML and paste it into your page's <head> section.",
    keyTakeaways: [
      "Generates title, description, canonical, robots, and viewport meta tags",
      "Creates Open Graph (og:) tags for Facebook and LinkedIn sharing",
      "Creates Twitter Card meta tags for rich tweet previews",
      "Title tag: keep under 60 characters for full display in search results",
      "Meta description: keep under 160 characters for optimal SERP display",
    ],
    overview:
      "This free meta tag generator creates complete, copy-ready HTML metadata for search engine optimization and social media sharing in one unified interface. Generate essential SEO meta tags including title tags (optimized under 60 characters for full Google SERP display), meta descriptions (under 160 characters for optimal snippet length), canonical URLs for duplicate content prevention, robots directives (index/noindex, follow/nofollow), and viewport meta tags for mobile responsiveness. Build Open Graph (OG) protocol tags — og:title, og:description, og:image, og:url, og:type, og:site_name, og:locale — that control how your pages appear when shared on Facebook, LinkedIn, Pinterest, Slack, Discord, and WhatsApp. Create Twitter Card meta tags (twitter:card, twitter:title, twitter:description, twitter:image, twitter:site) for rich preview cards in tweets and X posts. Real-time character counters help you stay within Google's title and description display limits. The generated HTML is ready to paste into your page's head section, Next.js metadata exports, WordPress theme headers, or any CMS template system.",

    howToSteps: [
      "Enter your page title (keep under 60 characters), meta description (keep under 160 characters), and canonical URL for the core SEO meta tags.",
      "Configure Open Graph properties: og:title, og:description, og:image URL (recommended 1200x630px), og:url, og:type (website/article), and og:site_name for social sharing previews.",
      "Set Twitter Card fields: choose card type (summary or summary_large_image), add twitter:title, twitter:description, twitter:image, and twitter:site handle.",
      "Review character count indicators to ensure your title and description fit within Google SERP display limits.",
      "Copy the complete generated HTML meta tags and paste into your page head section, Next.js metadata config, WordPress header, or CMS template.",
    ],

    features: [
      "Complete Open Graph (og:) property generation including og:title, og:description, og:image, og:url, og:type, og:site_name, and og:locale",
      "Twitter Card meta tag generation with summary and summary_large_image card types and full twitter:* property support",
      "Real-time character count validation for title tags (60 char limit) and meta descriptions (160 char limit) per Google SERP guidelines",
      "SEO essentials: canonical URL, robots meta (index/noindex, follow/nofollow), and viewport meta tag generation",
      "Structured, copy-ready HTML output compatible with static HTML, Next.js, Nuxt.js, WordPress, Shopify, and any CMS",
      "Live preview of how your page will appear in search results and social media shares",
    ],

    useCases: [
      "Optimizing Facebook, LinkedIn, and Pinterest link previews with properly configured Open Graph og:image and og:description tags",
      "Creating rich Twitter Card previews with summary_large_image for blog posts, product pages, and landing pages shared on X",
      "Pre-launch SEO QA to verify title tag length, meta description quality, canonical URL correctness, and robots directives",
      "Standardizing meta tag templates across editorial, marketing, and development teams for consistent social sharing appearance",
      "Generating meta tags for Next.js generateMetadata(), Nuxt.js useSeoMeta(), WordPress wp_head, and Shopify theme.liquid implementations",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Meta tags are HTML elements placed in a page&apos;s &lt;head&gt; section that provide structured information to search engines and social media platforms. The title tag and meta description directly influence Google search result snippets — Google displays approximately 60 characters of the title and 160 characters of the description in SERPs. The canonical tag (rel=&quot;canonical&quot;) tells search engines which URL is the preferred version of a page, preventing duplicate content indexing issues. The robots meta tag controls crawler behavior with directives like index/noindex and follow/nofollow. The Open Graph protocol (created by Facebook in 2010) uses property attributes (og:title, og:description, og:image, og:url, og:type) to control how URLs render as rich previews when shared on Facebook, LinkedIn, Pinterest, Slack, Discord, WhatsApp, and iMessage.
        </p>
        <p>
          Twitter Cards (now X Cards) use their own meta tag namespace (twitter:card, twitter:title, twitter:description, twitter:image, twitter:site) to control tweet preview appearance. The two main card types are &quot;summary&quot; (small thumbnail) and &quot;summary_large_image&quot; (wide image banner). When Twitter Card tags are not present, X falls back to Open Graph tags, but using both protocols ensures maximum control across all platforms. For og:image and twitter:image, the recommended dimensions are 1200x630 pixels for landscape images, with a minimum of 600x315 pixels. Images should be hosted on HTTPS URLs and be under 5MB. After deploying meta tags, validate them using Facebook&apos;s Sharing Debugger, Twitter&apos;s Card Validator, and LinkedIn&apos;s Post Inspector to verify correct rendering before sharing publicly.
        </p>
      </div>
    ),

    proTip:
      "Always use absolute HTTPS URLs for og:image and twitter:image — relative paths will not be resolved by crawlers. Use 1200x630px images for optimal display across all platforms. After deploying, clear Facebook's OG cache using the Sharing Debugger (developers.facebook.com/tools/debug) and test Twitter Cards with the Card Validator. In Next.js, use the generateMetadata() function or metadata export for server-rendered OG tags that crawlers can parse without JavaScript execution.",

    faqs: [
      {
        question: "What are Open Graph meta tags and which platforms use them?",
        answer:
          "Open Graph (OG) tags are HTML meta elements using the 'property' attribute (og:title, og:description, og:image, og:url, og:type) that control how URLs appear as rich previews when shared on social platforms. Facebook, LinkedIn, Pinterest, Slack, Discord, WhatsApp, iMessage, and many other apps read Open Graph tags. Without them, platforms generate generic or incorrect previews from page content.",
      },
      {
        question: "Do I need both Open Graph tags and Twitter Card tags?",
        answer:
          "Yes, for maximum control. While X (Twitter) falls back to Open Graph tags when Twitter Card tags are absent, using both protocols lets you customize previews independently for each platform. Twitter Card tags use the 'name' attribute (twitter:card, twitter:title, twitter:description, twitter:image) and support card types like 'summary' and 'summary_large_image' that have no OG equivalent.",
      },
      {
        question: "What is the recommended og:image size for social media sharing?",
        answer:
          "The recommended og:image dimensions are 1200x630 pixels (1.91:1 aspect ratio) for optimal display across Facebook, LinkedIn, and Twitter summary_large_image cards. Minimum size is 600x315 pixels. Images must be hosted on HTTPS URLs, under 5MB file size, and in JPG, PNG, or WebP format. Always use absolute URLs — relative paths cannot be resolved by social media crawlers.",
      },
      {
        question: "How long should my title tag and meta description be for Google SEO?",
        answer:
          "Google displays approximately 60 characters (or 580 pixels width) of the title tag and approximately 155-160 characters of the meta description in search result snippets. Titles exceeding 60 characters get truncated with ellipsis. Write compelling, keyword-rich titles under 60 characters and descriptions under 160 characters that include a clear call-to-action to maximize click-through rates.",
      },
      {
        question: "How do I add generated meta tags to Next.js, WordPress, or Shopify?",
        answer:
          "In Next.js App Router, use the metadata export or generateMetadata() function in page.tsx. In WordPress, paste tags in your theme's header.php or use an SEO plugin like Yoast/RankMath. In Shopify, add tags to theme.liquid in the <head> section. For static HTML sites, paste the generated tags directly between <head> and </head>. The generated HTML from this tool is compatible with all these implementations.",
      },
      {
        question: "How do I test and validate my Open Graph and Twitter Card tags after deployment?",
        answer:
          "Use Facebook's Sharing Debugger (developers.facebook.com/tools/debug) to preview OG tags and clear cached previews. Use Twitter's Card Validator to test Twitter Card rendering. Use LinkedIn's Post Inspector for LinkedIn previews. These tools fetch your page, parse the meta tags, and show exactly how the shared link will appear — including any errors or missing required properties.",
      },
      {
        question: "Is this meta tag generator free to use?",
        answer:
          "Yes, completely free with no signup required, no usage limits, and no ads. Generate meta tags for unlimited pages. All processing runs in your browser — no data is sent to any server.",
      },
    ],

    additionalContent: [
      {
        heading: "Why Metadata Consistency Matters",
        content:
          "Inconsistent social tags across similar pages can create uneven sharing previews and dilute click-through performance. Standardized templates improve reliability at scale.",
      },
      {
        heading: "Validation Workflow",
        content:
          "After generating tags, test published URLs with platform preview/debug tools to confirm crawlability, image rendering, and final snippet formatting.",
      },
    ],

    relatedTools: [
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function MetaTagGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<MetaTagGenerator />)} />
}
