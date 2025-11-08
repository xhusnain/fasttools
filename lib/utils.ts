import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

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