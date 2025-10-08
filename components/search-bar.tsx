"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const toolSuggestions = [
  { name: "Age Calculator", path: "/tools/age-calculator", category: "Calculator" },
  { name: "Date Difference", path: "/tools/date-difference", category: "Calculator" },
  { name: "BMI Calculator", path: "/tools/bmi-calculator", category: "Calculator" },
  { name: "Loan EMI Calculator", path: "/tools/loan-calculator", category: "Calculator" },
  { name: "Percentage Calculator", path: "/tools/percentage-calculator", category: "Calculator" },
  { name: "Time Duration", path: "/tools/time-duration", category: "Calculator" },
  { name: "Tax Calculator", path: "/tools/tax-calculator", category: "Calculator" },
  { name: "Compound Interest", path: "/tools/compound-interest", category: "Calculator" },
  { name: "Text Case Converter", path: "/converters/text-case", category: "Converter" },
  { name: "Length Converter", path: "/converters/length", category: "Converter" },
  { name: "File Size Converter", path: "/converters/file-size", category: "Converter" },
  { name: "Currency Converter", path: "/converters/currency", category: "Converter" },
  { name: "Time Zone Converter", path: "/converters/timezone", category: "Converter" },
  { name: "Temperature Converter", path: "/converters/temperature", category: "Converter" },
  { name: "Meta Tag Generator", path: "/seo-tools/meta-tags", category: "SEO" },
  { name: "Lorem Ipsum Generator", path: "/seo-tools/lorem-ipsum", category: "SEO" },
  { name: "Hashtag Generator", path: "/seo-tools/hashtags", category: "SEO" },
  { name: "Blog Title Generator", path: "/seo-tools/blog-titles", category: "SEO" },
  { name: "Keyword Density Checker", path: "/seo-tools/keyword-density", category: "SEO" },
  { name: "Future Age Predictor", path: "/fun-tools/future-age", category: "Fun" },
  { name: "Love Calculator", path: "/fun-tools/love-calculator", category: "Fun" },
  { name: "Hashtag Counter", path: "/fun-tools/hashtag-counter", category: "Fun" },
  { name: "Birthday Countdown", path: "/fun-tools/birthday-countdown", category: "Fun" },
  { name: "Anniversary Calculator", path: "/fun-tools/anniversary", category: "Fun" },
  { name: "Invoice Generator", path: "/finance-tools/invoice-generator", category: "Finance" },
  { name: "PayPal Fee Calculator", path: "/finance-tools/paypal-fee", category: "Finance" },
  { name: "Discount Calculator", path: "/finance-tools/discount-calculator", category: "Finance" },
  { name: "Tip Calculator", path: "/finance-tools/tip-calculator", category: "Finance" },
  { name: "AI Meme Generator", path: "/ai-tools/meme-generator", category: "AI" },
  { name: "AI QR Generator", path: "/ai-tools/qr-generator", category: "AI" },
  { name: "Lyrics Generator", path: "/ai-tools/lyrics-generator", category: "AI" },
  { name: "Caption Generator", path: "/ai-tools/caption-generator", category: "AI" },
]

export function SearchBar() {
  const [query, setQuery] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState<typeof toolSuggestions>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.trim().length > 0) {
      const filtered = toolSuggestions.filter((tool) => tool.name.toLowerCase().includes(query.toLowerCase()))
      setFilteredSuggestions(filtered.slice(0, 6)) // Show max 6 suggestions
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = () => {
    setShowSuggestions(false)
    setQuery("")
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tools..."
          className="w-full h-10 pl-10 pr-4 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
        />
      </form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in">
          {filteredSuggestions.map((tool, index) => (
            <Link
              key={`${tool.name}-${tool.path}`}
              href={tool.path}
              onClick={handleSuggestionClick}
              className="flex items-center justify-between px-4 py-3 hover:bg-accent transition-colors group"
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground">
                  {tool.name}
                </span>
                <span className="text-xs text-muted-foreground">{tool.category}</span>
              </div>
              <Search className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
