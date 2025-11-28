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
        data.overview, data.aboutToolText || (typeof data.aboutTool === 'string' ? data.aboutTool : ""), ...data.howToSteps, ...data.features,
        ...data.faqs.map(f => f.question + " " + f.answer)
    ].join(" ").split(/\s+/).length

    const criticalCategories = Array.from(new Set(criticalErrors.map(r => r.category)))

    const statusColor = !isClean ? 'bg-destructive' : warnings.length > 0 ? 'bg-tertiary-accent' : 'bg-secondary-accent'
    const statusIcon = !isClean ? <XCircle className="h-6 w-6 text-destructive-foreground" /> : warnings.length > 0 ? <AlertTriangle className="h-6 w-6 text-tertiary-accent-foreground" /> : <CheckCircle className="h-6 w-6 text-secondary-accent-foreground" />

    const renderTabContent = () => {
        const tabResults = results.filter(r => r.category === activeTab)

        if (tabResults.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
                    <CheckCircle className="h-12 w-12 mb-3 opacity-20" />
                    <p className="text-sm">No issues found in this category.</p>
                </div>
            )
        }

        return (
            <div className="space-y-3 p-4">
                {tabResults.map((res, i) => (
                    <div key={i} className={`flex gap-3 items-start p-3 rounded-lg ${res.type === 'CRITICAL' ? 'bg-destructive/10 border border-destructive/20' :
                        res.type === 'WARNING' ? 'bg-tertiary-accent/10 border border-tertiary-accent/20' :
                            'bg-secondary-accent/10 border border-secondary-accent/20'
                        }`}>
                        <div className="mt-0.5 shrink-0">
                            {res.type === 'CRITICAL' ? <XCircle className="h-5 w-5 text-destructive" /> :
                                res.type === 'WARNING' ? <AlertTriangle className="h-5 w-5 text-tertiary-accent" /> :
                                    <CheckCircle className="h-5 w-5 text-secondary-accent" />}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground leading-tight">
                                {res.message}
                            </p>
                            {res.fix && (
                                <p className="text-xs text-muted-foreground mt-1.5 pl-2 border-l-2 border-border">
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
                <div className="absolute bottom-16 right-0 w-[400px] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-200 flex flex-col max-h-[80vh]">


                    <div className={`${statusColor} p-4 text-primary-foreground flex justify-between items-start shrink-0`}>
                        <div>
                            <h3 className="font-bold text-lg flex items-center gap-2">
                                <ShieldAlert className="h-5 w-5" />
                                AdSense Auditor
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-black/20 px-2 py-0.5 rounded text-[10px] font-mono font-medium">
                                    {wordCount} words
                                </span>
                                {criticalErrors.length > 0 && (
                                    <span className="bg-destructive/40 px-2 py-0.5 rounded text-[10px] font-mono font-medium flex items-center gap-1">
                                        {criticalErrors.length} Critical
                                    </span>
                                )}
                                {warnings.length > 0 && (
                                    <span className="bg-tertiary-accent/40 px-2 py-0.5 rounded text-[10px] font-mono font-medium flex items-center gap-1">
                                        {warnings.length} Warning{warnings.length !== 1 ? 's' : ''}
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


                    <div className="flex border-b border-border bg-muted/50 overflow-x-auto shrink-0">
                        <button
                            onClick={() => setActiveTab('CONTENT')}
                            className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border-b-2 transition-colors relative ${activeTab === 'CONTENT' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                        >
                            <FileText className="h-3.5 w-3.5" /> Content
                            {results.some(r => r.category === 'CONTENT' && r.type === 'CRITICAL') && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-destructive rounded-full" />}
                            {results.some(r => r.category === 'CONTENT' && r.type === 'WARNING') && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-tertiary-accent rounded-full" />}
                        </button>
                        <button
                            onClick={() => setActiveTab('POLICY')}
                            className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border-b-2 transition-colors relative ${activeTab === 'POLICY' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                        >
                            <Scale className="h-3.5 w-3.5" /> Policy
                            {results.some(r => r.category === 'POLICY' && r.type === 'CRITICAL') && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-destructive rounded-full" />}
                            {results.some(r => r.category === 'POLICY' && r.type === 'WARNING') && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-tertiary-accent rounded-full" />}
                        </button>
                        <button
                            onClick={() => setActiveTab('SEO')}
                            className={`flex-1 py-3 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border-b-2 transition-colors relative ${activeTab === 'SEO' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                        >
                            <Search className="h-3.5 w-3.5" /> SEO
                            {results.some(r => r.category === 'SEO' && r.type === 'CRITICAL') && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-destructive rounded-full" />}
                            {results.some(r => r.category === 'SEO' && r.type === 'WARNING') && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-tertiary-accent rounded-full" />}
                        </button>
                    </div>


                    <div className="overflow-y-auto flex-1 bg-card">
                        {renderTabContent()}
                    </div>


                    <div className="p-2 bg-muted/50 border-t border-border text-center shrink-0">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
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
                {isOpen ? <X className="h-6 w-6 text-primary-foreground" /> : statusIcon}
            </button>
        </div>
    )
}