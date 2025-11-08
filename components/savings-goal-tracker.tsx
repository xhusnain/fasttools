"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Copy, Target, Plus, Trash2, Calculator, TrendingUp, DollarSign, Percent, Calendar, PieChart, BarChart3, Wallet, CreditCard, Home, Car, Plane, ShoppingCart, GraduationCap, Heart, Briefcase, Shield, Zap } from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Progress } from "@/components/ui/progress"

interface ExpenseItem {
  id: string
  category: string
  name: string
  amount: number
  frequency: 'monthly' | 'yearly' | 'one-time'
  priority: 'high' | 'medium' | 'low'
  isTaxDeductible: boolean
}

interface GoalItem {
  id: string
  name: string
  targetAmount: number
  currentAmount: number
  targetDate: string
  priority: 'high' | 'medium' | 'low'
  category: string
}

export function SavingsGoalTracker() {
  const [loading, setLoading] = useState(false)
  const [monthlyIncome, setMonthlyIncome] = useState("")
  const [taxRate, setTaxRate] = useState("")
  const [inflationRate, setInflationRate] = useState("2.5")
  const [interestRate, setInterestRate] = useState("4.0")
  const [openExpenseId, setOpenExpenseId] = useState<string | null>(null)
  const [openGoalId, setOpenGoalId] = useState<string | null>(null)
  
  const [expenses, setExpenses] = useState<ExpenseItem[]>([
    { id: '1', category: 'Housing', name: 'Rent/Mortgage', amount: 0, frequency: 'monthly', priority: 'high', isTaxDeductible: false },
    { id: '2', category: 'Food', name: 'Groceries & Dining', amount: 0, frequency: 'monthly', priority: 'high', isTaxDeductible: false },
    { id: '3', category: 'Transportation', name: 'Car Payment & Gas', amount: 0, frequency: 'monthly', priority: 'high', isTaxDeductible: false },
    { id: '4', category: 'Utilities', name: 'Electricity, Water, Internet', amount: 0, frequency: 'monthly', priority: 'high', isTaxDeductible: false },
    { id: '5', category: 'Insurance', name: 'Health, Auto, Home', amount: 0, frequency: 'monthly', priority: 'high', isTaxDeductible: false },
  ])
  
  const [goals, setGoals] = useState<GoalItem[]>([
    { id: '1', name: 'Emergency Fund', targetAmount: 0, currentAmount: 0, targetDate: '', priority: 'high', category: 'Emergency' },
    { id: '2', name: 'Vacation Fund', targetAmount: 0, currentAmount: 0, targetDate: '', priority: 'medium', category: 'Travel' },
    { id: '3', name: 'Car Purchase', targetAmount: 0, currentAmount: 0, targetDate: '', priority: 'medium', category: 'Transportation' },
    { id: '4', name: 'Home Down Payment', targetAmount: 0, currentAmount: 0, targetDate: '', priority: 'high', category: 'Housing' },
  ])
  
  const [result, setResult] = useState<{
    monthlyExpenses: number
    monthlySavings: number
    annualSavings: number
    totalGoals: number
    yearsToComplete: number
    monthlyGoalContribution: number
    taxSavings: number
    inflationAdjustedGoals: number
    priorityBreakdown: { [key: string]: number }
    categoryBreakdown: { [key: string]: number }
    recommendations: string[]
  } | null>(null)

  const addExpense = () => {
    // Close any open goal form
    setOpenGoalId(null)
    
    const newExpense: ExpenseItem = {
      id: Date.now().toString(),
      category: 'Other',
      name: '',
      amount: 0,
      frequency: 'monthly',
      priority: 'medium',
      isTaxDeductible: false
    }
    setExpenses([...expenses, newExpense])
    setOpenExpenseId(newExpense.id)
  }

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
    if (openExpenseId === id) {
      setOpenExpenseId(null)
    }
  }

  const updateExpense = (id: string, field: keyof ExpenseItem, value: any) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, [field]: value } : expense
    ))
  }

  const addGoal = () => {
    // Close any open expense form
    setOpenExpenseId(null)
    
    const newGoal: GoalItem = {
      id: Date.now().toString(),
      name: '',
      targetAmount: 0,
      currentAmount: 0,
      targetDate: '',
      priority: 'medium',
      category: 'Other'
    }
    setGoals([...goals, newGoal])
    setOpenGoalId(newGoal.id)
  }

  const removeGoal = (id: string) => {
    setGoals(goals.filter(goal => goal.id !== id))
    if (openGoalId === id) {
      setOpenGoalId(null)
    }
  }

  const updateGoal = (id: string, field: keyof GoalItem, value: any) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, [field]: value } : goal
    ))
  }

  const calculateFinancialPlan = () => {
    setLoading(true)
    setTimeout(() => {
      const income = Number.parseFloat(monthlyIncome) || 0
      const tax = Number.parseFloat(taxRate) || 0
      const inflation = Number.parseFloat(inflationRate) || 2.5
      const interest = Number.parseFloat(interestRate) || 4.0

      // Calculate monthly expenses
      const monthlyExpenses = expenses.reduce((total, expense) => {
        if (expense.frequency === 'monthly') {
          return total + expense.amount
        } else if (expense.frequency === 'yearly') {
          return total + (expense.amount / 12)
        }
        return total
      }, 0)

      // Calculate tax savings from deductible expenses
      const taxSavings = expenses
        .filter(expense => expense.isTaxDeductible)
        .reduce((total, expense) => {
          const annualAmount = expense.frequency === 'monthly' ? expense.amount * 12 : expense.amount
          return total + (annualAmount * (tax / 100))
        }, 0) / 12

      // Calculate total goals
      const totalGoals = goals.reduce((total, goal) => total + (goal.targetAmount - goal.currentAmount), 0)

      // Calculate inflation-adjusted goals
      const inflationAdjustedGoals = goals.reduce((total, goal) => {
        const remainingAmount = goal.targetAmount - goal.currentAmount
        const yearsToGoal = goal.targetDate ? 
          (new Date(goal.targetDate).getFullYear() - new Date().getFullYear()) : 5
        const adjustedAmount = remainingAmount * Math.pow(1 + (inflation / 100), yearsToGoal)
        return total + adjustedAmount
      }, 0)

      // Calculate monthly savings after expenses
      const monthlySavings = income - monthlyExpenses + taxSavings
      const annualSavings = monthlySavings * 12

      // Calculate years to complete all goals
      const yearsToComplete = totalGoals > 0 ? totalGoals / annualSavings : 0
      const monthlyGoalContribution = totalGoals > 0 ? totalGoals / (yearsToComplete * 12) : 0

      // Priority breakdown
      const priorityBreakdown = goals.reduce((acc, goal) => {
        const amount = goal.targetAmount - goal.currentAmount
        acc[goal.priority] = (acc[goal.priority] || 0) + amount
        return acc
      }, {} as { [key: string]: number })

      // Category breakdown
      const categoryBreakdown = goals.reduce((acc, goal) => {
        const amount = goal.targetAmount - goal.currentAmount
        acc[goal.category] = (acc[goal.category] || 0) + amount
        return acc
      }, {} as { [key: string]: number })

      // Generate recommendations
      const recommendations = []
      if (monthlySavings < 0) {
        recommendations.push("Your expenses exceed your income. Consider reducing expenses or increasing income.")
      }
      if (yearsToComplete > 10) {
        recommendations.push("Consider prioritizing high-priority goals or increasing your savings rate.")
      }
      if (taxSavings > 0) {
        recommendations.push(`You can save $${taxSavings.toFixed(2)}/month through tax deductions.`)
      }
      if (inflation > 2) {
        recommendations.push(`Consider inflation (${inflation}%) when planning long-term goals.`)
      }
      if (monthlySavings > monthlyGoalContribution) {
        recommendations.push("You have extra savings capacity. Consider additional investment opportunities.")
      }

      setResult({
        monthlyExpenses,
        monthlySavings,
        annualSavings,
        totalGoals,
        yearsToComplete,
        monthlyGoalContribution,
        taxSavings,
        inflationAdjustedGoals,
        priorityBreakdown,
        categoryBreakdown,
        recommendations
      })
      setLoading(false)
    }, 1000)
  }

  const copyResult = () => {
    if (result) {
      const text = `Financial Goal Planner Results:
Monthly Income: $${monthlyIncome}
Monthly Expenses: $${result.monthlyExpenses.toFixed(2)}
Monthly Savings: $${result.monthlySavings.toFixed(2)}
Annual Savings: $${result.annualSavings.toFixed(2)}
Total Goals: $${result.totalGoals.toFixed(2)}
Years to Complete: ${result.yearsToComplete.toFixed(1)}
Monthly Goal Contribution: $${result.monthlyGoalContribution.toFixed(2)}
Tax Savings: $${result.taxSavings.toFixed(2)}/month
Inflation Adjusted Goals: $${result.inflationAdjustedGoals.toFixed(2)}

Recommendations:
${result.recommendations.map(rec => `• ${rec}`).join('\n')}`
      navigator.clipboard.writeText(text)
    }
  }

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: any } = {
      'Housing': Home,
      'Transportation': Car,
      'Travel': Plane,
      'Shopping': ShoppingCart,
      'Education': GraduationCap,
      'Wedding': Heart,
      'Business': Briefcase,
      'Emergency': Shield,
      'Other': Wallet
    }
    const IconComponent = icons[category] || Wallet
    return <IconComponent className="h-4 w-4" />
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-foreground'
      case 'medium': return 'text-foreground'
      case 'low': return 'text-heading-accent'
      default: return 'text-muted-foreground'
    }
  }

  return (
    <Card className="border border-border shadow-lg">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          Advanced Financial Goal Planner
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Comprehensive financial planning with expenses, taxes, inflation, and multiple goal tracking
          </CardDescription>
        </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Inputs */}
          <div className="space-y-4">
            {/* Income & Tax Configuration */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                Income & Tax Configuration
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
                  <Label className="text-xs font-medium text-foreground">Monthly Income ($)</Label>
            <Input
              type="number"
                    placeholder="5000"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
                  <Label className="text-xs font-medium text-foreground">Tax Rate (%)</Label>
            <Input
              type="number"
                    placeholder="25"
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-foreground">Inflation Rate (%)</Label>
                  <Input
                    type="number"
                    placeholder="2.5"
                    value={inflationRate}
                    onChange={(e) => setInflationRate(e.target.value)}
                    className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-medium text-foreground">Interest Rate (%)</Label>
                  <Input
                    type="number"
                    placeholder="4.0"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="h-9 text-sm border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                </div>
              </div>

            {/* Monthly Expenses */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                  Monthly Expenses
                </h3>
                <Button onClick={addExpense} size="sm" className="h-6 text-xs">
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto">
                {expenses.map((expense) => (
                  <div key={expense.id} className="p-2 rounded-lg bg-card border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(expense.category)}
                        <span className="text-xs font-medium text-foreground">{expense.category}</span>
                        {expense.name && <span className="text-xs text-muted-foreground">- {expense.name}</span>}
                        {expense.amount > 0 && <span className="text-xs text-heading-accent">${expense.amount}</span>}
                      </div>
                      <div className="flex items-center gap-1">
                        {openExpenseId !== expense.id && (
                          <Button
                            onClick={() => setOpenExpenseId(expense.id)}
                            variant="ghost"
                            size="sm"
                            className="h-5 w-5 p-0 text-foreground hover:text-foreground"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        )}
                        <Button
                          onClick={() => removeExpense(expense.id)}
                          variant="ghost"
                          size="sm"
                          className="h-5 w-5 p-0 text-foreground hover:text-foreground"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {openExpenseId === expense.id && (
                      <>
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            placeholder="Expense name"
                            value={expense.name}
                            onChange={(e) => updateExpense(expense.id, 'name', e.target.value)}
                            className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                          />
                          <Input
                            type="number"
                            placeholder="Amount"
                            value={expense.amount || ''}
                            onChange={(e) => updateExpense(expense.id, 'amount', Number.parseFloat(e.target.value) || 0)}
                            className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-1">
                          <Select value={expense.category} onValueChange={(value) => updateExpense(expense.id, 'category', value)}>
                            <SelectTrigger className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Housing">Housing</SelectItem>
                              <SelectItem value="Food">Food</SelectItem>
                              <SelectItem value="Transportation">Transportation</SelectItem>
                              <SelectItem value="Utilities">Utilities</SelectItem>
                              <SelectItem value="Insurance">Insurance</SelectItem>
                              <SelectItem value="Healthcare">Healthcare</SelectItem>
                              <SelectItem value="Entertainment">Entertainment</SelectItem>
                              <SelectItem value="Shopping">Shopping</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>

                          <Select value={expense.frequency} onValueChange={(value) => updateExpense(expense.id, 'frequency', value)}>
                            <SelectTrigger className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="monthly">Monthly</SelectItem>
                              <SelectItem value="yearly">Yearly</SelectItem>
                              <SelectItem value="one-time">One-time</SelectItem>
                            </SelectContent>
                          </Select>

                          <Select value={expense.priority} onValueChange={(value) => updateExpense(expense.id, 'priority', value)}>
                            <SelectTrigger className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={expense.isTaxDeductible}
                            onChange={(e) => updateExpense(expense.id, 'isTaxDeductible', e.target.checked)}
                            className="rounded border-2 border-orange-300"
                          />
                          <Label className="text-xs text-muted-foreground">Tax Deductible</Label>
                        </div>

                        <div className="flex justify-end">
                          <Button
                            onClick={() => setOpenExpenseId(null)}
                            variant="outline"
                            size="sm"
                            className="h-6 text-xs"
                          >
                            Done
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Goals */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <Target className="h-4 w-4 text-primary" />
                  Financial Goals
                </h3>
                <Button onClick={addGoal} size="sm" className="h-6 text-xs">
                  <Plus className="h-3 w-3 mr-1" />
                  Add
                </Button>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto">
                {goals.map((goal) => (
                  <div key={goal.id} className="p-2 rounded-lg bg-card border border-border space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(goal.category)}
                        <span className={`text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                          {goal.priority.toUpperCase()}
                        </span>
                        {goal.name && <span className="text-xs text-muted-foreground">- {goal.name}</span>}
                        {goal.targetAmount > 0 && <span className="text-xs text-heading-accent">${goal.targetAmount}</span>}
                      </div>
                      <div className="flex items-center gap-1">
                        {openGoalId !== goal.id && (
                          <Button
                            onClick={() => setOpenGoalId(goal.id)}
                            variant="ghost"
                            size="sm"
                            className="h-5 w-5 p-0 text-foreground hover:text-foreground"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        )}
                        <Button
                          onClick={() => removeGoal(goal.id)}
                          variant="ghost"
                          size="sm"
                          className="h-5 w-5 p-0 text-foreground hover:text-foreground"
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {openGoalId === goal.id && (
                      <>
                        <div className="grid grid-cols-2 gap-2">
                          <Input
                            placeholder="Goal name"
                            value={goal.name}
                            onChange={(e) => updateGoal(goal.id, 'name', e.target.value)}
                            className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                          />
                          <Input
                            type="date"
                            value={goal.targetDate}
                            onChange={(e) => updateGoal(goal.id, 'targetDate', e.target.value)}
                            className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground"
                          />
                        </div>

                        <div className="grid grid-cols-3 gap-1">
                          <Input
                            type="number"
                            placeholder="Target Amount"
                            value={goal.targetAmount || ''}
                            onChange={(e) => updateGoal(goal.id, 'targetAmount', Number.parseFloat(e.target.value) || 0)}
                            className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                          />
                          <Input
                            type="number"
                            placeholder="Current Amount"
                            value={goal.currentAmount || ''}
                            onChange={(e) => updateGoal(goal.id, 'currentAmount', Number.parseFloat(e.target.value) || 0)}
                            className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground placeholder:text-muted-foreground"
                          />
                          <Select value={goal.category} onValueChange={(value) => updateGoal(goal.id, 'category', value)}>
                            <SelectTrigger className="h-6 text-xs border-2 border-orange-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 bg-background text-foreground">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Emergency">Emergency</SelectItem>
                              <SelectItem value="Housing">Housing</SelectItem>
                              <SelectItem value="Transportation">Transportation</SelectItem>
                              <SelectItem value="Travel">Travel</SelectItem>
                              <SelectItem value="Education">Education</SelectItem>
                              <SelectItem value="Wedding">Wedding</SelectItem>
                              <SelectItem value="Business">Business</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex justify-end">
                          <Button
                            onClick={() => setOpenGoalId(null)}
                            variant="outline"
                            size="sm"
                            className="h-6 text-xs"
                          >
                            Done
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={calculateFinancialPlan}
              disabled={loading || !monthlyIncome}
              className="w-full h-8 text-xs font-medium shadow-sm hover:shadow-md transition-all"
            >
              {loading ? (
                <>
                  <LoadingSpinner className="mr-2 h-3 w-3" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="mr-2 h-3 w-3" />
                  Calculate Financial Plan
                </>
              )}
            </Button>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-3">
            {result ? (
              <>
                {/* Results Header */}
                <div className="text-center mb-3">
                  <h3 className="text-sm font-semibold text-foreground mb-1">Financial Plan Results</h3>
                  <p className="text-xs text-muted-foreground">Your comprehensive financial analysis</p>
                </div>

                {/* Key Metrics */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-card border border-border">
                    <span className="text-xs text-muted-foreground">Monthly Income:</span>
                    <span className="text-xs font-bold text-heading-accent">${monthlyIncome}</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-card border border-border">
                    <span className="text-xs text-muted-foreground">Monthly Expenses:</span>
                    <span className="text-xs font-bold text-foreground">${result.monthlyExpenses.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-card border border-border">
                    <span className="text-xs text-muted-foreground">Monthly Savings:</span>
                    <span className="text-xs font-bold text-foreground">${result.monthlySavings.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-primary/5 border border-primary/20">
                    <span className="text-xs text-muted-foreground">Annual Savings:</span>
                    <span className="text-sm font-bold text-primary">${result.annualSavings.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-card border border-border">
                    <span className="text-xs text-muted-foreground">Total Goals:</span>
                    <span className="text-xs font-bold text-foreground">${result.totalGoals.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                    <span className="text-xs text-muted-foreground">Years to Complete:</span>
                    <span className="text-sm font-bold text-heading-accent">{result.yearsToComplete.toFixed(1)}</span>
                  </div>

                  <div className="flex justify-between items-center p-2 rounded-lg bg-card border border-border">
                    <span className="text-xs text-muted-foreground">Tax Savings/Month:</span>
                    <span className="text-xs font-bold text-foreground">${result.taxSavings.toFixed(2)}</span>
                  </div>
                </div>

                {/* Recommendations */}
                {result.recommendations.length > 0 && (
                  <div className="p-2 rounded-lg bg-accent/5 border border-accent/20">
                    <h4 className="text-xs font-semibold text-foreground mb-1 flex items-center gap-1">
                      <Zap className="h-3 w-3 text-primary" />
                      Recommendations
                    </h4>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="text-xs text-muted-foreground">• {rec}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Copy Button */}
                <Button
                  onClick={copyResult}
                  variant="outline"
                  className="w-full h-7 text-xs font-medium hover:bg-accent transition-all bg-transparent"
                >
                  <Copy className="mr-2 h-3 w-3" />
                  Copy Financial Plan
                </Button>
              </>
            ) : (
              <div className="flex items-center justify-center h-48">
                <div className="text-center">
                  <Calculator className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Enter your financial details</p>
                  <p className="text-xs text-muted-foreground mt-1">to see your comprehensive plan</p>
                </div>
              </div>
            )}
          </div>
        </div>
          </CardContent>
        </Card>
  )
}
