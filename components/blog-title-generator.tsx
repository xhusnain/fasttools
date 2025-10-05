"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check, Lightbulb, RefreshCw } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function BlogTitleGenerator() {
  const [keyword, setKeyword] = useState("")
  const [result, setResult] = useState<string[]>([])
  const [copied, setCopied] = useState<number | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const templates = [
    "How to {keyword}: A Complete Guide",
    "{keyword}: Everything You Need to Know",
    "10 Best {keyword} Tips for Beginners",
    "The Ultimate {keyword} Guide for 2025",
    "{keyword} Made Simple: Step-by-Step Tutorial",
    "Why {keyword} Matters in 2025",
    "5 Common {keyword} Mistakes to Avoid",
    "The Future of {keyword}: Trends and Predictions",
    "{keyword} vs Alternatives: Which is Better?",
    "Mastering {keyword}: Expert Tips and Tricks",
  ]

  const generateTitles = () => {
    setIsGenerating(true)

    setTimeout(() => {
      const titles = templates.map((template) =>
        template.replace(/{keyword}/g, keyword.charAt(0).toUpperCase() + keyword.slice(1)),
      )
      setResult(titles)
      setIsGenerating(false)
    }, 500)
  }

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            Blog Title Generator
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Generate catchy blog titles for your content
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="keyword" className="text-sm font-medium text-foreground">
              Main Keyword or Topic
            </Label>
            <Input
              id="keyword"
              placeholder="e.g., SEO, content marketing, web design"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="h-10 text-sm"
            />
          </div>

          <Button
            onClick={generateTitles}
            disabled={!keyword || isGenerating}
            className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isGenerating ? (
              <>
                <LoadingSpinner className="mr-2" />
                Generating...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Generate Titles
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result.length > 0 && (
        <Card className="border border-border shadow-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Generated Blog Titles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {result.map((title, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border hover:border-primary/20 transition-colors"
                >
                  <span className="text-sm text-foreground flex-1">{title}</span>
                  <Button
                    onClick={() => copyToClipboard(title, index)}
                    variant="ghost"
                    size="sm"
                    className="h-8 text-xs font-medium ml-2"
                  >
                    {copied === index ? (
                      <>
                        <Check className="h-3 w-3" />
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
