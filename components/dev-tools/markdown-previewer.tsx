"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { GButton as Button } from "@/components/globalcomponents/gbutton"
import { marked } from "marked"
import { RotateCcw } from "lucide-react"

export function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState("")

  const resetMarkdown = () => {
    setMarkdown("")
  }

  const renderMarkdown = (md: string) => {
    try {
      return marked(md, {
        breaks: true,
        gfm: true,
      })
    } catch (error) {
      console.error("Markdown parsing error:", error)
      return "<p>Error parsing markdown</p>"
    }
  }

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex gap-3 justify-end">
        <Button
          onClick={resetMarkdown}
          variant="outline"
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Markdown Input</label>
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="min-h-96 font-mono text-sm border-2 border-orange-300 focus:border-primary"
            placeholder="Type your markdown here..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Live Preview</label>
          <Card className="p-6 min-h-96 overflow-auto prose prose-sm dark:prose-invert max-w-none">
            {markdown ? (
              <div dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }} />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <p className="text-center">
                  Type markdown to see the preview
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
