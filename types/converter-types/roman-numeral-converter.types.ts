export interface RomanConversionSectionProps {
  title: string
  description: string
  inputValue: string
  outputValue: string
  onInputChange: (value: string) => void
  copyId: string
  isValid: boolean
  errorMessage?: string
}
