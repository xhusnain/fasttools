/**
 * SimHash Implementation
 * Based on Charikar's simhash technique from the Google paper:
 * "Detecting Near-Duplicates for Web Crawling" (WWW 2007)
 *
 * SimHash produces fingerprints where similar documents have similar fingerprints
 * (small Hamming distance), unlike cryptographic hashes like MD5/SHA.
 */

// Use BigInt for 64-bit operations
const HASH_BITS = 64

/**
 * FNV-1a hash function - produces a 64-bit hash
 * Fast and good distribution for strings
 */
function fnv1aHash(str: string): bigint {
    const FNV_PRIME = BigInt("0x100000001b3")
    let hash = BigInt("0xcbf29ce484222325")

    for (let i = 0; i < str.length; i++) {
        hash ^= BigInt(str.charCodeAt(i))
        hash = (hash * FNV_PRIME) & BigInt("0xFFFFFFFFFFFFFFFF")
    }

    return hash
}

/**
 * Tokenize text into features (words and bigrams)
 * Applies basic text normalization
 */
export function tokenize(text: string): Map<string, number> {
    const features = new Map<string, number>()

    // Normalize: lowercase, remove special chars, collapse whitespace
    const normalized = text
        .toLowerCase()
        .replace(/[^\w\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim()

    if (!normalized) return features

    const words = normalized.split(" ").filter((w) => w.length > 0)

    // Add unigrams (single words) with weight 1
    for (const word of words) {
        if (word.length >= 2) {
            features.set(word, (features.get(word) || 0) + 1)
        }
    }

    // Add bigrams (word pairs) with weight 2 for context
    for (let i = 0; i < words.length - 1; i++) {
        const bigram = `${words[i]} ${words[i + 1]}`
        features.set(bigram, (features.get(bigram) || 0) + 2)
    }

    return features
}

/**
 * Generate a 64-bit SimHash fingerprint for text
 *
 * Algorithm:
 * 1. Extract weighted features from text
 * 2. For each feature, hash to 64-bit value
 * 3. For each bit position, add/subtract weight based on bit value
 * 4. Final fingerprint: 1 if sum positive, 0 if negative
 */
export function simhash(text: string): bigint {
    const features = tokenize(text)

    if (features.size === 0) {
        return BigInt(0)
    }

    // Vector of 64 components, initialized to 0
    const vector: number[] = new Array(HASH_BITS).fill(0)

    for (const [feature, weight] of features) {
        const hash = fnv1aHash(feature)

        // For each bit position
        for (let i = 0; i < HASH_BITS; i++) {
            // Check if bit i is set
            const bit = (hash >> BigInt(i)) & BigInt(1)

            if (bit === BigInt(1)) {
                vector[i] += weight
            } else {
                vector[i] -= weight
            }
        }
    }

    // Generate final fingerprint from vector signs
    let fingerprint = BigInt(0)
    for (let i = 0; i < HASH_BITS; i++) {
        if (vector[i] > 0) {
            fingerprint |= BigInt(1) << BigInt(i)
        }
    }

    return fingerprint
}

/**
 * Calculate Hamming distance between two fingerprints
 * (number of bit positions that differ)
 */
export function hammingDistance(hash1: bigint, hash2: bigint): number {
    let xor = hash1 ^ hash2
    let distance = 0

    while (xor > BigInt(0)) {
        distance += Number(xor & BigInt(1))
        xor >>= BigInt(1)
    }

    return distance
}

/**
 * Calculate similarity percentage between two texts
 * Returns 0-100 where 100 means identical
 */
export function calculateSimilarity(text1: string, text2: string): {
    similarity: number
    fingerprint1: string
    fingerprint2: string
    hammingDistance: number
} {
    const fp1 = simhash(text1)
    const fp2 = simhash(text2)
    const distance = hammingDistance(fp1, fp2)

    // Convert distance to similarity percentage
    // Max distance is 64 bits, so similarity = (64 - distance) / 64 * 100
    const similarity = Math.round(((HASH_BITS - distance) / HASH_BITS) * 100)

    return {
        similarity: Math.max(0, Math.min(100, similarity)),
        fingerprint1: fp1.toString(16).padStart(16, "0").toUpperCase(),
        fingerprint2: fp2.toString(16).padStart(16, "0").toUpperCase(),
        hammingDistance: distance,
    }
}

/**
 * Get text statistics
 */
export function getTextStats(text: string): {
    characters: number
    words: number
    sentences: number
    features: number
} {
    const words = text.trim().split(/\s+/).filter((w) => w.length > 0)
    const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0)
    const features = tokenize(text)

    return {
        characters: text.length,
        words: words.length,
        sentences: sentences.length,
        features: features.size,
    }
}
