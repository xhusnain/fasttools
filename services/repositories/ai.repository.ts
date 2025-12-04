import { HttpClient } from "@/services";
import {AIGenerateResponse} from "@/types";

export const AIRepository = {
  generateContent: async (
    prompt: string,
    options?: {
      model?: string;
      maxTokens?: number;
      temperature?: number;
    }
  ): Promise<AIGenerateResponse> => {
    const response = await HttpClient.post<AIGenerateResponse>("/ai", {
      prompt,
      ...options,
    });
    return response.data;
  },
  generateCaptions: async (topic: string, tone?: string): Promise<AIGenerateResponse> => {
    const prompt = `Generate creative social media captions for: ${topic}${
      tone ? ` with a ${tone} tone` : ""
    }`;
    return AIRepository.generateContent(prompt);
  },

  generateLyrics: async (theme: string, genre?: string): Promise<AIGenerateResponse> => {
    const prompt = `Write song lyrics about: ${theme}${genre ? ` in ${genre} genre` : ""}`;
    return AIRepository.generateContent(prompt);
  },
};

