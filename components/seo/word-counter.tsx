"use client"

import { useState, useMemo } from "react"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import {
  FileText,
  Clock,
  Mic,
  Hash,
  Type,
  AlignLeft,
  BarChart3,
  Copy,
  Check,
  RotateCcw,
  AlertCircle,
} from "lucide-react"

interface TextStats {
  words: number
  characters: number
  charactersNoSpaces: number
  sentences: number
  paragraphs: number
  readingTime: string
  speakingTime: string
  avgWordLength: number
  avgSentenceLength: number
  longestWord: string
  syllables: number
}

interface KeywordEntry {
  word: string
  count: number
  density: number
}

interface PlatformLimit {
  name: string
  limit: number
  field: "characters" | "words"
  current: number
  over: boolean
}

const PLATFORM_LIMITS: { name: string; limit: number; field: "characters" | "words" }[] = [
  { name: "Twitter/X Post", limit: 280, field: "characters" },
  { name: "Instagram Caption", limit: 2200, field: "characters" },
  { name: "Meta Description", limit: 160, field: "characters" },
  { name: "Meta Title", limit: 60, field: "characters" },
  { name: "Facebook Post", limit: 63206, field: "characters" },
  { name: "LinkedIn Post", limit: 3000, field: "characters" },
  { name: "YouTube Title", limit: 100, field: "characters" },
  { name: "YouTube Description", limit: 5000, field: "characters" },
  { name: "Pinterest Pin", limit: 500, field: "characters" },
  { name: "TikTok Caption", limit: 2200, field: "characters" },
]

function countSyllables(word: string): number {
  const w = word.toLowerCase().replace(/[^a-z]/g, "")
  if (w.length <= 3) return 1
  let count = 0
  const vowels = "aeiouy"
  let prevVowel = false
  for (let i = 0; i < w.length; i++) {
    const isVowel = vowels.includes(w[i])
    if (isVowel && !prevVowel) count++
    prevVowel = isVowel
  }
  if (w.endsWith("e") && count > 1) count--
  if (w.endsWith("le") && w.length > 2 && !vowels.includes(w[w.length - 3])) count++
  return Math.max(1, count)
}

function formatTime(minutes: number): string {
  if (minutes < 1) return "< 1 min"
  if (minutes < 60) return `${Math.ceil(minutes)} min`
  const hrs = Math.floor(minutes / 60)
  const mins = Math.ceil(minutes % 60)
  return mins > 0 ? `${hrs} hr ${mins} min` : `${hrs} hr`
}

function analyzeText(text: string): TextStats {
  if (!text.trim()) {
    return {
      words: 0, characters: 0, charactersNoSpaces: 0, sentences: 0,
      paragraphs: 0, readingTime: "0 min", speakingTime: "0 min",
      avgWordLength: 0, avgSentenceLength: 0, longestWord: "", syllables: 0,
    }
  }

  const characters = text.length
  const charactersNoSpaces = text.replace(/\s/g, "").length
  const wordsArr = text.trim().split(/\s+/).filter(Boolean)
  const words = wordsArr.length
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length || (text.trim() ? 1 : 0)

  const readingTime = formatTime(words / 238)
  const speakingTime = formatTime(words / 150)

  const totalWordLen = wordsArr.reduce((sum, w) => sum + w.replace(/[^a-zA-Z]/g, "").length, 0)
  const avgWordLength = words > 0 ? Math.round((totalWordLen / words) * 10) / 10 : 0
  const avgSentenceLength = sentences > 0 ? Math.round((words / sentences) * 10) / 10 : 0

  let longestWord = ""
  for (const w of wordsArr) {
    const clean = w.replace(/[^a-zA-Z'-]/g, "")
    if (clean.length > longestWord.length) longestWord = clean
  }

  const syllables = wordsArr.reduce((sum, w) => sum + countSyllables(w), 0)

  return {
    words, characters, charactersNoSpaces, sentences, paragraphs,
    readingTime, speakingTime, avgWordLength, avgSentenceLength,
    longestWord, syllables,
  }
}

function getKeywordDensity(text: string, topN: number = 15): KeywordEntry[] {
  if (!text.trim()) return []
  const words = text.toLowerCase().replace(/[^a-z0-9\s'-]/g, "").split(/\s+/).filter(Boolean)
  const totalWords = words.length
  const stopWords = new Set([
    "the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for",
    "of", "with", "by", "from", "is", "it", "that", "this", "was", "are",
    "be", "has", "had", "have", "not", "no", "do", "does", "did", "will",
    "would", "could", "should", "may", "might", "can", "shall", "if", "then",
    "than", "so", "as", "up", "out", "about", "into", "over", "after",
    "i", "you", "he", "she", "we", "they", "me", "him", "her", "us", "them",
    "my", "your", "his", "its", "our", "their", "what", "which", "who",
    "when", "where", "how", "all", "each", "every", "both", "few", "more",
    "most", "other", "some", "such", "only", "own", "same", "just", "also",
    "been", "being", "were", "am", "very", "too", "here", "there",
  ])

  const freq: Record<string, number> = {}
  for (const w of words) {
    if (w.length < 2 || stopWords.has(w)) continue
    freq[w] = (freq[w] || 0) + 1
  }

  return Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([word, count]) => ({
      word,
      count,
      density: Math.round((count / totalWords) * 10000) / 100,
    }))
}

function getReadabilityScore(stats: TextStats): { score: number; grade: string; level: string } {
  if (stats.words < 10) return { score: 0, grade: "-", level: "Need more text" }

  const asl = stats.avgSentenceLength
  const asw = stats.words > 0 ? stats.syllables / stats.words : 0
  // Flesch Reading Ease
  const flesch = 206.835 - 1.015 * asl - 84.6 * asw
  const score = Math.max(0, Math.min(100, Math.round(flesch)))

  let grade: string
  let level: string
  if (score >= 90) { grade = "5th grade"; level = "Very Easy" }
  else if (score >= 80) { grade = "6th grade"; level = "Easy" }
  else if (score >= 70) { grade = "7th grade"; level = "Fairly Easy" }
  else if (score >= 60) { grade = "8th-9th grade"; level = "Standard" }
  else if (score >= 50) { grade = "10th-12th grade"; level = "Fairly Difficult" }
  else if (score >= 30) { grade = "College"; level = "Difficult" }
  else { grade = "College Graduate"; level = "Very Difficult" }

  return { score, grade, level }
}

export function WordCounter() {
  const [text, setText] = useState("")
  const [copied, setCopied] = useState(false)

  const stats = useMemo(() => analyzeText(text), [text])
  const keywords = useMemo(() => getKeywordDensity(text), [text])
  const readability = useMemo(() => getReadabilityScore(stats), [stats])

  const platformLimits: PlatformLimit[] = useMemo(() => {
    return PLATFORM_LIMITS.map((p) => {
      const current = p.field === "characters" ? stats.characters : stats.words
      return { ...p, current, over: current > p.limit }
    })
  }, [stats])

  const handleCopy = async () => {
    const summary = `Words: ${stats.words}\nCharacters: ${stats.characters}\nCharacters (no spaces): ${stats.charactersNoSpaces}\nSentences: ${stats.sentences}\nParagraphs: ${stats.paragraphs}\nReading Time: ${stats.readingTime}\nSpeaking Time: ${stats.speakingTime}\nAvg Word Length: ${stats.avgWordLength}\nAvg Sentence Length: ${stats.avgSentenceLength}\nReadability: ${readability.level} (${readability.score}/100)`
    await navigator.clipboard.writeText(summary)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Text Input */}
      <GCard>
        <GCardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <GCardTitle className="text-base flex items-center gap-2">
              <FileText className="h-4 w-4" /> Enter Your Text
            </GCardTitle>
            <div className="flex gap-2">
              <GButton variant="outline" size="xs" onClick={handleCopy} disabled={!text.trim()}>
                {copied ? <Check className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
                {copied ? "Copied" : "Copy Stats"}
              </GButton>
              <GButton variant="outline" size="xs" onClick={() => setText("")} disabled={!text}>
                <RotateCcw className="h-3 w-3 mr-1" /> Clear
              </GButton>
            </div>
          </div>
        </GCardHeader>
        <GCardContent>
          <GTextarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your text here to get instant word count, character count, reading time, keyword density, and more..."
            rows={8}
            className="resize-y"
          />
        </GCardContent>
      </GCard>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <StatCard icon={<Hash className="h-4 w-4" />} label="Words" value={stats.words.toLocaleString()} />
        <StatCard icon={<Type className="h-4 w-4" />} label="Characters" value={stats.characters.toLocaleString()} />
        <StatCard icon={<Type className="h-4 w-4" />} label="No Spaces" value={stats.charactersNoSpaces.toLocaleString()} />
        <StatCard icon={<AlignLeft className="h-4 w-4" />} label="Sentences" value={stats.sentences.toLocaleString()} />
        <StatCard icon={<Clock className="h-4 w-4" />} label="Reading Time" value={stats.readingTime} />
        <StatCard icon={<Mic className="h-4 w-4" />} label="Speaking Time" value={stats.speakingTime} />
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Readability + Extra Stats */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <BarChart3 className="h-4 w-4" /> Text Details
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="space-y-3">
            {/* Readability */}
            <div className="p-3 rounded-lg bg-muted/50 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Readability (Flesch)</span>
                <span className={`text-sm font-bold ${
                  readability.score >= 60 ? "text-green-500" :
                  readability.score >= 30 ? "text-yellow-500" : "text-red-500"
                }`}>
                  {readability.score > 0 ? `${readability.score}/100` : "-"}
                </span>
              </div>
              {readability.score > 0 && (
                <>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        readability.score >= 60 ? "bg-green-500" :
                        readability.score >= 30 ? "bg-yellow-500" : "bg-red-500"
                      }`}
                      style={{ width: `${readability.score}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{readability.level}</span>
                    <span>{readability.grade}</span>
                  </div>
                </>
              )}
            </div>

            {/* Extra Stats */}
            <div className="space-y-2">
              <DetailRow label="Paragraphs" value={stats.paragraphs.toString()} />
              <DetailRow label="Avg Word Length" value={stats.avgWordLength > 0 ? `${stats.avgWordLength} chars` : "-"} />
              <DetailRow label="Avg Sentence Length" value={stats.avgSentenceLength > 0 ? `${stats.avgSentenceLength} words` : "-"} />
              <DetailRow label="Syllables" value={stats.syllables.toLocaleString()} />
              <DetailRow label="Longest Word" value={stats.longestWord || "-"} />
            </div>
          </GCardContent>
        </GCard>

        {/* Keyword Density */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <Hash className="h-4 w-4" /> Top Keywords
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            {keywords.length > 0 ? (
              <div className="space-y-1.5 max-h-[300px] overflow-y-auto">
                {keywords.map((kw) => (
                  <div key={kw.word} className="flex items-center gap-2 text-sm">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-medium truncate">{kw.word}</span>
                        <span className="text-xs text-muted-foreground shrink-0 ml-2">
                          {kw.count}x ({kw.density}%)
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${Math.min(100, (kw.count / (keywords[0]?.count || 1)) * 100)}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground py-4 text-center">
                Start typing to see keyword density...
              </p>
            )}
          </GCardContent>
        </GCard>

        {/* Platform Limits */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <AlertCircle className="h-4 w-4" /> Platform Limits
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {platformLimits.map((p) => {
                const pct = p.limit > 0 ? Math.min(100, (p.current / p.limit) * 100) : 0
                return (
                  <div key={p.name} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className={p.over ? "text-red-500 font-medium" : "text-foreground"}>
                        {p.name}
                      </span>
                      <span className={`text-xs ${p.over ? "text-red-500" : "text-muted-foreground"}`}>
                        {p.current.toLocaleString()}/{p.limit.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${p.over ? "bg-red-500" : pct > 80 ? "bg-yellow-500" : "bg-green-500"}`}
                        style={{ width: `${Math.min(100, pct)}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </GCardContent>
        </GCard>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card p-3 text-center space-y-1">
      <div className="flex items-center justify-center text-muted-foreground">{icon}</div>
      <div className="text-xl font-bold text-foreground">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm py-1 border-b border-border last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium text-foreground">{value}</span>
    </div>
  )
}
