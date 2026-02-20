"use client"

import { useState } from "react"
import { GInput } from "@/ui/ginput"
import { GTextarea } from "@/ui/gtextarea"
import { GButton } from "@/ui/gbutton"
import { GLabel } from "@/ui/glabel"
import { GTabs, GTabsContent, GTabsList, GTabsTrigger } from "@/ui/gtabs"
import { Copy, Check, Eye, EyeOff, RotateCcw } from "lucide-react"
import {
  basicAuthEncode,
  basicAuthDecode,
  bearerTokenHeader,
  apiKeyHeader,
} from "@/lib/auth-generator"

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
    <GButton variant="outline" size="sm" onClick={handleCopy}>
      {copied ? <Check className="h-3.5 w-3.5 mr-1 text-green-600" /> : <Copy className="h-3.5 w-3.5 mr-1" />}
      {copied ? "Copied" : label}
    </GButton>
  )
}

export function AuthGenerator() {
  const [tab, setTab] = useState("basic-encode")

  // Basic Auth Encode
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const basicHeader = basicAuthEncode(username, password)

  // Basic Auth Decode
  const [decodeInput, setDecodeInput] = useState("")
  const decoded = basicAuthDecode(decodeInput)

  // Bearer
  const [bearerToken, setBearerToken] = useState("")
  const bearerHeader = bearerTokenHeader(bearerToken)

  // API Key
  const [apiKey, setApiKey] = useState("")
  const [apiKeyHeaderName, setApiKeyHeaderName] = useState("X-API-Key")
  const apiKeyHeaderOut = apiKeyHeader(apiKey, apiKeyHeaderName)

  const handleClearBasicEncode = () => {
    setUsername("")
    setPassword("")
  }
  const handleSampleBasicEncode = () => {
    setUsername("admin")
    setPassword("secret123")
  }
  const handleClearBasicDecode = () => setDecodeInput("")
  const handleSampleBasicDecode = () => {
    setDecodeInput("Authorization: Basic YWRtaW46c2VjcmV0MTIz")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Auth Header Generator
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Create and decode Basic Auth headers, plus generate Bearer and API
            key headers.
          </p>
        </div>
      </div>

      <GTabs value={tab} onValueChange={setTab}>
        <GTabsList className="flex flex-wrap gap-1">
          <GTabsTrigger value="basic-encode">Basic Auth (Encode)</GTabsTrigger>
          <GTabsTrigger value="basic-decode">Basic Auth (Decode)</GTabsTrigger>
          <GTabsTrigger value="bearer">Bearer Token</GTabsTrigger>
          <GTabsTrigger value="api-key">API Key</GTabsTrigger>
        </GTabsList>

        <GTabsContent value="basic-encode" className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            <GButton variant="outline" size="sm" onClick={handleSampleBasicEncode}>
              Sample
            </GButton>
            <GButton variant="outline" size="sm" onClick={handleClearBasicEncode}>
              <RotateCcw className="h-3.5 w-3.5 mr-1" />
              Clear
            </GButton>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Username</GLabel>
            <GInput
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your username..."
              className="mt-1 font-mono"
              aria-label="Basic auth username"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Password</GLabel>
            <div className="relative mt-1">
              <GInput
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password..."
                className="font-mono pr-10"
                aria-label="Basic auth password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Authorization header
            </GLabel>
            <GTextarea
              value={basicHeader}
              readOnly
              className="mt-1 min-h-[60px] font-mono text-sm bg-muted/30"
              aria-label="Generated basic authorization header"
            />
            <div className="mt-2">
              <CopyButton text={basicHeader} label="Copy header" />
            </div>
          </div>
        </GTabsContent>

        <GTabsContent value="basic-decode" className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            <GButton variant="outline" size="sm" onClick={handleSampleBasicDecode}>
              Sample
            </GButton>
            <GButton variant="outline" size="sm" onClick={handleClearBasicDecode}>
              <RotateCcw className="h-3.5 w-3.5 mr-1" />
              Clear
            </GButton>
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Paste Basic header or base64 value
            </GLabel>
            <GTextarea
              value={decodeInput}
              onChange={(e) => setDecodeInput(e.target.value)}
              placeholder="Authorization: Basic ... or paste base64"
              className="mt-1 min-h-[80px] font-mono text-sm"
              aria-label="Header to decode"
            />
          </div>
          {decoded && (
            <div className="space-y-2 rounded-lg border border-border bg-muted/20 p-4">
              <p className="text-sm text-muted-foreground">Decoded credentials</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground">Username</p>
                  <p className="font-mono font-medium">{decoded.username}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Password</p>
                  <p className="font-mono font-medium">{decoded.password}</p>
                </div>
              </div>
              <CopyButton
                text={`${decoded.username}:${decoded.password}`}
                label="Copy username:password"
              />
            </div>
          )}
          {decodeInput.trim() && !decoded && (
            <p className="text-sm text-destructive">Invalid Basic Auth header or Base64 value.</p>
          )}
        </GTabsContent>

        <GTabsContent value="bearer" className="mt-6 space-y-4">
          <div>
            <GLabel className="text-xs text-muted-foreground">Bearer token</GLabel>
            <GTextarea
              value={bearerToken}
              onChange={(e) => setBearerToken(e.target.value)}
              placeholder="Paste your JWT or access token..."
              className="mt-1 min-h-[80px] font-mono text-sm"
              aria-label="Bearer token input"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">
              Authorization header
            </GLabel>
            <GTextarea
              value={bearerHeader}
              readOnly
              className="mt-1 min-h-[60px] font-mono text-sm bg-muted/30"
              aria-label="Generated bearer authorization header"
            />
            <div className="mt-2">
              <CopyButton text={bearerHeader} label="Copy header" />
            </div>
          </div>
        </GTabsContent>

        <GTabsContent value="api-key" className="mt-6 space-y-4">
          <div>
            <GLabel className="text-xs text-muted-foreground">API Key</GLabel>
            <GInput
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Your API key..."
              type="password"
              className="mt-1 font-mono"
              aria-label="API key input"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Header name</GLabel>
            <GInput
              value={apiKeyHeaderName}
              onChange={(e) => setApiKeyHeaderName(e.target.value)}
              placeholder="X-API-Key"
              className="mt-1 font-mono"
              aria-label="API key header name"
            />
          </div>
          <div>
            <GLabel className="text-xs text-muted-foreground">Header output</GLabel>
            <GTextarea
              value={apiKeyHeaderOut}
              readOnly
              className="mt-1 min-h-[60px] font-mono text-sm bg-muted/30"
              aria-label="Generated API key header"
            />
            <div className="mt-2">
              <CopyButton text={apiKeyHeaderOut} label="Copy header" />
            </div>
          </div>
        </GTabsContent>
      </GTabs>
    </div>
  )
}
