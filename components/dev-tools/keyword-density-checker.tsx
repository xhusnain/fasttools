"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GTextarea } from "@/ui/gtextarea"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"

import { Search } from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"

interface KeywordData {
  keyword: string
  count: number
  density: number
}

export function KeywordDensityChecker() {
  const [text, setText] = useState("")
  const [result, setResult] = useState<KeywordData[]>([])
  const [totalWords, setTotalWords] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeText = () => {
    setIsAnalyzing(true)

    setTimeout(() => {
      const words = text.toLowerCase().match(/\b\w+\b/g) || []
      const total = words.length

      const wordCount: { [key: string]: number } = {}
      words.forEach((word) => {
        if (word.length > 3) {
          wordCount[word] = (wordCount[word] || 0) + 1
        }
      })

      const keywordData: KeywordData[] = Object.entries(wordCount)
        .map(([keyword, count]) => ({
          keyword,
          count,
          density: (count / total) * 100,
        }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10)

      setResult(keywordData)
      setTotalWords(total)
      setIsAnalyzing(false)
    }, 500)
  }

  return (
    <div className="space-y-6">
      <GCard className="border border-border shadow-sm">
        <GCardHeader>
          <GCardTitle className="text-xl text-foreground flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Keyword Density Checker
          </GCardTitle>
          <GCardDescription className="text-sm text-muted-foreground">
            Analyze keyword density in your content for SEO optimization
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <div className="space-y-2">
            <GLabel htmlFor="text" className="text-sm font-medium text-foreground">
              Your Content
            </GLabel>
            <GTextarea
              id="text"
              placeholder="Paste your article or content here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-48 text-sm resize-none border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <p className="text-xs text-muted-foreground">{text.split(/\s+/).filter(Boolean).length} words</p>
          </div>

          <GButton
            onClick={analyzeText}
            disabled={!text || isAnalyzing}
            className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isAnalyzing ? (
              <>
                <LoadingSpinner className="mr-2" />
                Analyzing...
              </>
            ) : (
              "Analyze Keyword Density"
            )}
          </GButton>
        </GCardContent>
      </GCard>

      {result.length > 0 && (
        <GCard className="border border-border shadow-sm animate-fade-in">
          <GCardHeader>
            <GCardTitle className="text-lg text-foreground">Keyword Analysis</GCardTitle>
            <GCardDescription className="text-sm text-muted-foreground">
              Total words: {totalWords} | Top 10 keywords
            </GCardDescription>
          </GCardHeader>
          <GCardContent>
            <div className="space-y-3">
              {result.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-xs font-bold text-muted-foreground w-6">#{index + 1}</span>
                    <span className="text-sm font-medium text-foreground">{item.keyword}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{item.count} times</span>
                    <span className="text-sm font-semibold text-primary">{item.density.toFixed(2)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
