"use client"

import { useState } from "react"
import { GButton } from "@/components/globalcomponents/gbutton"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Copy, Sparkles } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

export function AiMemeGenerator() {
  const [topic, setTopic] = useState("")
  const [style, setStyle] = useState("")
  const [memeText, setMemeText] = useState<{ top: string; bottom: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const generateMeme = async () => {
    if (!topic.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate-meme",
          data: { topic, style }
        }),
      })

      const data = await response.json()
      setMemeText(data.memeText)
    } catch (error) {
      console.error("Error generating meme:", error)
    } finally {
      setLoading(false)
    }
  }

  const copyText = () => {
    if (memeText) {
      navigator.clipboard.writeText(`Top: ${memeText.top}\nBottom: ${memeText.bottom}`)
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="topic">Meme Topic</Label>
          <Input
            id="topic"
            placeholder="e.g., Monday mornings, coding bugs, coffee addiction"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="style">Style (Optional)</Label>
          <Input
            id="style"
            placeholder="e.g., sarcastic, wholesome, relatable"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
            className="h-11"
          />
        </div>

        <GButton onClick={generateMeme} disabled={loading || !topic.trim()} className="w-full h-11 text-base">
          {loading ? (
            <>
              <LoadingSpinner className="mr-2" />
              Generating Meme...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Generate Meme Text
            </>
          )}
        </GButton>
      </div>

      {memeText && (
        <Card className="p-6 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Generated Meme Text</h3>
            <GButton variant="outline" size="sm" onClick={copyText}>
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </GButton>
          </div>

          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-2">Top Text</p>
              <p className="text-xl font-bold">{memeText.top}</p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-2">Bottom Text</p>
              <p className="text-xl font-bold">{memeText.bottom}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Use these texts with your favorite meme template or meme generator!
          </p>
        </Card>
      )}
    </div>
  )
}
