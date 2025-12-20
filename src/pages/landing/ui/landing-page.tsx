import { HeroWidget } from "@widgets/landing/hero"
import { TrustBadgesWidget } from "@widgets/landing/trust-badges"
import { ProductContentsWidget } from "@widgets/landing/product-contents"
import { AchievementsWidget } from "@widgets/landing/achievements"
import { SdkWidget } from "@widgets/landing/sdk"
import { SdkPlatformsWidget } from "@widgets/landing/sdk-platforms"
import { BenefitsWidget } from "@widgets/landing/benefits"
import { TestimonialsWidget } from "@widgets/landing/testimonials"
import { PlatformBenefitsWidget } from "@widgets/landing/platform-benefits"
import { RealCasesWidget } from "@widgets/landing/real-cases"
import { FooterWidget } from "@widgets/landing/footer"

export function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroWidget />
      <TrustBadgesWidget />
      <ProductContentsWidget />
      <AchievementsWidget />
      <SdkWidget />
      <SdkPlatformsWidget />
      <BenefitsWidget />
      <TestimonialsWidget />
      <PlatformBenefitsWidget />
      <RealCasesWidget />
      <FooterWidget />
    </main>
  )
}
