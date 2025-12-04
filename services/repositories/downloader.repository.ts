import { HttpClient } from "../api/http-client";
import type { SocialMediaPlatform, DownloadRequest, DownloadResponse } from "@/types";

export const DownloaderRepository = {
  download: async (platform: SocialMediaPlatform, url: string): Promise<DownloadResponse> => {
    const requestBody: DownloadRequest = { platform, url };

    const response = await HttpClient.post<DownloadResponse>("/download", requestBody);

    return response.data;
  },
};

