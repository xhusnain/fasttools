import { NextRequest, NextResponse } from "next/server"
import { aiTextGenerator } from "@/lib/ai-text-generator"
import { PROMPTS } from "@/lib/prompts"
import { HashtagsRequest } from "@/lib/interfaces"

export async function POST(request: NextRequest) {
  try {
    const body: HashtagsRequest = await request.json()
    const { text, platform = "instagram" } = body

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Text is required" },
        { status: 400 }
      )
    }

    const platformContextMap = {
      instagram: "Instagram post",
      twitter: "Twitter post",
      facebook: "Facebook post",
      linkedin: "LinkedIn professional post",
      youtube: "YouTube video",
      tiktok: "TikTok video"
    }

    const platformContext = platformContextMap[platform as keyof typeof platformContextMap] || "social media post"
    const prompt = PROMPTS.hashtags(text, platform, platformContext)

    const response = await aiTextGenerator.generateText({
      prompt,
      temperature: 0.8,
      maxTokens: 200,
    })

    if (!response.success) {
      console.error("Cloudflare AI Error:", response.error)
      return NextResponse.json(
        { error: response.error || "Failed to generate hashtags. Please try again." },
        { status: 500 }
      )
    }

    const generatedText = response.text || ""
    const hashtags = extractHashtags(generatedText)

    if (hashtags.length === 0) {
      console.error("No hashtags extracted from AI response:", generatedText)
      return NextResponse.json(
        { error: "Failed to generate hashtags. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({
      hashtags: hashtags,
      source: "ai"
    })

  } catch (error) {
    console.error("Error generating hashtags:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}

function extractHashtags(text: string): string[] {
  const hashtagRegex = /#[\w]+/g
  const matches = text.match(hashtagRegex) || []
  return [...new Set(matches)]
}