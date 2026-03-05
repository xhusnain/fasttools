import Link from "next/link"
import Image from "next/image"
import { GHeader } from "@/ui/gheader"


import { Breadcrumbs } from "@/components/common/breadcrumbs"

import {
    Lightbulb,
    Package,
    Zap,
    Star,
    ChevronRight
} from "lucide-react"
import type { ToolPageLayoutProps } from "@/types/tool-page-layout.types"
import { SquareAd } from "@/components/ads/square-ad"
import { ClickFortifyAd } from "@/components/custom-ads/cf-ads/ClickFortifyAd"
import { WebMCPToolRegistration } from "@/components/common/webmcp-tool-registration"
import { buildWebMCPDescription, getInteractionMode } from "@/lib/webmcp-utils"

export function ToolPageLayout({
    header,
    breadcrumbs,
    heroImage,
    toolComponent,
    toolContent,
    expectedMetadata,
    className
}: ToolPageLayoutProps) {


    if (process.env.NODE_ENV === "development" && expectedMetadata) {
        console.group("🔍 ToolPageLayout - Metadata Validation")
        console.log("Expected:", expectedMetadata)
        console.groupEnd()
    }

    // NOTE: FAQ, HowTo, and Breadcrumb schemas are already generated in metadata-base.ts
    // and injected via Next.js Metadata in <head>. No duplicate body-level schemas needed.

    return (
        <div className={`min-h-screen bg-background overflow-x-hidden ${className}`}>

            <main id="tool-page-main" className="container mx-auto px-4 py-6 max-w-7xl">
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
                    </div>

                    <div className="grid lg:grid-cols-[1fr_350px] gap-4 lg:gap-8">


                        <div className="space-y-4 lg:space-y-6 min-w-0 max-w-full overflow-hidden">
                            {/* WebMCP: data-webmcp-tool marks this as the interactive tool region for AI agents */}
                            <div data-webmcp-tool data-tool-name={toolContent.toolName} data-tool-path={expectedMetadata?.path || ""} data-interaction-mode={getInteractionMode(expectedMetadata?.path)}>
                                {toolComponent}
                            </div>

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

                            {heroImage && (
                                <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg border border-border/50 my-6">
                                    <Image
                                        src={heroImage}
                                        alt={`${toolContent.toolName} Hero`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
                                </div>
                            )}

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
                                                {typeof step === 'string' ? (
                                                    <p className="text-muted-foreground leading-relaxed">{step}</p>
                                                ) : (
                                                    <div className="space-y-1">
                                                        <h3 className="font-bold text-foreground text-sm">{step.title}</h3>
                                                        <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* In-content ad - visible on all screen sizes */}
                            <div className="flex justify-center">
                                <SquareAd />
                            </div>

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
                                            {typeof feature === 'string' ? (
                                                <span className="text-sm text-foreground">{feature}</span>
                                            ) : (
                                                <div className="space-y-1">
                                                    <span className="text-sm font-bold text-foreground block">{feature.title}</span>
                                                    <span className="text-xs text-muted-foreground block">{feature.description}</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {toolContent.video && (
                                <section className="bg-card border border-border rounded-lg p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-xl">
                                            <Zap className="h-5 w-5 text-red-600 dark:text-red-400" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-foreground">
                                            Video Tutorial
                                        </h2>
                                    </div>
                                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${toolContent.video.id}`}
                                            title={toolContent.video.title || "Video Tutorial"}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    {toolContent.video.description && (
                                        <p className="mt-4 text-muted-foreground">
                                            {toolContent.video.description}
                                        </p>
                                    )}
                                </section>
                            )}

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
                                                {typeof useCase === 'string' ? (
                                                    <p className="text-sm text-muted-foreground leading-relaxed">{useCase}</p>
                                                ) : (
                                                    <div className="space-y-1">
                                                        <h3 className="text-sm font-bold text-foreground">{useCase.title}</h3>
                                                        <p className="text-xs text-muted-foreground leading-relaxed">{useCase.description}</p>
                                                    </div>
                                                )}
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
                                    ) : toolContent.aboutTool && typeof toolContent.aboutTool === 'object' && 'content' in toolContent.aboutTool ? (
                                        <div className="space-y-3">
                                            <h3 className="text-lg font-bold text-foreground">{(toolContent.aboutTool as any).title}</h3>
                                            <div className="text-muted-foreground leading-relaxed">
                                                {(toolContent.aboutTool as any).content}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-muted-foreground leading-relaxed">
                                            {toolContent.aboutTool as React.ReactNode}
                                        </div>
                                    )}
                                </div>
                            </section>

                            {toolContent.proTip && (
                                <section className="bg-gradient-to-r from-amber-50 to-blue-50 dark:from-amber-950/30 dark:to-blue-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
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

                            {toolContent.additionalContent && toolContent.additionalContent.length > 0 && (
                                <section className="bg-card border border-border rounded-lg p-6">
                                    <div className="space-y-6">
                                        {toolContent.additionalContent.map((item, index) => (
                                            <div key={index}>
                                                <h3 className="text-lg font-bold text-foreground mb-2">{item.heading}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                                            </div>
                                        ))}
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
                                <section className="bg-card border border-border rounded-lg p-6 lg:hidden">
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

                        <div className="space-y-6">
                            <div className="sticky top-32 space-y-6 hidden lg:block">
                                {toolContent.relatedTools && toolContent.relatedTools.length > 0 && (
                                    <section className="bg-card border border-border rounded-lg p-6 shadow-sm">
                                        <h2 className="text-lg font-bold mb-4 text-foreground">
                                            Related Tools
                                        </h2>
                                        <div className="space-y-3">
                                            {(toolContent.relatedTools || []).map((tool) => (
                                                <Link
                                                    key={tool.href}
                                                    href={tool.href}
                                                    className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-border hover:border-primary"
                                                >
                                                    <ChevronRight className="h-4 w-4 text-primary flex-shrink-0" />
                                                    <span className="text-sm font-medium text-foreground">{tool.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* ads */}
                                <div className="space-y-6">
                                    <ClickFortifyAd className="w-full !h-auto aspect-square" />
                                    <SquareAd />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* WebMCP: Register this tool with browser AI agent API (Chrome 146+) */}
            <WebMCPToolRegistration
                toolName={toolContent.toolName}
                toolDescription={buildWebMCPDescription(
                    toolContent.toolName,
                    toolContent.overview,
                    toolContent.features
                )}
                toolPath={expectedMetadata?.path || ""}
                toolCategory={breadcrumbs?.[0]?.label}
            />

            {process.env.NODE_ENV === "development" && expectedMetadata && (
                <div className="hidden">
                    {/* Metadata validation placeholder if needed */}
                </div>
            )}
        </div>
    )
}
