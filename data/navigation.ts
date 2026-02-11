import {
    FileCode,
    Radio,
    Binary,
    BookOpen,
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
    RefreshCw,
    Mail,
    Users,
    Home,
    Zap,
    User
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
                ]
            },
            {
                title: "Converters",
                items: [
                    { title: "YAML to TOML", href: "/converters/yaml-toml", icon: FileCode },
                    { title: "JSON to YAML Converter", href: "/converters/json-yaml", icon: FileCode },
                    { title: "YAML to JSON Converter", href: "/converters/yaml-json", icon: FileCode },
                    { title: "Text to Unicode", href: "/converters/unicode", icon: Type },
                    { title: "Text to ASCII Binary", href: "/converters/ascii-binary", icon: Binary },
                    { title: "Text to NATO Alphabet", href: "/converters/nato-phonetic", icon: Radio },
                    { title: "Base64 File Converter", href: "/converters/base64-file", icon: FileImage },
                    { title: "Integer Base Converter", href: "/converters/integer-base", icon: Binary },
                    { title: "Roman Numeral Converter", href: "/converters/roman-numeral", icon: BookOpen },
                    { title: "Currency Converter", href: "/converters/currency", icon: DollarSign },
                    { title: "Length Converter", href: "/converters/length", icon: Ruler },
                    { title: "Temperature", href: "/converters/temperature", icon: Thermometer },
                    { title: "Timezone", href: "/converters/timezone", icon: Globe },
                    { title: "File Size", href: "/converters/file-size", icon: HardDrive },
                ]
            },
            {
                title: "Developer",
                items: [
                    { title: "JSON to CSV", href: "/dev-tools/json-to-csv", icon: FileText },
                    { title: "Regex Tester", href: "/dev-tools/regex-tester", icon: Code },
                    { title: "JWT Decoder", href: "/dev-tools/jwt-decoder", icon: Lock },
                    { title: "Base64 Encoder", href: "/dev-tools/base64-encoder", icon: Binary },
                    { title: "Color Palette", href: "/dev-tools/color-palette", icon: Palette },
                    { title: "Markdown Preview", href: "/dev-tools/markdown-previewer", icon: Eye },
                    { title: "HTML Beautifier", href: "/dev-tools/html-beautifier", icon: Code },
                ]
            },
            {
                title: "Security",
                items: [
                    { title: "Hash Text", href: "/crypto-tools/hash-text", icon: RefreshCw },
                    { title: "UUID Generator", href: "/crypto-tools/uuid-generator", icon: Fingerprint },
                    { title: "Bcrypt Generator", href: "/crypto-tools/bcrypt", icon: Shield },
                    { title: "Password Analyzer", href: "/crypto-tools/password-strength-analyzer", icon: Shield },
                    { title: "Token Generator", href: "/crypto-tools/token-generator", icon: Key },
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
                    { title: "Mortgage Calc", href: "/finance-tools/mortgage-calculator", icon: DollarSign },
                    { title: "Credit Card Payoff", href: "/finance-tools/credit-card-payoff", icon: CreditCard },
                    { title: "Amortization", href: "/finance-tools/amortization-calculator", icon: FileText },
                ]
            },
            {
                title: "Investment",
                items: [
                    { title: "Investment Calc", href: "/finance-tools/investment-calculator", icon: TrendingUp },
                    { title: "Compound Interest", href: "/finance-tools/compound-interest", icon: BarChart },
                    { title: "Retirement Calc", href: "/finance-tools/retirement-calculator", icon: PiggyBank },
                    { title: "Savings Tracker", href: "/finance-tools/savings-tracker", icon: PiggyBank },
                ]
            },
            {
                title: "Daily Finance",
                items: [
                    { title: "Tip Calculator", href: "/finance-tools/tip-calculator", icon: Receipt },
                    { title: "Bill Splitter", href: "/finance-tools/bill-splitter", icon: Receipt },
                    { title: "Invoice Generator", href: "/finance-tools/invoice-generator", icon: FileText },
                    { title: "Discount Calc", href: "/finance-tools/discount-calculator", icon: Percent },
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
                    { title: "Image Compressor", href: "/image-tools/image-compressor", icon: HardDrive },
                    { title: "Image to Text", href: "/image-tools/image-to-text", icon: ScanText },
                ]
            },
            {
                title: "PDF Tools",
                items: [
                    { title: "PDF to Word", href: "/pdf-tools/pdf-word-converter", icon: FileText },
                    { title: "PDF to Image", href: "/pdf-tools/pdf-to-image", icon: FileImage },
                    { title: "Compress PDF", href: "/pdf-tools/pdf-compressor", icon: FileText },
                    { title: "Sign PDF", href: "/pdf-tools/pdf-sign", icon: PenTool },
                    { title: "Unlock PDF", href: "/pdf-tools/pdf-unlocker", icon: FileKey },
                ]
            }
        ]
    },
    {
        title: "Marketing",
        categories: [
            {
                title: "SEO Tools",
                items: [
                    { title: "Keyword Density", href: "/seo-tools/keyword-density", icon: BarChart },
                    { title: "Meta Tags", href: "/seo-tools/meta-tags", icon: Code },
                    { title: "Lorem Ipsum", href: "/seo-tools/lorem-ipsum", icon: FileText },
                    { title: "Blog Titles", href: "/seo-tools/blog-titles", icon: Type },
                ]
            },
            {
                title: "Social Media",
                items: [
                    { title: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader", icon: Video },
                    { title: "Instagram Saver", href: "/social-media-tools/instagram-downloader", icon: Camera },
                    { title: "Facebook Downloader", href: "/social-media-tools/facebook-downloader", icon: Video },
                    { title: "Pinterest Downloader", href: "/social-media-tools/pinterest-downloader", icon: Image },
                    { title: "X (Twitter) Downloader", href: "/social-media-tools/x-video-downloader", icon: Video },
                    { title: "SoundCloud Downloader", href: "/social-media-tools/soundcloud-downloader", icon: Music },
                    { title: "YouTube Downloader", href: "/social-media-tools/youtube-downloader", icon: Youtube },
                    { title: "YouTube Playlist", href: "/social-media-tools/youtube-playlist-downloader", icon: Youtube },
                    { title: "YouTube Thumbnail", href: "/social-media-tools/youtube-thumbnail", icon: Image },
                    { title: "YouTube Tags", href: "/social-media-tools/youtube-tags", icon: Hash },
                    { title: "CapCut Downloader", href: "/social-media-tools/capcut-downloader", icon: Video },
                    { title: "Douyin Downloader", href: "/social-media-tools/douyin-downloader", icon: Video },
                    { title: "Instagram DP Viewer", href: "/social-media-tools/instagram-dp", icon: User },
                    { title: "Link in Bio", href: "/social-media-tools/link-in-bio", icon: Link2 },
                    { title: "Hashtag Generator", href: "/social-media-tools/hashtag-counter", icon: Hash },
                    { title: "Channel Name Gen", href: "/social-media-tools/youtube-channel-name-generator", icon: Type },
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
                    { title: "Blog", href: "/blog", icon: BookOpen },
                    { title: "Guides", href: "/guides", icon: Sparkles },
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
                ]
            },
            {
                title: "Festivals",
                items: [
                    { title: "Christmas Font", href: "/festivals/christmas-font-converter", icon: Gift },
                    { title: "Turkey Defrost", href: "/festivals/turkey-defrost-calculator", icon: Drumstick },
                ]
            },
            {
                title: "Featured",
                items: [
                    { title: "Agent Skill Builder", href: "/dev-tools/antigravity-skill-builder", icon: Zap },
                    { title: "ROAS Calculator", href: "/finance-tools/roas-calculator", icon: TrendingUp },
                    { title: "IP Subnet Calc", href: "/calculator/ip-subnet-calculator", icon: Network },
                ]
            }
        ]
    },
]
