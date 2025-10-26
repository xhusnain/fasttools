import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PDFUnlocker } from "@/components/pdf-unlocker"
import { AdSpace } from "@/components/ad-space"
import Link from "next/link"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fasttools.store"),
  title: "PDF Unlocker | Remove PDF Password Protection | FastTools",
  description:
    "Unlock password‑protected PDFs in your browser. Remove restrictions and access your files quickly and securely.",
  keywords: [
    "pdf unlocker",
    "remove pdf password",
    "unlock pdf",
    "pdf password remover",
    "decrypt pdf",
    "unlock pdf online",
    "open locked pdf",
    "remove pdf restrictions",
    "pdf owner password",
    "pdf user password",
    "secure pdf unlock",
    "in browser pdf unlock",
    "no upload unlock",
    "free pdf unlocker"
  ],
  alternates: { canonical: "https://www.fasttools.store/image-tools/pdf-unlocker" },
  openGraph: {
    title: "PDF Unlocker — Remove Passwords",
    description: "Unlock password‑protected PDFs securely in your browser.",
    url: "https://www.fasttools.store/image-tools/pdf-unlocker",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "PDF Unlocker Tool",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: { card: "summary_large_image", title: "PDF Unlocker", description: "Remove PDF passwords and restrictions online." },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "PDF Unlocker",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: "https://www.fasttools.store/image-tools/pdf-unlocker",
      description:
        "Remove PDF passwords and restrictions securely in the browser.",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: ["Owner/user password", "In‑browser unlock", "Copy/save"],
      publisher: { "@type": "Organization", name: "SmartToolboxes", url: "https://www.fasttools.store" },
    }),
  },
}

export default function PDFUnlockerPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mt-8 mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">PDF Unlocker Tool</h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Remove password protection from PDF files. Unlock your documents quickly and securely in your browser.
          </p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <PDFUnlocker />
          
          {/* Second Ad Space - After Tool */}
          <div className="my-8">
            <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>

          <div className="prose prose-sm max-w-none mt-10">
            <h2 className="text-2xl font-bold mb-4 text-foreground">How to Unlock a PDF</h2>
            <ol className="list-decimal pl-5 text-muted-foreground">
              <li>Upload the PDF; enter the password if you know it.</li>
              <li>Remove restrictions and download the unlocked file.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">Related Tools</h2>
            <ul className="list-disc pl-5 text-muted-foreground">
              <li><Link href="/image-tools/pdf-tools">PDF Splitter & Merger</Link></li>
              <li><Link href="/image-tools/image-to-text">Image to Text (OCR)</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
