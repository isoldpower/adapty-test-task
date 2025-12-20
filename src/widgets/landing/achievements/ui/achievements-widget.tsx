import { Container } from "@shared/ui-toolkit/container"
import { Card } from "@shared/ui-toolkit/card"

const METRICS = [
  { value: "$2.5B+", label: "Tracked Revenue", description: "Monthly recurring revenue managed" },
  { value: "99.99%", label: "Historical Uptime", description: "Enterprise-grade reliability" },
  { value: "50M+", label: "Users Served", description: "Active subscribers worldwide" },
  { value: "1B+", label: "API Calls / Month", description: "Handling scale effortlessly" },
]

export function AchievementsWidget() {
  return (
    <section className="border-y bg-muted/30 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Trusted at Scale</h2>
          <p className="text-lg text-muted-foreground">Industry-leading performance metrics</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {METRICS.map((metric) => (
            <Card key={metric.label} className="border-2 p-6 text-center">
              <div className="mb-2 bg-gradient-to-br from-accent to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                {metric.value}
              </div>
              <div className="mb-1 font-semibold">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
