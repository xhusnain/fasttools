"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"

interface ClickFortifyAdProps {
    className?: string
}

export function ClickFortifyAd({ className }: ClickFortifyAdProps) {
    return (
        <div className={`relative group w-[280px] h-[280px] rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl ${className}`}>
            {/* Background Graphic */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/blog/clickfortify-premium-ad.png"
                    alt="ClickFortify Security"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-primary/20 border border-primary/30">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary/80">Premium Protection</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    Protect Your PPC from Fraud
                </h3>

                <p className="text-xs text-white/70 mb-4 line-clamp-2 leading-relaxed">
                    Shield your Google Ads  campaigns. ClickFortify blocks bots and competitor clicks.
                </p>

                <Link
                    href="https://www.clickfortify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-xl transition-colors"
                >
                    Get Protected
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Ad Tag */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 px-2 py-0.5 rounded text-[10px] font-medium text-white/80">
                sponsored
            </div>
        </div>
    )
}
