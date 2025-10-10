import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Zap, Search, TrendingUp, Code, Palette, Calculator, Image, Globe, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Online Tools Directory | 1000+ Free Tools & Resources | FastTools",
  description: "Comprehensive directory of 1000+ free online tools including AI generators, converters, calculators, SEO tools, developer utilities, and more. All tools are free and work in your browser.",
  keywords: "free online tools, tool directory, free tools, online utilities, web tools, productivity tools, developer tools, SEO tools, calculator tools",
  openGraph: {
    title: "Free Online Tools Directory | 1000+ Free Tools & Resources",
    description: "Comprehensive directory of 1000+ free online tools including AI generators, converters, calculators, SEO tools, developer utilities, and more.",
    type: "website",
    url: "https://fasttools.store/resources",
  },
}

export default function ResourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free Online Tools Directory",
    description: "Comprehensive directory of 1000+ free online tools including AI generators, converters, calculators, SEO tools, developer utilities, and more.",
    url: "https://fasttools.store/resources",
    mainEntity: {
      "@type": "ItemList",
      name: "Free Online Tools Collection",
      description: "Comprehensive collection of free online tools and utilities for productivity, conversion, and content creation",
      numberOfItems: 1000,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AI Tools",
          description: "AI-powered content generation tools including meme generators, caption generators, and hashtag suggesters",
          url: "https://fasttools.store/ai-tools"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Converter Tools",
          description: "Comprehensive conversion utilities for currency, units, text, and file formats",
          url: "https://fasttools.store/converters"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Calculator Tools",
          description: "Financial, business, and general purpose calculators for all your calculation needs",
          url: "https://fasttools.store/tools"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "SEO Tools",
          description: "SEO optimization tools including meta tag generators, keyword density checkers, and content analyzers",
          url: "https://fasttools.store/seo-tools"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Developer Tools",
          description: "Development utilities including HTML beautifiers, JSON converters, and regex testers",
          url: "https://fasttools.store/dev-tools"
        }
      ]
    }
  }

  const toolCategories = [
    {
      title: "AI & Automation Tools",
      description: "AI-powered content generation, automation, and intelligent tools",
      icon: Zap,
      href: "/ai-tools",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      tools: [
        "QR Code Generator",
        "AI Caption Generator", 
        "AI Meme Generator",
        "AI Lyrics Generator",
        "AI Hashtag Suggester",
        "AI Pet Name Generator"
      ]
    },
    {
      title: "Converter Tools",
      description: "Convert between different formats, units, and data types",
      icon: TrendingUp,
      href: "/converters",
      color: "text-green-500",
      bgColor: "bg-green-50",
      tools: [
        "Currency Converter",
        "Text Case Converter",
        "File Size Converter",
        "Length Converter",
        "Temperature Converter",
        "Timezone Converter"
      ]
    },
    {
      title: "Calculator Tools",
      description: "Financial, business, and general purpose calculators",
      icon: Calculator,
      href: "/tools",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      tools: [
        "Age Calculator",
        "BMI Calculator",
        "Loan Calculator",
        "Tax Calculator",
        "Percentage Calculator",
        "Compound Interest Calculator"
      ]
    },
    {
      title: "SEO Tools",
      description: "Search engine optimization and content marketing tools",
      icon: Search,
      href: "/seo-tools",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
      tools: [
        "Meta Tag Generator",
        "Keyword Density Checker",
        "Hashtag Generator",
        "Blog Title Generator",
        "Lorem Ipsum Generator"
      ]
    },
    {
      title: "Developer Tools",
      description: "Web development, coding, and technical utilities",
      icon: Code,
      href: "/dev-tools",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
      tools: [
        "HTML Beautifier",
        "JSON to CSV Converter",
        "JWT Decoder",
        "Regex Tester",
        "Markdown Previewer",
        "Color Palette Generator"
      ]
    },
    {
      title: "Image Tools",
      description: "Image processing, editing, and manipulation utilities",
      icon: Image,
      href: "/image-tools",
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      tools: [
        "Image to Text (OCR)",
        "Image Cropper",
        "Background Blur",
        "Screenshot to Text",
        "PDF Tools",
        "PDF Unlocker"
      ]
    },
    {
      title: "Social Media Tools",
      description: "Social media management and content creation tools",
      icon: Globe,
      href: "/social-media-tools",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50",
      tools: [
        "TikTok Downloader",
        "YouTube Thumbnail Downloader",
        "Instagram DP Viewer",
        "YouTube Tag Extractor",
        "Link in Bio Generator",
        "YouTube Channel Checker"
      ]
    },
    {
      title: "Finance Tools",
      description: "Financial planning, calculation, and business tools",
      icon: Shield,
      href: "/finance-tools",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      tools: [
        "Invoice Generator",
        "PayPal Fee Calculator",
        "Discount Calculator",
        "Tip Calculator",
        "Savings Tracker",
        "Retirement Planner"
      ]
    },
    {
      title: "Fun Tools",
      description: "Entertainment, games, and recreational utilities",
      icon: Heart,
      href: "/fun-tools",
      color: "text-rose-500",
      bgColor: "bg-rose-50",
      tools: [
        "Love Calculator",
        "Birthday Countdown",
        "Future Age Predictor",
        "Hashtag Counter",
        "Anniversary Calculator"
      ]
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Free Online Tools Directory
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Comprehensive collection of 1000+ free online tools for productivity, development, 
            content creation, and business. All tools are free, fast, and work in your browser.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Updated daily</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>50,000+ users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Free Tools</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Monthly Users</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">9</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Free to Use</div>
            </CardContent>
          </Card>
        </div>

        {/* Tool Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Tool Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((category, index) => (
              <Card key={category.href} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    {category.title}
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {category.tools.slice(0, 3).map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{tool}</span>
                      </div>
                    ))}
                    {category.tools.length > 3 && (
                      <div className="text-sm text-muted-foreground">
                        +{category.tools.length - 3} more tools
                      </div>
                    )}
                  </div>
                  <Button asChild className="w-full">
                    <Link href={category.href} className="flex items-center gap-2">
                      Explore {category.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Tools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Most Popular Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-500" />
                  QR Code Generator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Generate QR codes for URLs, text, WiFi, contact info, and more. 
                  Customize colors, add logos, and download in multiple formats.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/ai-tools/qr-generator">Try QR Generator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  Currency Converter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Convert between 160+ currencies with real-time exchange rates. 
                  Perfect for travelers, businesses, and international transactions.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/converters/currency">Try Currency Converter</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-purple-500" />
                  Meta Tag Generator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Generate SEO-optimized meta tags, titles, and descriptions. 
                  Improve your website's search engine visibility and click-through rates.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/seo-tools/meta-tags">Try Meta Tag Generator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-orange-500" />
                  HTML Beautifier
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Format and beautify HTML code for better readability. 
                  Perfect for developers, designers, and content creators.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/dev-tools/html-beautifier">Try HTML Beautifier</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-indigo-500" />
                  Age Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Calculate your exact age in years, months, days, hours, and minutes. 
                  Perfect for personal use, events, and applications.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/tools/age-calculator">Try Age Calculator</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="h-5 w-5 text-pink-500" />
                  Image to Text (OCR)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Extract text from images using advanced OCR technology. 
                  Works with photos, screenshots, and scanned documents.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href="/image-tools/image-to-text">Try OCR Tool</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Our Tools */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why Choose Our Tools?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">100% Free</h3>
                <p className="text-sm text-muted-foreground">
                  All tools are completely free with no hidden costs or premium features.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Fast & Reliable</h3>
                <p className="text-sm text-muted-foreground">
                  All tools are optimized for speed and work reliably across all devices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Privacy Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Your data stays private. No registration required and no data collection.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Mobile Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  All tools work perfectly on mobile devices, tablets, and desktops.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg text-center mb-12">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Start Using Our Tools Today</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join 50,000+ users who rely on our free tools for their daily tasks. 
            No registration required, completely free, and works in your browser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/" className="flex items-center gap-2">
                Explore All Tools
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link href="/about" className="flex items-center gap-2">
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* SEO Content */}
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="text-2xl font-bold mb-6 text-foreground">About Our Free Online Tools</h2>
          
          <p className="mb-6">
            FastTools is the ultimate destination for free online tools that help you be more productive, 
            creative, and efficient. Our comprehensive collection of 1000+ tools covers everything from 
            AI-powered content generation to financial calculators, developer utilities, and SEO optimization tools.
          </p>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Comprehensive Tool Categories</h3>
          
          <p className="mb-4">
            Our tools are organized into 9 main categories to help you find exactly what you need:
          </p>

          <ul className="space-y-2 mb-6">
            <li><strong>AI & Automation Tools:</strong> Generate content, create QR codes, and automate tasks with AI</li>
            <li><strong>Converter Tools:</strong> Convert between currencies, units, text formats, and file types</li>
            <li><strong>Calculator Tools:</strong> Financial calculators, age calculators, and business tools</li>
            <li><strong>SEO Tools:</strong> Meta tag generators, keyword density checkers, and content optimization</li>
            <li><strong>Developer Tools:</strong> Code formatters, validators, and development utilities</li>
            <li><strong>Image Tools:</strong> OCR text extraction, image editing, and PDF manipulation</li>
            <li><strong>Social Media Tools:</strong> TikTok downloaders, YouTube utilities, and social media helpers</li>
            <li><strong>Finance Tools:</strong> Invoice generators, tax calculators, and financial planning tools</li>
            <li><strong>Fun Tools:</strong> Entertainment utilities, games, and recreational tools</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Why Our Tools Stand Out</h3>
          
          <p className="mb-4">
            What makes FastTools different from other tool collections:
          </p>

          <ul className="space-y-2 mb-6">
            <li><strong>Completely Free:</strong> No hidden costs, premium features, or subscription requirements</li>
            <li><strong>No Registration:</strong> Use all tools immediately without creating an account</li>
            <li><strong>Privacy Focused:</strong> Your data stays private with client-side processing</li>
            <li><strong>Mobile Optimized:</strong> All tools work perfectly on mobile devices and tablets</li>
            <li><strong>Fast Performance:</strong> Optimized for speed with minimal loading times</li>
            <li><strong>Regular Updates:</strong> New tools added weekly based on user feedback</li>
            <li><strong>Comprehensive Guides:</strong> Detailed tutorials and best practices for each tool</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Perfect for Everyone</h3>
          
          <p className="mb-4">
            Our tools are designed for a wide range of users:
          </p>

          <ul className="space-y-2 mb-6">
            <li><strong>Developers:</strong> Code formatters, validators, and development utilities</li>
            <li><strong>Marketers:</strong> SEO tools, social media utilities, and content generators</li>
            <li><strong>Business Owners:</strong> Financial calculators, invoice generators, and business tools</li>
            <li><strong>Students:</strong> Educational calculators, converters, and study tools</li>
            <li><strong>Content Creators:</strong> AI generators, image tools, and social media utilities</li>
            <li><strong>General Users:</strong> Everyday utilities for personal and professional use</li>
          </ul>

          <h3 className="text-xl font-semibold mb-4 text-foreground">Get Started Today</h3>
          
          <p className="mb-6">
            Ready to boost your productivity? Browse our comprehensive tool directory, 
            try our most popular tools, or explore specific categories. All tools are 
            free, fast, and work in your browser. No downloads or installations required.
          </p>
        </div>
      </div>
    </>
  )
}
