import { NextRequest, NextResponse } from "next/server"
import {
    generateCaptionsService,
    generateHashtagsService,
    generateLyricsService,
    generateMemeService,
    generatePetNamesService,
    generateChannelNamesService,
} from "@/lib/ai-services"

export const runtime = "nodejs"
export const maxDuration = 60

/**
 * Unified Cloudflare AI API endpoint
 * 
 * This endpoint consolidates all AI generation tasks into a single route.
 * Use the 'action' parameter to specify which AI task to perform.
 * 
 * @example
 * POST /api/cloudflare
 * {
 *   "action": "generate-captions",
 *   "data": { "description": "A beautiful sunset", "platform": "instagram" }
 * }
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { action, data } = body

        if (!action) {
            return NextResponse.json(
                { error: "Action parameter is required" },
                { status: 400 }
            )
        }

        if (!data) {
            return NextResponse.json(
                { error: "Data parameter is required" },
                { status: 400 }
            )
        }

        // Route to appropriate service based on action
        let result

        switch (action) {
            case "generate-captions":
                result = await generateCaptionsService(data)
                break

            case "generate-hashtags":
                result = await generateHashtagsService(data)
                break

            case "generate-lyrics":
                result = await generateLyricsService(data)
                break

            case "generate-meme":
                result = await generateMemeService(data)
                break

            case "generate-pet-names":
                result = await generatePetNamesService(data)
                break

            case "generate-channel-names":
                result = await generateChannelNamesService(data)
                break

            case "generate-prompt":
                result = await import("@/lib/ai-services").then(mod => mod.generatePromptService(data))
                break

            case "generate-agent-skill":
                result = await import("@/lib/ai-services").then(mod => mod.generateAgentSkillService(data))
                break

            case "paraphrase":
                result = await import("@/lib/ai-services").then(mod => mod.generateParaphraseService(data))
                break

            case "summarize":
                result = await import("@/lib/ai-services").then(mod => mod.generateSummaryService(data))
                break

            default:
                return NextResponse.json(
                    { error: `Unknown action: ${action}` },
                    { status: 400 }
                )
        }

        // Return the result with appropriate status code
        if (result.success) {
            return NextResponse.json({ success: true, ...result.data }, { status: result.statusCode })
        } else {
            return NextResponse.json(
                { error: result.error },
                { status: result.statusCode }
            )
        }

    } catch (error: any) {
        console.error("Cloudflare API Error:", error)

        if (error instanceof SyntaxError) {
            return NextResponse.json(
                { error: "Invalid JSON in request body" },
                { status: 400 }
            )
        }

        if (error.message?.includes("rate limit")) {
            return NextResponse.json(
                { error: "Too many requests. Please wait a moment before trying again." },
                { status: 429 }
            )
        }

        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        )
    }
}
