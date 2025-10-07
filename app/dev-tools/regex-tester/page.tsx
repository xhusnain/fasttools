import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { RegexTester } from "@/components/regex-tester"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Regex Tester — Test, Debug, and Build Regular Expressions | SmartToolboxes",
  description:
    "Test regex patterns with live matches, flags, and group results. Build and debug regular expressions for JavaScript and other languages.",
  keywords: [
    "regex tester",
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
    "character classes",
    "quantifiers",
    "anchors",
    "alternation",
    "backreferences",
    "greedy vs lazy",
    "regex online",
    "free regex tester"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/regex-tester" },
  openGraph: {
    title: "Regex Tester — Live Matches & Flags",
    description: "Build and debug regex patterns with live results.",
    url: "https://www.fasttools.store/dev-tools/regex-tester",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Regex Tester", description: "Test and debug regex online." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Regex Tester",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/dev-tools/regex-tester",
      description:
        "Test, build, and debug regular expressions with live matches and flags.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Live matching", "Flags", "Groups"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
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

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <RegexTester />
        
        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24" />
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

        {/* Bottom Content Ad */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>
      </div>
    </div>
  )
}
