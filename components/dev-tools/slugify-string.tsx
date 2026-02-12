"use client"

import { useState, useCallback } from "react"
import { GTextarea } from "@/ui/gtextarea"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"
import { slugify } from "@/lib/slugify"
import { Copy, Check } from "lucide-react"

export function SlugifyString() {
  const [input, setInput] = useState("")
  const [copied, setCopied] = useState(false)

  const slug = slugify(input)

  const handleCopy = useCallback(async () => {
    if (slug) {
      await navigator.clipboard.writeText(slug)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [slug])

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <GLabel className="text-base font-medium">Your string to slugify</GLabel>
        <GTextarea
          placeholder="Put your string here (ex: My file path)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-[120px] resize-y"
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <GLabel className="text-base font-medium">Your slug</GLabel>
        <GTextarea
          placeholder="Your slug will be generated here (e.g. my-file-path)"
          value={slug}
          readOnly
          className="min-h-[120px] resize-y border-green-500/50 focus-visible:ring-green-500/30"
          rows={4}
        />
      </div>

      <div className="flex justify-center">
        <GButton
          onClick={handleCopy}
          disabled={!slug}
          className="gap-2"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy slug
            </>
          )}
        </GButton>
      </div>
    </div>
  )
}
