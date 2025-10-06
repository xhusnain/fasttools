import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { PDFUnlocker } from "@/components/pdf-unlocker"

export const metadata: Metadata = {
  title: "PDF Unlocker - Remove PDF Password Protection Online | FastTools",
  description:
    "Unlock password-protected PDF files online for free. Remove PDF restrictions and access your documents instantly. Secure and easy to use.",
  keywords: "PDF unlocker, remove PDF password, unlock PDF, PDF password remover, decrypt PDF, free PDF unlocker",
}

export default function PDFUnlockerPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Image Tools", href: "/image-tools" },
            { label: "PDF Unlocker", href: "/image-tools/pdf-unlocker" },
          ]}
        />

        <div className="mt-8 mb-8 text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">PDF Unlocker Tool</h1>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Remove password protection from PDF files. Unlock your documents quickly and securely in your browser.
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <PDFUnlocker />
        </div>
      </div>
    </div>
  )
}
