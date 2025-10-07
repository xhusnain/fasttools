import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HTMLToMarkdown } from "@/components/html-to-markdown"
import Link from "next/link"

export const metadata: Metadata = {
  title: "HTML to Markdown Converter — Clean Content Conversion | SmartToolboxes",
  description:
    "Convert HTML to Markdown instantly. Preserve headings, lists, links, images, code blocks, and tables for clean publishing.",
  keywords: [
    "html to markdown",
    "convert html",
    "markdown converter",
    "html parser",
    "content converter",
    "wysiwyg to markdown",
    "wordpress to markdown",
    "notion to markdown",
    "confluence to markdown",
    "sanitize html",
    "strip inline styles",
    "markdown links",
    "markdown images",
    "markdown tables",
    "code blocks",
    "pre/code to fences",
    "blockquote to markdown",
    "heading levels",
    "seo content markdown",
    "developer markdown",
    "free html to markdown"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/dev-tools/html-to-markdown" },
  openGraph: {
    title: "HTML to Markdown Converter — Clean Conversion",
    description: "Convert HTML to Markdown with headings, lists, images, code, and tables.",
    url: "https://www.smarttoolboxes.com/dev-tools/html-to-markdown",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "HTML to Markdown Converter", description: "Clean HTML → Markdown for publishing." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "HTML to Markdown Converter",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/dev-tools/html-to-markdown",
      description:
        "Convert HTML to Markdown preserving common elements for content workflows.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Headings/lists", "Links/images", "Code/tables"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
    }),
  },
}

export default function HTMLToMarkdownPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "HTML to Markdown", href: "/dev-tools/html-to-markdown" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">HTML to Markdown Converter</h1>
          <p className="text-lg text-muted-foreground text-balance">Convert HTML code to Markdown format instantly</p>
        </div>

        <HTMLToMarkdown />

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Convert</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Paste HTML or upload a file; preview converted Markdown.</li>
            <li>Copy the Markdown or export for your CMS/editor.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/dev-tools/markdown-previewer">Markdown Previewer</Link></li>
            <li><Link href="/dev-tools/html-beautifier">HTML Beautifier</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
