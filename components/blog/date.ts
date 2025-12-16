/**
 * Get the current year
 * @returns The current year as a number (e.g., 2024, 2025)
 */
export function getCurrentYear(): number {
    return new Date().getFullYear()
}

/**
 * Get the current year as a string
 * @returns The current year as a string (e.g., "2024", "2025")
 */
export function getCurrentYearString(): string {
    return new Date().getFullYear().toString()
}
