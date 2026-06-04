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
  metaTitle: "Meta Tag Generator — SEO, Open Graph & Twitter Card HTML Generator",
  metaDescription:
    "Free meta tag generator. Build SEO title / meta-description, Open Graph (og:title, og:image, og:description for Facebook + LinkedIn + Slack + Discord), Twitter Card tags, canonical, robots, viewport. Live character validation, copy-ready HTML.",
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
    alternateName: [
      "OG Tag Generator",
      "Open Graph Generator",
      "Twitter Card Generator",
      "Social Meta Tag Builder",
      "Facebook Meta Generator",
      "LinkedIn Preview Tag Generator",
      "Slack Unfurl Tag Generator",
      "Discord Embed Tag Tool",
      "SEO Head Tag Builder",
      "HTML Meta Tag Maker",
      "Next.js Metadata Helper",
      "WordPress Meta Tag Builder",
      "Yoast Meta Tag Alternative",
      "Rank Math Meta Generator",
      "Schema-friendly Meta Maker",
    ],
    featureList: [
      "Complete SEO meta tags: title, description, canonical, robots, viewport, charset",
      "Open Graph protocol: og:title, og:description, og:image, og:url, og:type, og:site_name, og:locale",
      "Twitter Card meta: twitter:card, twitter:title, twitter:description, twitter:image, twitter:site",
      "Multi-platform preview: Facebook, LinkedIn, Slack, Discord, WhatsApp, X/Twitter, Pinterest",
      "Live character count validators (Title 60, Meta Desc 160, OG image 1200×630)",
      "Live preview rendering matching Facebook / Twitter / Slack card layouts",
      "Copy-ready HTML output for paste into `<head>` or Next.js metadata export",
      "JSON-LD WebSite schema generator with sitelinks search action",
      "Image URL validator + dimensions check (1200×630 ideal for OG)",
      "100% client-side — no signup, no data sent to servers",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">The 8 Essential Meta Tags Every Page Needs</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Tag</th>
                <th className="text-left py-2 px-2 text-foreground">Purpose</th>
                <th className="text-left py-2 px-2 text-foreground">Length / format</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;title&gt;</code></td>
                <td className="py-2 px-2">SERP display + browser tab</td>
                <td className="py-2 px-2">50-60 chars</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;meta name=&quot;description&quot;&gt;</code></td>
                <td className="py-2 px-2">SERP snippet</td>
                <td className="py-2 px-2">150-160 chars</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;link rel=&quot;canonical&quot;&gt;</code></td>
                <td className="py-2 px-2">Prevent duplicate-content issues</td>
                <td className="py-2 px-2">Absolute URL</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;meta name=&quot;robots&quot;&gt;</code></td>
                <td className="py-2 px-2">Crawler directives</td>
                <td className="py-2 px-2">index/noindex, follow/nofollow</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;meta name=&quot;viewport&quot;&gt;</code></td>
                <td className="py-2 px-2">Mobile responsiveness</td>
                <td className="py-2 px-2"><code>width=device-width, initial-scale=1</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;meta charset&gt;</code></td>
                <td className="py-2 px-2">Text encoding</td>
                <td className="py-2 px-2"><code>UTF-8</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>og:* tags</code></td>
                <td className="py-2 px-2">Facebook / LinkedIn previews</td>
                <td className="py-2 px-2">og:title, og:description, og:image</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><code>twitter:* tags</code></td>
                <td className="py-2 px-2">X / Twitter card previews</td>
                <td className="py-2 px-2">twitter:card, twitter:image</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Open Graph Tags: Facebook, LinkedIn, Slack, Discord, WhatsApp</h3>
          <p>
            Created by Facebook in 2010, Open Graph (OG) tags have become the universal standard for link previews across virtually every modern messaging and social platform. The core tags:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>og:title</strong> — title shown in the preview card (often same as page title)</li>
            <li><strong>og:description</strong> — 2-3 line description below the title</li>
            <li><strong>og:image</strong> — preview image (1200×630px ideal, &lt;5MB, HTTPS URL)</li>
            <li><strong>og:url</strong> — canonical URL for the page</li>
            <li><strong>og:type</strong> — content type: website, article, book, profile, video.movie, etc.</li>
            <li><strong>og:site_name</strong> — your site / brand name</li>
            <li><strong>og:locale</strong> — language + region (e.g., <code>en_US</code>, <code>fr_FR</code>)</li>
            <li><strong>og:image:alt</strong> — accessibility text for the image</li>
            <li><strong>og:image:width / og:image:height</strong> — dimensions for faster preview rendering</li>
          </ul>
          <p className="mt-3">
            Platforms that read OG tags: Facebook, LinkedIn, Pinterest, Slack, Discord, WhatsApp, iMessage, Telegram, Signal, and many more. Without OG tags, these platforms guess at preview content — often badly.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Twitter Card Types</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>summary:</strong> small square image to the left of title/description. Older, less visual.</li>
            <li><strong>summary_large_image:</strong> wide banner image above title — modern preferred card. <strong>Use this by default.</strong></li>
            <li><strong>app:</strong> for promoting mobile apps with iOS / Android download links</li>
            <li><strong>player:</strong> for embedding video / audio players directly in tweets</li>
          </ul>
          <p className="mt-3">
            If Twitter Card tags are absent, X falls back to Open Graph. <strong>Include both</strong> to maintain control across all platforms.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Image Specifications for Maximum Compatibility</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Spec</th>
                <th className="text-left py-2 px-2 text-foreground">Value</th>
                <th className="text-left py-2 px-2 text-foreground">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2">Dimensions</td><td className="py-2 px-2"><strong>1200 × 630px</strong></td><td className="py-2 px-2">1.91:1 ratio; works on FB, LinkedIn, Twitter, Slack</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Minimum</td><td className="py-2 px-2">600 × 315px</td><td className="py-2 px-2">Below this, some platforms show no preview</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">File size</td><td className="py-2 px-2">&lt; 5 MB</td><td className="py-2 px-2">Facebook caps at 5MB; aim for &lt;1MB</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">Format</td><td className="py-2 px-2">PNG, JPG, GIF</td><td className="py-2 px-2">WebP / AVIF not yet universally supported</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2">URL</td><td className="py-2 px-2">Absolute HTTPS only</td><td className="py-2 px-2">Relative paths break; HTTP gets blocked</td></tr>
              <tr><td className="py-2 px-2">Text overlay</td><td className="py-2 px-2">Center-safe area</td><td className="py-2 px-2">Cropping varies per platform; keep text in middle 70%</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Validation Tools</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Facebook Sharing Debugger</strong> (<code>developers.facebook.com/tools/debug</code>) — see exactly how Facebook will render your URL; force re-fetch to clear FB cache</li>
            <li><strong>X / Twitter Card Validator</strong> (cards-dev.twitter.com/validator) — preview Twitter cards before sharing</li>
            <li><strong>LinkedIn Post Inspector</strong> (<code>linkedin.com/post-inspector</code>) — verify LinkedIn previews</li>
            <li><strong>OpenGraph.xyz</strong> — universal preview across many platforms</li>
            <li><strong>Schema Markup Validator</strong> (validator.schema.org) — for JSON-LD structured data</li>
            <li><strong>Google Rich Results Test</strong> (search.google.com/test/rich-results) — Google-specific rich snippet eligibility</li>
            <li><strong>WhatsApp Link Preview Bot</strong> — message a URL to yourself to see how it renders</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Robots Meta Tag Directives</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>index, follow</strong> (default if no robots tag): allow indexing and link following</li>
            <li><strong>noindex:</strong> don&apos;t include in search results (use for thank-you pages, login pages, internal admin)</li>
            <li><strong>nofollow:</strong> don&apos;t follow links on this page (rarely needed at page level)</li>
            <li><strong>noarchive:</strong> don&apos;t show cached version in search results</li>
            <li><strong>nosnippet:</strong> don&apos;t show a description snippet (very rare use)</li>
            <li><strong>max-snippet:N:</strong> limit snippet to N characters (Google-specific)</li>
            <li><strong>max-image-preview:large/standard/none:</strong> control image preview size</li>
            <li><strong>noimageindex:</strong> don&apos;t index images on this page</li>
            <li><strong>unavailable_after:[date]:</strong> stop indexing after a specific date (Google-specific)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Implementation in Modern Frameworks</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Next.js 13+ App Router:</strong> export a <code>metadata</code> object or <code>generateMetadata()</code> function from page.tsx</li>
            <li><strong>Next.js Pages Router:</strong> use <code>next/head</code> component</li>
            <li><strong>Nuxt 3:</strong> <code>useSeoMeta()</code> composable or <code>useHead()</code></li>
            <li><strong>Astro:</strong> add tags directly in the <code>&lt;head&gt;</code> of layouts</li>
            <li><strong>WordPress:</strong> use Yoast SEO, Rank Math, or All in One SEO plugins</li>
            <li><strong>Shopify:</strong> edit theme.liquid&apos;s <code>&lt;head&gt;</code> section</li>
            <li><strong>Webflow:</strong> Site Settings → SEO + page-level overrides</li>
            <li><strong>React (vanilla):</strong> react-helmet-async or react-helmet</li>
          </ul>
        </div>
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
      { name: "Schema Markup Generator", href: "/seo-tools/schema-markup-generator" },
      { name: "Blog Title Generator", href: "/seo-tools/blog-titles" },
      { name: "Keyword Density Checker", href: "/seo-tools/keyword-density" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "Text Similarity Checker", href: "/seo-tools/text-similarity-checker" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "All SEO Tools", href: "/seo-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function MetaTagGeneratorPage() {
  return <ToolPageLayout {...toolConfig.getLayoutProps(<MetaTagGenerator />)} />
}
