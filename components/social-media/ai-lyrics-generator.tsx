"use client"

import { useState } from "react"
import { GButton as Button } from "@/components/globalcomponents/gbutton"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Music, Download, Check } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

export function AiLyricsGenerator() {
  const [theme, setTheme] = useState("")
  const [genre, setGenre] = useState("any")
  const [mood, setMood] = useState("any")
  const [duration, setDuration] = useState<string>("standard")
  const [language, setLanguage] = useState("english")
  const [lyrics, setLyrics] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState("")

  const generateLyrics = async () => {
    if (!theme.trim()) {
      setError("Please enter a song theme")
      return
    }

    setLoading(true)
    setError("")
    try {
      // Convert "any" to empty string for optional fields
      const selectedGenre = genre === "any" ? "" : genre.trim()
      const selectedMood = mood === "any" ? "" : mood.trim()

      // Convert duration to number, handle "standard" as null
      let selectedDuration = null
      if (duration && duration !== "standard") {
        selectedDuration = parseInt(duration)
      }

      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "generate-lyrics",
          data: {
            theme: theme.trim(),
            genre: selectedGenre,
            mood: selectedMood,
            duration: selectedDuration,
            language: language
          }
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to generate lyrics")
      }

      setLyrics(data.lyrics)
    } catch (error) {
      console.error("Error generating lyrics:", error)
      setError(error instanceof Error ? error.message : "Failed to generate lyrics. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const copyLyrics = () => {
    navigator.clipboard.writeText(lyrics)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadLyrics = () => {
    const blob = new Blob([lyrics], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${theme.replace(/\s+/g, "-").toLowerCase()}-lyrics.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-2 border-primary/20">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="theme" className="text-base font-semibold">
              Song Theme / Topic <span className="text-destructive">*</span>
            </Label>
            <Input
              id="theme"
              placeholder="e.g., falling in love, heartbreak, chasing dreams, summer nights"
              value={theme}
              onChange={(e) => {
                setTheme(e.target.value)
                setError("")
              }}
              className="h-12 text-base border-2 border-primary/50 focus:border-primary"
            />
            <p className="text-xs text-muted-foreground">
              Describe what your song should be about
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="genre" className="text-sm font-semibold">Genre (Optional)</Label>
              <Select value={genre} onValueChange={setGenre}>
                <SelectTrigger className="h-11 border-2 border-primary/50 focus:border-primary">
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Genre</SelectItem>
                  <SelectItem value="pop">Pop</SelectItem>
                  <SelectItem value="rock">Rock</SelectItem>
                  <SelectItem value="hip-hop">Hip-Hop</SelectItem>
                  <SelectItem value="rap">Rap</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                  <SelectItem value="R&B">R&B</SelectItem>
                  <SelectItem value="soul">Soul</SelectItem>
                  <SelectItem value="jazz">Jazz</SelectItem>
                  <SelectItem value="folk">Folk</SelectItem>
                  <SelectItem value="blues">Blues</SelectItem>
                  <SelectItem value="electronic">Electronic</SelectItem>
                  <SelectItem value="indie">Indie</SelectItem>
                  <SelectItem value="alternative">Alternative</SelectItem>
                  <SelectItem value="metal">Metal</SelectItem>
                  <SelectItem value="punk">Punk</SelectItem>
                  <SelectItem value="reggae">Reggae</SelectItem>
                  <SelectItem value="gospel">Gospel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mood" className="text-sm font-semibold">Mood (Optional)</Label>
              <Select value={mood} onValueChange={setMood}>
                <SelectTrigger className="h-11 border-2 border-primary/50 focus:border-primary">
                  <SelectValue placeholder="Select mood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Mood</SelectItem>
                  <SelectItem value="happy">Happy</SelectItem>
                  <SelectItem value="sad">Sad</SelectItem>
                  <SelectItem value="energetic">Energetic</SelectItem>
                  <SelectItem value="melancholic">Melancholic</SelectItem>
                  <SelectItem value="romantic">Romantic</SelectItem>
                  <SelectItem value="upbeat">Upbeat</SelectItem>
                  <SelectItem value="mellow">Mellow</SelectItem>
                  <SelectItem value="intense">Intense</SelectItem>
                  <SelectItem value="peaceful">Peaceful</SelectItem>
                  <SelectItem value="aggressive">Aggressive</SelectItem>
                  <SelectItem value="nostalgic">Nostalgic</SelectItem>
                  <SelectItem value="hopeful">Hopeful</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="playful">Playful</SelectItem>
                  <SelectItem value="empowering">Empowering</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration" className="text-sm font-semibold">Duration (Optional)</Label>
              <Select value={duration} onValueChange={setDuration}>
                <SelectTrigger className="h-11 border-2 border-primary/50 focus:border-primary">
                  <SelectValue placeholder="Song length" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (3-4 min)</SelectItem>
                  <SelectItem value="2">Short (2 min)</SelectItem>
                  <SelectItem value="3">Medium (3 min)</SelectItem>
                  <SelectItem value="4">Long (4 min)</SelectItem>
                  <SelectItem value="5">Extended (5+ min)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language" className="text-sm font-semibold">Language</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="h-11 border-2 border-primary/50 focus:border-primary">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish (Español)</SelectItem>
                  <SelectItem value="french">French (Français)</SelectItem>
                  <SelectItem value="german">German (Deutsch)</SelectItem>
                  <SelectItem value="italian">Italian (Italiano)</SelectItem>
                  <SelectItem value="portuguese">Portuguese (Português)</SelectItem>
                  <SelectItem value="russian">Russian (Русский)</SelectItem>
                  <SelectItem value="japanese">Japanese (日本語)</SelectItem>
                  <SelectItem value="korean">Korean (한국어)</SelectItem>
                  <SelectItem value="chinese">Chinese (中文)</SelectItem>
                  <SelectItem value="arabic">Arabic (العربية)</SelectItem>
                  <SelectItem value="hindi">Hindi (हिन्दी)</SelectItem>
                  <SelectItem value="bengali">Bengali (বাংলা)</SelectItem>
                  <SelectItem value="punjabi">Punjabi (ਪੰਜਾਬੀ)</SelectItem>
                  <SelectItem value="urdu">Urdu (اردو)</SelectItem>
                  <SelectItem value="turkish">Turkish (Türkçe)</SelectItem>
                  <SelectItem value="dutch">Dutch (Nederlands)</SelectItem>
                  <SelectItem value="polish">Polish (Polski)</SelectItem>
                  <SelectItem value="swedish">Swedish (Svenska)</SelectItem>
                  <SelectItem value="norwegian">Norwegian (Norsk)</SelectItem>
                  <SelectItem value="danish">Danish (Dansk)</SelectItem>
                  <SelectItem value="finnish">Finnish (Suomi)</SelectItem>
                  <SelectItem value="greek">Greek (Ελληνικά)</SelectItem>
                  <SelectItem value="hebrew">Hebrew (עברית)</SelectItem>
                  <SelectItem value="thai">Thai (ไทย)</SelectItem>
                  <SelectItem value="vietnamese">Vietnamese (Tiếng Việt)</SelectItem>
                  <SelectItem value="indonesian">Indonesian (Bahasa Indonesia)</SelectItem>
                  <SelectItem value="malay">Malay (Bahasa Melayu)</SelectItem>
                  <SelectItem value="tagalog">Tagalog (Filipino)</SelectItem>
                  <SelectItem value="swahili">Swahili (Kiswahili)</SelectItem>
                  <SelectItem value="czech">Czech (Čeština)</SelectItem>
                  <SelectItem value="hungarian">Hungarian (Magyar)</SelectItem>
                  <SelectItem value="romanian">Romanian (Română)</SelectItem>
                  <SelectItem value="ukrainian">Ukrainian (Українська)</SelectItem>
                  <SelectItem value="persian">Persian (فارسی)</SelectItem>
                  <SelectItem value="tamil">Tamil (தமிழ்)</SelectItem>
                  <SelectItem value="telugu">Telugu (తెలుగు)</SelectItem>
                  <SelectItem value="marathi">Marathi (मराठी)</SelectItem>
                  <SelectItem value="gujarati">Gujarati (ગુજરાતી)</SelectItem>
                  <SelectItem value="kannada">Kannada (ಕನ್ನಡ)</SelectItem>
                  <SelectItem value="malayalam">Malayalam (മലയാളം)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30">
              <p className="text-sm text-destructive font-medium">{error}</p>
            </div>
          )}

          <Button
            onClick={generateLyrics}
            disabled={loading || !theme.trim()}
            className="w-full h-12 text-base bg-primary hover:bg-primary font-semibold"
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Generating Your Song Lyrics...
              </>
            ) : (
              <>
                <Music className="mr-2 h-5 w-5" />
                Generate Song Lyrics with AI
              </>
            )}
          </Button>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-1 w-1 rounded-full bg-secondary-accent" />
            <span>Powered by Gemini AI • 100% Original • Commercial Use Allowed</span>
          </div>
        </div>
      </Card>

      {lyrics && (
        <Card className="p-6 space-y-4 animate-fade-in border-2 border-primary/30 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-xl flex items-center gap-2">
                <Music className="h-5 w-5 text-primary" />
                Your Generated Lyrics
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {language && language !== "english" ? `${language.charAt(0).toUpperCase() + language.slice(1)} • ` : ""}
                {genre && genre !== "any" ? `${genre} • ` : ""}
                {mood && mood !== "any" ? `${mood} mood • ` : ""}
                {duration && duration !== "standard" ? `${duration} min` : "Standard length"}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={copyLyrics}
                className="h-9"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2 text-heading-accent" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadLyrics}
                className="h-9"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          <div className="relative">
            <Textarea
              value={lyrics}
              readOnly
              className="min-h-[400px] font-mono text-sm leading-relaxed resize-none border-2 border-primary/20 bg-muted/30"
            />
          </div>

          <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary-accent/10 border border-secondary-accent/30">
            <div className="flex-shrink-0 mt-0.5">
              <div className="h-5 w-5 rounded-full bg-secondary-accent flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-heading-accent mb-1">
                ✨ 100% Original AI-Generated Lyrics
              </p>
              <p className="text-xs text-heading-accent">
                These lyrics are completely original and free to use. Feel free to modify them for your creative projects, commercial releases, or performances. No attribution required!
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-border">
            <Button
              variant="outline"
              onClick={() => {
                setLyrics("")
                setTheme("")
                setGenre("any")
                setMood("any")
                setDuration("standard")
                setLanguage("english")
              }}
              className="w-full h-10"
            >
              Generate New Lyrics
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
