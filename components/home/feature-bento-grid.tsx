"use client"

import Link from "next/link"
import { Shield, Zap, Lock, Globe, ChevronRight, Calculator, Image as ImageIcon, FileText, Cpu, Layers } from "lucide-react"

export function FeatureBentoGrid() {
    return (
        <section className="bg-background py-12 md:py-24 relative overflow-hidden">
            {/* Background Gradients/Glows to match premium feel */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:h-[500px] bg-gradient-to-b from-[#3347f5]/20 via-purple-900/10 to-transparent opacity-50 blur-[60px] md:blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4 md:space-y-6">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60 tracking-tight leading-[1.1]">
                        Accelerate your workflow with our premium tools
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Streamline your daily tasks with our suite of powerful, secure, and free online utilities designed for professionals.
                    </p>
                </div>

                {/* Top Icons Row (Optional visual element from reference) */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-16 mb-12 md:mb-20 opacity-70">
                    {[
                        { icon: Shield, label: "Secure Processing", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                        { icon: Zap, label: "Lightning Fast", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                        { icon: Layers, label: "Batch Support", color: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                        { icon: Globe, label: "100% Free", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/20" },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 md:gap-3 group cursor-default">
                            <div className={`p-2 md:p-3 rounded-2xl border transition-colors ${item.bg} ${item.border} group-hover:border-primary/20`}>
                                <item.icon className={`w-5 h-5 md:w-6 md:h-6 ${item.color}`} />
                            </div>
                            <span className="text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* Bento Grid Layout - Matches the 3-column asymmetrical look */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[350px] md:auto-rows-[400px]">

                    {/* Card 1: Large Vertical (Left) */}
                    <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-card border border-border hover:border-primary/20 transition-all duration-500 flex flex-col p-6 md:p-8">
                        <div className="space-y-3 md:space-y-4 relative z-10 h-full flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider w-fit">
                                Image Processing
                            </div>
                            <h3 className="text-xl md:text-3xl font-bold text-foreground leading-tight">
                                Refine your visuals with <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">precision tools</span>
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                Instantly remove image backgrounds, blur sensitive details, and convert image formats with high-precision AI. Optimize your visuals for e-commerce, social media, and professional presentations without installing any software.
                            </p>
                            <Link href="/image-tools" className="inline-flex items-center text-blue-400 font-medium text-sm md:text-base hover:text-blue-300 transition-colors mt-2 md:mt-4">
                                Explore Image Tools <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Middle Column Container */}
                    <div className="flex flex-col gap-4 md:gap-6 lg:row-span-1">
                        {/* Card 2: Top Wide/Square */}
                        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-card border border-border hover:border-primary/20 transition-all duration-500 p-6 md:p-8 h-full flex flex-col justify-center">
                            <div className="mb-auto">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 md:mb-6">
                                    <Calculator className="w-5 h-5 md:w-6 md:h-6 text-amber-400" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Complex Calculations</h3>
                                <p className="text-muted-foreground text-xs md:text-sm">
                                    Access a comprehensive suite of online calculators for financial planning, IP subnetting, statistical analysis, and health metrics. Solve complex mathematical problems instantly with our accurate, free-to-use calculation tools.
                                </p>
                            </div>
                            <Link href="/calculator" className="text-amber-400 font-medium text-sm flex items-center mt-2 md:mt-4">
                                Open Calculators <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 3: Large Vertical (Right) */}
                    <div className="group relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-card border border-border hover:border-primary/20 transition-all duration-500 flex flex-col p-6 md:p-8">
                        <div className="space-y-3 md:space-y-4 relative z-10 h-full flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider w-fit">
                                AI Powered
                            </div>
                            <h3 className="text-xl md:text-3xl font-bold text-foreground leading-tight">
                                Next-gen automation <br />
                                at your fingertips
                            </h3>
                            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                Leverage next-generation AI to generate engaging social media captions, analyze visual content, and create custom QR codes. Automate your creative workflow with our advanced artificial intelligence suite designed for modern content creators.
                            </p>
                            <Link href="/ai-tools" className="inline-flex items-center text-purple-400 font-medium text-sm md:text-base hover:text-purple-300 transition-colors mt-2 md:mt-4">
                                View AI Suite <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Row Spanning */}
                    <div className="md:col-span-2 lg:col-span-3 h-[250px] md:h-[300px] relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-gradient-to-r from-card to-card/50 border border-border hover:border-primary/20 transition-all duration-500 p-6 md:p-8 flex items-center">
                        <div className="max-w-2xl relative z-10">
                            <h3 className="text-xl md:text-4xl font-bold text-foreground mb-3 md:mb-6">Secure & Private PDF Tools</h3>
                            <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                                Securely merge, split, compress, and convert PDF documents directly in your browser. Our serverless architecture ensures your data never leaves your device, providing enterprise-grade privacy and speed for all your document management needs.
                            </p>
                            <Link href="/pdf-tools" className="px-5 py-2.5 md:px-8 md:py-4 rounded-full bg-foreground text-background font-bold hover:bg-muted-foreground/10 transition-colors inline-flex items-center text-sm md:text-base">
                                Manage Documents <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
