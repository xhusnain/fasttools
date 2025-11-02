"use client"

import React, { useState, useEffect } from 'react'
import { Pencil, Brush, Highlighter, Sparkles } from 'lucide-react'
import { getFabric } from '@/lib/fabric'

interface DrawPanelProps {
  canvas: any
}

export function DrawPanel({ canvas }: DrawPanelProps) {
  const [isDrawingMode, setIsDrawingMode] = useState(false)
  const [selectedBrush, setSelectedBrush] = useState('pencil')
  const [brushSize, setBrushSize] = useState(5)
  const [brushColor, setBrushColor] = useState('#000000')

  const brushTypes = [
    { id: 'pencil', name: 'Pencil', icon: Pencil, width: 2, color: '#3b4252' },
    { id: 'marker', name: 'Marker', icon: Brush, width: 8, color: '#2563eb' },
    { id: 'highlighter', name: 'Highlighter', icon: Highlighter, width: 15, color: '#f59e0b' },
    { id: 'spray', name: 'Spray', icon: Sparkles, width: 20, color: '#a855f7' }
  ]

  const brushSizes = [
    { label: 'Fine (1px)', value: 1 },
    { label: 'Medium (5px)', value: 5 },
    { label: 'Thick (10px)', value: 10 },
    { label: 'Very Thick (20px)', value: 20 }
  ]

  const colors = [
    '#000000', // Black
    '#ef4444', // Red
    '#22c55e', // Green
    '#3b82f6', // Blue
    '#eab308', // Yellow
    '#ec4899', // Pink/Magenta
    '#06b6d4', // Cyan
    '#ffffff'  // White
  ]

  // Apply brush settings to canvas
  useEffect(() => {
    if (!canvas) return

    const applyBrushSettings = async () => {
      try {
        const fabric = await getFabric()
        
        if (isDrawingMode) {
          canvas.isDrawingMode = true
          
          // Set brush type
          if (selectedBrush === 'pencil') {
            canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
          } else if (selectedBrush === 'marker') {
            canvas.freeDrawingBrush = new fabric.PencilBrush(canvas)
          } else if (selectedBrush === 'highlighter') {
            const brush = new fabric.PencilBrush(canvas)
            brush.opacity = 0.5
            canvas.freeDrawingBrush = brush
          } else if (selectedBrush === 'spray') {
            canvas.freeDrawingBrush = new fabric.SprayBrush(canvas)
          }

          // Set brush properties
          canvas.freeDrawingBrush.color = brushColor
          canvas.freeDrawingBrush.width = brushSize

          // For spray brush, set additional properties
          if (selectedBrush === 'spray') {
            canvas.freeDrawingBrush.density = 20
            canvas.freeDrawingBrush.dotWidth = 1
          }
        } else {
          canvas.isDrawingMode = false
        }

        canvas.renderAll()
      } catch (error) {
        console.error('Failed to apply brush settings:', error)
      }
    }

    applyBrushSettings()
  }, [canvas, isDrawingMode, selectedBrush, brushSize, brushColor])

  const handleBrushSelect = (brushId: string, defaultWidth: number) => {
    setSelectedBrush(brushId)
    setBrushSize(defaultWidth)
  }

  const toggleDrawingMode = () => {
    setIsDrawingMode(!isDrawingMode)
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Brushes */}
        <div>
          <h3 className="text-xs font-semibold text-slate-700 mb-2">Brushes</h3>
          <div className="grid grid-cols-2 gap-2">
            {brushTypes.map((brush) => {
              const Icon = brush.icon
              const isSelected = selectedBrush === brush.id
              return (
                <button
                  key={brush.id}
                  onClick={() => handleBrushSelect(brush.id, brush.width)}
                  className={`flex flex-col items-center p-2 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-1"
                    style={{ backgroundColor: brush.color }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-xs font-medium text-slate-700">{brush.name}</span>
                  <span className="text-[10px] text-muted-foreground">{brush.width}px</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Brush Size */}
        <div>
          <h3 className="text-xs font-semibold text-slate-700 mb-2">Brush Size</h3>
          <div className="grid grid-cols-2 gap-2">
            {brushSizes.map((size) => (
              <button
                key={size.value}
                onClick={() => setBrushSize(size.value)}
                className={`px-2 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  brushSize === size.value
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Brush Color */}
        <div>
          <h3 className="text-xs font-semibold text-slate-700 mb-2">Brush Color</h3>
          <div className="grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setBrushColor(color)}
                className={`w-10 h-10 rounded-md transition-all ${
                  brushColor === color
                    ? 'ring-2 ring-purple-500 ring-offset-1 scale-105'
                    : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: color,
                  border: color === '#ffffff' ? '2px solid #e2e8f0' : 'none'
                }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enable Drawing Mode Button */}
      <div className="p-3 border-t border-slate-200">
        <button
          onClick={toggleDrawingMode}
          className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm text-white transition-all ${
            isDrawingMode
              ? 'bg-red-500 hover:bg-destructive'
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {isDrawingMode ? 'Disable Drawing Mode' : 'Enable Drawing Mode'}
        </button>
        
        {isDrawingMode && (
          <p className="text-[10px] text-muted-foreground text-center mt-1.5">
            Click and drag on canvas to draw
          </p>
        )}
      </div>
    </div>
  )
}

