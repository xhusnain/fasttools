import { NextResponse } from "next/server"
import { aiTextGenerator } from "@/lib/ai-text-generator"
import { PROMPTS } from "@/lib/prompts"
import { PetNameRequest } from "@/lib/interfaces"

export const runtime = "nodejs"
export const maxDuration = 60

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
    const prompt = PROMPTS.petNames(contextString, gender, petType, color, personality, breed, age)

    const result = await aiTextGenerator.generateText({
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
      console.log("Raw response:", response)

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
