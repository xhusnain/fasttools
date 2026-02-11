"use client"

import { useState, useMemo } from "react"
import { GButton } from "@/ui/gbutton"
import { GInput } from "@/ui/ginput"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { CopyButton } from "@/components/common/copy-button"
import {
  arabicToRoman,
  romanToArabic,
  isValidRomanNumber,
  MIN_ROMAN,
  MAX_ROMAN_EXTENDED,
} from "@/lib/roman-numeral-converter"
import type { RomanConversionSectionProps } from "@/types/converter-types/roman-numeral-converter.types"
import { BookOpen, RotateCcw, Calendar } from "lucide-react"

function ConversionSection({
  title,
  description,
  inputValue,
  onInputChange,
  outputValue,
  copyId,
  errorMessage,
}: RomanConversionSectionProps) {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <GInput
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          className="font-mono flex-1"
        />
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-lg font-mono font-medium text-foreground truncate">
            {outputValue || "—"}
          </span>
          {outputValue && (
            <CopyButton text={outputValue} id={copyId} className="shrink-0" />
          )}
        </div>
      </div>
      {errorMessage && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}
    </div>
  )
}

const POPULAR_CONVERSIONS = [
  { number: 5, roman: "V" },
  { number: 11, roman: "XI" },
  { number: 25, roman: "XXV" },
  { number: 50, roman: "L" },
  { number: 100, roman: "C" },
  { number: 1000, roman: "M" },
  { number: 2025, roman: "MMXXV" },
] as const

const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1)
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1)
const CURRENT_YEAR = new Date().getFullYear()
const YEARS = Array.from({ length: 100 }, (_, i) => CURRENT_YEAR - 99 + i)

export function RomanNumeralConverter() {
  const [arabicInput, setArabicInput] = useState("42")
  const [romanInput, setRomanInput] = useState("XLII")
  const [dateMonth, setDateMonth] = useState(12)
  const [dateDay, setDateDay] = useState(25)
  const [dateYear, setDateYear] = useState(1990)
  const [dateFormat, setDateFormat] = useState<"mdy" | "dmy">("mdy")

  const arabicNum = Math.floor(Number(arabicInput)) || 0
  const arabicValid = arabicNum >= MIN_ROMAN && arabicNum <= MAX_ROMAN_EXTENDED
  const romanOutput = arabicValid ? arabicToRoman(arabicNum) : ""

  const romanParts = romanInput.split(/[·•]/).map((s) => s.trim()).filter(Boolean)
  const romanOutputParsed = useMemo(() => {
    if (romanParts.length === 3) {
      const [a, b, c] = romanParts.map((p) => romanToArabic(p))
      if (a != null && b != null && c != null && c >= 1 && c <= 3999) {
        if (a >= 1 && a <= 12 && b >= 1 && b <= 31) {
          return `${a}/${b}/${c} (M/D/Y)`
        }
        if (a >= 1 && a <= 31 && b >= 1 && b <= 12) {
          return `${a}/${b}/${c} (D/M/Y)`
        }
      }
    }
    const single = romanToArabic(romanInput.replace(/[·•]/g, "").replace(/\s/g, ""))
    return single != null ? String(single) : null
  }, [romanInput, romanParts])

  const romanValid =
    romanParts.length === 3
      ? romanParts.every((p) => romanToArabic(p) != null)
      : isValidRomanNumber(romanInput.replace(/[·•]/g, "").replace(/\s/g, ""))

  const dateRoman = useMemo(() => {
    const parts = dateFormat === "mdy"
      ? [dateMonth, dateDay, dateYear]
      : [dateDay, dateMonth, dateYear]
    const valid = dateMonth >= 1 && dateMonth <= 12 && dateDay >= 1 && dateDay <= 31 &&
      dateYear >= 1 && dateYear <= 3999
    if (!valid) return ""
    return parts.map(p => arabicToRoman(p)).join(" · ")
  }, [dateMonth, dateDay, dateYear, dateFormat])

  const arabicError =
    arabicInput !== "" && !arabicValid
      ? `Enter a number between ${MIN_ROMAN.toLocaleString()} and ${MAX_ROMAN_EXTENDED.toLocaleString()}`
      : undefined

  const romanError =
    romanInput !== "" && !romanValid
      ? "Enter a valid Roman numeral or date (e.g. XII · XXV · MCMXC)"
      : undefined

  const reset = () => {
    setArabicInput("42")
    setRomanInput("XLII")
    setDateMonth(12)
    setDateDay(25)
    setDateYear(1990)
  }

  return (
    <div className="space-y-6">
      <GCard className="border border-border shadow bg-card rounded-3xl">
        <GCardHeader className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <GCardTitle className="text-lg sm:text-xl font-bold text-card-foreground">
                  Roman Numeral Converter
                </GCardTitle>
                <GCardDescription className="text-muted-foreground text-sm">
                  Convert numbers, dates, and birthdays to Roman numerals. Number to Roman, date of
                  birth for tattoos. 1–3,999,999.
                </GCardDescription>
              </div>
            </div>
            <GButton
              onClick={reset}
              variant="outline"
              size="sm"
              className="h-8 px-3 text-xs border-border text-foreground hover:bg-accent/10"
            >
              <RotateCcw className="h-3 w-3 sm:mr-1" />
              Reset
            </GButton>
          </div>
        </GCardHeader>
        <GCardContent className="p-6 space-y-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-muted-foreground font-medium shrink-0">Popular:</span>
            {POPULAR_CONVERSIONS.map(({ number, roman }) => (
              <button
                key={number}
                type="button"
                onClick={() => setArabicInput(String(number))}
                className="px-2.5 py-1 rounded-md bg-muted/60 hover:bg-muted border border-border hover:border-primary/30 transition-colors font-mono text-foreground"
              >
                {number}=<span className="text-primary font-medium">{roman}</span>
              </button>
            ))}
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Date to Roman (birthday, tattoo)
              </h3>
              <p className="text-xs text-muted-foreground">
                Convert a date to Roman numerals for tattoos, jewelry, or memorabilia
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <select
                value={dateFormat}
                onChange={(e) => setDateFormat(e.target.value as "mdy" | "dmy")}
                className="h-9 px-3 rounded-lg border border-border bg-background text-foreground text-sm"
              >
                <option value="mdy">Month · Day · Year</option>
                <option value="dmy">Day · Month · Year</option>
              </select>
              <select
                value={dateMonth}
                onChange={(e) => setDateMonth(Number(e.target.value))}
                className="h-9 px-3 rounded-lg border border-border bg-background text-foreground text-sm"
              >
                {MONTHS.map((m) => (
                  <option key={m} value={m}>
                    {new Date(2000, m - 1).toLocaleString("default", { month: "long" })}
                  </option>
                ))}
              </select>
              <select
                value={dateDay}
                onChange={(e) => setDateDay(Number(e.target.value))}
                className="h-9 px-3 rounded-lg border border-border bg-background text-foreground text-sm"
              >
                {DAYS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <select
                value={dateYear}
                onChange={(e) => setDateYear(Number(e.target.value))}
                className="h-9 px-3 rounded-lg border border-border bg-background text-foreground text-sm"
              >
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-mono font-medium text-foreground">
                {dateRoman || "—"}
              </span>
              {dateRoman && (
                <CopyButton text={dateRoman} id="copy-date-to-roman" className="shrink-0" />
              )}
            </div>
          </div>

          <ConversionSection
            title="Number to Roman"
            description="Enter a number (1 to 3,999,999)"
            inputValue={arabicInput}
            onInputChange={setArabicInput}
            outputValue={romanOutput}
            copyId="copy-arabic-to-roman"
            isValid={arabicValid}
            errorMessage={arabicError}
          />

          <ConversionSection
            title="Roman to Number"
            description="Enter Roman numerals (e.g. XLII, XII·XXV·MCMXC)"
            inputValue={romanInput}
            onInputChange={setRomanInput}
            outputValue={romanOutputParsed ?? ""}
            copyId="copy-roman-to-arabic"
            isValid={romanValid}
            errorMessage={romanError}
          />
        </GCardContent>
      </GCard>
    </div>
  )
}
