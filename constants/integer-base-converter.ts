import type { BasePreset } from "@/types/converter-types/integer-base-converter.types"

export const BASE64_CHARSET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/"
export const MAX_BASE = 64
export const MIN_BASE = 2

export const BASE_PRESETS: readonly BasePreset[] = [
  { value: 2, label: "Binary", short: "bin" },
  { value: 8, label: "Octal", short: "oct" },
  { value: 10, label: "Decimal", short: "dec" },
  { value: 16, label: "Hexadecimal", short: "hex" },
  { value: 36, label: "Base 36", short: "b36" },
  { value: 64, label: "Base 64", short: "b64" },
] as const
