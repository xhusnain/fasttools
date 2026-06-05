import { NextRequest, NextResponse } from "next/server"
import { searchItems } from "@/lib/search-data"
import { toolSchemas } from "@/lib/webmcp-tool-schemas"
import type { WebMCPToolCatalogEntry, WebMCPToolCatalogResponse } from "@/types/webmcp.types"

const BASE_URL = "https://fasttools.store"

function slugify(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_|_$/g, "")
}

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl
    const categoryFilter = searchParams.get("category")

    // Filter out "Pages" category — those aren't tools
    let items = searchItems.filter((item) => item.category !== "Pages")

    if (categoryFilter) {
        items = items.filter(
            (item) => item.category.toLowerCase() === categoryFilter.toLowerCase()
        )
    }

    const tools: WebMCPToolCatalogEntry[] = items.map((item) => {
        const schema = toolSchemas[item.path]
        return {
            name: slugify(item.name),
            displayName: item.name,
            description: item.description,
            path: item.path,
            url: `${BASE_URL}${item.path}`,
            category: item.category,
            interactionMode: schema?.interactionMode ?? "auto",
            ...(schema?.inputSchema ? { inputSchema: schema.inputSchema } : {}),
        }
    })

    const response: WebMCPToolCatalogResponse = {
        provider: "FastTools",
        version: "1.0.0",
        totalTools: tools.length,
        instructions: [
            "To use any tool, follow this 4-step workflow:",
            "1. NAVIGATE — Open the tool URL in the browser.",
            "2. DESCRIBE — Call {tool_name}__describe to discover input fields and controls.",
            "3. FILL — Call {tool_name}__fill with key-value pairs to populate inputs.",
            "4. CLICK & READ — Call {tool_name}__click to trigger the action, then {tool_name}__results to read output.",
            "",
            "For 'realtime' tools (temperature, hash-text, etc.): skip the click step — results appear automatically after filling.",
            "For 'generator' tools (UUID, token, etc.): click generates new output each time.",
            "For 'file-upload' tools (PDF, image): file upload requires manual interaction by the user.",
        ].join("\n"),
        tools,
    }

    return NextResponse.json(response, {
        headers: {
            "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
            "Access-Control-Allow-Origin": "*",
        },
    })
}
