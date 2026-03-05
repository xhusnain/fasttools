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
  metaTitle: "Open Graph Meta Tag Generator (OG + Twitter Cards)",
  metaDescription:
    "Create Open Graph and Twitter Card tags with clean HTML output, title/description length checks, and social-preview-ready metadata.",
  path: "/seo-tools/meta-tags",
  keywords: [
    "open graph meta tag generator",
    "og tags",
    "twitter card generator",
    "meta tags",
    "social preview tags",
    "og:image size",
  ],

  header: {
    title: "Open Graph Meta Tag Generator",
    description:
      "Build social and search metadata quickly with clean, copy-ready tag output.",
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
      "Use this generator to create metadata for search snippets and social sharing. It helps you define title, description, canonical URL, Open Graph image fields, and Twitter card values in one place so pages render consistently when shared.",

    howToSteps: [
      "Enter page title, description, and canonical URL.",
      "Add Open Graph fields such as `og:title`, `og:description`, `og:image`, and `og:url`.",
      "Add Twitter Card fields and choose a card type.",
      "Copy the generated tags into your page head or framework metadata config.",
    ],

    features: [
      "Open Graph property generation",
      "Twitter Card metadata generation",
      "Character-count guidance for title and description",
      "Structured, copy-ready meta markup",
      "Useful for static HTML and framework-based apps",
    ],

    useCases: [
      "Improving Facebook and LinkedIn link previews",
      "Making X/Twitter cards consistent with page messaging",
      "Preparing metadata during page-launch QA",
      "Standardizing metadata templates across editorial teams",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          Open Graph tags control how URLs appear in many social apps.
          Complementary Twitter card tags improve preview quality on X. When both
          are configured well, shared links look more reliable and often receive
          better engagement.
        </p>
        <p>
          This tool is designed for practical implementation: define inputs,
          review outputs, and paste into your metadata system without manually
          formatting each property.
        </p>
      </div>
    ),

    proTip:
      "Use absolute URLs for `og:image` and keep image assets consistent in size/aspect ratio across templates.",

    faqs: [
      {
        question: "What are Open Graph tags?",
        answer:
          "Open Graph tags are metadata properties (for example `og:title`, `og:description`, `og:image`) that control social preview appearance for shared URLs.",
      },
      {
        question: "Do I still need Twitter Card tags if I have Open Graph?",
        answer:
          "Yes. Many platforms can read Open Graph, but Twitter Card tags provide platform-specific control for X previews.",
      },
      {
        question: "What image size is usually recommended for social previews?",
        answer:
          "A common baseline is around 1200px wide with consistent aspect ratio. The key is using stable, crawlable image URLs and testing actual previews.",
      },
      {
        question: "Where should generated tags be added?",
        answer:
          "Place them in the document head (or equivalent metadata API in frameworks like Next.js) so crawlers can parse them during fetch.",
      },
      {
        question: "Is this tool free?",
        answer: "Yes. It is free to use with no signup.",
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
