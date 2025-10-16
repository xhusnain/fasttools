"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  const categories = [
    { name: "Calculators", href: "/tools" },
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

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 h-10 text-sm font-medium text-white hover:text-white transition-colors rounded-lg hover:bg-primary/90 bg-primary border border-primary shadow-md hover:shadow-lg"
      >
        Tools
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg z-50 py-2 animate-fade-in">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
