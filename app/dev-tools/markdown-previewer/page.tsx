import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { MarkdownPreviewer } from "@/components/markdown-previewer"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Markdown Previewer — Live Markdown Rendering | SmartToolboxes",
  description:
    "Write Markdown and see live preview instantly. Supports headings, lists, code blocks, tables, and GitHub‑style flavor.",
  keywords: [
    "markdown previewer",
    "live markdown preview",
    "markdown editor online",
    "markdown renderer",
    "gfm preview",
    "github flavored markdown",
    "markdown tables",
    "markdown code blocks",
    "syntax highlighting",
    "markdown headings",
    "markdown lists",
    "markdown links",
    "markdown images",
    "front matter note",
    "copy rendered html",
    "export html",
    "export markdown",
    "markdown cheatsheet",
    "markdown tutorial",
    "documentation writing",
    "blogging markdown",
    "developer tools markdown",
    "free markdown previewer"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/markdown-previewer" },
  openGraph: {
    title: "Markdown Previewer — Live Rendering",
    description: "Type Markdown and see live preview with code and tables.",
    url: "https://www.fasttools.store/dev-tools/markdown-previewer",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Markdown Previewer", description: "Live Markdown preview and export." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Markdown Previewer",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/dev-tools/markdown-previewer",
      description:
        "Live Markdown preview with GitHub‑style features, code, and tables.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Live preview", "GFM features", "Export/Copy"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function MarkdownPreviewerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "Markdown Previewer", href: "/dev-tools/markdown-previewer" },
        ]}
      />

      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Markdown Previewer</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Write Markdown and see the rendered output in real-time
          </p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <MarkdownPreviewer />
        
        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Use</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Type Markdown and see the live HTML preview side by side.</li>
            <li>Use headings, lists, code fences, links, images, and tables.</li>
            <li>Copy the rendered HTML or export your Markdown.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/dev-tools/html-to-markdown">HTML to Markdown</Link></li>
            <li><Link href="/dev-tools/json-to-csv">JSON to CSV</Link></li>
            <li><Link href="/dev-tools/regex-tester">Regex Tester</Link></li>
          </ul>
        </div>

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
    </div>
  )
}
