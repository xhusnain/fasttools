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
  Mail,
  X,
  Wrench,
} from "lucide-react"

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
    {
      title: "Fraction Calculator",
      description: "Add, subtract, multiply, and divide fractions with automatic simplification.",
      icon: Calculator,
      href: "/tools/fraction-calculator",
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
      popular: true,
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
        {/* AI Writing Assistant Hero Section */}
        <section className="container mx-auto px-4 lg:px-6 py-10 md:py-14">
          <div className="max-w-7xl mx-auto">
            {/* Compelling Value Proposition Banner */}
            <div className="mb-8 animate-fade-in">
              <div className="relative max-w-5xl mx-auto">
                <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-100 text-sm font-semibold mb-4">
                      <Sparkles className="h-4 w-4 animate-pulse" />
                      <span>1000+ Free Tools • No Registration Required</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
                      Everything You Need, Nothing You Don't
                    </h2>
                    <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                      From AI-powered content creation to precision calculators, we've eliminated the need to visit multiple websites. 
                      <span className="font-semibold text-white"> One platform, infinite possibilities.</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/70">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>100% Free Forever</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <span>No Watermarks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span>Privacy First</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-pink-400 rounded-full animate-pulse"></div>
                        <span>Mobile Optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ultra-Colorful & Engaging Hero Block */}
            <div className="relative overflow-hidden min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center">
              {/* Vibrant Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-purple-500/40 via-blue-500/40 to-cyan-500/40 animate-pulse"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/30 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-400/20 via-transparent to-transparent"></div>
              
              {/* Colorful Floating Particles */}
              <div className="absolute top-10 left-10 h-4 w-4 bg-pink-500 rounded-full animate-bounce animation-delay-100 shadow-lg shadow-pink-500/50"></div>
              <div className="absolute top-20 right-20 h-5 w-5 bg-blue-500 rounded-full animate-bounce animation-delay-500 shadow-lg shadow-blue-500/50"></div>
              <div className="absolute bottom-20 left-20 h-4 w-4 bg-yellow-500 rounded-full animate-bounce animation-delay-1000 shadow-lg shadow-yellow-500/50"></div>
              <div className="absolute bottom-10 right-10 h-3 w-3 bg-green-500 rounded-full animate-bounce animation-delay-1500 shadow-lg shadow-green-500/50"></div>
              <div className="absolute top-1/2 left-1/4 h-3 w-3 bg-purple-500 rounded-full animate-bounce animation-delay-2000 shadow-lg shadow-purple-500/50"></div>
              <div className="absolute top-1/3 right-1/3 h-4 w-4 bg-orange-500 rounded-full animate-bounce animation-delay-2500 shadow-lg shadow-orange-500/50"></div>
              
              {/* Massive Colorful Gradient Orbs */}
              <div className="absolute -top-32 -left-32 h-48 w-48 bg-gradient-to-br from-pink-500/50 to-purple-500/50 rounded-full blur-3xl animate-spin animation-delay-2000"></div>
              <div className="absolute -bottom-32 -right-32 h-36 w-36 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-full blur-3xl animate-spin animation-delay-3000"></div>
              <div className="absolute top-1/2 -right-16 h-24 w-24 bg-gradient-to-br from-yellow-500/40 to-orange-500/40 rounded-full blur-2xl animate-spin animation-delay-1000"></div>
              <div className="absolute top-1/4 -left-16 h-20 w-20 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full blur-2xl animate-spin animation-delay-4000"></div>
              
              <div className="relative w-full bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 border-2 border-white/30 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
                  {/* Left Column - Ultra-Colorful Content */}
                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-3 sm:space-y-4">
                      {/* Rainbow Animated Badge */}
                      <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-pink-500/40 via-purple-500/40 via-blue-500/40 to-cyan-500/40 border-2 border-pink-400/60 text-white text-xs sm:text-sm font-bold animate-bounce hover:animate-pulse transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/50">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 animate-spin text-yellow-300" />
                        <span className="animate-pulse">AI-Powered</span>
                        <span className="text-yellow-300">•</span>
                        <span className="animate-pulse">100% Free</span>
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                      </div>

                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-cyan-400 to-yellow-400 leading-[0.9] tracking-tight animate-pulse hover:animate-none transition-all duration-500">
                        Write 10x Faster
                      </h1>

                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold text-white/95 leading-tight animate-fade-in-up animation-delay-200">
                        Choose Best As You
                      </h2>

                      <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/85 leading-relaxed max-w-xl animate-fade-in-up animation-delay-300">
                        Your ultimate toolkit for productivity, creativity, and success. From AI-powered content generation to precision calculators, we've got everything you need to work smarter, not harder.
                      </p>
                    </div>

                    {/* Ultra-Colorful CTA Section */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <Button
                          asChild
                          size="lg"
                          className="group h-14 sm:h-16 px-6 sm:px-8 text-lg sm:text-xl font-black bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-cyan-500 hover:from-pink-600 hover:via-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white border-0 shadow-2xl hover:shadow-pink-500/50 transition-all duration-500 transform hover:scale-110 hover:rotate-1 animate-pulse hover:animate-none"
                        >
                          <Link href="/ai-tools/caption-generator" className="flex items-center justify-center gap-3 sm:gap-4">
                            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-spin text-yellow-300" />
                            <span className="group-hover:animate-pulse">Start Creating Now</span>
                            <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                          </Link>
                        </Button>
                        
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="group h-14 sm:h-16 px-6 sm:px-8 text-lg sm:text-xl font-black border-3 border-white/40 text-white hover:bg-white/20 hover:border-white/70 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
                        >
                          <Link href="#popular-tools" className="flex items-center justify-center gap-3 sm:gap-4">
                            <Target className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce" />
                            <span className="group-hover:animate-pulse">Discover All Tools</span>
                          </Link>
                        </Button>
                      </div>

                      {/* Rainbow Live Stats */}
                      <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 text-white/80">
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/50 hover:scale-105 transition-all duration-300">
                          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-green-400 rounded-full animate-ping"></div>
                          <span className="text-xs sm:text-sm font-bold text-green-300">5,000+ users creating now</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border border-yellow-400/50 hover:scale-105 transition-all duration-300">
                          <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 animate-pulse" />
                          <span className="text-xs sm:text-sm font-bold text-yellow-300">10x faster</span>
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-400/50 hover:scale-105 transition-all duration-300">
                          <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 animate-bounce" />
                          <span className="text-xs sm:text-sm font-bold text-blue-300">1000+ free tools</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Ultra-Colorful Visual */}
                  <div className="relative hidden lg:block mt-4">
                    {/* Rainbow Floating Elements */}
                    <div className="absolute top-2 -right-4 h-16 sm:h-20 w-16 sm:w-20 bg-gradient-to-br from-pink-500/50 to-purple-500/50 rounded-full blur-2xl animate-spin animation-delay-1000"></div>
                    <div className="absolute -bottom-4 -left-4 h-20 sm:h-24 w-20 sm:w-24 bg-gradient-to-br from-blue-500/50 to-cyan-500/50 rounded-full blur-2xl animate-spin animation-delay-2000"></div>
                    <div className="absolute top-1/2 -left-2 h-10 sm:h-12 w-10 sm:w-12 bg-gradient-to-br from-yellow-500/40 to-orange-500/40 rounded-full blur-xl animate-bounce animation-delay-500"></div>
                    <div className="absolute top-1/4 -right-1 h-8 sm:h-10 w-8 sm:w-10 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-full blur-xl animate-bounce animation-delay-1500"></div>
                    <div className="absolute top-3/4 left-1 h-8 sm:h-10 w-8 sm:w-10 bg-gradient-to-br from-red-500/40 to-pink-500/40 rounded-full blur-xl animate-bounce animation-delay-2500"></div>
                    
                    {/* Colorful Animated Particles */}
                    <div className="absolute top-2 left-2 h-1.5 w-1.5 bg-pink-400 rounded-full animate-ping animation-delay-500 shadow-lg shadow-pink-400/50"></div>
                    <div className="absolute top-4 right-4 h-2 w-2 bg-blue-400 rounded-full animate-ping animation-delay-1000 shadow-lg shadow-blue-400/50"></div>
                    <div className="absolute bottom-4 left-4 h-1.5 w-1.5 bg-yellow-400 rounded-full animate-ping animation-delay-1500 shadow-lg shadow-yellow-400/50"></div>
                    <div className="absolute bottom-2 right-2 h-2 w-2 bg-green-400 rounded-full animate-ping animation-delay-2000 shadow-lg shadow-green-400/50"></div>
                    <div className="absolute top-1/2 right-2 h-1.5 w-1.5 bg-purple-400 rounded-full animate-ping animation-delay-2500 shadow-lg shadow-purple-400/50"></div>
                    
                    <div className="relative bg-gradient-to-br from-white/20 to-white/15 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border-2 border-white/40 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 hover:scale-105">
                      {/* AI Interface Mockup */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse">
                            <Sparkles className="h-6 w-6 text-white animate-spin" />
                          </div>
                          <div>
                            <h3 className="text-lg font-black text-white animate-pulse">AI Writing Assistant</h3>
                            <p className="text-white/80 text-sm font-semibold">Powered by GPT-4 & Claude</p>
                          </div>
                          <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-2 border-green-400/50 hover:scale-110 transition-all duration-300">
                            <div className="h-2 w-2 bg-green-400 rounded-full animate-ping"></div>
                            <span className="text-green-300 text-sm font-bold animate-pulse">LIVE</span>
                          </div>
                        </div>
                        
                        {/* Generated Content Examples */}
                        <div className="space-y-2">
                          <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                            <p className="text-white/60 text-xs mb-1">✨ Generated Caption:</p>
                            <p className="text-white font-medium leading-relaxed text-xs">
                              "Transform your morning routine with these 5 productivity hacks that successful entrepreneurs swear by! 💪✨ #ProductivityTips #MorningRoutine #Success"
                            </p>
                          </div>
                          
                          <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                            <p className="text-white/60 text-xs mb-1">📝 Blog Post:</p>
                            <p className="text-white font-medium leading-relaxed text-xs">
                              "The Ultimate Guide to Morning Productivity: How Top CEOs Start Their Day for Maximum Success..."
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-white/60 text-xs">
                          <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            <span>AI Generated • 2.3 seconds</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="ml-1 text-xs">4.9/5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      {/* Ultra-Colorful Popular Tools Section */}
      <section id="popular-tools" className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Rainbow Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-400/10 via-transparent to-transparent"></div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 via-blue-500/30 to-cyan-500/30 border border-pink-400/50 text-white text-sm font-bold mb-4 sm:mb-6">
                <Star className="h-4 w-4 fill-current text-yellow-300" />
                Most Popular Tools
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-cyan-500 to-yellow-500 mb-4 sm:mb-6">
                Tools That Users Love
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                Discover the most-used tools that help thousands of users daily. These are the tools that make a real difference.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {tools.filter(tool => tool.popular).map((tool, index) => (
                <div
                  key={tool.href}
                  className="group relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Link href={tool.href} className="block">
                    <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/40 hover:border-white/70 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/25 group-hover:bg-gradient-to-br group-hover:from-white/30 group-hover:to-white/20">
                      {/* Rainbow Floating Background Elements */}
                      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 bg-gradient-to-br from-pink-500/40 to-purple-500/40 rounded-full blur-xl group-hover:scale-150 group-hover:animate-spin transition-all duration-500"></div>
                      <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-full blur-xl group-hover:scale-150 group-hover:animate-spin transition-all duration-500 animation-delay-1000"></div>
                      <div className="absolute top-1/2 -left-1 sm:-left-2 h-8 w-8 sm:h-12 sm:w-12 lg:h-16 lg:w-16 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-full blur-lg group-hover:scale-125 group-hover:animate-bounce transition-all duration-300"></div>
                      <div className="absolute top-1/4 -right-1 sm:-right-2 h-6 w-6 sm:h-10 sm:w-10 lg:h-12 lg:w-12 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full blur-lg group-hover:scale-125 group-hover:animate-bounce transition-all duration-300 animation-delay-500"></div>
                      
                      {/* Colorful Animated Particles */}
                      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 h-1 w-1 bg-pink-400 rounded-full animate-ping animation-delay-500 shadow-lg shadow-pink-400/50"></div>
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 h-1 w-1 sm:h-2 sm:w-2 bg-blue-400 rounded-full animate-ping animation-delay-1000 shadow-lg shadow-blue-400/50"></div>
                      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 h-1 w-1 bg-yellow-400 rounded-full animate-ping animation-delay-1500 shadow-lg shadow-yellow-400/50"></div>
                      <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 h-1 w-1 sm:h-2 sm:w-2 bg-green-400 rounded-full animate-ping animation-delay-2000 shadow-lg shadow-green-400/50"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`h-12 w-12 rounded-xl bg-gradient-to-br shadow-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${iconGradients[index % iconGradients.length]}`}>
                            <tool.icon className="h-6 w-6 text-white group-hover:animate-spin" />
                      </div>
                          <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 rounded-full bg-gradient-to-r from-amber-500/40 to-orange-500/40 border border-amber-400/60 hover:scale-110 transition-all duration-300">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-current text-amber-300 animate-pulse" />
                            <span className="text-amber-200 text-xs sm:text-sm font-black">4.9</span>
                    </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-1">
                          {tool.title}
                        </h3>
                        
                        <p className="text-white/90 mb-4 leading-relaxed text-sm">
                          {tool.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-white/70">
                            <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                            <span>Live & Ready</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-pink-300 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                      </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Main Categories Section */}
      <section id="categories" className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Dark Background to match other sections */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50 text-blue-200 text-sm font-semibold mb-6">
                <Wrench className="h-4 w-4" />
                Professional Tool Categories
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
                Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Professional Toolkit</span>
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Discover specialized tool categories designed for professionals, creators, and businesses. 
                Each category contains dozens of industry-specific tools to streamline your workflow and boost productivity.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Industry-Specific Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span>Professional Grade</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Expert-Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <span>Always Updated</span>
                </div>
              </div>
            </div>

            {/* Main Category Cards with Clean Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {/* AI Tools Category */}
              <Link href="/ai-tools" className="group">
                <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">AI Tools</h3>
                        <p className="text-white/80 text-xs">25+ AI-powered tools</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                      Generate content, captions, hashtags, and more with our advanced AI tools powered by GPT-4 and Claude. 
                      Perfect for content creators, marketers, and professionals.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                        <span>AI Caption Generator, Meme Generator</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-purple-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Calculator Tools Category */}
              <Link href="/tools" className="group">
                <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Calculator className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Calculators</h3>
                        <p className="text-white/80 text-xs">50+ calculator tools</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                      Financial, business, and general calculators for all your calculation needs. From loan calculators to tip calculators. 
                      Essential for accountants, financial advisors, and business professionals.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                        <span>Loan Calculator, Tip Calculator</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-blue-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Converter Tools Category */}
              <Link href="/converters" className="group">
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105">
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Activity className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Converters</h3>
                        <p className="text-white/80 text-xs">30+ conversion tools</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                      Convert currencies, units, text cases, and file formats instantly. Live exchange rates and comprehensive unit conversions. 
                      Perfect for international businesses, developers, and data analysts.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                        <span>Currency Converter, Unit Converter</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-green-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* SEO Tools Category */}
              <Link href="/seo-tools" className="group">
                <div className="relative bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105">
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">SEO Tools</h3>
                        <p className="text-white/80 text-xs">20+ SEO utilities</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                      Optimize your website with our comprehensive SEO tools. Meta tag generators, keyword analyzers, and more.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                        <span>Meta Tag Generator, Keyword Checker</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-orange-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Image Tools Category */}
              <Link href="/image-tools" className="group">
                <div className="relative bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl p-6 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:scale-105">
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Image className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Image Tools</h3>
                        <p className="text-white/80 text-xs">15+ image utilities</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                      Process and edit images with our powerful tools. Crop, resize, convert formats, and extract text from images.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                        <span>Image Cropper, Image Converter</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-pink-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Developer Tools Category */}
              <Link href="/dev-tools" className="group">
                <div className="relative bg-gradient-to-br from-slate-500 to-gray-500 rounded-2xl p-6 shadow-lg hover:shadow-slate-500/30 transition-all duration-300 hover:scale-105">
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-slate-500 to-gray-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Developer Tools</h3>
                        <p className="text-white/80 text-xs">25+ dev utilities</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                      Essential tools for developers. HTML beautifiers, JSON converters, regex testers, and more coding utilities.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                        <span>HTML Beautifier, JSON Converter</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-slate-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Finance Tools Category */}
              <Link href="/finance-tools" className="group">
                <div className="relative bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105">
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Finance Tools</h3>
                        <p className="text-white/80 text-xs">20+ financial calculators</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                      Manage your finances with our comprehensive financial tools. Loan calculators, tax calculators, and investment tools.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                        <span>Loan Calculator, Tax Calculator</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-yellow-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Social Media Tools Category */}
              <Link href="/social-media-tools" className="group">
                <div className="relative bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl p-6 shadow-lg hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105">
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Social Media</h3>
                        <p className="text-white/80 text-xs">15+ social tools</p>
                      </div>
                    </div>
                    <p className="text-white/90 mb-4 leading-relaxed text-sm">
                      Create engaging social media content with our specialized tools. TikTok downloaders, hashtag generators, and more.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-white/70">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                        <span>TikTok Downloader, Hashtag Generator</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-violet-300 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
                  </div>

            {/* Additional Engaging Content */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 via-blue-500/30 to-cyan-500/30 border border-pink-400/50 text-white text-lg font-bold mb-8">
                <Sparkles className="h-5 w-5 animate-spin text-yellow-300" />
                <span>1000+ Free Tools Available</span>
                <div className="h-2 w-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 via-blue-400 via-cyan-400 to-yellow-400 mb-6">
                Why Choose FastTools?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl border border-white/30">
                  <div className="h-16 w-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
            </div>
                  <h4 className="text-xl font-bold text-white mb-3">100% Free Forever</h4>
                  <p className="text-white/80">No hidden costs, no premium tiers, no credit card required.</p>
          </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl border border-white/30">
                  <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
        </div>
                  <h4 className="text-xl font-bold text-white mb-3">Lightning Fast</h4>
                  <p className="text-white/80">Optimized for speed. No loading delays, no unnecessary features.</p>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-2xl border border-white/30">
                  <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">Always Updated</h4>
                  <p className="text-white/80">Latest features, newest tools, and regular improvements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Ultra-Colorful About Section */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Rainbow Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/15 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-400/10 via-transparent to-transparent"></div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
            <details className="group bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border-2 border-white/30 shadow-2xl hover:shadow-pink-500/25 transition-all duration-500" open>
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-cyan-500 to-yellow-500">About fasttools — Your Complete Free Online Tools Collection</h2>
                  <span className="text-sm text-white/70 group-open:hidden">Expand</span>
                  <span className="text-sm text-white/70 hidden group-open:inline">Collapse</span>
                </div>
              </summary>
              <div className="prose prose-neutral dark:prose-invert max-w-none mt-6 space-y-4 text-white/90">
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

            {/* Comprehensive Guides Section */}
            <div className="mt-12">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6">Comprehensive Tool Guides</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-500" />
                      QR Code Generator Guide
                    </CardTitle>
                    <CardDescription>
                      Complete guide to QR code generation, customization, and best practices for maximum impact.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn everything about QR codes including types, customization options, use cases, and future trends. 
                      Perfect for businesses, marketers, and developers.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/guides/qr-code-generator-guide">Read Complete Guide</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-green-500" />
                      Currency Converter Guide
                    </CardTitle>
                    <CardDescription>
                      Master currency conversion with our comprehensive guide to exchange rates and international trading.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Understand exchange rates, major currency pairs, conversion tips, and future trends in currency conversion. 
                      Essential for travelers and businesses.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/guides/currency-converter-guide">Read Complete Guide</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-purple-500" />
                      SEO Tools Guide
                    </CardTitle>
                    <CardDescription>
                      Complete guide to SEO optimization with free tools for better search engine rankings.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Master SEO with keyword research, on-page optimization, technical SEO, and content optimization strategies. 
                      Perfect for marketers and website owners.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/guides/seo-tools-guide">Read Complete Guide</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-orange-500" />
                      Developer Tools Guide
                    </CardTitle>
                    <CardDescription>
                      Essential developer tools and utilities for web development, coding, and technical projects.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Discover essential developer tools including code formatters, validators, converters, and utilities. 
                      Boost your development workflow and productivity.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/guides/developer-tools-guide">Read Complete Guide</Link>
                    </Button>
                  </CardContent>
                </Card>
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
