"use client"

import React, { useRef, useEffect, useState } from 'react'
import { getFabric } from '@/lib/fabric'

interface FabricCanvasProps {
  onCanvasReady: (canvas: any) => void
  width: number
  height: number
}

export function FabricCanvas({ onCanvasReady, width, height }: FabricCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fabricCanvasRef = useRef<any>(null)
  const isInitializedRef = useRef(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const disposeCanvas = () => {
    if (fabricCanvasRef.current) {
      try {
        console.log('Disposing canvas...')
        fabricCanvasRef.current.dispose()
        fabricCanvasRef.current = null
      } catch (error) {
        console.error('Error disposing canvas:', error)
      }
    }
    
    // Clear the canvas element completely
    if (canvasRef.current) {
      // Check if canvas has fabric property and dispose it
      if (canvasRef.current.fabric) {
        try {
          console.log('Disposing fabric from canvas element...')
          canvasRef.current.fabric.dispose()
          delete canvasRef.current.fabric
        } catch (error) {
          console.error('Error disposing fabric from canvas element:', error)
        }
      }
      
      const ctx = canvasRef.current.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      }
      // Remove all event listeners and reset the canvas
      canvasRef.current.width = canvasRef.current.width
      canvasRef.current.height = canvasRef.current.height
    }
  }

  useEffect(() => {
    let isMounted = true

    const initFabric = async () => {
      if (!canvasRef.current || !isMounted || isInitializedRef.current) return
      
      isInitializedRef.current = true

      try {
        console.log('=== FABRIC.JS INITIALIZATION START ===')
        
        // Dispose existing canvas if it exists
        disposeCanvas()
        
        // Wait a bit to ensure cleanup is complete
        await new Promise(resolve => setTimeout(resolve, 100))
        
        // Double check canvas element is clean
        if (!canvasRef.current) {
          console.error('Canvas element is null after disposal')
          return
        }
        
        // Get Fabric.js instance
        console.log('Loading Fabric.js...')
        const fabric = await getFabric()
        console.log('Fabric.js loaded:', fabric)
        
        if (!fabric || !fabric.Canvas) {
          throw new Error('Fabric.js Canvas not available')
        }
        
        // Check if canvas is already initialized by Fabric.js
        if (canvasRef.current.fabric) {
          console.log('Canvas already has fabric property, disposing first...')
          try {
            canvasRef.current.fabric.dispose()
            delete canvasRef.current.fabric
          } catch (e) {
            console.log('Error disposing existing fabric:', e)
          }
        }
        
        // Create new canvas instance
        console.log('Creating Fabric canvas...')
        const canvas = new fabric.Canvas(canvasRef.current, {
          width: width,
          height: height,
          backgroundColor: '#ffffff',
          selection: true,
          preserveObjectStacking: true,
          renderOnAddRemove: false,
          skipTargetFind: false,
          hoverCursor: 'move',
          moveCursor: 'move',
          defaultCursor: 'default'
        })

        console.log('Fabric canvas created successfully:', canvas)
        
        // Store canvas reference
        fabricCanvasRef.current = canvas
        
        // Notify parent component
        if (isMounted) {
          onCanvasReady(canvas)
          setIsLoaded(true)
        }

        // Add test objects
        console.log('Adding test objects...')
        
        // Add a test rectangle
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
        canvas.add(testRect)

        // Add test text
        const testText = new fabric.IText('Test Text', {
          left: 200,
          top: 50,
          fontSize: 20,
          fill: 'blue',
          selectable: true,
          moveable: true
        })
        canvas.add(testText)

        // Render the canvas once
        canvas.renderAll()
        
        console.log('Canvas objects count:', canvas.getObjects().length)
        console.log('=== FABRIC.JS INITIALIZATION COMPLETE ===')

      } catch (error) {
        console.error('Failed to initialize Fabric.js:', error)
        isInitializedRef.current = false // Reset on error
        if (isMounted) {
          setIsLoaded(true)
        }
      }
    }

    // Initialize Fabric.js
    initFabric()

    // Cleanup function
    return () => {
      isMounted = false
      disposeCanvas()
      isInitializedRef.current = false
    }
  }, []) // Remove all dependencies to prevent re-initialization

  // Handle width and height changes
  useEffect(() => {
    if (fabricCanvasRef.current && isLoaded) {
      try {
        fabricCanvasRef.current.setWidth(width)
        fabricCanvasRef.current.setHeight(height)
        fabricCanvasRef.current.renderAll()
        console.log('Canvas resized to:', width, 'x', height)
      } catch (error) {
        console.error('Failed to resize canvas:', error)
      }
    }
  }, [width, height, isLoaded])

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