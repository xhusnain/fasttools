
import { env } from "./env"

export interface GeminiResponse {
  text: string
  success: boolean
  error?: string
}

export interface GeminiRequest {
  prompt: string
  maxTokens?: number
  temperature?: number
  model?: string
}

export class GeminiAPI {
  private apiKey: string
  private baseUrl = "https://generativelanguage.googleapis.com/v1beta"

  constructor(apiKey?: string) {
    this.apiKey = apiKey || env.geminiApiKey || ""
    if (!this.apiKey) {
      throw new Error("Gemini API key is required")
    }
  }

  async generateText(request: GeminiRequest): Promise<GeminiResponse> {
    try {
      const {
        prompt,
        maxTokens = 1000,
        temperature = 0.7,
        model = "gemini-2.0-flash-lite"
      } = request

      const response = await fetch(
        `${this.baseUrl}/models/${model}:generateContent?key=${this.apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature,
              maxOutputTokens: maxTokens,
              topP: 0.8,
              topK: 10,
            },
          }),
        }
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        const errorMessage = errorData.error?.message || ""

        if (response.status === 429 || errorMessage.includes("Resource exhausted") || errorMessage.includes("quota")) {
          return {
            text: "",
            success: false,
            error: "AI service is experiencing high demand. Please wait a moment and try again."
          }
        }

        if (errorMessage.includes("safety") || errorMessage.includes("SAFETY")) {
          return {
            text: "",
            success: false,
            error: "Content could not be generated due to safety guidelines. Please try a different request."
          }
        }

        if (response.status >= 500) {
          return {
            text: "",
            success: false,
            error: "AI service is temporarily unavailable. Please try again in a moment."
          }
        }

        return {
          text: "",
          success: false,
          error: "Something went wrong. Please try again later."
        }
      }

      const data = await response.json()

      if (!data.candidates || data.candidates.length === 0) {
        throw new Error("No response generated from Gemini")
      }

      const text = data.candidates[0].content.parts[0].text

      return {
        text,
        success: true,
      }
    } catch (error) {
      console.error("Gemini API Error:", error)

      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"

      if (errorMessage.includes("429") || errorMessage.includes("Resource exhausted") || errorMessage.includes("quota")) {
        return {
          text: "",
          success: false,
          error: "AI service is experiencing high demand. Please wait a moment and try again."
        }
      }

      return {
        text: "",
        success: false,
        error: "Something went wrong. Please try again later."
      }
    }
  }

  async generateCaptions(description: string, platform: string, count: number = 5): Promise<GeminiResponse> {
    const platformGuidelines = {
      instagram: "Create engaging, visual-focused captions with relevant hashtags. Use emojis and storytelling elements.",
      facebook: "Write conversational, community-focused captions that encourage discussion and sharing.",
      twitter: "Create concise, witty captions under 280 characters. Use trending hashtags and engaging hooks.",
      linkedin: "Write professional, value-driven captions that provide insights or industry knowledge.",
      tiktok: "Create trendy, fun captions that match viral content style. Use popular phrases and emojis.",
      pinterest: "Write descriptive, keyword-rich captions that help with discovery and inspire action.",
      youtube: "Create engaging video descriptions that encourage views, likes, and subscriptions."
    }

    const guidelines = platformGuidelines[platform as keyof typeof platformGuidelines] ||
                      "Create engaging social media captions that drive engagement and interaction."

    const prompt = `You are a professional social media caption generator. Generate ${count} creative, engaging captions for a ${platform} post.

Image Description: "${description}"

Platform Guidelines: ${guidelines}

Requirements:
- Each caption should be unique and creative
- Include relevant emojis where appropriate
- Make them engaging and shareable
- Consider the platform's character limits and audience
- Use trending language and hashtags when relevant

IMPORTANT: Return ONLY a valid JSON array of strings. Do not include any markdown formatting, code blocks, or additional text. Just the raw JSON array like this: ["caption 1", "caption 2", "caption 3", "caption 4", "caption 5"]`

    return this.generateText({
      prompt,
      maxTokens: 2000,
      temperature: 0.8,
    })
  }

  async generateContent(
    task: string,
    context: string,
    requirements: string = ""
  ): Promise<GeminiResponse> {
    const prompt = `You are an AI assistant helping with: ${task}

Context: ${context}

${requirements ? `Requirements: ${requirements}` : ""}

Please provide a helpful, accurate, and engaging response.`

    return this.generateText({
      prompt,
      maxTokens: 1500,
      temperature: 0.7,
    })
  }
}

export const geminiAPI = new GeminiAPI()

export async function generateSocialMediaCaptions(
  description: string,
  platform: string,
  count: number = 5
): Promise<GeminiResponse> {
  return geminiAPI.generateCaptions(description, platform, count)
}

export async function generateTextContent(
  task: string,
  context: string,
  requirements?: string
): Promise<GeminiResponse> {
  return geminiAPI.generateContent(task, context, requirements)
}
