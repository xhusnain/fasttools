/**
 * Background Removal Utility
 * Implementation based on Magic Wand/Flood Fill algorithm
 * Uses edge-based sampling and region growing for accurate background detection
 */

export interface BgRemovalOptions {
  tolerance?: number // RGB color tolerance (0-255), default: 150
  edgeSmoothing?: boolean // Smooth edges of transparency, default: true
  feather?: number // Edge feathering radius in pixels, default: 3
  aggressiveness?: number // How aggressive the removal is (1-10), default: 9
}

/**
 * Calculate color distance using Euclidean distance in RGB space
 */
function colorDistance(r1: number, g1: number, b1: number, r2: number, g2: number, b2: number): number {
  return Math.sqrt(
    Math.pow(r1 - r2, 2) +
    Math.pow(g1 - g2, 2) +
    Math.pow(b1 - b2, 2)
  )
}

/**
 * Convert RGB to HSV for better color matching
 * HSV is better for natural images with lighting variations
 */
function rgbToHsv(r: number, g: number, b: number): [number, number, number] {
  r /= 255
  g /= 255
  b /= 255
  
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const diff = max - min
  
  let h = 0
  let s = max === 0 ? 0 : diff / max
  let v = max
  
  if (diff !== 0) {
    if (max === r) {
      h = ((g - b) / diff + (g < b ? 6 : 0)) / 6
    } else if (max === g) {
      h = ((b - r) / diff + 2) / 6
    } else {
      h = ((r - g) / diff + 4) / 6
    }
  }
  
  return [h * 360, s * 100, v * 100]
}

/**
 * Calculate color distance in HSV space (better for natural images)
 */
function hsvColorDistance(h1: number, s1: number, v1: number, h2: number, s2: number, v2: number): number {
  // Hue is circular (0-360)
  let hDiff = Math.abs(h1 - h2)
  if (hDiff > 180) hDiff = 360 - hDiff
  
  // Weight components differently for better natural color matching
  return Math.sqrt(
    Math.pow(hDiff * 2, 2) +      // Hue difference (weighted more)
    Math.pow(s1 - s2, 2) +         // Saturation difference
    Math.pow((v1 - v2) * 0.5, 2)   // Value difference (weighted less)
  )
}

/**
 * Morphological erosion operation to clean up mask
 */
function erosion(mask: Uint8Array, width: number, height: number, iterations: number = 1): Uint8Array {
  let current = new Uint8Array(mask)
  
  for (let iter = 0; iter < iterations; iter++) {
    const temp = new Uint8Array(current)
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x
        
        if (current[idx] === 0) {
          // If any neighbor is opaque, keep this transparent
          const neighbors = [
            current[idx - 1], current[idx + 1],
            current[idx - width], current[idx + width]
          ]
          
          if (neighbors.some(n => n > 0)) {
            temp[idx] = 0
          }
        }
      }
    }
    
    current = temp
  }
  
  return current
}

/**
 * Morphological dilation operation to expand mask
 */
function dilation(mask: Uint8Array, width: number, height: number, iterations: number = 1): Uint8Array {
  let current = new Uint8Array(mask)
  
  for (let iter = 0; iter < iterations; iter++) {
    const temp = new Uint8Array(current)
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x
        
        if (current[idx] > 0) {
          // If any neighbor is transparent, expand opaque region
          const neighbors = [
            current[idx - 1], current[idx + 1],
            current[idx - width], current[idx + width]
          ]
          
          if (neighbors.some(n => n === 0)) {
            temp[idx] = 255
          }
        }
      }
    }
    
    current = temp
  }
  
  return current
}

/**
 * Cluster colors to find dominant background color
 */
function findDominantEdgeColor(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  edgeSamples: Array<[number, number]>
): [number, number, number] {
  const colorCounts = new Map<string, { count: number, r: number, g: number, b: number }>()
  
  edgeSamples.forEach(([x, y]) => {
    const idx = (y * width + x) * 4
    const r = data[idx]
    const g = data[idx + 1]
    const b = data[idx + 2]
    
    // Quantize to reduce similar colors (round to nearest 10)
    const qr = Math.round(r / 10) * 10
    const qg = Math.round(g / 10) * 10
    const qb = Math.round(b / 10) * 10
    const key = `${qr},${qg},${qb}`
    
    if (!colorCounts.has(key)) {
      colorCounts.set(key, { count: 0, r: qr, g: qg, b: qb })
    }
    colorCounts.get(key)!.count++
  })
  
  // Find most common color
  let maxCount = 0
  let dominantColor: [number, number, number] = [255, 255, 255]
  
  colorCounts.forEach(({ count, r, g, b }) => {
    if (count > maxCount) {
      maxCount = count
      dominantColor = [r, g, b]
    }
  })
  
  return dominantColor
}

/**
 * Removes background from image data using aggressive RGB-based segmentation
 * Algorithm: RGB flood fill + Edge sampling + Post-processing + Alpha matting
 * @param imageData - Canvas ImageData object
 * @param options - Configuration options
 * @returns Modified ImageData with transparent background
 */
export function removeBackground(
  imageData: ImageData, 
  options: BgRemovalOptions = {}
): ImageData {
  const {
    tolerance = 150,
    edgeSmoothing = true,
    feather = 3,
    aggressiveness = 9
  } = options

  const data = imageData.data
  const width = imageData.width
  const height = imageData.height
  
  console.log(`🎨 Starting background removal (${width}x${height})...`)
  
  // Create mask array (0 = transparent, 255 = opaque)
  const mask = new Uint8Array(width * height)
  mask.fill(255) // Start with everything opaque
  
  // Step 1: Dense edge sampling for better background detection
  const edgeSamples: Array<[number, number]> = []
  const borderWidth = Math.max(8, Math.floor(Math.min(width, height) / 80))
  
  // Sample outer border densely (every 2-3 pixels)
  for (let x = 0; x < width; x += 2) {
    // Top and bottom borders
    for (let dy = 0; dy < borderWidth; dy++) {
      edgeSamples.push([x, dy])
      edgeSamples.push([x, height - 1 - dy])
    }
  }
  for (let y = 0; y < height; y += 2) {
    // Left and right borders
    for (let dx = 0; dx < borderWidth; dx++) {
      edgeSamples.push([dx, y])
      edgeSamples.push([width - 1 - dx, y])
    }
  }
  
  console.log(`✅ Sampled ${edgeSamples.length} edge pixels`)
  
  // Step 2: Find dominant background color (clustering)
  const dominantBgColor = findDominantEdgeColor(data, width, height, edgeSamples)
  console.log(`✅ Dominant background color: RGB(${dominantBgColor.join(', ')})`)
  
  // Step 3: Aggressive RGB flood fill from edges
  const queue: Array<[number, number]> = []
  const visited = new Uint8Array(width * height)
  
  // Start flood fill from ALL edge pixels
  edgeSamples.forEach(([x, y]) => {
    queue.push([x, y])
  })
  
  console.log(`✅ Starting aggressive flood fill from ${queue.length} edge points`)
  
  // Very aggressive tolerance for complete removal
  const fillTolerance = tolerance
  console.log(`✅ Using tolerance: ${fillTolerance.toFixed(1)}`)
  
  let pixelsRemoved = 0
  
  while (queue.length > 0) {
    const [x, y] = queue.shift()!
    
    if (x < 0 || x >= width || y < 0 || y >= height) continue
    
    const pixelIdx = y * width + x
    if (visited[pixelIdx]) continue
    
    const dataIdx = pixelIdx * 4
    const r = data[dataIdx]
    const g = data[dataIdx + 1]
    const b = data[dataIdx + 2]
    
    // Check RGB distance
    const dist = colorDistance(r, g, b, dominantBgColor[0], dominantBgColor[1], dominantBgColor[2])
    
    if (dist >= fillTolerance) continue
    
    visited[pixelIdx] = 1
    mask[pixelIdx] = 0 // Mark as transparent
    pixelsRemoved++
    
    // Add 8-connected neighbors (includes diagonals for better coverage)
    queue.push([x + 1, y])     // Right
    queue.push([x - 1, y])     // Left
    queue.push([x, y + 1])     // Down
    queue.push([x, y - 1])     // Up
    queue.push([x + 1, y + 1]) // Bottom-right
    queue.push([x - 1, y + 1]) // Bottom-left
    queue.push([x + 1, y - 1]) // Top-right
    queue.push([x - 1, y - 1]) // Top-left
  }
  
  const removalPercentage = (pixelsRemoved / (width * height)) * 100
  console.log(`✅ Removed ${pixelsRemoved} background pixels (${removalPercentage.toFixed(1)}%)`)
  
  // Safety check: If we removed more than 95% of pixels, something went wrong
  if (pixelsRemoved > (width * height * 0.95)) {
    console.warn(`⚠️ Too many pixels removed (${removalPercentage.toFixed(1)}%) - reverting`)
    mask.fill(255) // Reset mask
  } else if (pixelsRemoved === 0) {
    console.warn('⚠️ No pixels removed - background detection may have failed')
  } else if (pixelsRemoved > 0) {
    // Post-processing: Aggressive cleanup
    console.log('🔧 Post-processing: Aggressive cleanup...')
    
    const tempMask = new Uint8Array(mask)
    let additionalRemoved = 0
    
    // Remove isolated pixels aggressively
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x
        
        if (mask[idx] === 0) continue
        
        const neighbors = [
          mask[idx - 1], mask[idx + 1],
          mask[idx - width], mask[idx + width],
          mask[idx - width - 1], mask[idx - width + 1],
          mask[idx + width - 1], mask[idx + width + 1],
        ]
        
        const transparentNeighbors = neighbors.filter(n => n === 0).length
        
        // If surrounded by transparency
        if (transparentNeighbors >= 4) {
          const dataIdx = idx * 4
          const r = data[dataIdx]
          const g = data[dataIdx + 1]
          const b = data[dataIdx + 2]
          
          const dist = colorDistance(r, g, b, dominantBgColor[0], dominantBgColor[1], dominantBgColor[2])
          
          // Very aggressive tolerance for cleanup
          if (dist < fillTolerance * 2) {
            tempMask[idx] = 0
            additionalRemoved++
          }
        }
      }
    }
    
    // Apply cleanup
    for (let i = 0; i < mask.length; i++) {
      mask[i] = tempMask[i]
    }
    
    pixelsRemoved += additionalRemoved
    console.log(`✅ Post-processing: Removed ${additionalRemoved} more pixels`)
    console.log(`✅ Total: ${pixelsRemoved} pixels removed (${((pixelsRemoved / (width * height)) * 100).toFixed(1)}%)`)
  }
  
  // Step 4: Apply improved feathering/edge softening
  if (edgeSmoothing && feather > 0 && pixelsRemoved > 0 && pixelsRemoved < (width * height * 0.95)) {
    console.log(`🎨 Applying edge feathering (radius: ${feather}px)...`)
    
    const tempMask = new Uint8Array(mask)
    
    for (let y = feather; y < height - feather; y++) {
      for (let x = feather; x < width - feather; x++) {
        const idx = y * width + x
        
        // Skip if already transparent
        if (mask[idx] === 0) continue
        
        // Check neighborhood for transparency with weighted distance
        let transparentSum = 0
        let totalWeight = 0
        
        for (let dy = -feather; dy <= feather; dy++) {
          for (let dx = -feather; dx <= feather; dx++) {
            const nIdx = (y + dy) * width + (x + dx)
            const distance = Math.sqrt(dx * dx + dy * dy)
            const weight = feather - distance + 1 // Closer pixels have more weight
            
            if (weight > 0) {
              if (mask[nIdx] === 0) {
                transparentSum += weight
              }
              totalWeight += weight
            }
          }
        }
        
        // Apply gradual transparency at edges with smoother transition
        if (transparentSum > 0 && totalWeight > 0) {
          const ratio = transparentSum / totalWeight
          if (ratio > 0.2) { // Lower threshold for smoother edges
            // Apply smooth alpha gradient
            const alphaReduction = Math.min(ratio * 1.2, 1) // Slightly amplify for better blend
            tempMask[idx] = Math.round(255 * (1 - alphaReduction))
          }
        }
      }
    }
    
    // Copy feathered mask back
    for (let i = 0; i < mask.length; i++) {
      mask[i] = tempMask[i]
    }
  }
  
  // Step 5: Apply mask to create final image with transparency
  const newData = new ImageData(
    new Uint8ClampedArray(data),
    width,
    height
  )
  
  for (let i = 0; i < width * height; i++) {
    newData.data[i * 4 + 3] = mask[i] // Set alpha channel
  }
  
  console.log('✅ Background removal complete')
  return newData
}

/**
 * Process an image element and return a canvas with transparent background
 * @param imageElement - HTML Image or Canvas element
 * @param options - Background removal options
 * @returns Canvas element with transparent background
 */
export async function removeBackgroundFromImage(
  imageElement: HTMLImageElement | HTMLCanvasElement,
  options: BgRemovalOptions = {}
): Promise<HTMLCanvasElement> {
  // Create temporary canvas
  const tempCanvas = document.createElement('canvas')
  const tempCtx = tempCanvas.getContext('2d', { willReadFrequently: true })
  
  if (!tempCtx) {
    throw new Error('Could not get canvas context')
  }

  // Set canvas size to match image
  if (imageElement instanceof HTMLImageElement) {
    tempCanvas.width = imageElement.naturalWidth || imageElement.width
    tempCanvas.height = imageElement.naturalHeight || imageElement.height
  } else {
    tempCanvas.width = imageElement.width
    tempCanvas.height = imageElement.height
  }
  
  // Draw image to canvas
  tempCtx.drawImage(imageElement, 0, 0)
  
  // Get image data
  const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height)
  
  // Process image data to remove background
  const processedData = removeBackground(imageData, options)
  
  // Put processed data back to canvas
  tempCtx.putImageData(processedData, 0, 0)
  
  return tempCanvas
}

/**
 * Convert canvas to blob
 * @param canvas - Canvas element
 * @param type - Image MIME type, default: 'image/png'
 * @param quality - Image quality (0-1), default: 1
 * @returns Blob promise
 */
export function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: string = 'image/png',
  quality: number = 1
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob)
        } else {
          reject(new Error('Failed to create blob from canvas'))
        }
      },
      type,
      quality
    )
  })
}

/**
 * Complete background removal workflow for Fabric.js integration
 * @param imageElement - Source image element
 * @param options - Background removal options
 * @returns Object with blob URL and canvas
 */
export async function processFabricImageBackground(
  imageElement: HTMLImageElement | HTMLCanvasElement,
  options: BgRemovalOptions = {}
): Promise<{ url: string; canvas: HTMLCanvasElement; blob: Blob }> {
  try {
    // Process image
    const canvas = await removeBackgroundFromImage(imageElement, options)
    
    // Convert to blob
    const blob = await canvasToBlob(canvas)
    
    // Create URL
    const url = URL.createObjectURL(blob)
    
    return { url, canvas, blob }
  } catch (error) {
    console.error('Background removal failed:', error)
    throw error
  }
}

