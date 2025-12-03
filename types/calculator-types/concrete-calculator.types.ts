export interface ConcreteResult {
    volume: number
    weight: number
    bags: number
    cost: number
    type: string
    formula: string
    explanation: string
    dimensions: {
        length: number
        width: number
        height: number
        diameter?: number
        innerDiameter?: number
    }
    materialBreakdown: {
        cement: number
        sand: number
        gravel: number
        water: number
    }
    curingTime: string
    strength: string
    recommendations: string[]
}

export interface ConcreteMix {
    name: string
    cement: number
    sand: number
    gravel: number
    water: number
    strength: string
    description: string
}
