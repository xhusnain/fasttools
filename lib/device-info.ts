/**
 * Device Information - Gathers browser, screen, and system info client-side.
 * Used by Device Information tool and LocationInfo (My Info).
 */

export interface DeviceInfo {
  screen: {
    screenSize: string
    orientation: string
    orientationAngle: string
    colorDepth: string
    pixelRatio: string
    windowSize: string
  }
  device: {
    browserVendor: string
    browserName: string
    languages: string
    platform: string
    userAgent: string
    osName: string
    hardwareConcurrency?: number
    deviceMemory?: number
    timeZone?: string
    gpuRenderer?: string
    connectionType?: string
    batteryLevel?: number
    isCharging?: boolean
  }
}

/**
 * Detect browser name from user agent.
 */
function getBrowserName(ua: string): string {
  if (ua.indexOf("Firefox") > -1) return "Mozilla Firefox"
  if (ua.indexOf("SamsungBrowser") > -1) return "Samsung Internet"
  if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) return "Opera"
  if (ua.indexOf("Trident") > -1) return "Microsoft Internet Explorer"
  if (ua.indexOf("Edg") > -1 || ua.indexOf("Edge") > -1) return "Microsoft Edge"
  if (ua.indexOf("Chrome") > -1) return "Google Chrome"
  if (ua.indexOf("Safari") > -1) return "Apple Safari"
  return "Unknown"
}

/**
 * Detect OS from user agent.
 */
function getOsName(ua: string): string {
  if (ua.indexOf("Win") !== -1) return "Windows"
  if (ua.indexOf("Mac") !== -1) return "MacOS"
  if (ua.indexOf("X11") !== -1) return "UNIX"
  if (ua.indexOf("Linux") !== -1) return "Linux"
  if (ua.indexOf("Android") !== -1) return "Android"
  if (ua.indexOf("like Mac") !== -1) return "iOS"
  return "Unknown OS"
}

/**
 * Get orientation type (e.g. landscape-primary, portrait-primary).
 */
function getOrientation(): string {
  if (typeof screen === "undefined" || !screen.orientation) {
    return window.innerWidth > window.innerHeight ? "landscape-primary" : "portrait-primary"
  }
  return (screen.orientation as { type?: string }).type || "unknown"
}

/**
 * Get orientation angle in degrees.
 */
function getOrientationAngle(): string {
  if (typeof screen === "undefined" || !screen.orientation) return "0"
  const angle = (screen.orientation as { angle?: number }).angle
  return angle != null ? `${angle}°` : "0°"
}

/**
 * Get full device information. Runs in browser only.
 * Async to support battery API when available.
 */
export async function getDeviceInfo(): Promise<DeviceInfo> {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : ""
  const nav = typeof navigator !== "undefined" ? navigator : ({} as Navigator)

  // Screen
  const sw = typeof screen !== "undefined" ? screen.width : 0
  const sh = typeof screen !== "undefined" ? screen.height : 0
  const cd = typeof screen !== "undefined" ? screen.colorDepth : 24
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio ?? 1 : 1
  const iw = typeof window !== "undefined" ? window.innerWidth : 0
  const ih = typeof window !== "undefined" ? window.innerHeight : 0

  let batteryLevel: number | undefined
  let isCharging: boolean | undefined
  try {
    const bat = (navigator as Navigator & { getBattery?(): Promise<{ level: number; charging: boolean }> }).getBattery
    if (typeof bat === "function") {
      const b = await bat()
      batteryLevel = b.level * 100
      isCharging = b.charging
    }
  } catch {
    /* ignore */
  }

  return {
    screen: {
      screenSize: `${sw} x ${sh}`,
      orientation: getOrientation(),
      orientationAngle: getOrientationAngle(),
      colorDepth: `${cd} bits`,
      pixelRatio: `${dpr} dppx`,
      windowSize: `${iw} x ${ih}`,
    },
    device: {
      browserVendor: (nav as { vendor?: string }).vendor || "Unknown",
      browserName: getBrowserName(ua),
      languages:
        Array.isArray((nav as unknown as { languages?: string[] }).languages)
          ? (nav as unknown as { languages: string[] }).languages.join(", ")
          : (nav as { language?: string }).language || "Unknown",
      platform: (nav as { platform?: string }).platform || "Unknown",
      userAgent: ua || "N/A",
      osName: getOsName(ua),
      hardwareConcurrency: (nav as { hardwareConcurrency?: number }).hardwareConcurrency,
      deviceMemory: (nav as { deviceMemory?: number }).deviceMemory,
      timeZone:
        typeof Intl !== "undefined"
          ? Intl.DateTimeFormat().resolvedOptions().timeZone
          : undefined,
      gpuRenderer: getGpuRenderer(),
      connectionType: getConnectionType(),
      batteryLevel,
      isCharging,
    },
  }
}

function getGpuRenderer(): string | undefined {
  try {
    if (typeof document === "undefined") return undefined
    const canvas = document.createElement("canvas")
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    if (!gl) return undefined
    const debug = (gl as WebGLRenderingContext & { getExtension?(name: string): unknown }).getExtension?.(
      "WEBGL_debug_renderer_info"
    )
    if (!debug) return undefined
    const param = (gl as WebGLRenderingContext & { getParameter?(p: number): string }).getParameter?.(
      (debug as { UNMASKED_RENDERER_WEBGL: number }).UNMASKED_RENDERER_WEBGL
    )
    return typeof param === "string" ? param : undefined
  } catch {
    return undefined
  }
}

function getConnectionType(): string | undefined {
  const conn = (navigator as Navigator & { connection?: { effectiveType?: string; type?: string } }).connection
  if (!conn) return undefined
  return conn.effectiveType || conn.type
}

/**
 * Map DeviceInfo to BrowserData format for LocationInfo compatibility.
 */
export function deviceInfoToBrowserData(info: DeviceInfo) {
  return {
    browserName: info.device.browserName,
    osName: info.device.osName,
    screenResolution: `${info.screen.screenSize} - ${info.screen.colorDepth.replace(" bits", "bit")}`,
    language: info.device.languages.split(",")[0]?.trim() || "Unknown",
    cookiesEnabled: typeof navigator !== "undefined" ? navigator.cookieEnabled : false,
    deviceMemory: info.device.deviceMemory,
    hardwareConcurrency: info.device.hardwareConcurrency,
    userAgent: info.device.userAgent,
    gpuRenderer: info.device.gpuRenderer,
    connectionType: info.device.connectionType,
    timeZone: info.device.timeZone,
    batteryLevel: info.device.batteryLevel,
    isCharging: info.device.isCharging,
  }
}
