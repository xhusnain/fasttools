"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/utilities/navigation-menu"
import { navigationConfig } from "@/data/navigation"
import { usePathname } from "next/navigation"
import { useTranslations } from 'next-intl'

export function MegaMenu() {
    const pathname = usePathname()
    const tCommon = useTranslations('common')
    const tNav = useTranslations('navigation')

    return (
        <NavigationMenu className="max-w-none w-full">
            <NavigationMenuList className="flex-nowrap gap-0 space-x-0">
                {navigationConfig.map((section) => {
                    // Calculate total items and determine layout
                    const totalItems = section.categories.reduce((acc, cat) => acc + cat.items.length, 0)
                    const isLarge = totalItems > 8
                    const numCategories = section.categories.length

                    // Determine grid columns based on number of categories (responsive)
                    const gridCols = numCategories <= 2 ? 'grid-cols-1 sm:grid-cols-2' :
                        numCategories <= 3 ? 'grid-cols-2 lg:grid-cols-3' :
                            'grid-cols-2 lg:grid-cols-4'

                    return (
                        <NavigationMenuItem key={section.title}>
                            <NavigationMenuTrigger className="bg-transparent text-foreground/70 hover:text-foreground hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-foreground font-medium text-xs h-8 px-2">
                                {section.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div
                                    className={cn(
                                        "p-3 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl",
                                        isLarge
                                            ? "w-[320px] sm:w-[450px] md:w-[600px] lg:w-[700px] max-h-[350px] overflow-y-auto"
                                            : "w-[280px] sm:w-[350px] md:w-[450px]"
                                    )}
                                >
                                    <div className={cn(
                                        "grid gap-3",
                                        gridCols
                                    )}>
                                        {section.categories.map((category) => (
                                            <div key={category.title} className="space-y-1.5">
                                                <h4 className="font-semibold text-[10px] text-primary/80 tracking-wider uppercase px-1.5">
                                                    {category.title}
                                                </h4>
                                                <ul className="space-y-0">
                                                    {category.items.map((item) => (
                                                        <ListItem
                                                            key={item.href}
                                                            title={item.title}
                                                            href={item.href}
                                                            icon={item.icon}
                                                            active={pathname === item.href}
                                                        />
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    )
                })}

                {/* API Docs Link - Standalone */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/api-docs" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-foreground/70 hover:text-foreground hover:bg-white/5 text-xs h-8 px-2")}>
                            {tCommon('apiDocs')}
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: any; active?: boolean }
>(({ className, title, icon: Icon, active, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "group flex items-center gap-1.5 select-none rounded px-1.5 py-1 leading-none no-underline outline-none transition-colors hover:bg-white/5",
                        active && "bg-white/5 text-primary",
                        className
                    )}
                    {...props}
                >
                    {Icon && (
                        <Icon className="h-3 w-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    )}
                    <span className="text-xs text-foreground/80 group-hover:text-foreground transition-colors truncate">
                        {title}
                    </span>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
