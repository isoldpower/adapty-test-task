import { Card } from "@shared/ui-toolkit/card"
import { Quote } from "lucide-react"

interface BenefitCardProps {
  title: string
  description: string
  testimonial: {
    quote: string
    author: string
    role: string
    avatar: string
  }
  image: string
  companyReference?: {
    name: string
    logo: string
    description: string
  }
  reversed?: boolean
}

export function BenefitCard({
  title,
  description,
  testimonial,
  image,
  companyReference,
  reversed = false,
}: BenefitCardProps) {
  return (
    <div className={`grid gap-8 md:gap-12 lg:grid-cols-2 ${reversed ? "lg:flex-row-reverse" : ""}`}>
      <div className={`flex flex-col justify-center ${reversed ? "lg:order-2" : ""}`}>
        <h3 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">{title}</h3>
        <p className="mb-6 text-lg text-muted-foreground">{description}</p>

        <Card className="border-2 border-accent/20 bg-accent/5 p-6">
          <Quote className="mb-3 h-6 w-6 text-accent/40" />
          <blockquote className="mb-4 leading-relaxed">{testimonial.quote}</blockquote>
          <div className="flex items-center gap-3">
            <img
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.author}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold">{testimonial.author}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          </div>
        </Card>

        {companyReference && (
          <Card className="mt-6 border-2 p-6">
            <div className="flex items-center gap-4">
              <img
                src={companyReference.logo || "/placeholder.svg"}
                alt={companyReference.name}
                width={120}
                height={40}
                className="grayscale"
              />
              <div className="flex-1">
                <div className="font-semibold">{companyReference.description}</div>
                <div className="text-sm text-accent">Learn more →</div>
              </div>
            </div>
          </Card>
        )}
      </div>

      <div className={reversed ? "lg:order-1" : ""}>
        <div className="relative overflow-hidden rounded-xl border-2 bg-muted">
          <img src={image || "/placeholder.svg"} alt={title} width={600} height={400} className="w-full" />
        </div>
      </div>
    </div>
  )
}
