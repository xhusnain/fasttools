"use client"

import { useState } from "react"
import { Copy, Download, Loader2, Sparkles, Terminal } from "lucide-react"
import { PREDEFINED_SKILLS, AgentSkill } from "@/data/antigravity-skills"

export function AgentSkillBuilder() {
    const [description, setDescription] = useState("")
    const [skillName, setSkillName] = useState("")
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [activeTab, setActiveTab] = useState<"builder" | "library">("builder")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string>("all")

    const categories = ["all", "coding", "debugging", "documentation", "testing", "productivity", "devops", "other"]

    const filteredSkills = PREDEFINED_SKILLS.filter(skill => {
        const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const handleGenerate = async () => {
        if (!description.trim()) return

        setLoading(true)
        setError(null)
        setResult(null)

        try {
            const response = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    action: "generate-agent-skill",
                    data: {
                        description,
                        skillName: skillName.trim() || undefined
                    }
                })
            })

            const data = await response.json()

            if (!data.success) {
                throw new Error(data.error || "Failed to generate skill")
            }

            setResult(data.skillContent)
        } catch (err: any) {
            setError(err.message || "An unexpected error occurred")
        } finally {
            setLoading(false)
        }
    }

    const handleCopy = (text: string) => {
        void navigator.clipboard.writeText(text)
        // Could add toast notification here
    }

    const handleDownload = (content: string, filename: string) => {
        const blob = new Blob([content], { type: "text/markdown" })
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = filename.endsWith(".md") ? filename : `${filename}.md`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    const installCommand = (name: string) => {
        const safeName = name.toLowerCase().replace(/[^a-z0-9-]/g, "-")
        return `mkdir -p .agent/skills/${safeName} && mv ~/Downloads/SKILL.md .agent/skills/${safeName}/SKILL.md`
    }

    return (
        <div className="space-y-8">
            {/* Tabs */}
            <div className="flex space-x-4 border-b border-border">
                <button
                    onClick={() => setActiveTab("builder")}
                    className={`pb-2 px-1 text-sm font-medium transition-colors ${activeTab === "builder"
                        ? "border-b-2 border-primary text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    Skill Builder
                </button>
                <button
                    onClick={() => setActiveTab("library")}
                    className={`pb-2 px-1 text-sm font-medium transition-colors ${activeTab === "library"
                        ? "border-b-2 border-primary text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    Skill Library
                </button>
            </div>

            {/* Builder Tab */}
            {activeTab === "builder" && (
                <div className="grid gap-6 lg:grid-cols-2">
                    {/* Input Section */}
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Skill Name (Optional)</label>
                            <input
                                type="text"
                                value={skillName}
                                onChange={(e) => setSkillName(e.target.value)}
                                placeholder="e.g. react-component-generator"
                                className="w-full p-2 rounded-md border border-input bg-background"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">What should this skill do?</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe the skill instructions step-by-step..."
                                className="w-full min-h-[200px] p-2 rounded-md border border-input bg-background resize-y"
                            />
                        </div>
                        <button
                            onClick={handleGenerate}
                            disabled={loading || !description.trim()}
                            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 transition-colors"
                        >
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                            Generate Skill
                        </button>
                        {error && <p className="text-sm text-red-500">{error}</p>}
                    </div>

                    {/* Output Section */}
                    <div className="space-y-4">
                        {result ? (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-muted-foreground">Generated SKILL.md</h3>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleCopy(result)}
                                            className="p-2 hover:bg-muted rounded-md transition-colors"
                                            title="Copy to clipboard"
                                        >
                                            <Copy className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDownload(result, "SKILL.md")}
                                            className="p-2 hover:bg-muted rounded-md transition-colors"
                                            title="Download file"
                                        >
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                <div className="relative rounded-md border border-border bg-muted/30 p-4 font-mono text-sm overflow-auto max-h-[500px]">
                                    <pre className="whitespace-pre-wrap text-foreground">{result}</pre>
                                </div>

                                <div className="rounded-md bg-secondary/20 p-4 space-y-2">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Terminal className="w-4 h-4" />
                                        <span>Install Command</span>
                                    </div>
                                    <code className="block text-xs bg-black/80 text-white p-2 rounded break-all">
                                        {installCommand(skillName || "custom-skill")}
                                    </code>
                                </div>
                            </div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-dashed border-border rounded-md text-muted-foreground">
                                <Sparkles className="w-8 h-8 mb-2 opacity-50" />
                                <p>Enter a description and generate your custom Agent Skill.</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Library Tab */}
            {activeTab === "library" && (
                <div className="space-y-6">
                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors capitalize ${selectedCategory === cat
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <input
                            type="text"
                            placeholder="Search skills..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full sm:w-64 p-2 text-sm rounded-md border border-input bg-background"
                        />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {filteredSkills.map((skill) => (
                            <div key={skill.id} className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-medium truncate pr-2" title={skill.name}>{skill.name}</h3>
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground capitalize shrink-0">
                                        {skill.category}
                                    </span>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-[40px]">
                                    {skill.description}
                                </p>
                                <div className="flex gap-2 mt-auto">
                                    <button
                                        onClick={() => handleCopy(skill.content)}
                                        className="flex-1 flex items-center justify-center gap-2 py-1.5 text-xs border border-border rounded hover:bg-muted transition-colors"
                                    >
                                        <Copy className="w-3 h-3" /> Copy
                                    </button>
                                    <button
                                        onClick={() => handleDownload(skill.content, "SKILL.md")}
                                        className="flex-1 flex items-center justify-center gap-2 py-1.5 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
                                    >
                                        <Download className="w-3 h-3" /> Download
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredSkills.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground">
                            <p>No skills found matching your search.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
