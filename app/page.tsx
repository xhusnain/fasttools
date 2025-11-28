import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GCard } from "@/components/globalcomponents/gcard"
import { PremiumHeroBackground } from "@/components/premium-hero-background"
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
  Youtube,
} from "lucide-react"

export const metadata: Metadata = {
  title: "FastTools - Free Online Tools & Productivity Platform",
  description:
    "FastTools is your ultimate productivity platform offering 1000+ free online tools. Access AI generators, calculators, converters, and SEO tools instantly. No registration required.",
  applicationName: "FastTools",
  authors: [{ name: "FastTools Team", url: "https://www.fasttools.store" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "FastTools",
  publisher: "FastTools",
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
  alternates: {
    canonical: "https://www.fasttools.store",
  },
  category: "productivity",
  openGraph: {
    title: "FastTools | Free Online Tools, Calculators & Generators",
    description:
      "Use FastTools for free online calculators, converters, AI generators, SEO utilities, PDF and image tools in one fast, easy-to-use toolkit.",
    type: "website",
    url: "https://www.fasttools.store/",
    siteName: "FastTools",
  },
}

const categories = [
  {
    id: "calculators",
    name: "Free Online Calculators & Finance Tools",
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
        badgeColor: "bg-primary/90",
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
        badgeColor: "bg-primary/90",
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
    name: "Free AI Tools & Content Generators",
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
        badgeColor: "bg-primary/90",
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
    name: "Online Unit & Currency Converters",
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
        badgeColor: "bg-primary/90",
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
    name: "Web Developer Tools & Utilities",
    description: "Professional tools for developers and designers",
    icon: Code,
    href: "/dev-tools",
    borderColor: "border-border/40",
    hoverBorder: "hover:border-border/80",
    iconBg: "bg-primary/20",
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
        badgeColor: "bg-primary/90",
      },
    ],
  },
  {
    id: "image-tools",
    name: "Free Image Editing & OCR Tools",
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
    name: "Online PDF Converters & Editors",
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
        badgeColor: "bg-primary/90",
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
    name: "Free SEO Analysis & Optimization Tools",
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
    name: "Social Media Downloaders & Tools",
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
        title: "Instagram Downloader",
        description: "Download Instagram posts, reels, and images in HD quality for offline viewing, content creation, and sharing across platforms",
        href: "/social-media-tools/instagram-downloader",
        icon: Download,
        badge: "New",
        badgeColor: "bg-pink-500/90",
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
        badgeColor: "bg-primary/90",
      },
      {
        title: "YouTube Downloader",
        description: "Download YouTube videos in HD quality and extract MP3 audio for offline viewing, content creation, and sharing",
        href: "/social-media-tools/youtube-downloader",
        icon: Youtube,
        badge: "New",
        badgeColor: "bg-red-500/90",
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
  {
    id: "finance-tools",
    name: "Business & Finance Calculators",
    description: "Business-ready calculators for payments, savings, and planning",
    icon: DollarSign,
    href: "/finance-tools",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-foreground",
    glowColor: "hover:shadow-emerald-500/20",
    tools: [
      {
        title: "Invoice Generator",
        description: "Create professional invoices with automatic taxes, discounts, and PDF export in seconds",
        href: "/finance-tools/invoice-generator",
        icon: FileText,
        badge: "Business",
        badgeColor: "bg-primary/90",
      },
      {
        title: "PayPal Fee Calculator",
        description: "Calculate net payouts and required charges after PayPal fees for domestic and international payments",
        href: "/finance-tools/paypal-fee",
        icon: DollarSign,
        badge: "Payments",
        badgeColor: "bg-emerald-500/90",
      },
      {
        title: "Savings Goal Tracker",
        description: "Plan and track savings milestones with projections for vacations, emergency funds, or big purchases",
        href: "/finance-tools/savings-tracker",
        icon: TrendingUp,
        badge: "Savings",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "Bill Splitter",
        description: "Split expenses fairly among friends or teams with tip support and customizable contributions",
        href: "/finance-tools/bill-splitter",
        icon: Users,
        badge: "Groups",
        badgeColor: "bg-purple-500/90",
      },
    ],
  },
  {
    id: "fun-tools",
    name: "Fun & Entertainment Calculators",
    description: "Entertaining tools for celebrations and social content",
    icon: Smile,
    href: "/fun-tools",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-pink-500/20",
    iconColor: "text-foreground",
    glowColor: "hover:shadow-pink-500/20",
    tools: [
      {
        title: "Future Age Predictor",
        description: "See how old you'll be on any future date with precise calculations for birthdays, milestones, and special events",
        href: "/fun-tools/future-age",
        icon: Calendar,
        badge: "Fun",
        badgeColor: "bg-pink-500/90",
      },
      {
        title: "Birthday Countdown",
        description: "Countdown to your next birthday in days, hours, minutes, and seconds with real-time updates and celebration planning",
        href: "/fun-tools/birthday-countdown",
        icon: Heart,
        badge: "Popular",
        badgeColor: "bg-red-500/90",
      },
      {
        title: "Anniversary Calculator",
        description: "Calculate how long you've been together and when your next anniversary is with detailed relationship milestones",
        href: "/fun-tools/anniversary",
        icon: Heart,
        badge: "Love",
        badgeColor: "bg-pink-500/90",
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
        {category.tools.map((tool) => (
          <GCard
            key={tool.href}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            icon={tool.icon}
            badge={tool.badge}
            badgeColor={tool.badgeColor}
            iconBg={category.iconBg}
            iconColor={category.iconColor}
            borderColor={category.borderColor}
            hoverBorder={category.hoverBorder}
            glowColor={category.glowColor}
            ctaText="Try Now"
          />
        ))}
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
    name: "FastTools - Free Online Tools Store | Digital Tools, AI Generator, Calculator, Converter & SEO Tools",
    description: "FastTools is a free online tools store offering 1000+ digital tools including AI generators, calculators, converters, SEO tools, image tools, developer tools, and productivity utilities. Fast, accurate, easy to use digital tools with no registration required. Access tools store online for instant results.",
    url: "https://www.fasttools.store",
    image: "https://www.fasttools.store/banner.png",
    author: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fasttools.store/logo.png",
        width: 320,
        height: 80
      },
      description: "Leading provider of free online tools and utilities for productivity, conversion, and content creation"
    },
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store",
      logo: {
        "@type": "ImageObject",
        url: "https://www.fasttools.store/logo.png",
        width: 320,
        height: 80
      }
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
          name: "Tools Store",
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Free Online Tools Store - Digital Tools",
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
          name: "How to use tool app",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A tool app helps you perform a specific digital task such as editing, generating, or managing files. To use a tool app effectively, start by identifying what problem it solves — for example, resizing images, converting files, or generating content. On FastTools, no account is required — simply visit the tool you need, follow the intuitive interface, and start working immediately. All tools provide instant results with export, save, and sharing options so your output can be used across other platforms."
          }
        },
        {
          "@type": "Question",
          name: "How to use digital tools",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital tools are online applications designed to make your work faster and more efficient. Begin by choosing a reliable tool that matches your goal — such as design, writing, analytics, or automation. On FastTools, you can access 1000+ digital tools without registration. Learn each tool's interface through our simple, user-friendly design, and integrate them into your daily workflow. All our tools work directly in your browser and process data locally, helping you stay organized and productive wherever you work."
          }
        },
        {
          "@type": "Question",
          name: "What are the most used digital tools",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most used digital tools on FastTools include AI generators for content creation (caption generator, lyrics generator, hashtag generator), currency and unit converters for data transformation, financial calculators (loan, mortgage, investment, tax calculators), SEO tools (meta tag generator, keyword density checker), image processing tools (background remover, image converter, OCR), and developer tools (HTML beautifier, JSON formatter, JWT decoder). FastTools offers 1000+ free tools that simplify complex tasks and improve efficiency across all fields — all accessible instantly without registration."
          }
        },
        {
          "@type": "Question",
          name: "How to organize or store your digital tools",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To organize your digital tools, start by categorizing them — for example: design, writing, analytics, and automation. FastTools makes this easy with clear categories like AI Tools, Calculators, Converters, SEO Tools, Image Tools, Developer Tools, and more. Bookmark your favorite FastTools pages in your browser for quick access. Since all tools work directly in your browser without requiring accounts or installations, you can access them instantly from any device. Regularly explore our tool directory to discover new tools that can streamline your workflow and keep your digital toolkit efficient and up-to-date."
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FastTools",
    alternateName: ["fasttools", "fast tools"],
    url: "https://www.fasttools.store",
    description: "FastTools offers 1000+ free online tools including AI generators, converters, calculators, SEO tools, and productivity utilities. Fast, accurate, easy to use, no registration required.",
    publisher: {
      "@type": "Organization",
      name: "FastTools",
      url: "https://www.fasttools.store"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.fasttools.store/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Free Online Tools Collection",
      description: "Comprehensive collection of free online tools and utilities",
      numberOfItems: 1000,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "AI Tools",
          description: "AI-powered content generation tools including meme generators, caption generators, and hashtag suggesters",
          url: "https://www.fasttools.store/ai-tools"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Converter Tools",
          description: "Comprehensive conversion utilities for currency, units, text, and file formats",
          url: "https://www.fasttools.store/converters"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Calculator Tools",
          description: "Financial, business, and general purpose calculators for all your calculation needs",
          url: "https://www.fasttools.store/calculator"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "SEO Tools",
          description: "SEO optimization tools including meta tag generators, keyword density checkers, and content analyzers",
          url: "https://www.fasttools.store/seo-tools"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Image Tools",
          description: "Image processing and editing tools including croppers, converters, and OCR text extraction",
          url: "https://www.fasttools.store/image-tools"
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
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tools Store",
          item: "https://www.fasttools.store"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Free Online Tools Store - Digital Tools",
          item: "https://www.fasttools.store"
        }
      ]
    }
  }

  return (
    <div className="bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Background with Orange Text */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-background">
        {/* Hero Background Image */}
        <PremiumHeroBackground />

        <div className="container mx-auto max-w-6xl relative z-10 py-12 sm:py-16 md:py-20">
          <div className="text-center space-y-8 sm:space-y-10">
            {/* Main Heading - Professional & Trustworthy */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Professional Grade Tools
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[1.1] tracking-tight px-2">
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-2 sm:mb-4 tracking-normal">
                  FastTools: 1000+ Free Online Tools
                </span>
                <span className="block">
                  Build faster with
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary animate-gradient-x pb-2">
                  premium tools.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-medium max-w-3xl mx-auto leading-relaxed px-4">
                Welcome to <strong className="text-foreground">FastTools</strong>, the premier <strong className="text-foreground">online tools platform</strong> designed for efficiency.
                Explore our massive collection of <strong className="text-foreground">web tools</strong> including <strong className="text-foreground">productivity tools</strong>, developer utilities, and AI generators.
                Experience the power of a complete digital toolkit that processes data locally for maximum security and speed.
              </p>
            </div>

            {/* Interactive Stats Display - Trust Indicators */}
            <div className="pt-8 sm:pt-12 pb-8">
              <div className="grid grid-cols-3 gap-4 sm:gap-8 md:gap-12 max-w-4xl mx-auto px-4">
                {/* Trust Indicator 1 */}
                <div className="group cursor-default">
                  <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm sm:text-base font-bold text-foreground">Privacy First</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">Local Processing</div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicator 2 */}
                <div className="group cursor-default">
                  <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                      <Zap className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm sm:text-base font-bold text-foreground">Lightning Fast</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">Instant Results</div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicator 3 */}
                <div className="group cursor-default">
                  <div className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                      <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm sm:text-base font-bold text-foreground">Reliable</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">99.9% Uptime</div>
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
                question: "What AI tools are available for free content generation?",
                answer: "Our free AI tools include AI caption generator for social media posts, AI meme generator for viral content, AI hashtag suggester for better reach, AI song lyrics generator for creative writing, and AI pet name generator for naming pets. All tools use advanced AI technology to generate high-quality, relevant content instantly without any cost."
              },
              {
                number: "02",
                question: "How accurate are the currency exchange rates in your converter?",
                answer: "Our currency converter provides real-time exchange rates updated every minute from reliable financial data sources. We support 160+ currencies including USD, EUR, GBP, JPY, and more. The rates are accurate for travel, business, and investment purposes, with historical data and trend analysis available for informed decision-making."
              },
              {
                number: "03",
                question: "What financial calculators can help with loan and investment planning?",
                answer: "We offer comprehensive financial calculators including loan calculator for mortgage planning, EMI calculator for monthly payments, investment calculator for returns analysis, retirement calculator for long-term planning, compound interest calculator for savings growth, and tax calculator for income tax estimation. All calculators use professional-grade formulas compatible with BA II Plus and HP 12CP financial calculators."
              },
              {
                number: "04",
                question: "How can SEO tools improve my website's search engine rankings?",
                answer: "Our SEO tools help optimize your website with meta tag generator for better search snippets, keyword density checker for content optimization, hashtag generator for social media reach, and blog title generator for click-worthy headlines. These tools analyze your content, suggest improvements, and help you rank higher in Google search results for better organic traffic."
              },
              {
                number: "05",
                question: "What image processing tools are available for free?",
                answer: "Our image tools include image cropper for resizing and cropping photos, image converter for format conversion, image to text OCR for extracting text from images, background blur for photo editing, and QR code generator for creating QR codes. All tools work in your browser without uploading files, ensuring complete privacy and security."
              },
              {
                number: "06",
                question: "What developer tools can help with coding and web development?",
                answer: "Our developer tools include HTML beautifier for code formatting, JSON formatter for data validation, regex tester for pattern matching, JWT decoder for token analysis, base64 encoder/decoder for data encoding, and 1000+ free color palettes with HEX codes for design. These tools help developers write better code, debug more effectively, and streamline their development workflow."
              },
              {
                number: "07",
                question: "Is my data safe when using these online tools?",
                answer: "Yes, your data is completely safe. All our tools process data locally in your browser without uploading files to our servers. We use privacy-first architecture where sensitive information like documents, images, and personal data never leaves your device. No registration required, no data collection, and no tracking - just pure, secure tool functionality."
              },
              {
                number: "08",
                question: "What categories of tools are available on FastTools?",
                answer: "We offer 10+ categories including AI Tools for content generation, Calculators for financial planning, Converters for data transformation, SEO Tools for website optimization, Image Tools for photo editing, Developer Tools for coding, Finance Tools for business calculations, Social Media Tools for marketing, and Fun Tools for entertainment. Each category contains 15-50+ specialized tools for different use cases."
              },
              {
                number: "09",
                question: "Can businesses use these tools for professional purposes?",
                answer: "Absolutely! Our tools are designed for professional use with business-grade accuracy and reliability. Many businesses use our financial calculators for loan analysis, currency converter for international trade, SEO tools for digital marketing, AI tools for content creation, and developer tools for web development. All tools are free for commercial use with no restrictions or watermarks."
              },
              {
                number: "10",
                question: "Do these tools work on mobile devices and tablets?",
                answer: "Yes, all our tools are mobile-optimized and work perfectly on smartphones, tablets, and desktop computers. Our responsive design ensures optimal performance across all devices with touch-friendly interfaces, fast loading times, and offline functionality for many tools. Access your favorite tools anywhere, anytime without any app downloads or installations."
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="group relative bg-card/50 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 overflow-hidden p-6 sm:p-8"
              >
                <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none">
                  <span className="text-9xl font-black text-primary">{faq.number}</span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 pr-4">{faq.question}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

