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
  metaTitle: "URL Encoder & Decoder — Percent-Encode (RFC 3986) Online",
  metaDescription:
    "Free URL encoder / decoder. Convert special chars to percent-encoded %XX format (RFC 3986). Encode query strings, UTF-8 text, redirect URLs, UTM links. Decode %20 %26 %3D back to text. Matches encodeURIComponent. 100% client-side.",
  path: "/web-tools/url-encoder",

  header: {
    title: "URL Encoder Decoder",
    description:
      "Convert special characters, spaces, Unicode, and reserved symbols to URL-safe percent-encoding (%XX format per RFC 3986) and decode percent-encoded strings back to readable text — essential for building query strings, API parameters, redirect URLs, and UTM campaign links.",
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
    alternateName: [
      "URL Encoder",
      "URL Decoder",
      "Percent Encoding Tool",
      "URI Component Encoder",
      "Query String Encoder",
      "encodeURIComponent Tool",
      "decodeURIComponent Tool",
      "UTM Builder Helper",
      "Redirect URL Encoder",
      "API Parameter Encoder",
      "RFC 3986 Encoder",
      "UTF-8 URL Encoder",
      "Unicode URL Tool",
      "URL Escape Tool",
      "URL Sanitizer",
    ],
    featureList: [
      "Bi-directional: encode plain text → percent-encoded, or decode %XX → plain text",
      "RFC 3986 compliant percent-encoding",
      "UTF-8 multi-byte character support (emoji, Chinese, Arabic, accented chars)",
      "Live conversion as you type — instant feedback",
      "Two encoding modes: encodeURI (preserves /, ?, #) and encodeURIComponent (encodes everything)",
      "Iframe / batch mode for encoding multiple URLs at once",
      "Auto-detect: paste a URL and the tool figures out whether to encode or decode",
      "Copy result with one click",
      "Common substitutions reference: %20 (space), %2F (/), %3F (?), %26 (&), %3D (=), %23 (#)",
      "100% client-side — no data sent to servers",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "A URL Encoder/Decoder is a free tool that converts special characters in URLs to percent-encoded format (%XX) and decodes encoded URLs back to readable text.",
    quickAnswer:
      "Paste text to URL-encode it (spaces become %20, & becomes %26), or paste an encoded URL to decode it back to readable form. Essential for constructing query strings and debugging URL parameters.",
    keyTakeaways: [
      "Encodes special characters as %XX hex values per RFC 3986",
      "Space encodes as %20 (URL) or + (form data)",
      "Common encodings: & → %26, = → %3D, / → %2F, ? → %3F",
      "UTF-8 characters encode as multi-byte sequences (%E2%9C%93)",
      "Essential for building query strings, API calls, and redirect URLs",
    ],
    overview:
      "This free URL encoder and decoder converts text to URL-safe percent-encoded format and decodes percent-encoded strings back to readable characters — all in your browser with no server processing. Encode spaces (%20), ampersands (%26), equals signs (%3D), slashes (%2F), question marks (%3F), and any special or Unicode characters into RFC 3986-compliant percent-encoding for use in query strings, API request parameters, redirect URLs, OAuth callback URLs, and UTM campaign tracking links. The behavior matches JavaScript's encodeURIComponent() and decodeURIComponent() functions exactly. Decode URL-encoded strings from analytics tools, server logs, API responses, ad platform tracking URLs, and email marketing redirect chains to inspect the original human-readable values. Detect and fix double-encoding issues (%2520 instead of %20) that break links and corrupt tracking data.",

    howToSteps: [
      "Paste plain text, query parameter values, or Unicode characters into the Encode panel to convert them to URL-safe percent-encoded format (%XX hex values).",
      "Paste a percent-encoded URL string into the Decode panel to convert it back to human-readable text with all special characters restored.",
      "Review the output to verify correct encoding — check that spaces become %20, ampersands become %26, and UTF-8 characters produce proper multi-byte sequences.",
      "Copy the encoded or decoded result with one click for use in API requests, query strings, redirect URLs, analytics parameters, or application code.",
    ],

    features: [
      "RFC 3986-compliant percent-encoding for all reserved characters, special symbols, and Unicode text",
      "Full decoding of %XX hex sequences, multi-byte UTF-8 encodings, and mixed encoded/plain strings",
      "Live real-time encoding and decoding as you type — no submit button needed",
      "One-click copy for both encoded and decoded output ready for API calls, URLs, and code",
      "Matches JavaScript encodeURIComponent()/decodeURIComponent() behavior exactly",
      "100% client-side processing — your URLs and data never leave the browser",
    ],

    useCases: [
      "Encoding query parameter values with special characters before appending them to API endpoints and REST URLs",
      "Decoding percent-encoded redirect URLs from Google Ads, Facebook Ads, email marketing platforms, and analytics tracking links",
      "Debugging URL-encoded payload values in server logs, API request/response bodies, and webhook data",
      "Building UTM campaign tracking URLs with properly encoded utm_source, utm_medium, and utm_campaign parameter values",
      "Encoding file paths, search queries, and user input containing spaces, slashes, and Unicode characters for web applications",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          URL encoding (formally called percent-encoding) is defined in RFC 3986 as the standard method for representing special characters in Uniform Resource Identifiers (URIs). Every character that is not an unreserved character (A-Z, a-z, 0-9, hyphen, underscore, period, tilde) must be encoded as a percent sign followed by two hexadecimal digits representing the character&apos;s byte value. For example, a space becomes %20, an ampersand becomes %26, an equals sign becomes %3D, and a forward slash becomes %2F. UTF-8 Unicode characters encode as multi-byte sequences — a checkmark character becomes %E2%9C%93. This encoding ensures URLs remain valid across all browsers, servers, and network infrastructure without ambiguity.
        </p>
        <p>
          In web development, JavaScript provides encodeURIComponent() for encoding individual URL components (query parameter values, path segments) and encodeURI() for encoding complete URLs while preserving structural characters like ://?#. The critical distinction: always encode individual parameter values with encodeURIComponent(), never entire URLs, to avoid breaking URL structure. This online tool replicates encodeURIComponent/decodeURIComponent behavior in a visual interface for quick verification without opening browser DevTools or writing scripts. It is especially valuable for marketers building UTM-tagged campaign URLs, developers debugging API query strings, QA engineers verifying redirect chains, and analysts decoding tracking URLs from advertising platforms.
        </p>
      </div>
    ),

    proTip:
      "Always encode individual parameter values (using encodeURIComponent logic), never entire URLs. Encoding a complete URL converts structural characters like ://?#& into percent-encoded form, breaking the URL structure. If you see %2520 in your output, the value was double-encoded — decode once, fix the source, and re-encode only where needed.",

    faqs: [
      {
        question: "What is URL percent-encoding and how does it work?",
        answer:
          "Percent-encoding (defined in RFC 3986) replaces characters that are unsafe or reserved in URLs with a percent sign followed by two hexadecimal digits representing the character's byte value. For example, a space becomes %20, an ampersand becomes %26, and a question mark becomes %3F. This ensures URLs remain valid and parseable across all browsers, servers, and network infrastructure.",
      },
      {
        question: "What is the difference between encodeURIComponent and encodeURI in JavaScript?",
        answer:
          "encodeURIComponent() encodes all characters except unreserved characters (A-Z, a-z, 0-9, -, _, ., ~), making it ideal for encoding individual query parameter values. encodeURI() preserves URL structural characters like ://?#[]@!$&'()*+,;= and only encodes characters that are completely invalid in URLs. This tool follows encodeURIComponent() behavior for maximum encoding safety.",
      },
      {
        question: "Why does a space encode as %20 sometimes and + other times?",
        answer:
          "In standard URL percent-encoding (RFC 3986), spaces encode as %20. In application/x-www-form-urlencoded format (used by HTML form submissions), spaces encode as +. Most modern APIs and JavaScript's encodeURIComponent() use %20. If you see + in URLs, it's typically from form-encoded data or legacy systems.",
      },
      {
        question: "What is double URL encoding and how do I fix %2520 errors?",
        answer:
          "Double encoding occurs when an already-encoded string is encoded again. For example, a space (%20) gets re-encoded to %2520 because the % sign itself is encoded to %25. To fix this, decode the string once to get the single-encoded form, identify where the duplicate encoding occurs in your code pipeline, and ensure encoding happens only once at the output boundary.",
      },
      {
        question: "How do I encode Unicode and special characters in URLs?",
        answer:
          "Unicode characters are first converted to their UTF-8 byte representation, then each byte is percent-encoded. For example, the euro sign is encoded as %E2%82%AC (three UTF-8 bytes). This tool handles all Unicode characters automatically, producing correct multi-byte percent-encoded sequences.",
      },
      {
        question: "Can I use this tool to encode UTM parameters and campaign tracking URLs?",
        answer:
          "Yes. Encode individual UTM parameter values (utm_source, utm_medium, utm_campaign, utm_content, utm_term) that contain spaces, ampersands, or special characters before appending them to your tracking URL. This prevents broken analytics attribution and ensures Google Analytics, Adobe Analytics, and other platforms correctly parse your campaign data.",
      },
      {
        question: "Is this URL encoder decoder free and is my data stored?",
        answer:
          "Yes, completely free with no signup required. All encoding and decoding runs 100% client-side in your browser — your URLs, query strings, and data are never uploaded to any server or stored anywhere.",
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
