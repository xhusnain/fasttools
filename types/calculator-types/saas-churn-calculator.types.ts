export type ChurnCalculationType = "customer" | "revenue" | "both"
export type TimePeriod = "monthly" | "quarterly" | "annually"

export interface ChurnResult {
  customerChurnRate: number
  revenueChurnRate: number
  netRevenueChurnRate: number
  customersLost: number
  customersStart: number
  customersEnd: number
  mrrLost: number
  mrrStart: number
  expansionRevenue: number
  retentionRate: number
  revenueRetentionRate: number
  averageCustomerLifespan: number
  customerLifetimeValue: number
  projectedAnnualChurn: number
  projectedCustomersRemaining12Months: number
  monthlyProjection: MonthlyProjectionEntry[]
}

export interface MonthlyProjectionEntry {
  month: number
  customersRemaining: number
  customersLost: number
  mrrRemaining: number
  mrrLost: number
  cumulativeRevenueLost: number
}
