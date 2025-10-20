"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categories = [
    { name: "Calculators", href: "/calculator" },
    { name: "Converters", href: "/converters" },
    { name: "SEO Tools", href: "/seo-tools" },
    { name: "Fun Tools", href: "/fun-tools" },
    { name: "Finance Tools", href: "/finance-tools" },
    { name: "Date & Time", href: "/date-time-tools" },
    { name: "Social Media", href: "/social-media-tools" },
    { name: "Image Tools", href: "/image-tools" },
    { name: "Dev Tools", href: "/dev-tools" },
    { name: "AI Tools", href: "/ai-tools" },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative group"
      >
        <span>Tools</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-50 animate-fade-in">
          <div className="p-2">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="block px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
