"use client"

import { useState, useEffect } from "react"
import { GInput } from "@/ui/ginput"
import { Search, Filter, X } from "lucide-react"
import {
    GSelect,
    GSelectContent,
    GSelectItem,
    GSelectTrigger,
    GSelectValue,
} from "@/ui/gselect"
import { cn } from "@/lib/utils"

interface FilterBarProps {
    onSearch: (query: string) => void
    onLanguageChange: (language: string) => void
    onCategoryChange: (category: string) => void
    languages: string[]
    categories: string[]
    searchPlaceholder?: string
    className?: string
}

export function FilterBar({
    onSearch,
    onLanguageChange,
    onCategoryChange,
    languages,
    categories,
    searchPlaceholder = "Search countries...",
    className
}: FilterBarProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("all")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [debouncedQuery, setDebouncedQuery] = useState("")

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery)
            onSearch(searchQuery)
        }, 300)

        return () => clearTimeout(timer)
    }, [searchQuery, onSearch])

    const handleLanguageChange = (value: string) => {
        setSelectedLanguage(value)
        onLanguageChange(value)
    }

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value)
        onCategoryChange(value)
    }

    const clearFilters = () => {
        setSearchQuery("")
        setSelectedLanguage("all")
        setSelectedCategory("all")
        onSearch("")
        onLanguageChange("all")
        onCategoryChange("all")
    }

    const hasActiveFilters = searchQuery || selectedLanguage !== "all" || selectedCategory !== "all"

    return (
        <div className={cn("w-full space-y-4", className)}>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center w-full">
                <div className="relative w-full md:w-1/3">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <GInput
                        placeholder={searchPlaceholder}
                        value={searchQuery}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        className="pl-9 h-10 w-full bg-background/60 backdrop-blur-sm border-2 focus-visible:ring-offset-0 focus-visible:ring-primary/20"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-3 w-3" />
                        </button>
                    )}
                </div>

                <div className="flex flex-1 gap-2 w-full md:w-auto items-center">
                    <GSelect value={selectedLanguage} onValueChange={handleLanguageChange}>
                        <GSelectTrigger className="w-full md:w-[180px] h-10 bg-background/60 backdrop-blur-sm border-2">
                            <GSelectValue placeholder="Language" />
                        </GSelectTrigger>
                        <GSelectContent>
                            <GSelectItem value="all">All Languages</GSelectItem>
                            {languages.map((lang) => (
                                <GSelectItem key={lang} value={lang}>
                                    {lang || "Unknown"}
                                </GSelectItem>
                            ))}
                        </GSelectContent>
                    </GSelect>

                    {hasActiveFilters && (
                        <button
                            onClick={clearFilters}
                            className="ml-auto text-xs font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-2"
                        >
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>

            {/* Wrapped Category Chips */}
            <div className="w-full">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => handleCategoryChange("all")}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-medium transition-all border",
                            selectedCategory === "all"
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
                        )}
                    >
                        All Categories
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm font-medium transition-all border",
                                selectedCategory === cat
                                    ? "bg-primary text-primary-foreground border-primary"
                                    : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
