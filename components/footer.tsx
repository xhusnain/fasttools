"use client"

import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      // Reset message after 5 seconds
      setTimeout(() => {
        setSubscribed(false)
      }, 5000)
    }
  }

  return (
    <footer className="relative bg-primary py-12 md:py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Top Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 relative z-10">
          {/* Column 1 - Newsletter */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xs md:text-sm font-black text-black mb-3 md:mb-4 uppercase">Sign up for the latest updates & features</h3>
            {subscribed ? (
              <div className="py-2 text-xs md:text-sm font-black text-black">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="EMAIL ADDRESS" 
                  required
                  className="flex-1 px-3 md:px-4 py-2 bg-transparent border-b-2 border-black text-black placeholder:text-black/60 font-bold text-xs md:text-sm focus:outline-none"
                />
                <button type="submit" className="text-black font-black text-lg md:text-xl hover:scale-110 transition-transform">→</button>
              </form>
            )}
          </div>

          {/* Column 2 - Product */}
          <div>
            <Link href="/products" className="block text-xs md:text-sm font-black text-black mb-2 md:mb-3 hover:underline uppercase">Products →</Link>
          </div>

          {/* Column 3 - Downloads & APIs */}
          <div>
            <Link href="/downloaders" className="block text-xs md:text-sm font-black text-black mb-2 md:mb-3 hover:underline uppercase">Downloaders →</Link>
            <Link href="/api-docs" className="block text-xs md:text-sm font-black text-black mb-2 md:mb-3 hover:underline uppercase">API Docs →</Link>
          </div>
        </div>

        {/* Large "FASTTOOLS" Text */}
        <div className="relative z-10 text-center mb-8 md:mb-12">
          <h2 className="text-[50px] sm:text-[80px] md:text-[120px] lg:text-[160px] xl:text-[200px] font-black text-black leading-none tracking-tighter whitespace-nowrap">
            FASTTOOLS
          </h2>
        </div>

        {/* Bottom Links Section */}
        <div className="border-t-2 border-black/20 pt-6 md:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
            {/* Column 1 - Quick Links */}
            <div>
              <h3 className="text-xs md:text-sm font-black text-black mb-3 md:mb-4 uppercase">Quick Links</h3>
              <div className="space-y-1.5 md:space-y-2">
                <Link href="/image-tools" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Image Tools
                </Link>
                <Link href="/calculator" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Calculators
                </Link>
                <Link href="/pdf-tools" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  PDF Tools
                </Link>
                <Link href="/ai-tools" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  AI Tools
                </Link>
              </div>
            </div>

            {/* Column 2 - Popular Tools */}
            <div>
              <h3 className="text-xs md:text-sm font-black text-black mb-3 md:mb-4 uppercase">Popular Tools</h3>
              <div className="space-y-1.5 md:space-y-2">
                <Link href="/converters/currency" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Currency Converter
                </Link>
                <Link href="/image-tools/image-background-remover" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Background Remover
                </Link>
                <Link href="/image-tools/image-blur" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Image Blur
                </Link>
                <Link href="/ai-tools/caption-generator" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Caption Generator
                </Link>
              </div>
            </div>

            {/* Column 3 - Company */}
            <div>
              <h3 className="text-xs md:text-sm font-black text-black mb-3 md:mb-4 uppercase">Company</h3>
              <div className="space-y-1.5 md:space-y-2">
                <Link href="/about" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  About Us
                </Link>
                <Link href="/contact" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Contact
                </Link>
                <Link href="/faq" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  FAQ
                </Link>
                <Link href="/privacy-policy" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookie-preferences" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Cookie Preferences
                </Link>
              </div>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-xs md:text-sm font-black text-black mb-3 md:mb-4 uppercase">Contact</h3>
              <div className="space-y-2 md:space-y-3">
                <a
                  href="mailto:fasttools.store@outlook.com"
                  className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors break-words"
                >
                  fasttools.store@outlook.com
                </a>
                <p className="text-[10px] md:text-xs font-semibold text-black/70">
                  Have questions? We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs md:text-sm font-bold text-black/70 mt-6 md:mt-8">
            © 2025 FastTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
