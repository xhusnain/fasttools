"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CopyButtonProps {
  text: string
  id: string
  className?: string
}

export function CopyButton({ text, id, className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)
  const [hovered, setHovered] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button 
      onClick={copyToClipboard}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer ${className}`}
    >
      {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
      {copied ? 'Copied!' : (hovered ? 'Get' : 'Copy')}
    </button>
  )
}
