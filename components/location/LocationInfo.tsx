"use client"

import { useEffect, useState } from "react"
import { GCard, GCardContent } from "@/ui/gcard"
import { GBadge } from "@/ui/gbadge"
import { GLoader } from "@/ui/gloader"
import { Globe, MapPin, DollarSign, Navigation, Wifi, Copy, Check, Cloud, Thermometer, Mountain, Clock, Laptop, Monitor, Cpu, Languages } from "lucide-react"
import { fetchWeatherApi } from "openmeteo"
import axios from "axios"
import { BrowserData, GeolocationData, WeatherData } from "@/types/info-types"

// Fixed height to prevent CLS
const CONTAINER_MIN_HEIGHT = "min-h-[450px]"

export function LocationInfo() {
    const [data, setData] = useState<GeolocationData | null>(null)
    const [weather, setWeather] = useState<WeatherData | null>(null)
    const [browserData, setBrowserData] = useState<BrowserData | null>(null)
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

        // Gather Browser Data
        const getBrowserData = async () => {
            const ua = navigator.userAgent;
            let browserName = "Unknown";
            if (ua.indexOf("Firefox") > -1) browserName = "Mozilla Firefox";
            else if (ua.indexOf("SamsungBrowser") > -1) browserName = "Samsung Internet";
            else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) browserName = "Opera";
            else if (ua.indexOf("Trident") > -1) browserName = "Microsoft Internet Explorer";
            else if (ua.indexOf("Edge") > -1) browserName = "Microsoft Edge";
            else if (ua.indexOf("Chrome") > -1) browserName = "Google Chrome";
            else if (ua.indexOf("Safari") > -1) browserName = "Apple Safari";

            let osName = "Unknown OS";
            if (ua.indexOf("Win") !== -1) osName = "Windows";
            if (ua.indexOf("Mac") !== -1) osName = "MacOS";
            if (ua.indexOf("X11") !== -1) osName = "UNIX";
            if (ua.indexOf("Linux") !== -1) osName = "Linux";
            if (ua.indexOf("Android") !== -1) osName = "Android";
            if (ua.indexOf("like Mac") !== -1) osName = "iOS";

            // GPU Info
            let gpuRenderer = 'Unknown GPU';
            try {
                const canvas = document.createElement('canvas');
                const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
                if (gl) {
                    const debugInfo = (gl as any).getExtension('WEBGL_debug_renderer_info');
                    if (debugInfo) {
                        gpuRenderer = (gl as any).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
                    }
                }
            } catch (e) {
                console.warn("GPU detect failed", e);
            }

            // Connection Type
            let connectionType = 'Unknown';
            if ((navigator as any).connection) {
                connectionType = (navigator as any).connection.effectiveType || (navigator as any).connection.type;
            }

            // Battery
            let batteryLevel: number | undefined = undefined;
            let isCharging: boolean | undefined = undefined;
            try {
                if ((navigator as any).getBattery) {
                    const battery = await (navigator as any).getBattery();
                    batteryLevel = battery.level * 100;
                    isCharging = battery.charging;
                }
            } catch (e) {
                console.warn("Battery detect failed", e);
            }

            // Timezone
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

            setBrowserData({
                browserName,
                osName,
                screenResolution: `${window.screen.width}x${window.screen.height} - ${window.screen.colorDepth}bit`,
                language: navigator.language,
                cookiesEnabled: navigator.cookieEnabled,
                deviceMemory: (navigator as any).deviceMemory,
                hardwareConcurrency: navigator.hardwareConcurrency,
                userAgent: ua,
                gpuRenderer,
                connectionType,
                batteryLevel,
                isCharging,
                timeZone
            })
        }

        getBrowserData();


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
        <div className={`w-full ${CONTAINER_MIN_HEIGHT}`}>
            {/* Header Section */}
            <div className="text-center mb-12">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Left Column: Location & Network */}
                <div className="space-y-6">
                    <GCard className="bg-card/40 backdrop-blur-md border-primary/10 overflow-hidden relative group h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <GCardContent className="p-0">
                            <div className="p-6 border-b border-border/50">
                                <h3 className="text-lg font-semibold flex items-center gap-2">
                                    <Wifi className="h-5 w-5 text-blue-500" />
                                    Network & Location
                                </h3>
                            </div>

                            <div className="p-6 space-y-6">
                                {/* IP Highlight */}
                                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-1">Your IP Address</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-2xl font-bold font-mono tracking-tight">{data.ip}</p>
                                            <button onClick={handleCopyIp} className="p-1 hover:bg-muted rounded text-muted-foreground hover:text-foreground transition-colors">
                                                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                            </button>
                                        </div>
                                    </div>
                                    <GBadge className="bg-blue-500/10 text-blue-500 border-0">
                                        {browserData?.connectionType ? browserData.connectionType.toUpperCase() : 'Active'}
                                    </GBadge>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">City</p>
                                        <p className="font-medium">{data.capital}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">Region</p>
                                        <p className="font-medium">{data.subregion}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">Coordinates</p>
                                        <p className="font-medium font-mono text-sm">{data.latitude.toFixed(4)}°, {data.longitude.toFixed(4)}°</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm text-muted-foreground">Currency</p>
                                        <p className="font-medium">{data.currency} ({data.country_code})</p>
                                    </div>
                                    <div className="col-span-2 space-y-1 pt-2 border-t border-border/50">
                                        <p className="text-sm text-muted-foreground">Internet Service Provider</p>
                                        <p className="font-medium">{data.isp || data.org || "Unknown ISP"}</p>
                                    </div>
                                </div>
                            </div>
                        </GCardContent>
                    </GCard>
                </div>

                {/* Right Column: Device & System */}
                <div className="space-y-6">
                    {browserData && (
                        <GCard className="bg-card/40 backdrop-blur-md border-primary/10 overflow-hidden relative group h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <GCardContent className="p-0">
                                <div className="p-6 border-b border-border/50">
                                    <h3 className="text-lg font-semibold flex items-center gap-2">
                                        <Laptop className="h-5 w-5 text-purple-500" />
                                        Device & System
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 divide-x divide-border/50">
                                    <div className="p-6 space-y-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                                <Monitor className="h-4 w-4" />
                                                <p className="text-sm">OS & Browser</p>
                                            </div>
                                            <p className="font-medium">{browserData.osName}</p>
                                            <p className="text-sm text-muted-foreground">{browserData.browserName}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                                <Cpu className="h-4 w-4" />
                                                <p className="text-sm">Hardware</p>
                                            </div>
                                            <p className="font-medium">{browserData.hardwareConcurrency || '?'} Cores</p>
                                            <p className="text-sm text-muted-foreground">~{browserData.deviceMemory || '?'} GB RAM</p>
                                        </div>
                                        <div className="space-y-1 pt-2">
                                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                                {/* Using Thermometer temporarily for Battery/Power if specific icon not avail or Laptop */}
                                                <Laptop className="h-4 w-4" />
                                                <p className="text-sm">Power</p>
                                            </div>
                                            <p className="font-medium">
                                                {browserData.batteryLevel !== undefined ? `${Math.round(browserData.batteryLevel)}%` : 'Unknown'}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {browserData.isCharging ? 'Charging' : 'On Battery'}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                                <Laptop className="h-4 w-4" />
                                                <p className="text-sm">Display</p>
                                            </div>
                                            <p className="font-medium">{browserData.screenResolution}</p>
                                            <p className="text-xs text-muted-foreground truncate" title={browserData.gpuRenderer}>{browserData.gpuRenderer}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                                                <Languages className="h-4 w-4" />
                                                <p className="text-sm">Locale</p>
                                            </div>
                                            <p className="font-medium">{browserData.language}</p>
                                            <p className="text-sm text-muted-foreground">{browserData.timeZone}</p>
                                        </div>
                                    </div>
                                </div>
                            </GCardContent>
                        </GCard>
                    )}
                </div>
            </div>

            {/* Bottom Section: Weather */}
            {weather && (
                <div className="mt-6">
                    <GCard className="bg-card/40 backdrop-blur-md border-primary/10 overflow-hidden">
                        <GCardContent className="p-0">
                            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
                                <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors">
                                    <Cloud className="h-6 w-6 text-blue-500 mb-2" />
                                    <p className="text-sm font-medium text-muted-foreground mb-1">Weather</p>
                                    <p className="text-2xl font-bold">{weather.currentTemp.toFixed(1)}°C</p>
                                </div>
                                <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors">
                                    <Mountain className="h-6 w-6 text-emerald-500 mb-2" />
                                    <p className="text-sm font-medium text-muted-foreground mb-1">Elevation</p>
                                    <p className="text-2xl font-bold">{weather.elevation}m</p>
                                </div>
                                <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors">
                                    <Clock className="h-6 w-6 text-orange-500 mb-2" />
                                    <p className="text-sm font-medium text-muted-foreground mb-1">Time Offset</p>
                                    <p className="text-2xl font-bold">{weather.utcOffsetSeconds / 3600}h</p>
                                </div>
                                <div className="p-6 flex flex-col items-center justify-center text-center hover:bg-muted/20 transition-colors">
                                    <Thermometer className="h-6 w-6 text-red-500 mb-2" />
                                    <p className="text-sm font-medium text-muted-foreground mb-1">Status</p>
                                    <GBadge variant="outline" className="border-green-500/50 text-green-500">Live Updates</GBadge>
                                </div>
                            </div>
                        </GCardContent>
                    </GCard>
                </div>
            )}
        </div>
    )
}
