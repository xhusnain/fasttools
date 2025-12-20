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
        <NavigationMenu>
            <NavigationMenuList>
                {navigationConfig.map((section) => (
                    <NavigationMenuItem key={section.title}>
                        <NavigationMenuTrigger className="bg-transparent text-foreground/70 hover:text-foreground hover:bg-white/5 data-[state=open]:bg-white/5 data-[state=open]:text-foreground font-medium">
                            {section.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="grid w-[600px] gap-6 p-6 md:w-[700px] lg:w-[800px] lg:grid-cols-3 bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
                                {section.categories.map((category) => (
                                    <div key={category.title} className="space-y-4">
                                        <h4 className="font-bold text-sm text-primary/90 tracking-wider uppercase">
                                            {category.title}
                                        </h4>
                                        <ul className="space-y-3">
                                            {category.items.map((item) => (
                                                <ListItem
                                                    key={item.href}
                                                    title={item.title}
                                                    href={item.href}
                                                    icon={item.icon}
                                                    active={pathname === item.href}
                                                >
                                                    {item.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}

                {/* API Docs Link - Standalone */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/api-docs" className={cn(navigationMenuTriggerStyle(), "bg-transparent text-foreground/70 hover:text-foreground hover:bg-white/5")}>
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
>(({ className, title, children, icon: Icon, active, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "group block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/5",
                        active && "bg-white/5",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-4">
                        {Icon && (
                            <div className="p-2 rounded-md bg-white/5 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                                <Icon className="h-4 w-4" />
                            </div>
                        )}
                        <div>
                            <div className="text-sm font-medium leading-none text-foreground group-hover:text-primary transition-colors duration-200">
                                {title}
                            </div>
                            <p className="line-clamp-1 text-xs leading-snug text-muted-foreground/70 mt-1.5 group-hover:text-muted-foreground transition-colors duration-200">
                                {children}
                            </p>
                        </div>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
