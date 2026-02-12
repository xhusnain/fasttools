/**
 * Outlook / Office 365 SafeLinks URL decoder.
 * Extracts the original destination URL from Microsoft SafeLinks rewritten URLs.
 * SafeLinks format: https://*.safelinks.protection.outlook.com/?url=ENCODED_URL&...
 */

const SAFELINKS_PATTERNS = [
  /safelinks\.protection\.outlook\.com/i,
  /safelinks\.office\.com/i,
]

export function decodeSafelink(input: string): { url: string; error?: string } {
  const trimmed = input.trim()
  if (!trimmed) {
    return { url: "", error: "Please enter a SafeLinks URL" }
  }

  let href = trimmed
  if (!/^https?:\/\//i.test(href)) {
    href = `https://${href}`
  }

  try {
    const parsed = new URL(href)

    const isSafelink = SAFELINKS_PATTERNS.some((p) => p.test(parsed.hostname))
    if (!isSafelink) {
      return { url: "", error: "Invalid SafeLinks URL provided" }
    }

    const urlParam = parsed.searchParams.get("url")
    if (!urlParam) {
      return { url: "", error: "Invalid SafeLinks URL provided" }
    }

    const decoded = decodeURIComponent(urlParam.replace(/\+/g, " "))
    if (!decoded.startsWith("http://") && !decoded.startsWith("https://")) {
      return { url: "", error: "Invalid SafeLinks URL provided" }
    }

    return { url: decoded }
  } catch {
    return { url: "", error: "Invalid SafeLinks URL provided" }
  }
}
