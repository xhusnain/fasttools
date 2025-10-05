"use client"

import { useState } from "react"
import { Calendar, Sparkles, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function ZodiacSignFinder() {
  const [birthDate, setBirthDate] = useState("")
  const [result, setResult] = useState<{
    sign: string
    symbol: string
    element: string
    dateRange: string
    traits: string[]
  } | null>(null)
  const [copied, setCopied] = useState(false)

  const zodiacSigns = [
    {
      sign: "Capricorn",
      symbol: "♑",
      element: "Earth",
      dateRange: "Dec 22 - Jan 19",
      traits: ["Ambitious", "Disciplined", "Practical"],
      startMonth: 12,
      startDay: 22,
      endMonth: 1,
      endDay: 19,
    },
    {
      sign: "Aquarius",
      symbol: "♒",
      element: "Air",
      dateRange: "Jan 20 - Feb 18",
      traits: ["Independent", "Innovative", "Humanitarian"],
      startMonth: 1,
      startDay: 20,
      endMonth: 2,
      endDay: 18,
    },
    {
      sign: "Pisces",
      symbol: "♓",
      element: "Water",
      dateRange: "Feb 19 - Mar 20",
      traits: ["Compassionate", "Intuitive", "Artistic"],
      startMonth: 2,
      startDay: 19,
      endMonth: 3,
      endDay: 20,
    },
    {
      sign: "Aries",
      symbol: "♈",
      element: "Fire",
      dateRange: "Mar 21 - Apr 19",
      traits: ["Courageous", "Energetic", "Confident"],
      startMonth: 3,
      startDay: 21,
      endMonth: 4,
      endDay: 19,
    },
    {
      sign: "Taurus",
      symbol: "♉",
      element: "Earth",
      dateRange: "Apr 20 - May 20",
      traits: ["Reliable", "Patient", "Devoted"],
      startMonth: 4,
      startDay: 20,
      endMonth: 5,
      endDay: 20,
    },
    {
      sign: "Gemini",
      symbol: "♊",
      element: "Air",
      dateRange: "May 21 - Jun 20",
      traits: ["Adaptable", "Curious", "Communicative"],
      startMonth: 5,
      startDay: 21,
      endMonth: 6,
      endDay: 20,
    },
    {
      sign: "Cancer",
      symbol: "♋",
      element: "Water",
      dateRange: "Jun 21 - Jul 22",
      traits: ["Emotional", "Protective", "Intuitive"],
      startMonth: 6,
      startDay: 21,
      endMonth: 7,
      endDay: 22,
    },
    {
      sign: "Leo",
      symbol: "♌",
      element: "Fire",
      dateRange: "Jul 23 - Aug 22",
      traits: ["Confident", "Generous", "Creative"],
      startMonth: 7,
      startDay: 23,
      endMonth: 8,
      endDay: 22,
    },
    {
      sign: "Virgo",
      symbol: "♍",
      element: "Earth",
      dateRange: "Aug 23 - Sep 22",
      traits: ["Analytical", "Practical", "Helpful"],
      startMonth: 8,
      startDay: 23,
      endMonth: 9,
      endDay: 22,
    },
    {
      sign: "Libra",
      symbol: "♎",
      element: "Air",
      dateRange: "Sep 23 - Oct 22",
      traits: ["Diplomatic", "Fair", "Social"],
      startMonth: 9,
      startDay: 23,
      endMonth: 10,
      endDay: 22,
    },
    {
      sign: "Scorpio",
      symbol: "♏",
      element: "Water",
      dateRange: "Oct 23 - Nov 21",
      traits: ["Passionate", "Resourceful", "Determined"],
      startMonth: 10,
      startDay: 23,
      endMonth: 11,
      endDay: 21,
    },
    {
      sign: "Sagittarius",
      symbol: "♐",
      element: "Fire",
      dateRange: "Nov 22 - Dec 21",
      traits: ["Optimistic", "Adventurous", "Philosophical"],
      startMonth: 11,
      startDay: 22,
      endMonth: 12,
      endDay: 21,
    },
  ]

  const findZodiacSign = () => {
    if (!birthDate) return

    const date = new Date(birthDate)
    const month = date.getMonth() + 1
    const day = date.getDate()

    const sign = zodiacSigns.find((zodiac) => {
      if (zodiac.startMonth === zodiac.endMonth) {
        return month === zodiac.startMonth && day >= zodiac.startDay && day <= zodiac.endDay
      } else if (month === zodiac.startMonth && day >= zodiac.startDay) {
        return true
      } else if (month === zodiac.endMonth && day <= zodiac.endDay) {
        return true
      }
      return false
    })

    if (sign) {
      setResult({
        sign: sign.sign,
        symbol: sign.symbol,
        element: sign.element,
        dateRange: sign.dateRange,
        traits: sign.traits,
      })
    }
  }

  const copyResult = () => {
    if (!result) return
    const text = `Zodiac Sign: ${result.sign} ${result.symbol}\nElement: ${result.element}\nDate Range: ${result.dateRange}\nTraits: ${result.traits.join(", ")}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 shadow-sm border-border">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="birthdate" className="text-sm font-medium">
              Enter Your Birth Date
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="birthdate"
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value)
                  setResult(null)
                }}
                max={new Date().toISOString().split("T")[0]}
                className="pl-10 h-11"
              />
            </div>
          </div>

          <Button onClick={findZodiacSign} disabled={!birthDate} className="w-full h-11 text-sm font-medium">
            Find Zodiac Sign
          </Button>
        </div>
      </Card>

      {result && (
        <Card className="p-6 shadow-sm border-border animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Your Zodiac Sign</h3>
              <Button variant="outline" size="sm" onClick={copyResult} className="h-9 bg-transparent">
                {copied ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>

            <div className="p-6 rounded-lg bg-primary/5 border border-primary/20 text-center">
              <div className="text-6xl mb-3">{result.symbol}</div>
              <div className="text-3xl font-bold text-primary mb-2">{result.sign}</div>
              <div className="text-sm text-muted-foreground">{result.dateRange}</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-border">
                <span className="text-sm font-medium text-muted-foreground">Element</span>
                <span className="text-sm font-semibold text-foreground">{result.element}</span>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Key Traits</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.traits.map((trait, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
