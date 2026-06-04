import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { ToolLoader } from "@/components/common/tool-loader"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"

const BMICalculatorPageContent = dynamic(
  () => import("@/components/health/bmi-calculator-page-content").then((mod) => mod.BMICalculatorPageContent),
  { loading: () => <ToolLoader /> }
)
import { Brain, Activity, Target, BookOpen, AlertTriangle, Users, TrendingUp, Shield, Calculator, Heart, Info, Scale } from "lucide-react"

const baseMetadata = createMetadata({
  title: "BMI Calculator — Body Mass Index for Adults, Teens & Asian Thresholds",
  description:
    "Free BMI calculator with WHO & CDC categories, healthy weight range, BMI Prime, Ponderal Index, and Asian BMI cutoffs. Metric (kg/cm) and Imperial (lbs/in) units for adults and teenagers. Visual gauge, instant private results.",
  path: "/calculator/bmi-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "BMI Calculator", href: "/calculator/bmi-calculator" }
  ],
  schemaOptions: {
    name: "Free BMI Calculator - Body Mass Index Calculator",
    alternateName: [
      "Body Mass Index Calculator",
      "BMI Index Calculator",
      "Weight to Height Ratio Calculator",
      "Healthy Weight Calculator",
      "Obesity Calculator",
      "BMI Chart Lookup",
      "Underweight Calculator",
      "Overweight Calculator",
      "Asian BMI Calculator",
      "Teen BMI Calculator",
      "Imperial BMI Calculator",
      "Metric BMI Calculator",
      "WHO BMI Calculator",
      "CDC BMI Calculator",
      "BMI Prime Calculator",
    ],
    applicationCategory: "HealthApplication",
    ratingValue: "4.9",
    ratingCount: "3420",
    featureList: [
      "Instant BMI calculation for adults and teenagers",
      "Personalized health action plan based on results",
      "Metric and Imperial units support (kg, cm, lbs, in)",
      "WHO & CDC standard BMI interpretations",
      "Visual BMI gauge for instant understanding",
      "Ethnic-specific guidelines (Asian BMI thresholds)",
      "BMI Prime and Ponderal Index calculations",
      "Healthy weight range calculator",
      "Completely free and privacy-focused",
      "Mobile-optimized health assessment"
    ]
  },
  faqs: [
    {
      question: "What is a healthy BMI range?",
      answer: "A healthy BMI range is 18.5 to 24.9 for most adults, according to the World Health Organization (WHO). This range is associated with the lowest risk of weight-related health problems like type 2 diabetes and heart disease."
    },
    {
      question: "How is BMI calculated?",
      answer: "BMI is calculated by dividing your weight in kilograms by your height in meters squared (kg/m²). For imperial measurements, the formula is (weight in pounds / height in inches²) × 703. For example, a person weighing 70kg at 1.75m would have a BMI of 22.9."
    },
    {
      question: "Is BMI accurate for athletes and muscular people?",
      answer: "BMI does not distinguish between muscle and fat. Since muscle is denser than fat, athletes and bodybuilders often have elevated BMI despite low body fat. For muscular individuals, body fat percentage measurement is a better health indicator."
    },
    {
      question: "What are the BMI categories according to WHO?",
      answer: "The WHO defines BMI categories as: Underweight (below 18.5), Normal weight (18.5-24.9), Overweight (25-29.9), Obese Class I (30-34.9), Obese Class II (35-39.9), and Obese Class III (40 and above)."
    },
    {
      question: "Are BMI standards different for Asian populations?",
      answer: "Yes. The WHO recommends lower BMI thresholds for Asian populations due to higher body fat percentage at lower BMI values. For Asians: Healthy (18.5-22.9), Overweight (23-24.9), and Obese (25+)."
    },
    {
      question: "Can I use this BMI calculator during pregnancy?",
      answer: "No, BMI should not be used to assess weight status during pregnancy. Pre-pregnancy BMI is used to determine healthy weight gain targets. Consult your healthcare provider for pregnancy-specific guidance."
    },
    {
      question: "What health risks are associated with high BMI?",
      answer: "High BMI is associated with increased risk of type 2 diabetes, cardiovascular disease, high blood pressure, stroke, certain cancers (breast, colon, kidney), sleep apnea, osteoarthritis, and higher mortality rates according to CDC research."
    },
    {
      question: "What is BMI Prime?",
      answer: "BMI Prime is the ratio of your BMI to 25 (the upper limit of normal BMI). A BMI Prime of 1.0 means you are at the upper boundary of normal weight. Values below 1 indicate normal weight, while values above 1 indicate overweight or obesity."
    }
  ],
  howToSteps: [
    "Select your preferred measurement units (Metric: kg/cm or Imperial: lbs/inches)",
    "Enter your current weight accurately",
    "Enter your height measurement",
    "Optionally add your age and gender for more personalized health interpretations",
    "Click Calculate BMI to get your instant results",
    "Review your BMI category, healthy weight range, and personalized recommendations"
  ],
  toolName: "BMI Calculator"
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Calculators",
}

export default function BMICalculatorPage() {
  const toolContent = {
    toolName: "BMI Calculator — Body Mass Index Calculator",
    definition:
      "A BMI calculator estimates body mass index from height and weight to classify weight status using standard BMI ranges.",
    quickAnswer:
      "Enter your height and weight to calculate BMI. BMI = weight in kilograms divided by height in meters squared; standard adult categories are underweight below 18.5, healthy weight 18.5-24.9, overweight 25-29.9, and obesity 30 or above.",
    keyTakeaways: [
      "BMI is a screening measure, not a complete diagnosis of health or body composition",
      "BMI formula: kg/m², or 703 × pounds / inches² for US units",
      "Adult BMI categories do not account for muscle mass, age, sex, ethnicity, or pregnancy",
      "Children and teens require BMI-for-age percentiles instead of adult ranges",
      "Use BMI with waist size, body fat, activity, and clinical context for better interpretation",
    ],
    overview:
      "Calculate your Body Mass Index (BMI) instantly with our free online BMI calculator. Get WHO and CDC standard weight classifications, healthy weight range for your height, BMI Prime ratio, Ponderal Index, and personalized health action plans. Supports both metric (kg/cm) and imperial (lbs/inches) units with ethnic-specific guidelines including Asian BMI thresholds. Designed for adults and teenagers, this tool provides a visual BMI gauge, health risk assessment, and practical next steps — all processed privately in your browser.",
    howToSteps: [
      {
        title: "Select Your Units",
        description: "Choose between Metric (kg/cm) or Imperial (lbs/in) systems."
      },
      {
        title: "Enter Height and Weight",
        description: "Input your current measurements accurately for precise results."
      },
      {
        title: "Add Demographics",
        description: "Include age and gender for personalized health interpretations."
      },
      {
        title: "Get Your Action Plan",
        description: "Instantly see your BMI category and receive tailored advice."
      }
    ],
    features: [
      {
        title: "Dual Unit Support",
        description: "Seamlessly switch between metric and imperial measurements.",
        icon: "Scale"
      },
      {
        title: "Dynamic Visuals",
        description: "Interactive gauge shows exactly where you fall on the BMI spectrum.",
        icon: "Activity"
      },
      {
        title: "Ethnic Clarity",
        description: "Supports specialized Asian BMI thresholds for accurate regional screening.",
        icon: "Globe"
      },
      {
        title: "Privacy First",
        description: "Your data is processed locally and never stored on our servers.",
        icon: "History"
      }
    ],
    useCases: [
      {
        title: "Weight Tracking",
        description: "Monitor your progress during weight loss or fitness journeys."
      },
      {
        title: "Health Screening",
        description: "Identify potential risks for diabetes or cardiovascular issues early."
      },
      {
        title: "Athletic Assessment",
        description: "Use alongside body fat metrics for a complete performance profile."
      }
    ],
    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            Understanding Body Mass Index (BMI): A Comprehensive Health Screening Tool
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Body Mass Index (BMI) is a simple medical screening tool used worldwide to estimate total body fat and assess weight-related health risks. It is calculated by dividing a person's weight in kilograms by the square of their height in meters (kg/m²). While BMI is not a diagnostic measure and doesn't directly measure body fat, it provides a quick, inexpensive way to screen for potential weight-related health problems in adults and teenagers.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Developed in the 1830s by Belgian mathematician Adolphe Quetelet, BMI has become the standard tool used by healthcare providers, insurance companies, and public health organizations to classify weight status and assess health risks. High BMI correlates with increased risk for chronic diseases including type 2 diabetes, cardiovascular disease, hypertension, stroke, certain cancers, sleep apnea, and osteoarthritis. Conversely, low BMI may indicate nutritional deficiencies, weakened immune function, or underlying health conditions.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            BMI Classification Reference: Understanding WHO Standard Categories
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The World Health Organization (WHO) has established standardized BMI categories that are used globally to classify weight status and assess health risks. Understanding these categories helps you interpret your BMI results accurately:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">BMI Range (kg/m²)</th>
                  <th className="p-3 text-left">Weight Status</th>
                  <th className="p-3 text-left">Health Risk Level</th>
                  <th className="p-3 text-left">Recommended Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 text-blue-500 font-medium">Below 18.5</td>
                  <td className="p-3">Underweight</td>
                  <td className="p-3">Moderate Risk</td>
                  <td className="p-3">Consult healthcare provider for nutritional assessment</td>
                </tr>
                <tr>
                  <td className="p-3 text-green-600 font-bold">18.5 – 24.9</td>
                  <td className="p-3 font-bold text-green-600">Normal Weight</td>
                  <td className="p-3">Lowest Risk</td>
                  <td className="p-3">Maintain healthy lifestyle habits</td>
                </tr>
                <tr>
                  <td className="p-3 text-yellow-600 font-medium">25.0 – 29.9</td>
                  <td className="p-3">Overweight</td>
                  <td className="p-3">Increased Risk</td>
                  <td className="p-3">Consider lifestyle changes to prevent weight gain</td>
                </tr>
                <tr>
                  <td className="p-3 text-orange-600 font-medium">30.0 – 34.9</td>
                  <td className="p-3">Obese Class I</td>
                  <td className="p-3">High Risk</td>
                  <td className="p-3">Seek professional guidance for weight management</td>
                </tr>
                <tr>
                  <td className="p-3 text-red-600 font-medium">35.0 – 39.9</td>
                  <td className="p-3">Obese Class II</td>
                  <td className="p-3">Very High Risk</td>
                  <td className="p-3">Medical intervention recommended</td>
                </tr>
                <tr>
                  <td className="p-3 text-red-700 font-bold">40.0 and Above</td>
                  <td className="p-3 font-bold text-red-700">Obese Class III (Morbid)</td>
                  <td className="p-3">Extremely High Risk</td>
                  <td className="p-3">Requires immediate medical evaluation and intervention</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            How to Calculate BMI: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these steps to calculate your BMI accurately using our free calculator:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Select Your Measurement System</h4>
                <p className="text-sm text-muted-foreground">Choose between Metric (kilograms and centimeters) or Imperial (pounds and inches). Our calculator supports both systems and automatically converts between them. Use whichever system you're most comfortable with for accurate measurements.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Measure Your Weight Accurately</h4>
                <p className="text-sm text-muted-foreground">Weigh yourself using a reliable scale, preferably in the morning before breakfast and after using the bathroom. Remove heavy clothing and shoes for the most accurate measurement. For consistent tracking, weigh yourself at the same time each day.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Measure Your Height Precisely</h4>
                <p className="text-sm text-muted-foreground">Stand straight against a wall without shoes, with your heels, buttocks, and back touching the wall. Have someone mark the top of your head, then measure from the floor to the mark. Measure in centimeters or inches, depending on your selected system.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter Your Measurements</h4>
                <p className="text-sm text-muted-foreground">Input your weight and height into the calculator. The formula automatically calculates: BMI = weight (kg) ÷ height (m)². For imperial: BMI = (weight (lbs) ÷ height (in)²) × 703. Our calculator handles the math instantly and accurately.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
              <div>
                <h4 className="font-semibold text-foreground">Review Your Results</h4>
                <p className="text-sm text-muted-foreground">Your BMI result appears instantly with a visual gauge showing where you fall on the health spectrum. Review your BMI category, healthy weight range, BMI Prime, and personalized recommendations based on WHO and CDC guidelines.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Activity className="h-6 w-6 text-primary" />
            Health Risks Associated with Different BMI Categories
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding the health risks associated with different BMI categories helps you make informed decisions about your health and lifestyle:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">BMI Category</th>
                  <th className="p-3 text-left">Primary Health Risks</th>
                  <th className="p-3 text-left">Chronic Conditions</th>
                  <th className="p-3 text-left">Mortality Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">Underweight (&lt;18.5)</td>
                  <td className="p-3">Nutritional deficiencies, weakened immune system, bone density loss</td>
                  <td className="p-3">Osteoporosis, anemia, fertility issues</td>
                  <td className="p-3">Slightly elevated</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-green-600">Normal (18.5-24.9)</td>
                  <td className="p-3">Lowest risk for weight-related health problems</td>
                  <td className="p-3">Minimal association</td>
                  <td className="p-3">Lowest mortality risk</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-yellow-600">Overweight (25-29.9)</td>
                  <td className="p-3">Type 2 diabetes, high blood pressure, sleep apnea</td>
                  <td className="p-3">Cardiovascular disease, certain cancers</td>
                  <td className="p-3">Moderately elevated</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-orange-600">Obese I (30-34.9)</td>
                  <td className="p-3">Severe sleep apnea, fatty liver disease, osteoarthritis</td>
                  <td className="p-3">Heart disease, stroke, type 2 diabetes, kidney disease</td>
                  <td className="p-3">Significantly elevated</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-red-600">Obese II/III (35+)</td>
                  <td className="p-3">Mobility issues, severe respiratory problems, multiple comorbidities</td>
                  <td className="p-3">Severe cardiovascular disease, multiple cancers, metabolic syndrome</td>
                  <td className="p-3">Very high mortality risk</td>
                </tr>
              </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Ethnic-Specific BMI Guidelines: Why They Matter
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Research shows that different ethnic populations have varying body fat percentages at the same BMI values, leading to different health risks. The WHO recommends ethnic-specific BMI thresholds for more accurate health assessment:
          </p>
          <div className="overflow-x-auto">
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Population</th>
                  <th className="p-3 text-left">Healthy BMI Range</th>
                  <th className="p-3 text-left">Overweight Threshold</th>
                  <th className="p-3 text-left">Obese Threshold</th>
                  <th className="p-3 text-left">Reason for Lower Thresholds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr>
                  <td className="p-3 font-medium">General Population</td>
                  <td className="p-3">18.5-24.9</td>
                  <td className="p-3">25.0+</td>
                  <td className="p-3">30.0+</td>
                  <td className="p-3">Standard WHO classification</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Asian Populations</td>
                  <td className="p-3">18.5-22.9</td>
                  <td className="p-3">23.0+</td>
                  <td className="p-3">25.0+</td>
                  <td className="p-3">Higher body fat percentage at same BMI, increased diabetes risk</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Pacific Islanders</td>
                  <td className="p-3">18.5-25.9</td>
                  <td className="p-3">26.0+</td>
                  <td className="p-3">32.0+</td>
                  <td className="p-3">Naturally higher muscle mass and bone density</td>
                </tr>
              </tbody>
            </GTable>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Asian populations, including people of Chinese, Japanese, Korean, Thai, Vietnamese, Filipino, and South Asian descent, have higher body fat percentages at the same BMI compared to Caucasians. This means they experience increased health risks (especially type 2 diabetes and cardiovascular disease) at lower BMI values. Our calculator automatically applies Asian-specific thresholds when you select Asian ethnicity, providing more accurate health risk assessment.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Limitations of BMI: Understanding When It's Not Accurate
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            While BMI is a useful screening tool, it has important limitations that you should understand:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                BMI Doesn't Distinguish Between Muscle and Fat
              </h4>
              <p className="text-sm text-muted-foreground">BMI is a volume metric, not a composition metric. It cannot distinguish between 200lbs of muscle and 200lbs of fat. Athletes, bodybuilders, and highly muscular individuals often have elevated BMI (classified as overweight) despite excellent metabolic health and low body fat percentage. For muscular individuals, body fat percentage measurement is a better health indicator than BMI alone.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-500" />
                BMI Doesn't Account for Body Shape or Fat Distribution
              </h4>
              <p className="text-sm text-muted-foreground">Two people with the same BMI can have very different body shapes and health risks. Someone with an apple-shaped body (carrying weight in the abdomen) has higher health risks than someone with a pear-shaped body (carrying weight in hips and thighs) at the same BMI. Waist circumference measurements help assess body shape and health risks.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-500" />
                BMI May Be Less Accurate for Certain Populations
              </h4>
              <p className="text-sm text-muted-foreground">BMI may slightly overestimate body fat in very tall individuals and underestimate it in very short individuals due to the mathematical relationship between height and weight. For elderly adults, age-related muscle loss may make BMI less reliable. For these populations, additional measurements like body fat percentage, waist circumference, and functional assessments provide more accurate health evaluation.</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500" />
                Normal BMI Doesn't Guarantee Good Health
              </h4>
              <p className="text-sm text-muted-foreground">"Normal weight obesity" or "skinny fat" occurs when someone has a healthy BMI but high body fat percentage, low muscle mass, and poor metabolic health. Factors like physical fitness, diet quality, sleep, stress management, and lifestyle habits are equally important indicators of overall health beyond BMI alone.</p>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Best Practices for Accurate BMI Measurement and Tracking
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these best practices to ensure accurate BMI calculations and meaningful long-term tracking:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Measure at Consistent Times</h4>
                <p className="text-sm text-muted-foreground">Weigh yourself at the same time each day—preferably in the morning before breakfast and after using the bathroom. Body weight naturally fluctuates throughout the day (by 2-4 pounds) due to food intake, water retention, and other factors. Consistency eliminates these daily variations.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Use Reliable Equipment</h4>
                <p className="text-sm text-muted-foreground">Use a calibrated scale for weight measurements and ensure your height measurement is accurate. Digital scales provide more consistent readings than mechanical scales. Have someone help you measure height for best accuracy.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Track Trends, Not Daily Fluctuations</h4>
                <p className="text-sm text-muted-foreground">Focus on long-term trends rather than daily BMI changes. Weekly or monthly measurements provide meaningful insights while ignoring natural daily variations. Track your BMI over several months to see real progress.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Combine with Other Measurements</h4>
                <p className="text-sm text-muted-foreground">For a complete health picture, combine BMI with waist circumference, body fat percentage (if available), strength and fitness assessments, blood pressure, and other health markers. Multiple measurements provide more accurate health assessment than BMI alone.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-green-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Consult Healthcare Providers for Extreme Results</h4>
                <p className="text-sm text-muted-foreground">If your BMI indicates underweight (below 18.5) or obesity (30 or above), consult a healthcare provider for comprehensive health evaluation and personalized guidance. BMI is a screening tool, not a diagnostic measure, and professional medical assessment is essential for addressing significant weight-related health concerns.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy and Data Security: Your Health Information Stays Private
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your privacy and data security are our top priorities. Our BMI calculator processes all information locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">All BMI calculations happen directly in your browser. Your weight, height, and BMI results never leave your device or get transmitted to our servers. No data is sent over the internet during calculation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your health information. There's no database of your BMI calculations, no analytics on your usage, and no way for us to access your weight, height, or BMI results.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Tracking or Cookies</h4>
                <p className="text-sm text-muted-foreground">We don't use cookies, tracking pixels, or analytics to monitor your usage of the BMI calculator. Your browsing and health information remain completely private while using our tool.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),
    proTip: "For the most accurate assessment, weigh yourself in the morning before breakfast and after using the bathroom. Consistency is key to tracking long-term trends.",
    faqs: [
      {
        question: "What is a healthy BMI range?",
        answer: "A healthy BMI range is 18.5 to 24.9 for most adults, according to the World Health Organization (WHO). This range is associated with the lowest risk of weight-related health problems like type 2 diabetes, cardiovascular disease, and certain cancers. Maintaining a BMI in this range generally indicates a healthy weight relative to height."
      },
      {
        question: "Can I have a normal BMI but still be unhealthy?",
        answer: "Yes. 'Normal weight obesity' or 'skinny fat' occurs when someone has a healthy BMI but high body fat percentage and low muscle mass. Other factors like waist circumference, metabolic health markers, physical fitness, and lifestyle habits are also important indicators of overall health beyond BMI alone."
      },
      {
        question: "Why does my BMI say I'm overweight when I'm muscular?",
        answer: "BMI doesn't distinguish between muscle and fat mass. Since muscle is denser and heavier than fat, athletes, bodybuilders, and highly muscular individuals often have elevated BMI despite low body fat percentage. For muscular individuals, body fat percentage measurement provides a more accurate health assessment than BMI alone."
      },
      {
        question: "How often should I check my BMI?",
        answer: "For most people, checking BMI monthly or quarterly is sufficient to monitor long-term trends while ignoring daily water-weight fluctuations. Weekly measurements can show progress during active weight loss or gain programs. Daily BMI checks are unnecessary and may cause stress due to natural daily variations."
      },
      {
        question: "Is BMI accurate for older adults?",
        answer: "Interpretation changes with age. Research suggests a slightly higher BMI (25-27) may be protective and healthy for adults over 65, as some body fat can help protect against bone fractures and provide energy reserves during illness. However, consult healthcare providers for age-appropriate guidance."
      },
      {
        question: "Is BMI different for men and women?",
        answer: "The standard BMI calculation formula is exactly the same for men and women. However, body composition differs—women typically have more essential body fat (12-20%) than men (3-5%). While the numerical scale is identical, healthcare providers may interpret borderline results differently based on gender, muscle mass, and individual health factors."
      },
      {
        question: "What should I do if my BMI indicates obesity?",
        answer: "Consult a healthcare provider for a comprehensive health evaluation and personalized plan. Focus on sustainable lifestyle changes including balanced nutrition, regular physical activity, adequate sleep, and stress management. Avoid crash diets and seek professional guidance for safe, effective weight management strategies."
      },
      {
        question: "Are BMI standards the same for all ethnic groups?",
        answer: "No. Asian populations have higher health risks at lower BMI values due to higher body fat percentage at the same BMI compared to Caucasians. WHO recommends ethnic-specific thresholds: For Asians, overweight starts at 23+ and obese at 25+ (compared to 25+ and 30+ for general populations). This provides more accurate health risk assessment for different ethnicities."
      },
      {
        question: "Can I use this BMI calculator during pregnancy?",
        answer: "Do not use BMI to assess weight status during pregnancy. Pre-pregnancy BMI is used to determine healthy weight gain targets during pregnancy, but pregnancy weight gain is expected and healthy. Consult your healthcare provider for pregnancy-specific weight guidance based on your pre-pregnancy BMI and individual health factors."
      },
      {
        question: "How is BMI calculated?",
        answer: "BMI is calculated by dividing your weight in kilograms by the square of your height in meters (kg/m²). For imperial measurements, the formula is (weight in pounds / height in inches²) × 703. For example, a person weighing 70kg at 1.75m (5'9\") would have a BMI of 22.9, which is in the healthy range."
      },
      {
        question: "What are the BMI categories according to WHO?",
        answer: "The WHO defines BMI categories as: Underweight (below 18.5), Normal weight (18.5-24.9), Overweight (25-29.9), Obese Class I (30-34.9), Obese Class II (35-39.9), and Obese Class III (40 and above). These categories help assess health risks associated with weight status."
      },
      {
        question: "What health risks are associated with high BMI?",
        answer: "High BMI is associated with increased risk of type 2 diabetes, cardiovascular disease, high blood pressure, stroke, certain cancers (breast, colon, kidney, endometrial), sleep apnea, osteoarthritis, fatty liver disease, kidney disease, and higher mortality rates according to CDC and WHO research. Risk increases progressively with higher BMI values."
      },
      {
        question: "What health risks are associated with low BMI?",
        answer: "Low BMI (underweight, below 18.5) is associated with increased risk of nutritional deficiencies, osteoporosis, weakened immune system, fertility issues, anemia, muscle loss, and higher mortality from certain conditions. Being underweight can also indicate underlying health conditions that require medical attention."
      },
      {
        question: "What is BMI Prime?",
        answer: "BMI Prime is the ratio of your BMI to 25 (the upper limit of normal BMI). A BMI Prime of 1.0 means you are at the upper boundary of normal weight. Values below 1.0 indicate normal or underweight, while values above 1.0 indicate overweight or obesity. It's a simplified way to express BMI relative to the normal weight threshold."
      },
      {
        question: "What is the Ponderal Index?",
        answer: "The Ponderal Index (PI) is an alternative to BMI that accounts for height cubed rather than squared. It's calculated as weight in kg divided by height in meters cubed. PI may be more accurate for very tall or very short individuals, but BMI remains the standard screening tool used by healthcare providers worldwide."
      },
      {
        question: "Can BMI be used for children and teenagers?",
        answer: "BMI interpretation for children and teenagers (ages 2-20) requires age and sex-specific percentile charts rather than fixed categories. A child's BMI is compared to growth charts to determine BMI percentile. BMI above the 85th percentile indicates overweight, and above the 95th percentile indicates obesity in pediatric populations."
      },
      {
        question: "What is a healthy weight range for my height?",
        answer: "Your healthy weight range depends on your height and is determined by the BMI range of 18.5-24.9. For example, a person 5'10\" (178cm) should weigh between 129-174 pounds (58-79kg). Use our calculator to see your personalized healthy weight range based on your specific height."
      },
      {
        question: "How does waist circumference relate to BMI?",
        answer: "Waist circumference provides additional health information beyond BMI. It measures abdominal fat, which is particularly linked to health risks. Even with a normal BMI, a large waist circumference (men >40\", women >35\") increases disease risk. Combined with BMI, waist circumference offers a more complete health assessment."
      },
      {
        question: "Can BMI change throughout the day?",
        answer: "BMI value itself doesn't change during the day since height remains constant. However, weight fluctuates daily due to food intake, water retention, bowel movements, and other factors. For accurate BMI tracking, weigh yourself at the same time each day (morning, after bathroom, before breakfast) for consistent measurements."
      },
      {
        question: "Is BMI affected by bone density?",
        answer: "BMI doesn't directly account for bone density differences. People with higher bone density may have slightly higher BMI without being overweight. However, bone density variations typically cause minimal BMI differences (1-2 points) and don't significantly impact BMI interpretation for most people."
      },
      {
        question: "Can I calculate BMI without knowing my exact weight?",
        answer: "Accurate BMI calculation requires both weight and height measurements. While you can estimate, precise measurements provide the most useful results. Use a reliable scale for weight and measure height without shoes for best accuracy. Our calculator accepts both metric and imperial measurements."
      },
      {
        question: "What's the difference between BMI and body fat percentage?",
        answer: "BMI estimates total body fat based on weight and height, while body fat percentage measures actual fat mass versus lean mass. Body fat percentage provides more detailed body composition information and is better for athletes and muscular individuals. However, BMI is easier to measure and remains a useful screening tool."
      },
      {
        question: "Can BMI be used to track weight loss progress?",
        answer: "Yes, BMI is useful for tracking weight loss progress over time. However, it doesn't distinguish between fat loss and muscle loss. For comprehensive tracking, combine BMI with measurements like waist circumference, body fat percentage, and strength/fitness improvements to ensure you're losing fat while maintaining muscle."
      },
      {
        question: "What BMI is considered morbidly obese?",
        answer: "Morbid obesity is typically defined as BMI of 40 or higher (Obese Class III), or BMI of 35-39.9 (Obese Class II) with obesity-related health conditions. This level of obesity significantly increases health risks and may require medical intervention including lifestyle changes, medication, or bariatric surgery under medical supervision."
      },
      {
        question: "How accurate is BMI for tall people?",
        answer: "BMI may slightly overestimate body fat in very tall individuals (over 6'3\" or 190cm) because it doesn't account for the cubic relationship between height and body volume. However, for most people, BMI remains an accurate screening tool regardless of height. The Ponderal Index may be more accurate for extremely tall individuals."
      },
      {
        question: "How accurate is BMI for short people?",
        answer: "BMI may slightly underestimate body fat in very short individuals (under 5'0\" or 152cm) due to the mathematical relationship between height and weight. However, BMI remains a useful screening tool for most people. Healthcare providers may consider additional measurements for very short individuals."
      },
      {
        question: "Can I use BMI to determine ideal weight for sports?",
        answer: "BMI is not ideal for determining optimal weight for sports performance. Different sports require different body compositions—wrestlers may need lower BMI, while football linemen may need higher BMI. Athletes should work with coaches and sports nutritionists to determine performance-optimal weight, not just health-optimal BMI."
      },
      {
        question: "Does BMI account for body shape?",
        answer: "No, BMI doesn't account for body shape or fat distribution. Two people with the same BMI can have very different body shapes—one may carry weight in the abdomen (apple shape, higher health risk) while another carries it in hips/thighs (pear shape, lower health risk). Waist circumference measurements help assess body shape and health risks."
      },
      {
        question: "Is BMI free to calculate?",
        answer: "Yes, our BMI calculator is completely free with no charges, subscriptions, or registration required. You can calculate your BMI unlimited times, access all features, and use the tool for personal, educational, or professional purposes without any cost."
      },
      {
        question: "Is my BMI data stored or tracked?",
        answer: "No, all BMI calculations happen directly in your browser. We never store, track, or transmit your weight, height, or BMI results. Your privacy is completely protected. The calculator works entirely client-side, meaning your health data never leaves your device."
      },
      {
        question: "Can I use this calculator on mobile devices?",
        answer: "Absolutely! Our BMI calculator is fully responsive and works perfectly on smartphones, tablets, and desktop computers. The interface adapts to your screen size, making it easy to calculate your BMI on any device, anywhere, anytime."
      },
      {
        question: "What makes this BMI calculator different from others?",
        answer: "Our calculator provides comprehensive results including BMI category, healthy weight range, BMI Prime, ethnic-specific guidelines (Asian BMI thresholds), visual BMI gauge, personalized recommendations, and complete privacy (client-side only). It's completely free with no limitations and works on all devices."
      }
    ],
    relatedTools: [
      {
        name: "Body Fat Calculator",
        href: "/calculator/body-fat-calculator",
        description: "Get more precise body composition data."
      },
      {
        name: "Calorie Calculator",
        href: "/calculator/calorie-calculator",
        description: "Plan your meals for healthy weight management."
      },
      {
        name: "BMR Calculator",
        href: "/calculator/bmr-calculator",
        description: "Find your baseline energy needs."
      },
      {
        name: "TDEE Macro Calculator",
        href: "/calculator/tdee-macro-calculator",
        description: "Daily energy expenditure with macros."
      },
      {
        name: "Biological Age Calculator",
        href: "/calculator/biological-age-calculator",
        description: "Lifestyle-adjusted age vs chronological."
      },
      {
        name: "Pace Calculator",
        href: "/calculator/pace-calculator",
        description: "Running and walking pace tracker."
      },
      {
        name: "Pregnancy Calculator",
        href: "/calculator/pregnancy-calculator",
        description: "Due date and trimester tracking."
      },
      {
        name: "Age Calculator",
        href: "/calculator/age-calculator",
        description: "Exact age in years, months, days."
      }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "BMI Calculator — Free Body Mass Index Calculator Online",
        description: "Calculate your Body Mass Index instantly with WHO & CDC categories, healthy weight range, BMI Prime, Asian thresholds, and personalized health recommendations. Free, private, no signup.",
        titleSize: "medium",
        descriptionSize: "small"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "BMI Calculator", href: "/calculator/bmi-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <BMICalculatorPageContent />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "BMI Calculator — Calculate Body Mass Index Online Free",
        description: "Free online BMI calculator with WHO & CDC categories, healthy weight range, BMI Prime, Ponderal Index, and Asian BMI thresholds. Supports metric & imperial units for adults and teens. Instant, private results.",
        path: "/calculator/bmi-calculator"
      }}
    />
  )
}
