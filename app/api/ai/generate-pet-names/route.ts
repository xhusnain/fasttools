import { NextResponse } from "next/server"
import { geminiAPI } from "@/lib/gemini-api"

export const runtime = "nodejs"
export const maxDuration = 60

interface PetNameRequest {
  petType: string
  gender: string
  color?: string
  age: string
  personality?: string
  breed?: string
  size: string
  additionalInfo?: string
}

export async function POST(request: Request) {
  try {
    const body: PetNameRequest = await request.json()
    const { petType, gender, color, age, personality, breed, size, additionalInfo } = body

    if (!petType) {
      return NextResponse.json(
        { success: false, error: "Pet type is required" },
        { status: 400 }
      )
    }

    const petContext = []
    petContext.push(`Pet Type: ${petType}`)
    if (gender && gender !== "any") petContext.push(`Gender: ${gender}`)
    if (color) petContext.push(`Color/Appearance: ${color}`)
    if (age && age !== "any") petContext.push(`Age: ${age}`)
    if (size && size !== "any") petContext.push(`Size: ${size}`)
    if (breed) petContext.push(`Breed: ${breed}`)
    if (personality) petContext.push(`Personality: ${personality}`)
    if (additionalInfo) petContext.push(`Additional Preferences: ${additionalInfo}`)

    const contextString = petContext.join("\n")

    const prompt = `You are an expert pet naming consultant with deep knowledge of names from various cultures, languages, and traditions. Generate 100 unique and perfect pet names based on the following pet characteristics:

${contextString}

IMPORTANT INSTRUCTIONS:
1. Generate EXACTLY 100 names total, distributed across 8 categories
2. Each name MUST include: name, meaning, and origin
3. Make names appropriate for the pet type and characteristics
4. Consider the pet's gender, color, personality, and other traits
5. Provide diverse names from various cultures and languages
6. Keep names pronounceable and memorable
7. Include both popular and unique options
8. Make meanings accurate and relevant

CATEGORY DISTRIBUTION (Generate approximately these amounts):
- Traditional Names: 15 names (classic, timeless names)
- Modern Names: 15 names (contemporary, trendy names)
- Unique Names: 15 names (rare, creative, one-of-a-kind)
- Nature Names: 15 names (inspired by nature, elements, plants, animals)
- Cultural Names: 15 names (from various cultures: Japanese, Greek, Latin, Celtic, etc.)
- Celebrity Names: 10 names (inspired by famous people, characters, pop culture)
- Food Names: 10 names (cute food-inspired names)
- Mythological Names: 15 names (from mythology, legends, folklore)

RESPONSE FORMAT (CRITICAL - Follow exactly):
Return ONLY a valid JSON object with this exact structure:
{
  "traditional": [
    {"name": "Max", "meaning": "Greatest", "origin": "Latin"},
    ...
  ],
  "modern": [
    {"name": "Luna", "meaning": "Moon", "origin": "Latin"},
    ...
  ],
  "unique": [...],
  "nature": [...],
  "cultural": [...],
  "celebrity": [...],
  "food": [...],
  "mythological": [...]
}

SPECIFIC GUIDELINES:
- For ${gender !== "any" ? gender : "unisex"} pets, prioritize gender-appropriate names
- For ${petType}s, consider breed-specific naming traditions
${color ? `- Incorporate the pet's ${color} coloring when relevant` : ""}
${personality ? `- Reflect the personality traits: ${personality}` : ""}
${breed ? `- Consider ${breed} breed characteristics` : ""}
${age !== "any" ? `- Consider that this is a ${age} pet` : ""}

QUALITY STANDARDS:
- Each meaning must be accurate and insightful
- Origins should be specific (not just "Various" or "Unknown")
- Names should be easy to pronounce in English
- Avoid names that sound like common commands (sit, stay, no)
- Include a mix of short (1-2 syllables) and longer names
- Ensure cultural sensitivity and authenticity

Generate the 100 names now as a valid JSON object:`

    const result = await geminiAPI.generateText({
      prompt,
      temperature: 0.9,
      maxTokens: 4000,
    })

    if (!result.success || !result.text) {
      return NextResponse.json({
        success: false,
        error: result.error || "Something went wrong. Please try again later.",
      }, { status: 500 })
    }

    const response = result.text

    let parsedNames
    try {

      const jsonMatch = response.match(/\{[\s\S]*\}/)
      if (!jsonMatch) {
        throw new Error("No JSON found in response")
      }

      parsedNames = JSON.parse(jsonMatch[0])

      const requiredCategories = ["traditional", "modern", "unique", "nature", "cultural", "celebrity", "food", "mythological"]
      for (const category of requiredCategories) {
        if (!parsedNames[category] || !Array.isArray(parsedNames[category])) {
          parsedNames[category] = []
        }
      }

      for (const category of requiredCategories) {
        parsedNames[category] = parsedNames[category].filter((name: any) =>
          name && name.name && name.meaning && name.origin
        )
      }

    } catch (parseError) {
      console.error("Error parsing Gemini response:", parseError)

      return NextResponse.json({
        success: false,
        error: "Something went wrong. Please try again later.",
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      names: parsedNames,
      metadata: {
        petType,
        gender,
        color,
        age,
        size,
        breed,
        totalNames: Object.values(parsedNames).reduce((sum: number, arr: any) => sum + arr.length, 0)
      },
    })

  } catch (error: any) {
    console.error("Error in pet names generation:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later."
      },
      { status: 500 }
    )
  }
}
