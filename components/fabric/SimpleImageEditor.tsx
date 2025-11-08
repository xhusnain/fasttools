"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, Download, RotateCcw, Square, Circle, Type, Image as ImageIcon } from "lucide-react"

export function SimpleImageEditor() {
  const [canvas, setCanvas] = useState<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const initCanvas = async () => {
      if (!canvasRef.current) return

      try {

        const fabricModule = await import('fabric')
        const fabric = fabricModule.fabric || fabricModule.default || fabricModule

        if (!fabric || !fabric.Canvas) {
          throw new Error('Fabric.js not available')
        }

        const fabricCanvas = new fabric.Canvas(canvasRef.current, {
          width: 800,
          height: 600,
          backgroundColor: '#ffffff'
        })

        setCanvas(fabricCanvas)
        setIsLoaded(true)

        const rect = new fabric.Rect({
          left: 100,
          top: 100,
          width: 100,
          height: 100,
          fill: 'red'
        })
        fabricCanvas.add(rect)

        const text = new fabric.IText('Hello World', {
          left: 250,
          top: 100,
          fontSize: 20,
          fill: 'blue'
        })
        fabricCanvas.add(text)

        fabricCanvas.renderAll()

      } catch (error) {
        console.error('Failed to initialize canvas:', error)
        setIsLoaded(true)
      }
    }

    initCanvas()

    return () => {
      if (canvas) {
        canvas.dispose()
      }
    }
  }, [])

  const addShape = async (shapeType: string) => {
    if (!canvas) return

    try {
      const fabricModule = await import('fabric')
      const fabric = fabricModule.fabric || fabricModule.default || fabricModule

      let shape: any
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]

      if (shapeType === 'rectangle') {
        shape = new fabric.Rect({
          left: Math.random() * 400 + 100,
          top: Math.random() * 300 + 100,
          width: 100,
          height: 80,
          fill: randomColor
        })
      } else if (shapeType === 'circle') {
        shape = new fabric.Circle({
          left: Math.random() * 400 + 100,
          top: Math.random() * 300 + 100,
          radius: 50,
          fill: randomColor
        })
      }

      if (shape) {
        canvas.add(shape)
        canvas.renderAll()
      }

    } catch (error) {
      console.error('Failed to add shape:', error)
    }
  }

  const addText = async () => {
    if (!canvas) return

    try {
      const fabricModule = await import('fabric')
      const fabric = fabricModule.fabric || fabricModule.default || fabricModule

      const text = new fabric.IText('New Text', {
        left: Math.random() * 400 + 100,
        top: Math.random() * 300 + 100,
        fontSize: 20,
        fill: 'black'
      })

      canvas.add(text)
      canvas.renderAll()

    } catch (error) {
      console.error('Failed to add text:', error)
    }
  }

  const uploadImage = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file && canvas) {
        try {
          const fabricModule = await import('fabric')
          const fabric = fabricModule.fabric || fabricModule.default || fabricModule

          const imageUrl = URL.createObjectURL(file)
          fabric.Image.fromURL(imageUrl, (img: any) => {
            if (img) {

              const scale = Math.min(400 / img.width, 300 / img.height, 1)
              img.set({
                scaleX: scale,
                scaleY: scale,
                left: 200,
                top: 150
              })
              canvas.add(img)
              canvas.renderAll()
            }
          })
        } catch (error) {
          console.error('Failed to upload image:', error)
        }
      }
    }
    input.click()
  }

  const downloadImage = () => {
    if (!canvas) return

    try {
      const dataURL = canvas.toDataURL({
        format: 'png',
        quality: 1
      })

      const link = document.createElement('a')
      link.download = 'image.png'
      link.href = dataURL
      link.click()
    } catch (error) {
      console.error('Failed to download:', error)
    }
  }

  const resetCanvas = () => {
    if (!canvas) return

    try {
      canvas.clear()
      canvas.renderAll()
    } catch (error) {
      console.error('Failed to reset:', error)
    }
  }

  return (
    <div className="h-screen flex bg-slate-50">
      {}
      <div className="w-64 bg-white border-r border-slate-200 p-4">
        <h2 className="text-lg font-semibold mb-4">Tools</h2>

        <div className="space-y-3">
          <Button
            onClick={uploadImage}
            className="w-full justify-start"
            variant="outline"
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload Image
          </Button>

          <Button
            onClick={() => addShape('rectangle')}
            className="w-full justify-start"
            variant="outline"
          >
            <Square className="w-4 h-4 mr-2" />
            Add Rectangle
          </Button>

          <Button
            onClick={() => addShape('circle')}
            className="w-full justify-start"
            variant="outline"
          >
            <Circle className="w-4 h-4 mr-2" />
            Add Circle
          </Button>

          <Button
            onClick={addText}
            className="w-full justify-start"
            variant="outline"
          >
            <Type className="w-4 h-4 mr-2" />
            Add Text
          </Button>

          <div className="border-t pt-3">
            <Button
              onClick={downloadImage}
              className="w-full justify-start"
              variant="default"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>

            <Button
              onClick={resetCanvas}
              className="w-full justify-start mt-2"
              variant="outline"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </div>

      {}
      <div className="flex-1 p-6">
        <div className="h-full flex items-center justify-center">
          <Card className="p-4">
            <canvas
              ref={canvasRef}
              className="border border-slate-200 rounded-lg"
              style={{ maxWidth: '100%', maxHeight: '80vh' }}
            />
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                  <p className="text-sm text-gray-600">Loading Canvas...</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
