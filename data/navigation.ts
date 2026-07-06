import {
    FileCode,
    Radio,
    Binary,
    BookOpen,
    Calculator,
    Code,
    FileText,
    Globe,
    Image,
    Images,
    Palette,
    Search,
    Settings,
    Sparkles,
    Type,
    DollarSign,
    Database,
    Smile,
    LucideIcon,
    Volume2,
    BarChart,
    Lock,
    Merge,
    PenTool,
    Activity,
    GraduationCap,
    Clock,
    Ruler,
    Thermometer,
    HardDrive,
    Maximize2,
    Hash,
    Heart,
    Calendar,
    Box,
    Crop,
    Eye,
    Car,
    CreditCard,
    Percent,
    Receipt,
    PiggyBank,
    TrendingUp,
    Gamepad2,
    Wand2,
    Music,
    QrCode,
    Scissors,
    FileKey,
    Scale,
    Timer,
    Baby,
    Footprints,
    Triangle,
    Network,
    ScanText,
    Eraser,
    FileImage,
    Link2,
    Languages,
    Text,
    Regex,
    PartyPopper,
    Tv,
    Key,
    Shield,
    Fingerprint,
    RefreshCw,
    Mail,
    Users,
    Home,
    Zap,
} from "lucide-react"


export interface NavItem {
    title: string
    href: string
    description?: string
    icon?: LucideIcon
}

export interface NavCategory {
    title: string
    items: NavItem[]
}

export interface MegaMenuSection {
    title: string
    categories: NavCategory[]
}

export const navigationConfig: MegaMenuSection[] = [
    {
        title: "Tools",
        categories: [
            {
                title: "Calculators",
                items: [
                    { title: "BMI Calculator", href: "/calculator/bmi-calculator", icon: Activity },
                    { title: "Age Calculator", href: "/calculator/age-calculator", icon: Clock },
                    { title: "Percentage Calc", href: "/calculator/percentage-calculator", icon: Percent },
                    { title: "Scientific Calc", href: "/calculator/scientific-calculator", icon: Calculator },
                    { title: "GPA Calculator", href: "/calculator/gpa-calculator", icon: GraduationCap },
                    { title: "Love Calculator", href: "/calculator/love-calculator", icon: Heart },
                    { title: "TDEE & Macros", href: "/calculator/tdee-macro-calculator", icon: Activity },
                    { title: "Biological Age", href: "/calculator/biological-age-calculator", icon: Activity },
                    { title: "Cortisol Peak", href: "/calculator/cortisol-peak-calculator", icon: Timer },
                ]
            },
            {
                title: "Converters",
                items: [
                    { title: "Currency Converter", href: "/converters/currency", icon: DollarSign },
                    { title: "Length Converter", href: "/converters/length", icon: Ruler },
                    { title: "Temperature", href: "/converters/temperature", icon: Thermometer },
                    { title: "Timezone", href: "/converters/timezone", icon: Globe },
                    { title: "File Size", href: "/converters/file-size", icon: HardDrive },
                ]
            },
            {
                title: "Web",
                items: [
                    { title: "WHOIS & Domain Lookup", href: "/web-tools/whois-lookup", icon: Link2 },
                ]
            },
            {
                title: "Developer",
                items: [
                    { title: "Unix Timestamp Converter", href: "/dev-tools/timestamp-converter", icon: Clock },
                    { title: "JSON to CSV", href: "/dev-tools/json-to-csv", icon: FileText },
                    { title: "Regex Tester", href: "/dev-tools/regex-tester", icon: Code },
                    { title: "JWT Decoder", href: "/dev-tools/jwt-decoder", icon: Lock },
                    { title: "MIME Types", href: "/dev-tools/mime-types", icon: FileCode },
                    { title: "Markdown Preview", href: "/dev-tools/markdown-previewer", icon: Eye },
                    { title: "HTML Beautifier", href: "/dev-tools/html-beautifier", icon: Code },
                ]
            },
            {
                title: "Security",
                items: [
                    { title: "UUID Generator", href: "/crypto-tools/uuid-generator", icon: Fingerprint },
                    { title: "Bcrypt Generator", href: "/crypto-tools/bcrypt", icon: Shield },
                    { title: "Password Analyzer", href: "/crypto-tools/password-strength-analyzer", icon: Shield },
                    { title: "Token Generator", href: "/crypto-tools/token-generator", icon: Key },
                    { title: "OTP Code Generator", href: "/crypto-tools/otp-generator", icon: Shield },
                ]
            }
        ]
    },
    {
        title: "Finance",
        categories: [
            {
                title: "Loans & Debt",
                items: [
                    { title: "Loan Calculator", href: "/finance-tools/loan-calculator", icon: DollarSign },
                    { title: "Auto Loan Calc", href: "/finance-tools/auto-loan-calculator", icon: Car },
                    { title: "Credit Card Payoff", href: "/finance-tools/credit-card-payoff", icon: CreditCard },
                    { title: "Home Affordability", href: "/finance-tools/home-affordability-calculator", icon: Home },
                ]
            },
            {
                title: "Investment",
                items: [
                    { title: "Investment Calc", href: "/finance-tools/investment-calculator", icon: TrendingUp },
                    { title: "Savings Tracker", href: "/finance-tools/savings-tracker", icon: PiggyBank },
                    { title: "SaaS Churn", href: "/finance-tools/saas-churn-calculator", icon: TrendingUp },
                    { title: "SaaS Payback", href: "/finance-tools/saas-payback-calculator", icon: TrendingUp },
                ]
            },
            {
                title: "Daily Finance",
                items: [
                    { title: "Tip Calculator", href: "/finance-tools/tip-calculator", icon: Receipt },
                    { title: "Bill Splitter", href: "/finance-tools/bill-splitter", icon: Receipt },
                    { title: "Invoice Generator", href: "/finance-tools/invoice-generator", icon: FileText },
                    { title: "PayPal G&S", href: "/finance-tools/paypal-goods-and-services-fee-calculator", icon: DollarSign },
                    { title: "Discount Calc", href: "/finance-tools/discount-calculator", icon: Percent },
                    { title: "Quarterly Tax", href: "/finance-tools/quarterly-tax-estimator", icon: Receipt },
                ]
            }
        ]
    },
    {
        title: "AI",
        categories: [
            {
                title: "Content Generation",
                items: [
                    { title: "AI QR Generator", href: "/ai-tools/qr-generator", icon: QrCode },
                    { title: "AI API Cost", href: "/ai-tools/ai-api-cost-calculator", icon: Calculator },
                    { title: "Caption Generator", href: "/ai-tools/caption-generator", icon: Type },
                    { title: "Lyrics Generator", href: "/ai-tools/lyrics-generator", icon: Music },
                    { title: "Pet Name Generator", href: "/ai-tools/pet-names", icon: Smile },
                ]
            }
        ]
    },
    {
        title: "Media",
        categories: [
            {
                title: "Image Tools",
                items: [
                    { title: "AI Image Detector", href: "/image-tools/ai-image-detector", icon: Shield },
                    { title: "Background Remover", href: "/image-tools/background-remover", icon: Scissors },
                    { title: "Image Compressor", href: "/image-tools/image-compressor", icon: HardDrive },
                    { title: "Image to Text", href: "/image-tools/image-to-text", icon: ScanText },
                    { title: "HEIC to JPG", href: "/image-tools/heic-to-jpg", icon: FileImage },
                    { title: "PNG to JPG", href: "/image-tools/png-to-jpg", icon: FileImage },
                    { title: "WebP to JPG", href: "/image-tools/webp-to-jpg", icon: FileImage },
                    { title: "JPG to PNG", href: "/image-tools/jpg-to-png", icon: FileImage },
                ]
            },
            {
                title: "PDF Tools",
                items: [
                    { title: "PDF Signature Checker", href: "/pdf-tools/pdf-signature-checker", icon: Shield },
                    { title: "PDF Split & Merge", href: "/pdf-tools/pdf-splitter-merger", icon: Merge },
                ]
            },
            ]
    },
    {
        title: "Marketing",
        categories: [
            {
                title: "SEO Tools",
                items: [
                    { title: "Keyword Density", href: "/seo-tools/keyword-density", icon: BarChart },
                    { title: "Open Graph Meta Generator", href: "/seo-tools/meta-tags", icon: Code },
                    { title: "Lorem Ipsum", href: "/seo-tools/lorem-ipsum", icon: FileText },
                    { title: "Blog Titles", href: "/seo-tools/blog-titles", icon: Type },
                ]
            },
            {
                title: "Social Media",
                items: [
                    { title: "YouTube Thumbnail", href: "/social-media-tools/youtube-thumbnail", icon: Image },
                    { title: "YouTube Tags", href: "/social-media-tools/youtube-tags", icon: Hash },
                    { title: "Link in Bio", href: "/social-media-tools/link-in-bio", icon: Link2 },
                    { title: "Hashtag Generator", href: "/social-media-tools/hashtag-counter", icon: Hash },
                    { title: "Channel Name Gen", href: "/social-media-tools/youtube-channel-name-generator", icon: Type },
                    { title: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp", icon: Eye },
                    { title: "Profile Pic Viewer", href: "/social-media-tools/instagram-profile-picture-viewer", icon: Eye },
                    { title: "Influencer Rate", href: "/social-media-tools/influencer-rate-calculator", icon: DollarSign },
                    { title: "TikTok Engagement", href: "/social-media-tools/tiktok-engagement-calculator", icon: TrendingUp },
                ]
            }
        ]
    },
    {
        title: "More",
        categories: [
            {
                title: "Pages",
                items: [
                    { title: "Contact", href: "/contact", icon: Mail },
                    { title: "About", href: "/about", icon: Users },
                ]
            },
            {
                title: "Fun Tools",
                items: [
                    { title: "Birthday Countdown", href: "/fun-tools/birthday-countdown", icon: Calendar },
                    { title: "Future Age", href: "/fun-tools/future-age", icon: Clock },
                    { title: "Anniversary Calc", href: "/fun-tools/anniversary", icon: Heart },
                    { title: "Pomodoro Timer", href: "/fun-tools/pomodoro-timer", icon: Clock },
                ]
            },
            {
                title: "Featured",
                items: [
                    { title: "ROAS Calculator", href: "/ad-tools/roas-calculator", icon: TrendingUp },
                    { title: "IP Subnet Calc", href: "/calculator/ip-subnet-calculator", icon: Network },
                ]
            }
        ]
    },
]
