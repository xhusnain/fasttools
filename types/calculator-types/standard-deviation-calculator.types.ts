export interface StandardDeviationResult {
    mean: number
    median: number
    mode: number[]
    range: number
    variance: number
    standardDeviation: number
    sampleStandardDeviation: number
    coefficientOfVariation: number
    skewness: number
    kurtosis: number
    quartiles: {
        q1: number
        q2: number
        q3: number
        iqr: number
    }
    outliers: number[]
    confidenceInterval: {
        lower: number
        upper: number
        marginOfError: number
    }
    zScores: number[]
    percentiles: number[]
}

export interface StandardDeviationCalculatorProps {
    onResultChange?: (result: StandardDeviationResult | null) => void
}
