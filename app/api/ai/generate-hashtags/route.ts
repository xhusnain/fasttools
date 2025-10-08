import { generateText } from "ai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { caption, platform } = await req.json()

    const prompt = `Based on this ${platform} caption/content: "${caption}"

Generate 20-30 relevant hashtags that would help increase reach and engagement on ${platform}.
Include a mix of:
- Popular hashtags (high volume)
- Niche hashtags (targeted audience)
- Trending hashtags (if applicable)

Return ONLY a JSON array of hashtag strings (with # symbol), like: ["#hashtag1", "#hashtag2", ...]`

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt,
    })

    const hashtags = JSON.parse(text)

    return NextResponse.json({ hashtags })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to generate hashtags" }, { status: 500 })
  }
}
