import Link from "next/link"
import dynamic from "next/dynamic"
import { GButton } from "@/ui/gbutton"
import { GToolCard } from "@/ui/gtool-card"
import { GHeader } from "@/ui/gheader"

import { PremiumHeroBackground } from "@/components/common/premium-hero-background"
const HomeCategories = dynamic(() => import('@/components/common/home-categories').then(mod => ({ default: mod.HomeCategories })), {
  loading: () => <div className="py-24 text-center">Loading tools...</div>
})
const HomeFAQSection = dynamic(() => import('@/components/common/home-faq-section').then(mod => ({ default: mod.HomeFAQSection })), {
  loading: () => <div className="py-20 text-center">Loading FAQ...</div>
})
import {
  Calculator,
  Sparkles,
  Palette,
  Code,
  FileText,
  Search,
  DollarSign,
  Image,
  Smile,
  Globe,
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
  Award,
} from "lucide-react"

import { createMetadata } from "@/lib/metadata-base"

export const metadata = createMetadata({
  title: "FastTools - Free Online Tools & Productivity Platform",
  description:
    "FastTools is your ultimate productivity platform offering 1000+ free online tools. Access AI generators, calculators, converters, and SEO tools instantly. No registration required.",
  path: "/",
  includeSchema: false,
})

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
        href: "/finance-tools/loan-calculator",
        icon: DollarSign,
        badge: "Finance",
        badgeColor: "bg-emerald-500/90",
      },
      {
        title: "Mortgage Calculator",
        description: "Calculate monthly mortgage payments including principal, interest, taxes, insurance, and HOA fees for homebuyers",
        href: "/finance-tools/mortgage-calculator",
        icon: DollarSign,
        badge: "Popular",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Compound Interest Calculator",
        description: "Calculate investment growth with compound interest including regular contributions and different compounding frequencies",
        href: "/finance-tools/compound-interest",
        icon: TrendingUp,
        badge: "Investment",
        badgeColor: "bg-heading-accent/90",
      },
      {
        title: "Retirement Calculator",
        description: "Plan your retirement with confidence by calculating savings needed, retirement income, and withdrawal strategies",
        href: "/finance-tools/retirement-calculator",
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
        href: "/finance-tools/tax-calculator",
        icon: DollarSign,
        badge: "Finance",
        badgeColor: "bg-primary/90",
      },
      {
        title: "Investment Calculator",
        description: "Calculate investment returns, compare options, and plan investment strategy with detailed projections and analysis",
        href: "/finance-tools/investment-calculator",
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
      {
        title: "IP Subnet Calculator",
        description: "Calculate subnet masks, network addresses, and host ranges. Essential tool for network engineers and IT professionals.",
        href: "/calculator/ip-subnet-calculator",
        icon: Activity,
        badge: "IT",
        badgeColor: "bg-slate-500/90",
      },
      {
        title: "Standard Deviation Calculator",
        description: "Calculate mean, variance, and standard deviation. Essential for statistical analysis and data science.",
        href: "/calculator/standard-deviation-calculator",
        icon: Activity,
        badge: "Math",
        badgeColor: "bg-violet-500/90",
      },
      {
        title: "Concrete Calculator",
        description: "Estimate concrete volume for slabs, footings, and columns. Essential for construction and DIY projects.",
        href: "/calculator/concrete-calculator",
        icon: Activity,
        badge: "Construction",
        badgeColor: "bg-stone-500/90",
      },
      {
        title: "Unit Converter",
        description: "Universal unit converter for length, weight, temperature, and more. Quick conversions for everyday needs.",
        href: "/calculator/conversion-calculator",
        icon: Activity,
        badge: "Utility",
        badgeColor: "bg-teal-500/90",
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
    iconColor: "text-emerald-600",
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
    iconColor: "text-indigo-600",
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
    isFamilyFriendly: "true",
    copyrightYear: new Date().getFullYear().toString(),
    copyrightHolder: {
      "@type": "Organization",
      name: "FastTools"
    },
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



  return (
    <div className="bg-background">
      {/* JSON-LD Structured Data */}

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section - Background with Orange Text */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-background">
        {/* Hero Background Image */}
        <PremiumHeroBackground />

        <div className="container mx-auto max-w-7xl relative z-10 py-8 sm:py-12 lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Spacer for Hexagon */}
          <div className="hidden lg:block" />

          <div className="text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Main Heading - Professional & Trustworthy */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-2 mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Professional Grade Tools
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.1] tracking-tight px-2 lg:px-0">
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 tracking-normal">
                  FastTools: 1000+ Free Online Tools
                </span>
                <span className="block">
                  Build faster with
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-primary animate-gradient-x pb-2">
                  premium tools.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-foreground font-medium max-w-3xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                Welcome to <strong className="text-foreground">FastTools</strong>, the premier <strong className="text-foreground">online tools platform</strong> designed for efficiency.
                Explore our massive collection of <strong className="text-foreground">web tools</strong> including <strong className="text-foreground">productivity tools</strong>, developer utilities, and AI generators.
                Experience the power of a complete digital toolkit that processes data locally for maximum security and speed.
              </p>
            </div>


          </div>
        </div>
      </section>

      {/* Categories Section - Lazy Loaded */}
      <HomeCategories categories={categories} />

      {/* FAQ Section - Lazy Loaded */}
      <HomeFAQSection />
    </div>
  )
}

