import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"

const CalorieCalculator = dynamic(
  () => import("@/components/health/calorie-calculator"),
  { loading: () => <ToolLoader /> }
)
import { Brain, Activity, Target, BookOpen, Shield, Users, TrendingUp, Calculator, Heart, AlertTriangle, Info, Zap, Flame } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Calorie Calculator — Calculate Daily Calorie Needs & TDEE Free (2026)",
  description:
    "Free calorie calculator with BMR, TDEE, weight loss/gain targets & zigzag calorie cycling. Uses Mifflin-St Jeor, Harris-Benedict & Katch-McArdle equations. Activity-based calorie burn reference, macro breakdown & meal planning guidance.",
  path: "/calculator/calorie-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Calorie Calculator", href: "/calculator/calorie-calculator" }
  ],
  schemaOptions: {
    name: "Calorie Calculator | Advanced Daily Calorie Needs Calculator",
    alternateName: "Professional Calorie Analysis Tool",
    applicationCategory: "HealthApplication",
    featureList: [
      "BMR Calculation with Multiple Equations",
      "TDEE Analysis for Different Activity Levels",
      "Weight Management Calorie Targets",
      "Zigzag Calorie Cycling Plans",
      "Food Energy Converter",
      "Personalized Nutrition Recommendations",
      "Meal Planning Guidance"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function CalorieCalculatorPage() {
  const toolContent = {
    toolName: "Calorie Calculator — Daily Calorie Needs & TDEE",
    overview: "Calculate how many calories you need per day with our free advanced calorie calculator. Get your Basal Metabolic Rate (BMR) using Mifflin-St Jeor, Harris-Benedict, or Katch-McArdle equations, then compute your Total Daily Energy Expenditure (TDEE) across five activity levels. Receive precise calorie targets for weight loss (500-1000 cal deficit), maintenance, or muscle gain (250-500 cal surplus), plus advanced zigzag calorie cycling plans to prevent metabolic adaptation. Includes activity calorie burn reference chart, thermic effect of food (TEF) insights, macronutrient breakdown guidance, and evidence-based meal planning tips.",

    howToSteps: [
      "Enter Your Details: Input age, gender, height (cm or inches), weight (kg or lbs), and select your preferred unit system.",
      "Select BMR Equation: Choose Mifflin-St Jeor (most accurate, ±10-15%), Harris-Benedict (classic revised 1984), or Katch-McArdle (requires body fat %).",
      "Choose Activity Level: Select from sedentary (1.2x), lightly active (1.375x), moderately active (1.55x), very active (1.725x), or extremely active (1.9x).",
      "Review Calorie Results: View your BMR, TDEE, and specific calorie targets for maintenance, weight loss (-500/-1000 cal), or muscle gain (+250/+500 cal).",
      "Plan Your Nutrition: Use zigzag calorie cycling suggestions, macro breakdown guidance, and meal planning tips to structure your daily diet."
    ],

    features: [
      "Three Validated Equations: Mifflin-St Jeor (most accurate), Harris-Benedict (revised 1984), and Katch-McArdle (lean body mass based).",
      "BMR & TDEE Analysis: Calculate resting metabolic rate and total daily energy expenditure with precise activity multipliers.",
      "Weight Management Targets: Specific calorie targets for maintenance, mild/moderate/extreme weight loss, and lean bulk surplus.",
      "Zigzag Calorie Cycling: Advanced high/low day plans (+/-200-300 cal) to prevent metabolic adaptation and diet plateaus.",
      "Activity Calorie Burn Chart: Reference table showing calories burned per 30 minutes for walking, running, cycling, swimming, and weight training.",
      "Thermic Effect of Food (TEF): Understand how protein (20-30%), carbs (5-15%), and fats (0-3%) burn calories during digestion.",
      "Macronutrient Breakdown: Recommended protein, carbohydrate, and fat ratios based on your weight management goal.",
      "Mobile Responsive: Track daily calorie needs and meal plans on any device — phone, tablet, or desktop."
    ],

    useCases: [
      "Safe Weight Loss: Determine the exact calorie deficit (500-1000 cal/day) needed to lose 1-2 lbs of body fat per week without muscle loss.",
      "Lean Muscle Gain: Calculate the moderate calorie surplus (250-500 cal above TDEE) required for hypertrophy combined with resistance training.",
      "Weight Maintenance: Find your precise maintenance calories to sustain current weight and body composition long-term.",
      "Athletic Fueling: Optimize pre-workout, intra-workout, and post-workout nutrition based on TDEE and training intensity.",
      "Meal Plan Design: Structure daily meal timing, portion sizes, and macronutrient ratios around your specific energy needs.",
      "Metabolic Health Monitoring: Track how aging, muscle gain, weight loss, and lifestyle changes affect your daily calorie requirements."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Flame className="h-6 w-6 text-primary" />
            Understanding Calories: The Foundation of Weight Management and Nutrition
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Calories are a measure of <strong>energy</strong>. In nutrition, they refer to the energy people get from the food and drink they consume, and the energy they use in physical activity. One calorie (kilocalorie) is the amount of energy needed to raise the temperature of one kilogram of water by one degree Celsius. Understanding your daily calorie expenditure is the cornerstone of managing weight, optimizing physical performance, and achieving your health and fitness goals.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether your goal is weight loss, muscle gain, or maintaining your current weight, knowing your daily calorie needs is essential. Your Total Daily Energy Expenditure (TDEE) represents the total number of calories you burn each day through metabolism, physical activity, and the thermic effect of food. By understanding and managing this energy balance, you can make informed decisions about your nutrition and create sustainable habits that support your long-term health and fitness objectives.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            Activity Calorie Burn Reference: Understanding Exercise Energy Expenditure
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Energy expenditure varies significantly based on body weight, intensity, fitness level, and individual metabolism. Here is an estimate of calories burned during common activities for different body weights (per 30 minutes of activity):
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Activity</th>
                  <th className="p-3 text-left">125 lbs (57 kg)</th>
                  <th className="p-3 text-left">155 lbs (70 kg)</th>
                  <th className="p-3 text-left">185 lbs (84 kg)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold text-foreground">Walking (3.5 mph)</td>
                  <td className="p-3">120 cal</td>
                  <td className="p-3">149 cal</td>
                  <td className="p-3">178 cal</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Running (5 mph)</td>
                  <td className="p-3">240 cal</td>
                  <td className="p-3">298 cal</td>
                  <td className="p-3">355 cal</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Bicycling (12-14 mph)</td>
                  <td className="p-3">240 cal</td>
                  <td className="p-3">298 cal</td>
                  <td className="p-3">355 cal</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Weight Training</td>
                  <td className="p-3">90 cal</td>
                  <td className="p-3">112 cal</td>
                  <td className="p-3">133 cal</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground">Swimming (General)</td>
                  <td className="p-3">180 cal</td>
                  <td className="p-3">223 cal</td>
                  <td className="p-3">266 cal</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Expert Insight: The Thermic Effect of Food (TEF) and Total Daily Energy Expenditure
          </h2>
          <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 border-l-4 border-orange-500 rounded-lg">
            <p className="italic text-orange-700 dark:text-orange-300 leading-relaxed">
              "Your Total Daily Energy Expenditure (TDEE) isn't just exercise and breathing. About 10% of your daily burn comes from the energy required to digest, absorb, and process nutrients. This is called the Thermic Effect of Food (TEF). Protein has the highest thermic effect, requiring up to 20-30% of its own energy to be processed, compared to just 5-15% for carbs and 0-3% for fats. This means if you eat 100 calories of protein, your body uses 20-30 calories just to process it, leaving 70-80 calories for your body. This is why high-protein diets are often more effective for fat loss—they burn more calories during digestion and increase satiety."
            </p>
            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mt-2">— FastTools Metabolic Research Team</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Calorie Calculation Methods: Understanding BMR Equations
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our calculator offers multiple methods for calculating Basal Metabolic Rate (BMR), the number of calories your body burns at rest. Understanding these methods helps you choose the most accurate option for your situation:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Method</th>
                  <th className="p-3 text-left">Best For</th>
                  <th className="p-3 text-left">Accuracy</th>
                  <th className="p-3 text-left">Required Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">Mifflin-St Jeor</td>
                  <td className="p-3">General population (most accurate)</td>
                  <td className="p-3">±10-15%</td>
                  <td className="p-3">Age, gender, height, weight</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Harris-Benedict (Revised)</td>
                  <td className="p-3">Classic alternative</td>
                  <td className="p-3">±12-17%</td>
                  <td className="p-3">Age, gender, height, weight</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Katch-McArdle</td>
                  <td className="p-3">Lean individuals with known body fat %</td>
                  <td className="p-3">±8-12% (when accurate)</td>
                  <td className="p-3">Weight, body fat percentage</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            The <strong>Mifflin-St Jeor Equation</strong>, developed in 1990, is considered the most accurate for the general population. It's based on modern data and accounts for age, gender, height, and weight more accurately than older equations. The <strong>Revised Harris-Benedict Equation</strong>, revised in 1984, is a classic alternative that works well but is slightly less accurate. The <strong>Katch-McArdle Formula</strong> is best for lean individuals with known body fat percentage, as it accounts for lean body mass rather than total body weight, providing more accurate results for muscular individuals.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            Zigzag Calorie Cycling: Advanced Weight Management Strategy
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Zigzag calorie cycling involves rotating between higher and lower calorie days throughout the week. This advanced technique helps prevent metabolic adaptation (plateaus), provides psychological flexibility, and can be more sustainable than maintaining a constant calorie deficit or surplus:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                High Calorie Days
              </h4>
              <p className="text-sm text-muted-foreground">+200-300 calories above your average TDEE to boost metabolism, fuel intense workouts, and prevent metabolic slowdown. These days help maintain leptin levels (hunger hormone) and provide psychological relief from restriction, making long-term diet adherence easier.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-500" />
                Low Calorie Days
              </h4>
              <p className="text-sm text-muted-foreground">-200-300 calories below your average TDEE to create a larger deficit for fat loss on rest days or lighter training days. This approach allows for calorie banking—creating a larger weekly deficit without extreme daily restriction, making fat loss more sustainable.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 text-purple-500" />
                Benefits of Zigzag Cycling
              </h4>
              <p className="text-sm text-muted-foreground">Prevents metabolic adaptation (plateaus), maintains weight loss momentum, reduces diet fatigue, provides psychological flexibility, allows for social eating on high days, and can be more sustainable than constant restriction. This approach works well for weight loss, maintenance, and even muscle gain phases.</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            How to Calculate Your Daily Calorie Needs: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these steps to accurately calculate your daily calorie needs using our advanced calculator:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter Your Basic Information</h4>
                <p className="text-sm text-muted-foreground">Input your age, gender, height, and weight. Use accurate measurements for best results. Weigh yourself in the morning after using the bathroom but before eating for consistent measurements. Use centimeters or inches depending on your preferred unit system.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Select Calculation Method</h4>
                <p className="text-sm text-muted-foreground">Choose Mifflin-St Jeor (recommended for most people), Harris-Benedict (classic alternative), or Katch-McArdle (best if you're lean and know your body fat percentage). For most users, Mifflin-St Jeor provides the most accurate results based on modern research.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Choose Your Activity Level</h4>
                <p className="text-sm text-muted-foreground">Select from sedentary (little/no exercise), lightly active (light exercise 1-3 days/week), moderately active (moderate exercise 3-5 days/week), very active (hard exercise 6-7 days/week), or extremely active (physical job + hard exercise). Be honest—overestimating activity leads to overeating and weight gain.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Review Your Results</h4>
                <p className="text-sm text-muted-foreground">View your BMR (Basal Metabolic Rate—calories burned at rest), TDEE (Total Daily Energy Expenditure—total calories burned per day), and calorie targets for weight maintenance, weight loss (deficit), or weight gain (surplus). Use these numbers as a starting point and adjust based on your actual weight change over 2-3 weeks.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy & Security: Your Health Data Stays Private
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your privacy and data security are our top priorities. Our calorie calculator processes all information locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">All calorie calculations happen directly in your browser. Your weight, height, age, and calorie results never leave your device or get transmitted to our servers. No data is sent over the internet during calculation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your health information. There's no database of your calorie calculations, no analytics on your usage, and no way for us to access your measurements or results.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Tracking or Cookies</h4>
                <p className="text-sm text-muted-foreground">We don't use cookies, tracking pixels, or analytics to monitor your usage of the calorie calculator. Your browsing and health information remain completely private while using our tool.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),

    proTip: "Fitness trackers overestimate calorie burn by 10-40%. If you are trying to lose weight, eat back only 50% of tracked exercise calories to account for this overestimation. Focus on protein-first meals (0.8-1g per pound of body weight) since protein has the highest thermic effect of food (20-30%) — meaning your body burns 20-30 calories just processing every 100 calories of protein consumed.",

    faqs: [
      {
        question: "Which equation should I use?",
        answer: "For most people, the Mifflin-St Jeor equation is the most accurate for estimating Basal Metabolic Rate (BMR). It's based on modern research and provides estimates within ±10-15% for the general population. If you are very lean and know your body fat percentage, the Katch-McArdle formula is superior as it accounts for lean body mass, providing more accurate results for muscular individuals."
      },
      {
        question: "How accurate are these numbers?",
        answer: "Calorie estimates are based on population averages and may vary by 10-15% for individuals due to genetics, metabolism, hormonal factors, and lifestyle. Use these numbers as a starting point and adjust based on your actual weight change over 2-3 weeks. If you're losing weight faster or slower than expected, adjust your calorie intake by 100-200 calories accordingly."
      },
      {
        question: "What is a safe calorie deficit?",
        answer: "A deficit of 500 calories per day typically results in 1 lb of weight loss per week (3500 calories = 1 lb of fat). For sustainable fat loss, aim for a 20-25% calorie deficit (400-600 calories below TDEE for most people). Avoid deficits larger than 1000 calories per day or eating below your BMR without medical supervision, as this can lead to muscle loss, metabolic slowdown, and nutritional deficiencies."
      },
      {
        question: "Should I count macros?",
        answer: "While calories determine weight change (eat fewer calories than you burn to lose weight), macros (protein, fats, carbs) determine body composition and how you feel. Prioritizing protein (0.8-1g per pound of body weight) is recommended for satiety, muscle retention during fat loss, and the thermic effect of food. Balanced macros support optimal energy, hormone production, and overall health."
      },
      {
        question: "What if I stop losing weight?",
        answer: "This is a weight loss plateau, which may be due to metabolic adaptation (body adapting to lower calories), water retention (especially if you're a woman or increased exercise), muscle gain (if you're strength training), or tracking errors. Try a diet break (eating at maintenance calories for a week), zigzag calorie cycling, or reassess your calorie intake and activity levels."
      },
      {
        question: "Does muscle burn more calories than fat?",
        answer: "Yes, muscle tissue is more metabolically active than fat tissue. Each pound of muscle burns approximately 6-7 calories per day at rest, while each pound of fat burns about 2 calories per day. Building muscle increases your Basal Metabolic Rate (BMR), allowing you to eat more calories while maintaining weight and making long-term weight management easier."
      },
      {
        question: "How do I calculate calories in homemade food?",
        answer: "Weigh raw ingredients using a food scale (most accurate), use a food database app or nutrition label to find calorie values, sum the calories of all ingredients, and divide by the number of servings to get calories per serving. Weighing ingredients is more accurate than using volume measurements (cups, tablespoons) for calorie tracking."
      },
      {
        question: "What is 'Starvation Mode'?",
        answer: "'Starvation mode' or metabolic adaptation is a real physiological response where the body slows down energy expenditure in response to severe calorie restriction. However, it's often exaggerated—moderate calorie deficits (20-25% below TDEE) don't cause severe metabolic slowdown. Extreme deficits, very low body fat, or prolonged restriction can cause significant metabolic adaptation requiring medical intervention."
      },
      {
        question: "Can I spot reduce fat?",
        answer: "No, you cannot target fat loss in specific areas (like belly fat or thigh fat) by diet or exercise alone. Fat loss occurs systematically across the entire body based on genetics, hormones, and other factors. Focus on overall body fat reduction through a caloric deficit, and your problem areas will eventually reduce as well. Spot training (targeted exercises) builds muscle but doesn't preferentially burn fat in that area."
      },
      {
        question: "How often should I recalculate my calories?",
        answer: "Recalculate your calorie needs every 10-15 lbs of weight change, as your smaller body will require fewer calories to maintain weight. As you lose weight, your BMR and TDEE decrease, so you'll need to adjust your calorie intake to continue losing weight or maintain your new weight. Regular recalculations ensure your calorie targets remain accurate for your current body size."
      },
      {
        question: "What is BMR vs TDEE?",
        answer: "BMR (Basal Metabolic Rate) is the number of calories your body burns at rest to maintain basic physiological functions (breathing, circulation, cell production). TDEE (Total Daily Energy Expenditure) is your total daily calorie burn including BMR, physical activity, thermic effect of food (10%), and non-exercise activity thermogenesis (NEAT). TDEE = BMR × Activity Multiplier, representing your actual daily calorie needs."
      },
      {
        question: "What is the thermic effect of food (TEF)?",
        answer: "The thermic effect of food (TEF) is the energy required to digest, absorb, and process nutrients, accounting for about 10% of your TDEE. Protein has the highest TEF (20-30% of its own energy), followed by carbs (5-15%), and fats (0-3%). This means high-protein diets burn more calories during digestion, contributing to fat loss and increased satiety."
      },
      {
        question: "How many calories should I eat to gain muscle?",
        answer: "To gain muscle (bulking), eat a moderate calorie surplus of 250-500 calories above your TDEE. This provides energy for muscle growth without excessive fat gain. Combined with progressive resistance training (3-4 times per week) and adequate protein (0.8-1g per pound of body weight), this surplus supports muscle hypertrophy while minimizing fat accumulation."
      },
      {
        question: "Should I eat back exercise calories?",
        answer: "It depends on your goal. For weight loss, don't eat back all your exercise calories—fitness trackers often overestimate burns. Eat back 50-75% of tracked exercise calories if you're very active or feel fatigued. For weight maintenance or muscle gain, eating back exercise calories helps maintain energy levels and supports recovery. Monitor your weight and adjust based on results."
      },
      {
        question: "What is zigzag calorie cycling?",
        answer: "Zigzag calorie cycling involves rotating between higher and lower calorie days throughout the week. High days (+200-300 calories) boost metabolism and fuel workouts, while low days (-200-300 calories) create a larger weekly deficit. This prevents metabolic adaptation, provides psychological flexibility, and can be more sustainable than constant restriction. It's effective for weight loss and maintenance."
      },
      {
        question: "How do I know if I'm eating the right amount of calories?",
        answer: "Track your weight over 2-3 weeks while maintaining consistent calorie intake. If you're losing weight (0.5-1 lb per week for fat loss goal), you're in a calorie deficit. If you're gaining weight (0.5-1 lb per week for muscle gain goal), you're in a calorie surplus. If weight is stable, you're at maintenance. Adjust calories by 100-200 based on results."
      },
      {
        question: "Can I lose weight without counting calories?",
        answer: "Yes, but calorie awareness helps ensure accuracy. You can lose weight through portion control, eating protein and vegetables first, reducing processed foods, staying active, and eating mindfully. However, counting calories provides precision and faster results. Many people find success with a combination: counting calories initially to understand portions, then transitioning to mindful eating."
      },
      {
        question: "What happens if I eat below my BMR?",
        answer: "Eating below your BMR (Basal Metabolic Rate) is not recommended without medical supervision. While you may lose weight faster initially, it can lead to muscle loss, metabolic slowdown, nutrient deficiencies, fatigue, hormonal imbalances, and reduced immune function. Aim for a calorie intake at or slightly above BMR with a moderate deficit (20-25% below TDEE) for sustainable fat loss."
      },
      {
        question: "How do activity levels affect calorie needs?",
        answer: "Activity levels significantly affect calorie needs through activity multipliers: Sedentary (BMR × 1.2), Lightly Active (BMR × 1.375), Moderately Active (BMR × 1.55), Very Active (BMR × 1.725), Extremely Active (BMR × 1.9). More active individuals burn more calories, requiring higher calorie intake for maintenance and allowing for more calories while still creating a deficit for weight loss."
      },
      {
        question: "What is a diet break?",
        answer: "A diet break is a period (typically 1-2 weeks) of eating at maintenance calories during a weight loss phase. It helps prevent metabolic adaptation, restores leptin levels (hunger hormone), provides psychological relief from restriction, and can help break through plateaus. After a diet break, return to your calorie deficit with renewed motivation and improved metabolism."
      },
      {
        question: "How accurate are fitness trackers for calorie burn?",
        answer: "Fitness trackers vary in accuracy, often overestimating calorie burn by 10-40%. Heart rate-based estimates are more accurate than step-based estimates. For weight loss, it's safer to eat back only 50-75% of tracked exercise calories to account for overestimation. Use fitness trackers as a general guide for activity trends rather than exact calorie burns."
      },
      {
        question: "What is NEAT (Non-Exercise Activity Thermogenesis)?",
        answer: "NEAT (Non-Exercise Activity Thermogenesis) is the energy burned through daily activities outside of formal exercise: walking, fidgeting, standing, housework, gardening, etc. NEAT can vary by 200-900 calories per day between individuals and can significantly impact weight management. Increasing NEAT (more walking, standing, daily movement) is an effective way to increase calorie burn without formal exercise."
      },
      {
        question: "Can my metabolism slow down?",
        answer: "Yes, metabolic adaptation (metabolism slowing down) can occur in response to prolonged calorie restriction, weight loss (smaller bodies burn fewer calories), decreased muscle mass, hormonal changes, or age-related factors. Prevent metabolic slowdown by maintaining muscle mass through resistance training, avoiding extreme deficits, including diet breaks, and gradually increasing calories as you approach your goal weight."
      },
      {
        question: "How do I maintain weight after losing it?",
        answer: "After weight loss, your new maintenance calories will be lower than before (smaller body burns fewer calories). Gradually increase calories from deficit to maintenance over 2-4 weeks (reverse dieting), continue resistance training to maintain muscle mass, prioritize protein and whole foods, monitor weight and adjust calories if needed, and be patient as your body adjusts to the new weight."
      },
      {
        question: "What is reverse dieting?",
        answer: "Reverse dieting is gradually increasing calorie intake after a dieting phase to help restore metabolism, improve hormonal function, and find your new maintenance calories. Increase calories by 50-100 per week over several weeks until you reach maintenance. This prevents rapid weight regain and helps your body adjust to higher calorie intake while maintaining your new weight."
      },
      {
        question: "How do I calculate calories for weight gain?",
        answer: "Calculate your TDEE (Total Daily Energy Expenditure) using the calculator, then add a moderate surplus of 250-500 calories per day. For muscle gain, combine this surplus with progressive resistance training (3-4 times per week), adequate protein (0.8-1g per pound), and proper recovery. Monitor weight gain (aim for 0.5-1 lb per week) and adjust calories if gaining too fast (mostly fat) or too slow (not enough energy for muscle growth)."
      },
      {
        question: "What is the difference between calories and kilocalories?",
        answer: "In nutrition, 'calorie' and 'kilocalorie' are used interchangeably—both refer to the same unit of energy (1000 calories = 1 kilocalorie). When you see 'calories' on food labels or nutrition information, it actually means kilocalories. One calorie (kilocalorie) is the energy needed to raise the temperature of one kilogram of water by one degree Celsius."
      },
      {
        question: "How do hormones affect calorie needs?",
        answer: "Hormones significantly affect metabolism and calorie needs. Thyroid hormones regulate metabolic rate, insulin affects energy storage, cortisol (stress hormone) can increase or decrease metabolism, sex hormones (testosterone, estrogen) influence muscle mass and fat storage, and leptin/ghrelin control hunger. Hormonal imbalances can affect calorie needs, making it important to address underlying health issues alongside calorie management."
      },
      {
        question: "Can age affect my calorie needs?",
        answer: "Yes, calorie needs decrease with age due to decreased muscle mass (sarcopenia), lower metabolic rate, reduced physical activity, hormonal changes, and changes in body composition. As you age, resistance training becomes increasingly important to maintain muscle mass and metabolic rate. Recalculate your calorie needs periodically, especially as you enter different life stages (30s, 40s, 50s, etc.)."
      },
      {
        question: "Is our calorie calculator free to use?",
        answer: "Yes, our calorie calculator is completely free with no charges, subscriptions, or registration required. You can calculate your calorie needs unlimited times, access all features (BMR, TDEE, weight management goals), and use the tool for personal, educational, or professional purposes without any cost."
      },
      {
        question: "Is my calorie data stored or tracked?",
        answer: "No, all calorie calculations happen directly in your browser. We never store, track, or transmit your weight, height, age, or calorie results. Your privacy is completely protected. The calculator works entirely client-side, meaning your health data never leaves your device."
      },
      {
        question: "What makes our calorie calculator different from others?",
        answer: "Our calculator provides comprehensive results including BMR (using multiple equations), TDEE (with accurate activity multipliers), calorie targets for weight loss/gain/maintenance, zigzag calorie cycling plans, and detailed explanations. It's completely free with no limitations, completely private (client-side only), supports multiple calculation methods, and works on all devices (mobile, tablet, desktop)."
      }
    ],

    relatedTools: [
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "BMR Calculator", href: "/calculator/bmr-calculator" },
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Calorie Calculator — Daily Calorie Needs, BMR & TDEE",
        description: "Calculate daily calorie needs with BMR, TDEE, weight loss/gain targets, zigzag calorie cycling, activity burn chart, and macro breakdown. Uses Mifflin-St Jeor, Harris-Benedict & Katch-McArdle equations. Free and private.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Calorie Calculator", href: "/calculator/calorie-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <CalorieCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Calorie Calculator — Calculate Daily Calorie Needs & TDEE Free (2026)",
        description: "Free calorie calculator with BMR, TDEE, weight loss/gain targets & zigzag calorie cycling. Uses Mifflin-St Jeor, Harris-Benedict & Katch-McArdle equations. Activity-based calorie burn reference, macro breakdown & meal planning guidance.",
        path: "/calculator/calorie-calculator"
      }}
    />
  )
}