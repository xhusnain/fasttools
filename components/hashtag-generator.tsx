"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Check, Hash } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

export function HashtagGenerator() {
  const [topic, setTopic] = useState("")
  const [result, setResult] = useState<string[]>([])
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateHashtags = () => {
    setIsGenerating(true)

    setTimeout(() => {
      const topicLower = topic.toLowerCase().trim()
      const words = topicLower.split(" ")

      const hashtags = [
        `#${words.join("")}`,
        `#${topicLower.replace(/\s+/g, "")}`,
        ...words.map((word) => `#${word}`),
        `#${words[0]}tips`,
        `#${words[0]}ideas`,
        `#${words[0]}inspiration`,
        `#${words[0]}community`,
        `#${words[0]}daily`,
        `#${words[0]}life`,
        `#trending`,
        `#viral`,
        `#explore`,
        `#instagood`,
        `#photooftheday`,
      ]

      setResult([...new Set(hashtags)].slice(0, 15))
      setIsGenerating(false)
    }, 500)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result.join(" "))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground flex items-center gap-2">
            <Hash className="h-5 w-5 text-primary" />
            Hashtag Generator
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Generate relevant hashtags for your social media posts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic" className="text-sm font-medium text-foreground">
              Topic or Keywords
            </Label>
            <Input
              id="topic"
              placeholder="e.g., fitness, travel, food"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="h-10 text-sm"
            />
          </div>

          <Button
            onClick={generateHashtags}
            disabled={!topic || isGenerating}
            className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isGenerating ? (
              <>
                <LoadingSpinner className="mr-2" />
                Generating...
              </>
            ) : (
              "Generate Hashtags"
            )}
          </Button>
        </CardContent>
      </Card>

      {result.length > 0 && (
        <Card className="border border-border shadow-sm animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-foreground">Generated Hashtags</CardTitle>
              <Button
                onClick={copyToClipboard}
                variant="outline"
                size="sm"
                className="h-9 text-sm font-medium bg-transparent"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy All
                  </>
                )}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {result.map((hashtag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-primary/5 text-primary rounded-full text-sm font-medium border border-primary/10"
                >
                  {hashtag}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
