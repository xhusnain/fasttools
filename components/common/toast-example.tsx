"use client"

import { useToast } from "@/ui/gtoast"


export function ToastExample() {
  const { showToast, ToastContainer } = useToast()

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">GToast Examples</h2>
      
      <div className="space-x-2">
        <button 
          onClick={() => showToast("success", "Operation completed successfully!")}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary"
        >
          Success GToast (Orange with White Text)
        </button>
        
        <button 
          onClick={() => showToast("warning", "This is a warning message!")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Warning GToast (Blue with White Text)
        </button>
        
        <button 
          onClick={() => showToast("error", "An error occurred!")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-destructive"
        >
          Error GToast (Red with White Text)
        </button>
        
        <button 
          onClick={() => showToast("info", "Here's some information!")}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Info GToast (Gray with White Text)
        </button>
      </div>
      
      <ToastContainer />
    </div>
  )
}
