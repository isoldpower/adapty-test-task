import { Container } from "@shared/ui-toolkit/container"
import { Card } from "@shared/ui-toolkit/card"
import { Shield, Zap, HeadphonesIcon, Award } from "lucide-react"
import { Badge } from "@shared/ui-toolkit/badge"

const PLATFORM_FEATURES = [
  {
    icon: Shield,
    title: "Secure",
    description: "SOC 2 Type II certified with bank-level encryption. GDPR and CCPA compliant by default.",
  },
  {
    icon: Zap,
    title: "Reliable",
    description: "99.99% uptime SLA with multi-region redundancy. Your revenue never sleeps.",
  },
  {
    icon: HeadphonesIcon,
    title: "Responsive",
    description: "24/7 engineering support with <15 min response time for enterprise customers.",
  },
]

const AWARDS = [
  "G2 Leader 2024",
  "Best Developer Tool 2024",
  "Product Hunt #1 Product of the Day",
  "TechCrunch Disrupt Winner",
  "Apple Design Award Finalist",
  "Fast Company Innovation Award",
]

export function PlatformBenefitsWidget() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <Container>
        <div className="mb-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PLATFORM_FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-2 p-8 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-accent/10 p-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        <Card className="border-2 bg-gradient-to-br from-accent/5 to-purple-500/5 p-8 text-center sm:p-10 md:p-12">
          <Award className="mx-auto mb-4 h-12 w-12 text-accent" />
          <h3 className="mb-4 text-3xl font-bold">Award-Winning Platform</h3>
          <p className="mb-8 text-muted-foreground">Recognized by industry leaders and loved by developers worldwide</p>
          <div className="flex flex-wrap justify-center gap-3">
            {AWARDS.map((award) => (
              <Badge key={award} variant="secondary" className="px-4 py-2 text-sm font-medium">
                {award}
              </Badge>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  )
}
