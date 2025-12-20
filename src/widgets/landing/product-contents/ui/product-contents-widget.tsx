import { Container } from "@shared/ui-toolkit/container"
import { Card } from "@shared/ui-toolkit/card"
import { Code2, BarChart3, TestTube2 } from "lucide-react"

const PRODUCT_FEATURES = [
  {
    icon: Code2,
    title: "SDK for Developers",
    description:
      "Type-safe SDKs for 10+ platforms. Integrate subscriptions in minutes with comprehensive documentation and code examples.",
    highlights: ["Cross-platform", "Type-safe", "Well-documented"],
  },
  {
    icon: BarChart3,
    title: "Analytics for App Owners",
    description:
      "Real-time revenue analytics, cohort analysis, and subscription metrics. Make data-driven decisions with confidence.",
    highlights: ["Real-time data", "Revenue insights", "Cohort analysis"],
  },
  {
    icon: TestTube2,
    title: "Builder & A/B Testing",
    description:
      "Visual paywall builder and A/B testing framework. Optimize conversion rates without deploying new code.",
    highlights: ["No-code builder", "A/B testing", "Instant updates"],
  },
]

export function ProductContentsWidget() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything You Need to Monetize
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">Three powerful tools in one platform</p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCT_FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-2 p-8 transition-all hover:border-accent hover:shadow-lg"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-accent/5 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
                  <p className="mb-4 text-muted-foreground">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
