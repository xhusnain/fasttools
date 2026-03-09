import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const ChristmasFontConverter = dynamic(() => import("@/components/festivals/christmas-font-converter").then(mod => mod.ChristmasFontConverter), {
    loading: () => <ToolLoader />
})
import { ChristmasTheme } from "@/components/festivals/christmas-theme"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { getCurrentYear } from "@/lib/utils"
import { Trees, Sparkles, Snowflake } from "lucide-react"

const toolConfig = createToolConfig({
    toolName: "Christmas Font & Emoji Converter",
    description: "Convert your text into aesthetic Christmas fonts with emojis. Copy and paste festive text styles for Instagram, TikTok, and social media bios.",
    metaTitle: `Christmas Font Generator & Emoji Text | Copy & Paste Festive Styles`,
    metaDescription: "Free Christmas font generator! Create aesthetic holiday text with emojis (🎄 𝓜𝓮𝓻𝓻𝔂 𝓒𝓱𝓻𝓲𝓼𝓽𝓶𝓪𝓼 🎅). Perfect for Instagram bios, comments, and captions.",
    path: "/festivals/christmas-font-converter",

    header: {
        title: "🎄 Christmas Font & Emoji Converter ❄️",
        description: "Transform your text into magical holiday styles! 8+ festive fonts with emojis. Perfect for Instagram, TikTok, and making your Christmas wishes stand out.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Festivals", href: "/festivals" },
        { label: "Christmas Font Converter", href: "/festivals/christmas-font-converter" },
    ],

    content: {
        definition:
            "A Christmas Font Converter is a free tool that transforms plain text into festive Christmas-themed Unicode fonts with snowflakes, stars, and holiday decorations.",
        quickAnswer:
            "Type your text to instantly see it converted into Christmas-themed fonts and decorative styles. Choose from multiple holiday font styles. Copy the result for use in social media posts, messages, and holiday cards.",
        keyTakeaways: [
            "Converts plain text into festive Christmas-themed Unicode styles",
            "Multiple holiday font options with snowflakes and decorations",
            "Copy-paste ready — works on any platform that supports Unicode",
            "Perfect for Instagram bios, WhatsApp messages, and holiday greetings",
            "No app install needed — works directly in your browser",
        ],
        overview: "Get into the holiday spirit with our Christmas Font & Emoji Converter! This tool features 8 unique font styles including Classic Script, Gothic Fraktur, Bubble Text, and Upside-Down text. Plus 6 special emoji decorations. All conversions happen instantly in your browser - type and watch the magic happen! 🎅",

        howToSteps: [
            "Type Your Message: Enter your holiday greeting in the input box, or click a preset like 'Merry Christmas'.",
            "Explore 14+ Styles: Instantly see Script, Gothic, Bubble, Upside-Down fonts and emoji combinations.",
            "Use Quick Actions: Click '🎄 Surprise Me!' for random phrases, or 'Copy All Styles' to grab everything.",
            "One-Click Copy: Tap any copy button and paste directly to Instagram, TikTok, or WhatsApp.",
            "Check Character Limits: See live character counts for Instagram Bio (150), Twitter (280), and TikTok (80)."
        ],

        features: [
            "8 Unique Font Styles: Script, Double Struck, Gothic Fraktur, Bubble, Upside-Down, and more!",
            "6 Emoji Decorations: Snowy, Sparkles, Santa Magic, Gift Wrapped styles.",
            "Christmas Countdown: See days remaining until Christmas! 🎄",
            "Surprise Me Button: Random festive phrase generator for inspiration.",
            "Copy All Styles: Grab all 14 variations at once with one click.",
            "Preset Messages: Quick buttons for 'Merry Christmas', 'Happy Holidays', etc.",
            "Character Counters: Stay within platform limits for IG, Twitter, TikTok.",
            "Privacy First: 100% browser-based, no data sent anywhere."
        ],

        useCases: [
            "Instagram Bios: Give your profile a sparkling holiday makeover with unique fonts.",
            "Holiday Photo Captions: Make posts pop with 𝓜𝓮𝓻𝓻𝔂 𝓒𝓱𝓻𝓲𝓼𝓽𝓶𝓪𝓼 styled text.",
            "Digital Christmas Cards: Add handwritten elegance to e-cards and messages.",
            "WhatsApp Groups: Stand out with festive greetings like ❆ Happy Holidays ❆",
            "Discord & Gaming Names: Customize your username for the holiday season.",
            "TikTok Videos: Eye-catching text overlays with Christmas emojis."
        ],

        aboutTool: (
            <div className="space-y-8">
                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Trees className="h-6 w-6 text-primary" />
                        Make Your Text Sparkle This Holiday Season
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        During the holidays, everyone wants to spread extra cheer. Standard fonts just don't capture the magic! Our converter uses Unicode characters to create fonts that look like elegant calligraphy, medieval gothic script, playful bubbles, and even upside-down text. Mix them with Christmas emojis for maximum festive impact!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-lg bg-card border border-border">
                            <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-primary" />
                                Stand Out on Social Media
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                In endless feeds of standard text, your 𝓯𝓮𝓼𝓽𝓲𝓿𝓮 𝓯𝓸𝓷𝓽𝓼 will catch eyes and warm hearts. Perfect for influencers, businesses, and holiday campaigns.
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-card border border-border">
                            <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                                <Snowflake className="h-4 w-4 text-primary" />
                                Winter Aesthetic Vibes
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                From "frozen" 𝔊𝔬𝔱𝔥𝔦𝔠 text to cozy Ⓑⓤⓑⓑⓛⓔ script, match your caption to your photo's winter wonderland vibe perfectly.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        ),

        faqs: [
            {
                question: "Will these fonts work on Instagram?",
                answer: "Yes! All characters are Unicode standard, supported by Instagram, TikTok, Facebook, Twitter, WhatsApp, and most modern platforms. They work in bios, captions, comments, and DMs."
            },
            {
                question: "How many font styles are available?",
                answer: "We offer 8 unique font transformations (Script, Double Struck, Small Caps, Math Script, Gothic Fraktur, Bubble, Upside-Down, Bold Script) plus 6 emoji decoration styles. That's 14 total options!"
            },
            {
                question: "Can I use this for commercial posts?",
                answer: "Absolutely! These are standard Unicode text characters and emojis, completely free for personal and commercial use."
            },
            {
                question: "Why do some characters look like squares □?",
                answer: "This rarely happens on very old devices that don't support modern Unicode. 99%+ of smartphones and computers from 2015 onwards display them perfectly."
            },
            {
                question: "Is my text stored anywhere?",
                answer: "No! All conversion happens locally in your browser. Your text never leaves your device - it's 100% private."
            }
        ],

        relatedTools: [
            { name: "Text Case Converter", href: "/converters/text-case" },
            { name: "Turkey Defrost Calculator", href: "/festivals/turkey-defrost-calculator" }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function ChristmasFontPage() {
    return (
        <ChristmasTheme>
            <ToolPageLayout {...toolConfig.getLayoutProps(<ChristmasFontConverter />)} />
        </ChristmasTheme>
    )
}
