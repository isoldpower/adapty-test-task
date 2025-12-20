import { Container } from "@shared/ui-toolkit/container"
import { BenefitCard } from "@entities/landing/benefit"

const BENEFITS = [
  {
    title: "Reduce Churn by 30%",
    description:
      "Smart retry logic and grace periods automatically recover failed payments, keeping your subscribers active and revenue flowing.",
    testimonial: {
      quote: "We reduced involuntary churn from 12% to 4% in just two months. The ROI was immediate.",
      author: "Marcus Johnson",
      role: "Head of Growth at FitnessPro",
      avatar: "/professional-man-smiling.png",
    },
    image: "/dashboard-showing-churn-reduction-metrics.jpg",
  },
  {
    title: "Increase Revenue by 40%",
    description:
      "A/B test pricing, offers, and paywall designs in real-time. Data-driven optimization means more conversions and higher LTV.",
    testimonial: {
      quote:
        "Our subscription revenue grew 40% after implementing dynamic pricing. The A/B testing framework is a game-changer.",
      author: "Emily Rodriguez",
      role: "CEO at LearnHub",
      avatar: "/professional-woman-executive.png",
    },
    image: "/revenue-growth-chart-with-a-b-testing-results.jpg",
  },
  {
    title: "Launch Faster, Iterate Smarter",
    description:
      "Update paywalls, pricing, and offers without app releases. Make changes in the dashboard and see results instantly.",
    testimonial: {
      quote:
        "We can now test new pricing strategies weekly instead of monthly. This agility gives us a huge competitive advantage.",
      author: "David Kim",
      role: "Product Lead at MeditateNow",
      avatar: "/asian-professional-man.png",
    },
    image: "/visual-paywall-builder-interface.jpg",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "SOC 2 Type II certified, GDPR compliant, and PCI DSS ready. Your customers' data is protected with bank-level security.",
    testimonial: {
      quote:
        "Security was our top concern. The compliance certifications and audit reports gave us complete confidence.",
      author: "Rachel Foster",
      role: "CTO at HealthTrack",
      avatar: "/professional-woman-tech-executive.png",
    },
    image: "/security-compliance-badges-and-encryption.jpg",
  },
  {
    title: "Seamless Migration Support",
    description:
      "Migrating from another provider? Our team handles the entire process with zero downtime and dedicated engineering support.",
    testimonial: {
      quote:
        "The migration from our old system was surprisingly smooth. Their team handled everything, and we had zero downtime.",
      author: "Alex Thompson",
      role: "VP Engineering at StreamFit",
      avatar: "/professional-man-glasses.png",
    },
    image: "/migration-process-diagram-with-checkmarks.jpg",
    companyReference: {
      name: "RevenueCat",
      logo: "/revenuecat-logo.jpg",
      description: "Switch from RevenueCat",
    },
  },
]

export function BenefitsWidget() {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Built for Growth</h2>
          <p className="text-lg text-muted-foreground">Real results from real companies</p>
        </div>

        <div className="space-y-20">
          {BENEFITS.map((benefit, index) => (
            <BenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              testimonial={benefit.testimonial}
              image={benefit.image}
              companyReference={benefit.companyReference}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
