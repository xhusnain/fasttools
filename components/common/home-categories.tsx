import Link from "next/link"
import { GButton } from "@/ui/gbutton"
import { GHeader } from "@/ui/gheader"

import { ArrowRight, Award } from "lucide-react"

import { HomeCategoriesProps } from "@/types/common-types/home-categories.types"

export function HomeCategories({ categories }: HomeCategoriesProps) {
    return (
        <section id="tools" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
                        <Award className="h-4 w-4" />
                        COMPLETE TOOLS DIRECTORY
                    </div>

                    <GHeader
                        title="All 60+ Free Online Tools by Category"
                        description="Social media, image, crypto, developer & finance tools and more — browse by category or search above"
                        titleSize="medium"
                        descriptionSize="small"
                        as="h2"
                    />
                </div>

                {/* Display All Categories with All Tools */}
                {categories.map((category) => {
                    const CategoryIcon = category.icon
                    return (
                        <div key={category.id} className="mb-12 sm:mb-16">
                            <div className="flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-2">
                                <div className="p-2 sm:p-3.5 rounded-lg bg-primary/10 border border-primary/15 shadow-sm">
                                    <CategoryIcon className="h-5 w-5 sm:h-7 sm:w-7 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">{category.name}</h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{category.description}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 px-2">
                                {category.tools.map((tool, i) => {
                                    const ToolIcon = tool.icon
                                    return (
                                        <Link key={i} href={tool.href} className="group">
                                            <div className="relative h-full rounded-lg border border-border bg-card p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                                                <div className="flex items-start justify-between">
                                                    <div className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-secondary text-secondary-foreground border border-primary/10 text-[10px] sm:text-xs font-semibold">
                                                        {tool.badge}
                                                    </div>
                                                    <div className="p-2 sm:p-2.5 rounded-lg bg-primary/10 border border-primary/15">
                                                        <ToolIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2 sm:space-y-2.5">
                                                    <h4 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                                        {tool.title}
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                        {tool.description}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm pt-1">
                                                    <span>Try Now</span>
                                                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                            <div className="flex justify-center mt-6 sm:mt-8">
                                <Link href={category.href} aria-label={`View all ${category.name} tools`}>
                                    <GButton size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg gap-2 px-6 sm:px-8">
                                        View All
                                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </GButton>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
