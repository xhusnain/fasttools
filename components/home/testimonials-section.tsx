"use client"

import { Star, Quote, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Testimonial {
    quote: string
    highlight: string
    author: string
    role: string
    company: string
    avatarInitials: string
}

export function TestimonialsSection() {
    const testimonials: Testimonial[] = [
        {
            quote: "We handle sensitive client contracts daily. The fact that",
            highlight: "no data ever leaves our device",
            author: "Sarah Chen",
            role: "Legal Operations Lead",
            company: "LexTech Solutions",
            avatarInitials: "SC"
        },
        {
            quote: "FastTools has completely replaced our paid subscriptions. The AI caption generator is",
            highlight: "unbelievably fast and accurate",
            author: "Marcus Johnson",
            role: "Social Media Manager",
            company: "ViralPulse Agency",
            avatarInitials: "MJ"
        },
        {
            quote: "I was skeptical about a browser-based PDF merger, but it processed a 500MB file instantly.",
            highlight: "Zero upload time is a game changer.",
            author: "David Miller",
            role: "Architect",
            company: "BuildRight Studio",
            avatarInitials: "DM"
        },
        {
            quote: "Finally, a dev toolkit that just works. The JSON formatter and Regex tester are part of my daily workflow. It's refreshing to use tools that",
            highlight: "don't track or store my code.",
            author: "Elena Rodriguez",
            role: "Senior Frontend Dev",
            company: "CloudScale Inc.",
            avatarInitials: "ER"
        },
        {
            quote: "We integrated the AI tools into our content pipeline. It's perfect for generating quick drafts for our GPT workflows without the",
            highlight: "privacy risks of public chatbots.",
            author: "James Wilson",
            role: "Content Director",
            company: "TechVoice Media",
            avatarInitials: "JW"
        },
        {
            quote: "The image compression is magic. Reduced our asset size by 80% without visible quality loss, and",
            highlight: "everything happened offline in the browser.",
            author: "Lisa Patich",
            role: "E-commerce Manager",
            company: "Shopify Store Owner",
            avatarInitials: "LP"
        }
    ]

    return (
        <section className="bg-background py-20 md:py-32 relative overflow-hidden border-t border-border">
            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                        Why people <span className="text-primary">love us</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground">
                        Trusted by professionals who value speed, privacy, and precision.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="group flex flex-col justify-between p-8 rounded-3xl bg-card border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                            <div>
                                {/* Company / Logo Placeholder */}
                                <div className="mb-6 font-bold text-lg text-foreground/40 uppercase tracking-widest font-mono group-hover:text-primary/60 transition-colors">
                                    {item.company}
                                </div>

                                {/* Quote */}
                                <div className="mb-8 relative">
                                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10 -z-10 transform -scale-x-100" />
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        "{item.quote} <span className="text-foreground font-semibold bg-primary/10 px-1 rounded">{item.highlight}</span>"
                                    </p>
                                </div>
                            </div>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center text-foreground font-bold text-sm">
                                    {item.avatarInitials}
                                </div>
                                <div>
                                    <div className="font-bold text-foreground text-sm">{item.author}</div>
                                    <div className="text-xs text-muted-foreground font-medium">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:underline underline-offset-4 transition-all">
                        Read more about our mission <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

            </div>
        </section>
    )
}
