import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiMemeGenerator } from "@/components/ai-meme-generator"

export const metadata: Metadata = {
  title: "AI Meme Generator - Create Funny Meme Text | ToolifyHub",
  description:
    "Generate hilarious meme text with AI. Create top and bottom text for any meme template. Perfect for social media content creators.",
  keywords: "meme generator, AI meme, funny memes, meme text, meme creator, social media memes",
}

export default function MemeGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Tools", href: "/ai-tools" },
          { label: "Meme Generator", href: "/ai-tools/meme-generator" },
        ]}
      />

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">AI Meme Generator</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Generate funny and relatable meme text with AI. Perfect for creating viral content for social media.
          </p>
        </div>

        <AiMemeGenerator />
      </div>
    </div>
  )
}
