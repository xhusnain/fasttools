"use client"

import { GCard, GCardContent, GCardHeader, GCardTitle, GCardDescription } from "@/ui/gcard"
import { CheckCircle2, AlertCircle, Info, Calculator, Heart, ArrowRight } from "lucide-react"

interface PersonalizedActionPlanProps {
    bmi: number
    category: string
    riskLevel: string
}

export function PersonalizedActionPlan({ bmi, category, riskLevel }: PersonalizedActionPlanProps) {
    const isUnderweight = bmi < 18.5
    const isNormal = bmi >= 18.5 && bmi < 25
    const isOverweight = bmi >= 25 && bmi < 30
    const isObese = bmi >= 30

    return (
        <section className="mt-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                <span className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="h-5 w-5 text-primary" />
                </span>
                Your Personalized Action Plan
            </h2>

            {isUnderweight && (
                <GCard className="border-blue-200 bg-blue-50/30 dark:bg-blue-900/10 dark:border-blue-800">
                    <GCardContent className="pt-6 space-y-4">
                        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-lg">
                            <Info className="h-5 w-5" />
                            Healthy Weight Gain Strategy
                        </div>
                        <p className="text-muted-foreground">
                            Your BMI of {bmi} indicates you are in the underweight category. It is important to address this with a focused nutrition and health plan.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
                                <h4 className="font-semibold mb-2">Next Steps</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
                                        Consult healthcare provider checklist
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
                                        Focus on nutrient-dense, high-calorie foods
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1 shrink-0" />
                                        Aim for a moderate calorie surplus
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900">
                                <h4 className="font-semibold mb-2">Helpful Tools</h4>
                                <a href="/calculator/calorie-calculator" className="flex items-center justify-between p-2 rounded hover:bg-white dark:hover:bg-white/10 transition-colors text-sm font-medium">
                                    Calorie Calculator
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </GCardContent>
                </GCard>
            )}

            {isNormal && (
                <GCard className="border-green-200 bg-green-50/30 dark:bg-green-900/10 dark:border-green-800">
                    <GCardContent className="pt-6 space-y-4">
                        <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-bold text-lg">
                            <CheckCircle2 className="h-5 w-5" />
                            Optimal Weight Maintenance
                        </div>
                        <p className="text-muted-foreground">
                            Great news! Your BMI of {bmi} is in the healthy range. Focus on maintaining this balance through consistent lifestyle habits.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-green-100 dark:border-green-900">
                                <h4 className="font-semibold mb-2">Maintenance Tips</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                                        Continue balanced, whole-food nutrition
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                                        Maintain regular physical activity (150 min/week)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                                        Prioritize preventive health screenings
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-green-100 dark:border-green-900">
                                <h4 className="font-semibold mb-2">Helpful Tools</h4>
                                <a href="/calculator/bmr-calculator" className="flex items-center justify-between p-2 rounded hover:bg-white dark:hover:bg-white/10 transition-colors text-sm font-medium">
                                    BMR Calculator
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </GCardContent>
                </GCard>
            )}

            {isOverweight && (
                <GCard className="border-amber-200 bg-amber-50/30 dark:bg-amber-900/10 dark:border-amber-800">
                    <GCardContent className="pt-6 space-y-4">
                        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-lg">
                            <AlertCircle className="h-5 w-5" />
                            Weight Management Focus
                        </div>
                        <p className="text-muted-foreground">
                            Your BMI is {bmi}, which is in the overweight category. Losing even 5-10% of your body weight can significantly reduce health risks.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-amber-100 dark:border-amber-900">
                                <h4 className="font-semibold mb-2">Next Steps</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-amber-500 mt-1 shrink-0" />
                                        Focus on a 500-calorie daily deficit
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-amber-500 mt-1 shrink-0" />
                                        Increase daily steps and strength training
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-amber-500 mt-1 shrink-0" />
                                        Aim for safe weight loss (1-2 lbs/week)
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-amber-100 dark:border-amber-900">
                                <h4 className="font-semibold mb-2">Helpful Tools</h4>
                                <div className="space-y-1">
                                    <a href="/calculator/calorie-calculator" className="flex items-center justify-between p-2 rounded hover:bg-white dark:hover:bg-white/10 transition-colors text-sm font-medium border-b border-white/20">
                                        Calorie Calculator
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <a href="/calculator/body-fat-calculator" className="flex items-center justify-between p-2 rounded hover:bg-white dark:hover:bg-white/10 transition-colors text-sm font-medium">
                                        Body Fat Calculator
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </GCardContent>
                </GCard>
            )}

            {isObese && (
                <GCard className="border-red-200 bg-red-50/30 dark:bg-red-900/10 dark:border-red-800">
                    <GCardContent className="pt-6 space-y-4">
                        <div className="flex items-center gap-2 text-red-700 dark:text-red-400 font-bold text-lg">
                            <AlertCircle className="h-5 w-5" />
                            Medical Consultation Priority
                        </div>
                        <p className="font-semibold text-red-800 dark:text-red-300">
                            Crucial: Please consult with a healthcare professional for a personalized medical weight management plan.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-red-100 dark:border-red-900">
                                <h4 className="font-semibold mb-2">Key Considerations</h4>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-red-500 mt-1 shrink-0" />
                                        Assess for comorbidities (blood pressure, glucose)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-red-500 mt-1 shrink-0" />
                                        Evidence-based medical weight loss options
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-red-500 mt-1 shrink-0" />
                                        Sustainable lifestyle intervention support
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white/50 dark:bg-black/20 p-4 rounded-lg border border-red-100 dark:border-red-900">
                                <h4 className="font-semibold mb-2">Support Tools</h4>
                                <a href="/calculator/calorie-calculator" className="flex items-center justify-between p-2 rounded hover:bg-white dark:hover:bg-white/10 transition-colors text-sm font-medium">
                                    Calorie Calculator
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </GCardContent>
                </GCard>
            )}
        </section>
    )
}
