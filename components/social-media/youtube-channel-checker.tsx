"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GTextarea } from "@/ui/gtextarea"
import { GLabel } from "@/ui/glabel"
import { GCard } from "@/ui/gcard"

import { Search, CheckCircle, XCircle, Lightbulb, Copy, ExternalLink, Users, Video, AlertCircle, Upload } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"


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
  const [currentCheckingIndex, setCurrentCheckingIndex] = useState<number | null>(null)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [checkingProgress, setCheckingProgress] = useState<{
    current: number
    total: number
    currentName: string
  } | null>(null)

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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      if (!content) return

      // Split by newlines or commas and clean up
      const names = content
        .split(/[\n,]/)
        .map(name => name.trim())
        .filter(name => name.length > 0)
        .join(', ')

      setChannelNames(prev => prev ? `${prev}, ${names}` : names)
    }
    reader.readAsText(file)
    // Reset input
    event.target.value = ''
  }

  const handleCheck = async () => {
    if (!channelNames.trim()) return

    setLoading(true)
    setError(null)
    setResults([])
    setCurrentCheckingIndex(null)
    setTimeRemaining(0)
    setCheckingProgress(null)

    try {
      // Parse comma-separated or newline-separated channel names
      const namesArray = channelNames
        .split(/[\n,]/)
        .map(name => name.trim())
        .filter(name => name.length > 0)

      if (namesArray.length === 0) {
        setError('Please enter at least one channel name')
        setLoading(false)
        return
      }

      // Initialize results array
      const initialResults: ChannelCheckResult[] = namesArray.map(name => ({
        channelName: name,
        available: false,
        error: 'Pending...'
      }))
      setResults(initialResults)

      // Check each channel name with 15-second delay
      for (let i = 0; i < namesArray.length; i++) {
        const currentName = namesArray[i]

        // Update progress
        setCheckingProgress({
          current: i + 1,
          total: namesArray.length,
          currentName: currentName
        })
        setCurrentCheckingIndex(i)

        // Start countdown timer
        let countdown = 15
        setTimeRemaining(countdown)

        const timer = setInterval(() => {
          countdown--
          setTimeRemaining(countdown)

          if (countdown <= 0) {
            clearInterval(timer)
          }
        }, 1000)

        // Wait for 15 seconds
        await new Promise(resolve => setTimeout(resolve, 15000))
        clearInterval(timer)
        setTimeRemaining(0)

        // Check the current channel name
        try {
          const response = await fetch('/api/youtube/channel-check', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ channelNames: [currentName] }),
          })

          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error || 'Failed to check channel name')
          }

          const data = await response.json()
          const result = data.results[0]

          // Update the specific result
          setResults(prevResults => {
            const newResults = [...prevResults]
            newResults[i] = result
            return newResults
          })

        } catch (err) {
          // Update with error
          setResults(prevResults => {
            const newResults = [...prevResults]
            newResults[i] = {
              channelName: currentName,
              available: false,
              error: err instanceof Error ? err.message : 'An error occurred while checking channel name'
            }
            return newResults
          })
        }
      }

      // Clear progress when done
      setCheckingProgress(null)
      setCurrentCheckingIndex(null)

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
      <GCard className="p-6 bg-card border-border shadow-sm">
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <GLabel htmlFor="channel-names" className="text-sm font-medium text-foreground">
                Channel Names
              </GLabel>
              <div className="relative">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".txt,.csv"
                  onChange={handleFileUpload}
                />
                <GLabel
                  htmlFor="file-upload"
                  className="flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 cursor-pointer transition-colors"
                >
                  <Upload className="h-3.5 w-3.5" />
                  Import from File
                </GLabel>
              </div>
            </div>
            <GTextarea
              id="channel-names"
              placeholder="Enter channel names separated by commas or new lines (e.g., MyChannel, TechReviews, GamingTV)"
              value={channelNames}
              onChange={(e) => setChannelNames(e.target.value)}
              className="min-h-[150px] text-base resize-y"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Enter multiple channel names separated by commas or new lines. No limit on the number of checks.
            </p>
          </div>

          <GButton
            onClick={handleCheck}
            disabled={!channelNames.trim() || loading}
            isLoading={loading}
            className="w-full h-11 text-base font-medium shadow-sm hover:shadow-md transition-all"
          >
            {loading ? (
              checkingProgress ? `Checking ${checkingProgress.current}/${checkingProgress.total}` : 'Checking Availability...'
            ) : (
              <>
                <Search className="mr-2 h-5 w-5" />
                Check Availability
              </>
            )}
          </GButton>

          {/* Progress and Timer Display */}
          {checkingProgress && (
            <GCard className="p-4 bg-card border-primary shadow-sm">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-primary">
                    Checking Channel {checkingProgress.current} of {checkingProgress.total}
                  </h4>
                  <span className="text-xs text-accent">
                    {checkingProgress.currentName}
                  </span>
                </div>

                {timeRemaining > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Next check in:</span>
                      <span className="font-mono font-bold text-primary">
                        {timeRemaining}s
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${((15 - timeRemaining) / 15) * 100}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </GCard>
          )}
        </div>
      </GCard>

      {error && (
        <GCard className="p-6 bg-card border-red-500 shadow-sm animate-fade-in">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-foreground" />
            <div>
              <h3 className="text-base font-semibold text-foreground">Error</h3>
              <p className="text-sm text-foreground">{error}</p>
            </div>
          </div>
        </GCard>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Check Results</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result, index) => (
              <GCard key={index} className={`p-4 bg-card border-border shadow-sm animate-fade-in ${currentCheckingIndex === index ? 'ring-2 ring-primary bg-muted/30' : ''
                }`}>
                <div className="space-y-3">
                  {/* Status Icon and Channel Name */}
                  <div className="flex items-center gap-2">
                    {result.error === 'Pending...' ? (
                      <>
                        <LoadingSpinner className="h-6 w-6 text-accent" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-foreground truncate">{result.channelName}</h4>
                          <p className="text-xs text-accent">Waiting...</p>
                        </div>
                      </>
                    ) : result.error && result.error !== 'Pending...' ? (
                      <>
                        <AlertCircle className="h-6 w-6 text-foreground" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-foreground truncate">{result.channelName}</h4>
                          <p className="text-xs text-foreground">Error</p>
                        </div>
                      </>
                    ) : result.available ? (
                      <>
                        <CheckCircle className="h-6 w-6 text-heading-accent" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-foreground truncate">{result.channelName}</h4>
                          <p className="text-xs text-heading-accent">Available!</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-6 w-6 text-foreground" />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-foreground truncate">{result.channelName}</h4>
                          <p className="text-xs text-foreground">Taken</p>
                        </div>
                      </>
                    )}
                  </div>


                  {/* Action GButton */}
                  {result.channelUrl && (
                    <GButton
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(result.channelUrl, '_blank')}
                      className="w-full h-8 text-xs"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Channel
                    </GButton>
                  )}

                  {/* Suggestions for Available Channels */}
                  {result.available && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-1">
                        <Lightbulb className="h-3 w-3 text-accent" />
                        <h5 className="text-xs font-semibold text-foreground">Suggestions</h5>
                      </div>
                      <div className="space-y-1">
                        {generateSuggestions(result.channelName).slice(0, 3).map((suggestion, suggestionIndex) => (
                          <div
                            key={suggestionIndex}
                            className="p-2 bg-muted/50 rounded border border-border hover:border-primary transition-colors cursor-pointer group"
                            onClick={() => copyToClipboard(suggestion)}
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-xs font-medium text-foreground truncate">{suggestion}</p>
                              <Copy className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </GCard>
            ))}
          </div>
        </div>
      )}

      <GCard className="p-6 bg-muted/30 border-border">
        <h3 className="text-base font-semibold text-foreground mb-3">How to Use</h3>
        <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li>• Enter multiple channel names separated by commas</li>
          <li>• Click "Check Availability" to start the checking process</li>
          <li>• Watch the countdown timer and progress indicator</li>
          <li>• Get alternative suggestions for available names</li>
          <li>• Copy suggested names with one click</li>
        </ul>
      </GCard>
    </div>
  )
}
