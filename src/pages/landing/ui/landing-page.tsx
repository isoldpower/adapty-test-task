import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import { BenefitsWidget } from "@widgets/landing/benefits"
import { TestimonialsWidget } from "@widgets/landing/testimonials"
import { PlatformBenefitsWidget } from "@widgets/landing/platform-benefits"
import { RealCasesWidget } from "@widgets/landing/real-cases"
import { FooterWidget } from "@widgets/landing/footer"
import { LandingHeroSection } from "@processes/landing/hero-section";
import { TrustBadgesSection } from "@processes/landing/trust-badges-section";
import { ProductContentsSection } from "@processes/landing/product-contents";
import { AchievementsSection } from "@processes/landing/achievements";
import { SDKPlatformsList, SDKIntegrationSection } from "@processes/landing/sdk-integration";


export function LandingPage() {
    return (
        <>
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
            <AdaptySection variant='default'>
                <AdaptyContainer>
                    <ProductContentsSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='cold'>
                <AdaptyContainer>
                    <AchievementsSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent'>
                <AdaptyContainer>
                    <SDKIntegrationSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent' className="py-0!">
                <AdaptyContainer>
                    <hr className='accent-a-white w-full opacity-10' />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent'>
                <AdaptyContainer>
                    <SDKPlatformsList />
                </AdaptyContainer>
            </AdaptySection>
            <BenefitsWidget />
            <TestimonialsWidget />
            <PlatformBenefitsWidget />
            <RealCasesWidget />
            <FooterWidget />
        </>
    );
}

export default LandingPage;
