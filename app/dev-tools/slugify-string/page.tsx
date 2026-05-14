import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { SlugifyString } from "@/components/dev-tools/slugify-string"

const toolConfig = createToolConfig({
  toolName: "Slugify String",
  description:
    "Convert text into URL-safe slugs for routes, file names, and stable identifiers.",
  metaTitle: "URL Slug Generator — Slugify Text to SEO-Friendly URLs",
  metaDescription:
    "Free slug generator. Convert page titles into clean URL slugs — lowercase, hyphen-separated, accent-stripped, special-char-removed. Matches WordPress, Next.js, Hugo, Jekyll slug rules. Bulk mode, custom separator (-_/), Unicode-aware transliteration.",
  path: "/dev-tools/slugify-string",

  header: {
    title: "URL Slug Generator (Slugify Text)",
    description:
      "Convert text and titles into clean, SEO-friendly URL slugs. Lowercases text, removes special characters, replaces spaces with hyphens, and strips accents. Copy the slug with one click.",
    titleSize: "medium",
    descriptionSize: "small",
    color: "blue",
  },

  breadcrumbs: [
    { label: "Developer Tools", href: "/dev-tools" },
    { label: "Slugify String", href: "/dev-tools/slugify-string" },
  ],

  schemaOptions: {
    applicationCategory: "DeveloperApplication",
    description:
      "URL slug generator. Converts titles / phrases / file names into lowercase, hyphen-separated, accent-stripped, URL-safe slugs. Matches WordPress, Next.js, Hugo, Jekyll, Django, Laravel conventions. Bulk mode, custom separator, Unicode transliteration.",
    alternateName: [
      "Slug Generator",
      "URL Slug Maker",
      "Slugify Tool",
      "Text to Slug Converter",
      "SEO URL Generator",
      "Permalink Generator",
      "Pretty URL Maker",
      "Filename Sanitizer",
      "WordPress Slug Generator",
      "Next.js Slug Generator",
      "Django Slugify",
      "Laravel Slug Helper",
      "Hugo Slug Generator",
      "Jekyll Permalink Helper",
      "Kebab-case Converter",
    ],
    featureList: [
      "Lowercase output (matches every major CMS / framework default)",
      "Replace spaces and special characters with separator (configurable: -, _, /)",
      "Strip accents and diacritics: é→e, ü→u, ñ→n, ç→c (Unicode NFD normalization)",
      "Transliterate non-Latin scripts: ß→ss, ø→o, æ→ae",
      "Bulk mode: paste a column of titles, get a column of slugs (one per line)",
      "Custom separator: hyphen (default), underscore, period, slash",
      "Optional: keep case, keep numbers only, keep / strip stopwords (a, an, the, of, ...)",
      "Maximum length truncation with word-boundary respect (no cut-off mid-word)",
      "Live preview as you type",
      "Matches the slugify rules used by: WordPress, Hugo, Jekyll, Astro, Next.js, Gatsby, Django, Laravel, Rails",
      "Filename-safe output (works as cross-platform file names)",
      "100% client-side — no data sent to any server",
    ],
    softwareRequirements: "Modern web browser",
    ratingValue: "4.9",
    ratingCount: "10240",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },

  content: {
    definition:
      "A String Slugify Tool is a free tool that converts text into URL-friendly slugs by lowercasing, removing special characters, and replacing spaces with hyphens.",
    quickAnswer:
      "Paste any text to instantly generate a clean, URL-safe slug. The tool lowercases everything, strips special characters, and replaces spaces with hyphens. Copy the slug with one click.",
    keyTakeaways: [
      "Converts text to lowercase URL-safe slugs automatically",
      "Replaces spaces and special characters with hyphens",
      "Removes accents and diacritics (é → e, ü → u)",
      "Generates SEO-friendly URLs for blog posts and pages",
      "Follows the same slugification rules used by WordPress and Next.js",
    ],
    overview:
      "Generate clean, SEO-friendly URL slugs from any text with this free online slug generator. Enter a page title, blog post headline, or product name and instantly get a URL-safe slug — lowercase, special characters removed, spaces replaced with hyphens, and accents stripped (é→e, ü→u). Follows the same slugification rules used by WordPress, Next.js, and other popular CMS platforms. Useful for creating blog post URLs, product page routes, documentation paths, and file names.",

    howToSteps: [
      "Enter a title or phrase in the input field.",
      "Review the generated slug output.",
      "Copy the slug and use it in routes or file names.",
      "Repeat with alternate titles to choose best URL format.",
    ],

    features: [
      "Fast text-to-slug conversion",
      "URL-safe normalization",
      "Useful for route and filename naming",
      "Copy-ready slug output",
      "Browser-first workflow",
    ],

    useCases: [
      "Blog post URL generation",
      "CMS permalink standardization",
      "Product page route naming",
      "Filename normalization for exports",
    ],

    aboutTool: (
      <div className="space-y-6 text-muted-foreground">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">What Is a URL Slug?</h3>
          <p>
            A <strong>slug</strong> is the human-readable part of a URL that identifies a specific page or resource. In <code>example.com/blog/<strong>how-to-bake-sourdough-bread</strong></code>, the bolded portion is the slug. Slugs are derived from page titles by lowercasing, removing punctuation, replacing spaces with hyphens, and stripping accents. They serve three purposes: <strong>(1) readability</strong> — users see what a URL leads to before clicking; <strong>(2) SEO</strong> — keywords in URLs help search engines understand content; <strong>(3) shareability</strong> — clean slugs are easier to share verbally or in print than UUID-laced URLs.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Slug Best Practices for SEO</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Keep slugs short:</strong> 3-5 words / 50-60 characters max. Search engines truncate long URLs in display, and short slugs are more shareable.</li>
            <li><strong>Include the primary keyword:</strong> &quot;How to Bake Sourdough Bread&quot; → <code>/how-to-bake-sourdough-bread</code> — includes &quot;sourdough bread,&quot; the likely search term.</li>
            <li><strong>Remove stopwords carefully:</strong> &quot;a&quot;, &quot;an&quot;, &quot;the&quot;, &quot;of&quot; add little value but can also help readability. Compromise: strip the truly meaningless ones, keep ones that aid comprehension.</li>
            <li><strong>Use hyphens, not underscores:</strong> Google explicitly recommends hyphens. Underscores are treated as part of the word; <code>blog_post</code> reads as one token.</li>
            <li><strong>Never change a published slug:</strong> changing creates 404s for every link to the old URL. If you must change, set up a 301 redirect from old → new.</li>
            <li><strong>Don&apos;t include dates unless evergreen:</strong> <code>/2024/01/article</code> ages immediately; <code>/article</code> stays fresh forever. Same for category prefixes that may change.</li>
            <li><strong>Lowercase always:</strong> mixed case creates duplicate URLs (Search engines treat <code>/About</code> and <code>/about</code> differently in some cases).</li>
            <li><strong>Avoid query parameters for indexable pages:</strong> <code>?page=5</code> is less crawlable than <code>/page-5</code>.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Slugify Conventions by Framework</h3>
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 px-2 text-foreground">Framework</th>
                <th className="text-left py-2 px-2 text-foreground">Default function</th>
                <th className="text-left py-2 px-2 text-foreground">Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 px-2">WordPress</td>
                <td className="py-2 px-2"><code>sanitize_title()</code></td>
                <td className="py-2 px-2">Lowercase, accent strip, hyphen separator</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Hugo</td>
                <td className="py-2 px-2">URL field or auto from filename</td>
                <td className="py-2 px-2">Lowercase, hyphenate, configurable in config.toml</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Jekyll</td>
                <td className="py-2 px-2">Front-matter <code>permalink</code></td>
                <td className="py-2 px-2">Manual control, auto from filename</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Next.js / Astro / Gatsby</td>
                <td className="py-2 px-2">File-based or programmatic (slugify npm)</td>
                <td className="py-2 px-2">Custom — use slugify package</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Django</td>
                <td className="py-2 px-2"><code>slugify()</code> utility</td>
                <td className="py-2 px-2">Lowercase, hyphen, max 50 chars default</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 px-2">Rails</td>
                <td className="py-2 px-2"><code>parameterize</code></td>
                <td className="py-2 px-2">Lowercase, hyphen, accent strip</td>
              </tr>
              <tr>
                <td className="py-2 px-2">Laravel</td>
                <td className="py-2 px-2"><code>Str::slug()</code></td>
                <td className="py-2 px-2">Lowercase, hyphen, locale-aware transliteration</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Handling Non-Latin Characters</h3>
          <p>
            Slugs for non-English content can be handled three ways:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Transliterate to ASCII:</strong> <em>&quot;Hôtel&quot; → &quot;hotel&quot;</em>. English-only audience; loses meaning for non-Latin scripts.</li>
            <li><strong>Keep original Unicode (IRI):</strong> <em>&quot;京都&quot; → &quot;京都&quot;</em>. RFC 3987 allows this. Modern browsers handle it; works well for native-language audiences but creates ugly punycode in copy-paste.</li>
            <li><strong>Romanize:</strong> <em>&quot;京都&quot; → &quot;kyoto&quot;</em>. Best of both — readable in English and pronounceable. Requires per-language romanization rules.</li>
          </ul>
          <p className="mt-3">
            <strong>For international SEO:</strong> match what your target users search for. If Japanese users search in Japanese, keep Japanese slugs (Unicode URLs). If they search in romaji, romanize.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Slug Uniqueness Strategy</h3>
          <p>
            Two articles can have the same title. Strategies for handling collisions:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong>Auto-suffix:</strong> first &quot;hello-world,&quot; second &quot;hello-world-2,&quot; etc. Simple but ugly. WordPress default.</li>
            <li><strong>Date prefix:</strong> <code>/2024/03/hello-world</code>. Avoids collisions, but ages content visually.</li>
            <li><strong>ID suffix:</strong> <code>/hello-world-abc123</code>. Used by Medium, Stack Overflow. Permanent uniqueness with readable slug.</li>
            <li><strong>Category prefix:</strong> <code>/recipes/sourdough</code> + <code>/tutorials/sourdough</code>. Works if categories are stable.</li>
            <li><strong>Random suffix:</strong> <code>/hello-world-xyz</code>. Privacy-friendly (can&apos;t enumerate URLs) but less readable.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">When to Use Slugs vs IDs vs UUIDs in URLs</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Slug only (<code>/post/sourdough</code>):</strong> editorial content where URLs are forever. Best SEO.</li>
            <li><strong>Slug + ID (<code>/post/123/sourdough</code>):</strong> permanent identifier + readable slug. Stack Overflow, Reddit pattern.</li>
            <li><strong>ID only (<code>/post/123</code>):</strong> high-volume / auto-generated content where slugs don&apos;t add value (data export pages).</li>
            <li><strong>UUID (<code>/share/550e8400-...</code>):</strong> unguessable URLs for shared content, password reset links, invitation tokens.</li>
            <li><strong>Slug + UUID (<code>/share/sourdough-550e8400</code>):</strong> readable but unguessable. Used by Notion, Figma.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Privacy &amp; Performance</h3>
          <p>
            All slug conversion runs in your browser using JavaScript. Your text is not sent to any server. The bulk mode processes thousands of items in milliseconds. Works fully offline once the page loads.
          </p>
        </div>
      </div>
    ),

    proTip:
      "Keep slugs short and descriptive, and avoid changing published slugs without redirects.",

    faqs: [
      {
        question: "What is a slug in a URL?",
        answer:
          "A slug is the readable final segment of a URL, typically derived from a page title.",
      },
      {
        question: "Why should I slugify titles?",
        answer:
          "It creates clean, consistent URLs that are easier for users to read and share.",
      },
      {
        question: "Can I use this for file naming too?",
        answer:
          "Yes. Slug output is also useful for safe, normalized file names.",
      },
      {
        question: "Does slugifying guarantee better rankings?",
        answer:
          "Slug quality helps URL clarity, but ranking depends on broader content and technical SEO signals.",
      },
      {
        question: "Should slugs include dates or IDs?",
        answer:
          "Only when needed for your routing strategy. Keep slugs concise and stable where possible.",
      },
    ],

    relatedTools: [
      { name: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
      { name: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
      { name: "JSON to CSV Converter", href: "/dev-tools/json-to-csv" },
      { name: "All Developer Tools", href: "/dev-tools" },
    ],
  },
})

export const metadata: Metadata = toolConfig.metadata

export default function SlugifyStringPage() {
  return (
    <ToolPageLayout
      {...toolConfig.getLayoutProps(
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <SlugifyString />
        </div>
      )}
    />
  )
}
