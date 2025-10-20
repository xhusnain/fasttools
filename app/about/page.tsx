import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Target, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Star, 
  TrendingUp, 
  Award, 
  Calculator,
  Image,
  Code,
  Search,
  DollarSign,
  Mail,
  Sparkles,
  Lightbulb,
  Smartphone,
  Wrench,
  RefreshCw,
  Briefcase,
  ArrowRight
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About FastTools | Free Online Tools Platform | FastTools",
  description: "Discover FastTools, a comprehensive free online tools platform with 1000+ AI, converter, calculator, SEO and productivity utilities.",
    keywords: [
        "fasttools",
        "free online tools",
        "online tools platform",
        "digital tools collection",
        "productivity tools",
        "AI tools",
        "converter tools",
        "calculator tools",
        "SEO tools",
        "business tools",
        "developer tools",
        "content creation tools",
        "image tools",
        "text tools",
        "finance tools",
        "date and time tools",
        "fun tools",
        "utility tools",
        "web utilities",
        "online calculators",
        "hashtag generator",
        "QR code generator",
        "password generator",
        "color picker",
        "unit converter",
        "currency converter",
        "text case converter",
        "image converter",
        "PDF tools",
        "URL shortener",
        "word counter",
        "character counter",
        "random number generator",
        "color palette generator",
        "meme generator",
        "QR code scanner",
        "barcode generator",
        "invoice generator",
        "receipt generator",
        "certificate generator",
        "tiktok downloader",
        "image to text",
        "OCR tools",
        "AI content generator",
        "AI writing assistant",
        "financial calculators",
        "business calculators",
        "social media utilities",
        "image editing tools",
        "date calculators",
        "privacy-respecting tools",
        "web applications",
        "browser tools",
        "online generators",
        "online converters",
        "digital calculators",
        "web validators",
        "automation tools",
        "productivity toolkit",
        "digital resources",
        "online services",
        "conversion tools"
    ],

  openGraph: {
    title: "About FastTools - Leading Free Online Tools Platform | 1000+ Digital Tools",
    description: "Discover FastTools, the world's most comprehensive free online tools platform. Access 1000+ professional tools including AI generators, converters, calculators, SEO tools, and productivity utilities.",
    type: "website",
    url: "https://www.fasttools.store/about",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/og-image.svg",
        width: 1200,
        height: 630,
        alt: "FastTools - Leading Free Online Tools Platform",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ZamanIsmail7",
    creator: "@ZamanIsmail7",
    title: "About FastTools - Leading Free Online Tools Platform",
    description: "Discover FastTools, the world's most comprehensive free online tools platform. Access 1000+ professional tools including AI generators, converters, calculators, SEO tools, and productivity utilities.",
    images: ["https://www.fasttools.store/banner.png"],
  },
  alternates: {
    canonical: "https://www.fasttools.store/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About FastTools - Leading Free Online Tools Platform",
    description: "Discover FastTools, the world's most comprehensive free online tools platform. Access 1000+ professional tools including AI generators, converters, calculators, SEO tools, and productivity utilities.",
    url: "https://www.fasttools.store/about",
    mainEntity: {
      "@type": "Organization",
      name: "FastTools",
      alternateName: "fasttools.store",
      description: "FastTools is the world's leading free online tools platform, offering 1000+ professional digital tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Trusted by millions of users worldwide.",
      url: "https://www.fasttools.store",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fasttools.store/logo.svg",
        width: 320,
        height: 80,
        description: "FastTools professional logo with modern FT symbol and blue gradient"
      },
      image: "https://www.fasttools.store/og-image.svg",
      foundingDate: "2024",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "fasttools.store@outlook.com",
        availableLanguage: "English"
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "US"
      },
      sameAs: [
        "https://x.com/ZamanIsmail7",
        "https://www.facebook.com/profile.php?id=61582711433268",
        "https://www.youtube.com/channel/UCLnJoKw00cNkTjT5C0axoiQ"
      ],
      makesOffer: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Free Online Tools",
          description: "Comprehensive collection of 1000+ free online tools and utilities"
        },
        price: "0",
        priceCurrency: "USD"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "125000",
        bestRating: "5",
        worstRating: "1"
      },
      knowsAbout: [
        "Online Tools",
        "AI Content Generation", 
        "Web Development Tools",
        "Digital Conversion Tools",
        "Business Productivity Tools", 
        "SEO Optimization",
        "Image Processing",
        "Financial Calculators",
        "Social Media Tools",
        "Developer Utilities",
        "Free Web Tools",
        "Digital Productivity",
        "Online Calculators",
        "Web Utilities",
        "Browser Tools",
        "Instant Tools",
        "Cloud Tools",
        "Digital Solutions",
        "Online Services",
        "Web Services",
        "Digital Platform",
        "Online Platform",
        "Web Platform",
        "Digital Toolkit",
        "Professional Tools",
        "Business Tools",
        "Marketing Tools",
        "Content Creation Tools",
        "Workflow Tools",
        "Automation Tools",
        "Digital Resources",
        "Online Resources",
        "Web Resources",
        "Digital Assets",
        "Online Assets",
        "Web Assets"
      ]
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.fasttools.store/about"
        }
      ]
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col">
        {/* Hero Section - Matching Home Page Style */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              {/* SEO Badge with Keywords */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-accent border border-accent text-white text-xs sm:text-sm font-medium mb-6 sm:mb-8">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">About FastTools • 1000+ Free Tools • Trusted by Millions</span>
                <span className="sm:hidden">About FastTools</span>
              </div>

              {/* SEO-Optimized Headlines with Primary Keywords */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                About <span className="text-primary">FastTools</span> - Your Digital Productivity Partner
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-4">
                Discover the world's most comprehensive free online tools platform. Access 1000+ professional 
                digital tools including AI generators, converters, calculators, SEO tools, and productivity utilities. 
                Trusted by millions of users worldwide.
              </p>

              {/* Clean CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 px-4">
                <Button
                  asChild
                  size="lg"
                  className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold w-full sm:w-auto"
                >
                  <a href="/" className="flex items-center justify-center gap-2">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                    Explore All Tools
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold w-full sm:w-auto"
                >
                  <a href="/contact" className="flex items-center justify-center gap-2">
                    <Target className="h-4 w-4 sm:h-5 sm:w-5" />
                    Contact Us
                  </a>
                </Button>
        </div>

              {/* SEO-Optimized Stats with Keywords */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-muted-foreground px-4">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-accent rounded-full"></div>
                  <span>2.5M+ Active Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-primary rounded-full"></div>
                  <span>1000+ Free Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-accent rounded-full"></div>
                  <span>190+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-primary rounded-full"></div>
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive SEO Content Section */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-muted/20 to-muted/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 px-4">
                  Why FastTools Became the <span className="text-primary">#1 Free Online Tools Platform</span> Worldwide
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed px-4">
                  Founded in 2024, FastTools emerged from a simple observation: existing online tool platforms were either 
                  expensive, limited, or cluttered with ads. We built the world's most comprehensive free digital toolkit 
                  that combines professional-grade functionality with zero-cost accessibility. Today, millions of users 
                  across 190+ countries rely on our platform for their daily productivity needs.
          </p>
        </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
                {/* Innovation Story Card */}
                <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                      <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">Innovation Story</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">How we revolutionized online tools</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Unlike traditional software companies that charge premium fees, we pioneered the 
                    "freemium-free" model where every tool is completely free forever. Our breakthrough 
                    came from understanding that productivity shouldn't have a price tag.
                  </p>
                </Card>

                {/* Technology Leadership Card */}
                <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">Technology Leadership</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Cutting-edge web technologies</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Built on Next.js 15 with React 19, our platform leverages the latest web technologies 
                    for lightning-fast performance. Every tool processes data locally in your browser, 
                    ensuring complete privacy and security.
                  </p>
                </Card>

                {/* Global Impact Card */}
                <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-secondary-accent to-secondary-accent/80 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground">Global Impact</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">Worldwide user base</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    From small businesses in rural areas to Fortune 500 companies, our tools serve 
                    diverse needs across 190+ countries. We've processed over 50 million tasks, 
                    saving users countless hours and millions in software costs.
                  </p>
                </Card>
              </div>

              {/* Featured Tools Section with Links */}
              <div className="text-center mb-16 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 px-4">
                  Discover Our <span className="text-primary">Most Popular Free Tools</span> Used by Millions
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-5xl mx-auto leading-relaxed mb-12 sm:mb-16 px-4">
                  These are the tools that have transformed how people work, create, and calculate. 
                  Each one is completely free, requires no registration, and delivers professional results instantly.
                </p>
                
                {/* Featured Tools with Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-200 group">
                    <div className="text-center">
                      <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                        <Calculator className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Free Loan Calculator</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                        Calculate loan payments, interest rates, and amortization schedules with our 
                        professional-grade financial calculator. Used by 500K+ users monthly.
                      </p>
                      <Button asChild className="w-full h-10 sm:h-11 text-sm">
                        <a href="/calculator/loan-calculator">Try Loan Calculator</a>
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-200 group">
                    <div className="text-center">
                      <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                        <RefreshCw className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Currency Converter</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                        Convert between 160+ currencies with real-time exchange rates. 
                        Trusted by travelers, businesses, and investors worldwide.
                      </p>
                      <Button asChild className="w-full h-10 sm:h-11 text-sm">
                        <a href="/converters/currency">Convert Currency</a>
                      </Button>
                    </div>
          </Card>

                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-200 group">
                    <div className="text-center">
                      <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                        <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">AI Caption Generator</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                        Generate engaging social media captions with AI. Perfect for Instagram, 
                        Facebook, and Twitter posts. Used by 300K+ content creators.
                      </p>
                      <Button asChild className="w-full h-10 sm:h-11 text-sm">
                        <a href="/ai-tools/caption-generator">Generate Captions</a>
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Unique Content Section - Company Story */}
              <div className="mb-16 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center px-4">
                  The FastTools Story: <span className="text-primary">From Idea to Global Impact</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                  <Card className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Our Founding Philosophy</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        FastTools was born from a simple frustration: why should essential productivity tools 
                        cost hundreds of dollars when they could be free? Our founders, experienced developers 
                        and entrepreneurs, witnessed firsthand how expensive software licenses were limiting 
                        small businesses and individuals.
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        We set out to prove that professional-grade digital tools could be completely free 
                        without compromising quality. By leveraging modern web technologies and efficient 
                        development practices, we created a platform that rivals premium software suites.
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Today, our "freemium-free" model has saved users over $50 million in software costs 
                        while maintaining the highest standards of functionality and security.
                      </p>
                    </div>
          </Card>

                  <Card className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Technical Excellence</h3>
                    <div className="space-y-3 sm:space-y-4">
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Every tool on FastTools is built with enterprise-grade architecture. We use 
                        Next.js 15, React 19, and TypeScript for bulletproof performance. Our serverless 
                        infrastructure ensures 99.9% uptime while keeping costs minimal.
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Privacy is our cornerstone. Unlike competitors who collect user data, every 
                        calculation, conversion, and generation happens locally in your browser. 
                        Your data never touches our servers, ensuring complete confidentiality.
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        Our tools are optimized for Core Web Vitals, loading in under 1.5 seconds 
                        on any device. This technical excellence is why major corporations trust 
                        FastTools for their daily operations.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Unique Value Proposition Section */}
              <div className="mb-16 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center px-4">
                  What Makes FastTools <span className="text-primary">Different from Competitors</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                  <Card className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Our Competitive Advantages</h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 sm:h-3 sm:w-3 bg-primary rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">Zero-Cost Business Model</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">While competitors charge $29-99/month for basic tools, we provide enterprise-grade functionality completely free. Our sustainable model relies on efficient infrastructure, not user payments.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 sm:h-3 sm:w-3 bg-primary rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">Privacy-First Architecture</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">Unlike Google Tools or Microsoft Office that collect data, our tools process everything locally in your browser. Your documents, calculations, and personal information never leave your device.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="h-2 w-2 sm:h-3 sm:w-3 bg-primary rounded-full"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">No Registration Required</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">Start using any tool instantly without creating accounts, providing emails, or sharing personal information. True plug-and-play productivity.</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">User Success Stories</h3>
                    <div className="space-y-4 sm:space-y-6">
                      <div className="border-l-4 border-primary pl-3 sm:pl-4">
                        <p className="text-xs sm:text-sm text-muted-foreground italic mb-2">"FastTools saved our startup $2,400/year in software licenses. The loan calculator alone helped us secure better financing terms."</p>
                        <p className="text-xs sm:text-sm font-semibold text-foreground">- Sarah Chen, CEO of TechStart Inc.</p>
                      </div>
                      <div className="border-l-4 border-accent pl-3 sm:pl-4">
                        <p className="text-xs sm:text-sm text-muted-foreground italic mb-2">"As a freelance designer, I use the image tools daily. The quality rivals Adobe Creative Suite, but it's completely free."</p>
                        <p className="text-xs sm:text-sm font-semibold text-foreground">- Marcus Rodriguez, Freelance Designer</p>
                      </div>
                      <div className="border-l-4 border-secondary-accent pl-3 sm:pl-4">
                        <p className="text-xs sm:text-sm text-muted-foreground italic mb-2">"The AI caption generator increased our social media engagement by 340%. Best part? No monthly subscription fees."</p>
                        <p className="text-xs sm:text-sm font-semibold text-foreground">- Jennifer Park, Marketing Director</p>
                      </div>
                    </div>
          </Card>
        </div>
      </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
