"use client"

import { useState, useCallback, useEffect, useMemo } from "react"
import { GButton } from "@/ui/gbutton"
import { GCard, GCardContent, GCardHeader, GCardTitle } from "@/ui/gcard"
import { GInput } from "@/ui/ginput"
import { GSlider } from "@/ui/gslider"
import { GTabs, GTabsList, GTabsTrigger, GTabsContent } from "@/ui/gtabs"
import { GSelect, GSelectContent, GSelectItem, GSelectTrigger, GSelectValue } from "@/ui/gselect"
import { GBadge } from "@/ui/gbadge"
import { cn } from "@/lib/utils"
import {
  RefreshCw,
  Copy,
  Check,
  Download,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Eye,
  EyeOff,
  Loader2,
  AlertCircle,
  Key,
  BookOpen,
  Sparkles,
} from "lucide-react"

// === Character sets ===
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const LOWER = "abcdefghijklmnopqrstuvwxyz"
const DIGITS = "0123456789"
const SYMBOLS = "!@#$%^&*()-_=+[]{};:,.<>?/~`"
const AMBIGUOUS = "0O1lI|`'\",.;:"

// Small EFF-style word list (subset for brevity; ~500 common words)
const WORDS = [
  "able","acid","aged","also","area","army","away","baby","back","ball","band","bank","base","bath","bear","beat","been","beer","bell","belt","best","bike","bird","blow","blue","boat","body","bomb","bone","book","boom","born","boss","both","bowl","bulk","burn","bush","busy","call","calm","came","camp","card","care","case","cash","cast","cell","chat","chip","city","club","coal","coat","code","cold","come","cook","cool","cope","copy","core","cost","crew","crop","dark","data","date","dawn","days","dead","deal","dean","dear","debt","deep","deny","desk","dial","dice","diet","disc","disk","does","done","door","dose","down","draw","drew","drop","drug","dual","dune","dust","duty","each","earn","east","easy","edge","else","even","ever","evil","exit","face","fact","fail","fair","fall","farm","fast","fate","fear","feed","feel","fell","felt","file","fill","film","find","fine","fire","firm","fish","five","flag","flat","flow","food","foot","ford","form","fort","four","free","from","fuel","full","fund","gain","game","gate","gave","gear","gene","gift","girl","give","glad","goal","goes","gold","golf","gone","good","gray","grew","grey","grow","gulf","hair","half","hall","hand","hang","hard","harm","hate","have","head","hear","heat","held","hell","help","here","hero","high","hill","hint","hire","hold","hole","holy","home","hope","host","hour","huge","hung","hunt","hurt","idea","inch","into","iron","item","jack","jane","jean","john","join","jump","jury","just","keen","keep","kept","kick","kill","kind","king","knee","knew","know","lack","lady","laid","lake","land","lane","last","late","lead","left","less","life","lift","like","line","link","list","live","load","loan","lock","logo","long","look","lord","lose","loss","lost","love","luck","made","mail","main","make","male","many","mark","mass","matt","meal","mean","meat","meet","mere","mild","mile","milk","mill","mind","mine","miss","mode","mood","moon","more","most","move","much","must","name","navy","near","neck","need","news","next","nice","nick","nine","none","nose","note","okay","once","only","onto","open","oral","over","pace","pack","page","paid","pain","pair","palm","park","part","pass","past","path","peak","pick","pink","pipe","plan","play","plot","plug","plus","poll","pool","poor","port","post","pull","pure","push","race","rail","rain","rank","rare","rate","read","real","rear","rely","rent","rest","rice","rich","ride","ring","rise","risk","road","rock","role","roll","roof","room","root","rope","rose","rule","rush","safe","said","sake","sale","salt","same","sand","save","seat","seed","seek","seem","seen","self","sell","send","sent","sept","ship","shop","shot","show","shut","sick","side","sign","site","size","skin","slip","slow","snow","soft","soil","sold","sole","some","song","soon","sort","soul","spot","star","stay","step","stop","such","suit","sure","take","tale","talk","tall","tank","tape","task","team","tech","tell","tend","term","test","text","than","that","them","then","they","thin","this","thus","tide","till","time","tiny","toll","tone","tony","took","tool","tops","tore","torn","tour","town","tree","trip","true","tube","tune","turn","twin","type","unit","upon","used","user","uses","vast","very","vice","view","vote","wage","wait","wake","walk","wall","want","ward","warm","wash","wave","ways","weak","wear","week","went","were","west","what","when","whom","wide","wife","wild","will","wind","wine","wing","wire","wise","wish","with","wolf","wood","word","wore","work","worn","yard","yeah","year","your","zero","zone"
]

// === Secure random ===
function getRandomInt(max: number): number {
  const arr = new Uint32Array(1)
  crypto.getRandomValues(arr)
  return arr[0] % max
}

function pickRandom<T>(arr: T[]): T {
  return arr[getRandomInt(arr.length)]
}

// === Password generation ===
interface PasswordOptions {
  length: number
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
  excludeAmbiguous: boolean
}

function generatePassword(opts: PasswordOptions): string {
  let charset = ""
  const required: string[] = []

  if (opts.uppercase) {
    const chars = opts.excludeAmbiguous ? UPPER.replace(/[OI]/g, "") : UPPER
    charset += chars
    required.push(pickRandom(chars.split("")))
  }
  if (opts.lowercase) {
    const chars = opts.excludeAmbiguous ? LOWER.replace(/[l]/g, "") : LOWER
    charset += chars
    required.push(pickRandom(chars.split("")))
  }
  if (opts.numbers) {
    const chars = opts.excludeAmbiguous ? DIGITS.replace(/[01]/g, "") : DIGITS
    charset += chars
    required.push(pickRandom(chars.split("")))
  }
  if (opts.symbols) {
    const chars = opts.excludeAmbiguous ? SYMBOLS.replace(/["'`,.;:|]/g, "") : SYMBOLS
    charset += chars
    required.push(pickRandom(chars.split("")))
  }

  if (!charset) return ""

  const chars = charset.split("")
  const remaining = opts.length - required.length
  const password: string[] = [...required]
  for (let i = 0; i < remaining; i++) {
    password.push(pickRandom(chars))
  }
  // Fisher-Yates shuffle
  for (let i = password.length - 1; i > 0; i--) {
    const j = getRandomInt(i + 1)
    ;[password[i], password[j]] = [password[j], password[i]]
  }
  return password.join("")
}

function generatePassphrase(wordCount: number, separator: string, capitalize: boolean, includeNumber: boolean): string {
  const words: string[] = []
  for (let i = 0; i < wordCount; i++) {
    let w = pickRandom(WORDS)
    if (capitalize) w = w.charAt(0).toUpperCase() + w.slice(1)
    words.push(w)
  }
  let result = words.join(separator)
  if (includeNumber) {
    result += separator + getRandomInt(1000)
  }
  return result
}

// === Strength calculation (entropy-based) ===
function calculateEntropy(password: string): number {
  if (!password) return 0
  let poolSize = 0
  if (/[a-z]/.test(password)) poolSize += 26
  if (/[A-Z]/.test(password)) poolSize += 26
  if (/[0-9]/.test(password)) poolSize += 10
  if (/[^a-zA-Z0-9]/.test(password)) poolSize += 32
  return password.length * Math.log2(poolSize || 1)
}

function calculatePassphraseEntropy(wordCount: number, wordPoolSize: number = 500): number {
  return wordCount * Math.log2(wordPoolSize)
}

function strengthRating(entropy: number): { grade: string; color: string; bar: number; crackTime: string } {
  let grade: string, color: string, bar: number
  if (entropy < 28) { grade = "Very Weak"; color = "bg-red-500"; bar = 15 }
  else if (entropy < 36) { grade = "Weak"; color = "bg-orange-500"; bar = 30 }
  else if (entropy < 60) { grade = "Moderate"; color = "bg-yellow-500"; bar = 55 }
  else if (entropy < 80) { grade = "Strong"; color = "bg-green-500"; bar = 80 }
  else { grade = "Very Strong"; color = "bg-green-600"; bar = 100 }

  // Time to crack at 1 trillion (10^12) guesses/sec (modern GPU cluster)
  const combinations = Math.pow(2, entropy)
  const seconds = combinations / (2 * 1e12) // average case
  const crackTime = formatTime(seconds)

  return { grade, color, bar, crackTime }
}

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds > 1e20) return "centuries"
  if (seconds < 1) return "instantly"
  if (seconds < 60) return `${Math.round(seconds)} seconds`
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`
  if (seconds < 2592000) return `${Math.round(seconds / 86400)} days`
  if (seconds < 31536000) return `${Math.round(seconds / 2592000)} months`
  const years = seconds / 31536000
  if (years < 1000) return `${Math.round(years).toLocaleString()} years`
  if (years < 1e6) return `${Math.round(years / 1000).toLocaleString()} thousand years`
  if (years < 1e9) return `${Math.round(years / 1e6).toLocaleString()} million years`
  if (years < 1e12) return `${Math.round(years / 1e9).toLocaleString()} billion years`
  return "centuries"
}

// === HIBP breach check (k-anonymity) ===
async function checkBreaches(password: string): Promise<number> {
  // SHA-1 hash
  const buffer = new TextEncoder().encode(password)
  const hashBuffer = await crypto.subtle.digest("SHA-1", buffer)
  const hash = Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase()

  const prefix = hash.slice(0, 5)
  const suffix = hash.slice(5)

  const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`)
  if (!res.ok) throw new Error("Breach check failed")
  const text = await res.text()

  for (const line of text.split("\n")) {
    const [hashSuffix, countStr] = line.trim().split(":")
    if (hashSuffix === suffix) {
      return parseInt(countStr, 10)
    }
  }
  return 0
}

// === Component ===
export function PasswordGenerator() {
  const [mode, setMode] = useState<"password" | "passphrase">("password")

  // Password options
  const [length, setLength] = useState(16)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(true)
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false)

  // Passphrase options
  const [wordCount, setWordCount] = useState(4)
  const [separator, setSeparator] = useState("-")
  const [capitalize, setCapitalize] = useState(true)
  const [includeNumber, setIncludeNumber] = useState(true)

  // Bulk
  const [bulkCount, setBulkCount] = useState(1)

  // State
  const [passwords, setPasswords] = useState<string[]>([])
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)
  const [showPasswords, setShowPasswords] = useState(true)

  // Breach check
  const [breachCount, setBreachCount] = useState<number | null>(null)
  const [breachLoading, setBreachLoading] = useState(false)
  const [breachError, setBreachError] = useState("")
  const [breachInput, setBreachInput] = useState("")

  const opts: PasswordOptions = useMemo(() => ({
    length, uppercase, lowercase, numbers, symbols, excludeAmbiguous,
  }), [length, uppercase, lowercase, numbers, symbols, excludeAmbiguous])

  const generate = useCallback(() => {
    const list: string[] = []
    for (let i = 0; i < bulkCount; i++) {
      if (mode === "password") {
        list.push(generatePassword(opts))
      } else {
        list.push(generatePassphrase(wordCount, separator, capitalize, includeNumber))
      }
    }
    setPasswords(list)
    setCopiedIdx(null)
  }, [mode, opts, bulkCount, wordCount, separator, capitalize, includeNumber])

  // Auto-generate on first load and when settings change (if only 1 password)
  useEffect(() => {
    if (bulkCount === 1) {
      generate()
    }
  }, [generate, bulkCount])

  const copyPassword = useCallback(async (pwd: string, idx: number) => {
    await navigator.clipboard.writeText(pwd)
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 1500)
  }, [])

  const copyAll = useCallback(async () => {
    await navigator.clipboard.writeText(passwords.join("\n"))
    setCopiedIdx(-1)
    setTimeout(() => setCopiedIdx(null), 2000)
  }, [passwords])

  const download = useCallback(() => {
    const blob = new Blob([passwords.join("\n")], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `passwords-${Date.now()}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }, [passwords])

  // Strength of first password (for display)
  const firstPwd = passwords[0] || ""
  const entropy = mode === "password"
    ? calculateEntropy(firstPwd)
    : calculatePassphraseEntropy(wordCount)
  const strength = strengthRating(entropy)

  const handleBreachCheck = useCallback(async () => {
    if (!breachInput.trim()) return
    setBreachLoading(true)
    setBreachError("")
    setBreachCount(null)
    try {
      const count = await checkBreaches(breachInput)
      setBreachCount(count)
    } catch {
      setBreachError("Breach check failed. Please try again.")
    } finally {
      setBreachLoading(false)
    }
  }, [breachInput])

  const hasAtLeastOneCharSet = uppercase || lowercase || numbers || symbols

  return (
    <div className="space-y-6">
      {/* Generated passwords display */}
      <GCard>
        <GCardHeader className="pb-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <GCardTitle className="text-base flex items-center gap-2">
              <Key className="h-4 w-4" />
              Generated {mode === "password" ? "Password" : "Passphrase"}
              {passwords.length > 1 && <GBadge variant="outline">{passwords.length}</GBadge>}
            </GCardTitle>
            <div className="flex items-center gap-2">
              <GButton variant="outline" size="sm" onClick={() => setShowPasswords(p => !p)}>
                {showPasswords ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </GButton>
              <GButton onClick={generate} size="sm">
                <RefreshCw className="h-4 w-4 mr-1.5" /> Regenerate
              </GButton>
            </div>
          </div>
        </GCardHeader>
        <GCardContent className="space-y-3">
          {!hasAtLeastOneCharSet && mode === "password" && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm p-3 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              Enable at least one character type (uppercase, lowercase, numbers, or symbols).
            </div>
          )}

          {passwords.length === 1 ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "flex-1 px-4 py-3 rounded-lg border border-border bg-muted/30 font-mono text-base md:text-lg break-all",
                  !showPasswords && "select-none"
                )}>
                  {showPasswords ? (passwords[0] || "—") : "•".repeat(Math.min(passwords[0]?.length || 16, 40))}
                </div>
                <GButton variant="outline" onClick={() => copyPassword(passwords[0], 0)} disabled={!passwords[0]}>
                  {copiedIdx === 0 ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </GButton>
              </div>

              {/* Strength meter */}
              {passwords[0] && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      {strength.bar >= 80 ? <ShieldCheck className="h-4 w-4 text-green-500" /> :
                       strength.bar >= 50 ? <Shield className="h-4 w-4 text-yellow-500" /> :
                       <ShieldAlert className="h-4 w-4 text-red-500" />}
                      Strength
                    </span>
                    <span className="font-medium">
                      {strength.grade} · {entropy.toFixed(0)} bits
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className={cn("h-full rounded-full transition-all duration-300", strength.color)} style={{ width: `${strength.bar}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Estimated time to crack (offline, 1 trillion guesses/sec): <strong>{strength.crackTime}</strong>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-2 max-h-[420px] overflow-y-auto">
              {passwords.map((pwd, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-8 text-right shrink-0">{i + 1}.</span>
                  <div className={cn(
                    "flex-1 px-3 py-2 rounded-md border border-border bg-muted/30 font-mono text-sm break-all",
                    !showPasswords && "select-none"
                  )}>
                    {showPasswords ? pwd : "•".repeat(Math.min(pwd.length, 30))}
                  </div>
                  <GButton variant="outline" size="sm" onClick={() => copyPassword(pwd, i)}>
                    {copiedIdx === i ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </GButton>
                </div>
              ))}
            </div>
          )}

          {passwords.length > 1 && (
            <div className="flex gap-2 pt-2 border-t border-border">
              <GButton variant="outline" size="sm" onClick={copyAll}>
                {copiedIdx === -1 ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                {copiedIdx === -1 ? "Copied" : "Copy All"}
              </GButton>
              <GButton variant="outline" size="sm" onClick={download}>
                <Download className="h-4 w-4 mr-1" /> Download .txt
              </GButton>
            </div>
          )}
        </GCardContent>
      </GCard>

      {/* Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Generator Settings */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> Generator Settings
            </GCardTitle>
          </GCardHeader>
          <GCardContent>
            <GTabs value={mode} onValueChange={(v) => setMode(v as "password" | "passphrase")}>
              <GTabsList className="w-full">
                <GTabsTrigger value="password" className="flex-1">
                  <Key className="h-3.5 w-3.5 mr-1.5" /> Password
                </GTabsTrigger>
                <GTabsTrigger value="passphrase" className="flex-1">
                  <BookOpen className="h-3.5 w-3.5 mr-1.5" /> Passphrase
                </GTabsTrigger>
              </GTabsList>

              <GTabsContent value="password" className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Length</label>
                    <span className="text-sm font-medium">{length}</span>
                  </div>
                  <GSlider value={[length]} onValueChange={([v]) => setLength(v)} min={4} max={64} step={1} />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>4</span>
                    <span>16 recommended</span>
                    <span>64</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <ToggleRow label="Uppercase (A-Z)" checked={uppercase} onChange={setUppercase} />
                  <ToggleRow label="Lowercase (a-z)" checked={lowercase} onChange={setLowercase} />
                  <ToggleRow label="Numbers (0-9)" checked={numbers} onChange={setNumbers} />
                  <ToggleRow label="Symbols (!@#$%...)" checked={symbols} onChange={setSymbols} />
                  <ToggleRow label="Exclude ambiguous (0/O, 1/l/I)" checked={excludeAmbiguous} onChange={setExcludeAmbiguous} />
                </div>
              </GTabsContent>

              <GTabsContent value="passphrase" className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm">Word Count</label>
                    <span className="text-sm font-medium">{wordCount}</span>
                  </div>
                  <GSlider value={[wordCount]} onValueChange={([v]) => setWordCount(v)} min={3} max={10} step={1} />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>3</span>
                    <span>4-6 recommended</span>
                    <span>10</span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm">Separator</label>
                  <GSelect value={separator} onValueChange={setSeparator}>
                    <GSelectTrigger className="w-full">
                      <GSelectValue />
                    </GSelectTrigger>
                    <GSelectContent>
                      <GSelectItem value="-">Hyphen ( - )</GSelectItem>
                      <GSelectItem value="_">Underscore ( _ )</GSelectItem>
                      <GSelectItem value=".">Period ( . )</GSelectItem>
                      <GSelectItem value=" ">Space</GSelectItem>
                      <GSelectItem value="">None</GSelectItem>
                    </GSelectContent>
                  </GSelect>
                </div>

                <div className="space-y-2">
                  <ToggleRow label="Capitalize each word" checked={capitalize} onChange={setCapitalize} />
                  <ToggleRow label="Append random number" checked={includeNumber} onChange={setIncludeNumber} />
                </div>
              </GTabsContent>
            </GTabs>

            {/* Bulk */}
            <div className="pt-4 mt-4 border-t border-border space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm">Generate count</label>
                <span className="text-sm font-medium">{bulkCount}</span>
              </div>
              <GSlider value={[bulkCount]} onValueChange={([v]) => setBulkCount(v)} min={1} max={50} step={1} />
              <div className="flex justify-between text-[10px] text-muted-foreground">
                <span>1</span>
                <span>Bulk generate up to 50</span>
              </div>
              {bulkCount > 1 && (
                <GButton onClick={generate} className="w-full">
                  <RefreshCw className="h-4 w-4 mr-1.5" /> Generate {bulkCount} passwords
                </GButton>
              )}
            </div>
          </GCardContent>
        </GCard>

        {/* Breach Check */}
        <GCard>
          <GCardHeader className="pb-3">
            <GCardTitle className="text-base flex items-center gap-2">
              <Shield className="h-4 w-4" /> Breach Checker
              <GBadge variant="secondary" className="text-[10px]">HIBP</GBadge>
            </GCardTitle>
          </GCardHeader>
          <GCardContent className="space-y-3">
            <p className="text-xs text-muted-foreground">
              Check if a password appears in known data breaches using the Have I Been Pwned k-anonymity API.
              Only the first 5 characters of the SHA-1 hash are sent — your password never leaves your device.
            </p>
            <div className="flex gap-2">
              <GInput
                type="password"
                value={breachInput}
                onChange={(e) => setBreachInput(e.target.value)}
                placeholder="Enter a password to check..."
                onKeyDown={(e) => { if (e.key === "Enter") handleBreachCheck() }}
              />
              <GButton onClick={handleBreachCheck} disabled={breachLoading || !breachInput.trim()}>
                {breachLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Check"}
              </GButton>
            </div>

            {breachError && (
              <div className="rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm p-2.5 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> {breachError}
              </div>
            )}

            {breachCount !== null && !breachLoading && (
              <div className={cn(
                "rounded-lg border p-3",
                breachCount === 0
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-red-500/10 border-red-500/30"
              )}>
                {breachCount === 0 ? (
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-green-500">Not found in known breaches</div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        This password has not appeared in any public breach in the HIBP database.
                        Still make sure it&apos;s unique to this account.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <ShieldAlert className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-red-500">
                        Found in {breachCount.toLocaleString()} breaches!
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        This password has been exposed in {breachCount.toLocaleString()} known data breaches.
                        <strong> Do not use it.</strong> Generate a new one above.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </GCardContent>
        </GCard>
      </div>

      {/* Security note */}
      <div className="rounded-lg border border-border bg-muted/30 p-3">
        <p className="text-xs text-muted-foreground">
          <strong>🔒 Security:</strong> All passwords are generated locally using <code>crypto.getRandomValues()</code>,
          a cryptographically secure random number generator. Nothing is sent to any server. The breach checker uses
          k-anonymity: only the first 5 characters of your password&apos;s SHA-1 hash are sent to HIBP, so your password
          itself never leaves your device.
        </p>
      </div>
    </div>
  )
}

function ToggleRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-2 cursor-pointer py-1">
      <span className="text-sm">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-border"
      />
    </label>
  )
}
