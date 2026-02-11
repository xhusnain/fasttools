/**
 * Text to ASCII binary and ASCII binary to text conversion
 */

export function textToBinary(text: string, spaceSeparated = true): string {
  if (!text) return ""
  const bytes = text.split("").map((char) => {
    const code = char.charCodeAt(0)
    return code.toString(2).padStart(8, "0")
  })
  return bytes.join(spaceSeparated ? " " : "")
}

export function binaryToText(binary: string): string {
  if (!binary) return ""
  const clean = binary.replace(/\s/g, "")
  if (clean.length % 8 !== 0) return ""
  const chars: string[] = []
  for (let i = 0; i < clean.length; i += 8) {
    const byte = clean.slice(i, i + 8)
    if (!/^[01]+$/.test(byte)) return ""
    const code = parseInt(byte, 2)
    if (code < 0 || code > 255) return ""
    chars.push(String.fromCharCode(code))
  }
  return chars.join("")
}

export function isValidBinary(binary: string): boolean {
  const clean = binary.replace(/\s/g, "")
  return clean.length % 8 === 0 && /^[01]*$/.test(clean) && clean.length > 0
}
