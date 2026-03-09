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
  metaTitle: "URL Parser — Break Down URLs into Components & Query Parameters Free (2026)",
  metaDescription:
    "Parse any URL into protocol, hostname, port, path, query parameters, and hash fragment. Decode query strings, inspect UTM tags, debug redirects, and validate API endpoints — free online URL analyzer.",
  path: "/web-tools/url-parser",

  header: {
    title: "URL Parser",
    description:
      "Break down any URL into its individual components — protocol, hostname, port, pathname, query string parameters, and hash fragment — following the WHATWG URL Standard. Decode percent-encoded query values, inspect UTM campaign tags, debug API endpoints and OAuth callback URLs, and validate redirect chains.",
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
    definition:
      "A URL Parser is a free tool that breaks down any URL into its individual components: protocol, hostname, port, path, query parameters, and fragment.",
    quickAnswer:
      "Paste any URL to instantly see it broken down into protocol, host, port, pathname, search parameters, and hash fragment. Each query parameter is displayed as a key-value pair. Useful for debugging redirects and API endpoints.",
    keyTakeaways: [
      "Parses URLs into protocol, hostname, port, path, query, and fragment",
      "Displays each query parameter as a separate key-value pair",
      "Follows the WHATWG URL Standard used by all modern browsers",
      "Handles encoded characters, special characters, and Unicode in URLs",
      "Essential for debugging API endpoints, redirects, and deep links",
    ],
    overview:
      "This free online URL parser breaks down any URL into its standardized components following the WHATWG URL Standard used by all modern browsers. Paste any URL to instantly see it decomposed into protocol (http/https/ftp), hostname and subdomain, port number, pathname, search query string, and hash fragment. Each query parameter is extracted and displayed as a separate decoded key-value pair, making it easy to inspect UTM campaign tags (utm_source, utm_medium, utm_campaign), API request parameters, OAuth callback URL state values, and advertising tracking parameters. The parser handles percent-encoded characters, Unicode URLs, internationalized domain names (IDN), relative URLs, deep links, and complex nested query structures. Essential for web developers debugging API endpoints, SEO specialists auditing canonical URLs and redirect chains, marketers verifying campaign tracking parameters, and QA engineers validating URL structures before production deployment.",

    howToSteps: [
      "Paste any full URL (https://example.com/path?key=value#section) or relative URL (/path?query=data) into the parser input field.",
      "Review the parsed URL components: protocol/scheme, hostname, port, pathname, origin, search string, and hash fragment displayed in a structured breakdown.",
      "Inspect each query parameter as a decoded key-value pair in the parameter table — percent-encoded values are automatically decoded to readable text.",
      "Verify UTM tags, API parameters, redirect URLs, or OAuth state values are correctly structured before deployment or campaign launch.",
      "Copy individual components or the full parsed breakdown for use in documentation, bug reports, or team communication.",
    ],

    features: [
      "Parses URLs into protocol, hostname, port, pathname, search query, hash fragment, and origin per WHATWG URL Standard",
      "Extracts and decodes all query parameters into a readable key-value table with percent-decoding applied automatically",
      "Validates URL structure and highlights malformed input with specific error indicators",
      "Handles percent-encoded characters, UTF-8 Unicode, internationalized domain names, and complex nested parameters",
      "Supports both absolute URLs (https://...) and relative URLs (/path?query) with full component extraction",
      "100% client-side parsing — your URLs are never sent to external servers",
    ],

    useCases: [
      "Debugging broken links, 301/302 redirect chains, and malformed URL structures in web applications",
      "Auditing UTM campaign tracking parameters (utm_source, utm_medium, utm_campaign) for Google Analytics and marketing attribution accuracy",
      "Inspecting OAuth 2.0 callback URLs, authorization code parameters, and state values during authentication flow debugging",
      "Validating API endpoint URL structures, query string formats, and encoded parameter values before production deployment",
      "SEO auditing of canonical URLs, hreflang URLs, and sitemap link structures for crawl consistency",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          A URL (Uniform Resource Locator) follows a standardized structure defined by RFC 3986 and the WHATWG URL Standard. Every URL consists of up to seven components: scheme/protocol (https, http, ftp), authority containing hostname and optional port (example.com:8080), pathname (/api/v2/users), query string (?page=1&amp;limit=50), and fragment/hash (#section-3). Each component serves a specific purpose in resource identification and navigation. This parser decomposes any URL into these individual parts using the same URL API that modern browsers use internally, ensuring parsing behavior matches real-world browser interpretation.
        </p>
        <p>
          Query string parsing is particularly valuable because query parameters frequently contain percent-encoded special characters, nested values, array syntax (key[]=value), and multi-level data structures. This tool decodes each parameter value automatically, making it easy to verify UTM campaign tags for marketing attribution, inspect API pagination and filter parameters, validate OAuth redirect URIs and state tokens, audit SEO canonical parameters, and debug tracking pixels from advertising platforms. The visual breakdown eliminates the need to manually parse long URLs in a text editor or write throwaway scripts to extract specific parameter values.
        </p>
      </div>
    ),

    proTip:
      "When auditing campaign URLs, always check both the raw encoded query string and the decoded parameter values. A common mistake is encoding the entire URL instead of just parameter values, which turns structural characters (?&=) into encoded equivalents and breaks the link. Also watch for duplicate parameters (two utm_source entries) and trailing question marks with empty query strings.",

    faqs: [
      {
        question: "What are the components of a URL and what does each part mean?",
        answer:
          "A URL has up to seven components: protocol/scheme (https), hostname (www.example.com), port (443), pathname (/api/users), query string (?id=123&sort=name), and fragment/hash (#section). The origin combines protocol + hostname + port. This parser extracts and labels each component following the WHATWG URL Standard used by all modern browsers.",
      },
      {
        question: "How do I decode and inspect query string parameters from a URL?",
        answer:
          "Paste the full URL into the parser and each query parameter is automatically extracted as a decoded key-value pair. Percent-encoded characters like %20 (space), %26 (ampersand), and %3D (equals) are decoded to their original values, making UTM tags, API parameters, and tracking values easy to read and verify.",
      },
      {
        question: "Can this URL parser handle relative URLs, deep links, and Unicode domains?",
        answer:
          "Yes. The parser supports absolute URLs (https://...), relative paths (/page?query=value), protocol-relative URLs (//example.com), internationalized domain names (IDN) with Unicode characters, and mobile deep link schemes (myapp://). Component extraction adapts to the URL format provided.",
      },
      {
        question: "How do SEO specialists use a URL parser for auditing canonical URLs and redirects?",
        answer:
          "SEO teams parse canonical URLs to verify correct protocol, hostname, pathname, and query parameter inclusion. For redirect audits, parsing the destination URL reveals whether parameters are preserved, paths are mapped correctly, and no duplicate or orphaned query strings exist. This prevents crawl issues, duplicate content, and lost analytics attribution.",
      },
      {
        question: "How do I verify UTM campaign tracking parameters using this URL parser?",
        answer:
          "Paste your campaign URL to see each UTM parameter (utm_source, utm_medium, utm_campaign, utm_content, utm_term) displayed as separate decoded key-value pairs. Check for typos, missing required parameters, incorrect encoding, duplicate keys, and parameter values that don't match your campaign naming conventions — all common causes of broken marketing attribution.",
      },
      {
        question: "What is the WHATWG URL Standard and how does it affect URL parsing?",
        answer:
          "The WHATWG URL Standard is the specification used by all modern browsers (Chrome, Firefox, Safari, Edge) to parse URLs. It defines how ambiguous URLs are resolved, how encoding is handled, and how edge cases like missing schemes or unusual port numbers are interpreted. This parser follows the same standard, so parsed output matches real browser behavior exactly.",
      },
      {
        question: "Is this URL parser free and is my data stored?",
        answer:
          "Yes, completely free with no signup required. All URL parsing runs 100% client-side in your browser using the built-in URL API — your URLs and their query parameters are never transmitted to any server or stored anywhere.",
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
