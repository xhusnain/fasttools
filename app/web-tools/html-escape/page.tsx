import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const HtmlEscape = dynamic(
  () =>
    import("@/components/web-tools/html-escape").then((mod) => mod.HtmlEscape),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTML Escape Unescape",
  description:
    "Escape special HTML characters to entities and unescape entities back to plain text.",
  metaTitle: "HTML Escape & Unescape — Convert HTML Entities (XSS-Safe)",
  metaDescription:
    "Free HTML escape / unescape tool. Convert special characters &lt; &gt; &amp; &quot; &apos; to / from safe HTML entities. For XSS prevention, code snippet display, template debugging. Supports named, numeric, and hex entities. 100% client-side.",
  path: "/web-tools/html-escape",

  header: {
    title: "HTML Escape Unescape",
    description:
      "Convert special HTML characters like <, >, &, double quotes, and apostrophes to safe HTML entities (&lt; &gt; &amp;) for XSS prevention and code display — or decode HTML entities back to readable plain text for content migration and template debugging.",
    titleSize: "medium",
    descriptionSize: "small",
  },

  breadcrumbs: [
    { label: "Web Tools", href: "/web-tools" },
    { label: "HTML Escape Unescape", href: "/web-tools/html-escape" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Escape and unescape HTML entities in-browser for safe output rendering.",
    alternateName: [
      "HTML Entity Encoder",
      "HTML Entity Decoder",
      "HTML Entities Converter",
      "Escape HTML Online",
      "HTML Special Chars Tool",
      "XSS Sanitizer",
      "Code Snippet Display Helper",
      "&lt; &gt; &amp; Converter",
      "Unicode HTML Entities",
      "HTML Encode Tool",
      "HTML Decode Tool",
      "Mothereff HTML Alternative",
      "Online HTML Escaper",
      "Email Template Encoder",
      "Documentation Code Embedder",
    ],
    featureList: [
      "Escape: convert special chars (`<`, `>`, `&`, `\"`, `'`) to HTML entities",
      "Unescape: decode HTML entities back to original characters",
      "Support for named entities (`&amp;`, `&copy;`, `&trade;`)",
      "Numeric character references: decimal (`&#60;`) and hex (`&#x3C;`)",
      "Unicode-aware: handles non-ASCII chars correctly",
      "Live conversion as you type — instant feedback",
      "Auto-detect: paste text and the tool figures out direction",
      "Bulk mode: paste a long block, get the full converted output",
      "XSS-safety mode: encodes everything needed to display user input safely",
      "Code snippet mode: encodes only what's needed to display in `<pre>` blocks",
      "100% client-side — text never sent to a server",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },

  content: {
    definition:
      "An HTML Escape Tool is a free tool that converts special characters (<, >, &, \", ') into HTML entities and decodes HTML entities back to their original characters.",
    quickAnswer:
      "Paste text containing HTML special characters to escape them into safe entity codes (&lt; &gt; &amp;), or paste escaped HTML to decode it back to readable characters. Essential for displaying code snippets in web pages.",
    keyTakeaways: [
      "Escapes < > & \" ' to their HTML entity equivalents",
      "Decodes HTML entities (&lt; &amp; &#39;) back to original characters",
      "Prevents XSS attacks by escaping user input before rendering",
      "Essential when embedding code snippets in HTML pages or blog posts",
      "Supports both named entities (&amp;) and numeric entities (&#38;)",
    ],
    overview:
      "This free HTML escape and unescape tool converts reserved HTML characters into safe entity codes and decodes HTML entities back to their original characters — all in your browser with zero server processing. Escape angle brackets (<, >), ampersands (&), double quotes, and single quotes into their HTML entity equivalents (&lt;, &gt;, &amp;, &quot;, &#39;) to prevent cross-site scripting (XSS) vulnerabilities when rendering user-generated content. Display code snippets safely inside blog posts, documentation pages, and CMS templates without triggering browser parsing. The unescape mode reverses the process, converting entity-encoded strings from API responses, database exports, or email templates back into human-readable text. Supports both named entities (&amp;) and numeric entities (&#38;, &#x26;) for complete HTML encoding and decoding coverage.",

    howToSteps: [
      "Paste raw HTML, code snippets, or user-generated content into the Escape panel to convert all special characters (<, >, &, quotes) into safe HTML entities.",
      "Paste entity-encoded strings from APIs, databases, or email templates into the Unescape panel to decode them back into readable plain text.",
      "Review the converted output to verify all angle brackets, ampersands, and quotation marks are properly encoded or decoded.",
      "Copy the result with one click for use in HTML templates, CMS content fields, blog posts, or application code.",
    ],

    features: [
      "Escapes all five HTML-reserved characters: < > & \" ' to their entity equivalents",
      "Unescapes both named entities (&amp;, &lt;) and numeric entities (&#38;, &#x26;) back to original characters",
      "Bidirectional escape/unescape conversion in a single interface with live preview",
      "One-click copy for paste-ready output in HTML templates, React JSX, and CMS editors",
      "100% client-side processing — your code and content never leave the browser",
      "Handles multi-line input including full HTML documents, JSON with HTML, and code blocks",
    ],

    useCases: [
      "Preventing XSS attacks by escaping user-generated content before rendering in HTML pages and web applications",
      "Displaying code snippets with angle brackets and ampersands safely inside blog posts, tutorials, and documentation",
      "Decoding HTML entities from API responses, database exports, and RSS feeds during content migration workflows",
      "Debugging double-encoding issues (&amp;lt;) in CMS templates, email HTML, and server-rendered markup",
      "Preparing escaped HTML strings for embedding in JSON payloads, XML feeds, and JavaScript template literals",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <p>
          HTML escaping (also called HTML encoding or entity encoding) is a critical web security practice that converts characters with special meaning in HTML markup into their entity representations. The five core characters that must be escaped are: less-than (&lt; to &amp;lt;), greater-than (&gt; to &amp;gt;), ampersand (&amp; to &amp;amp;), double quote (&quot; to &amp;quot;), and single quote/apostrophe (&apos; to &amp;#39;). Without proper escaping, user-submitted content containing these characters can be interpreted as HTML tags or JavaScript, creating cross-site scripting (XSS) vulnerabilities — one of the OWASP Top 10 security risks.
        </p>
        <p>
          HTML unescaping (decoding) reverses the process, converting entity-encoded strings back to their original characters. This is essential when processing content from APIs that return HTML-encoded data, migrating content between CMS platforms, parsing RSS/Atom feeds, or debugging rendering issues where entities appear as literal text (e.g., users see &amp;amp; instead of &amp;). Modern frameworks like React, Angular, and Vue auto-escape by default, but understanding manual escaping remains crucial for raw HTML output, dangerouslySetInnerHTML contexts, server-side rendering, and email template development.
        </p>
      </div>
    ),

    proTip:
      "Always escape at the output boundary (right before rendering), not at input storage. This preserves raw data integrity and prevents double-encoding issues. If you see &amp;amp;lt; in your output, the content was likely escaped twice — decode once and re-escape only at the final render point.",

    faqs: [
      {
        question: "What is HTML escaping and which characters need to be escaped?",
        answer:
          "HTML escaping converts the five reserved HTML characters — < (less-than), > (greater-than), & (ampersand), \" (double quote), and ' (apostrophe) — into their entity equivalents (&lt;, &gt;, &amp;, &quot;, &#39;). This ensures browsers display them as visible text instead of interpreting them as HTML markup or JavaScript code.",
      },
      {
        question: "How does HTML escaping prevent XSS (cross-site scripting) attacks?",
        answer:
          "XSS attacks inject malicious scripts through unescaped user input rendered in HTML. When you escape characters like < and > into &lt; and &gt;, the browser displays them as text instead of executing them as script tags. This is a foundational defense layer recommended by OWASP for all web applications handling user-generated content.",
      },
      {
        question: "What is the difference between named HTML entities and numeric entities?",
        answer:
          "Named entities use human-readable labels like &amp;, &lt;, and &quot;. Numeric entities use decimal (&#38;) or hexadecimal (&#x26;) code points. Both produce the same output in browsers. This tool supports decoding all three formats back to their original characters.",
      },
      {
        question: "When should I unescape (decode) HTML entities back to plain text?",
        answer:
          "Unescape when processing API responses that return HTML-encoded data, migrating content between CMS platforms, parsing RSS or Atom feed content, debugging email templates that display entities as literal text, or comparing text that has been entity-encoded during storage or transmission.",
      },
      {
        question: "What is double encoding and how do I fix &amp;amp;lt; appearing in my HTML?",
        answer:
          "Double encoding occurs when already-escaped content gets escaped again, producing patterns like &amp;amp;lt; instead of &lt;. To fix this, decode the text once to restore the single-escaped form, then ensure your application only escapes at the final rendering boundary — not during storage or intermediate processing steps.",
      },
      {
        question: "Do React, Angular, and Vue automatically escape HTML entities?",
        answer:
          "Yes, modern frameworks auto-escape content rendered through standard bindings (JSX expressions in React, interpolation in Angular/Vue). However, escape bypasses like dangerouslySetInnerHTML, [innerHTML], and v-html render raw HTML without escaping, making manual escaping necessary for any user-controlled content passed through these APIs.",
      },
      {
        question: "Is this HTML escape and unescape tool free to use?",
        answer:
          "Yes, completely free with no signup, no ads, and no usage limits. All encoding and decoding runs 100% client-side in your browser — your HTML code, content, and sensitive data are never sent to any external server.",
      },
    ],

    additionalContent: [
      {
        heading: "Characters Commonly Escaped",
        content:
          "Most workflows at minimum escape `<`, `>`, `&`, double quotes, and apostrophes. Depending on context, additional characters may also be encoded using numeric entities.",
      },
      {
        heading: "Developer Workflow Tip",
        content:
          "If rendering still looks wrong after escaping, inspect whether content was escaped twice. Double-escaped text often appears with `&amp;lt;` patterns.",
      },
    ],

    relatedTools: [
      { name: "URL Encoder Decoder", href: "/web-tools/url-encoder" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "All Web Tools", href: "/web-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlEscapePage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HtmlEscape />
        </div>
      )}
    />
  )
}
