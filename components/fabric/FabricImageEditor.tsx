"use client"

import { MainSidebar } from './sidebar/MainSidebar'
import { ExpandableSidebar } from './sidebar/ExpandableSidebar'
import { FabricCanvas } from './canvas/FabricCanvas'
import { TopToolbar } from './toolbar/TopToolbar'

export function FabricImageEditor() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)
  const [activeSidebar, setActiveSidebar] = useState<string | null>(null)
  const [canvas, setCanvasState] = useState<any>(null)

  const setCanvas = (canvasInstance: any) => {
    setCanvasState(canvasInstance)
  }
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSidebarToggle = (sidebarType: string) => {
    if (activeSidebar === sidebarType) {
      setActiveSidebar(null)
      setIsSidebarExpanded(false)
    } else {
      setActiveSidebar(sidebarType)
      setIsSidebarExpanded(true)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file || !canvas) {
      return
    }

    try {
      const fabricModule = await import('fabric')
      const { Image } = fabricModule

      if (!Image) {
        console.error('Fabric.js Image not available')
        return
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string

        Image.fromURL(imageUrl, (img: any) => {
          if (img) {

            const canvasWidth = canvas.getWidth()
            const canvasHeight = canvas.getHeight()
            const imgAspectRatio = img.width! / img.height!
            const canvasAspectRatio = canvasWidth / canvasHeight

            let scale = 1
            if (imgAspectRatio > canvasAspectRatio) {
              scale = canvasWidth / img.width!
            } else {
              scale = canvasHeight / img.height!
            }

            img.scale(scale * 0.8)
            img.set({
              left: canvasWidth / 2,
              top: canvasHeight / 2,
              originX: 'center',
              originY: 'center'
            })

            canvas.add(img)
            canvas.setActiveObject(img)
            canvas.renderAll()
          }
        })
      }
      reader.readAsDataURL(file)
    } catch (error) {
      console.error('Failed to load Fabric.js:', error)
    }
  }

  const downloadImage = () => {
    if (!canvas) return

    const link = document.createElement("a")
    link.download = "edited-image.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  const resetCanvas = () => {
    if (!canvas) return
    canvas.clear()
    canvas.renderAll()
  }

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {}
      <TopToolbar
        onDownload={downloadImage}
        onReset={resetCanvas}
        isProcessing={isProcessing}
      />

      {}
      <div className="flex-1 flex overflow-hidden">
        {}
        <div className="flex">
          {}
          <MainSidebar
            onSidebarToggle={handleSidebarToggle}
            activeSidebar={activeSidebar}
          />

          {}
          {isSidebarExpanded && activeSidebar && (
            <ExpandableSidebar
              sidebarType={activeSidebar}
              canvas={canvas}
              onClose={() => {
                setActiveSidebar(null)
                setIsSidebarExpanded(false)
              }}
            />
          )}
        </div>

        {}
        <div className="flex-1 flex flex-col items-center justify-center p-6 bg-white">
          <FabricCanvas
            onCanvasReady={setCanvas}
            width={1400}
            height={900}
          />
        </div>
      </div>
    </div>
  )
}
