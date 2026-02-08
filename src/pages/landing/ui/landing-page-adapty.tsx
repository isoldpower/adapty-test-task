import { AdaptyContainer, AdaptySection } from "@entities/landing/adapty-section";
import { AchievementsSection } from "@processes/landing/achievements";
import { ProductBenefitsSection } from "@processes/landing/benefits-section";
import { CaseStudySection } from "@processes/landing/casestudy-section";
import { EnterpriseSection } from "@processes/landing/enterprise-section";
import { LandingHeroSection } from "@processes/landing/hero-section";
import { ProductContentsSection } from "@processes/landing/product-contents";
import { SDKPlatformsList, SDKIntegrationSection } from "@processes/landing/sdk-integration";
import { CEOTestimonialsSection } from "@processes/landing/testimonials-section";
import { TrustBadgesSection } from "@processes/landing/trust-badges-section";


export function LandingPageAdapty() {
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
            <AdaptySection variant='default'>
                <AdaptyContainer>
                    <ProductBenefitsSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='accent'>
                <AdaptyContainer>
                    <CEOTestimonialsSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='default'>
                <AdaptyContainer>
                    <EnterpriseSection />
                </AdaptyContainer>
            </AdaptySection>
            <AdaptySection variant='default'>
                <AdaptyContainer>
                    <CaseStudySection />
                </AdaptyContainer>
            </AdaptySection>
        </>
    );
}

export default LandingPageAdapty;
