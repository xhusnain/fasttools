"use client"

import { useState, useEffect, useCallback } from "react"
import { Copy, Check, Sparkles, Snowflake, Gift, TreePine, Shuffle, Clock, Star, PartyPopper } from "lucide-react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GCard, GCardContent } from "@/ui/gcard"

// Font mapping logic - Extended with new styles
const fonts = {
  script: {
    name: "Classic Script",
    emoji: "✨",
    map: {
      A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
      a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
    },
    suffix: " 🎄"
  },
  doubleStruck: {
    name: "Double Struck",
    emoji: "❄️",
    map: {
      A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
      a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
      "0": "𝟘", "1": "𝟙", "2": "𝟚", "3": "𝟛", "4": "𝟜", "5": "𝟝", "6": "𝟞", "7": "𝟟", "8": "𝟠", "9": "𝟡"
    },
    suffix: " ❄️"
  },
  smallCaps: {
    name: "Small Caps",
    emoji: "🎅",
    map: {
      A: "A", B: "B", C: "C", D: "D", E: "E", F: "F", G: "G", H: "H", I: "I", J: "J", K: "K", L: "L", M: "M", N: "N", O: "O", P: "P", Q: "Q", R: "R", S: "S", T: "T", U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z",
      a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ"
    },
    suffix: " 🎅"
  },
  mathScript: {
    name: "Math Script",
    emoji: "🎁",
    map: {
      A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ", I: "ℐ", J: "𝒥", K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫", Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯", U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳", Y: "𝒴", Z: "𝒵",
      a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "ℯ", f: "𝒻", g: "ℊ", h: "𝒽", i: "𝒾", j: "𝒿", k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "ℴ", p: "𝓅", q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉", u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍", y: "𝓎", z: "𝓄"
    },
    prefix: "🎄 ",
    suffix: " 🎄"
  },
  fraktur: {
    name: "Gothic Fraktur",
    emoji: "⛪",
    map: {
      A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ", I: "ℑ", J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓", Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛", Y: "𝔜", Z: "ℨ",
      a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥", i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭", q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵", y: "𝔶", z: "𝔷"
    },
    prefix: "🕯️ ",
    suffix: " 🕯️"
  },
  bubble: {
    name: "Bubble Text",
    emoji: "🔴",
    map: {
      A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ", K: "Ⓚ", L: "Ⓛ", M: "Ⓜ", N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ", U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
      a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ", n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
      "0": "⓪", "1": "①", "2": "②", "3": "③", "4": "④", "5": "⑤", "6": "⑥", "7": "⑦", "8": "⑧", "9": "⑨"
    },
    prefix: "🎈 ",
    suffix: " 🎈"
  },
  upsideDown: {
    name: "Upside Down",
    emoji: "🙃",
    map: {
      A: "∀", B: "ꓭ", C: "Ɔ", D: "ꓷ", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H", I: "I", J: "ſ", K: "ꓘ", L: "⅂", M: "W", N: "N", O: "O", P: "Ԁ", Q: "Ꝺ", R: "ꓤ", S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X", Y: "⅄", Z: "Z",
      a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ", i: "ᴉ", j: "ɾ", k: "ʞ", l: "l", m: "ɯ", n: "u", o: "o", p: "d", q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x", y: "ʎ", z: "z",
      "1": "Ɩ", "2": "ᄅ", "3": "Ɛ", "4": "ㄣ", "5": "ϛ", "6": "9", "7": "ㄥ", "8": "8", "9": "6", "0": "0",
      ".": "˙", ",": "'", "'": ",", "\"": ",,", "?": "¿", "!": "¡", "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "<": ">", ">": "<", "&": "⅋", "_": "‾"
    },
    prefix: "🎄 ",
    suffix: " 🎄",
    reverse: true
  },
  boldScript: {
    name: "Bold Script",
    emoji: "💫",
    map: {
      A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜", N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩",
      a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶", n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃"
    },
    prefix: "🌟 ",
    suffix: " ⭐"
  }
}

const transformText = (text: string, type: keyof typeof fonts) => {
  const font = fonts[type]
  if (!text) return ""

  let textToTransform = text
  if ('reverse' in font && font.reverse) {
    textToTransform = text.split("").reverse().join("")
  }

  let result = textToTransform.split("").map(char => {
    return (font.map as Record<string, string>)[char] || char
  }).join("")

  if ('prefix' in font && font.prefix) result = font.prefix + result
  if ('suffix' in font) result = result + font.suffix

  return result
}

// Special decorative styles
const specialStyles = [
  { name: "Snowy Text", transform: (text: string) => `❆ ${text} ❆`, icon: Snowflake },
  { name: "Emoji Party", transform: (text: string) => `🎄🎁 ${text} 🎅✨`, icon: Gift },
  { name: "Sparkles", transform: (text: string) => `✨ ${text} ✨`, icon: Sparkles },
  { name: "Santa Magic", transform: (text: string) => `🎅🏼✨ ${text} ✨🎅🏼`, icon: Star },
  { name: "Gift Wrapped", transform: (text: string) => `🎁🎀 ${text} 🎀🎁`, icon: Gift },
  { name: "Winter Wonderland", transform: (text: string) => `☃️❄️ ${text} ❄️☃️`, icon: Snowflake }
]

// Preset Christmas messages
const presetMessages = [
  "Merry Christmas",
  "Happy Holidays",
  "Season's Greetings",
  "Joy to the World",
  "Peace on Earth",
  "Ho Ho Ho",
  "Let it Snow",
  "Jingle Bells"
]

// Trending phrases
const trendingPhrases = [
  "Merry Christmas & Happy New Year",
  "Wishing you a magical holiday season",
  "May your days be merry and bright",
  "Spreading holiday cheer",
  "All I want for Christmas",
  "Tis the season to be jolly"
]

// Platform character limits
const platformLimits = [
  { name: "IG Bio", limit: 150, color: "text-pink-300" },
  { name: "Twitter", limit: 280, color: "text-blue-300" },
  { name: "TikTok", limit: 80, color: "text-purple-300" }
]

export function ChristmasFontConverter() {
  const [input, setInput] = useState("Merry Christmas")
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null)
  const [showCopyAll, setShowCopyAll] = useState(false)
  const [daysUntilChristmas, setDaysUntilChristmas] = useState(0)

  useEffect(() => {
    const now = new Date()
    const currentYear = now.getFullYear()
    let christmas = new Date(currentYear, 11, 25)
    if (now > christmas) christmas = new Date(currentYear + 1, 11, 25)
    const diffDays = Math.ceil((christmas.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    setDaysUntilChristmas(diffDays)
  }, [])

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(id)
    setTimeout(() => setCopiedIndex(null), 2000)
  }, [])

  const handleCopyAll = useCallback(() => {
    const allStyles = [
      ...Object.keys(fonts).map(fontKey => transformText(input, fontKey as keyof typeof fonts)),
      ...specialStyles.map(style => style.transform(input))
    ].join("\n\n")
    navigator.clipboard.writeText(allStyles)
    setShowCopyAll(true)
    setTimeout(() => setShowCopyAll(false), 2000)
  }, [input])

  const handleSurpriseMe = useCallback(() => {
    const randomPhrase = trendingPhrases[Math.floor(Math.random() * trendingPhrases.length)]
    setInput(randomPhrase)
  }, [])

  const charCount = transformText(input, 'script').length

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Christmas Countdown */}
      <div className="bg-gradient-to-r from-red-600/90 via-red-500/90 to-green-600/90 rounded-xl p-4 text-center shadow-lg border border-yellow-400/30">
        <div className="flex items-center justify-center gap-3 text-white">
          <Clock className="h-5 w-5 animate-pulse" />
          <span className="text-lg font-bold">
            {daysUntilChristmas === 0 ? "🎄 Merry Christmas! 🎄"
              : daysUntilChristmas === 1 ? "🎅 Tomorrow is Christmas! 🎁"
                : `🎄 ${daysUntilChristmas} days until Christmas! ❄️`}
          </span>
          <TreePine className="h-5 w-5 text-green-200" />
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-br from-green-800/60 to-red-900/40 border border-yellow-500/30 rounded-xl p-6 shadow-xl">
        <GLabel htmlFor="input-text" className="text-lg font-bold mb-3 block text-white flex items-center gap-2">
          <TreePine className="h-5 w-5 text-green-400" />
          Enter your holiday message ✨
        </GLabel>

        <GInput
          id="input-text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something festive..."
          className="text-lg p-5 bg-black/30 border-yellow-500/40 text-white placeholder:text-white/50"
        />

        {/* Preset Messages */}
        <div className="mt-4 flex flex-wrap gap-2">
          {presetMessages.map((msg) => (
            <button
              key={msg}
              onClick={() => setInput(msg)}
              className="px-3 py-1.5 text-sm bg-red-600/70 hover:bg-red-500/80 text-white rounded-full border border-yellow-500/30 transition-all hover:scale-105"
            >
              {msg}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex flex-wrap gap-3">
          <GButton
            onClick={handleSurpriseMe}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-bold shadow-lg"
          >
            <Shuffle className="h-4 w-4 mr-2" />
            🎄 Surprise Me!
          </GButton>

          <GButton
            onClick={handleCopyAll}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-bold shadow-lg"
          >
            {showCopyAll ? <><Check className="h-4 w-4 mr-2" /> Copied! ✨</> : <><Copy className="h-4 w-4 mr-2" /> 📋 Copy All</>}
          </GButton>
        </div>

        {/* Character Counts */}
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {platformLimits.map((p) => (
            <span key={p.name} className={`${charCount > p.limit ? 'text-red-400' : p.color}`}>
              {p.name}: {charCount}/{p.limit} {charCount > p.limit && "⚠️"}
            </span>
          ))}
        </div>
      </div>

      {/* Trending Phrases */}
      <div className="bg-purple-900/40 rounded-lg p-4 border border-purple-400/30">
        <div className="flex items-center gap-2 mb-3 text-white">
          <PartyPopper className="h-4 w-4 text-yellow-400" />
          <span className="font-semibold text-sm">Trending:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {trendingPhrases.map((phrase) => (
            <button
              key={phrase}
              onClick={() => setInput(phrase)}
              className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 text-white/90 rounded-full border border-white/20 transition-all"
            >
              {phrase}
            </button>
          ))}
        </div>
      </div>

      {/* Font Style Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(Object.keys(fonts) as Array<keyof typeof fonts>).map((fontKey) => {
          const result = transformText(input, fontKey)
          const font = fonts[fontKey]
          return (
            <GCard key={fontKey} className="group hover:border-yellow-400/50 transition-all bg-green-900/40 border-green-600/30 hover:shadow-lg hover:shadow-yellow-400/10 hover:scale-[1.02]">
              <GCardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-200/80 font-medium flex items-center gap-2">
                    <span>{font.emoji}</span> {font.name}
                  </span>
                  <GButton variant="ghost" size="icon" onClick={() => handleCopy(result, fontKey)} className="h-8 w-8 text-green-300 hover:text-yellow-400">
                    {copiedIndex === fontKey ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </GButton>
                </div>
                <div className="p-3 bg-black/40 rounded-lg min-h-[56px] flex items-center justify-center text-center break-all border border-green-600/20">
                  <p className="text-lg text-white">{result || "Preview"}</p>
                </div>
                {copiedIndex === fontKey && <div className="text-center text-green-400 text-xs">✓ Copied!</div>}
              </GCardContent>
            </GCard>
          )
        })}

        {specialStyles.map((style, idx) => {
          const result = style.transform(input)
          const id = `special-${idx}`
          const Icon = style.icon
          return (
            <GCard key={id} className="group hover:border-yellow-400/50 transition-all bg-red-900/40 border-red-600/30 hover:shadow-lg hover:shadow-yellow-400/10 hover:scale-[1.02]">
              <GCardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-200/80 font-medium flex items-center gap-2">
                    <Icon className="h-4 w-4 text-red-300" /> {style.name}
                  </span>
                  <GButton variant="ghost" size="icon" onClick={() => handleCopy(result, id)} className="h-8 w-8 text-red-300 hover:text-yellow-400">
                    {copiedIndex === id ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </GButton>
                </div>
                <div className="p-3 bg-black/40 rounded-lg min-h-[56px] flex items-center justify-center text-center break-all border border-red-600/20">
                  <p className="text-lg text-white">{result || "Preview"}</p>
                </div>
                {copiedIndex === id && <div className="text-center text-green-400 text-xs">✓ Copied!</div>}
              </GCardContent>
            </GCard>
          )
        })}
      </div>
    </div>
  )
}
