import type { Metadata } from "next"
import { ToolPageLayout } from "@/components/common/tool-page-layout"
import { GPACalculator } from "@/components/calculators/gpa-calculator"
import { createMetadata } from "@/lib/metadata-base"
import { Calculator, Award, TrendingUp, Info, Globe, Target, Users, BarChart3, Building, Clock, DollarSign, Home, FileText, Percent, BookOpen, Shield, Star, Brain } from "lucide-react"
import { GTable } from "@/ui/gtable"

const baseMetadata = createMetadata({
  title: "GPA Calculator - Calculate Your GPA",
  description:
    "Calculate your GPA in seconds! Free GPA calculator used by 1M+ students. Supports weighted/unweighted, all scales (4.0, 5.0), high school & college. Try now!",
  path: "/calculator/gpa-calculator",
  breadcrumbs: [
    { label: "Calculator", href: "/calculator" },
    { label: "GPA Calculator", href: "/calculator/gpa-calculator" }
  ],
  schemaOptions: {
    name: "GPA Calculator",
    alternateName: "Grade Point Average Calculator",
    applicationCategory: "EducationalApplication",
    featureList: [
      "Weighted & Unweighted GPA calculation",
      "Support for 4.0 and 5.0 scales",
      "Cumulative GPA tracking",
      "Semester-based calculation",
      "Percentage to GPA conversion",
      "High School & College modes",
      "What-if scenario planning"
    ]
  }
})

export const metadata: Metadata = {
  ...baseMetadata,
  applicationName: "FastTools",
  category: "Education",
}

export default function GPACalculatorPage() {
  const toolContent = {
    toolName: "GPA Calculator",
    overview: "Calculate your GPA in seconds! Free GPA calculator used by 1M+ students. Supports weighted/unweighted, all scales (4.0, 5.0), high school & college. Try now!",

    howToSteps: [
      "Add Courses: Enter course name, grade, and credits for each class.",
      "Select Scale: Choose between weighted (5.0) or unweighted (4.0) scale.",
      "Calculate: Instantly see your semester GPA and cumulative GPA."
    ],

    features: [
      "Weighted & Unweighted GPA calculation",
      "Support for 4.0 and 5.0 scales",
      "Cumulative GPA tracking",
      "Semester-based calculation",
      "Percentage to GPA conversion",
      "High School & College modes",
      "What-if scenario planning"
    ],

    useCases: [
      "High School Students: Track GPA for college admissions.",
      "College Students: Monitor academic standing and scholarship eligibility.",
      "International Students: Convert grades to US GPA scale.",
      "Academic Planning: Set goals and forecast future GPA."
    ],

    aboutTool: (
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is a GPA and Why Does It Matter?</h2>
          <p className="text-muted-foreground mb-4">
            A Grade Point Average (GPA) is a numerical representation of your academic performance, and it's one of the most important metrics in your academic career. It's a standardized way for schools, colleges, and employers to assess your achievements. Your GPA is calculated by converting your grades into points and then finding the average.
          </p>
          <p className="text-muted-foreground">
            A higher GPA generally indicates better academic performance and can open doors to more opportunities, such as scholarships, honors programs, and competitive graduate schools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How to Calculate Your GPA Manually</h2>
          <p className="text-muted-foreground mb-4">
            While our online GPA calculator is the easiest way to find your GPA, understanding how to calculate it manually can give you a deeper insight into your academic standing. Here's a step-by-step guide:
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li><strong>Convert grades to points:</strong> Assign a point value (A=4, B=3, etc.).</li>
              <li><strong>Multiply by credits:</strong> Find the quality points for each course.</li>
              <li><strong>Sum points and credits:</strong> Total your quality points and credit hours.</li>
              <li><strong>Divide:</strong> Quality Points ÷ Total Credits = Your GPA.</li>
            </ol>
            <GTable>
              <thead className="bg-muted text-foreground font-semibold">
                <tr>
                  <th className="p-3 text-left">Letter Grade</th>
                  <th className="p-3 text-left">Percentage</th>
                  <th className="p-3 text-left">4.0 Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm">
                <tr><td className="p-3 font-semibold">A / A+</td><td className="p-3">93-100%</td><td className="p-3">4.0</td></tr>
                <tr><td className="p-3 font-semibold">A-</td><td className="p-3">90-92%</td><td className="p-3">3.7</td></tr>
                <tr><td className="p-3 font-semibold">B+</td><td className="p-3">87-89%</td><td className="p-3">3.3</td></tr>
                <tr><td className="p-3 font-semibold">B</td><td className="p-3">83-86%</td><td className="p-3">3.0</td></tr>
              </tbody>
            </GTable>
          </div>
        </section>

        <div className="p-6 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-2xl border border-purple-500/20 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Brain className="h-24 w-24 text-purple-500" />
          </div>
          <h4 className="flex items-center gap-2 font-bold text-purple-700 dark:text-purple-400 mb-3 relative z-10">
            <Brain className="h-5 w-5" />
            Expert Insight: The Weighted GPA Advantage
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 relative z-10 italic">
            "For students targeting ivy-league or competitive tier-1 schools, a Weighted GPA often matters more than an Unweighted one. Higher weights for AP and IB courses (up to 5.0) reflect the rigor of your curriculum. However, be aware that many admissions offices 're-calculate' your GPA based on their own internal standards, often removing elective weights to focus strictly on core academic strength. Always use our 'Weighted' mode to see how your course selection impacts your standing."
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4">Weighted vs. Unweighted GPA: What's the Difference?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Unweighted GPA</h3>
              <p className="text-sm text-muted-foreground">This is the most common type of GPA, calculated on a 4.0 scale. All courses are treated equally, regardless of their difficulty.</p>
            </div>
            <div className="p-4 bg-card rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-2">Weighted GPA</h3>
              <p className="text-sm text-muted-foreground">This type of GPA takes into account the difficulty of your courses. Advanced classes like AP, IB, and honors courses are given more weight, usually on a 5.0 scale.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">What Is a Good GPA? A Guide to Benchmarks</h2>
          <GTable>
            <thead className="bg-muted text-foreground font-semibold">
              <tr>
                <th className="p-3 text-left">GPA Range</th>
                <th className="p-3 text-left">Academic Standing</th>
                <th className="p-3 text-left">Typical Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-3 font-semibold text-foreground">3.5 - 4.0</td>
                <td className="p-3">Excellent (High Honors)</td>
                <td className="p-3 text-muted-foreground">Ivy League admits, competitive scholarships.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">3.0 - 3.4</td>
                <td className="p-3">Good (Honors)</td>
                <td className="p-3 text-muted-foreground">Standard university admissions, general merit aid.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">2.5 - 2.9</td>
                <td className="p-3">Average</td>
                <td className="p-3 text-muted-foreground">Solid for many public institutions and state colleges.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-foreground">Below 2.0</td>
                <td className="p-3">Academic Probation</td>
                <td className="p-3 text-muted-foreground">Requires immediate academic intervention or retakes.</td>
              </tr>
            </tbody>
          </GTable>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">The Ultimate Study Guide for Academic Success</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>Achieving a high GPA is about more than just studying hard; it's about studying smart. This guide provides a comprehensive roadmap to academic success.</p>

            <h3 className="font-semibold text-foreground">Understanding Your Learning Style</h3>
            <p>Identify if you are a visual, auditory, or kinesthetic learner to tailor your study methods for maximum effectiveness.</p>

            <h3 className="font-semibold text-foreground">Time Management</h3>
            <p>Use planners and techniques like the Pomodoro method to manage your study time efficiently and prevent burnout.</p>

            <h3 className="font-semibold text-foreground">Note-Taking Strategies</h3>
            <p>Adopt systems like Cornell Note-Taking or mind mapping to organize information and improve retention.</p>
          </div>
        </section>
      </div>
    ),

    faqs: [
      {
        question: "How do I find my GPA online?",
        answer: "You can easily find your GPA online using our calculator. Just enter your course grades and credits, and our tool will instantly compute your GPA. It's a quick and convenient way to stay updated on your academic performance without manual calculations."
      },
      {
        question: "How does an average GPA calculator work?",
        answer: "An average GPA calculator works by summing the total quality points for all your courses and dividing by the total number of credit hours. Quality points are your grade's value multiplied by the credits. Our tool automates this entire process for you accurately."
      },
      {
        question: "How do I do a GPA calculation?",
        answer: "To do a GPA calculation, multiply each course's grade point value by its credit hours. Then, add all these products together and divide by the total credit hours. Our online GPA calculator simplifies this by doing all the math for you instantly."
      },
      {
        question: "How much will my GPA go up with a calculator?",
        answer: "Our 'what if' GPA calculator can help you estimate how much your GPA will go up. By entering your current GPA and expected grades for future courses, you can see the potential increase and plan your studies accordingly to reach your academic goals."
      },
      {
        question: "How much GPA is good?",
        answer: "A 'good' GPA depends on your goals. For competitive colleges, a 3.5 or higher is often recommended. In university, a 3.0 is generally considered solid. However, requirements vary by program, so it's best to check with your specific institution or desired program."
      },
      {
        question: "How do I calculate GPA and CGPA?",
        answer: "To calculate GPA, you average your grades for a single semester. To find your CGPA, you average the GPAs from all your semesters. Our tool functions as both a GPA and CGPA calculator, making it easy to track both your short-term and long-term academic performance."
      },
      {
        question: "How can I find out what my GPA is?",
        answer: "Wondering 'what's my GPA'? Our calculator can tell you in seconds. Just input your course grades and credits, and the tool will display your current GPA. It's the simplest way to get an accurate, up-to-date calculation of your academic standing."
      },
      {
        question: "How do I calculate my GPA in Pakistan?",
        answer: "To calculate your GPA in Pakistan, you'll typically use a 4.0 scale, but this can vary by university (e.g., NUST, COMSATS, UET). Our calculator supports various grading systems, so you can enter your marks or grades to get an accurate GPA calculation."
      },
      {
        question: "How does a 'what if' GPA calculator work?",
        answer: "A 'what if' GPA calculator lets you predict your future GPA. You enter your current GPA and then add hypothetical grades for upcoming courses. This helps you understand how your performance in future classes will impact your overall academic standing."
      },
      {
        question: "How do I calculate my GPA from marks?",
        answer: "To calculate your GPA from marks, you first need to convert your marks for each subject into grade points using your institution's scale. Then, you can use our GPA calculator from marks to find your average by entering these grade points and credits."
      },
      {
        question: "Is GPA calculated by semester or year?",
        answer: "GPA is typically calculated by semester or quarter, depending on your school's academic calendar. Your cumulative GPA, however, is calculated at the end of each academic year, combining the GPAs from all the terms you've completed so far."
      },
      {
        question: "What is a GPA calculator?",
        answer: "A GPA calculator is an online tool that helps you determine your Grade Point Average. It automates the process of converting your grades to a numerical scale and averaging them, saving you time and ensuring accuracy. It's essential for academic tracking."
      },
      {
        question: "How can I raise my GPA?",
        answer: "To raise your GPA, focus on earning higher grades in future courses. Our 'how to raise GPA' calculator can help you set targets. By inputting your desired GPA, you can see what grades you'll need to achieve your goal."
      },
      {
        question: "How much GPA is required for a scholarship?",
        answer: "The GPA required for a scholarship varies widely. Some may require a minimum of 3.0, while more competitive awards might look for a 3.5 or higher. Always check the specific requirements for each scholarship you're interested in applying for."
      },
      {
        question: "How do I convert my percentage to GPA in Pakistan?",
        answer: "To convert your percentage to GPA in Pakistan, you'll need your university's specific conversion table. However, our percentage to GPA calculator for Pakistan can simplify this. Just enter your percentages, and it will convert them to a 4.0 scale GPA."
      },
      {
        question: "How is GPA calculated in a university?",
        answer: "In a university, GPA is calculated by multiplying the grade point of each course by its credit hours, summing the results, and then dividing by the total credit hours. Our GPA calculator for university students makes this process simple and error-free."
      },
      {
        question: "What is the highest GPA I can get?",
        answer: "The highest GPA you can get depends on your school's scale. On a standard unweighted scale, the maximum is 4.0. On a weighted scale, it can be 5.0 or even higher. Our calculator can help you determine the highest possible GPA you can achieve."
      },
      {
        question: "What is a 3.33 GPA equivalent to?",
        answer: "A 3.33 GPA is typically equivalent to a B+ average. It's a strong GPA that demonstrates solid academic performance. On a percentage scale, it would be roughly equivalent to an 87-89%, though this can vary by institution."
      },
      {
        question: "Is GPA calculated for all four years of high school?",
        answer: "Yes, your cumulative GPA in high school is typically calculated based on your grades from all four years, starting from 9th grade. This provides a comprehensive overview of your academic performance for college applications and scholarship considerations."
      },
      {
        question: "What is a cumulative GPA calculator?",
        answer: "A cumulative GPA calculator computes your overall GPA across all semesters or terms you've completed. It gives you a long-term view of your academic performance, which is crucial for college applications, scholarships, and job opportunities after graduation."
      },
      {
        question: "How do I calculate my total GPA?",
        answer: "To calculate your total GPA, you'll need to average your grades from all the courses you've taken. Our calculator can do this for you. Simply input all your past and current grades and credits to get your accurate total GPA."
      },
      {
        question: "How do I calculate the GPA of a single subject?",
        answer: "To calculate the GPA of a single subject, you just need to know the grade you received and your school's grading scale. For example, if you got an 'A' on a 4.0 scale, your GPA for that subject is 4.0."
      },
      {
        question: "How do I calculate my GPA on a 5.0 scale?",
        answer: "To calculate your GPA on a 5.0 scale, which is often used for weighted grades, you'll need to assign the correct point value for each grade (e.g., an 'A' in an AP class might be 5.0). Our calculator supports the 5.0 scale."
      },
      {
        question: "How often is GPA calculated?",
        answer: "GPA is typically calculated at the end of each academic term, such as a semester or quarter. Your cumulative GPA, which includes all your grades, is also updated at the same time, giving you a running overview of your academic performance."
      },
      {
        question: "What are credits in a GPA calculator?",
        answer: "Credits, or credit hours, represent the weight of a course in your overall GPA calculation. Courses with more credits have a greater impact on your GPA. If your school doesn't use credits, you can simply enter '1' for each course."
      }
    ],

    relatedTools: [
      { name: "Percentage Calculator", href: "/calculator/percentage-calculator" },
      { name: "Age Calculator", href: "/calculator/age-calculator" },
      { name: "BMI Calculator", href: "/calculator/bmi-calculator" },
      { name: "Time Duration", href: "/calculator/time-duration" },
      { name: "Scientific Calculator", href: "/calculator/scientific-calculator" },
      { name: "Loan Calculator", href: "/finance-tools/loan-calculator" }
    ]
  }

  return (
    <ToolPageLayout
      header={{
        title: "GPA Calculator",
        description: "Calculate your GPA in seconds! Free GPA calculator used by 1M+ students. Supports weighted/unweighted, all scales (4.0, 5.0), high school & college. Try now!",
        titleSize: "medium",
        descriptionSize: "small",
        color: "blue"
      }}
      breadcrumbs={[
        { label: "Calculator", href: "/calculator" },
        { label: "GPA Calculator", href: "/calculator/gpa-calculator" }
      ]}
      toolComponent={
        <div className="p-3 sm:p-4 md:p-5 rounded-lg bg-card border border-border shadow">
          <GPACalculator />
        </div>
      }
      toolContent={toolContent}
      expectedMetadata={{
        title: "GPA Calculator - The Ultimate Tool for College, High School, and University",
        description: "Calculate your GPA in seconds! Free GPA calculator used by 1M+ students. Supports weighted/unweighted, all scales (4.0, 5.0), high school & college. Try now!",
        path: "/calculator/gpa-calculator"
      }}
    />
  )
}