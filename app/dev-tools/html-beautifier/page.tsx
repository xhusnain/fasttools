import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { HTMLBeautifier } from "@/components/html-beautifier"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free HTML Beautifier & Minifier | Format or Minify HTML Code | FastTools",
  description:
    "Format or minify HTML code instantly. Clean indentation, remove whitespace, and copy results. Great for web developers and content editors.",
  keywords: [
    // Primary Keywords (20)
    "html beautifier",
    "free html beautifier",
    "html minifier",
    "format html",
    "minify html",
    "html formatter",
    "html compressor",
    "prettify html",
    "compress html",
    "indent html",
    "remove whitespace",
    "inline vs block elements",
    "html cleanup",
    "copy formatted html",
    "html code tools",
    "web developer tools",
    "html validator",
    "html linter",
    "html optimizer",
    "html prettifier",
    
    // Secondary Keywords (20)
    "html beautifier online",
    "html minifier online",
    "format html online",
    "minify html online",
    "html formatter online",
    "html compressor online",
    "prettify html online",
    "compress html online",
    "indent html online",
    "remove whitespace online",
    "inline vs block elements online",
    "html cleanup online",
    "copy formatted html online",
    "html code tools online",
    "web developer tools online",
    "html validator online",
    "html linter online",
    "html optimizer online",
    "html prettifier online",
    "free html beautifier online",
    
    // Long-tail Keywords (20)
    "free online html beautifier",
    "best html beautifier online",
    "html beautifier with live preview",
    "free html beautifier tool online",
    "online html beautifier free",
    "html beautifier online free",
    "html minifier free online",
    "format html free online",
    "minify html free online",
    "html formatter free online",
    "html compressor free online",
    "prettify html free online",
    "compress html free online",
    "indent html free online",
    "remove whitespace free online",
    "inline vs block elements free online",
    "html cleanup free online",
    "copy formatted html free online",
    "html code tools free online",
    "web developer tools free online",
    
    // Additional SEO Keywords
    "html validator",
    "html linter",
    "html optimizer",
    "html prettifier",
    "html beautifier online",
    "html minifier online",
    "format html online",
    "minify html online",
    "html formatter online",
    "html compressor online",
    "prettify html online",
    "compress html online",
    "indent html online",
    "remove whitespace online",
    "inline vs block elements online",
    "html cleanup online",
    "copy formatted html online",
    "html code tools online",
    "web developer tools online",
    "html validator online",
    "html linter online",
    "html optimizer online",
    "html prettifier online",
    "free html beautifier online",
    "html beautifier free",
    "html minifier free",
    "format html free",
    "minify html free",
    "html formatter free",
    "html compressor free",
    "prettify html free",
    "compress html free",
    "indent html free",
    "remove whitespace free",
    "inline vs block elements free",
    "html cleanup free",
    "copy formatted html free",
    "html code tools free",
    "web developer tools free",
    "html validator free",
    "html linter free",
    "html optimizer free",
    "html prettifier free",
    "html beautifier tool",
    "html minifier tool",
    "format html tool",
    "minify html tool",
    "html formatter tool",
    "html compressor tool",
    "prettify html tool",
    "compress html tool",
    "indent html tool",
    "remove whitespace tool",
    "inline vs block elements tool",
    "html cleanup tool",
    "copy formatted html tool",
    "html code tools tool",
    "web developer tools tool",
    "html validator tool",
    "html linter tool",
    "html optimizer tool",
    "html prettifier tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/html-beautifier" },
  openGraph: {
    title: "Free HTML Beautifier & Minifier | Format or Minify HTML Code | FastTools",
    description: "Format or minify HTML code instantly. Clean indentation, remove whitespace, and copy results. Great for web developers and content editors.",
    url: "https://www.fasttools.store/dev-tools/html-beautifier",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free HTML Beautifier & Minifier - Format or Minify HTML Code",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free HTML Beautifier & Minifier | Format or Minify HTML Code | FastTools",
    description: "Format or minify HTML code instantly. Clean indentation, remove whitespace, and copy results. Great for web developers and content editors.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "HTML Beautifier & Minifier",
      alternateName: "HTML Formatter & Compressor",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/dev-tools/html-beautifier",
      description:
        "Format or minify HTML code with clean indentation or compression.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Beautify", 
        "Minify", 
        "Copy results",
        "HTML formatting",
        "Code compression",
        "Indentation",
        "Whitespace removal",
        "HTML cleanup",
        "Web development",
        "Code optimization"
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
      downloadUrl: "https://www.fasttools.store/dev-tools/html-beautifier",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "html beautifier, free html beautifier, html minifier, format html, minify html, html formatter, html compressor, prettify html",
      about: {
        "@type": "Thing",
        name: "HTML Code Formatting",
        description: "Free online tools for formatting, beautifying, and minifying HTML code"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function HTMLBeautifierPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">HTML Beautifier & Minifier</h1>
          <p className="text-lg text-muted-foreground text-balance">Format or compress your HTML code instantly</p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <HTMLBeautifier />
        
        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Use</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Paste HTML and choose Beautify or Minify mode.</li>
            <li>Copy the cleaned or compressed HTML for your project.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/dev-tools/html-to-markdown">HTML to Markdown</Link></li>
            <li><Link href="/dev-tools/hex-to-rgb">Hex to RGB</Link></li>
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
