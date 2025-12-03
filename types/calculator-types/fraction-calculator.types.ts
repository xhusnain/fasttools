export interface Fraction {
    numerator: number
    denominator: number
}

export interface FractionResult {
    operation: string
    fraction1: Fraction
    fraction2: Fraction
    result: Fraction
    decimal: number
    percentage: number
    simplified: Fraction
    mixedNumber: string
    error?: string
}
