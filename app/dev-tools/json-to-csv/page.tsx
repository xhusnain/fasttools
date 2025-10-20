import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JSONToCSV } from "@/components/json-to-csv"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free JSON to CSV Converter | Convert and Download CSV Online | FastTools",
  description:
    "Convert JSON to CSV instantly. Supports arrays/objects, pretty print, delimiter options, and download. Great for data analysis and spreadsheets.",
  keywords: [
    // Primary Keywords (20)
    "json to csv",
    "free json to csv",
    "convert json to csv",
    "csv converter",
    "json parser",
    "download csv",
    "export to csv",
    "array of objects to csv",
    "flatten json",
    "nested json to csv",
    "json schema to csv",
    "json keys to columns",
    "delimiter options",
    ", vs ; delimiter",
    "utf-8 csv",
    "excel csv",
    "google sheets csv",
    "data cleaning",
    "data wrangling",
    "etl helper",
    
    // Secondary Keywords (20)
    "api response to csv",
    "jsonlines to csv",
    "jsonl to csv",
    "newline handling",
    "quote escape",
    "header row",
    "no header csv",
    "pretty print json",
    "minify json",
    "json validator",
    "csv formatter",
    "copy csv",
    "save csv",
    "open source data tools",
    "developer utilities",
    "free json to csv",
    "online json to csv",
    "bulk json convert",
    "large json file convert",
    "stream json to csv",
    
    // Long-tail Keywords (20)
    "free online json to csv converter",
    "best json to csv converter online",
    "json to csv converter with live preview",
    "free json to csv converter tool online",
    "online json to csv converter free",
    "json to csv converter online free",
    "convert json to csv free online",
    "csv converter free online",
    "json parser free online",
    "download csv free online",
    "export to csv free online",
    "array of objects to csv free online",
    "flatten json free online",
    "nested json to csv free online",
    "json schema to csv free online",
    "json keys to columns free online",
    "delimiter options free online",
    ", vs ; delimiter free online",
    "utf-8 csv free online",
    "excel csv free online",
    
    // Additional SEO Keywords
    "google sheets csv",
    "data cleaning",
    "data wrangling",
    "etl helper",
    "api response to csv",
    "jsonlines to csv",
    "jsonl to csv",
    "newline handling",
    "quote escape",
    "header row",
    "no header csv",
    "pretty print json",
    "minify json",
    "json validator",
    "csv formatter",
    "copy csv",
    "save csv",
    "open source data tools",
    "developer utilities",
    "free json to csv",
    "online json to csv",
    "bulk json convert",
    "large json file convert",
    "stream json to csv",
    "csv for spreadsheets",
    "csv for analysis",
    "csv for import",
    "csv delimiter comma",
    "csv delimiter semicolon",
    "escape quotes csv",
    "rfc4180 csv",
    "typescript json to csv",
    "javascript json to csv",
    "json to csv online",
    "convert json to csv online",
    "csv converter online",
    "json parser online",
    "download csv online",
    "export to csv online",
    "array of objects to csv online",
    "flatten json online",
    "nested json to csv online",
    "json schema to csv online",
    "json keys to columns online",
    "delimiter options online",
    ", vs ; delimiter online",
    "utf-8 csv online",
    "excel csv online",
    "google sheets csv online",
    "data cleaning online",
    "data wrangling online",
    "etl helper online",
    "api response to csv online",
    "jsonlines to csv online",
    "jsonl to csv online",
    "newline handling online",
    "quote escape online",
    "header row online",
    "no header csv online",
    "pretty print json online",
    "minify json online",
    "json validator online",
    "csv formatter online",
    "copy csv online",
    "save csv online",
    "open source data tools online",
    "developer utilities online",
    "free json to csv online",
    "online json to csv online",
    "bulk json convert online",
    "large json file convert online",
    "stream json to csv online",
    "csv for spreadsheets online",
    "csv for analysis online",
    "csv for import online",
    "csv delimiter comma online",
    "csv delimiter semicolon online",
    "escape quotes csv online",
    "rfc4180 csv online",
    "typescript json to csv online",
    "javascript json to csv online",
    "json to csv free",
    "convert json to csv free",
    "csv converter free",
    "json parser free",
    "download csv free",
    "export to csv free",
    "array of objects to csv free",
    "flatten json free",
    "nested json to csv free",
    "json schema to csv free",
    "json keys to columns free",
    "delimiter options free",
    ", vs ; delimiter free",
    "utf-8 csv free",
    "excel csv free",
    "google sheets csv free",
    "data cleaning free",
    "data wrangling free",
    "etl helper free",
    "api response to csv free",
    "jsonlines to csv free",
    "jsonl to csv free",
    "newline handling free",
    "quote escape free",
    "header row free",
    "no header csv free",
    "pretty print json free",
    "minify json free",
    "json validator free",
    "csv formatter free",
    "copy csv free",
    "save csv free",
    "open source data tools free",
    "developer utilities free",
    "free json to csv free",
    "online json to csv free",
    "bulk json convert free",
    "large json file convert free",
    "stream json to csv free",
    "csv for spreadsheets free",
    "csv for analysis free",
    "csv for import free",
    "csv delimiter comma free",
    "csv delimiter semicolon free",
    "escape quotes csv free",
    "rfc4180 csv free",
    "typescript json to csv free",
    "javascript json to csv free"
  ],
  alternates: { canonical: "https://www.fasttools.store/dev-tools/json-to-csv" },
  openGraph: {
    title: "Free JSON to CSV Converter | Convert and Download CSV Online | FastTools",
    description: "Convert JSON to CSV instantly. Supports arrays/objects, pretty print, delimiter options, and download. Great for data analysis and spreadsheets.",
    url: "https://www.fasttools.store/dev-tools/json-to-csv",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free JSON to CSV Converter - Convert and Download CSV Online",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free JSON to CSV Converter | Convert and Download CSV Online | FastTools",
    description: "Convert JSON to CSV instantly. Supports arrays/objects, pretty print, delimiter options, and download. Great for data analysis and spreadsheets.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "JSON to CSV Converter",
      alternateName: "JSON CSV Converter",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/dev-tools/json-to-csv",
      description:
        "Convert JSON data to CSV with headers, delimiter options, and instant download.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Arrays/objects", 
        "Delimiter options", 
        "Download CSV", 
        "Copy results",
        "Data conversion",
        "CSV formatting",
        "Excel compatibility",
        "Google Sheets support",
        "Data analysis",
        "ETL tools"
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
      downloadUrl: "https://www.fasttools.store/dev-tools/json-to-csv",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "json to csv, free json to csv, convert json to csv, csv converter, json parser, download csv, export to csv",
      about: {
        "@type": "Thing",
        name: "Data Conversion",
        description: "Free online tools for converting JSON data to CSV format for analysis and spreadsheets"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
    }),
  },
}

export default function JSONToCSVPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
          { label: "JSON to CSV", href: "/dev-tools/json-to-csv" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">JSON to CSV Converter — Instant Download</h1>
          <p className="text-lg text-muted-foreground text-balance">Convert arrays/objects to CSV with delimiter options and download.</p>
        </div>

        {/* Top Content Ad */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <JSONToCSV />
        
        {/* Center Content Ad */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24" />
        </div>

        <div className="prose prose-sm max-w-none">
          <h2 className="text-2xl font-bold mt-8 mb-4">How to Convert JSON to CSV</h2>
          <ol className="list-decimal pl-5 text-muted-foreground">
            <li>Paste JSON or upload a file; preview the parsed structure.</li>
            <li>Choose delimiter (comma or semicolon) and include headers if needed.</li>
            <li>Download the CSV or copy to clipboard for Sheets/Excel.</li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4">Tips</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li>Flatten nested objects for clearer CSV columns.</li>
            <li>Ensure consistent keys across array items for complete headers.</li>
            <li>Validate JSON before converting to avoid malformed rows.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Related Tools</h2>
          <ul className="list-disc pl-5 text-muted-foreground">
            <li><Link href="/dev-tools/html-to-markdown">HTML to Markdown</Link></li>
            <li><Link href="/dev-tools/regex-tester">Regex Tester</Link></li>
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
