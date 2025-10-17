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
    <header className="sticky top-0 z-50 w-full bg-background shadow-lg">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6 gap-4">
        <Link href="/" className="flex items-center gap-3 font-bold text-xl">
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors duration-200 p-1.5">
            <img src="/logo.svg" alt="FastTools Logo" className="h-7 w-7 object-contain" />
          </div>
          <span className="text-foreground hidden sm:inline tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            FastTools
          </span>
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
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 hover:scale-105 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/calculator"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 hover:scale-105 relative group"
          >
            Tools
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 hover:scale-105 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-200 hover:scale-105 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
          </Link>
          {/* Theme toggle removed to keep dark mode default */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-primary/10"
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
                  href="/calculator"
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
