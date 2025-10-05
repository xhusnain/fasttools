"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Search, CheckCircle, XCircle, Lightbulb } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function YoutubeChannelChecker() {
  const [channelName, setChannelName] = useState("")
  const [result, setResult] = useState<{ available: boolean; suggestions: string[] } | null>(null)
  const [loading, setLoading] = useState(false)

  const generateSuggestions = (name: string): string[] => {
    const suggestions = [
      `${name}Official`,
      `${name}TV`,
      `${name}Channel`,
      `The${name}`,
      `${name}HQ`,
      `${name}Media`,
      `${name}Studio`,
      `${name}Network`,
    ]
    return suggestions.slice(0, 5)
  }

  const handleCheck = () => {
    setLoading(true)
    setTimeout(() => {
      // Demo logic - in production, you'd check against YouTube's API
      const isAvailable = Math.random() > 0.5
      setResult({
        available: isAvailable,
        suggestions: isAvailable ? [] : generateSuggestions(channelName),
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border shadow-sm">
        <div className="space-y-4">
          <div>
            <Label htmlFor="channel-name" className="text-sm font-medium text-foreground">
              Channel Name
            </Label>
            <Input
              id="channel-name"
              type="text"
              placeholder="Enter desired channel name"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              className="mt-2 h-11 text-base"
            />
          </div>

          <Button
            onClick={handleCheck}
            disabled={!channelName || loading}
            className="w-full h-11 text-base font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Checking Availability...
              </>
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                Check Availability
              </>
            )}
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6 bg-card border-border shadow-sm animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {result.available ? (
                <>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Available!</h3>
                    <p className="text-sm text-muted-foreground">
                      The channel name "{channelName}" appears to be available
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <XCircle className="h-8 w-8 text-red-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Not Available</h3>
                    <p className="text-sm text-muted-foreground">The channel name "{channelName}" is already taken</p>
                  </div>
                </>
              )}
            </div>

            {!result.available && result.suggestions.length > 0 && (
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                  <h4 className="text-base font-semibold text-foreground">Suggestions</h4>
                </div>
                <div className="space-y-2">
                  {result.suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="p-3 bg-muted/50 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer"
                    >
                      <p className="text-sm font-medium text-foreground">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      <Card className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">How to Use</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• Enter your desired YouTube channel name</li>
          <li>• Click "Check Availability" to see if it's taken</li>
          <li>• Get alternative suggestions if your name is unavailable</li>
          <li>• Choose a unique, memorable name for your channel</li>
        </ul>
      </Card>
    </div>
  )
}
