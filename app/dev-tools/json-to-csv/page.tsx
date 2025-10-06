import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { JSONToCSV } from "@/components/json-to-csv"

export const metadata: Metadata = {
  title: "JSON to CSV Converter - Convert JSON to CSV Online | FastTools",
  description:
    "Free online JSON to CSV converter. Convert JSON data to CSV format instantly. Download or copy the results. Perfect for data analysis.",
  keywords: "JSON to CSV, convert JSON, CSV converter, JSON parser, data converter",
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
          <h1 className="text-4xl font-bold text-balance">JSON to CSV Converter</h1>
          <p className="text-lg text-muted-foreground text-balance">Convert JSON data to CSV format instantly</p>
        </div>

        <JSONToCSV />
      </div>
    </div>
  )
}
