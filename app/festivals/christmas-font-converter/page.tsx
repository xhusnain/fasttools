import { ChristmasFontConverter } from "@/components/festivals/christmas-font-converter"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { getCurrentYear } from "@/lib/utils"
import { Trees, Copy, Gift, Sparkles, Snowflake, Heart } from "lucide-react"

const toolConfig = createToolConfig({
    toolName: "Christmas Font & Emoji Converter",
    description: "Convert your text into aesthetic Christmas fonts with emojis. Copy and paste festive text styles for Instagram, TikTok, and social media bios.",
    metaTitle: `Christmas Font Generator & Emoji Text | Copy & Paste Festive Styles ${getCurrentYear()}`,
    metaDescription: "Free Christmas font generator! Create aesthetic holiday text with emojis (🎄 𝓜𝓮𝓻𝓻𝔂 𝓒𝓱𝓻𝓲𝓼𝓽𝓶𝓪𝓼 🎅). Perfect for Instagram bios, comments, and captions.",
    path: "/festivals/christmas-font-converter",
    keywords: [
        "christmas font generator", "christmas text copy paste", "festive font converter",
        "christmas emojis for instagram", "holiday text generator", "christmas aesthetic text",
        "fancy christmas fonts", "unicode christmas text", "winter fonts copy paste",
        "santa emoji font", "christmas bio ideas"
    ],

    header: {
        title: "Christmas Font & Emoji Converter",
        description: "Type your text and watch it transform into magical holiday styles! Perfect for making your Christmas wishes stand out on Instagram, TikTok, and messaging apps.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Festivals", href: "/festivals" },
        { label: "Christmas Font Converter", href: "/festivals/christmas-font-converter" },
    ],

    content: {
        overview: "Get into the holiday spirit with our Christmas Font & Emoji Converter. This tool instantly transforms plain text into decorative, festive styles using special Unicode characters and emoji combinations. It's like adding tinsel and lights to your digital messages!",

        howToSteps: [
            "Type Your Message: Enter your holiday greeting in the input box.",
            "Browse Styles: Instantly see 8+ different festive variations including Script, snowy text, and emoji-rich styles.",
            "One-Click Copy: Tap the copy button next to your favorite style.",
            "Paste & Share: Paste the result directly into Instagram, Facebook, TikTok, or WhatsApp."
        ],

        features: [
            "Instant Transformation: See results as you type.",
            "Diverse Styles: Choose from elegant script, bold snowy text, or fun emoji combinations.",
            "Universal Compatibility: Works on almost all social media platforms and devices.",
            "Privacy First: All text conversion happens right in your browser.",
            "Always Free: No sign-ups or downloads needed."
        ],

        useCases: [
            "Instagram Bios: Give your profile a seasonal makeover.",
            "Photo Captions: Make your holiday posts pop with unique typography.",
            "Christmas Cards: Add a digital handwritten touch to e-cards.",
            "Group Chats: Send festive greetings that stand out in WhatsApp groups.",
            "Discord Names: Customize your username for the holidays."
        ],

        aboutTool: (
            <div className="space-y-8">
                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Trees className="h-6 w-6 text-primary" />
                        Make Your Text Sparkle
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        During the holidays, everyone wants to spread a little extra cheer. Standard fonts can feel a bit... ba-humbug. Our tool leverages Unicode magic to unlock special characters that look like handwritten calligraphy, icy decorations, and festive art, all mixed with your favorite Christmas emojis.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-lg bg-card border border-border">
                            <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                                <Sparkles className="h-4 w-4 text-primary" />
                                Stand Out
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                In a sea of standard text, your festive fonts will catch eyes and warm hearts. Perfect for influencers and businesses running holiday campaigns.
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-card border border-border">
                            <h4 className="font-semibold text-heading-accent mb-2 flex items-center gap-2">
                                <Snowflake className="h-4 w-4 text-primary" />
                                Winter Aesthetic
                            </h4>
                            <p className="text-sm text-muted-foreground">
                                From "frozen" text styles to cozy script, match your caption to your photo's vibe perfectly.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        ),

        faqs: [
            {
                question: "Will these fonts work on Instagram?",
                answer: "Yes! The characters used are part of the Unicode standard, which Instagram and most other social platforms support. You can use them in bios, captions, and comments."
            },
            {
                question: "Can I use this for commercial posts?",
                answer: "Absolutely. These are standard text characters and emojis, free for anyone to use for any purpose."
            },
            {
                question: "Why do some characters look like squares?",
                answer: "This happens very rarely on very old devices that don't support modern Unicode standards. However, 99% of modern smartphones and computers will display them perfectly."
            }
        ],

        relatedTools: [
            { name: "Unit Converter", href: "/calculator/conversion-calculator" },
            { name: "Text Case Converter", href: "/converters/text-case" },
            { name: "Emoji Converter", href: "/fun-tools/christmas-font-converter" } // Self link for fun or switch to something else if available
        ]
    }
})

export const metadata = toolConfig.metadata

export default function ChristmasFontPage() {
    return <ToolPageLayout {...toolConfig.getLayoutProps(<ChristmasFontConverter />)} />
}
