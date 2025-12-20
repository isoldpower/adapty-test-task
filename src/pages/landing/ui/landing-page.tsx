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
import {AdaptyContainer, AdaptySection} from "@entities/landing/adapty-section";

export function LandingPage() {
    return (
        <main className="min-h-screen">
            <HeroWidget/>
            <TrustBadgesWidget/>
            <ProductContentsWidget/>
            <AchievementsWidget/>
            <SdkWidget/>
            <AdaptySection className="bg-a-bg-accent py-0!">
                <AdaptyContainer>
                    <hr className='accent-a-white w-full opacity-10'/>
                </AdaptyContainer>
            </AdaptySection>
            <SdkPlatformsWidget/>
            <BenefitsWidget/>
            <TestimonialsWidget/>
            <PlatformBenefitsWidget/>
            <RealCasesWidget/>
            <FooterWidget/>
        </main>
    )
}
