"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { FabricCanvasStable as FabricCanvas } from './canvas/FabricCanvasStable'
import { MainSidebar } from './sidebar/MainSidebar'
import { ExpandableSidebar } from './sidebar/ExpandableSidebar'
import { TopToolbar } from './toolbar/TopToolbar'

export function FabricImageEditorClient() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [activeSidebar, setActiveSidebar] = useState<string | null>(null)
  const [canvas, setCanvas] = useState<any>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [isToggling, setIsToggling] = useState(false)
  const [canvasKey, setCanvasKey] = useState(0)
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 })
  

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Calculate responsive canvas size
  useEffect(() => {
    const calculateCanvasSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      // Reserve space for sidebars and padding
      const sidebarWidth = isSidebarExpanded ? 360 : 80
      const toolbarHeight = 60
      const padding = 48
      
      const availableWidth = width - sidebarWidth - padding
      const availableHeight = height - toolbarHeight - padding
      
      // Calculate canvas size maintaining aspect ratio
      let canvasWidth = Math.min(availableWidth, 1400)
      let canvasHeight = Math.min(availableHeight, 900)
      
      // Mobile adjustments
      if (width < 768) {
        canvasWidth = width - 32
        canvasHeight = height - toolbarHeight - 32
      }
      
      setCanvasSize({ 
        width: Math.max(canvasWidth, 320), 
        height: Math.max(canvasHeight, 400) 
      })
    }

    calculateCanvasSize()
    window.addEventListener('resize', calculateCanvasSize)
    
    return () => window.removeEventListener('resize', calculateCanvasSize)
  }, [isSidebarExpanded])


  // Keyboard shortcuts
  useEffect(() => {
    if (!canvas) return

    const handleKeyDown = (e: KeyboardEvent) => {
      const activeObject = canvas.getActiveObject()
      
      // Check if user is editing text - if so, don't intercept keyboard shortcuts
      const isEditingText = activeObject && 
        (activeObject.type === 'i-text' || activeObject.type === 'text' || activeObject.type === 'textbox') && 
        activeObject.isEditing

      // If editing text, allow all default text editing behavior
      if (isEditingText) {
        return
      }

      if (!activeObject) return

      // Delete (Del or Backspace) - only when not editing text
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault()
        canvas.remove(activeObject)
        canvas.renderAll()
      }

      // Duplicate (Ctrl+D or Cmd+D)
      if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault()
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
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [canvas])

  const setCanvasInstance = useCallback((canvasInstance: any) => {
    setCanvas(canvasInstance)
  }, [])

  const resetCanvas = useCallback(() => {
    if (canvas) {
      try {
        canvas.dispose()
      } catch (error) {
        console.error('Failed to reset canvas:', error)
      }
    }
    setCanvas(null)
    setCanvasKey(prev => prev + 1)
  }, [canvas])

  const handleSidebarToggle = useCallback((sidebarType: string) => {
    if (isToggling) return
    
    setIsToggling(true)
    
    if (activeSidebar === sidebarType) {
      setIsSidebarExpanded(false)
      setTimeout(() => {
        setActiveSidebar(null)
        setIsToggling(false)
      }, 300)
    } else {
      if (activeSidebar === null) {
        setIsSidebarExpanded(true)
      }
      setActiveSidebar(sidebarType)
      setTimeout(() => {
        setIsToggling(false)
      }, 300)
    }
  }, [activeSidebar, isToggling])

  const downloadCanvas = useCallback(() => {
    if (!canvas) return

    try {
      const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1,
        multiplier: 2
      })

      const link = document.createElement('a')
      link.download = `design-${Date.now()}.png`
      link.href = dataURL
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Failed to download canvas:', error)
    }
  }, [canvas])

  if (!isMounted) {
    return null
  }

  return (
    <div className="flex flex-col h-screen bg-slate-100">
      {/* Top Toolbar */}
      <TopToolbar 
        canvas={canvas}
        onDownload={downloadCanvas}
        onReset={resetCanvas}
      />

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Sidebar */}
        <MainSidebar 
          onSidebarToggle={handleSidebarToggle}
          activeSidebar={activeSidebar}
        />

        {/* Expandable Sidebar */}
        {isSidebarExpanded && activeSidebar && (
          <ExpandableSidebar 
            sidebarType={activeSidebar}
            canvas={canvas}
            onClose={() => {
              setIsSidebarExpanded(false)
              setTimeout(() => setActiveSidebar(null), 300)
            }}
          />
        )}

        {/* Canvas Area */}
        <div className="flex-1 flex items-center justify-center p-6 overflow-auto">
          <FabricCanvas 
            key={canvasKey}
            onCanvasReady={setCanvasInstance}
            width={canvasSize.width}
            height={canvasSize.height}
          />
        </div>
      </div>
    </div>
  )
}
