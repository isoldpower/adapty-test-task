"use client"

import { useState } from "react"
import { Button } from "@shared/ui-toolkit/button"
import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="absolute right-4 top-4 h-8 w-8" onClick={copyToClipboard}>
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
      <pre className="overflow-x-auto rounded-lg bg-muted p-6 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}
