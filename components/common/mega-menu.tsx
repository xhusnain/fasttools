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

export function MegaMenu() {
    const pathname = usePathname()

    return (
        <NavigationMenu className="max-w-none justify-start">
            <NavigationMenuList>
                {navigationConfig.map((section) => {
                    const numCategories = section.categories.length

                    return (
                        <NavigationMenuItem key={section.title}>
                            <NavigationMenuTrigger className="h-9 px-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent data-[state=open]:bg-accent data-[state=open]:text-primary rounded-lg transition-colors bg-transparent">
                                {section.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="p-5 bg-popover border border-border rounded-lg shadow-lg">
                                    <div className={cn(
                                        "flex gap-8",
                                        numCategories >= 4 && "flex-wrap max-w-[700px]"
                                    )}>
                                        {section.categories.map((category) => (
                                            <div key={category.title} className="flex-shrink-0">
                                                <h4 className="text-[11px] font-semibold text-primary uppercase tracking-wider mb-3 whitespace-nowrap">
                                                    {category.title}
                                                </h4>
                                                <ul className="space-y-1">
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

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link
                            href="/api-docs"
                            className="h-9 px-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-accent rounded-lg transition-colors inline-flex items-center"
                        >
                            API Docs
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
                        "group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm leading-none no-underline outline-none transition-all whitespace-nowrap",
                        "text-foreground/70 hover:text-primary hover:bg-accent",
                        active && "bg-primary/10 text-primary font-medium",
                        className
                    )}
                    {...props}
                >
                    {Icon && (
                        <Icon className={cn(
                            "h-4 w-4 shrink-0",
                            active ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        )} />
                    )}
                    <span>{title}</span>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
