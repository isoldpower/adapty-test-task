import { Container } from "@shared/ui-toolkit/container"
import { CaseStudyCard } from "@entities/landing/case-study"
import { Button } from "@shared/ui-toolkit/button"
import { ArrowRight } from "lucide-react"

const CASE_STUDIES = [
  {
    company: "MindfulApp",
    logo: "/mindful-app-logo.jpg",
    industry: "Health & Wellness",
    result: "+156% Revenue Growth",
    description: "How MindfulApp 2.5x their subscription revenue in 6 months",
    image: "/meditation-app-interface.png",
  },
  {
    company: "LearnHub",
    logo: "/learnhub-logo.jpg",
    industry: "Education",
    result: "40% Lower Churn",
    description: "Reducing churn and increasing LTV with smart retention",
    image: "/online-learning-dashboard.jpg",
  },
  {
    company: "FitnessPro",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Fitness",
    result: "$2M ARR in Year 1",
    description: "From zero to $2M ARR with optimized paywall strategies",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    company: "PodcastPro",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Media",
    result: "3x Conversion Rate",
    description: "Tripling trial-to-paid conversion with A/B testing",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    company: "SleepWell",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Health Tech",
    result: "+89% LTV",
    description: "Increasing customer lifetime value with dynamic pricing",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    company: "CodeLearn",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "EdTech",
    result: "500K Users",
    description: "Scaling to half a million paid subscribers",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    company: "YogaFlow",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Wellness",
    result: "$120K Recovered",
    description: "Recovering failed payments and reducing involuntary churn",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    company: "StreamFit",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Fitness Streaming",
    result: "Zero Downtime",
    description: "Migrating 100K subscribers with seamless transition",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    company: "HealthTrack",
    logo: "/placeholder.svg?height=60&width=120",
    industry: "Healthcare",
    result: "SOC 2 Compliant",
    description: "Meeting enterprise security requirements for healthcare",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function RealCasesWidget() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Real Success Stories</h2>
          <p className="text-lg text-muted-foreground">See how companies like yours are winning with our platform</p>
        </div>

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.company} {...caseStudy} />
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            View All Case Studies
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
