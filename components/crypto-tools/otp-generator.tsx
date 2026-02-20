"use client"

import { useState, useEffect, useCallback } from "react"
import { Copy, Check, RotateCcw, ExternalLink } from "lucide-react"
import QRCode from "qrcode"
import {
  generateTotp,
  getTotpCounter,
  getSecondsUntilNext,
  getCurrentEpoch,
  secretToHex,
  generateSecret,
  getTotpKeyUri,
} from "@/lib/totp"
import { GInput } from "@/ui/ginput"
import { GLabel } from "@/ui/glabel"
import { GButton } from "@/ui/gbutton"

const PERIOD = 30
const DIGITS = 6

function CopyButton({
  text,
  label = "Copy",
}: {
  text: string
  label?: string
}) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    if (text) {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  if (!text) return null
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={label}
      className="p-1.5 rounded hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
      title="Copy"
    >
      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}

const DEFAULT_SECRET = "T5DPATR5KP2IO4AX"

export function OtpGenerator() {
  const [secret, setSecret] = useState(DEFAULT_SECRET)
  const [currentOtp, setCurrentOtp] = useState("")
  const [previousOtp, setPreviousOtp] = useState("")
  const [nextOtp, setNextOtp] = useState("")
  const [secondsLeft, setSecondsLeft] = useState(PERIOD)
  const [qrDataUrl, setQrDataUrl] = useState("")
  const [error, setError] = useState("")

  const refreshOtps = useCallback(async () => {
    if (!secret.trim()) {
      setCurrentOtp("")
      setPreviousOtp("")
      setNextOtp("")
      setError("")
      return
    }
    try {
      setError("")
      const now = Math.floor(Date.now() / 1000)
      const [prev, curr, nxt] = await Promise.all([
        generateTotp({ secret: secret.trim(), epoch: now - PERIOD }),
        generateTotp({ secret: secret.trim(), epoch: now }),
        generateTotp({ secret: secret.trim(), epoch: now + PERIOD }),
      ])
      setPreviousOtp(prev)
      setCurrentOtp(curr)
      setNextOtp(nxt)
    } catch (e) {
      setError("Invalid secret. Use base32 (A-Z, 2-7).")
      setCurrentOtp("")
      setPreviousOtp("")
      setNextOtp("")
    }
  }, [secret])

  useEffect(() => {
    refreshOtps()
  }, [refreshOtps])

  useEffect(() => {
    setSecondsLeft(getSecondsUntilNext(PERIOD))
    const t = setInterval(() => {
      setSecondsLeft(getSecondsUntilNext(PERIOD))
      refreshOtps()
    }, 1000)
    return () => clearInterval(t)
  }, [refreshOtps])

  useEffect(() => {
    if (!secret.trim()) {
      setQrDataUrl("")
      return
    }
    const uri = getTotpKeyUri(secret.trim(), "Account", "FastTools", DIGITS, PERIOD)
    QRCode.toDataURL(uri, { width: 200, margin: 2 })
      .then(setQrDataUrl)
      .catch(() => setQrDataUrl(""))
  }, [secret])

  const handleRegenerateSecret = () => {
    setSecret(generateSecret(16))
  }

  const keyUri = secret.trim()
    ? getTotpKeyUri(secret.trim(), "Account", "FastTools", DIGITS, PERIOD)
    : ""

  const counter = getTotpCounter(PERIOD)
  const epoch = getCurrentEpoch()
  const secretHex = secret.trim() ? secretToHex(secret.trim()) : ""

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          OTP code generator
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Generate and validate time-based OTP (one time password) for multi-factor
          authentication. totp generator, totp qr code generator.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Secret & OTPs */}
        <div className="space-y-4">
          <div>
            <GLabel className="text-xs text-muted-foreground">Secret (base32)</GLabel>
            <div className="flex gap-2 mt-1">
              <GInput
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                placeholder="T5DPATR5KP2IO4AX"
                className="font-mono flex-1"
              />
              <GButton variant="outline" size="icon" onClick={handleRegenerateSecret} title="Regenerate">
                <RotateCcw className="h-4 w-4" />
              </GButton>
            </div>
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          {currentOtp && (
            <>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-border bg-muted/30 p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Previous</p>
                  <p className="text-xl font-mono font-semibold">{previousOtp}</p>
                </div>
                <div className="rounded-lg border-2 border-primary bg-primary/5 p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Current OTP</p>
                  <p className="text-xl font-mono font-bold text-primary">{currentOtp}</p>
                </div>
                <div className="rounded-lg border border-border bg-muted/30 p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-1">Next</p>
                  <p className="text-xl font-mono font-semibold">{nextOtp}</p>
                </div>
              </div>

              <div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 transition-all duration-1000"
                    style={{ width: `${(secondsLeft / PERIOD) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Next in {secondsLeft}s
                </p>
              </div>
            </>
          )}

          {/* QR Code */}
          {qrDataUrl && (
            <div className="flex flex-col items-center gap-2">
              <img
                src={qrDataUrl}
                alt="TOTP setup QR code"
                loading="lazy"
                decoding="async"
                className="w-48 h-48 border border-border rounded-lg"
              />
              {keyUri && (
                <a
                  href={keyUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                >
                  Open Key URI in new tab
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right: Technical details */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">Technical details</h3>

          {secretHex && (
            <div className="rounded-lg border border-border bg-muted/20 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Secret in hexadecimal</p>
                  <p className="text-sm font-mono break-all mt-1">{secretHex}</p>
                </div>
                <CopyButton text={secretHex} />
              </div>
            </div>
          )}

          <div className="rounded-lg border border-border bg-muted/20 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Epoch</p>
                <p className="text-sm font-mono mt-1">{epoch}</p>
              </div>
              <CopyButton text={String(epoch)} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-muted/20 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Iteration — Count</p>
                <p className="text-sm font-mono mt-1">{counter}</p>
              </div>
              <CopyButton text={String(counter)} />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-muted/20 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Padded hex</p>
                <p className="text-sm font-mono mt-1">
                  {counter.toString(16).padStart(16, "0")}
                </p>
              </div>
              <CopyButton text={counter.toString(16).padStart(16, "0")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
