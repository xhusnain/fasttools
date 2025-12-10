"use client"

import { Shield, Zap, Lock, ServerOff, Globe, Cpu } from "lucide-react"

export function SecureProcessingSection() {
    return (
        <section className="bg-background py-16 md:py-32 relative overflow-hidden">
            {/* Background radial gradient to mimic the purple glow from top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] md:h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#3347f5]/20 via-background/50 to-transparent opacity-60 pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                {/* Central Glowing Object substitute */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-500 blur-[40px] md:blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="relative w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl rotate-12 flex items-center justify-center shadow-2xl border border-border group-hover:rotate-[24deg] transition-transform duration-700">
                            <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm" />
                            <Lock className="w-8 h-8 md:w-10 md:h-10 text-white relative z-10 drop-shadow-lg" />
                        </div>
                        {/* Secondary floating element */}
                        <div className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl -rotate-12 flex items-center justify-center shadow-xl border border-border animate-pulse">
                            <Shield className="w-3 h-3 md:w-5 md:h-5 text-white" />
                        </div>
                    </div>
                </div>

                {/* Main Heading & Subtext */}
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 space-y-6 md:space-y-8">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight leading-[1.1]">
                        Client-side processing, with a <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                            powerful and secure
                        </span> architecture
                    </h2>
                    <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                        FastTools is built differently. We never store your data. Your browser does the heavy lifting, ensuring your files never leave your device while delivering maximum speed.
                    </p>
                </div>

                {/* 3-Column Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

                    {/* Feature 1 */}
                    <div className="space-y-3 md:space-y-4 group">
                        <div className="flex items-center gap-3 text-foreground font-semibold text-base md:text-lg">
                            <ServerOff className="w-5 h-5 text-blue-500" />
                            <h3>Zero Server Uploads</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base border-l border-border pl-4 group-hover:border-blue-500/50 transition-colors duration-300">
                            Unlike traditional tools, we don't upload your files to a server.
                            Image processing, conversions, and calculations happen locally within your browser
                            via WebAssembly, eliminating data breach risks.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-3 md:space-y-4 group">
                        <div className="flex items-center gap-3 text-foreground font-semibold text-base md:text-lg">
                            <Zap className="w-5 h-5 text-amber-500" />
                            <h3>Instant Performance</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base border-l border-border pl-4 group-hover:border-amber-500/50 transition-colors duration-300">
                            Our client-side architecture removes network latency.
                            Tasks that usually take minutes to upload and process are completed in milliseconds
                            directly on your device's hardware.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-3 md:space-y-4 group">
                        <div className="flex items-center gap-3 text-foreground font-semibold text-base md:text-lg">
                            <Globe className="w-5 h-5 text-green-500" />
                            <h3>Privacy Guaranteed</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base border-l border-border pl-4 group-hover:border-green-500/50 transition-colors duration-300">
                            Your sensitive documents and photos remain under your control.
                            Since no data leaves your computer, you can safely use our tools for
                            confidential work, personal photos, and business documents.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
