"use client"

import { useState, useMemo } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"

import { Copy, Check, MoreVertical, Search, Filter } from "lucide-react"
import { COLOR_PALETTES } from "@/data/color-palettes"


const CATEGORIES = [
  "All",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Brown",
  "Neutral",
  "Gray",
  "Black",
  "Gemstone",
  "Nature",
  "Ocean",
  "Forest",
  "Autumn",
  "Spring",
  "Summer",
  "Winter",
  "Morning",
  "Afternoon",
  "Evening",
  "Dark",
  "Light",
  "Gradient",
  "Pastel",
  "Warm",
  "Cool",
  "Vibrant",
  "Modern",
  "Vintage",
  "Retro",
  "Neon",
  "Corporate",
  "Tropical",
  "Nordic",
  "Space",
  "Mediterranean",
  "Royal",
  "Minimalist",
  "Desert",
];

export function ColorPaletteGenerator() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [copiedColor, setCopiedColor] = useState<{ paletteIndex: number; colorIndex: number } | null>(null)

  const filteredPalettes = useMemo(() => {
    return COLOR_PALETTES.filter(palette => {
      const matchesCategory = selectedCategory === "All" || palette.categories.includes(selectedCategory)
      const matchesSearch = palette.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        palette.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const copyToClipboard = (color: string, paletteIndex: number, colorIndex: number) => {
    navigator.clipboard.writeText(color)
    setCopiedColor({ paletteIndex, colorIndex })
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <GInput
            type="text"
            placeholder="Search palettes by name or theme..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <GButton
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs"
              >
                {category}
              </GButton>
            ))}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        Showing <strong>{filteredPalettes.length}</strong> {filteredPalettes.length === 1 ? "palette" : "palettes"}
        {selectedCategory !== "All" && ` in ${selectedCategory} `}
      </div>

      {/* Palette Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPalettes.map((palette, paletteIndex) => (
          <div key={paletteIndex} className="group rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            {/* Colors Display */}
            <div className="flex h-32">
              {palette.colors.map((color, colorIndex) => (
                <button
                  key={colorIndex}
                  className="flex-1 relative group/color hover:scale-105 transition-transform cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={() => copyToClipboard(color, paletteIndex, colorIndex)}
                  title={`Copy ${color} `}
                >
                  {/* Hover overlay with copy icon */}
                  <div className="absolute inset-0 bg-card/0 group-hover/color:bg-card/20 transition-colors flex items-center justify-center">
                    {copiedColor?.paletteIndex === paletteIndex && copiedColor?.colorIndex === colorIndex ? (
                      <Check className="h-5 w-5 text-white opacity-0 group-hover/color:opacity-100 transition-opacity" />
                    ) : (
                      <Copy className="h-5 w-5 text-white opacity-0 group-hover/color:opacity-100 transition-opacity" />
                    )}
                  </div>

                  {/* Color HEX on hover */}
                  <div className="absolute bottom-1 left-0 right-0 text-center">
                    <span className="text-[10px] font-mono font-medium bg-card/60 text-white px-1.5 py-0.5 rounded opacity-0 group-hover/color:opacity-100 transition-opacity">
                      {color}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Palette Info */}
            <div className="p-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm text-card-foreground truncate">{palette.name}</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {palette.categories.slice(0, 3).map((category, index) => (
                      <span
                        key={index}
                        className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                <GButton
                  variant="ghost"
                  size="sm"
                  className="h-7 w-7 p-0 flex-shrink-0"
                >
                  <MoreVertical className="h-4 w-4" />
                </GButton>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredPalettes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground mb-2">No palettes found</p>
          <GButton variant="outline" size="sm" onClick={() => { setSearchQuery(""); setSelectedCategory("All") }}>
            Clear Filters
          </GButton>
        </div>
      )}
    </div>
  )
}
