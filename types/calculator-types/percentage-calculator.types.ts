export type CalculationType = "basic" | "increase" | "decrease" | "difference" | "markup" | "margin" | "compound"

export interface CalculationResult {
    type: string
    result: number
    originalValue: number
    percentage: number
    newValue?: number
    difference?: number
    formula: string
    explanation: string
}
