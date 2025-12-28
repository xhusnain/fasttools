"use client"

import type React from "react"
import { useState, useEffect, useRef, useMemo, useCallback } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Fuse from "fuse.js"
import { searchItems, type SearchItem } from "@/lib/search-data"

import { SearchBarProps } from "@/types/common-types/search-bar.types"

// Optimized Fuse.js configuration
const fuseOptions = {
  includeScore: true,
  includeMatches: true,
  useExtendedSearch: true,
  threshold: 0.3, // Balanced accuracy - allows some typos
  findAllMatches: true,
  minMatchCharLength: 2,
  keys: [
    { name: 'name', weight: 0.7 }, // Title is most important
    { name: 'description', weight: 0.3 },
    { name: 'category', weight: 0.2 }
  ]
}

export function SearchBar({
  className,
  inputClassName,
  autoFocus = false,
  placeholder = "Search tools...",
  onBlur,
  variant = "default",
  onSearchStateChange
}: SearchBarProps) {
  const [query, setQuery] = useState("")
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchItem[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)
  const isClickingSuggestion = useRef(false)

  // Create Fuse instance with pre-computed index for performance
  const fuse = useMemo(() => {
    const index = Fuse.createIndex(['name', 'description', 'category'], searchItems)
    return new Fuse(searchItems, fuseOptions, index)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Debounced search function
  const performSearch = useCallback((searchQuery: string) => {
    if (searchQuery.trim().length > 0) {
      const results = fuse.search(searchQuery)
      setFilteredSuggestions(results.map(result => result.item).slice(0, 8)) // Show max 8 suggestions
      setShowSuggestions(true)
      onSearchStateChange?.(true)
    } else {
      setShowSuggestions(false)
      onSearchStateChange?.(false)
    }
  }, [fuse, onSearchStateChange])

  useEffect(() => {
    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }

    // Set new timer for debounced search
    debounceTimer.current = setTimeout(() => {
      performSearch(query)
    }, 150) // 150ms debounce for smooth UX

    // Cleanup function
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [query, performSearch])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      // Don't close if clicking inside the search container (input or suggestions)
      if (searchRef.current && searchRef.current.contains(target)) {
        return
      }

      // Close suggestions if clicking outside
      setShowSuggestions(false)
      if (searchRef.current && !searchRef.current.contains(target)) {
        onSearchStateChange?.(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Only close suggestions if we're not clicking on a suggestion
    if (!isClickingSuggestion.current) {
      setShowSuggestions(false)
      if (onBlur) {
        onBlur()
      }
    }
    // Reset the flag after a short delay
    setTimeout(() => {
      isClickingSuggestion.current = false
    }, 100)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionMouseDown = () => {
    // Prevent blur from firing when clicking on suggestion
    isClickingSuggestion.current = true
  }

  const handleSuggestionClick = () => {
    // Close suggestions and clear query immediately
    setShowSuggestions(false)
    setQuery("")
    // Reset flag after click completes
    setTimeout(() => {
      isClickingSuggestion.current = false
    }, 100)
    // Link will handle navigation
  }

  if (!isMounted) {
    return (
      <div className={`relative w-full max-w-md${className ? ` ${className}` : ""}`}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder={placeholder}
            className={`${variant === "pill" ? "w-full h-9 pl-10 pr-4 text-sm rounded-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none" : "w-full h-12 pl-12 pr-4 text-base rounded-lg border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"}${inputClassName ? ` ${inputClassName}` : ""}`}
            disabled
          />
        </div>
      </div>
    )
  }

  return (
    <div ref={searchRef} className={`relative w-full max-w-md${className ? ` ${className}` : ""}`}>
      <form onSubmit={handleSearch} className="relative">
        <Search className={`absolute ${variant === "pill" ? "left-3" : "left-4"} top-1/2 -translate-y-1/2 ${variant === "pill" ? "h-4 w-4" : "h-5 w-5"} text-muted-foreground`} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`${variant === "pill" ? "w-full h-9 pl-9 pr-3 text-sm rounded-full bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none" : "w-full h-12 pl-12 pr-4 text-base rounded-lg border-2 border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all shadow-sm"}${inputClassName ? ` ${inputClassName}` : ""}`}
          onBlur={handleInputBlur}
        />
      </form>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full mt-2 w-full bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 animate-fade-in max-h-[400px] overflow-y-auto"
        >
          {filteredSuggestions.map((tool, index) => (
            <Link
              key={`${tool.name}-${tool.path}-${index}`}
              href={tool.path}
              onClick={handleSuggestionClick}
              onMouseDown={handleSuggestionMouseDown}
              className="flex items-center justify-between px-4 py-3 hover:bg-accent transition-colors group"
            >
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm font-medium text-foreground group-hover:text-accent-foreground truncate">
                  {tool.name}
                </span>
                <span className="text-xs text-muted-foreground truncate">{tool.category}</span>
              </div>
              <Search className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground flex-shrink-0 ml-2" />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
