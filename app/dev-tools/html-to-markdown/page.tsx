import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

const HTMLToMarkdown = dynamic(
  () => import("@/components/dev-tools/html-to-markdown").then((mod) => mod.HTMLToMarkdown),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "HTML to Markdown Converter",
  description:
    "Convert HTML markup into Markdown format for documentation and content migration workflows.",
  metaTitle: "HTML to Markdown Converter — Web Pages to Clean .md Syntax",
  metaDescription:
    "Free HTML to Markdown converter. Convert articles, blog posts, CMS exports to clean Markdown (CommonMark / GFM). Preserves headings, links, images, tables, lists, code blocks. Perfect for migrating WordPress / Notion / Google Docs to .md.",
  path: "/dev-tools/html-to-markdown",

  header: {
    title: "HTML to Markdown Converter",
    description:
      "Convert HTML to clean Markdown syntax instantly. Handles headings, paragraphs, links, images, tables, lists, and code blocks. Perfect for migrating CMS content, creating README files, and markdown-first publishing.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "HTML to Markdown converter — transforms rich HTML (articles, posts, CMS exports) to CommonMark / GitHub-Flavored Markdown. Preserves headings, links, images, tables, lists, blockquotes, code blocks, inline formatting. 100% client-side.",
    alternateName: [
      "HTML to MD Converter",
      "HTML to GFM Converter",
      "HTML to CommonMark",
      "Web Page to Markdown",
      "WordPress to Markdown",
      "Notion HTML to Markdown",
      "Google Docs to Markdown",
      "CMS to Markdown",
      "README Generator from HTML",
      "Article to Markdown",
      "Turndown Online",
      "html2md Converter",
      "Wikipedia to Markdown",
      "Markdown Migration Tool",
      "Blog Post to Markdown",
    ],
    featureList: [
      "Heading conversion: `<h1>` → `# `, `<h2>` → `## `, etc., up to `<h6>`",
      "Link preservation: `<a href=\"url\">text</a>` → `[text](url)` with reference-style option",
      "Image conversion: `<img>` → `![alt](src)` with title attribute support",
      "List handling: `<ul>` / `<ol>` → bullet / numbered Markdown lists (nested correctly)",
      "Table conversion: `<table>` → GFM pipe table (alignment preserved when possible)",
      "Code block preservation: `<pre><code class=\"language-js\">` → fenced code blocks with language hint",
      "Inline formatting: `<strong>` `<b>` → **bold**, `<em>` `<i>` → *italic*, `<code>` → `code`",
      "Blockquote conversion: `<blockquote>` → `> ` prefixed lines",
      "Horizontal rules: `<hr>` → `---`",
      "Strips inline styles, scripts, classes, data-* attributes (HTML noise)",
      "GFM extensions: task lists, strikethrough, autolinks supported",
      "100% client-side — your HTML content never leaves your browser",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "9870",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "An HTML to Markdown Converter is a free tool that transforms HTML content into clean Markdown syntax for use in documentation, READMEs, and content management systems.",
    quickAnswer:
      "Paste HTML to instantly convert it to Markdown. The tool handles headings, paragraphs, links, images, lists, tables, and code blocks. Copy the Markdown output for use in GitHub, Notion, or any Markdown editor.",
    keyTakeaways: [
      "Converts HTML tags to equivalent Markdown syntax",
      "Handles <h1>–<h6>, <a>, <img>, <ul>, <ol>, <table>, and <code>",
      "Strips unnecessary HTML attributes and inline styles",
      "Preserves code blocks and preformatted text",
      "Useful for migrating CMS content to Markdown-based platforms",
    ],
    overview:
      "Convert HTML to Markdown instantly with this free online converter. Paste HTML source code and get clean Markdown output that preserves headings, paragraphs, links, images, lists, tables, and code blocks. The converter strips unnecessary HTML attributes and inline styles while preserving the document structure. Perfect for migrating content from WordPress, Drupal, or other CMS platforms to Markdown-based systems like GitHub, Notion, Docusaurus, or Next.js MDX. Copy the Markdown output with one click.",

    howToSteps: [
      "Paste HTML content into the converter input.",
      "Run conversion to generate Markdown output.",
      "Review headings, links, and list formatting.",
      "Copy the Markdown into your docs or content repository.",
    ],

    features: [
      "HTML-to-Markdown conversion workflow",
      "Fast copy-and-paste output",
      "Useful for docs and CMS migrations",
      "Supports common structure translation",
      "Browser-based utility",
    ],

    useCases: [
      "Migrating legacy HTML docs",
      "Converting CMS exports to markdown",
      "Preparing README/source-doc content",
      "Editorial workflow standardization",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Markdown? Why Convert?</h3>
          <p>
            Markdown has won as the de facto format for technical writing — GitHub READMEs, documentation sites (Docusaurus, MkDocs, Next.js MDX), static blogs (Hugo, Jekyll, Astro), note-taking apps (Notion, Obsidian, Bear), and even some publishing platforms (Ghost, Hashnode) all use it as their native format. <strong>HTML is the legacy.</strong> If your content is locked in HTML — WordPress exports, old CMS pages, scraped articles, Google Docs &quot;Publish to Web&quot; output — converting to Markdown unlocks portability: paste into any platform, edit in any text editor, version-control in Git, and apply text-processing tools (grep, sed, scripts) that don&apos;t work on HTML.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Conversion Mapping</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">HTML</th>
                <th className="text-left py-2 px-2 text-foreground">Markdown</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;h1&gt;Title&lt;/h1&gt;</code></td>
                <td className="py-2 px-2"><code># Title</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;h2&gt;Section&lt;/h2&gt;</code></td>
                <td className="py-2 px-2"><code>## Section</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;strong&gt;bold&lt;/strong&gt;</code></td>
                <td className="py-2 px-2"><code>**bold**</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;em&gt;italic&lt;/em&gt;</code></td>
                <td className="py-2 px-2"><code>*italic*</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;a href=&quot;url&quot;&gt;text&lt;/a&gt;</code></td>
                <td className="py-2 px-2"><code>[text](url)</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;img src=&quot;url&quot; alt=&quot;a&quot;&gt;</code></td>
                <td className="py-2 px-2"><code>![a](url)</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;code&gt;inline&lt;/code&gt;</code></td>
                <td className="py-2 px-2"><code>`inline`</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;pre&gt;&lt;code&gt;block&lt;/code&gt;&lt;/pre&gt;</code></td>
                <td className="py-2 px-2">```<br/>block<br/>```</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;ul&gt;&lt;li&gt;item&lt;/li&gt;&lt;/ul&gt;</code></td>
                <td className="py-2 px-2"><code>- item</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;ol&gt;&lt;li&gt;item&lt;/li&gt;&lt;/ol&gt;</code></td>
                <td className="py-2 px-2"><code>1. item</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;blockquote&gt;...&lt;/blockquote&gt;</code></td>
                <td className="py-2 px-2"><code>&gt; ...</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2"><code>&lt;table&gt;</code></td>
                <td className="py-2 px-2">GFM pipe table</td>
              </tr>
              <tr>
                <td className="py-2 px-2"><code>&lt;hr&gt;</code></td>
                <td className="py-2 px-2"><code>---</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Migration Scenarios</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>WordPress → static site:</strong> export posts as HTML, paste here, get .md files ready for Hugo / Jekyll / Astro / Next.js MDX</li>
            <li><strong>Drupal / Joomla / Ghost → GitHub Pages:</strong> CMS export → bulk HTML → Markdown</li>
            <li><strong>Google Docs → README:</strong> File → Download → Web Page (.html); paste here; copy Markdown for GitHub</li>
            <li><strong>Notion → Obsidian:</strong> Notion Export → HTML format → convert here → import to Obsidian</li>
            <li><strong>Confluence → MkDocs:</strong> page export → HTML to Markdown conversion → MkDocs YAML structure</li>
            <li><strong>Scraped article → research notes:</strong> View Source on any article, paste here, get plain Markdown for note-taking</li>
            <li><strong>Email newsletter → blog post:</strong> Mailchimp / ConvertKit export → strip newsletter chrome → Markdown for blog</li>
            <li><strong>Web archive cleanup:</strong> wayback-machine HTML → readable Markdown</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Gets Stripped (and Why)</h3>
          <p>
            The converter removes HTML noise that has no Markdown equivalent: <code>class</code>, <code>id</code>, <code>style</code>, <code>data-*</code> attributes, inline JavaScript (<code>onclick</code> etc.), <code>&lt;script&gt;</code>, <code>&lt;style&gt;</code>, <code>&lt;link&gt;</code>, custom elements. This is intentional — Markdown is supposed to be portable plain text. If you absolutely need a class or style, Markdown allows inline HTML — paste raw HTML directly into the .md file and most renderers will respect it (with some caveats for security). For most content migrations, the stripped output is what you want.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Limits and Quality Tips</h3>
          <p>
            Markdown is intentionally simpler than HTML, so some HTML constructs don&apos;t map cleanly: <strong>complex nested tables</strong> (Markdown tables are flat — no rowspan / colspan), <strong>custom CSS layouts</strong> (Markdown has no styling), <strong>iframes and embeds</strong> (most Markdown renderers strip them for security), <strong>deeply nested lists</strong> (Markdown supports nesting but renderers vary). For these, the tool falls back to inline HTML inside the Markdown, which most renderers accept. After conversion, do a quick review for: edge cases like nested tables, custom HTML widgets, embedded media (YouTube, Twitter), and any CMS-specific shortcodes (often surrounded by `[ ]` brackets and treated as text).
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy</h3>
          <p>
            All HTML parsing and Markdown generation runs in your browser. Your content — including any draft articles, private notes, customer-facing HTML — never reaches a server. Safe for confidential content. Verify in DevTools → Network: zero outgoing requests.
          </p>
        </div>
      </div>
    ),

    proTip:
      "After conversion, treat the output as a first draft. Manually review: (1) tables — Markdown can't do rowspan/colspan, so complex tables may need restructuring. (2) Embedded content like YouTube videos / tweets — Markdown can't natively embed them; consider Hugo shortcodes or MDX components. (3) Inline styles — Markdown is style-agnostic; if you depended on a specific visual layout, you'll need CSS in your site theme or convert to MDX. For bulk migration (100+ pages), script this with turndown.js or pandoc rather than pasting one-by-one.",

    faqs: [
      {
        question: "Will all HTML tags convert perfectly?",
        answer:
          "Common tags (headings, paragraphs, links, images, lists, code, blockquotes, tables) convert reliably. Edge cases needing review: nested tables (Markdown tables are flat), custom widgets, embedded media (YouTube/Twitter — Markdown can't embed natively), and CMS shortcodes. The tool falls back to inline HTML inside the .md file when needed; most renderers accept that.",
      },
      {
        question: "Does it support GitHub-Flavored Markdown (GFM)?",
        answer:
          "Yes — by default. GFM extensions output: pipe tables, fenced code blocks with language hints, task lists (`- [ ]` and `- [x]`), strikethrough (~~text~~), autolinks. The output works in GitHub README, GitHub Issues / PRs, GitHub Pages with Jekyll, and any GFM-compatible renderer.",
      },
      {
        question: "Can I use this for README preparation from a web page?",
        answer:
          "Yes — common workflow: find a well-written article or doc, copy the HTML (View Source or DevTools), paste here, copy the Markdown output to README.md. Clean up the result by removing site-specific elements (navigation, footer) — the converter strips most HTML noise but keeps the main content structure.",
      },
      {
        question: "Does this support links, lists, and tables?",
        answer:
          "Yes — fully. Links become `[text](url)`, ordered/unordered lists with proper nesting, tables become GFM pipe tables with alignment preserved when possible. Inline formatting (bold, italic, code) is converted to standard Markdown syntax.",
      },
      {
        question: "Should I keep original HTML after conversion?",
        answer:
          "For one-time conversions: no need. For ongoing migration projects: yes — keep the HTML source as a fallback in case you need to re-convert with different options or compare during editing. Version-control both HTML/ and content/ directories during the migration phase.",
      },
      {
        question: "Can this help with static site migrations (Hugo / Jekyll / Astro / Next.js)?",
        answer:
          "Yes — perfectly suited. Static site generators consume Markdown files. Export your content from the old CMS as HTML, batch-convert to Markdown, add frontmatter (`---\\ntitle: ...\\ndate: ...\\n---`) at the top of each file, drop into your /content directory. For bulk migrations, script it with turndown.js or pandoc instead of pasting one-by-one.",
      },
      {
        question: "What about Notion / Google Docs / Microsoft Word HTML exports?",
        answer:
          "All work — these tools export HTML with extra inline styles and span tags that the converter strips automatically. Notion 'Export as HTML' → paste → get clean Markdown. Google Docs 'File → Download → Web Page' → paste → Markdown. Word's HTML export is messier but still converts; expect to do a manual cleanup pass on the result.",
      },
      {
        question: "Is my content private?",
        answer:
          "Yes — completely. All conversion runs in your browser using JavaScript. Your HTML (which may include draft articles, internal docs, customer content) never reaches any server. Verify in DevTools → Network: zero outgoing requests.",
      },
    ],

    relatedTools: [
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "HTML Escape", href: "/web-tools/html-escape" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function HtmlToMarkdownPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <HTMLToMarkdown />
        </div>
      )}
    />
  )
}
