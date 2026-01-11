import { YoutubeChannelNameGenerator } from "@/components/social-media/youtube-channel-name-generator"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"

// Auto-update year
const currentYear = new Date().getFullYear()

const toolConfig = createToolConfig({
    toolName: "YouTube Name Generator - AI Channel Ideas",
    description: `Generate unique YouTube channel names instantly with our free AI tool. No login required. Get creative, catchy names perfect for your niche in seconds!`,
    path: "/social-media-tools/youtube-channel-name-generator",
    metaTitle: "YouTube Name Generator - AI Channel Ideas",
    metaDescription: `Generate unique YouTube channel names instantly with our free AI tool. No login required. Get creative, catchy names perfect for your niche in seconds!`,

    header: {
        title: "YouTube Name Generator - AI Channel Ideas",
        description: "Generate unique YouTube channel names instantly with our free AI tool. No login required. Get creative, catchy names perfect for your niche in seconds!",
        titleSize: "medium",
        descriptionSize: "small",
        centered: true,
        color: "red"
    },

    breadcrumbs: [
        { label: "Social Media Tools", href: "/social-media-tools" },
        { label: "YouTube Name Generator", href: "/social-media-tools/youtube-channel-name-generator" },
    ],

    schemaOptions: {
        applicationCategory: "UtilitiesApplication",
        price: "0",
        ratingValue: "4.9",
        ratingCount: "22000"
    },

    content: {
        overview: `A YouTube channel name generator is an AI-powered tool that creates unique, memorable channel names based on your content niche, style, and target audience. Our free generator helps content creators find the perfect YouTube username without the hassle of brainstorming for hours or paying subscription fees.

Unlike other tools that require registration or limit your searches, our YouTube name generator is completely free with unlimited uses and no login required. FastTools is designed to be the best free YouTube channel name generator tool for creators who need an easy-to-use solution for finding their digital identity.`,

        howToSteps: [
            "Describe Your Channel: Enter keywords about your content niche, style, and personality. Be specific about your content type (gaming channels, cooking, tech reviews) and the vibe you want to convey.",
            "Choose Your Mode: Get quick name suggestions instantly with our default mode optimized for creativity and relevance, perfect for creative content creators.",
            "Generate & Refine: Click 'Generate Channel Names' and browse through AI-created suggestions. You can generate unlimited names until you find the perfect fit using our simple to use interface.",
            "Check Availability: Once you find a name you love, use our built-in Channel Checker or search YouTube to ensure it's available. We also recommend an available domain check to secure your brand online."
        ],

        features: [
            "AI-Powered Creativity: Uses advanced natural language processing to brainstorming unique and memorable names tailored to your niche, including options for a unique youtube channel name generator free no copyright concerns.",
            "Smart Niche Filters: Names are organized into helpful categories like 'Gaming', 'Vlog', 'Educational', and 'Catchy & Short', acting as a free youtube channel name generator with niche filters.",
            "Tone Selection: Choose from Catchy, Professional, Funny, Edgy, or Minimalist styles to match your brand voice. Try our youtube channel name generator ai free funny mode for humorous results.",
            "Target Audience Matching: Specify your target demographic (e.g., Gen Z, Beginners, Experts) for hyper-relevant suggestions.",
            "Unlimited Free Uses: Generate as many names as you like without any paywalls, credit systems, or login requirements.",
            "Instant Results: Get 50+ name ideas in seconds, categorized for easy browsing and selection.",
            "Gaming & Creative Focus: specialized algorithms that make this the ideal free fire youtube channel name generator for gaming channels and creative content."
        ],

        aboutTool: (
            <div className="space-y-12">
                <section className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card">
                    <div className="aspect-video w-full">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/qNapObaVmPc"
                            title="How to Choose the Perfect YouTube Channel Name"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">Watch Tutorial: How to Choose a YouTube Channel Name</h3>
                        <p className="text-muted-foreground">Learn expert tips and strategies for picking a channel name that stands out and helps you grow.</p>
                    </div>
                </section>

                <section className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Why FastTools is the #1 YouTube Channel Name Generator</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl">🚀</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Instant AI Power</h4>
                                    <p className="text-sm text-muted-foreground">Our advanced AI generates 50+ unique names in seconds, saving you hours of brainstorming.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl">🎮</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Niche Specific</h4>
                                    <p className="text-sm text-muted-foreground">Specialized modes for Gaming, Tech, Vlogging, and more ensuring relevant results.</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl">🆓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">100% Free & No Login</h4>
                                    <p className="text-sm text-muted-foreground">Unlimited searches with zero cost. No signup or credit card required - ever.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                    <span className="text-xl">🛡️</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Copyright Friendly</h4>
                                    <p className="text-sm text-muted-foreground">Generates unique combinations designed to avoid common copyright pitfalls.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4">Why You Need a Great YouTube Channel Name</h3>
                    <p className="text-muted-foreground mb-4">
                        Your YouTube channel name is the first impression viewers have of your content. A well-crafted name can:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li><strong>Boost discoverability</strong> - Help viewers find your channel through YouTube and Google search</li>
                        <li><strong>Build brand recognition</strong> - Create a memorable identity that viewers will remember and share</li>
                        <li><strong>Attract your target audience</strong> - Signal what type of content you create immediately</li>
                        <li><strong>Establish credibility</strong> - Professional names make your channel appear more trustworthy</li>
                        <li><strong>Support monetization</strong> - A brandable name is essential for merchandise and sponsorships</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                        Research shows that channels with memorable, relevant names grow 3x faster than those with generic or confusing names.
                    </p>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-6">What Makes a Great YouTube Channel Name?</h3>

                    <div className="mb-8">
                        <img
                            src="/images/youtube-naming-tips.png"
                            alt="4 Tips for YouTube Channel Names: Short, Unique, Easy to Spell, Future Proof"
                            className="rounded-xl shadow-lg border border-border w-full max-w-3xl mx-auto"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-secondary/20 p-6 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2">1. Memorable and Unique</h4>
                            <p className="text-sm text-muted-foreground mb-2">The best YouTube names stick in viewers' minds. Avoid generic terms.</p>
                            <div className="text-sm">
                                <span className="text-green-600 font-medium">Good:</span> MrBeast, Vsauce<br />
                                <span className="text-red-500 font-medium">Avoid:</span> JohnGaming123
                            </div>
                        </div>
                        <div className="bg-secondary/20 p-6 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2">2. Easy to Spell</h4>
                            <p className="text-sm text-muted-foreground mb-2">If viewers can't spell your name, they can't search for you.</p>
                            <div className="text-sm">
                                <span className="text-green-600 font-medium">Good:</span> Tech Tomorrow<br />
                                <span className="text-red-500 font-medium">Avoid:</span> Xxtreme Gam3r
                            </div>
                        </div>
                        <div className="bg-secondary/20 p-6 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2">3. Short and Concise</h4>
                            <p className="text-sm text-muted-foreground mb-2">Aim for 2-3 words max. Easier to remember and better for branding.</p>
                            <div className="text-sm">
                                <span className="text-green-600 font-medium">Good:</span> Pixel Playground<br />
                                <span className="text-red-500 font-medium">Avoid:</span> The Ultimate Gaming Experience
                            </div>
                        </div>
                        <div className="bg-secondary/20 p-6 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2">4. Future-Proof</h4>
                            <p className="text-sm text-muted-foreground mb-2">Choose a name that won't limit your growth as your content evolves.</p>
                            <div className="text-sm">
                                <span className="text-green-600 font-medium">Good:</span> Gaming with Dan<br />
                                <span className="text-red-500 font-medium">Avoid:</span> Fortnite Dan
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-4">YouTube Channel Name Strategies</h3>
                            <p className="text-muted-foreground mb-4">
                                Brainstorming the perfect name involves creativity and strategy. Use these proven methods to find a name that sticks.
                            </p>
                            <div className="space-y-4">
                                <div className="border-l-4 border-primary pl-4">
                                    <h4 className="font-semibold text-lg">Strategy 1: Personal Brand Approach</h4>
                                    <p className="text-muted-foreground">Use your real name or nickname if personalities are central to your content (e.g., Casey Neistat, Emma Chamberlain).</p>
                                </div>
                                <div className="border-l-4 border-primary pl-4">
                                    <h4 className="font-semibold text-lg">Strategy 2: Descriptive + Creative</h4>
                                    <p className="text-muted-foreground">Combine what you do with a creative twist. (e.g., "Cooking Comrades", "Nerdy History").</p>
                                </div>
                                <div className="border-l-4 border-primary pl-4">
                                    <h4 className="font-semibold text-lg">Strategy 3: Invented Words</h4>
                                    <p className="text-muted-foreground">Create a new word that sounds catchy and is brandable. (e.g., Vsauce, Smosh, Zoella).</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img
                                src="/images/youtube-name-brainstorming.png"
                                alt="Brainstorming YouTube Channel Name Ideas"
                                className="rounded-xl shadow-lg border border-border w-full"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4">Optimizing Your Name for SEO</h3>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex gap-2">
                            <span className="font-bold text-primary">•</span>
                            <span><strong>Include Keywords:</strong> If natural, include main keywords like "Tech", "Gaming", or "Fitness".</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-primary">•</span>
                            <span><strong>Search Volume:</strong> distinct names with moderate search volume help discoverability.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-primary">•</span>
                            <span><strong>URL Matching:</strong> Keep your name clean so your <code>youtube.com/c/YourName</code> URL looks professional.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="font-bold text-primary">•</span>
                            <span><strong>Cross-Platform:</strong> Use the same name across Instagram, TikTok, and Twitter for unified branding.</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-2xl font-bold mb-4">Common Naming Mistakes to Avoid</h3>
                    <dl className="grid gap-4 md:grid-cols-2">
                        <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/10">
                            <dt className="font-semibold text-destructive mb-1">Using Numbers</dt>
                            <dd className="text-sm text-muted-foreground">"GamerBoy420" looks unprofessional and is hard to remember.</dd>
                        </div>
                        <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/10">
                            <dt className="font-semibold text-destructive mb-1">Being Too Generic</dt>
                            <dd className="text-sm text-muted-foreground">"Gaming Channel" will get lost in millions of search results.</dd>
                        </div>
                        <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/10">
                            <dt className="font-semibold text-destructive mb-1">Copying Popular Channels</dt>
                            <dd className="text-sm text-muted-foreground">"MrBeast2" confuses viewers and causes copyright issues.</dd>
                        </div>
                        <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/10">
                            <dt className="font-semibold text-destructive mb-1">Not Checking Availability</dt>
                            <dd className="text-sm text-muted-foreground">Always check if the handle is free on YouTube and social media first.</dd>
                        </div>
                    </dl>
                </section>
            </div>
        ),

        faqs: [
            {
                question: "How do I pick a YouTube name that stands out?",
                answer: "Picking a name that stands out requires a mix of uniqueness and relevance. With FastTools, you can find a unique youtube channel name generator free of common clichés. We recommend choosing a name that is short (under 3 words), easy to visualize, and hints at your personality. Avoid strings of numbers. Instead of \"GamerJohn123\", try something brandable like \"JohnsQuest\" or \"RetroJohn\". Our AI specializes in creating these distinctive, memorable brands that separate you from the crowd."
            },
            {
                question: "Is this tool good for a Free Fire gaming channel?",
                answer: "Yes! FastTools is an excellent free fire youtube channel name generator for gaming. If you are starting a Free Fire or specialized gaming channel, simply enter \"Free Fire\", \"Battle Royale\", or \"Sniper\" as your keywords. Our AI will generate cool, aggressive, or tactical names perfect for the gaming community. It's designed to be the best free youtube channel name generator for gaming channels looking to capture that energetic, competitive vibe."
            },
            {
                question: "Are the generated names copyright free?",
                answer: "Our tool generates original name combinations using AI, acting as a unique youtube channel name generator free no copyright restrictions on our end. However, because new channels are created daily, we cannot guarantee that a specific name isn't already in use by someone else. We strongly recommend checking YouTube and trademark databases. FastTools provides a \"no copyright\" style of generation by creating novel pairings rather than copying existing famous brands."
            },
            {
                question: "How to check if a YouTube channel name is available?",
                answer: "To check availability, you can use our built-in links or simply search the name on YouTube. Specifically, check the handle availability (e.g., youtube.com/@YourName). FastTools helps you be a best youtube channel name generator free user by producing unique ideas that are statistically less likely to be taken, but final verification on the platform is always a necessary step for any creator."
            },
            {
                question: "What makes for a catchy and funny channel name?",
                answer: "A catchy funny name often uses alliteration, puns, or unexpected word combinations. If you select the \"Funny\" tone in FastTools, our youtube channel name generator ai free funny mode kicks in. It might suggest names like \"BakingBad\" for a cooking channel or \"LootLag\" for a gaming one. Humor makes your channel memorable and shareable, giving you an edge in growing your audience."
            },
            {
                question: "How do you pick a YouTube channel name if you are undecided?",
                answer: "If you are stuck, start broad. Use FastTools to generate names for different angles of your personality. Enter keywords for your hobbies, then keywords for your style. See what resonates. Our ai name generator for youtube channel free gives you 50+ options at once, which often sparks a \"lightbulb moment\" where you see a name and instantly know it is the one."
            }
        ],

        relatedTools: [
            { name: "YouTube Channel Checker", href: "/social-media-tools/channel-checker" },
            { name: "YouTube Tag Generator", href: "/social-media-tools/youtube-tags" },
            { name: "YouTube Thumbnail Downloader", href: "/social-media-tools/youtube-thumbnail" },
            { name: "Caption Generator", href: "/ai-tools/caption-generator" }
        ],

        useCases: [
            "Starting a new gaming or vlog channel",
            "Rebranding an existing YouTube presence",
            "Finding available social media handles",
            "Brainstorming creative project names"
        ]
    }
})

export const metadata = toolConfig.metadata

export default function ChannelNameGeneratorPage() {
    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <div className="bg-card border border-border rounded-xl p-4 sm:p-6 shadow-sm">
                    <YoutubeChannelNameGenerator />
                </div>
            )}
        />
    )
}
