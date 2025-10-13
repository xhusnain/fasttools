import type { Metadata } from "next"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Code2, FileJson, Palette, Hash, FileCode, Braces } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { AdSpace } from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Free Developer Tools | JWT Decoder, Regex Tester, JSON to CSV & More | FastTools",
  description:
    "Free developer tools including JWT decoder, regex tester, JSON to CSV converter, HTML beautifier, color palette generator, and more. Essential utilities for developers.",
  keywords: [
    // Primary Keywords (20)
    "developer tools",
    "free developer tools",
    "JWT decoder",
    "regex tester",
    "JSON to CSV",
    "HTML beautifier",
    "color palette generator",
    "hex to RGB",
    "markdown previewer",
    "HTML to markdown",
    "dev tools",
    "programming tools",
    "coding tools",
    "web development tools",
    "frontend tools",
    "backend tools",
    "code utilities",
    "development utilities",
    "programmer tools",
    "software development tools",
    
    // Secondary Keywords (20)
    "JWT token decoder",
    "regular expression tester",
    "JSON CSV converter",
    "HTML formatter",
    "color scheme generator",
    "hex color converter",
    "markdown editor",
    "HTML markdown converter",
    "code beautifier",
    "data converter",
    "web tools",
    "online dev tools",
    "free coding tools",
    "programming utilities",
    "developer utilities",
    "code tools",
    "web dev tools",
    "frontend utilities",
    "backend utilities",
    "software tools",
    
    // Long-tail Keywords (20)
    "free online developer tools",
    "best developer tools online",
    "developer tools with live preview",
    "free developer tools online",
    "online developer tools free",
    "developer tools online free",
    "JWT decoder free online",
    "regex tester free online",
    "JSON to CSV converter free online",
    "HTML beautifier free online",
    "color palette generator free online",
    "hex to RGB converter free online",
    "markdown previewer free online",
    "HTML to markdown converter free online",
    "code beautifier free online",
    "data converter free online",
    "web tools free online",
    "online dev tools free",
    "free coding tools online",
    "programming utilities free online",
    
    // Additional SEO Keywords
    "JWT token decoder",
    "regular expression tester",
    "JSON CSV converter",
    "HTML formatter",
    "color scheme generator",
    "hex color converter",
    "markdown editor",
    "HTML markdown converter",
    "code beautifier",
    "data converter",
    "web tools",
    "online dev tools",
    "free coding tools",
    "programming utilities",
    "developer utilities",
    "code tools",
    "web dev tools",
    "frontend utilities",
    "backend utilities",
    "software tools",
    "JWT decoder online",
    "regex tester online",
    "JSON to CSV online",
    "HTML beautifier online",
    "color palette generator online",
    "hex to RGB online",
    "markdown previewer online",
    "HTML to markdown online",
    "code beautifier online",
    "data converter online",
    "web tools online",
    "online dev tools",
    "free coding tools online",
    "programming utilities online",
    "developer utilities online",
    "code tools online",
    "web dev tools online",
    "frontend utilities online",
    "backend utilities online",
    "software tools online",
    "JWT decoder free",
    "regex tester free",
    "JSON to CSV free",
    "HTML beautifier free",
    "color palette generator free",
    "hex to RGB free",
    "markdown previewer free",
    "HTML to markdown free",
    "code beautifier free",
    "data converter free",
    "web tools free",
    "online dev tools free",
    "free coding tools",
    "programming utilities free",
    "developer utilities free",
    "code tools free",
    "web dev tools free",
    "frontend utilities free",
    "backend utilities free",
    "software tools free"
  ],
  openGraph: {
    title: "Free Developer Tools | JWT Decoder, Regex Tester, JSON to CSV & More | FastTools",
    description:
      "Free developer tools including JWT decoder, regex tester, JSON to CSV converter, HTML beautifier, color palette generator, and more. Essential utilities for developers.",
    url: "https://fasttools.store/dev-tools",
    type: "website",
    siteName: "FastTools",
    images: [
      {
        url: "https://fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools Free Developer Tools - JWT Decoder, Regex Tester, JSON to CSV & More",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Developer Tools | JWT Decoder, Regex Tester, JSON to CSV & More | FastTools",
    description: "Free developer tools including JWT decoder, regex tester, JSON to CSV converter, HTML beautifier, color palette generator, and more.",
    images: ["https://fasttools.store/og-image.svg"],
  },
  alternates: {
    canonical: "https://fasttools.store/dev-tools",
  },
}

const tools = [
  {
    name: "JWT Decoder",
    description: "Decode and inspect JWT tokens",
    href: "/dev-tools/jwt-decoder",
    icon: Code2,
  },
  {
    name: "HTML to Markdown",
    description: "Convert HTML to Markdown format",
    href: "/dev-tools/html-to-markdown",
    icon: FileCode,
  },
  {
    name: "Markdown Previewer",
    description: "Live preview your Markdown",
    href: "/dev-tools/markdown-previewer",
    icon: FileCode,
  },
  {
    name: "Regex Tester",
    description: "Test and debug regular expressions",
    href: "/dev-tools/regex-tester",
    icon: Hash,
  },
  {
    name: "Color Palette Generator",
    description: "Generate beautiful color palettes",
    href: "/dev-tools/color-palette",
    icon: Palette,
  },
  {
    name: "Hex to RGB Converter",
    description: "Convert hex colors to RGB",
    href: "/dev-tools/hex-to-rgb",
    icon: Palette,
  },
  {
    name: "JSON to CSV Converter",
    description: "Convert JSON data to CSV format",
    href: "/dev-tools/json-to-csv",
    icon: FileJson,
  },
  {
    name: "HTML Beautifier",
    description: "Format or minify HTML code",
    href: "/dev-tools/html-beautifier",
    icon: Braces,
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Free Developer Tools | JWT Decoder, Regex Tester, JSON to CSV & More | FastTools",
  description: "Free developer tools including JWT decoder, regex tester, JSON to CSV converter, HTML beautifier, color palette generator, and more. Essential utilities for developers.",
  url: "https://fasttools.store/dev-tools",
  mainEntity: {
    "@type": "ItemList",
    name: "Developer Tools Collection",
    description: "Comprehensive collection of free online developer tools and utilities for programming, debugging, and development",
    numberOfItems: 8,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "JWT Decoder", description: "Decode and inspect JWT tokens safely in your browser", url: "https://fasttools.store/dev-tools/jwt-decoder" },
      { "@type": "ListItem", position: 2, name: "Regex Tester", description: "Test and debug regular expressions with live matching", url: "https://fasttools.store/dev-tools/regex-tester" },
      { "@type": "ListItem", position: 3, name: "JSON to CSV Converter", description: "Convert JSON data to CSV format quickly and easily", url: "https://fasttools.store/dev-tools/json-to-csv" },
      { "@type": "ListItem", position: 4, name: "HTML Beautifier", description: "Format and beautify HTML code for better readability", url: "https://fasttools.store/dev-tools/html-beautifier" },
      { "@type": "ListItem", position: 5, name: "Color Palette Generator", description: "Generate beautiful color schemes for your projects", url: "https://fasttools.store/dev-tools/color-palette" },
      { "@type": "ListItem", position: 6, name: "Hex to RGB Converter", description: "Convert hex colors to RGB values instantly", url: "https://fasttools.store/dev-tools/hex-to-rgb" },
      { "@type": "ListItem", position: 7, name: "Markdown Previewer", description: "Live preview your Markdown content", url: "https://fasttools.store/dev-tools/markdown-previewer" },
      { "@type": "ListItem", position: 8, name: "HTML to Markdown", description: "Convert HTML to Markdown format", url: "https://fasttools.store/dev-tools/html-to-markdown" }
    ]
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fasttools.store" },
      { "@type": "ListItem", position: 2, name: "Developer Tools", item: "https://fasttools.store/dev-tools" }
    ]
  },
  about: {
    "@type": "Thing",
    name: "Developer Tools and Utilities",
    description: "Free online tools for developers including JWT decoding, regex testing, data conversion, and code formatting"
  },
  isPartOf: {
    "@type": "WebSite",
    name: "FastTools",
    url: "https://fasttools.store"
  }
}

export default function DevToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Developer Tools", href: "/dev-tools" },
        ]}
      />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section with proper content-to-ad ratio */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-balance">Developer Tools</h1>
          <p className="text-lg text-muted-foreground text-balance">
            Essential utilities for developers. Free, fast, and always available.
          </p>
        </div>

        {/* First Ad Space - After Hero Content */}
        <div className="mb-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group bg-card/80 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/20">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Second Ad Space - Between Tools and Content */}
        <div className="my-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>

        {/* SEO Content Section */}
        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Why Choose Our Developer Tools?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our comprehensive collection of <strong>developer tools</strong> is designed to help you work more efficiently with code, data, and design. 
              Whether you're debugging JWT tokens, testing regex patterns, or generating color palettes, 
              our <strong>free developer tools</strong> provide the precision and ease of use you need for any development task.
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Free to use</strong> with no registration required</li>
              <li><strong>Fast, client-side processing</strong> for privacy and security</li>
              <li><strong>Mobile-friendly</strong> and responsive design for all devices</li>
              <li><strong>Copy and export results</strong> easily for your projects</li>
              <li><strong>No data sent to servers</strong> - everything runs locally</li>
              <li><strong>Always up-to-date</strong> with latest standards and best practices</li>
              <li><strong>Cross-platform compatibility</strong> works on any operating system</li>
              <li><strong>No installation required</strong> - use directly in your browser</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Comprehensive Developer Tool Categories</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our <strong>developer tools</strong> are organized into specialized categories to meet all your development needs:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Authentication & Security Tools</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              JWT decoder for inspecting tokens, debugging authentication issues, and understanding token structure. 
              Essential for API development and security auditing.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Data Processing & Conversion</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              JSON to CSV converter, data format transformers, and file converters. Perfect for data analysis, 
              API integration, and database operations.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Code Formatting & Beautification</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HTML beautifier, code formatters, and syntax highlighters. Essential for maintaining clean, 
              readable code and improving code quality.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Text Processing & Markdown</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HTML to Markdown converter, Markdown previewer, and text processors. Great for documentation, 
              content management, and technical writing.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Design & Color Tools</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Color palette generator, hex to RGB converter, and color scheme tools. Perfect for UI/UX design, 
              frontend development, and visual consistency.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Testing & Debugging</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Regex tester, pattern matcher, and debugging utilities. Essential for data validation, 
              text processing, and code testing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Popular Developer Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Discover our most popular <strong>developer tools</strong> that help thousands of developers every day:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">JWT Decoder</h3>
                <p className="text-sm text-muted-foreground">Decode and inspect JWT tokens safely in your browser. Perfect for API development and authentication debugging.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Regex Tester</h3>
                <p className="text-sm text-muted-foreground">Test and debug regular expressions with live matching. Essential for data validation and text processing.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Color Palette Generator</h3>
                <p className="text-sm text-muted-foreground">Generate beautiful color schemes for your projects. Perfect for UI/UX design and frontend development.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">JSON to CSV Converter</h3>
                <p className="text-sm text-muted-foreground">Convert JSON data to CSV format quickly and easily. Great for data analysis and API integration.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">HTML Beautifier</h3>
                <p className="text-sm text-muted-foreground">Format and beautify HTML code for better readability. Essential for web development and code maintenance.</p>
              </div>
              <div className="p-4 border border-border/60 rounded-lg bg-card/50">
                <h3 className="font-semibold text-foreground mb-2">Hex to RGB Converter</h3>
                <p className="text-sm text-muted-foreground">Convert hex colors to RGB values instantly. Perfect for CSS development and color manipulation.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Advanced Developer Features</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our <strong>developer tools</strong> include advanced features for professional development:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Client-side Processing:</strong> All tools run in your browser for maximum privacy</li>
              <li><strong>Real-time Preview:</strong> See results instantly as you type</li>
              <li><strong>Multiple Formats:</strong> Support for various data and code formats</li>
              <li><strong>Export Options:</strong> Copy, download, and share results easily</li>
              <li><strong>Mobile Optimization:</strong> Perfect experience on all devices</li>
              <li><strong>No Registration:</strong> Use immediately without creating accounts</li>
              <li><strong>Offline Capable:</strong> Many tools work without internet connection</li>
              <li><strong>Cross-browser Support:</strong> Works on all modern browsers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Use Cases for Our Developer Tools</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our <strong>free developer tools</strong> are perfect for various development scenarios:
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Frontend Development</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Color palette generation for UI design</li>
              <li>HTML beautification and formatting</li>
              <li>Markdown to HTML conversion for documentation</li>
              <li>CSS color value conversions</li>
              <li>Responsive design testing</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Backend Development</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>JWT token debugging and inspection</li>
              <li>JSON data processing and conversion</li>
              <li>API response formatting</li>
              <li>Data validation with regex patterns</li>
              <li>Database query optimization</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-3 text-foreground">Full-Stack Development</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Data format conversion between systems</li>
              <li>Code formatting and beautification</li>
              <li>Documentation generation and conversion</li>
              <li>Testing and debugging utilities</li>
              <li>Cross-platform compatibility testing</li>
            </ul>
          </div>
        </div>

        {/* Final Ad Space - Bottom Content */}
        <div className="mt-8">
          <AdSpace slot="content" className="w-full h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>
      </div>
      </div>
    </>
  )
}
