import Link from "next/link"
import { Wrench, Facebook, Twitter, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-accent">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm text-accent-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/calculator" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Calculators
              </Link>
              <Link href="/converters" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Converters
              </Link>
              <Link href="/ai-tools" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                AI Tools
              </Link>
              <Link href="/seo-tools" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                SEO Tools
              </Link>
            </div>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="font-semibold mb-4 text-sm text-accent-foreground">Popular Tools</h3>
            <div className="space-y-2">
              <Link href="/ai-tools/caption-generator" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Caption Generator
              </Link>
              <Link href="/calculator/age-calculator" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Age Calculator
              </Link>
              <Link href="/converters/currency" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Currency Converter
              </Link>
              <Link href="/seo-tools/meta-tags" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Meta Tag Generator
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm text-accent-foreground">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Contact
              </Link>
              <Link href="/faq" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/privacy-policy" className="block text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm text-accent-foreground">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:fasttools.store@outlook.com"
                className="flex items-center gap-2 text-sm text-accent-foreground/80 hover:text-accent-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                fasttools.store@outlook.com
              </a>
              <p className="text-xs text-accent-foreground/70">
                Have questions? We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Wrench className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-semibold text-accent-foreground">FastTools</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61582711433268"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg border border-accent-foreground/20 bg-accent-foreground/10 hover:bg-primary hover:border-primary transition-all flex items-center justify-center"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-accent-foreground hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://x.com/ZamanIsmail7"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg border border-accent-foreground/20 bg-accent-foreground/10 hover:bg-primary hover:border-primary transition-all flex items-center justify-center"
                aria-label="X (Twitter)"
              >
                <Twitter className="h-4 w-4 text-accent-foreground hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCLnJoKw00cNkTjT5C0axoiQ"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-lg border border-accent-foreground/20 bg-accent-foreground/10 hover:bg-primary hover:border-primary transition-all flex items-center justify-center"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4 text-accent-foreground hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-accent-foreground/70 mt-6">
            © 2025 FastTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}