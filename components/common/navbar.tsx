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
import {
    Calculator,
    DollarSign,
    Sparkles,
    Image,
    BarChart,
    Video,
    Gift,
    Code,
    FileText,
    BookOpen,
} from "lucide-react"

const calculators = [
    { title: "BMI Calculator", href: "/calculator/bmi-calculator", description: "Calculate your Body Mass Index" },
    { title: "Age Calculator", href: "/calculator/age-calculator", description: "Find exact age between two dates" },
    { title: "Percentage Calculator", href: "/calculator/percentage-calculator", description: "Easy percentage calculations" },
    { title: "Scientific Calculator", href: "/calculator/scientific-calculator", description: "Advanced math operations" },
    { title: "GPA Calculator", href: "/calculator/gpa-calculator", description: "Calculate your grade point average" },
    { title: "Love Calculator", href: "/calculator/love-calculator", description: "Fun love compatibility test" },
]

const financeTools = [
    { title: "Loan Calculator", href: "/finance-tools/loan-calculator", description: "Calculate loan payments" },
    { title: "Mortgage Calculator", href: "/finance-tools/mortgage-calculator", description: "Plan your mortgage" },
    { title: "Investment Calculator", href: "/finance-tools/investment-calculator", description: "Track investments" },
    { title: "Compound Interest", href: "/finance-tools/compound-interest", description: "Calculate compound interest" },
    { title: "Tip Calculator", href: "/finance-tools/tip-calculator", description: "Split bills easily" },
    { title: "ROAS Calculator", href: "/finance-tools/roas-calculator", description: "Return on ad spend" },
]

const mediaTools = [
    { title: "Image Compressor", href: "/image-tools/image-compressor", description: "Compress images online" },
    { title: "PDF to Word", href: "/pdf-tools/pdf-word-converter", description: "Convert PDF to Word" },
    { title: "Image to Text", href: "/image-tools/image-to-text", description: "Extract text from images" },
    { title: "PDF Compressor", href: "/pdf-tools/pdf-compressor", description: "Reduce PDF file size" },
]

const socialTools = [
    { title: "TikTok Downloader", href: "/social-media-tools/tiktok-downloader", description: "Download TikTok videos" },
    { title: "Instagram Downloader", href: "/social-media-tools/instagram-downloader", description: "Save Instagram content" },
    { title: "YouTube Tags", href: "/social-media-tools/youtube-tags", description: "Extract YouTube tags" },
    { title: "Hashtag Generator", href: "/social-media-tools/hashtag-counter", description: "Generate trending hashtags" },
]

const moreTools = [
    { title: "Converter Tools", href: "/converters", description: "Currency, Length, Timezone & more" },
    { title: "PDF Tools", href: "/pdf-tools", description: "Merge, Split, Compress & Edit PDF" },
    { title: "Image Tools", href: "/image-tools", description: "Compress, Resize & Convert images" },
    { title: "ROAS Calculator", href: "/finance-tools/roas-calculator", description: "Calculate Return on Ad Spend" },
    { title: "Christmas Font", href: "/festivals/christmas-font-converter", description: "Festive text styler" },
    { title: "Turkey Defrost", href: "/festivals/turkey-defrost-calculator", description: "Holiday cooking helper" },
]

export function Navbar() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {calculators.map((item) => (
                                <ListItem key={item.title} title={item.title} href={item.href}>
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Finance</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {financeTools.map((item) => (
                                <ListItem key={item.title} title={item.title} href={item.href}>
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Media</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4">
                            {mediaTools.map((item) => (
                                <ListItem key={item.title} title={item.title} href={item.href}>
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Social</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-3 p-4">
                            {socialTools.map((item) => (
                                <ListItem key={item.title} title={item.title} href={item.href}>
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>More</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {moreTools.map((item) => (
                                <ListItem key={item.title} title={item.title} href={item.href}>
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
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
    React.ComponentPropsWithoutRef<"a"> & { title: string; href: string }
>(({ className, title, children, href, ...props }, ref) => {
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
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
