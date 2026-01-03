import { NextResponse } from 'next/server'
import axios from 'axios'
import { headers } from 'next/headers'

export async function GET() {
    const headersList = await headers()
    // Get IP from x-forwarded-for or fallback
    const forwardedFor = headersList.get('x-forwarded-for')
    let ip = forwardedFor ? forwardedFor.split(',')[0] : null

    // If testing locally, ip might be ::1 or 127.0.0.1, which ip-api might handle as localhost
    // We will just pass it if it exists.
    try {
        // Parallel fetch for speed
        // If IP is localhost/private, ip-api might fail or return local info, which is fine for dev.
        // For production, this ensures we check the USER'S IP, not the Vercel server's IP.
        const ispUrl = ip ? `http://ip-api.com/json/${ip}` : 'http://ip-api.com/json/'

        const [locationRes, ispRes] = await Promise.all([
            axios.get('https://api.vatcomply.com/geolocate'),
            axios.get(ispUrl)
        ])

        const locationData = locationRes.data
        const ispData = ispRes.data

        // Merge the data
        const mergedData = {
            ...locationData,
            // Add ISP fields from ip-api
            isp: ispData.isp,
            org: ispData.org,
            as: ispData.as,
            // Ensure IP matches what we show (vatcomply typically returns the IP it sees)
            ip: locationData.ip
        }

        return NextResponse.json(mergedData)
    } catch (error) {
        console.error('Failed to fetch location:', error)
        return NextResponse.json(
            { error: 'Failed to fetch location data' },
            { status: 500 }
        )
    }
}
