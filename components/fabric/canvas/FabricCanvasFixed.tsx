"use client"

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { getFabric } from '@/lib/fabric'

interface FabricCanvasProps {
  onCanvasReady: (canvas: any) => void
  width: number
  height: number
}

export function FabricCanvasFixed({ onCanvasReady, width, height }: FabricCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fabricCanvasRef = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const isInitializedRef = useRef(false)
  const isInitializingRef = useRef(false)

  const disposeCanvas = useCallback(() => {
    if (fabricCanvasRef.current) {
      try {
        fabricCanvasRef.current.dispose()
        fabricCanvasRef.current = null
      } catch (error) {
        console.error('Error disposing canvas:', error)
      }
    }
  }, [])

  const initializeCanvas = useCallback(async () => {
    if (!canvasRef.current || isInitializedRef.current || isInitializingRef.current) {
      return
    }

    isInitializingRef.current = true

    try {

      disposeCanvas()

      await new Promise(resolve => setTimeout(resolve, 200))

      const fabric = await getFabric()
      if (!fabric || !fabric.Canvas) {
        throw new Error('Fabric.js not available')
      }

      let canvasElement = canvasRef.current

      if (canvasElement.fabric) {

        const newCanvas = document.createElement('canvas')
        newCanvas.width = width
        newCanvas.height = height
        newCanvas.className = canvasElement.className
        newCanvas.style.cssText = canvasElement.style.cssText

        if (canvasElement.parentNode) {
          canvasElement.parentNode.replaceChild(newCanvas, canvasElement)
          canvasRef.current = newCanvas
          canvasElement = newCanvas
        }
      }

      const fabricCanvas = new fabric.Canvas(canvasElement, {
        width: width,
        height: height,
        backgroundColor: '#ffffff',
        selection: true,
        preserveObjectStacking: true,
        renderOnAddRemove: false,
        skipTargetFind: false
      })

      fabricCanvasRef.current = fabricCanvas
      isInitializedRef.current = true

      onCanvasReady(fabricCanvas)
      setIsLoaded(true)

      const testRect = new fabric.Rect({
        left: 50,
        top: 50,
        width: 100,
        height: 100,
        fill: 'rgba(255, 0, 0, 0.3)',
        stroke: 'red',
        strokeWidth: 2,
        selectable: true,
        moveable: true
      })
      fabricCanvas.add(testRect)

      const testText = new fabric.IText('Test Text', {
        left: 200,
        top: 50,
        fontSize: 20,
        fill: 'blue',
        selectable: true,
        moveable: true
      })
      fabricCanvas.add(testText)

      fabricCanvas.renderAll()

    } catch (error) {
      console.error('Failed to initialize canvas:', error)
      isInitializedRef.current = false
      setIsLoaded(true)
    } finally {
      isInitializingRef.current = false
    }
  }, [])

  useEffect(() => {
    let mounted = true

    const init = async () => {
      if (mounted) {
        await initializeCanvas()
      }
    }

    init()

    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    if (fabricCanvasRef.current && isLoaded) {
      try {
        fabricCanvasRef.current.setWidth(width)
        fabricCanvasRef.current.setHeight(height)
        fabricCanvasRef.current.renderAll()
      } catch (error) {
        console.error('Failed to resize canvas:', error)
      }
    }
  }, [width, height, isLoaded])

  useEffect(() => {
    return () => {
      disposeCanvas()
      isInitializedRef.current = false
      isInitializingRef.current = false
    }
  }, [disposeCanvas])

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="border border-slate-200 rounded-xl shadow-lg bg-white"
        style={{
          maxWidth: '100%',
          maxHeight: '80vh',
          cursor: 'default'
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Loading Canvas...</p>
          </div>
        </div>
      )}
    </div>
  )
}
