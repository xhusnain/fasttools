'use client';

import Link from "next/link"
import { GButton } from "@/ui/gbutton"
import { GHeader } from "@/ui/gheader"
import { useTranslations } from 'next-intl';

import { ArrowRight, Award, 
  Calculator, Sparkles, Palette, Code, FileText, Search, DollarSign, Image, Smile, Globe, Wrench, Music, QrCode, Heart, Hash, Download, Calendar, Activity, Percent, Type, Ruler, Thermometer, Users, Star, TrendingUp, Key, Lock } from "lucide-react"

import { Category } from "@/types/common-types/home-categories.types"

// Categories data - moved here to avoid passing React components from server to client
const categories: Category[] = [
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
        badgeColor: "bg-blue-600",
      },
      {
        title: "AI Lyrics Generator",
        description: "Generate creative, original song lyrics for any genre instantly. Perfect for songwriters, musicians, and content creators with proper rhyme schemes, rhythm patterns, and thematic consistency across all music styles",
        href: "/ai-tools/lyrics-generator",
        icon: Music,
        badge: "New",
        badgeColor: "bg-pink-600",
      },
      {
        title: "AI Caption Generator",
        description: "Create engaging captions for social media posts automatically with AI. Generate multiple caption options with hashtags and emojis for Instagram, Facebook, Twitter, and LinkedIn to boost engagement across all platforms",
        href: "/ai-tools/caption-generator",
        icon: Hash,
        badge: "Trending",
        badgeColor: "bg-primary",
      },
      {
        title: "AI Pet Name Generator",
        description: "Discover unique, creative names for your pets using advanced AI. Get personalized suggestions based on species, breed, personality, and appearance with cute, funny, elegant, or culturally inspired options",
        href: "/ai-tools/pet-names",
        icon: Heart,
        badge: "Fun",
        badgeColor: "bg-pink-600",
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
        badgeColor: "bg-purple-600",
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
    id: "crypto-tools",
    name: "Crypto & Security Tools",
    description: "Secure cryptographic tools for keys, tokens & passwords",
    icon: Lock,
    href: "/crypto-tools",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-500",
    glowColor: "hover:shadow-green-500/20",
    tools: [
      {
        title: "Token Generator",
        description: "Generate secure random tokens, API keys, and passwords instantly with custom length and charset settings",
        href: "/crypto-tools/token-generator",
        icon: Key,
        badge: "Secure",
        badgeColor: "bg-green-600",
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
    glowColor: "hover:shadow-blue-500/20",
    tools: [
      {
        title: "Color Palette Generator",
        description: "Generate beautiful, harmonious color schemes instantly with complementary, analogous, and triadic color combinations for web design",
        href: "/dev-tools/color-palette",
        icon: Palette,
        badge: "Design",
        badgeColor: "bg-pink-600",
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
        badgeColor: "bg-red-600",
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
        badgeColor: "bg-red-600",
      },
      {
        title: "Facebook Video Downloader",
        description: "Download Facebook videos in HD quality quickly and easily for offline viewing and sharing",
        href: "/social-media-tools/facebook-downloader",
        icon: Download,
        badge: "Social",
        badgeColor: "bg-blue-700",
      },
      {
        title: "X Video Downloader",
        description: "Download videos from X (formerly Twitter) in high definition without watermarks",
        href: "/social-media-tools/x-video-downloader",
        icon: Download,
        badge: "Social",
        badgeColor: "bg-slate-800/90",
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
        badgeColor: "bg-green-600",
      },
      {
        title: "YouTube Channel Name Generator",
        description: "Generate catchy, unique, and available channel names for your YouTube journey using AI",
        href: "/social-media-tools/youtube-channel-name-generator",
        icon: Sparkles,
        badge: "AI",
        badgeColor: "bg-red-500/90",
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
      {
        title: "PDF Unlocker",
        description: "Remove password protection and restrictions from PDF files to view, copy, or print securely",
        href: "/pdf-tools/pdf-unlocker",
        icon: FileText,
        badge: "Unlock",
        badgeColor: "bg-green-600",
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
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-700",
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
        badgeColor: "bg-primary",
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
      {
        title: "Currency API",
        description: "Free currency exchange API with real-time rates for developers and businesses to integrate currency data",
        href: "/converters/currency-api",
        icon: Code,
        badge: "API",
        badgeColor: "bg-blue-500/90",
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
    iconBg: "bg-emerald-500/10",
    iconColor: "text-foreground",
    glowColor: "hover:shadow-emerald-500/20",
    tools: [
      {
        title: "ROAS Calculator",
        description: "Calculate Return on Ad Spend, ROI, and break-even points for Google, Facebook, and TikTok ads instantly",
        href: "/ad-tools/roas-calculator",
        icon: TrendingUp,
        badge: "New",
        badgeColor: "bg-blue-600/90",
      },
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
        badgeColor: "bg-emerald-600",
      },
      {
        title: "Discount Calculator",
        description: "Calculate final price after discount, amount saved, and original price for smart shopping and sales",
        href: "/finance-tools/discount-calculator",
        icon: Percent,
        badge: "Sale",
        badgeColor: "bg-red-500/90",
      },
      {
        title: "Tip Calculator",
        description: "Quickly split bills and calculate tips for restaurants, taxis, and services with custom percentage options",
        href: "/finance-tools/tip-calculator",
        icon: DollarSign,
        badge: "Daily",
        badgeColor: "bg-green-600",
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
        title: "Retirement Planner",
        description: "Comprehensive planning for your golden years with compound interest and contribution projections",
        href: "/finance-tools/retirement-planner",
        icon: DollarSign,
        badge: "Planning",
        badgeColor: "bg-blue-600",
      },
      {
        title: "Bill Splitter",
        description: "Split expenses fairly among friends or teams with tip support and customizable contributions",
        href: "/finance-tools/bill-splitter",
        icon: Users,
        badge: "Groups",
        badgeColor: "bg-purple-500/90",
      },
      {
        title: "Credit Card Payoff",
        description: "Calculate how long it will take to pay off credit card debt and how much interest you will pay",
        href: "/finance-tools/credit-card-payoff",
        icon: DollarSign,
        badge: "Debt",
        badgeColor: "bg-red-500/90",
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
        badgeColor: "bg-red-600",
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
        badgeColor: "bg-emerald-600",
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
        href: "/finance-tools/salary-calculator",
        icon: DollarSign,
        badge: "Career",
        badgeColor: "bg-emerald-600",
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
        badgeColor: "bg-pink-600",
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
        badgeColor: "bg-slate-600",
      },
      {
        title: "Standard Deviation Calculator",
        description: "Calculate mean, variance, and standard deviation. Essential for statistical analysis and data science.",
        href: "/calculator/standard-deviation-calculator",
        icon: Activity,
        badge: "Math",
        badgeColor: "bg-violet-600",
      },
      {
        title: "Concrete Calculator",
        description: "Estimate concrete volume for slabs, footings, and columns. Essential for construction and DIY projects.",
        href: "/calculator/concrete-calculator",
        icon: Activity,
        badge: "Construction",
        badgeColor: "bg-stone-600",
      },
      {
        title: "Unit Converter",
        description: "Universal unit converter for length, weight, temperature, and more. Quick conversions for everyday needs.",
        href: "/calculator/conversion-calculator",
        icon: Activity,
        badge: "Utility",
        badgeColor: "bg-teal-600",
      },
      {
        title: "Date Difference",
        description: "Calculate the exact difference between two dates in days, weeks, months, and years for planning",
        href: "/calculator/date-difference",
        icon: Calendar,
        badge: "Date",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Time Duration",
        description: "Calculate the exact duration between two times, useful for tracking work hours or events",
        href: "/calculator/time-duration",
        icon: Calendar,
        badge: "Time",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Scientific Calculator",
        description: "Advanced scientific calculator including trigonometric, logarithmic, and exponential functions",
        href: "/calculator/scientific-calculator",
        icon: Calculator,
        badge: "Math",
        badgeColor: "bg-purple-500/90",
      },
      {
        title: "Triangle Calculator",
        description: "Calculate area, perimeter, angles, and sides of any triangle with visualization",
        href: "/calculator/triangle-calculator",
        icon: Activity,
        badge: "Geometry",
        badgeColor: "bg-red-500/90",
      },
      {
        title: "Fraction Calculator",
        description: "Add, subtract, multiply, and divide fractions easily with step-by-step results",
        href: "/calculator/fraction-calculator",
        icon: Percent,
        badge: "Math",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Pregnancy Conception",
        description: "Estimate your conception date based on due date or ultrasound data with fertility windows",
        href: "/calculator/pregnancy-conception-calculator",
        icon: Heart,
        badge: "Health",
        badgeColor: "bg-pink-500/90",
      },
      {
        title: "Pace Calculator",
        description: "Calculate running pace, speed, and finish times for marathons and races",
        href: "/calculator/pace-calculator",
        icon: Activity,
        badge: "Sport",
        badgeColor: "bg-green-500/90",
      },
      {
        title: "Sales Tax Calculator",
        description: "Calculate sales tax and total cost for purchases across different states and regions",
        href: "/finance-tools/sales-tax-calculator",
        icon: DollarSign,
        badge: "Finance",
        badgeColor: "bg-emerald-500/90",
      },
      {
        title: "Interest Rate Calculator",
        description: "Determine the real interest rate on loans or investments to make better financial decisions",
        href: "/finance-tools/interest-rate-calculator",
        icon: Percent,
        badge: "Finance",
        badgeColor: "bg-blue-500/90",
      },
      {
        title: "Finance Calculator",
        description: "All-in-one financial calculator for time value of money, cash flows, and amortization",
        href: "/finance-tools/finance-calculator",
        icon: DollarSign,
        badge: "Pro",
        badgeColor: "bg-slate-700/90",
      },
      {
        title: "Inflation Calculator",
        description: "Calculate how inflation affects your purchasing power over time with historical data",
        href: "/finance-tools/inflation-calculator",
        icon: TrendingUp,
        badge: "Econ",
        badgeColor: "bg-red-500/90",
      },
      {
        title: "Amortization Calculator",
        description: "Create detailed loan amortization schedules with principal and interest breakdowns",
        href: "/finance-tools/amortization-calculator",
        icon: DollarSign,
        badge: "Loan",
        badgeColor: "bg-blue-600/90",
      },
      {
        title: "Payment Calculator",
        description: "Estimate monthly payments for loans, credit cards, or simplified mortgages",
        href: "/finance-tools/payment-calculator",
        icon: DollarSign,
        badge: "Pay",
        badgeColor: "bg-green-600/90",
      },
    ],
  },
]

export function HomeCategories() {
    const t = useTranslations('categories');
    const tCommon = useTranslations('common');
    const tTools = useTranslations('tools');
    const tBadges = useTranslations('badges');
    
    // Helper function to get translation keys for tools
    const getToolTranslationKey = (href: string): string | null => {
        const toolMap: Record<string, string> = {
            '/ai-tools/qr-generator': 'aiTools.qrGenerator',
            '/ai-tools/lyrics-generator': 'aiTools.lyricsGenerator',
            '/ai-tools/caption-generator': 'aiTools.captionGenerator',
            '/ai-tools/pet-names': 'aiTools.petNames',
            '/seo-tools/meta-tags': 'seoTools.metaTags',
            '/seo-tools/keyword-density': 'seoTools.keywordDensity',
            '/seo-tools/lorem-ipsum': 'seoTools.loremIpsum',
            '/seo-tools/blog-titles': 'seoTools.blogTitles',
            '/crypto-tools/token-generator': 'cryptoTools.tokenGenerator',
            '/dev-tools/color-palette': 'devTools.colorPalette',
            '/dev-tools/hex-to-rgb': 'devTools.hexToRgb',
            '/dev-tools/json-to-csv': 'devTools.jsonToCsv',
            '/dev-tools/jwt-decoder': 'devTools.jwtDecoder',
            '/dev-tools/regex-tester': 'devTools.regexTester',
            '/dev-tools/html-beautifier': 'devTools.htmlBeautifier',
            '/dev-tools/html-to-markdown': 'devTools.htmlToMarkdown',
            '/dev-tools/markdown-previewer': 'devTools.markdownPreviewer',
            '/social-media-tools/instagram-dp': 'socialMedia.instagramDp',
            '/social-media-tools/instagram-downloader': 'socialMedia.instagramDownloader',
            '/social-media-tools/tiktok-downloader': 'socialMedia.tiktokDownloader',
            '/social-media-tools/facebook-downloader': 'socialMedia.facebookDownloader',
            '/social-media-tools/x-video-downloader': 'socialMedia.xDownloader',
            '/social-media-tools/youtube-thumbnail': 'socialMedia.youtubeThumbnail',
            '/social-media-tools/hashtag-counter': 'socialMedia.hashtagGenerator',
            '/social-media-tools/youtube-tags': 'socialMedia.youtubeTags',
            '/social-media-tools/channel-checker': 'socialMedia.channelChecker',
            '/social-media-tools/youtube-channel-name-generator': 'socialMedia.channelNameGenerator',
            '/social-media-tools/link-in-bio': 'socialMedia.linkInBio',
            '/image-tools/image-background-remover': 'imageTools.backgroundRemover',
            '/image-tools/image-to-text': 'imageTools.imageToText',
            '/pdf-tools/pdf-word-converter': 'pdfTools.pdfToWord',
            '/pdf-tools/pdf-compressor': 'pdfTools.pdfCompressor',
            '/pdf-tools/pdf-to-image': 'pdfTools.pdfToImage',
            '/pdf-tools/pdf-sign': 'pdfTools.signPdf',
            '/pdf-tools/pdf-splitter-merger': 'pdfTools.mergeSplitPdf',
            '/pdf-tools/pdf-unlocker': 'pdfTools.pdfUnlocker',
            '/converters/currency': 'converters.currency',
            '/converters/text-case': 'converters.textCase',
            '/converters/length': 'converters.length',
            '/converters/temperature': 'converters.temperature',
            '/converters/file-size': 'converters.fileSize',
            '/converters/timezone': 'converters.timezone',
            '/converters/currency-api': 'converters.currencyApi',
            '/ad-tools/roas-calculator': 'financeTools.roasCalculator',
            '/finance-tools/invoice-generator': 'financeTools.invoiceGenerator',
            '/finance-tools/paypal-fee': 'financeTools.paypalFee',
            '/finance-tools/discount-calculator': 'financeTools.discountCalculator',
            '/finance-tools/tip-calculator': 'financeTools.tipCalculator',
            '/finance-tools/savings-tracker': 'financeTools.savingsTracker',
            '/finance-tools/retirement-planner': 'financeTools.retirementPlanner',
            '/finance-tools/bill-splitter': 'financeTools.billSplitter',
            '/finance-tools/credit-card-payoff': 'financeTools.creditCardPayoff',
            '/fun-tools/future-age': 'funTools.futureAge',
            '/fun-tools/birthday-countdown': 'funTools.birthdayCountdown',
            '/fun-tools/anniversary': 'funTools.anniversary',
            '/calculator/bmi-calculator': 'calculators.bmi',
            '/calculator/age-calculator': 'calculators.age',
            '/calculator/percentage-calculator': 'calculators.percentage',
            '/finance-tools/loan-calculator': 'calculators.loan',
            '/finance-tools/mortgage-calculator': 'calculators.mortgage',
            '/finance-tools/compound-interest': 'calculators.compoundInterest',
            '/finance-tools/retirement-calculator': 'calculators.retirement',
            '/finance-tools/salary-calculator': 'calculators.salary',
            '/finance-tools/tax-calculator': 'calculators.tax',
            '/finance-tools/investment-calculator': 'calculators.investment',
            '/calculator/gpa-calculator': 'calculators.gpa',
            '/calculator/calorie-calculator': 'calculators.calorie',
            '/calculator/bmr-calculator': 'calculators.bmr',
            '/calculator/body-fat-calculator': 'calculators.bodyFat',
            '/calculator/pregnancy-calculator': 'calculators.pregnancy',
            '/calculator/love-calculator': 'calculators.love',
            '/calculator/ip-subnet-calculator': 'calculators.ipSubnet',
            '/calculator/standard-deviation-calculator': 'calculators.standardDeviation',
            '/calculator/concrete-calculator': 'calculators.concrete',
            '/calculator/conversion-calculator': 'calculators.unitConverter',
            '/calculator/date-difference': 'calculators.dateDifference',
            '/calculator/time-duration': 'calculators.timeDuration',
            '/calculator/scientific-calculator': 'calculators.scientific',
            '/calculator/triangle-calculator': 'calculators.triangle',
            '/calculator/fraction-calculator': 'calculators.fraction',
            '/calculator/pregnancy-conception-calculator': 'calculators.pregnancyConception',
            '/calculator/pace-calculator': 'calculators.pace',
            '/finance-tools/sales-tax-calculator': 'calculators.salesTax',
            '/finance-tools/interest-rate-calculator': 'calculators.interestRate',
            '/finance-tools/finance-calculator': 'calculators.finance',
            '/finance-tools/inflation-calculator': 'calculators.inflation',
            '/finance-tools/amortization-calculator': 'calculators.amortization',
            '/finance-tools/payment-calculator': 'calculators.payment',
        };
        return toolMap[href] || null;
    };
    
    // Helper to get category translation
    const getCategoryName = (id: string): string => {
        const categoryMap: Record<string, string> = {
            'ai-tools': 'aiTools.name',
            'seo-tools': 'seoTools.name',
            'crypto-tools': 'cryptoTools.name',
            'dev-tools': 'devTools.name',
            'social-media': 'socialMedia.name',
            'image-tools': 'imageTools.name',
            'pdf-tools': 'pdfTools.name',
            'converters': 'converters.name',
            'finance-tools': 'financeTools.name',
            'fun-tools': 'funTools.name',
            'calculators': 'calculators.name',
        };
        return categoryMap[id] || '';
    };
    
    const getCategoryDescription = (id: string): string => {
        const categoryMap: Record<string, string> = {
            'ai-tools': 'aiTools.description',
            'seo-tools': 'seoTools.description',
            'crypto-tools': 'cryptoTools.description',
            'dev-tools': 'devTools.description',
            'social-media': 'socialMedia.description',
            'image-tools': 'imageTools.description',
            'pdf-tools': 'pdfTools.description',
            'converters': 'converters.description',
            'finance-tools': 'financeTools.description',
            'fun-tools': 'funTools.description',
            'calculators': 'calculators.description',
        };
        return categoryMap[id] || '';
    };
    
    return (
        <section id="tools" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                        <Award className="h-4 w-4" />
                        {t('badge')}
                    </div>

                    <GHeader
                        title={t('title')}
                        description={t('description')}
                        titleSize="medium"
                        descriptionSize="small"
                        as="h2"
                    />
                </div>

                {/* Display All Categories with All Tools */}
                {categories.map((category) => {
                    const CategoryIcon = category.icon
                    const categoryNameKey = getCategoryName(category.id);
                    const categoryDescKey = getCategoryDescription(category.id);
                    return (
                        <div key={category.id} className="mb-12 sm:mb-16">
                            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2">
                                <div className={`p-2 sm:p-3.5 rounded-xl ${category.iconBg} border ${category.borderColor}`}>
                                    <CategoryIcon className={`h-5 w-5 sm:h-7 sm:w-7 ${category.iconColor}`} />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                        {categoryNameKey ? t(categoryNameKey) : category.name}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-foreground mt-0.5">
                                        {categoryDescKey ? t(categoryDescKey) : category.description}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 px-2">
                                {category.tools.map((tool, i) => {
                                    const ToolIcon = tool.icon
                                    const toolKey = getToolTranslationKey(tool.href);
                                    const badgeKey = tool.badge.toLowerCase().replace(/\s+/g, '');
                                    return (
                                        <Link key={i} href={tool.href} className="group">
                                            <div className={`relative h-full rounded-xl border-2 ${category.borderColor} ${category.hoverBorder} bg-card p-4 sm:p-6 space-y-3 sm:space-y-4 transition-all duration-300 hover:shadow-xl ${category.glowColor}`}>
                                                <div className="flex items-start justify-between">
                                                    <div className={`${tool.badgeColor} px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-white text-[10px] sm:text-xs font-semibold whitespace-nowrap`}>
                                                        {(() => {
                                                            try {
                                                                return tBadges(badgeKey);
                                                            } catch {
                                                                return tool.badge;
                                                            }
                                                        })()}
                                                    </div>
                                                    <div className={`p-2 sm:p-2.5 rounded-lg ${category.iconBg} border ${category.borderColor}`}>
                                                        <ToolIcon className={`h-4 w-4 sm:h-5 sm:w-5 ${category.iconColor}`} />
                                                    </div>
                                                </div>
                                                <div className="space-y-2 sm:space-y-2.5">
                                                    <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight min-h-[2.5rem]">
                                                        {toolKey ? tTools(`${toolKey}.title`) : tool.title}
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                                                        {toolKey ? tTools(`${toolKey}.description`) : tool.description}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm pt-1">
                                                    <span>{tCommon('tryNow')}</span>
                                                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                            <div className="flex justify-center mt-6 sm:mt-8">
                                <Link href={category.href} aria-label={`View all ${categoryNameKey ? t(categoryNameKey) : category.name} tools`}>
                                    <GButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg gap-2 px-6 sm:px-8">
                                        {tCommon('viewAll')}
                                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </GButton>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
