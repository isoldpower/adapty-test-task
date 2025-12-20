import { Card } from "@shared/ui-toolkit/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatar: string
}

export function TestimonialCard({ quote, author, role, avatar }: TestimonialCardProps) {
  return (
    <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-purple-500/5 p-8">
      <Quote className="mb-4 h-8 w-8 text-accent/40" />
      <blockquote className="mb-6 text-lg leading-relaxed">{quote}</blockquote>
      <div className="flex items-center gap-4">
        <img src={avatar || "/placeholder.svg"} alt={author} width={60} height={60} className="rounded-full" />
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </Card>
  )
}
