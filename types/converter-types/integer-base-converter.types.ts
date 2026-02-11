export interface ConvertOptions {
  value: string
  fromBase: number
  toBase: number
  hexUppercase?: boolean
  addPrefix?: boolean
  digitGrouping?: boolean
}

export interface ParseResult {
  value: string
  base: number
  isNegative: boolean
  prefix?: string
}

export interface FormatOutputOptions {
  hexUppercase?: boolean
  addPrefix?: boolean
  digitGrouping?: boolean
}

export interface ConversionRowProps {
  label: string
  value: string
  base?: number
  suffix?: string
  copyId: string
}

export interface BasePreset {
  value: number
  label: string
  short: string
}
