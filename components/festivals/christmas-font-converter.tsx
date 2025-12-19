"use client"

import { useState } from "react"
import { Copy, Check, Sparkles, Snowflake, Gift, Trees } from "lucide-react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent } from "@/ui/gcard"

// Font mapping logic
const fonts = {
  script: {
    name: "Classic Script",
    map: {
      A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
      a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝕦", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
    },
    suffix: " 🎄"
  },
  doubleStruck: {
    name: "Double Struck",
    map: {
      A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
      "0": "𝟘", "1": "𝟙", "2": "𝟚", "3": "𝟛", "4": "𝟜", "5": "𝟝", "6": "𝟞", "7": "𝟟", "8": "𝟠", "9": "𝟡"
    },
    suffix: " ❄️"
  },
  smallCaps: {
    name: "Small Caps",
    map: {
      A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J", K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    },
    suffix: " 🎅"
  },
  mathScript: {
    name: "Math Bold Script",
    map: {
      A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥", K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯", U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵",
      a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "ℯ", f: "𝒻", g: "ℊ", h: "𝒽", i: "𝒾", j: "𝒿", k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "ℴ", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉", u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓄"
    },
    prefix: "🎄 ",
    suffix: " 🎄"
  }
}

const transformText = (text: string, type: keyof typeof fonts) => {
  const font = fonts[type]
  if (!text) return ""

  let result = text.split("").map(char => {
    return (font.map as any)[char] || char
  }).join("")

  if ('prefix' in font && font.prefix) result = font.prefix + result
  if ('suffix' in font) result = result + font.suffix

  return result
}

// Special decorative styles that don't just use character mapping
const specialStyles = [
  {
    name: "Snowy Text",
    transform: (text: string) => `❆ ${text} ❆`,
    icon: Snowflake
  },
  {
    name: "Emoji Party",
    transform: (text: string) => `🎄🎁 ${text} 🎅✨`,
    icon: Gift
  },
  {
    name: "Sparkles",
    transform: (text: string) => `✨ ${text} ✨`,
    icon: Sparkles
  }
]

export function ChristmasFontConverter() {
  const [input, setInput] = useState("Merry Christmas")
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(id)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Input Section */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <GLabel htmlFor="input-text" className="text-lg font-semibold mb-2 block">
          Enter your holiday message
        </GLabel>
        <GInput
          id="input-text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something festive..."
          className="text-lg p-6"
        />
      </div>

      {/* Results Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mapped Fonts */}
        {(Object.keys(fonts) as Array<keyof typeof fonts>).map((fontKey) => {
          const result = transformText(input, fontKey)
          const styleName = fonts[fontKey].name

          return (
            <GCard key={fontKey} className="group hover:border-primary/50 transition-colors">
              <GCardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-medium">{styleName}</span>
                  <GButton
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(result, fontKey)}
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                  >
                    {copiedIndex === fontKey ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </GButton>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg min-h-[60px] flex items-center justify-center text-center break-all">
                  <p className="text-xl">{result || "Preview here"}</p>
                </div>
              </GCardContent>
            </GCard>
          )
        })}

        {/* Special Styles */}
        {specialStyles.map((style, idx) => {
          const result = style.transform(input)
          const id = `special-${idx}`
          const Icon = style.icon

          return (
            <GCard key={id} className="group hover:border-primary/50 transition-colors">
              <GCardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-medium flex items-center gap-2">
                    <Icon className="h-4 w-4" />
                    {style.name}
                  </span>
                  <GButton
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(result, id)}
                    className="h-8 w-8 text-muted-foreground hover:text-primary"
                  >
                    {copiedIndex === id ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </GButton>
                </div>
                <div className="p-3 bg-secondary/50 rounded-lg min-h-[60px] flex items-center justify-center text-center break-all">
                  <p className="text-xl">{result || "Preview here"}</p>
                </div>
              </GCardContent>
            </GCard>
          )
        })}
      </div>
    </div>
  )
}
