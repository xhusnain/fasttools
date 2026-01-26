import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { createToolConfig } from "@/lib/create-tool-config"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const AgentSkillBuilder = dynamic(() => import("@/components/ai-tools/agent-skill-builder").then(mod => mod.AgentSkillBuilder), {
    loading: () => <ToolLoader />
})

const toolConfig = createToolConfig({
    toolName: "Antigravity Agent Skill Builder",
    description: "Generate custom SKILL.md files for Google Antigravity agents. Build, download, and share agent skills for coding, testing, and more. Free tool.",
    metaTitle: "Antigravity Agent Skill Builder | Create Custom AI Agent Skills",
    path: "/dev-tools/antigravity-skill-builder",
    schemaOptions: {
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        featureList: [
            "AI Skill Generation",
            "Markdown Formatting",
            "Pre-defined Library",
            "Instant Download"
        ],
        softwareRequirements: "Modern Web Browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
        }
    },
    header: {
        title: "Antigravity Agent Skill Builder",
        description: "Create, customize, and download AI agent skills for Google Antigravity.",
        titleSize: "medium",
        color: "blue",
        centered: true
    },
    breadcrumbs: [
        { label: "Developer Tools", href: "/dev-tools" },
        { label: "Agent Skill Builder", href: "/dev-tools/antigravity-skill-builder" },
    ],
    content: {
        // AEO Rule: Direct answer in first 50 words
        overview: "The Antigravity Agent Skill Builder is a free developer tool that generates standardized `SKILL.md` files for Google's Antigravity IDE. It converts natural language descriptions into valid agent instructions, allowing developers to extend their AI assistant's capabilities for coding, testing, and DevOps workflows without manual formatting.",
        howToSteps: [
            "Describe the task you want the agent to perform (e.g., 'Generate a React component with tests').",
            "Optionally provide a unique name for the skill (e.g., 'react-gen').",
            "Click 'Generate Skill' to instantly create the `SKILL.md` file with correct YAML frontmatter.",
            "Review the generated instructions in the code preview.",
            "Download the file and save it to your project's `.agent/skills/<skill-name>/` directory.",
            "Restart your Antigravity IDE to activate the new skill."
        ],
        features: [
            "AI-Powered Generation: Turns simple text into complex, multi-step agent protocols.",
            "Zero-Shot Formatting: Automatically handles indentation, YAML headers, and markdown syntax.",
            "Integrated Library: Includes 30+ pre-built skills for React, Node.js, Docker, and more.",
            "Instant Validation: Ensures generated skills meet Google's strict agent definitions.",
            "Privacy First: No personal code is stored; generation happens on-demand."
        ],
        aboutTool: (
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">What are Antigravity Agent Skills?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        Agent Skills are the building blocks of the Google Antigravity IDE experience. They define specific capabilities and workflows that your AI agent can execute. A skill consists of a <code className="bg-muted px-1 py-0.5 rounded">SKILL.md</code> file containing instructions, examples, and metadata.
                    </p>

                    <div className="my-8 rounded-xl overflow-hidden border border-border bg-muted/50">
                        <img
                            src="/images/antigravity-skill-builder-hero.png"
                            alt="Antigravity Agent Skill Builder Feature"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-foreground">Why use the Skill Builder?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Creating custom agents for Google's Antigravity IDE requires precise formatting. A single YAML error can prevent the agent from loading. This tool bridges the gap between your intent and the required technical specification.
                    </p>

                    <h3 className="text-xl font-bold mb-4 text-foreground">Manual vs. AI-Generated Skills</h3>
                    <div className="overflow-x-auto my-6 border border-border rounded-lg">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted/50 text-foreground font-medium">
                                <tr>
                                    <th className="px-4 py-3">Feature</th>
                                    <th className="px-4 py-3">Manual Creation</th>
                                    <th className="px-4 py-3">Agent Skill Builder</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr>
                                    <td className="px-4 py-3 font-medium">Speed</td>
                                    <td className="px-4 py-3 text-muted-foreground">10-15 minutes per skill</td>
                                    <td className="px-4 py-3 text-foreground font-medium text-green-600 dark:text-green-400">&lt; 10 seconds</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Accuracy</td>
                                    <td className="px-4 py-3 text-muted-foreground">Prone to syntax errors</td>
                                    <td className="px-4 py-3 text-foreground font-medium text-green-600 dark:text-green-400">100% Valid Syntax</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Complexity</td>
                                    <td className="px-4 py-3 text-muted-foreground">Basic instructions</td>
                                    <td className="px-4 py-3 text-foreground font-medium text-green-600 dark:text-green-400">Multi-step reasoning chains</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Format</td>
                                    <td className="px-4 py-3 text-muted-foreground">Manual Markdown formatting</td>
                                    <td className="px-4 py-3 text-foreground font-medium text-green-600 dark:text-green-400">Auto-formatted YAML/MD</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 font-medium">Cost</td>
                                    <td className="px-4 py-3 text-muted-foreground">Developer time</td>
                                    <td className="px-4 py-3 text-foreground font-bold text-green-600 dark:text-green-400">100% Free</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                        <p className="text-sm">
                            <span className="font-bold text-blue-700 dark:text-blue-400">Expert Tip:</span> For complex skills, try "Chain of Thought" prompting in the description. Instead of saying "write code," say "First, analyze the file structure, then plan the changes, and finally implement the solution." The builder will incorporate this logic into the agent's instructions.
                        </p>
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-foreground">Related Deep Dives</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                        <li><strong className="text-foreground">Agent Configuration:</strong> Learn how to tweak the <code className="bg-muted px-1 py-0.5 rounded">SKILL.md</code> temperature and model settings.</li>
                        <li><strong className="text-foreground">Context Awareness:</strong> How to write skills that read specific files.</li>
                        <li><strong className="text-foreground">Multi-Agent Flows:</strong> Chaining multiple skills together for complex refactors.</li>
                    </ul>
                </div>
            </div>
        ),
        faqs: [
            {
                question: "What is an Antigravity Agent Skill?",
                answer: "An Agent Skill is a markdown file (`SKILL.md`) that defines a specific capability for the AI in Google's Antigravity IDE. It includes a name, description, and a set of natural language instructions that guide the AI's behavior when solving tasks."
            },
            {
                question: "How do I install the generated skill?",
                answer: "1. Create a folder in your project: `.agent/skills/<my-skill>/`. 2. Place the downloaded `SKILL.md` file inside. 3. Reload the IDE window. The agent will now recognize commands related to that skill."
            },
            {
                question: "Is this tool free to use?",
                answer: "Yes, the Antigravity Agent Skill Builder is completely free for individual and commercial use. You can generate unlimited skills."
            },
            {
                question: "Can I share these skills with my team?",
                answer: "Absolutely. Since skills are just files in your repository, simply commit the `.agent/skills` directory to Git. Your entire team will inherit the custom agent capabilities."
            },
            {
                question: "What categories of skills can I generate?",
                answer: "You can generate skills for **Frontend** (React, Vue), **Backend** (Node, Python, Go), **DevOps** (Docker, K8s), **Testing** (Jest, Cypress), and **Documentation**. The pre-defined library includes examples for all these categories."
            }
        ],
        relatedTools: [
            { name: "HTML Beautifier", href: "/dev-tools/html-beautifier" },
            { name: "JSON to CSV", href: "/dev-tools/json-to-csv" },
            { name: "Regex Tester", href: "/dev-tools/regex-tester" }
        ]
    }
})

export const metadata: Metadata = toolConfig.metadata

export default function AgentSkillBuilderPage() {
    return (
        <ToolPageLayout
            {...toolConfig.getLayoutProps(
                <div className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-sm">
                    <AgentSkillBuilder />
                </div>
            )}
        />
    )
}
