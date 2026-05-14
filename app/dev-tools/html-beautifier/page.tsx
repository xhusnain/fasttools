import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const HTMLBeautifier = dynamic(
  () => import("@/components/dev-tools/html-beautifier").then((mod) => mod.HTMLBeautifier),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTML Beautifier",
  description:
    "Format and minify HTML code for readability, debugging, and delivery optimization workflows.",
  metaTitle: "HTML Beautifier & Minifier — Pretty-Print or Compress HTML Online",
  metaDescription:
    "Free HTML beautifier and minifier. Format messy / minified HTML with proper indentation (2-space, 4-space, or tab) or compress to single-line for production. Handles inline scripts, styles, comments. 100% client-side, no upload.",
  path: "/dev-tools/html-beautifier",

  header: {
    title: "HTML Beautifier & Minifier",
    description:
      "Format minified or messy HTML into clean, readable code with proper indentation — or minify HTML for production. Customizable indent size (2/4 spaces or tabs). Runs entirely in your browser.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "HTML beautifier and minifier. Format messy or minified HTML with proper indentation, or compress to single-line for production. Handles inline JS / CSS, comments, void elements, self-closing tags. 100% client-side.",
    alternateName: [
      "HTML Formatter",
      "HTML Pretty Print",
      "HTML Indenter",
      "HTML Minifier",
      "HTML Compressor",
      "Format HTML Online",
      "Beautify HTML Code",
      "HTML Cleaner",
      "HTML Code Tidy",
      "Unminify HTML",
      "Decompress HTML",
      "HTML Source Formatter",
      "HTML Linter",
      "JSFiddle-style HTML Formatter",
      "HTML Tidy Alternative",
    ],
    featureList: [
      "Beautify mode: indent and line-break messy / minified HTML for readability",
      "Minify mode: strip whitespace, comments, and redundant attribute quotes for production",
      "Configurable indent: 2 spaces, 4 spaces, or tab",
      "Preserves inline `<script>` and `<style>` blocks correctly (no breaking JS / CSS)",
      "Handles HTML5 void elements (img, br, hr, input, meta, link) — no incorrect closing tags",
      "Preserves HTML comments by default; option to strip in minify mode",
      "Self-closing tag handling for XHTML / JSX compatibility",
      "Conditional comments (`<!--[if IE]>...<![endif]-->`) preserved",
      "Whitespace-sensitive elements (`<pre>`, `<textarea>`, `<code>`) keep their content untouched",
      "Live preview: see formatted output update as you type / paste",
      "Copy to clipboard or download as .html",
      "100% client-side — your HTML never leaves your browser",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "12340",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTML Beautifier is a free tool that formats and indents minified or messy HTML code into clean, readable markup with consistent indentation.",
    quickAnswer:
      "Paste unformatted HTML to instantly beautify it with proper indentation and line breaks. Customize indent size (2 or 4 spaces, tabs). Copy the formatted output or download it as an .html file.",
    keyTakeaways: [
      "Formats minified HTML into readable, properly indented code",
      "Customizable indentation: 2 spaces, 4 spaces, or tabs",
      "Preserves code structure without changing functionality",
      "Handles inline styles, scripts, and nested elements correctly",
      "Useful for debugging, code reviews, and cleaning up generated HTML",
    ],
    overview:
      "Format and clean up HTML code with this free online beautifier and minifier. Paste minified or messy HTML to instantly beautify it with proper indentation and line breaks — or minify clean HTML into a compact single line for production. Customize indentation (2 spaces, 4 spaces, or tabs). The beautifier preserves HTML structure without changing functionality, making it easy to read nested elements, debug tag issues, and review generated markup. All formatting runs locally in your browser — no data uploaded.",

    howToSteps: [
      "Paste HTML into the editor.",
      "Choose beautify or minify mode.",
      "Review output and confirm structure.",
      "Copy the formatted result into your project files.",
    ],

    features: [
      "Beautify and minify modes",
      "Fast code cleanup workflow",
      "Copy-friendly output",
      "Useful for debugging markup structure",
      "Browser-based formatting utility",
    ],

    useCases: [
      "Debugging nested markup",
      "Preparing HTML for code review",
      "Compressing templates for deployment",
      "Cleaning generated HTML from external editors",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Beautify vs Minify — When to Use Each</h3>
          <p>
            <strong>Beautify mode</strong> takes minified or messy HTML and adds line breaks + indentation to make it readable. Use it when: debugging a production page&apos;s HTML (View Source), reviewing markup from a CMS or generator, code review, learning from another site&apos;s HTML, fixing nested-tag issues. <strong>Minify mode</strong> strips whitespace, removes comments, and removes redundant attribute quotes to compress HTML for production. Use it when: preparing static HTML for deployment, optimizing email templates (every byte counts), reducing page weight for performance / SEO, generating HTML strings for embedding in JS/JSON.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Minification Saves (and Doesn&apos;t)</h3>
          <p>
            Typical HTML minification saves 20–40% of file size by removing whitespace, comments, and redundant quotes. <strong>However:</strong> if you serve HTML over gzip/brotli (which every modern server does), most of those savings disappear — compression already handles repeated whitespace efficiently. The real wins come from: (1) inline / static HTML in JSON payloads (where compression isn&apos;t applied), (2) email templates (no gzip), (3) HTML embedded in JavaScript strings, (4) data URIs containing HTML. For a normal HTTP-served webpage, minification reduces uncompressed size but barely affects compressed size — typically less than 1-2% gain over gzip. Still worth doing for performance hygiene; just don&apos;t expect dramatic results.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Preservation of Critical Elements</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Inline scripts (`&lt;script&gt;...&lt;/script&gt;`):</strong> contents preserved verbatim. JS is not parsed or modified — beautifying HTML doesn&apos;t beautify the JS inside.</li>
            <li><strong>Inline styles (`&lt;style&gt;...&lt;/style&gt;`):</strong> contents preserved verbatim. CSS is not parsed or modified.</li>
            <li><strong>Whitespace-sensitive elements:</strong> `&lt;pre&gt;`, `&lt;textarea&gt;`, `&lt;code&gt;` content kept untouched (whitespace is semantically meaningful there).</li>
            <li><strong>Conditional comments:</strong> `&lt;!--[if IE]&gt;...&lt;![endif]--&gt;` preserved exactly (still relevant for some legacy email templates).</li>
            <li><strong>Void elements:</strong> `&lt;img&gt;`, `&lt;br&gt;`, `&lt;hr&gt;`, `&lt;input&gt;`, `&lt;meta&gt;`, `&lt;link&gt;` are correctly handled as self-closing per HTML5 spec.</li>
            <li><strong>Tag case:</strong> preserved as written. Most stylesheets and JS rely on lowercase tags but the tool doesn&apos;t force-lowercase your input.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Debugging messy CMS output:</strong> WordPress, Drupal, and other CMSs often produce HTML with bizarre indentation</li>
            <li><strong>Reviewing minified production HTML:</strong> View Source on a competitor&apos;s page; paste here to read it</li>
            <li><strong>Cleaning up Word / Google Docs HTML:</strong> tons of inline styles and span tags need beautification to be readable</li>
            <li><strong>Email template development:</strong> beautify during dev, minify for sending</li>
            <li><strong>HTML in JSON strings:</strong> beautify before pasting into a JSON viewer; minify before sending in an API</li>
            <li><strong>JSX / Vue template prep:</strong> beautify HTML before converting to JSX (handles void elements correctly)</li>
            <li><strong>Code review for AI-generated HTML:</strong> LLM output often lacks consistent indentation</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy</h3>
          <p>
            All parsing, beautification, and minification happens locally in your browser. No data is sent to any server. Safe for proprietary templates, customer-specific HTML, or internal admin panel markup. Verify via DevTools → Network: zero outgoing requests.
          </p>
        </div>
      </div>
    ),

    proTip:
      "For debugging, set indent to 2 spaces (matches GitHub / VS Code defaults) — easier diffing later. For email templates, minify before sending: every byte matters in HTML emails since many clients don't apply compression. Don't minify HTML you'll later edit by hand — minified HTML is unreadable. Keep readable source in your repo, minify only in build / deploy.",

    faqs: [
      {
        question: "What is the difference between beautify and minify?",
        answer:
          "Beautify adds line breaks and indentation to make HTML readable (good for debugging, code review, learning). Minify removes whitespace, comments, and redundant quotes to compress HTML (good for production, email templates, embedded HTML in JSON). They're inverse operations — paste minified HTML, beautify to read, edit, then re-minify for deployment.",
      },
      {
        question: "Will minification break my HTML?",
        answer:
          "If done correctly, no — minification removes only insignificant whitespace and comments. Risks: (1) whitespace inside `<pre>` and `<textarea>` is preserved automatically; (2) inline JavaScript that depends on specific whitespace (rare but possible) could break — review JS-heavy templates after minification; (3) if you used HTML comments as template delimiters (e.g., conditional comments for IE or some email clients), make sure 'preserve conditional comments' is enabled.",
      },
      {
        question: "Will beautification change the rendered output?",
        answer:
          "Almost never. HTML rendering treats consecutive whitespace as a single space in most contexts, so adding line breaks for readability doesn't change the visual output. Exceptions: content inside `<pre>`, `<textarea>`, `<code>` where whitespace is preserved. The tool handles these correctly.",
      },
      {
        question: "Can I beautify HTML with mixed languages (PHP, Twig, Liquid)?",
        answer:
          "Yes — the tool preserves template delimiters like `<?php ?>`, `{{ var }}`, `{% if %}`, `<%= %>` as text inside the HTML. They're treated as opaque content. This means beautifying a PHP/Liquid/Twig template won't break the templating; it just formats the surrounding HTML. Caveat: complex inline template logic mixed with HTML attributes (rare) may produce odd indentation.",
      },
      {
        question: "Should I commit minified HTML to source control?",
        answer:
          "No — keep readable source HTML in your repo. Minify only as a build step (using webpack-html-minifier, htmlmin, or similar). This way: (1) diffs are reviewable, (2) you can edit easily, (3) the build is deterministic. The 'commit beautified, deploy minified' pattern is standard.",
      },
      {
        question: "Can this help find unclosed tags or invalid nesting?",
        answer:
          "Yes — beautified HTML makes structural problems obvious. If a `</div>` is missing, the indentation cascades incorrectly and you'll spot it immediately. The tool doesn't strictly validate (use a dedicated HTML validator like the W3C validator for that), but the visual structure of beautified output is the fastest way to find malformed nesting.",
      },
      {
        question: "Is my HTML data private?",
        answer:
          "Yes — completely. All formatting runs in your browser. Your HTML, including any proprietary code, customer data, or internal admin panel markup, never leaves your device. Safe for confidential content. Verify in DevTools → Network: zero outgoing requests.",
      },
    ],

    relatedTools: [
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "HTML Escape", href: "/web-tools/html-escape" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlBeautifierPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HTMLBeautifier />
        </div>
      )}
    />
  )
}
