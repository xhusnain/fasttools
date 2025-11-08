"use client"

import React, { useState } from 'react'
import { getFabric } from '@/lib/fabric'
import { Pen, Pencil, Brush, Sparkles } from 'lucide-react'

interface DrawPanelProps {
  canvas: any
}

export function DrawPanel({ canvas }: DrawPanelProps) {
  const [isDrawingMode, setIsDrawingMode] = useState(false)
  const [currentBrush, setCurrentBrush] = useState<string | null>(null)

  const brushes = [
    { id: 'pencil', name: 'Pencil', icon: Pencil, width: 2, color: 'from-slate-600 to-slate-700' },
    { id: 'marker', name: 'Marker', icon: Pen, width: 8, color: 'from-blue-600 to-blue-700' },
    { id: 'highlighter', name: 'Highlighter', icon: Brush, width: 15, color: 'from-yellow-500 to-primary/90' },
    { id: 'spray', name: 'Spray', icon: Sparkles, width: 20, color: 'from-purple-600 to-pink-600' }
  ]

  const handleBrushSelect = async (brush: any) => {
    if (!canvas) return

    try {
      canvas.isDrawingMode = true
      canvas.freeDrawingBrush.width = brush.width
      canvas.freeDrawingBrush.color = '#000000'
      setIsDrawingMode(true)
      setCurrentBrush(brush.id)
    } catch (error) {
      console.error('Failed to set brush:', error)
    }
  }

  const handleBrushSizeChange = (size: number) => {
    if (!canvas || !canvas.freeDrawingBrush) return
    
    try {
      canvas.freeDrawingBrush.width = size
    } catch (error) {
      console.error('Failed to change brush size:', error)
    }
  }

  const handleColorChange = (color: string) => {
    if (!canvas || !canvas.freeDrawingBrush) return
    
    try {
      canvas.freeDrawingBrush.color = color
    } catch (error) {
      console.error('Failed to change brush color:', error)
    }
  }

  const toggleDrawingMode = () => {
    if (!canvas) return
    
    try {
      canvas.isDrawingMode = !canvas.isDrawingMode
      setIsDrawingMode(canvas.isDrawingMode)
    } catch (error) {
      console.error('Failed to toggle drawing mode:', error)
    }
  }

  const colors = ['#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffffff']
  const sizes = [
    { label: 'Fine', value: 1 },
    { label: 'Medium', value: 5 },
    { label: 'Thick', value: 10 },
    { label: 'Very Thick', value: 20 }
  ]

  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="font-semibold text-slate-800 mb-3 text-sm">Brushes</h3>
        <div className="grid grid-cols-2 gap-3">
          {brushes.map((brush) => {
            const Icon = brush.icon
            return (
              <button
                key={brush.id}
                className={`p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 border-2 ${
                  currentBrush === brush.id 
                    ? 'border-purple-400 shadow-lg' 
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => handleBrushSelect(brush)}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${brush.color} flex items-center justify-center text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">{brush.name}</div>
                  <div className="text-xs text-muted-foreground">{brush.width}px</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-slate-800 mb-3 text-sm">Brush Size</h3>
        <div className="grid grid-cols-2 gap-2">
          {sizes.map((size) => (
            <button
              key={size.value}
              className="p-2 bg-white rounded-lg hover:bg-slate-50 transition-colors duration-200 border border-slate-200 hover:border-slate-300 text-sm font-medium text-slate-700"
              onClick={() => handleBrushSizeChange(size.value)}
            >
              {size.label} ({size.value}px)
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-slate-800 mb-3 text-sm">Brush Color</h3>
        <div className="grid grid-cols-4 gap-2">
          {colors.map((color) => (
            <button
              key={color}
              className="w-12 h-12 rounded-lg border-2 border-slate-200 hover:border-slate-400 transition-all duration-200 shadow-sm hover:shadow-md"
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>

      <button
        className={`w-full p-3 rounded-lg text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg ${
          isDrawingMode 
            ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
            : 'bg-gradient-to-r from-purple-600 to-purple-700'
        }`}
        onClick={toggleDrawingMode}
      >
        {isDrawingMode ? '✓ Drawing Mode Active' : 'Enable Drawing Mode'}
      </button>
    </div>
  )
}

interface FiltersPanelProps {
  canvas: any
}

export function FiltersPanel({ canvas }: FiltersPanelProps) {
  const filters = [
    { id: 'blur', name: 'Blur', icon: '🌫️', color: 'from-gray-500 to-gray-600' },
    { id: 'sharpen', name: 'Sharpen', icon: '🔍', color: 'from-blue-500 to-blue-600' },
    { id: 'vintage', name: 'Vintage', icon: '📷', color: 'from-amber-500 to-primary/90' },
    { id: 'blackwhite', name: 'B&W', icon: '⚫', color: 'from-slate-700 to-slate-800' },
    { id: 'sepia', name: 'Sepia', icon: '☕', color: 'from-yellow-700 to-amber-800' },
    { id: 'invert', name: 'Invert', icon: '🔄', color: 'from-purple-500 to-purple-600' },
    { id: 'pixelate', name: 'Pixelate', icon: '🧩', color: 'from-pink-500 to-rose-600' },
    { id: 'emboss', name: 'Emboss', icon: '⛰️', color: 'from-indigo-500 to-indigo-600' }
  ]

  const handleFilterApply = async (filterId: string) => {
    if (!canvas) return

    try {
      const activeObject = canvas.getActiveObject()
      if (!activeObject || activeObject.type !== 'image') {
        return
      }

      const fabric = await getFabric()
      if (!fabric || !fabric.filters) return

      if (!activeObject.filters) {
        activeObject.filters = []
      }

      switch (filterId) {
        case 'blur':
          if (fabric.filters.Blur) {
            activeObject.filters.push(new fabric.filters.Blur({ blur: 0.3 }))
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
        case 'sepia':
          if (fabric.filters.Sepia) {
            activeObject.filters.push(new fabric.filters.Sepia())
          }
          break
        case 'blackwhite':
          if (fabric.filters.Grayscale) {
            activeObject.filters.push(new fabric.filters.Grayscale())
          }
          break
        case 'invert':
          if (fabric.filters.Invert) {
            activeObject.filters.push(new fabric.filters.Invert())
          }
          break
        case 'pixelate':
          if (fabric.filters.Pixelate) {
            activeObject.filters.push(new fabric.filters.Pixelate({ blocksize: 4 }))
          }
          break
        case 'emboss':
          if (fabric.filters.Convolute) {
            activeObject.filters.push(new fabric.filters.Convolute({
              matrix: [-2, -1, 0, -1, 1, 1, 0, 1, 2]
            }))
          }
          break
      }

      activeObject.applyFilters()
      canvas.renderAll()
      
    } catch (error) {
      console.error('Failed to apply filter:', error)
    }
  }

  const removeAllFilters = () => {
    if (!canvas) return
    
    try {
      const activeObject = canvas.getActiveObject()
      if (activeObject) {
        activeObject.filters = []
        activeObject.applyFilters()
        canvas.renderAll()
      }
    } catch (error) {
      console.error('Failed to remove filters:', error)
    }
  }

  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="font-semibold text-slate-800 mb-3 text-sm">Filters</h3>
        <div className="grid grid-cols-2 gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id} 
              className="p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 border-2 border-slate-200 hover:border-slate-300"
              onClick={() => handleFilterApply(filter.id)}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${filter.color} flex items-center justify-center text-white text-2xl`}>
                  {filter.icon}
                </div>
                <div className="text-xs text-muted-foreground font-medium">{filter.name}</div>
              </div>
            </button>
          ))}
        </div>
        
        <div className="pt-4">
          <button
            className="w-full p-3 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 text-white font-medium hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
            onClick={removeAllFilters}
          >
            🧹 Remove All Filters
          </button>
        </div>
      </div>
    </div>
  )
}

interface AdjustPanelProps {
  canvas: any
}

export function AdjustPanel({ canvas }: AdjustPanelProps) {
  const [brightness, setBrightness] = useState(0)
  const [contrast, setContrast] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [hue, setHue] = useState(0)

  const applyAdjustment = async (type: string, value: number) => {
    if (!canvas) return

    try {
      const activeObject = canvas.getActiveObject()
      
      if (!activeObject || activeObject.type !== 'image') {
        return
      }

      const fabric = await getFabric()
      if (!fabric || !fabric.filters) {
        console.error('Fabric filters not available')
        return
      }

      if (!activeObject.filters) {
        activeObject.filters = []
      }

      // Remove existing filter of the same type
      activeObject.filters = activeObject.filters.filter((filter: any) => {
        const filterType = filter.type || filter.constructor.name
        if (type === 'brightness' && filterType === 'Brightness') return false
        if (type === 'contrast' && filterType === 'Contrast') return false
        if (type === 'saturation' && filterType === 'Saturation') return false
        if (type === 'hue' && filterType === 'HueRotation') return false
        return true
      })

      // Add new filter only if value is not 0
      if (value !== 0) {
        switch (type) {
          case 'brightness':
            if (fabric.filters.Brightness) {
              activeObject.filters.push(new fabric.filters.Brightness({ 
                brightness: value / 100 
              }))
            }
            break
          case 'contrast':
            if (fabric.filters.Contrast) {
              activeObject.filters.push(new fabric.filters.Contrast({ 
                contrast: value / 100 
              }))
            }
            break
          case 'saturation':
            if (fabric.filters.Saturation) {
              activeObject.filters.push(new fabric.filters.Saturation({ 
                saturation: value / 100 
              }))
            }
            break
          case 'hue':
            if (fabric.filters.HueRotation) {
              activeObject.filters.push(new fabric.filters.HueRotation({ 
                rotation: (value * Math.PI) / 180 
              }))
            }
            break
        }
      }

      activeObject.applyFilters()
      canvas.renderAll()
      
    } catch (error) {
      console.error('Failed to apply adjustment:', error)
    }
  }

  const resetAdjustments = () => {
    if (!canvas) return

    try {
      const activeObject = canvas.getActiveObject()
      if (!activeObject) {
        alert('Please select an image first')
        return
      }

      // Remove adjustment filters only
      if (activeObject.filters) {
        activeObject.filters = activeObject.filters.filter((filter: any) => {
          const filterType = filter.type || filter.constructor.name
          return !['Brightness', 'Contrast', 'Saturation', 'HueRotation'].includes(filterType)
        })
        activeObject.applyFilters()
      }

      canvas.renderAll()
      setBrightness(0)
      setContrast(0)
      setSaturation(0)
      setHue(0)

    } catch (error) {
      console.error('Failed to reset adjustments:', error)
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div>
          <h3 className="font-semibold text-slate-800 mb-1 text-base">Adjustments</h3>
          <p className="text-xs text-muted-foreground mb-6">Select an image to adjust its properties</p>
          
          <div className="space-y-6">
            {/* Brightness */}
      <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-slate-700 font-medium">Brightness</label>
                <span className="text-sm text-muted-foreground font-semibold min-w-[2rem] text-right">{brightness}</span>
              </div>
              <div className="relative">
                <input 
                  type="range" 
                  min="-100" 
                  max="100" 
                  value={brightness}
                  onChange={(e) => {
                    const value = parseInt(e.target.value)
                    setBrightness(value)
                    applyAdjustment('brightness', value)
                  }}
                  className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer slider-purple"
                  style={{
                    background: `linear-gradient(to right, #e2e8f0 0%, #e2e8f0 ${((brightness + 100) / 200) * 100}%, #e2e8f0 ${((brightness + 100) / 200) * 100}%, #e2e8f0 100%)`
                  }}
                />
        </div>
      </div>

            {/* Contrast */}
      <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-slate-700 font-medium">Contrast</label>
                <span className="text-sm text-muted-foreground font-semibold min-w-[2rem] text-right">{contrast}</span>
              </div>
              <div className="relative">
                <input 
                  type="range" 
                  min="-100" 
                  max="100" 
                  value={contrast}
                  onChange={(e) => {
                    const value = parseInt(e.target.value)
                    setContrast(value)
                    applyAdjustment('contrast', value)
                  }}
                  className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer slider-blue"
                />
              </div>
      </div>

            {/* Saturation */}
      <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-slate-700 font-medium">Saturation</label>
                <span className="text-sm text-muted-foreground font-semibold min-w-[2rem] text-right">{saturation}</span>
          </div>
              <div className="relative">
                <input 
                  type="range" 
                  min="-100" 
                  max="100" 
                  value={saturation}
                  onChange={(e) => {
                    const value = parseInt(e.target.value)
                    setSaturation(value)
                    applyAdjustment('saturation', value)
                  }}
                  className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer slider-pink"
                />
        </div>
      </div>

            {/* Hue Rotation */}
      <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm text-slate-700 font-medium">Hue Rotation</label>
                <span className="text-sm text-muted-foreground font-semibold min-w-[2rem] text-right">{hue}°</span>
              </div>
              <div className="relative">
                <input 
                  type="range" 
                  min="-180" 
                  max="180" 
                  value={hue}
                  onChange={(e) => {
                    const value = parseInt(e.target.value)
                    setHue(value)
                    applyAdjustment('hue', value)
                  }}
                  className="w-full h-1.5 bg-slate-200 rounded-full appearance-none cursor-pointer slider-green"
                />
          </div>
          </div>
          </div>
        </div>
      </div>

      {/* Reset Button */}
      <div className="p-4 border-t border-slate-200">
        <button
          className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-primary to-red-500 text-white font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
          onClick={resetAdjustments}
        >
          <span className="text-base">🔄</span>
          <span>Reset Adjustments</span>
        </button>
      </div>

      <style jsx>{`
        /* Custom slider styles */
        input[type='range'] {
          -webkit-appearance: none;
          appearance: none;
          outline: none;
        }

        /* Slider thumb - all types */
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          transition: transform 0.15s ease;
        }

        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }

        input[type='range']::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          transition: transform 0.15s ease;
        }

        input[type='range']::-moz-range-thumb:hover {
          transform: scale(1.15);
        }

        /* Purple slider (Brightness) */
        .slider-purple::-webkit-slider-thumb {
          background: #a855f7;
        }
        .slider-purple::-moz-range-thumb {
          background: #a855f7;
        }

        /* Blue slider (Contrast) */
        .slider-blue::-webkit-slider-thumb {
          background: #3b82f6;
        }
        .slider-blue::-moz-range-thumb {
          background: #3b82f6;
        }

        /* Pink slider (Saturation) */
        .slider-pink::-webkit-slider-thumb {
          background: #ec4899;
        }
        .slider-pink::-moz-range-thumb {
          background: #ec4899;
        }

        /* Green slider (Hue) */
        .slider-green::-webkit-slider-thumb {
          background: #10b981;
        }
        .slider-green::-moz-range-thumb {
          background: #10b981;
        }
      `}</style>
    </div>
  )
}

interface BackgroundPanelProps {
  canvas: any
}

export function BackgroundPanel({ canvas }: BackgroundPanelProps) {
  const handleColorSelect = (color: string) => {
    if (!canvas) return
    canvas.backgroundColor = color
    canvas.renderAll()
  }

  const presetColors = [
    ['#ffffff', '#f3f4f6', '#334155', '#000000'],
    ['#ef4444', '#3b82f6', '#10b981', '#a855f7']
  ]

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {/* Preset Colors */}
      <div>
          <h3 className="font-semibold text-slate-800 mb-1 text-base">Preset Colors</h3>
          <p className="text-xs text-muted-foreground mb-4">Quick color selection</p>
          
        <div className="space-y-2">
            {presetColors.map((colorRow, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-4 gap-2">
                {colorRow.map((color) => (
                  <button
                    key={color}
                    className="h-14 rounded-xl border-2 border-slate-200 hover:border-slate-400 transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                    title={color}
                  />
                ))}
        </div>
            ))}
      </div>
    </div>

        {/* Custom Color Picker */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-1 text-base">Custom Color</h3>
          <p className="text-xs text-muted-foreground mb-4">Pick any color you want</p>
          
          <div className="flex items-center gap-3">
            <input
              type="color"
              className="w-full h-14 rounded-xl border-2 border-slate-200 cursor-pointer"
              onChange={(e) => handleColorSelect(e.target.value)}
              defaultValue="#ffffff"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

