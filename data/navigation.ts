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
                    { title: "Ovulation Calc", href: "/calculator/ovulation-calculator", icon: Heart },
                ]
            },
            {
                title: "Converters",
                items: [
                    { title: "List Converter", href: "/converters/list-converter", icon: Type },
                    { title: "JSON to XML Converter", href: "/converters/json-xml", icon: FileCode },
                    { title: "XML to JSON Converter", href: "/converters/xml-json", icon: FileCode },
                    { title: "TOML to YAML Converter", href: "/converters/toml-yaml", icon: FileCode },
                    { title: "TOML to JSON Converter", href: "/converters/toml-json", icon: FileCode },
                    { title: "JSON to TOML Converter", href: "/converters/json-toml", icon: FileCode },
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
                title: "Web",
                items: [
                    { title: "URL Encoder Decoder", href: "/web-tools/url-encoder", icon: Link2 },
                    { title: "Escape HTML Entities", href: "/web-tools/html-escape", icon: Link2 },
                    { title: "URL Parser", href: "/web-tools/url-parser", icon: Link2 },
                    { title: "Device Information", href: "/web-tools/device-info", icon: Link2 },
                    { title: "Auth Generator", href: "/web-tools/auth-generator", icon: Link2 },
                    { title: "Outlook Safelink Decoder", href: "/web-tools/outlook-safelink-decoder", icon: Link2 },
                    { title: "DNS Lookup & SSL Checker", href: "/web-tools/dns-ssl-checker", icon: Link2 },
                    { title: "WHOIS & Domain Lookup", href: "/web-tools/whois-lookup", icon: Link2 },
                ]
            },
            {
                title: "Developer",
                items: [
                    { title: "Cron Generator", href: "/dev-tools/cron-expression-generator", icon: Clock },
                    { title: "Unix Timestamp Converter", href: "/dev-tools/timestamp-converter", icon: Clock },
                    { title: "JSON Diff", href: "/dev-tools/json-diff", icon: FileCode },
                    { title: "Diff Checker", href: "/dev-tools/diff-checker", icon: FileCode },
                    { title: "JSON to CSV", href: "/dev-tools/json-to-csv", icon: FileText },
                    { title: "Regex Tester", href: "/dev-tools/regex-tester", icon: Code },
                    { title: "JWT Decoder", href: "/dev-tools/jwt-decoder", icon: Lock },
                    { title: "Base64 Encoder", href: "/dev-tools/base64-encoder", icon: Binary },
                    { title: "MIME Types", href: "/dev-tools/mime-types", icon: FileCode },
                    { title: "Keycode Info", href: "/dev-tools/keycode-info", icon: Code },
                    { title: "Slugify String", href: "/dev-tools/slugify-string", icon: FileCode },
                    { title: "HTML WYSIWYG Editor", href: "/dev-tools/html-wysiwyg-editor", icon: Code },
                    { title: "User-Agent Parser", href: "/dev-tools/user-agent-parser", icon: Code },
                    { title: "HTTP Status Codes", href: "/dev-tools/http-status-codes", icon: Code },
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
                    { title: "Password Generator", href: "/crypto-tools/password-generator", icon: Key },
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
                    { title: "Startup Runway", href: "/finance-tools/startup-runway-calculator", icon: TrendingUp },
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
                    { title: "AI Text Summarizer", href: "/ai-tools/text-summarizer", icon: FileText },
                    { title: "Text to Speech", href: "/ai-tools/text-to-speech", icon: Volume2 },
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
                    { title: "Background Remover", href: "/image-tools/background-remover", icon: Scissors },
                    { title: "Image Resizer", href: "/image-tools/image-resizer", icon: Maximize2 },
                    { title: "Image Compressor", href: "/image-tools/image-compressor", icon: HardDrive },
                    { title: "Image to Text", href: "/image-tools/image-to-text", icon: ScanText },
                ]
            },
            {
                title: "PDF Tools",
                items: [
                    { title: "Image to PDF", href: "/pdf-tools/image-to-pdf", icon: Images },
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
                    { title: "Word Counter", href: "/seo-tools/word-counter", icon: Hash },
                    { title: "Schema Generator", href: "/seo-tools/schema-markup-generator", icon: Code },
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
                    { title: "Meme Generator", href: "/fun-tools/meme-generator", icon: Smile },
                    { title: "Birthday Countdown", href: "/fun-tools/birthday-countdown", icon: Calendar },
                    { title: "Future Age", href: "/fun-tools/future-age", icon: Clock },
                    { title: "Anniversary Calc", href: "/fun-tools/anniversary", icon: Heart },
                    { title: "Pomodoro Timer", href: "/fun-tools/pomodoro-timer", icon: Clock },
                ]
            },
            {
                title: "Education",
                items: [
                    { title: "Citation Generator", href: "/education-tools/citation-generator", icon: GraduationCap },
                ]
            },
            {
                title: "Featured",
                items: [
                    { title: "ROAS Calculator", href: "/finance-tools/roas-calculator", icon: TrendingUp },
                    { title: "IP Subnet Calc", href: "/calculator/ip-subnet-calculator", icon: Network },
                ]
            }
        ]
    },
]
