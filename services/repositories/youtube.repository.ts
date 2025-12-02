import { HttpClient } from "@/services";
import type { YouTubeChannelCheckResponse, YouTubeTagsResponse } from "@/types/api.types";

export const YouTubeRepository = {
  checkChannelAvailability: async (channelName: string): Promise<YouTubeChannelCheckResponse> => {
    const response = await HttpClient.post<YouTubeChannelCheckResponse>("/youtube/channel-check", {
      channelName,
    });
    return response.data;
  },

  extractVideoTags: async (videoUrl: string): Promise<YouTubeTagsResponse> => {
    const response = await HttpClient.post<YouTubeTagsResponse>("/youtube-tags", {
      url: videoUrl,
    });
    return response.data;
  },
};

