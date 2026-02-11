import {
  MIN_ROMAN,
  MAX_ROMAN_EXTENDED,
  STANDARD_LOOKUP,
  EXTENDED_LOOKUP,
  ROMAN_TO_VALUE,
} from "@/constants/roman-numeral-converter"

export { MIN_ROMAN, MAX_ROMAN_STANDARD, MAX_ROMAN_EXTENDED } from "@/constants/roman-numeral-converter"

export function arabicToRoman(num: number): string {
  const n = Math.floor(num)
  if (n < MIN_ROMAN || n > MAX_ROMAN_EXTENDED) return ""

  const lookup = n >= 4000 ? EXTENDED_LOOKUP : STANDARD_LOOKUP
  let roman = ""
  let remaining = n

  for (const [symbol, value] of lookup) {
    while (remaining >= value) {
      roman += symbol
      remaining -= value
    }
  }

  return roman
}

function tokenizeRoman(input: string): string[] {
  const normalized = input.trim().toUpperCase()
  const tokens: string[] = []
  const multichar = [
    "CM\u0305", "CD\u0305", "XC\u0305", "XL\u0305", "IX\u0305", "IV\u0305",
    "M\u0305", "D\u0305", "C\u0305", "L\u0305", "X\u0305", "V\u0305", "I\u0305",
    "CM", "CD", "XC", "XL", "IX", "IV",
    "M", "D", "C", "L", "X", "V", "I",
  ]

  let s = normalized
  while (s.length > 0) {
    let found = false
    for (const token of multichar) {
      if (s.startsWith(token)) {
        tokens.push(token)
        s = s.slice(token.length)
        found = true
        break
      }
    }
    if (!found) s = s.slice(1)
  }

  return tokens
}

function parseRomanTokens(tokens: string[]): number | null {
  let total = 0
  for (let i = 0; i < tokens.length; i++) {
    const val = ROMAN_TO_VALUE[tokens[i]]
    if (val === undefined) return null
    const nextVal = i + 1 < tokens.length ? ROMAN_TO_VALUE[tokens[i + 1]] : 0
    total += val < nextVal ? -val : val
  }
  return total
}

function expandParentheses(input: string): string {
  return input.replace(/\(([IVXLCDMivxlcdm]+)\)/g, (_, inner) => {
    const val = romanToArabicInner(inner)
    if (val === null || val < 1 || val > 3999) return _
    return arabicToRoman(val).split("").map(c => c + "\u0305").join("")
  })
}

function romanToArabicInner(input: string): number | null {
  const tokens = tokenizeRoman(input)
  return parseRomanTokens(tokens)
}

export function romanToArabic(input: string): number | null {
  const normalized = input.trim()
  if (!normalized) return null

  const expanded = expandParentheses(normalized)
  const tokens = tokenizeRoman(expanded)
  const result = parseRomanTokens(tokens)
  if (result === null || result < MIN_ROMAN) return null
  return result
}

export function isValidRomanNumber(input: string): boolean {
  const result = romanToArabic(input)
  return result !== null && result >= MIN_ROMAN && result <= MAX_ROMAN_EXTENDED
}
