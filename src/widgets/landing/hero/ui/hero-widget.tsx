import { EmailCaptureFeature } from "@features/landing/email-capture"
import { Badge } from "@shared/ui-toolkit/badge"
import { Button } from "@shared/ui-toolkit/button"
import { HeroOverviewMedia, HeroPaywallMedia } from "@widgets/landing/hero-media";
import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import {HeroSectionTitle} from "@entities/landing/section-title";
import {ArrowRight} from "lucide-react";

export function HeroWidget() {
  return (
    <AdaptySection className="relative bg-a-bg-warm overflow-hidden">
      <AdaptyContainer>
        <div className="flex flex-col gap-12 md:flex-row sm:items-center">
          <div className="w-full md:w-[40%] lg:w-1/2 flex-1 flex-col gap-xs text-center sm:text-left">
            <a href="/ebook" className="inline-block">
              <Badge
                variant="outline"
                className="flex flex-row items-center gap-4 mb-6 bg-a-bg-website rounded-full px-4 py-2 text-accent transition-all hover:shadow-md hover:scale-[1.01]"
              >
                <Badge variant="outline" className="text-primary rounded-full px-2 py-0.5 text-lg font-semibold">Ebook</Badge>
                <span className="font-semibold text-2xl text-primary">
                    $100K playbook | download
                </span>
                <ArrowRight className="text-primary h-6 w-6" />
              </Badge>
            </a>
            <HeroSectionTitle>
              Revenue management for in-app purchases
            </HeroSectionTitle>
            <p className="mb-10 text-pretty text-3xl font-medium text-muted-foreground">
              Save months on integrating subscriptions and double your app revenue with paywall management.
            </p>

            <div className="flex flex-col items-start lg:items-center gap-4 lg:flex-row justify-stretch">
              <EmailCaptureFeature />
              <Button variant="link" size="lg" className="whitespace-nowrap bg-transparent text-2xl">
                Book a demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="md:ml-12 w-full md:w-[60%] lg:w-1/2">
            <div className="relative flex flex-col items-center justify-center gap-6">
              <HeroOverviewMedia />
              <div className="absolute top-0 bottom-0 left-0 flex items-center max-w-[30vw] md:max-w-[180px]">
                <HeroPaywallMedia />
              </div>
            </div>
          </div>
        </div>
      </AdaptyContainer>
    </AdaptySection>
  )
}
