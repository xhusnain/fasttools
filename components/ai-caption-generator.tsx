"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Copy, ImageIcon } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function AiCaptionGenerator() {
  const [description, setDescription] = useState("")
  const [platform, setPlatform] = useState("instagram")
  const [captions, setCaptions] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const generateCaptions = async () => {
    if (!description.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/ai/generate-captions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, platform }),
      })

      const data = await response.json()
      setCaptions(data.captions)
    } catch (error) {
      console.error("Error generating captions:", error)
    } finally {
      setLoading(false)
    }
  }

  const copyCaption = (caption: string) => {
    navigator.clipboard.writeText(caption)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="description">Image Description</Label>
          <Textarea
            id="description"
            placeholder="Describe your image... e.g., sunset at the beach, coffee and laptop, workout at gym"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="platform">Platform</Label>
          <select
            id="platform"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full h-11 px-3 rounded-md border border-input bg-background"
          >
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter/X</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>

        <Button onClick={generateCaptions} disabled={loading || !description.trim()} className="w-full h-11 text-base">
          {loading ? (
            <>
              <LoadingSpinner className="mr-2" />
              Generating Captions...
            </>
          ) : (
            <>
              <ImageIcon className="mr-2 h-5 w-5" />
              Generate Captions
            </>
          )}
        </Button>
      </div>

      {captions.length > 0 && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="font-semibold text-lg">Generated Captions</h3>
          {captions.map((caption, index) => (
            <Card key={index} className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm leading-relaxed flex-1">{caption}</p>
                <Button variant="outline" size="sm" onClick={() => copyCaption(caption)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
