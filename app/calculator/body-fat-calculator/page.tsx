import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import dynamic from "next/dynamic"
import { ToolLoader } from "@/components/common/tool-loader"

const BodyFatCalculator = dynamic(() => import("@/components/health/body-fat-calculator"), {
  loading: () => <ToolLoader />
})
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain, Activity, Target, BookOpen, Shield, Users, TrendingUp, Calculator, Heart, AlertTriangle, Info, Scale } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Body Fat Calculator — Estimate Body Fat Percentage Online Free (2026)",
  description:
    "Free body fat calculator using U.S. Navy method & BMI method. Get body fat percentage, fat mass vs lean mass breakdown, ACE fitness categories, and ideal body fat recommendations for men and women. Private & instant.",
  path: "/calculator/body-fat-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Body Fat Calculator", href: "/calculator/body-fat-calculator" }
  ],
  schemaOptions: {
    name: "Body Fat Calculator | Advanced Body Fat Percentage Calculator",
    alternateName: "Professional Body Composition Analysis Tool",
    applicationCategory: "HealthApplication",
    featureList: [
      "U.S. Navy Method Calculation",
      "BMI Method Calculation",
      "Body Fat Percentage Estimation",
      "Fat Mass and Lean Mass Analysis",
      "Ideal Body Fat Recommendations",
      "Body Fat Categories and Ranges",
      "Health Risk Assessment"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function BodyFatCalculatorPage() {
  const toolContent = {
    toolName: "Body Fat Calculator — Body Fat Percentage Estimator",
    overview: "Estimate your body fat percentage with our free online body fat calculator using the U.S. Navy circumference method (most accurate non-invasive method) and BMI-based estimation. Get a complete body composition analysis including fat mass vs. lean muscle mass breakdown, ACE (American Council on Exercise) fitness categories (essential fat, athletic, fitness, average, obese), ideal body fat ranges for men and women, and personalized health risk assessments. Supports metric (cm/kg) and imperial (inches/lbs) units with gender-specific calculations.",

    howToSteps: [
      "Enter Your Details: Input age, gender, height, and weight in metric (cm/kg) or imperial (inches/lbs) units.",
      "Take Body Measurements: Measure neck circumference, waist circumference at navel level, and hip circumference (women only) with a flexible tape measure.",
      "Select Calculation Method: Choose U.S. Navy method (recommended — uses circumference measurements) or BMI method (uses height and weight only).",
      "View Body Composition Results: See your body fat percentage, total fat mass (lbs/kg), lean body mass, and body fat category.",
      "Review Health Recommendations: Get personalized insights on ideal body fat range, health risk assessment, and actionable fitness guidance."
    ],

    features: [
      "Dual Calculation Methods: U.S. Navy circumference method (most accurate non-invasive) and BMI-based body fat estimation.",
      "Complete Body Composition: Detailed fat mass vs. lean muscle mass breakdown in pounds and kilograms.",
      "ACE Fitness Categories: Classification into essential fat, athletic, fitness, average, and obese ranges per American Council on Exercise standards.",
      "Gender-Specific Calculations: Separate formulas and ideal ranges for men (essential fat 2-5%) and women (essential fat 10-13%).",
      "Personalized Health Insights: Actionable recommendations based on your specific body fat percentage and fitness category.",
      "Metric & Imperial Support: Full support for cm/kg and inches/lbs measurement systems.",
      "Visual Body Composition Charts: Easy-to-read charts showing your body fat percentage relative to healthy ranges.",
      "Mobile Responsive: Access body composition analysis on any device — phone, tablet, or desktop."
    ],

    useCases: [
      "Fitness Progress Tracking: Monitor body composition changes over time — track fat loss and muscle gain beyond just scale weight.",
      "Smart Weight Loss: Ensure you are losing body fat, not lean muscle mass, during calorie-deficit dieting phases.",
      "Muscle Building Monitoring: Track lean mass gains and minimize fat accumulation during bulking and hypertrophy cycles.",
      "Health Risk Screening: Assess obesity-related risk factors including cardiovascular disease, type 2 diabetes, and metabolic syndrome.",
      "Athletic Performance Optimization: Achieve sport-specific body fat targets for endurance sports, bodybuilding, and competitive athletics.",
      "Medical Body Composition Assessment: Screen for unhealthy body fat levels (essential fat deficiency or clinical obesity) requiring medical attention."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Understanding Body Fat Percentage: The Complete Guide to Body Composition
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your <strong>Body Fat Percentage</strong> is the total mass of fat divided by your total body mass, multiplied by 100. Body fat includes <em>essential body fat</em> (required for life functions) and <em>storage body fat</em> (energy reserves). Unlike weight or BMI, body fat percentage is a superior indicator of health and athletic performance because it distinguishes between lean muscle mass and fat mass—two very different types of tissue with very different health implications.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding your body fat percentage provides critical insights beyond what a scale or BMI calculator can tell you. Two people can have the same weight or BMI but vastly different body compositions—one might be lean and muscular while the other carries excess fat. Our advanced body fat calculator uses the U.S. Navy method (widely considered the most accurate non-invasive method) and the BMI method to estimate your body fat percentage, helping you make informed decisions about your fitness, health, and body composition goals.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            Body Fat Categories: Understanding ACE Standards
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The American Council on Exercise (ACE) provides standard ranges for body composition classification. These categories help you understand where your body fat percentage falls relative to health and fitness standards:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Women (%)</th>
                  <th className="p-3 text-left">Men (%)</th>
                  <th className="p-3 text-left">Health Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-semibold text-foreground">Essential Fat</td>
                  <td className="p-3">10-13%</td>
                  <td className="p-3">2-5%</td>
                  <td className="p-3">Minimum required for life functions</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground text-green-600">Athletes</td>
                  <td className="p-3 text-green-600">14-20%</td>
                  <td className="p-3 text-green-600">6-13%</td>
                  <td className="p-3">Low risk, optimal for performance</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground text-blue-600">Fitness</td>
                  <td className="p-3 text-blue-600">21-24%</td>
                  <td className="p-3 text-blue-600">14-17%</td>
                  <td className="p-3">Low risk, good fitness level</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground text-yellow-600">Average</td>
                  <td className="p-3 text-yellow-600">25-31%</td>
                  <td className="p-3 text-yellow-600">18-24%</td>
                  <td className="p-3">Moderate risk, acceptable range</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-foreground text-red-600">Obese</td>
                  <td className="p-3 text-red-600">32%+</td>
                  <td className="p-3 text-red-600">25%+</td>
                  <td className="p-3">High risk, health intervention needed</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            How to Calculate Body Fat Percentage: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these steps to accurately calculate your body fat percentage using our advanced calculator:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter Basic Information</h4>
                <p className="text-sm text-muted-foreground">Input your age, gender, height, and weight. Use accurate measurements for best results. Weigh yourself in the morning after using the bathroom but before eating or drinking for consistent measurements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Take Circumference Measurements</h4>
                <p className="text-sm text-muted-foreground">Measure your neck (below the Adam's apple for men, below the larynx for women), waist (at navel level for men, narrowest point above navel for women), and hips for women (widest part of buttocks). Use a flexible measuring tape, keep it flat against the skin, and measure at the same time of day for consistency.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Select Calculation Method</h4>
                <p className="text-sm text-muted-foreground">Choose the U.S. Navy method (recommended for accuracy, uses circumference measurements) or the BMI method (uses BMI estimation). The U.S. Navy method is generally more accurate, typically within 3-4% of DEXA scan results.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Review Your Results</h4>
                <p className="text-sm text-muted-foreground">View your body fat percentage, fat mass (total weight of fat), lean mass (total weight of muscle, bone, water, organs), body fat category (Athletic, Fitness, Average, or Obese), and personalized health recommendations based on your specific results.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Accurate Measurement Tips: Getting Reliable Body Fat Results
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these best practices to ensure accurate and consistent body fat measurements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                Neck Measurement
              </h4>
              <p className="text-sm text-muted-foreground">Measure below the larynx (Adam's apple for men). Keep the tape flat and parallel to the floor. Don't compress the skin. Take measurement at the end of a normal breath (not after inhaling or exhaling).</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Activity className="h-4 w-4 text-purple-500" />
                Waist Measurement (Men)
              </h4>
              <p className="text-sm text-muted-foreground">Measure at the navel (belly button) level. Stand straight with feet together. Don't suck in your stomach or push it out. Measure at the end of a normal breath. Ensure the tape is parallel to the floor.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 text-green-500" />
                Waist Measurement (Women)
              </h4>
              <p className="text-sm text-muted-foreground">Measure at the narrowest point above the navel, typically just below the ribcage. Stand straight with feet together. Don't compress the skin. Measure at the end of a normal breath for consistency.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Scale className="h-4 w-4 text-orange-500" />
                Hip Measurement (Women)
              </h4>
              <p className="text-sm text-muted-foreground">Measure at the widest part of the buttocks/hips. Stand with feet together. Keep the tape parallel to the floor. Don't compress the skin. This measurement is used in the U.S. Navy method formula for women.</p>
            </div>
          </div>
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-2">Consistency is Key</h4>
            <p className="text-sm text-muted-foreground">For the most reliable tracking, measure at the same time of day (preferably morning, after bathroom but before eating/drinking), maintain consistent hydration levels, and use the same measuring tape and technique each time. Hydration levels can significantly affect measurements—dehydration can lower readings, while excess water retention can increase them.</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            U.S. Navy Method vs. BMI Method: Which is More Accurate?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our calculator offers two methods for estimating body fat percentage. Understanding the differences helps you choose the best option:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Method</th>
                  <th className="p-3 text-left">Accuracy</th>
                  <th className="p-3 text-left">Required Measurements</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">U.S. Navy Method</td>
                  <td className="p-3">±3-4% of DEXA scan</td>
                  <td className="p-3">Age, gender, height, weight, neck, waist, hips (women)</td>
                  <td className="p-3">Most accurate, recommended for all users</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">BMI Method</td>
                  <td className="p-3">±5-7% of DEXA scan</td>
                  <td className="p-3">Age, gender, height, weight</td>
                  <td className="p-3">Quick estimate, less accurate for athletes</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            The <strong>U.S. Navy Method</strong> is widely considered the most accurate non-invasive method for estimating body fat percentage. It uses circumference measurements combined with demographic data to provide estimates typically within 3-4% of DEXA scan results (the gold standard). This method accounts for body shape and fat distribution, making it more accurate than BMI-based estimates.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            The <strong>BMI Method</strong> provides a quick estimate based on BMI calculations, but it's less accurate, especially for athletes and muscular individuals who may have elevated BMI despite low body fat. Use the BMI method only if you cannot take circumference measurements, and understand that results may be less precise.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Expert Insight: Essential Fat vs. Storage Fat
          </h2>
          <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-l-4 border-red-500 rounded-lg">
            <p className="italic text-red-700 dark:text-red-300 leading-relaxed">
              "It's a myth that 'zero' body fat is the goal. <strong>Essential fat</strong> is required for life and reproductive functions. It protects internal organs, stores fat-soluble vitamins (A, D, E, K), provides energy reserves during illness, and plays critical roles in hormone production and cell function. Women have higher essential fat requirements (10-13%) than men (2-5%) primarily due to hormonal needs and reproductive functions including pregnancy and breastfeeding. <strong>Storage fat</strong> is the accumulation of adipose tissue that serves as an energy reserve. While excess storage fat increases health risks, having some storage fat is normal and healthy."
            </p>
            <p className="text-sm font-semibold text-red-600 dark:text-red-400 mt-2">— FastTools Sports Science Team</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            Health Risks Associated with Body Fat Levels
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding the health implications of different body fat levels helps you make informed decisions about your fitness and health goals:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-500" />
                High Body Fat (Obese: Men 25%+, Women 32%+)
              </h4>
              <p className="text-sm text-muted-foreground">Increased risk of type 2 diabetes, cardiovascular disease, high blood pressure, stroke, certain cancers (breast, colon, kidney), sleep apnea, osteoarthritis, fatty liver disease, and higher mortality rates. Visceral fat (around internal organs) is particularly dangerous and associated with metabolic syndrome.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="h-4 w-4 text-yellow-500" />
                Average Body Fat (Men 18-24%, Women 25-31%)
              </h4>
              <p className="text-sm text-muted-foreground">Acceptable range with moderate health risks. While not optimal, this range is manageable with healthy lifestyle habits including regular exercise and balanced nutrition. Some individuals may experience minor health issues depending on genetic factors and lifestyle choices.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 text-green-500" />
                Low Body Fat (Athletic/Fitness: Men 6-17%, Women 14-24%)
              </h4>
              <p className="text-sm text-muted-foreground">Low health risks, optimal for athletic performance, improved metabolic health, better insulin sensitivity, reduced risk of chronic diseases, and enhanced cardiovascular health. This range supports optimal physical performance while maintaining essential body functions.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                Very Low Body Fat (Below Essential: Men &lt;2%, Women &lt;10%)
              </h4>
              <p className="text-sm text-muted-foreground">Dangerous and potentially life-threatening. Can cause hormonal imbalances, fertility issues, weakened immune function, bone density loss, nutritional deficiencies, and organ damage. Very low body fat should only be maintained temporarily for specific athletic competitions under medical supervision.</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            How to Lower Body Fat Percentage: Evidence-Based Strategies
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Reducing body fat percentage requires a combination of dietary changes and exercise. Here are proven strategies:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Create a Moderate Caloric Deficit</h4>
                <p className="text-sm text-muted-foreground">Eat 300-500 calories less than you burn daily (20-25% deficit). This creates sustainable fat loss without extreme restriction that can lead to muscle loss. Track calories accurately using a food scale and nutrition app for best results.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Prioritize Resistance Training</h4>
                <p className="text-sm text-muted-foreground">Lift weights 3-4 times per week to preserve and build muscle mass during fat loss. Muscle is metabolically active tissue that increases calorie burn and prevents metabolic slowdown. Aim for progressive overload and compound movements (squats, deadlifts, presses).</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Increase Protein Intake</h4>
                <p className="text-sm text-muted-foreground">Consume 0.8-1g of protein per pound of body weight (1.8-2.2g per kg) to preserve muscle during fat loss. Protein also increases satiety and has the highest thermic effect of food (burns more calories during digestion). Include lean protein sources in every meal.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Add Cardio Exercise</h4>
                <p className="text-sm text-muted-foreground">Include 150-300 minutes of moderate cardio or 75-150 minutes of vigorous cardio per week. Cardio burns additional calories and improves cardiovascular health. However, don't rely solely on cardio—combine with resistance training for best body composition results.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
              <div>
                <h4 className="font-semibold text-foreground">Be Patient and Consistent</h4>
                <p className="text-sm text-muted-foreground">Aim to lose 0.5-1% body fat per month for sustainable results. Rapid fat loss often leads to muscle loss and metabolic slowdown. Track progress monthly (not daily) to account for natural fluctuations, and stay consistent with your routine even when progress seems slow.</p>
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
            Your privacy and data security are our top priorities. Our body fat calculator processes all information locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">All body fat calculations happen directly in your browser. Your weight, height, measurements, and body fat results never leave your device or get transmitted to our servers. No data is sent over the internet during calculation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your health information. There's no database of your body fat calculations, no analytics on your usage, and no way for us to access your measurements or results.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Tracking or Cookies</h4>
                <p className="text-sm text-muted-foreground">We don't use cookies, tracking pixels, or analytics to monitor your usage of the body fat calculator. Your browsing and health information remain completely private while using our tool.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),

    proTip: "Hydration levels can affect measurements. For the most consistent results, measure yourself first thing in the morning after using the restroom but before eating or drinking.",

    faqs: [
      {
        question: "How accurate is the U.S. Navy Method?",
        answer: "The U.S. Navy Method is widely considered one of the most accurate ways to estimate body fat without specialized equipment, typically within 3-4% of DEXA scan results (the gold standard for body composition measurement). This accuracy makes it suitable for tracking changes over time and making informed fitness decisions, though it should not be used as a replacement for professional medical assessment."
      },
      {
        question: "What is a healthy body fat percentage?",
        answer: "For men, 14-24% is generally considered healthy, with 14-17% indicating good fitness and 18-24% being acceptable. For women, 21-31% is considered healthy, with 21-24% indicating good fitness and 25-31% being acceptable. Athletes often have lower percentages (6-13% for men, 14-20% for women) due to higher muscle mass and lower fat mass."
      },
      {
        question: "Can I spot reduce fat?",
        answer: "No, fat loss occurs systemically throughout the entire body. You cannot target specific areas like the belly, thighs, or arms for fat loss through exercise alone. Your body decides where to lose fat based on genetics, hormones, and other factors. Focus on overall body fat reduction through caloric deficit and exercise, and your problem areas will eventually reduce as well."
      },
      {
        question: "Why is my body fat percentage higher than I expected?",
        answer: "Many people underestimate their body fat percentage. 'Normal weight obesity' or 'skinny fat' is common, where weight and BMI appear normal but muscle mass is low and fat mass is high. This occurs when people have lost muscle through dieting without resistance training or have naturally low muscle mass despite being at a healthy weight."
      },
      {
        question: "How often should I measure my body fat?",
        answer: "Measure every 2-4 weeks to track long-term trends while ignoring daily fluctuations due to water weight, hydration levels, food intake, and bowel movements. Body composition changes slowly (typically 0.5-1% body fat per month with consistent effort), so daily measurements can be misleading and cause unnecessary stress. Monthly measurements provide meaningful progress tracking."
      },
      {
        question: "What is the difference between fat mass and lean mass?",
        answer: "Fat mass is the total weight of fat in your body, including essential fat (required for life functions) and storage fat (energy reserves). Lean mass is everything else: muscle, bone, water, organs, connective tissue, and other non-fat tissue. Knowing both fat mass and lean mass helps you understand your body composition and track whether you're losing fat or muscle during weight changes."
      },
      {
        question: "Does muscle weigh more than fat?",
        answer: "A pound of muscle weighs the same as a pound of fat—both are one pound. However, muscle is much denser than fat (approximately 1.06 g/ml vs 0.9 g/ml), so it takes up less space. This is why you can look leaner and more toned without losing weight if you build muscle while losing fat. Body recomposition (gaining muscle while losing fat) can result in a lower body fat percentage without significant weight change."
      },
      {
        question: "Is BMI or Body Fat Percentage better?",
        answer: "Body Fat Percentage is generally better because it distinguishes between muscle and fat, providing a more accurate health assessment. BMI can misclassify muscular individuals as overweight or obese despite low body fat percentage. However, both metrics have value—BMI is a quick screening tool, while body fat percentage provides more detailed body composition information. Use both for a comprehensive health picture."
      },
      {
        question: "What is visceral fat?",
        answer: "Visceral fat is stored around your internal organs (liver, pancreas, intestines) in the abdominal cavity. It is more dangerous than subcutaneous fat (stored under the skin) and is strongly linked to metabolic diseases including type 2 diabetes, cardiovascular disease, and metabolic syndrome. Waist circumference measurements help assess visceral fat levels—men with waist >40 inches and women with waist >35 inches have increased visceral fat."
      },
      {
        question: "How can I lower my body fat percentage?",
        answer: "Lower body fat through a combination of caloric deficit (eating 300-500 calories less than you burn daily), resistance training (3-4 times per week to preserve muscle), increased protein intake (0.8-1g per pound of body weight), and moderate cardio exercise (150-300 minutes per week). This approach ensures you lose fat while preserving or building muscle, resulting in a lower body fat percentage and improved body composition."
      },
      {
        question: "What is subcutaneous fat?",
        answer: "Subcutaneous fat is stored under the skin, visible as the fat you can pinch between your fingers. While excess subcutaneous fat can affect appearance and is linked to health risks, it is generally less dangerous than visceral fat. Subcutaneous fat provides cushioning for organs, insulation, and energy storage, but excessive amounts increase health risks including cardiovascular disease and metabolic disorders."
      },
      {
        question: "Can I have a normal BMI but high body fat?",
        answer: "Yes, this condition is called 'normal weight obesity' or 'skinny fat.' You can have a healthy BMI (18.5-24.9) but high body fat percentage if you have low muscle mass. This occurs when people have lost muscle through dieting without exercise or have naturally low muscle mass. High body fat percentage with normal BMI still increases health risks, so body composition matters more than weight alone."
      },
      {
        question: "Why do women have higher body fat percentages than men?",
        answer: "Women naturally have higher body fat percentages due to biological differences: women have higher essential fat requirements (10-13% vs 2-5% for men) for reproductive functions, hormone production, pregnancy, and breastfeeding. Women also typically store more fat in hips, thighs, and breasts due to hormonal differences (estrogen promotes fat storage in these areas), while men typically store more fat in the abdominal area."
      },
      {
        question: "What is essential body fat?",
        answer: "Essential body fat is the minimum amount of fat required for normal physiological function, including hormone production, vitamin storage, organ protection, and reproductive functions. For women, essential fat is 10-13% of total body mass, while for men it's 2-5%. Falling below essential fat levels can cause serious health problems including hormonal imbalances, organ damage, and reproductive issues."
      },
      {
        question: "Can body fat percentage change during the day?",
        answer: "Your actual body fat percentage doesn't change significantly during the day, but measurements can vary due to hydration levels, food intake, bowel movements, and water retention. For consistent measurements, weigh and measure yourself at the same time each day (preferably morning after bathroom but before eating/drinking). These daily fluctuations are why it's better to track trends over weeks and months rather than day-to-day changes."
      },
      {
        question: "Is DEXA scan more accurate than body fat calculator?",
        answer: "Yes, DEXA (Dual-Energy X-ray Absorptiometry) scans are considered the gold standard for body composition measurement, providing highly accurate measurements of fat mass, lean mass, and bone density. However, DEXA scans are expensive, require medical facilities, and expose you to minimal radiation. The U.S. Navy Method calculator provides estimates within 3-4% of DEXA results, making it an excellent alternative for regular tracking at home."
      },
      {
        question: "Can I build muscle while losing body fat?",
        answer: "Yes, body recomposition (building muscle while losing fat) is possible, especially for beginners, those returning to exercise after a break, or individuals with higher body fat percentages. It requires a moderate caloric deficit (200-300 calories), high protein intake (0.8-1g per pound), and progressive resistance training. While slower than focused bulking or cutting phases, body recomposition can result in improved body composition without significant weight change."
      },
      {
        question: "What is the difference between body fat percentage and BMI?",
        answer: "Body fat percentage measures the proportion of your total body weight that is fat, distinguishing between fat mass and lean mass. BMI (Body Mass Index) only considers weight and height, without distinguishing between muscle and fat. Two people with the same BMI can have very different body fat percentages—one might be muscular with low body fat, while the other might have high body fat with low muscle mass."
      },
      {
        question: "How accurate is the BMI method for body fat calculation?",
        answer: "The BMI method for estimating body fat is less accurate than the U.S. Navy Method, typically within ±5-7% of DEXA scan results (compared to ±3-4% for Navy Method). It's less accurate because it doesn't account for body shape, fat distribution, or muscle mass. Use the BMI method only if you cannot take circumference measurements, and understand that results may be less precise, especially for athletes and muscular individuals."
      },
      {
        question: "What causes high body fat percentage?",
        answer: "High body fat percentage is caused by consuming more calories than you burn over time, leading to fat accumulation. Contributing factors include sedentary lifestyle, poor diet (high in processed foods, sugar, and calories), lack of resistance training (which leads to muscle loss and lower metabolism), hormonal imbalances, genetics, age (metabolism slows with age), and certain medical conditions or medications."
      },
      {
        question: "Can body fat percentage be too low?",
        answer: "Yes, body fat percentage can be dangerously low. For women, falling below 10-13% (essential fat) can cause hormonal imbalances, amenorrhea (loss of menstruation), bone density loss, fertility issues, weakened immune function, and organ damage. For men, falling below 2-5% (essential fat) can cause similar problems. Very low body fat should only be maintained temporarily for specific athletic competitions under medical supervision."
      },
      {
        question: "How do I measure my neck circumference accurately?",
        answer: "Stand straight with head facing forward. Place the measuring tape below the larynx (Adam's apple for men). Keep the tape flat and parallel to the floor. Don't compress the skin or pull the tape too tight. Take the measurement at the end of a normal breath (not after inhaling or exhaling). Have someone help you for most accurate results, ensuring the tape is level and not tilted."
      },
      {
        question: "How do I measure my waist circumference accurately?",
        answer: "For men: Measure at the navel (belly button) level. For women: Measure at the narrowest point above the navel (typically just below the ribcage). Stand straight with feet together. Don't suck in your stomach or push it out. Keep the tape parallel to the floor. Measure at the end of a normal breath. Don't compress the skin. The tape should be snug but not tight. Take the measurement while standing, not sitting."
      },
      {
        question: "What is lean body mass?",
        answer: "Lean body mass (LBM) or lean mass is everything in your body except fat: muscle, bone, water, organs, connective tissue, and other non-fat tissue. It includes both muscle mass and non-muscle lean tissue. Increasing lean body mass through resistance training improves metabolism, strength, and overall health, as muscle tissue is metabolically active and burns calories even at rest."
      },
      {
        question: "Can age affect body fat percentage?",
        answer: "Yes, age affects body fat percentage. As you age, metabolism naturally slows, muscle mass decreases (sarcopenia), and body fat percentage tends to increase even without weight gain. Hormonal changes (decreased testosterone in men, menopause in women) also contribute to increased fat storage and muscle loss. Regular resistance training becomes increasingly important with age to maintain muscle mass and prevent body fat percentage from rising."
      },
      {
        question: "How long does it take to reduce body fat percentage?",
        answer: "Body fat reduction depends on your starting percentage, caloric deficit, exercise routine, and consistency. Most people can reduce body fat by 0.5-1% per month with consistent effort (caloric deficit, resistance training, adequate protein). More significant changes (2-5% body fat reduction) typically take 3-6 months. Rapid fat loss often leads to muscle loss, so slow and steady progress is more sustainable and healthier."
      },
      {
        question: "What is the difference between body fat percentage and body fat mass?",
        answer: "Body fat percentage is the proportion of your total body weight that is fat (expressed as a percentage), while body fat mass is the actual weight of fat in your body (in pounds or kilograms). For example, a 150-pound person with 20% body fat has 30 pounds of fat mass. Both metrics are useful—percentage helps assess health risk, while mass helps track fat loss progress in actual pounds lost."
      },
      {
        question: "Can genetics affect body fat percentage?",
        answer: "Yes, genetics play a role in body fat percentage, fat distribution (where you store fat), muscle-building potential, and metabolism. However, genetics are not destiny—diet and exercise still have the most significant impact on body composition. While some people may find it easier to maintain lower body fat, everyone can improve their body composition through proper nutrition, resistance training, and lifestyle habits."
      },
      {
        question: "What body fat percentage do bodybuilders have?",
        answer: "Bodybuilders typically have very low body fat percentages during competition: men often reach 3-6% body fat, while women reach 8-12% body fat. These extremely low levels are achieved temporarily for competition and are not sustainable long-term. Off-season, bodybuilders maintain higher body fat percentages (men 10-15%, women 15-20%) for health, performance, and muscle-building purposes."
      },
      {
        question: "Can I calculate body fat percentage at home without measurements?",
        answer: "You can use the BMI method which only requires age, gender, height, and weight, but it's less accurate (±5-7% vs ±3-4% for Navy Method). For best results, take circumference measurements for the U.S. Navy Method—neck, waist, and hips (for women). Measurements only take a few minutes and significantly improve accuracy. All you need is a flexible measuring tape available at any store."
      },
      {
        question: "What is a good body fat percentage for athletes?",
        answer: "Optimal body fat percentages vary by sport. Endurance athletes (runners, cyclists) typically have 6-13% (men) and 14-20% (women). Strength athletes (powerlifters, weightlifters) may have 10-18% (men) and 18-25% (women) for optimal performance. Team sport athletes typically have 8-15% (men) and 16-22% (women). Too low body fat can impair performance and health, so athletes should aim for the range optimal for their sport."
      },
      {
        question: "Is our body fat calculator free to use?",
        answer: "Yes, our body fat calculator is completely free with no charges, subscriptions, or registration required. You can calculate your body fat percentage unlimited times, access all features (U.S. Navy Method and BMI Method), and use the tool for personal, educational, or professional purposes without any cost."
      },
      {
        question: "Is my body fat data stored or tracked?",
        answer: "No, all body fat calculations happen directly in your browser. We never store, track, or transmit your weight, height, measurements, or body fat results. Your privacy is completely protected. The calculator works entirely client-side, meaning your health data never leaves your device."
      },
      {
        question: "What makes our body fat calculator different from others?",
        answer: "Our calculator provides comprehensive results including body fat percentage, fat mass, lean mass, body fat category (Athletic, Fitness, Average, Obese), health recommendations, and supports both U.S. Navy Method (most accurate) and BMI Method. It's completely free with no limitations, completely private (client-side only), and works on all devices (mobile, tablet, desktop)."
      }
    ],

    relatedTools: [
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "BMR Calculator", href: "/calculator/bmr-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Body Fat Calculator — Estimate Body Fat Percentage Online",
        description: "Calculate body fat percentage using U.S. Navy method & BMI method. Get fat mass vs lean mass breakdown, ACE fitness categories, ideal body fat ranges for men and women, and personalized health insights. Free and private.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Body Fat Calculator", href: "/calculator/body-fat-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BodyFatCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Body Fat Calculator — Estimate Body Fat Percentage Online Free (2026)",
        description: "Free body fat calculator using U.S. Navy method & BMI method. Get body fat percentage, fat mass vs lean mass breakdown, ACE fitness categories, and ideal body fat recommendations for men and women. Private & instant.",
        path: "/calculator/body-fat-calculator"
      }}
    />
  )
}
