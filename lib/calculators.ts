
export interface ActivityLevel {
    name: string
    multiplier: number
    description: string
}

export const activityLevels: ActivityLevel[] = [
    {
        name: "Sedentary",
        multiplier: 1.2,
        description: "Little or no exercise"
    },
    {
        name: "Light Activity",
        multiplier: 1.375,
        description: "Exercise 1-3 times/week"
    },
    {
        name: "Moderate Activity",
        multiplier: 1.55,
        description: "Exercise 4-5 times/week"
    },
    {
        name: "Very Active",
        multiplier: 1.725,
        description: "Daily exercise or intense exercise 3-4 times/week"
    },
    {
        name: "Extremely Active",
        multiplier: 1.9,
        description: "Intense exercise 6-7 times/week or physical job"
    }
]

interface BMRParams {
    weight: number // in kg
    height: number // in cm
    age: number
    gender: "male" | "female"
    equation: "mifflin" | "harris" | "katch"
    bodyFat?: number
}

export function calculateBMR({
    weight,
    height,
    age,
    gender,
    equation,
    bodyFat
}: BMRParams): { bmr: number; equationName: string; accuracy: string } {
    let bmr = 0
    let equationName = ""
    let accuracy = ""

    if (equation === "mifflin") {
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161
        }
        equationName = "Mifflin-St Jeor Equation"
        accuracy = "Most accurate for general population"
    } else if (equation === "harris") {
        if (gender === "male") {
            bmr = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362
        } else {
            bmr = 9.247 * weight + 3.098 * height - 4.330 * age + 447.593
        }
        equationName = "Revised Harris-Benedict Equation"
        accuracy = "Good for general population"
    } else if (equation === "katch" && bodyFat !== undefined && bodyFat !== null) {
        bmr = 370 + 21.6 * (1 - bodyFat / 100) * weight
        equationName = "Katch-McArdle Formula"
        accuracy = "Most accurate for lean individuals with known body fat %"
    }

    return { bmr, equationName, accuracy }
}
