
export interface GeolocationData {
    countryCode: string
    country: string
    city: string
    regionName: string
    lat: number
    lon: number
    zip: string
    timezone: string
    isp: string
    org: string
    as: string
    query: string

    // Legacy mapping
    iso2: string
    iso3: string
    country_code: string
    name: string
    capital: string
    currency: string
    region: string
    subregion: string
    latitude: number
    longitude: number
    emoji: string
    ip: string
}

export interface WeatherData {
    currentTemp: number
    elevation: number
    utcOffsetSeconds: number
    hourly: { time: Date; temperature: number }[]
}

export interface BrowserData {
    browserName: string
    osName: string
    screenResolution: string
    language: string
    cookiesEnabled: boolean
    deviceMemory?: number
    hardwareConcurrency?: number
    userAgent: string

    // New fields
    gpuRenderer?: string
    connectionType?: string
    batteryLevel?: number
    isCharging?: boolean
    timeZone?: string
}
