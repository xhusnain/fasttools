"use client"

import { useEffect, useState } from "react"
import { GCard, GCardContent } from "@/ui/gcard"
import { GBadge } from "@/ui/gbadge"
import { GLoader } from "@/ui/gloader"
import { Globe, MapPin, DollarSign, Navigation, Wifi, Copy, Check, Cloud, Thermometer, Mountain, Clock } from "lucide-react"
import { fetchWeatherApi } from "openmeteo"
import axios from "axios"

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

interface WeatherData {
    currentTemp: number
    elevation: number
    utcOffsetSeconds: number
    hourly: { time: Date; temperature: number }[]
}

// Fixed height to prevent CLS
const CONTAINER_MIN_HEIGHT = "min-h-[450px]"

export function LocationInfo() {
    const [data, setData] = useState<GeolocationData | null>(null)
    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [copied, setCopied] = useState(false)

    const handleCopyIp = async () => {
        if (data?.ip) {
            try {
                await navigator.clipboard.writeText(data.ip)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            } catch (err) {
                console.error("Failed to copy IP", err)
            }
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 1. Fetch Location
                const locationResponse = await axios.get<GeolocationData>("/api/location")
                const locationResult = locationResponse.data
                setData(locationResult)

                // 2. Fetch Weather using location coordinates (non-blocking)
                if (locationResult.latitude && locationResult.longitude) {
                    // Use requestIdleCallback for weather to not block main thread
                    const fetchWeather = async () => {
                        try {
                            const params = {
                                latitude: locationResult.latitude,
                                longitude: locationResult.longitude,
                                hourly: "temperature_2m",
                            }
                            const url = "https://api.open-meteo.com/v1/forecast"
                            const responses = await fetchWeatherApi(url, params)
                            const response = responses[0]

                            const utcOffsetSeconds = response.utcOffsetSeconds()
                            const hourly = response.hourly()!
                            const hourlyTemps = hourly.variables(0)!.valuesArray()!

                            // Find the index for the current time
                            const now = Date.now() / 1000 // current time in seconds
                            const startTime = Number(hourly.time())
                            const interval = hourly.interval()
                            const timeIndex = Math.round((now - startTime) / interval)

                            // Ensure index is within bounds
                            const safeIndex = Math.max(0, Math.min(timeIndex, hourlyTemps.length - 1))
                            const currentTemp = hourlyTemps[safeIndex]

                            setWeather({
                                currentTemp,
                                elevation: response.elevation(),
                                utcOffsetSeconds,
                                hourly: [] // Not displaying hourly graph
                            })
                        } catch (weatherErr) {
                            console.error("Failed to fetch weather", weatherErr)
                            // Don't fail the whole component if weather fails
                        }
                    }

                    // Defer weather fetch to idle time
                    if ('requestIdleCallback' in window) {
                        (window as any).requestIdleCallback(fetchWeather, { timeout: 3000 })
                    } else {
                        setTimeout(fetchWeather, 100)
                    }
                }

            } catch (err) {
                setError("Unable to retrieve location information")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        // Performance optimization: Use requestIdleCallback to defer entirely
        const startFetch = () => {
            if ('requestIdleCallback' in window) {
                (window as any).requestIdleCallback(fetchData, { timeout: 2000 })
            } else {
                setTimeout(fetchData, 100)
            }
        }

        // Execute after page is interactive
        if (document.readyState === "complete") {
            startFetch()
        } else {
            window.addEventListener("load", startFetch)
            return () => window.removeEventListener("load", startFetch)
        }
    }, [])

    if (loading) {
        return (
            <div className={`flex flex-col items-center justify-center p-12 ${CONTAINER_MIN_HEIGHT}`}>
                <GLoader size="lg" />
                <p className="text-muted-foreground animate-pulse mt-4">Locating...</p>
            </div>
        )
    }

    if (error || !data) {
        return (
            <GCard className={`w-full max-w-md mx-auto border-destructive/50 bg-destructive/5 ${CONTAINER_MIN_HEIGHT}`}>
                <GCardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                    <MapPin className="h-12 w-12 text-destructive mb-4" />
                    <h3 className="text-lg font-semibold text-destructive mb-2">Location Unavailable</h3>
                    <p className="text-muted-foreground">{error || "Could not detect location"}</p>
                </GCardContent>
            </GCard>
        )
    }

    return (
        <div className={`w-full max-w-xl mx-auto ${CONTAINER_MIN_HEIGHT}`}>
            <div className="sr-only">
                <h3>Location Summary</h3>
                <p>User is located in {data.capital}, {data.name}.</p>
                <p>IP Address: {data.ip}</p>
                <p>Coordinates: {data.latitude}, {data.longitude}</p>
                <p>Currency: {data.currency} ({data.country_code})</p>
            </div>
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
                                    <div className="flex items-center gap-3">
                                        <p className="text-2xl font-bold font-mono tracking-tight">{data.ip}</p>
                                        <button
                                            onClick={handleCopyIp}
                                            className="p-1.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            title="Copy IP Address"
                                        >
                                            {copied ? (
                                                <Check className="h-4 w-4 text-green-500 animate-in zoom-in spin-in-90 duration-300" />
                                            ) : (
                                                <Copy className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                                            )}
                                        </button>
                                    </div>
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

                        {/* Weather Section (Merged) */}
                        {weather && (
                            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border/50">
                                <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors">
                                    <Cloud className="h-5 w-5 text-blue-500 mb-2" />
                                    <p className="text-xs font-medium text-muted-foreground mb-1">Weather</p>
                                    <p className="text-lg font-bold">{weather.currentTemp.toFixed(1)}°C</p>
                                </div>
                                <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors">
                                    <Mountain className="h-5 w-5 text-emerald-500 mb-2" />
                                    <p className="text-xs font-medium text-muted-foreground mb-1">Elevation</p>
                                    <p className="text-lg font-bold">{weather.elevation}m</p>
                                </div>
                                <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors">
                                    <Clock className="h-5 w-5 text-orange-500 mb-2" />
                                    <p className="text-xs font-medium text-muted-foreground mb-1">Offset</p>
                                    <p className="text-lg font-bold">{weather.utcOffsetSeconds / 3600}h</p>
                                </div>
                                <div className="p-4 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors">
                                    <Thermometer className="h-5 w-5 text-red-500 mb-2" />
                                    <p className="text-xs font-medium text-muted-foreground mb-1">Status</p>
                                    <p className="text-sm font-semibold">Live</p>
                                </div>
                            </div>
                        )}

                    </div>
                </GCardContent>
            </GCard>
        </div>
    )
}
