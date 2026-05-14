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
  metaTitle: "URL Parser — Decode Protocol, Host, Query Params & UTM Tags",
  metaDescription:
    "Free URL parser. Break any URL into protocol, hostname, port, pathname, query parameters, and hash fragment per WHATWG URL Standard. Inspect UTM tags, debug OAuth callbacks, validate redirect chains. 100% client-side.",
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
    alternateName: [
      "URL Analyzer",
      "URL Breakdown Tool",
      "Query String Parser",
      "UTM Parameter Decoder",
      "URL Component Extractor",
      "URL Structure Inspector",
      "Link Analyzer",
      "WHATWG URL Parser",
      "OAuth Callback Inspector",
      "Redirect URL Debugger",
      "URL Search Params Reader",
      "URI Decoder",
      "Hash Fragment Parser",
      "URL Validator",
      "Query Param Inspector",
    ],
    featureList: [
      "Extracts protocol, hostname, port, pathname, search, hash, username, password, origin",
      "Query parameters parsed into a key-value table — each value decoded automatically",
      "Multi-value params (`?a=1&a=2`) shown correctly as arrays",
      "Hash fragment parsing — supports both `#anchor` and `#?key=value` forms",
      "UTM tag highlighter: utm_source / medium / campaign / content / term grouped together",
      "Compare-mode: paste two URLs to see what parameters differ",
      "Build mode: enter base + params separately, get reconstructed URL",
      "Encoding inspector: shows raw vs decoded value side-by-side",
      "WHATWG URL Standard compliant (same parsing your browser uses)",
      "100% client-side — URLs and their data never sent to servers",
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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">URL Structure (RFC 3986 + WHATWG)</h3>
          <p>A URL has up to 9 components in the standard pattern:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`scheme://username:password@host:port/path?query#fragment
\______/   \______/ \______/ \__/ \__/ \__/ \___/ \______/
   |          |        |       |    |    |    |      |
 https     user     pass    host port path query fragment`}</code>
          </pre>
          <p className="mt-3">Each component:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>scheme / protocol</strong> (https, http, ftp, ws, wss, file, mailto, tel): how to access the resource</li>
            <li><strong>userinfo</strong> (rare today): legacy auth in URL — Basic Auth credentials</li>
            <li><strong>host</strong> (domain or IP): server location</li>
            <li><strong>port</strong> (optional, default 443/80): server listening port</li>
            <li><strong>pathname</strong>: resource location on server (/api/v2/users/123)</li>
            <li><strong>query / search</strong>: key=value pairs separated by &amp;</li>
            <li><strong>fragment / hash</strong>: client-side anchor (#section-3); never sent to server</li>
            <li><strong>origin</strong> (derived): scheme + host + port — used for same-origin policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Parse URLs?</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>UTM campaign audit:</strong> verify utm_source, utm_medium, utm_campaign, utm_content, utm_term values are correctly set for Google Analytics</li>
            <li><strong>OAuth debugging:</strong> inspect redirect_uri, state, code parameters during auth flow</li>
            <li><strong>Redirect chain analysis:</strong> trace through 301/302 redirects, see what each step changed</li>
            <li><strong>API endpoint validation:</strong> verify pagination, filtering, sorting parameters are correctly formatted</li>
            <li><strong>SEO canonical checks:</strong> compare actual URLs vs canonical URLs vs sitemap URLs</li>
            <li><strong>Marketing attribution debug:</strong> trace which tracking params come from ad platforms vs your own</li>
            <li><strong>Webhook payload inspection:</strong> decode signed redirect URLs from Stripe, PayPal, etc.</li>
            <li><strong>Affiliate link tracking:</strong> see what affiliate IDs and tracking pixels are appended</li>
            <li><strong>Email tracking decode:</strong> Mailchimp, ConvertKit, ActiveCampaign wrap clicks in tracking URLs</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">UTM Parameters: The Marketing Standard</h3>
          <p>Google&apos;s Urchin Tracking Module (UTM) is the universal standard for marketing attribution. The five UTM parameters:</p>
          <table className="w-full border-collapse text-sm mt-3">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Parameter</th>
                <th className="text-left py-2 px-2 text-foreground">Purpose</th>
                <th className="text-left py-2 px-2 text-foreground">Example values</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>utm_source</code> <span className="text-red-500">*required</span></td>
                <td className="py-2 px-2">Where the traffic came from (referrer)</td>
                <td className="py-2 px-2">google, facebook, newsletter, partner_name</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>utm_medium</code></td>
                <td className="py-2 px-2">Marketing medium / channel type</td>
                <td className="py-2 px-2">cpc, email, social, organic, banner</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>utm_campaign</code></td>
                <td className="py-2 px-2">Specific campaign name</td>
                <td className="py-2 px-2">summer_sale, product_launch, q4_promo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>utm_content</code></td>
                <td className="py-2 px-2">A/B test variant or specific ad creative</td>
                <td className="py-2 px-2">banner_top, button_red, variant_a</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><code>utm_term</code></td>
                <td className="py-2 px-2">Paid keyword (mostly for Google Ads)</td>
                <td className="py-2 px-2">running+shoes, blue+widget</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3">
            <strong>Best practice:</strong> lowercase consistently (utm tags are case-sensitive!), no spaces (use + or _), keep concise. Audit your UTM strategy quarterly — inconsistent naming destroys Google Analytics reports.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Query Parameter Patterns</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Simple key=value:</strong> <code>?name=alice</code></li>
            <li><strong>Multiple values:</strong> <code>?tag=red&amp;tag=blue</code> — server may treat as array</li>
            <li><strong>Array syntax (PHP / Rails):</strong> <code>?tags[]=red&amp;tags[]=blue</code></li>
            <li><strong>Nested syntax:</strong> <code>?user[name]=alice&amp;user[age]=30</code></li>
            <li><strong>Comma-separated:</strong> <code>?tags=red,blue,green</code> — common in REST APIs</li>
            <li><strong>JSON-encoded value:</strong> <code>?filter=&#123;&quot;status&quot;:&quot;active&quot;&#125;</code> (after URL-encoding)</li>
            <li><strong>Boolean flags:</strong> <code>?active=true</code> or shorthand <code>?active</code></li>
            <li><strong>Empty value:</strong> <code>?key=</code> — usually means &quot;reset to default&quot;</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Hash / Fragment Use Cases</h3>
          <p>The hash (#) is special — it&apos;s the only URL part that never goes to the server. The browser keeps it client-side. Common uses:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Anchor links:</strong> <code>#section-3</code> — scroll to element with that ID</li>
            <li><strong>SPA routes:</strong> <code>#/users/123</code> — old client-side routing (pre-history API)</li>
            <li><strong>Tab state:</strong> <code>#settings</code> — track active tab without round-trip to server</li>
            <li><strong>OAuth implicit flow:</strong> tokens passed in fragment (e.g., <code>#access_token=xyz</code>) so they never reach server logs</li>
            <li><strong>Magic link verification:</strong> sometimes tokens placed in fragment for similar reasons</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common URL Bugs This Tool Catches</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Double encoding:</strong> <code>%2520</code> in your URL = space was encoded twice</li>
            <li><strong>Duplicate parameters:</strong> two <code>utm_source</code> entries — analytics tracks only one</li>
            <li><strong>Empty trailing query:</strong> <code>?</code> with no params is technically valid but indicates a bug</li>
            <li><strong>Wrong port:</strong> https on port 8080 won&apos;t work without specifying</li>
            <li><strong>Subdomain typos:</strong> <code>ww.example.com</code> vs <code>www.example.com</code></li>
            <li><strong>Trailing slashes:</strong> <code>/page</code> vs <code>/page/</code> — SEO-relevant duplicates</li>
            <li><strong>Mixed case in domain:</strong> <code>Example.com</code> works but creates inconsistency</li>
            <li><strong>Missing parameter values:</strong> <code>?key=</code> may indicate a templating bug</li>
            <li><strong>Wrong fragment syntax:</strong> <code>#</code> before <code>?</code> in URL — fragment must come last</li>
          </ul>
        </div>
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
