/**
 * NATO phonetic alphabet conversion
 * Transforms text into NATO/ICAO phonetic equivalents for oral transmission
 */

const NATO_MAP: Record<string, string> = {
  A: "Alpha",
  B: "Bravo",
  C: "Charlie",
  D: "Delta",
  E: "Echo",
  F: "Foxtrot",
  G: "Golf",
  H: "Hotel",
  I: "India",
  J: "Juliet",
  K: "Kilo",
  L: "Lima",
  M: "Mike",
  N: "November",
  O: "Oscar",
  P: "Papa",
  Q: "Quebec",
  R: "Romeo",
  S: "Sierra",
  T: "Tango",
  U: "Uniform",
  V: "Victor",
  W: "Whiskey",
  X: "X-ray",
  Y: "Yankee",
  Z: "Zulu",
  "0": "Zero",
  "1": "One",
  "2": "Two",
  "3": "Three",
  "4": "Four",
  "5": "Five",
  "6": "Six",
  "7": "Seven",
  "8": "Eight",
  "9": "Nine",
}

const NATO_TO_CHAR: Record<string, string> = {
  alpha: "A",
  bravo: "B",
  charlie: "C",
  delta: "D",
  echo: "E",
  foxtrot: "F",
  golf: "G",
  hotel: "H",
  india: "I",
  juliet: "J",
  kilo: "K",
  lima: "L",
  mike: "M",
  november: "N",
  oscar: "O",
  papa: "P",
  quebec: "Q",
  romeo: "R",
  sierra: "S",
  tango: "T",
  uniform: "U",
  victor: "V",
  whiskey: "W",
  xray: "X",
  "x-ray": "X",
  yankee: "Y",
  zulu: "Z",
  zero: "0",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
}

export const NATO_LETTERS = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
] as const

export const NATO_NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const

export function textToNato(text: string): string {
  if (!text || text.trim() === "") return ""
  const chars = text.trim().toUpperCase().split("")
  const result: string[] = []
  for (const char of chars) {
    if (char in NATO_MAP) {
      result.push(NATO_MAP[char])
    } else if (char === " ") {
      result.push(" ")
    } else {
      result.push(char)
    }
  }
  return result.join(" ")
}

export function natoToText(nato: string): string {
  if (!nato || nato.trim() === "") return ""
  const words = nato.trim().split(/\s+/)
  const result: string[] = []
  for (const word of words) {
    const key = word.toLowerCase().replace(/-/g, "")
    if (key in NATO_TO_CHAR) {
      result.push(NATO_TO_CHAR[key])
    } else if (word === "") {
      result.push(" ")
    } else {
      result.push(word)
    }
  }
  return result.join("")
}

export function getNatoWord(char: string): string {
  const upper = char.toUpperCase()
  return NATO_MAP[upper] ?? char
}
