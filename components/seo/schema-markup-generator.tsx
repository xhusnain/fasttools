"use client"

import { useCallback, useMemo, useState } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { GBadge } from "@/ui/gbadge"
import { GTextarea } from "@/ui/gtextarea"
import { cn } from "@/lib/utils"
import {
  Check,
  Code,
  Copy,
  ExternalLink,
  FileCode,
  Plus,
  RotateCcw,
  Trash2,
} from "lucide-react"

// ── Schema type definitions ──────────────────────────────────────
type SchemaType =
  | "Article"
  | "FAQPage"
  | "HowTo"
  | "LocalBusiness"
  | "Product"
  | "Event"
  | "Organization"
  | "Person"
  | "Recipe"
  | "BreadcrumbList"
  | "VideoObject"

interface FieldDef {
  key: string
  label: string
  type: "text" | "textarea" | "url" | "date" | "number" | "select" | "array"
  required?: boolean
  placeholder?: string
  hint?: string
  options?: { value: string; label: string }[]
}

const SCHEMA_TYPES: { type: SchemaType; label: string; description: string }[] = [
  { type: "Article", label: "Article", description: "Blog post, news article, or editorial content" },
  { type: "FAQPage", label: "FAQ Page", description: "Frequently asked questions with answers" },
  { type: "HowTo", label: "How-To", description: "Step-by-step instructions guide" },
  { type: "LocalBusiness", label: "Local Business", description: "Physical business with address and hours" },
  { type: "Product", label: "Product", description: "Product with price, availability, and reviews" },
  { type: "Event", label: "Event", description: "Upcoming event with date, location, and tickets" },
  { type: "Organization", label: "Organization", description: "Company or organization info" },
  { type: "Person", label: "Person", description: "Individual with bio, job title, and social profiles" },
  { type: "Recipe", label: "Recipe", description: "Recipe with ingredients, steps, and nutrition" },
  { type: "BreadcrumbList", label: "Breadcrumb", description: "Page navigation breadcrumb trail" },
  { type: "VideoObject", label: "Video", description: "Video with title, description, and thumbnail" },
]

const SCHEMA_FIELDS: Record<SchemaType, FieldDef[]> = {
  Article: [
    { key: "headline", label: "Headline", type: "text", required: true, placeholder: "Article title" },
    { key: "description", label: "Description", type: "textarea", placeholder: "Short description" },
    { key: "authorName", label: "Author Name", type: "text", required: true, placeholder: "John Doe" },
    { key: "authorUrl", label: "Author URL", type: "url", placeholder: "https://example.com/author" },
    { key: "publisherName", label: "Publisher Name", type: "text", placeholder: "Example News" },
    { key: "publisherLogoUrl", label: "Publisher Logo URL", type: "url", placeholder: "https://example.com/logo.png" },
    { key: "image", label: "Image URL", type: "url", required: true, placeholder: "https://example.com/image.jpg" },
    { key: "datePublished", label: "Date Published", type: "date", required: true },
    { key: "dateModified", label: "Date Modified", type: "date" },
    { key: "url", label: "Article URL", type: "url", placeholder: "https://example.com/article" },
  ],
  FAQPage: [
    { key: "faqs", label: "Questions & Answers", type: "array", required: true, hint: "Add question-answer pairs" },
  ],
  HowTo: [
    { key: "name", label: "Guide Title", type: "text", required: true, placeholder: "How to change a tire" },
    { key: "description", label: "Description", type: "textarea", placeholder: "A step-by-step guide..." },
    { key: "totalTime", label: "Total Time (ISO 8601)", type: "text", placeholder: "PT30M (30 minutes)" },
    { key: "estimatedCostValue", label: "Estimated Cost", type: "number", placeholder: "0" },
    { key: "estimatedCostCurrency", label: "Cost Currency", type: "text", placeholder: "USD" },
    { key: "steps", label: "Steps", type: "array", required: true, hint: "Add steps with name and text" },
  ],
  LocalBusiness: [
    { key: "name", label: "Business Name", type: "text", required: true, placeholder: "Joe's Coffee Shop" },
    { key: "businessType", label: "Business Type", type: "select", options: [
      { value: "LocalBusiness", label: "Local Business (General)" },
      { value: "Restaurant", label: "Restaurant" },
      { value: "Store", label: "Store" },
      { value: "MedicalBusiness", label: "Medical Business" },
      { value: "LegalService", label: "Legal Service" },
      { value: "FinancialService", label: "Financial Service" },
      { value: "RealEstateAgent", label: "Real Estate Agent" },
    ]},
    { key: "streetAddress", label: "Street Address", type: "text", required: true, placeholder: "123 Main St" },
    { key: "city", label: "City", type: "text", required: true, placeholder: "New York" },
    { key: "state", label: "State/Region", type: "text", placeholder: "NY" },
    { key: "postalCode", label: "Postal Code", type: "text", placeholder: "10001" },
    { key: "country", label: "Country", type: "text", placeholder: "US" },
    { key: "telephone", label: "Phone", type: "text", placeholder: "+1-555-123-4567" },
    { key: "url", label: "Website URL", type: "url", placeholder: "https://example.com" },
    { key: "image", label: "Image URL", type: "url", placeholder: "https://example.com/photo.jpg" },
    { key: "priceRange", label: "Price Range", type: "text", placeholder: "$$" },
    { key: "latitude", label: "Latitude", type: "text", placeholder: "40.7128" },
    { key: "longitude", label: "Longitude", type: "text", placeholder: "-74.0060" },
  ],
  Product: [
    { key: "name", label: "Product Name", type: "text", required: true, placeholder: "Blue Widget" },
    { key: "description", label: "Description", type: "textarea", placeholder: "A premium blue widget..." },
    { key: "image", label: "Image URL", type: "url", required: true, placeholder: "https://example.com/product.jpg" },
    { key: "brandName", label: "Brand", type: "text", placeholder: "WidgetCo" },
    { key: "sku", label: "SKU", type: "text", placeholder: "BW-001" },
    { key: "price", label: "Price", type: "number", required: true, placeholder: "29.99" },
    { key: "priceCurrency", label: "Currency", type: "text", required: true, placeholder: "USD" },
    { key: "availability", label: "Availability", type: "select", options: [
      { value: "https://schema.org/InStock", label: "In Stock" },
      { value: "https://schema.org/OutOfStock", label: "Out of Stock" },
      { value: "https://schema.org/PreOrder", label: "Pre-Order" },
    ]},
    { key: "ratingValue", label: "Rating (1-5)", type: "number", placeholder: "4.5" },
    { key: "reviewCount", label: "Review Count", type: "number", placeholder: "120" },
    { key: "url", label: "Product URL", type: "url", placeholder: "https://example.com/product" },
  ],
  Event: [
    { key: "name", label: "Event Name", type: "text", required: true, placeholder: "Tech Conference 2026" },
    { key: "description", label: "Description", type: "textarea", placeholder: "Annual technology conference..." },
    { key: "startDate", label: "Start Date & Time", type: "date", required: true },
    { key: "endDate", label: "End Date & Time", type: "date" },
    { key: "locationName", label: "Venue Name", type: "text", required: true, placeholder: "Convention Center" },
    { key: "streetAddress", label: "Venue Address", type: "text", placeholder: "123 Main St, City, State" },
    { key: "image", label: "Event Image URL", type: "url", placeholder: "https://example.com/event.jpg" },
    { key: "performerName", label: "Performer/Speaker", type: "text", placeholder: "Jane Smith" },
    { key: "organizerName", label: "Organizer", type: "text", placeholder: "Tech Events Inc." },
    { key: "organizerUrl", label: "Organizer URL", type: "url", placeholder: "https://example.com" },
    { key: "ticketPrice", label: "Ticket Price", type: "number", placeholder: "99" },
    { key: "ticketCurrency", label: "Currency", type: "text", placeholder: "USD" },
    { key: "ticketUrl", label: "Ticket URL", type: "url", placeholder: "https://example.com/tickets" },
    { key: "eventAttendanceMode", label: "Attendance Mode", type: "select", options: [
      { value: "https://schema.org/OfflineEventAttendanceMode", label: "In-Person" },
      { value: "https://schema.org/OnlineEventAttendanceMode", label: "Online" },
      { value: "https://schema.org/MixedEventAttendanceMode", label: "Hybrid" },
    ]},
  ],
  Organization: [
    { key: "name", label: "Organization Name", type: "text", required: true, placeholder: "Example Inc." },
    { key: "url", label: "Website URL", type: "url", required: true, placeholder: "https://example.com" },
    { key: "logo", label: "Logo URL", type: "url", placeholder: "https://example.com/logo.png" },
    { key: "description", label: "Description", type: "textarea", placeholder: "A brief description..." },
    { key: "email", label: "Contact Email", type: "text", placeholder: "info@example.com" },
    { key: "telephone", label: "Phone", type: "text", placeholder: "+1-555-123-4567" },
    { key: "foundingDate", label: "Founded", type: "date" },
    { key: "sameAs", label: "Social Profiles (one per line)", type: "textarea", placeholder: "https://twitter.com/example\nhttps://linkedin.com/company/example", hint: "One URL per line" },
  ],
  Person: [
    { key: "name", label: "Full Name", type: "text", required: true, placeholder: "Jane Doe" },
    { key: "jobTitle", label: "Job Title", type: "text", placeholder: "Software Engineer" },
    { key: "url", label: "Website URL", type: "url", placeholder: "https://janedoe.com" },
    { key: "image", label: "Photo URL", type: "url", placeholder: "https://example.com/photo.jpg" },
    { key: "email", label: "Email", type: "text", placeholder: "jane@example.com" },
    { key: "worksForName", label: "Works For (Company)", type: "text", placeholder: "Example Inc." },
    { key: "sameAs", label: "Social Profiles (one per line)", type: "textarea", placeholder: "https://twitter.com/jane\nhttps://linkedin.com/in/jane" },
  ],
  Recipe: [
    { key: "name", label: "Recipe Name", type: "text", required: true, placeholder: "Chocolate Chip Cookies" },
    { key: "description", label: "Description", type: "textarea", placeholder: "Classic homemade cookies..." },
    { key: "image", label: "Image URL", type: "url", required: true, placeholder: "https://example.com/recipe.jpg" },
    { key: "authorName", label: "Author", type: "text", placeholder: "Chef John" },
    { key: "prepTime", label: "Prep Time (ISO 8601)", type: "text", placeholder: "PT15M" },
    { key: "cookTime", label: "Cook Time (ISO 8601)", type: "text", placeholder: "PT25M" },
    { key: "totalTime", label: "Total Time (ISO 8601)", type: "text", placeholder: "PT40M" },
    { key: "recipeYield", label: "Yield/Servings", type: "text", placeholder: "24 cookies" },
    { key: "recipeCategory", label: "Category", type: "text", placeholder: "Dessert" },
    { key: "recipeCuisine", label: "Cuisine", type: "text", placeholder: "American" },
    { key: "ingredients", label: "Ingredients (one per line)", type: "textarea", required: true, placeholder: "2 cups flour\n1 cup sugar\n1 cup butter" },
    { key: "instructions", label: "Instructions (one step per line)", type: "textarea", required: true, placeholder: "Preheat oven to 375°F\nMix dry ingredients\nCombine wet ingredients" },
    { key: "calories", label: "Calories per Serving", type: "text", placeholder: "210 calories" },
  ],
  BreadcrumbList: [
    { key: "breadcrumbs", label: "Breadcrumb Items", type: "array", required: true, hint: "Add items with name and URL. Last item = current page." },
  ],
  VideoObject: [
    { key: "name", label: "Video Title", type: "text", required: true, placeholder: "How to Make Pizza" },
    { key: "description", label: "Description", type: "textarea", required: true, placeholder: "A step-by-step pizza tutorial..." },
    { key: "thumbnailUrl", label: "Thumbnail URL", type: "url", required: true, placeholder: "https://example.com/thumb.jpg" },
    { key: "uploadDate", label: "Upload Date", type: "date", required: true },
    { key: "duration", label: "Duration (ISO 8601)", type: "text", placeholder: "PT10M30S" },
    { key: "contentUrl", label: "Video File URL", type: "url", placeholder: "https://example.com/video.mp4" },
    { key: "embedUrl", label: "Embed URL", type: "url", placeholder: "https://youtube.com/embed/xyz" },
  ],
}

// ── JSON-LD builder functions ────────────────────────────────────
function buildJsonLd(type: SchemaType, data: Record<string, string>, arrayData: Record<string, string[][]>): object {
  const base: Record<string, unknown> = { "@context": "https://schema.org", "@type": type }

  const addIfPresent = (key: string, field: string) => {
    if (data[field]?.trim()) base[key] = data[field].trim()
  }

  switch (type) {
    case "Article":
      addIfPresent("headline", "headline")
      addIfPresent("description", "description")
      if (data.authorName) base.author = { "@type": "Person", name: data.authorName, ...(data.authorUrl ? { url: data.authorUrl } : {}) }
      if (data.publisherName) base.publisher = { "@type": "Organization", name: data.publisherName, ...(data.publisherLogoUrl ? { logo: { "@type": "ImageObject", url: data.publisherLogoUrl } } : {}) }
      if (data.image) base.image = [data.image]
      addIfPresent("datePublished", "datePublished")
      addIfPresent("dateModified", "dateModified")
      if (data.url) base.mainEntityOfPage = { "@type": "WebPage", "@id": data.url }
      break

    case "FAQPage":
      base.mainEntity = (arrayData.faqs || []).filter(r => r[0] && r[1]).map(([q, a]) => ({
        "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a }
      }))
      break

    case "HowTo":
      addIfPresent("name", "name")
      addIfPresent("description", "description")
      addIfPresent("totalTime", "totalTime")
      if (data.estimatedCostValue) base.estimatedCost = { "@type": "MonetaryAmount", value: data.estimatedCostValue, currency: data.estimatedCostCurrency || "USD" }
      base.step = (arrayData.steps || []).filter(r => r[0] || r[1]).map((r, i) => ({
        "@type": "HowToStep", position: i + 1, name: r[0] || `Step ${i + 1}`, text: r[1] || ""
      }))
      break

    case "LocalBusiness":
      base["@type"] = data.businessType || "LocalBusiness"
      addIfPresent("name", "name")
      addIfPresent("telephone", "telephone")
      addIfPresent("url", "url")
      addIfPresent("image", "image")
      addIfPresent("priceRange", "priceRange")
      if (data.streetAddress) base.address = { "@type": "PostalAddress", streetAddress: data.streetAddress, addressLocality: data.city, addressRegion: data.state, postalCode: data.postalCode, addressCountry: data.country }
      if (data.latitude && data.longitude) base.geo = { "@type": "GeoCoordinates", latitude: data.latitude, longitude: data.longitude }
      break

    case "Product":
      addIfPresent("name", "name")
      addIfPresent("description", "description")
      if (data.image) base.image = [data.image]
      if (data.brandName) base.brand = { "@type": "Brand", name: data.brandName }
      addIfPresent("sku", "sku")
      if (data.price) base.offers = { "@type": "Offer", price: data.price, priceCurrency: data.priceCurrency || "USD", availability: data.availability || "https://schema.org/InStock", ...(data.url ? { url: data.url } : {}) }
      if (data.ratingValue) base.aggregateRating = { "@type": "AggregateRating", ratingValue: data.ratingValue, reviewCount: data.reviewCount || "1" }
      break

    case "Event":
      addIfPresent("name", "name")
      addIfPresent("description", "description")
      addIfPresent("startDate", "startDate")
      addIfPresent("endDate", "endDate")
      addIfPresent("image", "image")
      addIfPresent("eventAttendanceMode", "eventAttendanceMode")
      if (data.locationName) base.location = { "@type": "Place", name: data.locationName, ...(data.streetAddress ? { address: data.streetAddress } : {}) }
      if (data.performerName) base.performer = { "@type": "Person", name: data.performerName }
      if (data.organizerName) base.organizer = { "@type": "Organization", name: data.organizerName, ...(data.organizerUrl ? { url: data.organizerUrl } : {}) }
      if (data.ticketPrice) base.offers = { "@type": "Offer", price: data.ticketPrice, priceCurrency: data.ticketCurrency || "USD", ...(data.ticketUrl ? { url: data.ticketUrl } : {}), availability: "https://schema.org/InStock" }
      break

    case "Organization":
      addIfPresent("name", "name")
      addIfPresent("url", "url")
      addIfPresent("logo", "logo")
      addIfPresent("description", "description")
      addIfPresent("email", "email")
      addIfPresent("telephone", "telephone")
      addIfPresent("foundingDate", "foundingDate")
      if (data.sameAs) base.sameAs = data.sameAs.split("\n").map(s => s.trim()).filter(Boolean)
      break

    case "Person":
      addIfPresent("name", "name")
      addIfPresent("jobTitle", "jobTitle")
      addIfPresent("url", "url")
      addIfPresent("image", "image")
      addIfPresent("email", "email")
      if (data.worksForName) base.worksFor = { "@type": "Organization", name: data.worksForName }
      if (data.sameAs) base.sameAs = data.sameAs.split("\n").map(s => s.trim()).filter(Boolean)
      break

    case "Recipe":
      addIfPresent("name", "name")
      addIfPresent("description", "description")
      if (data.image) base.image = [data.image]
      if (data.authorName) base.author = { "@type": "Person", name: data.authorName }
      addIfPresent("prepTime", "prepTime")
      addIfPresent("cookTime", "cookTime")
      addIfPresent("totalTime", "totalTime")
      addIfPresent("recipeYield", "recipeYield")
      addIfPresent("recipeCategory", "recipeCategory")
      addIfPresent("recipeCuisine", "recipeCuisine")
      if (data.ingredients) base.recipeIngredient = data.ingredients.split("\n").map(s => s.trim()).filter(Boolean)
      if (data.instructions) base.recipeInstructions = data.instructions.split("\n").map(s => s.trim()).filter(Boolean).map((text, i) => ({ "@type": "HowToStep", position: i + 1, text }))
      if (data.calories) base.nutrition = { "@type": "NutritionInformation", calories: data.calories }
      break

    case "BreadcrumbList":
      base.itemListElement = (arrayData.breadcrumbs || []).filter(r => r[0]).map((r, i, arr) => ({
        "@type": "ListItem", position: i + 1, name: r[0], ...(i < arr.length - 1 && r[1] ? { item: r[1] } : {})
      }))
      break

    case "VideoObject":
      addIfPresent("name", "name")
      addIfPresent("description", "description")
      addIfPresent("thumbnailUrl", "thumbnailUrl")
      addIfPresent("uploadDate", "uploadDate")
      addIfPresent("duration", "duration")
      addIfPresent("contentUrl", "contentUrl")
      addIfPresent("embedUrl", "embedUrl")
      break
  }

  return base
}

// ── Component ─────────────────────────────────────────────────────
export function SchemaMarkupGenerator() {
  const [selectedType, setSelectedType] = useState<SchemaType>("Article")
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [arrayData, setArrayData] = useState<Record<string, string[][]>>({})
  const [copied, setCopied] = useState(false)
  const [outputTab, setOutputTab] = useState("script")

  const fields = SCHEMA_FIELDS[selectedType]

  const updateField = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const addArrayRow = (key: string, cols: number) => {
    setArrayData((prev) => ({
      ...prev,
      [key]: [...(prev[key] || []), Array(cols).fill("") as string[]],
    }))
  }

  const updateArrayCell = (key: string, rowIdx: number, colIdx: number, value: string) => {
    setArrayData((prev) => {
      const rows = [...(prev[key] || [])]
      rows[rowIdx] = [...rows[rowIdx]]
      rows[rowIdx][colIdx] = value
      return { ...prev, [key]: rows }
    })
  }

  const removeArrayRow = (key: string, rowIdx: number) => {
    setArrayData((prev) => ({
      ...prev,
      [key]: (prev[key] || []).filter((_, i) => i !== rowIdx),
    }))
  }

  const jsonLd = useMemo(() => buildJsonLd(selectedType, formData, arrayData), [selectedType, formData, arrayData])
  const jsonString = useMemo(() => JSON.stringify(jsonLd, null, 2), [jsonLd])
  const scriptTag = useMemo(() => `<script type="application/ld+json">\n${jsonString}\n</script>`, [jsonString])

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleReset = () => {
    setFormData({})
    setArrayData({})
  }

  const handleTypeChange = (type: SchemaType) => {
    setSelectedType(type)
    setFormData({})
    setArrayData({})
  }

  const richResultsUrl = `https://search.google.com/test/rich-results`

  return (
    <div className="space-y-6">
      {/* Schema Type Selector */}
      <GCard>
        <GCardHeader className="pb-3">
          <GCardTitle className="text-base flex items-center gap-2">
            <Code className="h-5 w-5" /> Select Schema Type
          </GCardTitle>
        </GCardHeader>
        <GCardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {SCHEMA_TYPES.map(({ type, label, description }) => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                className={cn(
                  "text-left p-3 rounded-lg border transition-colors",
                  selectedType === type
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
              >
                <div className="text-sm font-medium">{label}</div>
                <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{description}</div>
              </button>
            ))}
          </div>
        </GCardContent>
      </GCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Form */}
        <GCard>
          <GCardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <GCardTitle className="text-base">{selectedType} Fields</GCardTitle>
              <GButton variant="outline" size="sm" onClick={handleReset}>
                <RotateCcw className="h-4 w-4 mr-1" /> Reset
              </GButton>
            </div>
          </GCardHeader>
          <GCardContent className="space-y-4">
            {fields.map((field) => {
              if (field.type === "array") {
                const isArrayFaq = field.key === "faqs"
                const isArrayBreadcrumbs = field.key === "breadcrumbs"
                const isArraySteps = field.key === "steps"
                const cols = isArrayFaq ? 2 : isArrayBreadcrumbs ? 2 : isArraySteps ? 2 : 2
                const colLabels = isArrayFaq ? ["Question", "Answer"] : isArrayBreadcrumbs ? ["Name", "URL"] : isArraySteps ? ["Step Name", "Step Text"] : ["Field 1", "Field 2"]
                const rows = arrayData[field.key] || []

                return (
                  <div key={field.key} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <GLabel className="flex items-center gap-1.5">
                        {field.label}
                        {field.required && <GBadge variant="outline" className="text-[10px] h-4">Required</GBadge>}
                      </GLabel>
                      <GButton variant="outline" size="sm" onClick={() => addArrayRow(field.key, cols)}>
                        <Plus className="h-3 w-3 mr-1" /> Add
                      </GButton>
                    </div>
                    {rows.map((row, ri) => (
                      <div key={ri} className="flex gap-2 items-start">
                        <span className="text-xs text-muted-foreground pt-2.5 w-5 shrink-0">{ri + 1}.</span>
                        {row.map((cell, ci) => (
                          <GInput
                            key={ci}
                            value={cell}
                            onChange={(e) => updateArrayCell(field.key, ri, ci, e.target.value)}
                            placeholder={colLabels[ci]}
                            className="flex-1 text-sm"
                          />
                        ))}
                        <GButton variant="ghost" size="sm" onClick={() => removeArrayRow(field.key, ri)}>
                          <Trash2 className="h-3 w-3" />
                        </GButton>
                      </div>
                    ))}
                    {rows.length === 0 && (
                      <p className="text-xs text-muted-foreground">{field.hint || "Click Add to start."}</p>
                    )}
                  </div>
                )
              }

              return (
                <div key={field.key}>
                  <GLabel className="flex items-center gap-1.5 mb-1">
                    {field.label}
                    {field.required && <GBadge variant="outline" className="text-[10px] h-4">Required</GBadge>}
                  </GLabel>
                  {field.type === "textarea" ? (
                    <GTextarea
                      value={formData[field.key] || ""}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      rows={3}
                    />
                  ) : field.type === "select" ? (
                    <GSelect value={formData[field.key] || field.options?.[0]?.value || ""} onValueChange={(v) => updateField(field.key, v)}>
                      <GSelectTrigger><GSelectValue /></GSelectTrigger>
                      <GSelectContent>
                        {field.options?.map((o) => (
                          <GSelectItem key={o.value} value={o.value}>{o.label}</GSelectItem>
                        ))}
                      </GSelectContent>
                    </GSelect>
                  ) : (
                    <GInput
                      type={field.type === "date" ? "date" : field.type === "number" ? "number" : "text"}
                      value={formData[field.key] || ""}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      placeholder={field.placeholder}
                    />
                  )}
                  {field.hint && <p className="text-xs text-muted-foreground mt-1">{field.hint}</p>}
                </div>
              )
            })}
          </GCardContent>
        </GCard>

        {/* Right: JSON-LD Output */}
        <div className="space-y-4">
          <GCard>
            <GCardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <GCardTitle className="text-base flex items-center gap-2">
                  <FileCode className="h-5 w-5" /> Generated JSON-LD
                </GCardTitle>
                <div className="flex gap-2">
                  <GButton variant="outline" size="sm" onClick={() => handleCopy(scriptTag)}>
                    {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                    {copied ? "Copied!" : "Copy Script Tag"}
                  </GButton>
                </div>
              </div>
            </GCardHeader>
            <GCardContent>
              <GTabs value={outputTab} onValueChange={setOutputTab}>
                <GTabsList className="grid w-full grid-cols-2">
                  <GTabsTrigger value="script">Script Tag</GTabsTrigger>
                  <GTabsTrigger value="json">JSON Only</GTabsTrigger>
                </GTabsList>
                <GTabsContent value="script" className="mt-3">
                  <pre className="bg-muted rounded-lg p-4 text-xs font-mono overflow-x-auto max-h-[500px] overflow-y-auto whitespace-pre-wrap break-all">
                    {scriptTag}
                  </pre>
                </GTabsContent>
                <GTabsContent value="json" className="mt-3">
                  <pre className="bg-muted rounded-lg p-4 text-xs font-mono overflow-x-auto max-h-[500px] overflow-y-auto whitespace-pre-wrap break-all">
                    {jsonString}
                  </pre>
                </GTabsContent>
              </GTabs>

              <div className="flex gap-2 mt-4">
                <GButton variant="outline" size="sm" onClick={() => handleCopy(jsonString)}>
                  <Copy className="h-4 w-4 mr-1" /> Copy JSON
                </GButton>
                <a href={richResultsUrl} target="_blank" rel="noopener noreferrer">
                  <GButton variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4 mr-1" /> Test with Google
                  </GButton>
                </a>
              </div>
            </GCardContent>
          </GCard>

          {/* How to use */}
          <GCard>
            <GCardHeader className="pb-3">
              <GCardTitle className="text-sm">How to Add Schema to Your Site</GCardTitle>
            </GCardHeader>
            <GCardContent className="text-sm text-muted-foreground space-y-2">
              <p>1. Fill in the form fields for your chosen schema type.</p>
              <p>2. Click <strong>Copy Script Tag</strong> to copy the generated code.</p>
              <p>3. Paste the <code className="bg-muted px-1 rounded text-xs">&lt;script&gt;</code> tag into your page&apos;s <code className="bg-muted px-1 rounded text-xs">&lt;head&gt;</code> or before <code className="bg-muted px-1 rounded text-xs">&lt;/body&gt;</code>.</p>
              <p>4. Validate with <strong>Google Rich Results Test</strong> to confirm eligibility.</p>
            </GCardContent>
          </GCard>
        </div>
      </div>
    </div>
  )
}
