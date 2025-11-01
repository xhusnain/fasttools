import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSectionBg } from "@/components/hero-section-bg"
import { GHeader } from "@/components/globalcomponents/gheader"
import type { Metadata } from "next"
import {
  Calculator,
  ArrowRight,
  Sparkles,
  Palette,
  Code,
  FileText,
  Search,
  DollarSign,
  Image,
  Smile,
  Globe,
  Zap,
  Wrench,
  Music,
  QrCode,
  Heart,
  Hash,
  Download,
  Calendar,
  Activity,
  Percent,
  Type,
  Ruler,
  Thermometer,
  Users,
  Star,
  TrendingUp,
  Rocket,
  Award,
  Shield,
  Clock,
  CheckCircle2,
  BookOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Free Online Tools | AI Generator, Calculator, Converter & SEO Tools",
  description: "FastTools offers 1000+ free online tools: AI generators, converters, calculators, SEO tools & more. Fast, accurate, no registration. Your complete digital toolkit.",
  keywords: [
    "fasttools",
    "fast tools",
    "free online tools",
    "online tools platform",
    "free fast tools",
    "web tools",
    "productivity tools",
    "AI tools",
    "converter tools",
    "calculator tools",
    "SEO tools",
    "digital tools",
    "browser tools",
    "instant tools",
    "quick online tools",
    "fast online tools",
    "fast web tools",
    "fast calculators",
    "fast converters",
    "online utilities",
    "web utilities",
    "free utilities",
    "tool collection",
    "digital toolkit",
    "productivity toolkit",
  ],
  alternates: {
    canonical: "https://www.fasttools.store",
  },
  openGraph: {
    title: "FastTools - Free Online Tools | 1000+ AI, Calculator, Converter & SEO Tools",
    description: "FastTools offers 1000+ free online tools: AI generators, converters, calculators, SEO tools & more. Fast, accurate, no registration. Your complete digital toolkit.",
    type: "website",
    url: "https://www.fasttools.store",
    siteName: "FastTools",
    images: [
      {
        url: "https://www.fasttools.store/banner.png",
        width: 1200,
        height: 630,
        alt: "FastTools - Free Online Tools Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ZamanIsmail7",
    creator: "@ZamanIsmail7",
    title: "FastTools - Free Online Tools | 1000+ AI, Calculator, Converter & SEO Tools",
    description: "FastTools offers 1000+ free online tools: AI generators, converters, calculators, SEO tools & more. Fast, accurate, no registration required.",
    images: ["https://www.fasttools.store/banner.png"],
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

// Professional color palette - muted and sophisticated
const categories = [
  {
    id: "calculators",
    name: "Professional Calculators",
    description: "Accurate calculators for finance, health, and more",
    icon: Calculator,
    href: "/calculator",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-blue-500/20",
    iconColor: "text-foreground",
    glowColor: "hover:shadow-blue-500/20",
    tools: [
      {
        title: "BMI Calculator",
        description: "Calculate your Body Mass Index with detailed health insights and personalized recommendations based on WHO and CDC standards",
        href: "/calculator/bmi-calculator",
        icon: Activity,
        badge: "Popular",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Age Calculator",
        description: "Calculate exact age in years, months, weeks, days, hours, minutes, and seconds with precision accuracy for any date",
        href: "/calculator/age-calculator",
        icon: Calendar,
        badge: "Essential",
        badgeColor: "bg-orange-500/90",
      },
      {
        title: "Percentage Calculator",
        description: "Calculate percentages, discounts, increases, decreases, and percentage differences with multiple calculation modes",
        href: "/calculator/percentage-calculator",
        icon: Percent,
        badge: "Daily",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "Loan Calculator",
        description: "Calculate loan payments, total interest, amortization schedules, and compare different loan options easily",
        href: "/calculator/loan-calculator",
        icon: DollarSign,
        badge: "Finance",
        badgeColor: "bg-emerald-500/90",
      },
      {
        title: "Mortgage Calculator",
        description: "Calculate monthly mortgage payments including principal, interest, taxes, insurance, and HOA fees for homebuyers",
        href: "/calculator/mortgage-calculator",
        icon: DollarSign,
        badge: "Popular",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Compound Interest Calculator",
        description: "Calculate investment growth with compound interest including regular contributions and different compounding frequencies",
        href: "/calculator/compound-interest",
        icon: TrendingUp,
        badge: "Investment",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "Retirement Calculator",
        description: "Plan your retirement with confidence by calculating savings needed, retirement income, and withdrawal strategies",
        href: "/calculator/retirement-calculator",
        icon: DollarSign,
        badge: "Planning",
        badgeColor: "bg-purple-500/90",
      },
      {
        title: "Salary Calculator",
        description: "Convert between hourly, daily, weekly, monthly, and annual salary with tax deductions and net pay calculations",
        href: "/calculator/salary-calculator",
        icon: DollarSign,
        badge: "Career",
        badgeColor: "bg-emerald-500/90",
      },
      {
        title: "Tax Calculator",
        description: "Calculate federal and state income taxes, estimate tax refunds, and optimize your tax strategy for the year",
        href: "/calculator/tax-calculator",
        icon: DollarSign,
        badge: "Finance",
        badgeColor: "bg-orange-500/90",
      },
      {
        title: "Investment Calculator",
        description: "Calculate investment returns, compare options, and plan investment strategy with detailed projections and analysis",
        href: "/calculator/investment-calculator",
        icon: TrendingUp,
        badge: "Wealth",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "GPA Calculator",
        description: "Calculate semester GPA, cumulative GPA, and weighted GPA with support for different grading scales and systems",
        href: "/calculator/gpa-calculator",
        icon: Star,
        badge: "Students",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Calorie Calculator",
        description: "Calculate daily calorie needs based on age, gender, activity level, and fitness goals with macro breakdowns",
        href: "/calculator/calorie-calculator",
        icon: Activity,
        badge: "Health",
        badgeColor: "bg-pink-500/90",
      },
      {
        title: "BMR Calculator",
        description: "Calculate your Basal Metabolic Rate to understand daily calorie burn at rest using multiple proven formulas",
        href: "/calculator/bmr-calculator",
        icon: Activity,
        badge: "Health",
        badgeColor: "bg-pink-500/90",
      },
      {
        title: "Body Fat Calculator",
        description: "Estimate body fat percentage using multiple methods including measurements and visual estimation charts",
        href: "/calculator/body-fat-calculator",
        icon: Activity,
        badge: "Fitness",
        badgeColor: "bg-purple-500/90",
      },
      {
        title: "Pregnancy Calculator",
        description: "Calculate due date, pregnancy timeline, and fetal development milestones based on last menstrual period",
        href: "/calculator/pregnancy-calculator",
        icon: Heart,
        badge: "Health",
        badgeColor: "bg-pink-500/90",
      },
      {
        title: "Love Calculator",
        description: "Calculate love compatibility percentage based on names for fun entertainment and relationship insights",
        href: "/calculator/love-calculator",
        icon: Heart,
        badge: "Fun",
        badgeColor: "bg-red-500/90",
      },
    ],
  },
  {
    id: "ai-tools",
    name: "AI-Powered Tools",
    description: "Intelligent tools powered by artificial intelligence",
    icon: Sparkles,
    href: "/ai-tools",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-purple-500/20",
    iconColor: "text-foreground",
    glowColor: "hover:shadow-purple-500/20",
    tools: [
      {
        title: "AI QR Code Generator",
        description: "Create stunning, branded QR codes with AI-powered customization and artistic styling. Perfect for marketing campaigns, business cards, and promotional materials with custom colors, logos, and designs that remain perfectly scannable",
        href: "/ai-tools/qr-generator",
        icon: QrCode,
        badge: "Popular",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "AI Lyrics Generator",
        description: "Generate creative, original song lyrics for any genre instantly. Perfect for songwriters, musicians, and content creators with proper rhyme schemes, rhythm patterns, and thematic consistency across all music styles",
        href: "/ai-tools/lyrics-generator",
        icon: Music,
        badge: "New",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "AI Caption Generator",
        description: "Create engaging captions for social media posts automatically with AI. Generate multiple caption options with hashtags and emojis for Instagram, Facebook, Twitter, and LinkedIn to boost engagement across all platforms",
        href: "/ai-tools/caption-generator",
        icon: Hash,
        badge: "Trending",
        badgeColor: "bg-orange-500/90",
      },
      {
        title: "AI Pet Name Generator",
        description: "Discover unique, creative names for your pets using advanced AI. Get personalized suggestions based on species, breed, personality, and appearance with cute, funny, elegant, or culturally inspired options",
        href: "/ai-tools/pet-names",
        icon: Heart,
        badge: "Fun",
        badgeColor: "bg-pink-500/90",
      },
    ],
  },
  {
    id: "converters",
    name: "Smart Converters",
    description: "Convert between units, formats, and currencies instantly",
    icon: Wrench,
    href: "/converters",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    glowColor: "hover:shadow-emerald-500/20",
    tools: [
      {
        title: "Currency Converter",
        description: "Real-time currency conversion for 150+ world currencies with live exchange rates updated every minute for accurate international transactions",
        href: "/converters/currency",
        icon: DollarSign,
        badge: "Live",
        badgeColor: "bg-red-500/90",
      },
      {
        title: "Text Case Converter",
        description: "Transform text between uppercase, lowercase, title case, sentence case, camelCase, snake_case, and kebab-case formats instantly",
        href: "/converters/text-case",
        icon: Type,
        badge: "Popular",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Length Converter",
        description: "Convert between all major length units including meters, feet, inches, kilometers, miles, yards, and centimeters with precision",
        href: "/converters/length",
        icon: Ruler,
        badge: "Quick",
        badgeColor: "bg-purple-500/90",
      },
      {
        title: "Temperature Converter",
        description: "Convert between Celsius, Fahrenheit, Kelvin, and Rankine temperature scales with instant accurate results for any value",
        href: "/converters/temperature",
        icon: Thermometer,
        badge: "Fast",
        badgeColor: "bg-orange-500/90",
      },
      {
        title: "File Size Converter",
        description: "Convert between bytes, KB, MB, GB, TB, and other digital storage units with precise calculations for file sizes",
        href: "/converters/file-size",
        icon: FileText,
        badge: "Digital",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Timezone Converter",
        description: "Convert time between different time zones worldwide with daylight saving time support and city-based timezone selection",
        href: "/converters/timezone",
        icon: Globe,
        badge: "Time",
        badgeColor: "bg-heading-accent/90",
      },
    ],
  },
  {
    id: "dev-tools",
    name: "Developer Tools",
    description: "Professional tools for developers and designers",
    icon: Code,
    href: "/dev-tools",
    borderColor: "border-border/40",
    hoverBorder: "hover:border-border/80",
    iconBg: "bg-orange-500/20",
    iconColor: "text-foreground",
    glowColor: "hover:shadow-orange-500/20",
    tools: [
      {
        title: "Color Palette Generator",
        description: "Generate beautiful, harmonious color schemes instantly with complementary, analogous, and triadic color combinations for web design",
        href: "/dev-tools/color-palette",
        icon: Palette,
        badge: "Design",
        badgeColor: "bg-pink-500/90",
      },
      {
        title: "Hex to RGB Converter",
        description: "Convert between HEX, RGB, HSL, and other color formats instantly with live preview for web development and design",
        href: "/dev-tools/hex-to-rgb",
        icon: Palette,
        badge: "Colors",
        badgeColor: "bg-purple-500/90",
      },
      {
        title: "JSON to CSV Converter",
        description: "Convert JSON data to CSV format quickly and accurately for data analysis, Excel import, and spreadsheet processing",
        href: "/dev-tools/json-to-csv",
        icon: FileText,
        badge: "Popular",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "JWT Decoder",
        description: "Decode and inspect JSON Web Tokens securely in your browser without sending data to external servers for privacy",
        href: "/dev-tools/jwt-decoder",
        icon: Code,
        badge: "Security",
        badgeColor: "bg-red-500/90",
      },
      {
        title: "Regex Tester",
        description: "Test regular expressions with live results and instant pattern matching for debugging regex patterns and validation",
        href: "/dev-tools/regex-tester",
        icon: Search,
        badge: "Advanced",
        badgeColor: "bg-purple-500/90",
      },
      {
        title: "HTML Beautifier",
        description: "Format and beautify HTML code with proper indentation and structure for better readability and code quality",
        href: "/dev-tools/html-beautifier",
        icon: Code,
        badge: "Format",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "HTML to Markdown",
        description: "Convert HTML content to Markdown format instantly for documentation, README files, and content management systems",
        href: "/dev-tools/html-to-markdown",
        icon: FileText,
        badge: "Convert",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Markdown Previewer",
        description: "Preview Markdown content in real-time with live rendering and syntax highlighting for documentation and writing",
        href: "/dev-tools/markdown-previewer",
        icon: FileText,
        badge: "Preview",
        badgeColor: "bg-orange-500/90",
      },
    ],
  },
  {
    id: "image-tools",
    name: "Image Tools",
    description: "Professional image editing powered by AI",
    icon: Image,
    href: "/image-tools",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-pink-500/20",
    iconColor: "text-foreground",
    glowColor: "hover:shadow-pink-500/20",
    tools: [
      {
        title: "Background Remover",
        description: "Remove backgrounds automatically with AI-powered precision for product photos, profile pictures, and marketing materials with professional results",
        href: "/image-tools/image-background-remover",
        icon: Image,
        badge: "AI",
        badgeColor: "bg-purple-500/90",
      },
      {
        title: "Image Blur Tool",
        description: "Blur sensitive areas for privacy protection including faces, license plates, personal information, and confidential data in screenshots",
        href: "/image-tools/image-blur",
        icon: Image,
        badge: "Privacy",
        badgeColor: "bg-blue-500/90",
    },
    {
      title: "Image to Text (OCR)",
        description: "Extract text from images with high-accuracy OCR technology to convert scanned documents, screenshots, and photos into editable text",
      href: "/image-tools/image-to-text",
        icon: FileText,
        badge: "OCR",
        badgeColor: "bg-heading-accent/90",
      },
    ],
  },
  {
    id: "pdf-tools",
    name: "PDF Tools",
    description: "Complete PDF management solution",
      icon: FileText,
    href: "/pdf-tools",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
    glowColor: "hover:shadow-indigo-500/20",
    tools: [
      {
        title: "PDF to Word Converter",
        description: "Convert PDF to editable Word documents without losing formatting, fonts, images, and tables for editing contracts and reports",
        href: "/pdf-tools/pdf-word-converter",
        icon: FileText,
        badge: "Popular",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "PDF Compressor",
        description: "Reduce PDF file size up to 90% efficiently while maintaining quality for email attachments and faster uploads without quality loss",
        href: "/pdf-tools/pdf-compressor",
        icon: FileText,
        badge: "Optimize",
        badgeColor: "bg-orange-500/90",
      },
      {
        title: "PDF to Image",
        description: "Convert PDF pages to high-quality JPG, PNG images for sharing specific pages, creating thumbnails, or extracting visuals easily",
        href: "/pdf-tools/pdf-to-image",
        icon: Image,
        badge: "Convert",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "Sign PDF",
        description: "Add secure digital signatures to PDFs directly in browser for contracts and documents electronically without printing",
        href: "/pdf-tools/pdf-sign",
        icon: FileText,
        badge: "Secure",
        badgeColor: "bg-red-500/90",
      },
      {
        title: "Merge & Split PDF",
        description: "Combine multiple PDFs or split them into separate files by page ranges with drag-and-drop interface for easy document organization",
        href: "/pdf-tools/pdf-splitter-merger",
        icon: FileText,
        badge: "Pro",
        badgeColor: "bg-purple-500/90",
      },
    ],
  },
  {
    id: "seo-tools",
    name: "SEO Tools",
    description: "Optimize content for search engines",
    icon: Search,
    href: "/seo-tools",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-foreground",
    glowColor: "hover:shadow-yellow-500/20",
    tools: [
      {
        title: "Meta Tag Generator",
        description: "Generate SEO-optimized meta tags to improve search rankings and click-through rates with perfect title tags and descriptions",
        href: "/seo-tools/meta-tags",
        icon: Code,
        badge: "SEO",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Keyword Density Checker",
        description: "Analyze keyword density in content to optimize for search engines and ensure proper keyword distribution without over-optimization",
        href: "/seo-tools/keyword-density",
        icon: Search,
        badge: "Analytics",
        badgeColor: "bg-purple-500/90",
      },
      {
        title: "Lorem Ipsum Generator",
        description: "Generate placeholder text for design mockups and website layouts in various lengths to visualize designs with realistic content",
        href: "/seo-tools/lorem-ipsum",
        icon: FileText,
        badge: "Content",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "Blog Title Generator",
        description: "Create catchy, SEO-friendly titles that boost engagement and traffic with click-worthy headlines optimized for search engines",
        href: "/seo-tools/blog-titles",
        icon: Sparkles,
        badge: "Creative",
        badgeColor: "bg-pink-500/90",
      },
      {
        title: "Hashtag Generator",
        description: "Generate trending hashtags for social media posts to boost engagement and reach across Instagram, Twitter, TikTok and more",
        href: "/seo-tools/hashtags",
        icon: Hash,
        badge: "Viral",
        badgeColor: "bg-pink-500/90",
      },
    ],
  },
  {
    id: "social-media",
    name: "Social Media Tools",
    description: "Powerful social media management tools",
    icon: Globe,
    href: "/social-media-tools",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-foreground",
    glowColor: "hover:shadow-cyan-500/20",
    tools: [
      {
        title: "Instagram DP Viewer",
        description: "View and download Instagram profile pictures in full resolution HD quality without login or registration required for any public profile",
        href: "/social-media-tools/instagram-dp",
        icon: Download,
        badge: "Popular",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "TikTok Video Downloader",
        description: "Download TikTok videos without watermark in HD quality for offline viewing, content creation, and sharing across platforms",
        href: "/social-media-tools/tiktok-downloader",
        icon: Download,
        badge: "Trending",
        badgeColor: "bg-red-500/90",
      },
      {
        title: "YouTube Thumbnail Downloader",
        description: "Download YouTube thumbnails in HD and all available sizes for analysis, inspiration, and content creation workflow",
        href: "/social-media-tools/youtube-thumbnail",
        icon: Download,
        badge: "YouTube",
        badgeColor: "bg-orange-500/90",
    },
    {
      title: "Hashtag Generator",
        description: "Generate trending hashtags for posts to maximize reach and engagement across Instagram, Twitter, TikTok, and other platforms",
        href: "/social-media-tools/hashtag-counter",
        icon: Hash,
        badge: "Viral",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "YouTube Tags Extractor",
        description: "Extract tags from any YouTube video to understand SEO strategy and optimize your own content for better discoverability",
        href: "/social-media-tools/youtube-tags",
        icon: Hash,
        badge: "SEO",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "YouTube Channel Checker",
        description: "Check if your desired YouTube channel name is available before creating your account with real-time availability checking",
        href: "/social-media-tools/channel-checker",
        icon: Search,
        badge: "New",
        badgeColor: "bg-green-500/90",
      },
      {
        title: "Link in Bio Tool",
        description: "Create beautiful single-page link-in-bio sites for Instagram and TikTok with customizable themes and analytics tracking",
        href: "/social-media-tools/link-in-bio",
        icon: Globe,
        badge: "Creator",
        badgeColor: "bg-purple-500/90",
      },
    ],
  },
]

// Category Section Component
function CategorySection({ category }: { category: typeof categories[0] }) {
  const IconComponent = category.icon

  return (
    <section className="mb-16">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className={`p-3.5 rounded-xl ${category.iconBg} border ${category.borderColor}`}>
            <IconComponent className={`h-7 w-7 ${category.iconColor}`} />
                            </div>
                            <div>
            <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
            <p className="text-sm text-muted-foreground mt-0.5">{category.description}</p>
                            </div>
                          </div>
                            </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {category.tools.map((tool) => {
          const ToolIcon = tool.icon
          return (
            <Link key={tool.href} href={tool.href} className="group">
              <div className={`relative h-full rounded-xl border-2 ${category.borderColor} ${category.hoverBorder} bg-[#1E293B] p-6 space-y-4 transition-all duration-300 ${category.glowColor} hover:shadow-xl`}>
                {/* Badge and Icon */}
                <div className="flex items-start justify-between">
                  <div className={`${tool.badgeColor} px-2.5 py-1 rounded-md text-white text-xs font-semibold`}>
                    {tool.badge}
                            </div>
                  <div className={`p-2.5 rounded-lg ${category.iconBg} border ${category.borderColor}`}>
                    <ToolIcon className={`h-5 w-5 ${category.iconColor}`} />
                            </div>
                          </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                            </div>

                {/* Try Now */}
                <div className="flex items-center gap-2 text-primary font-semibold text-sm pt-1">
                  <span>Try Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                            </div>
                </Link>
          )
        })}
                        </div>

      {/* View All Button - Bottom Center */}
      <div className="flex justify-center mt-8">
        <Link href={category.href}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg gap-2 px-8">
            View All
            <ArrowRight className="h-5 w-5" />
          </Button>
                </Link>
                        </div>
    </section>
  )
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FastTools - Free Online Tools | AI Generator, Calculator, Converter & SEO Tools",
    description: "FastTools offers 1000+ free online tools: AI meme generator, currency converter, BMI calculator, meta tag generator, TikTok downloader, JWT decoder. Fast, accurate, no registration required.",
    url: "https://www.fasttools.store",
    keywords: [
      "fasttools",
      "fast tools",
      "free online tools",
      "free fast tools",
      "online tools platform",
      "web tools",
      "productivity tools",
      "AI tools",
      "meme generator",
      "caption generator",
      "currency converter",
      "text case converter",
      "unit converter",
      "online calculator",
      "free calculator",
      "calculator tools",
      "free seo tools",
      "meta tag generator",
      "keyword density checker",
      "image tools",
      "image to text",
      "finance tools",
      "budget calculator",
      "loan calculator",
      "social media tools",
      "tiktok downloader",
      "youtube tools",
      "developer tools",
      "JWT decoder",
      "regex tester",
      "date tools",
      "time tools",
      "age calculator",
      "fun tools",
      "love calculator",
      "birthday countdown",
      "age calculator",
      "BMI calculator", 
      "loan EMI calculator",
      "mortgage calculator",
      "compound interest calculator",
      "tax calculator",
      "retirement calculator",
      "retirement planner",
      "retirement planner vs financial planner",
      "retirement planner vs financial advisor",
      "new retirement planner vs maxifi planner",
      "maxifi planner vs new retirement",
      "investment calculator",
      "calorie calculator",
      "percentage calculator",
      "AI meme generator",
      "AI caption generator",
      "AI lyrics generator",
      "AI hashtag generator",
      "AI pet name generator",
      "meta tag generator",
      "keyword density checker",
      "blog title generator",
      "lorem ipsum generator",
      "QR code generator",
      "PDF tools",
      "color picker",
      "word counter",
      "character counter",
      "random number generator",
      "free color palettes",
      "color palette library",
      "invoice generator",
      "online tools free",
      "web based tools",
      "browser tools",
      "instant tools",
      "no download tools",
      "digital tools",
      "web applications",
      "online utilities",
      "free web apps",
      "browser utilities",
      "online software",
      "web services",
      "digital utilities",
      "online generators",
      "web calculators",
      "online converters",
      "free generators",
      "web formatters",
      "online validators",
      "web analyzers",
      "digital converters",
      "online processors",
      "web editors",
      "online formatters",
      "digital calculators",
      "web validators",
      "online analyzers",
      "free web tools",
      "instant web tools",
      "no registration tools",
      "privacy focused tools",
      "secure online tools",
      "fast web tools",
      "reliable online tools",
      "professional web tools",
      "business web tools",
      "marketing tools online",
      "content creation tools",
      "productivity web tools",
      "efficiency tools",
      "workflow tools",
      "automation tools",
      "digital productivity",
      "online efficiency",
      "web productivity",
      "digital workflow",
      "online automation",
      "web efficiency",
      "digital solutions",
      "online solutions",
      "web solutions",
      "digital services",
      "online services",
      "web services free",
      "digital platform",
      "online platform",
      "web platform",
      "tool platform",
      "utility platform",
      "conversion platform",
      "calculation platform",
      "generation platform",
      "processing platform",
      "analysis platform",
      "optimization platform",
      "automation platform",
      "productivity platform",
      "efficiency platform",
      "workflow platform",
      "digital toolkit",
      "online toolkit",
      "web toolkit",
      "professional toolkit",
      "business toolkit",
      "marketing toolkit",
      "content toolkit",
      "development toolkit",
      "design toolkit",
      "finance toolkit",
      "social media toolkit",
      "SEO toolkit",
      "analytics toolkit",
      "conversion toolkit",
      "automation toolkit",
      "productivity toolkit",
      "efficiency toolkit",
      "workflow toolkit",
      "digital resources",
      "online resources",
      "web resources",
      "free resources",
      "digital assets",
    ],
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: "https://www.fasttools.store/logo.svg",
      description: "Leading provider of free online tools and utilities for productivity, conversion, and content creation"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: "https://www.fasttools.store/logo.svg"
    },
    datePublished: "2024-01-01",
    dateModified: "2025-01-15",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    audience: {
      "@type": "Audience",
      audienceType: "General Public"
    },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main"
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
          name: "Free Online Tools",
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Digital Toolkit",
          item: "https://www.fasttools.store"
        }
      ]
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.fasttools.store/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    about: {
      "@type": "Thing",
      name: "Free Online Tools",
      description: "Comprehensive collection of free online tools and utilities for productivity, conversion, and content creation"
    },
    isPartOf: {
      "@type": "WebSite",
      name: "fasttools",
      url: "https://www.fasttools.store"
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What AI tools are available for free content generation?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our free AI tools include AI caption generator for social media posts, AI meme generator for viral content, AI hashtag suggester for better reach, AI song lyrics generator for creative writing, and AI pet name generator for naming pets. All tools use advanced AI technology to generate high-quality, relevant content instantly without any cost."
          }
        },
        {
          "@type": "Question",
          name: "How accurate are the currency exchange rates in your converter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our currency converter provides real-time exchange rates updated every minute from reliable financial data sources. We support 160+ currencies including USD, EUR, GBP, JPY, and more. The rates are accurate for travel, business, and investment purposes, with historical data and trend analysis available for informed decision-making."
          }
        },
        {
          "@type": "Question",
          name: "What financial calculators can help with loan and investment planning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer comprehensive financial calculators including loan calculator for mortgage planning, EMI calculator for monthly payments, investment calculator for returns analysis, retirement calculator for long-term planning, compound interest calculator for savings growth, and tax calculator for income tax estimation. All calculators use professional-grade formulas compatible with BA II Plus and HP 12CP financial calculators."
          }
        },
        {
          "@type": "Question",
          name: "How can SEO tools improve my website's search engine rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our SEO tools help optimize your website with meta tag generator for better search snippets, keyword density checker for content optimization, hashtag generator for social media reach, and blog title generator for click-worthy headlines. These tools analyze your content, suggest improvements, and help you rank higher in Google search results for better organic traffic."
          }
        },
        {
          "@type": "Question",
          name: "What image processing tools are available for free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our image tools include image cropper for resizing and cropping photos, image converter for format conversion, image to text OCR for extracting text from images, background blur for photo editing, and QR code generator for creating QR codes. All tools work in your browser without uploading files, ensuring complete privacy and security."
          }
        },
        {
          "@type": "Question",
          name: "What developer tools can help with coding and web development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our developer tools include HTML beautifier for code formatting, JSON formatter for data validation, regex tester for pattern matching, JWT decoder for token analysis, base64 encoder/decoder for data encoding, and 1000+ free color palettes with HEX codes for design. These tools help developers write better code, debug more effectively, and streamline their development workflow."
          }
        },
        {
          "@type": "Question",
          name: "Is my data safe when using these online tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, your data is completely safe. All our tools process data locally in your browser without uploading files to our servers. We use privacy-first architecture where sensitive information like documents, images, and personal data never leaves your device. No registration required, no data collection, and no tracking - just pure, secure tool functionality."
          }
        },
        {
          "@type": "Question",
          name: "What categories of tools are available on FastTools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer 10+ categories including AI Tools for content generation, Calculators for financial planning, Converters for data transformation, SEO Tools for website optimization, Image Tools for photo editing, Developer Tools for coding, Finance Tools for business calculations, Social Media Tools for marketing, and Fun Tools for entertainment. Each category contains 15-50+ specialized tools for different use cases."
          }
        },
        {
          "@type": "Question",
          name: "Can businesses use these tools for professional purposes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely! Our tools are designed for professional use with business-grade accuracy and reliability. Many businesses use our financial calculators for loan analysis, currency converter for international trade, SEO tools for digital marketing, AI tools for content creation, and developer tools for web development. All tools are free for commercial use with no restrictions or watermarks."
          }
        },
        {
          "@type": "Question",
          name: "Do these tools work on mobile devices and tablets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all our tools are mobile-optimized and work perfectly on smartphones, tablets, and desktop computers. Our responsive design ensures optimal performance across all devices with touch-friendly interfaces, fast loading times, and offline functionality for many tools. Access your favorite tools anywhere, anytime without any app downloads or installations."
          }
        },
        {
          "@type": "Question",
          name: "What digital tool can help me manage team projects effectively?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For effective team project management, we recommend using our project planning tools combined with collaboration utilities. Our calculator tools help with scheduling and deadlines, calculator tools for budget planning and resource allocation, and document generators for creating project reports and invoices. These tools integrate seamlessly with popular project management platforms like Trello, Asana, and Monday.com for comprehensive team coordination."
          }
        },
        {
          "@type": "Question",
          name: "Which software offers the best cloud storage solutions for businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While we don't provide cloud storage directly, our file conversion tools and document processors work perfectly with all major cloud storage providers like Google Drive, Dropbox, OneDrive, and Box. Our file size converter helps optimize files for cloud storage, image tools compress photos for faster uploads, and PDF tools manage documents efficiently. These tools ensure your files are properly formatted and optimized before uploading to any cloud storage service."
          }
        },
        {
          "@type": "Question",
          name: "Where can I find reliable digital marketing automation services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our SEO tools and social media tools provide essential automation support for digital marketing. Use our hashtag generator for consistent social media posting, meta tag generator for automated SEO optimization, blog title generator for content planning, and AI caption generator for automated social media content creation. These tools integrate with marketing platforms like Hootsuite, Buffer, and Mailchimp to streamline your digital marketing workflow."
          }
        },
        {
          "@type": "Question",
          name: "What platform should I use for secure online video conferencing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For secure video conferencing, we recommend established platforms like Zoom, Microsoft Teams, or Google Meet. Our time zone converter helps schedule meetings across different time zones, date calculator for meeting planning, and calendar tools for scheduling coordination. While we don't provide video conferencing directly, our productivity tools enhance your meeting experience with better scheduling, time management, and collaboration features."
          }
        },
        {
          "@type": "Question",
          name: "Which service provides top-rated customer relationship management tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For CRM functionality, we recommend platforms like Salesforce, HubSpot, or Pipedrive. Our tools complement CRM systems with invoice generator for customer billing, email tools for customer communication, document generators for proposals and contracts, and calculator tools for pricing and financial analysis. These tools integrate seamlessly with CRM platforms to enhance customer relationship management and streamline business processes."
          }
        },
        {
          "@type": "Question",
          name: "What is the best digital platform for creating and sending email campaigns?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For email campaigns, we recommend platforms like Mailchimp, Constant Contact, or SendGrid. Our tools enhance email marketing with AI caption generator for compelling subject lines, text case converter for consistent formatting, HTML tools for email template creation, and image tools for optimizing email graphics. These tools help create professional, engaging email campaigns that drive better open rates and conversions."
          }
        },
        {
          "@type": "Question",
          name: "Where can I get a user-friendly accounting software for small businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For small business accounting, we recommend QuickBooks, FreshBooks, or Wave. Our finance tools complement accounting software with invoice generator for professional billing, tax calculator for tax planning, expense tracker for financial management, and calculator tools for financial analysis. These tools integrate with accounting platforms to provide comprehensive financial management solutions for small businesses."
          }
        },
        {
          "@type": "Question",
          name: "Which app offers the most efficient time-tracking features for freelancers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For freelancer time tracking, we recommend Toggl, Harvest, or Clockify. Our calculator tools enhance time tracking with date difference calculator for project planning, time duration calculator for accurate billing, invoice generator for time-based billing, and productivity tools for task management. These tools help freelancers track time accurately, bill clients properly, and manage projects efficiently."
          }
        },
        {
          "@type": "Question",
          name: "What service can help me design professional graphics without experience?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For graphic design without experience, we recommend Canva, Figma, or Adobe Express. Our image tools support graphic design with image cropper for resizing, 1000+ free color palettes with HEX codes for color schemes, QR code generator for marketing materials, and image converter for format optimization. These tools work alongside design platforms to help create professional graphics, social media posts, and marketing materials without design expertise."
          }
        },
        {
          "@type": "Question",
          name: "Which digital tool should I choose for scheduling social media posts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For social media scheduling, we recommend Hootsuite, Buffer, or Later. Our social media tools enhance scheduling with hashtag generator for better reach, AI caption generator for engaging content, image tools for post optimization, and analytics tools for performance tracking. These tools integrate with scheduling platforms to create compelling social media content, optimize posting times, and maximize engagement across all platforms."
          }
        }
      ]
    }
  }

  return (
    <div className="bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section - Background with Orange Text */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-background">
        {/* Hero Background Image */}
        <HeroSectionBg />
        
        <div className="container mx-auto max-w-6xl relative z-10 py-12 sm:py-16 md:py-20">
          <div className="text-center space-y-8 sm:space-y-10">
            {/* Main Heading - Orange Text with Highlights */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tight px-2">
                <span className="block">
                  Access <span className="relative inline-block px-1">
                    <span className="relative z-10">1000+</span>
                    <span className="absolute bottom-0 left-0 right-0 h-full bg-pink-600/40 rounded -rotate-1"></span>
                  </span> tools.
                </span>
                <span className="block">
                  Get work done <span className="relative inline-block px-1">
                    <span className="relative z-10">faster</span>
                    <span className="absolute bottom-0 left-0 right-0 h-full bg-heading-accent/40 rounded rotate-1"></span>
                  </span>.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-medium max-w-4xl mx-auto leading-relaxed px-4">
                No registration needed. All tools are free forever and process everything locally in your browser for complete privacy and security.
                </p>
              </div>

            {/* Interactive Stats Display */}
            <div className="pt-6 sm:pt-8 md:pt-12 pb-6 sm:pb-8">
              <div className="inline-flex items-center gap-2 text-foreground text-xs md:text-sm font-semibold mb-6">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Trusted by professionals worldwide</span>
                <span className="sm:hidden">Trusted Worldwide</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 lg:gap-16 max-w-4xl mx-auto px-4">
                {/* Stat 1 */}
                <div className="group cursor-default">
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500/5 rounded-2xl blur-xl group-hover:bg-orange-500/10 transition-all"></div>
                    <div className="relative space-y-1 md:space-y-2">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-foreground tracking-tight">5M+</div>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground/70" />
                        <div className="text-[10px] sm:text-xs md:text-base font-bold text-foreground uppercase tracking-wide text-center">Active Users</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="group cursor-default">
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500/5 rounded-2xl blur-xl group-hover:bg-orange-500/10 transition-all"></div>
                    <div className="relative space-y-1 md:space-y-2">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-foreground tracking-tight">1000+</div>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground/70" />
                        <div className="text-[10px] sm:text-xs md:text-base font-bold text-foreground uppercase tracking-wide text-center">Pro Tools</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="group cursor-default">
                  <div className="relative">
                    <div className="absolute inset-0 bg-orange-500/5 rounded-2xl blur-xl group-hover:bg-orange-500/10 transition-all"></div>
                    <div className="relative space-y-1 md:space-y-2">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black text-foreground tracking-tight">100%</div>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                        <Shield className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-foreground/70" />
                        <div className="text-[10px] sm:text-xs md:text-base font-bold text-foreground uppercase tracking-wide text-center">Free Forever</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-8 sm:pt-12">
              <Link href="#tools" className="group inline-flex flex-col items-center gap-2 sm:gap-3 text-foreground hover:text-primary transition-colors">
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider">Explore Tools</div>
                <div className="flex flex-col items-center animate-bounce">
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 rotate-90" />
                        </div>
              </Link>
              </div>
            </div>
          </div>
        </section>

      {/* About FastTools - Complete Tools Directory */}
      <section id="tools" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4">
        <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              COMPLETE TOOLS DIRECTORY
                </div>
            
            <GHeader 
              title="Every Tool We Offer"
              description="Discover professional-grade tools designed to supercharge your productivity and creativity"
              titleSize="medium"
              descriptionSize="small"
            />
                    </div>

          {/* Display All Categories with All Tools */}
          {categories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <div key={category.id} className="mb-12 sm:mb-16">
                <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2">
                  <div className={`p-2 sm:p-3.5 rounded-xl ${category.iconBg} border ${category.borderColor}`}>
                    <CategoryIcon className={`h-5 w-5 sm:h-7 sm:w-7 ${category.iconColor}`} />
                      </div>
                      <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{category.name}</h3>
                    <p className="text-xs sm:text-sm text-foreground/80 mt-0.5">{category.description}</p>
                      </div>
                    </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 px-2">
                  {category.tools.map((tool, i) => {
                    const ToolIcon = tool.icon
                    return (
                      <Link key={i} href={tool.href} className="group">
                        <div className={`relative h-full rounded-xl border-2 ${category.borderColor} ${category.hoverBorder} bg-card p-4 sm:p-6 space-y-3 sm:space-y-4 transition-all duration-300 hover:shadow-xl ${category.glowColor}`}>
                          <div className="flex items-start justify-between">
                            <div className={`${tool.badgeColor} px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-white text-[10px] sm:text-xs font-semibold`}>
                              {tool.badge}
                      </div>
                            <div className={`p-2 sm:p-2.5 rounded-lg ${category.iconBg} border ${category.borderColor}`}>
                              <ToolIcon className={`h-4 w-4 sm:h-5 sm:w-5 ${category.iconColor}`} />
                      </div>
                    </div>
                          <div className="space-y-2 sm:space-y-2.5">
                            <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                              {tool.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {tool.description}
                        </p>
                      </div>
                          <div className="flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm pt-1">
                            <span>Try Now</span>
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                      </div>
                      </Link>
                    )
                  })}
                      </div>
                <div className="flex justify-center mt-6 sm:mt-8">
                  <Link href={category.href}>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg gap-2 px-6 sm:px-8">
                      View All
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </Button>
                  </Link>
                    </div>
                      </div>
            )
          })}
          </div>
        </section>

        {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-8 md:mb-12">
            <GHeader 
              title="FAQ"
              description="Find quick answers to common questions about FastTools. Get instant clarity on features, pricing, security, and how to make the most of our 1000+ free online tools. Everything you need to know in one place."
              titleSize="large"
              descriptionSize="medium"
              color="green"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 px-2">
            {[
              {
                number: "01",
                question: "Do I need to create an account to use FastTools?",
                answer: "No! All tools are completely free and require no registration. Simply visit any tool and start using it immediately. Your privacy is our priority, and we never require personal information."
              },
              {
                number: "02",
                question: "Are the tools really 100% free forever?",
                answer: "Yes, absolutely! All 1000+ tools are completely free with no hidden costs, no trial periods, and no premium tiers. We believe powerful tools should be accessible to everyone without barriers."
              },
              {
                number: "03",
                question: "Is my data safe when using FastTools?",
                answer: "Completely safe! All processing happens locally in your browser. Your files and data never leave your device or get uploaded to our servers. We don't track, store, or share any of your information."
              },
              {
                number: "04",
                question: "Can I use FastTools on mobile devices?",
                answer: "Yes! All tools are fully responsive and work seamlessly on smartphones, tablets, laptops, and desktop computers. Access FastTools from any device with a modern web browser."
              },
              {
                number: "05",
                question: "How fast are the tools?",
                answer: "Lightning fast! Most tools load and process in under 0.1 seconds. We've optimized every tool for maximum performance and minimal loading times, ensuring you get instant results."
              },
              {
                number: "06",
                question: "What types of tools does FastTools offer?",
                answer: "We offer 1000+ tools across multiple categories: AI generators (QR codes, lyrics, captions), calculators (BMI, loan, mortgage), converters (currency, text, units), dev tools, image editors, PDF tools, SEO tools, and social media tools."
              },
            ].map((faq, i) => (
              <div 
                key={i} 
                className="bg-card backdrop-blur-sm rounded-2xl border-2 border-heading-accent-border hover:border-heading-accent-border-hover transition-all overflow-hidden p-4 sm:p-5 md:p-8"
              >
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-heading-accent leading-tight mb-2 sm:mb-3 md:mb-4">{faq.question}</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}