import { NextResponse } from "next/server"
import { generateSocialMediaCaptions } from "@/lib/gemini-api"
import { env } from "@/lib/env"
import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { description, platform } = await req.json()

    if (!description?.trim()) {
      return NextResponse.json(
        { error: "Description is required" },
        { status: 400 }
      )
    }

    if (!env.geminiApiKey) {
      return NextResponse.json(
        { error: "AI service is currently unavailable. Please try again later." },
        { status: 503 }
      )
    }

    const result = await generateSocialMediaCaptions(description, platform, 5)

    if (!result.success) {

      if (env.geminiApiKey) {
        try {
          const prompt = `Generate 5 engaging ${platform} captions for an image with this description: "${description}"

Make them creative, engaging, and suitable for ${platform}. Include relevant emojis where appropriate.
Return ONLY a JSON array of strings, like: ["caption 1", "caption 2", "caption 3", "caption 4", "caption 5"]`

          const { text } = await generateText({
            model: "openai/gpt-4o-mini",
            prompt,
          })

          const captions = JSON.parse(text)
          return NextResponse.json({ captions })
        } catch (openaiError) {
          console.error("OpenAI fallback failed:", openaiError)
        }
      }

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
