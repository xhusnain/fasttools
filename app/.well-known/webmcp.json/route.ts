import { NextResponse } from "next/server"

/**
 * .well-known/webmcp.json — Discovery endpoint for AI agents.
 * Points agents to the full tool catalog API.
 */
export async function GET() {
    return NextResponse.json(
        {
            name: "FastTools",
            description:
                "Free online tools: calculators, converters, crypto, PDF, developer tools, and more.",
            provider: {
                name: "FastTools",
                url: "https://fasttools.store",
            },
            tools_endpoint: "https://fasttools.store/api/webmcp/tools",
            version: "1.0.0",
        },
        {
            headers: {
                "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
                "Access-Control-Allow-Origin": "*",
            },
        }
    )
}
