import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RegexTester } from "@/components/regex-tester"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Regex Tester | Test, Debug, and Build Regular Expressions | FastTools",
  description:
    "Test regex patterns with live matches, flags, and group results. Build and debug regular expressions for JavaScript and other languages.",
  keywords: [
    // Primary Keywords (20)
    "regex tester",
    "free regex tester",
    "regular expression tester",
    "regex debugger",
    "regex builder",
    "pattern matcher",
    "javascript regex",
    "typescript regex",
    "regex flags",
    "global multiline case insensitive",
    "capture groups",
    "named groups",
    "lookahead lookbehind",
    "regex cheat sheet",
    "regex examples",
    "email regex",
    "url regex",
    "phone regex",
    "date regex",
    "whitespace regex",
    
    // Secondary Keywords (20)
    "character classes",
    "quantifiers",
    "anchors",
    "alternation",
    "backreferences",
    "greedy vs lazy",
    "regex online",
    "free regex tester",
    "regex tester online",
    "regular expression tester online",
    "regex debugger online",
    "regex builder online",
    "pattern matcher online",
    "javascript regex online",
    "typescript regex online",
    "regex flags online",
    "global multiline case insensitive online",
    "capture groups online",
    "named groups online",
    "lookahead lookbehind online",
    
    // Long-tail Keywords (20)
    "free online regex tester",
    "best regex tester online",
    "regex tester with live preview",
    "free regex tester tool online",
    "online regex tester free",
    "regex tester online free",
    "regular expression tester free online",
    "regex debugger free online",
    "regex builder free online",
    "pattern matcher free online",
    "javascript regex free online",
    "typescript regex free online",
    "regex flags free online",
    "global multiline case insensitive free online",
    "capture groups free online",
    "named groups free online",
    "lookahead lookbehind free online",
    "regex cheat sheet free online",
    "regex examples free online",
    "email regex free online",
    
    // Additional SEO Keywords
    "url regex",
    "phone regex",
    "date regex",
    "whitespace regex",
    "character classes",
    "quantifiers",
    "anchors",
    "alternation",
    "backreferences",
    "greedy vs lazy",
    "regex online",
    "free regex tester",
    "regex tester online",
    "regular expression tester online",
    "regex debugger online",
    "regex builder online",
    "pattern matcher online",
    "javascript regex online",
    "typescript regex online",
    "regex flags online",
    "global multiline case insensitive online",
    "capture groups online",
    "named groups online",
    "lookahead lookbehind online",
    "regex cheat sheet online",
    "regex examples online",
    "email regex online",
    "url regex online",
    "phone regex online",
    "date regex online",
    "whitespace regex online",
    "character classes online",
    "quantifiers online",
    "anchors online",
    "alternation online",
    "backreferences online",
    "greedy vs lazy online",
    "regex online free",
    "free regex tester online",
    "regex tester free",
    "regular expression tester free",
    "regex debugger free",
    "regex builder free",
    "pattern matcher free",
    "javascript regex free",
    "typescript regex free",
    "regex flags free",
    "global multiline case insensitive free",
    "capture groups free",
    "named groups free",
    "lookahead lookbehind free",
    "regex cheat sheet free",
    "regex examples free",
    "email regex free",
    "url regex free",
    "phone regex free",
    "date regex free",
    "whitespace regex free",
    "character classes free",
    "quantifiers free",
    "anchors free",
    "alternation free",
    "backreferences free",
    "greedy vs lazy free"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/regex-tester" },
  openGraph: {
    title: "Free Regex Tester | Test, Debug, and Build Regular Expressions | FastTools",
    description: "Test regex patterns with live matches, flags, and group results. Build and debug regular expressions for JavaScript and other languages.",
    url: "https://fasttools.store/dev-tools/regex-tester",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Regex Tester - Test, Debug, and Build Regular Expressions",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Regex Tester | Test, Debug, and Build Regular Expressions | FastTools",
    description: "Test regex patterns with live matches, flags, and group results. Build and debug regular expressions for JavaScript and other languages.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Regex Tester",
      alternateName: "Regular Expression Tester",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      url: "https://fasttools.store/dev-tools/regex-tester",
      description:
        "Test, build, and debug regular expressions with live matches and flags.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Live matching", 
        "Flags", 
        "Groups",
        "Pattern testing",
        "Regex debugging",
        "JavaScript regex",
        "TypeScript regex",
        "Capture groups",
        "Named groups",
        "Lookahead lookbehind"
      ],
      author: {
        "@type": "Organization",
        name: "FastTools",
        url: "https://fasttools.store"
      },
      publisher: { 
        "@type": "Organization", 
        name: "FastTools", 
        url: "https://fasttools.store",
        logo: {
          "@type": "ImageObject",
          url: "https://fasttools.store/logo.svg",
          width: 320,
          height: 80
        }
      },
      datePublished: "2024-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://fasttools.store/dev-tools/regex-tester",
      screenshot: "https://fasttools.store/og-image.svg",
      keywords: "regex tester, free regex tester, regular expression tester, regex debugger, regex builder, pattern matcher, javascript regex",
      about: {
        "@type": "Thing",
        name: "Regular Expressions",
        description: "Free online tools for testing, debugging, and building regular expressions"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://fasttools.store"
      }
    }),
  },
}

export default function RegexTesterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "Regex Tester", href: "/dev-tools/regex-tester" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Regex Tester</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Test and debug your regular expressions with live matching
          </p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <RegexTester />
        
        {/* Second Ad Space - After Tool */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Use</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Enter a pattern and test text; toggle flags (g, i, m, s, u, y).</li>
            <li>Inspect matches, groups, and indices; iterate with the global flag.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/dev-tools/json-to-csv">JSON to CSV</Link></li>
            <li><Link href="/dev-tools/markdown-previewer">Markdown Previewer</Link></li>
          </ul>
        </div>

      </div>
    </div>
  )
}
