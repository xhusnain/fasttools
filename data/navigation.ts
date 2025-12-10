
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
    Smile,
    LucideIcon,
    BarChart,
    Lock,
    Merge,
    PenTool,
    Briefcase,
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
    Eye
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
        title: "Finance",
        categories: [
            {
                title: "Loans & Debt",
                items: [
                    { title: "Loan Calculator", href: "/finance-tools/loan-calculator", icon: DollarSign, description: "Payments & interest" },
                    { title: "Mortgage Calc", href: "/finance-tools/mortgage-calculator", icon: Briefcase, description: "Home payments" },
                ]
            },
            {
                title: "Income & Tax",
                items: [
                    { title: "Salary Calculator", href: "/calculator/salary-calculator", icon: DollarSign, description: "Net pay estimator" },
                    { title: "Tax Calculator", href: "/finance-tools/tax-calculator", icon: FileText, description: "Estimate taxes" },
                ]
            },
            {
                title: "Planning",
                items: [
                    { title: "Investment Calc", href: "/finance-tools/investment-calculator", icon: BarChart, description: "ROI estimator" },
                ]
            }
        ]
    },
    {
        title: "Health",
        categories: [
            {
                title: "Body Metrics",
                items: [
                    { title: "BMI Calculator", href: "/calculator/bmi-calculator", icon: Activity, description: "Body Mass Index" },
                    { title: "Body Fat Calc", href: "/calculator/body-fat-calculator", icon: Activity, description: "Estimate body fat" },
                ]
            },
            {
                title: "Diet",
                items: [
                    { title: "Calorie Calculator", href: "/calculator/calorie-calculator", icon: Activity, description: "Daily needs" },
                ]
            },
            {
                title: "Other",
                items: [
                    { title: "Pregnancy Calc", href: "/calculator/pregnancy-calculator", icon: Heart, description: "Due date" },
                ]
            }
        ]
    },
    {
        title: "Education",
        categories: [
            {
                title: "Grades",
                items: [
                    { title: "GPA Calculator", href: "/calculator/gpa-calculator", icon: GraduationCap, description: "Grade point avg" },
                    { title: "Percentage Calc", href: "/calculator/percentage-calculator", icon: Calculator, description: "Quick math" },
                ]
            },
            {
                title: "Statistics",
                items: [
                    { title: "Standard Deviation", href: "/calculator/standard-deviation-calculator", icon: BarChart, description: "Statistics" },
                ]
            },
            {
                title: "Misc",
                items: [
                    { title: "Concrete Calc", href: "/calculator/concrete-calculator", icon: Box, description: "Construction" },
                ]
            }
        ]
    },
    {
        title: "Fun Tools",
        categories: [
            {
                title: "Time",
                items: [
                    { title: "Age Calculator", href: "/calculator/age-calculator", icon: Clock, description: "Precise duration" },
                    { title: "Future Age", href: "/fun-tools/future-age", icon: Clock, description: "Predict age" },
                    { title: "Birthday Countdown", href: "/fun-tools/birthday-countdown", icon: Calendar, description: "Days remaining" },
                ]
            },
            {
                title: "Relations",
                items: [
                    { title: "Love Calculator", href: "/calculator/love-calculator", icon: Heart, description: "Compatibility" },
                    { title: "Pet Name Gen", href: "/ai-tools/pet-names", icon: Smile, description: "Creative names" },
                ]
            }
        ]
    },
    {
        title: "Image & AI",
        categories: [
            {
                title: "Image Editing",
                items: [
                    { title: "Background Remover", href: "/image-tools/image-background-remover", icon: Image, description: "Transparent BG" },
                    { title: "Image to Text", href: "/image-tools/image-to-text", icon: FileText, description: "OCR Extractor" },
                ]
            },
            {
                title: "AI Generation",
                items: [
                    { title: "AI QR Codes", href: "/ai-tools/qr-generator", icon: Camera, description: "Artistic QRs" },
                    { title: "AI Lyrics", href: "/ai-tools/lyrics-generator", icon: Sparkles, description: "Songwriter" },
                    { title: "AI Captions", href: "/ai-tools/caption-generator", icon: Type, description: "Social media" },
                ]
            }
        ]
    },
    {
        title: "PDF Only",
        categories: [
            {
                title: "Conversion",
                items: [
                    { title: "PDF to Word", href: "/pdf-tools/pdf-word-converter", icon: FileText, description: "Editable doc" },
                    { title: "PDF to Image", href: "/pdf-tools/pdf-to-image", icon: Image, description: "Pages to JPG" },
                ]
            },
            {
                title: "Management",
                items: [
                    { title: "Compress PDF", href: "/pdf-tools/pdf-compressor", icon: FileText, description: "Shrink file" },
                    { title: "Merge & Split", href: "/pdf-tools/pdf-splitter-merger", icon: Merge, description: "Organize" },
                    { title: "Sign PDF", href: "/pdf-tools/pdf-sign", icon: PenTool, description: "Digital signatures" },
                ]
            }
        ]
    },
    {
        title: "Social",
        categories: [
            {
                title: "Downloaders",
                items: [
                    { title: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader", icon: Video, description: "No watermark" },
                    { title: "Instagram Saver", href: "/social-media-tools/instagram-downloader", icon: Camera, description: "Save content" },
                    { title: "Insta DP Viewer", href: "/social-media-tools/instagram-dp", icon: Eye, description: "Full size profile" },
                    { title: "YouTube Thumbs", href: "/social-media-tools/youtube-thumbnail", icon: Image, description: "HD images" },
                ]
            },
            {
                title: "Growth",
                items: [
                    { title: "Hashtag Generator", href: "/social-media-tools/hashtag-counter", icon: Hash, description: "Trending tags" },
                    { title: "YouTube Tags", href: "/social-media-tools/youtube-tags", icon: Search, description: "SEO keywords" },
                    { title: "Channel Checker", href: "/social-media-tools/channel-checker", icon: Search, description: "Name availability" },
                    { title: "Link in Bio", href: "/social-media-tools/link-in-bio", icon: Globe, description: "Bio page" },
                ]
            }
        ]
    },
    {
        title: "Convert",
        categories: [
            {
                title: "Units",
                items: [
                    { title: "Unit Converter", href: "/calculator/conversion-calculator", icon: Settings, description: "Universal" },
                    { title: "Length Converter", href: "/converters/length", icon: Ruler, description: "Meters, Feet" },
                    { title: "Temp Converter", href: "/converters/temperature", icon: Thermometer, description: "C to F" },
                    { title: "File Size", href: "/converters/file-size", icon: HardDrive, description: "Bytes, MB, GB" },
                ]
            },
            {
                title: "Data",
                items: [
                    { title: "Currency", href: "/converters/currency", icon: DollarSign, description: "Live rates" },
                    { title: "Timezone", href: "/converters/timezone", icon: Globe, description: "World clock" },
                    { title: "Text Case", href: "/converters/text-case", icon: Type, description: "Formatting" },
                    { title: "JSON to CSV", href: "/dev-tools/json-to-csv", icon: FileText, description: "Data tools" },
                ]
            }
        ]
    },
    {
        title: "Developer",
        categories: [
            {
                title: "Code",
                items: [
                    { title: "Color Palette", href: "/dev-tools/color-palette", icon: Palette, description: "Schemes" },
                    { title: "Hex to RGB", href: "/dev-tools/hex-to-rgb", icon: Palette, description: "Color codes" },
                    { title: "HTML Beautifier", href: "/dev-tools/html-beautifier", icon: Code, description: "Format/Minify" },
                    { title: "Regex Tester", href: "/dev-tools/regex-tester", icon: Code, description: "Test patterns" },
                    { title: "JWT Decoder", href: "/dev-tools/jwt-decoder", icon: Lock, description: "Token debug" },
                ]
            },
            {
                title: "SEO",
                items: [
                    { title: "Meta Tags", href: "/seo-tools/meta-tags", icon: Search, description: "Generator" },
                    { title: "Keyword Density", href: "/seo-tools/keyword-density", icon: BarChart, description: "Checker" },
                    { title: "Lorem Ipsum", href: "/seo-tools/lorem-ipsum", icon: FileText, description: "Placeholder" },
                    { title: "Blog Titles", href: "/seo-tools/blog-titles", icon: Type, description: "Ideas" },
                ]
            }
        ]
    }
]
