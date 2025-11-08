import { generateText } from "ai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { topic, style } = await req.json()

    const prompt = `Generate a funny meme text for the topic: "${topic}"${style ? ` in a ${style} style` : ""}.

Return ONLY a JSON object with this exact format:
{
  "top": "top text for the meme",
  "bottom": "bottom text for the meme"
}

Make it funny, relatable, and suitable for a classic meme format.`

    const config: any = {
      model: "openai/gpt-4o-mini",
      prompt,
    }

    if (process.env.OPENAI_API_KEY) {
      config.apiKey = process.env.OPENAI_API_KEY
    }

    const { text } = await generateText(config)

    const memeText = JSON.parse(text)

    return NextResponse.json({ memeText })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "Failed to generate meme" }, { status: 500 })
  }
}
