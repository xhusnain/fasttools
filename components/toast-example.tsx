"use client"

import { useToast } from "@/components/ui/toast"

export function ToastExample() {
  const { showToast, ToastContainer } = useToast()

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Toast Examples</h2>
      
      <div className="space-x-2">
        <button 
          onClick={() => showToast("success", "Operation completed successfully!")}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Success Toast (Orange with White Text)
        </button>
        
        <button 
          onClick={() => showToast("warning", "This is a warning message!")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Warning Toast (Blue with White Text)
        </button>
        
        <button 
          onClick={() => showToast("error", "An error occurred!")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Error Toast (Red with White Text)
        </button>
        
        <button 
          onClick={() => showToast("info", "Here's some information!")}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Info Toast (Gray with White Text)
        </button>
      </div>
      
      <ToastContainer />
    </div>
  )
}
