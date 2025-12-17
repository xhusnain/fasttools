"use client"

import { useState } from "react"
import Link from "next/link"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GBadge } from "@/ui/gbadge"
import { GLoader } from "@/ui/gloader"
import { useToast } from "@/ui/gtoast"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { Copy, Sparkles, Download, Youtube, Play } from "lucide-react"

export function YoutubeChannelNameGenerator() {
    const [topic, setTopic] = useState("")
    const [keywords, setKeywords] = useState("")
    const [tone, setTone] = useState("Catchy")
    const [targetAudience, setTargetAudience] = useState("")

    const [categorizedNames, setCategorizedNames] = useState<Record<string, string[]> | null>(null)
    const [loading, setLoading] = useState(false)
    const [copiedName, setCopiedName] = useState("")
    const [loadingProgress, setLoadingProgress] = useState(0)

    const { showToast, GToastContainer } = useToast()

    const generateNames = async () => {
        if (!topic.trim()) {
            showToast("warning", "Please enter a topic or niche")
            return
        }

        setLoading(true)
        setCategorizedNames(null)
        setLoadingProgress(0)

        // Simulate progress
        const progressInterval = setInterval(() => {
            setLoadingProgress((prev) => {
                if (prev >= 95) return prev
                return prev + Math.random() * 10
            })
        }, 300)

        try {
            const response = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "generate-channel-names",
                    data: {
                        topic,
                        keywords,
                        tone,
                        targetAudience
                    }
                }),
            })

            const result = await response.json()

            clearInterval(progressInterval)
            setLoadingProgress(100)

            if (response.ok && result.success) {
                setCategorizedNames(result.suggestions)
                showToast("success", "Channel names generated successfully!")
            } else {
                console.error("Error:", result.error)
                showToast("error", result.error || "Failed to generate names. Please try again.")
            }
        } catch (error) {
            clearInterval(progressInterval)
            console.error("Error generating names:", error)
            showToast("error", "An error occurred. Please try again.")
        } finally {
            setTimeout(() => {
                setLoading(false)
                setLoadingProgress(0)
            }, 500)
        }
    }

    const copyName = (name: string) => {
        void navigator.clipboard.writeText(name)
        setCopiedName(name)
        showToast("success", "Name copied to clipboard!", 2000)
        setTimeout(() => setCopiedName(""), 2000)
    }

    const downloadNames = () => {
        if (!categorizedNames) return

        let content = "📺 AI-Generated Youtube Channel Names\n"
        content += "=".repeat(50) + "\n\n"
        content += `Topic: ${topic}\n`
        if (keywords) content += `Keywords: ${keywords}\n`
        content += `Tone: ${tone}\n`
        content += "-".repeat(50) + "\n\n"

            ; (Object.entries(categorizedNames)).forEach(([category, names]) => {
                if (names.length > 0) {
                    content += `\n${category.toUpperCase()}:\n`
                    content += "-".repeat(30) + "\n"
                    names.forEach((name) => {
                        content += `• ${name}\n`
                    })
                }
            })

        const blob = new Blob([content], { type: "text/plain" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `youtube-names-${topic.replace(/\s+/g, "-").toLowerCase()}-${Date.now()}.txt`
        a.click()
        URL.revokeObjectURL(url)
        showToast("success", "Channel names downloaded!")
    }

    const getTotalNamesCount = () => {
        if (!categorizedNames) return 0
        return Object.values(categorizedNames).reduce((sum, names) => sum + names.length, 0)
    }

    return (
        <div className="space-y-8">
            <GToastContainer />
            <div className="grid gap-6 md:grid-cols-2">
                {/* Topic/Niche */}
                <div className="space-y-2">
                    <GLabel htmlFor="topic" className="text-sm font-medium">
                        Channel Topic / Niche <span className="text-red-500">*</span>
                    </GLabel>
                    <GInput
                        id="topic"
                        placeholder="e.g., Tech Reviews, Gaming, Cooking, Travel Vlogs"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="border-2 border-primary/20 focus:border-primary h-12"
                    />
                </div>

                {/* Keywords */}
                <div className="space-y-2">
                    <GLabel htmlFor="keywords" className="text-sm font-medium">
                        Keywords to Include (Optional)
                    </GLabel>
                    <GInput
                        id="keywords"
                        placeholder="e.g., tech, play, daily, yummy, world"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        className="border-2 border-primary/20 focus:border-primary h-12"
                    />
                </div>

                {/* Tone */}
                <div className="space-y-2">
                    <GLabel htmlFor="tone" className="text-sm font-medium">Tone / Style</GLabel>
                    <GSelect value={tone} onValueChange={setTone}>
                        <GSelectTrigger className="border-2 border-primary/20 focus:border-primary h-12">
                            <GSelectValue />
                        </GSelectTrigger>
                        <GSelectContent>
                            <GSelectItem value="Catchy">Catchy & Memorable</GSelectItem>
                            <GSelectItem value="Professional">Professional & Serious</GSelectItem>
                            <GSelectItem value="Funny">Funny & Humorous</GSelectItem>
                            <GSelectItem value="Edgy">Edgy & Modern</GSelectItem>
                            <GSelectItem value="Cute">Cute & Friendly</GSelectItem>
                            <GSelectItem value="Luxury">Luxury & Premium</GSelectItem>
                            <GSelectItem value="Minimalist">Minimalist & Clean</GSelectItem>
                        </GSelectContent>
                    </GSelect>
                </div>

                {/* Target Audience */}
                <div className="space-y-2">
                    <GLabel htmlFor="targetAudience" className="text-sm font-medium">
                        Target Audience (Optional)
                    </GLabel>
                    <GInput
                        id="targetAudience"
                        placeholder="e.g., Gen Z, Tech Enthusiasts, Beginners, Moms"
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                        className="border-2 border-primary/20 focus:border-primary h-12"
                    />
                </div>
            </div>

            <GButton
                onClick={generateNames}
                disabled={loading}
                isLoading={loading}
                className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-[#FF0000] to-[#cc0000] hover:from-[#FF0000]/90 hover:to-[#cc0000]/90 text-white shadow-lg shadow-red-500/20"
            >
                {loading ? "Generating Channel Names..." : (
                    <>
                        <Youtube className="mr-2 h-6 w-6" />
                        Generate YouTube Channel Names
                    </>
                )}
            </GButton>

            {/* Tutorial Video Link */}
            <Link
                href="/tutorials/youtube-channel-name-guide"
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl hover:border-primary/40 transition-all group"
            >
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FF0000]/10 group-hover:bg-[#FF0000]/20 transition-colors">
                    <Play className="h-5 w-5 text-[#FF0000]" />
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        Watch: How to Choose the Perfect Channel Name
                    </h4>
                    <p className="text-sm text-muted-foreground">
                        Learn expert naming strategies in our 8-minute video tutorial
                    </p>
                </div>
            </Link>

            {/* Loading Progress */}
            {loading && (
                <GCard className="space-y-4 animate-fade-in bg-card/50 border-primary/10">
                    <GCardContent className="flex flex-col items-center justify-center gap-4 py-8">
                        <GLoader size="lg" className="text-[#FF0000]" />
                        <p className="text-lg font-medium text-foreground/80">
                            Brainstorming catchy names for your channel...
                        </p>

                        <div className="w-full max-w-md space-y-2 mt-4">
                            <div className="flex justify-between text-sm text-muted-foreground">
                                <span>Generating ideas...</span>
                                <span>{Math.round(loadingProgress)}%</span>
                            </div>
                            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                                <div
                                    className="h-full bg-[#FF0000] transition-all duration-300 ease-out rounded-full"
                                    style={{ width: `${loadingProgress}%` }}
                                />
                            </div>
                        </div>
                    </GCardContent>
                </GCard>
            )}

            {/* Results */}
            {categorizedNames && (
                <div className="space-y-8 animate-fade-in">
                    <div className="flex items-center justify-between border-b pb-4">
                        <div>
                            <h3 className="font-bold text-2xl flex items-center gap-2">
                                <Sparkles className="h-6 w-6 text-[#FF0000]" />
                                {getTotalNamesCount()} Channel Name Ideas
                            </h3>
                            <p className="text-muted-foreground mt-1">
                                Found perfect matches for "{topic}"
                            </p>
                        </div>
                        <GButton
                            variant="outline"
                            onClick={downloadNames}
                            className="flex items-center gap-2"
                        >
                            <Download className="h-4 w-4" />
                            Download List
                        </GButton>
                    </div>

                    <div className="grid gap-6">
                        {Object.entries(categorizedNames).map(([category, names]) => {
                            if (names.length === 0) return null
                            return (
                                <GCard key={category}>
                                    <GCardHeader>
                                        <GCardTitle className=" text-[#FF0000] flex items-center gap-2">
                                            {category}
                                            <GBadge variant="secondary" className="rounded-full">
                                                {names.length}
                                            </GBadge>
                                        </GCardTitle>
                                    </GCardHeader>
                                    <GCardContent>
                                        <div className="grid gap-3 sm:grid-cols-2 Ig:grid-cols-3 xl:grid-cols-4">
                                            {names.map((name, index) => (
                                                <div
                                                    key={index}
                                                    className="group relative flex items-center justify-between p-3 bg-secondary/30 hover:bg-secondary rounded-lg border border-transparent hover:border-primary/20 transition-all cursor-pointer"
                                                    onClick={() => copyName(name)}
                                                >
                                                    <span className="font-medium text-foreground/90">{name}</span>
                                                    {copiedName === name ? (
                                                        <span className="text-green-500 text-xs font-bold px-2">Copied!</span>
                                                    ) : (
                                                        <Copy className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </GCardContent>
                                </GCard>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
