"use client"

import { useState, useMemo } from "react"
import { Country } from "@/types/iptv"
import { CountryGrid } from "./country-grid"
import { FilterBar } from "./filter-bar"

interface LiveTVDashboardProps {
    initialCountries: Country[]
    languages: string[]
    categories: string[]
}

export function LiveTVDashboard({ initialCountries, languages, categories }: LiveTVDashboardProps) {
    const [countries, setCountries] = useState(initialCountries)
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState("all")
    const [selectedCategory, setSelectedCategory] = useState("all") // Not fully implemented for countries yet without aggregation

    // Filter Logic
    const filteredCountries = useMemo(() => {
        return countries.filter((country) => {
            // 1. Search (Name or Code)
            const matchesSearch =
                searchQuery === "" ||
                country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                country.code.toLowerCase().includes(searchQuery.toLowerCase())

            // 2. Language 
            // Note: The Country type currently has optional `languages`. 
            // If the service doesn't populate this fully, filtering might be weak.
            // We'll check if the country Code matches known language regions loosely if data is missing,
            // but ideally we rely on the `languages` prop if populated.
            // For now, assuming basic name search integration for simplicity if strictly name-based.
            // BUT, if we want strict language filtering, we need to ensure country objects have languages.
            // Let's assume for now we filter based on available data.

            // REAL IMPLEMENTATION: The iptv-org data might not link country->lang directly in our current service `extractCountries`.
            // We might need to handle this. For now, we will pass matchesSearch.
            // Refinement: If selectedLanguage is set, we need to know if the country supports it.
            // Current 'Country' interface: `languages?: string[]`.
            const matchesLanguage =
                selectedLanguage === "all" ||
                (country.languages && country.languages.some(l => l.toLowerCase() === selectedLanguage.toLowerCase()))

            // 3. Category
            const matchesCategory =
                selectedCategory === "all" ||
                (country.categories && country.categories.some(c => c.toLowerCase() === selectedCategory.toLowerCase()))

            return matchesSearch && matchesLanguage && matchesCategory
        })
    }, [countries, searchQuery, selectedLanguage, selectedCategory])

    return (
        <div className="space-y-8">
            <FilterBar
                languages={languages}
                categories={categories}
                onSearch={setSearchQuery}
                onLanguageChange={setSelectedLanguage}
                onCategoryChange={setSelectedCategory}
            />

            <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                    Showing {filteredCountries.length} countries
                </p>
                <CountryGrid countries={filteredCountries} />
            </div>

            {filteredCountries.length === 0 && (
                <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed text-muted-foreground">
                    No countries found matching your filters.
                </div>
            )}
        </div>
    )
}
