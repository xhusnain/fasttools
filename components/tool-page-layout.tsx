import Link from "next/link"
import { GHeader } from "./globalcomponents/gheader"
import { AdSpace } from "./ad-space"
import { Breadcrumbs } from "./breadcrumbs"
import { AdSenseComplianceChecker } from "./AdSenseComplianceChecker"
import { env } from "@/config/env"
import {
    Lightbulb,
    Package,
    Zap,
    Star,
    ChevronRight
} from "lucide-react"
import type { ToolPageLayoutProps } from "@/lib/tool-page-layout-types"

export function ToolPageLayout({
    header,
    breadcrumbs,
    toolComponent,
    toolContent,
    adConfig,
    expectedMetadata,
    className
}: ToolPageLayoutProps) {
    const {
        showMobileAd = true,
        showSidebarAd = true,
    } = adConfig || {}

    if (process.env.NODE_ENV === "development" && expectedMetadata) {
        console.group("🔍 ToolPageLayout - Metadata Validation")
        console.log("Expected:", expectedMetadata)
        console.groupEnd()
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (toolContent.faqs || []).map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: `How to use ${toolContent.toolName}`,
        step: (toolContent.howToSteps || []).map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            text: step,
        })),
    }

    // Generate BreadcrumbList schema if breadcrumbs are provided
    const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.fasttools.store"
            },
            ...breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                position: index + 2,
                name: crumb.label,
                item: crumb.href.startsWith('http')
                    ? crumb.href
                    : `https://www.fasttools.store${crumb.href.startsWith('/') ? crumb.href : `/${crumb.href}`}`
            }))
        ]
    } : null

    return (
        <div className={`min-h-screen bg-background ${className}`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
            {breadcrumbSchema && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            )}

            <div className="container mx-auto px-4 py-6 max-w-6xl">
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <Breadcrumbs items={breadcrumbs} />
                )}

                <div className="max-w-7xl mx-auto">
                    <div className="text-center space-y-4 mb-6">
                        <GHeader
                            title={header.title}
                            description={header.description}
                            titleSize={header.titleSize}
                            descriptionSize={header.descriptionSize}
                            centered={header.centered}
                            color={header.color}
                        />

                        {showMobileAd && !env.isProduction && (
                            <div className="lg:hidden mt-6">
                                <div className="text-center mb-2">
                                    <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                                </div>
                                <AdSpace slot="content" className="w-full h-64 border border-border rounded-xl shadow-sm bg-card" />
                            </div>
                        )}
                    </div>

                    <div className="grid lg:grid-cols-[1fr_350px] gap-4 lg:gap-8">
                        <div className="space-y-4 lg:space-y-6">
                            {toolComponent}

                            <section className="bg-card border border-border rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                                        <Package className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">
                                        What is {toolContent.toolName}?
                                    </h2>
                                </div>
                                <div className="text-base text-muted-foreground leading-relaxed">
                                    {toolContent.overview}
                                </div>
                            </section>

                            <section className="bg-card border border-border rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                                        <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">
                                        How to Use {toolContent.toolName}
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {(toolContent.howToSteps || []).map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                                                <span className="text-sm font-bold text-primary">{index + 1}</span>
                                            </div>
                                            <div className="flex-1 pt-1">
                                                <p className="text-muted-foreground leading-relaxed">{step}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="bg-card border border-border rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl">
                                        <Star className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">
                                        Key Features
                                    </h2>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {(toolContent.features || []).map((feature, index) => (
                                        <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                                            <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {toolContent.useCases && toolContent.useCases.length > 0 && (
                                <section className="bg-card border border-border rounded-lg p-6">
                                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                                        Use Cases
                                    </h2>
                                    <div className="space-y-3">
                                        {(toolContent.useCases || []).map((useCase, index) => (
                                            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                                    <Star className="h-3 w-3 text-primary" />
                                                </div>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{useCase}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            <section className="bg-card border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-bold mb-4 text-foreground">
                                    About {toolContent.toolName}
                                </h2>
                                <div className="prose prose-slate max-w-none">
                                    {typeof toolContent.aboutTool === 'string' ? (
                                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                            {toolContent.aboutTool}
                                        </p>
                                    ) : (
                                        <div className="text-muted-foreground leading-relaxed">
                                            {toolContent.aboutTool}
                                        </div>
                                    )}
                                </div>
                            </section>

                            {toolContent.proTip && (
                                <section className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="p-2 bg-amber-100 dark:bg-amber-900/50 rounded-lg">
                                                <Lightbulb className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">
                                                💡 Pro Tip
                                            </h3>
                                            <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                                                {toolContent.proTip}
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            )}

                            <section className="bg-card border border-border rounded-lg p-6">
                                <h2 className="text-2xl font-bold mb-6 text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-4">
                                    {(toolContent.faqs || []).map((faq, index) => (
                                        <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                                            <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                                            <div className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {toolContent.relatedTools && toolContent.relatedTools.length > 0 && (
                                <section className="bg-card border border-border rounded-lg p-6">
                                    <h2 className="text-2xl font-bold mb-4 text-foreground">
                                        Related Tools
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {(toolContent.relatedTools || []).map((tool) => (
                                            <Link
                                                key={tool.href}
                                                href={tool.href}
                                                className="flex items-center gap-2 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border hover:border-primary"
                                            >
                                                <ChevronRight className="h-4 w-4 text-primary" />
                                                <span className="font-medium text-foreground">{tool.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>

                        {showSidebarAd && !env.isProduction && (
                            <div className="space-y-6">
                                <div className="sticky top-32 space-y-6 hidden lg:block">
                                    <div>
                                        <div className="text-center mb-2">
                                            <span className="text-xs text-muted-foreground font-medium">Advertisement</span>
                                        </div>
                                        <AdSpace slot="sidebar" className="w-full h-80 border border-border rounded-xl shadow-sm bg-card" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {process.env.NODE_ENV === "development" && (
                <AdSenseComplianceChecker
                    data={{
                        ...toolContent,
                        metaTitle: expectedMetadata?.title,
                        metaDescription: expectedMetadata?.description,
                        metaRobots:  "index, follow",
                        canonicalUrl:  `https://www.fasttools.store${header.title ? `/tool/${header.title.toLowerCase().replace(/\s+/g, '-')}` : ''}`
                    }}
                />
            )}
        </div>
    )
}
