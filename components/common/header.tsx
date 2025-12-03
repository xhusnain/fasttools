"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { SearchBar } from "@/components/common/search-bar"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { usePathname } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/downloaders", label: "Downloaders" },
    { href: "/image-tools", label: "Image Tools" },
    { href: "/api-docs", label: "API Docs" },
  ]

  return (
    <>
      {/* Gradient accent bar at the very top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-primary/90" />

      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border/10 transition-all duration-300">
        <nav className="container mx-auto flex items-center justify-between h-16 sm:h-20 md:h-24 px-4 lg:px-8">

          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="FastTools home"
              className="group transition-all duration-300"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">FastTools</span>
            </Link>
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 group ${pathname === link.href
                  ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-orange-500/30"
                  : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                  }`}
              >
                {link.label}
                {/* Active indicator dot */}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side - Desktop Search */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            {!showSearch ? (
              <button
                aria-label="Open search"
                onClick={() => setShowSearch(true)}
                className="p-3 rounded-xl text-foreground/70 hover:text-foreground hover:bg-foreground/5"
              >
                <Search className="h-5 w-5" />
              </button>
            ) : (
              <div className="w-96">
                <SearchBar
                  autoFocus
                  placeholder="Search 1000+ tools..."
                  variant="default"
                  className="w-full"
                  onBlur={() => setShowSearch(false)}
                />
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            {!showSearch ? (
              <>
                <button
                  className="p-2 sm:p-3 rounded-xl text-foreground/70 hover:text-primary hover:bg-primary/10"
                  onClick={() => setShowSearch(true)}
                  aria-label="Open search"
                >
                  <Search className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                <button
                  className="p-2 sm:p-3 rounded-xl text-foreground/70 hover:text-primary hover:bg-primary/10"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                </button>
              </>
            ) : (
              <div className="w-32 sm:w-40">
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 md:top-24 z-40 bg-background/98 backdrop-blur-xl border-b border-border/10 transition-all duration-300 ease-out ${mobileMenuOpen
          ? 'max-h-screen opacity-100 visible'
          : 'max-h-0 opacity-0 invisible'
          }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-3">
          {/* Mobile Navigation Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 ${pathname === link.href
                ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-orange-500/30"
                : "text-foreground/70 hover:text-foreground hover:bg-foreground/5"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}