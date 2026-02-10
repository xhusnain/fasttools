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
    { name: "Festivals", href: "/festivals" },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-background/95 border-t border-border/50">
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

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://x.com/ZamanIsmail7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center text-muted-foreground transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582711433268"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center text-muted-foreground transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@fasttools_official"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center text-muted-foreground transition-all duration-200"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/fasttools/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary flex items-center justify-center text-muted-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Tools Column 1 */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Tools</h4>
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

          {/* Popular Tools Column (Replacing generic listing) */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Trending</h4>
            <ul className="space-y-2">
              <li><Link href="/social-media-tools/instagram-downloader" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram Downloader</Link></li>
              <li><Link href="/social-media-tools/instagram-dp" className="text-sm text-muted-foreground hover:text-primary transition-colors">DP Viewer</Link></li>
              <li><Link href="/social-media-tools/instagram-dp/private-downloader" className="text-sm text-muted-foreground hover:text-primary transition-colors">Private DP Viewer</Link></li>
              <li><Link href="/social-media-tools/instagram-downloader/reels-downloader" className="text-sm text-muted-foreground hover:text-primary transition-colors">Reels Saver</Link></li>
              <li><Link href="/social-media-tools/tiktok-downloader" className="text-sm text-muted-foreground hover:text-primary transition-colors">TikTok Downloader</Link></li>
              <li><Link href="/social-media-tools/youtube-downloader" className="text-sm text-muted-foreground hover:text-primary transition-colors">YouTube Downloader</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" title="Read our latest blog posts and tutorials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/guides" title="Guides on how to build and earn with online tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">Guides</Link></li>
              <li><Link href="/api-docs" title="FastTools API Documentation" className="text-sm text-muted-foreground hover:text-primary transition-colors">API Docs</Link></li>
              <li><Link href="/downloaders" title="Free Video Downloaders" className="text-sm text-muted-foreground hover:text-primary transition-colors">Downloaders</Link></li>
              <li><Link href="/products" title="Browse all FastTools products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/faq" title="Frequently Asked Questions" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
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
