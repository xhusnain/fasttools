import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiQrGenerator } from "@/components/ai-qr-generator"

export const metadata: Metadata = {
  title: "AI QR Art Generator - Create Custom QR Codes | ToolifyHub",
  description:
    "Generate beautiful, customizable QR codes with artistic styling. Perfect for marketing, business cards, and creative projects.",
  keywords: "QR code generator, QR art, custom QR codes, artistic QR, QR code design",
}

export default function QrGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Tools", href: "/ai-tools" },
          { label: "QR Generator", href: "/ai-tools/qr-generator" },
        ]}
      />

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">AI QR Art Generator</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Create beautiful, customizable QR codes with your choice of colors. Perfect for business and creative use.
          </p>
        </div>

        <AiQrGenerator />
      </div>
    </div>
  )
}
