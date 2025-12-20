import { useCallback, useState } from "react"
import { Card } from "@shared/ui-toolkit/card"
import { Button } from "@shared/ui-toolkit/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  metrics: { label: string; value: string }
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);
  const previous = useCallback(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const current = testimonials[currentIndex]

  return (
    <div className="relative">
      <Card className="border-2 p-6 sm:p-8 md:p-12">
        <Quote className="mb-6 h-12 w-12 text-accent/20" />
        <blockquote className="mb-8 text-lg leading-relaxed sm:text-xl md:text-2xl">{current.quote}</blockquote>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <img
              src={current.avatar || "/placeholder.svg"}
              alt={current.author}
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold">{current.author}</div>
              <div className="text-sm text-muted-foreground">{current.role}</div>
              <div className="text-sm font-medium text-accent">{current.company}</div>
            </div>
          </div>
          <div className="rounded-lg bg-accent/10 px-6 py-3 text-center">
            <div className="text-2xl font-bold text-accent">{current.metrics.value}</div>
            <div className="text-sm text-muted-foreground">{current.metrics.label}</div>
          </div>
        </div>
      </Card>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" onClick={previous} aria-label="Previous testimonial">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => { setCurrentIndex(index); }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-accent" : "w-2 bg-muted-foreground/20"
              }`}
              aria-label={`Go to testimonial ${(index + 1).toString()}`}
            />
          ))}
        </div>
        <Button variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
