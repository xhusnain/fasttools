import type { ConvertOptions, ParseResult } from "@/types/converter-types/integer-base-converter.types"
import { BASE64_CHARSET, MAX_BASE, MIN_BASE } from "@/constants/integer-base-converter"

export { BASE_PRESETS } from "@/constants/integer-base-converter"
export type { ConvertOptions, ParseResult } from "@/types/converter-types/integer-base-converter.types"

export function parseInputWithPrefix(input: string): ParseResult {
  const trimmed = input.trim()
  if (!trimmed) return { value: "", base: 10, isNegative: false }

  let str = trimmed
  let isNegative = false

  if (str.startsWith("-")) {
    isNegative = true
    str = str.slice(1).trim()
  }

  str = str.replace(/[_,\s]/g, "")

  let base = 10
  let prefix = ""

  const lower = str.toLowerCase()
  if (lower.startsWith("0x") && str.length > 2) {
    base = 16
    str = str.slice(2)
    prefix = "0x"
  } else if (lower.startsWith("0b") && str.length > 2) {
    base = 2
    str = str.slice(2)
    prefix = "0b"
  } else if (lower.startsWith("0o") && str.length > 2) {
    base = 8
    str = str.slice(2)
    prefix = "0o"
  }

  return { value: str, base, isNegative, prefix: prefix || undefined }
}

export function formatOutput(
  result: string,
  base: number,
  options: { hexUppercase?: boolean; addPrefix?: boolean; digitGrouping?: boolean } = {}
): string {
  let isNegative = result.startsWith("-")
  let formatted = isNegative ? result.slice(1) : result

  if (base === 16 && options.hexUppercase) {
    formatted = formatted.toUpperCase()
  }

  if (options.digitGrouping && formatted.length > 4) {
    if (base === 2) {
      formatted = formatted.replace(/\B(?=(\d{4})+(?!\d))/g, " ")
    } else {
      formatted = formatted.replace(/\B(?=(\d{3})+(?!\d))/g, "_")
    }
  }

  if (options.addPrefix) {
    if (base === 16) formatted = "0x" + formatted
    else if (base === 2) formatted = "0b" + formatted
    else if (base === 8) formatted = "0o" + formatted
  }

  return isNegative ? "-" + formatted : formatted
}

export function convertBase({
  value,
  fromBase,
  toBase,
  hexUppercase = false,
  addPrefix = false,
  digitGrouping = false,
}: ConvertOptions): string {
  if (!value || value.trim() === "") return ""

  const trimmed = value.trim().replace(/[_,\s]/g, "")
  let isNegative = false
  let workingValue = trimmed

  if (trimmed.startsWith("-")) {
    isNegative = true
    workingValue = trimmed.slice(1).trim().replace(/[_,\s]/g, "")
  }

  if (fromBase < MIN_BASE || fromBase > MAX_BASE) {
    throw new Error(`Input base must be between ${MIN_BASE} and ${MAX_BASE}`)
  }
  if (toBase < MIN_BASE || toBase > MAX_BASE) {
    throw new Error(`Output base must be between ${MIN_BASE} and ${MAX_BASE}`)
  }

  const fromRange = BASE64_CHARSET.slice(0, fromBase).split("")
  const toRange = BASE64_CHARSET.slice(0, toBase).split("")

  let decValue = workingValue
    .split("")
    .reverse()
    .reduce((carry: bigint, digit: string, index: number) => {
      const normalizedDigit = digit.toLowerCase()
      const digitIndex = fromRange.findIndex((c) => c.toLowerCase() === normalizedDigit)
      if (digitIndex === -1) {
        throw new Error(`Invalid digit "${digit}" for base ${fromBase}. Valid digits: ${fromRange.join("")}`)
      }
      return carry + BigInt(digitIndex) * BigInt(fromBase) ** BigInt(index)
    }, 0n)

  if (decValue === 0n) {
    return formatOutput("0", toBase, { hexUppercase, addPrefix, digitGrouping })
  }

  let newValue = ""
  let workingDec = decValue < 0n ? -decValue : decValue

  while (workingDec > 0n) {
    const remainder = Number(workingDec % BigInt(toBase))
    newValue = toRange[remainder] + newValue
    workingDec = workingDec / BigInt(toBase)
  }

  const result = isNegative ? "-" + newValue : newValue
  return formatOutput(result, toBase, { hexUppercase, addPrefix, digitGrouping })
}

export function getBitLength(binaryStr: string): number {
  const cleaned = binaryStr.replace(/^0+/, "") || "0"
  return cleaned.length
}

export function getByteLength(bitLength: number): number {
  return Math.ceil(bitLength / 8)
}
