/**
 * TOTP (Time-based One-Time Password) - RFC 6238
 * Free otp code generator, totp generator, otp generation algorithm.
 */

const BASE32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"

function base32Decode(encoded: string): Uint8Array {
  const clean = encoded.replace(/\s/g, "").toUpperCase()
  const bits: number[] = []
  for (let i = 0; i < clean.length; i++) {
    const idx = BASE32_ALPHABET.indexOf(clean[i])
    if (idx === -1) continue
    for (let b = 4; b >= 0; b--) {
      bits.push((idx >> b) & 1)
    }
  }
  const bytes: number[] = []
  for (let i = 0; i < bits.length; i += 8) {
    if (i + 8 > bits.length) break
    let byte = 0
    for (let b = 0; b < 8; b++) {
      byte = (byte << 1) | bits[i + b]
    }
    bytes.push(byte)
  }
  return new Uint8Array(bytes)
}

function uint8ArrayToHex(arr: Uint8Array): string {
  return Array.from(arr)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

async function hmacSha1(key: Uint8Array, message: Uint8Array): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key.buffer as ArrayBuffer,
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  )
  return crypto.subtle.sign("HMAC", cryptoKey, message.buffer as ArrayBuffer)
}

function dynamicTruncate(hash: ArrayBuffer, digits: number): string {
  const bytes = new Uint8Array(hash)
  const offset = bytes[bytes.length - 1] & 0x0f
  const binary =
    ((bytes[offset] & 0x7f) << 24) |
    ((bytes[offset + 1] & 0xff) << 16) |
    ((bytes[offset + 2] & 0xff) << 8) |
    (bytes[offset + 3] & 0xff)
  const otp = binary % Math.pow(10, digits)
  return otp.toString().padStart(digits, "0")
}

export interface TotpOptions {
  secret: string
  digits?: number
  period?: number
  epoch?: number
}

/**
 * Generate TOTP code for a given time counter.
 */
export async function generateTotp(options: TotpOptions): Promise<string> {
  const { secret, digits = 6, period = 30, epoch } = options
  const time = epoch ?? Math.floor(Date.now() / 1000)
  const counter = Math.floor(time / period)

  const key = base32Decode(secret)
  const counterBytes = new ArrayBuffer(8)
  const view = new DataView(counterBytes)
  view.setUint32(4, counter, false)

  const hash = await hmacSha1(key, new Uint8Array(counterBytes))
  return dynamicTruncate(hash, digits)
}

/**
 * Get current counter (iteration) for TOTP.
 */
export function getTotpCounter(period = 30): number {
  return Math.floor(Date.now() / 1000 / period)
}

/**
 * Get seconds until next OTP.
 */
export function getSecondsUntilNext(period = 30): number {
  const elapsed = Math.floor(Date.now() / 1000) % period
  return period - elapsed
}

/**
 * Get current Unix epoch.
 */
export function getCurrentEpoch(): number {
  return Math.floor(Date.now() / 1000)
}

/**
 * Secret to hex (for display).
 */
export function secretToHex(secret: string): string {
  try {
    const bytes = base32Decode(secret)
    return uint8ArrayToHex(bytes)
  } catch {
    return ""
  }
}

/**
 * Generate random base32 secret (16 chars = 80 bits).
 */
export function generateSecret(length = 16): string {
  const chars = BASE32_ALPHABET
  let result = ""
  const random = new Uint8Array(length)
  crypto.getRandomValues(random)
  for (let i = 0; i < length; i++) {
    result += chars[random[i] % 32]
  }
  return result
}

/**
 * Key URI for authenticator apps (totp qr code generator format).
 */
export function getTotpKeyUri(
  secret: string,
  account: string = "Account",
  issuer: string = "FastTools",
  digits: number = 6,
  period: number = 30
): string {
  const params = new URLSearchParams({
    secret,
    digits: String(digits),
    period: String(period),
  })
  if (issuer) params.set("issuer", issuer)
  const label = issuer ? `${issuer}:${account}` : account
  return `otpauth://totp/${encodeURIComponent(label)}?${params.toString()}`
}
