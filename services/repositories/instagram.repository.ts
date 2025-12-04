/**
 * Instagram Repository
 * Handles all Instagram-related API calls
 */

import { HttpClient } from "../api/http-client";
import type { InstagramProfileResponse } from "@/types/api.types";

export const InstagramRepository = {
  /**
   * Get Instagram profile information
   */
  getProfile: async (username: string): Promise<InstagramProfileResponse> => {
    const response = await HttpClient.get<InstagramProfileResponse>(
      `/instagram/profile?username=${encodeURIComponent(username)}`
    );
    return response.data;
  },
};

