// Per-state US sales tax reference data — single source of truth shared by the
// Sales Tax Calculator component and the /finance-tools/sales-tax-calculator/[state]
// pages, so tool and page content can never drift apart.
// Rates are state base rate, max combined (state+local), and avg/max local add-on.
// Verify against state DOR pages before relying on them for filing.

export interface StateTaxData {
  state: string
  stateRate: number
  maxRate: number
  localTax: number
}

export const stateTaxRates: StateTaxData[] = [
  { state: "Alabama", stateRate: 4.0, maxRate: 13.5, localTax: 9.5 },
  { state: "Alaska", stateRate: 0.0, maxRate: 7.0, localTax: 7.0 },
  { state: "Arizona", stateRate: 5.6, maxRate: 10.725, localTax: 5.125 },
  { state: "Arkansas", stateRate: 6.5, maxRate: 11.625, localTax: 5.125 },
  { state: "California", stateRate: 7.25, maxRate: 10.5, localTax: 3.25 },
  { state: "Colorado", stateRate: 2.9, maxRate: 10.0, localTax: 7.1 },
  { state: "Connecticut", stateRate: 6.35, maxRate: 6.35, localTax: 0.0 },
  { state: "Delaware", stateRate: 0.0, maxRate: 0.0, localTax: 0.0 },
  { state: "District of Columbia", stateRate: 6.0, maxRate: 6.0, localTax: 0.0 },
  { state: "Florida", stateRate: 6.0, maxRate: 7.5, localTax: 1.5 },
  { state: "Georgia", stateRate: 4.0, maxRate: 8.0, localTax: 4.0 },
  { state: "Hawaii", stateRate: 4.166, maxRate: 4.712, localTax: 0.546 },
  { state: "Idaho", stateRate: 6.0, maxRate: 8.5, localTax: 2.5 },
  { state: "Illinois", stateRate: 6.25, maxRate: 10.25, localTax: 4.0 },
  { state: "Indiana", stateRate: 7.0, maxRate: 7.0, localTax: 0.0 },
  { state: "Iowa", stateRate: 6.0, maxRate: 7.0, localTax: 1.0 },
  { state: "Kansas", stateRate: 6.5, maxRate: 11.6, localTax: 5.1 },
  { state: "Kentucky", stateRate: 6.0, maxRate: 6.0, localTax: 0.0 },
  { state: "Louisiana", stateRate: 4.45, maxRate: 11.45, localTax: 7.0 },
  { state: "Maine", stateRate: 5.5, maxRate: 5.5, localTax: 0.0 },
  { state: "Maryland", stateRate: 6.0, maxRate: 6.0, localTax: 0.0 },
  { state: "Massachusetts", stateRate: 6.25, maxRate: 6.25, localTax: 0.0 },
  { state: "Michigan", stateRate: 6.0, maxRate: 6.0, localTax: 0.0 },
  { state: "Minnesota", stateRate: 6.875, maxRate: 7.875, localTax: 1.0 },
  { state: "Mississippi", stateRate: 7.0, maxRate: 7.25, localTax: 0.25 },
  { state: "Missouri", stateRate: 4.225, maxRate: 10.85, localTax: 6.625 },
  { state: "Montana", stateRate: 0.0, maxRate: 0.0, localTax: 0.0 },
  { state: "Nebraska", stateRate: 5.5, maxRate: 7.5, localTax: 2.0 },
  { state: "Nevada", stateRate: 6.85, maxRate: 8.375, localTax: 1.525 },
  { state: "New Hampshire", stateRate: 0.0, maxRate: 0.0, localTax: 0.0 },
  { state: "New Jersey", stateRate: 6.625, maxRate: 12.625, localTax: 6.0 },
  { state: "New Mexico", stateRate: 5.125, maxRate: 8.688, localTax: 3.563 },
  { state: "New York", stateRate: 4.0, maxRate: 8.875, localTax: 4.875 },
  { state: "North Carolina", stateRate: 4.75, maxRate: 7.5, localTax: 2.75 },
  { state: "North Dakota", stateRate: 5.0, maxRate: 8.0, localTax: 3.0 },
  { state: "Ohio", stateRate: 5.75, maxRate: 8.0, localTax: 2.25 },
  { state: "Oklahoma", stateRate: 4.5, maxRate: 11.0, localTax: 6.5 },
  { state: "Oregon", stateRate: 0.0, maxRate: 0.0, localTax: 0.0 },
  { state: "Pennsylvania", stateRate: 6.0, maxRate: 8.0, localTax: 2.0 },
  { state: "Rhode Island", stateRate: 7.0, maxRate: 7.0, localTax: 0.0 },
  { state: "South Carolina", stateRate: 6.0, maxRate: 9.0, localTax: 3.0 },
  { state: "South Dakota", stateRate: 4.0, maxRate: 6.0, localTax: 2.0 },
  { state: "Tennessee", stateRate: 7.0, maxRate: 9.75, localTax: 2.75 },
  { state: "Texas", stateRate: 6.25, maxRate: 8.25, localTax: 2.0 },
  { state: "Utah", stateRate: 6.1, maxRate: 8.35, localTax: 2.25 },
  { state: "Vermont", stateRate: 6.0, maxRate: 7.0, localTax: 1.0 },
  { state: "Virginia", stateRate: 5.3, maxRate: 7.0, localTax: 1.7 },
  { state: "Washington", stateRate: 6.5, maxRate: 10.6, localTax: 4.1 },
  { state: "West Virginia", stateRate: 6.0, maxRate: 7.0, localTax: 1.0 },
  { state: "Wisconsin", stateRate: 5.0, maxRate: 6.9, localTax: 1.9 },
  { state: "Wyoming", stateRate: 4.0, maxRate: 6.0, localTax: 2.0 }
]

export const stateSlug = (state: string) => state.toLowerCase().replace(/\s+/g, "-")
