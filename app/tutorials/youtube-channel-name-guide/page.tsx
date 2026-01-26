import { Metadata } from "next"
import Link from "next/link"
import { createMetadata } from "@/lib/metadata-base"
import { Play, ArrowRight, Clock, CheckCircle } from "lucide-react"

const VIDEO_ID = "qNapObaVmPc"
const VIDEO_TITLE = "How to Choose the Perfect YouTube Channel Name"
const VIDEO_DESCRIPTION = "Learn expert tips and strategies for picking a YouTube channel name that stands out, builds your brand, and helps you grow your audience. This comprehensive guide covers naming strategies, common mistakes to avoid, and SEO optimization tips."
const VIDEO_THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`
const VIDEO_DURATION = "PT8M30S" // ISO 8601 duration format (adjust if needed)
const UPLOAD_DATE = "2024-01-15"

export const metadata: Metadata = createMetadata({
    title: "How to Choose the Perfect YouTube Channel Name - Video Tutorial",
    description: VIDEO_DESCRIPTION,
    path: "/tutorials/youtube-channel-name-guide",
    breadcrumbs: [
        { label: "Tutorials", href: "/tutorials" },
        { label: "YouTube Channel Name Guide", href: "/tutorials/youtube-channel-name-guide" }
    ],
    video: {
        id: VIDEO_ID,
        title: VIDEO_TITLE,
        description: VIDEO_DESCRIPTION,
        uploadDate: UPLOAD_DATE,
        duration: VIDEO_DURATION
    }
})

export default function YouTubeChannelNameGuidePage() {
    const timestamps = [
        { time: "0:00", label: "Introduction" },
        { time: "0:45", label: "Why Your Channel Name Matters" },
        { time: "2:10", label: "Strategy 1: Personal Branding" },
        { time: "3:30", label: "Strategy 2: Descriptive Names" },
        { time: "4:45", label: "Strategy 3: Invented Words" },
        { time: "5:50", label: "Common Mistakes to Avoid" },
        { time: "7:00", label: "SEO Tips for Channel Names" },
        { time: "8:00", label: "Final Tips & Summary" },
    ]

    return (
        <>

            <div className="min-h-screen bg-background">
                {/* Hero Video Section - Primary Content */}
                <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
                    <div className="container max-w-5xl mx-auto px-4">
                        {/* Breadcrumb */}
                        <nav className="mb-6 text-sm text-muted-foreground">
                            <ol className="flex items-center gap-2">
                                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                                <li>/</li>
                                <li><span className="text-foreground">Tutorials</span></li>
                                <li>/</li>
                                <li className="text-foreground font-medium">YouTube Channel Name Guide</li>
                            </ol>
                        </nav>

                        {/* Video Title */}
                        <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                            {VIDEO_TITLE}
                        </h1>

                        {/* Video Player - Main Focus */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-black">
                            <div className="aspect-video w-full">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                                    title={VIDEO_TITLE}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        {/* Video Meta Info */}
                        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Play className="h-4 w-4" />
                                <span>Video Tutorial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>~8 minutes</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-8 md:py-12">
                    <div className="container max-w-5xl mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Video Description */}
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-foreground mb-3">About This Video</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {VIDEO_DESCRIPTION}
                                    </p>
                                </div>

                                {/* Key Takeaways */}
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        What You&apos;ll Learn
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="text-muted-foreground">How to create a memorable, brandable channel name</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="text-muted-foreground">3 proven naming strategies used by top creators</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="text-muted-foreground">Common naming mistakes and how to avoid them</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <span className="text-muted-foreground">SEO tips to make your channel more discoverable</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Infographic */}
                                <div className="bg-card border border-border rounded-xl p-6">
                                    <h3 className="text-lg font-semibold mb-4">5 Steps to the Perfect YouTube Name</h3>
                                    <img
                                        src="/images/youtube-name-steps.png"
                                        alt="5 Steps to the Perfect YouTube Name: 1. Brainstorm keywords, 2. Keep it short, 3. Make it unique, 4. Check availability, 5. Think long-term"
                                        className="w-full rounded-lg"
                                    />
                                </div>

                                {/* CTA to Tool */}
                                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold mb-2">Ready to Generate Your Channel Name?</h3>
                                    <p className="text-muted-foreground mb-4">
                                        Use our free AI-powered YouTube Channel Name Generator to get instant, creative name ideas.
                                    </p>
                                    <Link
                                        href="/social-media-tools/youtube-channel-name-generator"
                                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                                    >
                                        Try the Generator
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Timestamps Sidebar */}
                            <div className="md:col-span-1">
                                <div className="bg-card border border-border rounded-xl p-6 sticky top-6">
                                    <h3 className="text-lg font-semibold mb-4">Timestamps</h3>
                                    <ul className="space-y-3">
                                        {timestamps.map((ts, index) => (
                                            <li key={index} className="flex items-center gap-3">
                                                <span className="text-primary font-mono text-sm w-12">{ts.time}</span>
                                                <span className="text-muted-foreground text-sm">{ts.label}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Tools Section */}
                <section className="py-8 md:py-12 bg-muted/30">
                    <div className="container max-w-5xl mx-auto px-4">
                        <h2 className="text-xl font-bold text-foreground mb-6">Related Tools</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Link
                                href="/social-media-tools/youtube-channel-name-generator"
                                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                            >
                                <h3 className="font-semibold mb-2">YouTube Name Generator</h3>
                                <p className="text-sm text-muted-foreground">Generate unique AI-powered channel name ideas</p>
                            </Link>
                            <Link
                                href="/social-media-tools/channel-checker"
                                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                            >
                                <h3 className="font-semibold mb-2">Channel Name Checker</h3>
                                <p className="text-sm text-muted-foreground">Check if your desired name is available</p>
                            </Link>
                            <Link
                                href="/social-media-tools/youtube-tags"
                                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
                            >
                                <h3 className="font-semibold mb-2">YouTube Tag Extractor</h3>
                                <p className="text-sm text-muted-foreground">Extract tags from any YouTube video</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
