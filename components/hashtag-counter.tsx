"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hash, Copy, Check } from "lucide-react"

export function HashtagCounter() {
  const [text, setText] = useState("")
  const [result, setResult] = useState<{
    count: number
    hashtags: string[]
  } | null>(null)
  const [copied, setCopied] = useState(false)

  const countHashtags = () => {
    if (!text) return

    const hashtagRegex = /#[\w]+/g
    const matches = text.match(hashtagRegex) || []
    const uniqueHashtags = [...new Set(matches)]

    setResult({
      count: uniqueHashtags.length,
      hashtags: uniqueHashtags,
    })
  }

  const copyHashtags = () => {
    if (!result) return
    const text = result.hashtags.join(" ")
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="border border-border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">Instagram Hashtag Counter</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Count and extract hashtags from your Instagram posts
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text" className="text-sm font-medium text-foreground">
              Paste Your Instagram Caption
            </Label>
            <Textarea
              id="text"
              placeholder="Paste your Instagram caption with hashtags here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-32 text-sm resize-none"
            />
          </div>

          <Button
            onClick={countHashtags}
            disabled={!text}
            className="w-full h-11 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            <Hash className="mr-2 h-4 w-4" />
            Count Hashtags
          </Button>
        </div>

        {result && (
          <div className="p-6 rounded-lg bg-accent border border-primary/10 space-y-4 animate-fade-in">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Total Unique Hashtags</p>
              <p className="text-5xl font-bold text-primary">{result.count}</p>
            </div>

            {result.hashtags.length > 0 && (
              <div className="p-4 rounded-lg bg-card border border-border space-y-2">
                <p className="text-sm font-medium text-foreground">Your Hashtags:</p>
                <div className="flex flex-wrap gap-2">
                  {result.hashtags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Button
              onClick={copyHashtags}
              variant="outline"
              className="w-full h-10 text-sm font-medium hover:bg-accent transition-all bg-transparent"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Copy All Hashtags
                </>
              )}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
