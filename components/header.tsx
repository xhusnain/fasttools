"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Calculator } from "lucide-react"
import { SearchBar } from "@/components/search-bar"
import { CategoryDropdown } from "@/components/category-dropdown"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#FF8533] bg-[#FF6500] shadow-lg">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6 gap-4">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-lg hover:opacity-90 transition-opacity">
          <div className="h-9 w-9 rounded-xl bg-white flex items-center justify-center shadow-lg">
            <Calculator className="h-5 w-5 text-[#FF6500]" />
          </div>
          <span className="text-white hidden sm:inline tracking-tight">ToolifyHub</span>
        </Link>

        <div className="hidden lg:flex items-center gap-3 flex-1 max-w-2xl">
          <SearchBar />
          <CategoryDropdown />
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </Link>
          <div className="ml-2">
            <DarkModeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-white/80 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#FF8533] bg-[#FF6500] animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <SearchBar />
            <div className="border-t border-[#FF8533] pt-4">
              <p className="text-xs font-semibold text-white/80 mb-2">CATEGORIES</p>
              <div className="flex flex-col gap-2">
                <Link
                  href="/tools"
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Calculators
                </Link>
                <Link
                  href="/converters"
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Converters
                </Link>
                <Link
                  href="/seo-tools"
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SEO Tools
                </Link>
                <Link
                  href="/fun-tools"
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fun Tools
                </Link>
                <Link
                  href="/finance-tools"
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Finance Tools
                </Link>
                <Link
                  href="/ai-tools"
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  AI Tools
                </Link>
              </div>
            </div>
            <div className="border-t border-[#FF8533] pt-4 flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <DarkModeToggle />
              <span className="text-sm text-white/90">Dark Mode</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
