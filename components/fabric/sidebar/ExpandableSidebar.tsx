"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, ChevronRight } from "lucide-react"
// Import specific sidebar panels
import { ElementsPanel } from './panels/ElementsPanel'
import { TextPanel } from './panels/TextPanel'
import { UploadsPanel } from './panels/UploadsPanel'
import { DrawPanel } from './panels/DrawPanel'
import { FiltersPanel } from './panels/FiltersPanel'
import {
  AdjustPanel,
  BackgroundPanel
} from './panels/RemainingPanels'

interface ExpandableSidebarProps {
  sidebarType: string
  canvas: any
  onClose: () => void
}

export function ExpandableSidebar({ sidebarType, canvas, onClose }: ExpandableSidebarProps) {
  const sidebarTitles = {
    elements: 'Elements',
    text: 'Text',
    uploads: 'Uploads',
    draw: 'Draw',
    filters: 'Filters',
    adjust: 'Adjust',
    background: 'Background'
  }

  const renderPanel = () => {
    switch (sidebarType) {
      case 'elements':
        return <ElementsPanel canvas={canvas} />
      case 'text':
        return <TextPanel canvas={canvas} />
      case 'uploads':
        return <UploadsPanel canvas={canvas} />
      case 'draw':
        return <DrawPanel canvas={canvas} />
      case 'filters':
        return <FiltersPanel canvas={canvas} />
      case 'adjust':
        return <AdjustPanel canvas={canvas} />
      case 'background':
        return <BackgroundPanel canvas={canvas} />
      default:
        return <div>Panel not found</div>
    }
  }

  return (
    <div className="w-80 bg-white border-r border-slate-200 flex flex-col shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50">
        <h2 className="text-lg font-semibold text-slate-800">
          {sidebarTitles[sidebarType as keyof typeof sidebarTitles]}
        </h2>
        <button
          onClick={onClose}
          className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Panel Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        {renderPanel()}
      </div>
    </div>
  )
}
