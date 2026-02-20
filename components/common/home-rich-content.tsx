
import { Shield, Zap, Lock, Globe, Bot, Cpu } from "lucide-react"

export function HomeRichContent() {
    return (
        <>
            {/* WebMCP / AI-Agent Section */}
            <section className="py-16 md:py-24 bg-background relative z-10 border-b border-border/30">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-primary">
                                The World's First WebMCP-Enabled Tools Platform
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                <p>
                                    FastTools is the first platform where <strong className="text-foreground">AI agents can use every tool autonomously</strong>. Powered by the Web Model Context Protocol (WebMCP), AI agents in Chrome 146+ can discover all 170+ tools, fill forms, trigger calculations, and read structured results — all without human intervention.
                                </p>
                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">How It Works: 4-Step Agent Workflow</h3>
                                <p>
                                    AI agents follow a simple workflow: <strong className="text-foreground">Discover</strong> tools via our API endpoint, <strong className="text-foreground">Describe</strong> available inputs on any tool page, <strong className="text-foreground">Fill</strong> fields including dropdowns, switches, and toggles, then <strong className="text-foreground">Click &amp; Read</strong> to trigger actions and capture results. Realtime tools like the temperature converter skip the click step entirely.
                                </p>
                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Zero-Config for Future Tools</h3>
                                <p>
                                    Every new tool added to FastTools is automatically WebMCP-compatible. Our architecture auto-discovers fields from the DOM, detects the interaction mode, and registers the tool with the browser's AI agent API — no per-tool configuration required.
                                </p>
                            </div>
                        </div>

                        <div className="bg-card/50 border border-border/50 rounded-2xl p-8 space-y-8 backdrop-blur-sm">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">AI-Agent Capabilities</h3>

                                <div className="grid gap-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-indigo-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Bot className="w-6 h-6 text-indigo-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Full Tool Discovery API</h4>
                                            <p className="text-sm text-muted-foreground">AI agents discover all 170+ tools from a single endpoint with input schemas, interaction modes, and categories — before visiting any page.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-primary/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Cpu className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Smart Interaction Modes</h4>
                                            <p className="text-sm text-muted-foreground">Button-click, realtime, generator, file-upload, and API-dependent — each tool type has optimized handling so agents know exactly when to click, wait, or read.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-purple-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Zap className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Radix UI & Custom Components</h4>
                                            <p className="text-sm text-muted-foreground">Agents can fill Radix selects, toggle switches, click radio groups, and interact with every custom component — not just native HTML inputs.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Original Why FastTools Section */}
            <section className="py-16 md:py-24 bg-background relative z-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Main Content Column */}
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                                Why FastTools is the #1 Choice for Developers & Creators
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground">
                                <p>
                                    FastTools isn't just another collection of scripts. It's a comprehensive, privacy-first productivity platform designed to streamline your daily workflow. Whether you're a developer debugging JSON, a designer converting colors, or a content creator generating viral hashtags, our tools are engineered for speed and precision.
                                </p>
                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Client-Side Processing for Maximum Privacy</h3>
                                <p>
                                    Unlike other platforms that upload your sensitive data to remote servers, FastTools performs 95% of operations right in your browser. When you use our PDF splitter or JSON converter, your files never leave your device. This "Local-First" architecture ensures enterprise-grade security for your data.
                                </p>
                                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Optimized for Speed ("Fast" is in our name)</h3>
                                <p>
                                    We've obsessed over every millisecond. By removing bloated frameworks and tracking scripts, we deliver results instantly. Our tools are optimized for Core Web Vitals, ensuring seamless performance even on slow mobile connections.
                                </p>
                            </div>
                        </div>

                        {/* Features / Trust Signals Column */}
                        <div className="bg-card/50 border border-border/50 rounded-2xl p-8 space-y-8 backdrop-blur-sm">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">Our Privacy Promise</h3>

                                <div className="grid gap-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-primary/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Shield className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">No Data Logging</h4>
                                            <p className="text-sm text-muted-foreground">We don't track your inputs or save your files. Your session data vanishes the moment you close the tab.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-purple-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Lock className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">Encrypted Connections</h4>
                                            <p className="text-sm text-muted-foreground">All traffic is secured with banking-grade SSL encryption, ensuring your connection is always safe.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-blue-500/10 p-3 rounded-lg h-12 w-12 flex items-center justify-center shrink-0">
                                            <Globe className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">100% Free Forever</h4>
                                            <p className="text-sm text-muted-foreground">No hidden subscriptions, no "Pro" tiers, and no credit card required. Just free, powerful tools.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
