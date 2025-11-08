"use client"

import React from 'react'
import { getFabric } from '@/lib/fabric'

interface TextPanelProps {
  canvas: any
}

export function TextPanel({ canvas }: TextPanelProps) {
  const addText = async (textType: string) => {
    if (!canvas) {
      console.error('Canvas not available')
      return
    }

    try {
      const fabric = await getFabric()

      if (!fabric || !fabric.IText) {
        throw new Error('Fabric.js IText not available')
      }

      // Center position like shapes and icons
      const centerX = canvas.getWidth() / 2
      const centerY = canvas.getHeight() / 2

      let text: any
      const colors = ['#1f2937', '#374151', '#6b7280', '#000000']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]

      switch (textType) {
        case 'heading':
          text = new fabric.IText('Heading Text', {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fontSize: 48,
            fontWeight: 'bold',
            fill: randomColor,
            fontFamily: 'Arial',
            selectable: true,
            editable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'subheading':
          text = new fabric.IText('Subheading Text', {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fontSize: 32,
            fontWeight: '600',
            fill: randomColor,
            fontFamily: 'Arial',
            selectable: true,
            editable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'body':
          text = new fabric.IText('Body text goes here...', {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fontSize: 18,
            fill: randomColor,
            fontFamily: 'Arial',
            selectable: true,
            editable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        case 'caption':
          text = new fabric.IText('Caption text', {
            left: centerX,
            top: centerY,
            originX: 'center',
            originY: 'center',
            fontSize: 14,
            fill: randomColor,
            fontStyle: 'italic',
            fontFamily: 'Arial',
            selectable: true,
            editable: true,
            hasControls: true,
            hasBorders: true
          })
          break

        default:
          console.error('Unknown text type:', textType)
          return
      }

      canvas.add(text)
      canvas.setActiveObject(text)
      canvas.renderAll()

    } catch (error) {
      console.error('Failed to add text:', error)
    }
  }

  const changeFontFamily = async (fontFamily: string) => {
    if (!canvas) return

    const activeObject = canvas.getActiveObject()
    if (!activeObject || (activeObject.type !== 'i-text' && activeObject.type !== 'text')) {
      return
    }

    activeObject.set('fontFamily', fontFamily)
    canvas.renderAll()
  }

  const applyTextEffect = async (effectType: string) => {
    if (!canvas) return

    const activeObject = canvas.getActiveObject()
    if (!activeObject || (activeObject.type !== 'i-text' && activeObject.type !== 'text')) {
      return
    }

    const fabric = await getFabric()
    if (!fabric) return

    switch (effectType) {
      case 'bold':
        const currentWeight = activeObject.get('fontWeight')
        activeObject.set('fontWeight', currentWeight === 'bold' ? 'normal' : 'bold')
        break
      
      case 'italic':
        const currentStyle = activeObject.get('fontStyle')
        activeObject.set('fontStyle', currentStyle === 'italic' ? 'normal' : 'italic')
        break
      
      case 'underline':
        // Fabric.js 2.0+ uses boolean for underline
        const currentUnderline = activeObject.get('underline')
        activeObject.set('underline', !currentUnderline)
        break
      
      case 'overline':
        // Fabric.js 2.0+ uses boolean for overline
        const currentOverline = activeObject.get('overline')
        activeObject.set('overline', !currentOverline)
        break
      
      case 'linethrough':
        const currentLinethrough = activeObject.get('linethrough')
        activeObject.set('linethrough', !currentLinethrough)
        break
      
      case 'shadow':
        const currentShadow = activeObject.get('shadow')
        if (currentShadow) {
          activeObject.set('shadow', null)
        } else {
          activeObject.set({
            shadow: new fabric.Shadow({
              color: 'rgba(0,0,0,0.3)',
              blur: 10,
              offsetX: 5,
              offsetY: 5
            })
          })
        }
        break
      
      case 'outline':
        const currentStroke = activeObject.get('stroke')
        if (currentStroke) {
          activeObject.set({ stroke: '', strokeWidth: 0 })
        } else {
          activeObject.set({
            stroke: '#000000',
            strokeWidth: 2,
            paintFirst: 'stroke'
          })
        }
        break
      
      case 'gradient':
        const gradient = new fabric.Gradient({
          type: 'linear',
          coords: { x1: 0, y1: 0, x2: activeObject.width || 100, y2: 0 },
          colorStops: [
            { offset: 0, color: '#667eea' },
            { offset: 0.5, color: '#764ba2' },
            { offset: 1, color: '#f093fb' }
          ]
        })
        activeObject.set('fill', gradient)
        break
    }

    canvas.renderAll()
  }

  const textStyles = [
    { id: 'heading', name: 'Heading', preview: 'H1', size: 'text-2xl', color: 'from-purple-500 to-pink-500' },
    { id: 'subheading', name: 'Subheading', preview: 'H2', size: 'text-xl', color: 'from-blue-500 to-cyan-500' },
    { id: 'body', name: 'Body Text', preview: 'Aa', size: 'text-base', color: 'from-green-500 to-emerald-500' },
    { id: 'caption', name: 'Caption', preview: 'C', size: 'text-sm', color: 'from-primary to-yellow-500' }
  ]

  const fonts = [
    { name: 'Arial', family: 'Arial', preview: 'The quick brown fox' },
    { name: 'Times New Roman', family: 'Times New Roman', preview: 'The quick brown fox' },
    { name: 'Courier New', family: 'Courier New', preview: 'The quick brown fox' },
    { name: 'Georgia', family: 'Georgia', preview: 'The quick brown fox' },
    { name: 'Verdana', family: 'Verdana', preview: 'The quick brown fox' },
    { name: 'Helvetica', family: 'Helvetica', preview: 'The quick brown fox' },
    { name: 'Trebuchet MS', family: 'Trebuchet MS', preview: 'The quick brown fox' },
    { name: 'Comic Sans MS', family: 'Comic Sans MS', preview: 'The quick brown fox' },
    { name: 'Impact', family: 'Impact', preview: 'The quick brown fox' },
    { name: 'Lucida Console', family: 'Lucida Console', preview: 'The quick brown fox' },
    { name: 'Palatino', family: 'Palatino', preview: 'The quick brown fox' },
    { name: 'Garamond', family: 'Garamond', preview: 'The quick brown fox' }
  ]

  const effects = [
    { id: 'bold', name: 'Bold', icon: 'B', color: 'bg-border' },
    { id: 'italic', name: 'Italic', icon: 'I', color: 'bg-muted-foreground' },
    { id: 'underline', name: 'Underline', icon: 'U̲', color: 'bg-blue-600' },
    { id: 'overline', name: 'Overline', icon: 'Ō', color: 'bg-cyan-600' },
    { id: 'linethrough', name: 'Strike', icon: 'S̶', color: 'bg-destructive' },
    { id: 'shadow', name: 'Shadow', icon: '✨', color: 'bg-gray-700' },
    { id: 'outline', name: 'Outline', icon: '⬚', color: 'bg-indigo-600' },
    { id: 'gradient', name: 'Gradient', icon: '🌈', color: 'bg-gradient-to-r from-purple-600 to-pink-600' }
  ]

  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="font-semibold text-slate-800 mb-3 text-sm">Text Styles</h3>
        <div className="grid grid-cols-2 gap-3">
          {textStyles.map((style) => (
            <button 
              key={style.id} 
              className="p-4 bg-white rounded-xl hover:shadow-md transition-all duration-200 border-2 border-slate-200 hover:border-slate-300"
              onClick={() => addText(style.id)}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${style.color} flex items-center justify-center text-white font-bold ${style.size}`}>
                  {style.preview}
                </div>
                <div className="text-xs text-muted-foreground font-medium">{style.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-slate-800 mb-3 text-sm">Fonts</h3>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {fonts.map((font) => (
            <button 
              key={font.name}
              className="w-full p-3 text-left bg-white rounded-lg hover:bg-slate-50 transition-colors duration-200 border border-slate-200 hover:border-slate-300 shadow-sm"
              onClick={() => changeFontFamily(font.family)}
            >
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-800">{font.name}</span>
                <span className="text-xs text-muted-foreground" style={{ fontFamily: font.family }}>{font.preview}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-slate-800 mb-3 text-sm">Text Effects</h3>
        <div className="grid grid-cols-2 gap-2">
          {effects.map((effect) => (
            <button 
              key={effect.id}
              className={`p-3 rounded-lg text-white hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg flex flex-col items-center justify-center space-y-1 ${effect.color}`}
              onClick={() => applyTextEffect(effect.id)}
            >
              <span className="text-lg font-bold">{effect.icon}</span>
              <span className="text-xs font-medium">{effect.name}</span>
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-2">Select text first, then click effect to toggle</p>
      </div>
    </div>
  )
}