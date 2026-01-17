"use client"

import { useState, useEffect } from "react"
import { GButton } from "@/ui/gbutton"
import { GTextarea } from "@/ui/gtextarea"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GBadge } from "@/ui/gbadge"

import {
  Hash,
  Copy,
  Check,
  Sparkles,
  Loader2,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Video
} from "lucide-react"

interface HashtagResult {
  count: number
  hashtags: string[]
  generatedHashtags?: string[]
  platform: string
}

export function HashtagCounter() {
  const [text, setText] = useState("")
  const [platform, setPlatform] = useState("instagram")
  const [result, setResult] = useState<HashtagResult>({
    count: 0,
    hashtags: [],
    platform: "instagram"
  })
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  // Auto-count hashtags when text changes
  useEffect(() => {
    if (text) {
      const hashtagRegex = /#[\w]+/g
      const matches = text.match(hashtagRegex) || []
      const uniqueHashtags = [...new Set(matches)]

      setResult(prev => ({
        ...prev,
        count: uniqueHashtags.length,
        hashtags: uniqueHashtags,
        platform
      }))
    } else {
      setResult(prev => ({
        ...prev,
        count: 0,
        hashtags: [],
        platform
      }))
    }
  }, [text, platform])

  const generateHashtags = async () => {
    if (!text) return

    setIsGenerating(true)
    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'generate-hashtags',
          data: { text, platform }
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate hashtags')
      }

      const data = await response.json()

      if (data.hashtags && Array.isArray(data.hashtags) && data.hashtags.length > 0) {
        setResult(prev => ({
          ...prev,
          generatedHashtags: data.hashtags,
          platform
        }))
      }
    } catch (error) {
      console.error('Error generating hashtags:', error)
      // You could add a toast notification here if you have a toast system
    } finally {
      setIsGenerating(false)
    }
  }

  const copyHashtags = (hashtags: string[]) => {
    const text = hashtags.join(" ")
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }


  const getPlatformColor = (platform: string) => {
    // Use primary theme color for all platforms
    return 'from-primary to-primary/90'
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      {/* Main Calculator GCard */}
      <GCard className="border-2 border-border bg-card shadow-2xl">
        <GCardHeader className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br ${getPlatformColor(platform)} flex items-center justify-center shadow-lg`}>
              {platform === 'instagram' && <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />}
              {platform === 'twitter' && <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />}
              {platform === 'facebook' && <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />}
              {platform === 'linkedin' && <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />}
              {platform === 'youtube' && <Youtube className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />}
              {platform === 'tiktok' && <Video className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />}
              {!['instagram', 'twitter', 'facebook', 'linkedin', 'youtube', 'tiktok'].includes(platform) && <Hash className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />}
            </div>
            <div className="text-center sm:text-left">
              <GCardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                Hashtag Counter & Generator
              </GCardTitle>
              <GCardDescription className="text-muted-foreground text-sm sm:text-base">
                Count existing hashtags and generate new ones with AI
              </GCardDescription>
            </div>
          </div>

          {/* Platform Selector */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <GLabel className="text-foreground font-medium text-sm sm:text-base">Choose Platform:</GLabel>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { value: 'instagram', icon: Instagram, label: 'Instagram' },
                { value: 'twitter', icon: Twitter, label: 'Twitter' },
                { value: 'facebook', icon: Facebook, label: 'Facebook' },
                { value: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
                { value: 'youtube', icon: Youtube, label: 'YouTube' },
                { value: 'tiktok', icon: Video, label: 'TikTok' }
              ].map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => setPlatform(value)}
                  className={`group relative flex flex-col items-center gap-1 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-105 ${platform === value
                    ? 'bg-gradient-to-br from-primary to-primary/90 shadow-lg'
                    : 'bg-secondary hover:bg-secondary/80 border border-border'
                    }`}
                  title={label}
                >
                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${platform === value ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'
                    } transition-colors duration-300`} />
                  <span className={`text-xs font-medium ${platform === value ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-foreground'
                    } transition-colors duration-300 hidden sm:block`}>
                    {label}
                  </span>
                  {platform === value && (
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary-accent rounded-full border-2 border-card"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </GCardHeader>

        <GCardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <GLabel htmlFor="text" className="text-sm font-medium text-foreground">
                Your Post Content
              </GLabel>
              <GTextarea
                id="text"
                placeholder="Paste your social media post content here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-24 sm:min-h-32 text-sm resize-none bg-background border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Action GButton */}
            <div className="flex justify-center">
              <GButton
                onClick={generateHashtags}
                disabled={!text || isGenerating}
                className="w-full max-w-xs h-10 sm:h-12 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span className="hidden sm:inline">Generating...</span>
                    <span className="sm:hidden">Generating</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    <span className="hidden sm:inline">Generate AI Hashtags</span>
                    <span className="sm:hidden">AI Hashtags</span>
                  </>
                )}
              </GButton>
            </div>
          </div>

          {/* Results Section */}
          {text && (
            <div className="space-y-4 sm:space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-muted border border-border text-center">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">{result.count}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Existing Hashtags</div>
                </div>

                {result.generatedHashtags && result.generatedHashtags.length > 0 && (
                  <div className="p-3 sm:p-4 rounded-xl bg-muted border border-border text-center">
                    <div className="text-xl sm:text-2xl font-bold text-foreground">{result.generatedHashtags.length}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">AI Generated</div>
                  </div>
                )}

                <div className="p-3 sm:p-4 rounded-xl bg-primary/10 border border-primary/20 text-center sm:col-span-2 lg:col-span-1">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">
                    {result.count + (result.generatedHashtags ? result.generatedHashtags.length : 0)}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Total Hashtags</div>
                </div>
              </div>

              {/* Unified Hashtag Display */}
              <div className="space-y-4 sm:space-y-6">
                {/* Existing Hashtags Section */}
                {result.hashtags.length > 0 && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                        <Hash className="h-4 w-4 text-foreground" />
                        Existing Hashtags ({result.hashtags.length})
                      </h3>
                      <GButton
                        onClick={() => copyHashtags(result.hashtags)}
                        variant="outline"
                        size="sm"
                        className="bg-card border-border text-foreground hover:bg-secondary text-xs sm:text-sm"
                      >
                        {copied ? (
                          <>
                            <Check className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline">Copied!</span>
                            <span className="sm:hidden">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline">Copy</span>
                            <span className="sm:hidden">Copy</span>
                          </>
                        )}
                      </GButton>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {result.hashtags.map((tag, index) => (
                        <GBadge
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-muted text-foreground border border-border hover:bg-secondary transition-colors text-xs sm:text-sm"
                        >
                          {tag}
                        </GBadge>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Generated Hashtags Section */}
                {result.generatedHashtags && result.generatedHashtags.length > 0 && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-foreground" />
                        AI Generated Hashtags ({result.generatedHashtags.length})
                      </h3>
                      <GButton
                        onClick={() => result.generatedHashtags && copyHashtags(result.generatedHashtags)}
                        variant="outline"
                        size="sm"
                        className="bg-card border-border text-foreground hover:bg-secondary text-xs sm:text-sm"
                      >
                        {copied ? (
                          <>
                            <Check className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline">Copied!</span>
                            <span className="sm:hidden">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            <span className="hidden sm:inline">Copy</span>
                            <span className="sm:hidden">Copy</span>
                          </>
                        )}
                      </GButton>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {result.generatedHashtags.map((tag, index) => (
                        <GBadge
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-primary/10 text-foreground border border-primary/20 hover:bg-primary/20 transition-colors text-xs sm:text-sm"
                        >
                          {tag}
                        </GBadge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Copy All Combined GButton */}
                {(result.hashtags.length > 0 || (result.generatedHashtags && result.generatedHashtags.length > 0)) && (
                  <div className="flex justify-center pt-2">
                    <GButton
                      onClick={() => {
                        const allHashtags = [...result.hashtags, ...(result.generatedHashtags || [])]
                        copyHashtags(allHashtags)
                      }}
                      className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm px-6 py-2"
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy All Hashtags ({result.hashtags.length + (result.generatedHashtags?.length || 0)})
                    </GButton>
                  </div>
                )}

                {/* Empty State */}
                {result.hashtags.length === 0 && (!result.generatedHashtags || result.generatedHashtags.length === 0) && (
                  <div className="text-center py-6 sm:py-8 text-muted-foreground">
                    <Hash className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                    <p className="text-sm sm:text-base">No hashtags found in your content</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2">Click "Generate AI Hashtags" to get suggestions</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </GCardContent>
      </GCard>

    </div>
  )
}
