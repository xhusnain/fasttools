"use client"

import { GButton } from "@/ui/gbutton"
import Link from "next/link"

export function ApiKeyGenerator() {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="text-center">
          <h3 className="text-white font-bold text-sm sm:text-base mb-2">Power Your Apps with Frankfurter</h3>
          <p className="text-white/90 text-xs sm:text-sm mb-4">Get documentation and access from the official provider</p>
          <Link href="https://frankfurter.dev/" target="_blank" rel="noopener noreferrer">
            <GButton
              className="inline-flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-50 transition-colors"
            >
              <span>Visit Frankfurter.dev</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </GButton>
          </Link>
        </div>
      </div>
    </div>
  )
}


