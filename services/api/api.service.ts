import { ImageRepository } from "../repositories/image.repository";
import { CurrencyRepository } from "../repositories/currency.repository";
import { YouTubeRepository } from "../repositories/youtube.repository";
import { InstagramRepository } from "../repositories/instagram.repository";
import { AIRepository } from "../repositories/ai.repository";

export const ImageService = {
  removeBackground: async (options: {
    image: Blob;
    strength?: "strong" | "medium" | "weak";
    refine?: "depth" | "edge" | "none";
  }): Promise<Blob> => {
    return ImageRepository.removeBackground(options);
  },

  blurBackground: async (options: {
    image: Blob;
    intensity: number;
    strength?: "strong" | "medium" | "weak";
    refine?: "depth" | "edge" | "none";
  }): Promise<Blob> => {
    return ImageRepository.blurBackground(options);
  },
};

export const CurrencyService = {
  getCurrencies: async () => {
    return CurrencyRepository.getCurrencies();
  },

  getLatestRates: async (base?: string) => {
    return CurrencyRepository.getLatestRates(base);
  },

  convertCurrency: async (from: string, to: string, amount: number) => {
    return CurrencyRepository.convertCurrency(from, to, amount);
  },

  getHistoricalRates: async (date: string, base: string, symbols?: string) => {
    return CurrencyRepository.getHistoricalRates(date, base, symbols);
  },

  getTimeSeries: async (startDate: string, endDate: string, base: string, symbols?: string) => {
    return CurrencyRepository.getTimeSeries(startDate, endDate, base, symbols);
  },

  getTop10Currencies: async () => {
    return CurrencyRepository.getTop10Currencies();
  },
};

export const YouTubeService = {
  checkChannelAvailability: async (channelName: string) => {
    return YouTubeRepository.checkChannelAvailability(channelName);
  },

  extractVideoTags: async (videoUrl: string) => {
    return YouTubeRepository.extractVideoTags(videoUrl);
  },
};

export const InstagramService = {
  getProfile: async (username: string) => {
    return InstagramRepository.getProfile(username);
  },
};

export const AIService = {
  generateContent: async (prompt: string, options?: {
    model?: string;
    maxTokens?: number;
    temperature?: number;
  }) => {
    return AIRepository.generateContent(prompt, options);
  },

  generateCaptions: async (topic: string, tone?: string) => {
    return AIRepository.generateCaptions(topic, tone);
  },

  generateLyrics: async (theme: string, genre?: string) => {
    return AIRepository.generateLyrics(theme, genre);
  },
};

export const API = {
  Image: ImageService,
  Currency: CurrencyService,
  YouTube: YouTubeService,
  Instagram: InstagramService,
  AI: AIService,
};

export default API;

