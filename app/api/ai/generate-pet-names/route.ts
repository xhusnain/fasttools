import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { petType, personality } = await req.json()

    const prompt = `Generate 8 creative and unique names for a ${petType}${personality ? ` with a ${personality} personality` : ""}.

Return ONLY a JSON array of objects with this format:
[
  {"name": "Name", "meaning": "Brief explanation or meaning"},
  ...
]

Make the names creative, memorable, and suitable for the pet type.`

    const { text } = await generateText({
      model: "openai/gpt-4o-mini",
      prompt,
    })

    const names = JSON.parse(text)

    return Response.json({ names })
  } catch (error) {
    console.error("Error:", error)
    return Response.json({ error: "Failed to generate names" }, { status: 500 })
  }
}
