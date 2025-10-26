"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { 
  Shapes,
  Type,
  Upload,
  Brush,
  Filter,
  Settings,
  Wand2,
  ImageIcon
} from "lucide-react"

interface MainSidebarProps {
  onSidebarToggle: (sidebarType: string) => void
  activeSidebar: string | null
}

export function MainSidebar({ onSidebarToggle, activeSidebar }: MainSidebarProps) {
  const sidebarItems = [
    {
      id: 'elements',
      label: 'Elements',
      icon: Shapes,
      description: 'Shapes & graphics'
    },
    {
      id: 'text',
      label: 'Text',
      icon: Type,
      description: 'Add text & fonts'
    },
    {
      id: 'uploads',
      label: 'Uploads',
      icon: Upload,
      description: 'Images & media'
    },
    {
      id: 'draw',
      label: 'Draw',
      icon: Brush,
      description: 'Drawing tools'
    },
    {
      id: 'filters',
      label: 'Filters',
      icon: Filter,
      description: 'Image effects'
    },
    {
      id: 'adjust',
      label: 'Adjust',
      icon: Settings,
      description: 'Image adjustments'
    },
    {
      id: 'background',
      label: 'Background',
      icon: ImageIcon,
      description: 'Background tools'
    }
  ]

  return (
    <div className="w-16 bg-slate-50 border-r border-slate-200 flex flex-col items-center py-4 space-y-3">
      {sidebarItems.map((item) => {
        const Icon = item.icon
        const isActive = activeSidebar === item.id
        
        return (
          <button
            key={item.id}
            className={`w-12 h-12 p-0 flex flex-col items-center justify-center rounded-xl transition-all duration-200 ${
              isActive 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25' 
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
            }`}
            onClick={() => {
              console.log('Sidebar button clicked:', item.id)
              onSidebarToggle(item.id)
            }}
            title={item.label}
          >
            <Icon className="w-5 h-5" />
          </button>
        )
      })}
    </div>
  )
}
