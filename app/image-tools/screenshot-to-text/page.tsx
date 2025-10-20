import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ScreenshotToText } from "@/components/screenshot-to-text"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Screenshot to Text | Extract Text from Images | FastTools",
  description:
    "Extract text from screenshots instantly using OCR. Convert code snippets, error messages, and UI text to editable format.",
  keywords: [
    "screenshot to text",
    "extract text from screenshot",
    "screenshot ocr",
    "code snippet extractor",
    "error message converter",
    "ui text ocr",
    "copy text from screenshot",
    "ocr for developers",
    "ocr for documentation",
    "ocr online",
    "free screenshot ocr"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/screenshot-to-text" },
  openGraph: {
    title: "Screenshot to Text — OCR",
    description: "Extract text from screenshots (code, errors, UI) into editable text.",
    url: "https://www.fasttools.store/image-tools/screenshot-to-text",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Screenshot to Text", description: "Extract text from screenshots with OCR." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Screenshot to Text",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/image-tools/screenshot-to-text",
      description:
        "OCR tool to extract text from screenshots of code, errors, and UI.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Upload screenshot", "Copy text", "In‑browser OCR"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function ScreenshotToTextPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Image Tools", href: "/image-tools" },
            { label: "Screenshot to Text", href: "/image-tools/screenshot-to-text" },
          ]}
        />

        <div className="mt-8 mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Screenshot to Text Extractor
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Extract text from screenshots using OCR technology. Perfect for code snippets, error messages, and any text
            content.
          </p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <ScreenshotToText />
          
          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use</h2>
            <ol className="list-decimal pl-5 text-muted-foreground">
              <li>Upload a screenshot or paste from clipboard.</li>
              <li>Run OCR; copy the extracted text for docs or tickets.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/image-tools/image-to-text">Image to Text (OCR)</Link></li>
              <li><Link href="/image-tools/pdf-tools">PDF Splitter & Merger</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
