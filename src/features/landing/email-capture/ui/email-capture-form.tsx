"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@shared/ui-toolkit/button"
import { Input } from "@shared/ui-toolkit/input"
import { ArrowRight } from "lucide-react"

export function EmailCaptureForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Email submitted:", email)
    setIsSubmitted(true)
    setTimeout(() => { setIsSubmitted(false); }, 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch relative flex-grow w-[330px]">
      <Input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => { setEmail(e.target.value); }}
        required
        className="h-[52px] text-2xl! pl-[20px] bg-a-bg-website"
      />
      <Button type="submit" size="lg" className="absolute h-[calc(52px-1rem)] right-2 top-2 gap-2 text-2xl whitespace-nowrap">
        {isSubmitted ? "Success!" : "Start for free"}
        {!isSubmitted && <ArrowRight className="h-4 w-4" />}
      </Button>
    </form>
  )
}
