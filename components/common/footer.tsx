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
    <footer className="bg-background pt-16 pb-8 border-t border-border font-sans text-sm">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {/* Column 1: Brand & Newsletter */}
          <div className="col-span-2 lg:col-span-2 pr-0 lg:pr-8">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                FastTools
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Empowering your workflow with fast, secure, and free online tools. No setup required.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-green-400 font-medium bg-green-400/10 py-2 px-3 rounded-md w-fit">
                <span>✓</span> Subscribed
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 bg-input/50 border border-border rounded-lg px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-ring transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a href="https://x.com/ZamanIsmail7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
              <a href="https://www.facebook.com/profile.php?id=61582711433268" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></a>
              <a href="https://www.linkedin.com/company/fasttools/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/image-tools" className="text-muted-foreground hover:text-foreground transition-colors">Image Tools</Link></li>
              <li><Link href="/calculator" className="text-muted-foreground hover:text-foreground transition-colors">Calculators</Link></li>
              <li><Link href="/pdf-tools" className="text-muted-foreground hover:text-foreground transition-colors">PDF Tools</Link></li>
              <li><Link href="/ai-tools" className="text-muted-foreground hover:text-foreground transition-colors">AI Tools</Link></li>
              <li><Link href="/downloaders" className="text-muted-foreground hover:text-foreground transition-colors">Downloaders</Link></li>
            </ul>
          </div>

          {/* Column 3: Popular */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Popular</h3>
            <ul className="space-y-3">
              <li><Link href="/converters/currency" className="text-muted-foreground hover:text-foreground transition-colors">Currency Converter</Link></li>
              <li><Link href="/image-tools/image-background-remover" className="text-muted-foreground hover:text-foreground transition-colors">Background Remover</Link></li>
              <li><Link href="/ai-tools/caption-generator" className="text-muted-foreground hover:text-foreground transition-colors">Caption Generator</Link></li>
              <li><Link href="/calculator/ip-subnet-calculator" className="text-muted-foreground hover:text-foreground transition-colors">IP Subnet Calc</Link></li>
              <li><Link href="/calculator/conversion-calculator" className="text-muted-foreground hover:text-foreground transition-colors">Unit Converter</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><a href="mailto:support@fasttools.store" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-preferences" className="text-muted-foreground hover:text-foreground transition-colors">Cookies</Link></li>
              <li><Link href="/dmca" className="text-muted-foreground hover:text-foreground transition-colors">DMCA</Link></li>
              <li><Link href="/api-docs" className="text-muted-foreground hover:text-foreground transition-colors">API Status</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2025 FastTools Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-muted-foreground text-xs font-medium">All systems normal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
