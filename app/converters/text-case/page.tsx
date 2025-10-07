import { TextCaseConverter } from "@/components/text-case-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Text Case Converter — Uppercase, Lowercase, Title Case, camelCase | SmartToolboxes",
  description:
    "Convert text to uppercase, lowercase, Title Case, Sentence case, camelCase, snake_case instantly. Clean formatting for writing and code.",
  keywords: [
    "text case converter",
    "uppercase converter",
    "lowercase converter",
    "title case converter",
    "sentence case converter",
    "camelCase converter",
    "snake_case converter",
    "kebab-case converter",
    "pascal case converter",
    "dot.case converter",
    "swap case",
    "remove extra spaces",
    "normalize whitespace",
    "capitalize words",
    "capitalize sentences",
    "fix casing",
    "markdown title case",
    "seo title case",
    "programming case styles",
    "convert text online",
    "free text tools",
    "clean text",
    "format text",
    "copy text",
    "normalize text",
    "case folding",
    "unicode case",
    "accent insensitive case",
    "remove punctuation",
    "remove line breaks",
    "convert text to slug",
    "slugify",
    "text utilities",
    "string utilities",
    "developer text tools",
    "writer tools",
    "blogging helpers",
    "social media formatting",
    "case converter for code",
    "case converter for seo",
    "free case converter",
    "convert sentence to title case",
    "convert title case to sentence",
    "convert upper to lower",
    "convert lower to upper",
    "remove duplicate spaces",
    "trim whitespace",
    "normalize quotes",
    "smart quotes to straight",
    "remove special characters",
    "remove emojis",
    "capitalize after period",
    "auto correct casing",
    "convert to pascal case",
    "convert to kebab case",
    "convert to snake case",
    "convert to camel case",
    "case conversion online",
    "title capitalization rules"
  ],
  alternates: { canonical: "https://www.fasttools.store/converters/text-case" },
  openGraph: {
    title: "Text Case Converter — Clean Formatting Fast",
    description:
      "Uppercase, lowercase, Title Case, Sentence case, camelCase, snake_case and more. Clean and copy instantly.",
    url: "https://www.fasttools.store/converters/text-case",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Text Case Converter", description: "Instant text formatting and case transformations." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Text Case Converter",
      applicationCategory: "Utility",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/converters/text-case",
      description:
        "Convert text to common writing and programming cases quickly. Clean whitespace and copy results.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Many case styles", "Whitespace cleanup", "Copy results", "Mobile friendly"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function TextCaseConverterPage() {
  return (
    <div className="flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Converters", href: "/converters" },
            { label: "Text Case Converter", href: "/converters/text-case" },
          ]}
        />

        <AdSpace slot="header" className="mb-8 h-24" />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Text Case Converter — Uppercase, Lowercase, Title Case, camelCase</h1>
            <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Convert and clean text instantly: popular writing and programming cases with copy‑ready results.</p>
          </div>

          <TextCaseConverter />

          <div className="mt-12 prose prose-sm max-w-none">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use</h2>
            <h3 className="text-xl font-semibold mb-2 text-foreground">1) Paste or Type Your Text</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Enter text and pick a target case (e.g., Title Case).</li>
              <li>Toggle cleanup to remove extra spaces and line breaks.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">2) Copy Clean Results</h3>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Copy to clipboard for documents, code, or posts.</li>
              <li>Use shortcuts for quick formatting flows.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Popular Cases</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              <li>UPPERCASE / lowercase</li>
              <li>Title Case / Sentence case</li>
              <li>camelCase / PascalCase</li>
              <li>snake_case / kebab-case</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/seo-tools/meta-tags">Meta Tag Generator</Link></li>
              <li><Link href="/seo-tools/blog-titles">Blog Title Generator</Link></li>
              <li><Link href="/dev-tools/markdown-previewer">Markdown Previewer</Link></li>
              <li><Link href="/dev-tools/html-to-markdown">HTML to Markdown</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
