import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PDFTools } from "@/components/pdf-tools"

export const metadata: Metadata = {
  title: "PDF Splitter & Merger - Free Online PDF Tools | ToolifyHub",
  description:
    "Split and merge PDF files online for free. Combine multiple PDFs or split large documents into separate pages. Fast, secure, and easy to use.",
  keywords: "PDF splitter, PDF merger, combine PDF, split PDF, merge PDF online, PDF tools, free PDF editor",
}

export default function PDFToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Image Tools", href: "/image-tools" },
            { label: "PDF Tools", href: "/image-tools/pdf-tools" },
          ]}
        />

        <div className="mt-8 mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">PDF Splitter & Merger</h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Split large PDFs into separate pages or merge multiple PDFs into one document. All processing happens
            securely in your browser.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <PDFTools />
        </div>
      </div>
    </div>
  )
}
