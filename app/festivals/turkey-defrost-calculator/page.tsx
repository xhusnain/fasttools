import { TurkeyDefrostCalculator } from "@/components/festivals/turkey-defrost-calculator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import { getCurrentYear } from "@/lib/utils"
import { Calendar, ThermometerSnowflake, Clock } from "lucide-react"
import { ChristmasTheme } from "@/components/festivals/christmas-theme"

const toolConfig = createToolConfig({
    toolName: "Turkey Defrosting Deadline Calculator",
    description: "Calculate exactly when to start defrosting your turkey (Fridge vs Water). Get a calendar reminder so you don't panic on Christmas Eve.",
    metaTitle: `Turkey Defrost Time Calculator ${getCurrentYear()} | Late Turkey Rescue Tool`,
    metaDescription: "Forgot to defrost the turkey? Use our calculator to find the exact defrost time for Fridge or Cold Water methods. Add a reminder to your calendar calculation instantly.",
    path: "/festivals/turkey-defrost-calculator",
    keywords: [
        "turkey defrost calculator", "how long to defrost turkey", "when to take turkey out of freezer",
        "turkey defrost time per lb", "emergency turkey defrost", "christmas turkey calculator",
        "thanksgiving turkey defrost tool", "frozen turkey thaw time", "turkey thawing time chart"
    ],

    header: {
        title: "🦃 Turkey Defrosting Deadline Calculator",
        description: "The #1 holiday panic solver. Enter your turkey's weight and dinner time to find out exactly when to move it to the fridge.",
        titleSize: "medium",
        descriptionSize: "small",
    },

    breadcrumbs: [
        { label: "Festivals", href: "/festivals" },
        { label: "Turkey Defrost Calculator", href: "/festivals/turkey-defrost-calculator" },
    ],

    content: {
        overview: "There is nothing worse than waking up on Christmas morning to a rock-solid bird. Defrosting a turkey takes significantly longer than most people realize—sometimes days. This tool does the math for you, working backward from your dinner time to tell you the exact moment you need to start thawing.",

        howToSteps: [
            "Enter Weight: Input the weight of your turkey in lbs or kg.",
            "Choose Method: Select 'Fridge' (Recommended) or 'Cold Water' (Emergency/Faster).",
            "Set Dinner Time: Tell us when you plan to eat.",
            "Get Deadline: We calculate the start date/time. Click 'Add to Calendar' to set a reminder."
        ],

        features: [
            "Precise Timing: Calculates thaw time based on weight exact to the hour.",
            "Smart Buffer: Automatically accounts for cooking and resting time (approx 5 hours).",
            "Calendar Integration: One-click export to Google/Apple Calendar so you get a notification.",
            "Dual Methods: Supports both slow fridge thawing and rapid cold water thawing.",
            "Urgency Indicators: See at a glance if you're running out of time.",
            "Holiday Presets: Quick buttons for Thanksgiving, Christmas, and New Year's dinner."
        ],

        useCases: [
            "Holiday Planning: Schedule your fridge space days in advance.",
            "Emergency Thawing: Find out if you still have time to use the cold water method.",
            "Meal prep: Coordinate the turkey with other oven dishes."
        ],

        aboutTool: (
            <div className="space-y-8">
                <article className="space-y-6">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <ThermometerSnowflake className="h-6 w-6 text-primary" />
                        Safety First: The Rules of Defrosting
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        According to the USDA, you must keep turkeys at a safe temperature while thawing. Our calculator uses these safety standards:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-lg bg-card border border-border">
                            <h4 className="font-semibold text-heading-accent mb-2">Fridge Method (Safe & Easy)</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                <strong>Time:</strong> ~24 hours for every 5 lbs.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                This is the best method. Simply move the bird from freezer to fridge. It requires no effort but lots of time.
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-card border border-border">
                            <h4 className="font-semibold text-heading-accent mb-2">Cold Water Method (Faster)</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                                <strong>Time:</strong> ~30 minutes per lb.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Submerge the wrapped turkey in cold water. You MUST change the water every 30 minutes to keep it safe. Requires active monitoring.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        ),

        faqs: [
            {
                question: "Can I just leave it on the counter?",
                answer: "NO. This is dangerous. Bacteria grow rapidly at room temperature. Always thaw in the fridge or cold water."
            },
            {
                question: "Does this include cooking time?",
                answer: "Yes! We subtract a 5-hour buffer for cooking and resting from your eating time to find the 'Start Defrosting' deadline. This assumes you want it fully thawed and ready to go in the oven on the morning of.",
            },
            {
                question: "What if I forgot and it's too late for the fridge?",
                answer: "Switch to the 'Cold Water' method in the calculator. It's much faster (hours instead of days) but requires more work."
            }
        ],

        relatedTools: [
            { name: "Christmas Font Converter", href: "/festivals/christmas-font-converter" },
            { name: "Time Duration Calculator", href: "/calculator/time-duration" },
        ]
    }
})

export const metadata = toolConfig.metadata

export default function TurkeyDefrostPage() {
    return (
        <ChristmasTheme>
            <ToolPageLayout {...toolConfig.getLayoutProps(<TurkeyDefrostCalculator />)} />
        </ChristmasTheme>
    )
}
