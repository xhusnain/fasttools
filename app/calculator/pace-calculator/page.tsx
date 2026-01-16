import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import PaceCalculator from "@/components/calculators/pace-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { GTable } from "@/ui/gtable"
import { Brain, Calculator, Target, BookOpen, Shield, Users, TrendingUp, Info, AlertTriangle, CheckCircle, Zap, Clock, Heart } from "lucide-react"

const baseMetadata = createMetadata({
  title: "Pace Calculator - Running Speed & Pace",
  description:
    "Calculate running pace, training zones, heart rate zones, race predictions & VO2 Max. Perfect for runners, coaches & athletes.",
  path: "/calculator/pace-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "Pace Calculator", href: "/calculator/pace-calculator" }
  ],
  schemaOptions: {
    name: "Pace Calculator | Advanced Running Pace Calculator",
    alternateName: "Professional Running Tool with Training Zones",
    applicationCategory: "SportsApplication",
    featureList: [
      "Basic Pace Calculation",
      "Multipoint Pace Analysis",
      "Pace Conversion",
      "Finish Time Prediction",
      "Heart Rate Zone Analysis",
      "Training Zone Recommendations",
      "VO2 Max Estimation",
      "Race Time Predictions"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Health & Fitness",
}

export default function PaceCalculatorPage() {
  const toolContent = {
    toolName: "Pace Calculator",
    overview: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and serious athletes looking to optimize their performance.",

    howToSteps: [
      "Enter your time: Input hours, minutes, and seconds.",
      "Enter your distance: Choose from common race distances or enter a custom one.",
      "Calculate Pace: Instantly see your pace per mile and per kilometer.",
      "Analyze Splits: Use the multipoint tool to track pace variations.",
      "Get Training Zones: View your heart rate zones and training intensities."
    ],

    features: [
      "Pace Calculation: Accurate splits for any distance.",
      "Training Zones: Heart rate based zones for optimal training.",
      "VO2 Max Estimate: Assess your cardiovascular fitness.",
      "Race Predictor: Estimate finish times for 5K, 10K, Half, and Full Marathon.",
      "Multipoint Analysis: Track pace across different segments.",
      "Unit Conversion: Switch seamlessly between miles and kilometers.",
      "Performance Metrics: Advanced insights for serious athletes.",
      "Mobile Friendly: Check your pace on the go."
    ],

    useCases: [
      "Race Planning: Determine the pace needed to hit your goal time.",
      "Training: Set precise intensity zones for different workouts.",
      "Performance Analysis: Track improvements in speed and fitness.",
      "Coaching: Design personalized training plans for athletes.",
      "Marathon Prep: Calculate long run paces and race day strategy.",
      "Fitness Tracking: Monitor VO2 Max and heart rate trends."
    ],

    aboutTool: (
      <div className="space-y-8">
        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Calculator className="h-6 w-6 text-primary" />
            What is Running Pace? Understanding Pace Calculation for Runners
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong>Running Pace</strong> is the time it takes to cover a specific distance, typically measured in minutes per mile or minutes per kilometer. Unlike speed (miles per hour), pace helps runners regulate their effort during training and races to ensure they don't start too fast and "bonk" before the finish line. Understanding pace is essential for effective race planning, training zone management, and performance optimization.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Our advanced pace calculator helps runners calculate pace, training zones, heart rate zones, race predictions, and VO2 Max estimates. Whether you're planning a 5K race, training for a marathon, setting up interval workouts, or analyzing performance improvements, our calculator provides accurate, instant results with support for miles and kilometers, making it perfect for runners, coaches, and serious athletes worldwide.
          </p>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            Heart Rate Training Zones: Complete Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding heart rate training zones helps you optimize your training intensity and maximize performance:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-sm text-muted-foreground">
            <li><strong>Zone 1 (Recovery):</strong> 50-60% Max HR. Easy effort, promotes recovery and blood flow.</li>
            <li><strong>Zone 2 (Aerobic Base):</strong> 60-70% Max HR. Builds endurance and burns fat. The foundation of training.</li>
            <li><strong>Zone 3 (Aerobic Threshold):</strong> 70-80% Max HR. Moderate effort, improves aerobic capacity.</li>
            <li><strong>Zone 4 (Lactate Threshold):</strong> 80-90% Max HR. Hard effort, raises the lactate threshold for speed.</li>
            <li><strong>Zone 5 (VO2 Max):</strong> 90-100% Max HR. Maximum effort, increases top-end speed and power.</li>
          </ul>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Expert Insight: Understanding Cardiac Drift in Running
          </h2>
          <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-l-4 border-blue-500 rounded-lg">
            <p className="italic text-blue-700 dark:text-blue-300 leading-relaxed">
              "Ever wonder why your heart rate keeps rising even when you maintain the same pace? This is called <strong>Cardiac Drift</strong>. As you run, your body temperature rises and you lose fluids via sweat. To cool you down, blood is diverted away from working muscles to the skin. This reduces stroke volume (amount of blood per beat), so your heart must beat faster to maintain oxygen delivery. In hot conditions, it's often better to train by <em>Perceived Effort</em> rather than just pace."
            </p>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-2">— FastTools Athletic Science Team</p>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Race Pace & Time Reference: Quick Lookup Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Use this cheat sheet to quickly find your target race times based on your current training pace:
          </p>
          <div className="overflow-x-auto">
            <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">Pace / Mile</th>
                <th className="p-3 text-left">Pace / Km</th>
                <th className="p-3 text-left">5K Time</th>
                <th className="p-3 text-left">Half Marathon</th>
                <th className="p-3 text-left">Full Marathon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold text-foreground">6:00 min</td>
                <td className="p-3">3:44 min</td>
                <td className="p-3">18:38</td>
                <td className="p-3">1:18:36</td>
                <td className="p-3">2:37:19</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">7:00 min</td>
                <td className="p-3">4:21 min</td>
                <td className="p-3">21:45</td>
                <td className="p-3">1:31:42</td>
                <td className="p-3">3:03:32</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">8:00 min</td>
                <td className="p-3">4:58 min</td>
                <td className="p-3">24:51</td>
                <td className="p-3">1:44:48</td>
                <td className="p-3">3:29:45</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">9:00 min</td>
                <td className="p-3">5:36 min</td>
                <td className="p-3">27:58</td>
                <td className="p-3">1:57:54</td>
                <td className="p-3">3:55:58</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">10:00 min</td>
                <td className="p-3">6:13 min</td>
                <td className="p-3">31:04</td>
                <td className="p-3">2:11:00</td>
                <td className="p-3">4:22:11</td>
              </tr>
            </tbody>
            </GTable>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            How to Use the Pace Calculator: Step-by-Step Guide
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Follow these simple steps to calculate running pace accurately:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">1</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter Your Time</h4>
                <p className="text-sm text-muted-foreground">Input hours, minutes, and seconds for your run. The calculator accepts any time format, making it easy to calculate pace from your GPS watch, race results, or training logs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">2</div>
              <div>
                <h4 className="font-semibold text-foreground">Enter Your Distance</h4>
                <p className="text-sm text-muted-foreground">Choose from common race distances (5K, 10K, half marathon, marathon) or enter a custom distance. The calculator supports both miles and kilometers for international compatibility.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">3</div>
              <div>
                <h4 className="font-semibold text-foreground">Calculate Pace</h4>
                <p className="text-sm text-muted-foreground">Instantly see your pace per mile and per kilometer. The calculator provides accurate pace calculations with training zone recommendations based on your heart rate zones.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">4</div>
              <div>
                <h4 className="font-semibold text-foreground">Analyze Splits</h4>
                <p className="text-sm text-muted-foreground">Use the multipoint tool to track pace variations across different segments of your run. This helps identify where you slowed down or sped up during training or races.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">5</div>
              <div>
                <h4 className="font-semibold text-foreground">Get Training Zones</h4>
                <p className="text-sm text-muted-foreground">View your heart rate zones and training intensities. The calculator shows VO2 Max estimates, race predictions, and training zone recommendations for optimal performance.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Common Running Pace Mistakes to Avoid
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Understanding common pace mistakes helps you train more effectively and avoid injuries:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Running Easy Days Too Hard</h4>
                <p className="text-sm text-muted-foreground">Many runners train at moderate intensity on easy days, which prevents proper recovery and limits aerobic base building. Keep 80% of your runs in Zone 2 (conversational pace) to build endurance without overtraining.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Ignoring Cardiac Drift</h4>
                <p className="text-sm text-muted-foreground">Heart rate naturally rises during long runs even at the same pace due to cardiac drift (dehydration, heat, fatigue). Adjust pace based on perceived effort and heart rate zones, not just target pace, especially in hot conditions.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Starting Races Too Fast</h4>
                <p className="text-sm text-muted-foreground">Starting races faster than goal pace leads to premature fatigue and slower finish times. Practice negative splitting (running second half faster) and use our pace calculator to plan even pacing or negative splits for optimal race performance.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-red-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Not Adjusting for Conditions</h4>
                <p className="text-sm text-muted-foreground">Heat, humidity, altitude, and wind significantly affect pace. Don't try to maintain the same pace in different conditions—adjust effort based on heart rate zones and perceived effort to maintain the same training stimulus.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Privacy & Security: Your Running Data Stays Private
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Your privacy and data security are our top priorities. Our pace calculator processes all information locally in your browser:
          </p>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Client-Side Processing</h4>
                <p className="text-sm text-muted-foreground">All pace calculations happen directly in your browser using JavaScript. Your times, distances, and calculation results never leave your device or get transmitted to our servers. No data is sent over the internet during calculations.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">No Data Storage or Tracking</h4>
                <p className="text-sm text-muted-foreground">We don't store, log, or track any of your running data. There's no database of your times, paces, or training information, and no way for us to access your calculations or results. Your privacy is completely protected while using our tool.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-none w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
              <div>
                <h4 className="font-semibold text-foreground">Safe for Training Use</h4>
                <p className="text-sm text-muted-foreground">You can use the calculator with confidence for race planning, training zone calculations, and performance analysis. All calculations happen locally, ensuring your training data and race goals remain private and secure.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    ),

    proTip: "Most runners run their easy days too hard. Keep your easy runs in Zone 2 (conversational pace) to build a massive aerobic base without overtraining. Save the hard efforts for specific workout days.",

    faqs: [
      {
        question: "How do I calculate my pace?",
        answer: "Divide your total time by the distance. For example, running 3 miles in 30 minutes is 30 / 3 = 10 minutes per mile."
      },
      {
        question: "What is a good running pace?",
        answer: "It varies widely. A beginner might run 10-12 minutes per mile, while an elite runner might run 5-6 minutes per mile. Focus on your own improvement."
      },
      {
        question: "How accurate are race predictors?",
        answer: "They are estimates based on the Riegel formula. They assume you have done the appropriate training for the longer distance. They are generally accurate within a few minutes."
      },
      {
        question: "What is 'Negative Splitting'?",
        answer: "Running the second half of a race faster than the first half. This is often the most efficient way to run a personal best."
      },
      {
        question: "How do I find my Max Heart Rate?",
        answer: "The formula 220 - Age is a rough estimate. A field test (running hard up a hill) or a lab test provides more accurate results."
      },
      {
        question: "Why is my GPS watch pace different?",
        answer: "GPS watches can have small errors due to signal interference. They also measure the total distance you ran, which might be longer than the official race course if you didn't run the tangents."
      },
      {
        question: "Should I train by pace or heart rate?",
        answer: "Heart rate is often better for easy runs and recovery, as it accounts for heat, stress, and fatigue. Pace is better for speed workouts and race specific training."
      },
      {
        question: "What is Lactate Threshold?",
        answer: "The intensity at which lactate begins to accumulate in the blood faster than it can be removed. Training at this pace improves your ability to sustain speed."
      },
      {
        question: "How does heat affect pace?",
        answer: "Heat increases cardiac drift, meaning your heart rate rises for the same pace. You should slow down in hot weather to maintain the same effort level."
      },
      {
        question: "What is the 80/20 rule?",
        answer: "A training philosophy where 80% of your running is done at low intensity (Zone 1-2) and 20% at high intensity (Zone 4-5). This is proven to maximize performance and minimize injury."
      },
      {
        question: "How to calculate running pace per mile?",
        answer: "To calculate running pace per mile, divide your total time (in minutes) by the distance (in miles). For example, running 3 miles in 30 minutes is 30 ÷ 3 = 10 minutes per mile. Our pace calculator automates this calculation—just enter your time and distance to get instant pace results."
      },
      {
        question: "How to calculate running pace per kilometer?",
        answer: "To calculate running pace per kilometer, divide your total time (in minutes) by the distance (in kilometers). For example, running 5 kilometers in 25 minutes is 25 ÷ 5 = 5 minutes per kilometer. Our calculator supports both miles and kilometers, automatically converting between units."
      },
      {
        question: "What is a good running pace for beginners?",
        answer: "A good running pace for beginners is typically 10-12 minutes per mile (6-7.5 minutes per kilometer), which allows for conversation while running. Focus on maintaining a comfortable, conversational pace rather than speed. As you build endurance, your pace will naturally improve. Use our pace calculator to track your progress over time."
      },
      {
        question: "How to convert pace from min/mile to min/km?",
        answer: "To convert pace from minutes per mile to minutes per kilometer, multiply the pace per mile by 0.621371 (or divide by 1.609344). For example, 8 min/mile = 8 × 0.621371 = 4.97 min/km (approximately 5 min/km). Our calculator automatically converts between miles and kilometers for easy comparison."
      },
      {
        question: "What is race pace? How to calculate it?",
        answer: "Race pace is the pace you plan to maintain during a race to achieve your goal finish time. To calculate race pace, divide your target finish time by the race distance. For example, for a 5K (3.1 miles) in 25 minutes, race pace is 25 ÷ 3.1 = 8.06 min/mile. Our calculator helps you determine race pace for any distance and goal time."
      },
      {
        question: "How to calculate marathon pace?",
        answer: "To calculate marathon pace, divide your target marathon finish time (in minutes) by 26.2 miles. For example, for a 4-hour marathon (240 minutes), pace is 240 ÷ 26.2 = 9.16 min/mile. Our calculator automatically calculates marathon pace when you enter your target finish time, helping you plan your race strategy."
      },
      {
        question: "What is negative split in running?",
        answer: "Negative split means running the second half of a race faster than the first half. This is often the most efficient way to run a personal best because you conserve energy early and finish strong. Our pace calculator helps you plan negative splits by calculating target paces for different segments of your race."
      },
      {
        question: "How to calculate 5K pace?",
        answer: "To calculate 5K pace, divide your target finish time (in minutes) by 3.1 miles (or 5 kilometers). For example, for a 25-minute 5K, pace is 25 ÷ 3.1 = 8.06 min/mile. Our calculator automatically calculates 5K pace when you enter your target time, helping you plan your race strategy and training."
      },
      {
        question: "What is easy pace in running?",
        answer: "Easy pace is a conversational, comfortable pace where you can maintain a conversation while running. This is typically Zone 2 heart rate (60-70% of max HR) or 2-3 minutes per mile slower than your 5K pace. Easy pace builds aerobic base without overtraining. Our calculator helps you determine your easy pace based on your current fitness level."
      },
      {
        question: "How to calculate half marathon pace?",
        answer: "To calculate half marathon pace, divide your target finish time (in minutes) by 13.1 miles. For example, for a 2-hour half marathon (120 minutes), pace is 120 ÷ 13.1 = 9.16 min/mile. Our calculator automatically calculates half marathon pace and provides race predictions based on your current training pace."
      },
      {
        question: "What is tempo pace? How to find it?",
        answer: "Tempo pace is a comfortably hard pace, typically your lactate threshold pace or 15-20 seconds per mile slower than your 5K pace. You should be able to maintain tempo pace for 20-30 minutes. Our calculator helps you determine tempo pace based on your current race times and training zones."
      },
      {
        question: "How to calculate interval pace?",
        answer: "Interval pace is your VO2 max pace, typically 30-45 seconds per mile faster than your 5K pace. You can maintain interval pace for 2-5 minutes with rest periods. To calculate interval pace, use your 5K pace and subtract 30-45 seconds per mile. Our calculator helps you determine interval paces for speed workouts."
      },
      {
        question: "What is the difference between pace and speed?",
        answer: "Pace is time per unit distance (minutes per mile or kilometer), while speed is distance per unit time (miles per hour or kilometers per hour). Runners use pace because it's easier to regulate effort—'8 min/mile' is more intuitive than '7.5 mph'. Our calculator shows both pace and speed for complete understanding."
      },
      {
        question: "How accurate is GPS watch pace?",
        answer: "GPS watch pace can have errors of 1-3% due to signal interference, satellite coverage, and measurement methods. GPS watches also measure total distance traveled (including curves and tangents), which may differ from the official race course. For accuracy, use our pace calculator to verify GPS readings and calculate pace from known distances and times."
      },
      {
        question: "What is the best pace for long runs?",
        answer: "The best pace for long runs is easy pace (Zone 2 heart rate), which is 2-3 minutes per mile slower than your 5K pace or conversational pace. This builds aerobic endurance without overtraining. Use our pace calculator to determine your long run pace based on your current fitness level and training zones."
      },
      {
        question: "How to improve running pace?",
        answer: "To improve running pace, follow the 80/20 rule: 80% easy runs (Zone 2) for aerobic base, 20% hard runs (intervals, tempo) for speed. Include strength training, proper recovery, and consistent training. Our pace calculator helps you track improvements over time and plan appropriate training paces for optimal performance."
      },
      {
        question: "What is recovery pace?",
        answer: "Recovery pace is your slowest, easiest pace used for recovery runs between hard workouts. This is Zone 1 heart rate (50-60% of max HR) or 3-4 minutes per mile slower than your 5K pace. Recovery pace promotes blood flow and recovery without adding stress. Our calculator helps you determine appropriate recovery paces."
      },
      {
        question: "How to calculate 10K pace?",
        answer: "To calculate 10K pace, divide your target finish time (in minutes) by 6.2 miles (or 10 kilometers). For example, for a 50-minute 10K, pace is 50 ÷ 6.2 = 8.06 min/mile. Our calculator automatically calculates 10K pace when you enter your target time, helping you plan your race strategy and training workouts."
      },
      {
        question: "What is lactate threshold pace?",
        answer: "Lactate threshold pace is the fastest pace you can maintain for 20-30 minutes without lactate accumulation. This is typically 15-20 seconds per mile slower than your 5K pace. Training at lactate threshold improves your ability to sustain faster paces. Our calculator helps you determine lactate threshold pace based on your current race times."
      },
      {
        question: "How to calculate VO2 max pace?",
        answer: "VO2 max pace is your maximum aerobic pace, typically 30-45 seconds per mile faster than your 5K pace. You can maintain VO2 max pace for 2-5 minutes during interval workouts. To calculate VO2 max pace, use your 5K pace and subtract 30-45 seconds per mile. Our calculator helps you determine VO2 max paces for interval training."
      },
      {
        question: "What is a good running pace for weight loss?",
        answer: "A good running pace for weight loss is easy to moderate pace (Zone 2-3 heart rate), which maximizes fat burning and calorie expenditure. This is typically 2-3 minutes per mile slower than your 5K pace or conversational pace. Use our pace calculator to determine your optimal weight loss pace based on your fitness level."
      },
      {
        question: "How to calculate pace for treadmill running?",
        answer: "Treadmill pace is the same as outdoor pace—time per mile or kilometer. Enter your treadmill time and distance into our pace calculator to get your pace. However, treadmill pace may feel easier than outdoor pace due to no wind resistance. Adjust effort based on perceived exertion and heart rate zones rather than just pace."
      },
      {
        question: "What is the difference between marathon pace and training pace?",
        answer: "Marathon pace is your target race pace for a marathon, while training pace varies (easy, tempo, interval). Marathon pace is typically 30-45 seconds per mile slower than your 5K pace. Training paces are used during workouts: easy pace (2-3 min/mile slower than 5K), tempo pace (15-20 sec/mile slower than 5K), interval pace (30-45 sec/mile faster than 5K). Our calculator helps you determine all training paces."
      },
      {
        question: "How to calculate running pace from distance and time?",
        answer: "To calculate running pace from distance and time, divide your total time (in minutes) by the distance (in miles or kilometers). For example, running 3 miles in 30 minutes = 30 ÷ 3 = 10 min/mile. Our calculator automates this—enter your time (hours, minutes, seconds) and distance to get instant pace calculations in minutes per mile and minutes per kilometer."
      },
      {
        question: "Is pace calculator free to use?",
        answer: "Yes, our pace calculator is completely free with no charges, subscriptions, or registration required. You can calculate unlimited paces, access all features (pace conversion, race predictions, training zones, VO2 Max estimates), and use the tool for personal, training, or coaching purposes without any cost. All features are available without limitations."
      },
      {
        question: "Can I use pace calculator on mobile devices?",
        answer: "Yes! Our pace calculator is fully responsive and works perfectly on mobile devices, tablets, and desktop computers. The calculator is optimized for touch screens, making it easy to enter times and distances on the go. You can use it during training, at races, or while planning workouts, wherever you are."
      },
      {
        question: "How accurate is the pace calculator?",
        answer: "Our pace calculator is highly accurate, using precise mathematical formulas to calculate pace from time and distance. The calculations match standard running pace calculations used by coaches, athletes, and race organizers. Race predictions use the Riegel formula, which is generally accurate within a few minutes for runners who have done appropriate training for the longer distance."
      },
      {
        question: "How to use pace calculator for training?",
        answer: "Use our pace calculator for training by calculating target paces for different workout types: easy pace (Zone 2) for long runs, tempo pace (lactate threshold) for tempo runs, interval pace (VO2 max) for speed workouts. Enter your current race times to determine appropriate training paces, and use race predictions to set realistic goals for longer distances. The calculator helps you plan effective training programs."
      }
    ],

    relatedTools: [
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Calorie Calculator", href: "/calculator/calorie-calculator" },
      { name: "Body Fat Calculator", href: "/calculator/body-fat-calculator" },
      { name: "Time Duration", href: "/calculator/time-duration" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "Pace Calculator - Advanced Running Pace & Zones",
        description: "Calculate running pace, training zones, heart rate zones, race predictions, and VO2 Max with our advanced pace calculator. Perfect for runners, coaches, and serious athletes.",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "Pace Calculator", href: "/calculator/pace-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <PaceCalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "Pace Calculator | Free Advanced Running Pace Calculator",
        description: "Calculate running pace, training zones, heart rate zones, race predictions & VO2 Max. Perfect for runners, coaches & athletes.",
        path: "/calculator/pace-calculator"
      }}
    />
  )
}
