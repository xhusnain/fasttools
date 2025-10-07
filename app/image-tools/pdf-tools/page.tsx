import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PDFTools } from "@/components/pdf-tools"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF Splitter & Merger — Free Online PDF Tools | SmartToolboxes",
  description:
    "Split and merge PDFs in your browser. Combine multiple files or split by pages. Fast, secure, and free PDF tools.",
  keywords: [
    "pdf splitter",
    "pdf merger",
    "combine pdf",
    "split pdf",
    "merge pdf online",
    "pdf tools",
    "free pdf editor",
    "pdf pages to files",
    "reorder pdf pages",
    "delete pdf pages",
    "extract pdf pages",
    "pdf privacy",
    "in browser pdf",
    "no upload pdf",
    "secure pdf tools",
    "pdf toolkit",
    "pdf utilities",
    "pdf split by range",
    "merge many pdfs",
    "pdf processing online"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/pdf-tools" },
  openGraph: {
    title: "PDF Splitter & Merger — Free Online PDF Tools",
    description: "Split and merge PDFs securely in your browser.",
    url: "https://www.fasttools.store/image-tools/pdf-tools",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "PDF Splitter & Merger", description: "Free online PDF tools for split/merge." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "PDF Splitter & Merger",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/image-tools/pdf-tools",
      description:
        "Split and merge PDF files securely in the browser with page range support.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Split by pages", "Merge files", "Reorder/delete pages"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
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
          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use</h2>
            <ol className="list-decimal pl-5 text-muted-foreground">
              <li>Upload PDF files and choose Split or Merge mode.</li>
              <li>For Split, select page ranges; for Merge, reorder files, then export.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/image-tools/pdf-unlocker">PDF Unlocker</Link></li>
              <li><Link href="/image-tools/screenshot-to-text">Screenshot to Text</Link></li>
              <li><Link href="/image-tools/image-to-text">Image to Text (OCR)</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
