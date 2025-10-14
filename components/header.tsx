"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Wrench, Search, User, Mail } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { CategoryDropdown } from "@/components/category-dropdown"
// Dark mode toggle removed per requirements; dark theme is default in layout
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6 gap-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl hover:opacity-90 transition-opacity">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
            <Wrench className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-foreground hidden sm:inline tracking-tight">FastTools</span>
        </Link>

        <div className="hidden lg:flex items-center gap-4 flex-1 max-w-3xl">
          <div className="flex-1 max-w-2xl">
            <SearchBar />
          </div>
          <CategoryDropdown />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/tools"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            Tools
          </Link>
          <Link
            href="/learn"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            Learn
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            Contact
          </Link>
          <Button asChild size="sm" className="h-9 px-4">
            <Link href="/tools">
              <Wrench className="h-4 w-4 mr-2" />
              Use Tool
            </Link>
          </Button>
          {/* Theme toggle removed to keep dark mode default */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-foreground/80 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/20 bg-background/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <SearchBar />
            <div className="border-t border-border/20 pt-4">
              <p className="text-xs font-semibold text-foreground/60 mb-2">CATEGORIES</p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/tools"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  All Tools
                </Link>
                <Link
                  href="/converters"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Converters
                </Link>
                <Link
                  href="/seo-tools"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SEO Tools
                </Link>
                <Link
                  href="/fun-tools"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fun Tools
                </Link>
                <Link
                  href="/finance-tools"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Finance Tools
                </Link>
                <Link
                  href="/ai-tools"
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AI Tools
                </Link>
              </div>
            </div>
            <div className="border-t border-border/20 pt-4 flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/learn"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Learn
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms of Service
              </Link>
            </div>
            {/* Theme toggle removed in mobile menu */}
          </div>
        </div>
      )}
    </header>
  )
}
