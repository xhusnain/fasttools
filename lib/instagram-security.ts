/**
 * Instagram API Security System
 * Simple caching and user agent rotation
 */

// Cache system
interface CacheEntry {
  data: any
  timestamp: number
  ttl: number
}

const cache = new Map<string, CacheEntry>()

// Timer-based rate limiting system
interface TimerRecord {
  startTime: number
  duration: number
  isActive: boolean
  requestId: string
}

const activeTimers = new Map<string, TimerRecord>()
const TIMER_DURATION = 30000 // 30 seconds

// Enhanced user agent rotation - 50+ different user agents
const USER_AGENTS = [
  // Chrome Windows
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  
  // Chrome macOS
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_0_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  
  // Chrome Linux
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  
  // Firefox Windows
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:118.0) Gecko/20100101 Firefox/118.0',
  'Mozilla/5.0 (Windows NT 11.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/121.0',
  
  // Firefox macOS
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:109.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 11.0; rv:109.0) Gecko/20100101 Firefox/121.0',
  
  // Firefox Linux
  'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (X11; Linux i686; rv:109.0) Gecko/20100101 Firefox/121.0',
  
  // Safari macOS
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Safari/605.1.15',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Safari/605.1.15',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15',
  
  // Edge Windows
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/120.0.0.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/119.0.0.0',
  'Mozilla/5.0 (Windows NT 11.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/120.0.0.0',
  
  // Opera
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0',
  
  // Instagram Mobile Apps
  'Instagram 85.0.0.21.100 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)',
  'Instagram 85.0.0.21.100 iPhone (iPhone14,2; iOS 17_2; Scale/3.00; 1170x2532; en_US)',
  'Instagram 84.0.0.20.100 Android (23/6.0; 480dpi; 1080x1920; samsung; SM-G920F; zeroflte; samsungexynos7420; en_US; 138226743)',
  'Instagram 84.0.0.20.100 iPhone (iPhone13,2; iOS 16_6; Scale/3.00; 1170x2532; en_US)',
  'Instagram 83.0.0.19.100 Android (22/5.1; 320dpi; 720x1280; samsung; SM-G900F; klte; qcom; en_US; 138226743)',
  'Instagram 83.0.0.19.100 iPhone (iPhone12,1; iOS 15_7; Scale/2.00; 750x1334; en_US)',
  
  // Mobile Chrome
  'Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (Linux; Android 12; SM-G998B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/120.0.6099.119 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/119.0.6045.109 Mobile/15E148 Safari/604.1',
  
  // Mobile Safari
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
  
  // Mobile Firefox
  'Mozilla/5.0 (Mobile; rv:109.0) Gecko/121.0 Firefox/121.0',
  'Mozilla/5.0 (Android 10; Mobile; rv:109.0) Gecko/121.0 Firefox/121.0',
  'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/121.0 Mobile/15E148 Safari/605.1.15',
  
  // Tablet User Agents
  'Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
  'Mozilla/5.0 (Linux; Android 10; SM-T510) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Linux; Android 11; SM-T720) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  
  // Gaming Consoles
  'Mozilla/5.0 (PlayStation 5 5.50) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15',
  'Mozilla/5.0 (Nintendo Switch; WifiWebAuthApplet) AppleWebKit/601.6 (KHTML, like Gecko) NF/4.0.0.5.10 NintendoBrowser/5.1.0.13343',
  
  // Smart TV
  'Mozilla/5.0 (SMART-TV; Linux; Tizen 2.4.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/2.4.0 TV Safari/538.1',
  'Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36 Web0S',
]

/**
 * Get random user agent
 */
export function getRandomUserAgent(): string {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
}

/**
 * Cache management
 */
export function getCachedData(key: string): any | null {
  const entry = cache.get(key)
  if (!entry) return null
  
  if (Date.now() > entry.timestamp + entry.ttl) {
    cache.delete(key)
    return null
  }
  
  return entry.data
}

export function setCachedData(key: string, data: any, ttlMs: number = 300000): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
    ttl: ttlMs
  })
}

/**
 * Timer-based rate limiting functions
 */
export function startTimer(requestId: string): { success: boolean; remainingTime?: number; message?: string } {
  const now = Date.now()
  
  // Check if there's already an active timer for this request
  const existingTimer = activeTimers.get(requestId)
  if (existingTimer && existingTimer.isActive) {
    const remainingTime = Math.max(0, existingTimer.startTime + existingTimer.duration - now)
    if (remainingTime > 0) {
      return {
        success: false,
        remainingTime: Math.ceil(remainingTime / 1000),
        message: `Please wait ${Math.ceil(remainingTime / 1000)} seconds before making another request`
      }
    }
  }
  
  // Start new timer
  activeTimers.set(requestId, {
    startTime: now,
    duration: TIMER_DURATION,
    isActive: true,
    requestId
  })
  
  return {
    success: true,
    remainingTime: TIMER_DURATION / 1000,
    message: 'Timer started successfully'
  }
}

export function checkTimer(requestId: string): { isActive: boolean; remainingTime: number; canProceed: boolean } {
  const timer = activeTimers.get(requestId)
  if (!timer) {
    return { isActive: false, remainingTime: 0, canProceed: true }
  }
  
  const now = Date.now()
  const elapsed = now - timer.startTime
  const remainingTime = Math.max(0, timer.duration - elapsed)
  
  if (remainingTime <= 0) {
    // Timer expired, mark as inactive
    timer.isActive = false
    return { isActive: false, remainingTime: 0, canProceed: true }
  }
  
  return {
    isActive: true,
    remainingTime: Math.ceil(remainingTime / 1000),
    canProceed: false
  }
}

export function endTimer(requestId: string): void {
  const timer = activeTimers.get(requestId)
  if (timer) {
    timer.isActive = false
  }
}

export function getTimerStatus(requestId: string): { isActive: boolean; remainingTime: number; progress: number } {
  const timer = activeTimers.get(requestId)
  if (!timer || !timer.isActive) {
    return { isActive: false, remainingTime: 0, progress: 100 }
  }
  
  const now = Date.now()
  const elapsed = now - timer.startTime
  const remainingTime = Math.max(0, timer.duration - elapsed)
  const progress = Math.min(100, (elapsed / timer.duration) * 100)
  
  if (remainingTime <= 0) {
    timer.isActive = false
    return { isActive: false, remainingTime: 0, progress: 100 }
  }
  
  return {
    isActive: true,
    remainingTime: Math.ceil(remainingTime / 1000),
    progress: Math.round(progress)
  }
}

/**
 * Clean up expired cache entries and timers
 */
export function cleanupCache(): void {
  const now = Date.now()
  
  // Clean up expired cache entries
  for (const [key, entry] of cache.entries()) {
    if (now > entry.timestamp + entry.ttl) {
      cache.delete(key)
    }
  }
  
  // Clean up expired timers
  for (const [requestId, timer] of activeTimers.entries()) {
    if (now > timer.startTime + timer.duration) {
      activeTimers.delete(requestId)
    }
  }
}

// Cleanup cache and timers every 5 minutes
setInterval(cleanupCache, 300000)