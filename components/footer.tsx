import Link from "next/link"
import { Wrench, Facebook, Twitter, Instagram, Linkedin, Mail, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Calculators</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/converters/conversion-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Conversion Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/age-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Age Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/date-difference"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Date Difference
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/bmi-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  BMI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/loan-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Loan EMI Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/percentage-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Percentage Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/time-duration"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Time Duration
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/tax-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Tax Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/compound-interest"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Compound Interest
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/ip-subnet-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  IP Subnet Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/standard-deviation-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Standard Deviation Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Converters</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/converters/text-case"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Text Case Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/converters/length"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Length Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/converters/file-size"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  File Size Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/converters/currency"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Currency Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/converters/timezone"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Time Zone Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/converters/temperature"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Temperature Converter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">SEO Tools</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/seo-tools/meta-tags"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Meta Tag Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-tools/lorem-ipsum"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Lorem Ipsum Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-tools/hashtags"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Hashtag Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-tools/blog-titles"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Blog Title Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/seo-tools/keyword-density"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Keyword Density Checker
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Fun Tools</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/fun-tools/future-age"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Future Age Predictor
                </Link>
              </li>
              <li>
                <Link
                  href="/fun-tools/love-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Love Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/fun-tools/hashtag-counter"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Hashtag Counter
                </Link>
              </li>
              <li>
                <Link
                  href="/fun-tools/birthday-countdown"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Birthday Countdown
                </Link>
              </li>
              <li>
                <Link
                  href="/fun-tools/anniversary"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Anniversary Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Finance Tools</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/finance-tools/invoice-generator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Invoice Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-tools/paypal-fee"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  PayPal Fee Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-tools/discount-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Discount Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-tools/tip-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Tip Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-tools/savings-tracker"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Savings Tracker
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-tools/retirement-planner"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Retirement Planner
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-tools/bill-splitter"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Bill Splitter
                </Link>
              </li>
              <li>
                <Link
                  href="/finance-tools/credit-card-payoff"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Credit Card Payoff
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Date & Time</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/date-time-tools/age-in-hours"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Age in Hours
                </Link>
              </li>
              <li>
                <Link
                  href="/date-time-tools/year-end-countdown"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Year End Countdown
                </Link>
              </li>
              <li>
                <Link
                  href="/date-time-tools/workday-calculator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Workday Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/date-time-tools/date-to-day"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Date to Day Finder
                </Link>
              </li>
              <li>
                <Link
                  href="/date-time-tools/zodiac-sign"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Zodiac Sign Finder
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Learn</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/learn"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  All Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/age-calculator-guide"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Age Calculator Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/currency-converter-guide"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Currency Converter Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/seo-tools-guide"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  SEO Tools Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/developer-tools-guide"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Developer Tools Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/ai-caption-generator-guide"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  AI Tools Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-preferences"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Cookie Preferences
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Social Media</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/social-media-tools/youtube-thumbnail"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  YouTube Thumbnail
                </Link>
              </li>
              <li>
                <Link
                  href="/social-media-tools/instagram-dp"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Instagram DP Viewer
                </Link>
              </li>
              <li>
                <Link
                  href="/social-media-tools/tiktok-downloader"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  TikTok Downloader
                </Link>
              </li>
              <li>
                <Link
                  href="/social-media-tools/youtube-tags"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  YouTube Tag Extractor
                </Link>
              </li>
              <li>
                <Link
                  href="/social-media-tools/link-in-bio"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Link in Bio
                </Link>
              </li>
              <li>
                <Link
                  href="/social-media-tools/channel-checker"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Channel Name Checker
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Image Tools</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/image-tools/image-to-text"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Image to Text (OCR)
                </Link>
              </li>
              <li>
                <Link
                  href="/image-tools/background-blur"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Background Blur
                </Link>
              </li>
              <li>
                <Link
                  href="/image-tools/image-cropper"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Image Cropper
                </Link>
              </li>
              <li>
                <Link
                  href="/image-tools/pdf-tools"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  PDF Splitter/Merger
                </Link>
              </li>
              <li>
                <Link
                  href="/image-tools/pdf-unlocker"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  PDF Unlocker
                </Link>
              </li>
              <li>
                <Link
                  href="/image-tools/screenshot-to-text"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Screenshot to Text
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Dev Tools</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/dev-tools/jwt-decoder"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  JWT Decoder
                </Link>
              </li>
              <li>
                <Link
                  href="/dev-tools/html-to-markdown"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  HTML to Markdown
                </Link>
              </li>
              <li>
                <Link
                  href="/dev-tools/markdown-previewer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Markdown Previewer
                </Link>
              </li>
              <li>
                <Link
                  href="/dev-tools/regex-tester"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Regex Tester
                </Link>
              </li>
              <li>
                <Link
                  href="/dev-tools/color-palette"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Color Palette
                </Link>
              </li>
              <li>
                <Link
                  href="/dev-tools/hex-to-rgb"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Hex to RGB
                </Link>
              </li>
              <li>
                <Link
                  href="/dev-tools/json-to-csv"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  JSON to CSV
                </Link>
              </li>
              <li>
                <Link
                  href="/dev-tools/html-beautifier"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  HTML Beautifier
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">AI Tools</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/ai-tools/meme-generator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  AI Meme Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tools/qr-generator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  AI QR Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tools/lyrics-generator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Lyrics Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tools/caption-generator"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Caption Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tools/pet-names"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Pet Name Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-tools/hashtag-suggester"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Hashtag Suggester
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-semibold mb-4 text-sm text-foreground tracking-wide">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@fasttools.store"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                hello@fasttools.store
              </a>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Have questions or suggestions? We'd love to hear from you. Send us an email and we'll get back to you as
                soon as possible.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center shadow-md">
                <Wrench className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">FastTools</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/fasttoolsstore"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg border border-border/60 bg-background/50 hover:bg-primary hover:border-primary transition-all duration-200 flex items-center justify-center group"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://twitter.com/fasttoolsstore"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg border border-border/60 bg-background/50 hover:bg-primary hover:border-primary transition-all duration-200 flex items-center justify-center group"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://instagram.com/fasttoolsstore"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg border border-border/60 bg-background/50 hover:bg-primary hover:border-primary transition-all duration-200 flex items-center justify-center group"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/fasttoolsstore"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-lg border border-border/60 bg-background/50 hover:bg-primary hover:border-primary transition-all duration-200 flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            © 2025 FastTools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
