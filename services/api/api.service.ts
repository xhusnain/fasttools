
import { CurrencyRepository } from "@/services";
import { YouTubeRepository } from "@/services";
import { AIRepository } from "@/services";
import { DownloaderRepository } from "../repositories/downloader.repository";
import type { SocialMediaPlatform } from "@/types";



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

  getInfo: async (url: string, type: 'single' | 'playlist' = 'single') => {
    return YouTubeRepository.getInfo(url, type);
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

export const DownloaderService = {
  download: async (platform: SocialMediaPlatform, url: string) => {
    return DownloaderRepository.download(platform, url);
  },
};

export const API = {
  Currency: CurrencyService,
  YouTube: YouTubeService,
  AI: AIService,
  Downloader: DownloaderService,
};

export default API;

