import { TextCaseConverter } from "@/components/text-case-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Text Case Converter — Uppercase, Lowercase, Title Case, camelCase | SmartToolboxes",
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
    "title capitalization rules",
    "text case converter online",
    "uppercase converter online",
    "lowercase converter online",
    "title case converter online",
    "sentence case converter online",
    "camelCase converter online",
    "snake_case converter online",
    "kebab-case converter online",
    "pascal case converter online",
    "dot.case converter online",
    "swap case online",
    "text case converter free",
    "uppercase converter free",
    "lowercase converter free",
    "title case converter free",
    "sentence case converter free",
    "camelCase converter free",
    "snake_case converter free",
    "kebab-case converter free",
    "pascal case converter free",
    "dot.case converter free",
    "swap case free",
    "text case converter AI",
    "uppercase converter AI",
    "lowercase converter AI",
    "title case converter AI",
    "sentence case converter AI",
    "camelCase converter AI",
    "snake_case converter AI",
    "kebab-case converter AI",
    "pascal case converter AI",
    "dot.case converter AI",
    "swap case AI",
    "AI text case converter",
    "AI uppercase converter",
    "AI lowercase converter",
    "AI title case converter",
    "AI sentence case converter",
    "AI camelCase converter",
    "AI snake_case converter",
    "AI kebab-case converter",
    "AI pascal case converter",
    "AI dot.case converter",
    "AI swap case",
    "AI AI AI AI AI"
  ],
  alternates: { canonical: "https://www.fasttools.store/converters/text-case" },
  openGraph: {
    title: "Free Text Case Converter — Clean Formatting Fast",
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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="text-center mb-8 animate-fade-in-up">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Free Text Case Converter — Uppercase, Lowercase, Title Case, camelCase</h1>
                <p className="text-base text-muted-foreground text-pretty max-w-2xl mx-auto">Convert and clean text instantly: popular writing and programming cases with copy‑ready results.</p>
              </div>

              <TextCaseConverter />

              {/* Center Content Ad */}
              <div className="my-8">
                <AdSpace slot="content" className="w-full h-24" />
              </div>

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

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Understanding Text Case Styles</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Different case styles serve specific purposes in writing, programming, and digital communication:
                </p>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Writing Cases</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>UPPERCASE:</strong> ALL LETTERS CAPITAL - Used for emphasis, headings, acronyms</li>
                  <li><strong>lowercase:</strong> all letters small - Standard body text, informal writing</li>
                  <li><strong>Title Case:</strong> First Letter Of Each Word Capital - Headlines, titles, proper nouns</li>
                  <li><strong>Sentence case:</strong> First letter of sentence capital - Standard sentences, paragraphs</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Programming Cases</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>camelCase:</strong> firstWordLowerCase - JavaScript variables, functions</li>
                  <li><strong>PascalCase:</strong> FirstWordCapital - Classes, constructors, components</li>
                  <li><strong>snake_case:</strong> words_separated_by_underscores - Python variables, database fields</li>
                  <li><strong>kebab-case:</strong> words-separated-by-hyphens - URLs, CSS classes, HTML attributes</li>
                  <li><strong>dot.case:</strong> words.separated.by.dots - Namespaces, file extensions</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Use Cases and Applications</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Text case conversion is essential for various professional and personal tasks:
                </p>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Programming and Development</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Convert variable names between different programming languages</li>
                  <li>Standardize code formatting across projects</li>
                  <li>Convert API responses to match your naming conventions</li>
                  <li>Format database field names consistently</li>
                  <li>Convert between different framework naming conventions</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">Content Creation and Writing</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Format headlines and titles for different platforms</li>
                  <li>Convert between different writing style guides</li>
                  <li>Format text for social media posts</li>
                  <li>Prepare content for different publishing platforms</li>
                  <li>Standardize formatting across documents</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 text-foreground">SEO and Marketing</h3>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Format URLs and slugs for websites</li>
                  <li>Convert titles for different meta tag formats</li>
                  <li>Format hashtags for social media</li>
                  <li>Prepare content for different marketing channels</li>
                  <li>Standardize brand names and product titles</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Advanced Text Processing Features</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our text case converter includes advanced features for comprehensive text processing:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><strong>Whitespace Cleanup:</strong> Remove extra spaces, tabs, and line breaks</li>
                  <li><strong>Smart Capitalization:</strong> Handle acronyms and proper nouns correctly</li>
                  <li><strong>Unicode Support:</strong> Process international characters and symbols</li>
                  <li><strong>Bulk Processing:</strong> Convert multiple text blocks at once</li>
                  <li><strong>Preserve Formatting:</strong> Maintain original spacing and structure</li>
                  <li><strong>Custom Rules:</strong> Apply specific capitalization rules</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Best Practices for Text Case Conversion</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Follow these guidelines to get the best results from text case conversion:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Review converted text for context-appropriate formatting</li>
                  <li>Check for proper nouns and acronyms that should remain unchanged</li>
                  <li>Consider the target platform's formatting requirements</li>
                  <li>Test converted text in the intended application</li>
                  <li>Maintain consistency across related documents</li>
                  <li>Use appropriate case styles for different content types</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Common Text Case Mistakes to Avoid</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Avoid these common pitfalls when converting text cases:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Over-capitalizing words in title case (articles, prepositions, conjunctions)</li>
                  <li>Inconsistent case usage within the same document</li>
                  <li>Not considering platform-specific requirements</li>
                  <li>Ignoring proper nouns and brand names</li>
                  <li>Using wrong case styles for programming languages</li>
                  <li>Not reviewing converted text for accuracy</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">What's the difference between Title Case and Sentence case?</h3>
                    <p className="text-muted-foreground">Title Case capitalizes the first letter of each word, while Sentence case only capitalizes the first letter of the first word and proper nouns.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">When should I use camelCase vs PascalCase?</h3>
                    <p className="text-muted-foreground">Use camelCase for variables and functions, PascalCase for classes and constructors. This follows standard programming conventions.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Can I convert text with special characters?</h3>
                    <p className="text-muted-foreground">Yes, our converter handles Unicode characters, accents, and special symbols while preserving their original form.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">How do I handle acronyms in title case?</h3>
                    <p className="text-muted-foreground">Most style guides recommend keeping acronyms in all caps (e.g., "HTML Tutorial" not "Html Tutorial").</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">Is the text case converter free to use?</h3>
                    <p className="text-muted-foreground">Yes, our text case converter is completely free to use with no registration required. You can convert unlimited text.                </p>
              </div>

              {/* Bottom Content Ad */}
              <div className="mt-8">
                <AdSpace slot="content" className="w-full h-24" />
              </div>
            </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li><Link href="/seo-tools/meta-tags">Meta Tag Generator</Link></li>
                  <li><Link href="/seo-tools/blog-titles">Blog Title Generator</Link></li>
                  <li><Link href="/dev-tools/markdown-previewer">Markdown Previewer</Link></li>
                  <li><Link href="/dev-tools/html-to-markdown">HTML to Markdown</Link></li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <AdSpace slot="sidebar" className="h-96" />
                <AdSpace slot="sidebar" className="h-64" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}