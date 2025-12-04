export interface PaceResult {
    pace: string
    pacePerMile: string
    pacePerKm: string
    time: string
    distance: number
    speed: number
    heartRateZone: string
    trainingZone: string
    caloriesBurned: number
    vo2Max: number
    racePrediction: {
        [key: string]: string
    }
}

export interface MultipointSegment {
    distance: number
    time: string
    pace: string
    split: string
}
