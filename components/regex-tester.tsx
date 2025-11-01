"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { 
  Copy, 
  Check, 
  Code2, 
  Lightbulb, 
  Replace, 
  Sparkles, 
  BookOpen,
  Download,
  AlertCircle,
  CheckCircle2,
  X
} from "lucide-react"

interface MatchDetail {
  match: string
  index: number
  groups: (string | undefined)[]
  namedGroups?: Record<string, string>
}

const commonPatterns = {
  email: { pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$", flags: "" },
  url: { pattern: "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)", flags: "g" },
  phone: { pattern: "^(\\+1[-\\.\\s]?)?\\(?\\d{3}\\)?[-\\.\\s]?\\d{3}[-\\.\\s]?\\d{4}$", flags: "" },
  date: { pattern: "^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$", flags: "" },
  ipv4: { pattern: "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", flags: "" },
  hex: { pattern: "^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$", flags: "" },
  username: { pattern: "^[a-zA-Z0-9_-]{3,16}$", flags: "" },
  password: { pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$", flags: "" },
}

export function RegexTester() {
  const [pattern, setPattern] = useState("")
  const [flags, setFlags] = useState("g")
  const [testString, setTestString] = useState("")
  const [matches, setMatches] = useState<string[]>([])
  const [matchDetails, setMatchDetails] = useState<MatchDetail[]>([])
  const [error, setError] = useState("")
  const [replaceString, setReplaceString] = useState("")
  const [replaceResult, setReplaceResult] = useState("")
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")
  const [showCodeGenerator, setShowCodeGenerator] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")
  const [codeCopied, setCodeCopied] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [explanation, setExplanation] = useState("")
  const [patternCopied, setPatternCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("test")

  const testRegex = (newPattern: string, newFlags: string, newTestString: string, newReplaceString?: string) => {
    setError("")
    setMatches([])
    setMatchDetails([])
    setReplaceResult("")

    if (!newPattern) return

    try {
      const regex = new RegExp(newPattern, newFlags)
      const foundMatches = newTestString.match(regex)
      
      if (foundMatches) {
        setMatches(foundMatches)
        
        // Get detailed match information
        const details: MatchDetail[] = []
        const regexForExec = new RegExp(newPattern, newFlags)
        let execResult
        
        while ((execResult = regexForExec.exec(newTestString)) !== null) {
          details.push({
            match: execResult[0],
            index: execResult.index,
            groups: execResult.slice(1),
            namedGroups: execResult.groups
          })
          
          if (!newFlags.includes('g')) break
        }
        
        setMatchDetails(details)
      }

      // Handle replace if replace string is provided
      if (newReplaceString !== undefined) {
        const replaced = newTestString.replace(regex, newReplaceString)
        setReplaceResult(replaced)
      }
    } catch (err) {
      setError("Invalid regular expression pattern")
    }
  }

  const handlePatternChange = (value: string) => {
    setPattern(value)
    testRegex(value, flags, testString, replaceString)
  }

  const handleFlagsChange = (value: string) => {
    setFlags(value)
    testRegex(pattern, value, testString, replaceString)
  }

  const handleTestStringChange = (value: string) => {
    setTestString(value)
    testRegex(pattern, flags, value, replaceString)
  }

  const handleReplaceStringChange = (value: string) => {
    setReplaceString(value)
    testRegex(pattern, flags, testString, value)
  }

  const loadCommonPattern = (key: keyof typeof commonPatterns) => {
    const { pattern: newPattern, flags: newFlags } = commonPatterns[key]
    setPattern(newPattern)
    setFlags(newFlags || "g")
    testRegex(newPattern, newFlags || "g", testString, replaceString)
  }

  const generateCodeSnippet = (language: string) => {
    const escapedPattern = pattern.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
    
    const snippets: Record<string, string> = {
      javascript: `// JavaScript Regex Pattern
const regex = /${pattern}/${flags};
const testString = "${testString.replace(/\n/g, '\\n').replace(/"/g, '\\"')}";

// Test for matches
const matches = testString.match(regex);
console.log(matches);

// Test if pattern exists
const hasMatch = regex.test(testString);
console.log(hasMatch);

// Replace matches
const replaced = testString.replace(regex, '${replaceString}');
console.log(replaced);`,

      python: `# Python Regex Pattern
import re

pattern = r"${escapedPattern}"
test_string = """${testString}"""
flags = ${flags.includes('i') ? 're.IGNORECASE' : '0'}${flags.includes('m') ? ' | re.MULTILINE' : ''}

# Find all matches
matches = re.findall(pattern, test_string, flags)
print(matches)

# Search for first match
match = re.search(pattern, test_string, flags)
if match:
    print(f"Found: {match.group()}")

# Replace matches
replaced = re.sub(pattern, "${replaceString}", test_string, flags=flags)
print(replaced)`,

      java: `// Java Regex Pattern
import java.util.regex.*;

public class RegexTest {
    public static void main(String[] args) {
        String pattern = "${escapedPattern}";
        String testString = "${testString.replace(/\n/g, '\\n').replace(/"/g, '\\"')}";
        
        Pattern regex = Pattern.compile(pattern${flags.includes('i') ? ', Pattern.CASE_INSENSITIVE' : ''}${flags.includes('m') ? ' | Pattern.MULTILINE' : ''});
        Matcher matcher = regex.matcher(testString);
        
        // Find all matches
        while (matcher.find()) {
            System.out.println("Match: " + matcher.group());
        }
        
        // Replace matches
        String replaced = matcher.replaceAll("${replaceString}");
        System.out.println(replaced);
    }
}`,

      php: `<?php
// PHP Regex Pattern
$pattern = '/${pattern}/${flags}';
$testString = '${testString.replace(/'/g, "\\'")}';

// Find all matches
preg_match_all($pattern, $testString, $matches);
print_r($matches);

// Test for match
$hasMatch = preg_match($pattern, $testString);
echo $hasMatch ? "Match found" : "No match";

// Replace matches
$replaced = preg_replace($pattern, '${replaceString}', $testString);
echo $replaced;
?>`,

      go: `// Go Regex Pattern
package main

import (
    "fmt"
    "regexp"
)

func main() {
    pattern := \`${pattern}\`
    testString := \`${testString}\`
    
    regex := regexp.MustCompile(pattern)
    
    // Find all matches
    matches := regex.FindAllString(testString, -1)
    fmt.Println(matches)
    
    // Test for match
    hasMatch := regex.MatchString(testString)
    fmt.Println(hasMatch)
    
    // Replace matches
    replaced := regex.ReplaceAllString(testString, "${replaceString}")
    fmt.Println(replaced)
}`,

      csharp: `// C# Regex Pattern
using System;
using System.Text.RegularExpressions;

class Program {
    static void Main() {
        string pattern = @"${pattern}";
        string testString = @"${testString}";
        RegexOptions options = RegexOptions.None${flags.includes('i') ? ' | RegexOptions.IgnoreCase' : ''}${flags.includes('m') ? ' | RegexOptions.Multiline' : ''};
        
        Regex regex = new Regex(pattern, options);
        
        // Find all matches
        MatchCollection matches = regex.Matches(testString);
        foreach (Match match in matches) {
            Console.WriteLine($"Match: {match.Value}");
        }
        
        // Replace matches
        string replaced = regex.Replace(testString, "${replaceString}");
        Console.WriteLine(replaced);
    }
}`,

      ruby: `# Ruby Regex Pattern
pattern = /${pattern}/${flags}
test_string = '${testString.replace(/'/g, "\\'")}'

# Find all matches
matches = test_string.scan(pattern)
puts matches

# Test for match
has_match = test_string.match?(pattern)
puts has_match

# Replace matches
replaced = test_string.gsub(pattern, '${replaceString}')
puts replaced`
    }

    return snippets[language] || snippets.javascript
  }

  const explainPattern = (pattern: string): string => {
    if (!pattern) return "Enter a regex pattern to see explanation"
    
    let explanation = "Regex Pattern Breakdown:\n\n"
    
    // Basic patterns
    if (pattern.includes('^')) explanation += "^ - Matches start of string/line\n"
    if (pattern.includes('$')) explanation += "$ - Matches end of string/line\n"
    if (pattern.includes('\\d')) explanation += "\\d - Matches any digit (0-9)\n"
    if (pattern.includes('\\w')) explanation += "\\w - Matches any word character (a-z, A-Z, 0-9, _)\n"
    if (pattern.includes('\\s')) explanation += "\\s - Matches any whitespace character\n"
    if (pattern.includes('.')) explanation += ". - Matches any character except newline\n"
    if (pattern.includes('*')) explanation += "* - Matches 0 or more of the preceding token\n"
    if (pattern.includes('+')) explanation += "+ - Matches 1 or more of the preceding token\n"
    if (pattern.includes('?')) explanation += "? - Matches 0 or 1 of the preceding token\n"
    if (pattern.includes('|')) explanation += "| - Acts like a boolean OR\n"
    if (pattern.includes('(') && pattern.includes(')')) explanation += "() - Defines a capture group\n"
    if (pattern.includes('[') && pattern.includes(']')) explanation += "[] - Defines a character set\n"
    if (pattern.includes('{') && pattern.includes('}')) explanation += "{n,m} - Matches between n and m of the preceding token\n"
    
    // Character classes
    if (pattern.includes('[a-z]')) explanation += "[a-z] - Matches any lowercase letter\n"
    if (pattern.includes('[A-Z]')) explanation += "[A-Z] - Matches any uppercase letter\n"
    if (pattern.includes('[0-9]')) explanation += "[0-9] - Matches any digit\n"
    
    // Lookahead/lookbehind
    if (pattern.includes('(?=')) explanation += "(?=...) - Positive lookahead\n"
    if (pattern.includes('(?!')) explanation += "(?!...) - Negative lookahead\n"
    if (pattern.includes('(?<=')) explanation += "(?<=...) - Positive lookbehind\n"
    if (pattern.includes('(?<!')) explanation += "(?<!...) - Negative lookbehind\n"
    
    // Named groups
    if (pattern.includes('(?<')) explanation += "(?<name>...) - Named capture group\n"
    
    if (explanation === "Regex Pattern Breakdown:\n\n") {
      explanation += "This pattern uses literal characters for matching."
    }
    
    return explanation
  }

  const openCodeGenerator = () => {
    const code = generateCodeSnippet(selectedLanguage)
    setGeneratedCode(code)
    setShowCodeGenerator(true)
  }

  const copyGeneratedCode = async () => {
    await navigator.clipboard.writeText(generatedCode)
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2000)
  }

  const copyPattern = async () => {
    await navigator.clipboard.writeText(pattern)
    setPatternCopied(true)
    setTimeout(() => setPatternCopied(false), 2000)
  }

  const openExplanation = () => {
    const exp = explainPattern(pattern)
    setExplanation(exp)
    setShowExplanation(true)
  }

  // Visual highlighting of matches
  const highlightedText = useMemo(() => {
    if (!testString || !pattern || matches.length === 0) return testString

    try {
      const regex = new RegExp(pattern, flags)
      let lastIndex = 0
      const parts: { text: string; isMatch: boolean }[] = []
      
      matchDetails.forEach((detail) => {
        if (detail.index > lastIndex) {
          parts.push({ text: testString.slice(lastIndex, detail.index), isMatch: false })
        }
        parts.push({ text: detail.match, isMatch: true })
        lastIndex = detail.index + detail.match.length
      })
      
      if (lastIndex < testString.length) {
        parts.push({ text: testString.slice(lastIndex), isMatch: false })
      }
      
      return parts
    } catch {
      return testString
    }
  }, [testString, pattern, flags, matches, matchDetails])

  return (
    <div className="w-full max-w-full overflow-hidden space-y-4 sm:space-y-6">
      {/* Pattern Input Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Regular Expression Pattern</Label>
          <div className="relative">
            <Input
              placeholder="e.g., \d{3}-\d{3}-\d{4}"
              value={pattern}
              onChange={(e) => handlePatternChange(e.target.value)}
              className="font-mono pr-10 border-2 border-orange-300 focus:border-orange-500"
            />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
              onClick={copyPattern}
            >
              {patternCopied ? <Check className="h-3.5 w-3.5 text-heading-accent" /> : <Copy className="h-3.5 w-3.5" />}
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-foreground">Flags</Label>
          <div className="flex gap-2">
            <Input
              placeholder="e.g., g, gi, gim"
              value={flags}
              onChange={(e) => handleFlagsChange(e.target.value)}
              className="font-mono flex-1 border-2 border-orange-300 focus:border-orange-500"
            />
            <Button size="sm" onClick={openExplanation} className="flex-shrink-0 gap-1.5">
              <Lightbulb className="h-4 w-4" />
              Explain
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">g=global, i=ignoreCase, m=multiline, s=dotAll, u=unicode, y=sticky</p>
        </div>
      </div>

      {/* Quick Pattern Templates */}
      <Card className="p-3 sm:p-4 bg-black">
        <h3 className="text-sm font-semibold mb-2 text-foreground flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-accent" />
          Quick Pattern Templates
        </h3>
        <div className="flex flex-wrap gap-2">
          {Object.keys(commonPatterns).map((key) => (
            <Button
              key={key}
              size="sm"
              variant="outline"
              onClick={() => loadCommonPattern(key as keyof typeof commonPatterns)}
              className="text-xs"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Button>
          ))}
        </div>
      </Card>

      {/* Test String & Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-black p-1">
          <TabsTrigger 
            value="test" 
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm font-semibold"
          >
            Test & Match
          </TabsTrigger>
          <TabsTrigger 
            value="replace"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm font-semibold"
          >
            Find & Replace
          </TabsTrigger>
        </TabsList>

        <TabsContent value="test" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">Test String</Label>
            <Textarea
              placeholder="Enter text to test against your regex..."
              value={testString}
              onChange={(e) => handleTestStringChange(e.target.value)}
              className="min-h-32 font-mono text-sm border-2 border-orange-300 focus:border-orange-500"
              style={{ wordBreak: 'break-all', overflowWrap: 'anywhere', whiteSpace: 'normal' }}
            />
          </div>

          {/* Visual Highlighting */}
          {Array.isArray(highlightedText) && highlightedText.length > 0 && (
            <Card className="p-4 bg-black">
              <h3 className="text-sm font-semibold mb-2 text-foreground">Visual Match Highlighting</h3>
              <div className="font-mono text-sm whitespace-pre-wrap break-words">
                {highlightedText.map((part, idx) => (
                  <span
                    key={idx}
                    className={part.isMatch ? 'bg-yellow-300 dark:bg-yellow-600 font-bold' : ''}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </Card>
          )}

          {/* Error Display */}
          {error && (
            <div className="p-4 bg-black border border-destructive/20 rounded-lg flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-destructive">Invalid Pattern</p>
                <p className="text-sm text-destructive/80">{error}</p>
              </div>
            </div>
          )}

          {/* Matches Found */}
          {matches.length > 0 && (
            <Card className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-heading-accent" />
                  Matches Found
                </h3>
                <Badge variant="secondary" className="text-sm">{matches.length} match(es)</Badge>
              </div>

              {/* Match Details */}
              <div className="space-y-2">
                {matchDetails.map((detail, index) => (
                  <Card key={index} className="p-3 bg-card border">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-muted-foreground">Match #{index + 1}</span>
                      <Badge variant="outline" className="text-xs">Index: {detail.index}</Badge>
                    </div>
                    <div className="font-mono text-sm p-2 bg-muted rounded break-all">
                      {detail.match}
                    </div>
                    
                    {/* Capture Groups */}
                    {detail.groups.length > 0 && detail.groups.some(g => g !== undefined) && (
                      <div className="mt-2 pt-2 border-t border-border">
                        <p className="text-xs font-semibold mb-1 text-muted-foreground">Capture Groups:</p>
                        <div className="space-y-1">
                          {detail.groups.map((group, gIndex) => group !== undefined && (
                            <div key={gIndex} className="text-xs font-mono p-1.5 bg-black rounded">
                              <span className="text-muted-foreground">Group {gIndex + 1}:</span>{' '}
                              <span className="text-foreground">{group}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Named Groups */}
                    {detail.namedGroups && Object.keys(detail.namedGroups).length > 0 && (
                      <div className="mt-2 pt-2 border-t border-border">
                        <p className="text-xs font-semibold mb-1 text-muted-foreground">Named Groups:</p>
                        <div className="space-y-1">
                          {Object.entries(detail.namedGroups).map(([name, value]) => (
                            <div key={name} className="text-xs font-mono p-1.5 bg-black rounded">
                              <span className="text-muted-foreground">{name}:</span>{' '}
                              <span className="text-foreground">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </Card>
          )}

          {/* No Matches */}
          {pattern && testString && matches.length === 0 && !error && (
            <div className="p-4 bg-black border border-border rounded-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">No matches found</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="replace" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">Test String</Label>
            <Textarea
              placeholder="Enter text to test against your regex..."
              value={testString}
              onChange={(e) => handleTestStringChange(e.target.value)}
              className="min-h-24 font-mono text-sm border-2 border-orange-300 focus:border-orange-500"
              style={{ wordBreak: 'break-all', overflowWrap: 'anywhere', whiteSpace: 'normal' }}
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground flex items-center gap-2">
              <Replace className="h-4 w-4" />
              Replace With
            </Label>
            <Input
              placeholder="Replacement string (use $1, $2 for groups)"
              value={replaceString}
              onChange={(e) => handleReplaceStringChange(e.target.value)}
              className="font-mono border-2 border-orange-300 focus:border-orange-500"
            />
            <p className="text-xs text-muted-foreground">
              Use $1, $2, etc. for capture groups. Use $& for full match.
            </p>
          </div>

          {replaceResult && (
            <Card className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-heading-accent" />
                Result After Replacement
              </h3>
              <div className="font-mono text-sm p-3 bg-muted rounded whitespace-pre-wrap break-all">
                {replaceResult}
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Replaced {matches.length} occurrence(s)
                </p>
              </div>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        <Button onClick={openCodeGenerator} className="gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
          <Code2 className="h-4 w-4" />
          Generate Code
        </Button>
        <Button onClick={openExplanation} variant="outline" className="gap-2">
          <BookOpen className="h-4 w-4" />
          Explain Pattern
        </Button>
      </div>

      {/* Code Generator Modal */}
      {showCodeGenerator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-heading-accent" />
                  Code Generator
                </h2>
                <Button size="sm" variant="ghost" onClick={() => setShowCodeGenerator(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Language Selection */}
              <div className="flex flex-wrap gap-2">
                {['javascript', 'python', 'java', 'php', 'go', 'csharp', 'ruby'].map((lang) => (
                  <Button
                    key={lang}
                    size="sm"
                    variant={selectedLanguage === lang ? 'default' : 'outline'}
                    onClick={() => {
                      setSelectedLanguage(lang)
                      setGeneratedCode(generateCodeSnippet(lang))
                    }}
                    className="text-xs"
                  >
                    {lang === 'csharp' ? 'C#' : lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </Button>
                ))}
              </div>

              {/* Generated Code */}
              <div className="relative">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs font-mono whitespace-pre-wrap break-words">
                  {generatedCode}
                </pre>
                <Button
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={copyGeneratedCode}
                >
                  {codeCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setShowCodeGenerator(false)}>
                  Close
                </Button>
                <Button onClick={copyGeneratedCode} className="gap-2">
                  {codeCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {codeCopied ? 'Copied!' : 'Copy Code'}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Explanation Modal */}
      {showExplanation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-foreground" />
                  Pattern Explanation
                </h2>
                <Button size="sm" variant="ghost" onClick={() => setShowExplanation(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <pre className="text-sm whitespace-pre-wrap text-foreground">{explanation}</pre>
              </div>

              <Button variant="outline" onClick={() => setShowExplanation(false)} className="w-full">
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
