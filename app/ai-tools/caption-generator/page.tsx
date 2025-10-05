import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiCaptionGenerator } from "@/components/ai-caption-generator"

export const metadata: Metadata = {
  title: "AI Image Caption Generator - Social Media Captions | ToolifyHub",
  description:
    "Generate engaging social media captions for your images with AI. Perfect for Instagram, Facebook, Twitter, and LinkedIn.",
  keywords: "caption generator, Instagram captions, social media captions, AI captions, content creation",
}

export default function CaptionGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Tools", href: "/ai-tools" },
          { label: "Caption Generator", href: "/ai-tools/caption-generator" },
        ]}
      />

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">AI Image Caption Generator</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Generate engaging captions for your social media posts with AI. Get multiple caption options instantly.
          </p>
        </div>

        <AiCaptionGenerator />
      </div>
    </div>
  )
}
