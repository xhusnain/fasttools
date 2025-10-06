import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ImageToText } from "@/components/image-to-text"

export const metadata: Metadata = {
  title: "Image to Text Converter - Free OCR Tool Online | FastTools",
  description:
    "Convert images to text instantly with our free OCR tool. Extract text from photos, screenshots, and documents. Supports JPG, PNG, and JPEG formats.",
  keywords:
    "image to text, OCR converter, photo to text, screenshot to text, extract text from image, online OCR, free OCR tool",
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
        </div>
      </div>
    </div>
  )
}
