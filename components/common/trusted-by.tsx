"use client"

export function TrustedBy() {
    // Brand placeholders - normally these would be SVGs
    const companies = [
        { name: "Rippling", className: "font-bold text-xl tracking-tight" },
        { name: "CarTrawler", className: "font-semibold text-lg" },
        { name: "Sorare", className: "font-bold text-xl" },
        { name: "Uniswap", className: "font-medium text-lg" },
        { name: "Sling", className: "font-bold text-xl" },
        { name: "SafetyWing", className: "font-serif text-lg italic" },
        { name: "Ramp", className: "font-bold text-xl lowercase" },
        { name: "Stitch", className: "font-mono text-lg" },
        { name: "XP", className: "font-black text-xl" },
        { name: "Overwolf", className: "font-bold text-lg uppercase tracking-wider" },
        { name: "Duffel", className: "font-bold text-xl" },
        { name: "Humaans", className: "font-bold text-lg" },
    ]

    return (
        <div className="w-full bg-background py-16 lg:py-24 border-y border-border">
            <div className="container mx-auto px-4">

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16 items-center justify-items-center opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100 mb-16">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className={`text-foreground hover:text-primary transition-colors cursor-default select-none ${company.className}`}
                        >
                            {company.name}
                        </div>
                    ))}
                </div>

                {/* Text */}
                <p
                    className="text-center text-muted-foreground text-sm md:text-base font-medium max-w-2xl mx-auto"
                >
                    Global leaders trust <span className="text-foreground font-semibold">FastTools</span> to secure their daily productivity and workflow.
                </p>

            </div>
        </div>
    )
}
