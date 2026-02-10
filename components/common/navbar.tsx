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
import { LucideIcon } from "lucide-react"

export function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {navigationConfig.slice(0, 5).map((section) => (
                    <NavigationMenuItem key={section.title}>
                        <NavigationMenuTrigger>{section.title}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] max-h-[80vh] overflow-y-auto">
                                {section.categories.flatMap((category) =>
                                    category.items.map((item) => (
                                        <ListItem
                                            key={item.href}
                                            title={item.title}
                                            href={item.href}
                                            icon={item.icon}
                                        >
                                            {item.description}
                                        </ListItem>
                                    ))
                                )}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                ))}

                <NavigationMenuItem>
                    <NavigationMenuTrigger>More</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {navigationConfig.find(s => s.title === "More")?.categories.flatMap((category) =>
                                category.items.map((item) => (
                                    <ListItem
                                        key={item.href}
                                        title={item.title}
                                        href={item.href}
                                        icon={item.icon}
                                    >
                                        {item.description}
                                    </ListItem>
                                ))
                            )}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/products" className={navigationMenuTriggerStyle()}>
                            All Categories
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/api-docs" className={navigationMenuTriggerStyle()}>
                            API Docs
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/blog" className={navigationMenuTriggerStyle()}>
                            Blog
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string; href: string; icon?: LucideIcon }
>(({ className, title, children, href, icon: Icon, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-2">
                        {Icon && <Icon className="h-4 w-4 opacity-70" />}
                        <div className="text-sm font-medium leading-none">{title}</div>
                    </div>
                    {children && (
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            {children}
                        </p>
                    )}
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
