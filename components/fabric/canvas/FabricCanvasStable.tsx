"use client"

import { getFabric } from '@/lib/fabric'

interface FabricCanvasProps {
    onCanvasReady: (canvas: any) => void
    width: number
    height: number
}

export function FabricCanvasStable({ onCanvasReady, width, height }: FabricCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const fabricCanvasRef = useRef<any>(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const isInitializedRef = useRef(false)

    useEffect(() => {
        let isMounted = true

        const initializeCanvas = async () => {
            if (isInitializedRef.current || !isMounted || !canvasRef.current) return

            isInitializedRef.current = true

            try {
                if (fabricCanvasRef.current) {
                    fabricCanvasRef.current.dispose()
                    fabricCanvasRef.current = null
                }

                const fabric = await getFabric()
                if (!fabric?.Canvas) throw new Error('Fabric.js not available')

                const fabricCanvas = new fabric.Canvas(canvasRef.current, {
                    width,
                    height,
                    backgroundColor: '#f0f0f0',
                    selection: true,
                    preserveObjectStacking: true,
                    renderOnAddRemove: true
                })

                fabricCanvasRef.current = fabricCanvas

                if (isMounted) {
                    onCanvasReady(fabricCanvas)
                    setIsLoaded(true)
                }

                fabricCanvas.renderAll()

            } catch (error) {
                console.error('Canvas initialization failed:', error)
                isInitializedRef.current = false
                if (isMounted) setIsLoaded(true)
            }
        }

        const timeoutId = setTimeout(() => {
            if (isMounted) initializeCanvas()
        }, 100)

        return () => {
            isMounted = false
            clearTimeout(timeoutId)

            if (fabricCanvasRef.current) {
                fabricCanvasRef.current.dispose()
                fabricCanvasRef.current = null
            }
            isInitializedRef.current = false
        }
    }, [onCanvasReady, width, height])

    useEffect(() => {
        if (fabricCanvasRef.current && isLoaded) {
            fabricCanvasRef.current.setWidth(width)
            fabricCanvasRef.current.setHeight(height)
            fabricCanvasRef.current.renderAll()
        }
    }, [width, height, isLoaded])

    return (
        <div className="relative inline-block">
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="border-2 border-slate-300 rounded-lg shadow-lg"
            />
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-2"></div>
                        <p className="text-sm text-gray-600">Loading Canvas...</p>
                    </div>
                </div>
            )}
        </div>
    )
}
