// components/AdSenseComplianceChecker.tsx
"use client"

import React, { useState, useEffect } from 'react'
import {
    AlertTriangle,
    CheckCircle,
    XCircle,
    ShieldAlert,
    X,
    ChevronRight,
    FileText,
    Scale,
    Search,
    CheckSquare,
    ExternalLink
} from 'lucide-react'
import { ContentData, validateAdSenseCompliance, ValidationCategory } from '@/lib/adsense-validator'

export function AdSenseComplianceChecker({ data }: { data: ContentData }) {
    const [isOpen, setIsOpen] = useState(false)
    const [mounted, setMounted] = useState(false)
    const [activeTab, setActiveTab] = useState<ValidationCategory>('CONTENT')

    useEffect(() => {
        setMounted(true)
    }, [])

    if (process.env.NODE_ENV !== 'development' || !mounted) return null

    const results = validateAdSenseCompliance(data)
    const criticalErrors = results.filter(r => r.type === 'CRITICAL')
    const warnings = results.filter(r => r.type === 'WARNING')
    const isClean = criticalErrors.length === 0


    const wordCount = [
        data.overview, data.aboutTool, ...data.howToSteps, ...data.features,
        ...data.faqs.map(f => f.question + " " + f.answer)
    ].join(" ").split(/\s+/).length

    const criticalCategories = Array.from(new Set(criticalErrors.map(r => r.category)))

    const statusColor = !isClean ? 'bg-red-600' : warnings.length > 0 ? 'bg-amber-500' : 'bg-emerald-600'
    const statusIcon = !isClean ? <XCircle className="h-6 w-6 text-white" /> : warnings.length > 0 ? <AlertTriangle className="h-6 w-6 text-white" /> : <CheckCircle className="h-6 w-6 text-white" />

    const renderTabContent = () => {
        const tabResults = results.filter(r => r.category === activeTab)

        if (tabResults.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center py-12 text-center text-slate-400">
                    <CheckCircle className="h-12 w-12 mb-3 opacity-20" />
                    <p className="text-sm">No issues found in this category.</p>
                </div>
            )
        }

        return (
            <div className="space-y-3 p-4">
                {tabResults.map((res, i) => (
                    <div key={i} className={`flex gap-3 items-start p-3 rounded-lg ${res.type === 'CRITICAL' ? 'bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30' :
                        res.type === 'WARNING' ? 'bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30' :
                            'bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30'
                        }`}>
                        <div className="mt-0.5 shrink-0">
                            {res.type === 'CRITICAL' ? <XCircle className="h-5 w-5 text-red-500" /> :
                                res.type === 'WARNING' ? <AlertTriangle className="h-5 w-5 text-amber-500" /> :
                                    <CheckCircle className="h-5 w-5 text-emerald-500" />}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-tight">
                                {res.message}
                            </p>
                            {res.fix && (
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 pl-2 border-l-2 border-slate-200 dark:border-slate-700">
                                    {res.fix}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">

            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[400px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200 flex flex-col max-h-[80vh]">


                    <div className={`${statusColor} p-4 text-white flex justify-between items-start shrink-0`}>
                        <div>
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <ShieldAlert className="h-5 w-5" />
                                AdSense Auditor
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-black/20 px-2 py-0.5 rounded text-[10px] font-mono font-medium">
                                    {wordCount} words
                                </span>
                                <span className="bg-black/20 px-2 py-0.5 rounded text-[10px] font-mono font-medium">
                                    {criticalErrors.length} Critical
                                </span>
                                {criticalCategories.length > 0 && (
                                    <span className="bg-black/20 px-2 py-0.5 rounded text-[10px] font-mono font-medium flex items-center gap-1">
                                        in {criticalCategories.join(', ')}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>


                    <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 overflow-x-auto shrink-0">
                        <button
                            onClick={() => setActiveTab('CONTENT')}
                            className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border-b-2 transition-colors ${activeTab === 'CONTENT' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
                        >
                            <FileText className="h-3.5 w-3.5" /> Content
                        </button>
                        <button
                            onClick={() => setActiveTab('POLICY')}
                            className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border-b-2 transition-colors ${activeTab === 'POLICY' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
                        >
                            <Scale className="h-3.5 w-3.5" /> Policy
                        </button>
                        <button
                            onClick={() => setActiveTab('SEO')}
                            className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border-b-2 transition-colors ${activeTab === 'SEO' ? 'border-blue-500 text-blue-600 dark:text-blue-400' : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}
                        >
                            <Search className="h-3.5 w-3.5" /> SEO
                        </button>
                    </div>


                    <div className="overflow-y-auto flex-1 bg-white dark:bg-slate-900">
                        {renderTabContent()}
                    </div>


                    <div className="p-2 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center shrink-0">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                            Developer Mode • AdSense Auditor v2.0
                        </p>
                    </div>
                </div>
            )}


            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${statusColor} w-14 h-14 rounded-full shadow-lg shadow-black/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ring-4 ring-white/20 dark:ring-black/20`}
                aria-label="Toggle AdSense Auditor"
            >
                {isOpen ? <X className="h-6 w-6 text-white" /> : statusIcon}
            </button>
        </div>
    )
}