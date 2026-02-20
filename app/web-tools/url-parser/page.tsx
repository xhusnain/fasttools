import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const UrlParserTool = dynamic(
  () =>
    import("@/components/web-tools/url-parser").then((mod) => mod.UrlParser),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "URL Parser",
  description:
    "Parse URLs into protocol, host, path, query parameters, and hash for debugging and validation.",
  metaTitle: "URL Parser Online with Query Parameter Decode",
  metaDescription:
    "Break any URL into components and inspect decoded query parameters. Useful for redirects, analytics URLs, and API debugging.",
  path: "/web-tools/url-parser",
  keywords: [
    "url parser",
    "query string parser",
    "url query parameters",
    "parse url",
    "url breakdown",
    "url decoder",
  ],

  header: {
    title: "URL Parser",
    description:
      "Inspect URL structure, decode query parameters, and validate links quickly.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "URL Parser", href: "/web-tools/url-parser" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Parse URL components and decoded query strings in-browser.",
    alternateName: ["URL Analyzer", "Query String Parser"],
    featureList: [
      "Protocol/host/path/hash extraction",
      "Decoded query parameter table",
      "Relative URL handling",
      "Live parser output",
      "Client-side processing",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Use this parser to inspect URL structure and query values in a readable format. It is useful for checking campaign links, redirect targets, API callback URLs, and malformed links before deployment.",

    howToSteps: [
      "Paste a full or relative URL in the input field.",
      "Review parsed parts: scheme, host, path, search, hash, and origin.",
      "Inspect decoded query keys and values in the parameter table.",
    ],

    features: [
      "Parses protocol, host, port, pathname, search, and hash",
      "Displays decoded query string values",
      "Highlights invalid URL input",
      "Supports quick copy and sample testing",
      "Runs in-browser with no signup",
    ],

    useCases: [
      "Debugging broken links and redirect chains",
      "Auditing UTM and tracking parameters",
      "Inspecting callback URLs from OAuth/API integrations",
      "Validating query structures before release",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          A URL parser separates a link into standardized components so each
          part can be inspected independently. This prevents common mistakes such
          as malformed query strings, incorrect hosts, or duplicated parameters.
        </p>
        <p>
          Parsed output aligns with browser URL behavior and helps teams perform
          quick validation without opening a terminal or writing ad-hoc scripts.
        </p>
      </div>
    ),

    proTip:
      "For campaign QA, verify both raw query strings and decoded values to catch encoding errors before publishing.",

    faqs: [
      {
        question: "What does a URL parser do?",
        answer:
          "It breaks a URL into individual parts such as protocol, host, path, query, and fragment so you can validate each section.",
      },
      {
        question: "Why decode query parameters?",
        answer:
          "Decoded values are easier to review and help you catch malformed campaign tags, spacing errors, or unexpected encoded symbols.",
      },
      {
        question: "Can this parse relative URLs?",
        answer:
          "Yes. It can handle common relative formats and still surface path and query details for analysis.",
      },
      {
        question: "How is this useful for SEO and analytics?",
        answer:
          "It helps verify canonical parameter structures, UTM tags, redirect targets, and link consistency across campaigns and internal navigation.",
      },
      {
        question: "Is this URL parser free?",
        answer:
          "Yes. It is free to use and runs client-side in the browser.",
      },
    ],

    additionalContent: [
      {
        heading: "Common URL QA Checklist",
        content:
          "Check scheme (`https`), hostname spelling, path casing, duplicated parameters, and unwanted fragments. Small URL errors can impact crawling, analytics attribution, and user trust.",
      },
      {
        heading: "Working with Encoded Parameters",
        content:
          "If values contain encoded symbols (for example `%2F` or `%20`), verify the decoded output and re-encode only the exact parameter value when rebuilding URLs.",
      },
    ],

    relatedTools: [
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "Outlook Safelink Decoder", href: "/web-tools/outlook-safelink-decoder" },
      { name: "Device Information", href: "/web-tools/device-info" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function UrlParserPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <UrlParserTool />
        </div>
      )}
    />
  )
}
