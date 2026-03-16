export interface CortisolResult {
  wakeUpTime: string
  cortisolPeaks: CortisolPeak[]
  optimalCaffeineWindows: TimeWindow[]
  avoidCaffeineWindows: TimeWindow[]
  optimalWorkoutWindow: TimeWindow
  optimalFocusWindows: TimeWindow[]
  melatoninOnsetTime: string
  idealBedtime: string
  cortisol24HourCurve: HourlyCortisol[]
  recommendations: Recommendation[]
}

export interface CortisolPeak {
  time: string
  level: "high" | "moderate" | "low"
  label: string
  description: string
}

export interface TimeWindow {
  start: string
  end: string
  label: string
  description: string
}

export interface HourlyCortisol {
  hour: string
  level: number
  label: string
}

export interface Recommendation {
  icon: string
  title: string
  time: string
  description: string
}
