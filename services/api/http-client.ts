import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { env } from "@/lib/env";
import type { ApiResponse, ApiError } from "@/types/http-client.types";

export type { ApiResponse, ApiError };

const createHttpClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: env.apiUrl || "/api",
    timeout: 30000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      if (process.env.NODE_ENV === "development") {
        console.log(`[HTTP] ${config.method?.toUpperCase()} ${config.url}`, config.data);
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
      const apiError: ApiError = {
        message: error.message || "An unexpected error occurred",
        status: error.response?.status,
        code: error.code,
        details: error.response?.data,
      };

      if (error.response?.status === 401) {
        apiError.message = "Unauthorized. Please login again.";
        if (typeof window !== "undefined") {
          localStorage.removeItem("authToken");
        }
      } else if (error.response?.status === 403) {
        apiError.message = "Forbidden. You don't have permission.";
      } else if (error.response?.status === 404) {
        apiError.message = "Resource not found.";
      } else if (error.response?.status === 500) {
        apiError.message = "Internal server error. Please try again later.";
      } else if (error.code === "ECONNABORTED") {
        apiError.message = "Request timeout. Please try again.";
      } else if (error.code === "ERR_NETWORK") {
        apiError.message = "Network error. Please check your connection.";
      }

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
    return httpClient.post<T>(url, formData, {
      ...config,
      headers: {
        "Content-Type": "multipart/form-data",
        ...config?.headers,
      },
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

