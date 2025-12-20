"use client"

import React, { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
    headings: {
        id: string
        text: string
        level: number
    }[]
}

export function GTableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("")

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "0% 0% -80% 0%" }
        )

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id)
            if (element) {
                observer.observe(element)
            }
        })

        return () => observer.disconnect()
    }, [headings])

    if (!headings?.length) return null

    return (
        <nav className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
                Table of Contents
            </h4>
            <ul className="space-y-2 text-sm">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={cn(
                                "block transition-colors duration-200 hover:text-hotpink",
                                activeId === heading.id
                                    ? "text-hotpink font-medium"
                                    : "text-muted-foreground"
                            )}
                            onClick={(e) => {
                                e.preventDefault()
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: "smooth",
                                })
                                setActiveId(heading.id)
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
