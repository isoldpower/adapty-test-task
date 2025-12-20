import { Container } from "@shared/ui-toolkit/container"
import { Button } from "@shared/ui-toolkit/button"
import { Github, Twitter, Linkedin, Youtube } from "lucide-react"

const FOOTER_SECTIONS = [
  {
    title: "Paywall Management",
    links: ["Visual Builder", "A/B Testing", "Pricing Strategies", "Localization"],
  },
  {
    title: "Roles",
    links: ["For Developers", "For Marketers", "For Product Teams", "For Finance"],
  },
  {
    title: "Migrate From",
    links: ["RevenueCat", "Stripe Billing", "In-App Purchase", "Custom Solution"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Community"],
  },
  {
    title: "Analytics",
    links: ["Revenue Dashboard", "Cohort Analysis", "Retention Reports", "Custom Metrics"],
  },
  {
    title: "Infrastructure",
    links: ["Security", "Compliance", "SLA", "Status Page"],
  },
  {
    title: "Stages",
    links: ["Startup", "Growth", "Enterprise", "Pricing"],
  },
  {
    title: "Cases",
    links: ["Success Stories", "Customer Reviews", "ROI Calculator", "Compare"],
  },
  {
    title: "SDK",
    links: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact"],
  },
]

const SOCIAL_LINKS = [
  { icon: Github, url: "#", label: "GitHub" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
  { icon: Youtube, url: "#", label: "YouTube" },
]

export function FooterWidget() {
  return (
    <footer className="border-t bg-muted/30">
      <Container className="py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Grow Your Revenue?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Join thousands of companies using our platform to power their subscriptions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent">
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="mb-12 grid gap-8 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© 2025 PaywallSDK. All rights reserved.</p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
