import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HTMLToMarkdown } from "@/components/html-to-markdown"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "HTML to Markdown Converter | Clean Conversion | FastTools",
  description:
    "Convert HTML to Markdown instantly. Preserve headings, lists, links, images, code blocks, and tables for clean publishing.",
  keywords: [
    // Primary Keywords (20)
    "html to markdown",
    "free html to markdown",
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
    
    // Secondary Keywords (20)
    "developer markdown",
    "free html to markdown",
    "html to markdown online",
    "convert html online",
    "markdown converter online",
    "html parser online",
    "content converter online",
    "wysiwyg to markdown online",
    "wordpress to markdown online",
    "notion to markdown online",
    "confluence to markdown online",
    "sanitize html online",
    "strip inline styles online",
    "markdown links online",
    "markdown images online",
    "markdown tables online",
    "code blocks online",
    "pre/code to fences online",
    "blockquote to markdown online",
    "heading levels online",
    "seo content markdown online",
    
    // Long-tail Keywords (20)
    "free online html to markdown converter",
    "best html to markdown converter online",
    "html to markdown converter with live preview",
    "free html to markdown converter tool online",
    "online html to markdown converter free",
    "html to markdown converter online free",
    "convert html free online",
    "markdown converter free online",
    "html parser free online",
    "content converter free online",
    "wysiwyg to markdown free online",
    "wordpress to markdown free online",
    "notion to markdown free online",
    "confluence to markdown free online",
    "sanitize html free online",
    "strip inline styles free online",
    "markdown links free online",
    "markdown images free online",
    "markdown tables free online",
    "code blocks free online",
    
    // Additional SEO Keywords
    "pre/code to fences",
    "blockquote to markdown",
    "heading levels",
    "seo content markdown",
    "developer markdown",
    "free html to markdown",
    "html to markdown online",
    "convert html online",
    "markdown converter online",
    "html parser online",
    "content converter online",
    "wysiwyg to markdown online",
    "wordpress to markdown online",
    "notion to markdown online",
    "confluence to markdown online",
    "sanitize html online",
    "strip inline styles online",
    "markdown links online",
    "markdown images online",
    "markdown tables online",
    "code blocks online",
    "pre/code to fences online",
    "blockquote to markdown online",
    "heading levels online",
    "seo content markdown online",
    "developer markdown online",
    "free html to markdown online",
    "html to markdown free",
    "convert html free",
    "markdown converter free",
    "html parser free",
    "content converter free",
    "wysiwyg to markdown free",
    "wordpress to markdown free",
    "notion to markdown free",
    "confluence to markdown free",
    "sanitize html free",
    "strip inline styles free",
    "markdown links free",
    "markdown images free",
    "markdown tables free",
    "code blocks free",
    "pre/code to fences free",
    "blockquote to markdown free",
    "heading levels free",
    "seo content markdown free",
    "developer markdown free",
    "free html to markdown free",
    "html to markdown tool",
    "convert html tool",
    "markdown converter tool",
    "html parser tool",
    "content converter tool",
    "wysiwyg to markdown tool",
    "wordpress to markdown tool",
    "notion to markdown tool",
    "confluence to markdown tool",
    "sanitize html tool",
    "strip inline styles tool",
    "markdown links tool",
    "markdown images tool",
    "markdown tables tool",
    "code blocks tool",
    "pre/code to fences tool",
    "blockquote to markdown tool",
    "heading levels tool",
    "seo content markdown tool",
    "developer markdown tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/html-to-markdown" },
  openGraph: {
    title: "Free HTML to Markdown Converter | Clean Content Conversion | FastTools",
    description: "Convert HTML to Markdown instantly. Preserve headings, lists, links, images, code blocks, and tables for clean publishing.",
    url: "https://www.fasttools.store/dev-tools/html-to-markdown",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free HTML to Markdown Converter - Clean Content Conversion",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HTML to Markdown Converter | Clean Content Conversion | FastTools",
    description: "Convert HTML to Markdown instantly. Preserve headings, lists, links, images, code blocks, and tables for clean publishing.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "HTML to Markdown Converter",
      alternateName: "HTML Markdown Converter",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/dev-tools/html-to-markdown",
      description:
        "Convert HTML to Markdown preserving common elements for content workflows.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Headings/lists", 
        "Links/images", 
        "Code/tables",
        "HTML parsing",
        "Content conversion",
        "Clean markdown",
        "WordPress conversion",
        "Notion conversion",
        "Confluence conversion",
        "SEO content"
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
      downloadUrl: "https://www.fasttools.store/dev-tools/html-to-markdown",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "html to markdown, free html to markdown, convert html, markdown converter, html parser, content converter",
      about: {
        "@type": "Thing",
        name: "Content Conversion",
        description: "Free online tools for converting HTML content to Markdown format"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <HTMLToMarkdown />
        
        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

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

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
    </div>
  )
}
