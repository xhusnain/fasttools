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
        const cats = new Set<string>()

        initialChannels.forEach(channel => {
            if (channel.language) langs.add(channel.language)
            channel.categories.forEach(c => cats.add(c))
        })

        return {
            availableLanguages: Array.from(langs).sort(),
            availableCategories: Array.from(cats).sort()
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
