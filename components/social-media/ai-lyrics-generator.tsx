"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GTextarea } from "@/ui/gtextarea"
import { GCard } from "@/ui/gcard"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"

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
      <GCard className="p-6 border-2 border-primary/20">
        <div className="grid gap-4">
          <div className="space-y-2">
            <GLabel htmlFor="theme" className="text-base font-semibold">
              Song Theme / Topic <span className="text-destructive">*</span>
            </GLabel>
            <GInput
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
              <GLabel htmlFor="genre" className="text-sm font-semibold">Genre (Optional)</GLabel>
              <GSelect value={genre} onValueChange={setGenre}>
                <GSelectTrigger className="h-11 border-2 border-primary/50 focus:border-primary">
                  <GSelectValue placeholder="GSelect genre" />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="any">Any Genre</GSelectItem>
                  <GSelectItem value="pop">Pop</GSelectItem>
                  <GSelectItem value="rock">Rock</GSelectItem>
                  <GSelectItem value="hip-hop">Hip-Hop</GSelectItem>
                  <GSelectItem value="rap">Rap</GSelectItem>
                  <GSelectItem value="country">Country</GSelectItem>
                  <GSelectItem value="R&B">R&B</GSelectItem>
                  <GSelectItem value="soul">Soul</GSelectItem>
                  <GSelectItem value="jazz">Jazz</GSelectItem>
                  <GSelectItem value="folk">Folk</GSelectItem>
                  <GSelectItem value="blues">Blues</GSelectItem>
                  <GSelectItem value="electronic">Electronic</GSelectItem>
                  <GSelectItem value="indie">Indie</GSelectItem>
                  <GSelectItem value="alternative">Alternative</GSelectItem>
                  <GSelectItem value="metal">Metal</GSelectItem>
                  <GSelectItem value="punk">Punk</GSelectItem>
                  <GSelectItem value="reggae">Reggae</GSelectItem>
                  <GSelectItem value="gospel">Gospel</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>

            <div className="space-y-2">
              <GLabel htmlFor="mood" className="text-sm font-semibold">Mood (Optional)</GLabel>
              <GSelect value={mood} onValueChange={setMood}>
                <GSelectTrigger className="h-11 border-2 border-primary/50 focus:border-primary">
                  <GSelectValue placeholder="GSelect mood" />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="any">Any Mood</GSelectItem>
                  <GSelectItem value="happy">Happy</GSelectItem>
                  <GSelectItem value="sad">Sad</GSelectItem>
                  <GSelectItem value="energetic">Energetic</GSelectItem>
                  <GSelectItem value="melancholic">Melancholic</GSelectItem>
                  <GSelectItem value="romantic">Romantic</GSelectItem>
                  <GSelectItem value="upbeat">Upbeat</GSelectItem>
                  <GSelectItem value="mellow">Mellow</GSelectItem>
                  <GSelectItem value="intense">Intense</GSelectItem>
                  <GSelectItem value="peaceful">Peaceful</GSelectItem>
                  <GSelectItem value="aggressive">Aggressive</GSelectItem>
                  <GSelectItem value="nostalgic">Nostalgic</GSelectItem>
                  <GSelectItem value="hopeful">Hopeful</GSelectItem>
                  <GSelectItem value="dark">Dark</GSelectItem>
                  <GSelectItem value="playful">Playful</GSelectItem>
                  <GSelectItem value="empowering">Empowering</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>

            <div className="space-y-2">
              <GLabel htmlFor="duration" className="text-sm font-semibold">Duration (Optional)</GLabel>
              <GSelect value={duration} onValueChange={setDuration}>
                <GSelectTrigger className="h-11 border-2 border-primary/50 focus:border-primary">
                  <GSelectValue placeholder="Song length" />
                </GSelectTrigger>
                <GSelectContent>
                  <GSelectItem value="standard">Standard (3-4 min)</GSelectItem>
                  <GSelectItem value="2">Short (2 min)</GSelectItem>
                  <GSelectItem value="3">Medium (3 min)</GSelectItem>
                  <GSelectItem value="4">Long (4 min)</GSelectItem>
                  <GSelectItem value="5">Extended (5+ min)</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>

            <div className="space-y-2">
              <GLabel htmlFor="language" className="text-sm font-semibold">Language</GLabel>
              <GSelect value={language} onValueChange={setLanguage}>
                <GSelectTrigger className="h-11 border-2 border-primary/50 focus:border-primary">
                  <GSelectValue placeholder="GSelect language" />
                </GSelectTrigger>
                <GSelectContent className="max-h-[300px]">
                  <GSelectItem value="english">English</GSelectItem>
                  <GSelectItem value="spanish">Spanish (Español)</GSelectItem>
                  <GSelectItem value="french">French (Français)</GSelectItem>
                  <GSelectItem value="german">German (Deutsch)</GSelectItem>
                  <GSelectItem value="italian">Italian (Italiano)</GSelectItem>
                  <GSelectItem value="portuguese">Portuguese (Português)</GSelectItem>
                  <GSelectItem value="russian">Russian (Русский)</GSelectItem>
                  <GSelectItem value="japanese">Japanese (日本語)</GSelectItem>
                  <GSelectItem value="korean">Korean (한국어)</GSelectItem>
                  <GSelectItem value="chinese">Chinese (中文)</GSelectItem>
                  <GSelectItem value="arabic">Arabic (العربية)</GSelectItem>
                  <GSelectItem value="hindi">Hindi (हिन्दी)</GSelectItem>
                  <GSelectItem value="bengali">Bengali (বাংলা)</GSelectItem>
                  <GSelectItem value="punjabi">Punjabi (ਪੰਜਾਬੀ)</GSelectItem>
                  <GSelectItem value="urdu">Urdu (اردو)</GSelectItem>
                  <GSelectItem value="turkish">Turkish (Türkçe)</GSelectItem>
                  <GSelectItem value="dutch">Dutch (Nederlands)</GSelectItem>
                  <GSelectItem value="polish">Polish (Polski)</GSelectItem>
                  <GSelectItem value="swedish">Swedish (Svenska)</GSelectItem>
                  <GSelectItem value="norwegian">Norwegian (Norsk)</GSelectItem>
                  <GSelectItem value="danish">Danish (Dansk)</GSelectItem>
                  <GSelectItem value="finnish">Finnish (Suomi)</GSelectItem>
                  <GSelectItem value="greek">Greek (Ελληνικά)</GSelectItem>
                  <GSelectItem value="hebrew">Hebrew (עברית)</GSelectItem>
                  <GSelectItem value="thai">Thai (ไทย)</GSelectItem>
                  <GSelectItem value="vietnamese">Vietnamese (Tiếng Việt)</GSelectItem>
                  <GSelectItem value="indonesian">Indonesian (Bahasa Indonesia)</GSelectItem>
                  <GSelectItem value="malay">Malay (Bahasa Melayu)</GSelectItem>
                  <GSelectItem value="tagalog">Tagalog (Filipino)</GSelectItem>
                  <GSelectItem value="swahili">Swahili (Kiswahili)</GSelectItem>
                  <GSelectItem value="czech">Czech (Čeština)</GSelectItem>
                  <GSelectItem value="hungarian">Hungarian (Magyar)</GSelectItem>
                  <GSelectItem value="romanian">Romanian (Română)</GSelectItem>
                  <GSelectItem value="ukrainian">Ukrainian (Українська)</GSelectItem>
                  <GSelectItem value="persian">Persian (فارسی)</GSelectItem>
                  <GSelectItem value="tamil">Tamil (தமிழ்)</GSelectItem>
                  <GSelectItem value="telugu">Telugu (తెలుగు)</GSelectItem>
                  <GSelectItem value="marathi">Marathi (मराठी)</GSelectItem>
                  <GSelectItem value="gujarati">Gujarati (ગુજરાતી)</GSelectItem>
                  <GSelectItem value="kannada">Kannada (ಕನ್ನಡ)</GSelectItem>
                  <GSelectItem value="malayalam">Malayalam (മലയാളം)</GSelectItem>
                </GSelectContent>
              </GSelect>
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/30">
              <p className="text-sm text-destructive font-medium">{error}</p>
            </div>
          )}

          <GButton
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
          </GButton>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-1 w-1 rounded-full bg-secondary-accent" />
            <span>Powered by Gemini AI • 100% Original • Commercial Use Allowed</span>
          </div>
        </div>
      </GCard>

      {lyrics && (
        <GCard className="p-6 space-y-4 animate-fade-in border-2 border-primary/30 shadow-lg">
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
              <GButton
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
              </GButton>
              <GButton
                variant="outline"
                size="sm"
                onClick={downloadLyrics}
                className="h-9"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </GButton>
            </div>
          </div>

          <div className="relative">
            <GTextarea
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
            <GButton
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
            </GButton>
          </div>
        </GCard>
      )}
    </div>
  )
}
