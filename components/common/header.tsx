"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search, ChevronDown, ArrowUpRight, Sparkles } from "lucide-react"
import { SearchBar } from "@/components/common/search-bar"
import { ThemeToggle } from "@/components/common/theme-toggle"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const MegaMenu = dynamic(() => import("@/components/common/mega-menu").then(mod => mod.MegaMenu), {
  ssr: false,
})
import { navigationConfig } from "@/data/navigation"

import {
  GAccordion,
  GAccordionContent,
  GAccordionItem,
  GAccordionTrigger,
} from "@/ui/gaccordion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md shadow-sm transition-all duration-300">

        {/* TOP ROW: Logo, Search, Actions */}
        <div className="border-b border-border/5">
          <div className="container mx-auto flex items-center justify-center gap-4 h-16 px-4 lg:px-8">

            {/* Left side - Logo */}
            <div className="flex items-center shrink-0">
              <Link
                href="/"
                aria-label="FastTools home"
                className="group transition-all duration-300"
              >
                <span className="text-xl md:text-2xl font-bold text-foreground">FastTools</span>
              </Link>
            </div>

            {/* Middle - Search (Desktop) */}
            <div className="hidden md:flex w-[500px] px-2">
              <SearchBar
                placeholder="Search 1000+ tools..."
                variant="default"
                className="w-full shadow-sm"
              />
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <nav className="hidden lg:flex items-center gap-3 mr-2 h-full">
                <Link
                  href="/guides"
                  className="text-sm font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-all flex items-center gap-1 h-full"
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  Build & Earn
                </Link>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 h-full"
                >
                  Blog
                </Link>
                <Link href="/products" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center h-full">
                  Products
                </Link>
                <Link href="/downloaders" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center h-full">
                  Downloaders
                </Link>
                <Link href="/api-docs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center h-full">
                  API Docs
                </Link>
                <Link href="/ad-tools/roas-calculator" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center h-full">
                  ROAS Calculator
                </Link>
                <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center h-full">
                  Contact
                </Link>
              </nav>

              <ThemeToggle />

              {/* Mobile Search Toggle (since main search is hidden on mobile) */}
              <button
                className="md:hidden p-2 rounded-xl text-foreground/70 hover:text-primary hover:bg-primary/10"
                onClick={() => setShowSearch(!showSearch)}
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-xl text-foreground/70 hover:text-primary hover:bg-primary/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Input (Visible only when toggled) */}
          {showSearch && (
            <div className="md:hidden px-4 pb-4 animate-fade-in-up">
              <SearchBar
                autoFocus
                placeholder="Search tools..."
                variant="pill"
                className="w-full"
                onBlur={() => { }}
              />
            </div>
          )}
        </div>

        {/* BOTTOM ROW: Sub-Navbar (Desktop Only) */}
        <div className="hidden md:block bg-background/50 border-b border-border/10 backdrop-blur-sm">
          <div className="container mx-auto px-2 lg:px-4 h-9 flex items-center">
            <MegaMenu />
          </div>
        </div>



      </header>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 z-40 bg-background/98 backdrop-blur-xl border-b border-border/10 transition-all duration-300 ease-out overflow-y-auto ${mobileMenuOpen
          ? 'max-h-[calc(100vh-4rem)] opacity-100 visible bottom-0'
          : 'max-h-0 opacity-0 invisible'
          }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          <GAccordion type="single" collapsible className="w-full">
            {navigationConfig.map((section, index) => (
              <GAccordionItem key={index} value={`item-${index}`} className="border-b border-border/10">
                <GAccordionTrigger className="text-base font-semibold py-4 hover:no-underline hover:text-primary transition-colors">
                  {section.title}
                </GAccordionTrigger>
                <GAccordionContent>
                  <div className="pl-4 space-y-4 pt-2 pb-4">
                    {section.categories.map((category, catIndex) => (
                      <div key={catIndex} className="space-y-2">
                        <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          {category.title}
                        </h5>
                        <div className="grid grid-cols-1 gap-2">
                          {category.items.map((item, itemIndex) => (
                            <Link
                              key={itemIndex}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`flex items-center gap-2 py-2 text-sm transition-colors ${pathname === item.href ? "text-primary font-medium" : "text-foreground/80 hover:text-primary"
                                }`}
                            >
                              {item.icon && <item.icon className="h-4 w-4" />}
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </GAccordionContent>
              </GAccordionItem>
            ))}
          </GAccordion>

          <div className="pt-2 border-t border-border/10 mt-2">
            <Link
              href="/guides"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-3 text-base font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              Build & Earn
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 py-3 text-base font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/ad-tools/roas-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              ROAS Calculator
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/api-docs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-base font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              API Docs
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}