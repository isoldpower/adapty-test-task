import { ProductContentsWidget } from "@widgets/landing/product-contents"
import { AchievementsWidget } from "@widgets/landing/achievements"
import { SdkWidget } from "@widgets/landing/sdk"
import { SdkPlatformsWidget } from "@widgets/landing/sdk-platforms"
import { BenefitsWidget } from "@widgets/landing/benefits"
import { TestimonialsWidget } from "@widgets/landing/testimonials"
import { PlatformBenefitsWidget } from "@widgets/landing/platform-benefits"
import { RealCasesWidget } from "@widgets/landing/real-cases"
import { FooterWidget } from "@widgets/landing/footer"
import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import { LandingHeroSection } from "@processes/landing/hero-section";
import { TrustBadgesSection } from "@processes/landing/trust-badges-section";

export function LandingPage() {
    return (
        <main className="min-h-screen">
            <AdaptySection variant='warm'>
                <AdaptyContainer>
                    <LandingHeroSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='warm'>
                <AdaptyContainer>
                    <TrustBadgesSection />
                </AdaptyContainer>
            </AdaptySection>
            <ProductContentsWidget />
            <AchievementsWidget />
            <SdkWidget />
            <AdaptySection variant='accent' className="py-0!">
                <AdaptyContainer>
                    <hr className='accent-a-white w-full opacity-10'/>
                </AdaptyContainer>
            </AdaptySection>
            <SdkPlatformsWidget />
            <BenefitsWidget />
            <TestimonialsWidget />
            <PlatformBenefitsWidget />
            <RealCasesWidget />
            <FooterWidget />
        </main>
    )
}
