"use client"

import { ReactNode, useEffect } from "react"

interface ChristmasThemeProps {
  children: ReactNode
}

/**
 * ChristmasTheme - A wrapper component that applies a festive Christmas theme
 * This overrides the default dark/light theme for any page wrapped with it.
 * 
 * Usage:
 * <ChristmasTheme>
 *   <YourComponent />
 * </ChristmasTheme>
 */
export function ChristmasTheme({ children }: ChristmasThemeProps) {
  // Force remove dark class and apply christmas theme on mount
  useEffect(() => {
    // Store original theme state
    const html = document.documentElement
    const originalClass = html.classList.contains('dark')

    // Remove dark class to use our custom theme
    html.classList.remove('dark')

    // Add christmas theme class
    html.classList.add('christmas-theme')

    // Cleanup on unmount - restore original theme
    return () => {
      html.classList.remove('christmas-theme')
      if (originalClass) {
        html.classList.add('dark')
      }
    }
  }, [])

  return (
    <div className="christmas-wrapper">
      {/* Decorative Trees - Left */}
      <div className="fixed left-0 bottom-0 pointer-events-none z-0 opacity-20 hidden lg:block" aria-hidden="true">
        <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,10 20,150 40,150 10,250 60,250 60,290 140,290 140,250 190,250 160,150 180,150" fill="#166534" />
          <rect x="80" y="250" width="40" height="50" fill="#7c2d12" />
          <circle cx="60" cy="100" r="6" fill="#fbbf24" />
          <circle cx="130" cy="120" r="5" fill="#ef4444" />
          <circle cx="90" cy="160" r="7" fill="#f59e0b" />
          <circle cx="110" cy="200" r="5" fill="#22c55e" />
        </svg>
      </div>

      {/* Decorative Trees - Right */}
      <div className="fixed right-0 bottom-0 pointer-events-none z-0 opacity-20 hidden lg:block" aria-hidden="true">
        <svg width="150" height="250" viewBox="0 0 150 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="75,10 15,120 30,120 5,200 45,200 45,240 105,240 105,200 145,200 120,120 135,120" fill="#166534" />
          <rect x="60" y="200" width="30" height="50" fill="#7c2d12" />
          <circle cx="50" cy="80" r="5" fill="#ef4444" />
          <circle cx="95" cy="100" r="4" fill="#fbbf24" />
          <circle cx="70" cy="140" r="6" fill="#22c55e" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Inline Styles for Christmas Theme */}
      <style jsx global>{`
        /* Christmas Theme Variables - Override default theme */
        .christmas-theme,
        .christmas-theme body,
        .christmas-wrapper {
          --background: #0c1810;
          --foreground: #ffffff;
          --card: rgba(20, 40, 30, 0.85);
          --card-foreground: #ffffff;
          --popover: #143021;
          --popover-foreground: #ffffff;
          --primary: #dc2626;
          --primary-foreground: #ffffff;
          --secondary: rgba(22, 101, 52, 0.5);
          --secondary-foreground: #ffffff;
          --muted: rgba(34, 60, 45, 0.6);
          --muted-foreground: #d1d5db;
          --accent: #fbbf24;
          --accent-foreground: #000000;
          --destructive: #ef4444;
          --destructive-foreground: #ffffff;
          --heading-accent: #16a34a;
          --heading-accent-foreground: #ffffff;
          --hero-title: #fbbf24;
          --hero-title-hover: #f59e0b;
          --hero-description: #d1fae5;
          --border: rgba(250, 204, 21, 0.3);
          --input: rgba(22, 101, 52, 0.4);
          --ring: #fbbf24;
          --link: #fbbf24;
          --link-hover: #f59e0b;
        }

        .christmas-wrapper {
          min-height: 100vh;
          background: linear-gradient(
            180deg,
            #0c1810 0%,
            #132518 25%,
            #1a2e1f 50%,
            #1e3326 75%,
            #0c1810 100%
          );
          position: relative;
        }

        /* Override dark class styles when in christmas theme */
        .christmas-theme .bg-background {
          background: transparent !important;
        }

        .christmas-theme .bg-card {
          background: var(--card) !important;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(250, 204, 21, 0.2) !important;
        }

        .christmas-theme .border-border {
          border-color: rgba(250, 204, 21, 0.25) !important;
        }

        .christmas-theme .text-foreground {
          color: #ffffff !important;
        }

        .christmas-theme .text-muted-foreground {
          color: #d1fae5 !important;
        }

        /* Button styling */
        .christmas-theme .bg-primary {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%) !important;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.3);
        }

        .christmas-theme .bg-primary:hover {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
        }

        /* Heading styles */
        .christmas-theme h1,
        .christmas-theme h2,
        .christmas-theme h3 {
          color: #ffffff !important;
        }

        .christmas-theme h1 {
          text-shadow: 0 0 30px rgba(251, 191, 36, 0.3);
        }

        /* Card hover effects */
        .christmas-theme .bg-card:hover {
          border-color: rgba(250, 204, 21, 0.4) !important;
          box-shadow: 0 8px 32px rgba(220, 38, 38, 0.15);
        }

        /* Input styling */
        .christmas-theme input,
        .christmas-theme textarea {
          background: rgba(22, 101, 52, 0.3) !important;
          border-color: rgba(250, 204, 21, 0.3) !important;
          color: #ffffff !important;
        }

        .christmas-theme input::placeholder,
        .christmas-theme textarea::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }

        .christmas-theme input:focus,
        .christmas-theme textarea:focus {
          border-color: #fbbf24 !important;
          box-shadow: 0 0 0 2px rgba(251, 191, 36, 0.2) !important;
        }

        /* Snowflake animation */
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .snowflake {
          animation: snowfall linear infinite;
        }

        /* Festive scrollbar */
        .christmas-wrapper::-webkit-scrollbar {
          width: 8px;
        }

        .christmas-wrapper::-webkit-scrollbar-track {
          background: #132518;
        }

        .christmas-wrapper::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #dc2626 0%, #16a34a 100%);
          border-radius: 4px;
        }

        .christmas-wrapper::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ef4444 0%, #22c55e 100%);
        }

        /* Section backgrounds */
        .christmas-theme section.bg-card {
          background: rgba(20, 40, 30, 0.8) !important;
          border: 1px solid rgba(250, 204, 21, 0.2) !important;
        }

        /* Icon colors */
        .christmas-theme .text-primary {
          color: #dc2626 !important;
        }

        .christmas-theme .bg-primary\\/10,
        .christmas-theme .bg-primary\\/20 {
          background: rgba(220, 38, 38, 0.2) !important;
        }

        /* Override muted backgrounds */
        .christmas-theme .bg-muted\\/50 {
          background: rgba(22, 101, 52, 0.3) !important;
        }

        /* Links */
        .christmas-theme a {
          color: #fbbf24;
        }

        .christmas-theme a:hover {
          color: #f59e0b;
        }

        /* Gradient text */
        .christmas-theme .text-hero-title {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #fbbf24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Gold star decorations for headers */
        .christmas-theme h2::before {
          content: '✦ ';
          color: #fbbf24;
          font-size: 0.8em;
        }
      `}</style>
    </div>
  )
}

export default ChristmasTheme
