"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
      const response = await fetch('/api/ai/generate-hashtags', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          platform
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
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }


  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'instagram': return 'from-pink-500 to-purple-500'
      case 'twitter': return 'from-blue-400 to-blue-600'
      case 'facebook': return 'from-blue-600 to-blue-800'
      case 'linkedin': return 'from-blue-700 to-blue-900'
      case 'youtube': return 'from-red-500 to-red-700'
      case 'tiktok': return 'from-black to-gray-800'
      default: return 'from-gray-500 to-gray-700'
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4 sm:space-y-6">
      {/* Main Calculator Card */}
      <Card className="border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-2xl">
        <CardHeader className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br ${getPlatformColor(platform)} flex items-center justify-center shadow-lg`}>
              {platform === 'instagram' && <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
              {platform === 'twitter' && <Twitter className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
              {platform === 'facebook' && <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
              {platform === 'linkedin' && <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
              {platform === 'youtube' && <Youtube className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
              {platform === 'tiktok' && <Video className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
              {!['instagram', 'twitter', 'facebook', 'linkedin', 'youtube', 'tiktok'].includes(platform) && <Hash className="h-5 w-5 sm:h-6 sm:w-6 text-white" />}
            </div>
            <div className="text-center sm:text-left">
              <CardTitle className="text-xl sm:text-2xl font-bold text-white">
                Hashtag Counter & Generator
              </CardTitle>
              <CardDescription className="text-white/80 text-sm sm:text-base">
                Count existing hashtags and generate new ones with AI
              </CardDescription>
            </div>
          </div>
          
          {/* Platform Selector */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Label className="text-white font-medium text-sm sm:text-base">Choose Platform:</Label>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { value: 'instagram', icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-purple-500' },
                { value: 'twitter', icon: Twitter, label: 'Twitter', color: 'from-blue-400 to-blue-600' },
                { value: 'facebook', icon: Facebook, label: 'Facebook', color: 'from-blue-600 to-blue-800' },
                { value: 'linkedin', icon: Linkedin, label: 'LinkedIn', color: 'from-blue-700 to-blue-900' },
                { value: 'youtube', icon: Youtube, label: 'YouTube', color: 'from-red-500 to-red-700' },
                { value: 'tiktok', icon: Video, label: 'TikTok', color: 'from-black to-gray-800' }
              ].map(({ value, icon: Icon, label, color }) => (
                <button
                  key={value}
                  onClick={() => setPlatform(value)}
                  className={`group relative flex flex-col items-center gap-1 p-2 sm:p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    platform === value 
                      ? `bg-gradient-to-br ${color} shadow-lg` 
                      : 'bg-white/10 hover:bg-white/20 border border-white/20'
                  }`}
                  title={label}
                >
                  <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${
                    platform === value ? 'text-white' : 'text-white/70 group-hover:text-white'
                  } transition-colors duration-300`} />
                  <span className={`text-xs font-medium ${
                    platform === value ? 'text-white' : 'text-white/70 group-hover:text-white'
                  } transition-colors duration-300 hidden sm:block`}>
                    {label}
                  </span>
                  {platform === value && (
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-400 rounded-full border-2 border-white"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text" className="text-sm font-medium text-white">
                Your Post Content
              </Label>
              <Textarea
                id="text"
                placeholder="Paste your social media post content here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-24 sm:min-h-32 text-sm resize-none bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
            </div>

            {/* Action Button */}
            <div className="flex justify-center">
              <Button
                onClick={generateHashtags}
                disabled={!text || isGenerating}
                className="w-full max-w-xs h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
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
              </Button>
            </div>
          </div>

          {/* Results Section */}
          {text && (
            <div className="space-y-4 sm:space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-foreground">{result.count}</div>
                  <div className="text-xs sm:text-sm text-foreground">Existing Hashtags</div>
                </div>
                
                {result.generatedHashtags && result.generatedHashtags.length > 0 && (
                  <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-foreground">{result.generatedHashtags.length}</div>
                    <div className="text-xs sm:text-sm text-foreground">AI Generated</div>
                  </div>
                )}
                
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/30 text-center sm:col-span-2 lg:col-span-1">
                  <div className="text-xl sm:text-2xl font-bold text-heading-accent">
                    {result.count + (result.generatedHashtags ? result.generatedHashtags.length : 0)}
                  </div>
                  <div className="text-xs sm:text-sm text-heading-accent">Total Hashtags</div>
                </div>
              </div>

              {/* Unified Hashtag Display */}
              <div className="space-y-4 sm:space-y-6">
                {/* Existing Hashtags Section */}
                {result.hashtags.length > 0 && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                        <Hash className="h-4 w-4 text-foreground" />
                        Existing Hashtags ({result.hashtags.length})
                      </h3>
                      <Button
                        onClick={() => copyHashtags(result.hashtags)}
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm"
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
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {result.hashtags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-blue-500/20 text-foreground border border-blue-400/30 hover:bg-blue-500/30 transition-colors text-xs sm:text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Generated Hashtags Section */}
                {result.generatedHashtags && result.generatedHashtags.length > 0 && (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                      <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-foreground" />
                        AI Generated Hashtags ({result.generatedHashtags.length})
                      </h3>
                      <Button
                        onClick={() => result.generatedHashtags && copyHashtags(result.generatedHashtags)}
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs sm:text-sm"
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
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {result.generatedHashtags.map((tag, index) => (
                        <Badge
                          key={index}
                          className="px-2 sm:px-3 py-1 bg-purple-500/20 text-foreground border border-purple-400/30 hover:bg-purple-500/30 transition-colors text-xs sm:text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Copy All Combined Button */}
                {(result.hashtags.length > 0 || (result.generatedHashtags && result.generatedHashtags.length > 0)) && (
                  <div className="flex justify-center pt-2">
                    <Button
                      onClick={() => {
                        const allHashtags = [...result.hashtags, ...(result.generatedHashtags || [])]
                        copyHashtags(allHashtags)
                      }}
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm px-6 py-2"
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy All Hashtags ({result.hashtags.length + (result.generatedHashtags?.length || 0)})
                    </Button>
                  </div>
                )}

                {/* Empty State */}
                {result.hashtags.length === 0 && (!result.generatedHashtags || result.generatedHashtags.length === 0) && (
                  <div className="text-center py-6 sm:py-8 text-white/60">
                    <Hash className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                    <p className="text-sm sm:text-base">No hashtags found in your content</p>
                    <p className="text-xs sm:text-sm text-white/40 mt-2">Click "Generate AI Hashtags" to get suggestions</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

    </div>
  )
}
