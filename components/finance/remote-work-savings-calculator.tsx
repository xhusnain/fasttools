"use client"

import { useState } from "react"
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import {
  Calculator, Copy, Check, DollarSign, Car, Coffee, Shirt,
  Home, Clock, Leaf, TrendingUp, BarChart3, Zap, Baby,
  Fuel, ParkingCircle, TreePine, ArrowUpRight
} from "lucide-react"
import { LoadingSpinner } from "@/components/common/loading-spinner"
import type {
  RemoteWorkSavingsResult, CommuteSavings, MealSavings, TimeSaved,
  EnvironmentalImpact, SavingsCategory, YearProjection
} from "@/types/calculator-types/remote-work-savings.types"

export function RemoteWorkSavingsCalculator() {
  // Commute
  const [commuteDistance, setCommuteDistance] = useState("25")
  const [commuteMethod, setCommuteMethod] = useState<"car" | "transit">("car")
  const [gasPricePerGallon, setGasPricePerGallon] = useState("3.50")
  const [mpg, setMpg] = useState("28")
  const [transitMonthlyCost, setTransitMonthlyCost] = useState("150")
  const [parkingMonthly, setParkingMonthly] = useState("100")
  const [tollsMonthly, setTollsMonthly] = useState("0")
  const [commuteMinutesOneWay, setCommuteMinutesOneWay] = useState("35")

  // Meals
  const [lunchCostPerDay, setLunchCostPerDay] = useState("15")
  const [coffeeCostPerDay, setCoffeeCostPerDay] = useState("5")

  // Other
  const [wardrobeMonthly, setWardrobeMonthly] = useState("75")
  const [childcareSavingsMonthly, setChildcareSavingsMonthly] = useState("0")

  // Remote costs
  const [homeOfficeMonthly, setHomeOfficeMonthly] = useState("50")
  const [utilitiesExtraMonthly, setUtilitiesExtraMonthly] = useState("40")

  // Work
  const [workDaysPerWeek, setWorkDaysPerWeek] = useState("5")
  const [hourlyRate, setHourlyRate] = useState("35")

  const [result, setResult] = useState<RemoteWorkSavingsResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const calculateSavings = () => {
    setIsCalculating(true)

    setTimeout(() => {
      const distance = Number.parseFloat(commuteDistance) || 0 // one-way miles
      const gasPrice = Number.parseFloat(gasPricePerGallon) || 3.50
      const milesPerGallon = Number.parseFloat(mpg) || 28
      const transitCost = Number.parseFloat(transitMonthlyCost) || 0
      const parking = Number.parseFloat(parkingMonthly) || 0
      const tolls = Number.parseFloat(tollsMonthly) || 0
      const commuteMin = Number.parseFloat(commuteMinutesOneWay) || 0
      const lunchCost = Number.parseFloat(lunchCostPerDay) || 0
      const coffeeCost = Number.parseFloat(coffeeCostPerDay) || 0
      const wardrobe = Number.parseFloat(wardrobeMonthly) || 0
      const childcare = Number.parseFloat(childcareSavingsMonthly) || 0
      const homeOffice = Number.parseFloat(homeOfficeMonthly) || 0
      const utilities = Number.parseFloat(utilitiesExtraMonthly) || 0
      const daysPerWeek = Number.parseFloat(workDaysPerWeek) || 5
      const hrRate = Number.parseFloat(hourlyRate) || 0

      const workDaysPerYear = daysPerWeek * 50 // 50 working weeks
      const workDaysPerMonth = workDaysPerYear / 12

      // Commute savings
      const roundTripMiles = distance * 2
      const annualMiles = roundTripMiles * workDaysPerYear
      let fuelOrTransitAnnual: number
      let vehicleMaintenanceAnnual: number

      if (commuteMethod === "car") {
        const gallonsPerDay = roundTripMiles / milesPerGallon
        fuelOrTransitAnnual = gallonsPerDay * gasPrice * workDaysPerYear
        vehicleMaintenanceAnnual = annualMiles * 0.10 // IRS ~$0.10/mile for maintenance
      } else {
        fuelOrTransitAnnual = transitCost * 12
        vehicleMaintenanceAnnual = 0
      }

      const parkingAnnual = parking * 12
      const tollsAnnual = tolls * 12

      const commuteSavings: CommuteSavings = {
        fuelOrTransit: Math.round(fuelOrTransitAnnual),
        parking: Math.round(parkingAnnual),
        vehicleMaintenance: Math.round(vehicleMaintenanceAnnual),
        tolls: Math.round(tollsAnnual),
        total: Math.round(fuelOrTransitAnnual + parkingAnnual + vehicleMaintenanceAnnual + tollsAnnual)
      }

      // Meal savings
      const lunchAnnual = lunchCost * workDaysPerYear
      const coffeeAnnual = coffeeCost * workDaysPerYear
      const mealSavings: MealSavings = {
        lunches: Math.round(lunchAnnual),
        coffees: Math.round(coffeeAnnual),
        total: Math.round(lunchAnnual + coffeeAnnual)
      }

      // Other savings
      const wardrobeAnnual = wardrobe * 12
      const childcareAnnual = childcare * 12

      // Remote costs (negative)
      const homeOfficeCostAnnual = homeOffice * 12
      const utilitiesCostAnnual = utilities * 12

      // Total
      const grossSavings = commuteSavings.total + mealSavings.total + wardrobeAnnual + childcareAnnual
      const remoteCosts = homeOfficeCostAnnual + utilitiesCostAnnual
      const netSavingsAnnual = grossSavings - remoteCosts

      // Time saved
      const dailyCommuteMinutes = commuteMin * 2
      const weeklyHours = (dailyCommuteMinutes * daysPerWeek) / 60
      const annualHours = weeklyHours * 50
      const annualDays = annualHours / 24
      const valueOfTimeSaved = annualHours * hrRate

      const timeSaved: TimeSaved = {
        dailyCommuteMinutes: Math.round(dailyCommuteMinutes),
        weeklyHours: Number.parseFloat(weeklyHours.toFixed(1)),
        annualHours: Math.round(annualHours),
        annualDays: Number.parseFloat(annualDays.toFixed(1)),
        valueOfTimeSaved: Math.round(valueOfTimeSaved)
      }

      // Environmental impact
      const co2PerMile = 0.89 // lbs CO2 per mile (avg car)
      const annualCO2 = commuteMethod === "car" ? annualMiles * co2PerMile : 0
      const treesEquivalent = Math.round(annualCO2 / 48) // 1 tree absorbs ~48 lbs CO2/year

      const environmentalImpact: EnvironmentalImpact = {
        annualMilesSaved: Math.round(annualMiles),
        annualCO2SavedLbs: Math.round(annualCO2),
        treesEquivalent
      }

      // Category breakdown
      const categoryBreakdown: SavingsCategory[] = [
        { label: "Commute (fuel/transit)", annualAmount: commuteSavings.fuelOrTransit, monthlyAmount: Math.round(commuteSavings.fuelOrTransit / 12), type: "saving" as const, color: "bg-blue-500" },
        { label: "Parking", annualAmount: commuteSavings.parking, monthlyAmount: Math.round(commuteSavings.parking / 12), type: "saving" as const, color: "bg-blue-400" },
        { label: "Vehicle Maintenance", annualAmount: commuteSavings.vehicleMaintenance, monthlyAmount: Math.round(commuteSavings.vehicleMaintenance / 12), type: "saving" as const, color: "bg-blue-300" },
        { label: "Tolls", annualAmount: commuteSavings.tolls, monthlyAmount: Math.round(commuteSavings.tolls / 12), type: "saving" as const, color: "bg-blue-200" },
        { label: "Lunches", annualAmount: mealSavings.lunches, monthlyAmount: Math.round(mealSavings.lunches / 12), type: "saving" as const, color: "bg-green-500" },
        { label: "Coffee", annualAmount: mealSavings.coffees, monthlyAmount: Math.round(mealSavings.coffees / 12), type: "saving" as const, color: "bg-green-400" },
        { label: "Work Wardrobe", annualAmount: Math.round(wardrobeAnnual), monthlyAmount: Math.round(wardrobe), type: "saving" as const, color: "bg-purple-500" },
        { label: "Childcare Flexibility", annualAmount: Math.round(childcareAnnual), monthlyAmount: Math.round(childcare), type: "saving" as const, color: "bg-yellow-500" },
        { label: "Home Office Costs", annualAmount: -Math.round(homeOfficeCostAnnual), monthlyAmount: -Math.round(homeOffice), type: "cost" as const, color: "bg-red-500" },
        { label: "Extra Utilities", annualAmount: -Math.round(utilitiesCostAnnual), monthlyAmount: -Math.round(utilities), type: "cost" as const, color: "bg-red-400" },
      ].filter(c => c.annualAmount !== 0)

      // 5-year projection (3% annual inflation on savings)
      const fiveYearProjection: YearProjection[] = []
      let cumulative = 0
      for (let y = 1; y <= 5; y++) {
        const inflationFactor = Math.pow(1.03, y - 1)
        const yearSavings = Math.round(netSavingsAnnual * inflationFactor)
        cumulative += yearSavings
        fiveYearProjection.push({
          year: y,
          savings: yearSavings,
          cumulativeSavings: cumulative,
          inflationAdjusted: Math.round(netSavingsAnnual * inflationFactor)
        })
      }

      // Equivalent hourly raise
      const equivalentHourlyRaise = (workDaysPerYear * 8) > 0 ? netSavingsAnnual / (workDaysPerYear * 8) : 0

      setResult({
        totalAnnualSavings: Math.round(grossSavings),
        totalMonthlySavings: Math.round(grossSavings / 12),
        totalDailySavings: Math.round(grossSavings / workDaysPerYear),
        commuteSavings,
        mealSavings,
        wardrobeSavings: Math.round(wardrobeAnnual),
        childcareSavings: Math.round(childcareAnnual),
        homeOfficeCost: Math.round(homeOfficeCostAnnual),
        utilitiesCost: Math.round(utilitiesCostAnnual),
        netSavings: Math.round(netSavingsAnnual),
        timeSaved,
        environmentalImpact,
        categoryBreakdown,
        fiveYearProjection,
        equivalentHourlyRaise: Number.parseFloat(equivalentHourlyRaise.toFixed(2))
      })
      setIsCalculating(false)
    }, 600)
  }

  const copyResult = () => {
    if (!result) return
    const lines = [
      `Remote Work Savings Analysis`,
      `============================`,
      `Net Annual Savings: $${result.netSavings.toLocaleString()}`,
      `Monthly: $${Math.round(result.netSavings / 12).toLocaleString()} | Daily: $${result.totalDailySavings}`,
      ``,
      `Commute: $${result.commuteSavings.total.toLocaleString()}/yr`,
      `Meals: $${result.mealSavings.total.toLocaleString()}/yr`,
      `Wardrobe: $${result.wardrobeSavings.toLocaleString()}/yr`,
      result.childcareSavings > 0 ? `Childcare: $${result.childcareSavings.toLocaleString()}/yr` : "",
      `Remote Costs: -$${(result.homeOfficeCost + result.utilitiesCost).toLocaleString()}/yr`,
      ``,
      `Time Saved: ${result.timeSaved.annualHours} hours/year (${result.timeSaved.annualDays} days)`,
      `Equivalent Hourly Raise: $${result.equivalentHourlyRaise}/hr`,
      result.environmentalImpact.annualCO2SavedLbs > 0 ? `CO2 Saved: ${result.environmentalImpact.annualCO2SavedLbs.toLocaleString()} lbs/year` : "",
      ``,
      `5-Year Total: $${result.fiveYearProjection[4]?.cumulativeSavings.toLocaleString()}`,
      ``,
      `Generated by FastTools Remote Work Savings Calculator`
    ].filter(Boolean)
    void navigator.clipboard.writeText(lines.join("\n"))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount)

  return (
    <div className="space-y-8">
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader>
          <GCardTitle className="flex items-center gap-3 text-2xl text-foreground">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Home className="h-6 w-6 text-foreground" />
            </div>
            Remote Work Savings Calculator
          </GCardTitle>
          <GCardDescription className="text-base text-muted-foreground">
            Calculate how much you save (or could save) by working remotely vs commuting to an office
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-6">
          {/* Commute */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Car className="h-4 w-4" /> Commute
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <button onClick={() => setCommuteMethod("car")} className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${commuteMethod === "car" ? "border-primary bg-primary/10 text-foreground font-medium" : "border-border hover:border-primary/50 bg-card text-muted-foreground"}`}>
                Drive (Car)
              </button>
              <button onClick={() => setCommuteMethod("transit")} className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${commuteMethod === "transit" ? "border-primary bg-primary/10 text-foreground font-medium" : "border-border hover:border-primary/50 bg-card text-muted-foreground"}`}>
                Public Transit
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">One-Way Distance (miles)</GLabel>
                <GInput type="number" value={commuteDistance} onChange={(e) => setCommuteDistance(e.target.value)} placeholder="25" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Commute Time (min, one-way)</GLabel>
                <GInput type="number" value={commuteMinutesOneWay} onChange={(e) => setCommuteMinutesOneWay(e.target.value)} placeholder="35" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              </div>
              {commuteMethod === "car" ? (
                <>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Gas Price ($/gal)</GLabel>
                    <GInput type="number" step="0.01" value={gasPricePerGallon} onChange={(e) => setGasPricePerGallon(e.target.value)} placeholder="3.50" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Miles Per Gallon</GLabel>
                    <GInput type="number" value={mpg} onChange={(e) => setMpg(e.target.value)} placeholder="28" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Parking ($/month)</GLabel>
                    <GInput type="number" value={parkingMonthly} onChange={(e) => setParkingMonthly(e.target.value)} placeholder="100" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <GLabel className="text-sm font-semibold text-heading-accent">Tolls ($/month)</GLabel>
                    <GInput type="number" value={tollsMonthly} onChange={(e) => setTollsMonthly(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <GLabel className="text-sm font-semibold text-heading-accent">Transit Pass ($/month)</GLabel>
                  <GInput type="number" value={transitMonthlyCost} onChange={(e) => setTransitMonthlyCost(e.target.value)} placeholder="150" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                </div>
              )}
            </div>
          </div>

          {/* Meals */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-heading-accent flex items-center gap-2">
              <Coffee className="h-4 w-4" /> Daily Office Spending
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Lunch Cost ($/day)</GLabel>
                <GInput type="number" value={lunchCostPerDay} onChange={(e) => setLunchCostPerDay(e.target.value)} placeholder="15" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              </div>
              <div className="space-y-2">
                <GLabel className="text-sm font-semibold text-heading-accent">Coffee/Snacks ($/day)</GLabel>
                <GInput type="number" value={coffeeCostPerDay} onChange={(e) => setCoffeeCostPerDay(e.target.value)} placeholder="5" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
              </div>
            </div>
          </div>

          {/* Advanced Toggle */}
          <button onClick={() => setShowAdvanced(!showAdvanced)} className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5">
            {showAdvanced ? "Hide" : "Show"} Wardrobe, Childcare & Remote Costs
            <svg className={`h-4 w-4 transition-transform ${showAdvanced ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showAdvanced && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <GLabel className="text-sm font-semibold text-heading-accent flex items-center gap-1.5"><Shirt className="h-3.5 w-3.5" /> Work Wardrobe ($/mo)</GLabel>
                  <GInput type="number" value={wardrobeMonthly} onChange={(e) => setWardrobeMonthly(e.target.value)} placeholder="75" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <GLabel className="text-sm font-semibold text-heading-accent flex items-center gap-1.5"><Baby className="h-3.5 w-3.5" /> Childcare Savings ($/mo)</GLabel>
                  <GInput type="number" value={childcareSavingsMonthly} onChange={(e) => setChildcareSavingsMonthly(e.target.value)} placeholder="0" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  <div className="text-xs text-muted-foreground">Reduced before/after-school care, etc.</div>
                </div>
                <div className="space-y-2">
                  <GLabel className="text-sm font-semibold text-heading-accent">Work Days/Week</GLabel>
                  <GInput type="number" value={workDaysPerWeek} onChange={(e) => setWorkDaysPerWeek(e.target.value)} placeholder="5" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <GLabel className="text-sm font-semibold text-heading-accent flex items-center gap-1.5"><Home className="h-3.5 w-3.5" /> Home Office Costs ($/mo)</GLabel>
                  <GInput type="number" value={homeOfficeMonthly} onChange={(e) => setHomeOfficeMonthly(e.target.value)} placeholder="50" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  <div className="text-xs text-muted-foreground">Internet upgrade, supplies, equipment</div>
                </div>
                <div className="space-y-2">
                  <GLabel className="text-sm font-semibold text-heading-accent">Extra Utilities ($/mo)</GLabel>
                  <GInput type="number" value={utilitiesExtraMonthly} onChange={(e) => setUtilitiesExtraMonthly(e.target.value)} placeholder="40" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  <div className="text-xs text-muted-foreground">Electricity, heating/cooling, water</div>
                </div>
                <div className="space-y-2">
                  <GLabel className="text-sm font-semibold text-heading-accent">Your Hourly Rate ($)</GLabel>
                  <GInput type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} placeholder="35" className="h-10 sm:h-12 text-sm sm:text-base bg-card border-border text-foreground focus:border-primary focus:ring-blue-500" />
                  <div className="text-xs text-muted-foreground">For valuing time saved</div>
                </div>
              </div>
            </>
          )}

          <GButton onClick={calculateSavings} disabled={isCalculating}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white">
            {isCalculating ? <><LoadingSpinner className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculating...</> : <><Calculator className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Calculate My Savings</>}
          </GButton>
        </GCardContent>
      </GCard>

      {/* Results */}
      {result && !isCalculating && (
        <div className="space-y-4">
          {/* Net Savings */}
          <GCard className="shadow-lg border-green-500/20 animate-fade-in-up bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><DollarSign className="h-4 w-4 text-foreground" /></div>
                Your Remote Work Savings
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-4">
              <div className="text-center p-6 rounded-xl bg-card border border-green-500/20">
                <div className="text-sm text-muted-foreground mb-1">Net Annual Savings</div>
                <div className="text-4xl sm:text-5xl font-bold text-green-500">{formatCurrency(result.netSavings)}</div>
                <div className="text-sm text-muted-foreground mt-2">
                  {formatCurrency(Math.round(result.netSavings / 12))}/month · {formatCurrency(result.totalDailySavings)}/day
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-lg bg-card border border-blue-700 text-center">
                  <Car className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{formatCurrency(result.commuteSavings.total)}</div>
                  <div className="text-xs text-muted-foreground">Commute/yr</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-green-700 text-center">
                  <Coffee className="h-4 w-4 text-green-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{formatCurrency(result.mealSavings.total)}</div>
                  <div className="text-xs text-muted-foreground">Meals/yr</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-purple-700 text-center">
                  <ArrowUpRight className="h-4 w-4 text-purple-500 mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">${result.equivalentHourlyRaise}</div>
                  <div className="text-xs text-muted-foreground">Equiv. Hourly Raise</div>
                </div>
                <div className="p-3 rounded-lg bg-card border border-primary text-center">
                  <TrendingUp className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{formatCurrency(result.fiveYearProjection[4]?.cumulativeSavings || 0)}</div>
                  <div className="text-xs text-muted-foreground">5-Year Total</div>
                </div>
              </div>

              {/* Time Saved */}
              <div className="p-4 rounded-lg bg-card border border-border">
                <div className="text-sm font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> Time Reclaimed
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-foreground">{result.timeSaved.dailyCommuteMinutes}min</div>
                    <div className="text-xs text-muted-foreground">Saved/day</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-foreground">{result.timeSaved.weeklyHours}hrs</div>
                    <div className="text-xs text-muted-foreground">Saved/week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-foreground">{result.timeSaved.annualHours}hrs</div>
                    <div className="text-xs text-muted-foreground">Saved/year</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-foreground">{formatCurrency(result.timeSaved.valueOfTimeSaved)}</div>
                    <div className="text-xs text-muted-foreground">Time value/yr</div>
                  </div>
                </div>
              </div>

              {/* Environmental Impact */}
              {result.environmentalImpact.annualCO2SavedLbs > 0 && (
                <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="text-sm font-semibold text-green-500 mb-2 flex items-center gap-1.5">
                    <Leaf className="h-4 w-4" /> Environmental Impact
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{result.environmentalImpact.annualMilesSaved.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">Miles not driven</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{result.environmentalImpact.annualCO2SavedLbs.toLocaleString()} lbs</div>
                      <div className="text-xs text-muted-foreground">CO2 saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground flex items-center justify-center gap-1"><TreePine className="h-4 w-4 text-green-500" />{result.environmentalImpact.treesEquivalent}</div>
                      <div className="text-xs text-muted-foreground">Trees equivalent</div>
                    </div>
                  </div>
                </div>
              )}

              <GButton onClick={copyResult} className="w-full h-10 text-sm font-medium transition-all duration-300 border border-green-700 hover:bg-secondary text-heading-accent bg-card">
                {copied ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</> : <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Results</>}
              </GButton>
            </GCardContent>
          </GCard>

          {/* Category Breakdown */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><BarChart3 className="h-4 w-4 text-foreground" /></div>
                Savings Breakdown
              </GCardTitle>
            </GCardHeader>
            <GCardContent className="space-y-2">
              {result.categoryBreakdown.map(cat => {
                const maxAmount = Math.max(...result.categoryBreakdown.map(c => Math.abs(c.annualAmount)))
                const pct = maxAmount > 0 ? (Math.abs(cat.annualAmount) / maxAmount) * 100 : 0
                return (
                  <div key={cat.label} className="flex items-center gap-2 text-xs">
                    <span className="w-36 text-foreground font-medium">{cat.label}</span>
                    <div className="flex-1 bg-border rounded-full h-3">
                      <div className={`${cat.color} h-3 rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className={`w-20 text-right font-semibold ${cat.type === "cost" ? "text-red-400" : "text-green-500"}`}>
                      {cat.type === "cost" ? "-" : "+"}{formatCurrency(Math.abs(cat.annualAmount))}
                    </span>
                  </div>
                )
              })}
            </GCardContent>
          </GCard>

          {/* 5-Year Projection */}
          <GCard className="shadow-lg border-border bg-card">
            <GCardHeader className="pb-3">
              <GCardTitle className="flex items-center gap-2 text-lg text-foreground">
                <div className="p-1.5 bg-primary/10 rounded-lg"><TrendingUp className="h-4 w-4 text-foreground" /></div>
                5-Year Savings Projection (3% inflation)
              </GCardTitle>
            </GCardHeader>
            <GCardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 px-2 font-semibold text-foreground">Year</th>
                      <th className="text-right py-2 px-2 font-semibold text-foreground">Annual Savings</th>
                      <th className="text-right py-2 px-2 font-semibold text-heading-accent">Cumulative</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.fiveYearProjection.map(y => (
                      <tr key={y.year} className="border-b border-border">
                        <td className="py-2 px-2 font-medium text-foreground">Year {y.year}</td>
                        <td className="py-2 px-2 text-right text-foreground">{formatCurrency(y.savings)}</td>
                        <td className="py-2 px-2 text-right text-heading-accent font-semibold">{formatCurrency(y.cumulativeSavings)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GCardContent>
          </GCard>
        </div>
      )}
    </div>
  )
}
