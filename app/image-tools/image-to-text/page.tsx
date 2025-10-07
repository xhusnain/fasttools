import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageToText } from "@/components/image-to-text"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Image to Text (OCR) — Extract Text from Images Online | SmartToolboxes",
  description:
    "Convert images to text instantly with accurate OCR. Extract text from photos, scans, screenshots, and PDFs. Supports JPG, PNG, JPEG.",
  keywords: [
    "image to text",
    "ocr converter",
    "photo to text",
    "extract text from image",
    "online ocr",
    "free ocr tool",
    "jpg to text",
    "png to text",
    "jpeg to text",
    "scan to text",
    "pdf image to text",
    "handwritten ocr",
    "printed text ocr",
    "table ocr",
    "multi-language ocr",
    "ocr accuracy",
    "copy text from image",
    "ocr privacy",
    "ocr in browser",
    "no upload ocr",
    "business card ocr",
    "receipt ocr",
    "document ocr",
    "whiteboard ocr",
    "screenshot ocr",
    "code screenshot to text",
    "error message from image",
    "ocr for students",
    "ocr for research",
    "ocr for accessibility",
    "ocr for notes",
    "ocr batch",
    "ocr clipboard",
    "ocr tesseract",
    "ocr engine",
    "ocr preprocessing",
    "ocr deskew",
    "ocr denoise",
    "ocr contrast",
    "ocr languages",
    "ocr english",
    "ocr arabic",
    "ocr hindi",
    "ocr chinese",
    "ocr japanese",
    "ocr korean",
    "ocr spanish",
    "ocr french",
    "free online ocr",
    "best image to text",
    "fasttools ocr"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/image-to-text" },
  openGraph: {
    title: "Image to Text (OCR) — Extract Text from Images",
    description: "Accurate online OCR for photos, scans, and screenshots.",
    url: "https://www.fasttools.store/image-tools/image-to-text",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Image to Text (OCR)", description: "Extract text from images online." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Image to Text (OCR)",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/image-tools/image-to-text",
      description:
        "Convert images to editable text with accurate OCR for photos, scans, and screenshots.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Multi‑format input", "Copy text", "In‑browser OCR"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function ImageToTextPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Image Tools", href: "/image-tools" },
            { label: "Image to Text", href: "/image-tools/image-to-text" },
          ]}
        />

        <div className="mt-8 mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Image to Text Converter (OCR)
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Extract text from images instantly using advanced OCR technology. Perfect for digitizing documents,
            screenshots, and photos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <ImageToText />
          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Use</h2>
            <ol className="list-decimal pl-5 text-muted-foreground">
              <li>Upload a JPG/PNG or paste an image.</li>
              <li>Run OCR and review extracted text; copy to clipboard.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Use Cases</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li>Digitize printed documents and notes.</li>
              <li>Extract code or error messages from screenshots.</li>
              <li>Make images accessible by providing selectable text.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/image-tools/screenshot-to-text">Screenshot to Text</Link></li>
              <li><Link href="/image-tools/pdf-tools">PDF Split & Merge</Link></li>
              <li><Link href="/image-tools/pdf-unlocker">PDF Unlocker</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
