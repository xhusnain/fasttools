import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { generateToken } from "@/lib/m2m-auth";
import { env } from "@/config/env";
import type { ApiResponse, ApiError } from "@/types/http-client.types";

export type { ApiResponse, ApiError };

const createHttpClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: env.apiUrl || "/api",
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    async (config) => {
      const token = await generateToken();
      if (config.headers) {
        (config.headers as any).Authorization = `Bearer ${token}`;
      }

      // Let browser set Content-Type for FormData with boundary
      if (config.data instanceof FormData && config.headers) {
        delete (config.headers as any)['Content-Type'];
      }

      if (process.env.NODE_ENV === "development") {
        console.log(`[HTTP] ${config.method?.toUpperCase()} ${config.url}`);
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      if (process.env.NODE_ENV === "development") {
        console.log(`[HTTP] Response:`, response.data);
      }
      return response;
    },
    (error: AxiosError) => {
      let message = error.message || "An unexpected error occurred";
      const status = error.response?.status;

      if (status === 401) {
        message = "Unauthorized";
        if (typeof window !== "undefined") {
          localStorage.removeItem("authToken");
        }
      } else if (status === 403) {
        message = "Forbidden";
      } else if (status === 404) {
        message = "Not found";
      } else if (status === 500) {
        message = "Server error";
      } else if (error.code === "ECONNABORTED") {
        message = "Request timeout";
      } else if (error.code === "ERR_NETWORK") {
        message = "Network error";
      }

      const apiError: ApiError = {
        message,
        status,
        code: error.code,
        details: error.response?.data,
      };

      if (process.env.NODE_ENV === "development") {
        console.error("[HTTP] Error:", apiError);
      }

      return Promise.reject(apiError);
    }
  );

  return instance;
};

const httpClient = createHttpClient();

export const HttpClient = {
  get: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return httpClient.get<T>(url, config);
  },

  post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return httpClient.post<T>(url, data, config);
  },

  put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return httpClient.put<T>(url, data, config);
  },

  patch: <T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return httpClient.patch<T>(url, data, config);
  },

  delete: <T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return httpClient.delete<T>(url, config);
  },

  upload: <T = any>(url: string, formData: FormData, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    // Don't set Content-Type for FormData - browser will set it with boundary
    const headers = { ...config?.headers };
    // Remove Content-Type if it exists - let browser set it automatically
    delete (headers as any)['Content-Type'];
    
    return httpClient.post<T>(url, formData, {
      ...config,
      headers,
    });
  },

  download: (url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Blob>> => {
    return httpClient.get<Blob>(url, {
      ...config,
      responseType: "blob",
    });
  },
};

export default httpClient;

