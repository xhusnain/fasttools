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
                <Link href="/calculator/ip-subnet-calculator" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  IP Subnet Calculator
                </Link>
                <Link href="/calculator/standard-deviation-calculator" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Standard Deviation
                </Link>
                <Link href="/calculator/concrete-calculator" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Concrete Calculator
                </Link>
                <Link href="/calculator/conversion-calculator" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  Unit Converter
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
                <Link href="/dmca" className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors">
                  DMCA
                </Link>
              </div>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-xs md:text-sm font-black text-black mb-3 md:mb-4 uppercase">Contact</h3>
              <div className="space-y-2 md:space-y-3">
                <a
                  href="mailto:support@fasttools.store"
                  className="block text-xs md:text-sm font-bold text-black/80 hover:text-black transition-colors break-words"
                >
                  support@fasttools.store
                </a>
                <p className="text-[10px] md:text-xs font-semibold text-black/70">
                  Have questions? We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 md:gap-6 mt-6 md:mt-8">
            {/* X (Twitter) */}
            <a
              href="https://x.com/ZamanIsmail7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 hover:text-black transition-colors"
              aria-label="Follow us on X (Twitter)"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61582711433268"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 hover:text-black transition-colors"
              aria-label="Follow us on Facebook"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@fasttools_official"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 hover:text-black transition-colors"
              aria-label="Follow us on YouTube"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/fasttools/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 hover:text-black transition-colors"
              aria-label="Follow us on LinkedIn"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <p className="text-center text-xs md:text-sm font-bold text-black/70 mt-6 md:mt-8">
            © 2025 FastTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
