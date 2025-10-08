import { generateText } from "ai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { description, platform } = await req.json()

    const prompt = `Generate 5 engaging ${platform} captions for an image with this description: "${description}"

Make them creative, engaging, and suitable for ${platform}. Include relevant emojis where appropriate.
Return ONLY a JSON array of strings, like: ["caption 1", "caption 2", "caption 3", "caption 4", "caption 5"]`

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt,
    })

    const captions = JSON.parse(text)

    return NextResponse.json({ captions })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to generate captions" }, { status: 500 })
  }
}
