export interface PetName {
    name: string
    meaning: string
    origin: string
}

export interface CategorizedNames {
    traditional: PetName[]
    modern: PetName[]
    unique: PetName[]
    nature: PetName[]
    cultural: PetName[]
    celebrity: PetName[]
    food: PetName[]
    mythological: PetName[]
}
