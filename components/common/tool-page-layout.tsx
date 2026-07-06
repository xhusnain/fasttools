import Link from "next/link"
import Image from "next/image"
import { GHeader } from "@/ui/gheader"

import { Breadcrumbs } from "@/components/common/breadcrumbs"

import {
    Lightbulb,
    Package,
    Zap,
    Star,
    ChevronRight,
    BookOpen,
    ListChecks
} from "lucide-react"
import type { ToolPageLayoutProps } from "@/types/tool-page-layout.types"
import { SquareAd } from "@/components/ads/square-ad"
import { ClickFortifyAd } from "@/components/custom-ads/cf-ads/ClickFortifyAd"
import { WebMCPToolRegistration } from "@/components/common/webmcp-tool-registration"
import { buildWebMCPDescription, getInteractionMode } from "@/lib/webmcp-utils"
import { createBreadcrumbSchema } from "@/lib/metadata-base"

export function ToolPageLayout({
    header,
    breadcrumbs,
    heroImage,
    toolComponent,
    schemas,
    toolContent,
    expectedMetadata,
    className
}: ToolPageLayoutProps) {

    if (process.env.NODE_ENV === "development" && expectedMetadata) {
        console.group("ToolPageLayout - Metadata Validation")
        console.log("Expected:", expectedMetadata)
        console.groupEnd()
    }

    const sectionIconClass = "p-2 bg-primary/10 border border-primary/15 rounded-lg"
    const sectionIconColor = "h-5 w-5 text-primary"

    // Ensure every tool page emits BreadcrumbList JSON-LD. createToolConfig pages
    // already include it in `schemas`; createMetadata-direct pages pass `breadcrumbs`
    // but no schema array, so we derive it here (deduped against any existing one).
    const hasBreadcrumbSchema =
        Array.isArray(schemas) && schemas.some((s) => s && s["@type"] === "BreadcrumbList")
    const autoBreadcrumbSchema =
        !hasBreadcrumbSchema && breadcrumbs && breadcrumbs.length > 0
            ? createBreadcrumbSchema(breadcrumbs, breadcrumbs[breadcrumbs.length - 1]?.href || "/")
            : null

    return (
        <div className={`min-h-screen bg-background overflow-x-hidden ${className}`}>
            {/* JSON-LD Structured Data — rendered as proper <script> tags for Google */}
            {schemas && schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            {autoBreadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(autoBreadcrumbSchema) }}
                />
            )}

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

                    {/* AI-extractable quick answer block — concise definition for AI Overviews / Perplexity */}
                    {toolContent.quickAnswer && (
                        <div
                            className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-lg"
                            data-ai-answer="true"
                            role="note"
                            aria-label={`Quick answer: ${toolContent.toolName}`}
                        >
                            <p className="text-base text-foreground leading-relaxed">
                                <strong>{toolContent.toolName}:</strong>{" "}
                                {toolContent.quickAnswer}
                            </p>
                        </div>
                    )}

                    <div className="grid lg:grid-cols-[1fr_350px] gap-4 lg:gap-8">

                        <div className="space-y-4 lg:space-y-6 min-w-0 max-w-full overflow-hidden">
                            {/* WebMCP: data-webmcp-tool marks this as the interactive tool region for AI agents */}
                            <div data-webmcp-tool data-tool-name={toolContent.toolName} data-tool-path={expectedMetadata?.path || ""} data-interaction-mode={getInteractionMode(expectedMetadata?.path)}>
                                {toolComponent}
                            </div>

                            {/* Key Takeaways — scannable summary for AI systems and users */}
                            {toolContent.keyTakeaways && toolContent.keyTakeaways.length > 0 && (
                                <section
                                    className="bg-card border border-border rounded-lg p-6"
                                    data-ai-section="key-takeaways"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={sectionIconClass}>
                                            <ListChecks className={sectionIconColor} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-foreground">
                                            Key Takeaways
                                        </h2>
                                    </div>
                                    <ul className="space-y-2">
                                        {toolContent.keyTakeaways.map((takeaway, index) => (
                                            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <ChevronRight className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                                <span>{takeaway}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* What is [Tool]? — primary definition section */}
                            <article
                                className="bg-card border border-border rounded-lg p-6"
                                data-ai-section="definition"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={sectionIconClass}>
                                        <Package className={sectionIconColor} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">
                                        What is {toolContent.toolName}?
                                    </h2>
                                </div>
                                {toolContent.definition && (
                                    <p className="text-base text-foreground leading-relaxed mb-3 font-medium">
                                        <dfn>{toolContent.toolName}</dfn> — {toolContent.definition}
                                    </p>
                                )}
                                <div className="text-base text-muted-foreground leading-relaxed">
                                    {toolContent.overview}
                                </div>
                            </article>

                            {heroImage && (
                                <div className="relative w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-md border border-border my-6">
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

                            {/* How to Use — step-by-step instructions */}
                            <article
                                className="bg-card border border-border rounded-lg p-6"
                                data-ai-section="how-to"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={sectionIconClass}>
                                        <Zap className={sectionIconColor} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">
                                        How to Use {toolContent.toolName}
                                    </h2>
                                </div>
                                <ol className="space-y-4 list-none">
                                    {(toolContent.howToSteps || []).map((step, index) => (
                                        <li key={index} className="flex gap-4">
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
                                        </li>
                                    ))}
                                </ol>
                            </article>

                            {/* In-content ad */}
                            <div className="w-full">
                                <SquareAd />
                            </div>

                            {/* Key Features */}
                            <section
                                className="bg-card border border-border rounded-lg p-6"
                                data-ai-section="features"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={sectionIconClass}>
                                        <Star className={sectionIconColor} />
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
                                        <div className={sectionIconClass}>
                                            <Zap className={sectionIconColor} />
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

                            {/* Use Cases */}
                            {toolContent.useCases && toolContent.useCases.length > 0 && (
                                <section
                                    className="bg-card border border-border rounded-lg p-6"
                                    data-ai-section="use-cases"
                                >
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

                            {/* About Tool — deep content */}
                            <article
                                className="bg-card border border-border rounded-lg p-6"
                                data-ai-section="about"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={sectionIconClass}>
                                        <BookOpen className={sectionIconColor} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">
                                        About {toolContent.toolName}
                                    </h2>
                                </div>
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
                            </article>

                            {/* Pro Tip */}
                            {toolContent.proTip && (
                                <aside className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">
                                            <div className="p-2 bg-primary/10 border border-primary/15 rounded-lg">
                                                <Lightbulb className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground mb-2">
                                                Pro Tip
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {toolContent.proTip}
                                            </p>
                                        </div>
                                    </div>
                                </aside>
                            )}

                            {/* Additional Content */}
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

                            {/* FAQ — using semantic <details>/<summary> for AI extraction */}
                            <section
                                className="bg-card border border-border rounded-lg p-6"
                                data-ai-section="faq"
                            >
                                <h2 className="text-2xl font-bold mb-6 text-foreground">
                                    Frequently Asked Questions
                                </h2>
                                <dl className="space-y-4">
                                    {(toolContent.faqs || []).map((faq, index) => (
                                        <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                                            <dt className="font-semibold text-foreground mb-2">{faq.question}</dt>
                                            <dd className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>

                            {/* Related Tools — mobile */}
                            {toolContent.relatedTools && toolContent.relatedTools.length > 0 && (
                                <nav className="bg-card border border-border rounded-lg p-6 lg:hidden" aria-label="Related tools">
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
                                </nav>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-6">
                            <div className="sticky top-32 space-y-6 hidden lg:block">
                                {toolContent.relatedTools && toolContent.relatedTools.length > 0 && (
                                    <nav className="bg-card border border-border rounded-lg p-6 shadow-sm" aria-label="Related tools">
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
                                    </nav>
                                )}

                                {/* ads */}
                                <div className="space-y-6">
                                    <ClickFortifyAd className="w-full !h-auto aspect-square" />
                                    <SquareAd />
                                </div>
                            </div>
                        </aside>
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
