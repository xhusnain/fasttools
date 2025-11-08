import { TextCaseConverter } from "@/components/text-case-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { GHeader } from "@/components/globalcomponents/gheader"
import { Search } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "FastTools - Text Case Converter | Free Uppercase, Lowercase, Title Case Tool",
  description:
    "FastTools Text Case Converter - Convert text to uppercase, lowercase, Title Case, Sentence case, camelCase, snake_case instantly. Clean formatting for writing and code.",
  keywords:[
    "fasttools",
    "fast tools",
    "text case converter",
    "case converter online",
    "uppercase to lowercase converter",
    "lowercase to uppercase converter",
    "title case converter",
    "sentence case converter",
    "word counter",
    "character counter",
    "text counter",
    "word count tool",
    "character count tool",
    "online text tools",
    "convert text case online",
    "change text capitalization",
    "free online case converter",
    "text case converter online free",
    "best online case converter",
    "uppercase lowercase title case converter",
    "sentence case to title case converter",
    "proper case converter online",
    "alternating case converter",
    "random case text converter",
    "text case changer tool",
    "convert small letters to capital in Excel",
    "uppercase to lowercase in Word",
    "convert all caps to lowercase online",
    "title capitalization tool",
    "text formatting tool",
    "copy paste case converter",
    "case converter chrome extension",
    "count words and characters online",
    "word and character counter",
    "word counter with grammar check",
    "character counter with spaces",
    "paragraph counter online",
    "online capitalization tool",
    "text case converter free",
    "word counter tool online",
    "text analyzer tool",
    "text length calculator",
    "sentence counter online",
    "word count checker",
    "character count with and without spaces",
    "online writing assistant tools",
    "content length counter",
    "free character counter online",
    "character counter without spaces",
    "word character counter",
    "free word counter tool",
    "count letters and words online",
    "twitter character counter",
    "instagram character counter",
    "sms character counter",
    "word count and character count online"
  ],

  alternates: { canonical: "https://www.fasttools.store/converters/text-case" },
  openGraph: {
    title: "Text Case Converter | Uppercase, Lowercase, Title Case | FastTools",
    description:
      "Convert text to uppercase, lowercase, Title Case, Sentence case, camelCase, snake_case instantly. Clean formatting for writing and code.",
    url: "https://www.fasttools.store/converters/text-case",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Text Case Converter - Uppercase, Lowercase, Title Case, camelCase",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Case Converter | Uppercase, Lowercase, Title Case | FastTools",
    description: "Convert text to uppercase, lowercase, Title Case, Sentence case, camelCase, snake_case instantly. Clean formatting for writing and code.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Text Case Converter",
      alternateName: "Text Case Converter & Formatter",
      applicationCategory: "Utility",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/converters/text-case",
      description:
        "Convert text to common writing and programming cases quickly. Clean whitespace and copy results.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Many case styles",
        "Whitespace cleanup", 
        "Copy results", 
        "Mobile friendly",
        "Unicode support",
        "Bulk processing",
        "Developer tools",
        "SEO optimization",
        "Social media formatting",
        "Programming case styles"
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
      datePublished: "2025-01-01",
      dateModified: new Date().toISOString().split('T')[0],
      version: "2.0",
      softwareVersion: "2.0",
      downloadUrl: "https://www.fasttools.store/converters/text-case",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "text case converter, free text case converter, uppercase converter, lowercase converter, title case converter, camelCase converter, snake_case converter, kebab-case converter",
      about: {
        "@type": "Thing",
        name: "Text Formatting",
        description: "Free online tools for converting text between different case styles and formatting"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function TextCaseConverterPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <Breadcrumbs
          items={[
            { label: "Converters", href: "/converters" },
            { label: "Text Case Converter", href: "/converters/text-case" },
          ]}
        />

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex-1 lg:flex-[2] space-y-5 sm:space-y-6">
              {/* Hero Section */}
              <div className="text-center space-y-5 animate-fade-in-up">
                <GHeader
                  title="Free Text Case Converter"
                  description="Convert and clean text instantly across popular writing and programming cases with copy‑ready results."
                  titleSize="medium"
                  descriptionSize="small"
                />
              </div>

              {/* Mobile Ad Space */}
              <div className="lg:hidden">
                <AdSpace slot="content" className="h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28" />
              </div>

              {/* Tool Card */}
              <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                <TextCaseConverter />
              </div>

              {/* Understanding How This Tool Works */}
              <div className="space-y-5 animate-fade-in-up animation-delay-200">
                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-base md:text-xl font-bold mb-3 text-foreground">Understanding How This Text Case Converter Works</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    We process text locally for instant feedback. Unicode, accents, and symbols are preserved, while rules for each
                    case style are applied deterministically so the same input always yields the same output.
                  </p>
                  <h3 className="text-base md:text-lg font-bold mb-2.5 text-heading-accent">Real-Time Processing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Conversions update as you type with live preview. Whitespace normalization and smart capitalization are
                    available where useful.
                  </p>
                  <h3 className="text-base md:text-lg font-bold mb-2.5 text-heading-accent">Professional Features</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Developer‑friendly styles (camelCase, snake_case, kebab-case, PascalCase) and writer‑friendly styles
                    (Title Case, Sentence case, UPPERCASE, lowercase) in one place.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-base md:text-xl font-bold mb-3 text-foreground">Advanced Usage Techniques</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Practical patterns to keep names and copy consistent across apps, docs, and codebases.
                  </p>
                  <h3 className="text-base md:text-lg font-bold mb-2.5 text-heading-accent">Professional Development</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Use camelCase for variables, PascalCase for components, kebab-case for URLs and CSS classes. Convert between
                    styles without losing meaning.
                  </p>
                  <h3 className="text-base md:text-lg font-bold mb-2.5 text-heading-accent">Content Creation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    Shape headlines with Title Case, keep body copy readable with sentence case, and convert slugs to
                    SEO‑friendly kebab‑case.
                  </p>
                  <h3 className="text-base md:text-lg font-bold mb-2.5 text-heading-accent">SEO and Marketing</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Standardize naming across channels for clean links, consistent tags, and reliable search previews.
                  </p>
                </div>

                {/* FAQ Section for Text Case Converter */}
                <div className="p-4 sm:p-6 rounded-lg bg-card border border-border shadow">
                  <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <div className="h-6 w-6 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Search className="h-4 w-4 text-accent" />
                    </div>
                    Text Case Converter FAQ
                  </h2>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">What's the fastest way to convert text to Title Case for headlines?</h3>
                      <p>Paste your text, toggle cleanup if needed, and select Title Case. We handle common small‑word rules and punctuation, producing headline‑ready output you can copy instantly.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">How do I keep underscores or dashes when switching between snake_case and kebab‑case?</h3>
                      <p>Convert to the destination style directly. We normalize whitespace first, then map spaces to underscores (snake_case) or dashes (kebab‑case) without altering existing separators unexpectedly.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Can I convert large blocks of Unicode text without breaking characters?</h3>
                      <p>Yes. The converter preserves Unicode, accents, and emoji. Only letter case is modified; symbols and punctuation remain intact unless you choose cleanup options.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">When should I use camelCase vs PascalCase in code?</h3>
                      <p>camelCase is typical for variables and functions; PascalCase is used for classes, React components, and types. Convert between them to enforce consistent naming across files.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">What's the best way to prepare SEO‑friendly slugs?</h3>
                      <p>Use kebab‑case for clean URLs, then review stop words as needed. Combine with our cleanup to trim extra spaces and normalize quotes before converting.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Does the tool support sentence case for long paragraphs?</h3>
                      <p>Yes. Sentence case capitalizes the first character and lowers the rest, ideal for body text. You can still fine‑tune capitalization for names or acronyms afterward.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">How can I quickly copy all versions for documentation?</h3>
                      <p>Use "Download All" to export every conversion (UPPERCASE, Title Case, camelCase, etc.) into a single text file—useful for style guides and handoffs.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Will formatting like line breaks or indentation be changed?</h3>
                      <p>By default, we minimize whitespace changes. Enable cleanup to normalize spaces and line breaks; disable it to preserve original formatting exactly.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">Can I use the tool offline?</h3>
                      <p>Yes for most conversions. The page processes text in your browser, so case changes, cleanup, and copy actions work without a network connection.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-heading-accent">What's the difference between Title Case and Sentence case?</h3>
                      <p>Title Case capitalizes principal words (great for headlines). Sentence case capitalizes only the first letter of the sentence—better for readable paragraphs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Sidebar with AdSense */}
            <div className="hidden lg:block w-64 xl:w-72">
              <div className="sticky top-32 space-y-6">
                <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}