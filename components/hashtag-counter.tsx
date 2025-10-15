"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Hash, 
  Copy, 
  Check, 
  Sparkles, 
  Zap, 
  Target, 
  Users, 
  TrendingUp, 
  Star, 
  Globe, 
  Shield, 
  FileText, 
  BarChart3, 
  PieChart, 
  Clock, 
  Download, 
  RefreshCw,
  Loader2,
  AlertCircle,
  CheckCircle,
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
  const [result, setResult] = useState<HashtagResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("counter")

  const countHashtags = () => {
    if (!text) return

    const hashtagRegex = /#[\w]+/g
    const matches = text.match(hashtagRegex) || []
    const uniqueHashtags = [...new Set(matches)]

    setResult({
      count: uniqueHashtags.length,
      hashtags: uniqueHashtags,
      platform
    })
  }

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
        setResult(prev => {
          if (!prev) {
            return {
              count: 0,
              hashtags: [],
              generatedHashtags: data.hashtags,
              platform
            }
          }
          return {
            ...prev,
            generatedHashtags: data.hashtags,
            platform
          }
        })
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
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center">
            <Label className="text-white font-medium text-sm sm:text-base">Platform:</Label>
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger className="w-full sm:w-40 bg-white/10 border-white/20 text-white text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
              </SelectContent>
            </Select>
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={countHashtags}
                disabled={!text}
                className="flex-1 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                <Hash className="mr-2 h-4 w-4" />
                Count Hashtags
              </Button>
              
              <Button
                onClick={generateHashtags}
                disabled={!text || isGenerating}
                className="flex-1 h-10 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
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
          {result && (
            <div className="space-y-4 sm:space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-300">{result.count}</div>
                  <div className="text-xs sm:text-sm text-blue-200">Existing Hashtags</div>
                </div>
                
                {result.generatedHashtags && result.generatedHashtags.length > 0 && (
                  <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-purple-300">{result.generatedHashtags.length}</div>
                    <div className="text-xs sm:text-sm text-purple-200">AI Generated</div>
                  </div>
                )}
                
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/30 text-center sm:col-span-2 lg:col-span-1">
                  <div className="text-xl sm:text-2xl font-bold text-green-300">
                    {result.count + (result.generatedHashtags ? result.generatedHashtags.length : 0)}
                  </div>
                  <div className="text-xs sm:text-sm text-green-200">Total Hashtags</div>
                </div>
              </div>

              {/* Hashtag Display */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/10 border-white/20">
                  <TabsTrigger value="counter" className="text-white data-[state=active]:bg-white/20 text-xs sm:text-sm">
                    <span className="hidden sm:inline">Existing Hashtags</span>
                    <span className="sm:hidden">Existing</span>
                  </TabsTrigger>
                  <TabsTrigger value="generated" className="text-white data-[state=active]:bg-white/20 text-xs sm:text-sm">
                    <span className="hidden sm:inline">AI Generated</span>
                    <span className="sm:hidden">AI</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="counter" className="space-y-3 sm:space-y-4">
                  {result.hashtags.length > 0 ? (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-white">Your Existing Hashtags</h3>
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
                              <span className="hidden sm:inline">Copy All</span>
                              <span className="sm:hidden">Copy</span>
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {result.hashtags.map((tag, index) => (
                          <Badge
                            key={index}
                            className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-200 border border-blue-400/30 hover:bg-blue-500/30 transition-colors text-xs sm:text-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6 sm:py-8 text-white/60">
                      <Hash className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                      <p className="text-sm sm:text-base">No hashtags found in your content</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="generated" className="space-y-3 sm:space-y-4">
                  {result.generatedHashtags && result.generatedHashtags.length > 0 ? (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-white">AI Generated Hashtags</h3>
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
                              <span className="hidden sm:inline">Copy All</span>
                              <span className="sm:hidden">Copy</span>
                            </>
                          )}
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {result.generatedHashtags.map((tag, index) => (
                          <Badge
                            key={index}
                            className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-200 border border-purple-400/30 hover:bg-purple-500/30 transition-colors text-xs sm:text-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6 sm:py-8 text-white/60">
                      <Sparkles className="h-8 w-8 sm:h-12 sm:w-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                      <p className="text-sm sm:text-base">Click "Generate AI Hashtags" to get suggestions</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Additional Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Card className="border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <Target className="h-4 w-4 sm:h-5 sm:w-5" />
              Hashtag Best Practices
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3 text-white/80 p-4 sm:p-6 pt-0">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Use 20-30 hashtags for maximum reach</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Mix popular and niche hashtags</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Research competitor hashtags</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Track hashtag performance</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-white flex items-center gap-2 text-base sm:text-lg">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
              AI Features
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 sm:space-y-3 text-white/80 p-4 sm:p-6 pt-0">
            <div className="flex items-center gap-2">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm">AI-powered hashtag generation</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Platform-specific suggestions</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Trending hashtag analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm">Safe and relevant content</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
