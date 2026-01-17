export interface ScheduleItem {
    year: number
    date: string
    interest: number
    principal: number
    endingBalance: number
}

export interface MonthlyScheduleItem {
    month: number
    interest: number
    principal: number
    balance: number
    endingBalance: number // Payment calculator uses endingBalance, Mortgage uses balance. Let's standardize or support both.
}

export const calculateMonthlyPayment = (principal: number, monthlyRate: number, totalMonths: number): number => {
    if (monthlyRate === 0) return principal / totalMonths;

    return principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
}

export const generateAmortizationSchedule = (
    principal: number,
    monthlyRate: number,
    totalMonths: number,
    monthlyPayment: number,
    startDate?: string
): ScheduleItem[] => {
    const schedule: ScheduleItem[] = []
    let balance = principal
    const start = new Date(startDate || new Date())

    for (let year = 1; year <= Math.ceil(totalMonths / 12); year++) {
        let yearInterest = 0
        let yearPrincipal = 0
        const monthsInYear = Math.min(12, totalMonths - (year - 1) * 12)

        for (let month = 1; month <= monthsInYear; month++) {
            const interestPayment = balance * monthlyRate
            const principalPayment = monthlyPayment - interestPayment
            balance -= principalPayment
            yearInterest += interestPayment
            yearPrincipal += principalPayment
        }

        const yearStart = new Date(start)
        yearStart.setFullYear(yearStart.getFullYear() + year - 1)
        const yearEnd = new Date(yearStart)
        yearEnd.setFullYear(yearEnd.getFullYear() + 1)

        const item: ScheduleItem = {
            year: year,
            date: `Year ${year}`,
            interest: yearInterest,
            principal: yearPrincipal,
            endingBalance: Math.max(0, balance)
        }

        if (startDate) {
            item.date = `${yearStart.toLocaleDateString('en-US', { month: 'short' })} ${yearStart.getFullYear()}-${yearEnd.toLocaleDateString('en-US', { month: 'short' })} ${yearEnd.getFullYear()}`;
        }

        schedule.push(item)

        if (balance <= 0) break
    }

    return schedule
}

export const generateMonthlySchedule = (
    principal: number,
    monthlyRate: number,
    totalMonths: number,
    monthlyPayment: number
): MonthlyScheduleItem[] => {
    const schedule: MonthlyScheduleItem[] = []
    let balance = principal

    for (let month = 1; month <= Math.ceil(totalMonths); month++) {
        const interestPayment = balance * monthlyRate
        const principalPayment = Math.min(monthlyPayment - interestPayment, balance)
        balance -= principalPayment

        schedule.push({
            month: month,
            interest: interestPayment,
            principal: principalPayment,
            balance: Math.max(0, balance),
            endingBalance: Math.max(0, balance) // Check consumers to see which key they use
        })

        if (balance <= 0) break
    }

    return schedule
}

export const generateLoanRecommendations = (rate: number, amount: number, term: number, payment: number, isMortgage: boolean = false) => {
    const itemType = isMortgage ? 'mortgage' : 'loan'
    const optimization = getSmartRecommendations(rate, itemType)
    const strategies = getCommonPaymentStrategies()
    const tips = getCommonFinancialTips(itemType)

    return { optimization, strategies, tips }
}

export const generateLoanScenarios = (amount: number, rate: number, years: number, currentPayment?: number) => {
    const totalMonths = years * 12
    const payment = currentPayment || calculateMonthlyPayment(amount, (rate / 100) / 12, totalMonths)

    return [
        {
            title: "Current",
            rate: rate,
            payment: payment,
            totalInterest: (payment * totalMonths) - amount,
            savings: 0,
        },
        {
            title: "-0.5% Rate",
            rate: rate - 0.5,
            payment: calculateMonthlyPayment(amount, ((rate - 0.5) / 100) / 12, totalMonths),
            totalInterest: (calculateMonthlyPayment(amount, ((rate - 0.5) / 100) / 12, totalMonths) * totalMonths) - amount,
            savings: (payment - calculateMonthlyPayment(amount, ((rate - 0.5) / 100) / 12, totalMonths)) * totalMonths,
        },
        {
            title: "+10% Payment",
            rate: rate,
            payment: payment * 1.1,
            totalInterest: (payment * 1.1 * (totalMonths * 0.9)) - amount, // Approximate shorter term
            savings: (payment * 0.1) * totalMonths, // Approximate savings
        },
    ]
}

export const getSmartRecommendations = (
    rate: number,
    itemType: 'mortgage' | 'debt' | 'loan',
    lowRateThreshold: number = 4
) => {
    const optimization: string[] = []

    if (rate < lowRateThreshold) {
        optimization.push("Consider making extra payments to reduce total interest")
        optimization.push(`Your low interest rate makes this a good ${itemType} to keep`)
        optimization.push("Focus on higher-interest debts first")
    } else if (rate < 6) {
        optimization.push("Consider refinancing if rates drop significantly")
        optimization.push("Make extra payments when possible to reduce total cost")
        optimization.push(`Balance between paying off ${itemType} and investing`)
    } else {
        optimization.push(`Prioritize paying off this high-interest ${itemType}`)
        optimization.push(itemType === 'mortgage' ? "Consider refinancing to a lower rate if available" : "Consider debt consolidation if rates are lower elsewhere")
        optimization.push("Make extra payments a priority")
    }

    return optimization
}

export const getCommonPaymentStrategies = () => [
    "Make one extra payment per year to save interest",
    "Round up to the nearest $100 for easy budgeting",
    "Apply windfalls to principal when possible",
    "Consider bi-weekly payment schedule"
]

export const getCommonFinancialTips = (itemType: string) => [
    "Build an emergency fund before making extra payments",
    "Consider the opportunity cost of extra payments vs. investing",
    `Review your ${itemType} terms annually for better rates`,
    `Track your ${itemType} progress to stay motivated`
]
