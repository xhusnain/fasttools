export interface ConversionHistory {
    id: string
    category: string
    fromUnit: string
    toUnit: string
    value: number
    result: number
    timestamp: Date
}
