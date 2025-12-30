"use client"

import { useState, useMemo } from "react"
import { Channel } from "@/types/iptv"
import { ChannelList } from "./channel-list"
import { FilterBar } from "./filter-bar"

interface CountryChannelDashboardProps {
    initialChannels: Channel[]
    countryCode: string
}

export function CountryChannelDashboard({ initialChannels, countryCode }: CountryChannelDashboardProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("all")
    const [selectedCategory, setSelectedCategory] = useState("all")

    // Extract available filters from channels dynamically
    const { availableLanguages, availableCategories } = useMemo(() => {
        const langs = new Set<string>()
        const catCounts = new Map<string, number>()

        initialChannels.forEach(channel => {
            if (channel.language) langs.add(channel.language)
            channel.categories.forEach(c => {
                catCounts.set(c, (catCounts.get(c) || 0) + 1)
            })
        })

        // Sort categories by popularity (count) then alphabetically
        const sortedCategories = Array.from(catCounts.entries())
            .sort((a, b) => {
                // Primary: Count descending
                if (b[1] !== a[1]) return b[1] - a[1]
                // Secondary: Name ascending
                return a[0].localeCompare(b[0])
            })
            .map(entry => entry[0])

        return {
            availableLanguages: Array.from(langs).sort(),
            availableCategories: sortedCategories
        }
    }, [initialChannels])

    // Filter Logic
    const filteredChannels = useMemo(() => {
        return initialChannels.filter((channel) => {
            // 1. Search (Name)
            const matchesSearch =
                searchQuery === "" ||
                channel.name.toLowerCase().includes(searchQuery.toLowerCase())

            // 2. Language
            const matchesLanguage =
                selectedLanguage === "all" ||
                (channel.language && channel.language.toLowerCase() === selectedLanguage.toLowerCase())

            // 3. Category
            const matchesCategory =
                selectedCategory === "all" ||
                channel.categories.some(c => c.toLowerCase() === selectedCategory.toLowerCase())

            return matchesSearch && matchesLanguage && matchesCategory
        })
    }, [initialChannels, searchQuery, selectedLanguage, selectedCategory])

    return (
        <div className="space-y-8">
            <FilterBar
                languages={availableLanguages}
                categories={availableCategories}
                onSearch={setSearchQuery}
                onLanguageChange={setSelectedLanguage}
                onCategoryChange={setSelectedCategory}
                searchPlaceholder="Search channels..."
            />

            <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                    Showing {filteredChannels.length} channels
                </p>
                <ChannelList channels={filteredChannels} countryCode={countryCode} />
            </div>

            {filteredChannels.length === 0 && (
                <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed text-muted-foreground">
                    No channels found matching your filters.
                </div>
            )}
        </div>
    )
}
