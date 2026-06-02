import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  // All tool categories matching mega menu
  const toolCategories = [
    { name: "Calculators", href: "/calculator" },
    { name: "Finance", href: "/finance-tools" },
    { name: "AI Tools", href: "/ai-tools" },
    { name: "Converters", href: "/converters" },
    { name: "Dev Tools", href: "/dev-tools" },
    { name: "Image Tools", href: "/image-tools" },
    { name: "PDF Tools", href: "/pdf-tools" },
    { name: "SEO Tools", href: "/seo-tools" },
    { name: "Social Media", href: "/social-media-tools" },
    { name: "Fun Tools", href: "/fun-tools" },
  ]

  return (
    <footer className="relative bg-white border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-6">

          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-2">
            <Link href="/" title="FastTools Homepage" className="inline-block mb-4">
              <span className="text-xl font-bold text-foreground">FastTools</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-5">
              The ultimate collection of free online tools for productivity, development, and creativity.
            </p>

          </div>

          {/* Tools Column 1 */}
          <div>
            <div className="text-sm font-semibold text-foreground mb-4">Tools</div>
            <ul className="space-y-2">
              {toolCategories.slice(0, 6).map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} title={`FastTools ${cat.name}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools Column */}
          <div>
            <div className="text-sm font-semibold text-foreground mb-4">Trending</div>
            <ul className="space-y-2">
              <li><Link href="/calculator/bmi-calculator" className="text-sm text-muted-foreground hover:text-primary transition-colors">BMI Calculator</Link></li>
              <li><Link href="/ai-tools/qr-generator" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI QR Generator</Link></li>
              <li><Link href="/pdf-tools/image-to-pdf" className="text-sm text-muted-foreground hover:text-primary transition-colors">Image to PDF</Link></li>
              <li><Link href="/dev-tools/json-diff" className="text-sm text-muted-foreground hover:text-primary transition-colors">JSON Diff</Link></li>
              <li><Link href="/pdf-tools/pdf-word-converter" className="text-sm text-muted-foreground hover:text-primary transition-colors">PDF to Word</Link></li>
              <li><Link href="/converters/currency" className="text-sm text-muted-foreground hover:text-primary transition-colors">Currency Converter</Link></li>
              <li><Link href="/social-media-tools/channel-checker" className="text-sm text-muted-foreground hover:text-primary transition-colors">Channel Checker</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <div className="text-sm font-semibold text-foreground mb-4">Resources</div>
            <ul className="space-y-2">
              <li><Link href="/blog" title="FastTools Blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/blog/how-to-hide-text-in-an-image-online" title="How to hide text in an image online" className="text-sm text-muted-foreground hover:text-primary transition-colors">Latest Insight</Link></li>
              <li><Link href="/api-docs" title="FastTools API Documentation" className="text-sm text-muted-foreground hover:text-primary transition-colors">API Docs</Link></li>
              <li><Link href="/products" title="Browse all FastTools products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/faq" title="Frequently Asked Questions" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <div className="text-sm font-semibold text-foreground mb-4">Company</div>
            <ul className="space-y-2">
              <li><Link href="/about" title="About FastTools" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" title="Contact Us" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/all-tools" title="Explore All Tools" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">All Tools</Link></li>
              <li><Link href="/privacy-policy" title="Privacy Policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/terms" title="Terms of Service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="/cookie-preferences" title="Cookie Preferences" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookies</Link></li>
              <li><Link href="/dmca" title="DMCA Policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">DMCA</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30">
        <div className="container mx-auto max-w-7xl px-4 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} FastTools. All rights reserved.
            </p>
            <a href="mailto:support@fasttools.store" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              support@fasttools.store
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
