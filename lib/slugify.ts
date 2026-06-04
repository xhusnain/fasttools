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
    .replace(/ß/g, "ss")
    .replace(/æ/g, "ae")
    .replace(/œ/g, "oe")
    .replace(/ø/g, "o")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .replace(/[^a-z0-9-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}
