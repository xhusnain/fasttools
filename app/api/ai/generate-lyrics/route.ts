import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { theme, genre, mood } = await req.json()

    const prompt = `Write creative song lyrics about: "${theme}"
${genre ? `Genre: ${genre}` : ""}
${mood ? `Mood: ${mood}` : ""}

Create a complete song with verses, chorus, and bridge. Make it emotional and engaging.`

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt,
    })

    return Response.json({ lyrics: text })
  } catch (error) {
    console.error("Error:", error)
    return Response.json({ error: "Failed to generate lyrics" }, { status: 500 })
  }
}
