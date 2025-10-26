import { get, set } from "idb-keyval";

const MODEL_CACHE_PREFIX = "bg-remover-model-";
const CACHE_VERSION = "v1";

export interface ModelCacheEntry {
  data: ArrayBuffer;
  timestamp: number;
  version: string;
  url: string;
}

export async function cacheModel(
  key: string,
  buffer: ArrayBuffer,
  url: string,
): Promise<void> {
  try {
    const entry: ModelCacheEntry = {
      data: buffer,
      timestamp: Date.now(),
      version: CACHE_VERSION,
      url,
    };
    await set(`${MODEL_CACHE_PREFIX}${key}`, entry);
  } catch (error) {
    console.warn("Failed to cache model:", error);
  }
}

export async function getCachedModel(key: string): Promise<ArrayBuffer | null> {
  try {
    const entry = (await get(`${MODEL_CACHE_PREFIX}${key}`)) as
      | ModelCacheEntry
      | undefined;

    if (!entry) {
      return null;
    }

    // Check if cache is valid (7 days)
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    if (Date.now() - entry.timestamp > maxAge) {
      // Cache expired, remove it
      await set(`${MODEL_CACHE_PREFIX}${key}`, undefined);
      return null;
    }

    // Check version compatibility
    if (entry.version !== CACHE_VERSION) {
      await set(`${MODEL_CACHE_PREFIX}${key}`, undefined);
      return null;
    }

    return entry.data;
  } catch (error) {
    console.warn("Failed to get cached model:", error);
    return null;
  }
}

export async function clearModelCache(): Promise<void> {
  try {
    // Get all keys and filter for our models
    const keys = (await get("idb-keyval-keys")) as string[] | undefined;
    if (keys) {
      const modelKeys = keys.filter((key) =>
        key.startsWith(MODEL_CACHE_PREFIX),
      );
      for (const key of modelKeys) {
        await set(key, undefined);
      }
    }
  } catch (error) {
    console.warn("Failed to clear model cache:", error);
  }
}

export async function getCacheInfo(): Promise<{
  size: number;
  entries: number;
}> {
  try {
    const keys = (await get("idb-keyval-keys")) as string[] | undefined;
    if (!keys) return { size: 0, entries: 0 };

    const modelKeys = keys.filter((key) => key.startsWith(MODEL_CACHE_PREFIX));
    let totalSize = 0;

    for (const key of modelKeys) {
      const entry = (await get(key)) as ModelCacheEntry | undefined;
      if (entry) {
        totalSize += entry.data.byteLength;
      }
    }

    return {
      size: totalSize,
      entries: modelKeys.length,
    };
  } catch (error) {
    console.warn("Failed to get cache info:", error);
    return { size: 0, entries: 0 };
  }
}

