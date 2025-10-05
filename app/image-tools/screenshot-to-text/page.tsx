import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ScreenshotToText } from "@/components/screenshot-to-text"

export const metadata: Metadata = {
  title: "Screenshot to Text Extractor - Free OCR Tool | ToolifyHub",
  description:
    "Extract text from screenshots instantly. Convert code snippets, error messages, and any text from screenshots to editable format. Free OCR tool.",
  keywords:
    "screenshot to text, extract text from screenshot, screenshot OCR, code snippet extractor, error message converter",
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

        <div className="max-w-3xl mx-auto animate-slide-up">
          <ScreenshotToText />
        </div>
      </div>
    </div>
  )
}
