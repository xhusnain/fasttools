export type TimeDurationCalculationType = "time-duration" | "time-addition" | "time-subtraction" | "business-hours" | "timezone-conversion" | "work-days" | "overtime-calculator"

export interface TimeDurationResult {
    hours: number
    minutes: number
    seconds: number
    totalMinutes: number
    totalSeconds: number
    totalHours: number
    businessDays: number
    workDays: number
    overtimeHours: number
    regularHours: number
    timezoneOffset: number
    formula: string
    explanation: string
}
