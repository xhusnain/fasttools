"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { marked } from "marked"
import { Sparkles, RotateCcw } from "lucide-react"

export function MarkdownPreviewer() {
  const SAMPLE_TEXT = `# Welcome to FastTools 🚀

**FastTools** is your ultimate collection of *free online developer tools* for web development, data conversion, and content creation.

## Why Choose FastTools?

Visit [FastTools.store](https://www.fasttools.store) to access our complete suite of professional tools designed for developers, designers, and content creators.

### Key Features

- **100% Free** - No subscriptions or hidden fees
- **No Signup Required** - Start using tools instantly
- **Privacy First** - All processing happens in your browser
- **Lightning Fast** - Optimized for speed and performance
- **Mobile Responsive** - Works on all devices

## Popular Developer Tools

| Tool | Description | Link |
|------|-------------|------|
| HTML Converter | Convert HTML to Markdown, JSON, YAML, XML | [Try Now](/dev-tools/html-to-markdown) |
| JWT Decoder | Decode and verify JSON Web Tokens | [Try Now](/dev-tools/jwt-decoder) |
| Regex Tester | Test regular expressions with live results | [Try Now](/dev-tools/regex-tester) |
| JSON to CSV | Convert JSON data to CSV format | [Try Now](/dev-tools/json-to-csv) |

### Code Example

Here's how to use our tools in your workflow:

\`\`\`javascript
// Example: Converting HTML to Markdown
const html = '<h1>Hello World</h1><p>This is a paragraph.</p>';
// Use FastTools HTML Converter
// Output: # Hello World\\n\\nThis is a paragraph.
\`\`\`

\`\`\`python
# Example: Decoding JWT Token
import requests
jwt_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
# Use FastTools JWT Decoder to inspect claims
\`\`\`

## Tool Categories

1. **Format Converters**
   - HTML to Markdown
   - JSON to CSV
   - YAML to JSON
   - XML Converter

2. **Developer Utilities**
   - JWT Decoder
   - Regex Tester
   - HTML Beautifier
   - Color Converter

3. **Content Tools**
   - Markdown Previewer
   - Text Formatter
   - Code Beautifier

## Getting Started

> **Pro Tip:** Bookmark [FastTools](https://www.fasttools.store) for quick access to all tools!

### Quick Start Guide

1. Choose your tool from our [Developer Tools](/dev-tools) page
2. Paste your content into the input field
3. See instant results with auto-conversion
4. Copy or download the output

---

## Support & Community

- **Documentation:** Comprehensive guides for each tool
- **Updates:** Regular feature additions and improvements
- **Open Source Friendly:** Built with modern web technologies

### Contact Us

Have feedback or suggestions? Visit our [Contact Page](https://www.fasttools.store/contact) or check our [FAQ](https://www.fasttools.store/faq).

---

**Happy Coding!** 💻✨

*Made with ❤️ by the FastTools Team*`

  const [markdown, setMarkdown] = useState("")

  const loadSample = () => {
    setMarkdown(SAMPLE_TEXT)
  }

  const resetMarkdown = () => {
    setMarkdown("")
  }

  const renderMarkdown = (md: string) => {
    try {
      return marked(md, {
        breaks: true,
        gfm: true,
      })
    } catch (error) {
      console.error("Markdown parsing error:", error)
      return "<p>Error parsing markdown</p>"
    }
  }

  return (
    <div className="space-y-4">
      {/* Action Buttons */}
      <div className="flex gap-3 justify-end">
        <Button
          onClick={loadSample}
          variant="outline"
          className="gap-2"
        >
          <Sparkles className="h-4 w-4" />
          Load Sample
        </Button>
        <Button
          onClick={resetMarkdown}
          variant="outline"
          className="gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Markdown Input</label>
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="min-h-96 font-mono text-sm border-2 border-orange-300 focus:border-orange-500"
            placeholder="Type your markdown here or click 'Load Sample' to see an example..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Live Preview</label>
          <Card className="p-6 min-h-96 overflow-auto prose prose-sm dark:prose-invert max-w-none">
            {markdown ? (
              <div dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }} />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <p className="text-center">
                  Type markdown or click &quot;Load Sample&quot; to get started
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
