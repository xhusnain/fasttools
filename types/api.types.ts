export interface PaginationParams {
  page?: number;
  limit?: number;
  offset?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface CurrencyList {
  [currencyCode: string]: string;
}

export interface ExchangeRates {
  base: string;
  date: string;
  rates: {
    [currencyCode: string]: number;
  };
}

export interface ConversionResult {
  from: string;
  to: string;
  amount: number;
  result: number;
  rate: number;
  date: string;
}

export interface HistoricalRates {
  base: string;
  date: string;
  rates: {
    [currencyCode: string]: number;
  };
}

export interface TimeSeriesData {
  base: string;
  start_date: string;
  end_date: string;
  rates: {
    [date: string]: {
      [currencyCode: string]: number;
    };
  };
}

export interface Top10CurrenciesResponse {
  currencies: Array<{
    code: string;
    name: string;
    rate: number;
    change?: number;
    trend?: "up" | "down" | "stable";
  }>;
  base: string;
  date: string;
}

export interface YouTubeChannelCheckResponse {
  available: boolean;
  channelName: string;
  suggestions?: string[];
  message?: string;
}

export interface YouTubeTagsResponse {
  success: boolean;
  tags: string[];
  title?: string;
  channelName?: string;
  videoId?: string;
  error?: string;
}

export interface YouTubeVideoInfo {
  videoId: string;
  title: string;
  description: string;
  channelName: string;
  channelId: string;
  thumbnail: string;
  duration: string;
  viewCount: number;
  likeCount: number;
  publishedAt: string;
}

export interface InstagramProfileResponse {
  success: boolean;
  username: string;
  fullName?: string;
  biography?: string;
  profilePicUrl?: string;
  profilePicUrlHd?: string;
  isVerified?: boolean;
  isPrivate?: boolean;
  followerCount?: number;
  followingCount?: number;
  postCount?: number;
  error?: string;
}

export interface InstagramMediaItem {
  id: string;
  type: "image" | "video" | "carousel";
  url: string;
  thumbnail?: string;
  caption?: string;
  timestamp: string;
  likeCount?: number;
  commentCount?: number;
}

export interface AIGenerateRequest {
  prompt: string;
  model?: "gpt-4" | "gpt-3.5-turbo" | "gemini-pro";
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  frequencyPenalty?: number;
  presencePenalty?: number;
}

export interface AIGenerateResponse {
  success: boolean;
  content: string;
  model?: string;
  tokensUsed?: number;
  error?: string;
}

export interface AICaptionRequest {
  topic: string;
  tone?: "professional" | "casual" | "funny" | "inspirational" | "promotional";
  platform?: "instagram" | "twitter" | "facebook" | "linkedin";
  count?: number;
}

export interface AILyricsRequest {
  theme: string;
  genre?: string;
  mood?: string;
  length?: "short" | "medium" | "long";
}


export interface ValidationError {
  field: string;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  message?: string;
  validationErrors?: ValidationError[];
  status?: number;
  timestamp?: string;
}

