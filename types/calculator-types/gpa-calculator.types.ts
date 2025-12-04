export interface Course {
    id: string
    name: string
    credits: number
    grade: string
    points: number
}

export interface GPAResult {
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
