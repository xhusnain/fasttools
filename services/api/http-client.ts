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
        const finalUrl = config.url?.startsWith('http') 
          ? config.url 
          : `${config.baseURL || env.apiUrl || ''}${config.url || ''}`;
        const isMainApi = finalUrl.includes(env.apiUrl) || finalUrl.includes('api.fasttools');
        console.log(`[HTTP] ${config.method?.toUpperCase()} ${finalUrl}`, {
          hasToken: !!token,
          tokenLength: token?.length || 0,
          backend: isMainApi ? 'Main API (api.fasttools)' : 'Other',
          authHeader: config.headers?.Authorization ? 'Present' : 'Missing',
        });
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
        message = "Network error - Unable to connect to the server. Please check your connection.";
        // Try to get more details from the error
        if (error.message) {
          message += ` (${error.message})`;
        }
      } else if (error.code === "ERR_CERT_AUTHORITY_INVALID" || error.code === "ERR_SSL_PROTOCOL_ERROR") {
        message = "SSL certificate error - Please check the server configuration";
      } else if (error.code === "ECONNREFUSED") {
        message = "Connection refused - The server may be down or unreachable";
      }

      // Extract more detailed error message from response if available
      let detailedMessage = message;
      if (error.response?.data) {
        if (typeof error.response.data === 'string') {
          detailedMessage = error.response.data;
        } else if (error.response.data.error || error.response.data.message) {
          detailedMessage = error.response.data.error || error.response.data.message || message;
        } else if (error.response.data.detail) {
          detailedMessage = error.response.data.detail;
        }
      }

      const apiError: ApiError = {
        message: detailedMessage,
        status,
        code: error.code,
        details: error.response?.data,
      };

      // Always log errors in production for debugging
      console.error("[HTTP] Error:", {
        message: detailedMessage,
        status,
        code: error.code,
        url: error.config?.url,
        method: error.config?.method,
        details: error.response?.data,
      });

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

