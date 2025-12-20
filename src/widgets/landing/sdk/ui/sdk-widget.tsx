import { Container } from "@shared/ui-toolkit/container"
import { Card } from "@shared/ui-toolkit/card"
import { SdkCodeViewer } from "@features/landing/sdk-code-viewer"
import { TestimonialCard } from "@entities/landing/testimonial"
import { Github } from "lucide-react"
import { Button } from "@shared/ui-toolkit/button"

export function SdkWidget() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Integrate in Minutes</h2>
          <p className="text-lg text-muted-foreground">Production-ready SDKs for every platform</p>
        </div>

        <div className="mb-12">
          <SdkCodeViewer />
        </div>

        <div className="mb-12">
          <TestimonialCard
            quote="We integrated the SDK in under 30 minutes. The documentation is phenomenal, and the TypeScript support is top-notch. Our subscription revenue increased by 40% in the first quarter."
            author="Sarah Chen"
            role="CTO at MindfulApp"
            avatar="/professional-woman-portrait.png"
          />
        </div>

        <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-purple-500/5 p-8 text-center">
          <Github className="mx-auto mb-4 h-12 w-12 text-accent" />
          <h3 className="mb-2 text-2xl font-bold">Open Source & Community Driven</h3>
          <p className="mb-6 text-muted-foreground">
            Star us on GitHub and join thousands of developers building the future of subscriptions
          </p>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            <Github className="h-5 w-5" />
            View on GitHub
          </Button>
        </Card>
      </Container>
    </section>
  )
}
