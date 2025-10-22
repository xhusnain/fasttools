"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Search, CheckCircle, XCircle, Lightbulb, Copy, ExternalLink, Users, Video, AlertCircle } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface ChannelCheckResult {
  channelName: string
  available: boolean
  channelId?: string
  channelUrl?: string
  subscriberCount?: number
  videoCount?: number
  error?: string
}

export function YoutubeChannelChecker() {
  const [channelNames, setChannelNames] = useState("")
  const [results, setResults] = useState<ChannelCheckResult[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
      `${name}Gaming`,
      `${name}Reviews`,
    ]
    return suggestions.slice(0, 8)
  }

  const handleCheck = async () => {
    if (!channelNames.trim()) return

    setLoading(true)
    setError(null)
    setResults([])

    try {
      // Parse comma-separated channel names
      const namesArray = channelNames
        .split(',')
        .map(name => name.trim())
        .filter(name => name.length > 0)

      if (namesArray.length === 0) {
        setError('Please enter at least one channel name')
        setLoading(false)
        return
      }

      if (namesArray.length > 10) {
        setError('Maximum 10 channel names allowed per request')
        setLoading(false)
        return
      }

      const response = await fetch('/api/youtube/channel-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ channelNames: namesArray }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to check channel names')
      }

      const data = await response.json()
      setResults(data.results)

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while checking channel names')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy text:', err)
    }
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-card border-border shadow-sm">
        <div className="space-y-4">
          <div>
            <Label htmlFor="channel-names" className="text-sm font-medium text-foreground">
              Channel Names (comma-separated)
            </Label>
            <Input
              id="channel-names"
              type="text"
              placeholder="Enter channel names separated by commas (e.g., MyChannel, TechReviews, GamingTV)"
              value={channelNames}
              onChange={(e) => setChannelNames(e.target.value)}
              className="mt-2 h-11 text-base"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Enter multiple channel names separated by commas. Maximum 10 names per check.
            </p>
          </div>

          <Button
            onClick={handleCheck}
            disabled={!channelNames.trim() || loading}
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

      {error && (
        <Card className="p-6 bg-red-50 border-red-200 shadow-sm animate-fade-in">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-red-600" />
            <div>
              <h3 className="text-base font-semibold text-red-800">Error</h3>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </Card>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Check Results</h3>
          {results.map((result, index) => (
            <Card key={index} className="p-6 bg-card border-border shadow-sm animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {result.error ? (
                      <>
                        <AlertCircle className="h-8 w-8 text-orange-600" />
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{result.channelName}</h4>
                          <p className="text-sm text-orange-600">Error: {result.error}</p>
                        </div>
                      </>
                    ) : result.available ? (
                      <>
                        <CheckCircle className="h-8 w-8 text-green-600" />
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{result.channelName}</h4>
                          <p className="text-sm text-green-600">Available!</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-8 w-8 text-red-600" />
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{result.channelName}</h4>
                          <p className="text-sm text-red-600">Not Available</p>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {result.channelUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(result.channelUrl, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Channel
                    </Button>
                  )}
                </div>

                {!result.available && !result.error && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
                    {result.subscriberCount !== undefined && (
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          <strong>{formatNumber(result.subscriberCount)}</strong> subscribers
                        </span>
                      </div>
                    )}
                    {result.videoCount !== undefined && (
                      <div className="flex items-center gap-2">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          <strong>{formatNumber(result.videoCount)}</strong> videos
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {result.available && (
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="h-5 w-5 text-amber-600" />
                      <h5 className="text-base font-semibold text-foreground">Suggestions</h5>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {generateSuggestions(result.channelName).map((suggestion, suggestionIndex) => (
                        <div
                          key={suggestionIndex}
                          className="p-3 bg-muted/50 rounded-lg border border-border hover:border-primary transition-colors cursor-pointer group"
                          onClick={() => copyToClipboard(suggestion)}
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-foreground">{suggestion}</p>
                            <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}

      <Card className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">How to Use</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• Enter multiple channel names separated by commas</li>
          <li>• Click "Check Availability" to see which names are taken</li>
          <li>• Get alternative suggestions for available names</li>
          <li>• View channel statistics for taken names</li>
          <li>• Copy suggested names with one click</li>
        </ul>
      </Card>
    </div>
  )
}
