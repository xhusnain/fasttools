export interface DateDifferenceResult {
    years: number
    months: number
    days: number
    totalDays: number
    businessDays: number
    totalWeeks: number
    totalHours: number
    totalMinutes: number
    totalSeconds: number
}

export interface DateFormat {
    value: string
    label: string
    example: string
}
