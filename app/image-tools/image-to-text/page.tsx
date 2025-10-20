import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageToText } from "@/components/image-to-text"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "Free Image to Text (OCR) | Extract Text from Images Online | FastTools",
  description:
    "Convert images to text instantly with accurate OCR. Extract text from photos, scans, screenshots, and PDFs. Supports JPG, PNG, JPEG.",
  keywords: [
    // Primary Keywords (20)
    "image to text",
    "free image to text",
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
    
    // Secondary Keywords (20)
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
    
    // Long-tail Keywords (20)
    "free online image to text",
    "best image to text online",
    "image to text with live preview",
    "free image to text tool online",
    "online image to text free",
    "image to text online free",
    "ocr converter free online",
    "photo to text free online",
    "extract text from image free online",
    "online ocr free online",
    "free ocr tool free online",
    "jpg to text free online",
    "png to text free online",
    "jpeg to text free online",
    "scan to text free online",
    "pdf image to text free online",
    "handwritten ocr free online",
    "printed text ocr free online",
    "table ocr free online",
    "multi-language ocr free online",
    
    // Additional SEO Keywords
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
    "fasttools ocr",
    "image to text online",
    "ocr converter online",
    "photo to text online",
    "extract text from image online",
    "online ocr online",
    "free ocr tool online",
    "jpg to text online",
    "png to text online",
    "jpeg to text online",
    "scan to text online",
    "pdf image to text online",
    "handwritten ocr online",
    "printed text ocr online",
    "table ocr online",
    "multi-language ocr online",
    "ocr accuracy online",
    "copy text from image online",
    "ocr privacy online",
    "ocr in browser online",
    "no upload ocr online",
    "business card ocr online",
    "receipt ocr online",
    "document ocr online",
    "whiteboard ocr online",
    "screenshot ocr online",
    "code screenshot to text online",
    "error message from image online",
    "ocr for students online",
    "ocr for research online",
    "ocr for accessibility online",
    "ocr for notes online",
    "ocr batch online",
    "ocr clipboard online",
    "ocr tesseract online",
    "ocr engine online",
    "ocr preprocessing online",
    "ocr deskew online",
    "ocr denoise online",
    "ocr contrast online",
    "ocr languages online",
    "ocr english online",
    "ocr arabic online",
    "ocr hindi online",
    "ocr chinese online",
    "ocr japanese online",
    "ocr korean online",
    "ocr spanish online",
    "ocr french online",
    "free online ocr online",
    "best image to text online",
    "fasttools ocr online",
    "image to text free",
    "ocr converter free",
    "photo to text free",
    "extract text from image free",
    "online ocr free",
    "free ocr tool free",
    "jpg to text free",
    "png to text free",
    "jpeg to text free",
    "scan to text free",
    "pdf image to text free",
    "handwritten ocr free",
    "printed text ocr free",
    "table ocr free",
    "multi-language ocr free",
    "ocr accuracy free",
    "copy text from image free",
    "ocr privacy free",
    "ocr in browser free",
    "no upload ocr free",
    "business card ocr free",
    "receipt ocr free",
    "document ocr free",
    "whiteboard ocr free",
    "screenshot ocr free",
    "code screenshot to text free",
    "error message from image free",
    "ocr for students free",
    "ocr for research free",
    "ocr for accessibility free",
    "ocr for notes free",
    "ocr batch free",
    "ocr clipboard free",
    "ocr tesseract free",
    "ocr engine free",
    "ocr preprocessing free",
    "ocr deskew free",
    "ocr denoise free",
    "ocr contrast free",
    "ocr languages free",
    "ocr english free",
    "ocr arabic free",
    "ocr hindi free",
    "ocr chinese free",
    "ocr japanese free",
    "ocr korean free",
    "ocr spanish free",
    "ocr french free",
    "free online ocr free",
    "best image to text free",
    "fasttools ocr free",
    "image to text tool",
    "ocr converter tool",
    "photo to text tool",
    "extract text from image tool",
    "online ocr tool",
    "free ocr tool tool",
    "jpg to text tool",
    "png to text tool",
    "jpeg to text tool",
    "scan to text tool",
    "pdf image to text tool",
    "handwritten ocr tool",
    "printed text ocr tool",
    "table ocr tool",
    "multi-language ocr tool",
    "ocr accuracy tool",
    "copy text from image tool",
    "ocr privacy tool",
    "ocr in browser tool",
    "no upload ocr tool",
    "business card ocr tool",
    "receipt ocr tool",
    "document ocr tool",
    "whiteboard ocr tool",
    "screenshot ocr tool",
    "code screenshot to text tool",
    "error message from image tool",
    "ocr for students tool",
    "ocr for research tool",
    "ocr for accessibility tool",
    "ocr for notes tool",
    "ocr batch tool",
    "ocr clipboard tool",
    "ocr tesseract tool",
    "ocr engine tool",
    "ocr preprocessing tool",
    "ocr deskew tool",
    "ocr denoise tool",
    "ocr contrast tool",
    "ocr languages tool",
    "ocr english tool",
    "ocr arabic tool",
    "ocr hindi tool",
    "ocr chinese tool",
    "ocr japanese tool",
    "ocr korean tool",
    "ocr spanish tool",
    "ocr french tool",
    "free online ocr tool",
    "best image to text tool",
    "fasttools ocr tool"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/image-to-text" },
  openGraph: {
    title: "Free Image to Text (OCR) | Extract Text from Images Online | FastTools",
    description: "Convert images to text instantly with accurate OCR. Extract text from photos, scans, screenshots, and PDFs. Supports JPG, PNG, JPEG.",
    url: "https://www.fasttools.store/image-tools/image-to-text",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Image to Text (OCR) - Extract Text from Images Online",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image to Text (OCR) | Extract Text from Images Online | FastTools",
    description: "Convert images to text instantly with accurate OCR. Extract text from photos, scans, screenshots, and PDFs. Supports JPG, PNG, JPEG.",
    images: ["https://www.fasttools.store/og-image.svg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Image to Text (OCR)",
      alternateName: "OCR Converter",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web Browser",
      url: "https://www.fasttools.store/image-tools/image-to-text",
      description:
        "Convert images to editable text with accurate OCR for photos, scans, and screenshots.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { 
        "@type": "Offer", 
        price: "0", 
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Multi‑format input", 
        "Copy text", 
        "In‑browser OCR",
        "Image to text",
        "OCR converter",
        "Photo to text",
        "Extract text from image",
        "Online OCR",
        "Free OCR tool",
        "Multi-language OCR"
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
      downloadUrl: "https://www.fasttools.store/image-tools/image-to-text",
      screenshot: "https://www.fasttools.store/og-image.svg",
      keywords: "image to text, free image to text, OCR converter, photo to text, extract text from image, online OCR, free OCR tool",
      about: {
        "@type": "Thing",
        name: "OCR and Text Extraction",
        description: "Free online tools for optical character recognition, text extraction from images, and document digitization"
      },
      isPartOf: {
        "@type": "WebSite",
        name: "FastTools",
        url: "https://www.fasttools.store"
      }
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

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <ImageToText />
          
          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

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
