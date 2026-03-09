import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { GToolCard } from "@/ui/gtool-card"
import { Trees, Gift, PartyPopper } from "lucide-react"

const tools = [
    {
        title: "Christmas Font Converter",
        description: "Transform text into festive styles with emojis (🎄 𝑀𝑒𝓇𝓻𝓎 𝒞𝒽𝓇𝒾𝓈𝓉𝓂𝒶𝓈 🎅). Perfect for social media.",
        icon: Trees,
        href: "/festivals/christmas-font-converter",
        popular: true,
    },
    // Future festival tools can be added here
]

const toolConfig = createToolConfig({
    toolName: "Festivals & Events",
    description: "Creative tools for every holiday and celebration. Generate festive text, find perfect captions, and make your special moments shine online.",
    metaTitle: "Festival Tools | Christmas Fonts, Holiday Generators & More",
    metaDescription: "Creative tools for every holiday and celebration. Generate festive text, find perfect captions, and make your special moments shine online.",
    path: "/festivals",

    header: {
        title: "Festivals & Events",
        description: "Celebrate in style! A collection of tools to make your holidays, festivals, and special events even more memorable.",
        titleSize: "large",
        descriptionSize: "medium",
    },

    breadcrumbs: [
        { label: "Festivals", href: "/festivals" },
    ],

    content: {
        overview: "Welcome to your notification center for celebration! Our Festivals category is dedicated to helping you spread joy during the holidays. Whether you're looking for the perfect Christmas font, a spooky Halloween caption, or a heartfelt Valentine's message, this is your toolkit.",

        howToSteps: [
            "Select a Holiday: Choose the festival or event you are celebrating.",
            "Pick a Tool: Choose from text generators, countdowns, and more.",
            "Create & Share: Generate unique content and share it with your loved ones."
        ],

        features: [
            "Seasonal Updates: New tools added for major holidays.",
            "Themed Designs: Interfaces that match the spirit of the season.",
            "Social Ready: Content optimized for Instagram, TikTok, and more."
        ],

        useCases: [
            "Social Media Managers: Plan holiday content calendars.",
            "Party Planners: Create invitations and digital flyers.",
            "Personal Greetings: Send unique messages to friends and family."
        ],

        aboutTool: (
            <div className="space-y-8">
                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <PartyPopper className="h-6 w-6 text-primary" />
                        Why Festival Tools?
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        The internet is a big place, and standing out during the holidays can be tough. Our specialized visual and text tools give you that extra edge, helping you express your festive spirit creatively and effortlessly.
                    </p>
                </article>
            </div>
        ),

        faqs: [
            {
                question: "Are these tools free?",
                answer: "Yes, all our festival tools are 100% free to use."
            },
            {
                question: "Do you have tools for other holidays?",
                answer: "We are constantly adding new tools! Check back for Halloween, Valentine's Day, Thanksgiving, and more."
            }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function FestivalsPage() {
    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {tools.map((tool) => (
                        <GToolCard
                            key={`festivals-${tool.href}`}
                            title={tool.title}
                            description={tool.description}
                            href={tool.href}
                            icon={tool.icon}
                        />
                    ))}
                </div>
            )}
        />
    )
}
