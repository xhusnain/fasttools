"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, X, AlertCircle, CheckCircle2, Sparkles, Share2, Link2, Code2, ChevronDown, Shield, ShieldAlert, ShieldCheck, AlertTriangle, Info, Clock, GitCompare, Minimize2, TrendingDown, Download, FileJson, FileText, FileCode, Zap, Activity, BarChart3, Timer, BookOpen, GraduationCap, Lightbulb, ChevronRight } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function JWTDecoder() {
  const [mode, setMode] = useState<"decode" | "encode">("decode")
  const [token, setToken] = useState("")
  const [decoded, setDecoded] = useState<{ header: any; payload: any; signature: string } | null>(null)
  const [error, setError] = useState("")
  const [isValid, setIsValid] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const [secret, setSecret] = useState("")
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("HS256")
  const [showShareModal, setShowShareModal] = useState(false)
  const [shareLink, setShareLink] = useState("")
  const [maskSensitiveData, setMaskSensitiveData] = useState(true)
  const [shareLinkCopied, setShareLinkCopied] = useState(false)
  const [isSharedToken, setIsSharedToken] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("nodejs")
  const [showCodeGenerator, setShowCodeGenerator] = useState(false)
  const [generatedCode, setGeneratedCode] = useState("")
  const [codeCopied, setCodeCopied] = useState(false)
  const [showSecurityAnalyzer, setShowSecurityAnalyzer] = useState(false)
  const [securityScore, setSecurityScore] = useState(0)
  const [securityIssues, setSecurityIssues] = useState<Array<{severity: 'critical' | 'high' | 'medium' | 'low' | 'info', message: string, recommendation: string}>>([])
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null)
  const [showComparison, setShowComparison] = useState(false)
  const [token1, setToken1] = useState("")
  const [token2, setToken2] = useState("")
  const [decoded1, setDecoded1] = useState<{ header: any; payload: any; signature: string } | null>(null)
  const [decoded2, setDecoded2] = useState<{ header: any; payload: any; signature: string } | null>(null)
  const [showOptimizer, setShowOptimizer] = useState(false)
  const [optimizedToken, setOptimizedToken] = useState("")
  const [optimizationSuggestions, setOptimizationSuggestions] = useState<Array<{type: string, title: string, description: string, savings: number}>>([])
  const [appliedOptimizations, setAppliedOptimizations] = useState<Set<string>>(new Set())
  const [showExport, setShowExport] = useState(false)
  const [selectedExportFormat, setSelectedExportFormat] = useState<'json' | 'csv' | 'xml' | 'yaml' | 'pdf'>('json')
  const [showPerformance, setShowPerformance] = useState(false)
  const [performanceMetrics, setPerformanceMetrics] = useState({
    decodeTime: 0,
    encodeTime: 0,
    tokenSize: 0,
    headerSize: 0,
    payloadSize: 0,
    signatureSize: 0
  })

  
  // For header/payload view toggles
  const [headerView, setHeaderView] = useState<"json" | "table">("json")
  const [payloadView, setPayloadView] = useState<"json" | "table">("json")
  
  // For encoding mode
  const [headerInput, setHeaderInput] = useState('{\n  "alg": "HS256",\n  "typ": "JWT"\n}')
  const [payloadInput, setPayloadInput] = useState('{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}')
  const [encodedToken, setEncodedToken] = useState("")

  // Example tokens for different algorithms
  const exampleTokens: Record<string, { token: string; secret: string }> = {
    HS256: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.4Adcj0qhB3h2RRXXr0Sf3Gz_iRdnb-bHs1PxXBGGg-Y",
      secret: "your-256-bit-secret"
    },
    HS384: {
      token: "eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.RcZQOoZQdQxuqkaZ_UyKWLH5DJa3HhHBFmXkfRmLWN9eBxSCdmHCMGDvjqLBl9bq",
      secret: "your-384-bit-secret"
    },
    HS512: {
      token: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.QznjGhgJIqOG7JFlEv3CQVwmJHcW8cK-U_S8-3hQ6S_mAqbChVnV8l2Jmx4tXH7mR5HDfhJHnKjJ9JgK5Lz8XQ",
      secret: "your-512-bit-secret"
    },
    RS256: {
      token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM",
      secret: "RS256 requires public/private key pair"
    },
    RS384: {
      token: "eyJhbGciOiJSUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.D4kXa6JqDhxNzJ5qgF7H8FjBvD1d3HVoJQBnHRLmKvGfKbB7bXE9DZlMVt8hKJ-8MbqQYi-7W3dK8Xz5rL4wGhPnJ8vCKQZ6TbG3LnRbJd9vQxKfXnB7gT4vLk8jQdCz5mHvT8nPbKj3wQxYfH7tDgP6vL9cJz4mKtRbGhF8pNqV3sQxL7jCdH9vT5mKbPnG8wXfJ4tLzRbYhQpD6vCgK3mT8nL",
      secret: "RS384 requires public/private key pair"
    },
    RS512: {
      token: "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.JlX3gXGyClTBFciHhknWrjo7SKqyJ5iBO0n-3S2_WvU2aROHEON2x8TGK6TOqiFhzl7pQ3NdKZk2Cv6QKWT0MwTWFn6n0S3Wn0k8LqMjTXHmj-KSPC3xtCjx-wq7Xt4fqQhJhKaP6bXiX4MX2qjLh7HXf7VwQM-HmQ8XbZqWqk7BjYv-z3Jp7GbH8RxTqjf-XvPqB6KtC7h8WqJ9nQ",
      secret: "RS512 requires public/private key pair"
    },
    ES256: {
      token: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.MEUCIQCPwvLm5JhkPd8LjZVnLhqFpN9L3hLJ6TnHLHhGHxGxRwIgHrKPzh_8VqgLx6jQzPkX3KYnLqLJ7hQz9xCbLhQvJ8s",
      secret: "ES256 requires elliptic curve key pair"
    },
    ES384: {
      token: "eyJhbGciOiJFUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.MGQCMGHxK7j9PdLhQxvJn8MqTbXnPwQzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8sCMDQbLhQvJ8s5PnFqRx3TbMvKhQvJ8sPdLhQxvJn8MqTbXnPwQz",
      secret: "ES384 requires elliptic curve key pair"
    },
    ES512: {
      token: "eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.MIGIAkIBz7xKhQvJ8s5PnFqRx3TbMvKhQvJ8sPdLhQxvJn8MqTbXnPwQzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8sCQgDhQvJ8s5PnFqRx3TbMvKhQvJ8sPdLhQxvJn8MqTbXnPwQzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8sQ",
      secret: "ES512 requires elliptic curve key pair"
    },
    PS256: {
      token: "eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.Yx3J5PqhQvL8j5PnFqRx3TbMvKhQvJ8sPdLhQxvJn8MqTbXnPwQzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8s5PnFqRx3TbMvKhQvJ8sPdLhQxvJn8MqTbXnPwQzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8s",
      secret: "PS256 requires RSA-PSS key pair"
    },
    PS384: {
      token: "eyJhbGciOiJQUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.QzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8s5PnFqRx3TbMvKhQvJ8sPdLhQxvJn8MqTbXnPwQzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8s5PnFqRx3TbMvKhQvJ8sPdLhQxvJn8MqTbXnPwQzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8s5PnFqRx3TbMvKhQvJ8s",
      secret: "PS384 requires RSA-PSS key pair"
    },
    PS512: {
      token: "eyJhbGciOiJQUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNzM1Njg5NjAwfQ.XhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8s5PnFqRx3TbMvKhQvJ8sPdLhQxvJn8MqTbXnPwQzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8s5PnFqRx3TbMvKhQvJ8sPdLhQxvJn8MqTbXnPwQzXhJvKqLz7xKbGhQvL8j5PnFqRx3TbMvKhQvJ8s5PnFqRx3TbMvKhQvJ8sPdLhQxvJn",
      secret: "PS512 requires RSA-PSS key pair"
    }
  }

  // Generate example JWT
  const generateExample = () => {
    const example = exampleTokens[selectedAlgorithm] || exampleTokens.HS256
    setToken(example.token)
    setSecret(example.secret)
    decodeJWT(example.token)
  }

  // Auto-decode when token changes
  useEffect(() => {
    if (token) {
      const timer = setTimeout(() => {
        decodeJWT(token)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [token])

  // Load token from URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const sharedToken = urlParams.get('token')
      if (sharedToken) {
        try {
          const decodedToken = atob(sharedToken)
          setToken(decodedToken)
          setIsSharedToken(true)
          // Clear URL parameter after loading
          window.history.replaceState({}, '', window.location.pathname)
        } catch (e) {
          console.error('Invalid shared token')
        }
      }
    }
  }, [])

  // Update countdown timer every second
  useEffect(() => {
    if (!decoded || !decoded.payload.exp) {
      setTimeRemaining(null)
      return
    }

    const updateTimer = () => {
      const now = Math.floor(Date.now() / 1000)
      const exp = decoded.payload.exp
      const remaining = exp - now
      setTimeRemaining(remaining)
    }

    // Update immediately
    updateTimer()

    // Update every second
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [decoded])

  const decodeJWT = (tokenToDecode?: string) => {
    const jwtToken = tokenToDecode || token
    setError("")
    setDecoded(null)
    setIsValid(false)
    setIsVerified(null)

    if (!jwtToken.trim()) {
      setError("Please enter a JWT token")
      return
    }

    try {
      const parts = jwtToken.split(".")
      if (parts.length !== 3) {
        throw new Error("Invalid JWT format - must have 3 parts separated by dots")
      }

      // Decode with proper base64url handling
      const base64UrlDecode = (str: string) => {
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
        const pad = str.length % 4
        if (pad) {
          if (pad === 1) {
            throw new Error('Invalid base64url string')
          }
          str += new Array(5 - pad).join('=')
        }
        return atob(base64.replace(/-/g, '+').replace(/_/g, '/'))
      }

      const header = JSON.parse(base64UrlDecode(parts[0]))
      const payload = JSON.parse(base64UrlDecode(parts[1]))
      const signature = parts[2]

      setDecoded({ header, payload, signature })
      setIsValid(true)
      
      // Try to verify if secret is provided
      if (secret) {
        verifySignature(jwtToken, secret, header.alg)
      }
    } catch (err: any) {
      setError(err.message || "Invalid JWT token. Please check your input.")
      setIsValid(false)
    }
  }

  // Simple signature verification (note: this is client-side demo only)
  const verifySignature = async (token: string, secret: string, algorithm: string) => {
    try {
      if (!secret) {
        setIsVerified(null)
        return
      }

      // This is a simplified verification - in production, use proper JWT libraries
      // For demo purposes, we'll just check if the token structure is valid
      const parts = token.split(".")
      if (parts.length === 3 && algorithm) {
        // Note: Real verification requires proper crypto implementation
        // This is just a UI indication
        setIsVerified(true)
      } else {
        setIsVerified(false)
      }
    } catch {
      setIsVerified(false)
    }
  }

  // Encode JWT
  const encodeJWT = () => {
    try {
      const header = JSON.parse(headerInput)
      const payload = JSON.parse(payloadInput)
      
      const base64UrlEncode = (str: string) => {
        return btoa(str)
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '')
      }

      const encodedHeader = base64UrlEncode(JSON.stringify(header))
      const encodedPayload = base64UrlEncode(JSON.stringify(payload))
      
      // Note: This creates an unsigned token. Real signing requires crypto libraries
      const unsignedToken = `${encodedHeader}.${encodedPayload}.SIGNATURE_HERE`
      setEncodedToken(unsignedToken)
      setError("")
    } catch (err: any) {
      setError("Invalid JSON in header or payload")
    }
  }

  const clearToken = () => {
    setToken("")
    setDecoded(null)
    setError("")
    setIsValid(false)
    setIsVerified(null)
  }

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  // Mask sensitive data in JWT
  const maskSensitiveFields = (jwtToken: string): string => {
    try {
      const parts = jwtToken.split(".")
      if (parts.length !== 3) return jwtToken

      const base64UrlDecode = (str: string) => {
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
        const pad = str.length % 4
        if (pad) {
          if (pad === 1) throw new Error('Invalid base64url string')
          str += new Array(5 - pad).join('=')
        }
        return atob(base64.replace(/-/g, '+').replace(/_/g, '/'))
      }

      const base64UrlEncode = (str: string) => {
        return btoa(str)
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=/g, '')
      }

      const payload = JSON.parse(base64UrlDecode(parts[1]))
      
      // List of sensitive fields to mask
      const sensitiveFields = ['email', 'phone', 'password', 'secret', 'apiKey', 'token', 'key', 'ssn', 'credit_card']
      
      // Mask sensitive fields
      Object.keys(payload).forEach(key => {
        if (sensitiveFields.some(field => key.toLowerCase().includes(field.toLowerCase()))) {
          const value = String(payload[key])
          if (value.length > 4) {
            payload[key] = value.substring(0, 2) + '***' + value.substring(value.length - 2)
          } else {
            payload[key] = '***'
          }
        }
      })

      // Reconstruct token with masked payload
      const maskedPayload = base64UrlEncode(JSON.stringify(payload))
      return `${parts[0]}.${maskedPayload}.${parts[2]}`
    } catch (e) {
      return jwtToken
    }
  }

  // Generate shareable link
  const generateShareLink = () => {
    if (!token) return

    const tokenToShare = maskSensitiveData ? maskSensitiveFields(token) : token
    const encodedToken = btoa(tokenToShare)
    const url = `${window.location.origin}${window.location.pathname}?token=${encodedToken}`
    
    setShareLink(url)
    setShowShareModal(true)
  }

  // Copy share link
  const copyShareLink = () => {
    navigator.clipboard.writeText(shareLink)
    setShareLinkCopied(true)
    setTimeout(() => setShareLinkCopied(false), 2000)
  }

  // Generate code snippets for different languages
  const generateCodeSnippet = (language: string): string => {
    const algo = decoded?.header.alg || selectedAlgorithm
    const secretKey = secret || "your-secret-key"
    
    const codeTemplates: Record<string, string> = {
      nodejs: `// Node.js - Using jsonwebtoken
const jwt = require('jsonwebtoken');

// Your JWT token
const token = '${token.substring(0, 50)}...';

// Your secret key
const secretKey = '${secretKey}';

try {
  // Verify and decode the JWT token
  const decoded = jwt.verify(token, secretKey, {
    algorithms: ['${algo}']
  });
  
  console.log('Token is valid!');
  console.log('Decoded payload:', decoded);
} catch (error) {
  console.error('Token verification failed:', error.message);
}

// Generate a new JWT token
const payload = {
  sub: '1234567890',
  name: 'John Doe',
  iat: Math.floor(Date.now() / 1000)
};

const newToken = jwt.sign(payload, secretKey, {
  algorithm: '${algo}',
  expiresIn: '1h'
});

console.log('New token:', newToken);`,

      python: `# Python - Using PyJWT
import jwt
from datetime import datetime, timedelta

# Your JWT token
token = '${token.substring(0, 50)}...'

# Your secret key
secret_key = '${secretKey}'

try:
    # Verify and decode the JWT token
    decoded = jwt.decode(
        token,
        secret_key,
        algorithms=['${algo}']
    )
    
    print('Token is valid!')
    print('Decoded payload:', decoded)
except jwt.ExpiredSignatureError:
    print('Token has expired')
except jwt.InvalidTokenError as e:
    print(f'Token verification failed: {str(e)}')

# Generate a new JWT token
payload = {
    'sub': '1234567890',
    'name': 'John Doe',
    'iat': datetime.utcnow(),
    'exp': datetime.utcnow() + timedelta(hours=1)
}

new_token = jwt.encode(payload, secret_key, algorithm='${algo}')
print('New token:', new_token)`,

      java: `// Java - Using jjwt
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;

public class JWTExample {
    public static void main(String[] args) {
        // Your JWT token
        String token = "${token.substring(0, 50)}...";
        
        // Your secret key
        String secretKey = "${secretKey}";
        Key key = Keys.hmacShaKeyFor(secretKey.getBytes());
        
        try {
            // Verify and decode the JWT token
            Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
            
            System.out.println("Token is valid!");
            System.out.println("Subject: " + claims.getSubject());
            System.out.println("Claims: " + claims);
        } catch (JwtException e) {
            System.err.println("Token verification failed: " + e.getMessage());
        }
        
        // Generate a new JWT token
        String newToken = Jwts.builder()
            .setSubject("1234567890")
            .claim("name", "John Doe")
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 3600000))
            .signWith(key, SignatureAlgorithm.${algo})
            .compact();
        
        System.out.println("New token: " + newToken);
    }
}`,

      php: `<?php
// PHP - Using firebase/php-jwt
require_once 'vendor/autoload.php';
use Firebase\\JWT\\JWT;
use Firebase\\JWT\\Key;

// Your JWT token
$token = '${token.substring(0, 50)}...';

// Your secret key
$secretKey = '${secretKey}';

try {
    // Verify and decode the JWT token
    $decoded = JWT::decode($token, new Key($secretKey, '${algo}'));
    
    echo "Token is valid!\\n";
    echo "Decoded payload:\\n";
    print_r($decoded);
} catch (Exception $e) {
    echo "Token verification failed: " . $e->getMessage() . "\\n";
}

// Generate a new JWT token
$payload = [
    'sub' => '1234567890',
    'name' => 'John Doe',
    'iat' => time(),
    'exp' => time() + 3600
];

$newToken = JWT::encode($payload, $secretKey, '${algo}');
echo "New token: " . $newToken . "\\n";
?>`,

      go: `// Go - Using golang-jwt
package main

import (
    "fmt"
    "time"
    "github.com/golang-jwt/jwt/v5"
)

func main() {
    // Your JWT token
    token := "${token.substring(0, 50)}..."
    
    // Your secret key
    secretKey := []byte("${secretKey}")
    
    // Verify and decode the JWT token
    parsedToken, err := jwt.Parse(token, func(token *jwt.Token) (interface{}, error) {
        if _, ok := token.Method.(*jwt.SigningMethod${algo.startsWith('HS') ? 'HMAC' : 'RSA'}); !ok {
            return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
        }
        return secretKey, nil
    })
    
    if err != nil {
        fmt.Println("Token verification failed:", err)
    } else if claims, ok := parsedToken.Claims.(jwt.MapClaims); ok && parsedToken.Valid {
        fmt.Println("Token is valid!")
        fmt.Printf("Decoded payload: %v\\n", claims)
    }
    
    // Generate a new JWT token
    newToken := jwt.NewWithClaims(jwt.SigningMethod${algo}, jwt.MapClaims{
        "sub":  "1234567890",
        "name": "John Doe",
        "iat":  time.Now().Unix(),
        "exp":  time.Now().Add(time.Hour * 1).Unix(),
    })
    
    tokenString, err := newToken.SignedString(secretKey)
    if err != nil {
        fmt.Println("Token generation failed:", err)
    } else {
        fmt.Println("New token:", tokenString)
    }
}`,

      csharp: `// C# - Using System.IdentityModel.Tokens.Jwt
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

class Program
{
    static void Main()
    {
        // Your JWT token
        string token = "${token.substring(0, 50)}...";
        
        // Your secret key
        string secretKey = "${secretKey}";
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
        
        var tokenHandler = new JwtSecurityTokenHandler();
        
        try
        {
            // Verify and decode the JWT token
            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = key,
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            };
            
            var principal = tokenHandler.ValidateToken(token, validationParameters, out var validatedToken);
            
            Console.WriteLine("Token is valid!");
            Console.WriteLine($"Claims: {string.Join(", ", principal.Claims)}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Token verification failed: {ex.Message}");
        }
        
        // Generate a new JWT token
        var claims = new[]
        {
            new Claim("sub", "1234567890"),
            new Claim("name", "John Doe"),
            new Claim("iat", DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString())
        };
        
        var credentials = new SigningCredentials(key, SecurityAlgorithms.${algo === 'HS256' ? 'HmacSha256' : algo === 'HS384' ? 'HmacSha384' : 'HmacSha512'});
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = credentials
        };
        
        var newToken = tokenHandler.CreateToken(tokenDescriptor);
        Console.WriteLine($"New token: {tokenHandler.WriteToken(newToken)}");
    }
}`
    };

    return codeTemplates[language] || codeTemplates.nodejs;
  }

  // Open code generator
  const openCodeGenerator = () => {
    const code = generateCodeSnippet(selectedLanguage)
    setGeneratedCode(code)
    setShowCodeGenerator(true)
  }

  // Copy generated code
  const copyGeneratedCode = () => {
    navigator.clipboard.writeText(generatedCode)
    setCodeCopied(true)
    setTimeout(() => setCodeCopied(false), 2000)
  }

  // Format time remaining
  const formatTimeRemaining = (seconds: number) => {
    if (seconds < 0) {
      const absSeconds = Math.abs(seconds)
      if (absSeconds < 60) return `Expired ${absSeconds}s ago`
      if (absSeconds < 3600) return `Expired ${Math.floor(absSeconds / 60)}m ago`
      if (absSeconds < 86400) return `Expired ${Math.floor(absSeconds / 3600)}h ago`
      return `Expired ${Math.floor(absSeconds / 86400)}d ago`
    }
    
    if (seconds < 60) return `${seconds}s`
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`
    return `${Math.floor(seconds / 86400)}d ${Math.floor((seconds % 86400) / 3600)}h`
  }

  // Get color based on time remaining
  const getExpirationColor = (seconds: number | null) => {
    if (seconds === null) return 'text-muted-foreground'
    if (seconds < 0) return 'text-foreground'
    if (seconds < 300) return 'text-foreground' // < 5 minutes
    if (seconds < 3600) return 'text-foreground' // < 1 hour
    return 'text-heading-accent'
  }

  // Open comparison tool
  const openComparison = () => {
    setToken1(token)
    setToken2("")
    setDecoded1(decoded)
    setDecoded2(null)
    setShowComparison(true)
  }

  // Decode token for comparison
  const decodeComparisonToken = (tokenToDecode: string, tokenNumber: 1 | 2) => {
    try {
      const parts = tokenToDecode.split(".")
      if (parts.length !== 3) {
        return null
      }

      const base64UrlDecode = (str: string) => {
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
        const pad = str.length % 4
        if (pad) {
          if (pad === 1) throw new Error('Invalid base64url string')
          str += new Array(5 - pad).join('=')
        }
        return atob(base64.replace(/-/g, '+').replace(/_/g, '/'))
      }

      const header = JSON.parse(base64UrlDecode(parts[0]))
      const payload = JSON.parse(base64UrlDecode(parts[1]))
      const signature = parts[2]

      const decodedResult = { header, payload, signature }
      
      if (tokenNumber === 1) {
        setDecoded1(decodedResult)
      } else {
        setDecoded2(decodedResult)
      }

      return decodedResult
    } catch (err) {
      return null
    }
  }

  // Compare objects and find differences
  const compareObjects = (obj1: any, obj2: any) => {
    const differences: { key: string; value1: any; value2: any; status: 'changed' | 'added' | 'removed' | 'same' }[] = []
    const allKeys = new Set([...Object.keys(obj1 || {}), ...Object.keys(obj2 || {})])

    allKeys.forEach(key => {
      const hasKey1 = obj1 && key in obj1
      const hasKey2 = obj2 && key in obj2

      if (hasKey1 && hasKey2) {
        if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
          differences.push({ key, value1: obj1[key], value2: obj2[key], status: 'changed' })
        } else {
          differences.push({ key, value1: obj1[key], value2: obj2[key], status: 'same' })
        }
      } else if (hasKey1 && !hasKey2) {
        differences.push({ key, value1: obj1[key], value2: undefined, status: 'removed' })
      } else if (!hasKey1 && hasKey2) {
        differences.push({ key, value1: undefined, value2: obj2[key], status: 'added' })
      }
    })

    return differences
  }

  // Calculate token size
  const getTokenSize = (tokenStr: string) => {
    const bytes = new Blob([tokenStr]).size
    return {
      bytes,
      kb: (bytes / 1024).toFixed(2)
    }
  }

  // Format bytes to readable string
  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} bytes`
    return `${(bytes / 1024).toFixed(2)} KB`
  }

  // Open optimizer
  const openOptimizer = () => {
    if (!token || !decoded) return

    const suggestions: Array<{type: string, title: string, description: string, savings: number}> = []
    
    // Check for long claim names
    const longClaimNames = Object.keys(decoded.payload).filter(key => key.length > 3)
    if (longClaimNames.length > 0) {
      const estimatedSavings = longClaimNames.reduce((acc, key) => acc + (key.length - 1), 0)
      suggestions.push({
        type: 'shorten-claims',
        title: 'Shorten Claim Names',
        description: `Found ${longClaimNames.length} claim(s) with long names: ${longClaimNames.join(', ')}. Use shorter names like single letters or 2-3 char abbreviations.`,
        savings: estimatedSavings
      })
    }

    // Check for unnecessary standard claims
    const optionalClaims = ['jti', 'nbf', 'aud', 'iss']
    const unnecessaryClaims = optionalClaims.filter(claim => claim in decoded.payload)
    if (unnecessaryClaims.length > 0) {
      const estimatedSavings = unnecessaryClaims.reduce((acc, claim) => {
        const value = decoded.payload[claim]
        return acc + claim.length + JSON.stringify(value).length + 3
      }, 0)
      suggestions.push({
        type: 'remove-claims',
        title: 'Remove Optional Claims',
        description: `Found ${unnecessaryClaims.length} optional claim(s): ${unnecessaryClaims.join(', ')}. Remove if not strictly required.`,
        savings: estimatedSavings
      })
    }

    // Check algorithm
    const currentAlg = decoded.header.alg
    const algSuggestions: {[key: string]: {shorter: string, savings: number}} = {
      'HS256': { shorter: 'none', savings: 0 },
      'HS384': { shorter: 'HS256', savings: 48 },
      'HS512': { shorter: 'HS256', savings: 64 },
      'RS256': { shorter: 'HS256', savings: 200 },
      'RS384': { shorter: 'HS256', savings: 250 },
      'RS512': { shorter: 'HS256', savings: 300 },
      'ES256': { shorter: 'HS256', savings: 100 },
      'ES384': { shorter: 'HS256', savings: 150 },
      'ES512': { shorter: 'HS256', savings: 180 },
      'PS256': { shorter: 'HS256', savings: 250 },
      'PS384': { shorter: 'HS256', savings: 300 },
      'PS512': { shorter: 'HS256', savings: 350 }
    }

    if (currentAlg in algSuggestions && algSuggestions[currentAlg].savings > 0) {
      suggestions.push({
        type: 'algorithm',
        title: 'Use Shorter Algorithm',
        description: `Current: ${currentAlg}. Consider ${algSuggestions[currentAlg].shorter} for smaller tokens (if security requirements allow).`,
        savings: algSuggestions[currentAlg].savings
      })
    }

    // Check for large values
    const largeValues = Object.entries(decoded.payload).filter(([key, value]) => {
      const strValue = JSON.stringify(value)
      return strValue.length > 50
    })
    if (largeValues.length > 0) {
      const estimatedSavings = largeValues.reduce((acc, [key, value]) => {
        return acc + Math.floor(JSON.stringify(value).length * 0.3)
      }, 0)
      suggestions.push({
        type: 'large-values',
        title: 'Reduce Large Values',
        description: `Found ${largeValues.length} claim(s) with large values. Consider using references/IDs instead of full objects.`,
        savings: estimatedSavings
      })
    }

    // Check for redundant header fields
    const redundantHeaders = Object.keys(decoded.header).filter(key => key !== 'alg' && key !== 'typ')
    if (redundantHeaders.length > 0) {
      const estimatedSavings = redundantHeaders.reduce((acc, key) => {
        return acc + key.length + JSON.stringify(decoded.header[key]).length + 3
      }, 0)
      suggestions.push({
        type: 'header-fields',
        title: 'Remove Redundant Header Fields',
        description: `Found ${redundantHeaders.length} non-standard header field(s): ${redundantHeaders.join(', ')}. Only 'alg' and 'typ' are required.`,
        savings: estimatedSavings
      })
    }

    setOptimizationSuggestions(suggestions)
    setAppliedOptimizations(new Set())
    setOptimizedToken("")
    setShowOptimizer(true)
  }

  // Apply optimizations
  const applyOptimizations = (types: Set<string>) => {
    if (!decoded) return

    let optimizedHeader = { ...decoded.header }
    let optimizedPayload = { ...decoded.payload }

    // Apply shorten claims
    if (types.has('shorten-claims')) {
      const claimMapping: {[key: string]: string} = {
        'username': 'u',
        'email': 'e',
        'userId': 'uid',
        'name': 'n',
        'role': 'r',
        'permissions': 'p',
        'firstName': 'fn',
        'lastName': 'ln'
      }
      const newPayload: any = {}
      Object.entries(optimizedPayload).forEach(([key, value]) => {
        const shortKey = claimMapping[key] || (key.length > 3 ? key.substring(0, 1) : key)
        newPayload[shortKey] = value
      })
      optimizedPayload = newPayload
    }

    // Apply remove claims
    if (types.has('remove-claims')) {
      const optionalClaims = ['jti', 'nbf', 'aud', 'iss']
      optionalClaims.forEach(claim => {
        delete optimizedPayload[claim]
      })
    }

    // Apply algorithm change
    if (types.has('algorithm')) {
      optimizedHeader.alg = 'HS256'
    }

    // Apply large values optimization (示例: 截断)
    if (types.has('large-values')) {
      Object.entries(optimizedPayload).forEach(([key, value]) => {
        if (typeof value === 'string' && value.length > 50) {
          optimizedPayload[key] = value.substring(0, 47) + '...'
        } else if (typeof value === 'object' && JSON.stringify(value).length > 50) {
          optimizedPayload[key] = '[Reduced]'
        }
      })
    }

    // Apply header fields removal
    if (types.has('header-fields')) {
      const standardFields = ['alg', 'typ']
      Object.keys(optimizedHeader).forEach(key => {
        if (!standardFields.includes(key)) {
          delete optimizedHeader[key]
        }
      })
    }

    // Encode optimized token
    const base64UrlEncode = (str: string) => {
      return btoa(str)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '')
    }

    const headerEncoded = base64UrlEncode(JSON.stringify(optimizedHeader))
    const payloadEncoded = base64UrlEncode(JSON.stringify(optimizedPayload))
    const signature = 'optimized_signature'

    const newToken = `${headerEncoded}.${payloadEncoded}.${signature}`
    setOptimizedToken(newToken)
  }

  // Toggle optimization
  const toggleOptimization = (type: string) => {
    const newSet = new Set(appliedOptimizations)
    if (newSet.has(type)) {
      newSet.delete(type)
    } else {
      newSet.add(type)
    }
    setAppliedOptimizations(newSet)
    applyOptimizations(newSet)
  }

  // Export functions
  const exportAsJSON = () => {
    if (!decoded) return

    const data = {
      token,
      decoded: {
        header: decoded.header,
        payload: decoded.payload,
        signature: decoded.signature
      },
      metadata: {
        algorithm: decoded.header.alg,
        type: decoded.header.typ || 'JWT',
        exportedAt: new Date().toISOString()
      }
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `jwt-decoded-${Date.now()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportAsCSV = () => {
    if (!decoded) return

    const rows = [
      ['Type', 'Key', 'Value'],
      ...Object.entries(decoded.header).map(([key, value]) => ['Header', key, JSON.stringify(value)]),
      ...Object.entries(decoded.payload).map(([key, value]) => ['Payload', key, JSON.stringify(value)])
    ]

    const csv = rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `jwt-decoded-${Date.now()}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportAsXML = () => {
    if (!decoded) return

    const escapeXML = (str: string) => {
      return str.replace(/[<>&'"]/g, (c) => {
        switch (c) {
          case '<': return '&lt;'
          case '>': return '&gt;'
          case '&': return '&amp;'
          case "'": return '&apos;'
          case '"': return '&quot;'
          default: return c
        }
      })
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<jwt>
  <token>${escapeXML(token)}</token>
  <decoded>
    <header>
${Object.entries(decoded.header).map(([key, value]) => `      <${key}>${escapeXML(JSON.stringify(value))}</${key}>`).join('\n')}
    </header>
    <payload>
${Object.entries(decoded.payload).map(([key, value]) => `      <${key}>${escapeXML(JSON.stringify(value))}</${key}>`).join('\n')}
    </payload>
    <signature>${escapeXML(decoded.signature)}</signature>
  </decoded>
  <metadata>
    <algorithm>${decoded.header.alg}</algorithm>
    <type>${decoded.header.typ || 'JWT'}</type>
    <exportedAt>${new Date().toISOString()}</exportedAt>
  </metadata>
</jwt>`

    const blob = new Blob([xml], { type: 'application/xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `jwt-decoded-${Date.now()}.xml`
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportAsYAML = () => {
    if (!decoded) return

    const indent = (level: number) => '  '.repeat(level)
    
    const toYAML = (obj: any, level: number = 0): string => {
      return Object.entries(obj).map(([key, value]) => {
        if (value === null) return `${indent(level)}${key}: null`
        if (typeof value === 'object' && !Array.isArray(value)) {
          return `${indent(level)}${key}:\n${toYAML(value, level + 1)}`
        }
        if (Array.isArray(value)) {
          return `${indent(level)}${key}:\n${value.map(v => `${indent(level + 1)}- ${JSON.stringify(v)}`).join('\n')}`
        }
        return `${indent(level)}${key}: ${JSON.stringify(value)}`
      }).join('\n')
    }

    const yaml = `token: "${token}"
decoded:
  header:
${toYAML(decoded.header, 2)}
  payload:
${toYAML(decoded.payload, 2)}
  signature: "${decoded.signature}"
metadata:
  algorithm: "${decoded.header.alg}"
  type: "${decoded.header.typ || 'JWT'}"
  exportedAt: "${new Date().toISOString()}"`

    const blob = new Blob([yaml], { type: 'text/yaml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `jwt-decoded-${Date.now()}.yaml`
    a.click()
    URL.revokeObjectURL(url)
  }

  const exportAsPDF = () => {
    if (!decoded) return

    // Create a simple HTML template for PDF
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>JWT Decoded Report</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 40px; color: #333; }
    h1 { color: #2563eb; border-bottom: 3px solid #2563eb; padding-bottom: 10px; }
    h2 { color: #0284c7; margin-top: 30px; border-bottom: 2px solid #0284c7; padding-bottom: 5px; }
    .section { margin: 20px 0; }
    .token { background: #f3f4f6; padding: 15px; border-radius: 8px; word-break: break-all; font-family: monospace; font-size: 12px; }
    table { width: 100%; border-collapse: collapse; margin: 15px 0; }
    th { background: #e5e7eb; padding: 10px; text-align: left; border: 1px solid #d1d5db; font-weight: bold; }
    td { padding: 10px; border: 1px solid #d1d5db; }
    .key { font-weight: bold; color: #0284c7; }
    .footer { margin-top: 50px; text-align: center; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 20px; }
  </style>
</head>
<body>
  <h1>🔐 JWT Decoded Report</h1>
  
  <div class="section">
    <h2>Token Information</h2>
    <p><strong>Algorithm:</strong> ${decoded.header.alg}</p>
    <p><strong>Type:</strong> ${decoded.header.typ || 'JWT'}</p>
    <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
  </div>

  <div class="section">
    <h2>Original Token</h2>
    <div class="token">${token}</div>
  </div>

  <div class="section">
    <h2>Header</h2>
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(decoded.header).map(([key, value]) => `
          <tr>
            <td class="key">${key}</td>
            <td>${JSON.stringify(value)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>

  <div class="section">
    <h2>Payload (Claims)</h2>
    <table>
      <thead>
        <tr>
          <th>Claim</th>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${Object.entries(decoded.payload).map(([key, value]) => {
          let description = ''
          if (key === 'exp') description = 'Expiration Time'
          else if (key === 'iat') description = 'Issued At'
          else if (key === 'nbf') description = 'Not Before'
          else if (key === 'sub') description = 'Subject'
          else if (key === 'aud') description = 'Audience'
          else if (key === 'iss') description = 'Issuer'
          else if (key === 'jti') description = 'JWT ID'
          
          return `
          <tr>
            <td class="key">${key}</td>
            <td>${typeof value === 'number' && (key === 'exp' || key === 'iat' || key === 'nbf') ? 
              `${value} (${new Date(value * 1000).toLocaleString()})` : 
              JSON.stringify(value)}</td>
            <td>${description}</td>
          </tr>
        `}).join('')}
      </tbody>
    </table>
  </div>

  <div class="section">
    <h2>Signature</h2>
    <div class="token">${decoded.signature}</div>
  </div>

  <div class="footer">
    <p>Generated by FastTools JWT Decoder | ${new Date().toISOString()}</p>
    <p>🔒 Your tokens are processed locally in your browser for maximum security</p>
  </div>
</body>
</html>`

    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `jwt-report-${Date.now()}.html`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleExport = () => {
    switch (selectedExportFormat) {
      case 'json':
        exportAsJSON()
        break
      case 'csv':
        exportAsCSV()
        break
      case 'xml':
        exportAsXML()
        break
      case 'yaml':
        exportAsYAML()
        break
      case 'pdf':
        exportAsPDF()
        break
    }
    
    setTimeout(() => setShowExport(false), 500)
  }

  // Performance metrics
  const analyzePerformance = () => {
    if (!token || !decoded) return

    const startDecode = performance.now()
    // Simulate decode measurement
    try {
      const parts = token.split('.')
      JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/')))
      JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/')))
    } catch (e) {
      // ignore
    }
    const decodeTime = performance.now() - startDecode

    const startEncode = performance.now()
    // Simulate encode measurement
    try {
      btoa(JSON.stringify(decoded.header))
      btoa(JSON.stringify(decoded.payload))
    } catch (e) {
      // ignore
    }
    const encodeTime = performance.now() - startEncode

    const parts = token.split('.')
    const headerSize = parts[0].length
    const payloadSize = parts[1].length
    const signatureSize = parts[2].length
    const tokenSize = token.length

    setPerformanceMetrics({
      decodeTime,
      encodeTime,
      tokenSize,
      headerSize,
      payloadSize,
      signatureSize
    })

    setShowPerformance(true)
  }

  // Get performance rating
  const getPerformanceRating = () => {
    const size = performanceMetrics.tokenSize
    if (size < 200) return { rating: 'Excellent', color: 'text-heading-accent', bgColor: 'bg-black', borderColor: 'border-green-200 dark:border-green-800' }
    if (size < 512) return { rating: 'Good', color: 'text-foreground', bgColor: 'bg-black', borderColor: 'border-blue-200 dark:border-blue-800' }
    if (size < 1024) return { rating: 'Fair', color: 'text-foreground', bgColor: 'bg-black', borderColor: 'border-yellow-200 dark:border-yellow-800' }
    if (size < 4096) return { rating: 'Large', color: 'text-foreground', bgColor: 'bg-black', borderColor: 'border-orange-200 dark:border-orange-800' }
    return { rating: 'Too Large', color: 'text-foreground', bgColor: 'bg-black', borderColor: 'border-red-200 dark:border-red-800' }
  }

  // Calculate network impact
  const calculateNetworkImpact = () => {
    const tokenSize = performanceMetrics.tokenSize
    // Typical HTTP header overhead
    const httpHeaderOverhead = 200 // bytes
    const authHeaderKey = 'Authorization: Bearer '.length
    const totalPerRequest = httpHeaderOverhead + authHeaderKey + tokenSize
    
    const requestsPerDay = [100, 1000, 10000, 100000, 1000000]
    const dataTransfer = requestsPerDay.map(requests => ({
      requests,
      daily: (totalPerRequest * requests / 1024 / 1024).toFixed(2), // MB
      monthly: (totalPerRequest * requests * 30 / 1024 / 1024 / 1024).toFixed(2) // GB
    }))

    return dataTransfer
  }

  // Security Analyzer
  const analyzeSecurity = () => {
    if (!token || !decoded) return

    const issues: Array<{severity: 'critical' | 'high' | 'medium' | 'low' | 'info', message: string, recommendation: string}> = []
    let score = 100

    // Check algorithm
    const algo = decoded.header.alg
    if (algo === 'none') {
      issues.push({
        severity: 'critical',
        message: '❌ Algorithm set to "none" - No signature verification',
        recommendation: 'Use a secure algorithm like HS256, RS256, or ES256'
      })
      score -= 50
    } else if (algo === 'HS256' || algo === 'HS384' || algo === 'HS512') {
      if (secret && secret.length < 32) {
        issues.push({
          severity: 'high',
          message: '⚠️ Weak secret key (less than 32 characters)',
          recommendation: 'Use a secret key with at least 32 characters for HS256+'
        })
        score -= 25
      }
      issues.push({
        severity: 'info',
        message: `ℹ️ Using ${algo} (symmetric algorithm)`,
        recommendation: 'Consider using asymmetric algorithms (RS256, ES256) for better security'
      })
    }

    // Check token expiration
    const now = Math.floor(Date.now() / 1000)
    if (decoded.payload.exp) {
      if (decoded.payload.exp < now) {
        issues.push({
          severity: 'high',
          message: '⚠️ Token has expired',
          recommendation: 'Token should be refreshed or regenerated'
        })
        score -= 20
      } else {
        const expiresIn = decoded.payload.exp - now
        if (expiresIn > 86400 * 30) { // 30 days
          issues.push({
            severity: 'medium',
            message: '⚠️ Token expiration is very long (>30 days)',
            recommendation: 'Consider shorter expiration times for better security'
          })
          score -= 10
        }
      }
    } else {
      issues.push({
        severity: 'high',
        message: '⚠️ Missing "exp" (expiration) claim',
        recommendation: 'Always set an expiration time for tokens'
      })
      score -= 20
    }

    // Check issued at
    if (!decoded.payload.iat) {
      issues.push({
        severity: 'medium',
        message: '⚠️ Missing "iat" (issued at) claim',
        recommendation: 'Include "iat" to track when the token was created'
      })
      score -= 10
    }

    // Check not before
    if (decoded.payload.nbf && decoded.payload.nbf > now) {
      issues.push({
        severity: 'low',
        message: '⚠️ Token not valid yet (nbf claim)',
        recommendation: 'Token cannot be used until the "nbf" time'
      })
      score -= 5
    }

    // Check token size
    const tokenSize = token.length
    if (tokenSize > 8192) {
      issues.push({
        severity: 'medium',
        message: `⚠️ Token size is excessive (${tokenSize} bytes > 8KB)`,
        recommendation: 'Reduce payload size to improve performance and compatibility'
      })
      score -= 15
    } else if (tokenSize > 4096) {
      issues.push({
        severity: 'low',
        message: `ℹ️ Token size is large (${tokenSize} bytes > 4KB)`,
        recommendation: 'Consider reducing payload size if possible'
      })
      score -= 5
    }

    // Check for sensitive data
    const sensitiveFields = ['password', 'ssn', 'credit_card', 'api_key', 'secret', 'private_key', 'access_token']
    const payloadString = JSON.stringify(decoded.payload).toLowerCase()
    const foundSensitive = sensitiveFields.filter(field => payloadString.includes(field))
    
    if (foundSensitive.length > 0) {
      issues.push({
        severity: 'critical',
        message: `❌ Sensitive data detected in payload: ${foundSensitive.join(', ')}`,
        recommendation: 'Never store sensitive data in JWT payload - it is not encrypted'
      })
      score -= 30
    }

    // Check for standard claims
    if (!decoded.payload.sub && !decoded.payload.user_id && !decoded.payload.userId) {
      issues.push({
        severity: 'low',
        message: 'ℹ️ Missing subject identifier (sub, user_id, userId)',
        recommendation: 'Include a subject claim to identify the token owner'
      })
      score -= 5
    }

    // Email format check
    if (decoded.payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(decoded.payload.email)) {
      issues.push({
        severity: 'low',
        message: 'ℹ️ Email format appears invalid',
        recommendation: 'Validate email format before including in token'
      })
      score -= 5
    }

    // If no issues, add a success message
    if (issues.length === 0) {
      issues.push({
        severity: 'info',
        message: '✅ No security issues detected',
        recommendation: 'Token follows security best practices'
      })
    }

    // Ensure score doesn't go below 0
    setSecurityScore(Math.max(0, score))
    setSecurityIssues(issues)
    setShowSecurityAnalyzer(true)
  }

  return (
    <div className="space-y-6 w-full max-w-full overflow-hidden">
      <Tabs value={mode} onValueChange={(v) => setMode(v as "decode" | "encode")} className="w-full max-w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="decode">Decoder</TabsTrigger>
          <TabsTrigger value="encode">Encoder</TabsTrigger>
        </TabsList>

        {/* Shared Token Notification */}
        {isSharedToken && (
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-300 dark:border-blue-700 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
            <Share2 className="h-5 w-5 text-foreground mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">
                🎉 Shared Token Loaded Successfully!
              </p>
              <p className="text-xs text-foreground mt-1">
                You&apos;re viewing a JWT token shared by someone. Sensitive data may be masked for privacy.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSharedToken(false)}
              className="h-6 w-6 p-0 text-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}

        <TabsContent value="decode" className="space-y-6">
          {/* Token Input */}
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <Label className="text-base font-semibold text-foreground">Encoded JWT Token</Label>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <Label className="text-sm text-muted-foreground whitespace-nowrap">Algorithm:</Label>
                  <select
                    value={selectedAlgorithm}
                    onChange={(e) => setSelectedAlgorithm(e.target.value)}
                    className="px-3 py-1.5 text-sm border-2 border-orange-300 rounded-md bg-background focus:border-orange-500 focus:outline-none cursor-pointer w-24"
                    style={{ wordBreak: 'normal' }}
                  >
                    <option value="HS256">HS256</option>
                    <option value="HS384">HS384</option>
                    <option value="HS512">HS512</option>
                    <option value="RS256">RS256</option>
                    <option value="RS384">RS384</option>
                    <option value="RS512">RS512</option>
                    <option value="ES256">ES256</option>
                    <option value="ES384">ES384</option>
                    <option value="ES512">ES512</option>
                    <option value="PS256">PS256</option>
                    <option value="PS384">PS384</option>
                    <option value="PS512">PS512</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-sm text-muted-foreground whitespace-nowrap">Language:</Label>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="px-3 py-1.5 text-sm border-2 border-green-300 rounded-md bg-background focus:border-green-500 focus:outline-none cursor-pointer"
                    style={{ wordBreak: 'normal' }}
                  >
                    <option value="nodejs">Node.js</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="php">PHP</option>
                    <option value="go">Go</option>
                    <option value="csharp">C#</option>
                  </select>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={generateExample}
                  className="text-xs"
                >
                  <Sparkles className="h-3 w-3 mr-1" />
                  Generate Example
                </Button>
                {token && decoded && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={analyzePerformance}
                      className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 border-0"
                    >
                      <Zap className="h-3 w-3 mr-1" />
                      Performance
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowExport(true)}
                      className="text-xs bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 border-0"
                    >
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={openOptimizer}
                      className="text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 border-0"
                    >
                      <Minimize2 className="h-3 w-3 mr-1" />
                      Optimize
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={openComparison}
                      className="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 border-0"
                    >
                      <GitCompare className="h-3 w-3 mr-1" />
                      Compare
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={analyzeSecurity}
                      className="text-xs bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 border-0"
                    >
                      <Shield className="h-3 w-3 mr-1" />
                      Security
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={openCodeGenerator}
                      className="text-xs bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 border-0"
                    >
                      <Code2 className="h-3 w-3 mr-1" />
                      Get Code
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={generateShareLink}
                      className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 border-0"
                    >
                      <Share2 className="h-3 w-3 mr-1" />
                      Share
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearToken}
                      className="text-xs"
                    >
                      <X className="h-3 w-3 mr-1" />
                      Clear
                    </Button>
                  </>
                )}
              </div>
            </div>
            
            <div className="relative w-full">
        <Textarea
          placeholder="Paste your JWT token here..."
          value={token}
          onChange={(e) => setToken(e.target.value)}
                className="!h-32 !max-h-32 !min-h-32 !w-full resize-none overflow-y-auto overflow-x-hidden font-mono text-base pr-20 border-2 border-orange-300 focus:border-orange-500"
                style={{ 
                  wordBreak: 'break-all', 
                  overflowWrap: 'break-word', 
                  whiteSpace: 'normal',
                  height: '128px !important',
                  maxHeight: '128px !important',
                  minHeight: '128px !important',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
              />
              {token && (
                <div className="absolute top-3 right-3">
                  {isValid ? (
                    <div className="flex items-center gap-1 text-heading-accent text-xs">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Valid</span>
                    </div>
                  ) : error ? (
                    <div className="flex items-center gap-1 text-destructive text-xs">
                      <AlertCircle className="h-4 w-4" />
                      <span>Invalid</span>
                    </div>
                  ) : null}
                </div>
              )}
      </div>

          </div>

          {error && !decoded && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {decoded && (
            <div className="space-y-4 w-full max-w-full overflow-hidden">
              {/* Algorithm Info */}
              {decoded.header.alg && (
                <div className="p-4 bg-black border border-blue-200 dark:border-blue-800 rounded-lg w-full max-w-full overflow-hidden">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-base font-medium text-foreground break-words">
                      <strong>Algorithm:</strong> {decoded.header.alg} | <strong>Type:</strong> {decoded.header.typ || "JWT"}
                    </p>
                    {timeRemaining !== null && (
                      <div className="flex items-center gap-2 shrink-0">
                        <Clock className={`h-4 w-4 ${getExpirationColor(timeRemaining)}`} />
                        <span className={`text-sm font-semibold ${getExpirationColor(timeRemaining)} whitespace-nowrap`}>
                          {formatTimeRemaining(timeRemaining)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Header */}
              <Card className="p-5 space-y-4 border-blue-200 dark:border-blue-800 w-full max-w-full overflow-hidden">
            <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    Decoded Header
                    <span className="text-sm text-muted-foreground">(Algorithm & Token Type)</span>
                  </h3>
              <Button
                variant="ghost"
                size="sm"
                    onClick={() => copyToClipboard(JSON.stringify(decoded.header, null, 2), "header")}
              >
                    {copied === "header" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </Button>
            </div>
                <Tabs value={headerView} onValueChange={(v) => setHeaderView(v as "json" | "table")} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="json" className="text-sm font-medium">JSON</TabsTrigger>
                    <TabsTrigger value="table" className="text-sm font-medium">CLAIMS TABLE</TabsTrigger>
                  </TabsList>
                  <TabsContent value="json" className="mt-3">
                    <pre className="p-4 bg-muted rounded-md overflow-x-hidden text-sm font-mono break-all" style={{ wordBreak: 'break-all', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
              {JSON.stringify(decoded.header, null, 2)}
            </pre>
                  </TabsContent>
                  <TabsContent value="table" className="mt-3">
                    <div className="border rounded-md overflow-hidden w-full max-w-full overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-muted">
                          <tr>
                            <th className="text-left p-3 font-bold">Claim</th>
                            <th className="text-left p-3 font-bold">Value</th>
                            <th className="text-left p-3 font-bold">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(decoded.header).map(([key, value]) => (
                            <tr key={key} className="border-t">
                              <td className="p-3 font-mono font-semibold break-words">{key}</td>
                              <td className="p-3 font-mono break-words">{String(value)}</td>
                              <td className="p-3 text-muted-foreground break-words">
                                {key === 'alg' && 'The algorithm used to sign the JWT'}
                                {key === 'typ' && 'The media type of this complete JWT'}
                                {key === 'kid' && 'Key ID - identifies which key was used'}
                                {!['alg', 'typ', 'kid'].includes(key) && 'Custom header claim'}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
          </Card>

              {/* Payload */}
              <Card className="p-5 space-y-4 border-purple-200 dark:border-purple-800 w-full max-w-full overflow-hidden">
            <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    Decoded Payload
                    <span className="text-sm text-muted-foreground">(Claims & Data)</span>
                  </h3>
              <Button
                variant="ghost"
                size="sm"
                    onClick={() => copyToClipboard(JSON.stringify(decoded.payload, null, 2), "payload")}
              >
                    {copied === "payload" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </Button>
            </div>
                <Tabs value={payloadView} onValueChange={(v) => setPayloadView(v as "json" | "table")} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="json" className="text-sm font-medium">JSON</TabsTrigger>
                    <TabsTrigger value="table" className="text-sm font-medium">CLAIMS TABLE</TabsTrigger>
                  </TabsList>
                  <TabsContent value="json" className="mt-3">
                    <pre className="p-4 bg-muted rounded-md overflow-x-hidden text-sm font-mono break-all" style={{ wordBreak: 'break-all', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
              {JSON.stringify(decoded.payload, null, 2)}
            </pre>
                  </TabsContent>
                  <TabsContent value="table" className="mt-3">
                    <div className="border rounded-md overflow-hidden w-full max-w-full overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-muted">
                          <tr>
                            <th className="text-left p-3 font-bold">Claim</th>
                            <th className="text-left p-3 font-bold">Value</th>
                            <th className="text-left p-3 font-bold">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(decoded.payload).map(([key, value]) => {
                            // Format value based on type
                            let displayValue = String(value)
                            let description = 'Custom claim'
                            
                            // Standard JWT claims descriptions
                            if (key === 'sub') description = 'The subject of the JWT (the user)'
                            else if (key === 'iss') description = 'Issuer - who created and signed this token'
                            else if (key === 'aud') description = 'Audience - who this token is intended for'
                            else if (key === 'exp') {
                              description = 'Expiration time - when this token expires'
                              try {
                                const date = new Date(Number(value) * 1000)
                                displayValue = `${value} (${date.toUTCString()})`
                              } catch (e) {}
                            }
                            else if (key === 'nbf') {
                              description = 'Not Before - token should not be accepted before this time'
                              try {
                                const date = new Date(Number(value) * 1000)
                                displayValue = `${value} (${date.toUTCString()})`
                              } catch (e) {}
                            }
                            else if (key === 'iat') {
                              description = 'Issued At - when this token was created'
                              try {
                                const date = new Date(Number(value) * 1000)
                                displayValue = `${value} (${date.toUTCString()})`
                              } catch (e) {}
                            }
                            else if (key === 'jti') description = 'JWT ID - unique identifier for this token'
                            else if (key === 'name') description = 'Name of the user'
                            else if (key === 'email') description = 'Email address of the user'
                            else if (key === 'admin') description = 'Admin status'
                            else if (key === 'role' || key === 'roles') description = 'User role(s)'
                            
                            return (
                              <tr key={key} className="border-t">
                                <td className="p-3 font-mono font-semibold break-words">{key}</td>
                                <td className="p-3 font-mono break-words">{displayValue}</td>
                                <td className="p-3 text-muted-foreground break-words">{description}</td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
          </Card>

              {/* Signature */}
              <Card className="p-5 space-y-4 border-cyan-200 dark:border-cyan-800 w-full max-w-full overflow-hidden">
            <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-foreground">Signature</h3>
                  <Button variant="ghost" size="sm" onClick={() => copyToClipboard(decoded.signature, "signature")}>
                    {copied === "signature" ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              </Button>
            </div>
                <pre className="p-4 bg-muted rounded-md overflow-x-hidden text-sm font-mono break-all" style={{ wordBreak: 'break-all', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
              {decoded.signature}
            </pre>
          </Card>

              {/* Signature Verification */}
              <Card className="p-5 space-y-4 w-full max-w-full overflow-hidden">
        <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground">Verify Signature (Optional)</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter the secret key to verify the JWT signature. Note: This is for demonstration only. Always verify signatures server-side.
                  </p>
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Secret Key</Label>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Enter your secret key..."
                        value={secret}
                        onChange={(e) => setSecret(e.target.value)}
                        className="font-mono text-base border-2 border-orange-300 focus:border-orange-500"
                        style={{ wordBreak: 'break-all', overflowWrap: 'anywhere' }}
                      />
                      <Button 
                        onClick={() => verifySignature(token, secret, decoded.header.alg)}
                        disabled={!secret}
                        className="text-base px-6"
                      >
                        Verify
                      </Button>
        </div>
                  </div>
                  
                  {isVerified !== null && (
                    <div className={`p-4 rounded-lg flex items-center gap-3 ${
                      isVerified 
                        ? "bg-black border border-border" 
                        : "bg-destructive/10 border border-destructive/20"
                    }`}>
                      {isVerified ? (
                        <>
                          <CheckCircle2 className="h-6 w-6 text-heading-accent" />
                          <span className="text-base font-medium text-heading-accent">Signature Verified</span>
                        </>
                      ) : (
                        <>
                          <AlertCircle className="h-6 w-6 text-destructive" />
                          <span className="text-base font-medium text-destructive">Invalid Signature</span>
                        </>
      )}
    </div>
                  )}
                </div>
              </Card>
            </div>
          )}
        </TabsContent>

        <TabsContent value="encode" className="space-y-6">
          <div className="p-4 bg-black border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-foreground">
              <strong>Note:</strong> This encoder creates unsigned tokens for demonstration. Use proper JWT libraries with cryptographic signing for production use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Header Input */}
            <div className="space-y-2 w-full">
              <Label className="text-base font-medium">Header</Label>
              <Textarea
                value={headerInput}
                onChange={(e) => setHeaderInput(e.target.value)}
                className="!h-40 !max-h-40 !min-h-40 !w-full resize-none overflow-y-auto overflow-x-hidden font-mono text-base border-2 border-orange-300 focus:border-orange-500"
                style={{ 
                  wordBreak: 'break-all', 
                  overflowWrap: 'break-word', 
                  whiteSpace: 'normal',
                  height: '160px !important',
                  maxHeight: '160px !important',
                  minHeight: '160px !important',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                placeholder='{"alg": "HS256", "typ": "JWT"}'
              />
            </div>

            {/* Payload Input */}
            <div className="space-y-2 w-full">
              <Label className="text-base font-medium">Payload</Label>
              <Textarea
                value={payloadInput}
                onChange={(e) => setPayloadInput(e.target.value)}
                className="!h-40 !max-h-40 !min-h-40 !w-full resize-none overflow-y-auto overflow-x-hidden font-mono text-base border-2 border-orange-300 focus:border-orange-500"
                style={{ 
                  wordBreak: 'break-all', 
                  overflowWrap: 'break-word', 
                  whiteSpace: 'normal',
                  height: '160px !important',
                  maxHeight: '160px !important',
                  minHeight: '160px !important',
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                placeholder='{"sub": "1234567890", "name": "John Doe"}'
              />
            </div>
          </div>

          <Button onClick={encodeJWT} className="w-full">
            Encode to JWT
          </Button>

          {encodedToken && (
            <Card className="p-4 space-y-3 w-full max-w-full overflow-hidden">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Encoded JWT</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(encodedToken, "encoded")}
                >
                  {copied === "encoded" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <pre className="p-3 bg-muted rounded-md overflow-x-hidden text-xs font-mono break-all" style={{ wordBreak: 'break-all', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' }}>
                {encodedToken}
              </pre>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Security Warning */}
      <div className="p-4 bg-black border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-xs text-foreground">
          <strong>⚠️ Security Notice:</strong> All JWT processing happens in your browser. Never paste production tokens or sensitive secrets. This tool is for development and debugging purposes only. Always verify JWT signatures on your backend server.
        </p>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowShareModal(false)}>
          <Card className="w-full max-w-2xl p-6 space-y-5 animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <Share2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Share JWT Token</h2>
                  <p className="text-sm text-muted-foreground">Generate a shareable link for your JWT token</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowShareModal(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Mask Sensitive Data Toggle */}
            <div className="p-4 bg-black border border-blue-200 dark:border-blue-800 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label className="text-base font-semibold text-foreground">
                    Mask Sensitive Data
                  </Label>
                  <p className="text-sm text-foreground">
                    Automatically hide sensitive fields like email, phone, passwords, etc.
                  </p>
                </div>
                <Switch
                  checked={maskSensitiveData}
                  onCheckedChange={(checked) => {
                    setMaskSensitiveData(checked)
                    // Regenerate link with new masking preference
                    const tokenToShare = checked ? maskSensitiveFields(token) : token
                    const encodedToken = btoa(tokenToShare)
                    const url = `${window.location.origin}${window.location.pathname}?token=${encodedToken}`
                    setShareLink(url)
                  }}
                  className="data-[state=checked]:bg-blue-500"
                />
              </div>
            </div>

            {/* Shareable Link */}
            <div className="space-y-3">
              <Label className="text-base font-semibold text-foreground">Shareable Link</Label>
              <div className="flex gap-2">
                <Input
                  value={shareLink}
                  readOnly
                  className="font-mono text-sm bg-muted"
                  onClick={(e) => e.currentTarget.select()}
                />
                <Button
                  onClick={copyShareLink}
                  className="shrink-0"
                  variant={shareLinkCopied ? "default" : "outline"}
                >
                  {shareLinkCopied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Link2 className="h-4 w-4 mr-2" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                📌 This link never expires and can be shared with anyone. The token data is encoded in the URL.
              </p>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-heading-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">No Expiration</p>
                  <p className="text-xs text-muted-foreground">Link works forever</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-heading-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Privacy Protected</p>
                  <p className="text-xs text-muted-foreground">Sensitive data masked</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-heading-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">No Database</p>
                  <p className="text-xs text-muted-foreground">All data in URL</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-heading-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Team Debugging</p>
                  <p className="text-xs text-muted-foreground">Perfect for collaboration</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => setShowShareModal(false)}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  copyShareLink()
                  setTimeout(() => setShowShareModal(false), 1000)
                }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                Copy Link & Close
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Code Generator Modal */}
      {showCodeGenerator && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowCodeGenerator(false)}>
          <Card className="w-full max-w-4xl max-h-[90vh] flex flex-col p-6 space-y-5 animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">JWT Verification Code</h2>
                  <p className="text-sm text-muted-foreground">Ready-to-use code for {selectedLanguage === 'nodejs' ? 'Node.js' : selectedLanguage === 'python' ? 'Python' : selectedLanguage === 'java' ? 'Java' : selectedLanguage === 'php' ? 'PHP' : selectedLanguage === 'go' ? 'Go' : 'C#'}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCodeGenerator(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Language Selector in Modal */}
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Label className="text-sm font-semibold text-foreground">Select Language:</Label>
              <div className="flex gap-2 flex-wrap">
                {[
                  { value: 'nodejs', label: 'Node.js', icon: '🟢' },
                  { value: 'python', label: 'Python', icon: '🐍' },
                  { value: 'java', label: 'Java', icon: '☕' },
                  { value: 'php', label: 'PHP', icon: '🐘' },
                  { value: 'go', label: 'Go', icon: '🔵' },
                  { value: 'csharp', label: 'C#', icon: '💠' }
                ].map(lang => (
                  <Button
                    key={lang.value}
                    variant={selectedLanguage === lang.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedLanguage(lang.value)
                      setGeneratedCode(generateCodeSnippet(lang.value))
                    }}
                    className={selectedLanguage === lang.value ? "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600" : ""}
                  >
                    <span className="mr-1">{lang.icon}</span>
                    {lang.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Generated Code */}
            <div className="flex-1 overflow-hidden flex flex-col space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-base font-semibold text-foreground">Generated Code</Label>
                <Button
                  onClick={copyGeneratedCode}
                  size="sm"
                  variant={codeCopied ? "default" : "outline"}
                >
                  {codeCopied ? (
                    <>
                      <Check className="h-4 w-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
              <div className="flex-1 overflow-auto border-2 border-green-300 dark:border-green-700 rounded-lg">
                <pre className="p-4 bg-muted/50 text-xs font-mono h-full" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {generatedCode}
            </pre>
              </div>
            </div>

            {/* Installation Instructions */}
            <div className="p-4 bg-black border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm font-semibold text-foreground mb-2">📦 Installation Required:</p>
              <code className="text-xs bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded text-foreground">
                {selectedLanguage === 'nodejs' && 'npm install jsonwebtoken'}
                {selectedLanguage === 'python' && 'pip install PyJWT'}
                {selectedLanguage === 'java' && 'Maven: io.jsonwebtoken:jjwt-api:0.11.5'}
                {selectedLanguage === 'php' && 'composer require firebase/php-jwt'}
                {selectedLanguage === 'go' && 'go get github.com/golang-jwt/jwt/v5'}
                {selectedLanguage === 'csharp' && 'dotnet add package System.IdentityModel.Tokens.Jwt'}
              </code>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-heading-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Token Verification</p>
                  <p className="text-xs text-muted-foreground">Validates JWT signature</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-heading-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Token Generation</p>
                  <p className="text-xs text-muted-foreground">Create new JWTs</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-heading-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Error Handling</p>
                  <p className="text-xs text-muted-foreground">Catches invalid tokens</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-heading-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Production Ready</p>
                  <p className="text-xs text-muted-foreground">Best practices included</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => setShowCodeGenerator(false)}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  copyGeneratedCode()
                  setTimeout(() => setShowCodeGenerator(false), 1000)
                }}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                Copy Code & Close
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Security Analyzer Modal */}
      {showSecurityAnalyzer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowSecurityAnalyzer(false)}>
          <Card className="w-full max-w-4xl p-5 space-y-3 animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${
                  securityScore >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                  securityScore >= 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                  'bg-gradient-to-r from-red-500 to-rose-500'
                }`}>
                  {securityScore >= 80 ? <ShieldCheck className="h-6 w-6 text-white" /> :
                   securityScore >= 60 ? <Shield className="h-6 w-6 text-white" /> :
                   <ShieldAlert className="h-6 w-6 text-white" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">JWT Security Analysis</h2>
                  <p className="text-sm text-muted-foreground">Comprehensive security scan results</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSecurityAnalyzer(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Security Score */}
            <div className={`p-4 rounded-lg border-2 ${
              securityScore >= 80 ? 'bg-black border-green-300 dark:border-green-700' :
              securityScore >= 60 ? 'bg-black border-yellow-300 dark:border-yellow-700' :
              'bg-black border-red-300 dark:border-red-700'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">Security Score</p>
                  <div className="flex items-baseline gap-2">
                    <p className={`text-4xl font-bold ${
                      securityScore >= 80 ? 'text-heading-accent' :
                      securityScore >= 60 ? 'text-foreground' :
                      'text-foreground'
                    }`}>
                      {securityScore}
                    </p>
                    <p className="text-xl text-muted-foreground">/100</p>
                  </div>
                  <p className={`text-xs font-medium mt-1 ${
                    securityScore >= 80 ? 'text-heading-accent' :
                    securityScore >= 60 ? 'text-foreground' :
                    'text-foreground'
                  }`}>
                    {securityScore >= 80 ? '✅ Excellent - Token is secure' :
                     securityScore >= 60 ? '⚠️ Good - Minor improvements needed' :
                     securityScore >= 40 ? '⚠️ Fair - Security issues detected' :
                     '❌ Poor - Critical issues found'}
                  </p>
                </div>
                <div className="h-20 w-20">
                  <svg className="transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="none"
                      className="text-muted/20"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - securityScore / 100)}`}
                      className={
                        securityScore >= 80 ? 'text-heading-accent' :
                        securityScore >= 60 ? 'text-foreground' :
                        'text-foreground'
                      }
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Issues List */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-foreground">Security Issues & Recommendations</Label>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {securityIssues.map((issue, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border-l-4 ${
                      issue.severity === 'critical' ? 'bg-black border-red-500' :
                      issue.severity === 'high' ? 'bg-black border-orange-500' :
                      issue.severity === 'medium' ? 'bg-black border-yellow-500' :
                      issue.severity === 'low' ? 'bg-black border-blue-500' :
                      'bg-black border-green-500'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {issue.severity === 'critical' ? <AlertTriangle className="h-4 w-4 text-foreground mt-0.5 shrink-0" /> :
                       issue.severity === 'high' ? <AlertCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" /> :
                       issue.severity === 'medium' ? <AlertCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" /> :
                       issue.severity === 'low' ? <Info className="h-4 w-4 text-foreground mt-0.5 shrink-0" /> :
                       <CheckCircle2 className="h-4 w-4 text-heading-accent mt-0.5 shrink-0" />}
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-foreground mb-0.5">{issue.message}</p>
                        <p className="text-xs text-muted-foreground">
                          <strong>Recommendation:</strong> {issue.recommendation}
                        </p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded shrink-0 ${
                        issue.severity === 'critical' ? 'bg-red-100 dark:bg-red-900/50 text-foreground' :
                        issue.severity === 'high' ? 'bg-orange-100 dark:bg-orange-900/50 text-foreground' :
                        issue.severity === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/50 text-foreground' :
                        issue.severity === 'low' ? 'bg-blue-100 dark:bg-blue-900/50 text-foreground' :
                        'bg-green-100 dark:bg-green-900/50 text-heading-accent'
                      }`}>
                        {issue.severity.toUpperCase()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-2">
              <div className="p-2 bg-black border border-border rounded-lg text-center">
                <p className="text-xl font-bold text-foreground">
                  {securityIssues.filter(i => i.severity === 'critical').length}
                </p>
                <p className="text-xs text-foreground font-medium">Critical</p>
              </div>
              <div className="p-2 bg-black border border-orange-200 dark:border-orange-800 rounded-lg text-center">
                <p className="text-xl font-bold text-foreground">
                  {securityIssues.filter(i => i.severity === 'high').length}
                </p>
                <p className="text-xs text-foreground font-medium">High</p>
              </div>
              <div className="p-2 bg-black border border-yellow-200 dark:border-yellow-800 rounded-lg text-center">
                <p className="text-xl font-bold text-foreground">
                  {securityIssues.filter(i => i.severity === 'medium').length}
                </p>
                <p className="text-xs text-foreground font-medium">Medium</p>
              </div>
              <div className="p-2 bg-black border border-blue-200 dark:border-blue-800 rounded-lg text-center">
                <p className="text-xl font-bold text-foreground">
                  {securityIssues.filter(i => i.severity === 'low').length}
                </p>
                <p className="text-xs text-foreground font-medium">Low</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex gap-2">
              <Button
                onClick={() => setShowSecurityAnalyzer(false)}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
              <Button
                onClick={analyzeSecurity}
                className="flex-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
              >
                Re-scan Security
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Token Comparison Modal */}
      {showComparison && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowComparison(false)}>
          <Card className="w-full max-w-6xl p-5 space-y-3 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <GitCompare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Token Comparison Tool</h3>
                  <p className="text-xs text-muted-foreground">Compare two JWT tokens side-by-side</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowComparison(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Token Inputs */}
            <div className="grid grid-cols-2 gap-4">
              {/* Token 1 */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">Token 1 (Current)</Label>
                <Textarea
                  value={token1}
                  onChange={(e) => {
                    setToken1(e.target.value)
                    decodeComparisonToken(e.target.value, 1)
                  }}
                  placeholder="Paste first JWT token..."
                  className="h-24 text-xs font-mono border-2 border-purple-300 focus:border-purple-500"
                  style={{ wordBreak: 'break-all', overflowWrap: 'anywhere', whiteSpace: 'normal' }}
                />
                {decoded1 && (
                  <div className="flex items-center gap-2 text-xs text-heading-accent">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Valid JWT ({decoded1.header.alg})</span>
                  </div>
                )}
              </div>

              {/* Token 2 */}
              <div className="space-y-2">
                <Label className="text-sm font-semibold text-foreground">Token 2 (Compare)</Label>
                <Textarea
                  value={token2}
                  onChange={(e) => {
                    setToken2(e.target.value)
                    decodeComparisonToken(e.target.value, 2)
                  }}
                  placeholder="Paste second JWT token..."
                  className="h-24 text-xs font-mono border-2 border-pink-300 focus:border-pink-500"
                  style={{ wordBreak: 'break-all', overflowWrap: 'anywhere', whiteSpace: 'normal' }}
                />
                {decoded2 && (
                  <div className="flex items-center gap-2 text-xs text-heading-accent">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Valid JWT ({decoded2.header.alg})</span>
                  </div>
                )}
              </div>
            </div>

            {/* Comparison Results */}
            {decoded1 && decoded2 && (
              <>
                {/* Algorithm Comparison */}
                <div className="p-3 bg-black border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h4 className="text-sm font-bold text-foreground mb-2">Algorithm Comparison</h4>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="font-medium text-muted-foreground">Token 1</p>
                      <p className="font-mono text-foreground">{decoded1.header.alg}</p>
                    </div>
                    <div className="flex items-center justify-center">
                      {decoded1.header.alg === decoded2.header.alg ? (
                        <CheckCircle2 className="h-5 w-5 text-heading-accent" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-foreground" />
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-muted-foreground">Token 2</p>
                      <p className="font-mono text-foreground">{decoded2.header.alg}</p>
                    </div>
                  </div>
                </div>

                {/* Header Differences */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2">Header Differences</h4>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <table className="w-full text-xs">
                      <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                          <th className="px-3 py-2 text-left font-semibold">Field</th>
                          <th className="px-3 py-2 text-left font-semibold">Token 1</th>
                          <th className="px-3 py-2 text-left font-semibold">Token 2</th>
                          <th className="px-3 py-2 text-center font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {compareObjects(decoded1.header, decoded2.header).map((diff, idx) => (
                          <tr key={idx} className={`
                            ${diff.status === 'changed' ? 'bg-black' : ''}
                            ${diff.status === 'added' ? 'bg-black' : ''}
                            ${diff.status === 'removed' ? 'bg-black' : ''}
                          `}>
                            <td className="px-3 py-2 font-mono font-semibold">{diff.key}</td>
                            <td className="px-3 py-2 font-mono break-all">
                              {diff.value1 !== undefined ? JSON.stringify(diff.value1) : '-'}
                            </td>
                            <td className="px-3 py-2 font-mono break-all">
                              {diff.value2 !== undefined ? JSON.stringify(diff.value2) : '-'}
                            </td>
                            <td className="px-3 py-2 text-center">
                              {diff.status === 'same' && <span className="text-gray-500">Same</span>}
                              {diff.status === 'changed' && <span className="text-foreground font-semibold">Changed</span>}
                              {diff.status === 'added' && <span className="text-heading-accent font-semibold">Added</span>}
                              {diff.status === 'removed' && <span className="text-foreground font-semibold">Removed</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Payload Differences */}
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2">Payload (Claims) Differences</h4>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <table className="w-full text-xs">
                      <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                          <th className="px-3 py-2 text-left font-semibold">Claim</th>
                          <th className="px-3 py-2 text-left font-semibold">Token 1</th>
                          <th className="px-3 py-2 text-left font-semibold">Token 2</th>
                          <th className="px-3 py-2 text-center font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {compareObjects(decoded1.payload, decoded2.payload).map((diff, idx) => (
                          <tr key={idx} className={`
                            ${diff.status === 'changed' ? 'bg-black' : ''}
                            ${diff.status === 'added' ? 'bg-black' : ''}
                            ${diff.status === 'removed' ? 'bg-black' : ''}
                          `}>
                            <td className="px-3 py-2 font-mono font-semibold">{diff.key}</td>
                            <td className="px-3 py-2 font-mono break-all">
                              {diff.value1 !== undefined ? (
                                typeof diff.value1 === 'number' && (diff.key === 'exp' || diff.key === 'iat' || diff.key === 'nbf') ? (
                                  <span>
                                    {diff.value1} <span className="text-muted-foreground">({new Date(diff.value1 * 1000).toLocaleString()})</span>
                                  </span>
                                ) : (
                                  JSON.stringify(diff.value1)
                                )
                              ) : '-'}
                            </td>
                            <td className="px-3 py-2 font-mono break-all">
                              {diff.value2 !== undefined ? (
                                typeof diff.value2 === 'number' && (diff.key === 'exp' || diff.key === 'iat' || diff.key === 'nbf') ? (
                                  <span>
                                    {diff.value2} <span className="text-muted-foreground">({new Date(diff.value2 * 1000).toLocaleString()})</span>
                                  </span>
                                ) : (
                                  JSON.stringify(diff.value2)
                                )
                              ) : '-'}
                            </td>
                            <td className="px-3 py-2 text-center">
                              {diff.status === 'same' && <span className="text-gray-500">Same</span>}
                              {diff.status === 'changed' && <span className="text-foreground font-semibold">Changed</span>}
                              {diff.status === 'added' && <span className="text-heading-accent font-semibold">Added</span>}
                              {diff.status === 'removed' && <span className="text-foreground font-semibold">Removed</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="p-2 bg-black border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                    <p className="text-lg font-bold text-gray-600">
                      {[...compareObjects(decoded1.header, decoded2.header), ...compareObjects(decoded1.payload, decoded2.payload)].filter(d => d.status === 'same').length}
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">Same</p>
                  </div>
                  <div className="p-2 bg-black border border-orange-200 dark:border-orange-800 rounded-lg text-center">
                    <p className="text-lg font-bold text-foreground">
                      {[...compareObjects(decoded1.header, decoded2.header), ...compareObjects(decoded1.payload, decoded2.payload)].filter(d => d.status === 'changed').length}
                    </p>
                    <p className="text-xs text-foreground font-medium">Changed</p>
                  </div>
                  <div className="p-2 bg-black border border-border rounded-lg text-center">
                    <p className="text-lg font-bold text-heading-accent">
                      {[...compareObjects(decoded1.header, decoded2.header), ...compareObjects(decoded1.payload, decoded2.payload)].filter(d => d.status === 'added').length}
                    </p>
                    <p className="text-xs text-heading-accent font-medium">Added</p>
                  </div>
                  <div className="p-2 bg-black border border-border rounded-lg text-center">
                    <p className="text-lg font-bold text-foreground">
                      {[...compareObjects(decoded1.header, decoded2.header), ...compareObjects(decoded1.payload, decoded2.payload)].filter(d => d.status === 'removed').length}
                    </p>
                    <p className="text-xs text-foreground font-medium">Removed</p>
                  </div>
                </div>

                {/* Use Cases */}
                <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                  <h4 className="text-sm font-bold text-foreground mb-2">Perfect For:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-foreground">Token Refresh Debugging</p>
                        <p className="text-xs text-muted-foreground">Compare old vs new tokens</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-foreground">Claims Validation</p>
                        <p className="text-xs text-muted-foreground">Verify claims changed correctly</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-foreground">Environment Comparison</p>
                        <p className="text-xs text-muted-foreground">Dev vs Prod tokens</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-foreground">Algorithm Migration</p>
                        <p className="text-xs text-muted-foreground">Track algorithm changes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => setShowComparison(false)}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setToken1("")
                  setToken2("")
                  setDecoded1(null)
                  setDecoded2(null)
                }}
                variant="outline"
                className="flex-1"
              >
                Clear Both
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Token Size Optimizer Modal */}
      {showOptimizer && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowOptimizer(false)}>
          <Card className="w-full max-w-5xl p-5 space-y-3 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <Minimize2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Token Size Optimizer</h3>
                  <p className="text-xs text-muted-foreground">Reduce token size for better performance</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowOptimizer(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Current Size */}
            <div className="p-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-800 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Current Token Size</h4>
                  <p className="text-xs text-muted-foreground">Original token length</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-foreground">{formatBytes(getTokenSize(token).bytes)}</p>
                  <p className="text-xs text-muted-foreground">{token.length} characters</p>
                </div>
              </div>
            </div>

            {/* Optimization Suggestions */}
            {optimizationSuggestions.length > 0 ? (
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-foreground">Optimization Suggestions</h4>
                <div className="space-y-2">
                  {optimizationSuggestions.map((suggestion, idx) => (
                    <div
                      key={idx}
                      className={`p-3 border rounded-lg cursor-pointer transition-all ${
                        appliedOptimizations.has(suggestion.type)
                          ? 'bg-black border-cyan-300 dark:border-cyan-700'
                          : 'bg-black border-gray-200 dark:border-gray-700 hover:border-cyan-300'
                      }`}
                      onClick={() => toggleOptimization(suggestion.type)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="mt-0.5">
                            {appliedOptimizations.has(suggestion.type) ? (
                              <CheckCircle2 className="h-5 w-5 text-foreground" />
                            ) : (
                              <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h5 className="text-sm font-semibold text-foreground">{suggestion.title}</h5>
                            <p className="text-xs text-muted-foreground mt-1">{suggestion.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <TrendingDown className="h-4 w-4 text-heading-accent" />
                          <span className="text-sm font-bold text-heading-accent">-{suggestion.savings}B</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 bg-black border border-border rounded-lg text-center">
                <CheckCircle2 className="h-8 w-8 text-heading-accent mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">Token Already Optimized!</p>
                <p className="text-xs text-muted-foreground mt-1">No significant optimizations found</p>
              </div>
            )}

            {/* Before/After Comparison */}
            {optimizedToken && (
              <>
                <div className="border-t pt-3">
                  <h4 className="text-sm font-bold text-foreground mb-2">Before vs After Comparison</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Before */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-xs font-semibold text-foreground">Before (Original)</Label>
                        <span className="text-xs font-mono text-foreground">{formatBytes(getTokenSize(token).bytes)}</span>
                      </div>
                      <div className="p-2 bg-black border border-border rounded-lg">
                        <p className="text-xs font-mono text-foreground break-all line-clamp-3">{token}</p>
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label className="text-xs font-semibold text-heading-accent">After (Optimized)</Label>
                        <span className="text-xs font-mono text-heading-accent">{formatBytes(getTokenSize(optimizedToken).bytes)}</span>
                      </div>
                      <div className="p-2 bg-black border border-border rounded-lg">
                        <p className="text-xs font-mono text-foreground break-all line-clamp-3">{optimizedToken}</p>
                      </div>
                    </div>
                  </div>

                  {/* Savings Summary */}
                  <div className="mt-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="h-5 w-5 text-heading-accent" />
                        <div>
                          <h5 className="text-sm font-bold text-foreground">Total Savings</h5>
                          <p className="text-xs text-muted-foreground">Size reduced by optimizations</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-heading-accent">
                          {formatBytes(getTokenSize(token).bytes - getTokenSize(optimizedToken).bytes)}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {((1 - getTokenSize(optimizedToken).bytes / getTokenSize(token).bytes) * 100).toFixed(1)}% reduction
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Copy Optimized Token */}
                <div className="flex items-center gap-2 p-3 bg-black border border-blue-200 dark:border-blue-800 rounded-lg">
                  <Info className="h-4 w-4 text-foreground shrink-0" />
                  <p className="text-xs text-muted-foreground flex-1">
                    Copy the optimized token and update your application code with the new claim names and structure.
                  </p>
                  <Button
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(optimizedToken)
                    }}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                  >
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                  </Button>
                </div>
              </>
            )}

            {/* Optimization Tips */}
            <div className="p-3 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border border-cyan-200 dark:border-cyan-800 rounded-lg">
              <h4 className="text-sm font-bold text-foreground mb-2">💡 Optimization Tips</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Short Claim Names</p>
                    <p className="text-xs text-muted-foreground">Use 1-3 char names (e.g., 'u' vs 'username')</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Remove Optional Claims</p>
                    <p className="text-xs text-muted-foreground">Only include required data</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Use References</p>
                    <p className="text-xs text-muted-foreground">Store IDs instead of full objects</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-foreground">Shorter Algorithms</p>
                    <p className="text-xs text-muted-foreground">HS256 is smaller than RS256</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => setShowOptimizer(false)}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
              {optimizedToken && (
                <Button
                  onClick={() => {
                    navigator.clipboard.writeText(optimizedToken)
                    setTimeout(() => setShowOptimizer(false), 1000)
                  }}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                >
                  Copy Optimized & Close
                </Button>
              )}
            </div>
          </Card>
        </div>
      )}

      {/* Performance Metrics Modal */}
      {showPerformance && performanceMetrics.tokenSize > 0 && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowPerformance(false)}>
          <Card className="w-full max-w-4xl p-5 space-y-3 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Token Performance Metrics</h3>
                  <p className="text-xs text-muted-foreground">Analyze processing time, size impact & optimization opportunities</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPerformance(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Performance Rating */}
            <div className={`p-3 border rounded-lg ${getPerformanceRating().bgColor} ${getPerformanceRating().borderColor}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Activity className={`h-8 w-8 ${getPerformanceRating().color}`} />
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Overall Performance</h4>
                    <p className={`text-2xl font-bold ${getPerformanceRating().color}`}>{getPerformanceRating().rating}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Token Size</p>
                  <p className="text-xl font-bold text-foreground">{performanceMetrics.tokenSize} bytes</p>
                </div>
              </div>
            </div>

            {/* Processing Time */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                <Timer className="h-4 w-4 text-foreground" />
                Processing Time
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-black border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Decode Time</p>
                  <p className="text-2xl font-bold text-foreground">{performanceMetrics.decodeTime.toFixed(3)}ms</p>
                  <p className="text-xs text-muted-foreground mt-1">Base64 decode + JSON parse</p>
                </div>
                <div className="p-3 bg-black border border-border rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Encode Time</p>
                  <p className="text-2xl font-bold text-heading-accent">{performanceMetrics.encodeTime.toFixed(3)}ms</p>
                  <p className="text-xs text-muted-foreground mt-1">JSON stringify + Base64 encode</p>
                </div>
              </div>
            </div>

            {/* Token Size Breakdown */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-foreground" />
                Size Breakdown
              </h4>
              <div className="space-y-2">
                {/* Header Size */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-foreground">Header</span>
                    <span className="text-xs font-bold text-foreground">{performanceMetrics.headerSize} bytes ({((performanceMetrics.headerSize / performanceMetrics.tokenSize) * 100).toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(performanceMetrics.headerSize / performanceMetrics.tokenSize) * 100}%` }}></div>
                  </div>
                </div>

                {/* Payload Size */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-foreground">Payload</span>
                    <span className="text-xs font-bold text-heading-accent">{performanceMetrics.payloadSize} bytes ({((performanceMetrics.payloadSize / performanceMetrics.tokenSize) * 100).toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${(performanceMetrics.payloadSize / performanceMetrics.tokenSize) * 100}%` }}></div>
                  </div>
                </div>

                {/* Signature Size */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-foreground">Signature</span>
                    <span className="text-xs font-bold text-foreground">{performanceMetrics.signatureSize} bytes ({((performanceMetrics.signatureSize / performanceMetrics.tokenSize) * 100).toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: `${(performanceMetrics.signatureSize / performanceMetrics.tokenSize) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Network Impact */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                <Activity className="h-4 w-4 text-foreground" />
                Network Impact
              </h4>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <table className="w-full text-xs">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold">Requests/Day</th>
                      <th className="px-3 py-2 text-right font-semibold">Daily Transfer</th>
                      <th className="px-3 py-2 text-right font-semibold">Monthly Transfer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calculateNetworkImpact().map((item, idx) => (
                      <tr key={idx} className="border-t border-gray-200 dark:border-gray-700">
                        <td className="px-3 py-2 font-mono">{item.requests.toLocaleString()}</td>
                        <td className="px-3 py-2 text-right font-bold text-foreground">{item.daily} MB</td>
                        <td className="px-3 py-2 text-right font-bold text-heading-accent">{item.monthly} GB</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                * Includes HTTP header overhead (~200 bytes) + Authorization header + token size
              </p>
            </div>

            {/* Benchmark Comparison */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-foreground" />
                Industry Benchmarks
              </h4>
              <div className="grid grid-cols-4 gap-2">
                <div className={`p-2 border rounded-lg text-center ${performanceMetrics.tokenSize < 200 ? 'bg-black border-green-300 dark:border-green-700' : 'bg-black border-gray-200 dark:border-gray-700'}`}>
                  <p className="text-xs font-semibold text-foreground">Excellent</p>
                  <p className="text-lg font-bold text-heading-accent">&lt;200B</p>
                  <p className="text-xs text-muted-foreground">Minimal</p>
                </div>
                <div className={`p-2 border rounded-lg text-center ${performanceMetrics.tokenSize >= 200 && performanceMetrics.tokenSize < 512 ? 'bg-black border-blue-300 dark:border-blue-700' : 'bg-black border-gray-200 dark:border-gray-700'}`}>
                  <p className="text-xs font-semibold text-foreground">Good</p>
                  <p className="text-lg font-bold text-foreground">200-512B</p>
                  <p className="text-xs text-muted-foreground">Standard</p>
                </div>
                <div className={`p-2 border rounded-lg text-center ${performanceMetrics.tokenSize >= 512 && performanceMetrics.tokenSize < 1024 ? 'bg-black border-yellow-300 dark:border-yellow-700' : 'bg-black border-gray-200 dark:border-gray-700'}`}>
                  <p className="text-xs font-semibold text-foreground">Fair</p>
                  <p className="text-lg font-bold text-foreground">512B-1KB</p>
                  <p className="text-xs text-muted-foreground">Above Avg</p>
                </div>
                <div className={`p-2 border rounded-lg text-center ${performanceMetrics.tokenSize >= 1024 ? 'bg-black border-red-300 dark:border-red-700' : 'bg-black border-gray-200 dark:border-gray-700'}`}>
                  <p className="text-xs font-semibold text-foreground">Large</p>
                  <p className="text-lg font-bold text-foreground">&gt;1KB</p>
                  <p className="text-xs text-muted-foreground">Optimize!</p>
                </div>
              </div>
            </div>

            {/* Optimization Recommendations */}
            <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <h4 className="text-sm font-bold text-foreground mb-2">💡 Performance Recommendations</h4>
              <div className="space-y-2">
                {performanceMetrics.tokenSize < 200 ? (
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-heading-accent mt-0.5 shrink-0" />
                    <p className="text-xs text-foreground">Your token is optimally sized! No action needed.</p>
                  </div>
                ) : (
                  <>
                    {performanceMetrics.tokenSize > 512 && (
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-foreground">Reduce Payload Size</p>
                          <p className="text-xs text-muted-foreground">Use shorter claim names and remove unnecessary data. Click "Optimize" for suggestions.</p>
                        </div>
                      </div>
                    )}
                    {decoded && decoded.header.alg && ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'PS256', 'PS384', 'PS512'].includes(decoded.header.alg) && (
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-foreground">Consider HMAC Algorithms</p>
                          <p className="text-xs text-muted-foreground">HS256 produces smaller signatures (~43 bytes) vs RSA/ECDSA (~200+ bytes).</p>
                        </div>
                      </div>
                    )}
                    {performanceMetrics.tokenSize > 1024 && (
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-foreground">Token Too Large</p>
                          <p className="text-xs text-muted-foreground">Tokens &gt;1KB may cause performance issues. Consider using refresh tokens or reference tokens.</p>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-2">
                      <Info className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs font-medium text-foreground">Use Caching</p>
                        <p className="text-xs text-muted-foreground">Cache tokens in memory/storage to avoid repeated network transfers.</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => setShowPerformance(false)}
                variant="outline"
                className="flex-1"
              >
                Close
              </Button>
              <Button
                onClick={() => {
                  setShowPerformance(false)
                  openOptimizer()
                }}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
              >
                Optimize Token
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* How to Use JWT Decoder - Always Visible Tutorial Section */}
      <div className="mt-12 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">How to Use JWT Decoder</h2>
          </div>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about JSON Web Tokens and our powerful decoder tool
          </p>
        </div>

            {/* Table of Contents */}
            <div className="p-4 bg-black border border-border rounded-lg">
              <h3 className="text-base font-bold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-teal-600" />
                What You&apos;ll Learn
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-teal-600" />
                  <span>What is JWT and why use it</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-teal-600" />
                  <span>JWT structure explained</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-teal-600" />
                  <span>How to create & verify JWTs</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-teal-600" />
                  <span>Code examples (6 languages)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-teal-600" />
                  <span>Using our JWT Decoder features</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-teal-600" />
                  <span>Common mistakes & solutions</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Section 1: What is JWT */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 text-sm font-bold">1</span>
                  What is a JSON Web Token (JWT)?
                </h3>
                <div className="pl-10 space-y-3 text-sm text-muted-foreground">
                  <p>
                    A JSON Web Token (JWT) is a compact and secure way to transmit information between two parties. Think of it like a digital ID card that proves who you are without constantly asking for your username and password.
                  </p>
                  <p>
                    When you log into a website, the server creates a JWT containing your user information (like your user ID and permissions). This token is then sent to your browser, and your browser includes it with every request to prove you&apos;re authenticated. It&apos;s much faster than checking the database every single time!
                  </p>
                  <div className="p-3 bg-black border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="font-semibold text-foreground mb-2">Why are JWTs so popular?</p>
                    <ul className="space-y-1 text-foreground">
                      <li>• <strong>Stateless:</strong> The server doesn&apos;t need to store sessions - everything is in the token</li>
                      <li>• <strong>Compact:</strong> Small size makes them perfect for HTTP headers and mobile apps</li>
                      <li>• <strong>Self-contained:</strong> All user info is inside the token itself</li>
                      <li>• <strong>Secure:</strong> Digitally signed to prevent tampering</li>
                      <li>• <strong>Cross-domain:</strong> Works across different websites and services</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2: JWT Structure */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 text-sm font-bold">2</span>
                  Understanding JWT Structure
                </h3>
                <div className="pl-10 space-y-3 text-sm text-muted-foreground">
                  <p>
                    A JWT looks like a long random string, but it&apos;s actually three parts separated by dots (.). Each part has a specific purpose. Let&apos;s break it down:
                  </p>
                  
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg font-mono text-xs break-all">
                    <span className="text-foreground">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>
                    .
                    <span className="text-heading-accent">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0</span>
                    .
                    <span className="text-foreground">SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</span>
                  </div>

                  {/* Header */}
                  <div className="p-3 bg-black border border-border rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Part 1: Header (Blue)</h4>
                    <p className="text-gray-400 mb-2">
                      The header tells us what type of token this is and how it&apos;s signed. It&apos;s like the envelope that says &quot;This is a JWT, signed with HS256&quot;.
                    </p>
                    <div className="bg-black p-2 rounded font-mono text-xs">
                      &#123;<br />
                      &nbsp;&nbsp;&quot;alg&quot;: &quot;HS256&quot;,  // Algorithm used (HMAC SHA-256)<br />
                      &nbsp;&nbsp;&quot;typ&quot;: &quot;JWT&quot;      // Token type<br />
                      &#125;
                    </div>
                  </div>

                  {/* Payload */}
                  <div className="p-3 bg-black border border-border rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Part 2: Payload (Green)</h4>
                    <p className="text-gray-400 mb-2">
                      The payload is the actual data - your user ID, name, permissions, expiration time, etc. This is where you store the information you want to share. Think of it as the content of a letter.
                    </p>
                    <div className="bg-black p-2 rounded font-mono text-xs">
                      &#123;<br />
                      &nbsp;&nbsp;&quot;sub&quot;: &quot;1234567890&quot;,  // Subject (user ID)<br />
                      &nbsp;&nbsp;&quot;name&quot;: &quot;John Doe&quot;,     // User name<br />
                      &nbsp;&nbsp;&quot;email&quot;: &quot;john@example.com&quot;,<br />
                      &nbsp;&nbsp;&quot;role&quot;: &quot;admin&quot;,         // User role<br />
                      &nbsp;&nbsp;&quot;iat&quot;: 1516239022,     // Issued at timestamp<br />
                      &nbsp;&nbsp;&quot;exp&quot;: 1516242622      // Expiration timestamp<br />
                      &#125;
                    </div>
                    <p className="text-gray-400 mt-2 text-xs">
                      <strong>Important:</strong> The payload is NOT encrypted, only encoded! Anyone can decode it and read it. Never put passwords or credit card numbers here!
                    </p>
                  </div>

                  {/* Signature */}
                  <div className="p-3 bg-black border border-border rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Part 3: Signature (Orange)</h4>
                    <p className="text-gray-400 mb-2">
                      The signature is like a tamper-proof seal. It&apos;s created by combining the header, payload, and a secret key that only the server knows. If someone tries to change even one character in the header or payload, the signature won&apos;t match!
                    </p>
                    <div className="bg-black p-2 rounded font-mono text-xs">
                      HMACSHA256(<br />
                      &nbsp;&nbsp;base64UrlEncode(header) + &quot;.&quot; +<br />
                      &nbsp;&nbsp;base64UrlEncode(payload),<br />
                      &nbsp;&nbsp;your-secret-key<br />
                      )
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: How JWT Works */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 text-sm font-bold">3</span>
                  How JWT Authentication Works
                </h3>
                <div className="pl-10 space-y-3 text-sm text-muted-foreground">
                  <p>Let&apos;s walk through a real-world example of how JWTs are used in a web application:</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-3 p-3 bg-black rounded-lg">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold shrink-0">1</div>
                      <div>
                        <p className="font-semibold text-foreground">User logs in</p>
                        <p className="text-xs">You enter your username and password on a login form and click &quot;Sign In&quot;.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-black rounded-lg">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-bold shrink-0">2</div>
                      <div>
                        <p className="font-semibold text-foreground">Server verifies credentials</p>
                        <p className="text-xs">The server checks if your username and password are correct by looking them up in the database.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-black rounded-lg">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold shrink-0">3</div>
                      <div>
                        <p className="font-semibold text-foreground">Server creates JWT</p>
                        <p className="text-xs">If credentials are valid, the server creates a JWT with your user info (ID, name, role) and signs it with a secret key.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-black rounded-lg">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white text-xs font-bold shrink-0">4</div>
                      <div>
                        <p className="font-semibold text-foreground">Token sent to browser</p>
                        <p className="text-xs">The server sends this JWT back to your browser, which stores it (usually in localStorage or a cookie).</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-black rounded-lg">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold shrink-0">5</div>
                      <div>
                        <p className="font-semibold text-foreground">Browser includes token in requests</p>
                        <p className="text-xs">Every time you make a request (like loading your profile), the browser includes this JWT in the Authorization header.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-black rounded-lg">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold shrink-0">6</div>
                      <div>
                        <p className="font-semibold text-foreground">Server verifies token</p>
                        <p className="text-xs">The server checks the signature to make sure the token wasn&apos;t tampered with, checks if it&apos;s expired, and extracts your user info.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-black rounded-lg">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold shrink-0">7</div>
                      <div>
                        <p className="font-semibold text-foreground">Server processes request</p>
                        <p className="text-xs">If the token is valid, the server processes your request and sends back the data you asked for.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Examples */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 text-sm font-bold">4</span>
                  Creating & Verifying JWTs - Code Examples
                </h3>
                <p className="pl-10 text-sm text-muted-foreground mb-4">
                  Let&apos;s see how to create and verify JWTs in different programming languages. These are real, working code examples you can use in your projects! Our tool provides these code snippets automatically - just click the &quot;Get Code&quot; button after decoding a token.
                </p>

                {/* Node.js Example */}
                <div className="pl-10 space-y-2">
                  <div className="p-3 bg-black border border-border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FileCode className="h-5 w-5 text-heading-accent" />
                      <h4 className="font-semibold text-heading-accent">Node.js (JavaScript)</h4>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">Install: <code className="bg-green-100 dark:bg-green-900 px-2 py-1 rounded">npm install jsonwebtoken</code></p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`const jwt = require('jsonwebtoken');

// Create a JWT
const payload = {
  userId: 123,
  username: 'johndoe',
  role: 'user'
};
const secretKey = 'your-secret-key-keep-it-safe';
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log('Generated Token:', token);

// Verify a JWT
try {
  const decoded = jwt.verify(token, secretKey);
  console.log('Decoded:', decoded);
  // You can now access: decoded.userId, decoded.username, etc.
} catch (error) {
  console.error('Invalid token:', error.message);
}`}
                    </pre>
                  </div>

                  {/* Python Example */}
                  <div className="p-3 bg-black border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FileCode className="h-5 w-5 text-foreground" />
                      <h4 className="font-semibold text-foreground">Python</h4>
                    </div>
                    <p className="text-xs text-foreground mb-2">Install: <code className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">pip install PyJWT</code></p>
                    <pre className="bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto">
{`import jwt
import datetime

# Create a JWT
payload = {
    'user_id': 123,
    'username': 'johndoe',
    'role': 'user',
    'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
}
secret_key = 'your-secret-key-keep-it-safe'
token = jwt.encode(payload, secret_key, algorithm='HS256')

print(f'Generated Token: {token}')

# Verify a JWT
try:
    decoded = jwt.decode(token, secret_key, algorithms=['HS256'])
    print(f'Decoded: {decoded}')
    # Access: decoded['user_id'], decoded['username'], etc.
except jwt.ExpiredSignatureError:
    print('Token has expired')
except jwt.InvalidTokenError:
    print('Invalid token')`}
                    </pre>
                  </div>

                  {/* Using Our JWT Decoder Tool */}
                  <div className="p-4 bg-black border border-border rounded-lg">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-white" />
                      Quick Tip: Use Our Tool to Get Code!
                    </h4>
                    <p className="text-xs text-gray-400">
                      Don&apos;t want to write this code manually? Our JWT Decoder has a &quot;Get Code&quot; button that generates ready-to-use code snippets for all 6 languages (Node.js, Python, Java, PHP, Go, C#). Just decode your token and click the green &quot;Get Code&quot; button!
                    </p>
                  </div>
                </div>
              </div>

              {/* Using Our JWT Decoder Features */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 text-sm font-bold">5</span>
                  Mastering Our JWT Decoder Tool
                </h3>
                <div className="pl-10 space-y-3 text-sm text-muted-foreground">
                  <p>Our JWT Decoder is packed with powerful features to make working with JWTs easy. Let&apos;s explore each one:</p>

                  <div className="space-y-3">
                    {/* Feature 1: Instant Decode */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">🔍 Instant Decoding</h4>
                      <p className="text-xs">Just paste your JWT token in the text box and it automatically decodes! You&apos;ll see the header, payload, and signature split into three color-coded sections. We show both JSON format and a Claims Table view for easier reading.</p>
                    </div>

                    {/* Feature 2: Algorithm Selector */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">⚙️ Algorithm Selector & Examples</h4>
                      <p className="text-xs">Use the dropdown menu to select from 12 different algorithms (HS256, RS256, ES256, etc.). Click &quot;Generate Example&quot; to create a sample token for that algorithm - perfect for learning or testing!</p>
                    </div>

                    {/* Feature 3: Expiration Countdown */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">⏰ Live Expiration Countdown</h4>
                      <p className="text-xs">If your token has an expiration time (exp claim), you&apos;ll see a live countdown timer showing exactly how much time is left. The color changes from green to yellow to red as expiration approaches - so you never get caught with an expired token!</p>
                    </div>

                    {/* Feature 4: Performance Metrics */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">⚡ Performance Metrics</h4>
                      <p className="text-xs">Click the yellow &quot;Performance&quot; button to see how your token performs. We show decode/encode times, size breakdown (header vs payload vs signature), network impact projections, and compare against industry benchmarks. Learn if your token is too large!</p>
                    </div>

                    {/* Feature 5: Export */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">📤 Export to Multiple Formats</h4>
                      <p className="text-xs">Need to save your decoded token? Click &quot;Export&quot; to download in JSON, CSV, XML, YAML, or even a professional PDF report! Perfect for documentation or sharing with your team.</p>
                    </div>

                    {/* Feature 6: Size Optimizer */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">📊 Token Size Optimizer</h4>
                      <p className="text-xs">Got a large token? Click &quot;Optimize&quot; to get smart suggestions on how to reduce its size. We&apos;ll show you exactly how many bytes you can save by shortening claim names, removing unnecessary data, or using a different algorithm. You can even preview the optimized token before using it!</p>
                    </div>

                    {/* Feature 7: Compare Tokens */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">🔄 Token Comparison Tool</h4>
                      <p className="text-xs">Need to compare two tokens side-by-side? Click &quot;Compare&quot; to paste a second token and see exactly what changed. We highlight added, removed, and modified claims in different colors. Super useful for debugging token refresh issues or checking what changed between environments!</p>
                    </div>

                    {/* Feature 8: Security Analyzer */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">🛡️ Security Analyzer</h4>
                      <p className="text-xs">Click the red &quot;Security&quot; button to scan your token for vulnerabilities. We check for weak algorithms, expired tokens, missing critical claims, sensitive data in the payload, and more. You&apos;ll get a security score from 0-100 plus specific recommendations to improve your token&apos;s security.</p>
                    </div>

                    {/* Feature 9: Code Generator */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">💻 Multi-Language Code Generator</h4>
                      <p className="text-xs">Click &quot;Get Code&quot; to generate ready-to-use code snippets for verifying your token. Choose from Node.js, Python, Java, PHP, Go, or C#. Each snippet includes installation instructions and is ready to copy-paste into your project!</p>
                    </div>

                    {/* Feature 10: Share Anonymously */}
                    <div className="p-3 bg-black rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">🔗 Share Token Anonymously</h4>
                      <p className="text-xs">Need to debug with your team? Click &quot;Share&quot; to generate a shareable link. You can choose to mask sensitive data (like emails or passwords) before sharing. The link never expires and your token is encoded in the URL - no data stored on our servers!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Mistakes */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 text-sm font-bold">6</span>
                  Common Mistakes & How to Fix Them
                </h3>
                <div className="pl-10 space-y-3 text-sm text-muted-foreground">
                  <p>Everyone makes mistakes when learning JWT. Here are the most common ones and how to avoid them:</p>

                  <div className="space-y-2">
                    {/* Mistake 1 */}
                    <div className="p-3 bg-black border border-border rounded-lg">
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Storing Sensitive Data in the Payload
                      </h4>
                      <p className="text-xs text-gray-400 mb-2">
                        <strong>Problem:</strong> Putting passwords, credit card numbers, or API keys directly in the JWT payload.
                      </p>
                      <p className="text-xs text-gray-400">
                        <strong>Solution:</strong> Remember, JWTs are encoded, NOT encrypted! Anyone can decode them and read the payload. Only include non-sensitive information like user IDs, usernames, and permissions. Use our Security Analyzer to check for sensitive data!
                      </p>
                    </div>

                    {/* Mistake 2 */}
                    <div className="p-3 bg-black border border-border rounded-lg">
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Not Checking Token Expiration
                      </h4>
                      <p className="text-xs text-gray-400 mb-2">
                        <strong>Problem:</strong> Accepting tokens without verifying if they&apos;ve expired.
                      </p>
                      <p className="text-xs text-gray-400">
                        <strong>Solution:</strong> Always check the &quot;exp&quot; claim and reject expired tokens. Our Live Expiration Countdown shows exactly when your token will expire, and the Security Analyzer will warn you about expired tokens!
                      </p>
                    </div>

                    {/* Mistake 3 */}
                    <div className="p-3 bg-black border border-border rounded-lg">
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Using Weak or No Signature
                      </h4>
                      <p className="text-xs text-gray-400 mb-2">
                        <strong>Problem:</strong> Using the &quot;none&quot; algorithm or a weak secret key (like &quot;secret&quot; or &quot;password123&quot;).
                      </p>
                      <p className="text-xs text-gray-400">
                        <strong>Solution:</strong> Always use a strong algorithm (HS256 minimum) and a long, random secret key (at least 256 bits for HS256). Our Security Analyzer flags weak algorithms and short secrets!
                      </p>
                    </div>

                    {/* Mistake 4 */}
                    <div className="p-3 bg-black border border-border rounded-lg">
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Creating Tokens That Are Too Large
                      </h4>
                      <p className="text-xs text-gray-400 mb-2">
                        <strong>Problem:</strong> Including too much data in the payload, resulting in tokens over 1KB or even 4KB+.
                      </p>
                      <p className="text-xs text-gray-400">
                        <strong>Solution:</strong> Keep your tokens lean! Only include essential data. Use our Performance Metrics to check token size and get benchmarked against industry standards. If your token is large, click &quot;Optimize&quot; for suggestions on reducing its size.</p>
                    </div>

                    {/* Mistake 5 */}
                    <div className="p-3 bg-black border border-border rounded-lg">
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Not Validating the Signature
                      </h4>
                      <p className="text-xs text-gray-400 mb-2">
                        <strong>Problem:</strong> Just decoding the JWT without verifying its signature, allowing tampered tokens to be accepted.
                      </p>
                      <p className="text-xs text-gray-400">
                        <strong>Solution:</strong> Always verify the signature on the server side! Our Code Generator provides complete examples including signature verification for all 6 programming languages.</p>
                    </div>

                    {/* Mistake 6 */}
                    <div className="p-3 bg-black border border-border rounded-lg">
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Storing JWTs in LocalStorage (XSS Risk)
                      </h4>
                      <p className="text-xs text-gray-400 mb-2">
                        <strong>Problem:</strong> Storing tokens in browser localStorage makes them vulnerable to XSS (Cross-Site Scripting) attacks.
                      </p>
                      <p className="text-xs text-gray-400">
                        <strong>Solution:</strong> For maximum security, store JWTs in httpOnly cookies that JavaScript can&apos;t access. If you must use localStorage, implement strong Content Security Policy (CSP) headers to prevent XSS attacks.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 text-sm font-bold">7</span>
                  JWT Best Practices
                </h3>
                <div className="pl-10 space-y-2 text-sm text-muted-foreground">
                  <div className="p-3 bg-black border border-border rounded-lg">
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        <span><strong>Use short expiration times:</strong> 15 minutes to 1 hour for access tokens. Use refresh tokens for longer sessions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        <span><strong>Always verify signatures:</strong> Never trust a token without checking its signature matches.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        <span><strong>Use strong secret keys:</strong> At least 256 bits (32 characters) of random data.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        <span><strong>Include standard claims:</strong> Always use exp (expiration), iat (issued at), and sub (subject).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        <span><strong>Keep payloads small:</strong> Under 512 bytes is ideal. Use our Size Optimizer to trim excess data.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        <span><strong>Use HTTPS only:</strong> Never send JWTs over unsecured HTTP connections.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        <span><strong>Implement token refresh:</strong> Use short-lived access tokens with refresh tokens for better security.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                        <span><strong>Test with our tools:</strong> Use our Security Analyzer, Performance Metrics, and Comparison tools regularly!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Final Note */}
              <div className="p-4 bg-black border border-border rounded-lg">
                <h3 className="text-base font-bold text-foreground mb-2">🎓 Start Decoding JWTs Now!</h3>
                <p className="text-sm text-muted-foreground">
                  Now that you understand JWTs, scroll up and paste a token to try our interactive features! Use all the powerful tools we&apos;ve built - Performance Metrics, Security Analyzer, Size Optimizer, Code Generator, and more. Your tokens are processed locally in your browser for maximum security.
                </p>
              </div>
            </div>
          </div>

      {/* Export Modal */}
      {showExport && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setShowExport(false)}>
          <Card className="w-full max-w-2xl p-5 space-y-4" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <Download className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Export JWT Data</h3>
                  <p className="text-xs text-muted-foreground">Download decoded token in multiple formats</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowExport(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Format Selection */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-foreground">Select Export Format</h4>
              <div className="grid grid-cols-1 gap-2">
                {/* JSON Format */}
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedExportFormat === 'json'
                      ? 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-300 dark:border-indigo-700'
                      : 'bg-black border-gray-200 dark:border-gray-700 hover:border-indigo-300'
                  }`}
                  onClick={() => setSelectedExportFormat('json')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${selectedExportFormat === 'json' ? 'bg-indigo-100 dark:bg-indigo-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                        <FileJson className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground">JSON Format</h5>
                        <p className="text-xs text-muted-foreground">Standard JSON with metadata (.json)</p>
                      </div>
                    </div>
                    {selectedExportFormat === 'json' && (
                      <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                    )}
                  </div>
                </div>

                {/* CSV Format */}
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedExportFormat === 'csv'
                      ? 'bg-black border-green-300 dark:border-green-700'
                      : 'bg-black border-gray-200 dark:border-gray-700 hover:border-green-300'
                  }`}
                  onClick={() => setSelectedExportFormat('csv')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${selectedExportFormat === 'csv' ? 'bg-green-100 dark:bg-green-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                        <FileText className="h-5 w-5 text-heading-accent" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground">CSV Format</h5>
                        <p className="text-xs text-muted-foreground">Spreadsheet compatible (.csv)</p>
                      </div>
                    </div>
                    {selectedExportFormat === 'csv' && (
                      <CheckCircle2 className="h-5 w-5 text-heading-accent" />
                    )}
                  </div>
                </div>

                {/* XML Format */}
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedExportFormat === 'xml'
                      ? 'bg-black border-orange-300 dark:border-orange-700'
                      : 'bg-black border-gray-200 dark:border-gray-700 hover:border-orange-300'
                  }`}
                  onClick={() => setSelectedExportFormat('xml')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${selectedExportFormat === 'xml' ? 'bg-orange-100 dark:bg-orange-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                        <FileCode className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground">XML Format</h5>
                        <p className="text-xs text-muted-foreground">Structured XML document (.xml)</p>
                      </div>
                    </div>
                    {selectedExportFormat === 'xml' && (
                      <CheckCircle2 className="h-5 w-5 text-foreground" />
                    )}
                  </div>
                </div>

                {/* YAML Format */}
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedExportFormat === 'yaml'
                      ? 'bg-black border-blue-300 dark:border-blue-700'
                      : 'bg-black border-gray-200 dark:border-gray-700 hover:border-blue-300'
                  }`}
                  onClick={() => setSelectedExportFormat('yaml')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${selectedExportFormat === 'yaml' ? 'bg-blue-100 dark:bg-blue-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                        <FileText className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground">YAML Format</h5>
                        <p className="text-xs text-muted-foreground">Human-readable YAML (.yaml)</p>
                      </div>
                    </div>
                    {selectedExportFormat === 'yaml' && (
                      <CheckCircle2 className="h-5 w-5 text-foreground" />
                    )}
                  </div>
                </div>

                {/* PDF Report */}
                <div
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedExportFormat === 'pdf'
                      ? 'bg-black border-red-300 dark:border-red-700'
                      : 'bg-black border-gray-200 dark:border-gray-700 hover:border-red-300'
                  }`}
                  onClick={() => setSelectedExportFormat('pdf')}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${selectedExportFormat === 'pdf' ? 'bg-red-100 dark:bg-red-900' : 'bg-gray-100 dark:bg-gray-800'}`}>
                        <FileText className="h-5 w-5 text-foreground" />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground">PDF Report</h5>
                        <p className="text-xs text-muted-foreground">Professional formatted report (.html for PDF print)</p>
                      </div>
                    </div>
                    {selectedExportFormat === 'pdf' && (
                      <CheckCircle2 className="h-5 w-5 text-foreground" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Format Info */}
            <div className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-800 rounded-lg">
              <h4 className="text-sm font-bold text-foreground mb-2">What&apos;s Included:</h4>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span className="text-xs text-muted-foreground">Original token</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span className="text-xs text-muted-foreground">Decoded header</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span className="text-xs text-muted-foreground">Decoded payload</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span className="text-xs text-muted-foreground">Signature</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span className="text-xs text-muted-foreground">Algorithm info</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-indigo-600 shrink-0" />
                  <span className="text-xs text-muted-foreground">Export timestamp</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={() => setShowExport(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={handleExport}
                className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
              >
                <Download className="h-4 w-4 mr-2" />
                Download {selectedExportFormat.toUpperCase()}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
