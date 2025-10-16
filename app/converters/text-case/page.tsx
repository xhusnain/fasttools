import { TextCaseConverter } from "@/components/text-case-converter"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"
import { Type } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Text Case Converter | Uppercase, Lowercase, Title Case, camelCase | FastTools",
  description:
    "Convert text to uppercase, lowercase, Title Case, Sentence case, camelCase, snake_case instantly. Clean formatting for writing and code.",
  keywords: [
    // Primary Keywords (20)
    "text case converter",
    "free text case converter",
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
    "text case converter online",
    "uppercase converter online",
    "lowercase converter online",
    "title case converter online",
    "sentence case converter online",
    "camelCase converter online",
    "snake_case converter online",
    "kebab-case converter online",
    
    // Secondary Keywords (20)
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
    
    // Long-tail Keywords (20)
    "free online text case converter",
    "best text case converter online",
    "text case converter with live preview",
    "free text case converter tool online",
    "online text case converter free",
    "text case converter online free",
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
    "text case converter for developers",
    "text case converter for writers",
    "text case converter for seo",
    "text case converter for programming",
    
    // Additional SEO Keywords
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
    
    // Trending 2024-2025 Keywords
    "ai text case converter",
    "smart text formatting tool",
    "bulk text case converter",
    "advanced text case converter",
    "professional text case converter",
    "text case converter with preview",
    "real-time text case converter",
    "multi-language text case converter",
    "unicode text case converter",
    "accent text case converter",
    "emoji text case converter",
    "special character text case converter",
    "programming text case converter",
    "seo text case converter",
    "social media text case converter",
    "blog text case converter",
    "academic text case converter",
    "business text case converter",
    "marketing text case converter",
    "content creation text case converter",
    "developer text case converter",
    "writer text case converter",
    "editor text case converter",
    "journalist text case converter",
    "student text case converter",
    "teacher text case converter",
    "researcher text case converter",
    "analyst text case converter",
    "manager text case converter",
    "entrepreneur text case converter",
    "freelancer text case converter",
    "consultant text case converter",
    "agency text case converter",
    "startup text case converter",
    "enterprise text case converter",
    "small business text case converter",
    "medium business text case converter",
    "large business text case converter",
    "nonprofit text case converter",
    "government text case converter",
    "education text case converter",
    "healthcare text case converter",
    "finance text case converter",
    "technology text case converter",
    "retail text case converter",
    "manufacturing text case converter",
    "service text case converter",
    "consulting text case converter",
    "marketing text case converter",
    "advertising text case converter",
    "public relations text case converter",
    "communications text case converter",
    "media text case converter",
    "publishing text case converter",
    "journalism text case converter",
    "blogging text case converter",
    "social media text case converter",
    "content marketing text case converter",
    "digital marketing text case converter",
    "email marketing text case converter",
    "search engine optimization text case converter",
    "pay per click text case converter",
    "social media marketing text case converter",
    "influencer marketing text case converter",
    "affiliate marketing text case converter",
    "content strategy text case converter",
    "brand strategy text case converter",
    "creative strategy text case converter",
    "digital strategy text case converter",
    "marketing strategy text case converter",
    "business strategy text case converter",
    "growth strategy text case converter",
    "expansion strategy text case converter",
    "international strategy text case converter",
    "global strategy text case converter",
    "local strategy text case converter",
    "regional strategy text case converter",
    "national strategy text case converter",
    "international business text case converter",
    "global business text case converter",
    "local business text case converter",
    "regional business text case converter",
    "national business text case converter",
    "small business strategy text case converter",
    "medium business strategy text case converter",
    "large business strategy text case converter",
    "startup strategy text case converter",
    "scale up strategy text case converter",
    "growth stage strategy text case converter",
    "mature stage strategy text case converter",
    "decline stage strategy text case converter",
    "turnaround strategy text case converter",
    "transformation strategy text case converter",
    "digital transformation text case converter",
    "business transformation text case converter",
    "organizational transformation text case converter",
    "cultural transformation text case converter",
    "operational transformation text case converter",
    "strategic transformation text case converter",
    "tactical transformation text case converter",
    "operational excellence text case converter",
    "strategic excellence text case converter",
    "tactical excellence text case converter",
    "operational efficiency text case converter",
    "strategic efficiency text case converter",
    "tactical efficiency text case converter",
    "operational effectiveness text case converter",
    "strategic effectiveness text case converter",
    "tactical effectiveness text case converter",
    "operational performance text case converter",
    "strategic performance text case converter",
    "tactical performance text case converter",
    "operational results text case converter",
    "strategic results text case converter",
    "tactical results text case converter",
    "operational outcomes text case converter",
    "strategic outcomes text case converter",
    "tactical outcomes text case converter",
    "operational impact text case converter",
    "strategic impact text case converter",
    "tactical impact text case converter",
    "operational value text case converter",
    "strategic value text case converter",
    "tactical value text case converter",
    "operational benefit text case converter",
    "strategic benefit text case converter",
    "tactical benefit text case converter",
    "operational advantage text case converter",
    "strategic advantage text case converter",
    "tactical advantage text case converter",
    "operational opportunity text case converter",
    "strategic opportunity text case converter",
    "tactical opportunity text case converter",
    "operational potential text case converter",
    "strategic potential text case converter",
    "tactical potential text case converter",
    "operational capability text case converter",
    "strategic capability text case converter",
    "tactical capability text case converter",
    "operational capacity text case converter",
    "strategic capacity text case converter",
    "tactical capacity text case converter",
    "operational resource text case converter",
    "strategic resource text case converter",
    "tactical resource text case converter",
    "operational asset text case converter",
    "strategic asset text case converter",
    "tactical asset text case converter",
    "operational investment text case converter",
    "strategic investment text case converter",
    "tactical investment text case converter",
    "operational return text case converter",
    "strategic return text case converter",
    "tactical return text case converter",
    "operational roi text case converter",
    "strategic roi text case converter",
    "tactical roi text case converter",
    "operational profit text case converter",
    "strategic profit text case converter",
    "tactical profit text case converter",
    "operational revenue text case converter",
    "strategic revenue text case converter",
    "tactical revenue text case converter",
    "operational income text case converter",
    "strategic income text case converter",
    "tactical income text case converter",
    "operational earnings text case converter",
    "strategic earnings text case converter",
    "tactical earnings text case converter",
    "operational margin text case converter",
    "strategic margin text case converter",
    "tactical margin text case converter",
    "operational growth text case converter",
    "strategic growth text case converter",
    "tactical growth text case converter",
    "operational expansion text case converter",
    "strategic expansion text case converter",
    "tactical expansion text case converter",
    "operational scaling text case converter",
    "strategic scaling text case converter",
    "tactical scaling text case converter",
    "operational development text case converter",
    "strategic development text case converter",
    "tactical development text case converter",
    "operational improvement text case converter",
    "strategic improvement text case converter",
    "tactical improvement text case converter",
    "operational optimization text case converter",
    "strategic optimization text case converter",
    "tactical optimization text case converter",
    "operational enhancement text case converter",
    "strategic enhancement text case converter",
    "tactical enhancement text case converter",
    "operational innovation text case converter",
    "strategic innovation text case converter",
    "tactical innovation text case converter",
    "operational creativity text case converter",
    "strategic creativity text case converter",
    "tactical creativity text case converter",
    "operational agility text case converter",
    "strategic agility text case converter",
    "tactical agility text case converter",
    "operational flexibility text case converter",
    "strategic flexibility text case converter",
    "tactical flexibility text case converter",
    "operational adaptability text case converter",
    "strategic adaptability text case converter",
    "tactical adaptability text case converter",
    "operational resilience text case converter",
    "strategic resilience text case converter",
    "tactical resilience text case converter",
    "operational sustainability text case converter",
    "strategic sustainability text case converter",
    "tactical sustainability text case converter",
    "operational durability text case converter",
    "strategic durability text case converter",
    "tactical durability text case converter",
    "operational longevity text case converter",
    "strategic longevity text case converter",
    "tactical longevity text case converter",
    "operational stability text case converter",
    "strategic stability text case converter",
    "tactical stability text case converter",
    "operational reliability text case converter",
    "strategic reliability text case converter",
    "tactical reliability text case converter",
    "operational consistency text case converter",
    "strategic consistency text case converter",
    "tactical consistency text case converter",
    "operational quality text case converter",
    "strategic quality text case converter",
    "tactical quality text case converter",
    "operational excellence text case converter",
    "strategic excellence text case converter",
    "tactical excellence text case converter"
  ],
  alternates: { canonical: "https://www.fasttools.store/converters/text-case" },
  openGraph: {
    title: "Free Text Case Converter | Uppercase, Lowercase, Title Case, camelCase | FastTools",
    description:
      "Convert text to uppercase, lowercase, Title Case, Sentence case, camelCase, snake_case instantly. Clean formatting for writing and code.",
    url: "https://fasttools.store/converters/text-case",
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
    title: "Free Text Case Converter | Uppercase, Lowercase, Title Case, camelCase | FastTools",
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
      datePublished: "2024-01-01",
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
    <div className="flex flex-col min-h-screen">
      <div className="relative overflow-hidden">
        {/* Green-focused but vibrant background matching homepage style */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 via-emerald-500/30 via-teal-500/30 to-cyan-500/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-400/10 via-transparent to-transparent"></div>
        
        {/* Green-focused floating particles with accent colors */}
        <div className="absolute top-10 left-10 h-4 w-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
        <div className="absolute top-20 right-20 h-5 w-5 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50"></div>
        <div className="absolute bottom-20 left-20 h-4 w-4 bg-teal-500 rounded-full shadow-lg shadow-teal-500/50"></div>
        <div className="absolute bottom-10 right-10 h-3 w-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
        <div className="absolute top-1/2 left-1/4 h-3 w-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
        <div className="absolute top-1/3 right-1/3 h-4 w-4 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
        
        {/* Green-focused gradient orbs */}
        <div className="absolute -top-32 -left-32 h-48 w-48 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-36 w-36 bg-gradient-to-br from-teal-500/40 to-cyan-500/40 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-8 relative">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Converters", href: "/converters" },
              { label: "Text Case Converter", href: "/converters/text-case" },
            ]}
          />

          <div className="max-w-6xl mx-auto mt-8 space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/30 via-emerald-500/30 via-teal-500/30 to-cyan-500/30 border border-green-400/50 text-white text-sm font-bold mb-6">
                <Type className="h-4 w-4" />
                <span>Professional Text Case Converter</span>
                <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 via-teal-400 via-green-500 to-green-600 leading-tight">
                Free Text Case Converter
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 text-pretty max-w-3xl mx-auto leading-relaxed">
                Convert and clean text instantly: popular writing and programming cases with copy‑ready results. 
                Professional text formatting for developers, writers, and content creators.
              </p>
              
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-white/80">
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/25 to-emerald-500/25 border border-green-400/40">
                  <Type className="h-4 w-4" />
                  <span>6+ Cases</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/25 to-teal-500/25 border border-emerald-400/40">
                  <Type className="h-4 w-4" />
                  <span>Real-time</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/25 to-cyan-500/25 border border-teal-400/40">
                  <Type className="h-4 w-4" />
                  <span>Free Forever</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/25 to-green-600/25 border border-cyan-400/40">
                  <Type className="h-4 w-4" />
                  <span>Professional</span>
                </div>
              </div>
            </div>

            {/* First Ad Space - After Hero Content */}
            <div className="mb-8">
              <div className="text-center mb-2">
                <span className="text-xs text-white/60 font-medium">Advertisement</span>
              </div>
              <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 shadow-xl">
                  <TextCaseConverter />
                </div>

                {/* Second Ad Space - After Tool */}
                <div className="my-8">
                  <div className="text-center mb-2">
                    <span className="text-xs text-white/60 font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
                </div>

                {/* Understanding How This Tool Works */}
                <div className="prose prose-sm max-w-none space-y-6 animate-fade-in-up animation-delay-200">
                  <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                    <h2 className="text-xl font-bold mb-4 text-white">Understanding How This Text Case Converter Works</h2>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Our text case converter uses advanced algorithms and real-time processing to deliver 
                      accurate results instantly. Each conversion is built with precision-engineered formulas that handle 
                      complex text formatting including Unicode characters, special symbols, and international text. 
                      All conversions are optimized for speed and accuracy, ensuring you get reliable results every time.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Real-Time Processing</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Text conversions are performed instantly as you type, with live preview of all case formats. 
                      The converter handles Unicode characters, accents, and special symbols while preserving their original form. 
                      Advanced algorithms ensure proper capitalization rules for different case styles.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Professional Features</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Our converter includes professional features like whitespace cleanup, smart capitalization, 
                      and support for programming case styles. All conversions maintain text integrity while providing 
                      clean, copy-ready results for any application.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20">
                    <h2 className="text-xl font-bold mb-4 text-white">Advanced Usage Techniques</h2>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Master these professional techniques to get the most out of our text case converter and create 
                      perfectly formatted content for any purpose.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Professional Development</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Use camelCase for JavaScript variables and functions, PascalCase for classes and components. 
                      Convert between snake_case for Python and kebab-case for CSS classes. Standardize naming 
                      conventions across different programming languages and frameworks.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">Content Creation</h3>
                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                      Format headlines and titles for different platforms using Title Case. Convert between 
                      sentence case for body text and UPPERCASE for emphasis. Use proper case formatting 
                      for social media posts, blog titles, and marketing content.
                    </p>
                    
                    <h3 className="text-lg font-bold mb-3 text-white">SEO and Marketing</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Format URLs and slugs using kebab-case for better SEO. Convert titles for meta tags 
                      and social media sharing. Use proper case formatting for hashtags and brand names 
                      across different marketing channels and platforms.
                    </p>
                  </div>

                  <div className="mt-8">
                    <div className="text-center mb-2">
                      <span className="text-xs text-white/60 font-medium">Advertisement</span>
                    </div>
                    <AdSpace slot="content" className="w-full h-24 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
                  </div>
                </div>

              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-20">
                  <div className="text-center mb-2">
                    <span className="text-xs text-white/60 font-medium">Advertisement</span>
                  </div>
                  <AdSpace slot="sidebar" className="h-96 border border-white/20 rounded-xl shadow-sm bg-white/5 backdrop-blur-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}