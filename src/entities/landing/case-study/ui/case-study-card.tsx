import { Card } from "@shared/ui-toolkit/card"
import { Badge } from "@shared/ui-toolkit/badge"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  company: string
  logo: string
  industry: string
  result: string
  description: string
  image: string
}

export function CaseStudyCard({ company, logo, industry, result, description, image }: CaseStudyCardProps) {
  return (
    <a href="#">
      <Card className="group overflow-hidden border-2 transition-all hover:border-accent hover:shadow-lg">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={company}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between">
            <img src={logo || "/placeholder.svg"} alt={company} width={100} height={30} className="h-6 w-auto" />
            <Badge variant="secondary">{industry}</Badge>
          </div>
          <div className="mb-2 text-2xl font-bold text-accent">{result}</div>
          <p className="mb-4 text-muted-foreground">{description}</p>
          <div className="flex items-center gap-2 text-sm font-medium text-accent">
            Read case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </a>
  )
}
