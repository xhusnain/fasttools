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
    "Free url parser online. Parse URLs into scheme, host, path, query string. url parser js, url parser python, url parser java. url query string parser with decode. No signup.",
  metaTitle: "URL Parser Online - Free Query String Parser, JS, Python, Java",
  metaDescription:
    "Free url parser online. Parse URLs into components. url parser js, url parser python, url parser java. url query string parser with decode. No signup.",
  path: "/web-tools/url-parser",

  header: {
    title: "URL Parser",
    description:
      "Parse URLs into scheme, host, path, query string, and hash. url query string parser with decoded parameters.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "URL Parser", href: "/web-tools/url-parser" },
  ],

  schemaOptions: {
    applicationCategory: "UtilitiesApplication",
    description:
      "Free url parser online. url parser js, url parser python, url parser java. url query string parser with decode.",
    alternateName: [
      "URL Parser Online",
      "URL Query String Parser",
      "URL Parser Tool",
    ],
    featureList: [
      "Parse URL into components",
      "url query string parser with decode",
      "Scheme, host, path, hash extraction",
      "url parser js, python, java compatible",
      "100% client-side, no signup",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    overview:
      "Free url parser online. Break down any URL into scheme, host, pathname, query string, and hash. url query string parser with decoded parameters. Works as url parser js, url parser python, url parser java alternative. url parser decode for readable query values. No signup.",

    howToSteps: [
      "Paste a URL in the input box. Full URLs or relative paths with query strings work.",
      "View parsed components: scheme, host, pathname, search, hash.",
      "Query parameters appear in a table with decoded key-value pairs.",
    ],

    features: [
      "Parse URL into scheme, host, pathname, port, hash",
      "url query string parser: extract and decode all query params",
      "url parser decode: human-readable query values",
      "url parser js, url parser python, url parser java compatible output",
      "Handles relative URLs (e.g. /path?foo=bar)",
      "100% client-side, no data sent to servers",
    ],

    useCases: [
      "url parser js: Same result as new URL() or url.parse() without writing code.",
      "url parser python: Alternative to urllib.parse.urlparse for quick checks.",
      "url parser java: Equivalent to java.net.URI without opening an IDE.",
      "url query string parser: Extract and decode query params for debugging or analysis.",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          A url parser breaks a URL into its components: scheme (http/https),
          host, pathname, query string, and hash. This url parser online uses the
          browser&apos;s URL API (same as url parser js) and produces output
          compatible with url parser python (urllib.parse) and url parser java
          (java.net.URI). The url query string parser decodes percent-encoded
          values for readability. Libraries like url parser npm (parse-url) and
          url parser github implementations offer similar functionality—this
          tool works in the browser with no installation.
        </p>
      </div>
    ),

    proTip:
      "Use this url parser online to debug redirect URLs, analyze tracking parameters, or extract query string values without writing url parser js or url parser python code.",

    faqs: [
      {
        question: "What is a URL parser?",
        answer:
          "A url parser breaks a URL into its components: scheme, host, pathname, query string, and hash. This url parser online does that instantly. Use it as a url parser js, url parser python, or url parser java alternative. The url query string parser shows decoded key-value pairs.",
      },
      {
        question: "What is the parse URL function?",
        answer:
          "In JavaScript, new URL(str) or URL.parse() parse URLs. In Python, urllib.parse.urlparse(). In Java, URI.create() or URL constructor. This url parser online provides the same result in your browser—no code needed. url parser decode for query params included.",
      },
      {
        question: "What do URLSearchParams do?",
        answer:
          "URLSearchParams parse and manage query string parameters. This url parser online extracts query params and decodes them—equivalent to url.searchParams in url parser js. The url query string parser table shows each key and decoded value.",
      },
      {
        question: "How do I use url parser online?",
        answer:
          "Paste any URL (full or relative) into the input. The url parser breaks it into scheme, host, path, query string, hash. Query parameters appear decoded in a table. Free url parser online, no signup.",
      },
      {
        question: "Is there a url parser npm or url parser github alternative?",
        answer:
          "Yes. url parser npm packages (e.g. parse-url) and url parser github implementations offer similar parsing. This url parser online runs in the browser—no npm install or GitHub clone. Same output as url parser js, url parser python, url parser java.",
      },
      {
        question: "Does this url parser decode query parameters?",
        answer:
          "Yes. The url parser decode step shows human-readable query values. Percent-encoded strings like %20 become spaces. The url query string parser table displays decoded key-value pairs.",
      },
    ],

    additionalContent: [
      {
        heading: "URL Parser Online — JS, Python, Java Compatible",
        content:
          "This url parser online produces output compatible with url parser js (URL API), url parser python (urllib.parse.urlparse), and url parser java (java.net.URI). Parse scheme, host, path, query, hash. The url query string parser decodes parameters. No url parser npm install or url parser github clone required.",
      },
      {
        heading: "URL Query String Parser with Decode",
        content:
          "The url query string parser extracts all parameters and decodes values. url parser decode makes %3D show as =, %26 as &amp;, etc. Ideal for debugging redirects, tracking params, or API URLs. Free url parser online.",
      },
      {
        heading: "URL Parser — No Installation",
        content:
          "Skip url parser npm, url parser github, or language-specific imports. This url parser online works in any browser. Same result as url parser js, url parser python, url parser java. url query string parser with url parser decode included.",
      },
    ],

    relatedTools: [
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "Escape HTML Entities", href: "/web-tools/html-escape" },
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
