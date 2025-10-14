"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  GraduationCap, 
  Copy, 
  Check, 
  Plus, 
  Trash2, 
  Calculator, 
  Target, 
  BookOpen, 
  Award, 
  BarChart3, 
  PieChart, 
  Lightbulb, 
  Settings
} from "lucide-react"
import { LoadingSpinner } from "@/components/loading-spinner"

interface Course {
  id: string
  name: string
  credits: number
  grade: string
  points: number
}

interface GPAResult {
  gpa: number
  totalCredits: number
  totalPoints: number
  courses: Course[]
  gradeDistribution: { grade: string; count: number; percentage: number }[]
  semesterBreakdown: { semester: string; gpa: number; credits: number }[]
  improvementSuggestions: string[]
  academicStanding: string
  honorsEligibility: boolean
}

interface GPAPlanningResult {
  currentGPA: number
  targetGPA: number
  currentCredits: number
  additionalCredits: number
  requiredGPA: number
  achievable: boolean
  recommendations: string[]
}

export function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", name: "Math", credits: 3, grade: "A", points: 4.0 },
    { id: "2", name: "English", credits: 3, grade: "B+", points: 3.3 },
    { id: "3", name: "History", credits: 2, grade: "A-", points: 3.7 }
  ])
  const [result, setResult] = useState<GPAResult | null>(null)
  const [planningResult, setPlanningResult] = useState<GPAPlanningResult | null>(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [gradingSystem, setGradingSystem] = useState("4.0")
  const [includePassFail, setIncludePassFail] = useState(false)
  const [showGradeDistribution, setShowGradeDistribution] = useState(true)

  const [currentGPA, setCurrentGPA] = useState("")
  const [targetGPA, setTargetGPA] = useState("")
  const [currentCredits, setCurrentCredits] = useState("")
  const [additionalCredits, setAdditionalCredits] = useState("")

  const gradePoints: Record<string, number> = {
    "A+": 4.3, "A": 4.0, "A-": 3.7,
    "B+": 3.3, "B": 3.0, "B-": 2.7,
    "C+": 2.3, "C": 2.0, "C-": 1.7,
    "D+": 1.3, "D": 1.0, "D-": 0.7,
    "F": 0.0, "P": 0.0, "NP": 0.0, "I": 0.0, "W": 0.0
  }

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: "",
      credits: 3,
      grade: "A",
      points: 4.0
    }
    setCourses([...courses, newCourse])
  }

  const removeCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id))
  }

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course => {
      if (course.id === id) {
        const updated = { ...course, [field]: value }
        if (field === 'grade') {
          updated.points = gradePoints[value as string] || 0
        }
        return updated
      }
      return course
    }))
  }

  const calculateGPA = () => {
    setIsCalculating(true)
    setShowAdvanced(true)

    setTimeout(() => {
      const validCourses = courses.filter(course => 
        course.name.trim() && course.credits > 0 && course.grade !== ""
      )

      if (validCourses.length === 0) {
        setIsCalculating(false)
        return
      }

      const totalCredits = validCourses.reduce((sum, course) => sum + course.credits, 0)
      const totalPoints = validCourses.reduce((sum, course) => sum + (course.points * course.credits), 0)
      const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0

      const gradeCount: Record<string, number> = {}
      validCourses.forEach(course => {
        gradeCount[course.grade] = (gradeCount[course.grade] || 0) + 1
      })

      const gradeDistribution = Object.entries(gradeCount).map(([grade, count]) => ({
        grade,
        count,
        percentage: (count / validCourses.length) * 100
      })).sort((a, b) => gradePoints[b.grade] - gradePoints[a.grade])

      let academicStanding = ""
      let honorsEligibility = false
      if (gpa >= 3.7) {
        academicStanding = "Dean's List / Magna Cum Laude"
        honorsEligibility = true
      } else if (gpa >= 3.5) {
        academicStanding = "Honors / Cum Laude"
        honorsEligibility = true
      } else if (gpa >= 3.0) {
        academicStanding = "Good Standing"
      } else if (gpa >= 2.0) {
        academicStanding = "Academic Probation"
      } else {
        academicStanding = "Academic Warning"
      }

      const improvementSuggestions: string[] = []
      if (gpa < 3.0) {
        improvementSuggestions.push("Focus on improving study habits and time management")
        improvementSuggestions.push("Consider tutoring or study groups for challenging subjects")
        improvementSuggestions.push("Meet with academic advisors to discuss course selection")
      }
      if (gradeDistribution.some(g => g.grade === "F" || g.grade === "D")) {
        improvementSuggestions.push("Retake courses with failing or low grades if possible")
      }
      if (gpa >= 3.5) {
        improvementSuggestions.push("Consider taking honors or advanced courses")
        improvementSuggestions.push("Explore research opportunities or internships")
      }

      const semesterBreakdown = [
        { semester: "Current", gpa: gpa, credits: totalCredits }
      ]

      setResult({
        gpa: Number(gpa.toFixed(3)),
        totalCredits,
        totalPoints: Number(totalPoints.toFixed(1)),
        courses: validCourses,
        gradeDistribution,
        semesterBreakdown,
        improvementSuggestions,
        academicStanding,
        honorsEligibility
      })
      setIsCalculating(false)
    }, 600)
  }

  const calculateGPAPlanning = () => {
    if (!currentGPA || !targetGPA || !currentCredits || !additionalCredits) return

    const current = Number.parseFloat(currentGPA)
    const target = Number.parseFloat(targetGPA)
    const currentCreds = Number.parseFloat(currentCredits)
    const additionalCreds = Number.parseFloat(additionalCredits)

    const currentPoints = current * currentCreds
    const totalCredits = currentCreds + additionalCreds
    const requiredPoints = target * totalCredits
    const requiredGPA = (requiredPoints - currentPoints) / additionalCreds

    const achievable = requiredGPA <= 4.0
    const recommendations: string[] = []

    if (requiredGPA > 4.0) {
      recommendations.push("Target GPA is not achievable with current constraints")
      recommendations.push("Consider taking more additional credits to lower the required GPA")
    } else if (requiredGPA > 3.5) {
      recommendations.push("High performance required - focus on study strategies")
      recommendations.push("Consider taking easier courses to balance workload")
    } else if (requiredGPA > 3.0) {
      recommendations.push("Moderate effort required - maintain consistent study habits")
    } else {
      recommendations.push("Target is easily achievable with current performance level")
    }

    setPlanningResult({
      currentGPA: current,
      targetGPA: target,
      currentCredits: currentCreds,
      additionalCredits: additionalCreds,
      requiredGPA: Number(requiredGPA.toFixed(3)),
      achievable,
      recommendations
    })
  }

  const copyResult = () => {
    if (!result) return
    const text = `GPA Calculator Results
Current GPA: ${result.gpa}
Total Credits: ${result.totalCredits}
Total Points: ${result.totalPoints}
Academic Standing: ${result.academicStanding}
${result.honorsEligibility ? 'Honors Eligible: Yes' : ''}

Course Breakdown:
${result.courses.map(course => `${course.name}: ${course.grade} (${course.credits} credits)`).join('\n')}`
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Main GPA Calculator */}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            Advanced GPA Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Calculate your Grade Point Average with comprehensive analysis and planning tools
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Grading System Selection */}
          <div className="space-y-2">
            <Label htmlFor="grading-system" className="text-sm font-medium flex items-center gap-2">
              <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded">
                <Settings className="h-3 w-3 text-blue-600 dark:text-blue-400" />
              </div>
              Grading System
            </Label>
            <Select value={gradingSystem} onValueChange={setGradingSystem}>
              <SelectTrigger className="h-10 sm:h-12 text-sm sm:text-base">
                <SelectValue placeholder="Select grading system" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4.0">4.0 Scale (US Standard)</SelectItem>
                <SelectItem value="4.3">4.3 Scale (A+ = 4.3)</SelectItem>
                <SelectItem value="5.0">5.0 Scale (Weighted)</SelectItem>
                <SelectItem value="100">Percentage Scale</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Courses Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm font-medium flex items-center gap-2">
                <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded">
                  <BookOpen className="h-3 w-3 text-green-600 dark:text-green-400" />
                </div>
                Courses
              </Label>
              <Button onClick={addCourse} size="sm" className="h-8">
                <Plus className="h-4 w-4 mr-1" />
                Add Course
              </Button>
            </div>

            <div className="space-y-3">
              {courses.map((course, index) => (
                <div key={course.id} className="grid grid-cols-1 md:grid-cols-4 gap-3 p-4 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/50 dark:to-gray-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="space-y-1">
                    <Label className="text-xs text-slate-600 dark:text-slate-400">Course Name</Label>
                    <Input
                      value={course.name}
                      onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                      placeholder="e.g., Mathematics"
                      className="h-9 text-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-slate-600 dark:text-slate-400">Credits</Label>
                    <Input
                      type="number"
                      value={course.credits}
                      onChange={(e) => updateCourse(course.id, 'credits', Number(e.target.value))}
                      className="h-9 text-sm"
                      min="0"
                      step="0.5"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-slate-600 dark:text-slate-400">Grade</Label>
                    <Select value={course.grade} onValueChange={(value) => updateCourse(course.id, 'grade', value)}>
                      <SelectTrigger className="h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+ (4.3)</SelectItem>
                        <SelectItem value="A">A (4.0)</SelectItem>
                        <SelectItem value="A-">A- (3.7)</SelectItem>
                        <SelectItem value="B+">B+ (3.3)</SelectItem>
                        <SelectItem value="B">B (3.0)</SelectItem>
                        <SelectItem value="B-">B- (2.7)</SelectItem>
                        <SelectItem value="C+">C+ (2.3)</SelectItem>
                        <SelectItem value="C">C (2.0)</SelectItem>
                        <SelectItem value="C-">C- (1.7)</SelectItem>
                        <SelectItem value="D+">D+ (1.3)</SelectItem>
                        <SelectItem value="D">D (1.0)</SelectItem>
                        <SelectItem value="D-">D- (0.7)</SelectItem>
                        <SelectItem value="F">F (0.0)</SelectItem>
                        <SelectItem value="P">P (Pass)</SelectItem>
                        <SelectItem value="NP">NP (No Pass)</SelectItem>
                        <SelectItem value="I">I (Incomplete)</SelectItem>
                        <SelectItem value="W">W (Withdrawal)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-end">
                    <Button
                      onClick={() => removeCourse(course.id)}
                      variant="outline"
                      size="sm"
                      className="h-9 w-9 p-0 text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:text-red-300"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateGPA}
            className="w-full h-12 sm:h-14 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
            disabled={courses.length === 0 || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculating GPA...</span>
                <span className="sm:hidden">Calculating...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">Calculate GPA</span>
                <span className="sm:hidden">Calculate</span>
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* GPA Planning Calculator */}
      <Card className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            GPA Planning Calculator
          </CardTitle>
          <CardDescription className="text-base">
            Determine the minimum GPA required in future courses to reach your target GPA
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="current-gpa" className="text-sm font-medium">Current GPA</Label>
              <Input
                id="current-gpa"
                type="number"
                step="0.01"
                value={currentGPA}
                onChange={(e) => setCurrentGPA(e.target.value)}
                placeholder="2.8"
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="target-gpa" className="text-sm font-medium">Target GPA</Label>
              <Input
                id="target-gpa"
                type="number"
                step="0.01"
                value={targetGPA}
                onChange={(e) => setTargetGPA(e.target.value)}
                placeholder="3.0"
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="current-credits" className="text-sm font-medium">Current Credits</Label>
              <Input
                id="current-credits"
                type="number"
                value={currentCredits}
                onChange={(e) => setCurrentCredits(e.target.value)}
                placeholder="25"
                className="h-10"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="additional-credits" className="text-sm font-medium">Additional Credits</Label>
              <Input
                id="additional-credits"
                type="number"
                value={additionalCredits}
                onChange={(e) => setAdditionalCredits(e.target.value)}
                placeholder="15"
                className="h-10"
              />
            </div>
          </div>

          <Button
            onClick={calculateGPAPlanning}
            className="w-full h-10 text-sm font-medium"
            disabled={!currentGPA || !targetGPA || !currentCredits || !additionalCredits}
          >
            <Target className="mr-2 h-4 w-4" />
            Calculate Required GPA
          </Button>

          {planningResult && (
            <div className="p-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Planning Results</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">Required GPA:</span>
                  <span className="font-semibold text-blue-900 dark:text-blue-100">{planningResult.requiredGPA}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700 dark:text-blue-300">Achievable:</span>
                  <span className={`font-semibold ${planningResult.achievable ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {planningResult.achievable ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              {planningResult.recommendations.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-1">Recommendations:</h4>
                  <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                    {planningResult.recommendations.map((rec, index) => (
                      <li key={index}>• {rec}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && !isCalculating && (
        <Card className="shadow-lg border-primary/20 animate-fade-in-up bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              GPA Results & Analysis
            </CardTitle>
            <CardDescription className="text-base">
              Comprehensive GPA analysis with academic standing and improvement suggestions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main GPA Display */}
            <div className="text-center p-6 sm:p-8 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {result.gpa}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                Grade Point Average
              </div>
              <div className="text-lg font-semibold text-green-600 dark:text-green-400 mt-2">
                {result.academicStanding}
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-3 p-4 sm:p-6 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Academic Breakdown
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                  <span className="text-sm text-blue-800 dark:text-blue-200">Total Credits</span>
                  <span className="font-semibold text-sm text-blue-900 dark:text-blue-100">{result.totalCredits}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
                  <span className="text-sm text-green-800 dark:text-green-200">Total Points</span>
                  <span className="font-semibold text-sm text-green-900 dark:text-green-100">{result.totalPoints}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
                  <span className="text-sm text-purple-800 dark:text-purple-200">Honors Eligible</span>
                  <span className="font-semibold text-sm text-purple-900 dark:text-purple-100">{result.honorsEligibility ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>

            {/* Grade Distribution */}
            {showGradeDistribution && (
              <div className="p-4 sm:p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <div className="text-sm sm:text-base font-semibold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center gap-2">
                  <PieChart className="h-4 w-4" />
                  Grade Distribution
                </div>
                <div className="space-y-2">
                  {result.gradeDistribution.map((grade, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-white/50 dark:bg-slate-800/50 rounded border border-indigo-200 dark:border-indigo-700">
                      <span className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400">{grade.grade}</span>
                      <span className="text-xs sm:text-sm font-semibold text-indigo-800 dark:text-indigo-200">
                        {grade.count} ({grade.percentage.toFixed(1)}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Improvement Suggestions */}
            {result.improvementSuggestions.length > 0 && (
              <div className="p-4 sm:p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl border-2 border-orange-200 dark:border-orange-800">
                <div className="text-sm sm:text-base font-semibold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Improvement Suggestions
                </div>
                <ul className="space-y-2 text-sm text-orange-600 dark:text-orange-400">
                  {result.improvementSuggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-500 dark:text-orange-400 mt-1">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button
                onClick={copyResult}
                className="flex-1 h-10 sm:h-12 text-sm sm:text-base font-semibold transition-all duration-300 border-2 hover:bg-green-100 dark:hover:bg-green-900/30 border-green-200 dark:border-green-700 text-green-700 dark:text-green-300"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copied!</span>
                    <span className="sm:hidden">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="hidden sm:inline">Copy Results</span>
                    <span className="sm:hidden">Copy</span>
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
