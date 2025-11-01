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
    <div className="space-y-4">
      {/* Main GPA Calculator */}
      <Card className="shadow-lg border-slate-700 hover:shadow-xl transition-all duration-300 bg-black">
        <CardHeader className="pb-2 px-3 sm:px-6">
          <CardTitle className="flex items-center gap-1.5 text-base text-orange-500">
            <div className="p-1 bg-orange-500/10 rounded">
              <GraduationCap className="h-3.5 w-3.5 text-orange-500" />
            </div>
            GPA Calculator
          </CardTitle>
          <CardDescription className="text-xs text-slate-400">
            Calculate your Grade Point Average with comprehensive analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-3 sm:px-6">
          {/* Grading System Selection */}
          <div className="space-y-1">
            <Label htmlFor="grading-system" className="text-[11px] font-medium flex items-center gap-1 text-green-500">
              <Settings className="h-2.5 w-2.5 text-green-500" />
              Grading System
            </Label>
            <Select value={gradingSystem} onValueChange={setGradingSystem}>
              <SelectTrigger className="h-8 text-xs border-slate-700 bg-black text-slate-200">
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
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-[11px] font-medium flex items-center gap-1 text-green-500">
                <BookOpen className="h-2.5 w-2.5 text-green-500" />
                Courses
              </Label>
              <Button onClick={addCourse} size="sm" className="h-7 text-xs px-2 bg-orange-500 hover:bg-orange-600 text-white">
                <Plus className="h-3 w-3 mr-1" />
                Add
              </Button>
            </div>

            <div className="space-y-2">
              {courses.map((course, index) => (
                <div key={course.id} className="grid grid-cols-1 sm:grid-cols-4 gap-2 p-2 bg-black rounded-lg border border-slate-700">
                  <div className="space-y-1">
                    <Label className="text-[10px] text-slate-400">Course Name</Label>
                    <Input
                      value={course.name}
                      onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                      placeholder="Mathematics"
                      className="h-7 text-xs border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-slate-400">Credits</Label>
                    <Input
                      type="number"
                      value={course.credits}
                      onChange={(e) => updateCourse(course.id, 'credits', Number(e.target.value))}
                      className="h-7 text-xs border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500"
                      min="0"
                      step="0.5"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-[10px] text-slate-400">Grade</Label>
                    <Select value={course.grade} onValueChange={(value) => updateCourse(course.id, 'grade', value)}>
                      <SelectTrigger className="h-7 text-xs border-slate-700 bg-black text-slate-200">
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
                      className="h-7 w-7 p-0 text-red-400 hover:text-red-300 hover:bg-slate-800 border-red-700 bg-black"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <Button
            onClick={calculateGPA}
            className="w-full h-9 text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            disabled={courses.length === 0 || isCalculating}
          >
            {isCalculating ? (
              <>
                <LoadingSpinner size="sm" className="mr-1 h-3 w-3" />
                <span>Calculating...</span>
              </>
            ) : (
              <>
                <Calculator className="mr-1 h-3 w-3" />
                <span>Calculate GPA</span>
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* GPA Planning Calculator */}
      <Card className="shadow-lg border-slate-700 hover:shadow-xl transition-all duration-300 bg-black">
        <CardHeader className="pb-2 px-3 sm:px-6">
          <CardTitle className="flex items-center gap-1.5 text-base text-orange-500">
            <div className="p-1 bg-orange-500/10 rounded">
              <Target className="h-3.5 w-3.5 text-orange-500" />
            </div>
            GPA Planning Calculator
          </CardTitle>
          <CardDescription className="text-xs text-slate-400">
            Determine minimum GPA required to reach your target
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 px-3 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="space-y-1">
              <Label htmlFor="current-gpa" className="text-[11px] font-medium text-green-500">Current GPA</Label>
              <Input
                id="current-gpa"
                type="number"
                step="0.01"
                value={currentGPA}
                onChange={(e) => setCurrentGPA(e.target.value)}
                placeholder="2.8"
                className="h-8 text-xs border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="target-gpa" className="text-[11px] font-medium text-green-500">Target GPA</Label>
              <Input
                id="target-gpa"
                type="number"
                step="0.01"
                value={targetGPA}
                onChange={(e) => setTargetGPA(e.target.value)}
                placeholder="3.0"
                className="h-8 text-xs border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="current-credits" className="text-[11px] font-medium text-green-500">Current Credits</Label>
              <Input
                id="current-credits"
                type="number"
                value={currentCredits}
                onChange={(e) => setCurrentCredits(e.target.value)}
                placeholder="25"
                className="h-8 text-xs border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="additional-credits" className="text-[11px] font-medium text-green-500">Additional Credits</Label>
              <Input
                id="additional-credits"
                type="number"
                value={additionalCredits}
                onChange={(e) => setAdditionalCredits(e.target.value)}
                placeholder="15"
                className="h-8 text-xs border-slate-700 bg-black text-slate-200 focus-visible:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <Button
            onClick={calculateGPAPlanning}
            className="w-full h-8 text-xs font-medium bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
            disabled={!currentGPA || !targetGPA || !currentCredits || !additionalCredits}
          >
            <Target className="mr-1 h-3 w-3" />
            Calculate Required GPA
          </Button>

          {planningResult && (
            <div className="p-3 bg-black rounded-lg border border-slate-700">
              <h3 className="font-semibold text-green-500 mb-2 text-sm">Planning Results</h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Required GPA:</span>
                  <span className="font-semibold text-orange-400">{planningResult.requiredGPA}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Achievable:</span>
                  <span className={`font-semibold ${planningResult.achievable ? 'text-green-400' : 'text-red-400'}`}>
                    {planningResult.achievable ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
              {planningResult.recommendations.length > 0 && (
                <div className="mt-2">
                  <h4 className="font-medium text-green-500 mb-1 text-xs">Recommendations:</h4>
                  <ul className="text-[10px] text-slate-400 space-y-0.5">
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
        <Card className="shadow-lg border-slate-700 animate-fade-in-up bg-black">
          <CardHeader className="pb-3 px-3 sm:px-6">
            <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-orange-500">
              <div className="p-1 sm:p-1.5 bg-orange-500/10 rounded-lg">
                <Award className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-orange-500" />
              </div>
              GPA Results & Analysis
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm text-slate-400">
              Comprehensive GPA analysis with academic standing and improvement suggestions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 px-3 sm:px-6">
            {/* Main GPA Display */}
            <div className="text-center p-4 rounded-xl bg-black border border-orange-500/20">
              <div className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">
                {result.gpa}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                Grade Point Average
              </div>
              <div className="text-sm font-semibold text-green-400 mt-1">
                {result.academicStanding}
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-2 p-3 bg-black rounded-lg border border-slate-700">
              <div className="text-sm font-semibold mb-2 text-green-500 flex items-center gap-2">
                <BarChart3 className="h-3.5 w-3.5" />
                Academic Breakdown
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-black rounded-lg border border-blue-700 gap-1">
                  <span className="text-xs text-blue-300">Total Credits</span>
                  <span className="font-semibold text-xs text-blue-400">{result.totalCredits}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-black rounded-lg border border-green-700 gap-1">
                  <span className="text-xs text-green-300">Total Points</span>
                  <span className="font-semibold text-xs text-green-400">{result.totalPoints}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-black rounded-lg border border-purple-700 gap-1">
                  <span className="text-xs text-purple-300">Honors Eligible</span>
                  <span className="font-semibold text-xs text-purple-400">{result.honorsEligibility ? 'Yes' : 'No'}</span>
                </div>
              </div>
            </div>

            {/* Grade Distribution */}
            {showGradeDistribution && (
              <div className="p-3 bg-black rounded-xl border border-slate-700">
                <div className="text-xs font-semibold text-green-500 mb-2 flex items-center gap-1.5">
                  <PieChart className="h-3.5 w-3.5" />
                  Grade Distribution
                </div>
                <div className="space-y-1.5">
                  {result.gradeDistribution.map((grade, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-black rounded border border-slate-700 gap-1">
                      <span className="text-xs text-slate-400">{grade.grade}</span>
                      <span className="text-xs font-semibold text-slate-300">
                        {grade.count} ({grade.percentage.toFixed(1)}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Improvement Suggestions */}
            {result.improvementSuggestions.length > 0 && (
              <div className="p-3 bg-black rounded-xl border border-slate-700">
                <div className="text-xs font-semibold text-green-500 mb-2 flex items-center gap-1.5">
                  <Lightbulb className="h-3.5 w-3.5" />
                  Improvement Suggestions
                </div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {result.improvementSuggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-400 mt-0.5">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={copyResult}
                className="flex-1 h-9 text-xs font-medium transition-all duration-300 border border-green-700 hover:bg-slate-800 text-green-300 bg-black"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                    <span>Copy Results</span>
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
