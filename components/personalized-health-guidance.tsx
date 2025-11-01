"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Heart, Target, Scale, TrendingUp, AlertTriangle, CheckCircle, Info, Zap, Sparkles, Dumbbell, Apple, Clock, Droplets } from "lucide-react"

interface PersonalizedHealthGuidanceProps {
  bmi: number
  category: string
  riskLevel: string
  age?: number
  gender?: string
}

export function PersonalizedHealthGuidance({ bmi, category, riskLevel, age, gender }: PersonalizedHealthGuidanceProps) {
  // Determine guidance based on BMI category
  const getGuidanceForCategory = () => {
    if (bmi < 18.5) {
      return {
        title: "Healthy Weight Gain Plan",
        color: "from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-blue-900/30",
        borderColor: "border-blue-200 dark:border-blue-800",
        textColor: "text-foreground",
        icon: <TrendingUp className="h-4 w-4 text-foreground" />,
        nutrition: {
          title: "Nutrition for Healthy Weight Gain",
          foods: [
            "Lean proteins: Chicken breast, fish, eggs, Greek yogurt",
            "Healthy fats: Avocados, nuts, olive oil, seeds",
            "Complex carbs: Brown rice, quinoa, sweet potatoes, oats",
            "Dense calories: Nut butters, dried fruits, whole milk"
          ],
          avoid: [
            "Empty calories from junk food",
            "Excessive processed foods",
            "Skipping meals"
          ]
        },
        exercise: {
          title: "Exercise for Healthy Weight Gain",
          cardio: "Light cardio 2-3x/week (20-30 min)",
          strength: "Strength training 3-4x/week with progressive overload",
          focus: "Build muscle mass, not just weight"
        },
        equipment: [
          "Dumbbells (5-25 lbs)",
          "Resistance bands",
          "Pull-up bar",
          "Weight bench"
        ]
      }
    } else if (bmi >= 18.5 && bmi < 25) {
      return {
        title: "Maintain Your Healthy Weight",
        color: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
        borderColor: "border-green-200 dark:border-green-800",
        textColor: "text-heading-accent",
        icon: <CheckCircle className="h-4 w-4 text-heading-accent" />,
        nutrition: {
          title: "Balanced Nutrition to Maintain",
          foods: [
            "Variety of fruits and vegetables (5-7 servings/day)",
            "Lean proteins: Fish, chicken, beans, legumes",
            "Whole grains: Brown rice, quinoa, whole wheat",
            "Healthy fats: Nuts, seeds, olive oil, avocado"
          ],
          avoid: [
            "Excessive processed foods",
            "Too much added sugar",
            "Overeating"
          ]
        },
        exercise: {
          title: "Maintenance Exercise Routine",
          cardio: "150 minutes moderate cardio/week",
          strength: "2-3 strength training sessions/week",
          focus: "Maintain current fitness level"
        },
        equipment: [
          "Dumbbells or resistance bands",
          "Yoga mat",
          "Jump rope",
          "Pull-up bar"
        ]
      }
    } else if (bmi >= 25 && bmi < 30) {
      return {
        title: "Healthy Weight Loss Plan",
        color: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30",
        borderColor: "border-orange-200 dark:border-orange-800",
        textColor: "text-foreground",
        icon: <Target className="h-4 w-4 text-foreground" />,
        nutrition: {
          title: "Weight Loss Nutrition",
          foods: [
            "High-protein foods: Lean meats, fish, eggs, Greek yogurt",
            "Fiber-rich foods: Vegetables, fruits, whole grains",
            "Healthy fats in moderation: Nuts, olive oil, avocado",
            "Low-calorie density: Leafy greens, berries, lean proteins"
          ],
          avoid: [
            "Processed foods and snacks",
            "Sugary drinks and desserts",
            "Large portions",
            "Late-night eating"
          ]
        },
        exercise: {
          title: "Weight Loss Exercise Plan",
          cardio: "45-60 minutes cardio 5-6x/week",
          strength: "3-4 strength training sessions/week",
          focus: "Create calorie deficit through exercise and diet"
        },
        equipment: [
          "Treadmill or running shoes",
          "Dumbbells (10-30 lbs)",
          "Resistance bands",
          "Yoga mat"
        ]
      }
    } else {
      return {
        title: "Comprehensive Weight Management",
        color: "from-red-50 to-pink-50 dark:from-red-950/30 dark:to-pink-950/30",
        borderColor: "border-red-200 dark:border-red-800",
        textColor: "text-foreground",
        icon: <AlertTriangle className="h-4 w-4 text-foreground" />,
        nutrition: {
          title: "Medical Supervision Recommended",
          foods: [
            "Consult healthcare professional for meal plan",
            "Focus on whole, unprocessed foods",
            "Portion control and meal timing",
            "Professional nutritional counseling"
          ],
          avoid: [
            "Self-directed extreme diets",
            "Fad diets without medical supervision",
            "Skipping meals"
          ]
        },
        exercise: {
          title: "Supervised Exercise Program",
          cardio: "Start with 20-30 minutes, gradually increase",
          strength: "Begin with bodyweight exercises",
          focus: "Work with healthcare professional"
        },
        equipment: [
          "Consult professional for equipment needs",
          "Start with basic equipment",
          "Consider gym membership with trainer"
        ]
      }
    }
  }

  const guidance = getGuidanceForCategory()

  return (
    <div className="space-y-6">
      {/* Personalized Plan Header */}
      <div className={`p-4 rounded-xl bg-gradient-to-r ${guidance.color} border-2 ${guidance.borderColor}`}>
        <div className="flex items-center gap-3 mb-2">
          {guidance.icon}
          <h3 className={`text-lg font-bold ${guidance.textColor}`}>
            {guidance.title}
          </h3>
        </div>
        <p className={`text-sm ${guidance.textColor} opacity-80`}>
          Based on your BMI of {bmi} ({category}), here's your personalized health plan
        </p>
      </div>

      {/* Nutrition Guidance */}
      <Card className="border-2 border-slate-200 dark:border-slate-700">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Apple className="h-5 w-5 text-heading-accent" />
            {guidance.nutrition.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-heading-accent mb-2">✅ Recommended Foods:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              {guidance.nutrition.foods.map((food, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-heading-accent mt-1">•</span>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-2">❌ Foods to Avoid:</h4>
            <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
              {guidance.nutrition.avoid.map((food, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-foreground mt-1">•</span>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Exercise Guidance */}
      <Card className="border-2 border-slate-200 dark:border-slate-700">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Dumbbell className="h-5 w-5 text-foreground" />
            {guidance.exercise.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-1">Cardio Exercise</h4>
              <p className="text-sm text-foreground">{guidance.exercise.cardio}</p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-1">Strength Training</h4>
              <p className="text-sm text-foreground">{guidance.exercise.strength}</p>
            </div>
          </div>
          <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg">
            <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Focus Area</h4>
            <p className="text-sm text-indigo-700 dark:text-indigo-300">{guidance.exercise.focus}</p>
          </div>
        </CardContent>
      </Card>

      {/* Equipment Recommendations */}
      <Card className="border-2 border-slate-200 dark:border-slate-700">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Scale className="h-5 w-5 text-foreground" />
            Recommended Equipment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guidance.equipment.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Sparkles className="h-4 w-4 text-foreground" />
                <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Additional Tips Based on Age and Gender */}
      {(age || gender) && (
        <Card className="border-2 border-slate-200 dark:border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-amber-600" />
              Personalized Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {age && age > 50 && (
                <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Age 50+ Considerations</h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Focus on maintaining muscle mass, bone health, and joint-friendly exercises. Consider consulting a healthcare provider for personalized recommendations.
                  </p>
                </div>
              )}
              {gender === "female" && (
                <div className="p-3 bg-pink-50 dark:bg-pink-950/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-1">Women's Health Focus</h4>
                  <p className="text-sm text-foreground">
                    Include weight-bearing exercises for bone health, and consider hormonal changes that may affect weight management.
                  </p>
                </div>
              )}
              {gender === "male" && (
                <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-1">Men's Health Focus</h4>
                  <p className="text-sm text-foreground">
                    Focus on cardiovascular health and maintaining muscle mass. Consider testosterone levels and their impact on weight management.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
