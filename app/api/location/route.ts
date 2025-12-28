import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
    try {
        const response = await axios.get('https://api.vatcomply.com/geolocate')
        return NextResponse.json(response.data)
    } catch (error) {
        console.error('Failed to fetch location:', error)
        return NextResponse.json(
            { error: 'Failed to fetch location data' },
            { status: 500 }
        )
    }
}
