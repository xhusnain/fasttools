export interface RemoteWorkSavingsResult {
  totalAnnualSavings: number
  totalMonthlySavings: number
  totalDailySavings: number
  commuteSavings: CommuteSavings
  mealSavings: MealSavings
  wardrobeSavings: number
  childcareSavings: number
  homeOfficeCost: number
  utilitiesCost: number
  netSavings: number
  timeSaved: TimeSaved
  environmentalImpact: EnvironmentalImpact
  categoryBreakdown: SavingsCategory[]
  fiveYearProjection: YearProjection[]
  equivalentHourlyRaise: number
}

export interface CommuteSavings {
  fuelOrTransit: number
  parking: number
  vehicleMaintenance: number
  tolls: number
  total: number
}

export interface MealSavings {
  lunches: number
  coffees: number
  total: number
}

export interface TimeSaved {
  dailyCommuteMinutes: number
  weeklyHours: number
  annualHours: number
  annualDays: number
  valueOfTimeSaved: number
}

export interface EnvironmentalImpact {
  annualMilesSaved: number
  annualCO2SavedLbs: number
  treesEquivalent: number
}

export interface SavingsCategory {
  label: string
  annualAmount: number
  monthlyAmount: number
  type: "saving" | "cost"
  color: string
}

export interface YearProjection {
  year: number
  savings: number
  cumulativeSavings: number
  inflationAdjusted: number
}
