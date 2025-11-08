"use client"

import React, { useState } from 'react'
import { Square, Search, Camera, Circle, Coffee, RotateCw, Grid3x3, Mountain, X } from 'lucide-react'
import { getFabric } from '@/lib/fabric'

interface FiltersPanelProps {
  canvas: any
}

export function FiltersPanel({ canvas }: FiltersPanelProps) {
  const [appliedFilters, setAppliedFilters] = useState<Set<string>>(new Set())
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showGradientPicker, setShowGradientPicker] = useState(false)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedGradient, setSelectedGradient] = useState<any>(null)

  // Function to remove a specific filter
  const removeSpecificFilter = (filterId: string, activeObject: any, fabric: any) => {
    if (!activeObject.filters || activeObject.filters.length === 0) return

    // Map filter IDs to their filter class names
    const filterTypeMap: { [key: string]: string[] } = {
      'blur': ['Blur'],
      'sharpen': ['Convolute'],
      'vintage': ['Sepia', 'Brightness'],
      'grayscale': ['Grayscale'],
      'sepia': ['Sepia'],
      'invert': ['Invert'],
      'pixelate': ['Pixelate'],
      'emboss': ['Convolute']
    }

    const filterTypes = filterTypeMap[filterId] || []
    
    // Remove filters of matching types
    activeObject.filters = activeObject.filters.filter((filter: any) => {
      const filterType = filter.type || filter.constructor.name
      
      // Special handling for Convolute filters (sharpen vs emboss)
      if (filterType === 'Convolute') {
        if (filterId === 'sharpen') {
          // Sharpen has matrix [0, -1, 0, -1, 5, -1, 0, -1, 0]
          const isSharpen = filter.matrix && filter.matrix[4] === 5
          return !isSharpen
        } else if (filterId === 'emboss') {
          // Emboss has matrix [1, 1, 1, 1, 0.7, -1, -1, -1, -1]
          const isEmboss = filter.matrix && filter.matrix[4] === 0.7
          return !isEmboss
        }
      }
      
      // For other filters, check if type matches
      return !filterTypes.includes(filterType)
    })

    // Apply the updated filters
    activeObject.applyFilters()
    canvas.renderAll()
  }

  const filters = [
    { id: 'blur', name: 'Blur', icon: Square, color: '#6b7280' },
    { id: 'sharpen', name: 'Sharpen', icon: Search, color: '#3b82f6' },
    { id: 'vintage', name: 'Vintage', icon: Camera, color: '#f97316' },
    { id: 'grayscale', name: 'B&W', icon: Circle, color: '#1e293b' },
    { id: 'sepia', name: 'Sepia', icon: Coffee, color: '#92400e' },
    { id: 'invert', name: 'Invert', icon: RotateCw, color: '#a855f7' },
    { id: 'pixelate', name: 'Pixelate', icon: Grid3x3, color: '#ec4899' },
    { id: 'emboss', name: 'Emboss', icon: Mountain, color: '#6366f1' }
  ]

  // Gradient colors palette
  const gradientColors = [
    // Cool tones
    [
      { colors: ['#667eea', '#764ba2'], angle: 180 },
      { colors: ['#4e54c8', '#8f94fb'], angle: 180 },
      { colors: ['#00c6ff', '#0072ff'], angle: 180 },
      { colors: ['#00d2ff', '#3a7bd5'], angle: 180 },
      { colors: ['#667eea', '#00c6ff'], angle: 180 },
      { colors: ['#667eea', '#a445b2'], angle: 90 },
      { colors: ['#f857a6', '#ff5858'], angle: 180 }
    ],
    // Warm tones
    [
      { colors: ['#ff9a56', '#ff6a88'], angle: 180 },
      { colors: ['#ff6a00', '#ee0979'], angle: 180 },
      { colors: ['#f12711', '#f5af19'], angle: 180 },
      { colors: ['#fc4a1a', '#f7b733'], angle: 180 },
      { colors: ['#ff8008', '#ffc837'], angle: 180 },
      { colors: ['#f093fb', '#f5576c'], angle: 180 },
      { colors: ['#fa709a', '#fee140'], angle: 180 }
    ],
    // Monochromatic
    [
      { colors: ['#ffffff', '#868686'], angle: 180 },
      { colors: ['#434343', '#000000'], angle: 180 },
      { colors: ['#000000', '#434343'], angle: 180 },
      { colors: ['#0f2027', '#203a43', '#2c5364'], angle: 180 },
      { colors: ['#bdc3c7', '#2c3e50'], angle: 180 },
      { colors: ['#757f9a', '#d7dde8'], angle: 180 },
      { colors: ['#232526', '#414345'], angle: 180 }
    ],
    // Vibrant multi-colors
    [
      { colors: ['#ff0844', '#ffb199'], angle: 180 },
      { colors: ['#fc466b', '#3f5efb'], angle: 180 },
      { colors: ['#3f2b96', '#a8c0ff'], angle: 180 },
      { colors: ['#fdbb2d', '#22c1c3'], angle: 180 },
      { colors: ['#fdbb2d', '#3a1c71'], angle: 180 },
      { colors: ['#2af598', '#009efd'], angle: 180 },
      { colors: ['#e1eec3', '#f05053'], angle: 180 }
    ],
    // Pastel gradients
    [
      { colors: ['#ffecd2', '#fcb69f'], angle: 180 },
      { colors: ['#ff9a9e', '#fecfef'], angle: 180 },
      { colors: ['#fbc2eb', '#a6c1ee'], angle: 180 },
      { colors: ['#fdcbf1', '#e6dee9'], angle: 180 },
      { colors: ['#a1c4fd', '#c2e9fb'], angle: 180 },
      { colors: ['#d299c2', '#fef9d7'], angle: 180 },
      { colors: ['#ffecd2', '#fcb69f'], angle: 90 }
    ],
    // Nature/Earth tones
    [
      { colors: ['#134e5e', '#71b280'], angle: 180 },
      { colors: ['#02aab0', '#00cdac'], angle: 180 },
      { colors: ['#43cea2', '#185a9d'], angle: 180 },
      { colors: ['#667db6', '#0082c8', '#0082c8', '#667db6'], angle: 180 },
      { colors: ['#56ab2f', '#a8e063'], angle: 180 },
      { colors: ['#076585', '#fff'], angle: 180 },
      { colors: ['#1e3c72', '#2a5298'], angle: 180 }
    ],
    // Sunset/Sunrise
    [
      { colors: ['#ff512f', '#dd2476'], angle: 180 },
      { colors: ['#ff5f6d', '#ffc371'], angle: 180 },
      { colors: ['#ee9ca7', '#ffdde1'], angle: 180 },
      { colors: ['#ff6e7f', '#bfe9ff'], angle: 180 },
      { colors: ['#e0c3fc', '#8ec5fc'], angle: 180 },
      { colors: ['#f093fb', '#4facfe'], angle: 90 },
      { colors: ['#fa709a', '#fee140'], angle: 90 }
    ]
  ]

  // Comprehensive color palette - organized by hue
  const solidColors = [
    // Navy Blues
    ['#0a1929', '#0d47a1', '#0000ff', '#1976d2', '#42a5f5', '#90caf9', '#bbdefb'],
    // Purples
    ['#1a237e', '#311b92', '#4a148c', '#6a1b9a', '#8e24aa', '#ba68c8', '#e1bee7'],
    // Deep Purples
    ['#1b0037', '#4a148c', '#6a1b9a', '#7b1fa2', '#9c27b0', '#ba68c8', '#e1bee7'],
    // Violets
    ['#2e003e', '#4a0072', '#7b1fa2', '#ab47bc', '#ce93d8', '#e1bee7', '#f3e5f5'],
    // Magentas/Pinks
    ['#4a0033', '#880e4f', '#c2185b', '#e91e63', '#f06292', '#f8bbd0', '#fce4ec'],
    // Browns
    ['#3e2723', '#4e342e', '#ff0000', '#ff5252', '#ff8a80', '#ffccbc', '#fbe9e7'],
    // Reds/Oranges
    ['#5d2012', '#8d2914', '#e53935', '#ef5350', '#ef9a9a', '#ffcdd2', '#ffebee'],
    // Oranges
    ['#663d00', '#7f4700', '#e65100', '#ff6f00', '#ff9800', '#ffb74d', '#ffe0b2'],
    // Yellows/Golds
    ['#5d4a00', '#826600', '#f57f17', '#fbc02d', '#ffeb3b', '#fff176', '#fff9c4'],
    // Lime/Yellow-Greens
    ['#5d5d00', '#7f7f00', '#afb42b', '#cddc39', '#ffff00', '#f4ff81', '#f9fbe7'],
    // Greens
    ['#1b5e20', '#2e7d32', '#388e3c', '#4caf50', '#66bb6a', '#a5d6a7', '#c8e6c9'],
    // Dark Greens
    ['#003d00', '#00600f', '#00c853', '#69f0ae', '#b9f6ca', '#c8e6c9', '#e8f5e9'],
    // Teals/Cyan
    ['#004d40', '#00695c', '#00897b', '#26a69a', '#4db6ac', '#80cbc4', '#b2dfdb'],
    // Light Teals
    ['#003d33', '#00695c', '#009688', '#26a69a', '#64ffda', '#a7ffeb', '#e0f2f1'],
    // Cyans/Light Blues
    ['#003d5c', '#005662', '#00838f', '#00acc1', '#00bcd4', '#4dd0e1', '#b2ebf2'],
    // Sky Blues
    ['#01294a', '#014a73', '#0277bd', '#0288d1', '#03a9f4', '#4fc3f7', '#b3e5fc'],
    // Blues
    ['#002171', '#003d82', '#1565c0', '#1976d2', '#2196f3', '#64b5f6', '#bbdefb']
  ]

  const handleFilterApply = async (filterId: string) => {
    if (!canvas) {
      console.error('Canvas not available')
      return
    }

    try {
      const activeObject = canvas.getActiveObject()
      
      if (!activeObject || activeObject.type !== 'image') {
        alert('Please select an image first')
        return
      }

      const fabric = await getFabric()
      if (!fabric || !fabric.filters) {
        console.error('Fabric filters not available')
        return
      }


      // Initialize filters array if not exists
      if (!activeObject.filters) {
        activeObject.filters = []
      }

      // Check if this filter is already applied
      if (appliedFilters.has(filterId)) {
        // Remove the filter
        removeSpecificFilter(filterId, activeObject, fabric)
        
        // Update tracking
        setAppliedFilters(prev => {
          const newSet = new Set(prev)
          newSet.delete(filterId)
          return newSet
        })
        
        return
      }

      // Apply the selected filter
      switch (filterId) {
        case 'blur':
          if (fabric.filters.Blur) {
            activeObject.filters.push(new fabric.filters.Blur({
              blur: 0.5
            }))
          }
          break
        
        case 'sharpen':
          if (fabric.filters.Convolute) {
            activeObject.filters.push(new fabric.filters.Convolute({
              matrix: [0, -1, 0, -1, 5, -1, 0, -1, 0]
            }))
          }
          break
        
        case 'vintage':
          // Vintage is a combination of sepia + vignette effect
          if (fabric.filters.Sepia && fabric.filters.Brightness) {
            activeObject.filters.push(new fabric.filters.Sepia())
            activeObject.filters.push(new fabric.filters.Brightness({
              brightness: -0.1
            }))
          }
          break
        
        case 'grayscale':
          if (fabric.filters.Grayscale) {
            activeObject.filters.push(new fabric.filters.Grayscale())
          }
          break
        
        case 'sepia':
          if (fabric.filters.Sepia) {
            activeObject.filters.push(new fabric.filters.Sepia())
          }
          break
        
        case 'invert':
          if (fabric.filters.Invert) {
            activeObject.filters.push(new fabric.filters.Invert())
          }
          break
        
        case 'pixelate':
          if (fabric.filters.Pixelate) {
            activeObject.filters.push(new fabric.filters.Pixelate({
              blocksize: 8
            }))
          }
          break
        
        case 'emboss':
          if (fabric.filters.Convolute) {
            activeObject.filters.push(new fabric.filters.Convolute({
              matrix: [1, 1, 1, 1, 0.7, -1, -1, -1, -1]
            }))
          }
          break
        
        default:
          console.error('Unknown filter:', filterId)
          return
      }

      // Apply all filters to the image
      activeObject.applyFilters()
      canvas.renderAll()
      
      // Track applied filter
      setAppliedFilters(prev => new Set(prev).add(filterId))
      
    } catch (error) {
      console.error(`Failed to apply ${filterId} filter:`, error)
      alert(`Failed to apply filter: ${error}`)
    }
  }

  const handleColorApply = async (color: string) => {
    if (!canvas) return

    try {
      const activeObject = canvas.getActiveObject()
      
      if (!activeObject) {
        alert('Please select an object first')
        return
      }

      const fabric = await getFabric()
      if (!fabric || !fabric.filters) return

      // Apply solid color overlay filter
      if (!activeObject.filters) {
        activeObject.filters = []
      }

      // Remove any existing BlendColor filters
      activeObject.filters = activeObject.filters.filter((filter: any) => {
        const filterType = filter.type || filter.constructor.name
        return filterType !== 'BlendColor'
      })

      // Add new BlendColor filter
      activeObject.filters.push(new fabric.filters.BlendColor({
        color: color,
        mode: 'tint',
        alpha: 0.5
      }))

      activeObject.applyFilters()
      canvas.renderAll()
      
      setSelectedColor(color)
      setSelectedGradient(null) // Clear gradient selection
    } catch (error) {
      console.error('Failed to apply color:', error)
    }
  }

  const handleGradientApply = async (gradient: { colors: string[], angle: number }) => {
    if (!canvas) return

    try {
      const activeObject = canvas.getActiveObject()
      
      if (!activeObject) {
        alert('Please select an object first')
        return
      }

      const fabric = await getFabric()
      if (!fabric) return

      // Calculate gradient coordinates based on angle
      const angleRad = (gradient.angle * Math.PI) / 180
      const centerX = activeObject.width ? activeObject.width / 2 : 100
      const centerY = activeObject.height ? activeObject.height / 2 : 100
      
      const x1 = centerX - Math.cos(angleRad) * centerX
      const y1 = centerY - Math.sin(angleRad) * centerY
      const x2 = centerX + Math.cos(angleRad) * centerX
      const y2 = centerY + Math.sin(angleRad) * centerY

      // Create color stops
      const colorStops: any = {}
      gradient.colors.forEach((color, index) => {
        const stop = index / (gradient.colors.length - 1)
        colorStops[stop] = color
      })

      // Create gradient
      const fabricGradient = new fabric.Gradient({
        type: 'linear',
        coords: { x1, y1, x2, y2 },
        colorStops
      })

      // Apply gradient as overlay using BlendImage technique
      if (!activeObject.filters) {
        activeObject.filters = []
      }

      // Remove existing color/gradient filters
      activeObject.filters = activeObject.filters.filter((filter: any) => {
        const filterType = filter.type || filter.constructor.name
        return filterType !== 'BlendColor' && filterType !== 'BlendImage'
      })

      // Use BlendColor with gradient-like effect
      // Apply first color with overlay
      activeObject.filters.push(new fabric.filters.BlendColor({
        color: gradient.colors[0],
        mode: 'overlay',
        alpha: 0.3
      }))

      // Add second color
      if (gradient.colors[1]) {
        activeObject.filters.push(new fabric.filters.BlendColor({
          color: gradient.colors[1],
          mode: 'multiply',
          alpha: 0.3
        }))
      }

      activeObject.applyFilters()
      canvas.renderAll()
      
      setSelectedGradient(gradient)
      setSelectedColor(null) // Clear solid color selection
    } catch (error) {
      console.error('Failed to apply gradient:', error)
    }
  }

  const removeAllFilters = async () => {
    if (!canvas) return

    try {
      const activeObject = canvas.getActiveObject()
      
      if (!activeObject || activeObject.type !== 'image') {
        alert('Please select an image first')
        return
      }

      // Clear all filters
      activeObject.filters = []
      activeObject.applyFilters()
      canvas.renderAll()
      
      // Clear tracking
      setAppliedFilters(new Set())
      setSelectedColor(null)
      setSelectedGradient(null)
      
    } catch (error) {
      console.error('Failed to remove filters:', error)
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Info message */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-700">
            Select an image, then click filters to toggle them on/off
          </p>
        </div>

        {/* Filters */}
        <div>
          <h3 className="text-xs font-semibold text-slate-700 mb-2">Filters</h3>
          <div className="grid grid-cols-2 gap-2">
            {filters.map((filter) => {
              const Icon = filter.icon
              const isApplied = appliedFilters.has(filter.id)
              return (
                <button
                  key={filter.id}
                  onClick={() => handleFilterApply(filter.id)}
                  className={`flex flex-col items-center p-2 rounded-lg border-2 transition-all ${
                    isApplied
                      ? 'border-purple-500 bg-purple-50 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                  }`}
                  title={isApplied ? `Click to remove ${filter.name}` : `Click to apply ${filter.name}`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-1 ${
                      isApplied ? 'ring-2 ring-purple-300' : ''
                    }`}
                    style={{ backgroundColor: filter.color }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className={`text-xs font-medium ${isApplied ? 'text-purple-700' : 'text-slate-700'}`}>
                    {filter.name}
                  </span>
                  {isApplied && (
                    <span className="text-[10px] text-purple-600 font-semibold mt-0.5">✓ Active</span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Applied filters count */}
        {appliedFilters.size > 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2">
            <p className="text-xs text-muted-foreground text-center">
              {appliedFilters.size} filter{appliedFilters.size > 1 ? 's' : ''} applied
            </p>
          </div>
        )}

        {/* Solid Colors Section */}
        <div>
          <button
            onClick={() => setShowColorPicker(!showColorPicker)}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all flex items-center justify-between group"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">🎨</span>
              <span>Solid Colors</span>
            </span>
            <span className={`text-sm transition-transform ${showColorPicker ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {showColorPicker && (
            <div className="mt-3 space-y-1.5 max-h-96 overflow-y-auto border border-slate-200 rounded-lg p-3 bg-white shadow-inner">
              {solidColors.map((colorRow, rowIndex) => (
                <div key={rowIndex} className="flex gap-1.5 justify-center">
                  {colorRow.map((color, colIndex) => (
                    <button
                      key={`${rowIndex}-${colIndex}`}
                      onClick={() => handleColorApply(color)}
                      className={`w-7 h-7 rounded-full transition-all hover:scale-125 hover:shadow-lg ${
                        selectedColor === color ? 'ring-2 ring-white ring-offset-2 ring-offset-purple-400 scale-110 shadow-lg' : 'hover:ring-2 hover:ring-white hover:ring-offset-1'
                      }`}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              ))}
            </div>
          )}

          {selectedColor && (
            <div className="mt-2 bg-white border border-purple-200 rounded-lg p-2.5 flex items-center justify-between shadow-sm">
              <span className="text-xs text-purple-600 font-semibold">Color Applied</span>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border-2 border-purple-300 shadow-md ring-2 ring-purple-100"
                  style={{ backgroundColor: selectedColor }}
                />
                <span className="text-xs text-muted-foreground font-mono font-medium">{selectedColor}</span>
              </div>
            </div>
          )}
        </div>

        {/* Gradient Colors Section */}
        <div>
          <button
            onClick={() => setShowGradientPicker(!showGradientPicker)}
            className="w-full py-2.5 px-4 bg-gradient-to-r from-primary via-pink-500 to-purple-500 text-white rounded-lg font-medium text-sm hover:shadow-lg transition-all flex items-center justify-between group"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">🌈</span>
              <span>Gradient Colors</span>
            </span>
            <span className={`text-sm transition-transform ${showGradientPicker ? 'rotate-180' : ''}`}>▼</span>
          </button>

          {showGradientPicker && (
            <div className="mt-3 space-y-1.5 max-h-96 overflow-y-auto border border-slate-200 rounded-lg p-3 bg-white shadow-inner">
              {gradientColors.map((gradientRow, rowIndex) => (
                <div key={rowIndex} className="flex gap-1.5 justify-center">
                  {gradientRow.map((gradient, colIndex) => {
                    const gradientId = `gradient-${rowIndex}-${colIndex}`
                    const isSelected = selectedGradient && 
                      JSON.stringify(selectedGradient) === JSON.stringify(gradient)
                    
                    // Create CSS gradient string
                    const gradientStr = `linear-gradient(${gradient.angle}deg, ${gradient.colors.join(', ')})`
                    
                    return (
                      <button
                        key={gradientId}
                        onClick={() => handleGradientApply(gradient)}
                        className={`w-7 h-7 rounded-full transition-all hover:scale-125 hover:shadow-lg ${
                          isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-purple-400 scale-110 shadow-lg' : 'hover:ring-2 hover:ring-white hover:ring-offset-1'
                        }`}
                        style={{ background: gradientStr }}
                        title={gradient.colors.join(' → ')}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          )}

          {selectedGradient && (
            <div className="mt-2 bg-white border border-purple-200 rounded-lg p-2.5 flex items-center justify-between shadow-sm">
              <span className="text-xs text-purple-600 font-semibold">Gradient Applied</span>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border-2 border-purple-300 shadow-md ring-2 ring-purple-100"
                  style={{ background: `linear-gradient(${selectedGradient.angle}deg, ${selectedGradient.colors.join(', ')})` }}
                />
                <span className="text-xs text-muted-foreground font-medium">{selectedGradient.colors.length} colors</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Remove All Filters Button */}
      <div className="p-3 border-t border-slate-200">
        <button
          onClick={removeAllFilters}
          disabled={appliedFilters.size === 0}
          className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm text-white transition-all flex items-center justify-center gap-2 ${
            appliedFilters.size === 0
              ? 'bg-slate-300 cursor-not-allowed'
              : 'bg-red-500 hover:bg-destructive'
          }`}
        >
          <X className="w-4 h-4" />
          Remove All Filters
        </button>
      </div>
    </div>
  )
}

