"use client"

import { useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"

import { Copy, Check, FileText } from "lucide-react"


export function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState("3")
  const [result, setResult] = useState("")
  const [copied, setCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const loremText = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa.",
  ]

  const generateLorem = () => {
    setIsGenerating(true)

    setTimeout(() => {
      const count = Number.parseInt(paragraphs) || 1
      const generated = Array.from({ length: count }, (_, i) => loremText[i % loremText.length]).join("\n\n")
      setResult(generated)
      setIsGenerating(false)
    }, 300)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <GCard className="border border-border shadow-sm">
        <GCardHeader>
          <GCardTitle className="text-xl text-foreground flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Lorem Ipsum Generator
          </GCardTitle>
          <GCardDescription className="text-sm text-muted-foreground">
            Generate placeholder text for your designs and mockups
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4">
          <div className="space-y-2">
            <GLabel htmlFor="paragraphs" className="text-sm font-medium text-foreground">
              Number of Paragraphs
            </GLabel>
            <GInput
              id="paragraphs"
              type="number"
              min="1"
              max="10"
              placeholder="Enter number of paragraphs"
              value={paragraphs}
              onChange={(e) => setParagraphs(e.target.value)}
              className="h-10 text-sm"
            />
          </div>

          <GButton
            onClick={generateLorem}
            disabled={!paragraphs || isGenerating}
            isLoading={isGenerating}
            className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md transition-all"
          >
            {isGenerating ? "Generating..." : "Generate Lorem Ipsum"}
          </GButton>
        </GCardContent>
      </GCard>

      {result && (
        <GCard className="border border-border shadow-sm animate-fade-in">
          <GCardHeader>
            <div className="flex items-center justify-between">
              <GCardTitle className="text-lg text-foreground">Generated Text</GCardTitle>
              <GButton
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
                    Copy
                  </>
                )}
              </GButton>
            </div>
          </GCardHeader>
          <GCardContent>
            <div className="bg-muted p-4 rounded-lg text-sm leading-relaxed whitespace-pre-wrap">{result}</div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
