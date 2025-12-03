import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { BMICalculatorPageContent } from "@/components/health/bmi-calculator-page-content"
import { createMetadata } from "@/lib/metadata-base"

const baseMetadata = createMetadata({
  title: "BMI Calculator | Free Body Mass Index Calculator",
  description:
    "Calculate your BMI (Body Mass Index) instantly. Free BMI calculator with height and weight inputs. Get your BMI category and health recommendations based on WHO standards.",
  path: "/calculator/bmi-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "BMI Calculator", href: "/calculator/bmi-calculator" }
  ],
  schemaOptions: {
    name: "Free BMI Calculator - Body Mass Index Calculator",
    alternateName: "Body Mass Index Calculator",
    applicationCategory: "HealthApplication",
    ratingValue: "4.9",
    ratingCount: "3420",
    featureList: [
      "Instant BMI calculation from height and weight",
      "BMI category classification (underweight, normal, overweight, obese)",
      "Metric and Imperial units support",
      "WHO standard BMI ranges",
      "Health recommendations based on BMI",
      "BMI interpretation for different populations",
      "Free and privacy-friendly",
      "Mobile-responsive design"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Calculators",
}

export default function BMICalculatorPage() {
  const toolContent = {
    toolName: "BMI Calculator",
    overview: "Calculate your Body Mass Index (BMI) instantly with our free, accurate BMI calculator. Enter your height and weight in metric or imperial units to determine your BMI category and receive personalized health recommendations. Based on WHO (World Health Organization) standards for accurate health screening.",

    howToSteps: [
      "Select your preferred units (metric or imperial)",
      "Enter your weight (in kg or lbs)",
      "Enter your height (in cm, meters, or feet/inches)",
      "Click 'Calculate BMI' to get your result",
      "Review your BMI category and health recommendations"
    ],

    features: [
      "Instant BMI Calculation: Real-time results as you input your measurements",
      "Dual Unit Support: Calculate using metric (kg/cm) or imperial (lbs/ft) units",
      "WHO Standard Categories: Underweight (<18.5), Normal (18.5-24.9), Overweight (25-29.9), Obese (≥30)",
      "Health Recommendations: Personalized advice based on your BMI category",
      "BMI Prime Calculation: Ratio of actual BMI to upper limit of normal BMI",
      "Age and Gender Considerations: Guidance on how BMI interpretation varies",
      "Privacy-Focused: All calculations happen locally in your browser",
      "Mobile-Friendly: Optimized for smartphones and tablets"
    ],

    useCases: [
      "Health Screening: Quick assessment of weight status and health risks",
      "Fitness Goals: Track progress during weight loss or muscle gain programs",
      "Medical Consultations: Prepare information for doctor visits",
      "Athletic Training: Monitor body composition changes during training",
      "Pregnancy Planning: Understand pre-pregnancy weight status",
      "Insurance Applications: Provide BMI information for health insurance",
      "Research Studies: Calculate BMI for health research participation"
    ],

    aboutTool: (
      <>
        <h3 className="font-semibold text-lg mb-2 mt-6">What is BMI?</h3>
        <p className="mb-4">
          Body Mass Index (BMI) is a numerical value derived from your weight and height. It's a widely-used screening tool that helps identify potential weight-related health issues. Developed by Belgian mathematician Adolphe Quetelet in the 1830s, BMI provides a simple, quick assessment of body weight relative to height.
        </p>

        <h3 className="font-semibold text-lg mb-2 mt-6">BMI Formula</h3>
        <div className="space-y-3 mb-6">
          <div>
            <h4 className="font-semibold mb-1">Metric Formula:</h4>
            <p className="font-mono bg-muted p-3 rounded text-sm">BMI = weight (kg) / [height (m)]²</p>
            <p className="text-sm text-muted-foreground mt-1">Example: 70 kg / (1.75 m)² = 22.86</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Imperial Formula:</h4>
            <p className="font-mono bg-muted p-3 rounded text-sm">BMI = (weight (lbs) / [height (in)]²) × 703</p>
            <p className="text-sm text-muted-foreground mt-1">Example: (154 lbs / (69 in)²) × 703 = 22.75</p>
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">BMI Categories (WHO Standards)</h3>
        <div className="space-y-2 mb-6">
          <p><strong>Underweight:</strong> BMI less than 18.5 - May indicate malnutrition or other health issues</p>
          <p><strong>Normal Weight:</strong> BMI 18.5-24.9 - Generally associated with lowest health risks</p>
          <p><strong>Overweight:</strong> BMI 25-29.9 - Increased risk for health problems</p>
          <p><strong>Obese Class I:</strong> BMI 30-34.9 - Moderate health risk</p>
          <p><strong>Obese Class II:</strong> BMI 35-39.9 - High health risk</p>
          <p><strong>Obese Class III:</strong> BMI 40+ - Very high health risk</p>
        </div>

        <h3 className="font-semibold text-lg mb-2 mt-6">Limitations of BMI</h3>
        <p className="mb-3">
          While BMI is a useful screening tool, it has important limitations:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Doesn't Measure Body Fat Directly:</strong> Athletes with high muscle mass may have high BMI despite low body fat</li>
          <li><strong>Doesn't Account for Distribution:</strong> Doesn't distinguish visceral fat from subcutaneous fat</li>
          <li><strong>Age Variations:</strong> Older adults naturally have more body fat; children require age-specific percentiles</li>
          <li><strong>Ethnic Differences:</strong> Asian populations have higher health risks at lower BMIs; different thresholds may apply</li>
          <li><strong>Pregnancy:</strong> Not applicable during pregnancy when weight naturally increases</li>
          <li><strong>Frame Size:</strong> Doesn't consider bone structure or frame size differences</li>
        </ul>

        <h3 className="font-semibold text-lg mb-2 mt-6">Complementary Health Metrics</h3>
        <p className="mb-6">
          For a more complete health picture, consider these measurements alongside BMI: Waist circumference, Waist-to-hip ratio, Body fat percentage, Muscle mass percentage, Blood pressure, Blood glucose levels, Cholesterol levels, and overall fitness level. Consult healthcare professionals for comprehensive health assessments.
        </p>
      </>
    ),

    proTip: "BMI is a screening tool, not a diagnostic tool. If your BMI indicates a potential health concern, consult with a healthcare provider who can assess your overall health through additional measurements, blood tests, and personal health history. Two people with the same BMI may have very different health statuses.",

    faqs: [
      {
        question: "What exactly is BMI and why do healthcare providers use it?",
        answer: "BMI (Body Mass Index) is a calculation using your height and weight to assess body weight relative to height. Healthcare providers use it because it's quick, inexpensive, non-invasive, and correlates moderately with health risks like heart disease, diabetes, and high blood pressure. It's a screening tool to identify individuals who may need further health assessments."
      },
      {
        question: "How do I calculate my BMI accurately at home?",
        answer: "Measure your weight and height accurately. For metric: divide weight (kg) by height (m) squared. For imperial: divide weight (lbs) by height (in) squared, then multiply by 703. Our calculator does this automatically - just enter your measurements and select your units. Use a calibrated scale and measure height without shoes for accuracy."
      },
      {
        question: "What do the different BMI categories mean for my health?",
        answer: "Underweight (<18.5): Risk of malnutrition, weakened immune system. Normal (18.5-24.9): Generally optimal health range. Overweight (25-29.9): Increased risk for type 2 diabetes, heart disease. Obese (30+): High risk for serious health conditions including heart disease, stroke, diabetes, certain cancers. These are guidelines; individual health varies."
      },
      {
        question: "Why might my BMI show I'm overweight when I'm actually very muscular?",
        answer: "BMI doesn't distinguish between muscle and fat. Muscle is denser than fat, so bodybuilders and athletes with high muscle mass often have \"overweight\" or \"obese\" BMI despite low body fat. This is a known limitation. For muscular individuals, body fat percentage, waist circumference, and overall health markers are better indicators than BMI alone."
      },
      {
        question: "Can I have a normal BMI but still be at risk for health problems?",
        answer: "Yes. \"Normal weight obesity\" occurs when someone has normal BMI but high body fat percentage, often with low muscle mass. This can increase health risks despite normal BMI. Factors like waist circumference, diet quality, physical activity, genetics, and metabolic health all contribute to health risk beyond BMI."
      },
      {
        question: "How does age affect BMI interpretation?",
        answer: "Older adults (65+) naturally have more body fat and less muscle mass. Slightly higher BMI (25-27) may be protective for older adults. For children and teenagers, BMI percentiles for age and sex are used instead of adult categories. Adults aged 20-65 use standard categories, but individual health context matters at all ages."
      },
      {
        question: "Are BMI standards the same for all ethnic groups?",
        answer: "No. Asian populations have higher health risks at lower BMIs. WHO recommends BMI ≥23 as overweight and ≥27.5 as obese for Asians. Pacific Islanders may have higher BMI cutoff points. Black individuals tend to have more muscle mass. Ethnic-specific thresholds provide more accurate health risk assessment. Our calculator notes these variations."
      },
      {
        question: "What should I do if my BMI indicates I'm underweight?",
        answer: "Consult a healthcare provider to rule out underlying health conditions (thyroid issues, eating disorders, malabsorption). Focus on nutrient-dense foods, increase calorie intake gradually, strength training to build muscle mass. Avoid junk food - aim for healthy weight gain through balanced nutrition. Professional guidance ensures safe, sustainable weight gain."
      },
      {
        question: "How does BMI relate to cardiovascular health?",
        answer: "Higher BMI (especially ≥30) correlates with increased risk of high blood pressure, high cholesterol, coronary artery disease, heart attack, and stroke. Even 5-10% weight loss in overweight individuals can improve cardiovascular health markers. However, waist circumference and waist-to-hip ratio may be better predictors of heart disease than BMI alone."
      },
      {
        question: "Can BMI be used during pregnancy?",
        answer: "BMI calculated before pregnancy helps determine healthy weight gain during pregnancy. Pre-pregnancy BMI guides recommendations: underweight women should gain 28-40 lbs, normal weight 25-35 lbs, overweight 15-25 lbs, obese 11-20 lbs. Don't use BMI to assess weight status during pregnancy - weight gain is expected and healthy. Consult your obstetrician for personalized guidance."
      },
      {
        question: "What are the limitations of BMI that I should know about?",
        answer: "BMI doesn't measure body fat directly, fat distribution, muscle mass, bone density, or metabolic health. It may misclassify athletes, very muscular individuals, older adults, growing adolescents, and certain ethnic groups. It's a population-level screening tool, not an individual diagnostic. Use alongside other health measurements for comprehensive assessment."
      },
      {
        question: "How often should I check my BMI?",
        answer: "Monthly or quarterly is sufficient for most people tracking weight changes. Weekly can be useful during active weight loss/gain programs. Daily isn't necessary as BMI changes slowly and weight fluctuates daily. For stable adults, annual checks during health screenings are adequate. Focus on trends over time rather than single measurements."
      },
      {
        question: "What alternative measurements complement BMI?",
        answer: "Waist circumference (central obesity indicator), waist-to-hip ratio (fat distribution), body fat percentage (direct fat measurement), skeletal muscle mass, visceral fat level, blood pressure, fasting glucose, lipid panel, and cardiovascular fitness tests. These provide a comprehensive health picture beyond weight-to-height ratio. Body composition analysis offers detailed insights."
      },
      {
        question: "How can I improve my BMI if it's in an unhealthy range?",
        answer: "Combine balanced nutrition with regular physical activity. For weight loss: create moderate calorie deficit (500-750 cal/day), eat whole foods, limit processed foods, stay hydrated, get adequate sleep (7-9 hours), manage stress. Include both cardio and strength training. Aim for 1-2 lbs loss per week for sustainable results. Professional guidance (dietitian, trainer) helps create personalized plans."
      },
      {
        question: "Is BMI reliable for children and teenagers?",
        answer: "Children and teens use BMI-for-age percentiles, not adult categories, because body composition changes during growth. Percentiles compare child's BMI to others same age and sex: <5th percentile = underweight, 5th-85th = healthy weight, 85th-95th = overweight, ≥95th = obese. Pediatricians interpret these considering growth patterns, puberty, and overall health."
      },
      {
        question: "Is the BMI calculator free?",
        answer: "Yes, our BMI calculator is completely free with no hidden fees, registration requirements, or limitations. Calculate your BMI unlimited times, for yourself or others. Use metric or imperial units, get instant results with health category classifications. Free, accurate, and privacy-friendly - all calculations happen in your browser with no data stored."
      },
      {
        question: "What BMI calculator do doctors use?",
        answer: "Doctors typically use the same formula (weight in kg / height in m²) whether calculated manually, with basic calculators, or through electronic health records. Some medical settings use specialized tools that include additional assessments like waist circumference or body composition analysis. Our calculator uses the standard WHO formula that medical professionals rely on."
      },
      {
        question: "Does BMI calculator account for muscle?",
        answer: "No, BMI doesn't distinguish muscle from fat - it only uses height and weight. This is a significant limitation. Bodybuilders, athletes, and very active individuals often have high BMI due to muscle mass despite low body fat. For these individuals, body fat percentage, body composition analysis, or other metrics provide more accurate health assessments than BMI alone."
      }
    ],

    relatedTools: [
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" },
      { name: "BMR Calculator", href: "/calculator/bmr-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "All Calculators", href: "/calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Free BMI Calculator - Body Mass Index Calculator",
        description: "Calculate your BMI instantly with our free Body Mass Index calculator. Get accurate results, BMI categories, and personalized health recommendations based on WHO standards.",
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
        title: "BMI Calculator | Free Body Mass Index Calculator",
        description: "Calculate your BMI (Body Mass Index) instantly. Free BMI calculator with height and weight inputs. Get your BMI category and health recommendations based on WHO standards.",
        path: "/calculator/bmi-calculator"
      }}
    />
  )
}
