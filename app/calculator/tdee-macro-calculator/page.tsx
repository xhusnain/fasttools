import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Flame, Activity, Target, BookOpen, Calculator, Heart, Scale, TrendingUp, Dumbbell, Utensils, BarChart3, Brain, Info, Zap, Shield } from "lucide-react"

const TDEEMacroCalculatorPageContent = dynamic(
  () => import("@/components/calculators/tdee-macro-calculator-page-content").then((mod) => mod.TDEEMacroCalculatorPageContent),
  { loading: () => <ToolLoader /> }
)

const baseMetadata = createMetadata({
  title: "TDEE & Macro Calculator — Daily Calories, Protein, Carbs & Fats",
  description:
    "Free TDEE & macro calculator with Mifflin-St Jeor, Harris-Benedict & Katch-McArdle equations. Calculate BMR, daily calories, protein, carbs & fats for weight loss, maintenance or muscle gain. Instant results.",
  path: "/calculator/tdee-macro-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "TDEE & Macro Calculator", href: "/calculator/tdee-macro-calculator" }
  ],
  definition: "A TDEE (Total Daily Energy Expenditure) calculator estimates the total number of calories your body burns per day, including your Basal Metabolic Rate, physical activity, and the thermic effect of food, while a macro calculator converts those calories into personalized protein, carbohydrate, and fat targets.",
  schemaOptions: {
    name: "Free TDEE & Macro Calculator — Daily Calories & Macronutrients",
    alternateName: [
      "TDEE Calculator",
      "Macro Calculator",
      "Macronutrient Calculator",
      "Total Daily Energy Expenditure Calculator",
      "Keto Macro Calculator",
      "IIFYM Calculator",
      "Flexible Dieting Calculator",
      "Protein Calculator",
      "Carb Calculator",
      "Fat Macro Calculator",
      "Cutting Macro Calculator",
      "Bulking Macro Calculator",
      "Mifflin-St Jeor Macro Tool",
      "Katch-McArdle Macro Tool",
      "Athlete Macro Calculator",
    ],
    applicationCategory: "HealthApplication",
    ratingValue: "4.9",
    ratingCount: "4180",
    featureList: [
      "TDEE calculation with 3 BMR equations (Mifflin-St Jeor, Harris-Benedict, Katch-McArdle)",
      "Personalized macronutrient breakdown (protein, carbs, fat in grams)",
      "5 macro presets: Balanced, Low Carb, High Protein, Keto, Custom",
      "6 activity levels from Sedentary to Athlete",
      "5 goal settings: Lose, Mild Loss, Maintain, Lean Bulk, Bulk",
      "Formula comparison table showing all equations side by side",
      "Per-meal macro split for 2-6 meals per day",
      "Body fat percentage input for Katch-McArdle accuracy",
      "Imperial and Metric unit support",
      "BMI and Lean Body Mass calculations included",
      "Completely free with no email required",
      "Privacy-focused — all calculations run in your browser"
    ]
  },
  faqs: [
    {
      question: "What is TDEE and how is it calculated?",
      answer: "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in 24 hours. It is calculated by first determining your Basal Metabolic Rate (BMR) using an equation like Mifflin-St Jeor, then multiplying by an activity factor (1.2 for sedentary to 2.0 for athletes). TDEE includes BMR (60-70%), the thermic effect of food (8-15%), exercise activity (5-10%), and non-exercise activity thermogenesis or NEAT (15%)."
    },
    {
      question: "What is the difference between BMR and TDEE?",
      answer: "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest just to maintain basic life functions like breathing, circulation, and cell production. TDEE (Total Daily Energy Expenditure) includes your BMR plus all additional calories burned through physical activity, digestion, and daily movement. TDEE is always higher than BMR — typically 1.2x to 2.0x depending on activity level."
    },
    {
      question: "Which BMR equation is most accurate?",
      answer: "The Mifflin-St Jeor equation is considered the most accurate for the general population, with studies showing it predicts BMR within ±10% for about 82% of non-obese individuals. The Katch-McArdle formula can be more accurate for lean individuals who know their body fat percentage, as it uses lean body mass instead of total weight. The Harris-Benedict equation (revised 1984) is widely used but slightly less accurate than Mifflin-St Jeor."
    },
    {
      question: "How many calories should I eat to lose weight?",
      answer: "To lose weight, you need to eat fewer calories than your TDEE (calorie deficit). A moderate deficit of 15-25% below TDEE is recommended for sustainable fat loss — this typically translates to losing 0.5-1 pound per week. For example, if your TDEE is 2,400 calories, eating 1,800-2,040 calories per day would create a healthy deficit. Deficits larger than 25% can lead to muscle loss and metabolic adaptation."
    },
    {
      question: "What should my macros be for weight loss?",
      answer: "For weight loss (cutting), a common macro ratio is 40% protein, 35% carbs, 25% fat. Higher protein intake (0.7-1.0g per pound of body weight) helps preserve muscle mass during a calorie deficit. Protein also has the highest thermic effect of food (20-30% of calories are used for digestion), making it the most satiating macronutrient."
    },
    {
      question: "What should my macros be for muscle gain (bulking)?",
      answer: "For muscle gain, aim for a 5-20% calorie surplus above TDEE with macros around 30% protein, 45% carbs, 25% fat. Protein should be 0.7-1.0g per pound of body weight for muscle protein synthesis. Carbohydrates fuel workouts and support recovery, while adequate fat intake maintains healthy hormone levels including testosterone."
    },
    {
      question: "How much protein do I need per day?",
      answer: "The optimal protein intake depends on your goal: for general health, 0.36g per pound (0.8g/kg) is the RDA minimum. For weight loss while preserving muscle, 0.7-1.0g per pound (1.6-2.2g/kg) is recommended. For muscle building, 0.7-1.0g per pound (1.6-2.2g/kg). Athletes and those in a large calorie deficit may benefit from up to 1.2g per pound (2.6g/kg) according to research published in the Journal of the International Society of Sports Nutrition."
    },
    {
      question: "What activity level should I choose?",
      answer: "Choose Sedentary (1.2x) if you have a desk job and don't exercise. Lightly Active (1.375x) for light exercise 1-3 days/week. Moderately Active (1.55x) for moderate exercise 3-5 days/week. Very Active (1.725x) for hard exercise 6-7 days/week. Extra Active (1.9x) for very hard daily exercise or a physical job. Most people overestimate their activity level — when in doubt, choose one level lower."
    },
    {
      question: "How accurate are TDEE calculators?",
      answer: "TDEE calculators provide estimates with a typical margin of error of ±10-15%. The Mifflin-St Jeor equation is accurate within 10% for about 82% of non-obese individuals. Factors that affect accuracy include genetics, hormones, stress, sleep quality, and metabolic adaptation. Use the calculated TDEE as a starting point, then adjust based on real-world results after 2-3 weeks of consistent tracking."
    },
    {
      question: "What is NEAT and why does it matter for weight loss?",
      answer: "NEAT (Non-Exercise Activity Thermogenesis) is the energy your body burns through all daily movement that isn't formal exercise — walking, fidgeting, standing, typing, household chores. NEAT accounts for roughly 15% of total daily energy expenditure and can vary by up to 2,000 calories per day between individuals. Increasing NEAT (taking stairs, walking more, standing desk) is one of the most effective and sustainable strategies for increasing calorie burn."
    },
    {
      question: "What is the thermic effect of food (TEF)?",
      answer: "The thermic effect of food (TEF) is the energy required to digest, absorb, and process the nutrients in your food. TEF accounts for 8-15% of TDEE. Protein has the highest TEF at 20-30% (meaning 20-30% of protein calories are used for digestion), carbohydrates are 5-10%, and fats are 0-3%. This is one reason high-protein diets are effective for weight loss — more calories are burned just processing the food."
    },
    {
      question: "How often should I recalculate my TDEE?",
      answer: "Recalculate your TDEE every 4-6 weeks or whenever your weight changes by more than 5 pounds. As you lose weight, your BMR decreases because there is less body mass to maintain. This phenomenon, called metabolic adaptation, means your calorie needs drop over time. Regular recalculation prevents plateaus and ensures your calorie targets remain effective."
    },
    {
      question: "Can I lose fat and build muscle at the same time (body recomposition)?",
      answer: "Yes, body recomposition is possible, especially for beginners, overweight individuals, and those returning to training after a break. It requires eating at or slightly below maintenance calories with high protein intake (1.0g per pound of body weight), resistance training 3-5 times per week, and adequate sleep (7-9 hours). Progress is slower than dedicated cutting or bulking phases, but you can simultaneously reduce body fat while gaining lean muscle mass."
    },
    {
      question: "What is metabolic adaptation?",
      answer: "Metabolic adaptation (also called adaptive thermogenesis) is your body's response to prolonged calorie restriction. When you eat fewer calories, your body reduces energy expenditure by lowering BMR, reducing NEAT, and improving metabolic efficiency. This can slow weight loss over time. Strategies to minimize metabolic adaptation include diet breaks (1-2 weeks at maintenance every 8-12 weeks), refeed days, avoiding extreme deficits, and maintaining muscle mass through resistance training."
    },
    {
      question: "Should I eat back my exercise calories?",
      answer: "Generally, you should not eat back all exercise calories because calorie burn estimates from fitness trackers and machines are often inflated by 20-50%. If you used your activity level to calculate TDEE, exercise is already factored in. If you calculated TDEE using 'Sedentary' and added exercise separately, eating back 50-75% of estimated exercise calories is a reasonable approach to avoid both overeating and excessive deficit."
    }
  ],
  howToSteps: [
    "Select your measurement units (Imperial or Metric) and enter your biological sex",
    "Enter your age, weight, and height accurately",
    "Choose your activity level based on your typical weekly exercise routine",
    "Select your goal: weight loss, maintenance, or muscle gain",
    "Optionally open Advanced Options to enter body fat %, select a BMR equation, choose a macro split preset, and set meals per day",
    "Click 'Calculate TDEE & Macros' to get your personalized results including BMR, TDEE, goal calories, and macro breakdown"
  ],
  toolName: "TDEE & Macro Calculator"
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Calculators",
}

export default function TDEEMacroCalculatorPage() {
  const toolContent = {
    toolName: "TDEE & Macro Calculator — Calculate Daily Calories and Macronutrient Targets",
    quickAnswer: "Your TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns per day. This free calculator estimates your TDEE using the Mifflin-St Jeor, Harris-Benedict, or Katch-McArdle equations, then converts it into personalized protein, carb, and fat targets for your specific goal.",
    keyTakeaways: [
      "TDEE = BMR × Activity Level — it's the total calories you burn in 24 hours including exercise, digestion, and daily movement",
      "Mifflin-St Jeor is the most accurate BMR equation for most adults (±10% accuracy for 82% of people)",
      "For weight loss, eat 15-25% below your TDEE; for muscle gain, eat 5-20% above",
      "Protein intake of 0.7-1.0g per pound of body weight supports both fat loss and muscle growth",
      "TDEE estimates have a ±10-15% margin of error — use them as a starting point and adjust after 2-3 weeks"
    ],
    overview:
      "Calculate your Total Daily Energy Expenditure (TDEE) and personalized macronutrient targets instantly with our free online calculator. Uses three peer-reviewed BMR equations — Mifflin-St Jeor (recommended by the Academy of Nutrition and Dietetics), Harris-Benedict (revised 1984), and Katch-McArdle (body fat based) — with a transparent side-by-side formula comparison. Get customized protein, carbohydrate, and fat targets in grams for weight loss, maintenance, lean bulk, or aggressive bulk. Choose from 5 macro presets (Balanced, Low Carb, High Protein, Keto, Custom), split macros across 2-6 meals per day, and view per-meal breakdowns. Supports both Imperial and Metric units. All calculations run privately in your browser — no email, no signup, no data stored.",
    howToSteps: [
      {
        title: "Enter Your Details",
        description: "Select Imperial or Metric units, then enter your biological sex, age, weight, and height."
      },
      {
        title: "Choose Activity Level",
        description: "Pick from 6 levels: Sedentary, Lightly Active, Moderately Active, Very Active, Extra Active, or Athlete."
      },
      {
        title: "Set Your Goal",
        description: "Select Lose Weight (-25%), Mild Loss (-15%), Maintain, Lean Bulk (+10%), or Bulk (+20%)."
      },
      {
        title: "Customize (Optional)",
        description: "Open Advanced Options to add body fat %, pick a BMR equation, choose a macro preset, or set meals per day."
      },
      {
        title: "Get Results",
        description: "Instantly see your BMR, TDEE, goal calories, full macro breakdown, per-meal split, and formula comparison."
      }
    ],
    features: [
      {
        title: "3 BMR Equations",
        description: "Mifflin-St Jeor, Harris-Benedict, and Katch-McArdle with transparent side-by-side comparison.",
        icon: "Calculator"
      },
      {
        title: "5 Macro Presets",
        description: "Balanced, Low Carb, High Protein, Keto, or fully Custom macro ratio splits.",
        icon: "Utensils"
      },
      {
        title: "Per-Meal Breakdown",
        description: "Automatically splits your daily macros across 2-6 meals for practical daily planning.",
        icon: "BarChart3"
      },
      {
        title: "Goal-Based Targets",
        description: "5 calorie goals from aggressive cut (-25%) to aggressive bulk (+20%).",
        icon: "Target"
      },
      {
        title: "Body Fat Integration",
        description: "Enter body fat % to unlock the Katch-McArdle formula for lean body mass-based accuracy.",
        icon: "Dumbbell"
      },
      {
        title: "No Email Required",
        description: "Free, instant results with copy-to-clipboard. No signup, no email wall, no data stored.",
        icon: "Shield"
      }
    ],
    useCases: [
      {
        title: "Weight Loss Planning",
        description: "Determine your exact calorie deficit and macro targets for sustainable fat loss while preserving muscle."
      },
      {
        title: "Muscle Building",
        description: "Calculate lean bulk calories and high-protein macros optimized for muscle protein synthesis."
      },
      {
        title: "Body Recomposition",
        description: "Find your maintenance calories and high-protein targets to lose fat and build muscle simultaneously."
      },
      {
        title: "Diet Comparison",
        description: "Compare macro splits across Balanced, Low Carb, High Protein, and Keto approaches for your calorie level."
      },
      {
        title: "Meal Prep Planning",
        description: "Use per-meal macro breakdowns to plan and prep meals that hit your daily targets."
      }
    ],
    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Flame className="h-6 w-6 text-primary" />
            What Is TDEE (Total Daily Energy Expenditure)?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your Total Daily Energy Expenditure (TDEE) is the total number of calories your body burns in 24 hours. It represents the complete picture of your daily energy needs, accounting for everything from keeping your heart beating to your morning run. For most adults, TDEE ranges from 1,600 to 3,200 calories per day depending on age, sex, weight, height, and activity level.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding your TDEE is the foundation of any nutrition strategy. To lose weight, you eat below your TDEE (calorie deficit). To gain weight, you eat above it (calorie surplus). To maintain, you eat at TDEE. Without knowing this number, calorie and macro targets are just guesswork.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            The 4 Components of TDEE
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            TDEE is made up of four distinct energy expenditure components. Understanding each one helps you identify where you can make meaningful changes to your energy balance:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Component</th>
                  <th className="p-3 text-left">Full Name</th>
                  <th className="p-3 text-left">% of TDEE</th>
                  <th className="p-3 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-bold text-blue-500">BMR</td>
                  <td className="p-3">Basal Metabolic Rate</td>
                  <td className="p-3 font-semibold">60-70%</td>
                  <td className="p-3">Calories burned at complete rest — breathing, circulation, cell repair, organ function</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-500">NEAT</td>
                  <td className="p-3">Non-Exercise Activity Thermogenesis</td>
                  <td className="p-3 font-semibold">~15%</td>
                  <td className="p-3">All daily movement except formal exercise — walking, fidgeting, standing, household tasks</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-green-500">TEF</td>
                  <td className="p-3">Thermic Effect of Food</td>
                  <td className="p-3 font-semibold">8-15%</td>
                  <td className="p-3">Energy used to digest, absorb, and process nutrients. Protein: 20-30%, Carbs: 5-10%, Fat: 0-3%</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-red-500">EAT</td>
                  <td className="p-3">Exercise Activity Thermogenesis</td>
                  <td className="p-3 font-semibold">5-10%</td>
                  <td className="p-3">Calories burned through structured exercise — running, weight training, sports, swimming</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            BMR is the largest component and is largely determined by genetics, age, sex, and body composition. NEAT is the most variable component between individuals — it can differ by up to 2,000 calories per day between two people of the same size. This is why increasing daily movement (walking, standing, taking stairs) often has a bigger impact on weight management than adding gym sessions.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            BMR Equations Explained: Mifflin-St Jeor vs. Harris-Benedict vs. Katch-McArdle
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our calculator offers three peer-reviewed BMR equations. Each has strengths and is suited for different populations. The Mifflin-St Jeor equation is recommended by the Academy of Nutrition and Dietetics as the most accurate for healthy adults:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Equation</th>
                  <th className="p-3 text-left">Formula (Male)</th>
                  <th className="p-3 text-left">Formula (Female)</th>
                  <th className="p-3 text-left">Best For</th>
                  <th className="p-3 text-left">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-bold text-foreground">Mifflin-St Jeor</td>
                  <td className="p-3 font-mono text-xs">(10 &times; kg) + (6.25 &times; cm) - (5 &times; age) + 5</td>
                  <td className="p-3 font-mono text-xs">(10 &times; kg) + (6.25 &times; cm) - (5 &times; age) - 161</td>
                  <td className="p-3">General population</td>
                  <td className="p-3">±10% for 82% of non-obese</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-foreground">Harris-Benedict (1984)</td>
                  <td className="p-3 font-mono text-xs">88.36 + (13.4 &times; kg) + (4.8 &times; cm) - (5.68 &times; age)</td>
                  <td className="p-3 font-mono text-xs">447.6 + (9.25 &times; kg) + (3.1 &times; cm) - (4.33 &times; age)</td>
                  <td className="p-3">Widely validated</td>
                  <td className="p-3">±10% for 69% of non-obese</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-foreground">Katch-McArdle</td>
                  <td className="p-3 font-mono text-xs" colSpan={2}>370 + (21.6 &times; lean body mass in kg)</td>
                  <td className="p-3">Lean individuals with known body fat %</td>
                  <td className="p-3">Most accurate when BF% is known</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Utensils className="h-6 w-6 text-primary" />
            Understanding Macronutrients: Protein, Carbs, and Fat
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Macronutrients (macros) are the three types of nutrients that provide calories and energy. Each gram of protein provides 4 calories, each gram of carbohydrate provides 4 calories, and each gram of fat provides 9 calories. The ratio in which you consume these macros significantly impacts body composition, performance, and satiety — even at the same total calorie intake.
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Macronutrient</th>
                  <th className="p-3 text-left">Calories/Gram</th>
                  <th className="p-3 text-left">TEF (Thermic Effect)</th>
                  <th className="p-3 text-left">Primary Role</th>
                  <th className="p-3 text-left">Key Sources</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-bold text-blue-500">Protein</td>
                  <td className="p-3">4 cal/g</td>
                  <td className="p-3 font-semibold text-blue-500">20-30%</td>
                  <td className="p-3">Muscle repair, immune function, enzyme production, satiety</td>
                  <td className="p-3">Chicken, fish, eggs, Greek yogurt, tofu, lentils</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-amber-500">Carbohydrates</td>
                  <td className="p-3">4 cal/g</td>
                  <td className="p-3">5-10%</td>
                  <td className="p-3">Primary energy source, brain fuel, exercise performance</td>
                  <td className="p-3">Rice, oats, potatoes, fruit, bread, vegetables</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-green-500">Fat</td>
                  <td className="p-3">9 cal/g</td>
                  <td className="p-3">0-3%</td>
                  <td className="p-3">Hormone production, vitamin absorption, cell membranes</td>
                  <td className="p-3">Olive oil, nuts, avocado, salmon, eggs, cheese</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Macro Ratios by Goal: Cutting, Maintenance, Bulking, and Recomposition
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your ideal macro ratio depends on your specific goal. Here are evidence-based starting points recommended by sports nutritionists:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Goal</th>
                  <th className="p-3 text-left">Calorie Adjustment</th>
                  <th className="p-3 text-left">Protein</th>
                  <th className="p-3 text-left">Carbs</th>
                  <th className="p-3 text-left">Fat</th>
                  <th className="p-3 text-left">Protein (g/lb)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-bold text-red-500">Aggressive Cut</td>
                  <td className="p-3">TDEE - 25%</td>
                  <td className="p-3">40%</td>
                  <td className="p-3">35%</td>
                  <td className="p-3">25%</td>
                  <td className="p-3">0.9-1.2g/lb</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-orange-500">Steady Cut</td>
                  <td className="p-3">TDEE - 15%</td>
                  <td className="p-3">35%</td>
                  <td className="p-3">40%</td>
                  <td className="p-3">25%</td>
                  <td className="p-3">0.8-1.0g/lb</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-green-600">Maintenance</td>
                  <td className="p-3">TDEE</td>
                  <td className="p-3">30%</td>
                  <td className="p-3">40%</td>
                  <td className="p-3">30%</td>
                  <td className="p-3">0.7-0.9g/lb</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-blue-500">Lean Bulk</td>
                  <td className="p-3">TDEE + 10%</td>
                  <td className="p-3">30%</td>
                  <td className="p-3">45%</td>
                  <td className="p-3">25%</td>
                  <td className="p-3">0.7-1.0g/lb</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-purple-500">Aggressive Bulk</td>
                  <td className="p-3">TDEE + 20%</td>
                  <td className="p-3">25%</td>
                  <td className="p-3">50%</td>
                  <td className="p-3">25%</td>
                  <td className="p-3">0.7-0.9g/lb</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-foreground">Body Recomp</td>
                  <td className="p-3">TDEE to TDEE - 10%</td>
                  <td className="p-3">35-40%</td>
                  <td className="p-3">30-35%</td>
                  <td className="p-3">25-30%</td>
                  <td className="p-3">1.0-1.2g/lb</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            These ratios are starting points based on research from the International Society of Sports Nutrition (ISSN). Individual needs vary based on training volume, body composition, food preferences, and medical conditions. Adjust after 2-3 weeks based on real-world results — track your weight weekly and progress photos monthly.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Activity Level Guide: Choosing the Right Multiplier
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your activity level multiplier converts BMR into TDEE. Selecting the right level is critical for accuracy. Most people tend to overestimate their activity level — when in doubt, choose one level lower and adjust based on results:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Level</th>
                  <th className="p-3 text-left">Multiplier</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-left">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold">Sedentary</td>
                  <td className="p-3 font-mono">1.2</td>
                  <td className="p-3">Little or no exercise</td>
                  <td className="p-3">Office worker, no regular exercise, drives everywhere</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Lightly Active</td>
                  <td className="p-3 font-mono">1.375</td>
                  <td className="p-3">Light exercise 1-3 days/week</td>
                  <td className="p-3">Walks 30 min most days, 1-2 light gym sessions</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Moderately Active</td>
                  <td className="p-3 font-mono">1.55</td>
                  <td className="p-3">Moderate exercise 3-5 days/week</td>
                  <td className="p-3">Regular gym-goer, 3-5 structured workouts per week</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Very Active</td>
                  <td className="p-3 font-mono">1.725</td>
                  <td className="p-3">Hard exercise 6-7 days/week</td>
                  <td className="p-3">Intense daily training, active job (trainer, construction)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Extra Active</td>
                  <td className="p-3 font-mono">1.9</td>
                  <td className="p-3">Very hard daily exercise</td>
                  <td className="p-3">Hard labor job + daily training, competitive sports</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Athlete</td>
                  <td className="p-3 font-mono">2.0</td>
                  <td className="p-3">Professional-level training</td>
                  <td className="p-3">Professional athlete, 2x/day training sessions</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Common Mistakes When Calculating TDEE and Macros
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Avoid these frequent errors that can undermine your nutrition plan:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 text-red-500 font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Overestimating Activity Level</h4>
                <p className="text-sm text-muted-foreground">Most people are less active than they think. A desk worker who exercises 3x/week is &quot;Lightly Active&quot; to &quot;Moderately Active,&quot; not &quot;Very Active.&quot; When in doubt, choose one level lower.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 text-red-500 font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Treating TDEE as Exact</h4>
                <p className="text-sm text-muted-foreground">TDEE calculators provide estimates with ±10-15% error. Use the number as a starting point, then adjust based on real results after 2-3 weeks of consistent tracking.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 text-red-500 font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Setting Too Aggressive a Deficit</h4>
                <p className="text-sm text-muted-foreground">Deficits exceeding 25-30% of TDEE lead to increased muscle loss, metabolic adaptation, low energy, poor sleep, and higher rebound risk. A moderate 15-20% deficit is more sustainable.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 text-red-500 font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Neglecting to Recalculate</h4>
                <p className="text-sm text-muted-foreground">As you lose weight, your TDEE decreases. Recalculate every 4-6 weeks or after every 5-pound change to avoid plateaus.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-red-500/10 text-red-500 font-bold text-sm">5</div>
              <div>
                <h4 className="font-semibold text-foreground">Ignoring Protein Intake</h4>
                <p className="text-sm text-muted-foreground">Protein is the most important macro for body composition. Getting adequate protein (0.7-1.0g/lb) preserves muscle during cuts, supports growth during bulks, and increases satiety at every calorie level.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            BMR vs. TDEE: What Is the Difference?
          </h2>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Metric</th>
                  <th className="p-3 text-left">BMR (Basal Metabolic Rate)</th>
                  <th className="p-3 text-left">TDEE (Total Daily Energy Expenditure)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold">Definition</td>
                  <td className="p-3">Calories burned at complete rest</td>
                  <td className="p-3">Total calories burned in 24 hours</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Includes</td>
                  <td className="p-3">Breathing, circulation, cell repair only</td>
                  <td className="p-3">BMR + activity + digestion + movement</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Typical Range</td>
                  <td className="p-3">1,200-2,000 cal/day</td>
                  <td className="p-3">1,600-3,200 cal/day</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Use Case</td>
                  <td className="p-3">Base for TDEE calculation</td>
                  <td className="p-3">Set calorie targets for weight management</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Should You Eat At This?</td>
                  <td className="p-3 text-red-500 font-semibold">No — eating at BMR is too low for most people</td>
                  <td className="p-3 text-green-600 font-semibold">Yes — adjust TDEE for your goal</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>
      </div>
    ),
    aboutToolText: "This TDEE and Macro Calculator uses peer-reviewed metabolic equations to estimate your daily calorie needs and convert them into actionable macronutrient targets. Whether you are cutting, maintaining, or bulking, accurate TDEE and macro targets are the foundation of any successful nutrition plan.",
    faqs: [
      {
        question: "What is TDEE and how is it calculated?",
        answer: "TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in 24 hours. It is calculated by first determining your Basal Metabolic Rate (BMR) using an equation like Mifflin-St Jeor, then multiplying by an activity factor (1.2 for sedentary to 2.0 for athletes). TDEE includes BMR (60-70%), the thermic effect of food (8-15%), exercise activity (5-10%), and non-exercise activity thermogenesis or NEAT (15%)."
      },
      {
        question: "What is the difference between BMR and TDEE?",
        answer: "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest just to maintain basic life functions like breathing, circulation, and cell production. TDEE (Total Daily Energy Expenditure) includes your BMR plus all additional calories burned through physical activity, digestion, and daily movement. TDEE is always higher than BMR — typically 1.2x to 2.0x depending on activity level."
      },
      {
        question: "Which BMR equation is most accurate?",
        answer: "The Mifflin-St Jeor equation is considered the most accurate for the general population, with studies showing it predicts BMR within ±10% for about 82% of non-obese individuals. The Katch-McArdle formula can be more accurate for lean individuals who know their body fat percentage, as it uses lean body mass instead of total weight."
      },
      {
        question: "How many calories should I eat to lose weight?",
        answer: "To lose weight, eat 15-25% fewer calories than your TDEE. A moderate deficit typically translates to losing 0.5-1 pound per week. For example, if your TDEE is 2,400 calories, eating 1,800-2,040 calories per day would create a healthy deficit. Deficits larger than 25% can lead to muscle loss and metabolic adaptation."
      },
      {
        question: "What should my macros be for weight loss?",
        answer: "For weight loss, a common macro ratio is 40% protein, 35% carbs, 25% fat. Higher protein (0.7-1.0g per pound of body weight) helps preserve muscle mass during a calorie deficit and increases satiety."
      },
      {
        question: "What should my macros be for muscle gain?",
        answer: "For muscle gain, aim for a 5-20% calorie surplus with macros around 30% protein, 45% carbs, 25% fat. Protein should be 0.7-1.0g per pound of body weight. Carbohydrates fuel workouts and recovery."
      },
      {
        question: "How much protein do I need per day?",
        answer: "For general health: 0.36g/lb (0.8g/kg) is the RDA minimum. For weight loss while preserving muscle: 0.7-1.0g/lb. For muscle building: 0.7-1.0g/lb. Athletes and those in a large deficit may benefit from up to 1.2g/lb."
      },
      {
        question: "What activity level should I choose?",
        answer: "Choose Sedentary if you have a desk job and don't exercise. Lightly Active for 1-3 light workouts/week. Moderately Active for 3-5 workouts/week. Very Active for hard daily exercise. Most people overestimate — when in doubt, choose one level lower."
      },
      {
        question: "How accurate are TDEE calculators?",
        answer: "TDEE calculators have a typical margin of error of ±10-15%. Use the result as a starting point and adjust based on real-world results after 2-3 weeks of consistent tracking."
      },
      {
        question: "What is NEAT and why does it matter?",
        answer: "NEAT (Non-Exercise Activity Thermogenesis) is energy burned through daily movement excluding exercise — walking, fidgeting, standing. It accounts for ~15% of TDEE and can vary by up to 2,000 cal/day between people. Increasing NEAT is one of the most effective weight management strategies."
      },
      {
        question: "What is the thermic effect of food?",
        answer: "TEF is the energy required to digest food. Protein uses 20-30% of its calories for digestion, carbs 5-10%, and fat 0-3%. TEF accounts for 8-15% of TDEE, which is why high-protein diets are effective for weight loss."
      },
      {
        question: "How often should I recalculate my TDEE?",
        answer: "Recalculate every 4-6 weeks or after every 5-pound weight change. As you lose weight, your BMR decreases, so your calorie targets need updating to prevent plateaus."
      },
      {
        question: "Can I lose fat and build muscle at the same time?",
        answer: "Yes — body recomposition is possible for beginners, overweight individuals, and those returning to training. Eat at or slightly below maintenance with high protein (1.0g/lb), train with resistance 3-5x/week, and sleep 7-9 hours."
      },
      {
        question: "What is metabolic adaptation?",
        answer: "Metabolic adaptation is your body reducing energy expenditure during prolonged calorie restriction. Counter it with diet breaks every 8-12 weeks, refeed days, avoiding extreme deficits, and maintaining muscle mass through resistance training."
      },
      {
        question: "Should I eat back my exercise calories?",
        answer: "If you already factored exercise into your activity level, no. If you used 'Sedentary' and exercise separately, eating back 50-75% of estimated exercise calories is reasonable — fitness trackers overestimate burn by 20-50%."
      }
    ],
    relatedTools: [
      { name: "BMR Calculator", href: "/calculator/bmr-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Biological Age Calculator", href: "/calculator/biological-age-calculator" },
      { name: "Pace Calculator", href: "/calculator/pace-calculator" },
      { name: "Cortisol Peak Calculator", href: "/calculator/cortisol-peak-calculator" },
      { name: "All Calculators", href: "/calculator" },
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "TDEE & Macro Calculator — Free Daily Calorie & Macronutrient Calculator",
        description: "Calculate your Total Daily Energy Expenditure (TDEE) and personalized macro targets using 3 BMR equations. Get protein, carbs, and fat in grams for weight loss, maintenance, or muscle gain. Free, instant, no signup.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "TDEE & Macro Calculator", href: "/calculator/tdee-macro-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <TDEEMacroCalculatorPageContent />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "TDEE & Macro Calculator — Daily Calories, Protein, Carbs & Fats",
        description: "Free TDEE & macro calculator with Mifflin-St Jeor, Harris-Benedict & Katch-McArdle equations. Calculate BMR, daily calories, protein, carbs & fats for weight loss, maintenance or muscle gain. Instant results.",
        path: "/calculator/tdee-macro-calculator"
      }}
    />
  )
}
