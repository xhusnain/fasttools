"use client"

import { useState } from "react"
import { getRandomApiKey } from "@/lib/api-keys"

export function ApiKeyGenerator() {
  const [apiKey, setApiKey] = useState<string>("")
  const [copied, setCopied] = useState(false)

  const handleGetKey = () => {
    const key = getRandomApiKey()
    setApiKey(key)
    setCopied(false)
  }

  const handleCopy = async () => {
    if (!apiKey) return
    try {
      await navigator.clipboard.writeText(apiKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-primary to-red-500 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="text-center">
          <h3 className="text-white font-bold text-sm sm:text-base mb-2">Ready to Get Started?</h3>
          <p className="text-foreground text-xs sm:text-sm mb-4">Get your free API key instantly</p>
          <button
            onClick={handleGetKey}
            className="inline-flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-orange-50 transition-colors"
          >
            <span>Get My Key</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>

      {apiKey && (
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 border border-green-200 dark:border-green-800">
          <div className="text-center">
            <h4 className="font-bold text-heading-accent text-sm sm:text-base mb-3">🎉 Your API Key is Ready!</h4>
            <div className="bg-white dark:bg-muted rounded-lg p-3 mb-3 border">
              <code className="text-sm font-mono text-gray-800 dark:text-gray-200 break-all">{apiKey}</code>
            </div>
            <button
              onClick={handleCopy}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
            >
              {copied ? "Copied!" : "Copy Key"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


