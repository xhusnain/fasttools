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
  const model = "@cf/meta/llama-3.1-8b-instruct-fast"
  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/c64b9be052fb497f7b1a3121316d4d9f/ai/run/${model}`,
    {
      headers: { Authorization: "Bearer ***REMOVED***" },
      method: "POST",
      body: JSON.stringify(input),
    }
  )
    return await response.json()
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
