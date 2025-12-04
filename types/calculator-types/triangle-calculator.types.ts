export interface TriangleData {
    sideA: number | null
    sideB: number | null
    sideC: number | null
    angleA: number | null
    angleB: number | null
    angleC: number | null
}

export interface TriangleResult {
    sides: {
        a: number
        b: number
        c: number
    }
    angles: {
        A: number
        B: number
        C: number
    }
    area: number
    perimeter: number
    semiperimeter: number
    height: {
        a: number
        b: number
        c: number
    }
    median: {
        a: number
        b: number
        c: number
    }
    inradius: number
    circumradius: number
    triangleType: string
    isValid: boolean
    errorMessage?: string
}
