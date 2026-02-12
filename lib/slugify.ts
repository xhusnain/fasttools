/**
 * Slugify a string for URLs, filenames, and IDs.
 * Make a string url, filename and id safe.
 */

export function slugify(str: string): string {
  if (typeof str !== "string") return ""
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}
