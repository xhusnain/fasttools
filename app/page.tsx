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
  CheckCircle2,
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
  Settings,
  Download,
} from "lucide-react"
import { AdSpace } from "@/components/ad-space"
import { TiktokDownloader } from "@/components/tiktok-downloader"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools - Free Online Tools for Everyone",
    description: "fasttools.store offers 40+ free online tools including text, file, image, and productivity utilities — all in one place. Fast, accurate, and easy to use.",
    url: "https://fasttools.store",
    mainEntity: {
      "@type": "ItemList",
      name: "Free Online Tools",
      description: "Collection of free online tools and utilities",
      numberOfItems: 40,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Text Case Converter",
          description: "Convert text between different cases (uppercase, lowercase, title case)",
          url: "https://fasttools.store/converters/text-case"
        },
        {
          "@type": "ListItem", 
          position: 2,
          name: "Image to Text (OCR)",
          description: "Extract text from images using optical character recognition",
          url: "https://fasttools.store/image-tools/image-to-text"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "QR Code Generator", 
          description: "Generate QR codes for URLs, text, and contact information",
          url: "https://fasttools.store/ai-tools/qr-generator"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Currency Converter",
          description: "Convert between different currencies with real-time exchange rates",
          url: "https://fasttools.store/converters/currency"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "AI Meme Generator",
          description: "Create funny memes with AI-powered text generation",
          url: "https://fasttools.store/ai-tools/meme-generator"
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex flex-col">
        <AdSpace slot="header" className="mb-0 h-20" />

      <section className="container mx-auto px-4 lg:px-6 py-20 md:py-32">
        <AdSpace slot="header" className="mb-12 h-24" />

        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2 animate-fade-in border border-primary/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Free Online Tools for Everyone</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-[1.1] text-foreground animate-fade-in-up tracking-tight">
          FastTools - Your Digital Toolkit
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
            Access 1000+ powerful, free online tools including text converters, image processors, AI generators, and productivity utilities — all in one place.
          </p>

          <div className="flex flex-col-reverse lg:flex-row items-start lg:items-stretch justify-center gap-8 pt-8 animate-fade-in-up animation-delay-200">
            <div className="w-full lg:w-[52%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full h-12 px-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Link href="/tools">
                    Browse All Tools
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full h-12 px-6 text-base font-medium hover:bg-accent transition-all duration-200 bg-transparent border-2"
                >
                  <Link href="/social-media-tools/tiktok-downloader">Open Full TikTok Downloader</Link>
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-[48%] text-left">
              <h2 className="text-xl font-semibold mb-3 text-foreground">Quick TikTok Downloader</h2>
              <TiktokDownloader compact />
              <div className="mt-4">
                <AdSpace slot="content" className="w-full h-24 lg:h-36 border border-border/60 rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      {/* Intro feature cards removed to streamline homepage */}

      {/* "Why Choose" section removed per request */}

      {/* Public Tools section removed per request */}

      {/* Ad Space - Top Content */}
      <section className="py-4">
        <div className="w-full">
          <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24" />
        </div>
      </section>

      {/* Popular Tools Section */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-background py-16 md:py-20">
        <div className="w-full px-4">
          <div className="w-full">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Popular Tools</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">Discover our most-used tools that help thousands of users daily</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mb-12">
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

      {/* Ad Space - Between Sections */}
      <section className="py-4">
        <div className="w-full">
          <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24" />
        </div>
      </section>

      {/* All Tools Section with full width layout */}
      <section className="bg-muted/20 py-16 md:py-20">
        <div className="w-full px-4">
          <div className="w-full">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">All Tools</h2>
              <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">Browse our complete collection of free online tools and utilities</p>
            </div>

            {/* Desktop layout with side ads */}
            <div className="hidden lg:grid grid-cols-12 gap-6">
              <div className="col-span-2">
                <div className="sticky top-4">
                  <div className="space-y-4">
                    <AdSpace slot="sidebar" className="h-[600px] w-full border border-border/60 rounded-xl shadow-sm" />
                    <AdSpace slot="sidebar" className="h-[400px] w-full border border-border/60 rounded-xl shadow-sm" />
                    <AdSpace slot="sidebar" className="h-[500px] w-full border border-border/60 rounded-xl shadow-sm" />
                  </div>
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
                      
                      {/* Ad space between categories */}
                      {catIdx < Object.entries(categorizedTools).length - 1 && (
                        <div className="py-4">
                          <AdSpace slot="content" className="w-full max-w-4xl mx-auto h-24" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="col-span-2">
                <div className="sticky top-4">
                  <div className="space-y-4">
                    <AdSpace slot="sidebar" className="h-[600px] w-full border border-border/60 rounded-xl shadow-sm" />
                    <AdSpace slot="sidebar" className="h-[400px] w-full border border-border/60 rounded-xl shadow-sm" />
                    <AdSpace slot="sidebar" className="h-[500px] w-full border border-border/60 rounded-xl shadow-sm" />
                  </div>
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
                  
                  {/* Ad space between categories on mobile */}
                  {catIdx < Object.entries(categorizedTools).length - 1 && (
                    <div className="py-4">
                      <AdSpace slot="content" className="w-full h-24" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space - Bottom Content */}
      <section className="py-8">
        <div className="w-full px-4">
          <AdSpace slot="content" className="w-full max-w-6xl mx-auto mb-6 h-24" />
          <AdSpace slot="content" className="w-full max-w-6xl mx-auto h-24" />
        </div>
      </section>
      </div>
    </>
  )
}
