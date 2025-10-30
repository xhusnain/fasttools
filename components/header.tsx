"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Wrench, Search } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
// Dark mode toggle removed per requirements; dark theme is default in layout
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-lg">
      <nav className="container mx-auto flex h-12 items-center justify-center px-4 lg:px-6">

        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-2 bg-card text-card-foreground rounded-full shadow-lg px-2 py-1.5 border border-border/60">
            {/* Inline brand icon inside pill */}
            <Link href="/" aria-label="FastTools home" className="flex items-center">
              <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center shadow-sm mr-1">
                {isHydrated ? (
                  <img src="/logo.svg" alt="FastTools" className="h-4 w-4 object-contain" />
                ) : (
                  <Wrench className="h-4 w-4 text-primary-foreground" />
                )}
              </div>
            </Link>
            {/* Left: Image Tools link */}
            <Link
              href="/image-tools"
              className="px-3 py-1.5 text-sm font-medium rounded-full text-foreground/80 hover:text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Image Tools
            </Link>
            <div className="mx-1 h-5 w-px bg-border" />

            {/* Search area inside pill */}
            {!showSearch ? (
              <button
                aria-label="Open search"
                onClick={() => setShowSearch(true)}
                className="p-1.5 rounded-full hover:bg-accent hover:text-accent-foreground transition"
              >
                <Search className="h-4 w-4" />
              </button>
            ) : (
              <div className="w-72">
                <SearchBar
                  autoFocus
                  placeholder="Search tools..."
                  variant="pill"
                  className="w-full"
                  onBlur={() => setShowSearch(false)}
                />
              </div>
            )}
          </div>
        </div>

        {/* No right-side links; keep navbar minimal */}

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          {!showSearch ? (
            <button
              className="text-foreground hover:text-primary transition-all duration-200 p-2 rounded-lg hover:bg-primary/10"
              onClick={() => setShowSearch(true)}
              aria-label="Open search"
            >
              <Search className="h-6 w-6" />
            </button>
          ) : (
            <div className="w-40">
              <SearchBar
                autoFocus
                placeholder="Search..."
                variant="pill"
                className="w-full"
                onBlur={() => setShowSearch(false)}
              />
            </div>
          )}
        </div>
      </nav>

    </header>
  )
}
