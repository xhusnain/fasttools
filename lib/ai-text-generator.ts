import { runCloudflareAI } from "./utils"
import { PROMPTS } from "./prompts"
import { AIRequest, AIResponse } from "./interfaces"
import {env} from "@/config";

export class AITextGenerator {
    private apiKey: string

    constructor(apiKey?: string) {
        this.apiKey = apiKey || env.geminiApiKey || ""
    }

    async generateText(request: AIRequest): Promise<AIResponse> {
        try {
            const {
                prompt,
                maxTokens = 1000,
                temperature = 0.7
            } = request

            const response = await runCloudflareAI({
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                max_tokens: maxTokens,
                temperature: temperature,
            })

            if (!response.success) {
                console.error("Cloudflare AI Error:", response.errors)
                return {
                    text: "",
                    success: false,
                    error: "AI service is temporarily unavailable. Please try again later."
                }
            }

            const text = response.result?.response || ""

            return {
                text,
                success: true,
            }
        } catch (error) {
            console.error("Cloudflare AI API Error:", error)

            return {
                text: "",
                success: false,
                error: "Something went wrong. Please try again later."
            }
        }
    }

    async generateCaptions(description: string, platform: string, count: number = 5): Promise<AIResponse> {
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

        const prompt = PROMPTS.socialMediaCaptions(description, platform, count, guidelines)

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
    ): Promise<AIResponse> {
        const prompt = PROMPTS.generalContent(task, context, requirements)

        return this.generateText({
            prompt,
            maxTokens: 1500,
            temperature: 0.7,
        })
    }
}

export const aiTextGenerator = new AITextGenerator()

export async function generateSocialMediaCaptions(
    description: string,
    platform: string,
    count: number = 5
): Promise<AIResponse> {
    return aiTextGenerator.generateCaptions(description, platform, count)
}

export async function generateTextContent(
    task: string,
    context: string,
    requirements?: string
): Promise<AIResponse> {
    return aiTextGenerator.generateContent(task, context, requirements)
}
