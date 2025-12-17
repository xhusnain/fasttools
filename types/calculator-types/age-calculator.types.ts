export interface AgeResult {
    years: number
    months: number
    days: number
    totalDays: number
    nextBirthday: string
    // Enhanced features
    totalHours: number
    totalMinutes: number
    totalSeconds: number
    decimalYears: number
    weeks: number
    daysUntilNextBirthday: number
    ageLastBirthday: string
    ageNextBirthday: string
    ageNearestBirthday: string
    ageOnToday: string
    shareableLink: string
    // New Sticky Features
    westernZodiac: string
    chineseZodiac: string
    birthWeekday: string
    totalBreaths: number
    totalHeartbeats: number
}
