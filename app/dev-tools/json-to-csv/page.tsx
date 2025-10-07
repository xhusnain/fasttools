import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JSONToCSV } from "@/components/json-to-csv"
import Link from "next/link"

export const metadata: Metadata = {
  title: "JSON to CSV Converter — Convert and Download CSV Online | SmartToolboxes",
  description:
    "Convert JSON to CSV instantly. Supports arrays/objects, pretty print, delimiter options, and download. Great for data analysis and spreadsheets.",
  keywords: [
    "json to csv",
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
    "javascript json to csv"
  ],
  alternates: { canonical: "https://www.smarttoolboxes.com/dev-tools/json-to-csv" },
  openGraph: {
    title: "JSON to CSV Converter — Instant Download",
    description: "Convert JSON arrays/objects to CSV with delimiter options and download.",
    url: "https://www.smarttoolboxes.com/dev-tools/json-to-csv",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "JSON to CSV Converter", description: "Fast online JSON → CSV with download." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "JSON to CSV Converter",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      url: "https://www.smarttoolboxes.com/dev-tools/json-to-csv",
      description:
        "Convert JSON data to CSV with headers, delimiter options, and instant download.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Arrays/objects", "Delimiter options", "Download CSV", "Copy results"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.smarttoolboxes.com" },
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

        <JSONToCSV />

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
      </div>
    </div>
  )
}
