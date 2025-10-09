import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calculator,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Target,
  Users,
  TrendingUp,
  Star,
  Calendar,
  Activity,
  DollarSign,
  Percent,
  Wallet,
  Music,
  Heart,
  Hash,
  Crop,
  Image,
  FileText,
  Globe,
  Palette,
  Code,
  Search,
  Download,
} from "lucide-react"
import { AdSpace } from "@/components/ad-space"
import { TiktokDownloader } from "@/components/tiktok-downloader"
import { AnnouncementBanner } from "@/components/announcement-banner"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Free Online Tools | fasttools - Complete Digital Toolkit",
    description: "fasttools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, and easy to use.",
    url: "https://fasttools.store",
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
          name: "Image Tools",
          description: "Image processing and editing tools including croppers, converters, and OCR text extraction",
          url: "https://fasttools.store/image-tools"
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Finance Tools",
          description: "Financial calculators including loan calculators, tax calculators, and retirement planners",
          url: "https://fasttools.store/finance-tools"
        },
        {
          "@type": "ListItem",
          position: 7,
          name: "Developer Tools",
          description: "Development utilities including HTML beautifiers, JSON converters, and regex testers",
          url: "https://fasttools.store/dev-tools"
        },
        {
          "@type": "ListItem",
          position: 8,
          name: "Social Media Tools",
          description: "Social media utilities including TikTok downloaders, YouTube tools, and Instagram utilities",
          url: "https://fasttools.store/social-media-tools"
        }
      ]
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fasttools.store"
        }
      ]
    },
    about: {
      "@type": "Thing",
      name: "Free Online Tools",
      description: "Comprehensive collection of free online tools and utilities for productivity, conversion, and content creation"
    },
    isPartOf: {
      "@type": "WebSite",
      name: "fasttools",
      url: "https://fasttools.store"
    }
  }

  const tools = [
    {
      title: "Text Case Converter",
      description: "Convert text between uppercase, lowercase, title case, and more. Perfect for formatting documents and social media posts.",
      icon: Calculator,
      href: "/converters/text-case",
      popular: true,
    },
    {
      title: "Image to Text (OCR)",
      description: "Extract text from images using advanced optical character recognition. Works with photos, screenshots, and scanned documents.",
      icon: Activity,
      href: "/image-tools/image-to-text",
      popular: true,
    },
    {
      title: "QR Code Generator",
      description: "Generate QR codes for URLs, text, contact information, and more. Customize colors, size, and error correction level.",
      icon: Target,
      href: "/ai-tools/qr-generator",
      popular: true,
    },
    {
      title: "File Size Converter",
      description: "Convert between different file size units (KB, MB, GB, TB). Perfect for understanding storage requirements and data transfer.",
      icon: Clock,
      href: "/converters/file-size",
      popular: false,
    },
    {
      title: "Currency Converter",
      description: "Convert between different currencies with real-time exchange rates. Supports 160+ currencies worldwide.",
      icon: DollarSign,
      href: "/converters/currency",
      popular: true,
    },
    {
      title: "Temperature Converter",
      description: "Convert between Celsius, Fahrenheit, and Kelvin. Perfect for cooking, weather, and scientific calculations.",
      icon: Percent,
      href: "/converters/temperature",
      popular: false,
    },
    {
      title: "Length Converter",
      description: "Convert between different length units (meters, feet, inches, yards, miles). Supports metric and imperial systems.",
      icon: TrendingUp,
      href: "/converters/length",
      popular: false,
    },
    {
      title: "Timezone Converter",
      description: "Convert time between different timezones. Perfect for scheduling meetings and coordinating with global teams.",
      icon: Calendar,
      href: "/converters/timezone",
      popular: false,
    },
    {
      title: "Meta Tag Generator",
      description: "Generate SEO meta tags for your website. Includes title, description, keywords, and Open Graph tags.",
      icon: Shield,
      href: "/seo-tools/meta-tags",
      popular: true,
    },
    {
      title: "Lorem Ipsum Generator",
      description: "Generate placeholder text for your designs and prototypes. Customize length, paragraphs, and formatting.",
      icon: Users,
      href: "/seo-tools/lorem-ipsum",
      popular: false,
    },
    {
      title: "Hashtag Generator",
      description: "Generate relevant hashtags for your social media posts. Improve reach and engagement across platforms.",
      icon: Zap,
      href: "/seo-tools/hashtags",
      popular: true,
    },
    {
      title: "Blog Title Generator",
      description: "Generate catchy blog post titles and headlines. Perfect for content creators and marketers.",
      icon: FileText,
      href: "/seo-tools/blog-titles",
      popular: false,
    },
    {
      title: "Keyword Density Checker",
      description: "Analyze keyword density in your content for SEO optimization. Get insights on keyword usage and distribution.",
      icon: Search,
      href: "/seo-tools/keyword-density",
      popular: false,
    },
    {
      title: "AI Meme Generator",
      description: "Create funny memes with AI-powered text generation. Choose from popular templates and customize your message.",
      icon: Image,
      href: "/ai-tools/meme-generator",
      popular: true,
    },
    {
      title: "AI Caption Generator",
      description: "Generate engaging captions for your social media posts. Perfect for Instagram, Facebook, and Twitter.",
      icon: FileText,
      href: "/ai-tools/caption-generator",
      popular: true,
    },
    {
      title: "AI Lyrics Generator",
      description: "Generate song lyrics with AI assistance. Perfect for songwriters, musicians, and creative writers.",
      icon: Music,
      href: "/ai-tools/lyrics-generator",
      popular: false,
    },
    {
      title: "Pet Name Generator",
      description: "Generate unique and creative names for your pets. Choose from different categories and styles.",
      icon: Heart,
      href: "/ai-tools/pet-names",
      popular: false,
    },
    {
      title: "Hashtag Suggester",
      description: "Get AI-powered hashtag suggestions for your content. Improve social media reach and engagement.",
      icon: Hash,
      href: "/ai-tools/hashtag-suggester",
      popular: false,
    },
    {
      title: "Image Cropper",
      description: "Crop and resize images online. Perfect for social media posts, profile pictures, and web graphics.",
      icon: Crop,
      href: "/image-tools/image-cropper",
      popular: true,
    },
    {
      title: "Background Blur",
      description: "Add blur effects to image backgrounds. Perfect for creating professional-looking photos and graphics.",
      icon: Image,
      href: "/image-tools/background-blur",
      popular: false,
    },
    // Tools (General calculators)
    {
      title: "Age Calculator",
      description: "Calculate your exact age in years, months, days.",
      icon: Calendar,
      href: "/tools/age-calculator",
      popular: false,
    },
    {
      title: "BMI Calculator",
      description: "Compute Body Mass Index from height and weight.",
      icon: Activity,
      href: "/tools/bmi-calculator",
      popular: false,
    },
    {
      title: "Loan Calculator",
      description: "Estimate monthly loan payments and total interest.",
      icon: DollarSign,
      href: "/tools/loan-calculator",
      popular: false,
    },
    {
      title: "Tax Calculator",
      description: "Calculate taxes and after-tax amounts.",
      icon: Percent,
      href: "/tools/tax-calculator",
      popular: false,
    },
    {
      title: "Percentage Calculator",
      description: "Find percentage increase, decrease, and parts.",
      icon: Percent,
      href: "/tools/percentage-calculator",
      popular: false,
    },
    {
      title: "Date Difference",
      description: "Compute days between two dates.",
      icon: Calendar,
      href: "/tools/date-difference",
      popular: false,
    },
    {
      title: "Time Duration",
      description: "Calculate duration between times.",
      icon: Clock,
      href: "/tools/time-duration",
      popular: false,
    },
    {
      title: "Compound Interest",
      description: "Project investment growth with compounding.",
      icon: TrendingUp,
      href: "/tools/compound-interest",
      popular: false,
    },
    // Date & Time tools (category pages already exist but show here too)
    {
      title: "Age in Hours",
      description: "Convert your age to total hours lived.",
      icon: Clock,
      href: "/date-time-tools/age-in-hours",
      popular: false,
    },
    {
      title: "Date to Day Finder",
      description: "Find the weekday for any given date.",
      icon: Calendar,
      href: "/date-time-tools/date-to-day",
      popular: false,
    },
    {
      title: "Workday Calculator",
      description: "Calculate business days between dates.",
      icon: Calendar,
      href: "/date-time-tools/workday-calculator",
      popular: false,
    },
    {
      title: "Year End Countdown",
      description: "Countdown to the end of the year.",
      icon: Calendar,
      href: "/date-time-tools/year-end-countdown",
      popular: false,
    },
    {
      title: "Zodiac Sign Finder",
      description: "Find your zodiac sign by date of birth.",
      icon: Star,
      href: "/date-time-tools/zodiac-sign",
      popular: false,
    },
    // Dev tools
    {
      title: "Color Palette Generator",
      description: "Generate harmonious color palettes.",
      icon: Palette,
      href: "/dev-tools/color-palette",
      popular: false,
    },
    {
      title: "Hex to RGB",
      description: "Convert HEX colors to RGB values.",
      icon: Code,
      href: "/dev-tools/hex-to-rgb",
      popular: false,
    },
    {
      title: "HTML Beautifier",
      description: "Format and prettify HTML code.",
      icon: Code,
      href: "/dev-tools/html-beautifier",
      popular: false,
    },
    {
      title: "HTML to Markdown",
      description: "Convert HTML content into Markdown.",
      icon: FileText,
      href: "/dev-tools/html-to-markdown",
      popular: false,
    },
    {
      title: "JSON to CSV",
      description: "Transform JSON data into CSV format.",
      icon: FileText,
      href: "/dev-tools/json-to-csv",
      popular: false,
    },
    {
      title: "JWT Decoder",
      description: "Decode and inspect JWT tokens.",
      icon: Shield,
      href: "/dev-tools/jwt-decoder",
      popular: false,
    },
    {
      title: "Markdown Previewer",
      description: "Write and preview Markdown instantly.",
      icon: FileText,
      href: "/dev-tools/markdown-previewer",
      popular: false,
    },
    {
      title: "Regex Tester",
      description: "Test and debug regular expressions.",
      icon: Code,
      href: "/dev-tools/regex-tester",
      popular: false,
    },
    // Finance tools
    {
      title: "Invoice Generator",
      description: "Create simple invoices online.",
      icon: Wallet,
      href: "/finance-tools/invoice-generator",
      popular: false,
    },
    {
      title: "PayPal Fee Calculator",
      description: "Calculate PayPal fees and net received.",
      icon: DollarSign,
      href: "/finance-tools/paypal-fee",
      popular: false,
    },
    {
      title: "Discount Calculator",
      description: "Compute discounts and final prices.",
      icon: Percent,
      href: "/finance-tools/discount-calculator",
      popular: false,
    },
    {
      title: "Tip Calculator",
      description: "Split bills and calculate tips easily.",
      icon: DollarSign,
      href: "/finance-tools/tip-calculator",
      popular: false,
    },
    {
      title: "Savings Tracker",
      description: "Plan and track savings goals.",
      icon: Wallet,
      href: "/finance-tools/savings-tracker",
      popular: false,
    },
    {
      title: "Retirement Planner",
      description: "Estimate retirement savings needs.",
      icon: TrendingUp,
      href: "/finance-tools/retirement-planner",
      popular: false,
    },
    {
      title: "Bill Splitter",
      description: "Split shared bills fairly.",
      icon: Users,
      href: "/finance-tools/bill-splitter",
      popular: false,
    },
    {
      title: "Credit Card Payoff",
      description: "Plan credit card payoff timelines.",
      icon: DollarSign,
      href: "/finance-tools/credit-card-payoff",
      popular: false,
    },
    // Fun tools
    {
      title: "Future Age",
      description: "Find your age on a future date.",
      icon: Calendar,
      href: "/fun-tools/future-age",
      popular: false,
    },
    {
      title: "Love Calculator",
      description: "Have fun with a playful love score.",
      icon: Heart,
      href: "/fun-tools/love-calculator",
      popular: false,
    },
    {
      title: "Hashtag Counter",
      description: "Count hashtags in your text.",
      icon: Hash,
      href: "/fun-tools/hashtag-counter",
      popular: false,
    },
    {
      title: "Birthday Countdown",
      description: "Countdown to your next birthday.",
      icon: Calendar,
      href: "/fun-tools/birthday-countdown",
      popular: false,
    },
    {
      title: "Anniversary Calculator",
      description: "Track and celebrate anniversaries.",
      icon: Heart,
      href: "/fun-tools/anniversary",
      popular: false,
    },
    {
      title: "PDF Tools",
      description: "Basic PDF utilities online.",
      icon: FileText,
      href: "/image-tools/pdf-tools",
      popular: false,
    },
    {
      title: "PDF Unlocker",
      description: "Remove passwords from PDFs you own.",
      icon: FileText,
      href: "/image-tools/pdf-unlocker",
      popular: false,
    },
    {
      title: "Screenshot to Text",
      description: "Extract text from screenshots.",
      icon: Image,
      href: "/image-tools/screenshot-to-text",
      popular: false,
    },
    // Social Media tools
    {
      title: "YouTube Thumbnail Downloader",
      description: "Download thumbnails from YouTube videos.",
      icon: Image,
      href: "/social-media-tools/youtube-thumbnail",
      popular: false,
    },
    {
      title: "Instagram DP Viewer",
      description: "View and download Instagram profile photos.",
      icon: Image,
      href: "/social-media-tools/instagram-dp",
      popular: false,
    },
    {
      title: "TikTok Downloader",
      description: "Download TikTok videos without watermark.",
      icon: Download,
      href: "/social-media-tools/tiktok-downloader",
      popular: false,
    },
    {
      title: "YouTube Tag Extractor",
      description: "Extract tags from YouTube videos.",
      icon: Hash,
      href: "/social-media-tools/youtube-tags",
      popular: false,
    },
    {
      title: "Link in Bio Generator",
      description: "Build a simple bio link page.",
      icon: Globe,
      href: "/social-media-tools/link-in-bio",
      popular: false,
    },
    {
      title: "YouTube Channel Checker",
      description: "Check basic info about YouTube channels.",
      icon: Search,
      href: "/social-media-tools/channel-checker",
      popular: false,
    },
  ]

  // Premium gradients for tool icons with more variety
  const iconGradients = [
    "from-orange-500 via-amber-400 to-yellow-500",
    "from-blue-500 via-cyan-400 to-teal-500",
    "from-emerald-500 via-green-400 to-lime-500",
    "from-violet-500 via-purple-400 to-fuchsia-500",
    "from-rose-500 via-pink-400 to-red-500",
    "from-indigo-500 via-blue-400 to-sky-500",
    "from-lime-500 via-green-400 to-emerald-500",
    "from-slate-500 via-gray-400 to-zinc-500",
    "from-red-500 via-orange-400 to-yellow-500",
    "from-purple-500 via-violet-400 to-pink-500",
    "from-teal-500 via-cyan-400 to-blue-500",
    "from-green-500 via-emerald-400 to-teal-500",
  ]

  const categorizedTools: Record<string, typeof tools> = {
    "Converters": tools.filter((t) => t.href.startsWith("/converters")),
    "AI Tools": tools.filter((t) => t.href.startsWith("/ai-tools")),
    "SEO Tools": tools.filter((t) => t.href.startsWith("/seo-tools")),
    "Image Tools": tools.filter((t) => t.href.startsWith("/image-tools")),
    "Dev Tools": tools.filter((t) => t.href.startsWith("/dev-tools")),
    "Finance Tools": tools.filter((t) => t.href.startsWith("/finance-tools")),
    "Fun Tools": tools.filter((t) => t.href.startsWith("/fun-tools")),
    "Date & Time Tools": tools.filter((t) => t.href.startsWith("/date-time-tools") || t.href.startsWith("/tools/age") || t.href.startsWith("/tools/time")),
    "General Calculators": tools.filter((t) => t.href.startsWith("/tools/") && !t.href.includes("age") && !t.href.includes("time")),
    "Social Media Tools": tools.filter((t) => t.href.startsWith("/social-media-tools")),
  }

  return (
    <>
      <script suppressHydrationWarning type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col">
        {/* Hero Section with proper content-to-ad ratio */}
        <section className="container mx-auto px-4 lg:px-6 py-10 md:py-14">
          <div className="max-w-7xl mx-auto text-center space-y-8">
            {/* Dynamic Announcement Banner */}
            <div className="mb-6 animate-fade-in">
              <AnnouncementBanner />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1] text-foreground animate-fade-in-up tracking-tight">
              Free Online Tools | fasttools - Your Complete Digital Toolkit
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
              Access 1000+ powerful, free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities — all in one place. Fast, accurate, and easy to use.
            </p>

            {/* Hero CTA Buttons */}
            <div className="pt-6 animate-fade-in-up animation-delay-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link href="#popular-tools" className="flex items-center justify-center gap-2">
                    Explore Popular Tools
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 text-base font-semibold hover:bg-accent transition-all duration-200 bg-transparent border-2"
                >
                  <Link href="#all-tools" className="flex items-center justify-center gap-2">
                    View All Tools
                    <Target className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* First Ad Space - After Hero Content */}
        <section className="py-6">
          <div className="w-full px-4">
            <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24 border border-border/60 rounded-xl shadow-sm" />
          </div>
        </section>

      {/* Popular Tools Section */}
      <section id="popular-tools" className="bg-gradient-to-br from-background via-muted/20 to-background py-12 md:py-16">
        <div className="w-full px-4">
          <div className="w-full">
            <div className="text-center mb-10 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Popular Tools</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">Discover our most-used tools that help thousands of users daily</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mb-10">
              {tools.filter(tool => tool.popular).map((tool, index) => (
                <Card
                  key={tool.href}
                  className="group relative w-full border border-border/60 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="p-6 pb-4 flex-shrink-0">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`h-16 w-16 rounded-xl bg-gradient-to-br shadow-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${iconGradients[index % iconGradients.length]}`}>
                        <tool.icon className="h-8 w-8" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold border border-amber-200/50 dark:border-amber-800/50 backdrop-blur-sm">
                        <Star className="h-3 w-3 fill-current" />
                        Popular
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground leading-relaxed flex-grow">{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 mt-auto">
                    <Button asChild className="w-full h-12 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Link href={tool.href} className="flex items-center justify-center gap-2">
                        Use Tool
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Second Ad Space - Between Popular and All Tools */}
      <section className="py-6">
        <div className="w-full px-4">
          <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>
      </section>

      {/* All Tools Section with AdSense compliant layout */}
      <section id="all-tools" className="bg-muted/20 py-12 md:py-16">
        <div className="w-full px-4">
          <div className="w-full">
            <div className="text-center mb-10 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">All Tools</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">Browse our complete collection of free online tools and utilities</p>
            </div>

            {/* Desktop layout with single sidebar ad (AdSense compliant) */}
            <div className="hidden lg:grid grid-cols-12 gap-6">
              <div className="col-span-2">
                <div className="sticky top-4">
                  <AdSpace slot="sidebar" className="h-[600px] w-full border border-border/60 rounded-xl shadow-sm" />
                </div>
              </div>
              
              <div className="col-span-8">
                <div className="space-y-16">
                  {Object.entries(categorizedTools).map(([category, toolList], catIdx) => (
                    <div key={category} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                        <h3 className="text-2xl font-bold text-foreground">{category}</h3>
                        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {toolList.map((tool, index) => (
                          <Card
                            key={tool.href}
                            className="group relative w-full border border-border/60 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up flex flex-col"
                            style={{ animationDelay: `${(catIdx * 50) + (index * 25)}ms` }}
                          >
                            <CardHeader className="p-6 pb-4 flex-shrink-0">
                              <div className="flex items-start justify-between mb-4">
                                <div className={`h-14 w-14 rounded-xl bg-gradient-to-br shadow-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${iconGradients[(catIdx + index) % iconGradients.length]}`}>
                                  <tool.icon className="h-7 w-7" />
                                </div>
                                {tool.popular && (
                                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold border border-amber-200/50 dark:border-amber-800/50 backdrop-blur-sm">
                                    <Star className="h-3 w-3 fill-current" />
                                    Popular
                                  </span>
                                )}
                              </div>
                              <CardTitle className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                              <CardDescription className="text-sm text-muted-foreground leading-relaxed flex-grow">{tool.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 mt-auto">
                              <Button asChild className="w-full h-11 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                                <Link href={tool.href} className="flex items-center justify-center gap-2">
                                  Use Tool
                                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="col-span-2">
                <div className="sticky top-4">
                  <AdSpace slot="sidebar" className="h-[600px] w-full border border-border/60 rounded-xl shadow-sm" />
                </div>
              </div>
            </div>

            {/* Mobile and tablet layout */}
            <div className="grid lg:hidden gap-12">
              {Object.entries(categorizedTools).map(([category, toolList], catIdx) => (
                <div key={category} className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                    <h3 className="text-xl font-bold text-foreground">{category}</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {toolList.map((tool, index) => (
                      <Card 
                        key={tool.href} 
                        className="group relative w-full border border-border/60 hover:border-primary/30 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up flex flex-col"
                        style={{ animationDelay: `${(catIdx * 30) + (index * 20)}ms` }}
                      >
                        <CardHeader className="p-5 pb-3 flex-shrink-0">
                          <div className="flex items-start justify-between mb-3">
                            <div className={`h-12 w-12 rounded-lg bg-gradient-to-br shadow-md flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300 ${iconGradients[(catIdx + index) % iconGradients.length]}`}>
                              <tool.icon className="h-6 w-6" />
                            </div>
                            {tool.popular && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 dark:text-amber-300 text-xs font-semibold border border-amber-200/50 dark:border-amber-800/50">
                                <Star className="h-3 w-3 fill-current" />
                                Popular
                              </span>
                            )}
                          </div>
                          <CardTitle className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                          <CardDescription className="text-sm text-muted-foreground leading-relaxed flex-grow">{tool.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-5 pt-0 mt-auto">
                          <Button asChild className="w-full h-10 text-sm font-semibold shadow-lg hover:shadow-md transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                            <Link href={tool.href} className="flex items-center justify-center gap-2">
                              Use Tool
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Ad Space - Bottom Content */}
      <section className="py-8">
        <div className="w-full px-4">
          <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24 border border-border/60 rounded-xl shadow-sm" />
        </div>
      </section>

      {/* SEO Content (collapsible to keep UI clean) */}
      <section className="py-12 border-t">
        <div className="w-full px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            <details className="group" open>
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">About fasttools — Your Complete Free Online Tools Collection</h2>
                  <span className="text-sm text-muted-foreground group-open:hidden">Expand</span>
                  <span className="text-sm text-muted-foreground hidden group-open:inline">Collapse</span>
                </div>
              </summary>
              <div className="prose prose-neutral dark:prose-invert max-w-none mt-6 space-y-4 text-muted-foreground">
                <p>
                  fasttools is the ultimate collection of <strong>free online tools</strong> designed to eliminate everyday digital friction. 
                  Instead of navigating multiple websites to convert text, optimize SEO, process images, generate content, or perform calculations, 
                  you can access everything in one fast, privacy-respecting platform. Our <strong>web tools</strong> are lightweight, 
                  mobile-friendly, and engineered for speed so you can get results instantly and continue with your work.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Comprehensive Tool Categories</h3>
                
                <p>
                  Our <strong>AI tools</strong> section features cutting-edge artificial intelligence generators including meme generators, 
                  caption generators, lyrics generators, hashtag suggesters, and pet name generators. These <strong>AI content generators</strong> 
                  help creators, marketers, and social media managers produce engaging content quickly and efficiently. 
                  Our <strong>AI writing assistant</strong> tools are powered by advanced language models to ensure high-quality output.
                </p>
                
                <p>
                  The <strong>converter tools</strong> category offers comprehensive conversion utilities including currency converters with 
                  live exchange rates, unit converters for length, weight, temperature, and area measurements, file size converters, 
                  text case converters, and timezone converters. Our <strong>online converter</strong> tools support 160+ currencies 
                  and multiple measurement systems, making them perfect for international users and professionals.
                </p>
                
                <p>
                  For developers and technical users, our <strong>developer tools</strong> include HTML beautifiers, JSON to CSV converters, 
                  JWT decoders, regex testers, markdown previewers, color palette generators, and hex to RGB converters. 
                  These <strong>dev tools</strong> streamline development workflows and improve code quality.
                </p>
                
                <p>
                  Our <strong>SEO tools</strong> help optimize your online presence with meta tag generators, keyword density checkers, 
                  hashtag generators, blog title generators, and lorem ipsum generators. These <strong>SEO utilities</strong> are 
                  essential for content creators, marketers, and website owners looking to improve their search engine rankings.
                </p>
                
                <p>
                  The <strong>finance tools</strong> section provides comprehensive financial calculators including loan calculators, 
                  mortgage calculators, tax calculators, retirement planners, savings goal trackers, invoice generators, 
                  and PayPal fee calculators. These <strong>financial calculators</strong> help individuals and businesses 
                  make informed financial decisions.
                </p>
                
                <p>
                  <strong>Image tools</strong> offer powerful image processing capabilities including image croppers, background blur tools, 
                  image to text converters using OCR technology, screenshot to text extractors, and PDF tools. 
                  Our <strong>image editing tools</strong> are perfect for social media managers, designers, and content creators.
                </p>
                
                <p>
                  <strong>Social media tools</strong> include TikTok downloaders, YouTube thumbnail downloaders, Instagram DP viewers, 
                  YouTube tag extractors, and link in bio generators. These <strong>social media utilities</strong> help 
                  content creators and social media managers optimize their online presence.
                </p>
                
                <p>
                  Our <strong>date time tools</strong> provide comprehensive date and time utilities including age calculators, 
                  date difference calculators, workday calculators, zodiac sign finders, and anniversary calculators. 
                  These <strong>date calculators</strong> are perfect for personal and professional use.
                </p>
                
                <p>
                  The <strong>fun tools</strong> section offers entertaining utilities including love calculators, 
                  birthday countdown timers, future age predictors, and hashtag counters. These <strong>fun utilities</strong> 
                  add a playful element to our comprehensive tool collection.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Advanced Features and Performance</h3>
                
                <p>
                  We obsess over user experience and performance optimization. All pages are built with semantic HTML, 
                  accessible forms, responsive design, and lightning-fast rendering. We minimize bundle sizes, implement 
                  aggressive caching, and avoid unnecessary network calls. Our <strong>mobile-first design</strong> ensures 
                  optimal performance across all devices and screen sizes.
                </p>
                
                <p>
                  For search engines, we provide comprehensive structured data, logical internal linking, and descriptive 
                  meta content. This ensures that users searching for specific <strong>online tools</strong> can find exactly 
                  what they need quickly and efficiently. Our <strong>SEO optimization</strong> helps users discover 
                  the right tools for their specific needs.
                </p>
                
                <p>
                  Reliability is paramount in our design philosophy. All tools include input validation, graceful error handling, 
                  and helpful error messages. We test across modern browsers and screen sizes to ensure consistent performance. 
                  Our <strong>web utilities</strong> are designed to work seamlessly regardless of your device or browser.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Privacy and Security</h3>
                
                <p>
                  FastTools prioritizes user privacy and data security. All processing happens client-side when possible, 
                  and we never store your data or content. Our <strong>privacy-respecting tools</strong> ensure that your 
                  sensitive information remains secure and confidential. We believe in providing powerful tools without 
                  compromising your privacy.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Continuous Innovation</h3>
                
                <p>
                  fasttools is continuously expanding based on user feedback and emerging needs. We monitor usage patterns 
                  across all categories—converters, image processing, social media utilities, finance calculators, and 
                  productivity tools—and implement improvements weekly. Our commitment to innovation ensures that FastTools 
                  remains the most comprehensive and up-to-date collection of <strong>free online services</strong> available.
                </p>
                
                <p>
                  Whether you're a student, professional, content creator, developer, or casual user, fasttools provides 
                  the essential <strong>online calculators</strong> and utilities you need to be productive and efficient. 
                  Bookmark this page and experience the convenience of having all your essential tools in one place.
                </p>
              </div>
            </details>

            <details className="group">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground">Related Keywords and Search Phrases</h3>
                  <span className="text-sm text-muted-foreground group-open:hidden">Show 100 keywords</span>
                  <span className="text-sm text-muted-foreground hidden group-open:inline">Hide keywords</span>
                </div>
              </summary>
              <div className="mt-4">
                <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  {[
                    // Primary Keywords (20)
                    "online tools",
                    "free web tools", 
                    "productivity tools",
                    "AI tools",
                    "converter tools",
                    "calculator tools",
                    "text tools",
                    "image tools",
                    "developer tools",
                    "business tools",
                    "SEO tools",
                    "social media tools",
                    "finance tools",
                    "date time tools",
                    "fun tools",
                    "utility tools",
                    "web utilities",
                    "online calculators",
                    "free online services",
                    "tool collection",
                    
                    // Secondary Keywords (20)
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
                    
                    // Long-tail Keywords (20)
                    "free online hashtag generator for Instagram",
                    "best free QR code generator online",
                    "free password generator with custom length",
                    "online color picker tool free",
                    "free unit converter tool online",
                    "currency converter with live rates",
                    "free text case converter online",
                    "image format converter free online",
                    "free PDF tools online",
                    "free URL shortener service",
                    "word counter tool free online",
                    "character counter for social media",
                    "random number generator between range",
                    "color palette generator from image",
                    "free meme generator with templates",
                    "QR code scanner online free",
                    "barcode generator free online",
                    "free invoice generator template",
                    "receipt generator free online",
                    "certificate generator free template",
                    
                    // Additional SEO Keywords
                    "tiktok video downloader",
                    "download tiktok without watermark",
                    "save tiktok mp4",
                    "tiktok to mp3",
                    "tiktok audio download",
                    "online tiktok downloader",
                    "free tiktok saver",
                    "tiktok mp4 no watermark",
                    "tiktok download link",
                    "tiktok clip downloader",
                    "ocr image to text",
                    "convert image to text online",
                    "free qr code maker",
                    "file size converter",
                    "length converter cm to inch",
                    "temperature converter c to f",
                    "timezone converter",
                    "date difference calculator",
                    "time duration calculator",
                    "percentage calculator",
                    "discount calculator",
                    "compound interest calculator",
                    "tax calculator online",
                    "paypal fee calculator",
                    "savings goal tracker",
                    "retirement planner online",
                    "bill splitter app",
                    "hashtag suggester",
                    "keyword density checker",
                    "meta tag generator",
                    "html beautifier",
                    "html to markdown converter",
                    "json to csv converter",
                    "jwt decoder",
                    "markdown previewer",
                    "regex tester",
                    "screenshot to text",
                    "image cropper",
                    "background blur tool",
                    "pdf tools online",
                    "pdf unlocker",
                    "youtube thumbnail downloader",
                    "youtube tag extractor",
                    "instagram dp viewer",
                    "link in bio generator",
                    "ai meme generator",
                    "ai caption generator",
                    "ai lyrics generator",
                    "pet name generator",
                    "birthday countdown",
                    "anniversary calculator",
                    "age in hours calculator",
                    "zodiac sign finder",
                    "workday calculator",
                    "year end countdown",
                    "text case converter",
                    "uppercase to lowercase",
                    "title case converter",
                    "download tiktok sound",
                    "tiktok downloader fast",
                    "tiktok saver web",
                    "no watermark tiktok saver",
                    "tiktok download hd",
                    "tiktok download online free",
                    "tiktok downloader for pc",
                    "tiktok downloader for mobile",
                    "save tiktok audio mp3",
                    "extract tiktok music",
                    "generate qr for url",
                    "qr for wifi",
                    "qr for contact",
                    "convert kb mb gb",
                    "convert cm inch",
                    "convert celsius fahrenheit",
                    "convert time zones",
                    "calculate date gap",
                    "calculate time gap",
                    "find percentage",
                    "find discount price",
                    "calculate interest",
                    "estimate taxes",
                    "create invoice online",
                    "split bill calculator",
                    "track savings",
                    "plan retirement",
                    "seo meta generator",
                    "keyword density tool",
                    "format html online",
                    "convert html to md",
                    "convert json csv",
                    "decode jwt token",
                    "preview markdown",
                    "test regex online",
                    "extract text from screenshot",
                    "crop image online",
                    "blur background image",
                    "unlock pdf",
                    "download youtube thumbnail",
                    "extract youtube tags",
                    "view instagram profile photo",
                    "build link in bio",
                    "generate color palette",
                  ].map((k, index) => (
                    <li key={`keyword-${index}`} className="px-3 py-1 rounded-full bg-muted text-foreground/80 border">
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h4 className="text-base font-semibold text-foreground">Is the TikTok downloader free?</h4>
                  <p>Yes. The downloader on FastTools is free to use for public TikTok links. Always download only content you own or have permission to use.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">Do you remove the watermark?</h4>
                  <p>When available from the upstream service, we show both a no‑watermark and a watermark link so you can choose the appropriate option.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">Do I need to install anything?</h4>
                  <p>No. Everything runs in the browser. Simply paste a valid TikTok URL and click Get Download Links.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">Will this work on mobile?</h4>
                  <p>Yes. The downloader and all tools are responsive and optimized for mobile and desktop.</p>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground">What other tools are available?</h4>
                  <p>Explore converters, calculators, SEO helpers, developer utilities, image tools, and AI generators—all accessible from the homepage categories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is the TikTok downloader free?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, it is free for public TikTok links. Download only content you own or are authorized to use." }
              },
              {
                "@type": "Question",
                name: "Do you remove the watermark?",
                acceptedAnswer: { "@type": "Answer", text: "When available from the upstream service, we provide both no‑watermark and watermark options." }
              },
              {
                "@type": "Question",
                name: "Do I need to install anything?",
                acceptedAnswer: { "@type": "Answer", text: "No installation required—everything runs in the browser. Paste a TikTok URL and click Get Download Links." }
              },
              {
                "@type": "Question",
                name: "Will this work on mobile?",
                acceptedAnswer: { "@type": "Answer", text: "Yes, all tools are responsive and work on phones, tablets, and desktops." }
              },
              {
                "@type": "Question",
                name: "What other tools are available?",
                acceptedAnswer: { "@type": "Answer", text: "Converters, calculators, SEO helpers, developer utilities, image tools, and AI generators are available from the homepage." }
              }
            ]
          })
        }}
      />
      </div>
    </>
  )
}
