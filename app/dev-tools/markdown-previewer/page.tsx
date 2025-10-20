import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { MarkdownPreviewer } from "@/components/markdown-previewer"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Markdown Previewer | Live Markdown Rendering | FastTools",
  description:
    "Write Markdown and see live preview instantly. Supports headings, lists, code blocks, tables, and GitHub‑style flavor.",
  keywords: [
    // Primary Keywords (20)
    "markdown previewer",
    "free markdown previewer",
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
    
    // Secondary Keywords (20)
    "documentation writing",
    "blogging markdown",
    "developer tools markdown",
    "free markdown previewer",
    "markdown previewer online",
    "live markdown preview online",
    "markdown editor online online",
    "markdown renderer online",
    "gfm preview online",
    "github flavored markdown online",
    "markdown tables online",
    "markdown code blocks online",
    "syntax highlighting online",
    "markdown headings online",
    "markdown lists online",
    "markdown links online",
    "markdown images online",
    "front matter note online",
    "copy rendered html online",
    "export html online",
    
    // Long-tail Keywords (20)
    "free online markdown previewer",
    "best markdown previewer online",
    "markdown previewer with live preview",
    "free markdown previewer tool online",
    "online markdown previewer free",
    "markdown previewer online free",
    "live markdown preview free online",
    "markdown editor online free online",
    "markdown renderer free online",
    "gfm preview free online",
    "github flavored markdown free online",
    "markdown tables free online",
    "markdown code blocks free online",
    "syntax highlighting free online",
    "markdown headings free online",
    "markdown lists free online",
    "markdown links free online",
    "markdown images free online",
    "front matter note free online",
    "copy rendered html free online",
    "export html free online",
    
    // Additional SEO Keywords
    "export markdown",
    "markdown cheatsheet",
    "markdown tutorial",
    "documentation writing",
    "blogging markdown",
    "developer tools markdown",
    "free markdown previewer",
    "markdown previewer online",
    "live markdown preview online",
    "markdown editor online online",
    "markdown renderer online",
    "gfm preview online",
    "github flavored markdown online",
    "markdown tables online",
    "markdown code blocks online",
    "syntax highlighting online",
    "markdown headings online",
    "markdown lists online",
    "markdown links online",
    "markdown images online",
    "front matter note online",
    "copy rendered html online",
    "export html online",
    "export markdown online",
    "markdown cheatsheet online",
    "markdown tutorial online",
    "documentation writing online",
    "blogging markdown online",
    "developer tools markdown online",
    "free markdown previewer online",
    "markdown previewer free",
    "live markdown preview free",
    "markdown editor online free",
    "markdown renderer free",
    "gfm preview free",
    "github flavored markdown free",
    "markdown tables free",
    "markdown code blocks free",
    "syntax highlighting free",
    "markdown headings free",
    "markdown lists free",
    "markdown links free",
    "markdown images free",
    "front matter note free",
    "copy rendered html free",
    "export html free",
    "export markdown free",
    "markdown cheatsheet free",
    "markdown tutorial free",
    "documentation writing free",
    "blogging markdown free",
    "developer tools markdown free",
    "free markdown previewer free",
    "markdown previewer tool",
    "live markdown preview tool",
    "markdown editor online tool",
    "markdown renderer tool",
    "gfm preview tool",
    "github flavored markdown tool",
    "markdown tables tool",
    "markdown code blocks tool",
    "syntax highlighting tool",
    "markdown headings tool",
    "markdown lists tool",
    "markdown links tool",
    "markdown images tool",
    "front matter note tool",
    "copy rendered html tool",
    "export html tool",
    "export markdown tool",
    "markdown cheatsheet tool",
    "markdown tutorial tool",
    "documentation writing tool",
    "blogging markdown tool",
    "developer tools markdown tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/markdown-previewer" },
  openGraph: {
    title: "Markdown Previewer | Live Markdown Rendering | FastTools",
    description: "Write Markdown and see live preview instantly. Supports headings, lists, code blocks, tables, and GitHub‑style flavor.",
    url: "https://www.fasttools.store/dev-tools/markdown-previewer",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Markdown Previewer - Live Markdown Rendering",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Markdown Previewer | Live Markdown Rendering | FastTools",
    description: "Write Markdown and see live preview instantly. Supports headings, lists, code blocks, tables, and GitHub‑style flavor.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Markdown Previewer",
      alternateName: "Live Markdown Editor",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/dev-tools/markdown-previewer",
      description:
        "Live Markdown preview with GitHub‑style features, code, and tables.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Live preview", 
        "GFM features", 
        "Export/Copy",
        "Markdown rendering",
        "GitHub flavored markdown",
        "Code blocks",
        "Tables",
        "Syntax highlighting",
        "Documentation writing",
        "Blogging tools"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://www.fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://www.fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://www.fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/dev-tools/markdown-previewer",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "markdown previewer, free markdown previewer, live markdown preview, markdown editor online, markdown renderer, gfm preview",
      about: {
        "@type": "Thing",
        name: "Markdown and Documentation",
        description: "Free online tools for writing, previewing, and editing Markdown content"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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
