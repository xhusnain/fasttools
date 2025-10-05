"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Copy, Heart } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function AiPetNameGenerator() {
  const [petType, setPetType] = useState("")
  const [personality, setPersonality] = useState("")
  const [names, setNames] = useState<Array<{ name: string; meaning: string }>>([])
  const [loading, setLoading] = useState(false)

  const generateNames = async () => {
    if (!petType.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/ai/generate-pet-names", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ petType, personality }),
      })

      const data = await response.json()
      setNames(data.names)
    } catch (error) {
      console.error("Error generating names:", error)
    } finally {
      setLoading(false)
    }
  }

  const copyName = (name: string) => {
    navigator.clipboard.writeText(name)
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="petType">Pet Type</Label>
          <Input
            id="petType"
            placeholder="e.g., dog, cat, rabbit, hamster, bird"
            value={petType}
            onChange={(e) => setPetType(e.target.value)}
            className="h-11"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="personality">Personality (Optional)</Label>
          <Input
            id="personality"
            placeholder="e.g., playful, calm, energetic, shy"
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
            className="h-11"
          />
        </div>

        <Button onClick={generateNames} disabled={loading || !petType.trim()} className="w-full h-11 text-base">
          {loading ? (
            <>
              <LoadingSpinner className="mr-2" />
              Generating Names...
            </>
          ) : (
            <>
              <Heart className="mr-2 h-5 w-5" />
              Generate Pet Names
            </>
          )}
        </Button>
      </div>

      {names.length > 0 && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="font-semibold text-lg">Perfect Names for Your Pet</h3>
          <div className="grid gap-3">
            {names.map((item, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-base mb-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.meaning}</p>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => copyName(item.name)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
