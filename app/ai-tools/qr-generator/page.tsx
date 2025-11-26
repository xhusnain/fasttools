import type { Metadata } from "next"
import { AiQrGenerator } from "@/components/ai-qr-generator"
import { ToolPageLayout } from "@/components/tool-page-layout"
import { createMetadata } from "@/lib/metadata-base"

// Auto-update year
const currentYear = new Date().getFullYear()

const baseMetadata = createMetadata({
  title: `QR Code Generator ${currentYear} | Free WiFi, vCard & Logo QR Codes`,
  description:
    `Best free QR code generator ${currentYear}! Create unlimited QR codes - WiFi, vCard, email, WhatsApp, location. Logo embedding, bulk generation. No watermark, no sign up.`,
  path: "/ai-tools/qr-generator",
})

export const metadata: Metadata = {
  ...baseMetadata,
  category: "Utilities & Productivity",
  applicationName: "FastTools - Free QR Code Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "QR Code Generator",
    "application-name": "Free QR Code Generator",
    "msapplication-TileColor": "#ff6b35",
    "theme-color": "#ff6b35",
    "msapplication-navbutton-color": "#ff6b35",
    "rating": "General",
    "distribution": "Global",
    "coverage": "Worldwide",
    "target": "all",
    "audience": "Business Owners, Marketers, Event Planners, Individuals",
    "subject": "Free QR Code Generation for WiFi, vCard, URL, and more",
    "abstract": `Best free QR code generator ${currentYear}! Create unlimited QR codes - WiFi, vCard, email, WhatsApp, location. Logo embedding, bulk generation. No watermark, no sign up.`,
  },
  keywords: [
    // Main keywords
    "free qr code generator",
    "qr code generator",
    "qr code maker free",
    `best qr code generator ${currentYear}`,
    "advanced qr code generator",

    // Template-specific (HIGH VALUE)
    "wifi qr code generator",
    "wifi qr code generator free",
    "vcard qr code generator",
    "vcard qr code generator free",
    "business card qr code",
    "email qr code generator",
    "whatsapp qr code generator",
    "sms qr code generator",
    "phone qr code generator",
    "location qr code generator",

    // Premium features (NO COMPETITION)
    "qr code with logo free",
    "qr code logo embedding",
    "bulk qr code generator free",
    "qr code generator svg",
    "qr code generator no watermark",
    "qr code generator unlimited",

    // Customization
    "custom qr code generator",
    "qr code customization",
    "qr code color customization",
    "branded qr codes",
    "qr code with frame",
    "qr code design tool",

    // Format-related
    "svg qr code generator",
    "png qr code generator",
    "high resolution qr code",
    "print quality qr code",

    // Use cases
    "qr code for business",
    "marketing qr code",
    "restaurant menu qr code",
    "event qr code generator",
    "qr code generator online free",
    "qr code generator",
    "qr code generator free",
    "qr code generator online",
    "qr code generator adobe",
    "qr code generator bulk",
    "qr code generator line",
    "qr code generator free online",
    "qr code generator by google",
    "qr code generator url",
    "qr code generator for location",
    "qr code generator monkey",
    "qr code generator for wifi",
    "qr code generator with logo",
    "qr code generator pro",
    "qr code generator how to",
    "qr code generator website",
    "qr code generator kostenlos",
    "qr code generator for pdf",
    "qr code generator best",
    "qr code generator gratis",
    "qr code generator google free",
    "qr code generator canva",
    "qr code generator for image",
    "qr900",
    "qr code generator gratuit",
    "qr code generator business card",
    "qr code generator login",
    "qr code generator with text",
    "qr code generator free no expiration",
    "qr code generator dynamic",
    "qr code generator vcard",
    "qr code generator linkedin",
    "qr code generator svg",
    "qr code generator for whatsapp",
    "qr code generator for video",
    "qr code generator app",
    "zoho barcode generator",
    "qr code generator for google forms",
    "qr code generator by tec it",
    "qr code generator bitly",
    "qr code generator shopify",
    "qr code generator tool",
    "qr code generator with link",
    "qr code generator chrome",
    "qr code generator in excel",
    "qr code generator contact",
    "qr code generator google maps",
    "qr code generator python",
    "qr code generator software",
    "qr code generator js",
    "qr code generator dynamic free",
    "qr code generator github",
    "qr code generator kostenlos ohne anmeldung",
    "qr code generator microsoft",
    "qr code generator online free",
    "qr code generator vector",
    "qr code generator random",
    "qr code generator 128",
    "qr code generator api",
    "qr code generator address",
    "qr code generator google chrome",
    "qr code generator multiple",
    "qr code generator png",
    "qr code generator reddit",
    "qr code generator vcard free",
    "qr code generator vector file",
    "qr code generator org",
    "qr code generator simple",
    "qr code generator youtube",
    "qr code generator for google reviews",
    "qr code generator email",
    "qr code generator for website",
    "qr code generator illustrator",
    "qr code generator offline",
    "qr code generator zxing",
    "qr code generator pdf free",
    "qr code generator download",
    "qr code generator no expiration",
    "qr code generator reader",
    "qr code generator transparent background",
    "qr code generator free download",
    "qr code generator for link",
    "qr code generator design",
    "qr code generator eps",
    "qr code generator google form",
    "qr code generator logo",
    "qr code generator tracking",
    "qr code generator from link",
    "qr code generator whatsapp",
    "qr code generator react",
    "qr code generator npm",
    "qr code generator open source",
    "qr code generator for location free",
    "qr code generator contact information",
    "qr code generator excel",
    "qr code generator expire",
    "qr code generator google sheets",
    "qr code generator sign in",
    "qr code generator safe",
    "qr code generator vistaprint",
    "qr code generator upi",
    "qr code generator circle",
    "qr code generator ai",
    "qr code generator chrome extension",
    "qr code generator iphone",
    "qr code generator linux",
    "qr code generator raiffeisen",
    "qr code generator qrfy",
    "qr code generator java",
    "qr code generator barcode",
    "qr code generator permanent",
    "qr code generator without ads",
    "qr code generator free lifetime",
    "qr code generator number",
    "qr code generator google drive",
    "qr code generator in canva",
    "qr code generator kostenlos dauerhaft",
    "qr code generator mod apk",
    "qr code generator mac",
    "qr code generator no ads",
    "qr code generator react native",
    "qr code generator wix",
    "qr code generator phone number",
    "qr code generator adobe express",
    "qr code generator ad free",
    "qr code generator create your free qr codes",
    "qr code generator extension",
    "qr code generator for bank account",
    "qr code generator photo",
    "qr code generator powerpoint",
    "qr code generator tiger",
    "qr code generator vector free",
    "qr code generator io",
    "qr code generator custom",
    "qr code generator apk",
    "qr code generator google docs",
    "qr code generator html",
    "qr code generator jpg",
    "qr code generator lifetime free",
    "qr code generator rw",
    "qr code generator api free",
    "qr code generator extension for chrome",
    "qr code generator library",
    "qr code generator multiple links",
    "qr code generator no background",
    "qr code generator npci",
    "qr code generator static",
    "qr code generator spotify",
    "qr code generator svg free",
    "qr code generator pro login",
    "qr code generator payment",
    "qr code generator document",
    "qr code generator eps free",
    "qr code generator hd",
    "qr code generator map",
    "qr code generator no login",
    "qr code generator on canva",
    "qr code generator unlimited scans",
    "qr code generator contact number",
    "qr code generator bing",
    "qr code generator by link",
    "qr code generator download for pc",
    "qr code generator free for location",
    "qr code generator google review",
    "qr code generator hub",
    "qr code generator instagram logo",
    "qr code generator jana bank",
    "qr code generator me",
    "qr code generator monthly plan",
    "qr code generator permanent free",
    "qr code generator software free download",
    "qr code generator shapes",
    "qr code generator text message",
    "qr code generator zepto",
    "qr code generator laravel",
    "qr code generator chimp",
    "qr code generator direct link",
    "qr code generator small size",
    "qr code generator apk mod",
    "qr code generator cute",
    "qr code generator customer service",
    "qr code generator dinosaur",
    "qr code generator heart shape",
    "qr code generator kaywa",
    "qr code generator machine",
    "qr code generator no redirect",
    "qr code quiz maker",
    "qr code generator round",
    "qr code generator upc",
    "qr code generator vista",
    "qr code generator online free with logo",
    "qr code generator in python",
    "qr code generator does not expire",
    "qr code generator device",
    "qr code generator image free",
    "qr code generator jquery",
    "qr code generator location free",
    "qr code generator lifetime",
    "qr code generator monkey free",
    "qr code generator nz",
    "qr code generator open source online",
    "qr code generator software for pc",
    "qr code generator that lasts forever",
    "qr code generator to link",
    "qr code generator to website",
    "qr code generator unlimited",
    "qr code generator wifi free",
    "qr code generator high quality",
    "qr code generator using python",
    "qr code generator edge",
    "qr code generator to email",
    "qr code generator 128 bulk",
    "qr code generator 3ds",
    "qr code generator 3d print",
    "qr code jazzcash",
    "dragon ball qr code generator 6th anniversary",
    "qr 9592",
    "qr code generator app free",
    "qr code generator amazon",
    "qr code generator app for pc",
    "qr code generator blinkit",
    "qr code generator in php with source code",
    "qr code generator in word",
    "qr code generator in chrome",
    "qr code generator in google sheets",
    "qr code generator linktree",
    "qr code generator maps location",
    "qr code generator microsoft word",
    "qr code generator no expiration free",
    "qr code generator qr code generator",
    "qr code generator using link",
    "qr code generator video free",
    "qr code generator visiting card",
    "qr code generator whatsapp number",
    "qr code generator with number",
    "qr code generator youtube link",
    "qr code generator hubspot",
    "qr code generator heart",
    "qr code generator hugging face",
    "qr code generator 100 free",
    "qr code generator bulk free",
    "qr code generator data matrix",
    "qr code generator email address",
    "qr code generator google extension",
    "qr code generator how long does it last",
    "qr code generator json",
    "qr code generator js library",
    "qr code generator liner",
    "qr code generator mobile number",
    "qr code generator non expiring",
    "qr code generator of location",
    "qr code generator qr monkey",
    "qr code generator qrstuff",
    "qr code generator tqrcg",
    "qr code generator upi id",
    "qr code generator youtube video",
    "qr code generator for zoom meeting",
    "qr code generator office 365",
    "qr code generator 417",
    "qr code generator discord",
    "qr code generator explorer",
    "qr code generator gcash",
    "qr code generator html css js",
    "qr code generator no sign in",
    "qr code generator one time payment",
    "qr code generator online free download",
    "qr code generator of pdf",
    "qr code generator on iphone",
    "qr code generator through link",
    "qr code generator the knot",
    "qr code generator unlimited time",
    "qr code generator url free",
    "qr code generator unique",
    "qr code generator without watermark",
    "qr code generator ybl",
    "qr code generator base64",
    "qr code generator 2d",
    "qr code generator by canva",
    "qr code generator different shapes",
    "qr code generator excel formula",
    "qr code generator eventbrite",
    "qr code generator link free",
    "qr code generator no watermark",
    "qr code generator of image",
    "qr code generator react js",
    "qr code generator rectangle",
    "qr code generator text free",
    "qr code generator unlimited scans free",
    "qr code generator unlimited free",
    "qr code generator via link",
    "qr code generator voice recording",
    "qr code generator ykart",
    "qr code generator zoho",
    "qr code generator venmo",
    "qr code generator laravel plugin",
    "qr code generator 1000 characters",
    "qr code generator 25x25",
    "qr code generator 2025",
    "top 5 qr code generator",
    "qr code generator 6th anniversary",
    "qr code generator visual basic 6",
    "qr code generator utf 8",
    "qr code generator job",
    "qr code generator java spring boot",
    "qr code generator qr tiger",
    "qr code generator qr me",
    "qr code generator reliable",
    "qr code generator script illustrator",
    "qr code generator bank account number",
    "qr code generator 1.0 0.0",
    "qr code generator v2.00",
    "qr code generator free no",
    "qr code generator com o goqr me",
    "mg qr code generator 2.0 0.95",
    "qr code generator o qrstuff",
    "qr code generator o que e",
    "qr code generator 1 month free",
    "qr code generator 123",
    "qr code generator 1d",
    "qr code generator 128 free download",
    "qr code generator 16x16",
    "qr code generator 1 month",
    "qr code generator 1 year",
    "qr code generator 100x100",
    "qr code generator 100",
    "qr code generator 1 year free",
    "qr code generator 2fa",
    "qr code generator 28",
    "qr code generator 29x29",
    "qr code generator 2.0",
    "qr code generator 2 months",
    "qr code generator 2 weeks",
    "qr code generator 200mb",
    "qr code generator 30 days",
    "qr code generator 39",
    "qr code generator 32x32",
    "qr code generator 3d model",
    "qr code generator 33x33",
    "qr code generator 365",
    "qr code generator 3 step",
    "qr code generator 3 months",
    "qr code generator 3 links",
    "qr code maker 3",
    "qr code generator 4000 characters",
    "qr code generator 500mb",
    "qr code generator 50x50",
    "qr code generator 57x57",
    "qr code version 5 generator",
    "bootstrap 5 qr code generator",
    "top 5 free qr code generator",
    "qr code generator 64x64",
    "qr code generator 6 months",
    "qr code version 6 generator",
    "free qr code generator for 6 months",
    "66qrcode ultimate qr code generator & url shortener",
    "66qrcode ultimate qr code generator",
    "qr code generator .net 8",
    "php 8 qr code generator",
    "8 bit qr code generator",
    "qr code generator iso 8859 1",
    "qr code creator v6 8.3 0",
    "qr 8306",
    "qr code generator 93",
    "9x9 qr code generator",
    "qr studio 090",
    "qr code generator app design",
    "qr code generator error correction",
    "qr code generator hovercode",
    "qr code generator how to use",
    "qr code generator heart shape free",
    "qr code generator jk bank",
    "qr code generator jana",
    "qr code generator json data",
    "qr code generator ksu",
    "qr code generator ksa",
    "qr code generator khmer",
    "qr code generator kids",
    "qr code generator kya hota hai",
    "qr code generator kit",
    "qr code generator kenya",
    "qr code generator meezan bank",
    "qr code generator me",
    "qr code generator meezan",
    "qr code generator mobile",
    "qr code generator mobile app",
    "qr code generator mac download",
    "qr code generator online api",
    "qr code generator plugin",
    "qr code generator power",
    "qr code generator png download",
    "qr code generator qr code",
    "qr code generator react native android",
    "qr code generator react native ios",
    "qr code generator reader app",
    "qr code generator rd",
    "qr code generator raster",
    "qr code generator red",
    "qr code generator round free",
    "qr code generator rast",
    "qr code generator rsa",
    "qr code generator register",
    "qr code generator registration",
    "qr code generator reseller",
    "qr code generator reseller program",
    "qr code generator reseller api",
    "qr code generator reseller login",
    "qr code generator rss",
    "qr code generator routes",
    "qr code generator rtl",

    // High-volume search keywords (3.4M+ searches)
    "the qr code generator",
    "qr-code generator",
    "make qr code generator",
    "canvas qr code generator",

    // Mass/Bulk generation (HIGH VALUE)
    "mass qr code generator",
    "bulk qr code generator 128",
    "free bulk qr code generator",

    // Platform-specific
    "canva qr code generator",
    "adobe express qr code generator",
    "qr code generator google",
    "upi qr code generator",
    "qr code generator monkey",
    "qrcode monkey qr code generator",
    "qr code monkey qr code generator",

    // Premium features competitors charge for
    "customizable qr code generator",
    "qr code generator professional",
    "qr code generator site",
    "qr code generator how to",
    "how to qr code generator",
    "how to make a qr code generator",
    "how to make qr code generator",

    // Free/No limitations (HIGH INTENT)
    "qr code generator kostenlos",
    "gratis qr code generator",
    "qr code generator gratuit",
    "best qr code generator free",
    "free qr code generator google",
    "free qr code generator no sign up",
    "qr code generator free no expiration",
    "free qr code generator no expiration",
    "free qr code generator that doesn't expire",
    "qr code generator no sign up",
    "qr code generator free no sign up",

    // Logo/Customization
    "logo qr code generator free",
    "qr code generator with link",
    "beautiful qr code generator",
    "stylish qr code generator",
    "pretty qr code generator",
    "cool qr code generator",
    "art qr code generator",
    "designed qr code generator",
    "design qr code generator",
    "circle qr code generator",
    "circular qr code generator",
    "rectangular qr code generator",

    // Contact/vCard specific
    "qr code generator contact info",
    "vcf qr code generator",
    "free qr code generator for vcard",
    "contact qr code generator",

    // Social media
    "qr code generator for linkedin",
    "fb qr code generator",
    "facebook qr code generator",
    "instagram qr code generator",

    // Link/URL specific
    "link to qr code generator",
    "url to qr code generator",
    "bit ly qr code generator",

    // Technical/Developer
    "javascript qr code generator",
    "qr code generator js",
    "qr code generator python",
    "qr code generator github",
    "qr code generator npm",
    "reactjs qr code generator",
    "qr code generator react",
    "php qr code generator",
    "open source qr code generator",
    "qr code generator api",
    "zxing qr code generator",
    "qr code generator zxing",

    // Format/Export options
    "qr code generator vector",
    "qr code generator png",
    "transparent qr code generator",
    "transparent background qr code generator",
    "qr code generator white",
    "white qr code generator",
    "small qr code generator",
    "micro qr code generator",

    // Business/Professional
    "website qr code generator",
    "web qr code generator",
    "qr code generator for website",
    "qr code generator for chrome",
    "qr code generator for google chrome",
    "shopify qr code generator",
    "wix qr code generator",
    "wix com qr code generator",
    "vistaprint qr code generator",

    // Review/Feedback
    "google reviews qr code generator",
    "google review qr code generator",
    "qr code generator for google review",

    // Location/Maps
    "qr code generator google map",
    "map qr code generator",
    "location qr code generator free",

    // Google Forms
    "qr code generator for google forms",
    "qr code generator for google form",
    "google form qr code generator",

    // Tools/Resources
    "qr code generator tool",
    "qr code generator tools",
    "qr code generator program",
    "simple qr code generator",
    "qr code generator simple",

    // Dynamic/Static
    "qr code generator dynamic",
    "qr code generator dynamic free",
    "static qr code generator",

    // QR Tiger/Competitors
    "qr tiger qr code generator",
    "me qr code generator",
    "me qr qr code generator",
    "unitag qr code generator",
    "uniqode qr code generator",
    "qr code generator com",

    // Scanning/Reading
    "qr code generator scan",
    "qr code generator reader",
    "scan qr code generator",

    // Barcode related
    "barcode qr code generator",
    "qr code generator 128",

    // E-commerce/Payment
    "gcash qr code generator",
    "universal upi qr code generator",
    "npci qr code generator",
    "qr code generator postfinance",

    // Microsoft/Adobe
    "microsoft qr code generator",

    // Special features
    "qr code generator offline",
    "qr code generator for illustrator",
    "qr code generator in excel",
    "permanent qr code generator",
    "qr code generator org",
    "universal qr code generator",
    "cheap qr code generator",
    "download qr code generator",
    "qr code generator free download",
    "free qr code generator reddit",
    "reddit qr code generator",
    "qr code generator multiple",
    "qr code generator random",
    "qr code generator youtube",
    "youtube qr code generator",

    // Email
    "email qr code generator",

    // PDF
    "qr code generator free pdf",
    "pdf to qr code generator",

    // Text/Words
    "qr code generator for text",
    "qr code generator for words",

    // Video
    "qr code generator video",

    // App
    "qr code generator for app",
    "make your own qr code generator",
    "create my own qr code generator",
    "my qr code generator",

    // AI
    "a i qr code generator",
    "hugging face qr code generator",

    // WhatsApp
    "whatsapp qr code generator",

    // Dragon Ball Legends (niche but specific)
    "dragon ball legends qr code generator",
    "dbl qr code generator",

    // Reference URLs
    "https www qr code generator com",

    // Conversion keywords (HIGH COMMERCIAL INTENT - 9.9K searches)
    "link to qr code generator",
    "url to qr code generator",
    "pdf to qr code generator",
    "image to qr code generator free",
    "url to qr code generator free",
    "number to qr code generator",
    "upi to qr code generator",
    "link to qr code generator online free",
    "photo to qr code generator",
    "link to qr code generator free",
    "to qr code generator",

    // Popular brand/platform searches
    "the qr code generator google",
    "the qr code generator free",
    "the qr code generator tqrcg",
    "the qr code generator reviews",
    "the qr code generator api",
    "the qr code generator pricing",
    "the qr code generator photos",
    "the qr code generator online",
    "the qr code generator chrome",
    "the qr code generator address",
    "the qr code generator free online",
    "the qr code generator login",
    "the qr code generator extension",
    "the qr code generator app",

    // No limitations (HIGH CONVERSION KEYWORDS)
    "no expiry qr code generator",
    "no login qr code generator",
    "no background qr code generator",
    "no expiry qr code generator free",
    "serial no qr code generator",
    "no redirect qr code generator",

    // API/Developer searches
    "api for qr code generator",

    // Application searches
    "app for qr code generator",
    "qr code generator and scanner app",
    "qr code generator and scanner mod apk",

    // Logo specific
    "qr code with logo free generator",
    "logo with qr code generator",

    // Software/Tools
    "software for qr code generator",
    "program for qr code generator",
    "website for qr code generator",

    // Free variations
    "make qr code generator free",
    "free qr code generator small size",
    "for free qr code generator",

    // Platform-specific queries
    "is qr code generator in canva free",
    "is qr code generator safe reddit",
    "canva for qr code generator",

    // General searches
    "google for qr code generator",
    "link for qr code generator",
    "ppt for qr code generator",
    "javascript for qr code generator",
    "ai for qr code generator",
    "url for qr code generator",

    // Scanner + Generator (2.9K searches)
    "qr scanner and generator",

    // Business searches (HIGH CPC - $2.61)
    "qr code generator companies",

    // Hardware integration (HIGH CPC - $1.95)
    "qr code generator and printer",

    // Learning/Examples
    "qr code generator example",

    // Feature combinations
    "qr code generator and download",
    "qr code generator and tracker free",
    "qr code generator and url shortener",
    "qr code generator free and no expiration",
    "qr code generator and reader free download",
    "qr code generator and analytics",
    "qr code generator and tracking software",
    "qr code generator and print",
    "qr code generator and editor",
    "qr code generator and download free",
    "qr code generator and link",
    "qr code generator and design"
  ]
}

export default function QrGeneratorPage() {
  const toolContent = {
    toolName: "QR Code Generator",
    overview: `Best free QR code generator ${currentYear}! Create unlimited QR codes - WiFi, vCard, email, WhatsApp, location. Logo embedding, bulk generation. No watermark, no sign up. Our advanced tool allows you to generate high-quality, scannable QR codes for various purposes, from business cards to restaurant menus, all completely free.`,
    howToSteps: [
      "Select the type of QR code you want to create (URL, WiFi, vCard, Email, etc.) from the tabs.",
      "Enter the required information (website link, network details, contact info) into the input fields.",
      "Customize your QR code by choosing colors, adding a logo, or adjusting the design style.",
      "Preview your QR code to ensure it looks exactly how you want it.",
      "Click 'Download' to save your high-resolution QR code in PNG or SVG format instantly."
    ],
    features: [
      "Multiple Types: Generate QR codes for URLs, WiFi, vCards, Email, SMS, WhatsApp, and more.",
      "Customization: Personalize colors, add logos, and choose from different patterns and frames.",
      "High Resolution: Download print-ready QR codes in PNG and SVG formats.",
      "No Expiration: Your generated QR codes will never expire and work forever.",
      "Privacy Focused: All processing happens in your browser; no data is stored on our servers.",
      "100% Free: Unlimited generation with no watermarks, sign-ups, or hidden fees."
    ],
    aboutTool: `
      ### Comprehensive QR Code Solutions
      Our free QR code generator is a powerful tool designed for both personal and professional use. Whether you need a simple URL code for a flyer or a complex vCard for networking, our platform handles it all. We support a wide range of data types including text, email, SMS, phone numbers, geolocation, and WiFi credentials.

      ### Customization & Branding
      Stand out with branded QR codes. Our tool allows you to integrate your company logo, choose custom colors to match your brand identity, and select from various frame designs. This makes your QR codes not just functional, but also a part of your visual marketing strategy.

      ### High-Quality Output for Print & Web
      We understand the importance of quality. That's why our generator provides high-resolution downloads in both PNG and SVG formats. SVG files are perfect for large-scale printing as they can be scaled without losing quality, while PNGs are ideal for digital use on websites and social media.

      ### Secure & Private
      Your privacy is our priority. Unlike many other generators, our tool processes your data locally in your browser. We do not store your information or track your scans, ensuring that your data remains yours alone.
    `,
    faqs: [
      {
        question: "Is this QR code generator truly free?",
        answer: "Yes, our QR code generator is 100% free to use. There are no hidden costs, subscriptions, or limits on the number of QR codes you can generate."
      },
      {
        question: "Do the QR codes expire?",
        answer: "No, the QR codes generated with our tool are static and do not expire. They will work forever as long as the information you encoded (like the website URL) remains valid."
      },
      {
        question: "Can I add my logo to the QR code?",
        answer: "Absolutely! You can upload your own logo or choose from a library of popular social media icons to embed in the center of your QR code."
      },
      {
        question: "What formats can I download?",
        answer: "You can download your QR codes in high-quality PNG format for digital use and SVG format for professional printing and scaling."
      },
      {
        question: "Is there a limit to how many scans my QR code can get?",
        answer: "There are no scan limits. Your QR codes can be scanned an unlimited number of times by an unlimited number of users."
      },
      {
        question: "Can I generate a QR code for WiFi?",
        answer: "Yes, our tool includes a dedicated WiFi QR code generator. Simply enter your network name (SSID) and password, and guests can connect instantly by scanning the code."
      }
    ],
    relatedTools: [
      { name: "Caption Generator", href: "/ai-tools/caption-generator" },
      { name: "Lyrics Generator", href: "/ai-tools/lyrics-generator" },
      { name: "Pet Name Generator", href: "/ai-tools/pet-names" },
      { name: "Link in Bio", href: "/social-media-tools/link-in-bio" },
      { name: "Barcode Generator", href: "/finance-tools/barcode-generator" }
    ],
    useCases: [
      "Restaurants creating digital menus",
      "Businesses sharing contact info via vCards",
      "Event organizers managing check-ins",
      "Marketers tracking campaign engagement",
      "Retailers providing product details",
      "Homeowners sharing WiFi access easily"
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free QR Code Generator - WiFi, vCard, URL & More",
        description: "Create unlimited, customizable QR codes for free. Support for WiFi, vCard, URL, Email, and more. Add logos, colors, and download in high resolution. No sign up required.",
        titleSize: "medium",
        descriptionSize: "small",
        centered: true,
        color: "blue"
      }}
      breadcrumbs={[
        { label: "AI Tools", href: "/ai-tools" },
        { label: "QR Generator", href: "/ai-tools/qr-generator" },
      ]}
      toolComponent={
        <div className="bg-card border border-border rounded-xl p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 shadow-sm">
          <AiQrGenerator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: `QR Code Generator ${currentYear} | Free WiFi, vCard & Logo QR Codes`,
        description: `Best free QR code generator ${currentYear}! Create unlimited QR codes - WiFi, vCard, email, WhatsApp, location. Logo embedding, bulk generation. No watermark, no sign up.`,
        path: "/ai-tools/qr-generator"
      }}
    />
  )
}
