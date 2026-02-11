function stringToBytes(str: string): Uint8Array {
  return new TextEncoder().encode(str)
}

function bytesToString(bytes: Uint8Array): string {
  return new TextDecoder("utf-8", { fatal: false }).decode(bytes)
}

function bytesToBase64(bytes: Uint8Array): string {
  let binary = ""
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

function base64ToBytes(base64: string): Uint8Array {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes
}

export function encodeToBase64(str: string, urlSafe = false): string {
  const bytes = stringToBytes(str)
  let encoded = bytesToBase64(bytes)
  if (urlSafe) {
    encoded = encoded.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
  }
  return encoded
}

function normalizeBase64(base64: string, urlSafe: boolean): string {
  let normalized = base64.replace(/\s/g, "")
  if (urlSafe) {
    normalized = normalized.replace(/-/g, "+").replace(/_/g, "/")
    const pad = normalized.length % 4
    if (pad) normalized += "=".repeat(4 - pad)
  }
  return normalized
}

export function decodeFromBase64(base64: string, urlSafe = false): string {
  try {
    const bytes = decodeFromBase64ToBytes(base64, urlSafe)
    return bytesToString(bytes)
  } catch {
    throw new Error("Invalid Base64 string")
  }
}

export function decodeFromBase64ToBytes(base64: string, urlSafe = false): Uint8Array {
  const normalized = normalizeBase64(base64, urlSafe)
  return base64ToBytes(normalized)
}

export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(" ")
}

export function isValidBase64(str: string, urlSafe = false): boolean {
  const normalized = str.replace(/\s/g, "")
  if (!normalized) return false
  let toValidate = normalized
  if (urlSafe) {
    toValidate = normalized.replace(/-/g, "+").replace(/_/g, "/")
    const pad = toValidate.length % 4
    if (pad) toValidate += "=".repeat(4 - pad)
  }
  const regex = /^[A-Za-z0-9+/]*={0,2}$/
  if (!regex.test(toValidate)) return false
  try {
    atob(toValidate)
    return true
  } catch {
    return false
  }
}

export function encodeFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      const base64 = result.split(",")[1] ?? result
      resolve(base64)
    }
    reader.onerror = () => reject(new Error("Failed to read file"))
    reader.readAsDataURL(file)
  })
}

export function normalizeBase64ForDataUri(base64: string, urlSafe: boolean): string {
  let normalized = base64.replace(/\s/g, "")
  if (urlSafe) {
    normalized = normalized.replace(/-/g, "+").replace(/_/g, "/")
    const pad = normalized.length % 4
    if (pad) normalized += "=".repeat(4 - pad)
  }
  return normalized
}

const MAGIC_BYTES: Array<{
  check: (b: Uint8Array) => boolean
  ext: string
  mime: string
}> = [
  {
    check: (b) => b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47,
    ext: "png",
    mime: "image/png",
  },
  {
    check: (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff,
    ext: "jpg",
    mime: "image/jpeg",
  },
  {
    check: (b) => b[0] === 0x25 && b[1] === 0x50 && b[2] === 0x44 && b[3] === 0x46,
    ext: "pdf",
    mime: "application/pdf",
  },
  {
    check: (b) => b[0] === 0x47 && b[1] === 0x49 && b[2] === 0x46 && b[3] === 0x38,
    ext: "gif",
    mime: "image/gif",
  },
  {
    check: (b) =>
      b.length >= 12 &&
      b[0] === 0x52 &&
      b[1] === 0x49 &&
      b[2] === 0x46 &&
      b[3] === 0x46 &&
      b[8] === 0x57 &&
      b[9] === 0x45 &&
      b[10] === 0x42 &&
      b[11] === 0x50,
    ext: "webp",
    mime: "image/webp",
  },
]

export function getExtensionAndMime(bytes: Uint8Array): { ext: string; mime: string } {
  for (const { check, ext, mime } of MAGIC_BYTES) {
    if (check(bytes)) return { ext, mime }
  }
  return { ext: "bin", mime: "application/octet-stream" }
}
