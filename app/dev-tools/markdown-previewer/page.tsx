import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createToolConfig } from "@/lib/create-tool-config"

const MarkdownPreviewer = dynamic(
  () => import("@/components/dev-tools/markdown-previewer").then((mod) => mod.MarkdownPreviewer),
  { loading: () => <ToolLoader /> }
)

const toolConfig = createToolConfig({
  toolName: "Markdown Previewer",
  description:
    "Write and preview Markdown with live rendering for README, docs, and publishing workflows.",
  metaTitle: "Markdown Previewer — Live Render with GitHub Flavored Markdown",
  metaDescription:
    "Free live Markdown previewer. Side-by-side editor with instant HTML preview. Full GitHub Flavored Markdown support — tables, fenced code blocks with syntax highlighting, task lists, strikethrough. Test README files before commit. 100% client-side.",
  path: "/dev-tools/markdown-previewer",

  header: {
    title: "Preview Markdown File — Live Markdown Editor & Previewer",
    description:
      "Preview markdown file content online with live rendering. Write or paste markdown and see the rendered HTML preview in real time. Supports GitHub Flavored Markdown (GFM) with tables, code blocks, task lists, and syntax highlighting. Perfect for README files, documentation, and blog posts.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "Live Markdown previewer with side-by-side editor and rendered HTML preview. Full GitHub Flavored Markdown (GFM): tables, fenced code blocks with syntax highlighting, task lists, strikethrough, autolinks. 100% client-side.",
    alternateName: [
      "Markdown Editor Online",
      "Live Markdown Preview",
      "Markdown to HTML Renderer",
      "GFM Previewer",
      "GitHub README Preview",
      "Markdown Live Editor",
      "README Previewer",
      "MD to HTML Tool",
      "Dillinger Alternative",
      "StackEdit Alternative",
      "Markdown Sandbox",
      ".md File Previewer",
      "Markdown Test Tool",
      "Online Markdown Renderer",
      "Markdown Linter",
    ],
    featureList: [
      "Side-by-side layout: editor on left, rendered preview on right (synchronized scroll)",
      "Full GitHub Flavored Markdown: tables, fenced code blocks, task lists, strikethrough, autolinks",
      "Syntax highlighting in code blocks for 100+ languages (JS, Python, Go, Rust, SQL, etc.)",
      "Headings auto-link with anchor `#` references — same as GitHub README",
      "Real-time rendering — every keystroke updates the preview",
      "Image rendering: `![alt](url)` with lazy-load",
      "Math equations: LaTeX-style $$ formula $$ rendering (KaTeX)",
      "Mermaid diagram support: ```mermaid code blocks render as flowcharts / sequence diagrams",
      "Table of contents auto-generated from headings",
      "Export rendered HTML for use elsewhere, or copy Markdown source",
      "GFM extensions match GitHub exactly — what renders here matches your GitHub README",
      "100% client-side — your markdown content stays in your browser",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "11240",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A Markdown Previewer lets you preview markdown file content online by rendering Markdown syntax into formatted HTML in real time, showing exactly how your file will look when published.",
    quickAnswer:
      "Need to preview a markdown file? Type or paste Markdown in the editor to see the rendered HTML preview side by side. Preview markdown file content with headings, lists, links, images, code blocks, tables, and GitHub Flavored Markdown (GFM) support.",
    keyTakeaways: [
      "Live side-by-side Markdown editing and HTML preview",
      "Supports GitHub Flavored Markdown (GFM) with tables and task lists",
      "Syntax highlighting for fenced code blocks",
      "Renders headings, bold, italic, links, images, and blockquotes",
      "Useful for README files, documentation, and blog post drafting",
    ],
    overview:
      "Preview markdown file content online with this free live editor. Paste or write Markdown in the editor panel and see the rendered HTML preview update instantly. This tool lets you preview any markdown file with full GitHub Flavored Markdown (GFM) support including tables, fenced code blocks with syntax highlighting, task lists, strikethrough, and autolinks. Perfect for previewing README.md files, project documentation, blog posts, and technical docs before publishing. The side-by-side layout shows exactly how your markdown file will look when rendered.",

    howToSteps: [
      "Paste or write Markdown in the editor panel.",
      "Review rendered output in the preview panel.",
      "Adjust headings, lists, tables, and code blocks.",
      "Copy final Markdown or continue editing in your repo.",
    ],

    features: [
      "Live preview while typing",
      "GitHub Flavored Markdown support",
      "Table and code block rendering",
      "Readable side-by-side layout",
      "Browser-based authoring workflow",
    ],

    useCases: [
      "GitHub README authoring",
      "Technical documentation drafting",
      "Markdown formatting checks before publish",
      "Team handoff content review",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Why Live Preview Matters</h3>
          <p>
            Markdown is meant to be readable as plain text, but small syntax mistakes — a missing space after `#`, a wrong number of backticks, unbalanced bold asterisks — can produce broken output when GitHub or your docs site renders it. A live previewer catches these instantly: type a heading, see it rendered; paste a table, see the alignment; add a fenced code block, see the syntax highlighting. This <strong>tight feedback loop</strong> dramatically reduces the &quot;commit, push, view on GitHub, find formatting bug, fix, commit again&quot; cycle.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">GFM vs CommonMark vs Plain Markdown</h3>
          <p>
            Markdown started simple (John Gruber, 2004) but every platform added extensions:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Plain Markdown:</strong> headings, paragraphs, lists, links, images, code, blockquotes, horizontal rules. No tables, no task lists, no fenced code blocks.</li>
            <li><strong>CommonMark:</strong> 2014 standardization effort — formalized the syntax so different renderers behave consistently. Still no tables.</li>
            <li><strong>GitHub Flavored Markdown (GFM):</strong> CommonMark + tables + fenced code blocks (with language hints) + task lists + strikethrough + autolinks. <strong>This is what you want.</strong> Most documentation tools (GitHub, GitLab, Docusaurus, MkDocs) support GFM.</li>
            <li><strong>MDX:</strong> Markdown + embedded JSX components. Used by Next.js, Gatsby, Docusaurus for interactive docs.</li>
            <li><strong>Pandoc Markdown:</strong> superset for academic writing — footnotes, citations, math, definition lists.</li>
          </ul>
          <p className="mt-3">This previewer uses <strong>GFM</strong> by default — matching what GitHub renders. If you&apos;re writing for GitHub README or any GFM-compatible platform, what you see here is what you&apos;ll get.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">GFM Features at a Glance</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Tables:</strong> `| Col1 | Col2 |\\n|------|------|\\n| A | B |` with alignment via `:---:`, `:---`, `---:`</li>
            <li><strong>Fenced code blocks:</strong> ```js for JavaScript syntax highlighting (100+ languages supported)</li>
            <li><strong>Task lists:</strong> `- [ ] todo` (unchecked) / `- [x] done` (checked) — renders as checkbox</li>
            <li><strong>Strikethrough:</strong> `~~deleted text~~`</li>
            <li><strong>Autolinks:</strong> bare URLs like `https://example.com` are auto-converted to clickable links</li>
            <li><strong>Emoji shortcodes:</strong> `:smile:` → 😀 (GitHub-style)</li>
            <li><strong>Heading anchors:</strong> headings auto-get `#anchor-id` for deep linking</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Common Use Cases</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Preview README.md before commit:</strong> test how your project README will render on GitHub / npm / PyPI</li>
            <li><strong>Documentation drafting:</strong> write technical docs and verify formatting before publishing to MkDocs / Docusaurus / GitBook</li>
            <li><strong>Blog post writing:</strong> compose Markdown for Hugo / Jekyll / Astro / Next.js MDX blogs</li>
            <li><strong>GitHub Issue / PR templates:</strong> test that checklist and code block formatting works correctly</li>
            <li><strong>Pasting from LLM output:</strong> ChatGPT / Claude often output Markdown; paste here to render and copy as HTML</li>
            <li><strong>Note-taking:</strong> draft notes in Markdown for Obsidian / Notion / Logseq</li>
            <li><strong>Educational content:</strong> write tutorials with code samples, tables, and screenshots</li>
            <li><strong>Project status reports:</strong> Markdown is portable across email, Slack, Confluence, and Notion</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Math, Diagrams, and Advanced Features</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>LaTeX math (KaTeX):</strong> wrap in `$...$` for inline or `$$...$$` for block — formulas render like in academic papers</li>
            <li><strong>Mermaid diagrams:</strong> ```mermaid code blocks render as flowcharts, sequence diagrams, gantt charts, ER diagrams</li>
            <li><strong>Code highlighting:</strong> 100+ languages via Prism — JavaScript, TypeScript, Python, Go, Rust, SQL, Shell, YAML, JSON, Markdown itself, etc.</li>
            <li><strong>Table of contents:</strong> auto-generated from headings; helpful for long docs</li>
            <li><strong>Heading anchors:</strong> deep-link to any section with `#section-id`</li>
            <li><strong>Footnotes:</strong> `[^1]` references with `[^1]: definition` body</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy</h3>
          <p>
            All Markdown parsing and HTML rendering runs in your browser. Your content — including any draft articles, internal docs, private notes — never reaches a server. Safe for confidential content. Verify in DevTools → Network: zero outgoing requests.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Before committing to GitHub, paste your README here and check: (1) heading hierarchy looks right; (2) tables have proper alignment; (3) code blocks have language hints for syntax highlighting; (4) image links resolve (use relative paths for repo-local images, absolute URLs for external); (5) badges and shields render. For LLM-generated content, paste here to render — sometimes Claude/GPT outputs slightly broken Markdown that's easy to fix once you see the rendered version.",

    faqs: [
      {
        question: "Does this support GitHub Flavored Markdown?",
        answer:
          "Yes. Common GFM features such as tables, fenced code blocks, and task lists are supported.",
      },
      {
        question: "Can I use this for README files?",
        answer:
          "Yes. It is designed for README writing and preview checks before committing changes.",
      },
      {
        question: "Does the tool convert Markdown to HTML?",
        answer:
          "The preview renders Markdown as HTML so you can inspect final formatting behavior.",
      },
      {
        question: "Is this useful for documentation teams?",
        answer:
          "Yes. It helps technical writers and engineers verify formatting before publication.",
      },
      {
        question: "Can this replace my IDE Markdown preview?",
        answer:
          "It complements rather than replaces IDE previews. VS Code's built-in Markdown preview is great for editing, but this tool is useful for: (1) sharing a Markdown draft with a teammate who doesn't have your IDE, (2) testing how content will render on GitHub specifically (uses GFM exactly), (3) pasting LLM-generated Markdown to check formatting, (4) quick ad-hoc previews without opening an IDE project.",
      },
      {
        question: "Does this render the same as GitHub README?",
        answer:
          "Yes — GFM rendering matches what GitHub displays. You may notice tiny CSS differences (GitHub uses their own stylesheet), but the structure, syntax highlighting, table formatting, and task list rendering are identical. What you see here is what your GitHub README will look like.",
      },
      {
        question: "Can I write LaTeX math equations?",
        answer:
          "Yes — wrap inline math in `$...$` (e.g., `$E=mc^2$`) and block math in `$$...$$`. Rendering is via KaTeX, which supports most LaTeX math notation. Useful for documentation of algorithms, scientific computing libraries, and academic content.",
      },
      {
        question: "Does it support Mermaid diagrams?",
        answer:
          "Yes — fenced ```mermaid code blocks render as diagrams: flowcharts, sequence diagrams, gantt charts, class diagrams, entity-relationship diagrams. GitHub also supports Mermaid in READMEs now, so this preview matches GitHub's rendering.",
      },
      {
        question: "Is my markdown content private?",
        answer:
          "Yes — completely. All parsing and rendering runs in your browser. Your Markdown content never leaves your device, never reaches a server, never gets logged. Safe for proprietary docs, draft articles, internal notes. Verify in DevTools → Network: zero outgoing requests.",
      },
      {
        question: "Can I export the rendered HTML?",
        answer:
          "Yes — there's an 'Export as HTML' button that copies the rendered HTML to your clipboard. Useful when you need clean HTML output from Markdown source (e.g., for email templates, CMS imports, or pasting into rich-text editors that don't accept Markdown).",
      },
    ],

    relatedTools: [
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
      { name: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor" },
      { name: "Regex Tester", href: "/dev-tools/regex-tester" },
      { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
      { name: "Slugify String", href: "/dev-tools/slugify-string" },
      { name: "Word Counter", href: "/seo-tools/word-counter" },
      { name: "Diff Checker", href: "/dev-tools/diff-checker" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function MarkdownPreviewerPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <MarkdownPreviewer />
        </div>
      )}
    />
  )
}
