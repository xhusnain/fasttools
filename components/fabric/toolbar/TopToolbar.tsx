"use client"

import React, { useState, useEffect } from 'react'
import { 
  Download, 
  RotateCcw, 
  Trash2,
  Copy,
  FlipHorizontal,
  FlipVertical,
  ArrowUp,
  ArrowDown,
  ChevronsUp,
  ChevronsDown,
  Undo,
  Redo
} from "lucide-react"

interface TopToolbarProps {
  canvas: any
  onDownload: () => void
  onReset: () => void
}

export function TopToolbar({ canvas, onDownload, onReset }: TopToolbarProps) {
  const [activeObject, setActiveObject] = useState<any>(null)

  // Listen to canvas selection events to update active object
  useEffect(() => {
    if (!canvas) return

    const updateSelection = () => {
      const selected = canvas.getActiveObject()
      setActiveObject(selected || null)
    }

    // Listen to selection events
    canvas.on('selection:created', updateSelection)
    canvas.on('selection:updated', updateSelection)
    canvas.on('selection:cleared', updateSelection)

    // Initial check
    updateSelection()

    return () => {
      canvas.off('selection:created', updateSelection)
      canvas.off('selection:updated', updateSelection)
      canvas.off('selection:cleared', updateSelection)
    }
  }, [canvas])

  // Delete selected object
  const handleDelete = () => {
    if (!canvas || !activeObject) return
    canvas.remove(activeObject)
    canvas.renderAll()
  }

  // Duplicate selected object
  const handleDuplicate = () => {
    if (!canvas || !activeObject) return
    
    activeObject.clone((cloned: any) => {
      cloned.set({
        left: cloned.left + 20,
        top: cloned.top + 20
      })
      canvas.add(cloned)
      canvas.setActiveObject(cloned)
      canvas.renderAll()
    })
  }

  // Flip horizontal
  const handleFlipX = () => {
    if (!canvas || !activeObject) return
    activeObject.set({ flipX: !activeObject.flipX })
    canvas.renderAll()
  }

  // Flip vertical
  const handleFlipY = () => {
    if (!canvas || !activeObject) return
    activeObject.set({ flipY: !activeObject.flipY })
    canvas.renderAll()
  }

  // Bring to front
  const handleBringToFront = () => {
    if (!canvas || !activeObject) return
    canvas.bringToFront(activeObject)
    canvas.renderAll()
  }

  // Send to back
  const handleSendToBack = () => {
    if (!canvas || !activeObject) return
    canvas.sendToBack(activeObject)
    canvas.renderAll()
  }

  // Bring forward
  const handleBringForward = () => {
    if (!canvas || !activeObject) return
    canvas.bringForward(activeObject)
    canvas.renderAll()
  }

  // Send backward
  const handleSendBackward = () => {
    if (!canvas || !activeObject) return
    canvas.sendBackwards(activeObject)
    canvas.renderAll()
  }

  return (
    <div className="bg-slate-800 border-b border-slate-700 px-3 sm:px-6 py-2 sm:py-3 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        {/* Left side - Object controls */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button 
            onClick={handleDelete}
            disabled={!activeObject}
            className="p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Delete (Del)"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          
          <button 
            onClick={handleDuplicate}
            disabled={!activeObject}
            className="p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Duplicate (Ctrl+D)"
          >
            <Copy className="w-4 h-4" />
          </button>

          <div className="w-px h-6 bg-slate-600 mx-1"></div>

          <button 
            disabled
            className="p-1.5 sm:p-2 text-slate-300 opacity-30 cursor-not-allowed rounded-lg"
            title="Coming Soon"
          >
            <Undo className="w-4 h-4" />
          </button>

          <button 
            disabled
            className="p-1.5 sm:p-2 text-slate-300 opacity-30 cursor-not-allowed rounded-lg"
            title="Coming Soon"
          >
            <Redo className="w-4 h-4" />
          </button>

          <div className="hidden sm:block w-px h-6 bg-slate-600 mx-1"></div>

          <button 
            onClick={handleFlipX}
            disabled={!activeObject}
            className="p-1.5 sm:p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Flip Horizontal"
          >
            <FlipHorizontal className="w-4 h-4" />
          </button>
          
          <button 
            onClick={handleFlipY}
            disabled={!activeObject}
            className="hidden sm:block p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Flip Vertical"
          >
            <FlipVertical className="w-4 h-4" />
          </button>

          <div className="hidden md:block w-px h-6 bg-slate-600 mx-1"></div>

          <button 
            onClick={handleBringToFront}
            disabled={!activeObject}
            className="hidden md:block p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Bring to Front"
          >
            <ChevronsUp className="w-4 h-4" />
          </button>

          <button 
            onClick={handleBringForward}
            disabled={!activeObject}
            className="hidden md:block p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Bring Forward"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          <button 
            onClick={handleSendBackward}
            disabled={!activeObject}
            className="hidden md:block p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Send Backward"
          >
            <ArrowDown className="w-4 h-4" />
          </button>

          <button 
            onClick={handleSendToBack}
            disabled={!activeObject}
            className="hidden md:block p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Send to Back"
          >
            <ChevronsDown className="w-4 h-4" />
          </button>
        </div>

        {/* Right side - Canvas actions */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button 
            className="p-1.5 sm:px-3 sm:py-2 text-slate-200 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors flex items-center gap-1 sm:gap-2"
            onClick={onReset}
            title="Reset Canvas"
          >
            <RotateCcw className="w-4 h-4" />
            <span className="hidden sm:inline text-sm font-medium">Reset</span>
          </button>
          
          <button 
            className="p-1.5 sm:px-4 sm:py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1 sm:gap-2"
            onClick={onDownload}
            title="Download"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline text-sm font-medium">Download</span>
          </button>
        </div>
      </div>
    </div>
  )
}
