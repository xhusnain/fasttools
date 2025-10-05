"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Copy, Music } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function AiLyricsGenerator() {
  const [theme, setTheme] = useState("")
  const [genre, setGenre] = useState("")
  const [mood, setMood] = useState("")
  const [lyrics, setLyrics] = useState("")
  const [loading, setLoading] = useState(false)

  const generateLyrics = async () => {
    if (!theme.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/ai/generate-lyrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ theme, genre, mood }),
      })

      const data = await response.json()
      setLyrics(data.lyrics)
    } catch (error) {
      console.error("Error generating lyrics:", error)
    } finally {
      setLoading(false)
    }
  }

  const copyLyrics = () => {
    navigator.clipboard.writeText(lyrics)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="theme">Song Theme</Label>
          <Input
            id="theme"
            placeholder="e.g., love, heartbreak, adventure, dreams"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="h-11"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="genre">Genre (Optional)</Label>
            <Input
              id="genre"
              placeholder="e.g., pop, rock, hip-hop, country"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mood">Mood (Optional)</Label>
            <Input
              id="mood"
              placeholder="e.g., upbeat, melancholic, energetic"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="h-11"
            />
          </div>
        </div>

        <Button onClick={generateLyrics} disabled={loading || !theme.trim()} className="w-full h-11 text-base">
          {loading ? (
            <>
              <LoadingSpinner className="mr-2" />
              Generating Lyrics...
            </>
          ) : (
            <>
              <Music className="mr-2 h-5 w-5" />
              Generate Song Lyrics
            </>
          )}
        </Button>
      </div>

      {lyrics && (
        <Card className="p-6 space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Generated Lyrics</h3>
            <Button variant="outline" size="sm" onClick={copyLyrics}>
              <Copy className="h-4 w-4 mr-2" />
              Copy
            </Button>
          </div>

          <Textarea value={lyrics} readOnly className="min-h-[300px] font-mono text-sm leading-relaxed" />

          <p className="text-sm text-muted-foreground">
            These lyrics are AI-generated. Feel free to modify and use them for your creative projects!
          </p>
        </Card>
      )}
    </div>
  )
}
