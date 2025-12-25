"use client"

import { useEffect, useState } from "react"
import { GCard, GCardContent } from "@/ui/gcard"
import { GBadge } from "@/ui/gbadge"
import { GLoader } from "@/ui/gloader"
import { Globe, MapPin, DollarSign, Navigation, Wifi } from "lucide-react"

interface GeolocationData {
    iso2: string
    iso3: string
    country_code: string
    name: string
    numeric_code: number
    phone_code: string
    capital: string
    currency: string
    tld: string
    region: string
    subregion: string
    latitude: number
    longitude: number
    emoji: string
    ip: string
}

export function LocationInfo() {
    const [data, setData] = useState<GeolocationData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.vatcomply.com/geolocate")
                if (!response.ok) {
                    throw new Error("Failed to fetch location data")
                }
                const result = await response.json()
                setData(result)
            } catch (err) {
                setError("Unable to retrieve location information")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center p-12 min-h-[400px]">
                <GLoader size="lg" />
                <p className="text-muted-foreground animate-pulse mt-4">Locating...</p>
            </div>
        )
    }

    if (error || !data) {
        return (
            <GCard className="w-full max-w-md mx-auto border-destructive/50 bg-destructive/5">
                <GCardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <MapPin className="h-12 w-12 text-destructive mb-4" />
                    <h3 className="text-lg font-semibold text-destructive mb-2">Location Unavailable</h3>
                    <p className="text-muted-foreground">{error || "Could not detect location"}</p>
                </GCardContent>
            </GCard>
        )
    }

    return (
        <div className="w-full max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center lg:text-left mb-8">
                <GBadge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20">
                    <span className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Detected Location
                    </span>
                </GBadge>

                <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
                    Welcome from {data.name}
                    <span className="ml-3 inline-block transform hover:scale-110 transition-transform duration-200" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>
                        {data.emoji}
                    </span>
                </h2>

                <p className="text-xl text-muted-foreground">
                    We've customized our tools for <span className="text-foreground font-medium">{data.region}</span>
                </p>
            </div>

            <GCard className="bg-card/40 backdrop-blur-md border-primary/10 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <GCardContent className="p-0">
                    <div className="grid divide-y divide-border/50">

                        {/* IP Address Section (Prominent) */}
                        <div className="p-6 sm:p-8 flex items-center justify-between hover:bg-muted/20 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                                    <Wifi className="h-6 w-6 text-blue-500" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground mb-1">Your IP Address</p>
                                    <p className="text-2xl font-bold font-mono tracking-tight">{data.ip}</p>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <GBadge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-0">
                                    Active
                                </GBadge>
                            </div>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/50">

                            <div className="p-6 hover:bg-muted/20 transition-colors space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                                        <MapPin className="h-5 w-5 text-purple-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground mb-1">Capital City</p>
                                        <p className="text-lg font-semibold">{data.capital}</p>
                                        <p className="text-xs text-muted-foreground mt-1">Region: {data.subregion}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-2">
                                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                        <DollarSign className="h-5 w-5 text-emerald-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground mb-1">Currency</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-lg font-semibold">{data.currency}</p>
                                            <GBadge variant="outline" className="text-[10px] h-5 px-1.5">{data.country_code}</GBadge>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 hover:bg-muted/20 transition-colors space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0">
                                        <Navigation className="h-5 w-5 text-pink-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground mb-1">Coordinates</p>
                                        <p className="text-lg font-semibold font-mono text-sm">{data.latitude.toFixed(4)}°, {data.longitude.toFixed(4)}°</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-2">
                                    <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                                        <Globe className="h-5 w-5 text-orange-500" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-muted-foreground mb-1">Country Details</p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">ISO: {data.iso3}</span>
                                            <span className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">+{data.phone_code}</span>
                                            <span className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">{data.tld}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </GCardContent>
            </GCard>
        </div>
    )
}
