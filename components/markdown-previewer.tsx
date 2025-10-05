"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { marked } from "marked"

export function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(
    "# Hello World\n\nThis is a **markdown** previewer.\n\n- Item 1\n- Item 2\n- Item 3\n\n```javascript\nconst hello = 'world';\n```",
  )

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
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Markdown Input</label>
        <Textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="min-h-96 font-mono text-sm"
          placeholder="Type your markdown here..."
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Live Preview</label>
        <Card className="p-6 min-h-96 overflow-auto prose prose-sm dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }} />
        </Card>
      </div>
    </div>
  )
}
