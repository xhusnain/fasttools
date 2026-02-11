export const MIN_ROMAN = 1
export const MAX_ROMAN_STANDARD = 3999
export const MAX_ROMAN_EXTENDED = 3999999

export const VINCULUM = "\u0305"

export const STANDARD_LOOKUP: [string, number][] = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
]

export const EXTENDED_LOOKUP: [string, number][] = [
  ["M\u0305", 1000000],
  ["CM\u0305", 900000],
  ["D\u0305", 500000],
  ["CD\u0305", 400000],
  ["C\u0305", 100000],
  ["XC\u0305", 90000],
  ["L\u0305", 50000],
  ["XL\u0305", 40000],
  ["X\u0305", 10000],
  ["IX\u0305", 9000],
  ["V\u0305", 5000],
  ["IV\u0305", 4000],
  ["I\u0305", 1000],
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
]

export const ROMAN_TO_VALUE: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  "I\u0305": 1000,
  "V\u0305": 5000,
  "X\u0305": 10000,
  "L\u0305": 50000,
  "C\u0305": 100000,
  "D\u0305": 500000,
  "M\u0305": 1000000,
}
