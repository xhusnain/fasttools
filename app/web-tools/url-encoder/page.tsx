import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const UrlEncoder = dynamic(
  () =>
    import("@/components/web-tools/url-encoder").then((mod) => mod.UrlEncoder),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "URL Encoder Decoder",
  description:
    "Encode text with percent-encoding for URLs, or decode URL-encoded strings back to readable text.",
  metaTitle: "URL Encoder Decoder Online (Percent-Encoding)",
  metaDescription:
    "Encode or decode URL components instantly. Convert spaces and special characters to percent-encoding and decode them back safely.",
  path: "/web-tools/url-encoder",
  keywords: [
    "url encoder",
    "url decoder",
    "percent-encoding",
    "encodeURIComponent",
    "decodeURIComponent",
    "url encoded string",
  ],

  header: {
    title: "URL Encoder Decoder",
    description:
      "Convert text to URL-safe percent-encoding and decode encoded strings back to plain text.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    {
      label: "URL Encoder Decoder",
      href: "/web-tools/url-encoder",
    },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Encode and decode URL strings with percent-encoding in the browser.",
    alternateName: ["URL Encoder", "URL Decoder", "Percent Encoder"],
    featureList: [
      "Encode URL components",
      "Decode URL-encoded values",
      "Live input/output conversion",
      "Copy encoded or decoded output",
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
      "Use this tool to safely encode values for query strings, path fragments, or form payloads. It follows standard percent-encoding behavior (like JavaScript `encodeURIComponent`) and also decodes encoded values for debugging and QA.",

    howToSteps: [
      "Paste plain text in the Encode panel to generate URL-safe output.",
      "Paste an encoded string in the Decode panel to convert it back to readable text.",
      "Copy either result for use in URLs, API requests, or troubleshooting.",
    ],

    features: [
      "Percent-encodes reserved and special characters",
      "Decodes encoded strings including %XX sequences",
      "Live updates as you type",
      "One-click copy for encoded and decoded outputs",
      "Runs entirely in the browser",
    ],

    useCases: [
      "Preparing query parameter values before appending them to URLs",
      "Checking encoded redirect URLs from ads, analytics, or email links",
      "Debugging encoded payload values in logs and API requests",
      "Validating output against encodeURIComponent/decodeURIComponent behavior",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          URL encoding (percent-encoding) converts characters that are unsafe in
          URLs into `%`-prefixed hexadecimal values. For example, a space becomes
          `%20`. This is required when sending user input through query strings
          or URL components.
        </p>
        <p>
          In JavaScript this is commonly handled with `encodeURIComponent` and
          `decodeURIComponent`. This tool provides the same workflow in a visual
          UI for quick checks without opening a console.
        </p>
      </div>
    ),

    proTip:
      "Encode individual parameter values, not entire URLs, unless you intentionally need a fully encoded string.",

    faqs: [
      {
        question: "What is URL percent-encoding?",
        answer:
          "Percent-encoding replaces unsafe URL characters with `%` followed by hexadecimal bytes. This keeps URLs valid and avoids parsing issues across browsers and servers.",
      },
      {
        question: "When should I use a URL encoder?",
        answer:
          "Use it when inserting user-provided values into query parameters, route segments, or redirect URLs to prevent broken links and malformed requests.",
      },
      {
        question: "How is this different from encoding a full URL?",
        answer:
          "Most workflows encode only parameter values. Encoding an entire URL can also encode separators (`?`, `&`, `/`) and may change meaning if done incorrectly.",
      },
      {
        question: "Does this match JavaScript encodeURIComponent?",
        answer:
          "Yes, the behavior is aligned with common browser URL encoding/decoding logic used in frontend applications.",
      },
      {
        question: "Is my input stored?",
        answer:
          "No. Conversion is handled client-side in your browser and is not uploaded for normal use.",
      },
    ],

    additionalContent: [
      {
        heading: "Common Encoding Pitfalls",
        content:
          "A frequent mistake is double-encoding values. If you see `%2520`, the value was likely encoded twice. Decode once, verify the original string, then re-encode only where needed.",
      },
      {
        heading: "Typical SEO and Analytics Use",
        content:
          "Marketers and SEO teams often use URL encoding for campaign parameters and redirect chains. This tool helps verify UTM values and destination links before publishing.",
      },
    ],

    relatedTools: [
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "Escape HTML Entities", href: "/web-tools/html-escape" },
      { name: "Auth Header Generator", href: "/web-tools/auth-generator" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function UrlEncoderPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <UrlEncoder />
        </div>
      )}
    />
  )
}
