import { Container } from "@shared/ui-toolkit/container"
import { TestimonialCarousel } from "@features/landing/testimonial-carousel"

const CEO_TESTIMONIALS = [
  {
    quote:
      "Within 3 months of switching, our MRR increased by 45%. The analytics alone are worth 10x what we pay. This platform is essential infrastructure for any subscription business.",
    author: "Jennifer Martinez",
    role: "CEO & Founder",
    company: "YogaFlow",
    avatar: "/woman-ceo-professional-portrait.jpg",
    metrics: { label: "MRR Growth", value: "+45%" },
  },
  {
    quote:
      "The best investment we made this year. We recovered $120K in failed payments in Q1 alone. The platform paid for itself in the first month and continues to drive revenue growth.",
    author: "Tom Williams",
    role: "CEO",
    company: "PodcastPro",
    avatar: "/man-ceo-with-beard.jpg",
    metrics: { label: "Recovered Revenue", value: "$120K" },
  },
  {
    quote:
      "As a developer-first company, we appreciate the quality of the SDKs and documentation. But what really impressed us was the A/B testing framework. We optimized our paywall and saw a 32% increase in conversions.",
    author: "Priya Patel",
    role: "Co-Founder & CEO",
    company: "CodeLearn",
    avatar: "/indian-woman-ceo-professional.jpg",
    metrics: { label: "Conversion Rate", value: "+32%" },
  },
  {
    quote:
      "We were spending 40% of our engineering time maintaining subscription infrastructure. Now we focus on our product while this platform handles everything seamlessly. It's been transformational for our team.",
    author: "Michael Chang",
    role: "CEO & Co-Founder",
    company: "SleepWell",
    avatar: "/asian-man-ceo-smiling.jpg",
    metrics: { label: "Time Saved", value: "40%" },
  },
]

export function TestimonialsWidget() {
  return (
    <section className="border-y bg-gradient-to-b from-muted/30 via-background to-muted/30 py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Loved by CEOs & Founders</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of companies growing their subscription revenue
          </p>
        </div>

        <TestimonialCarousel testimonials={CEO_TESTIMONIALS} />
      </Container>
    </section>
  )
}
