export interface Currency {
    code: string
    name: string
    symbol: string
}

export interface CurrencyConversionResult {
    from: string
    to: string
    amount: number
    convertedAmount: number
    rate: number
    date: string
}
