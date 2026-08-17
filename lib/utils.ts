import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Get the current year dynamically
 * @returns The current year as a number
 */
export function getCurrentYear(): number {
  return new Date().getFullYear()
}

/**
 * Get the current year as a string
 * @returns The current year as a string
 */
export function getCurrentYearString(): string {
  return new Date().getFullYear().toString()
}

export async function runCloudflareAI(input: any) {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
  const apiToken = process.env.CLOUDFLARE_AI_TOKEN
  if (!accountId || !apiToken) {
    throw new Error("Missing CLOUDFLARE_ACCOUNT_ID or CLOUDFLARE_AI_TOKEN environment variables")
  }
  const model = "@cf/meta/llama-4-scout-17b-16e-instruct"
  // Abort before Netlify's ~30s gateway limit so callers get a clean, parseable
  // error instead of an opaque 502 from the platform.
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 25_000)
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${model}`,
      {
        headers: { Authorization: `Bearer ${apiToken}` },
        method: "POST",
        body: JSON.stringify(input),
        signal: controller.signal,
      }
    )
    if (!response.ok) {
      const errBody = await response.text().catch(() => "")
      return {
        success: false,
        errors: [{ message: `Workers AI HTTP ${response.status}: ${errBody.slice(0, 300)}` }],
      }
    }
    return await response.json()
  } catch (err: any) {
    return {
      success: false,
      errors: [{ message: err?.name === "AbortError" ? "Workers AI request timed out after 25s" : String(err?.message || err) }],
    }
  } finally {
    clearTimeout(timer)
  }
}

export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}
