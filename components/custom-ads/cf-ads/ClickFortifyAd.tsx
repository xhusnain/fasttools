"use client"

import Link from "next/link"
import { ShieldCheck } from "lucide-react"

interface ClickFortifyAdProps {
    className?: string
}

export function ClickFortifyAd({ className }: ClickFortifyAdProps) {
    return (
        <div className={`relative w-[280px] bg-white border border-gray-200 rounded-lg shadow-sm ${className}`}>
            <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-blue-600" />
                        <span className="text-xs text-gray-500 uppercase tracking-wide">ClickFortify</span>
                    </div>
                    <span className="text-[10px] text-gray-400 uppercase">Ad</span>
                </div>

                <Link
                    href="https://www.clickfortify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                >
                    <h3 className="text-lg font-normal text-blue-700 mb-1 leading-snug group-hover:underline">
                        ClickFortify protects your campaign from fraud
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                        Shield your Google Ads campaigns. ClickFortify blocks bots and competitor clicks automatically.
                    </p>
                    
                    <div className="text-sm text-gray-500">
                        <span className="text-green-700">www.clickfortify.com</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
