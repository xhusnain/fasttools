

import {
    Calculator,
    Camera,
    Code,
    FileText,
    Globe,
    Image,
    Palette,
    Search,
    Settings,
    Sparkles,
    Type,
    Video,
    DollarSign,
    Database,
    Smile,
    LucideIcon,
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
    Hash,
    Heart,
    Calendar,
    Box,
    Crop,
    Eye,
    Download,
    Youtube,
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
    Gift,
    Drumstick,
    PartyPopper,
    Tv,
    Key,
    Shield,
    Fingerprint,
    RefreshCw
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
        title: "Calculators",
        categories: [
            {
                title: "Health & Fitness",
                items: [
                    { title: "BMI Calculator", href: "/calculator/bmi-calculator", icon: Activity, description: "Body Mass Index" },
                    { title: "BMR Calculator", href: "/calculator/bmr-calculator", icon: Activity, description: "Metabolic rate" },
                    { title: "Body Fat Calc", href: "/calculator/body-fat-calculator", icon: Activity, description: "Estimate body fat" },
                    { title: "Calorie Calculator", href: "/calculator/calorie-calculator", icon: Activity, description: "Daily needs" },
                    { title: "Pace Calculator", href: "/calculator/pace-calculator", icon: Footprints, description: "Running pace" },
                ]
            },
            {
                title: "Math & Science",
                items: [
                    { title: "Scientific Calc", href: "/calculator/scientific-calculator", icon: Calculator, description: "Advanced math" },
                    { title: "Fraction Calc", href: "/calculator/fraction-calculator", icon: Calculator, description: "Add/Sub fractions" },
                    { title: "Standard Deviation", href: "/calculator/standard-deviation-calculator", icon: BarChart, description: "Statistics" },
                    { title: "Triangle Calc", href: "/calculator/triangle-calculator", icon: Triangle, description: "Geometry helper" },
                    { title: "Percentage Calc", href: "/calculator/percentage-calculator", icon: Percent, description: "Quick math" },
                ]
            },
            {
                title: "Date & Time",
                items: [
                    { title: "Age Calculator", href: "/calculator/age-calculator", icon: Clock, description: "Precise duration" },
                    { title: "Date Difference", href: "/calculator/date-difference", icon: Calendar, description: "Days between dates" },
                    { title: "Time Duration", href: "/calculator/time-duration", icon: Timer, description: "Hours & minutes" },
                ]
            },
            {
                title: "Other",
                items: [
                    { title: "GPA Calculator", href: "/calculator/gpa-calculator", icon: GraduationCap, description: "Grade point avg" },
                    { title: "IP Subnet Calc", href: "/calculator/ip-subnet-calculator", icon: Network, description: "Network masks" },
                    { title: "Concrete Calc", href: "/calculator/concrete-calculator", icon: Box, description: "Construction" },
                    { title: "Pregnancy Calc", href: "/calculator/pregnancy-calculator", icon: Baby, description: "Due date" },
                    { title: "Conception Calc", href: "/calculator/pregnancy-conception-calculator", icon: Baby, description: "Conception date" },
                    { title: "Love Calculator", href: "/calculator/love-calculator", icon: Heart, description: "Compatibility" },
                    { title: "Conversion Calc", href: "/calculator/conversion-calculator", icon: Settings, description: "Universal" },
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
                    { title: "Loan Calculator", href: "/finance-tools/loan-calculator", icon: DollarSign, description: "Payments & interest" },
                    { title: "Mortgage Calc", href: "/finance-tools/mortgage-calculator", icon: DollarSign, description: "Home payments" },
                    { title: "Amortization Calc", href: "/finance-tools/amortization-calculator", icon: FileText, description: "Payment schedule" },
                    { title: "Credit Card Payoff", href: "/finance-tools/credit-card-payoff", icon: CreditCard, description: "Debt payoff" },
                    { title: "Interest Rate Calc", href: "/finance-tools/interest-rate-calculator", icon: Percent, description: "Rate calculator" },
                ]
            },
            {
                title: "Investment & Savings",
                items: [
                    { title: "Investment Calc", href: "/finance-tools/investment-calculator", icon: TrendingUp, description: "ROI estimator" },
                    { title: "Compound Interest", href: "/finance-tools/compound-interest", icon: BarChart, description: "Growth calc" },
                    { title: "Retirement Calc", href: "/finance-tools/retirement-calculator", icon: PiggyBank, description: "Retirement needs" },
                    { title: "Retirement Planner", href: "/finance-tools/retirement-planner", icon: PiggyBank, description: "Plan retirement" },
                    { title: "Savings Tracker", href: "/finance-tools/savings-tracker", icon: PiggyBank, description: "Track savings" },
                ]
            },
            {
                title: "Income & Tax",
                items: [
                    { title: "Salary Calculator", href: "/finance-tools/salary-calculator", icon: DollarSign, description: "Net pay estimator" },
                    { title: "Tax Calculator", href: "/finance-tools/tax-calculator", icon: FileText, description: "Estimate taxes" },
                    { title: "Inflation Calc", href: "/finance-tools/inflation-calculator", icon: TrendingUp, description: "Purchasing power" },
                ]
            },
            {
                title: "Daily Finance",
                items: [
                    { title: "Payment Calc", href: "/finance-tools/payment-calculator", icon: CreditCard, description: "Payment schedule" },
                    { title: "Finance Calc", href: "/finance-tools/finance-calculator", icon: Calculator, description: "General finance" },
                    { title: "Tip Calculator", href: "/finance-tools/tip-calculator", icon: Receipt, description: "Calculate tips" },
                    { title: "Bill Splitter", href: "/finance-tools/bill-splitter", icon: Receipt, description: "Split expenses" },
                    { title: "Discount Calc", href: "/finance-tools/discount-calculator", icon: Percent, description: "Sale prices" },
                    { title: "Sales Tax Calc", href: "/finance-tools/sales-tax-calculator", icon: Receipt, description: "Tax calculator" },
                    { title: "PayPal Fee Calc", href: "/finance-tools/paypal-fee", icon: DollarSign, description: "Fee calculator" },
                    { title: "Invoice Generator", href: "/finance-tools/invoice-generator", icon: FileText, description: "Create invoices" },
                ]
            }
        ]
    },

    {
        title: "AI Tools",
        categories: [
            {
                title: "Content Generation",
                items: [
                    { title: "AI QR Generator", href: "/ai-tools/qr-generator", icon: QrCode, description: "Artistic QR codes" },
                    { title: "Caption Generator", href: "/ai-tools/caption-generator", icon: Type, description: "Social captions" },
                    { title: "Lyrics Generator", href: "/ai-tools/lyrics-generator", icon: Music, description: "AI songwriter" },
                    { title: "Pet Name Generator", href: "/ai-tools/pet-names", icon: Smile, description: "Creative names" },
                ]
            }
        ]
    },
    {
        title: "Converters",
        categories: [
            {
                title: "Unit Converters",
                items: [
                    { title: "Length Converter", href: "/converters/length", icon: Ruler, description: "Meters, Feet, etc" },
                    { title: "Temp Converter", href: "/converters/temperature", icon: Thermometer, description: "C to F" },
                    { title: "File Size", href: "/converters/file-size", icon: HardDrive, description: "Bytes, MB, GB" },
                ]
            },
            {
                title: "Data Converters",
                items: [
                    { title: "Currency Converter", href: "/converters/currency", icon: DollarSign, description: "Live rates" },
                    { title: "Timezone Converter", href: "/converters/timezone", icon: Globe, description: "World clock" },
                    { title: "Text Case", href: "/converters/text-case", icon: Type, description: "Formatting" },
                ]
            }
        ]
    },
    {
        title: "Dev Tools",
        categories: [
            {
                title: "Code Tools",
                items: [
                    { title: "HTML Beautifier", href: "/dev-tools/html-beautifier", icon: Code, description: "Format/Minify" },
                    { title: "Agent Skill Builder", href: "/dev-tools/antigravity-skill-builder", icon: Sparkles, description: "Generate Agent Skills" },
                    { title: "JSON to CSV", href: "/dev-tools/json-to-csv", icon: FileText, description: "Data converter" },
                    { title: "SQL to JSON", href: "/dev-tools/sql-to-json", icon: Database, description: "SQL converter" },
                    { title: "HTML to Markdown", href: "/dev-tools/html-to-markdown", icon: FileText, description: "Convert HTML" },
                    { title: "Markdown Previewer", href: "/dev-tools/markdown-previewer", icon: Eye, description: "Preview MD" },
                    { title: "Regex Tester", href: "/dev-tools/regex-tester", icon: Code, description: "Test patterns" },
                    { title: "JWT Decoder", href: "/dev-tools/jwt-decoder", icon: Lock, description: "Token debug" },
                ]
            },
            {
                title: "Crypto Tools",
                items: [
                    { title: "Bcrypt Generator", href: "/crypto-tools/bcrypt", icon: Shield, description: "Secure hashing" },
                    {
                        title: "Text Encrypt/Decrypt",
                        href: "/crypto-tools/encrypt-decrypt",
                        icon: Lock,
                        description: "Secure AES encryption for your text."
                    },
                    {
                        title: "BIP39 Generator",
                        href: "/crypto-tools/bip39-generator",
                        icon: Key,
                        description: "Generate secure mnemonic phrases."
                    },
                    {
                        title: "HMAC Generator",
                        href: "/crypto-tools/hmac-generator",
                        icon: Shield,
                        description: "Compute Hash-based MACs (SHA256, MD5)."
                    },
                    { title: "UUID Generator", href: "/crypto-tools/uuid-generator", icon: Fingerprint, description: "Bulk generate UUIDs (v4, v7)" },
                    { title: "ULID Generator", href: "/crypto-tools/ulid-generator", icon: Hash, description: "Sortable unique identifiers" },
                    { title: "Token Generator", href: "/crypto-tools/token-generator", icon: Key, description: "Generate keys" },
                    { title: "Hash Text", href: "/crypto-tools/hash-text", icon: RefreshCw, description: "MD5, SHA1, SHA256" },
                    { title: "RSA Key Generator", href: "/crypto-tools/rsa-generator", icon: Lock, description: "Generate RSA Key Pairs" },
                    { title: "Password Analyzer", href: "/crypto-tools/password-strength-analyzer", icon: Shield, description: "Check strength & entropy" },
                ]
            },
            {
                title: "Design Tools",
                items: [
                    { title: "Color Palette", href: "/dev-tools/color-palette", icon: Palette, description: "Color schemes" },
                    { title: "Hex to RGB", href: "/dev-tools/hex-to-rgb", icon: Palette, description: "Color codes" },
                ]
            }
        ]
    },
    {
        title: "Image Tools",
        categories: [
            {
                title: "Image Editing",
                items: [
                    { title: "Background Remover", href: "/image-tools/image-background-remover", icon: Eraser, description: "Transparent BG" },
                    { title: "Image Compressor", href: "/image-tools/image-compressor", icon: HardDrive, description: "Reduce size" },
                    { title: "Image to Text", href: "/image-tools/image-to-text", icon: ScanText, description: "OCR Extractor" },
                ]
            }
        ]
    },
    {
        title: "PDF Tools",
        categories: [
            {
                title: "Conversion",
                items: [
                    { title: "PDF to Word", href: "/pdf-tools/pdf-word-converter", icon: FileText, description: "Editable doc" },
                    { title: "PDF to Image", href: "/pdf-tools/pdf-to-image", icon: FileImage, description: "Pages to JPG" },
                ]
            },
            {
                title: "Management",
                items: [
                    { title: "Compress PDF", href: "/pdf-tools/pdf-compressor", icon: FileText, description: "Shrink file" },
                    { title: "Split & Merge PDF", href: "/pdf-tools/pdf-splitter-merger", icon: Merge, description: "Organize PDFs" },
                    { title: "Sign PDF", href: "/pdf-tools/pdf-sign", icon: PenTool, description: "Digital signatures" },
                    { title: "Unlock PDF", href: "/pdf-tools/pdf-unlocker", icon: FileKey, description: "Remove password" },
                ]
            }
        ]
    },
    {
        title: "SEO Tools",
        categories: [
            {
                title: "Analysis",
                items: [
                    { title: "Keyword Density", href: "/seo-tools/keyword-density", icon: BarChart, description: "Content analysis" },
                    { title: "Text Similarity", href: "/seo-tools/text-similarity-checker", icon: Search, description: "Compare content" },
                ]
            },
            {
                title: "Generation",
                items: [
                    { title: "Meta Tags", href: "/seo-tools/meta-tags", icon: Code, description: "Tag generator" },
                    { title: "Lorem Ipsum", href: "/seo-tools/lorem-ipsum", icon: FileText, description: "Placeholder text" },
                    { title: "Blog Title Ideas", href: "/seo-tools/blog-titles", icon: Type, description: "Headline generator" },
                ]
            }
        ]
    },
    {
        title: "Social Media",
        categories: [
            {
                title: "Downloaders",
                items: [
                    { title: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader", icon: Video, description: "No watermark" },
                    { title: "Instagram Saver", href: "/social-media-tools/instagram-downloader", icon: Camera, description: "Save content" },
                    { title: "Facebook Downloader", href: "/social-media-tools/facebook-downloader", icon: Video, description: "Download videos" },
                    { title: "X Video Downloader", href: "/social-media-tools/x-video-downloader", icon: Video, description: "Twitter videos" },
                ]
            },
            {
                title: "Instagram",
                items: [
                    { title: "Insta DP Viewer", href: "/social-media-tools/instagram-dp", icon: Eye, description: "Full size profile" },
                ]
            },
            {
                title: "YouTube",
                items: [
                    { title: "Channel Name Gen", href: "/social-media-tools/youtube-channel-name-generator", icon: Youtube, description: "AI Brainstorming" },
                    { title: "Channel Checker", href: "/social-media-tools/channel-checker", icon: Search, description: "Name availability" },
                    { title: "YouTube Tags", href: "/social-media-tools/youtube-tags", icon: Hash, description: "SEO keywords" },
                    { title: "YouTube Thumbs", href: "/social-media-tools/youtube-thumbnail", icon: Image, description: "HD images" },
                ]
            },
            {
                title: "Utilities",
                items: [
                    { title: "Hashtag Generator", href: "/social-media-tools/hashtag-counter", icon: Hash, description: "Trending tags" },
                    { title: "Link in Bio", href: "/social-media-tools/link-in-bio", icon: Link2, description: "Bio page builder" },
                ]
            }
        ]
    },
    {
        title: "Fun Tools",
        categories: [
            {
                title: "Time & Events",
                items: [
                    { title: "Birthday Countdown", href: "/fun-tools/birthday-countdown", icon: Calendar, description: "Days remaining" },
                    { title: "Future Age", href: "/fun-tools/future-age", icon: Clock, description: "Predict age" },
                    { title: "Anniversary Calc", href: "/fun-tools/anniversary", icon: Heart, description: "Time together" },
                ]
            }
        ]
    },
    {
        title: "Festivals",
        categories: [
            {
                title: "Holiday Tools",
                items: [
                    { title: "Christmas Font", href: "/festivals/christmas-font-converter", icon: Gift, description: "Festive text" },
                    { title: "Turkey Defrost Calc", href: "/festivals/turkey-defrost-calculator", icon: Drumstick, description: "Thawing time" },
                ]
            }
        ]
    },

]
