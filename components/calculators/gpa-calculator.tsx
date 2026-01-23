"use client"

import { useState } from "react"
import { useTranslations } from 'next-intl'
import { GCard, GCardContent, GCardDescription, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GInput } from "@/ui/ginput"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GAlert, GAlertDescription } from "@/ui/galert"

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


import { Course, GPAResult } from "@/types/calculator-types/gpa-calculator.types"

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
  const t = useTranslations('gpaCalculator')
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
  const [showGPAPlanner, setShowGPAPlanner] = useState(false)

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
        academicStanding = t('componentAcademicStandingDeansList')
        honorsEligibility = true
      } else if (gpa >= 3.5) {
        academicStanding = t('componentAcademicStandingHonors')
        honorsEligibility = true
      } else if (gpa >= 3.0) {
        academicStanding = t('componentAcademicStandingGood')
      } else if (gpa >= 2.0) {
        academicStanding = t('componentAcademicStandingProbation')
      } else {
        academicStanding = t('componentAcademicStandingWarning')
      }

      const improvementSuggestions: string[] = []
      if (gpa < 3.0) {
        improvementSuggestions.push(t('componentSuggestion1'))
        improvementSuggestions.push(t('componentSuggestion2'))
        improvementSuggestions.push(t('componentSuggestion3'))
      }
      if (gradeDistribution.some(g => g.grade === "F" || g.grade === "D")) {
        improvementSuggestions.push(t('componentSuggestion4'))
      }
      if (gpa >= 3.5) {
        improvementSuggestions.push(t('componentSuggestion5'))
        improvementSuggestions.push(t('componentSuggestion6'))
      }

      const semesterBreakdown = [
        { semester: t('componentSemesterCurrent'), gpa: gpa, credits: totalCredits }
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
      recommendations.push(t('componentPlanningSuggestion1'))
      recommendations.push(t('componentPlanningSuggestion2'))
    } else if (requiredGPA > 3.5) {
      recommendations.push(t('componentPlanningSuggestion3'))
      recommendations.push(t('componentPlanningSuggestion4'))
    } else if (requiredGPA > 3.0) {
      recommendations.push(t('componentPlanningSuggestion5'))
    } else {
      recommendations.push(t('componentPlanningSuggestion6'))
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
    const text = `${t('componentCopyTextResults')}
${t('componentCopyTextCurrentGPA')} ${result.gpa}
${t('componentCopyTextTotalCredits')} ${result.totalCredits}
${t('componentCopyTextTotalPoints')} ${result.totalPoints}
${t('componentCopyTextAcademicStanding')} ${result.academicStanding}
${result.honorsEligibility ? `${t('componentCopyTextHonorsEligible')} ${t('componentYes')}` : ''}

${t('componentCopyTextCourseBreakdown')}
${result.courses.map(course => `${course.name}: ${course.grade} (${course.credits} ${t('componentCopyTextCredits')})`).join('\n')}`
    void navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-4">
      {/* Main GPA Calculator */}
      <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
        <GCardHeader className="pb-2 px-3 sm:px-6">
          <GCardTitle className="flex items-center gap-1.5 text-base text-foreground">
            <div className="p-1 bg-primary/10 rounded">
              <GraduationCap className="h-3.5 w-3.5 text-foreground" />
            </div>
            {t('componentTitle')}
          </GCardTitle>
          <GCardDescription className="text-xs text-muted-foreground">
            {t('componentDescription')}
          </GCardDescription>
        </GCardHeader>
        <GCardContent className="space-y-4 px-3 sm:px-6">
          {/* Grading System Selection */}
          <div className="space-y-1">
            <GLabel htmlFor="grading-system" className="text-[11px] font-medium flex items-center gap-1 text-heading-accent">
              <Settings className="h-2.5 w-2.5 text-heading-accent" />
              {t('componentGradingSystem')}
            </GLabel>
            <GSelect value={gradingSystem} onValueChange={setGradingSystem}>
              <GSelectTrigger className="h-8 text-xs border-border bg-background text-foreground">
                <GSelectValue placeholder={t('componentGradingSystemPlaceholder')} />
              </GSelectTrigger>
              <GSelectContent>
                <GSelectItem value="4.0">{t('componentScale40')}</GSelectItem>
                <GSelectItem value="4.3">{t('componentScale43')}</GSelectItem>
                <GSelectItem value="5.0">{t('componentScale50')}</GSelectItem>
                <GSelectItem value="100">{t('componentScale100')}</GSelectItem>
              </GSelectContent>
            </GSelect>
          </div>

          {/* Courses Section */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <GLabel className="text-[11px] font-medium flex items-center gap-1 text-heading-accent">
                <BookOpen className="h-2.5 w-2.5 text-heading-accent" />
                {t('componentCourses')}
              </GLabel>
              <GButton onClick={addCourse} size="sm" className="h-7 text-xs px-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Plus className="h-3 w-3 mr-1" />
                {t('componentAdd')}
              </GButton>
            </div>

            <div className="space-y-2">
              {courses.map((course, index) => (
                <div key={course.id} className="grid grid-cols-1 sm:grid-cols-4 gap-2 p-2 bg-card rounded-lg border border-border">
                  <div className="space-y-1">
                    <GLabel className="text-[10px] text-muted-foreground">{t('componentCourseName')}</GLabel>
                    <GInput
                      value={course.name}
                      onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                      placeholder={t('componentCourseNamePlaceholder')}
                      className="h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-[10px] text-muted-foreground">{t('componentCredits')}</GLabel>
                    <GInput
                      type="number"
                      value={course.credits}
                      onChange={(e) => updateCourse(course.id, 'credits', Number(e.target.value))}
                      className="h-7 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                      min="0"
                      step="0.5"
                    />
                  </div>
                  <div className="space-y-1">
                    <GLabel className="text-[10px] text-muted-foreground">{t('componentGrade')}</GLabel>
                    <GSelect value={course.grade} onValueChange={(value) => updateCourse(course.id, 'grade', value)}>
                      <GSelectTrigger className="h-7 text-xs border-border bg-background text-foreground">
                        <GSelectValue />
                      </GSelectTrigger>
                      <GSelectContent>
                        <GSelectItem value="A+">A+ (4.3)</GSelectItem>
                        <GSelectItem value="A">A (4.0)</GSelectItem>
                        <GSelectItem value="A-">A- (3.7)</GSelectItem>
                        <GSelectItem value="B+">B+ (3.3)</GSelectItem>
                        <GSelectItem value="B">B (3.0)</GSelectItem>
                        <GSelectItem value="B-">B- (2.7)</GSelectItem>
                        <GSelectItem value="C+">C+ (2.3)</GSelectItem>
                        <GSelectItem value="C">C (2.0)</GSelectItem>
                        <GSelectItem value="C-">C- (1.7)</GSelectItem>
                        <GSelectItem value="D+">D+ (1.3)</GSelectItem>
                        <GSelectItem value="D">D (1.0)</GSelectItem>
                        <GSelectItem value="D-">D- (0.7)</GSelectItem>
                        <GSelectItem value="F">F (0.0)</GSelectItem>
                        <GSelectItem value="P">P (Pass)</GSelectItem>
                        <GSelectItem value="NP">NP (No Pass)</GSelectItem>
                        <GSelectItem value="I">I (Incomplete)</GSelectItem>
                        <GSelectItem value="W">W (Withdrawal)</GSelectItem>
                      </GSelectContent>
                    </GSelect>
                  </div>
                  <div className="flex items-end">
                    <GButton
                      onClick={() => removeCourse(course.id)}
                      variant="outline"
                      size="sm"
                      className="h-7 w-7 p-0 text-foreground hover:text-destructive hover:bg-secondary border-destructive bg-card"
                    >
                      <Trash2 className="h-3 w-3" />
                    </GButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calculate GButton */}
          <GButton
            onClick={calculateGPA}
            className="w-full h-9 text-xs font-medium shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground"
            disabled={courses.length === 0 || isCalculating}
            isLoading={isCalculating}
          >
            {isCalculating ? (
              <span>{t('componentCalculating')}</span>
            ) : (
              <>
                <Calculator className="mr-1 h-3 w-3" />
                <span>{t('componentCalculateGPA')}</span>
              </>
            )}
          </GButton>

          {/* Plan Your GPA GButton */}
          <GButton
            onClick={() => setShowGPAPlanner(!showGPAPlanner)}
            variant="outline"
            className="w-full h-9 text-xs font-medium border-border hover:bg-secondary text-heading-accent bg-card transition-all duration-300"
          >
            <Target className="mr-1 h-3 w-3" />
            <span>{showGPAPlanner ? t('componentHideGPAPlanner') : t('componentPlanYourGPA')}</span>
          </GButton>
        </GCardContent>
      </GCard>

      {/* GPA Planning Calculator */}
      {showGPAPlanner && (
        <GCard className="shadow-lg border-border hover:shadow-xl transition-all duration-300 bg-card">
          <GCardHeader className="pb-2 px-3 sm:px-6">
            <GCardTitle className="flex items-center gap-1.5 text-base text-foreground">
              <div className="p-1 bg-primary/10 rounded">
                <Target className="h-3.5 w-3.5 text-foreground" />
              </div>
              {t('componentGPAPlanningTitle')}
            </GCardTitle>
            <GCardDescription className="text-xs text-muted-foreground">
              {t('componentGPAPlanningDesc')}
            </GCardDescription>
          </GCardHeader>
          <GCardContent className="space-y-4 px-3 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="space-y-1">
                <GLabel htmlFor="current-gpa" className="text-[11px] font-medium text-heading-accent">{t('componentCurrentGPA')}</GLabel>
                <GInput
                  id="current-gpa"
                  type="number"
                  step="0.01"
                  value={currentGPA}
                  onChange={(e) => setCurrentGPA(e.target.value)}
                  placeholder="2.8"
                  className="h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
              <div className="space-y-1">
                <GLabel htmlFor="target-gpa" className="text-[11px] font-medium text-heading-accent">{t('componentTargetGPA')}</GLabel>
                <GInput
                  id="target-gpa"
                  type="number"
                  step="0.01"
                  value={targetGPA}
                  onChange={(e) => setTargetGPA(e.target.value)}
                  placeholder="3.0"
                  className="h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
              <div className="space-y-1">
                <GLabel htmlFor="current-credits" className="text-[11px] font-medium text-heading-accent">{t('componentCurrentCredits')}</GLabel>
                <GInput
                  id="current-credits"
                  type="number"
                  value={currentCredits}
                  onChange={(e) => setCurrentCredits(e.target.value)}
                  placeholder="25"
                  className="h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
              <div className="space-y-1">
                <GLabel htmlFor="additional-credits" className="text-[11px] font-medium text-heading-accent">{t('componentAdditionalCredits')}</GLabel>
                <GInput
                  id="additional-credits"
                  type="number"
                  value={additionalCredits}
                  onChange={(e) => setAdditionalCredits(e.target.value)}
                  placeholder="15"
                  className="h-8 text-xs border-border bg-background text-foreground focus-visible:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <GButton
              onClick={calculateGPAPlanning}
              className="w-full h-8 text-xs font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground"
              disabled={!currentGPA || !targetGPA || !currentCredits || !additionalCredits}
            >
              <Target className="mr-1 h-3 w-3" />
              {t('componentCalculateRequiredGPA')}
            </GButton>

            {planningResult && (
              <div className="p-3 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-heading-accent mb-2 text-sm">{t('componentPlanningResults')}</h3>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('componentRequiredGPA')}</span>
                    <span className="font-semibold text-foreground">{planningResult.requiredGPA}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('componentAchievable')}</span>
                    <span className={`font-semibold ${planningResult.achievable ? 'text-heading-accent' : 'text-foreground'}`}>
                      {planningResult.achievable ? t('componentYes') : t('componentNo')}
                    </span>
                  </div>
                </div>
                {planningResult.recommendations.length > 0 && (
                  <div className="mt-2">
                    <h4 className="font-medium text-heading-accent mb-1 text-xs">{t('componentRecommendations')}</h4>
                    <ul className="text-[10px] text-muted-foreground space-y-0.5">
                      {planningResult.recommendations.map((rec, index) => (
                        <li key={index}>• {rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </GCardContent>
        </GCard>
      )}

      {/* Results Section */}
      {result && !isCalculating && (
        <GCard className="shadow-lg border-border animate-fade-in-up bg-card">
          <GCardHeader className="pb-3 px-3 sm:px-6">
            <GCardTitle className="text-base sm:text-lg flex items-center gap-2 text-foreground">
              <div className="p-1 sm:p-1.5 bg-primary/10 rounded-lg">
                <Award className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-foreground" />
              </div>
              {t('componentResultsTitle')}
            </GCardTitle>
            <GCardDescription className="text-xs sm:text-sm text-muted-foreground">
              {t('componentResultsDesc')}
            </GCardDescription>
          </GCardHeader>
          <GCardContent className="space-y-4 px-3 sm:px-6">
            {/* Main GPA Display */}
            <div className="text-center p-4 rounded-xl bg-card border border-primary/20">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">
                {result.gpa}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                {t('componentGradePointAverage')}
              </div>
              <div className="text-sm font-semibold text-heading-accent mt-1">
                {result.academicStanding}
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="space-y-2 p-3 bg-card rounded-lg border border-border">
              <div className="text-sm font-semibold mb-2 text-heading-accent flex items-center gap-2">
                <BarChart3 className="h-3.5 w-3.5" />
                {t('componentAcademicBreakdown')}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-card rounded-lg border border-border gap-1">
                  <span className="text-xs text-foreground">{t('componentTotalCredits')}</span>
                  <span className="font-semibold text-xs text-foreground">{result.totalCredits}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-card rounded-lg border border-border gap-1">
                  <span className="text-xs text-heading-accent">{t('componentTotalPoints')}</span>
                  <span className="font-semibold text-xs text-heading-accent">{result.totalPoints}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-card rounded-lg border border-border gap-1">
                  <span className="text-xs text-foreground">{t('componentHonorsEligible')}</span>
                  <span className="font-semibold text-xs text-foreground">{result.honorsEligibility ? t('componentYes') : t('componentNo')}</span>
                </div>
              </div>
            </div>

            {/* Grade Distribution */}
            {showGradeDistribution && (
              <div className="p-3 bg-card rounded-xl border border-border">
                <div className="text-xs font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                  <PieChart className="h-3.5 w-3.5" />
                  {t('componentGradeDistribution')}
                </div>
                <div className="space-y-1.5">
                  {result.gradeDistribution.map((grade, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-2 bg-card rounded border border-border gap-1">
                      <span className="text-xs text-muted-foreground">{grade.grade}</span>
                      <span className="text-xs font-semibold text-foreground">
                        {grade.count} ({grade.percentage.toFixed(1)}%)
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Improvement Suggestions */}
            {result.improvementSuggestions.length > 0 && (
              <div className="p-3 bg-card rounded-xl border border-border">
                <div className="text-xs font-semibold text-heading-accent mb-2 flex items-center gap-1.5">
                  <Lightbulb className="h-3.5 w-3.5" />
                  {t('componentImprovementSuggestions')}
                </div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  {result.improvementSuggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-foreground mt-0.5">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <GButton
                onClick={copyResult}
                variant="outline"
                className="flex-1 h-9 text-xs font-medium transition-all duration-300 border-border hover:bg-secondary text-heading-accent bg-card"
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" />
                    <span>{t('componentCopied')}</span>
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" />
                    <span>{t('componentCopyResults')}</span>
                  </>
                )}
              </GButton>
            </div>
          </GCardContent>
        </GCard>
      )}
    </div>
  )
}
