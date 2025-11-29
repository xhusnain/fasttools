import { NextResponse } from "next/server"
import { generateSocialMediaCaptions } from "@/lib/ai-text-generator"
import { CaptionsRequest } from "@/lib/interfaces"

export async function POST(req: Request) {
  try {
    const body: CaptionsRequest = await req.json()
    const { description, platform } = body

    if (!description?.trim()) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      )
    }

    const result = await generateSocialMediaCaptions(description, platform, 5)

    if (!result.success) {
      console.error("Cloudflare AI Error:", result.error)

      if (result.error?.includes("quota")) {
        return NextResponse.json(
          { error: "AI service is experiencing high demand. Please wait a moment and try again." },
          { status: 503 }
        )
      }

      if (result.error?.includes("safety")) {
        return NextResponse.json(
          { error: "Content could not be generated due to safety guidelines. Please try a different description." },
          { status: 400 }
        )
      }

      return NextResponse.json(
        { error: "Oops! Something went wrong while generating captions. Please try again in a moment." },
        { status: 500 }
      )
    }

    try {
      let jsonText = result.text.trim()

      if (jsonText.includes('```json')) {
        const match = jsonText.match(/```json\s*([\s\S]*?)\s*```/)
        if (match) {
          jsonText = match[1].trim()
        }
      } else if (jsonText.includes('```')) {
        const match = jsonText.match(/```\s*([\s\S]*?)\s*```/)
        if (match) {
          jsonText = match[1].trim()
        }
      }

      const jsonMatch = jsonText.match(/\[[\s\S]*?\]/)
      if (jsonMatch) {
        jsonText = jsonMatch[0]
      }

      const captions = JSON.parse(jsonText)

      if (!Array.isArray(captions) || captions.length === 0) {
        throw new Error("Invalid response format")
      }

      return NextResponse.json({ captions })
    } catch (parseError) {
      console.error("Failed to parse Gemini response:", parseError)
      console.error("Raw response:", result.text)
      return NextResponse.json(
        { error: "Failed to process AI response. Please try again." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Caption generation error:", error)

    if (error instanceof Error && error.message.includes("rate limit")) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      )
    }

    return NextResponse.json(
      { error: "Oops! Something went wrong. Please try again in a moment." },
      { status: 500 }
    )
  }
}
