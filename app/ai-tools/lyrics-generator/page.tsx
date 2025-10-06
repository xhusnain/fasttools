import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AiLyricsGenerator } from "@/components/ai-lyrics-generator"

export const metadata: Metadata = {
  title: "AI Song Lyrics Generator - Create Original Lyrics | FastTools",
  description:
    "Generate creative song lyrics with AI for any theme, genre, or mood. Perfect for songwriters and music creators.",
  keywords: "lyrics generator, AI lyrics, song writing, music lyrics, songwriting tool, creative writing",
}

export default function LyricsGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "AI Tools", href: "/ai-tools" },
          { label: "Lyrics Generator", href: "/ai-tools/lyrics-generator" },
        ]}
      />

      <div className="mt-8 max-w-2xl mx-auto space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">AI Song Lyrics Generator</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Generate creative and original song lyrics with AI. Perfect for songwriters, musicians, and creative
            projects.
          </p>
        </div>

        <AiLyricsGenerator />
      </div>
    </div>
  )
}
