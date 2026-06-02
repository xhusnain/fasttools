"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { Navbar } from "@/components/common/navbar"
import { navigationConfig } from "@/data/navigation"

import {
  GAccordion,
  GAccordionContent,
  GAccordionItem,
  GAccordionTrigger,
} from "@/ui/gaccordion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(prev => prev !== isScrolled ? isScrolled : prev)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${scrolled
          ? "bg-white/90 backdrop-blur-md border-border shadow-sm"
          : "bg-white/75 backdrop-blur-sm border-transparent"
          }`}
      >
        <div className="w-full h-14 px-4 flex items-center justify-center gap-x-10">
          {/* Logo */}
          <Link
            href="/"
            title="FastTools - Free Online Tools Homepage"
            aria-label="FastTools home"
            className="flex items-center group shrink-0"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-lg shadow-md border border-white/10 group-hover:scale-105 transition-transform">
              <Image
                src="/android-chrome-192x192.png"
                alt="FastTools Logo"
                width={32}
                height={32}
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navbar />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Mobile Menu Toggle */}
            <button
              className="p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/10 transition-colors lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white/80 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`
        }
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`lg:hidden fixed right-0 top-0 h-full w-[300px] z-50 bg-white/95 backdrop-blur-xl border-l border-border shadow-xl transition-transform duration-300 ease-out transform ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <Image
                  src="/android-chrome-192x192.png"
                  alt="FastTools Logo"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg">FastTools</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-2">
            <div className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Tools Categories
            </div>

            <GAccordion type="single" collapsible className="w-full px-2">
              {navigationConfig.map((section, index) => (
                <GAccordionItem key={index} value={`item-${index}`} className="border-b border-border/5 last:border-0">
                  <GAccordionTrigger className="text-sm font-medium py-3 px-2 hover:no-underline hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                    {section.title}
                  </GAccordionTrigger>
                  <GAccordionContent>
                    <div className="pl-2 space-y-4 pt-2 pb-4">
                      {section.categories.map((category, catIndex) => (
                        <div key={catIndex} className="space-y-1">
                          <div className="text-[10px] font-bold text-muted-foreground/70 uppercase tracking-wider pl-2 mb-1">
                            {category.title}
                          </div>
                          <div className="grid grid-cols-1 gap-0.5">
                            {category.items.map((item, itemIndex) => (
                              <Link
                                key={itemIndex}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`flex items-center gap-2 py-2 px-2 rounded-md text-sm transition-colors ${pathname === item.href
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                                  }`}
                              >
                                {item.icon && <item.icon className="h-3.5 w-3.5 opacity-70" />}
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

            <div className="mt-6 space-y-1 px-2 pb-8">
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${pathname === "/blog" || pathname.startsWith("/blog/")
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
              >
                Blog
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg hover:bg-primary/5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                All Categories
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg hover:bg-primary/5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
